"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53409],{84983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(85893),s=t(11151);const a={title:"Tag 2",tags:["M226B","Tag 2","Java","BZTF-Beispiel"]},i="Tag 2",l={id:"M226B/tag-0002",title:"Tag 2",description:"1 Beispiele",source:"@site/docs/M226B/tag-0002.md",sourceDirName:"M226B",slug:"/M226B/tag-0002",permalink:"/docs/M226B/tag-0002",draft:!1,unlisted:!1,tags:[{label:"M226B",permalink:"/docs/tags/m-226-b"},{label:"Tag 2",permalink:"/docs/tags/tag-2"},{label:"Java",permalink:"/docs/tags/java"},{label:"BZTF-Beispiel",permalink:"/docs/tags/bztf-beispiel"}],version:"current",frontMatter:{title:"Tag 2",tags:["M226B","Tag 2","Java","BZTF-Beispiel"]},sidebar:"tutorialSidebar",previous:{title:"Tag 1",permalink:"/docs/M226B/tag-0001"},next:{title:"Tag 3",permalink:"/docs/M226B/tag-0003"}},c={},u=[{value:"1 Beispiele",id:"1-beispiele",level:2},{value:"1.1 BZT3",id:"11-bzt3",level:2},{value:"1.2 BZT4",id:"12-bzt4",level:2}];function h(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tag-2",children:"Tag 2"}),"\n",(0,r.jsx)(n.h2,{id:"1-beispiele",children:"1 Beispiele"}),"\n",(0,r.jsx)(n.h2,{id:"11-bzt3",children:"1.1 BZT3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\n/**\n * Hello world!\n *\n */\npublic class App \n{\n    public static void main( String[] args )\n    {\n        Person pers1 = new Person();\n        pers1.setNachname("Muster");\n\n        Lernende lern1 = new Lernende();\n        lern1.setNachname("Moritz");\n        lern1.setNummer(4711);\n\n        Lehrer lehr1 = new Lehrer();\n        lehr1.setNachname("Lempel");\n        lehr1.setFachbereich("RitschRatschM\xfchle");\n        lehr1.setPersonalNummer(12345);\n\n        Angestellte ange1 = new Angestellte();\n        ange1.setNachname("Verwalti");\n        ange1.setPersonalNummer(54321);\n        ange1.setSchulleitung(true);\n\n        System.out.println("Ich heisse " + pers1.getNachname());\n        System.out.println(lern1.vorstellen());\n        System.out.println(lehr1.vorstellen());\n        System.out.println(ange1.vorstellen());\n    }\n}\n\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"package ch.bztf;\n\npublic class Person {\n    private String nachname;\n\n    public void setNachname(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public String getNachname() {\n        return nachname;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"package ch.bztf;\n\npublic class Mitarbeiter extends Person {\n    private int personalNummer;\n\n    public void setPersonalNummer(int personalNummer) {\n        this.personalNummer = personalNummer;\n    }\n\n    public int getPersonalNummer() {\n        return personalNummer;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Lernende extends Person {\n    private int nummer;\n\n    public void setNummer(int nummer) {\n        this.nummer = nummer;\n    }\n\n    public int getNummer() {\n        return nummer;\n    }\n\n    public String vorstellen() {\n        String output = "Ich heisse " + getNachname() + ". Meine Nummer ist " + getNummer();\n        return output;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Lehrer extends Mitarbeiter {\n    private String fachbereich;\n\n    public void setFachbereich(String fachbereich) {\n        this.fachbereich = fachbereich;\n    }\n\n    public String getFachbereich() {\n        return fachbereich;\n    }\n\n    public String vorstellen() {\n        String output = "Guten Tag, ich heisse " + getNachname() + ". Ich lehre " + getFachbereich() + " und meine Personalnummer ist " + getPersonalNummer() + ".";\n        return output;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Angestellte extends Mitarbeiter {\n    private boolean schulleitung;\n\n    public void setSchulleitung(boolean schulleitung) {\n        this.schulleitung = schulleitung;\n    }\n\n    public boolean isSchulleitung() {\n        return schulleitung;\n    }\n\n    public String vorstellen() {\n        if(isSchulleitung() == false) {\n            String output = "Guten Tag, ich heisse " + getNachname() + ". Meine Personalnummer ist " + getPersonalNummer() + " und ich bin einfacher Angestellter.";\n            return output;\n        } else {\n            String output = "Guten Tag, ich heisse " + getNachname() + ". Meine Personalnummer ist " + getPersonalNummer() + " und ich bin Schulleitungsmitglied.";\n            return output;\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Jetzt werden auch noch die Mitarbeiter des BZTF erfasst. Dazu wird eine neue Superklasse ",(0,r.jsx)(n.code,{children:"Mitarbeiter"})," erstellt. Diese Superklasse erbt auch von der Klasse ",(0,r.jsx)(n.code,{children:"Person"}),". Von der Klasse ",(0,r.jsx)(n.code,{children:"Mitarbeiter"})," erben dann ",(0,r.jsx)(n.code,{children:"Lehrer"})," und ",(0,r.jsx)(n.code,{children:"Angestellte"}),". Es wird eine Superklasse erstellt, weil sonst wieder doppelter Code entsteht."]}),"\n",(0,r.jsxs)(n.p,{children:["UML:",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{alt:"UML",src:t(64623).Z+"",width:"833",height:"498"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/appendix/M226B/UML/tag2_01",children:"Source Code"})]}),"\n",(0,r.jsx)(n.h2,{id:"12-bzt4",children:"1.2 BZT4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\n/**\n * Hello world!\n *\n */\npublic class App \n{\n    public static void main( String[] args )\n    {\n        Person pers1 = new Person("Muster");\n\n        Lernende lern1 = new Lernende("Moritz", 4711);\n\n        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschM\xfchle");\n\n        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);\n\n        Angestellte ange2 = new Angestellte("Schl\xe4ffrig", 345, false);\n\n        System.out.println(pers1.vorstellen());\n        System.out.println(lern1.vorstellen());\n        System.out.println(lehr1.vorstellen());\n        System.out.println(ange1.vorstellen());\n        System.out.println(ange2.vorstellen());\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Person {\n    protected String nachname;\n\n    protected Person(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public void setNachname(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public String getNachname() {\n        return nachname;\n    }\n\n    public String vorstellen() {\n        String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";\n        return output;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"package ch.bztf;\n\npublic class Mitarbeiter extends Person {\n    protected int personalNummer;\n\n    protected Mitarbeiter(String nachname, int personalNummer) {\n        super(nachname);\n        this.personalNummer = personalNummer;\n    }\n\n    protected Mitarbeiter(String nachname) {\n        super(nachname);\n    }\n\n    public void setPersonalNummer(int personalNummer) {\n        this.personalNummer = personalNummer;\n    }\n\n    public int getPersonalNummer() {\n        return personalNummer;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Lernende extends Person {\n    private int nummer;\n\n    public Lernende(String nachname) {\n        super(nachname);\n    }\n\n    public Lernende(String nachname, int nummer) {\n        super(nachname);\n        this.nummer = nummer;\n    }\n\n    public void setNummer(int nummer) {\n        this.nummer = nummer;\n    }\n\n    public int getNummer() {\n        return nummer;\n    }\n\n    public String vorstellen() {\n        String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ". " + "Meine Nummer ist " + getNummer();\n        return output;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Lehrer extends Mitarbeiter {\n    private String fachbereich;\n\n    public Lehrer(String nachname, int personalNummer, String fachbereich) {\n        super(nachname, personalNummer);\n        this.fachbereich = fachbereich;\n    }\n\n    public void setFachbereich(String fachbereich) {\n        this.fachbereich = fachbereich;\n    }\n\n    public String getFachbereich() {\n        return fachbereich;\n    }\n\n    public String vorstellen() {\n        String output = "Guten Tag, ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ". Ich lehre " + getFachbereich() + " und meine Personalnummer ist " + getPersonalNummer() + ".";\n        return output;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Angestellte extends Mitarbeiter {\n    private boolean schulleitung;\n\n    public Angestellte(String nachname) {\n        super(nachname);\n    }\n\n    public Angestellte(String nachname, int personalNummer) {\n        super(nachname, personalNummer);\n    }\n\n    public Angestellte(String nachname, int personalNummer, boolean schulleitung) {\n        super(nachname, personalNummer);\n        this.schulleitung = schulleitung;\n    }\n\n    public void setSchulleitung(boolean schulleitung) {\n        this.schulleitung = schulleitung;\n    }\n\n    public boolean isSchulleitung() {\n        return schulleitung;\n    }\n\n    public String vorstellen() {\n        if(isSchulleitung() == false) {\n            String output = "Guten Tag, ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ". Meine Personalnummer ist " + getPersonalNummer() + " und ich bin einfacher Angestellter.";\n            return output;\n        } else {\n            String output = "Guten Tag, ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ". Meine Personalnummer ist " + getPersonalNummer() + " und ich bin Schulleitungsmitglied.";\n            return output;\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Damit wir die verschiedenen Personen erstellen (oder auch instanzieren genannt) k\xf6nnen, m\xfcssen in den jeweiligen Klassen die Konstruktoren erstellt werden. Die Konstrukturen die vererbt werden (also die in einer Superklasse sind), m\xfcssen auf ",(0,r.jsx)(n.code,{children:"protected"})," gesetzt werden. Nur so, k\xf6nnen die Subklassen die Konstruktor erben."]}),"\n",(0,r.jsxs)(n.p,{children:["UML:",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{alt:"UML",src:t(92191).Z+"",width:"993",height:"595"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/appendix/M226B/UML/tag2_02",children:"Source Code"})]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},64623:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tag2_01-9a40201e8dc59690ee764aaf4f7760d8.svg"},92191:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tag2_02-3b3744a5fc556d9ef4a26d11fb96712c.svg"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(67294);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);