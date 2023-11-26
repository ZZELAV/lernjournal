"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[50214],{67152:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(85893),a=t(11151);const i={},s="Tag 2 - 02",o={id:"M226B/UML/tag2_02",title:"Tag 2 - 02",description:"",source:"@site/appendix/M226B/UML/tag2_02.md",sourceDirName:"M226B/UML",slug:"/M226B/UML/tag2_02",permalink:"/appendix/M226B/UML/tag2_02",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tag 2 - 01",permalink:"/appendix/M226B/UML/tag2_01"},next:{title:"Tag 3 - 01",permalink:"/appendix/M226B/UML/tag3_01"}},c={},l=[];function u(n){const e={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"tag-2---02",children:"Tag 2 - 02"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-uml",children:'@startuml\nskin rose\nclass App {\n    + main(String[] args) : void\n}\nclass Person {\n    # nachname : String\n    # Person(String nachname)\n    + setNachname(String nachname) : void\n    + getNachname() : String\n    + vorstellen() : String\n}\nclass Mitarbeiter {\n    # personalNummer : int\n    # Mitarbeiter(String nachname, int personalNummer)\n    # Mitarbeiter(String nachname)\n    + setPersonalNummer(int personalNummer) : void\n    + getPersonalNummer() : int\n    + vorstellen() : String\n}\nclass Lehrer {\n    - fachbereich : String\n    + Lehrer(String nachname, int personalnummer, String fachbereich)\n    + getFachbereich() : String \n    + setFachbereich(String fachbereich) : void\n    + vorstellen() : String\n}\nclass Angestellte {\n    - schulleitung : boolean\n    + Angestellte(String nachname)\n    + Angestellte(String nachname, int personalNummer)\n    + setSchulleitung(boolean schulleitung) : void\n    + isSchulleitung() : boolean\n    + vorstellen() : String\n}\nclass Lernende {\n    - nummer : int \n    + Lernende(String nachname)\n    + setNummer(int nummer) : void\n    + getNummer() : int\n    + vorstellen() : String\n}\n\nPerson <|-- Mitarbeiter : "extends"\nPerson <|-- Lernende : "extends"\nMitarbeiter <|-- Lehrer : "extends"\nMitarbeiter <|-- Angestellte : "extends"\n@enduml\n'})})]})}function m(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>s});var r=t(67294);const a={},i=r.createContext(a);function s(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);