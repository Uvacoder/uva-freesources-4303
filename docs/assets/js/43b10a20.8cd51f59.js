"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7645],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},l="Utility",o={unversionedId:"html/htmlUtility",id:"html/htmlUtility",title:"Utility",description:"These websites can be references for your design ideas",source:"@site/docs/html/htmlUtility.md",sourceDirName:"html",slug:"/html/htmlUtility",permalink:"/docs/html/htmlUtility",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Animations",permalink:"/docs/html/animations"},next:{title:"Fonts",permalink:"/docs/css/fonts"}},s={},p=[{value:"Input Checking",id:"input-checking",level:2},{value:"- Cleave.js",id:"--cleavejs",level:3},{value:"QR code",id:"qr-code",level:2},{value:"- QRCanvas",id:"--qrcanvas",level:3},{value:"Markdown",id:"markdown",level:2},{value:"- md-block",id:"--md-block",level:3},{value:"Map",id:"map",level:2},{value:"- Leaflet.js",id:"--leafletjs",level:3},{value:"Text",id:"text",level:2},{value:"- tiptap",id:"--tiptap",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"utility"},"Utility"),(0,a.kt)("p",null,"These websites can be references for your design ideas "),(0,a.kt)("h2",{id:"input-checking"},"Input Checking"),(0,a.kt)("h3",{id:"--cleavejs"},"- Cleave.js"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Format your ",(0,a.kt)("inlineCode",{parentName:"li"},"<input/>")," content when you are typing.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://nosir.github.io/cleave.js/"},"https://nosir.github.io/cleave.js/"))),(0,a.kt)("h2",{id:"qr-code"},"QR code"),(0,a.kt)("h3",{id:"--qrcanvas"},"- QRCanvas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"QRCode generator written in pure javascript.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://github.com/gera2ld/qrcanvas?from=thosefree.com"},"https://github.com/gera2ld/qrcanvas?from=thosefree.com"))),(0,a.kt)("h2",{id:"markdown"},"Markdown"),(0,a.kt)("h3",{id:"--md-block"},"- md-block"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Render styleable Markdown in your HTML. Uses marked under the hood.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://md-block.verou.me/"},"https://md-block.verou.me/"))),(0,a.kt)("h2",{id:"map"},"Map"),(0,a.kt)("h3",{id:"--leafletjs"},"- Leaflet.js"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://leafletjs.com/"},"https://leafletjs.com/"))),(0,a.kt)("h2",{id:"text"},"Text"),(0,a.kt)("h3",{id:"--tiptap"},"- tiptap"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The headless editor framework for web artisans.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://tiptap.dev/"},"https://tiptap.dev/"))))}u.isMDXComponent=!0}}]);