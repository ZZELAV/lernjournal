"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[88946],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(g,c(c({ref:n},s),{},{components:t})):r.createElement(g,c({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const i={title:"Tag 2",tags:["M126","Tag 2","Drucken mit Linux","CUPS","LPR","LPRng"]},c="Tag 2: Drucken mit Linux",l={unversionedId:"M126/tag-0002",id:"M126/tag-0002",title:"Tag 2",description:"Drucken mit Linux",source:"@site/docs/M126/tag-0002.md",sourceDirName:"M126",slug:"/M126/tag-0002",permalink:"/docs/M126/tag-0002",draft:!1,tags:[{label:"M126",permalink:"/docs/tags/m-126"},{label:"Tag 2",permalink:"/docs/tags/tag-2"},{label:"Drucken mit Linux",permalink:"/docs/tags/drucken-mit-linux"},{label:"CUPS",permalink:"/docs/tags/cups"},{label:"LPR",permalink:"/docs/tags/lpr"},{label:"LPRng",permalink:"/docs/tags/lp-rng"}],version:"current",frontMatter:{title:"Tag 2",tags:["M126","Tag 2","Drucken mit Linux","CUPS","LPR","LPRng"]},sidebar:"tutorialSidebar",previous:{title:"Tag 1",permalink:"/docs/M126/tag-0001"},next:{title:"Tag 3",permalink:"/docs/M126/tag-0003"}},o={},u=[{value:"1.1 Was haben wir gemacht?",id:"11-was-haben-wir-gemacht",level:2},{value:"1.2 Wie haben wir das gemacht?",id:"12-wie-haben-wir-das-gemacht",level:2},{value:"1.3 Was habe ich verstanden?",id:"13-was-habe-ich-verstanden",level:2},{value:"1.4 Was habe ich noch nicht richtig verstanden?",id:"14-was-habe-ich-noch-nicht-richtig-verstanden",level:2}],s={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-2-drucken-mit-linux"},"Tag 2: Drucken mit Linux"),(0,a.kt)("admonition",{title:"Thema",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Drucken mit Linux")),(0,a.kt)("h2",{id:"11-was-haben-wir-gemacht"},"1.1 Was haben wir gemacht?"),(0,a.kt)("p",null,"Wir haben einen Drucker mit Linux eingerichtet und mit CUPS und LPR gedruckt."),(0,a.kt)("p",null,"CUPS -> Common Unix Printing Service",(0,a.kt)("br",{parentName:"p"}),"\n","\u2139"," \xdcber CUPS lassen sich Drucker nutzen, verwalten und im Netzwerk freigeben. CUPS kann \xfcber den Browser mit localhost:631 ge\xf6ffnet werden. Es ist eine benutzerfreundliche Schnittstelle zum Drucken in Linux."),(0,a.kt)("p",null,"LPR -> Line Printer",(0,a.kt)("br",{parentName:"p"}),"\n","\u2139"," LPR wird \xfcber die Kommandozeile genutzt. Der Command sieht wie folgt aus:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"LPR -S <SERVER> -P <PRINTER> -J <FILE>")),(0,a.kt)("p",null,"LPRng -> LPR new generation",(0,a.kt)("br",{parentName:"p"}),"\n","\u2139"," Ist die weiterentwickelte Version von LPR."),(0,a.kt)("h2",{id:"12-wie-haben-wir-das-gemacht"},"1.2 Wie haben wir das gemacht?"),(0,a.kt)("p",null,"Wir haben das praktisch in einer Linux VM durchgef\xfchrt. Die Anleitung wurde als Videoanleitung zur Verf\xfcgung gestellt. Wir haben dann per Videoanleitung die Treiber installiert und einen einfachen ersten Druck ausgef\xfchrt."),(0,a.kt)("h2",{id:"13-was-habe-ich-verstanden"},"1.3 Was habe ich verstanden?"),(0,a.kt)("p",null,"Wie man einen Drucker in Linux einrichtet."),(0,a.kt)("h2",{id:"14-was-habe-ich-noch-nicht-richtig-verstanden"},"1.4 Was habe ich noch nicht richtig verstanden?"),(0,a.kt)("p",null,"Wie man per CLI drucken kann."))}d.isMDXComponent=!0}}]);