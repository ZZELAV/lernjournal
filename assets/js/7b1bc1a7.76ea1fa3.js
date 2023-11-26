"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[15380],{10014:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=s(85893),r=s(11151);const a={title:"Tag 11",tags:["M239","Tag 11","Server","Webserver","Apache","Apache Modules","SSL"]},i="Tag 11: SSL",l={id:"M239/tag-0011",title:"Tag 11",description:"1 SSL",source:"@site/docs/M239/tag-0011.md",sourceDirName:"M239",slug:"/M239/tag-0011",permalink:"/docs/M239/tag-0011",draft:!1,unlisted:!1,tags:[{label:"M239",permalink:"/docs/tags/m-239"},{label:"Tag 11",permalink:"/docs/tags/tag-11"},{label:"Server",permalink:"/docs/tags/server"},{label:"Webserver",permalink:"/docs/tags/webserver"},{label:"Apache",permalink:"/docs/tags/apache"},{label:"Apache Modules",permalink:"/docs/tags/apache-modules"},{label:"SSL",permalink:"/docs/tags/ssl"}],version:"current",frontMatter:{title:"Tag 11",tags:["M239","Tag 11","Server","Webserver","Apache","Apache Modules","SSL"]},sidebar:"tutorialSidebar",previous:{title:"Tag 10",permalink:"/docs/M239/tag-0010"},next:{title:"Tag 12",permalink:"/docs/M239/tag-0012"}},c={},d=[{value:"1 SSL",id:"1-ssl",level:2},{value:"1.1 Auftrag 1: SSL/TLS einrichten und installieren",id:"11-auftrag-1-ssltls-einrichten-und-installieren",level:3},{value:"1.2 Auftrag 2: Erstellen von Keys/Zertifikaten",id:"12-auftrag-2-erstellen-von-keyszertifikaten",level:3},{value:"1.3 Auftrag 3: SSL-Verschl\xfcsselung aktivieren",id:"13-auftrag-3-ssl-verschl\xfcsselung-aktivieren",level:3},{value:"1.4 Auftrag 4: Redirecting",id:"14-auftrag-4-redirecting",level:3}];function o(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tag-11-ssl",children:"Tag 11: SSL"}),"\n",(0,t.jsx)(n.h2,{id:"1-ssl",children:"1 SSL"}),"\n",(0,t.jsx)(n.h3,{id:"11-auftrag-1-ssltls-einrichten-und-installieren",children:"1.1 Auftrag 1: SSL/TLS einrichten und installieren"}),"\n",(0,t.jsx)(n.p,{children:"Als erstes muss OpenSSL installiert werden."}),"\n",(0,t.jsx)(n.p,{children:"Daf\xfcr m\xfcssen die folgenden zwei Commands ausgef\xfchrt werden:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:"sudo apt update\nsudo apt install openssl\n"})}),"\n",(0,t.jsx)(n.p,{children:'Wenn OpenSSL erfolgreich installiert wurde kann das Modul "Rewrite" f\xfcr den Apache Server aktiviert werden.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:"sudo a2enmod rewrite\n"})}),"\n",(0,t.jsx)(n.h3,{id:"12-auftrag-2-erstellen-von-keyszertifikaten",children:"1.2 Auftrag 2: Erstellen von Keys/Zertifikaten"}),"\n",(0,t.jsx)(n.p,{children:"Mit OpenSSL kann jetzt ein selbstsigniertes Zertifikat erstellt werden"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:"sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache.crt\n"})}),"\n",(0,t.jsx)(n.h3,{id:"13-auftrag-3-ssl-verschl\xfcsselung-aktivieren",children:"1.3 Auftrag 3: SSL-Verschl\xfcsselung aktivieren"}),"\n",(0,t.jsx)(n.p,{children:"Die Konfiguration f\xfcr das SSL-Modul liegt unter /etc/apache2/ports.conf."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:"<IfModule mod_ssl.c>\n    Listen 443\n</IfModule>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Jetzt muss das SSL Modul noch aktiviert werden und anschliessend muss der Apache Server neugeladen werden."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:"sudo a2enmod ssl\nsudo systemctl reload apache2\n"})}),"\n",(0,t.jsx)(n.p,{children:"Jetzt kann SSL genutzt werden und daf\xfcr wird eine neue Webseiten-Config erstellt (oder eine bereits bestehende genutzt), die f\xfcr die verschl\xfcsselte Webseite zust\xe4ndig ist."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-config",metastring:'title="/etc/apache2/sites-available/ssl.conf"',children:"<VirtualHost *:443>\n    SSLEngine on\n    SSLCertificateFile /etc/ssl/certs/apache.crt\n    SSLCertificateKeyFile /etc/ssl/private/apache.key\n\n    # Pfad zu den Webinhalten\n    DocumentRoot /var/www/test\n</VirtualHost>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"14-auftrag-4-redirecting",children:"1.4 Auftrag 4: Redirecting"}),"\n",(0,t.jsxs)(n.p,{children:["Um NUR \xfcber die verschl\xfcsselte Webseite erreichbar zu sein, muss die HTTP-Seite auf die HTTPS-Seite umgeleitet werden. Daf\xfcr kann eine der folgenden Konfiguration in die HTTP-Config kopiert werden:",(0,t.jsx)(n.br,{}),"\n","Redirect - Temor\xe4r (302)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-config",children:"<VirtualHost *:80>\n    ServerName www.domain.com\n    Redirect 302 / https://www.domain.com\n</VirtualHost>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Redirect - Permanent (301)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-config",children:"<VirtualHost *:80>\n    ServerName www.domain.com\n    Redirect 301 / https://www.domain.com\n</VirtualHost>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Rewrite"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-config",children:"<VirtualHost *:80>\n  RewriteEngine On\n  RewriteCond %{HTTPS} off\n  RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}\n</VirtualHost>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(67294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);