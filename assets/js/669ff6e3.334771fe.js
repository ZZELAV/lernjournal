"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[16172],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),k=i,b=d["".concat(u,".").concat(k)]||d[k]||s[k]||o;return t?r.createElement(b,a(a({ref:n},c),{},{components:t})):r.createElement(b,a({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=k;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[d]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},18869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const o={},a="Dreieck & Viereck",p={unversionedId:"M226A/praxis-doku/dreieck-viereck",id:"M226A/praxis-doku/dreieck-viereck",title:"Dreieck & Viereck",description:"## Source Code",source:"@site/docs/M226A/praxis-doku/dreieck-viereck.md",sourceDirName:"M226A/praxis-doku",slug:"/M226A/praxis-doku/dreieck-viereck",permalink:"/docs/M226A/praxis-doku/dreieck-viereck",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Computerbauteile",permalink:"/docs/M226A/praxis-doku/computerbauteile"},next:{title:"Konto",permalink:"/docs/M226A/praxis-doku/konto"}},u={},l=[],c={toc:l},d="wrapper";function s(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dreieck--viereck"},"Dreieck & Viereck"),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"source-code"},"Source Code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package ch.zzelav;\n\npublic class App {\n    public static void main(String[] args) {\n\n        Point punktA = new Point(-100, 100);\n        Point punktB = new Point(53, -7);\n        Point punktC = new Point(38, -99);\n        Point punktD = new Point(-54, 87);\n\n        Dreieck d1 = new Dreieck(punktA, punktB, punktC);\n        Viereck v1 = new Viereck(punktA, punktB, punktC, punktD);\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Point ... = new Point(...);")," erzeugt neue Objekte mit jeweils 2 Parametern. Das Erzeugen der Objekte wird mithilfe eines Konstruktors gemacht. ",(0,i.kt)("inlineCode",{parentName:"p"},"Dreieck d1 = new Dreieck(punktA, punktB, punktC);")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"Viereck v1 = new Viereck(punktA, punktB, punktC, punktD);")," setzt die Punkte zu einem Dreieck und Viereck zusammen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package ch.zzelav;\n\npublic class Point {\n    private double xCoor;\n    private double yCoor;\n\n    public Point(double x, double y) {\n        if(x >= -100 && x <= 100) {\n            xCoor = x;\n        }\n        else {\n            System.out.println("Ung\xfcltige Koordinate (x): " + x);\n        }\n\n        if(y >= -100 && y <= 100) {\n            yCoor = y;\n        }\n        else {\n            System.out.println("Ung\xfcltige Koordinate (y): " + y);\n        }\n    }\n\n    public void addToXCoor(int xCoor) {\n        xCoor += this.xCoor;\n    }\n\n    public void addToYCoor(int yCoor) {\n        yCoor += this.yCoor;\n    }\n\n    public void setXCoor(double xCoor) {\n        this.xCoor = xCoor;\n    }\n\n    public void setYCoor(double yCoor) {\n        this.yCoor = yCoor;\n    }\n\n    public void setPoint(double x, double y) {\n        if(x >= -100 && x <= 100) {\n            xCoor = x;\n        }\n        else {\n            System.out.println("Ung\xfcltige Koordinate (x): " + x);\n        }\n\n        if(y >= -100 && y <= 100) {\n            yCoor = y;\n        }\n        else {\n            System.out.println("Ung\xfcltige Koordinate (y): " + y);\n        }\n    }\n\n    public double getXCoor() {\n        return this.xCoor;\n    }\n\n    public double getYCoor() {\n        return this.yCoor;\n    }\n\n    public String getPoint() {\n        return xCoor + ", " + yCoor;\n    }\n\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"public Point(double x, double y)")," ist der Konstruktor. Er kann 2 doubles aufnehmen und diese werden in ",(0,i.kt)("inlineCode",{parentName:"p"},"xCoor")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"yCoor")," gespeichert. ",(0,i.kt)("inlineCode",{parentName:"p"},"public void addToXCoor(int xCoor)")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"public void addToYCoor(int yCoor)")," rechnet den alten und den neuen Wert zusammen und speichert ihn in ",(0,i.kt)("inlineCode",{parentName:"p"},"xCoor"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"yCoor"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"public void setXCoor(double xCoor)")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"public void setYCoor(double yCoor)")," setzen den Wert von ",(0,i.kt)("inlineCode",{parentName:"p"},"xCoor"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"yCoor"),". Die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"public void setPoint(double x, double y)")," setzt beide Koordinaten, wie der Konstruktor. ",(0,i.kt)("inlineCode",{parentName:"p"},"public double getXCoor()")," gibt den Wert von ",(0,i.kt)("inlineCode",{parentName:"p"},"xCoor")," zur\xfcck und ",(0,i.kt)("inlineCode",{parentName:"p"},"public double getYCoor()")," den Wert von ",(0,i.kt)("inlineCode",{parentName:"p"},"yCoor"),". Die letze Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"public String getPoint()")," f\xfcgt beide Koordinaten zusammen und gibt diese als String aus. Beim Konstruktor und ",(0,i.kt)("inlineCode",{parentName:"p"},"setPoint")," wird \xfcberpr\xfcft ob die Koordinaten kleiner -100 und gr\xf6sser 100 sind. Ist das der Fall wird eine Fehlermeldung ausgegeben und die Koordinate wird nicht gespeichert."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package ch.zzelav;\n\npublic class Dreieck {\n\n    private Point a;\n    private Point b;\n    private Point c;\n\n    public Dreieck(Point pA, Point pB, Point pC) {\n        a = pA;\n        b = pB;\n        c = pC;\n    }\n\n    public boolean verify() {\n        if (a != null || b != null || c != null) {\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n\n    public void setA(Point a) {\n        this.a = a;\n    }\n\n    public void setB(Point b) {\n        this.b = b;\n    }\n\n    public void setC(Point c) {\n        this.c = c;\n    }\n\n    public Point getA() {\n        return a;\n    }\n\n    public Point getB() {\n        return b;\n    }\n\n    public Point getC() {\n        return c;\n    }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package ch.zzelav;\n\npublic class Viereck {\n\n    private Point a;\n    private Point b;\n    private Point c;\n    private Point d;\n\n    public Viereck(Point pA, Point pB, Point pC, Point pD) {\n        a = pA;\n        b = pB;\n        c = pC;\n        d = pD;\n    }\n\n    public boolean verify() {\n        if (a != null || b != null || c != null || d != null) {\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n\n    public void setA(Point a) {\n        this.a = a;\n    }\n\n    public void setB(Point b) {\n        this.b = b;\n    }\n\n    public void setC(Point c) {\n        this.c = c;\n    }\n\n    public void setD(Point d) {\n        this.d = d;\n    }\n\n    public Point getA() {\n        return a;\n    }\n\n    public Point getB() {\n        return b;\n    }\n\n    public Point getC() {\n        return c;\n    }\n\n    public Point getD() {\n        return d;\n    }\n}\n")),(0,i.kt)("p",null,"Die Konstruktor ",(0,i.kt)("inlineCode",{parentName:"p"},"Dreieck")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"Viereck")," hat drei/vier \xdcbergabeparameter. Die Funktion ",(0,i.kt)("inlineCode",{parentName:"p"},"verify()")," \xfcberpr\xfcft, ob die Punkte nicht ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," sind."))}s.isMDXComponent=!0}}]);