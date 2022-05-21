"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7901],{4478:function(e,t){var r=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var o,n=0,l=t.length;n<l;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))};function o(e){if(!e||"string"!=typeof e)throw new Error("BetterLocalStore: Key does not exist.");var t=localStorage.getItem(e);return t?JSON.parse(t):null}function n(e){for(var t in e)return!1;return!0}function l(e,t){if(!e||"string"!=typeof e)throw new Error("BetterLocalStore: Key does not exist.");if(!t)throw new Error("BetterLocalStore: Invalid value");if(localStorage.getItem(e))throw new Error("BetterLocalStore: Key already existed.");var o=Array.isArray(t)?JSON.stringify(r([],t,!0)):JSON.stringify([t]);return localStorage.setItem(e,o),!0}t.__esModule=!0,t.removeKey=t.createObject=t.setObject=t.pushObject=t.getStoreObject=void 0,t.getStoreObject=o,t.pushObject=function(e,t,r){if(void 0===r&&(r=!0),!e||"string"!=typeof e)throw new Error("BetterLocalStore: Key does not exist.");if(!t)throw new Error("BetterLocalStore: Invalid value");if("object"==typeof t&&n(t))throw new Error("BetterLocalStore: Invalid object.");var a=o(e);if(null===a){if(r)return l(e,t),!0;throw new Error("BetterLocalStore: Key does not exist in localStore.")}a.push(t);var i=JSON.stringify(a);return localStorage.setItem(e,i),!0},t.setObject=function(e,t,r,a){if(void 0===r&&(r=!0),void 0===a&&(a=!0),!e||"string"!=typeof e)throw new Error("BetterLocalStore: Key does not exist.");if(!t)throw new Error("BetterLocalStore: Invalid value");if(!a&&"object"==typeof t&&n(t))throw new Error("BetterLocalStore: Invalid object.");if(null===o(e)){if(r)return l(e,t),!0;throw new Error("BetterLocalStore: Key does not exist in localStore.")}var i=JSON.stringify(t);return localStorage.setItem(e,i),!0},t.createObject=l,t.removeKey=function(e){if(!e||"string"!=typeof e)throw new Error("BetterLocalStore: Key does not exist.");return localStorage.removeItem(e),!0}},6574:function(e,t,r){r.r(t),r.d(t,{default:function(){return A}});var o=r(5861),n=r(7757),l=r.n(n),a=r(2773),i=r(7294),c=r(713),s=r(4478),u=r(6455),f=r.n(u),m=r(7630),d=r.n(m)()(f());function g(e){void 0===e&&(e=!0),d.fire({position:"top-end",icon:e?"success":"error",backdrop:!1,title:e?"Success to copy.":"Falied to copy.",showConfirmButton:!1,timer:1500})}var E=function(e){var t=e.colorArr,r=e.insideText,o=e.setPickedcolorArr;return i.createElement(i.Fragment,null,r&&i.createElement("h3",null," ",r," "),i.createElement(c.iY,{colors:t||[],circleSize:48,circleSpacing:16,width:"100%",onChangeComplete:function(e){(function(e){try{return navigator.clipboard.writeText(e),g(!0),!0}catch(t){g(!1)}})(e.hex)&&o(e.hex)}}))},p=r(1994),h=r(7109),y=r(2761);var w=function(e){var t=e.setString;return i.createElement(p.Z,{startAdornment:i.createElement(h.Z,{position:"start"}," ",i.createElement(y.Z,null)," "),onChange:function(e){return t(e.currentTarget.value)}})},S=r(6886),v=r(3004),b=r(7357),C=r(7948),F=r(8456),x=JSON.parse('[{"title":"Blue mood","colorArr":["#5389C0","#8EC0F5","#FFFFFF","#E0BFCC"],"label":["game"]},{"title":"Genki","colorArr":["#FFFFFF","#FA8072"],"label":["web"]},{"title":"Nayutan Style","colorArr":["#FF5355","#46CAF1","#36C38B","#454746"],"label":["web"]},{"title":"Clean video","colorArr":["#EBEAEB","#191819","#D9DCE3"],"label":["web"]},{"title":"Sharp contrast","colorArr":["#2F4541","#F8F49C","#84A0A6"],"label":["web"]},{"title":"Dream","colorArr":["#FFF6F3","#D2F4FA","#FFF0D2","#68587F","#C155D0"],"label":["web"]}]');var A=function(){var e=(0,i.useState)([]),t=e[0],r=e[1],n=(0,i.useState)(!0),u=n[0],f=n[1],m=(0,i.useState)([]),d=m[0],g=m[1],p=(0,i.useState)("#000000"),h=p[0],y=p[1],A=(0,i.useState)(""),B=A[0],k=A[1];function O(e){-1===d.indexOf(e)&&g([].concat(d,[e]))}return(0,i.useEffect)((function(){(0,o.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=(0,s.getStoreObject)("pickedColorArr")||[]).length>=1&&g(t),r(x),f(!1);case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,i.useEffect)((function(){u||(0,s.setObject)("pickedColorArr",d,!0)}),[d]),(0,i.useEffect)((function(){var e=x.filter((function(e){return e.title.toLowerCase().includes(B.toLowerCase())}));r(e)}),[B]),i.createElement(a.Z,null,i.createElement(C.Z,{maxWidth:"xl"},i.createElement("br",null),i.createElement("h1",null,"Great color combinations"),i.createElement("div",{style:{backgroundColor:"rgb(92,210,239)",width:"150px",height:"6px",marginBottom:"3px"}}),i.createElement(w,{setString:k}),i.createElement(S.ZP,{container:!0,spacing:2},i.createElement(S.ZP,{item:!0,md:8},i.createElement(S.ZP,{container:!0,spacing:2,order:{xs:2,lg:1,xl:1}},i.createElement(i.Fragment,null,u&&i.createElement(F.Z,null),t.map((function(e,t){return i.createElement(S.ZP,{item:!0,md:6,mt:2,key:"c"+t},i.createElement("h3",{style:{color:"#626262"}},e.title),i.createElement("div",{style:{backgroundColor:"#C4C4C4",padding:"1rem",borderRadius:"0.5rem"}},i.createElement(E,{colorArr:e.colorArr,insideText:"",setPickedcolorArr:O})))}))))),i.createElement(S.ZP,{item:!0,md:4,order:{xs:1,lg:2,xl:2}},i.createElement(b.Z,{sx:{display:"flex",justifyContent:"right",marginTop:"1rem"}},i.createElement(c.xS,{width:"100%",color:h,onChange:function(e){return y(e.hex)},presetColors:d})),i.createElement(b.Z,{sx:{backgroundColor:"#C4C4C4",padding:"1rem",borderRadius:"0.5rem",marginTop:"1rem"}},i.createElement(E,{colorArr:d,insideText:"Copy value",setPickedcolorArr:O})),i.createElement(b.Z,{sx:{display:"flex",justifyContent:"right",marginTop:"1rem"}},i.createElement(v.Z,{variant:"contained",onClick:function(){return g([])}},"Clear history")))),i.createElement("br",null)))}}}]);