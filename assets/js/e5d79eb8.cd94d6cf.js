"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,g=u["".concat(c,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Tag 11",tags:["M126","Tag 11","Cisco ASA 5505","Putty","COM-Port"]},o="Tag 11: Cisco ASA 5505",s={unversionedId:"M126/tag-0011",id:"M126/tag-0011",title:"Tag 11",description:"Cisco ASA 5505",source:"@site/docs/M126/tag-0011.md",sourceDirName:"M126",slug:"/M126/tag-0011",permalink:"/docs/M126/tag-0011",draft:!1,tags:[{label:"M126",permalink:"/docs/tags/m-126"},{label:"Tag 11",permalink:"/docs/tags/tag-11"},{label:"Cisco ASA 5505",permalink:"/docs/tags/cisco-asa-5505"},{label:"Putty",permalink:"/docs/tags/putty"},{label:"COM-Port",permalink:"/docs/tags/com-port"}],version:"current",frontMatter:{title:"Tag 11",tags:["M126","Tag 11","Cisco ASA 5505","Putty","COM-Port"]},sidebar:"tutorialSidebar",previous:{title:"Tag 10",permalink:"/docs/M126/tag-0010"},next:{title:"Tag 12",permalink:"/docs/M126/tag-0012"}},c={},l=[{value:"1 Was haben wir gemacht?",id:"1-was-haben-wir-gemacht",level:2},{value:"2 Wie haben wir das gemacht?",id:"2-wie-haben-wir-das-gemacht",level:2},{value:"3 Was habe ich verstanden?",id:"3-was-habe-ich-verstanden",level:2},{value:"4 Was habe ich noch nicht richtig verstanden?",id:"4-was-habe-ich-noch-nicht-richtig-verstanden",level:2}],d={toc:l},u="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tag-11-cisco-asa-5505"},"Tag 11: Cisco ASA 5505"),(0,r.kt)("admonition",{title:"Thema",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Cisco ASA 5505")),(0,r.kt)("h2",{id:"1-was-haben-wir-gemacht"},"1 Was haben wir gemacht?"),(0,r.kt)("p",null,"Wir hatten heute die Theoriepr\xfcfung und danach haben wir mit der Cisco ASA 5505 gearbeitet."),(0,r.kt)("p",null,"Nachdem wir das Ger\xe4t an den Strom angeschlossen haben und es per Serial-Kabel an den Laptop angeschlossen haben, konnten wir \xfcber einen COM-Port auf die ASA zugreifen.\nDaf\xfcr haben wir das Tool Putty genutzt.\n",(0,r.kt)("img",{alt:"Putty",src:n(28143).Z,width:"679",height:"677"})),(0,r.kt)("p",null,"Um die ASA zur\xfcckzusetzen muss es vom Strom genommen werden und beim Einstecken muss die ESC-Taste gedr\xfcckt werden. Jetzt m\xfcssen eine Folge von Commands eingegeben werden:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"confreg 0x41 -> Das Config Register updaten"),(0,r.kt)("li",{parentName:"ol"},"boot -> starten"),(0,r.kt)("li",{parentName:"ol"},"en -> in den \u201cPriviledged Mode\xbb gelangen und Passwort setzen"),(0,r.kt)("li",{parentName:"ol"},"write erase -> Startup-Config l\xf6schen"),(0,r.kt)("li",{parentName:"ol"},"conf t -> Config Mode starten"),(0,r.kt)("li",{parentName:"ol"},"config-register 0x01 -> Configuration Register zur\xfccksetzen"),(0,r.kt)("li",{parentName:"ol"},"exit -> Config Mode verlassen"),(0,r.kt)("li",{parentName:"ol"},"show version -> Version anzeigen, sollte \xabConfiguration register is 0x41 (will be 0x1 at next reload)\xbb sein"),(0,r.kt)("li",{parentName:"ol"},"wr -> geschriebe Einstellungen speichern (Abk\xfcrzung f\xfcr write memory)"),(0,r.kt)("li",{parentName:"ol"},"reload -> Ger\xe4t neustarten"),(0,r.kt)("li",{parentName:"ol"},"en"),(0,r.kt)("li",{parentName:"ol"},"conf t"),(0,r.kt)("li",{parentName:"ol"},"config factory ","[IP]"," -> IP-Adresse setzen, der Standard ist 192.168.1.1/24"),(0,r.kt)("li",{parentName:"ol"},"wr"),(0,r.kt)("li",{parentName:"ol"},"sh start -> Start Config \xfcberpr\xfcfen, kontrollieren ob die IP richtig gesetzt wurde\n",(0,r.kt)("img",{alt:"Startup Config",src:n(81740).Z,width:"720",height:"1125"}),"  "),(0,r.kt)("li",{parentName:"ol"},"sh run -> Run Config \xfcberpr\xfcfen, das ist die laufende Konfiguration, die im RAM gespeichert ist"),(0,r.kt)("li",{parentName:"ol"},"sh interface ip brief -> VLAN Config anschauen")),(0,r.kt)("p",null,"Da die Zeit nicht mehr ausgereicht hat, haben wir hier gestoppt und machen n\xe4chste Woche weiter."),(0,r.kt)("h2",{id:"2-wie-haben-wir-das-gemacht"},"2 Wie haben wir das gemacht?"),(0,r.kt)("p",null,"Wir haben in Zweier-Gruppen eine Cisco ASA 5505 erhalten und haben diese mithilfe einer Anleitung konfiguriert."),(0,r.kt)("h2",{id:"3-was-habe-ich-verstanden"},"3 Was habe ich verstanden?"),(0,r.kt)("p",null,"Ich habe verstanden wie man die ASA per Serial-Kabel an den Laptop anschliesset und per COM-Port und Putty sich darauf verbindet. Wenn man das Serial-Kabel angeschlossen hat, muss man im Ger\xe4te-Manager den richtigen COM-Port finden, dieser kann jedes Mal anders sein."),(0,r.kt)("h2",{id:"4-was-habe-ich-noch-nicht-richtig-verstanden"},"4 Was habe ich noch nicht richtig verstanden?"),(0,r.kt)("p",null,"Ich habe noch ein bisschen M\xfche mit dem Verstehen der Cisco Commands, da ich nicht so oft mit Cisco Ger\xe4ten gearbeitet habe."))}h.isMDXComponent=!0},28143:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cisco_asa_com_connection-35a8314b61a13de6e1488ca2e544cb73.png"},81740:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cisco_asa_startup_config-470f7e881a34df8ad8d794a213a2b050.png"}}]);