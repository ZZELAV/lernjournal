"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1402],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(t),d=a,g=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return t?n.createElement(g,c(c({ref:r},u),{},{components:t})):n.createElement(g,c({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[h]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9798:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={title:"Tag 1",tags:["M126","Tag 1","Theorie zum Printing","RIP","GDI","PDL"]},c="Tag 1: Theorie zum Printing",o={unversionedId:"M126/tag-0001",id:"M126/tag-0001",title:"Tag 1",description:"Theorie zum Printing",source:"@site/docs/M126/tag-0001.md",sourceDirName:"M126",slug:"/M126/tag-0001",permalink:"/docs/M126/tag-0001",draft:!1,tags:[{label:"M126",permalink:"/docs/tags/m-126"},{label:"Tag 1",permalink:"/docs/tags/tag-1"},{label:"Theorie zum Printing",permalink:"/docs/tags/theorie-zum-printing"},{label:"RIP",permalink:"/docs/tags/rip"},{label:"GDI",permalink:"/docs/tags/gdi"},{label:"PDL",permalink:"/docs/tags/pdl"}],version:"current",frontMatter:{title:"Tag 1",tags:["M126","Tag 1","Theorie zum Printing","RIP","GDI","PDL"]},sidebar:"tutorialSidebar",previous:{title:"M126",permalink:"/docs/M126/"},next:{title:"Tag 2",permalink:"/docs/M126/tag-0002"}},s={},l=[{value:"1.1 Was haben wir gemacht?",id:"11-was-haben-wir-gemacht",level:2},{value:"1.2 Wie haben wir das gemacht?",id:"12-wie-haben-wir-das-gemacht",level:2},{value:"1.3 Was habe ich verstanden?",id:"13-was-habe-ich-verstanden",level:2},{value:"1.4 Was habe ich noch nicht richtig verstanden?",id:"14-was-habe-ich-noch-nicht-richtig-verstanden",level:2}],u={toc:l};function h(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-1-theorie-zum-printing"},"Tag 1: Theorie zum Printing"),(0,a.kt)("admonition",{title:"Thema",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Theorie zum Printing")),(0,a.kt)("h2",{id:"11-was-haben-wir-gemacht"},"1.1 Was haben wir gemacht?"),(0,a.kt)("p",null,"Wir haben uns die Theorie vom Drucken angeschaut. Dabei haben wir die Begriffe RIP, Treiber, GDI und PDL genauer angeschaut."),(0,a.kt)("p",null,"RIP -> Raster Image Processor",(0,a.kt)("br",{parentName:"p"}),"\n","\u2139"," Macht ein Bitmap f\xfcr den Druck"),(0,a.kt)("p",null,"GDI -> Graphics Device Interface (nur f\xfcr Windows)",(0,a.kt)("br",{parentName:"p"}),"\n","\u2139"," Die Schnittstelle zwischen Anwendung und Druckertreiber"),(0,a.kt)("p",null,"PDL -> Page Description Language",(0,a.kt)("br",{parentName:"p"}),"\n","\u2139"," Die Programmiersprache/Druckersprache der heutigen Drucker"),(0,a.kt)("h2",{id:"12-wie-haben-wir-das-gemacht"},"1.2 Wie haben wir das gemacht?"),(0,a.kt)("p",null,"Wir haben die Begriffe in OneNote aufgeschrieben und genauer erkl\xe4rt und einen Ablauf von der Anwendung bis zum fertigen Druck durchgemacht."),(0,a.kt)("h2",{id:"13-was-habe-ich-verstanden"},"1.3 Was habe ich verstanden?"),(0,a.kt)("p",null,"Ich habe verstanden was das PDL ist und macht. PDL ist die Programmiersprache/Druckersprache der heutigen Drucker."),(0,a.kt)("h2",{id:"14-was-habe-ich-noch-nicht-richtig-verstanden"},"1.4 Was habe ich noch nicht richtig verstanden?"),(0,a.kt)("p",null,"Ich habe noch nicht ganz verstanden wie das Verfahren beim RIP funktioniert, damit aus einer Pixelgrafik ein Bitmap wird."))}h.isMDXComponent=!0}}]);