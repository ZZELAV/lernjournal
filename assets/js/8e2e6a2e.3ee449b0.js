"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,d=u["".concat(o,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Tag 8",tags:["M239","Tag 8","Server","Webserver","Apache","V-Hosting"]},s="Tag 8: V-Hosting",l={unversionedId:"M239/tag-0008",id:"M239/tag-0008",title:"Tag 8",description:"3 V-Hosting",source:"@site/docs/M239/tag-0008.md",sourceDirName:"M239",slug:"/M239/tag-0008",permalink:"/docs/M239/tag-0008",draft:!1,tags:[{label:"M239",permalink:"/docs/tags/m-239"},{label:"Tag 8",permalink:"/docs/tags/tag-8"},{label:"Server",permalink:"/docs/tags/server"},{label:"Webserver",permalink:"/docs/tags/webserver"},{label:"Apache",permalink:"/docs/tags/apache"},{label:"V-Hosting",permalink:"/docs/tags/v-hosting"}],version:"current",frontMatter:{title:"Tag 8",tags:["M239","Tag 8","Server","Webserver","Apache","V-Hosting"]},sidebar:"tutorialSidebar",previous:{title:"Tag 7",permalink:"/docs/M239/tag-0007"},next:{title:"Tag 9",permalink:"/docs/M239/tag-0009"}},o={},p=[{value:"3 V-Hosting",id:"3-v-hosting",level:2},{value:"3.1 IP-basiert",id:"31-ip-basiert",level:3},{value:"3.2 Namens-basiert",id:"32-namens-basiert",level:3},{value:"3.2.1 Beispiel",id:"321-beispiel",level:4}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-8-v-hosting"},"Tag 8: V-Hosting"),(0,a.kt)("h2",{id:"3-v-hosting"},"3 V-Hosting"),(0,a.kt)("h3",{id:"31-ip-basiert"},"3.1 IP-basiert"),(0,a.kt)("p",null,"Beim virtuell Hosten per IP, wird die IP-Adresse genutzt um die Verbindung zum korrekten virtuellen Host aufzubauen. Daher braucht jeder V-Host eine eigene IP."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IP basiert V-Host",src:n(97956).Z,width:"440",height:"356"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Vorteile")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Layer-4-Firewall reicht aus"),(0,a.kt)("li",{parentName:"ul"},"Logging/Troubleshooting einfacher")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nachteile")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jeder braucht eine eigene IP = grosser Aufwand"),(0,a.kt)("li",{parentName:"ul"},"Mehrere Schnittstellen pro Webserver = grosser Aufwand")),(0,a.kt)("p",null,"Da heututage die IP-Adressen immer knapper werden, wird diese Methode nicht mehr oft genutzt."),(0,a.kt)("h3",{id:"32-namens-basiert"},"3.2 Namens-basiert"),(0,a.kt)("p",null,"Bei der Namens-basierten Methode verl\xe4sst sich der Server darauf, dass der Client den Hostnamen im HTTP-Header angibt. Dadurch wird nur eine IP-Adresse f\xfcr die verschiedenen V-Hosts gebraucht."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Namens basiert V-Host",src:n(73920).Z,width:"502",height:"472"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Vorteile")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verwendung einfacher"),(0,a.kt)("li",{parentName:"ul"},"Nur eine IP ben\xf6tigt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nachteile")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mehr Aufwand beim Konfigurieren vom DNS und Apache2")),(0,a.kt)("p",null,"Daher sollte man, wenn m\xf6glich, immer die Namens-basierte Methode nutzen."),(0,a.kt)("p",null,"Damit das Namens-basierte V-Hosting funktioniert, muss die Option Server-weit aktiviert werden. Dazu muss die Datei wie folgend ",(0,a.kt)("em",{parentName:"p"},"/etc/apache2/ports.conf")," erweitert werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-config"},"NameVirtualHost *:80\n\n# Weitere Config\n")),(0,a.kt)("h4",{id:"321-beispiel"},"3.2.1 Beispiel"),(0,a.kt)("p",null,"Unsere Dom\xe4ne: ",(0,a.kt)("a",{parentName:"p",href:"http://www.beispiel.ch"},"www.beispiel.ch"),(0,a.kt)("br",{parentName:"p"}),"\n","Neuer V-Host den wir hinzuf\xfcgen m\xf6chten: ",(0,a.kt)("a",{parentName:"p",href:"http://www.beispielpanico.ch"},"www.beispielpanico.ch")),(0,a.kt)("p",null,"Er soll auf der gleichen IP erreichbar sein wie die andere Dom\xe4ne. Daf\xfcr m\xfcssen wir unsere Konfig wie folgt erweitern:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-config",metastring:"title='panico.ch.conf'",title:"'panico.ch.conf'"},"<VirtualHost *:80>\n    ServerName www.panico.ch\n    ServerAlias panico.ch *.panico.ch\n    DocumentRoot /var/www/panico_ch\n</VirtualHost>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-config",metastring:"title='beispielpanico.ch.conf'",title:"'beispielpanico.ch.conf'"},"<VirtualHost *:80>\n    ServerName www.beispielpanico.ch\n    DocumentRoot /var/wwww/beispielpanico_ch\n</VirtualHost>\n")),(0,a.kt)("admonition",{title:"Namensaufl\xf6sung",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Damit das Namens-basierte V-Hosting funktioniert, ",(0,a.kt)("strong",{parentName:"p"},"MUSS")," die Namensaufl\xf6sung f\xfcr die Website funktionieren.")))}m.isMDXComponent=!0},97956:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ipBasiertVHost-06144f172fb0d45ad4caf509ce09de7d.jpeg"},73920:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/namensBasiertVHost-2c27607286caf777ab9b3fb9830320f4.jpeg"}}]);