"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13158],{1894:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=i(85893),s=i(11151);const a={title:"Tag 11",tags:["M126","Tag 11","Cisco ASA 5505","Putty","COM-Port"]},r="Tag 11: Cisco ASA 5505",c={id:"M126/tag-0011",title:"Tag 11",description:"Cisco ASA 5505",source:"@site/docs/M126/tag-0011.md",sourceDirName:"M126",slug:"/M126/tag-0011",permalink:"/docs/M126/tag-0011",draft:!1,unlisted:!1,tags:[{label:"M126",permalink:"/docs/tags/m-126"},{label:"Tag 11",permalink:"/docs/tags/tag-11"},{label:"Cisco ASA 5505",permalink:"/docs/tags/cisco-asa-5505"},{label:"Putty",permalink:"/docs/tags/putty"},{label:"COM-Port",permalink:"/docs/tags/com-port"}],version:"current",frontMatter:{title:"Tag 11",tags:["M126","Tag 11","Cisco ASA 5505","Putty","COM-Port"]},sidebar:"tutorialSidebar",previous:{title:"Tag 10",permalink:"/docs/M126/tag-0010"},next:{title:"Tag 12",permalink:"/docs/M126/tag-0012"}},o={},d=[{value:"1 Was haben wir gemacht?",id:"1-was-haben-wir-gemacht",level:2},{value:"2 Wie haben wir das gemacht?",id:"2-wie-haben-wir-das-gemacht",level:2},{value:"3 Was habe ich verstanden?",id:"3-was-habe-ich-verstanden",level:2},{value:"4 Was habe ich noch nicht richtig verstanden?",id:"4-was-habe-ich-noch-nicht-richtig-verstanden",level:2}];function h(e){const n={admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tag-11-cisco-asa-5505",children:"Tag 11: Cisco ASA 5505"}),"\n",(0,t.jsx)(n.admonition,{title:"Thema",type:"note",children:(0,t.jsx)(n.p,{children:"Cisco ASA 5505"})}),"\n",(0,t.jsx)(n.h2,{id:"1-was-haben-wir-gemacht",children:"1 Was haben wir gemacht?"}),"\n",(0,t.jsx)(n.p,{children:"Wir hatten heute die Theoriepr\xfcfung und danach haben wir mit der Cisco ASA 5505 gearbeitet."}),"\n",(0,t.jsxs)(n.p,{children:["Nachdem wir das Ger\xe4t an den Strom angeschlossen haben und es per Serial-Kabel an den Laptop angeschlossen haben, konnten wir \xfcber einen COM-Port auf die ASA zugreifen.\r\nDaf\xfcr haben wir das Tool Putty genutzt.\r\n",(0,t.jsx)(n.img,{alt:"Putty",src:i(85325).Z+"",width:"679",height:"677"})]}),"\n",(0,t.jsx)(n.p,{children:"Um die ASA zur\xfcckzusetzen muss es vom Strom genommen werden und beim Einstecken muss die ESC-Taste gedr\xfcckt werden. Jetzt m\xfcssen eine Folge von Commands eingegeben werden:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"confreg 0x41 -> Das Config Register updaten"}),"\n",(0,t.jsx)(n.li,{children:"boot -> starten"}),"\n",(0,t.jsx)(n.li,{children:"en -> in den \u201cPriviledged Mode\xbb gelangen und Passwort setzen"}),"\n",(0,t.jsx)(n.li,{children:"write erase -> Startup-Config l\xf6schen"}),"\n",(0,t.jsx)(n.li,{children:"conf t -> Config Mode starten"}),"\n",(0,t.jsx)(n.li,{children:"config-register 0x01 -> Configuration Register zur\xfccksetzen"}),"\n",(0,t.jsx)(n.li,{children:"exit -> Config Mode verlassen"}),"\n",(0,t.jsx)(n.li,{children:"show version -> Version anzeigen, sollte \xabConfiguration register is 0x41 (will be 0x1 at next reload)\xbb sein"}),"\n",(0,t.jsx)(n.li,{children:"wr -> geschriebe Einstellungen speichern (Abk\xfcrzung f\xfcr write memory)"}),"\n",(0,t.jsx)(n.li,{children:"reload -> Ger\xe4t neustarten"}),"\n",(0,t.jsx)(n.li,{children:"en"}),"\n",(0,t.jsx)(n.li,{children:"conf t"}),"\n",(0,t.jsx)(n.li,{children:"config factory [IP] -> IP-Adresse setzen, der Standard ist 192.168.1.1/24"}),"\n",(0,t.jsx)(n.li,{children:"wr"}),"\n",(0,t.jsxs)(n.li,{children:["sh start -> Start Config \xfcberpr\xfcfen, kontrollieren ob die IP richtig gesetzt wurde\r\n",(0,t.jsx)(n.img,{alt:"Startup Config",src:i(88684).Z+"",width:"720",height:"1125"})]}),"\n",(0,t.jsx)(n.li,{children:"sh run -> Run Config \xfcberpr\xfcfen, das ist die laufende Konfiguration, die im RAM gespeichert ist"}),"\n",(0,t.jsx)(n.li,{children:"sh interface ip brief -> VLAN Config anschauen"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Da die Zeit nicht mehr ausgereicht hat, haben wir hier gestoppt und machen n\xe4chste Woche weiter."}),"\n",(0,t.jsx)(n.h2,{id:"2-wie-haben-wir-das-gemacht",children:"2 Wie haben wir das gemacht?"}),"\n",(0,t.jsx)(n.p,{children:"Wir haben in Zweier-Gruppen eine Cisco ASA 5505 erhalten und haben diese mithilfe einer Anleitung konfiguriert."}),"\n",(0,t.jsx)(n.h2,{id:"3-was-habe-ich-verstanden",children:"3 Was habe ich verstanden?"}),"\n",(0,t.jsx)(n.p,{children:"Ich habe verstanden wie man die ASA per Serial-Kabel an den Laptop anschliesset und per COM-Port und Putty sich darauf verbindet. Wenn man das Serial-Kabel angeschlossen hat, muss man im Ger\xe4te-Manager den richtigen COM-Port finden, dieser kann jedes Mal anders sein."}),"\n",(0,t.jsx)(n.h2,{id:"4-was-habe-ich-noch-nicht-richtig-verstanden",children:"4 Was habe ich noch nicht richtig verstanden?"}),"\n",(0,t.jsx)(n.p,{children:"Ich habe noch ein bisschen M\xfche mit dem Verstehen der Cisco Commands, da ich nicht so oft mit Cisco Ger\xe4ten gearbeitet habe."})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85325:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/cisco_asa_com_connection-35a8314b61a13de6e1488ca2e544cb73.png"},88684:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/cisco_asa_startup_config-470f7e881a34df8ad8d794a213a2b050.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(67294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);