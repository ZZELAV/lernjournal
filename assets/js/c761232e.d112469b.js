"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7804],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},h=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},o=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(t),o=a,g=p["".concat(u,".").concat(o)]||p[o]||m[o]||i;return t?r.createElement(g,l(l({ref:n},h),{},{components:t})):r.createElement(g,l({ref:n},h))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=o;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}o.displayName="MDXCreateElement"},71058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"Tag 4",tags:["M226B","Tag 4","Java","BZTF-Beispiel","Selbsttest"]},l="Tag 4",s={unversionedId:"M226B/tag-0004",id:"M226B/tag-0004",title:"Tag 4",description:"1 Beispiele",source:"@site/docs/M226B/tag-0004.md",sourceDirName:"M226B",slug:"/M226B/tag-0004",permalink:"/docs/M226B/tag-0004",draft:!1,tags:[{label:"M226B",permalink:"/docs/tags/m-226-b"},{label:"Tag 4",permalink:"/docs/tags/tag-4"},{label:"Java",permalink:"/docs/tags/java"},{label:"BZTF-Beispiel",permalink:"/docs/tags/bztf-beispiel"},{label:"Selbsttest",permalink:"/docs/tags/selbsttest"}],version:"current",frontMatter:{title:"Tag 4",tags:["M226B","Tag 4","Java","BZTF-Beispiel","Selbsttest"]},sidebar:"tutorialSidebar",previous:{title:"Tag 3",permalink:"/docs/M226B/tag-0003"},next:{title:"Tag 5",permalink:"/docs/M226B/tag-0005"}},u={},c=[{value:"1 Beispiele",id:"1-beispiele",level:2},{value:"1.1 BZT7",id:"11-bzt7",level:3},{value:"1.2 BZT8",id:"12-bzt8",level:3},{value:"1.3 BZT9",id:"13-bzt9",level:3},{value:"2 Formativer Selbsttest",id:"2-formativer-selbsttest",level:2},{value:"3 Unklarheiten",id:"3-unklarheiten",level:2}],h={toc:c};function p(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-4"},"Tag 4"),(0,a.kt)("h2",{id:"1-beispiele"},"1 Beispiele"),(0,a.kt)("h3",{id:"11-bzt7"},"1.1 BZT7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\n/**\n * Hello world!\n *\n */\npublic class App \n{\n    public static void main( String[] args )\n    {\n        Person pers1 = new Person("Muster");\n\n        Lernende lern1 = new Lernende("Moritz", 4711);\n\n        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschM\xfchle");\n\n        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);\n\n        Angestellte ange2 = new Angestellte("Schl\xe4ffrig", 345, false);\n\n        System.out.println(pers1.toString());\n        System.out.println(lern1.toString());\n        System.out.println(lehr1.toString());\n        System.out.println(ange1.toString());\n        System.out.println(ange2.toString());\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        ange1.heiraten(ange2);\n        lehr1.heiraten(lehr1);\n        ange2.heiraten(lehr1);\n\n        ange1.scheiden();\n        ange2.scheiden();\n        lehr1.scheiden();\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        System.out.println(ange1.equals(ange1));\n        System.out.println(ange1.equals(ange2));\n        Angestellte ange3 = new Angestellte("Schl\xe4ffrig");\n        System.out.println(ange2.equals(ange3));\n        Angestellte ange4 = new Angestellte("Hampelmann");\n        System.out.println(ange1.equals(ange4));\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Person {\n    protected String nachname;\n\n    protected Person(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public void setNachname(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public String getNachname() {\n        return nachname;\n    }\n\n    // public String vorstellen() {\n    //     String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";\n    //     return output;\n    // }\n\n    @Override\n    public String toString() {\n        return nachname + " (Attributquelle: Klasse Person) - " + getClass() + ".";\n    }\n\n    private Person ehepartner = null;   // Die Referenz auf den Ehepartner wird erstellt, aber auf null gesetzt\n                                    // einAngestellter.heiraten(eineAngestellte); Als Hinweis: Der Aufruf im main!\n    protected void heiraten(Person ehepartner) // \n    {\n        if (this != ehepartner) // \xfcberpr\xfcfung ob nicht selber\n        {\n            if(this.ehepartner == null && ehepartner.ehepartner == null) // wenn beide noch nicht verheiratet sind\n            {\n                this.ehepartner = ehepartner; //  person auf ehepartner setzen\n                ehepartner.ehepartner = this; // ?\n\n                System.out.println(nachname + " und " + ehepartner.getNachname() + " haben geheiratet. ");\n            }\n            else // wenn mind. jemand bereits verheiratet ist\n            {\n                System.out.println(nachname + " und " + ehepartner.getNachname() + " k\xf6nnen nicht heiraten, " + "weil mindestens einer bereits verheiratet ist! ");\n            }\n        }\n        else // wenn selber\n        {\n            System.out.println(nachname + " kann sich nicht selber heiraten!");\n        }\n    }\n\n    protected void scheiden() {\n        if (ehepartner != null) {\n            Person temp = ehepartner;\n            ehepartner.ehepartner = null;\n            this.ehepartner = null;\n\n            System.out.println(nachname + " und " + temp.getNachname() + " haben sich geschieden.");\n        } else {\n            System.out.println(nachname + " ist nicht verheiratet.");\n        }\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) {\n            return true;\n        } else if (obj == null) {\n            return false;\n        } else if (obj.getClass() == getClass() && this.hashCode() == ((Person)obj).hashCode()) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Mitarbeiter extends Person {\n    protected int personalNummer;\n\n    protected Mitarbeiter(String nachname, int personalNummer) {\n        super(nachname);\n        this.personalNummer = personalNummer;\n    }\n\n    protected Mitarbeiter(String nachname) {\n        super(nachname);\n    }\n\n    public void setPersonalNummer(int personalNummer) {\n        this.personalNummer = personalNummer;\n    }\n\n    public int getPersonalNummer() {\n        return personalNummer;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " Meine Personalnummer ist " + getPersonalNummer() + " und ich";\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Personalnummer: " + getPersonalNummer() + " (Attributquelle: Klasse Mitarbeiter).";\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Lernende extends Person {\n    private int nummer;\n\n    public Lernende(String nachname) {\n        super(nachname);\n    }\n\n    public Lernende(String nachname, int nummer) {\n        super(nachname);\n        this.nummer = nummer;\n    }\n\n    public void setNummer(int nummer) {\n        this.nummer = nummer;\n    }\n\n    public int getNummer() {\n        return nummer;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " Meine Nummer ist " + getNummer();\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Nummer: " + getNummer() + " (Attributquelle: Klasse Lernende).";\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Lehrer extends Mitarbeiter {\n    private String fachbereich;\n\n    public Lehrer(String nachname, int personalNummer, String fachbereich) {\n        super(nachname, personalNummer);\n        this.fachbereich = fachbereich;\n    }\n\n    public void setFachbereich(String fachbereich) {\n        this.fachbereich = fachbereich;\n    }\n\n    public String getFachbereich() {\n        return fachbereich;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " lehre " + getFachbereich();\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Fachbereich: " + getFachbereich() + " (Attributquelle: Klasse Lehrer).";\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Angestellte extends Mitarbeiter {\n    private boolean schulleitung;\n\n    public Angestellte(String nachname) {\n        super(nachname);\n    }\n\n    public Angestellte(String nachname, int personalNummer) {\n        super(nachname, personalNummer);\n    }\n\n    public Angestellte(String nachname, int personalNummer, boolean schulleitung) {\n        super(nachname, personalNummer);\n        this.schulleitung = schulleitung;\n    }\n\n    public void setSchulleitung(boolean schulleitung) {\n        this.schulleitung = schulleitung;\n    }\n\n    public boolean isSchulleitung() {\n        return schulleitung;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     if(isSchulleitung() == false) {\n    //         return super.vorstellen() + " bin einfacher Angestellter";\n    //     } else {\n    //         return super.vorstellen() + " bin Schulleitungsmitglied";\n    //     }\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - In Schulleitung?: " + isSchulleitung();\n    }\n}\n')),(0,a.kt)("p",null,"getClass() -> Diese Methode gibt die Klasse zur\xfcck"),(0,a.kt)("p",null,"toString() -> Standardm\xe4ssig gibt diese Methode bei der Ausgabe die Klasse und einen Hashwert aus. Beispiel: ",(0,a.kt)("inlineCode",{parentName:"p"},"bzt7.Angestellte@659e0bfd")),(0,a.kt)("p",null,"hashCode() -> Gibt den Hashwert eines Objekts zur\xfcck. Es ist eine eindeutige Identifikation. In jedem Programm gibt es jeden Hashcode nur einmal."),(0,a.kt)("p",null,"equals() -> \xdcberpr\xfcft auf Gleichheit"),(0,a.kt)("p",null,"UML:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"UML",src:t(54722).Z,width:"993",height:"775"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/appendix/M226B/UML/tag4_01"},"Source Code")),(0,a.kt)("h3",{id:"12-bzt8"},"1.2 BZT8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\n/**\n * Hello world!\n *\n */\npublic class App \n{\n    public static void main( String[] args )\n    {\n        Lernende lern1 = new Lernende("Moritz", 4711);\n\n        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschM\xfchle");\n\n        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);\n\n        Angestellte ange2 = new Angestellte("Schl\xe4ffrig", 345, false);\n        \n        System.out.println(lern1.toString());\n        System.out.println(lehr1.toString());\n        System.out.println(ange1.toString());\n        System.out.println(ange2.toString());\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        ange1.heiraten(ange2);\n        lehr1.heiraten(lehr1);\n        ange2.heiraten(lehr1);\n\n        ange1.scheiden();\n        ange2.scheiden();\n        lehr1.scheiden();\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        System.out.println(ange1.equals(ange1));\n        System.out.println(ange1.equals(ange2));\n        Angestellte ange3 = new Angestellte("Schl\xe4ffrig");\n        System.out.println(ange2.equals(ange3));\n        Angestellte ange4 = new Angestellte("Hampelmann");\n        System.out.println(ange1.equals(ange4));\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\nabstract class Person {\n    protected String nachname;\n\n    protected Person(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public void setNachname(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public String getNachname() {\n        return nachname;\n    }\n\n    // public String vorstellen() {\n    //     String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";\n    //     return output;\n    // }\n\n    @Override\n    public String toString() {\n        return nachname + " (Attributquelle: Klasse Person) - " + getClass() + ".";\n    }\n\n    private Person ehepartner = null;   // Die Referenz auf den Ehepartner wird erstellt, aber auf null gesetzt\n                                    // einAngestellter.heiraten(eineAngestellte); Als Hinweis: Der Aufruf im main!\n    protected void heiraten(Person ehepartner) // \n    {\n        if (this != ehepartner) // \xfcberpr\xfcfung ob nicht selber\n        {\n            if(this.ehepartner == null && ehepartner.ehepartner == null) // wenn beide noch nicht verheiratet sind\n            {\n                this.ehepartner = ehepartner; //  person auf ehepartner setzen\n                ehepartner.ehepartner = this; // ?\n\n                System.out.println(nachname + " und " + ehepartner.getNachname() + " haben geheiratet. ");\n            }\n            else // wenn mind. jemand bereits verheiratet ist\n            {\n                System.out.println(nachname + " und " + ehepartner.getNachname() + " k\xf6nnen nicht heiraten, " + "weil mindestens einer bereits verheiratet ist! ");\n            }\n        }\n        else // wenn selber\n        {\n            System.out.println(nachname + " kann sich nicht selber heiraten!");\n        }\n    }\n\n    protected void scheiden() {\n        if (ehepartner != null) {\n            Person temp = ehepartner;\n            ehepartner.ehepartner = null;\n            this.ehepartner = null;\n\n            System.out.println(nachname + " und " + temp.getNachname() + " haben sich geschieden.");\n        } else {\n            System.out.println(nachname + " ist nicht verheiratet.");\n        }\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) {\n            return true;\n        } else if (obj == null) {\n            return false;\n        } else if (obj.getClass() == getClass() && this.hashCode() == ((Person)obj).hashCode()) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\nabstract class Mitarbeiter extends Person {\n    protected int personalNummer;\n\n    protected Mitarbeiter(String nachname, int personalNummer) {\n        super(nachname);\n        this.personalNummer = personalNummer;\n    }\n\n    protected Mitarbeiter(String nachname) {\n        super(nachname);\n    }\n\n    public void setPersonalNummer(int personalNummer) {\n        this.personalNummer = personalNummer;\n    }\n\n    public int getPersonalNummer() {\n        return personalNummer;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " Meine Personalnummer ist " + getPersonalNummer() + " und ich";\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Personalnummer: " + getPersonalNummer() + " (Attributquelle: Klasse Mitarbeiter).";\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Lernende extends Person {\n    private int nummer;\n\n    public Lernende(String nachname) {\n        super(nachname);\n    }\n\n    public Lernende(String nachname, int nummer) {\n        super(nachname);\n        this.nummer = nummer;\n    }\n\n    public void setNummer(int nummer) {\n        this.nummer = nummer;\n    }\n\n    public int getNummer() {\n        return nummer;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " Meine Nummer ist " + getNummer();\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Nummer: " + getNummer() + " (Attributquelle: Klasse Lernende).";\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Lehrer extends Mitarbeiter {\n    private String fachbereich;\n\n    public Lehrer(String nachname, int personalNummer, String fachbereich) {\n        super(nachname, personalNummer);\n        this.fachbereich = fachbereich;\n    }\n\n    public void setFachbereich(String fachbereich) {\n        this.fachbereich = fachbereich;\n    }\n\n    public String getFachbereich() {\n        return fachbereich;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " lehre " + getFachbereich();\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Fachbereich: " + getFachbereich() + " (Attributquelle: Klasse Lehrer).";\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Angestellte extends Mitarbeiter {\n    private boolean schulleitung;\n\n    public Angestellte(String nachname) {\n        super(nachname);\n    }\n\n    public Angestellte(String nachname, int personalNummer) {\n        super(nachname, personalNummer);\n    }\n\n    public Angestellte(String nachname, int personalNummer, boolean schulleitung) {\n        super(nachname, personalNummer);\n        this.schulleitung = schulleitung;\n    }\n\n    public void setSchulleitung(boolean schulleitung) {\n        this.schulleitung = schulleitung;\n    }\n\n    public boolean isSchulleitung() {\n        return schulleitung;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     if(isSchulleitung() == false) {\n    //         return super.vorstellen() + " bin einfacher Angestellter";\n    //     } else {\n    //         return super.vorstellen() + " bin Schulleitungsmitglied";\n    //     }\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - In Schulleitung?: " + isSchulleitung();\n    }\n}\n')),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"BZT8")," wurden die ",(0,a.kt)("em",{parentName:"p"},"abstrakten Klassen")," eingef\xfchrt. ",(0,a.kt)("inlineCode",{parentName:"p"},"abstract")," kann vor die Klasse geschrieben werden und erlaubt es nicht mehr eine Instanz von dieser Klasse zu erstellen. Somit k\xf6nnen nur noch die Subklassen von dieser Klasse erstellt werden."),(0,a.kt)("h3",{id:"13-bzt9"},"1.3 BZT9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\n/**\n * Hello world!\n *\n */\npublic class App \n{\n    public static void main( String[] args )\n    {\n        Lernende lern1 = new Lernende("Moritz", 4711);\n\n        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschM\xfchle");\n\n        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);\n\n        Angestellte ange2 = new Angestellte("Schl\xe4ffrig", 345, false);\n\n        System.out.println(lern1.toString());\n        System.out.println(lehr1.toString());\n        System.out.println(ange1.toString());\n        System.out.println(ange2.toString());\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        ange1.heiraten(ange2);\n        lehr1.heiraten(lehr1);\n        ange2.heiraten(lehr1);\n\n        ange1.scheiden();\n        ange2.scheiden();\n        lehr1.scheiden();\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        System.out.println(ange1.equals(ange1));\n        System.out.println(ange1.equals(ange2));\n        Angestellte ange3 = new Angestellte("Schl\xe4ffrig");\n        System.out.println(ange2.equals(ange3));\n        Angestellte ange4 = new Angestellte("Hampelmann");\n        System.out.println(ange1.equals(ange4));\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        // Anzahl wird auf 3 gesetzt, mindestkonsum ist allerdings auf 4\n        System.out.println("Bitte als Angestellter Fr. " + ange1.kantineKonsum(3) + " bezahlen.");\n\n        // Anzahl wird auf 5 gesetzt, mindestkonsum ist allerdings auf 8\n        System.out.println("Bitte als Lehrer Fr. " + lehr1.kantineKonsum(5) + " bezahlen.");\n\n        // Lernender hat kein mindestkonsum. Dazu bekommt er noch 10% Rabatt\n        System.out.println("Bitte als Lernender Fr. " + lern1.kantineKonsum(7) + " bezahlen.");\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\nabstract class Person {\n    protected String nachname;\n    protected final double minpreis = 2.50;\n\n    protected Person(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public void setNachname(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public String getNachname() {\n        return nachname;\n    }\n\n    // public String vorstellen() {\n    //     String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";\n    //     return output;\n    // }\n\n    @Override\n    public String toString() {\n        return nachname + " (Attributquelle: Klasse Person) - " + getClass() + ".";\n    }\n\n    private Person ehepartner = null;   // Die Referenz auf den Ehepartner wird erstellt, aber auf null gesetzt\n                                    // einAngestellter.heiraten(eineAngestellte); Als Hinweis: Der Aufruf im main!\n    protected void heiraten(Person ehepartner) // \n    {\n        if (this != ehepartner) // \xfcberpr\xfcfung ob nicht selber\n        {\n            if(this.ehepartner == null && ehepartner.ehepartner == null) // wenn beide noch nicht verheiratet sind\n            {\n                this.ehepartner = ehepartner; //  person auf ehepartner setzen\n                ehepartner.ehepartner = this; // ?\n\n                System.out.println(nachname + " und " + ehepartner.getNachname() + " haben geheiratet. ");\n            }\n            else // wenn mind. jemand bereits verheiratet ist\n            {\n                System.out.println(nachname + " und " + ehepartner.getNachname() + " k\xf6nnen nicht heiraten, " + "weil mindestens einer bereits verheiratet ist! ");\n            }\n        }\n        else // wenn selber\n        {\n            System.out.println(nachname + " kann sich nicht selber heiraten!");\n        }\n    }\n\n    protected void scheiden() {\n        if (ehepartner != null) {\n            Person temp = ehepartner;\n            ehepartner.ehepartner = null;\n            this.ehepartner = null;\n\n            System.out.println(nachname + " und " + temp.getNachname() + " haben sich geschieden.");\n        } else {\n            System.out.println(nachname + " ist nicht verheiratet.");\n        }\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) {\n            return true;\n        } else if (obj == null) {\n            return false;\n        } else if (obj.getClass() == getClass() && this.hashCode() == ((Person)obj).hashCode()) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n\n    public abstract double kantineKonsum(int anzahl);\n\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\nabstract class Mitarbeiter extends Person {\n    protected int personalNummer;\n\n    protected Mitarbeiter(String nachname, int personalNummer) {\n        super(nachname);\n        this.personalNummer = personalNummer;\n    }\n\n    protected Mitarbeiter(String nachname) {\n        super(nachname);\n    }\n\n    public void setPersonalNummer(int personalNummer) {\n        this.personalNummer = personalNummer;\n    }\n\n    public int getPersonalNummer() {\n        return personalNummer;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " Meine Personalnummer ist " + getPersonalNummer() + " und ich";\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Personalnummer: " + getPersonalNummer() + " (Attributquelle: Klasse Mitarbeiter).";\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Lernende extends Person {\n    private int nummer;\n\n    public Lernende(String nachname) {\n        super(nachname);\n    }\n\n    public Lernende(String nachname, int nummer) {\n        super(nachname);\n        this.nummer = nummer;\n    }\n\n    public void setNummer(int nummer) {\n        this.nummer = nummer;\n    }\n\n    public int getNummer() {\n        return nummer;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " Meine Nummer ist " + getNummer();\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Nummer: " + getNummer() + " (Attributquelle: Klasse Lernende).";\n    }\n\n    @Override\n    public int hashCode() {\n        return super.hashCode();\n    }\n\n    @Override\n    public double kantineKonsum(int anzahl) {\n        // 10% Rabatt\n        return anzahl * minpreis * 0.9;\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Lehrer extends Mitarbeiter {\n    private String fachbereich;\n\n    public Lehrer(String nachname, int personalNummer, String fachbereich) {\n        super(nachname, personalNummer);\n        this.fachbereich = fachbereich;\n    }\n\n    public void setFachbereich(String fachbereich) {\n        this.fachbereich = fachbereich;\n    }\n\n    public String getFachbereich() {\n        return fachbereich;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     return super.vorstellen() + " lehre " + getFachbereich();\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - Fachbereich: " + getFachbereich() + " (Attributquelle: Klasse Lehrer).";\n    }\n\n    @Override\n    public double kantineKonsum(int anzahl) {\n        if (anzahl < 8) {\n            anzahl = 8;\n        }\n        return anzahl * minpreis;\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package ch.bztf;\n\npublic class Angestellte extends Mitarbeiter {\n    private boolean schulleitung;\n\n    public Angestellte(String nachname) {\n        super(nachname);\n    }\n\n    public Angestellte(String nachname, int personalNummer) {\n        super(nachname, personalNummer);\n    }\n\n    public Angestellte(String nachname, int personalNummer, boolean schulleitung) {\n        super(nachname, personalNummer);\n        this.schulleitung = schulleitung;\n    }\n\n    public void setSchulleitung(boolean schulleitung) {\n        this.schulleitung = schulleitung;\n    }\n\n    public boolean isSchulleitung() {\n        return schulleitung;\n    }\n\n    // @Override\n    // public String vorstellen() {\n    //     if(isSchulleitung() == false) {\n    //         return super.vorstellen() + " bin einfacher Angestellter";\n    //     } else {\n    //         return super.vorstellen() + " bin Schulleitungsmitglied";\n    //     }\n    // }\n\n    @Override\n    public String toString() {\n        return super.toString() + " - In Schulleitung?: " + isSchulleitung();\n    }\n\n    @Override\n    public double kantineKonsum(int anzahl) {\n        if (anzahl < 4) {\n            anzahl = 4;\n        }\n        return anzahl * minpreis;\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"abstract")," kann auch bei Methoden genutzt werden. Es dient als Ger\xfcst von Methoden. Diese Methoden ",(0,a.kt)("strong",{parentName:"p"},"M\xdcSSEN")," in den Subklassen implementiert werden."),(0,a.kt)("h2",{id:"2-formativer-selbsttest"},"2 Formativer Selbsttest"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PDF Formativer Selbsttest Seite 1",src:t(47383).Z,width:"1656",height:"2339"}),"\n",(0,a.kt)("img",{alt:"PDF Formativer Selbsttest Seite 2",src:t(14423).Z,width:"1656",height:"2339"}),"\n",(0,a.kt)("img",{alt:"PDF Formativer Selbsttest Seite 3",src:t(43059).Z,width:"1656",height:"2339"}),"\n",(0,a.kt)("img",{alt:"PDF Formativer Selbsttest Seite 4",src:t(87342).Z,width:"1656",height:"2339"})),(0,a.kt)("h2",{id:"3-unklarheiten"},"3 Unklarheiten"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wo zeigt das ",(0,a.kt)("inlineCode",{parentName:"strong"},"ehepartner.ehepartner")," hin? (BZT6)"),(0,a.kt)("br",{parentName:"p"}),"\n","Er zeigt auf den \xdcbergabeparameter, der \xfcbergeben wird. Der \xdcbergabeparameter zeigt auf die Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"private Person ehepartner = null")))}p.isMDXComponent=!0},47383:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/form_selbsttest_2022-03-04-1-b61d55dcd88815bbece109bc14823f40.png"},14423:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/form_selbsttest_2022-03-04-2-388e6e82b5b32c053f98cd20ee328e4d.png"},43059:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/form_selbsttest_2022-03-04-3-d2ef737fbd6295964b87ff86558d08bb.png"},87342:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/form_selbsttest_2022-03-04-4-1b94162cd9864fff582c99427e9ae44d.png"},54722:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tag4_01-a1b079b6e78c54a6efb16dd7442f5dc5.svg"}}]);