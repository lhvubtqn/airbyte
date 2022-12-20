#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#

import re
from typing import Any, List, Mapping, Set, Tuple

from airbyte_cdk.sources.declarative.parsers.custom_exceptions import CircularReferenceException, UndefinedReferenceException


class ManifestReferenceResolver:
    """
    An incoming manifest can contain references to values previously defined.
    This parser will dereference these values to produce a complete ConnectionDefinition.

    References can be defined using a *ref(<arg>) string.
    ```
    key: 1234
    reference: "*ref(key)"
    ```
    will produce the following definition:
    ```
    key: 1234
    reference: 1234
    ```
    This also works with objects:
    ```
    key_value_pairs:
      k1: v1
      k2: v2
    same_key_value_pairs: "*ref(key_value_pairs)"
    ```
    will produce the following definition:
    ```
    key_value_pairs:
      k1: v1
      k2: v2
    same_key_value_pairs:
      k1: v1
      k2: v2
    ```

    The $ref keyword can be used to refer to an object and enhance it with addition key-value pairs
    ```
    key_value_pairs:
      k1: v1
      k2: v2
    same_key_value_pairs:
      $ref: "*ref(key_value_pairs)"
      k3: v3
    ```
    will produce the following definition:
    ```
    key_value_pairs:
      k1: v1
      k2: v2
    same_key_value_pairs:
      k1: v1
      k2: v2
      k3: v3
    ```

    References can also point to nested values.
    Nested references are ambiguous because one could define a key containing with `.`
    in this example, we want to refer to the limit key in the dict object:
    ```
    dict:
        limit: 50
    limit_ref: "*ref(dict.limit)"
    ```
    will produce the following definition:
    ```
    dict
        limit: 50
    limit-ref: 50
    ```

    whereas here we want to access the `nested.path` value.
    ```
    nested:
        path: "first one"
    nested.path: "uh oh"
    value: "ref(nested.path)
    ```
    will produce the following definition:
    ```
    nested:
        path: "first one"
    nested.path: "uh oh"
    value: "uh oh"
    ```

    to resolve the ambiguity, we try looking for the reference key at the top level, and then traverse the structs downward
    until we find a key with the given path, or until there is nothing to traverse.
    """

    ref_tag = "$ref"

    def preprocess_manifest(self, manifest: Mapping[str, Any]):
        """
        :param manifest: incoming manifest that could have references to previously defined components
        :return:
        """
        return self._evaluate_node(manifest, manifest)

    def _evaluate_node(self, node: Any, manifest: Mapping[str, Any], visited: Set[str] = None):
        if isinstance(node, dict):
            evaluated_dict = {k: self._evaluate_node(v, manifest) for k, v in node.items() if not self._is_ref_key(k)}
            if self.ref_tag in node:
                evaluated_ref = self._evaluate_node(node[self.ref_tag], manifest)
                if isinstance(evaluated_ref, str):
                    return evaluated_ref
                else:
                    return evaluated_ref | evaluated_dict
            else:
                return evaluated_dict
        elif isinstance(node, list):
            return [self._evaluate_node(v, manifest) for v in node]
        elif isinstance(node, str) and node.startswith("*ref("):
            if visited is None:
                visited = set()
            if node in visited:
                raise CircularReferenceException(node)
            visited.add(node)
            ret = self._evaluate_node(self._lookup_reference_value(node, manifest), manifest, memo)
            visited.remove(node)
            return ret
        else:
            return node

    def _is_ref_key(self, key):
        return key == self.ref_tag

    def _lookup_reference_value(self, reference: str, manifest: Mapping[str, Any]) -> Any:
        path = re.match("\\*ref\\(([^)]+)\\)", reference).groups()[0]
        try:
            return self._read_value_at_path(path, manifest)
        except (KeyError, IndexError, UndefinedReferenceException):
            raise UndefinedReferenceException(path, reference)

    def _read_value_at_path(self, path: str, manifest: Mapping[str, Any]) -> Any:
        """
        references are ambiguous because one could define a key containing with `.`
        in this example, we want to refer to the limit key in the dict object:
            dict:
                limit: 50
            limit_ref: "*ref(dict.limit)"

        whereas here we want to access the `nested.path` value.
          nested:
            path: "first one"
          nested.path: "uh oh"
          value: "ref(nested.path)

        to resolve the ambiguity, we try looking for the reference key at the top level, and then traverse the structs downward
        until we find a key with the given path, or until there is nothing to traverse.
        """
        if not path:
            raise UndefinedReferenceException
        try:
            return manifest[path]
        except KeyError:
            full_path = path.split(".")
            path, indices = self._get_path_indices(full_path[0])

            manifest_path = manifest[path]
            for index in indices:
                manifest_path = manifest_path[index]
            if len(full_path) == 1:
                return manifest_path
            else:
                return self._read_value_at_path(".".join(full_path[1:]), manifest_path)

    def _get_path_indices(self, path: str) -> Tuple[str, List[int]]:
        path, indices = re.match("([^[]*)((\\[[0-9]+\\])*)", path).groups()[:2]
        return path, [int(idx) for idx in re.split("\\[([0-9]+)\\]", indices) if idx]
