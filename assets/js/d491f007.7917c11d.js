"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[67043],{42600:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=i(85893),a=i(11151);const s={title:"Tag 9",tags:["M239","Tag 9","Server","Webserver","Apache","V-Hosting","Logging"]},t="Tag 9: V-Hosting",o={id:"M239/tag-0009",title:"Tag 9",description:"1 Logging mit V-Hosting",source:"@site/docs/M239/tag-0009.md",sourceDirName:"M239",slug:"/M239/tag-0009",permalink:"/docs/M239/tag-0009",draft:!1,unlisted:!1,tags:[{label:"M239",permalink:"/docs/tags/m-239"},{label:"Tag 9",permalink:"/docs/tags/tag-9"},{label:"Server",permalink:"/docs/tags/server"},{label:"Webserver",permalink:"/docs/tags/webserver"},{label:"Apache",permalink:"/docs/tags/apache"},{label:"V-Hosting",permalink:"/docs/tags/v-hosting"},{label:"Logging",permalink:"/docs/tags/logging"}],version:"current",frontMatter:{title:"Tag 9",tags:["M239","Tag 9","Server","Webserver","Apache","V-Hosting","Logging"]},sidebar:"tutorialSidebar",previous:{title:"Tag 8",permalink:"/docs/M239/tag-0008"},next:{title:"Tag 10",permalink:"/docs/M239/tag-0010"}},l={},d=[{value:"1 Logging mit V-Hosting",id:"1-logging-mit-v-hosting",level:2},{value:"1.1 Auftrag 1: Logging",id:"11-auftrag-1-logging",level:3},{value:"1.2 Auftrag 2: Custom-Log",id:"12-auftrag-2-custom-log",level:3},{value:"1.3 Auftrag 3: LogLevel",id:"13-auftrag-3-loglevel",level:3},{value:"1.4 Auftrag: Ausprobieren, Zusatzmodul",id:"14-auftrag-ausprobieren-zusatzmodul",level:3}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tag-9-v-hosting",children:"Tag 9: V-Hosting"}),"\n",(0,r.jsx)(n.h2,{id:"1-logging-mit-v-hosting",children:"1 Logging mit V-Hosting"}),"\n",(0,r.jsx)(n.h3,{id:"11-auftrag-1-logging",children:"1.1 Auftrag 1: Logging"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Konfigurieren Sie Ihre VHost-Umgebungen nun so, dass die Log-Dateien !pro VHost! erstellt werden. Die Log-Dateien sollen einen cleveren Namen haben."})}),"\n",(0,r.jsx)(n.p,{children:'Um den Pfad/Namen der Log-Datei anzupassen, muss dies in der jeweiligen Websiten-Config (im Directory "sites-available/") angepasst werden.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-config",children:"ErrrorLog ${APACHE_LOG_DIR}/panico/error.log\r\nCustomLog ${APACHE_LOG_DIR}/panico/access.log combined\n"})}),"\n",(0,r.jsx)(n.h3,{id:"12-auftrag-2-custom-log",children:"1.2 Auftrag 2: Custom-Log"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Passen Sie die Ausgabe des Custom-Logs auf eigene Bed\xfcrfnisse an. Probieren Sie die \xc4nderung aus."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-config",children:'CustomLog ${APACHE_LOG_DIR}/panico/access.log "[Client-IP: %a] [Time: %t] [Response size: %B Bytes] [Method: %m] [URL: %U] [Status: %>s]"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Ausgabe:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-config",children:"[Client-IP: 10.0.0.200] [Time: [29/Apr/2022:21:12:11 +0200]] [Response size: 137 Bytes] [Method: GET] [URL: /index.html] [Status: 200]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Alle verf\xfcgbaren Variablen f\xfcr die Log-Dateien, k\xf6nnen ",(0,r.jsx)(n.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_log_config.html",children:"hier"})," gefunden werden."]}),"\n",(0,r.jsx)(n.h3,{id:"13-auftrag-3-loglevel",children:"1.3 Auftrag 3: LogLevel"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:'Produzieren Sie auf Ihrer Webseite "Fehler" (Zum Beispiel PHP-Konfiguration falsch/Webseite nicht erreichbar/etc.) und passen Sie nun den LogLevel des Error-Logs an. Sehen Sie die Ver\xe4nderung in der Information?'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-config",children:"LogLevel warn # trace1-8, debug, info, notice, warn, error, crit, alert, emerg\n"})}),"\n",(0,r.jsx)(n.h3,{id:"14-auftrag-ausprobieren-zusatzmodul",children:"1.4 Auftrag: Ausprobieren, Zusatzmodul"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Installieren Sie eines der Zusatzmodule zum Thema Logging und recherchieren Sie die Funktionsweise des Moduls. F\xfchren Sie einen Test des Moduls durch."})}),"\n",(0,r.jsxs)(n.p,{children:["Um anzuzeigen welche Module geladen sind, kann der Befehl ",(0,r.jsx)(n.code,{children:"apachectl -M"})," genutzt werden."]}),"\n",(0,r.jsxs)(n.p,{children:["Um alle Module anzuzeigen, die installiert werden k\xf6nnen, kann der Befehl ",(0,r.jsx)(n.code,{children:"sudo apt search libapache2-mod-"})," genutzt werden."]}),"\n",(0,r.jsxs)(n.p,{children:["Ein Modul kann \xfcber den Befehl ",(0,r.jsx)(n.code,{children:"sudo a2enmod MODULNAME"})," aktiviert werden. (Deaktivieren mit ",(0,r.jsx)(n.code,{children:"sudo a2dismod MODULNAME"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"Nachdem ein Modul aktiviert wurde, muss Apache neugestartet werden."})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>t});var r=i(67294);const a={},s=r.createContext(a);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);