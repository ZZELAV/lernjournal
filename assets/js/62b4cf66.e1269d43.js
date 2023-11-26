"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[31396],{93827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var i=t(85893),r=t(11151);const a={},o="Tag 15",d={id:"M226A/theorie-doku/tag-0015",title:"Tag 15",description:"## Videothek",source:"@site/docs/M226A/theorie-doku/tag-0015.md",sourceDirName:"M226A/theorie-doku",slug:"/M226A/theorie-doku/tag-0015",permalink:"/docs/M226A/theorie-doku/tag-0015",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tag 14",permalink:"/docs/M226A/theorie-doku/tag-0014"},next:{title:"Tag 16",permalink:"/docs/M226A/theorie-doku/tag-0016"}},s={},u=[{value:"Videothek",id:"videothek",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tag-15",children:"Tag 15"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.h2,{id:"videothek",children:"Videothek"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plantuml",children:'class Videothek {\n    - kunden : ArrayList\n    - film : ArrayList\n\n    + ausleihen(Kunde kunde, Film film) : void\n    + anmelden(String kundenname, String passwort) : void\n}\n\nclass Kunde {\n    - kundennummer : int\n    - kundenname : String\n    - passwort : String\n    - guthaben : double\n    - filmeAusgeliehen : ArrayList\n\n    + Kunde(int kundenname, int passwort)\n    + getKundennummer() : int\n    + getKundenname() : String\n    + setKundenname(String kundenname) : void\n    + getPasswort() : String\n    + setPasswort(String passwort) : void\n    + filmListe() : String\n}\n\nclass Film {\n    - filmnummer : int\n    - filmname : String\n    - preis : double\n\n    + Film(String filmname, double preis)\n}\n\nclass StreamingServer {\n    - servernummer : int\n    - servername : String\n\n    + linkGenerieren(Kunde kunde, Film film) : String\n}\n\nVideothek "1" o-- "0..*" Kunde\nVideothek "1" o-- "0..*" Film\nVideothek "1" --\x3e "0..*" StreamingServer : nutzt mehrere\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plantuml",children:'participant "App"\nparticipant ": Videothek"\nparticipant ": Kunde"\nparticipant ": Film"\nparticipant ": StreamingServer"\n\n"App" -> ": Kunde" : new()\nactivate ": Kunde"\ndeactivate ": Kunde"\n"App" -> ": Film" : new()\nactivate ": Film"\ndeactivate ": Film"\n"App" -> ": Videothek" : new()\nactivate ": Videothek"\ndeactivate ": Videothek"\n"App" -> ": Videothek" : anmelden("kunde01", "12345678")\nactivate ": Videothek"\n": Videothek" -> ": Videothek" : getKunde(kundenname)\n": Videothek" -> ": Videothek" : stimmt das PW? (true)\n": Videothek" -> ": Videothek" : System.out.println("Anmeldung erfolgreich!")\ndeactivate ": Videothek"\n'})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var i=t(67294);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);