"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[64638],{73090:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=i(85893),t=i(11151);const s={title:"Tag 13",tags:["M126","Tag 13","Cisco ASA 5505","WAN","LAN","DMZ","Security-Level"]},r="Tag 12: Cisco ASA 5505",c={id:"M126/tag-0013",title:"Tag 13",description:"Cisco ASA 5505",source:"@site/docs/M126/tag-0013.md",sourceDirName:"M126",slug:"/M126/tag-0013",permalink:"/docs/M126/tag-0013",draft:!1,unlisted:!1,tags:[{label:"M126",permalink:"/docs/tags/m-126"},{label:"Tag 13",permalink:"/docs/tags/tag-13"},{label:"Cisco ASA 5505",permalink:"/docs/tags/cisco-asa-5505"},{label:"WAN",permalink:"/docs/tags/wan"},{label:"LAN",permalink:"/docs/tags/lan"},{label:"DMZ",permalink:"/docs/tags/dmz"},{label:"Security-Level",permalink:"/docs/tags/security-level"}],version:"current",frontMatter:{title:"Tag 13",tags:["M126","Tag 13","Cisco ASA 5505","WAN","LAN","DMZ","Security-Level"]},sidebar:"tutorialSidebar",previous:{title:"Tag 12",permalink:"/docs/M126/tag-0012"},next:{title:"Tag 14",permalink:"/docs/M126/tag-0014"}},d={},h=[{value:"1 Was haben wir gemacht?",id:"1-was-haben-wir-gemacht",level:2},{value:"2 Wie haben wir das gemacht?",id:"2-wie-haben-wir-das-gemacht",level:2},{value:"3 Was habe ich verstanden?",id:"3-was-habe-ich-verstanden",level:2},{value:"4 Was habe ich noch nicht richtig verstanden?",id:"4-was-habe-ich-noch-nicht-richtig-verstanden",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"tag-12-cisco-asa-5505",children:"Tag 12: Cisco ASA 5505"}),"\n",(0,a.jsx)(n.admonition,{title:"Thema",type:"note",children:(0,a.jsx)(n.p,{children:"Cisco ASA 5505"})}),"\n",(0,a.jsx)(n.h2,{id:"1-was-haben-wir-gemacht",children:"1 Was haben wir gemacht?"}),"\n",(0,a.jsx)(n.p,{children:"Heute haben weiter mit der Cisco ASA gearbeitet. Wir haben uns wieder in den Zweier-Gruppen zusammengesetzt und haben dort weitergemacht, wo wir letzte Woche stehen, geblieben sind."}),"\n",(0,a.jsxs)(n.p,{children:["Unser Auftrag war es WAN, LAN und DMZ zu konfigurieren.\nDie Konfiguration konnten wir auf der ",(0,a.jsx)(n.a,{href:"https://www.cisco.com/c/en/us/support/docs/security/asa-5500-x-series-next-generation-firewalls/115904-asa-config-dmz-00.html",children:"Cisco-Seite"})," finden. Wir haben diese kopiert und auf unserer ASA eingef\xfcgt."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-config",children:"interface Ethernet0/0\n nameif outside\n security-level 0\n ip address 198.51.100.100 255.255.255.0\n!\ninterface Ethernet0/1\n nameif inside\n security-level 100\n ip address 192.168.0.1 255.255.255.0\n!\ninterface Ethernet0/2\n nameif dmz\n security-level 50\n ip address 192.168.1.1 255.255.255.0\n!\nroute outside 0.0.0.0 0.0.0.0 198.51.100.1\n"})}),"\n",(0,a.jsx)(n.p,{children:"Security-Level: Das LAN wird auf Security-Level 100 gesetzt, die DMZ auf 50 und das WAN auf 0. Man arbeitet bei den Security-Levels von innen nach aussen, innen ist es am h\xf6chsten und aussen am tiefsten. Die DMZ, die eine SL von 50 hat, kann somit nicht auf das LAN zugreifen, kann aber zum WAN sprechen."}),"\n",(0,a.jsx)(n.h2,{id:"2-wie-haben-wir-das-gemacht",children:"2 Wie haben wir das gemacht?"}),"\n",(0,a.jsx)(n.p,{children:"Wir haben dies, wie in den letzten zwei Wochen praktisch an der ASA durchgef\xfchrt. Wir haben uns per SSH auf die ASA verbunden und die Konfiguration geschrieben."}),"\n",(0,a.jsx)(n.h2,{id:"3-was-habe-ich-verstanden",children:"3 Was habe ich verstanden?"}),"\n",(0,a.jsx)(n.p,{children:"Ich habe verstanden, wof\xfcr man solche \xabZonen\xbb erstellt. Somit kann das interne Netzwerk wirklich als internes Netzwerk genutzt werden und man kann im gleichen Netzwerk trotzdem noch Server, die von aussen zugreifbar sein sollen, betreiben."}),"\n",(0,a.jsx)(n.h2,{id:"4-was-habe-ich-noch-nicht-richtig-verstanden",children:"4 Was habe ich noch nicht richtig verstanden?"}),"\n",(0,a.jsx)(n.p,{children:"Ich verstehe noch nicht ganz, wie man die Konfiguration in einem produktiven Bereich durchf\xfchren soll, damit sie richtig funktioniert und auch was n\xfctzt."})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var a=i(67294);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);