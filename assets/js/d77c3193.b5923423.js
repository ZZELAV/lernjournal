"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[95466],{15832:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=r(85893),i=r(11151);const s={title:"Tag 3",tags:["M226B","Tag 3","Java","GeomObjects","BZTF-Beispiel"]},a="Tag 3: GeomObjects",l={id:"M226B/tag-0003",title:"Tag 3",description:"1 Zwischenstop GeomObjects",source:"@site/docs/M226B/tag-0003.md",sourceDirName:"M226B",slug:"/M226B/tag-0003",permalink:"/docs/M226B/tag-0003",draft:!1,unlisted:!1,tags:[{label:"M226B",permalink:"/docs/tags/m-226-b"},{label:"Tag 3",permalink:"/docs/tags/tag-3"},{label:"Java",permalink:"/docs/tags/java"},{label:"GeomObjects",permalink:"/docs/tags/geom-objects"},{label:"BZTF-Beispiel",permalink:"/docs/tags/bztf-beispiel"}],version:"current",frontMatter:{title:"Tag 3",tags:["M226B","Tag 3","Java","GeomObjects","BZTF-Beispiel"]},sidebar:"tutorialSidebar",previous:{title:"Tag 2",permalink:"/docs/M226B/tag-0002"},next:{title:"Tag 4",permalink:"/docs/M226B/tag-0004"}},c={},h=[{value:"1 Zwischenstop GeomObjects",id:"1-zwischenstop-geomobjects",level:2},{value:"2 Beispiele",id:"2-beispiele",level:2},{value:"2.1 BZT5",id:"21-bzt5",level:3},{value:"2.2 BZT6",id:"22-bzt6",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tag-3-geomobjects",children:"Tag 3: GeomObjects"}),"\n",(0,t.jsx)(n.h2,{id:"1-zwischenstop-geomobjects",children:"1 Zwischenstop GeomObjects"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"package ch.bztf;\n\n/**\n * Hello world!\n *\n */\npublic class App \n{\n    public static void main( String[] args )\n    {\n        RechtWinkligesDreieck aDreieck = new RechtWinkligesDreieck(6, 3);\n        Kreis aKreis = new Kreis(3.5);\n        Viereck aViereck = new Viereck(2.5, 3.5);\n\n        System.out.println(aDreieck.vorstellen());\n        System.out.println(aKreis.vorstellen());\n        System.out.println(aViereck.vorstellen());\n    }\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class GeomObject {\n    protected double flaeche, umfang;\n\n    public String vorstellen() {\n        String output = "Ich bin ein Geom-Object - Meine Flaeche ist " + flaeche + " und mein Umfang ist " + umfang + " und das als ";\n        return output;\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class RechtWinkligesDreieck extends GeomObject {\n    private double seitea, seiteb, seitec;\n\n    public RechtWinkligesDreieck(double seitea, double seiteb) {\n        this.seitea = seitea;\n        this.seiteb = seiteb;\n        berechneUmfang();\n        berechneFlaeche();\n    }\n\n    public void berechneUmfang() {\n        seitec = Math.sqrt((Math.pow(seitea, 2)) + (Math.pow(seiteb, 2))); // pythagoras\n        umfang = seitea + seiteb + seitec;\n    }\n\n    public void berechneFlaeche() {\n        flaeche = (seitea * seiteb) / 2;\n    }\n\n    @Override\n    public String vorstellen() {\n        return super.vorstellen() + "Dreieck.";\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Kreis extends GeomObject {\n    private double radius;\n\n    public Kreis(double radius) {\n        this.radius = radius;\n        berechneUmfang();\n        berechneFlaeche();\n    }\n\n    public void berechneUmfang() {\n        umfang = 2 * radius * Math.PI;\n    }\n\n    public void berechneFlaeche() {\n        flaeche = Math.PI * Math.pow(radius, 2);\n    }\n\n    @Override\n    public String vorstellen() {\n        return super.vorstellen() + "Kreis.";\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Viereck extends GeomObject {\n    private double seitea, seiteb;\n\n    public Viereck(double seitea, double seiteb) {\n        this.seitea = seitea;\n        this.seiteb = seiteb;\n        berechneUmfang();\n        berechneFlaeche();\n    }\n\n    public void berechneUmfang() {\n        umfang = (seitea + seiteb) * 2;\n    }\n\n    public void berechneFlaeche() {\n        flaeche = seitea * seiteb;\n    }\n\n    @Override\n    public String vorstellen() {\n        return super.vorstellen() + "Viereck.";\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In diesem Programm werden geometrische Objekte erstellt. Die Klasse ",(0,t.jsx)(n.code,{children:"GeomObject"})," ist die Superklasse von den Klassen ",(0,t.jsx)(n.code,{children:"RechtWinkligesDreieck"}),", ",(0,t.jsx)(n.code,{children:"Kreis"})," und ",(0,t.jsx)(n.code,{children:"Viereck"}),". In der Superklasse werden lediglich die Werte ",(0,t.jsx)(n.code,{children:"flaeche"})," und ",(0,t.jsx)(n.code,{children:"umfang"})," erfasst, denn diese werden in allen Subklassen verwendet. Auch wird in der Superklasse eine Methode ",(0,t.jsx)(n.code,{children:"vorstellen()"})," erstellt. Diese erstellt einen Output, in dem die Fl\xe4che und Umfang ausgegeben werden. Sie wird in den Subklassen noch erweitert. In allen Subklassen gibt es einen Konstruktor, um das Objekt zu erstellen. Auch gibt es immer die Methoden ",(0,t.jsx)(n.code,{children:"berechneUmfang()"})," und ",(0,t.jsx)(n.code,{children:"berechneFlaeche()"}),", die den Umfang und Fl\xe4che berechnen. Dazu wird die Methode ",(0,t.jsx)(n.code,{children:"vorstellen()"})," immer mit dem Namen des Objekts erweitert."]}),"\n",(0,t.jsxs)(n.p,{children:["UML:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{alt:"UML",src:r(10786).Z+"",width:"997",height:"357"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/appendix/M226B/UML/tag3_01",children:"Source Code"})]}),"\n",(0,t.jsx)(n.h2,{id:"2-beispiele",children:"2 Beispiele"}),"\n",(0,t.jsx)(n.h3,{id:"21-bzt5",children:"2.1 BZT5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\n/**\n * Hello world!\n *\n */\npublic class App \n{\n    public static void main( String[] args )\n    {\n        Person pers1 = new Person("Muster");\n\n        Lernende lern1 = new Lernende("Moritz", 4711);\n\n        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschM\xfchle");\n\n        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);\n\n        Angestellte ange2 = new Angestellte("Schl\xe4ffrig", 345, false);\n\n        System.out.println(pers1.vorstellen());\n        System.out.println(lern1.vorstellen());\n        System.out.println(lehr1.vorstellen());\n        System.out.println(ange1.vorstellen());\n        System.out.println(ange2.vorstellen());\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Person {\n    protected String nachname;\n\n    protected Person(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public void setNachname(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public String getNachname() {\n        return nachname;\n    }\n\n    public String vorstellen() {\n        String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";\n        return output;\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Mitarbeiter extends Person {\n    protected int personalNummer;\n\n    protected Mitarbeiter(String nachname, int personalNummer) {\n        super(nachname);\n        this.personalNummer = personalNummer;\n    }\n\n    protected Mitarbeiter(String nachname) {\n        super(nachname);\n    }\n\n    public void setPersonalNummer(int personalNummer) {\n        this.personalNummer = personalNummer;\n    }\n\n    public int getPersonalNummer() {\n        return personalNummer;\n    }\n\n    @Override\n    public String vorstellen() {\n        return super.vorstellen() + " Meine Personalnummer ist " + getPersonalNummer() + " und ich";\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Lernende extends Person {\n    private int nummer;\n\n    public Lernende(String nachname) {\n        super(nachname);\n    }\n\n    public Lernende(String nachname, int nummer) {\n        super(nachname);\n        this.nummer = nummer;\n    }\n\n    public void setNummer(int nummer) {\n        this.nummer = nummer;\n    }\n\n    public int getNummer() {\n        return nummer;\n    }\n\n    @Override\n    public String vorstellen() {\n        return super.vorstellen() + " Meine Nummer ist " + getNummer();\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Lehrer extends Mitarbeiter {\n    private String fachbereich;\n\n    public Lehrer(String nachname, int personalNummer, String fachbereich) {\n        super(nachname, personalNummer);\n        this.fachbereich = fachbereich;\n    }\n\n    public void setFachbereich(String fachbereich) {\n        this.fachbereich = fachbereich;\n    }\n\n    public String getFachbereich() {\n        return fachbereich;\n    }\n\n    @Override\n    public String vorstellen() {\n        return super.vorstellen() + " lehre " + getFachbereich();\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Angestellte extends Mitarbeiter {\n    private boolean schulleitung;\n\n    public Angestellte(String nachname) {\n        super(nachname);\n    }\n\n    public Angestellte(String nachname, int personalNummer) {\n        super(nachname, personalNummer);\n    }\n\n    public Angestellte(String nachname, int personalNummer, boolean schulleitung) {\n        super(nachname, personalNummer);\n        this.schulleitung = schulleitung;\n    }\n\n    public void setSchulleitung(boolean schulleitung) {\n        this.schulleitung = schulleitung;\n    }\n\n    public boolean isSchulleitung() {\n        return schulleitung;\n    }\n\n    @Override\n    public String vorstellen() {\n        if(isSchulleitung() == false) {\n            return super.vorstellen() + " bin einfacher Angestellter";\n        } else {\n            return super.vorstellen() + " bin Schulleitungsmitglied";\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Was macht und passiert eigentlich mit der Methode ",(0,t.jsx)(n.code,{children:"vorstellen()"}),"? Sie wird in der Superklasse erstellt und wird dann in den Subklassen \xfcberschrieben (",(0,t.jsx)(n.code,{children:"@Override"}),"). Das \xfcberschreiben, erlaubt einen Methodennamen mehrmals zu nutzen und immer eine andere Ausgabe zu erzeugen. Die Ausgabe der Methode ",(0,t.jsx)(n.code,{children:"vorstellen()"})," in der Klasse ",(0,t.jsx)(n.code,{children:"Lernender"})," ist somit eine andere als in der Klasse ",(0,t.jsx)(n.code,{children:"Lehrer"}),". Gibt es die Methode in der aufgerufenen Klasse nicht, wird die Methode in der Superklasse genutzt."]}),"\n",(0,t.jsx)(n.p,{children:"Somit gilt, Methoden und Attribute von Subklassen haben Vorrang von den Methoden und Attributen in der Superklasse."}),"\n",(0,t.jsx)(n.admonition,{title:"Late Binding",type:"info",children:(0,t.jsxs)(n.p,{children:["Dieses Prinzip nennt man ",(0,t.jsx)(n.strong,{children:"Late Binding"}),". Es wird erst zur Laufzeit entschieden, welche Methoden und Attribute aufgerufen werden."]})}),"\n",(0,t.jsxs)(n.p,{children:["Die Annotation ",(0,t.jsx)(n.code,{children:"@Override"}),", hilft Java zu verstehen, dass diese Methode \xfcberschrieben wird, ist aber nicht dringend notwendig."]}),"\n",(0,t.jsxs)(n.p,{children:["Um auf die Methode in der Superklasse zuzugreifen, kann das mit dem Prefix ",(0,t.jsx)(n.code,{children:"super"})," gemacht werden."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Unterschied \xdcberschreiben und \xdcberladen"})}),"\n",(0,t.jsx)(n.p,{children:"\xdcberschreiben -> Beim \xdcberschreiben wird die gesamte Methode \xfcberschrieben und gibt eine andere Ausgabe aus, als in den anderen Klassen."}),"\n",(0,t.jsx)(n.p,{children:"\xdcberladen -> Beim \xdcberladen wird die Ausgabe der Superklasse erweitert."}),"\n",(0,t.jsx)(n.h3,{id:"22-bzt6",children:"2.2 BZT6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\n/**\n * Hello world!\n *\n */\npublic class App \n{\n    public static void main( String[] args )\n    {\n        Person pers1 = new Person("Muster");\n\n        Lernende lern1 = new Lernende("Moritz", 4711);\n\n        Lehrer lehr1 = new Lehrer("Lempel", 12345, "RitschRatschM\xfchle");\n\n        Angestellte ange1 = new Angestellte("Verwalti", 54321, true);\n\n        Angestellte ange2 = new Angestellte("Schl\xe4ffrig", 345, false);\n\n        System.out.println(pers1.vorstellen());\n        System.out.println(lern1.vorstellen());\n        System.out.println(lehr1.vorstellen());\n        System.out.println(ange1.vorstellen());\n        System.out.println(ange2.vorstellen());\n\n        System.out.println("#-------------------------------------------------------------------------------------------------------------------------------------------------#");\n\n        ange1.heiraten(ange2);\n        lehr1.heiraten(lehr1);\n        ange2.heiraten(lehr1);\n\n        ange1.scheiden();\n        ange2.scheiden();\n        lehr1.scheiden();\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Person {\n    protected String nachname;\n\n    protected Person(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public void setNachname(String nachname) {\n        this.nachname = nachname;\n    }\n\n    public String getNachname() {\n        return nachname;\n    }\n\n    public String vorstellen() {\n        String output = "Ich heisse " + getNachname() + "! Von der Klasse " + this.getClass() + ".";\n        return output;\n    }\n\n    private Person ehepartner = null;   // Die Referenz auf den Ehepartner wird erstellt, aber auf null gesetzt\n                                    // einAngestellter.heiraten(eineAngestellte); Als Hinweis: Der Aufruf im main!\n    protected void heiraten(Person ehepartner) // \n    {\n        if (this != ehepartner) // \xfcberpr\xfcfung ob nicht selber\n        {\n            if(this.ehepartner == null && ehepartner.ehepartner == null) // wenn beide noch nicht verheiratet sind\n            {\n                this.ehepartner = ehepartner; //  person auf ehepartner setzen\n                ehepartner.ehepartner = this; // ?\n\n                System.out.println(nachname + " und " + ehepartner.getNachname() + " haben geheiratet. ");\n            }\n            else // wenn mind. jemand bereits verheiratet ist\n            {\n                System.out.println(nachname + " und " + ehepartner.getNachname() + " k\xf6nnen nicht heiraten, " + "weil mindestens einer bereits verheiratet ist! ");\n            }\n        }\n        else // wenn selber\n        {\n            System.out.println(nachname + " kann sich nicht selber heiraten!");\n        }\n    }\n\n    protected void scheiden() {\n        if (ehepartner != null) {\n            Person temp = ehepartner;\n            ehepartner.ehepartner = null;\n            this.ehepartner = null;\n\n            System.out.println(nachname + " und " + temp.getNachname() + " haben sich geschieden.");\n        } else {\n            System.out.println(nachname + " ist nicht verheiratet.");\n        }\n    }\n\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Mitarbeiter extends Person {\n    protected int personalNummer;\n\n    protected Mitarbeiter(String nachname, int personalNummer) {\n        super(nachname);\n        this.personalNummer = personalNummer;\n    }\n\n    protected Mitarbeiter(String nachname) {\n        super(nachname);\n    }\n\n    public void setPersonalNummer(int personalNummer) {\n        this.personalNummer = personalNummer;\n    }\n\n    public int getPersonalNummer() {\n        return personalNummer;\n    }\n\n    @Override\n    public String vorstellen() {\n        return super.vorstellen() + " Meine Personalnummer ist " + getPersonalNummer() + " und ich";\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Lernende extends Person {\n    private int nummer;\n\n    public Lernende(String nachname) {\n        super(nachname);\n    }\n\n    public Lernende(String nachname, int nummer) {\n        super(nachname);\n        this.nummer = nummer;\n    }\n\n    public void setNummer(int nummer) {\n        this.nummer = nummer;\n    }\n\n    public int getNummer() {\n        return nummer;\n    }\n\n    @Override\n    public String vorstellen() {\n        return super.vorstellen() + " Meine Nummer ist " + getNummer();\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Lehrer extends Mitarbeiter {\n    private String fachbereich;\n\n    public Lehrer(String nachname, int personalNummer, String fachbereich) {\n        super(nachname, personalNummer);\n        this.fachbereich = fachbereich;\n    }\n\n    public void setFachbereich(String fachbereich) {\n        this.fachbereich = fachbereich;\n    }\n\n    public String getFachbereich() {\n        return fachbereich;\n    }\n\n    @Override\n    public String vorstellen() {\n        return super.vorstellen() + " lehre " + getFachbereich();\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package ch.bztf;\n\npublic class Angestellte extends Mitarbeiter {\n    private boolean schulleitung;\n\n    public Angestellte(String nachname) {\n        super(nachname);\n    }\n\n    public Angestellte(String nachname, int personalNummer) {\n        super(nachname, personalNummer);\n    }\n\n    public Angestellte(String nachname, int personalNummer, boolean schulleitung) {\n        super(nachname, personalNummer);\n        this.schulleitung = schulleitung;\n    }\n\n    public void setSchulleitung(boolean schulleitung) {\n        this.schulleitung = schulleitung;\n    }\n\n    public boolean isSchulleitung() {\n        return schulleitung;\n    }\n\n    @Override\n    public String vorstellen() {\n        if(isSchulleitung() == false) {\n            return super.vorstellen() + " bin einfacher Angestellter";\n        } else {\n            return super.vorstellen() + " bin Schulleitungsmitglied";\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Im Beispiel BZT6 werden die zwei neuen Methoden ",(0,t.jsx)(n.code,{children:"heiraten()"})," und ",(0,t.jsx)(n.code,{children:"scheiden()"})," eingef\xfchrt. Die Methoden werden in der Klasse ",(0,t.jsx)(n.code,{children:"Person"})," implementiert."]}),"\n",(0,t.jsxs)(n.p,{children:["Zuerst wird eine Referenz auf den Ehepartner erstellt, die auf ",(0,t.jsx)(n.code,{children:"NULL"})," gesetzt wird. Danach wird in der Methode ",(0,t.jsx)(n.code,{children:"heiraten()"})," als erstes \xfcberpr\xfcft, ob der \xfcbergebene Wert nicht die Person selbst ist. Danach wird \xfcberpr\xfcft, ob die Person selbst und der Ehepartner noch keinen Ehepartner haben. Treffen diese beiden \xdcberpr\xfcfungen zu, wird die Referenz auf die Person gesetzt und die Person auf die Referenz."]}),"\n",(0,t.jsxs)(n.p,{children:["Bei der Methode ",(0,t.jsx)(n.code,{children:"scheiden()"})," muss nur \xfcberpr\xfcft werden, ob die Person verheiratet ist. Trifft dies zu, wird die Referenz von der Person entfernt und die Person von der Referenz."]}),"\n",(0,t.jsxs)(n.p,{children:["UML:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{alt:"UML",src:r(25585).Z+"",width:"993",height:"661"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/appendix/M226B/UML/tag3_02",children:"Source Code"})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},10786:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/tag3_01-139a38f81f4e25e67f587d4b0b61336c.svg"},25585:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/tag3_02-8636dbf168e42cb628ef144c35200cce.svg"},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var t=r(67294);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);