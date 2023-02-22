"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Apache Config",c={unversionedId:"M239/apache_config",id:"M239/apache_config",title:"Apache Config",description:"Config aktivieren:",source:"@site/appendix/M239/apache_config.md",sourceDirName:"M239",slug:"/M239/apache_config",permalink:"/appendix/M239/apache_config",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tag 5 - 01",permalink:"/appendix/M226B/UML/tag5_01"},next:{title:"Dienste steuern",permalink:"/appendix/M239/dienste_steuern"}},l={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"apache-config"},"Apache Config"),(0,a.kt)("p",null,"Config aktivieren:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"sudo a2ensite <CONFIG>\n")),(0,a.kt)("p",null,"Config deaktivieren:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"sudo a2dissite <CONFIG>\n")),(0,a.kt)("admonition",{title:"Wichtig",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Nachdem eine Config aktiviert/deaktivert wurde, muss Apache neu geladen werden (oder neu gestartet).  "),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"sudo systemctl reload apache2\nsudo systemctl restart apache2\n"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Config-Datei:"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-config",metastring:'title="/etc/apache2/sites-available/001-meineseite.conf"',title:'"/etc/apache2/sites-available/001-meineseite.conf"'},'# Wir h\xf6ren auf alle Netzwerkschnittstellen auf dem TCP-Port 80\n<VirtualHost *:80> \n    # Servername unserer Webseite\n    ServerName example.com \n    # Wie unsere Webseite auch genannt wird\n    ServerAlias www.example.com \n    # Kontakt bei Problemen\n    ServerAdmin webmaster@example.com \n    # Ordner mit der Webseite drin <- index.html\n    DocumentRoot /var/www/meineseite \n    # Wie detailliert wollen wir Log-Informationen sehen (emerg, alert, critical, error, warn, notice, info, debug)\n    LogLevel warn\n    # Wo sollen die Error-Logs gespeichert werden\n    ErrorLog /var/log/apache2/meineseite/error.log\n    # Wie sollen die Access Logs aussehen\n    LogFormat "%h %l %u %t \\"%r\\" %>s %b \\"%{Referer}i\\" \\"%{User-agent}i\\"" combined\n    # Wo sollen die Access-Logs gespeichert werden\n    CustomLog /var/log/apache2/meineseite/customlog.log combined\n</VirtualHost>\n')))}m.isMDXComponent=!0}}]);