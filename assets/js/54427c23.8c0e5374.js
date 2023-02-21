"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,p=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(p,o(o({ref:t},g),{},{components:n})):a.createElement(p,o({ref:t},g))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Tag 7",tags:["M126","Tag 7","Synology NAS Integration","NAS","Synology","DS216j","DSM"]},o="Tag 7: Synology NAS Integration",s={unversionedId:"M126/tag-0007",id:"M126/tag-0007",title:"Tag 7",description:"Synology NAS Integration",source:"@site/docs/M126/tag-0007.md",sourceDirName:"M126",slug:"/M126/tag-0007",permalink:"/docs/M126/tag-0007",draft:!1,tags:[{label:"M126",permalink:"/docs/tags/m-126"},{label:"Tag 7",permalink:"/docs/tags/tag-7"},{label:"Synology NAS Integration",permalink:"/docs/tags/synology-nas-integration"},{label:"NAS",permalink:"/docs/tags/nas"},{label:"Synology",permalink:"/docs/tags/synology"},{label:"DS216j",permalink:"/docs/tags/ds-216-j"},{label:"DSM",permalink:"/docs/tags/dsm"}],version:"current",frontMatter:{title:"Tag 7",tags:["M126","Tag 7","Synology NAS Integration","NAS","Synology","DS216j","DSM"]},sidebar:"tutorialSidebar",previous:{title:"Tag 6",permalink:"/docs/M126/tag-0006"},next:{title:"Tag 8",permalink:"/docs/M126/tag-0008"}},l={},c=[{value:"1 Was haben wir gemacht?",id:"1-was-haben-wir-gemacht",level:2},{value:"2 Wie haben wir das gemacht?",id:"2-wie-haben-wir-das-gemacht",level:2},{value:"3 Was habe ich verstanden?",id:"3-was-habe-ich-verstanden",level:2},{value:"4 Was habe ich noch nicht richtig verstanden?",id:"4-was-habe-ich-noch-nicht-richtig-verstanden",level:2}],g={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tag-7-synology-nas-integration"},"Tag 7: Synology NAS Integration"),(0,r.kt)("admonition",{title:"Thema",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Synology NAS Integration")),(0,r.kt)("h2",{id:"1-was-haben-wir-gemacht"},"1 Was haben wir gemacht?"),(0,r.kt)("p",null,"Heute haben uns weiter mit dem NAS DS216j von Synology befasst."),(0,r.kt)("p",null,"Als erstes mussten wir das DSM (Disk Station Manager) aktualisieren. Dies kann \xfcber die Systemsteuerung vom NAS ausgef\xfchrt werden. Nachdem die DSM aktualisiert war, konnten wir das Laufwerk mappen und den Speicherpool erstellen. Dies hat etwa 10 Minuten gebraucht. Beim Erstellen vom Speicherpool, kann das RAID-Level, Dateisystem und welche Laufwerke genutzt werden ausgew\xe4hlt werden."),(0,r.kt)("h2",{id:"2-wie-haben-wir-das-gemacht"},"2 Wie haben wir das gemacht?"),(0,r.kt)("p",null,"Wir haben das gleiche NAS wie letzte Woche genutzt, damit wir am gleichen Stand weitermachen konnten, wie letzte Woche."),(0,r.kt)("h2",{id:"3-was-habe-ich-verstanden"},"3 Was habe ich verstanden?"),(0,r.kt)("p",null,'Ich habe verstanden, wie man das Betriebssystem auf das NAS "schreibt" und aktualisiert. Dies kann ganz einfach \xfcber die Systemsteuerung vom NAS gemacht werden.'),(0,r.kt)("h2",{id:"4-was-habe-ich-noch-nicht-richtig-verstanden"},"4 Was habe ich noch nicht richtig verstanden?"),(0,r.kt)("p",null,"Wie man die Freigaben f\xfcr nur gewisse User erlaubt. Also wie die Userkonfiguration funktioniert."))}u.isMDXComponent=!0}}]);