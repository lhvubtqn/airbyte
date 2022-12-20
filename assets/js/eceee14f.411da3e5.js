"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[75172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="RD Station Marketing",l={unversionedId:"integrations/sources/rd-station-marketing",id:"integrations/sources/rd-station-marketing",title:"RD Station Marketing",description:"RD Station Marketing is the leading Marketing Automation tool in Latin America. It is a software application that helps your company carry out better campaigns, nurture Leads, generate qualified business opportunities and achieve more results. From social media to email, Landing Pages, Pop-ups, even Automations and Analytics.",source:"@site/../docs/integrations/sources/rd-station-marketing.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/rd-station-marketing",permalink:"/integrations/sources/rd-station-marketing",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/rd-station-marketing.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"QuickBooks",permalink:"/integrations/sources/quickbooks-singer"},next:{title:"Recharge",permalink:"/integrations/sources/recharge"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Airbyte Open Source",id:"airbyte-open-source",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rd-station-marketing"},"RD Station Marketing"),(0,a.kt)("p",null,"RD Station Marketing is the leading Marketing Automation tool in Latin America. It is a software application that helps your company carry out better campaigns, nurture Leads, generate qualified business opportunities and achieve more results. From social media to email, Landing Pages, Pop-ups, even Automations and Analytics."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An RD Station account"),(0,a.kt)("li",{parentName:"ul"},"A callback URL to receive the first account credential (can be done using localhost)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"client_secret")," credentials. Access ",(0,a.kt)("a",{parentName:"li",href:"https://appstore.rdstation.com/en/publisher"},"this link")," to register a new application and start the authentication flow. ")),(0,a.kt)("h2",{id:"airbyte-open-source"},"Airbyte Open Source"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start Date"),(0,a.kt)("li",{parentName:"ul"},"Client Id"),(0,a.kt)("li",{parentName:"ul"},"Client Secret"),(0,a.kt)("li",{parentName:"ul"},"Refresh token")),(0,a.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,a.kt)("p",null,"The RD Station Marketing source connector supports the following ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Full Refresh"),(0,a.kt)("li",{parentName:"ul"},"Incremental (for analytics endpoints)")),(0,a.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"conversions (analytics endpoint)"),(0,a.kt)("li",{parentName:"ul"},"emails (analytics endpoint)"),(0,a.kt)("li",{parentName:"ul"},"funnel (analytics endpoint)"),(0,a.kt)("li",{parentName:"ul"},"workflow_emails_statistics (analytics endpoint)"),(0,a.kt)("li",{parentName:"ul"},"emails"),(0,a.kt)("li",{parentName:"ul"},"embeddables"),(0,a.kt)("li",{parentName:"ul"},"fields"),(0,a.kt)("li",{parentName:"ul"},"landing_pages"),(0,a.kt)("li",{parentName:"ul"},"popups"),(0,a.kt)("li",{parentName:"ul"},"segmentations"),(0,a.kt)("li",{parentName:"ul"},"workflows")),(0,a.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,a.kt)("p",null,"Each endpoint has its own performance limitations, which also consider the account plan. For more informations, visit the page ",(0,a.kt)("a",{parentName:"p",href:"https://developers.rdstation.com/reference/limite-de-requisicoes-da-api?lng=en"},"API request limit"),"."),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-11-01"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18826"},"18826")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Fix stream analytics_conversions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-10-23"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18348"},"18348")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}u.isMDXComponent=!0}}]);