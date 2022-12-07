"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4072],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,m=p["".concat(l,".").concat(d)]||p[d]||g[d]||i;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={title:"Tag 5",tags:["M239","Tag 5","Server","Webserver","Apache","Security","curl"]},c="Tag 5: Security",o={unversionedId:"M239/tag-0005",id:"M239/tag-0005",title:"Tag 5",description:"1 Security bei Webservern",source:"@site/docs/M239/tag-0005.md",sourceDirName:"M239",slug:"/M239/tag-0005",permalink:"/docs/M239/tag-0005",draft:!1,tags:[{label:"M239",permalink:"/docs/tags/m-239"},{label:"Tag 5",permalink:"/docs/tags/tag-5"},{label:"Server",permalink:"/docs/tags/server"},{label:"Webserver",permalink:"/docs/tags/webserver"},{label:"Apache",permalink:"/docs/tags/apache"},{label:"Security",permalink:"/docs/tags/security"},{label:"curl",permalink:"/docs/tags/curl"}],version:"current",frontMatter:{title:"Tag 5",tags:["M239","Tag 5","Server","Webserver","Apache","Security","curl"]},sidebar:"tutorialSidebar",previous:{title:"Tag 4",permalink:"/docs/M239/tag-0004"},next:{title:"Tag 6",permalink:"/docs/M239/tag-0006"}},l={},s=[{value:"1 Security bei Webservern",id:"1-security-bei-webservern",level:2},{value:"1.1 Informationen gegen aussen",id:"11-informationen-gegen-aussen",level:3}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-5-security"},"Tag 5: Security"),(0,a.kt)("h2",{id:"1-security-bei-webservern"},"1 Security bei Webservern"),(0,a.kt)("h3",{id:"11-informationen-gegen-aussen"},"1.1 Informationen gegen aussen"),(0,a.kt)("p",null,"Mit dem Werkzeug ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," k\xf6nnen verschiedene Informationen \xfcber einen Server herausgefunden werden. Um die Informationen unseres Webservers zu bekommen, kann folgender Befehl genutzt werden:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"curl -I http://apache")),(0,a.kt)("p",null,"Ein \xe4hnlicher Output wie unten sollte herauskommen:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'HTTP/1.1 200 OK\nDate: Sun, 13 Mar 2022 15:03:13 GMT\nServer: Apache/2.4.46 (Ubuntu)\nLast-Modified: Mon, 07 Mar 2022 07:38:59 GMT\nETag: "a0-5d99bf5207cb4"\nAccept-Ranges: bytes\nContent-Length: 160\nVary: Accept-Encoding\nContent-Type: text/html\n')),(0,a.kt)("p",null,"Mit der Default-Konfiguration kann jeder die Version des Apache sehen und auf welchem Betriebsystem es l\xe4uft. Damit dies nicht jeder sehen kann, muss dies in der Security-Konfiguration angepasst werden.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-config",metastring:'title="/etc/apache2/conf-available/security.conf"',title:'"/etc/apache2/conf-available/security.conf"'},"ServerTokens Prod\n")),(0,a.kt)("p",null,"Somit ergibt sich folgende Ausgabe mit ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),":  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'HTTP/1.1 200 OK\nDate: Sun, 13 Mar 2022 15:03:13 GMT\nServer: Apache\nLast-Modified: Mon, 07 Mar 2022 07:38:59 GMT\nETag: "a0-5d99bf5207cb4"\nAccept-Ranges: bytes\nContent-Length: 160\nVary: Accept-Encoding\nContent-Type: text/html\n')))}p.isMDXComponent=!0}}]);