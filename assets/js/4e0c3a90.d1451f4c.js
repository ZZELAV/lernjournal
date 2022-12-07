"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2390],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),o=m(t),h=a,d=o["".concat(c,".").concat(h)]||o[h]||u[h]||i;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[o]="string"==typeof e?e:a,l[1]=s;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=t(7462),a=(t(7294),t(3905));const i={title:"Tag 1",tags:["M226B","Tag 1","Java","Polymorphie","Vererbung","BZTF-Beispiel"]},l="Tag 1: Polymorphie und Vererbung",s={unversionedId:"M226B/tag-0001",id:"M226B/tag-0001",title:"Tag 1",description:"1 Polymorphie",source:"@site/docs/M226B/tag-0001.md",sourceDirName:"M226B",slug:"/M226B/tag-0001",permalink:"/docs/M226B/tag-0001",draft:!1,tags:[{label:"M226B",permalink:"/docs/tags/m-226-b"},{label:"Tag 1",permalink:"/docs/tags/tag-1"},{label:"Java",permalink:"/docs/tags/java"},{label:"Polymorphie",permalink:"/docs/tags/polymorphie"},{label:"Vererbung",permalink:"/docs/tags/vererbung"},{label:"BZTF-Beispiel",permalink:"/docs/tags/bztf-beispiel"}],version:"current",frontMatter:{title:"Tag 1",tags:["M226B","Tag 1","Java","Polymorphie","Vererbung","BZTF-Beispiel"]},sidebar:"tutorialSidebar",previous:{title:"M226B",permalink:"/docs/M226B/"},next:{title:"Tag 2",permalink:"/docs/M226B/tag-0002"}},c={},m=[{value:"1 Polymorphie",id:"1-polymorphie",level:2},{value:"2 Vererbung",id:"2-vererbung",level:2},{value:"3 Beispiele",id:"3-beispiele",level:2},{value:"3.1 BZT1",id:"31-bzt1",level:3},{value:"3.2 BZT2",id:"32-bzt2",level:3}],p={toc:m};function o(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-1-polymorphie-und-vererbung"},"Tag 1: Polymorphie und Vererbung"),(0,a.kt)("h2",{id:"1-polymorphie"},"1 Polymorphie"),(0,a.kt)("p",null,"Polymorphie ist die Vielgestaltigkeit von Klassen. Damit k\xf6nnen mehrere Methoden mit dem gleichem Namen erstellt werden und unterschiedliche Ergebnisse geliefert werden."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Statische Polymorphie:",(0,a.kt)("br",{parentName:"p"}),"\n","Methoden \xfcberschreiben (verschiedene Parameter)"),(0,a.kt)("p",{parentName:"admonition"},"Dynamische Polymorphie:",(0,a.kt)("br",{parentName:"p"}),"\n","Methoden werden in Subklassen \xfcberschrieben (dadurch ergibt sich ein anderes Verhalten der Klasse)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Statische Polymorphie")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class Ueberladen {\n\n    public static void main(String[] args) {\n        Ueberladen u = new Ueberladen();\n        u.print("Hallo");\n        u.print("Moin", "Klaus");\n    }\n\n    private void print(String txt) {\n        System.out.println(txt);\n    }\n\n    private void print(String txt, String name) {\n        System.out.println(txt + " " + name);\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Dynamische Polymorphie")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class Polymorphie {\n\n    public Polymorphie() {\n        Tier[] tiere = { new Vogel(), new Wurm() };\n        for (int i = 0; i < tiere.length; i++) {\n            tiere[i].bewegtSich();\n            tiere[i].zwitscher();   // Fehler\n            tiere[i].frisst();      // Fehler\n        }\n    }\n\n    public static void main(String[] args) {\n        new Polymorphie();\n    }\n}\n\nclass Tier {\n    void bewegtSich() {\n        System.out.println("Schwimmen, laufen, kriechen, h\xfcpfen oder fliegen?");\n    }\n}\n\nclass Vogel extends Tier {\n    @Override\n    void bewegtSich() {\n        System.out.println("Ich fliege");\n    }\n\n    void zwitscher() {\n        System.out.println("tirilli");\n    }\n\n    void frisst() {\n        System.out.println(getClass() + " frisst");\n    }\n}\n\nclass Wurm extends Tier {\n    @Override\n    void bewegtSich() {\n        System.out.println("Ich krieche");\n    }\n\n    void frisst() {\n        System.out.println(getClass() + " frisst");\n    }\n}\n')),(0,a.kt)("h2",{id:"2-vererbung"},"2 Vererbung"),(0,a.kt)("p",null,"Mit der Vererbung k\xf6nnen Methoden von Klassen wiederverwendbar gestaltet werden. Dies kann sehr komplex werden, daher lohnt es sich ein UML-Diagramm dazu zu zeichnen."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Grundprinzip:",(0,a.kt)("br",{parentName:"p"}),"\n","Superklasse mit NUR den notwendigsten Attributen und Methoden",(0,a.kt)("br",{parentName:"p"}),"\n","Subklassen erweitern dann die Superklasse")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bild Vererbung",src:t(1141).Z,width:"804",height:"491"})),(0,a.kt)("h2",{id:"3-beispiele"},"3 Beispiele"),(0,a.kt)("h3",{id:"31-bzt1"},"3.1 BZT1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\n/**\n * Hello world!\n *\n */\npublic class App\n{\n\n    /**\n     * @param args the command line arguments\n     */\n    public static void main(String[] args)\n    {\n    Lehrer mt = new Lehrer();\n    mt.setNachname("Inauen");\n    mt.setFachbereich("Informatik");\n\n    Lernende mus = new Lernende();\n    mus.setNachname("Muster");\n    mus.setNummer(1001);\n\n    System.out.println("Nachname des Lehrers: " + mt.getNachname());\n    System.out.println("Fachbereich des Lehrers: " + mt.getFachbereich());\n\n    System.out.println("Nachname des Lernenden: " + mus.getNachname());\n    System.out.println("Nummer des Lernenden: " + mus.getNummer());\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package ch.bztf;\n\npublic class Lehrer\n{\n    private String fachbereich = new String(); // ein String ist eine Klasse, \n                                            // das geht deshalb mit new!\n    private String nachname;\n\n    public void setNachname(String nachname)\n    {\n        this.nachname = nachname;\n    }\n\n    public String getNachname()\n    {\n        return nachname;\n    }\n\n    public void setFachbereich(String fachbereich)\n    {\n        this.fachbereich = fachbereich;\n    }\n\n    public String  getFachbereich()\n    {\n        return fachbereich;\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package ch.bztf;\n\npublic class Lernende\n{\n    private String nachname = new String(); // new ist optional\n    private int nummer;  // Sch\xfclernummer\n\n    public void setNachname(String nachname)\n    {\n        this.nachname = nachname;\n    }\n\n    public String getNachname()\n    {\n        return nachname;\n    }\n\n    public void setNummer(int nummer)\n    {\n        this.nummer = nummer;\n    }\n\n    public int getNummer()\n    {\n        return nummer;\n    }  \n}\n")),(0,a.kt)("p",null,"Das ist ein schlechtes Beispiel, denn es gibt doppelten Code, z.B. die Methoden ",(0,a.kt)("inlineCode",{parentName:"p"},"setNachname(String nachname)")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"getNachname()")," gibt es in zwei Klassen. Auch die Erweiterung der Methoden w\xfcrde sehr m\xfchsam sein, denn man m\xfcsste es immer an allen Orten \xe4ndern. Um den doppelten Code zu verhindern, kann man die ",(0,a.kt)("strong",{parentName:"p"},"Vererbung")," nutzen."),(0,a.kt)("h3",{id:"32-bzt2"},"3.2 BZT2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\n/**\n * Hello world!\n *\n */\npublic class App\n{\n\n    /**\n     * @param args the command line arguments\n     */\n    public static void main(String[] args)\n    {\n    Lehrer mt = new Lehrer();\n    mt.setNachname("Inauen");\n    mt.setFachbereich("Informatik");\n\n    Lernende mus = new Lernende();\n    mus.setNachname("Muster");\n    mus.setNummer(1001);\n\n    System.out.println("Nachname des Lehrers: " + mt.getNachname());\n    System.out.println("Fachbereich des Lehrers: " + mt.getFachbereich());\n\n    System.out.println("Nachname des Lernenden: " + mus.getNachname());\n    System.out.println("Nummer des Lernenden: " + mus.getNummer());\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package ch.bztf;\n\npublic class Person {\n    \n    private String nachname;\n\n    public void setNachname(String nachname)\n    {\n        this.nachname = nachname;\n    }\n\n    public String getNachname()\n    {\n        return nachname;\n    }\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package ch.bztf;\n\npublic class Lehrer extends Person\n{\n    private String fachbereich = new String(); // ein String ist eine Klasse, \n                                            // das geht deshalb mit new!\n\n    public void setFachbereich(String fachbereich)\n    {\n        this.fachbereich = fachbereich;\n    }\n\n    public String  getFachbereich()\n    {\n        return fachbereich;\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package ch.bztf;\n\npublic class Lernende extends Person\n{\n    private int nummer;  // Sch\xfclernummer\n\n    public void setNummer(int nummer)\n    {\n        this.nummer = nummer;\n    }\n\n    public int getNummer()\n    {\n        return nummer;\n    }  \n}\n")),(0,a.kt)("p",null,"In diesem Beispiel wurde der doppelte Code in eine Klasse zusammengefasst (auch Superklasse genannt). Somit k\xf6nnen mit dem Argument ",(0,a.kt)("inlineCode",{parentName:"p"},"extends ...")," die Methoden der Superklasse mitgenommen werden."),(0,a.kt)("p",null,"UML:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"UML",src:t(4112).Z,width:"691",height:"291"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/appendix/M226B/UML/tag1_01"},"Source Code")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Quellen: ",(0,a.kt)("a",{parentName:"p",href:"https://www.python-lernen.de/bilder/oop-hierarchie-tier-hund-katze-02.jpg"},"Bild Vererbung")))}o.isMDXComponent=!0},4112:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tag1_01-915cca8b972c447e23dcf273b8b5e012.svg"},1141:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vererbung-3a803bfa91f3dd094d7195d070427feb.jpg"}}]);