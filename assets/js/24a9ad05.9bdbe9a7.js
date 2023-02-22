"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),p=a,g=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Tag 5",tags:["M126","Tag 5","IP-Kamera Integration","Roline","Compro"]},o="Tag 5: IP-Kamera Integration",l={unversionedId:"M126/tag-0005",id:"M126/tag-0005",title:"Tag 5",description:"IP-Kamera Integration",source:"@site/docs/M126/tag-0005.md",sourceDirName:"M126",slug:"/M126/tag-0005",permalink:"/docs/M126/tag-0005",draft:!1,tags:[{label:"M126",permalink:"/docs/tags/m-126"},{label:"Tag 5",permalink:"/docs/tags/tag-5"},{label:"IP-Kamera Integration",permalink:"/docs/tags/ip-kamera-integration"},{label:"Roline",permalink:"/docs/tags/roline"},{label:"Compro",permalink:"/docs/tags/compro"}],version:"current",frontMatter:{title:"Tag 5",tags:["M126","Tag 5","IP-Kamera Integration","Roline","Compro"]},sidebar:"tutorialSidebar",previous:{title:"Tag 4",permalink:"/docs/M126/tag-0004"},next:{title:"Tag 6",permalink:"/docs/M126/tag-0006"}},c={},s=[{value:"1.1 Was haben wir gemacht?",id:"11-was-haben-wir-gemacht",level:2},{value:"1.2 Wie haben wir das gemacht?",id:"12-wie-haben-wir-das-gemacht",level:2},{value:"1.3 Was habe ich verstanden?",id:"13-was-habe-ich-verstanden",level:2},{value:"1.4 Was habe ich noch nicht richtig verstanden?",id:"14-was-habe-ich-noch-nicht-richtig-verstanden",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-5-ip-kamera-integration"},"Tag 5: IP-Kamera Integration"),(0,a.kt)("admonition",{title:"Thema",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"IP-Kamera Integration")),(0,a.kt)("h2",{id:"11-was-haben-wir-gemacht"},"1.1 Was haben wir gemacht?"),(0,a.kt)("p",null,"In dieser Woche haben wir die anderen zwei Kameras konfiguriert."),(0,a.kt)("p",null,"Wir haben die Kamera von Roline und Compro konfiguriert."),(0,a.kt)("p",null,"Die Kamera von Roline ist eher veraltet und daf\xfcr mussten ALLE Netzwerk Adapter deaktiviert werden. Sie wurde \xfcber ein eigenes Programm erkannt und konnte dann \xfcber den Internet Explorer weiter eingerichtet werden und das Bild sehen."),(0,a.kt)("p",null,"Die Kamera von Compro war einfacher zu konfigurieren, da sie aktueller ist und die Einrichtung selbsterkl\xe4render war. Sie wurde auch \xfcber ein eigenes Programm konfiguriert."),(0,a.kt)("h2",{id:"12-wie-haben-wir-das-gemacht"},"1.2 Wie haben wir das gemacht?"),(0,a.kt)("p",null,"Wir haben die beiden Kameras \xfcber die jeweils eigene Software konfiguriert, Zur Hilfe stand eine Anleitung, die die Schritte erkl\xe4rte."),(0,a.kt)("h2",{id:"13-was-habe-ich-verstanden"},"1.3 Was habe ich verstanden?"),(0,a.kt)("p",null,"Ich habe verstanden wie man die Kamera von Compro konfiguriert, damit man ein Bild bekommt."),(0,a.kt)("h2",{id:"14-was-habe-ich-noch-nicht-richtig-verstanden"},"1.4 Was habe ich noch nicht richtig verstanden?"),(0,a.kt)("p",null,"Wieso die anderen Netzwerkadapter das Einrichten der Roline Kamera geblockt haben."))}m.isMDXComponent=!0}}]);