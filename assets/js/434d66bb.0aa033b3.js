"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[85198],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>v});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,v=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return r?t.createElement(v,o(o({ref:n},c),{},{components:r})):t.createElement(v,o({ref:n},c))}));function v(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[s]="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75435:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var t=r(87462),a=(r(67294),r(3905));const i={},o="Videothek",u={unversionedId:"M226A/praxis-doku/videothek",id:"M226A/praxis-doku/videothek",title:"Videothek",description:"## Source Code",source:"@site/docs/M226A/praxis-doku/videothek.md",sourceDirName:"M226A/praxis-doku",slug:"/M226A/praxis-doku/videothek",permalink:"/docs/M226A/praxis-doku/videothek",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Maven",permalink:"/docs/M226A/praxis-doku/maven"},next:{title:"Theorie-Doku",permalink:"/docs/M226A/theorie-doku/"}},l={},p=[],c={toc:p},s="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(s,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"videothek"},"Videothek"),(0,a.kt)("blockquote",null,(0,a.kt)("h2",{parentName:"blockquote",id:"source-code"},"Source Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class App {\n    public static void main(String[] args) throws Exception {\n        System.out.println("Hello, World!");\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class Film {\n\n    private int filmnummer;\n    private String filmname;\n    private double preis;\n\n    public Film(String filmname, double preis) {\n\n    }\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.ArrayList;\n\npublic class Kunde {\n\n    private int kundennummer;\n    private String kundenname;\n    private String passwort;\n    private double guthaben;\n    private ArrayList<Film> filmeAusgeliehen;\n\n    public Kunde(int kundenname, String passwort) {\n\n    }\n\n    public int getKundennummer() {\n        return kundennummer;\n    }\n\n    public String getKundenname() {\n        return kundenname;\n    }\n\n    public void setKundenname(String kundenname) {\n        this.kundenname = kundenname;\n    }\n\n    public String getPasswort() {\n        return passwort;\n    }\n\n    public void setPasswort(String passwort) {\n        this.passwort = passwort;\n    }\n\n    public double getGuthaben() {\n        return guthaben;\n    }\n\n    public String filmListe() {\n        return "0";\n    }\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class StreamingServer {\n\n    private int servernummer;\n    private String servername;\n\n    public String linkGenerieren(Kunde kunde, Film film) {\n        return "0";\n    }\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import java.util.ArrayList;\n\npublic class Videothek {\n\n    private ArrayList<Kunde> kunden;\n    private ArrayList<Film> filme;\n\n    public void ausleihen() {\n\n    }\n\n    public void anmelden() {\n\n    }\n\n}\n")))}d.isMDXComponent=!0}}]);