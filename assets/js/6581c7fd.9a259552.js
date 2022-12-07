"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1926],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4173:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},i="Tag 1 - 01",c={unversionedId:"M226B/UML/tag1_01",id:"M226B/UML/tag1_01",title:"Tag 1 - 01",description:"",source:"@site/appendix/M226B/UML/tag1_01.md",sourceDirName:"M226B/UML",slug:"/M226B/UML/tag1_01",permalink:"/appendix/M226B/UML/tag1_01",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UML",permalink:"/appendix/M226B/UML/"},next:{title:"Tag 2 - 01",permalink:"/appendix/M226B/UML/tag2_01"}},p={},s=[],l={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-1---01"},"Tag 1 - 01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-uml"},'@startuml\nskin rose\nclass App {\n    + main(String[] args) : void\n}\nclass Person {\n    - nachname : String\n    + setNachname(String nachname) : void\n    + getNachname() : String\n}\nclass Lehrer {\n    - fachbereich : String\n    + getFachbereich() : String \n    + setFachbereich(String fachbereich) : void\n}\nclass Lernende {\n    - nummer : int \n    + setNummer(int nummer) : void\n    + getNummer() : int\n}\n\nPerson <|-- Lehrer : "extends"\nPerson <|-- Lernende : "extends"\n@enduml\n')))}u.isMDXComponent=!0}}]);