"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[56700],{59734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(85893),i=t(11151);const a={},o="Apache Config",s={id:"M239/apache_config",title:"Apache Config",description:"Config aktivieren:",source:"@site/appendix/M239/apache_config.md",sourceDirName:"M239",slug:"/M239/apache_config",permalink:"/appendix/M239/apache_config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tag 5 - 01",permalink:"/appendix/M226B/UML/tag5_01"},next:{title:"Dienste steuern",permalink:"/appendix/M239/dienste_steuern"}},c={},l=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"apache-config",children:"Apache Config"}),"\n",(0,r.jsx)(n.p,{children:"Config aktivieren:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cmd",children:"sudo a2ensite <CONFIG>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Config deaktivieren:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cmd",children:"sudo a2dissite <CONFIG>\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"Wichtig",type:"caution",children:[(0,r.jsx)(n.p,{children:"Nachdem eine Config aktiviert/deaktivert wurde, muss Apache neu geladen werden (oder neu gestartet)."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cmd",children:"sudo systemctl reload apache2\nsudo systemctl restart apache2\n"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"M\xf6gliche Config-Datei:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-config",metastring:'title="/etc/apache2/sites-available/001-meineseite.conf"',children:'# Wir h\xf6ren auf alle Netzwerkschnittstellen auf dem TCP-Port 80\n<VirtualHost *:80> \n    # Servername unserer Webseite\n    ServerName example.com \n    # Wie unsere Webseite auch genannt wird\n    ServerAlias www.example.com \n    # Kontakt bei Problemen\n    ServerAdmin webmaster@example.com \n    # Ordner mit der Webseite drin <- index.html\n    DocumentRoot /var/www/meineseite \n    # Wie detailliert wollen wir Log-Informationen sehen (emerg, alert, critical, error, warn, notice, info, debug)\n    LogLevel warn\n    # Wo sollen die Error-Logs gespeichert werden\n    ErrorLog /var/log/apache2/meineseite/error.log\n    # Wie sollen die Access Logs aussehen\n    LogFormat "%h %l %u %t \\"%r\\" %>s %b \\"%{Referer}i\\" \\"%{User-agent}i\\"" combined\n    # Wo sollen die Access-Logs gespeichert werden\n    CustomLog /var/log/apache2/meineseite/customlog.log combined\n</VirtualHost>\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(67294);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);