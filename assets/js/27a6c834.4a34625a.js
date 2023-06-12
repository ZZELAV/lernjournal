"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[51288],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"Tag 4",tags:["M239","Tag 4","Server","Webserver","Apache"]},o="Tag 4: Apache",l={unversionedId:"M239/tag-0004",id:"M239/tag-0004",title:"Tag 4",description:"1 Installation Apache mit Default Website",source:"@site/docs/M239/tag-0004.md",sourceDirName:"M239",slug:"/M239/tag-0004",permalink:"/docs/M239/tag-0004",draft:!1,tags:[{label:"M239",permalink:"/docs/tags/m-239"},{label:"Tag 4",permalink:"/docs/tags/tag-4"},{label:"Server",permalink:"/docs/tags/server"},{label:"Webserver",permalink:"/docs/tags/webserver"},{label:"Apache",permalink:"/docs/tags/apache"}],version:"current",frontMatter:{title:"Tag 4",tags:["M239","Tag 4","Server","Webserver","Apache"]},sidebar:"tutorialSidebar",previous:{title:"Tag 3",permalink:"/docs/M239/tag-0003"},next:{title:"Tag 5",permalink:"/docs/M239/tag-0005"}},c={},s=[{value:"1 Installation Apache mit Default Website",id:"1-installation-apache-mit-default-website",level:2},{value:"1.1 Installation",id:"11-installation",level:3},{value:"1.2 Konfiguration DNS",id:"12-konfiguration-dns",level:3},{value:"1.3 Konfiguration Website",id:"13-konfiguration-website",level:3},{value:"1.4 Struktur Apache",id:"14-struktur-apache",level:2}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tag-4-apache"},"Tag 4: Apache"),(0,r.kt)("h2",{id:"1-installation-apache-mit-default-website"},"1 Installation Apache mit Default Website"),(0,r.kt)("h3",{id:"11-installation"},"1.1 Installation"),(0,r.kt)("p",null,"F\xfcr die Installtion von Apache, kann folgender Befehl ausgef\xfchrt werden:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"sudo apt install apache2\n")),(0,r.kt)("p",null,"Nach der Installation kann die Default Website \xfcber ",(0,r.kt)("a",{parentName:"p",href:"http://localhost"},"http://localhost"),' erreicht werden. Jetzt kann auch von der "BIND" VM \xfcber den Hostname die Website erreicht werden.'),(0,r.kt)("p",null,"Default Config -> /etc/apache2/sites-available/000-default.conf"),(0,r.kt)("p",null,"Log -> /var/log/apache2/"),(0,r.kt)("h3",{id:"12-konfiguration-dns"},"1.2 Konfiguration DNS"),(0,r.kt)("p",null,"Damit die Seite \xfcber einen sch\xf6nen Namen erreichbar ist, muss dies im DNS eingetragen werden. (Siehe ",(0,r.kt)("a",{parentName:"p",href:"/docs/M239/tag-0003#132-forward-zone"},"Forward-Zone")," & ",(0,r.kt)("a",{parentName:"p",href:"/docs/M239/tag-0003#133-reverse-zone"},"Reverse-Zone"),")"),(0,r.kt)("h3",{id:"13-konfiguration-website"},"1.3 Konfiguration Website"),(0,r.kt)("p",null,"Website Directory -> /var/www/"),(0,r.kt)("p",null,"Um eine neue eigene Website zu schreiben, muss im Website Directory ein neuer Ordner erstellt werden, in dem dann alle Dateien hineinkommen, die f\xfcr die Website gebraucht werden."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/appendix/M239/apache_config"},"Apache konfigurieren")),(0,r.kt)("h2",{id:"14-struktur-apache"},"1.4 Struktur Apache"),(0,r.kt)("p",null,"Folgend die Struktur vom Apache Directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},".\n|-- apache2.conf // <- Hauptkonfigurationsdatei f\xfcr apache\n|-- conf-available // <- Verzeichnis mit allen m\xf6glichen/verf\xfcgbaren Konfigurationen\n|   |-- charset.conf\n|   |-- localized-error-pages.conf\n|   |-- other-vhosts-access-log.conf\n|   |-- security.conf\n|   `-- serve-cgi-bin.conf\n|-- conf-enabled // <- Verzeichnis mit allen aktivieren Konfigurationen\n|   |-- charset.conf -> ../conf-available/charset.conf\n|   |-- localized-error-pages.conf -> ../conf-available/localized-error-pages.conf\n|   |-- other-vhosts-access-log.conf -> ../conf-available/other-vhosts-access-log.conf\n|   |-- security.conf -> ../conf-available/security.conf\n|   `-- serve-cgi-bin.conf -> ../conf-available/serve-cgi-bin.conf\n|-- envvars // Umgebungsvariablen f\xfcr den Webserver\n|-- magic // Einstellungen f\xfcr Mime-Types (Audio/Video/Text/usw.)\n|-- mods-available // <- Verzeichnis mit allen m\xf6glichen/verf\xfcgbaren Modulen\n|   |-- access_compat.load\n|   |-- actions.conf\n|   |-- // und weitere\n|-- mods-enabled // <- Verzeichnis mit allen aktivierten Modulen\n|   |-- access_compat.load -> ../mods-available/access_compat.load\n|   |-- alias.conf -> ../mods-available/alias.conf\n|   |-- // und weitere\n|-- ports.conf // <- Port-Konfigurationen f\xfcr den ganzen Webserver\n|-- sites-available // Verzeichnis mit allen m\xf6glichen/vorkonfigurierten Webseiten\n|   |-- 000-default.conf\n|   `-- default-ssl.conf\n`-- sites-enabled // Verzeichnis mit allen aktivierten Webseiten\n    `-- 000-default.conf -> ../sites-available/000-default.conf\n")))}f.isMDXComponent=!0}}]);