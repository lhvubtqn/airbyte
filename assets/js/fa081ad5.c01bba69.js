"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[89486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(y,u(u({ref:t},c),{},{components:r})):n.createElement(y,u({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},u="SurveyCTO",i={unversionedId:"integrations/sources/surveycto",id:"integrations/sources/surveycto",title:"SurveyCTO",description:"This page guides you through the process of setting up the SurveyCTO source connector.",source:"@site/../docs/integrations/sources/surveycto.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/surveycto",permalink:"/integrations/sources/surveycto",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/surveycto.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"SurveySparrow",permalink:"/integrations/sources/survey-sparrow"},next:{title:"SurveyMonkey",permalink:"/integrations/sources/surveymonkey"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to setup a SurveyCTO Account",id:"how-to-setup-a-surveycto-account",level:2},{value:"Set up the SurveyCTO source connection",id:"set-up-the-surveycto-source-connection",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"surveycto"},"SurveyCTO"),(0,o.kt)("p",null,"This page guides you through the process of setting up the SurveyCTO source connector."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Server Name ",(0,o.kt)("inlineCode",{parentName:"li"},"The name of the ServerCTO server")),(0,o.kt)("li",{parentName:"ul"},"Your SurveCTO ",(0,o.kt)("inlineCode",{parentName:"li"},"Username")),(0,o.kt)("li",{parentName:"ul"},"Your SurveyCTO ",(0,o.kt)("inlineCode",{parentName:"li"},"Password")),(0,o.kt)("li",{parentName:"ul"},"Form ID ",(0,o.kt)("inlineCode",{parentName:"li"},"Unique Identifier for one of your forms")),(0,o.kt)("li",{parentName:"ul"},"Start Date ",(0,o.kt)("inlineCode",{parentName:"li"},"Start Date default"))),(0,o.kt)("h2",{id:"how-to-setup-a-surveycto-account"},"How to setup a SurveyCTO Account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create the account"),(0,o.kt)("li",{parentName:"ul"},"create your form"),(0,o.kt)("li",{parentName:"ul"},"publish your form"),(0,o.kt)("li",{parentName:"ul"},"give your user an API consumer permission to the existing role or create a user with that role and permission.")),(0,o.kt)("h2",{id:"set-up-the-surveycto-source-connection"},"Set up the SurveyCTO source connection"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into your ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Airbyte Cloud")," or Airbyte Open Source account."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,o.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,o.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,o.kt)("strong",{parentName:"li"},"Survey CTO")," from the Source type dropdown."),(0,o.kt)("li",{parentName:"ol"},"Enter a name for your source."),(0,o.kt)("li",{parentName:"ol"},"Enter a Server name for your SurveyCTO account. "),(0,o.kt)("li",{parentName:"ol"},"Enter a Username for SurveyCTO account."),(0,o.kt)("li",{parentName:"ol"},"Enter a Password for SurveyCTO account."),(0,o.kt)("li",{parentName:"ol"},"Form ID's (We can multiple forms id here to pull from) "),(0,o.kt)("li",{parentName:"ol"},"Start Date (This can be pass to pull the data from particular date)"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,o.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,o.kt)("p",null,"The Commcare source connector supports the following ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync"},"Full Refresh - Overwrite")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental Sync - Append")),(0,o.kt)("li",{parentName:"ul"},"(Recommended)",(0,o.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"}," Incremental Sync - Deduped History"))),(0,o.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,o.kt)("p",null,"The Commcare source connector supports the following streams:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Forms")),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("p",null,"| Version | Date | Pull Request | Subject |\n| 0.1.0   | 2022-11-16 | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/pull/19371"},"19371"),"   | SurveyCTO Source Connector |"))}p.isMDXComponent=!0}}]);