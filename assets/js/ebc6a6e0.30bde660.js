"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[55676],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=s(a),m=n,g=k["".concat(p,".").concat(m)]||k[m]||d[m]||o;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},36424:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},l="Facebook Pages",i={unversionedId:"integrations/sources/facebook-pages",id:"integrations/sources/facebook-pages",title:"Facebook Pages",description:"Sync overview",source:"@site/../docs/integrations/sources/facebook-pages.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/facebook-pages",permalink:"/integrations/sources/facebook-pages",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/facebook-pages.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Facebook Marketing",permalink:"/integrations/sources/facebook-marketing"},next:{title:"Sample Data (Faker)",permalink:"/integrations/sources/faker"}},p={},s=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Rate Limiting &amp; Performance Considerations",id:"rate-limiting--performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Facebook Developer Account",id:"facebook-developer-account",level:3},{value:"Facebook App",id:"facebook-app",level:3},{value:"If you don&#39;t have a Facebook App",id:"if-you-dont-have-a-facebook-app",level:4},{value:"Connect a User Page",id:"connect-a-user-page",level:4},{value:"Getting Page ID",id:"getting-page-id",level:4},{value:"Changelog",id:"changelog",level:2}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"facebook-pages"},"Facebook Pages"),(0,n.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,n.kt)("p",null,"The Facebook Pages source uses ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/graph-api/?locale=en_US"},"Facebook Graph API")," to read data from the Facebook social graph."),(0,n.kt)("h3",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v11.0/page/#fields"},"Page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v11.0/page/feed#pubfields"},"Post")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v11.0/page/insights/#fields"},"Page Insights")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/graph-api/reference/v11.0/insights"},"Post Insights"))),(0,n.kt)("p",null,"The linked Facebook docs go into detail about the fields present on those streams."),(0,n.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"rate-limiting--performance-considerations"},"Rate Limiting & Performance Considerations"),(0,n.kt)("p",null,"Facebook heavily throttles API tokens generated from Facebook Apps by default, making it infeasible to use such a token for syncs with Airbyte. To be able to use this connector without your syncs taking days due to rate limiting follow the instructions in the Setup Guide below to access better rate limits."),(0,n.kt)("p",null,"See Facebook's ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/graph-api/overview/rate-limiting"},"documentation on rate limiting")," for more information on requesting a quota upgrade."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Facebook Developer Account"),(0,n.kt)("li",{parentName:"ul"},"A Facebook App"),(0,n.kt)("li",{parentName:"ul"},"A Facebook API Page Access Token"),(0,n.kt)("li",{parentName:"ul"},"A Facebook ",(0,n.kt)("inlineCode",{parentName:"li"},"Page")," ID")),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"facebook-developer-account"},"Facebook Developer Account"),(0,n.kt)("p",null,"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/async/registration/"},"Facebook Developer Account ")," link to create new account."),(0,n.kt)("h3",{id:"facebook-app"},"Facebook App"),(0,n.kt)("h4",{id:"if-you-dont-have-a-facebook-app"},"If you don't have a Facebook App"),(0,n.kt)("p",null,"Visit the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},"Facebook Developers App hub"),' and create an App and choose "Company" as the purpose of the app. Fill out the remaining fields to create your app, then follow along the "Connect a User Page" section.'),(0,n.kt)("h4",{id:"connect-a-user-page"},"Connect a User Page"),(0,n.kt)("p",null,"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/tools/explorer/"},"Graph API Explorer")," link. 1. Choose your app at ",(0,n.kt)("inlineCode",{parentName:"p"},"Facebook App")," field 2. Choose your Page at ",(0,n.kt)("inlineCode",{parentName:"p"},"User or Page")," field 3. Add next permission:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"pages","_","read","_","engagement"),(0,n.kt)("li",{parentName:"ul"},"pages","_","read","_","user","_","content "),(0,n.kt)("li",{parentName:"ul"},"pages","_","show","_","list"),(0,n.kt)("li",{parentName:"ul"},"read","_","insights",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Click Generate Access Token and follow instructions.")))),(0,n.kt)("p",null,"After all the steps, it should look something like this"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5353).Z,width:"1906",height:"978"})),(0,n.kt)("p",null,"Now can copy your Access Token from ",(0,n.kt)("inlineCode",{parentName:"p"},"Access Token")," field ","(","This is a short live Page access token, if you need a long-lived Page access token, you can ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing#get-a-long-lived-page-access-token"},"generate")," one from a long-lived User access token. Long-lived Page access token do not have an expiration date and only expire or are invalidated under certain conditions.",")"),(0,n.kt)("h4",{id:"getting-page-id"},"Getting Page ID"),(0,n.kt)("p",null,"You can easily get the page id from the page url. For example, if you have a page URL such as ",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.facebook.com/Test-1111111111"),", the ID would be",(0,n.kt)("inlineCode",{parentName:"p"},"Test-1111111111"),"."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9032"},"9032")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove deprecated field ",(0,n.kt)("inlineCode",{parentName:"td"},"live_encoders")," from Page stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/"},"8267")),(0,n.kt)("td",{parentName:"tr",align:"left"},"updated all empty objects in schemas for Page and Post streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/"})),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove unsupported insights_export field from Pages request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7440"},"7440")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Generate Page token from config access token")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7128"},"7128")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Upgrade Facebook API to v.12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6438"},"6438")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotate Oauth2 flow initialization parameters in connector specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5158"},"5158")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}d.isMDXComponent=!0},5353:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/facebook-pages-1-e8e192fd0d88bfd23825f15a985b5fa3.png"}}]);