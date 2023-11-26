"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[57241],{9088:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(85893),n=s(11151);const i={title:"Tag 6",tags:["M239","Tag 6","Server","Webserver","Apache","Security"]},a="Tag 6: Security",c={id:"M239/tag-0006",title:"Tag 6",description:"1 Security bei Webservern",source:"@site/docs/M239/tag-0006.md",sourceDirName:"M239",slug:"/M239/tag-0006",permalink:"/docs/M239/tag-0006",draft:!1,unlisted:!1,tags:[{label:"M239",permalink:"/docs/tags/m-239"},{label:"Tag 6",permalink:"/docs/tags/tag-6"},{label:"Server",permalink:"/docs/tags/server"},{label:"Webserver",permalink:"/docs/tags/webserver"},{label:"Apache",permalink:"/docs/tags/apache"},{label:"Security",permalink:"/docs/tags/security"}],version:"current",frontMatter:{title:"Tag 6",tags:["M239","Tag 6","Server","Webserver","Apache","Security"]},sidebar:"tutorialSidebar",previous:{title:"Tag 5",permalink:"/docs/M239/tag-0005"},next:{title:"Tag 7",permalink:"/docs/M239/tag-0007"}},d={},l=[{value:"1 Security bei Webservern",id:"1-security-bei-webservern",level:2},{value:"1.1 Directory sicher erstellen",id:"11-directory-sicher-erstellen",level:3},{value:"2 Selbsttest",id:"2-selbsttest",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"tag-6-security",children:"Tag 6: Security"}),"\n",(0,r.jsx)(t.h2,{id:"1-security-bei-webservern",children:"1 Security bei Webservern"}),"\n",(0,r.jsx)(t.h3,{id:"11-directory-sicher-erstellen",children:"1.1 Directory sicher erstellen"}),"\n",(0,r.jsxs)(t.p,{children:["Um Directory's zu sch\xfctzen, muss das Directory im VirtualHost \xfcber den Tag ",(0,r.jsx)(t.code,{children:"<Directory>"})," konfiguriert werden. In der Konfiguration, kann dann z.B. definiert werden, vom welchem Netzwerk darauf zugegriffen werden."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-config",children:"<VirtualHost *:80>\n    # VirtualHost Konfiguration\n\n    <Directory /subdir>    \n        Options None    \n        AllowOverride None    \n        Order deny,allow    \n        Deny from all    \n        Allow from 10.20.0.0/24  \n    </Directory>\n\n</VirtualHost>\n"})}),"\n",(0,r.jsx)(t.p,{children:"Standardm\xe4ssig kann ein Client das Verzeichnis des Webservers durchsuchen. Um diese Funktion zu deaktivieren kann folgendes in die Config hinzugef\xfcgt werden:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-config",children:"<Directory /subdir>\n    Options -Indexes\n</Directory>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"2-selbsttest",children:"2 Selbsttest"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"PDF Selbsttest Seite 1",src:s(11717).Z+"",width:"1654",height:"2339"}),"\n",(0,r.jsx)(t.img,{alt:"PDF Selbsttest Seite 2",src:s(17054).Z+"",width:"1654",height:"2339"}),"\n",(0,r.jsx)(t.img,{alt:"PDF Selbsttest Seite 3",src:s(72889).Z+"",width:"1654",height:"2339"}),"\n",(0,r.jsx)(t.img,{alt:"PDF Selbsttest Seite 4",src:s(54043).Z+"",width:"1654",height:"2339"})]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11717:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/selbsttest-1-fda241b2bddd5dd7f9913c05baaffc81.png"},17054:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/selbsttest-2-1d7745c3a342b79456b5dc29b7d13d01.png"},72889:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/selbsttest-3-de5c243fbdfa2f14b27cf04f47505cb9.png"},54043:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/selbsttest-4-3dce590f13ff1addb11decfc1bf422bd.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>a});var r=s(67294);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);