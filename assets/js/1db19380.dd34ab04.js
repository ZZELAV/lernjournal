"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[27072],{57843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var s=n(85893),a=n(11151);const r={title:"Tag 8",tags:["M182","Tag 8","Systemsicherheit implementieren","SMB, NMAP"],sidebar_position:1},i="Tag 8",o={id:"M182/tag-0008",title:"Tag 8",description:"",source:"@site/docs/M182/tag-0008.md",sourceDirName:"M182",slug:"/M182/tag-0008",permalink:"/docs/M182/tag-0008",draft:!1,unlisted:!1,tags:[{label:"M182",permalink:"/docs/tags/m-182"},{label:"Tag 8",permalink:"/docs/tags/tag-8"},{label:"Systemsicherheit implementieren",permalink:"/docs/tags/systemsicherheit-implementieren"},{label:"SMB, NMAP",permalink:"/docs/tags/smb-nmap"}],version:"current",sidebarPosition:1,frontMatter:{title:"Tag 8",tags:["M182","Tag 8","Systemsicherheit implementieren","SMB, NMAP"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tag 7",permalink:"/docs/M182/tag-0007"},next:{title:"Tag 9",permalink:"/docs/M182/tag-0009"}},c={},m=[];function d(e){const t={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"tag-8",children:"Tag 8"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Nach SMB gucken:\n\n:   ```sudo nmap --script smb-enum-shares -p 445 192.168.32.7 -Pn -n -oN smb1.txt```\n\n\n\nNach Logins gucken:\n\n:   ```ncrack smb://192.168.32.7 --user Administrator -P /usr/share/metasploit-framework/data/wordlists/password.lst -d9```\n\n\n\nNochmals nach SMB gucken:\n\n:   ```sudo nmap --script smb-enum-shares -p 445 192.168.32.7 -Pn -n --script-args smbuser=Administrator,smbpassword=a12345```\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(67294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);