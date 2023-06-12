"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[67043],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=g(t),c=a,m=d["".concat(s,".").concat(c)]||d[c]||p[c]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},75188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var r=t(87462),a=(t(67294),t(3905));const o={title:"Tag 9",tags:["M239","Tag 9","Server","Webserver","Apache","V-Hosting","Logging"]},i="Tag 9: V-Hosting",l={unversionedId:"M239/tag-0009",id:"M239/tag-0009",title:"Tag 9",description:"1 Logging mit V-Hosting",source:"@site/docs/M239/tag-0009.md",sourceDirName:"M239",slug:"/M239/tag-0009",permalink:"/docs/M239/tag-0009",draft:!1,tags:[{label:"M239",permalink:"/docs/tags/m-239"},{label:"Tag 9",permalink:"/docs/tags/tag-9"},{label:"Server",permalink:"/docs/tags/server"},{label:"Webserver",permalink:"/docs/tags/webserver"},{label:"Apache",permalink:"/docs/tags/apache"},{label:"V-Hosting",permalink:"/docs/tags/v-hosting"},{label:"Logging",permalink:"/docs/tags/logging"}],version:"current",frontMatter:{title:"Tag 9",tags:["M239","Tag 9","Server","Webserver","Apache","V-Hosting","Logging"]},sidebar:"tutorialSidebar",previous:{title:"Tag 8",permalink:"/docs/M239/tag-0008"},next:{title:"Tag 10",permalink:"/docs/M239/tag-0010"}},s={},g=[{value:"1 Logging mit V-Hosting",id:"1-logging-mit-v-hosting",level:2},{value:"1.1 Auftrag 1: Logging",id:"11-auftrag-1-logging",level:3},{value:"1.2 Auftrag 2: Custom-Log",id:"12-auftrag-2-custom-log",level:3},{value:"1.3 Auftrag 3: LogLevel",id:"13-auftrag-3-loglevel",level:3},{value:"1.4 Auftrag: Ausprobieren, Zusatzmodul",id:"14-auftrag-ausprobieren-zusatzmodul",level:3}],u={toc:g},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-9-v-hosting"},"Tag 9: V-Hosting"),(0,a.kt)("h2",{id:"1-logging-mit-v-hosting"},"1 Logging mit V-Hosting"),(0,a.kt)("h3",{id:"11-auftrag-1-logging"},"1.1 Auftrag 1: Logging"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Konfigurieren Sie Ihre VHost-Umgebungen nun so, dass die Log-Dateien !pro VHost! erstellt werden. Die Log-Dateien sollen einen cleveren Namen haben.")),(0,a.kt)("p",null,'Um den Pfad/Namen der Log-Datei anzupassen, muss dies in der jeweiligen Websiten-Config (im Directory "sites-available/") angepasst werden.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-config"},"ErrrorLog ${APACHE_LOG_DIR}/panico/error.log\nCustomLog ${APACHE_LOG_DIR}/panico/access.log combined\n")),(0,a.kt)("h3",{id:"12-auftrag-2-custom-log"},"1.2 Auftrag 2: Custom-Log"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Passen Sie die Ausgabe des Custom-Logs auf eigene Bed\xfcrfnisse an. Probieren Sie die \xc4nderung aus.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-config"},'CustomLog ${APACHE_LOG_DIR}/panico/access.log "[Client-IP: %a] [Time: %t] [Response size: %B Bytes] [Method: %m] [URL: %U] [Status: %>s]"\n')),(0,a.kt)("p",null,"Ausgabe:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-config"},"[Client-IP: 10.0.0.200] [Time: [29/Apr/2022:21:12:11 +0200]] [Response size: 137 Bytes] [Method: GET] [URL: /index.html] [Status: 200]\n")),(0,a.kt)("p",null,"Alle verf\xfcgbaren Variablen f\xfcr die Log-Dateien, k\xf6nnen ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_log_config.html"},"hier")," gefunden werden."),(0,a.kt)("h3",{id:"13-auftrag-3-loglevel"},"1.3 Auftrag 3: LogLevel"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'Produzieren Sie auf Ihrer Webseite "Fehler" (Zum Beispiel PHP-Konfiguration falsch/Webseite nicht erreichbar/etc.) und passen Sie nun den LogLevel des Error-Logs an. Sehen Sie die Ver\xe4nderung in der Information?')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-config"},"LogLevel warn # trace1-8, debug, info, notice, warn, error, crit, alert, emerg\n")),(0,a.kt)("h3",{id:"14-auftrag-ausprobieren-zusatzmodul"},"1.4 Auftrag: Ausprobieren, Zusatzmodul"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Installieren Sie eines der Zusatzmodule zum Thema Logging und recherchieren Sie die Funktionsweise des Moduls. F\xfchren Sie einen Test des Moduls durch.")),(0,a.kt)("p",null,"Um anzuzeigen welche Module geladen sind, kann der Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"apachectl -M")," genutzt werden."),(0,a.kt)("p",null,"Um alle Module anzuzeigen, die installiert werden k\xf6nnen, kann der Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt search libapache2-mod-")," genutzt werden."),(0,a.kt)("p",null,"Ein Modul kann \xfcber den Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo a2enmod MODULNAME")," aktiviert werden. (Deaktivieren mit ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo a2dismod MODULNAME"),")"),(0,a.kt)("p",null,"Nachdem ein Modul aktiviert wurde, muss Apache neugestartet werden."))}p.isMDXComponent=!0}}]);