"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2024],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},o="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),o=c(t),m=a,g=o["".concat(u,".").concat(m)]||o[m]||h[m]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[o]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"Tag 5",tags:["M226B","Tag 5","Java","BZTF-Beispiel"]},l="Tag 5",s={unversionedId:"M226B/tag-0005",id:"M226B/tag-0005",title:"Tag 5",description:"1 Beispiele",source:"@site/docs/M226B/tag-0005.md",sourceDirName:"M226B",slug:"/M226B/tag-0005",permalink:"/docs/M226B/tag-0005",draft:!1,tags:[{label:"M226B",permalink:"/docs/tags/m-226-b"},{label:"Tag 5",permalink:"/docs/tags/tag-5"},{label:"Java",permalink:"/docs/tags/java"},{label:"BZTF-Beispiel",permalink:"/docs/tags/bztf-beispiel"}],version:"current",frontMatter:{title:"Tag 5",tags:["M226B","Tag 5","Java","BZTF-Beispiel"]},sidebar:"tutorialSidebar",previous:{title:"Tag 4",permalink:"/docs/M226B/tag-0004"},next:{title:"Tag 6",permalink:"/docs/M226B/tag-0006"}},u={},c=[{value:"1 Beispiele",id:"1-beispiele",level:2},{value:"1.1 BZT10",id:"11-bzt10",level:3}],p={toc:c},o="wrapper";function h(e){let{components:n,...i}=e;return(0,a.kt)(o,(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-5"},"Tag 5"),(0,a.kt)("h2",{id:"1-beispiele"},"1 Beispiele"),(0,a.kt)("h3",{id:"11-bzt10"},"1.1 BZT10"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\n/**\n * Hello world!\n *\n */\npublic class App \n{\n    public static void main( String[] args )\n    {\n        Lernende lern1 = new Lernende("Moritz", 4711);\n\n        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschM\xfchle");\n\n        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);\n\n        Angestellte ange2 = new Angestellte("Schl\xe4ffrig", 345, false);\n\n        System.out.println(lern1.toString());\n        System.out.println(lehr1.toString());\n        System.out.println(ange1.toString());\n        System.out.println(ange2.toString());\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        ange1.heiraten(ange2);\n        lehr1.heiraten(lehr1);\n        ange2.heiraten(lehr1);\n\n        ange1.scheiden();\n        ange2.scheiden();\n        lehr1.scheiden();\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        System.out.println(ange1.equals(ange1));\n        System.out.println(ange1.equals(ange2));\n        Angestellte ange3 = new Angestellte("Schl\xe4ffrig");\n        System.out.println(ange2.equals(ange3));\n        Angestellte ange4 = new Angestellte("Hampelmann");\n        System.out.println(ange1.equals(ange4));\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        // Anzahl wird auf 3 gesetzt, mindestkonsum ist allerdings auf 4\n        System.out.println("Bitte als Angestellter Fr. " + ange1.kantineKonsum(3) + " bezahlen.");\n\n        // Anzahl wird auf 5 gesetzt, mindestkonsum ist allerdings auf 8\n        System.out.println("Bitte als Lehrer Fr. " + lehr1.kantineKonsum(5) + " bezahlen.");\n\n        // Lernender hat kein mindestkonsum. Dazu bekommt er noch 10% Rabatt\n        System.out.println("Bitte als Lernender Fr. " + lern1.kantineKonsum(7) + " bezahlen.");\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        System.out.println("Lernender 1: " + lern1.Bewertung());\n        System.out.println("Lernender 1: " + lern1.Bewertung());\n        System.out.println("Angestellter 1: " + ange1.Bewertung());\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\nabstract class Person implements Eatable {\n    protected String nachname;\n    protected final double minpreis = 2.50;\n\n    protected Person(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public void setNachname(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public String getNachname() {\n        return nachname;\n    }\n\n    // public String vorstellen() {\n    //     String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";\n    //     return output;\n    // }\n\n    @Override\n    public String toString() {\n        return nachname + " (Attributquelle: Klasse Person) - " + getClass() + ".";\n    }\n\n    private Person ehepartner = null;   // Die Referenz auf den Ehepartner wird erstellt, aber auf null gesetzt\n                                    // einAngestellter.heiraten(eineAngestellte); Als Hinweis: Der Aufruf im main!\n    protected void heiraten(Person ehepartner) // \n    {\n        if (this != ehepartner) // \xfcberpr\xfcfung ob nicht selber\n        {\n            if(this.ehepartner == null && ehepartner.ehepartner == null) // wenn beide noch nicht verheiratet sind\n            {\n                this.ehepartner = ehepartner; //  person auf ehepartner setzen\n                ehepartner.ehepartner = this; // ?\n\n                System.out.println(nachname + " und " + ehepartner.getNachname() + " haben geheiratet. ");\n            }\n            else // wenn mind. jemand bereits verheiratet ist\n            {\n                System.out.println(nachname + " und " + ehepartner.getNachname() + " k\xf6nnen nicht heiraten, " + "weil mindestens einer bereits verheiratet ist! ");\n            }\n        }\n        else // wenn selber\n        {\n            System.out.println(nachname + " kann sich nicht selber heiraten!");\n        }\n    }\n\n    protected void scheiden() {\n        if (ehepartner != null) {\n            Person temp = ehepartner;\n            ehepartner.ehepartner = null;\n            this.ehepartner = null;\n\n            System.out.println(nachname + " und " + temp.getNachname() + " haben sich geschieden.");\n        } else {\n            System.out.println(nachname + " ist nicht verheiratet.");\n        }\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) {\n            return true;\n        } else if (obj == null) {\n            return false;\n        } else if (obj.getClass() == getClass() && this.hashCode() == ((Person)obj).hashCode()) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n\n    public abstract double kantineKonsum(int anzahl);\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package ch.bztf;\n\npublic interface Eatable {\n    int inKantine();\n    String Bewertung();\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\nabstract class Mitarbeiter extends Person {\n    protected int personalNummer;\n\n    protected Mitarbeiter(String nachname, int personalNummer) {\n        super(nachname);\n        this.personalNummer = personalNummer;\n    }\n\n    protected Mitarbeiter(String nachname) {\n        super(nachname);\n    }\n\n    public void setPersonalNummer(int personalNummer) {\n        this.personalNummer = personalNummer;\n    }\n\n    public int getPersonalNummer() {\n        return personalNummer;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " Meine Personalnummer ist " + getPersonalNummer() + " und ich";\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Personalnummer: " + getPersonalNummer() + " (Attributquelle: Klasse Mitarbeiter).";\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Lernende extends Person {\n    private int nummer;\n\n    public Lernende(String nachname) {\n        super(nachname);\n    }\n\n    public Lernende(String nachname, int nummer) {\n        super(nachname);\n        this.nummer = nummer;\n    }\n\n    public void setNummer(int nummer) {\n        this.nummer = nummer;\n    }\n\n    public int getNummer() {\n        return nummer;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " Meine Nummer ist " + getNummer();\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Nummer: " + getNummer() + " (Attributquelle: Klasse Lernende).";\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n\n    @Override\n    public double kantineKonsum(int anzahl) {\n        // 10% Rabatt\n        return anzahl * minpreis * 0.9;\n    }\n\n    @Override\n    public int inKantine() {\n        int zufallszahl = (int)(Math.random() * 10);\n        return zufallszahl;\n    }\n\n    @Override\n    public String Bewertung() {\n        if (inKantine() > 5) {\n            int zufallszahl = (int)(Math.random() * 10);\n            if (zufallszahl >= 5) {\n                return "War akzeptabel";\n            } else {\n                return "Hat Verbesserungspotential!";\n            }\n        } else {\n            return "War nicht in Mensa!";\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Lehrer extends Mitarbeiter {\n    private String fachbereich;\n\n    public Lehrer(String nachname, int personalNummer, String fachbereich) {\n        super(nachname, personalNummer);\n        this.fachbereich = fachbereich;\n    }\n\n    public void setFachbereich(String fachbereich) {\n        this.fachbereich = fachbereich;\n    }\n\n    public String getFachbereich() {\n        return fachbereich;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " lehre " + getFachbereich();\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Fachbereich: " + getFachbereich() + " (Attributquelle: Klasse Lehrer).";\n    }\n\n    @Override\n    public double kantineKonsum(int anzahl) {\n        if (anzahl < 8) {\n            anzahl = 8;\n        }\n        return anzahl * minpreis;\n    }\n\n    @Override\n    public int inKantine() {\n        int zufallszahl = (int)(Math.random() * 10);\n        return zufallszahl;\n    }\n\n    @Override\n    public String Bewertung() {\n        if (inKantine() > 5) {\n            int zufallszahl = (int)(Math.random() * 10);\n            if (zufallszahl >= 5) {\n                return "War akzeptabel";\n            } else {\n                return "Hat Verbesserungspotential!";\n            }\n        } else {\n            return "War nicht in Mensa!";\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Angestellte extends Mitarbeiter {\n    private boolean schulleitung;\n\n    public Angestellte(String nachname) {\n        super(nachname);\n    }\n\n    public Angestellte(String nachname, int personalNummer) {\n        super(nachname, personalNummer);\n    }\n\n    public Angestellte(String nachname, int personalNummer, boolean schulleitung) {\n        super(nachname, personalNummer);\n        this.schulleitung = schulleitung;\n    }\n\n    public void setSchulleitung(boolean schulleitung) {\n        this.schulleitung = schulleitung;\n    }\n\n    public boolean isSchulleitung() {\n        return schulleitung;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     if(isSchulleitung() == false) {\n    //         return super.vorstellen() + " bin einfacher Angestellter";\n    //     } else {\n    //         return super.vorstellen() + " bin Schulleitungsmitglied";\n    //     }\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - In Schulleitung?: " + isSchulleitung();\n    }\n\n    @Override\n    public double kantineKonsum(int anzahl) {\n        if (anzahl < 4) {\n            anzahl = 4;\n        }\n        return anzahl * minpreis;\n    }\n\n    @Override\n    public int inKantine() {\n        int zufallszahl = (int)(Math.random() * 10);\n        return zufallszahl;\n    }\n\n    @Override\n    public String Bewertung() {\n        if (inKantine() > 5) {\n            int zufallszahl = (int)(Math.random() * 10);\n            if (zufallszahl >= 5) {\n                return "War akzeptabel";\n            } else {\n                return "Hat Verbesserungspotential!";\n            }\n        } else {\n            return "War nicht in Mensa!";\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Interfaces sind Klassen, die nur abstrakte Klassen und Methoden enthalten. Sie haben keinen anderen ausf\xfchrbaren Code enthalten. Interfaces werden wie folgt erstellt:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface Eatable {}\n")),(0,a.kt)("p",null,"UML:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"UML",src:t(8148).Z,width:"1026",height:"889"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/appendix/M226B/UML/tag5_01"},"Source Code")))}h.isMDXComponent=!0},8148:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tag5_01-aa3f89a1511ef078931e46f72cbd97b0.svg"}}]);