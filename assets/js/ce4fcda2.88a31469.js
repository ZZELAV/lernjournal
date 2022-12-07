"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5519],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(t),m=a,h=g["".concat(l,".").concat(m)]||g[m]||p[m]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[g]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={},o="Tag 4 - 01",c={unversionedId:"M226B/UML/tag4_01",id:"M226B/UML/tag4_01",title:"Tag 4 - 01",description:"",source:"@site/appendix/M226B/UML/tag4_01.md",sourceDirName:"M226B/UML",slug:"/M226B/UML/tag4_01",permalink:"/appendix/M226B/UML/tag4_01",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tag 3 - 02",permalink:"/appendix/M226B/UML/tag3_02"},next:{title:"Tag 5 - 01",permalink:"/appendix/M226B/UML/tag5_01"}},l={},s=[],u={toc:s};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-4---01"},"Tag 4 - 01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-uml"},'@startuml\nskin rose\nclass App {\n    + main(String[] args) : void\n}\nclass Person {\n    # nachname : String\n    - ehepartner : Person\n    # Person(String nachname)\n    + setNachname(String nachname) : void\n    + getNachname() : String\n    + vorstellen() : String\n    # heiraten(Person ehepartner) : void\n    # scheiden() : void\n    + toString() : String\n    + hashCode() : int\n    + equals(Object obj) : boolean\n    + hashCode() : int\n}\nclass Mitarbeiter {\n    # personalNummer : int\n    # Mitarbeiter(String nachname, int personalNummer)\n    # Mitarbeiter(String nachname)\n    + setPersonalNummer(int personalNummer) : void\n    + getPersonalNummer() : int\n    + vorstellen() : String\n    + toString() : String\n    + hashCode() : int\n}\nclass Lehrer {\n    - fachbereich : String\n    + Lehrer(String nachname, String fachbereich)\n    + Lehrer(String nachname, int personalnummer)\n    + Lehrer(String nachname, int personalnummer, String fachbereich)\n    + getFachbereich() : String \n    + setFachbereich(String fachbereich) : void\n    + vorstellen() : String\n    + toString() : String\n}\nclass Angestellte {\n    - schulleitung : boolean\n    + Angestellte(String nachname)\n    + Angestellte(String nachname, int personalNummer)\n    + setSchulleitung(boolean schulleitung) : void\n    + isSchulleitung() : boolean\n    + vorstellen() : String\n    + toString() : String\n}\nclass Lernende {\n    - nummer : int \n    + Lernende(String nachname)\n    + setNummer(int nummer) : void\n    + getNummer() : int\n    + vorstellen() : String\n    + toString() : String\n    + hashCode() : int\n}\n\nPerson <|-- Mitarbeiter : "extends"\nPerson <|-- Lernende : "extends"\nMitarbeiter <|-- Lehrer : "extends"\nMitarbeiter <|-- Angestellte : "extends"\n\nPerson "1" o-- Person\n@enduml\n')))}g.isMDXComponent=!0}}]);