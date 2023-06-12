"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[19286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(n),b=i,k=p["".concat(s,".").concat(b)]||p[b]||d[b]||a;return n?r.createElement(k,u(u({ref:t},l),{},{components:n})):r.createElement(k,u({ref:t},l))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,u=new Array(a);u[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,u[1]=o;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},51970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},u="Computerbauteile",o={unversionedId:"M226A/praxis-doku/computerbauteile",id:"M226A/praxis-doku/computerbauteile",title:"Computerbauteile",description:"## Source Code",source:"@site/docs/M226A/praxis-doku/computerbauteile.md",sourceDirName:"M226A/praxis-doku",slug:"/M226A/praxis-doku/computerbauteile",permalink:"/docs/M226A/praxis-doku/computerbauteile",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"B\xfccherei",permalink:"/docs/M226A/praxis-doku/buecherei"},next:{title:"Dreieck & Viereck",permalink:"/docs/M226A/praxis-doku/dreieck-viereck"}},s={},c=[],l={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"computerbauteile"},"Computerbauteile"),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"source-code"},"Source Code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class App {\n    public static void main(String[] args) throws Exception {\n        Disk disk01 = new Disk();\n        Disk disk02 = new Disk();\n        Disk disk03 = new Disk();\n\n        PC pc01 = new PC(disk01);\n        PC pc02 = new PC(disk02);\n\n        pc02.diskWechseln(disk01);\n        pc02.diskWechseln(disk03);\n\n        System.out.println(disk01.getStatus());\n        System.out.println(disk02.getStatus());\n        System.out.println(disk03.getStatus());\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Disk {\n    private boolean eingebaut = false;\n\n    public void einbau() {\n        if(!eingebaut) {\n            eingebaut = true;\n            System.out.println("Festplatte wurde erfolgreich eingebaut.");\n        } else {\n            System.out.println("FEHLER: Festplatte ist bereits eingebaut.");\n        }\n    }\n\n    public void ausbau() {\n        if(eingebaut) {\n            eingebaut = false;\n            System.out.println("Festplatte wurde erfolgreich ausgebaut.");\n        } else {\n            System.out.println("FEHLER: Festplatte ist noch nicht eingbaut.");\n        }\n    }\n\n    public boolean getStatus() {\n        return eingebaut;\n    }\n\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class PC {\n    private Disk verweisAufDisk;\n\n    public void diskWechseln(Disk aDisk) {\n        verweisAufDisk.ausbau();\n        verweisAufDisk = aDisk;\n        verweisAufDisk.einbau();\n    }\n\n    public PC(Disk vaufDisk) {\n        vaufDisk.einbau();\n        verweisAufDisk = vaufDisk;\n    }\n\n}\n")))}d.isMDXComponent=!0}}]);