"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[44391],{42172:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var n=r(85893),s=r(11151);const t={title:"Auftrag 6",tags:["M182","Auftrag 6","Systemsicherheit implementieren","LB2","Security Dashboards"]},u="Security Dashboards ELK (15%)",c={id:"M182/lb2/auftrag-0006",title:"Auftrag 6",description:"Auftrag",source:"@site/docs/M182/lb2/auftrag-0006.md",sourceDirName:"M182/lb2",slug:"/M182/lb2/auftrag-0006",permalink:"/docs/M182/lb2/auftrag-0006",draft:!1,unlisted:!1,tags:[{label:"M182",permalink:"/docs/tags/m-182"},{label:"Auftrag 6",permalink:"/docs/tags/auftrag-6"},{label:"Systemsicherheit implementieren",permalink:"/docs/tags/systemsicherheit-implementieren"},{label:"LB2",permalink:"/docs/tags/lb-2"},{label:"Security Dashboards",permalink:"/docs/tags/security-dashboards"}],version:"current",frontMatter:{title:"Auftrag 6",tags:["M182","Auftrag 6","Systemsicherheit implementieren","LB2","Security Dashboards"]},sidebar:"tutorialSidebar",previous:{title:"Auftrag 5",permalink:"/docs/M182/lb2/auftrag-0005"},next:{title:"Auftrag 7",permalink:"/docs/M182/lb2/auftrag-0007"}},d={},a=[{value:"1 Recherche - Security Dashboards/Rules",id:"1-recherche---security-dashboardsrules",level:2},{value:"1.1 Beschreiben Sie wie die Security Rules allgemein aufgebaut sind (mit Printscreens)",id:"11-beschreiben-sie-wie-die-security-rules-allgemein-aufgebaut-sind-mit-printscreens",level:3},{value:"2 Testing und Doku",id:"2-testing-und-doku",level:2},{value:"2.1 Suchen Sie sich ein Beispiel aus der Liste aus und dokumentieren Sie das Beispiel konkret (mit Printscreens)",id:"21-suchen-sie-sich-ein-beispiel-aus-der-liste-aus-und-dokumentieren-sie-das-beispiel-konkret-mit-printscreens",level:3},{value:"2.2 Versuchen (und dokumentieren Sie den Versuch!) einen Alert f\xfcr Ihre Rule zu generieren (mit Printscreens)",id:"22-versuchen-und-dokumentieren-sie-den-versuch-einen-alert-f\xfcr-ihre-rule-zu-generieren-mit-printscreens",level:3}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"security-dashboards-elk-15",children:"Security Dashboards ELK (15%)"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(41886).Z+"",children:"Auftrag"})}),"\n",(0,n.jsx)(i.h2,{id:"1-recherche---security-dashboardsrules",children:"1 Recherche - Security Dashboards/Rules"}),"\n",(0,n.jsx)(i.h3,{id:"11-beschreiben-sie-wie-die-security-rules-allgemein-aufgebaut-sind-mit-printscreens",children:"1.1 Beschreiben Sie wie die Security Rules allgemein aufgebaut sind (mit Printscreens)"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Ausl\xf6ser (Triggers)"}),": Definiert spezifische Muster oder Ereignisse in den Protokolldaten, wie z.B. bestimmte Ereignis-IDs, Fehlertypen oder ungew\xf6hnliche Aktivit\xe4ten, die eine \xdcberpr\xfcfung ausl\xf6sen."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Bedingungen (Conditions)"}),": Schr\xe4nkt die Ausl\xf6sekriterien weiter ein, indem zus\xe4tzliche Parameter oder Schwellenwerte festgelegt werden, wie z.B. die H\xe4ufigkeit des Auftretens eines Ereignisses oder die Herkunft der Ereignisdaten."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Aktionen (Actions)"}),": Bestimmt, welche Massnahmen ergriffen werden sollen, wenn die Regelbedingungen erf\xfcllt sind. Dazu k\xf6nnen Benachrichtigungen, das Erstellen von Berichten oder die Integration mit anderen Sicherheitssystemen geh\xf6ren."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Risikobewertung (Risk Scoring)"}),": Einige Regeln k\xf6nnen ein Risikobewertungssystem enthalten, das den Schweregrad des ausgel\xf6sten Ereignisses bewertet, um Priorit\xe4ten f\xfcr die Reaktion festzulegen."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Security Dashboard Rule Definition",src:r(72135).Z+"",width:"1058",height:"608"})}),"\n",(0,n.jsx)(i.h2,{id:"2-testing-und-doku",children:"2 Testing und Doku"}),"\n",(0,n.jsx)(i.h3,{id:"21-suchen-sie-sich-ein-beispiel-aus-der-liste-aus-und-dokumentieren-sie-das-beispiel-konkret-mit-printscreens",children:"2.1 Suchen Sie sich ein Beispiel aus der Liste aus und dokumentieren Sie das Beispiel konkret (mit Printscreens)"}),"\n",(0,n.jsxs)(i.p,{children:["Die Regel ",(0,n.jsx)(i.a,{href:"http://192.168.56.105:5601/app/security/rules/id/7e2a3ae5-7d70-11ee-819a-8d76e9abac74",children:"Clearing Windows Event Logs"})," \xfcberpr\xfcft ob z.B. in der ",(0,n.jsx)(i.code,{children:"powershell.exe"})," der Befehl ",(0,n.jsx)(i.code,{children:"Clear-EventLogs"})," ausgef\xfchrt wird. Dies wird alle 5 Minuten \xfcberpr\xfcft. Wurde ein Event-Log gel\xf6scht, generiert er einen Alert."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Security Dashboard Rule Definition",src:r(72135).Z+"",width:"1058",height:"608"})}),"\n",(0,n.jsx)(i.h3,{id:"22-versuchen-und-dokumentieren-sie-den-versuch-einen-alert-f\xfcr-ihre-rule-zu-generieren-mit-printscreens",children:"2.2 Versuchen (und dokumentieren Sie den Versuch!) einen Alert f\xfcr Ihre Rule zu generieren (mit Printscreens)"}),"\n",(0,n.jsxs)(i.p,{children:["Sobald ich den Befehl ",(0,n.jsx)(i.code,{children:"Clear-EventLogs"})," in der ",(0,n.jsx)(i.code,{children:"powershell.exe"})," ausf\xfchre, erhalte ich einen Alert."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Security Dashboard Trigger Rule",src:r(14257).Z+"",width:"907",height:"32"})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},41886:(e,i,r)=>{r.d(i,{Z:()=>n});const n=r.p+"assets/files/auftrag06-ab04767fd706a653e1fdb70cdb74865f.pdf"},72135:(e,i,r)=>{r.d(i,{Z:()=>n});const n=r.p+"assets/images/security_dashboard_definition-970e9b577344d33ee667d114a96de41e.png"},14257:(e,i,r)=>{r.d(i,{Z:()=>n});const n="data:image/png;base64,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"},11151:(e,i,r)=>{r.d(i,{Z:()=>c,a:()=>u});var n=r(67294);const s={},t=n.createContext(s);function u(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:u(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);