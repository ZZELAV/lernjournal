"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7112],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),o=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(t),m=a,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const i={title:"Tag 1",tags:["M141","Tag 1","Datenbanksysteme","SQL","SQL DDL","SQL DML"]},l="Tag 1",s={unversionedId:"M141/tag-0001",id:"M141/tag-0001",title:"Tag 1",description:"1 Beschreiben Sie in eigenen Worten die Abk\xfcrzungen SQL, SQL DDL, SQL DML",source:"@site/docs/M141/tag-0001.md",sourceDirName:"M141",slug:"/M141/tag-0001",permalink:"/docs/M141/tag-0001",draft:!1,tags:[{label:"M141",permalink:"/docs/tags/m-141"},{label:"Tag 1",permalink:"/docs/tags/tag-1"},{label:"Datenbanksysteme",permalink:"/docs/tags/datenbanksysteme"},{label:"SQL",permalink:"/docs/tags/sql"},{label:"SQL DDL",permalink:"/docs/tags/sql-ddl"},{label:"SQL DML",permalink:"/docs/tags/sql-dml"}],version:"current",frontMatter:{title:"Tag 1",tags:["M141","Tag 1","Datenbanksysteme","SQL","SQL DDL","SQL DML"]},sidebar:"tutorialSidebar",previous:{title:"M141",permalink:"/docs/M141/"},next:{title:"M143",permalink:"/docs/M143/"}},d={},o=[{value:"1 Beschreiben Sie in eigenen Worten die Abk\xfcrzungen SQL, SQL DDL, SQL DML",id:"1-beschreiben-sie-in-eigenen-worten-die-abk\xfcrzungen-sql-sql-ddl-sql-dml",level:2},{value:"1.1 SQL",id:"11-sql",level:3},{value:"1.2 SQL DDL",id:"12-sql-ddl",level:3},{value:"1.3 SQL DML",id:"13-sql-dml",level:3}],u={toc:o};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-1"},"Tag 1"),(0,a.kt)("h2",{id:"1-beschreiben-sie-in-eigenen-worten-die-abk\xfcrzungen-sql-sql-ddl-sql-dml"},"1 Beschreiben Sie in eigenen Worten die Abk\xfcrzungen SQL, SQL DDL, SQL DML"),(0,a.kt)("h3",{id:"11-sql"},"1.1 SQL"),(0,a.kt)("p",null,"SQL (Structured Query Language) ist eine Datenbankabfragesprache die bei relationalen Datenbanken wie z.B. MySQL genutzt wird. Der Syntax ist einfach zu verstehen (englische Sprache)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Beispiel: Abfrage einer User-Datenbank"',title:'"Beispiel:',Abfrage:!0,einer:!0,'User-Datenbank"':!0},"SELECT * FROM users;\n")),(0,a.kt)("h3",{id:"12-sql-ddl"},"1.2 SQL DDL"),(0,a.kt)("p",null,"SQL DDL (Data Definition Language) wird genutzt beim erstellen/\xe4ndern einer Datenstruktur (engl. Database schema). DDL wird meistens nur im Backend genutzt, da es nur die Struktur einer Datenbank behandelt. Diese Commands werden daher eher weniger von Usern genutzt. Die DDL Commands sind: ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DROP"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUNCATE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"COMMENT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"RENAME")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Beispiel: Erstellen einer Tabelle und anschliessend diese umbenennen"',title:'"Beispiel:',Erstellen:!0,einer:!0,Tabelle:!0,und:!0,anschliessend:!0,diese:!0,'umbenennen"':!0},"CREATE TABLE users (\n    id INT,\n    username varchar(255)\n);\n\nALTER TABLE users\nRENAME TO user_table;\n")),(0,a.kt)("h3",{id:"13-sql-dml"},"1.3 SQL DML"),(0,a.kt)("p",null,'SQL DML (Data Manipulation Language) "manipuliert" die Daten in einer Datenbank. Diese Commands regeln den Zugriff auf die Daten. Die DML Commands sind: ',(0,a.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Datensatz in die User-Datenbank hinzuf\xfcgen und anschliessend ab\xe4ndern"',title:'"Datensatz',in:!0,die:!0,"User-Datenbank":!0,"hinzuf\xfcgen":!0,und:!0,anschliessend:!0,'ab\xe4ndern"':!0},'INSERT INTO users (id, username)\nVALUES (1, "muster");\n\nUPDATE users\nSET username = "mustermann"\nWHERE username = "muster";\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Quellen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/"},"https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/"))))}c.isMDXComponent=!0}}]);