"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49286],{61187:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>t,metadata:()=>l,toc:()=>u});var i=r(85893),a=r(11151);const t={title:"Pr\xfcfungsvorbereitung LB1",tags:["M141","Pr\xfcfungsvorbereitung LB1","Datenbanksysteme"]},s="Pr\xfcfungsvorbereitung LB1",l={id:"M141/pruefungsvorbereitung-lb1",title:"Pr\xfcfungsvorbereitung LB1",description:'1 Recherche Auftrag und Einsch\xe4tzung von einem "unbekannten" DBMS',source:"@site/appendix/M141/pruefungsvorbereitung-lb1.md",sourceDirName:"M141",slug:"/M141/pruefungsvorbereitung-lb1",permalink:"/appendix/M141/pruefungsvorbereitung-lb1",draft:!1,unlisted:!1,tags:[{label:"M141",permalink:"/appendix/tags/m-141"},{label:"Pr\xfcfungsvorbereitung LB1",permalink:"/appendix/tags/prufungsvorbereitung-lb-1"},{label:"Datenbanksysteme",permalink:"/appendix/tags/datenbanksysteme"}],version:"current",frontMatter:{title:"Pr\xfcfungsvorbereitung LB1",tags:["M141","Pr\xfcfungsvorbereitung LB1","Datenbanksysteme"]},sidebar:"tutorialSidebar",previous:{title:"MongoDB Dependencies",permalink:"/appendix/M141/mongodb-dependencies"},next:{title:"Pr\xfcfungsvorbereitung LB2",permalink:"/appendix/M141/pruefungsvorbereitung-lb2"}},d={},u=[{value:"1 Recherche Auftrag und Einsch\xe4tzung von einem &quot;unbekannten&quot; DBMS",id:"1-recherche-auftrag-und-einsch\xe4tzung-von-einem-unbekannten-dbms",level:2},{value:"2 Durchf\xfchrung einer Installation",id:"2-durchf\xfchrung-einer-installation",level:2},{value:"3 Anwendung von Storage Engines auf eine Tabelle",id:"3-anwendung-von-storage-engines-auf-eine-tabelle",level:2},{value:"4 Anwendung von Security/Berechtigungen auf eine Umgebung",id:"4-anwendung-von-securityberechtigungen-auf-eine-umgebung",level:2},{value:"5 Transkationsisolation anwenden und konfigurieren",id:"5-transkationsisolation-anwenden-und-konfigurieren",level:2},{value:"6 Protokollierung langsamer Abfragen aktivieren",id:"6-protokollierung-langsamer-abfragen-aktivieren",level:2},{value:"7 Umsetzung Referenzielle Integrit\xe4t",id:"7-umsetzung-referenzielle-integrit\xe4t",level:2},{value:"8 Indexierungstypen aufgrund Anforderungen umsetzen",id:"8-indexierungstypen-aufgrund-anforderungen-umsetzen",level:2},{value:"9 Datentypen sinngem\xe4ss richtig anwenden",id:"9-datentypen-sinngem\xe4ss-richtig-anwenden",level:2},{value:"10 Auftrag : Import und Export von verschiedenen Datentypen",id:"10-auftrag--import-und-export-von-verschiedenen-datentypen",level:2},{value:"11 Auftrag : Durchf\xfchrung von Backup/Restore (nicht PITR)",id:"11-auftrag--durchf\xfchrung-von-backuprestore-nicht-pitr",level:2},{value:"12 Auftrag : Migration von Daten durchf\xfchren",id:"12-auftrag--migration-von-daten-durchf\xfchren",level:2},{value:"13 Auftrag : Beispielapplikation installieren und Datenauslesen",id:"13-auftrag--beispielapplikation-installieren-und-datenauslesen",level:2},{value:"14 Auftrag : Stored Procedures importieren, anzeigen, \xfcberarbeiten",id:"14-auftrag--stored-procedures-importieren-anzeigen-\xfcberarbeiten",level:2},{value:"15 Auftrag : Stored Procedures anwenden",id:"15-auftrag--stored-procedures-anwenden",level:2},{value:"16 Auftrag : Views importieren, anzeigen, \xfcberarbeiten",id:"16-auftrag--views-importieren-anzeigen-\xfcberarbeiten",level:2},{value:"17 Auftrag : Views anwenden",id:"17-auftrag--views-anwenden",level:2},{value:"18 Auftrag : Triggers importieren, anzeigen",id:"18-auftrag--triggers-importieren-anzeigen",level:2},{value:"19 Auftrag : (Theorie) Schlechte Query - verbessern Sie die Performance",id:"19-auftrag--theorie-schlechte-query---verbessern-sie-die-performance",level:2},{value:"20 Auftrag : (Praxis) Schlechte Query - verbessern Sie die Performance",id:"20-auftrag--praxis-schlechte-query---verbessern-sie-die-performance",level:2},{value:"21 Auftrag : (Theorie) - Vor- und Nachteile von MongoDB erl\xe4utern",id:"21-auftrag--theorie---vor--und-nachteile-von-mongodb-erl\xe4utern",level:2},{value:"22 Auftrag : (Theorie) - Begrifflichkeiten von MongoDB vs. MySQL",id:"22-auftrag--theorie---begrifflichkeiten-von-mongodb-vs-mysql",level:2},{value:"23 Auftrag : (Praxis) - Installation von MongoDB",id:"23-auftrag--praxis---installation-von-mongodb",level:2},{value:"24 Auftrag : (Praxis) - Konfigurationsauftrag von MongoDB (Binding anpassen, Verzeichnisse anpassen)",id:"24-auftrag--praxis---konfigurationsauftrag-von-mongodb-binding-anpassen-verzeichnisse-anpassen",level:2},{value:"25 Auftrag : Import und Export von verschiedenen Datens\xe4tzen",id:"25-auftrag--import-und-export-von-verschiedenen-datens\xe4tzen",level:2},{value:"26 Auftrag : Backup und Restore durchf\xfchren",id:"26-auftrag--backup-und-restore-durchf\xfchren",level:2},{value:"27 Inbetriebnahme (URI - Benutzer) einer vorgegebenen Applikation (inkl. Anpassungen/Korrekturen)",id:"27-inbetriebnahme-uri---benutzer-einer-vorgegebenen-applikation-inkl-anpassungenkorrekturen",level:2},{value:"28 Umsetzung Referenzielle Integrit\xe4t mit MongoDB",id:"28-umsetzung-referenzielle-integrit\xe4t-mit-mongodb",level:2},{value:"29 Design-Umsetzung von einem einfachen Beispiel (Regeln korrekt anwenden)",id:"29-design-umsetzung-von-einem-einfachen-beispiel-regeln-korrekt-anwenden",level:2},{value:"30 Umsetzung von Sharding und Replication",id:"30-umsetzung-von-sharding-und-replication",level:2},{value:"31 Umsetzung von Indexierungen anhand von einer Praxisaufgabe (inkl. <code>explain()</code>)",id:"31-umsetzung-von-indexierungen-anhand-von-einer-praxisaufgabe-inkl-explain",level:2}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pr\xfcfungsvorbereitung-lb1",children:"Pr\xfcfungsvorbereitung LB1"}),"\n",(0,i.jsx)(n.h2,{id:"1-recherche-auftrag-und-einsch\xe4tzung-von-einem-unbekannten-dbms",children:'1 Recherche Auftrag und Einsch\xe4tzung von einem "unbekannten" DBMS'}),"\n",(0,i.jsxs)(n.p,{children:["DBMS: ",(0,i.jsx)(n.a,{href:"https://www.ibm.com/products/db2",children:"Db2"})]}),"\n",(0,i.jsx)(n.p,{children:"Db2 ist von IBM entwickelt und ist ein RDBMS. Db2 nutzt ACID und die Konsistenz und Verf\xfcgbarkeit des CAP-Theorems. Es ist also \xe4hnlich zu MySQL."}),"\n",(0,i.jsx)(n.h2,{id:"2-durchf\xfchrung-einer-installation",children:"2 Durchf\xfchrung einer Installation"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0002#213-prozess-der-installation",children:"Tag 2 - Kapitel 2.1.3"})}),"\n",(0,i.jsx)(n.h2,{id:"3-anwendung-von-storage-engines-auf-eine-tabelle",children:"3 Anwendung von Storage Engines auf eine Tabelle"}),"\n",(0,i.jsx)(n.p,{children:"Alle anwendbare SE's anzeigen:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW ENGINES;\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MyISAM"})," auf Tabelle anwenden:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE testtable (\n  id int\n) ENGINE=MyISAM;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"4-anwendung-von-securityberechtigungen-auf-eine-umgebung",children:"4 Anwendung von Security/Berechtigungen auf eine Umgebung"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0003#212-benutzer-und-berechtigungen",children:"Tag 3 - Kapitel 2.1.2"})}),"\n",(0,i.jsx)(n.h2,{id:"5-transkationsisolation-anwenden-und-konfigurieren",children:"5 Transkationsisolation anwenden und konfigurieren"}),"\n",(0,i.jsx)(n.p,{children:"Derzeitige Transkationsisolation anzeigen:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SHOW VARIABLES LIKE "transaction_isolation";\n'})}),"\n",(0,i.jsx)(n.p,{children:"Transkationsisolation global \xe4ndern:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SET PERSIST transaction_isolation='SERIALIZABLE';\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"Scopes:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PERSIST (bleibt auch nach Neustart von MySQL)"}),"\n",(0,i.jsx)(n.li,{children:"GLOBAL (setzt sich nach Neustart von MySQL zur\xfcck)"}),"\n",(0,i.jsx)(n.li,{children:"SESSION (setzt sich nach ausloggen von MySQL zur\xfcck)"}),"\n",(0,i.jsx)(n.li,{children:"ohne scope (nur f\xfcr eine Transaktion)"}),"\n"]}),(0,i.jsxs)(n.p,{children:["Bei ",(0,i.jsx)(n.code,{children:"PERSIST"})," und ",(0,i.jsx)(n.code,{children:"GLOBAL"})," ist ein Ausloggen n\xf6tig."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/appendix/M141/pruefungsvorbereitung-lb2#3-erkl%C3%A4ren-sie-was-transaktionen-sind-und-was-anomalien-sind-erkl%C3%A4ren-sie-in-diesem-zusammenhang-die-einstellungen-zur-perfomancesteigerung",children:"Alle Transaktionsisolations-Stufen"})})]}),"\n",(0,i.jsx)(n.h2,{id:"6-protokollierung-langsamer-abfragen-aktivieren",children:"6 Protokollierung langsamer Abfragen aktivieren"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0004#212-server-betrieb",children:"Tag 4 - Kapitel 2.1.2"})}),"\n",(0,i.jsx)(n.h2,{id:"7-umsetzung-referenzielle-integrit\xe4t",children:"7 Umsetzung Referenzielle Integrit\xe4t"}),"\n",(0,i.jsx)(n.p,{children:"Um die referenzielle Integrit\xe4t umzusetzen, muss per Foreign Keys auf Primary Keys referenziert werden."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE categories(\n   cat_id int not null auto_increment primary key,\n   cat_name varchar(255) not null,\n   cat_description text\n) ENGINE=InnoDB;\n\nCREATE TABLE products(\n   prd_id int not null auto_increment primary key,\n   prd_name varchar(355) not null,\n   prd_price decimal,\n   cat_id int not null,\n   FOREIGN KEY fk_cat(cat_id) REFERENCES categories(cat_id) -- Referenz setzen\n        ON UPDATE CASCADE -- was passieren soll wenn die Referenz geupdated wird\n        ON DELETE RESTRICT -- was passieren soll wenn die Referenz gel\xf6scht wird\n)ENGINE=InnoDB;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Hier werden zwei Tabellen erstellt ",(0,i.jsx)(n.code,{children:"categories"})," und ",(0,i.jsx)(n.code,{children:"products"}),". Der FK wird ",(0,i.jsx)(n.code,{children:"fk_cat"})," benannt und verlinkt ",(0,i.jsx)(n.code,{children:"cat_id"})," der beiden Tabellen. ",(0,i.jsx)(n.code,{children:"ON UPDATE"})," definiert was bei einem ",(0,i.jsx)(n.code,{children:"UPDATE"})," passieren soll. ",(0,i.jsx)(n.code,{children:"ON DELETE"})," definiert was bei ",(0,i.jsx)(n.code,{children:"DELETE"})," passieren soll."]}),"\n",(0,i.jsx)(n.p,{children:"Folgende Konfiguration sind m\xf6glich:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"RESTRICT"})," / ",(0,i.jsx)(n.code,{children:"NO ACTION"}),":",(0,i.jsx)(n.br,{}),"\n","==> \xc4nderung auf referenzierten Tabelle nicht erlaubt"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CASCADE"}),":",(0,i.jsx)(n.br,{}),"\n","==> \xc4nderung auf referenzierten Tabelle werden synchronisiert"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"SET NULL"}),":",(0,i.jsx)(n.br,{}),"\n","==> Bei \xc4nderung auf referenzierten Tabelle, wird der FK's auf der Child-Tabelle auf ",(0,i.jsx)(n.code,{children:"NULL"})," gesetzt"]}),"\n",(0,i.jsx)(n.h2,{id:"8-indexierungstypen-aufgrund-anforderungen-umsetzen",children:"8 Indexierungstypen aufgrund Anforderungen umsetzen"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0004#214-indexierung",children:"Tag 4 - Kapitel 2.1.4"})}),"\n",(0,i.jsx)(n.h2,{id:"9-datentypen-sinngem\xe4ss-richtig-anwenden",children:"9 Datentypen sinngem\xe4ss richtig anwenden"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0004#213-datentypen--attribute",children:"Tag 4 - Kapitel 2.1.4"})}),"\n",(0,i.jsx)(n.h2,{id:"10-auftrag--import-und-export-von-verschiedenen-datentypen",children:"10 Auftrag : Import und Export von verschiedenen Datentypen"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0005",children:"Tag 5"})}),"\n",(0,i.jsx)(n.h2,{id:"11-auftrag--durchf\xfchrung-von-backuprestore-nicht-pitr",children:"11 Auftrag : Durchf\xfchrung von Backup/Restore (nicht PITR)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0005#23-lokales-backup",children:"Tag 5 - Kapitel 2.3"})}),"\n",(0,i.jsx)(n.h2,{id:"12-auftrag--migration-von-daten-durchf\xfchren",children:"12 Auftrag : Migration von Daten durchf\xfchren"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0005#25-migration-auf-entfernten-server",children:"Tag 5 - Kapitel 2.5"})}),"\n",(0,i.jsx)(n.h2,{id:"13-auftrag--beispielapplikation-installieren-und-datenauslesen",children:"13 Auftrag : Beispielapplikation installieren und Datenauslesen"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0007#13-dokumentieren-sie-ihre-arbeiten-f%C3%BCr-die-installation-der-etherpad-applikation",children:"Tag 7 - Kapitel 1.3"})}),"\n",(0,i.jsx)(n.h2,{id:"14-auftrag--stored-procedures-importieren-anzeigen-\xfcberarbeiten",children:"14 Auftrag : Stored Procedures importieren, anzeigen, \xfcberarbeiten"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0008#111-sps-views-triggers-anzeigen-und-anwenden",children:"Tag 8 - Kapitel 1.1.1"})}),"\n",(0,i.jsx)(n.h2,{id:"15-auftrag--stored-procedures-anwenden",children:"15 Auftrag : Stored Procedures anwenden"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0008#111-sps-views-triggers-anzeigen-und-anwenden",children:"Tag 8 - Kapitel 1.1.1"})}),"\n",(0,i.jsx)(n.h2,{id:"16-auftrag--views-importieren-anzeigen-\xfcberarbeiten",children:"16 Auftrag : Views importieren, anzeigen, \xfcberarbeiten"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0008#111-sps-views-triggers-anzeigen-und-anwenden",children:"Tag 8 - Kapitel 1.1.1"})}),"\n",(0,i.jsx)(n.h2,{id:"17-auftrag--views-anwenden",children:"17 Auftrag : Views anwenden"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0008#111-sps-views-triggers-anzeigen-und-anwenden",children:"Tag 8 - Kapitel 1.1.1"})}),"\n",(0,i.jsx)(n.h2,{id:"18-auftrag--triggers-importieren-anzeigen",children:"18 Auftrag : Triggers importieren, anzeigen"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0008#111-sps-views-triggers-anzeigen-und-anwenden",children:"Tag 8 - Kapitel 1.1.1"})}),"\n",(0,i.jsx)(n.h2,{id:"19-auftrag--theorie-schlechte-query---verbessern-sie-die-performance",children:"19 Auftrag : (Theorie) Schlechte Query - verbessern Sie die Performance"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0009#11-kurzzusammenfassung-zu-den-performance-tips",children:"Tag 9 - Kapitel 1.1"})}),"\n",(0,i.jsx)(n.h2,{id:"20-auftrag--praxis-schlechte-query---verbessern-sie-die-performance",children:"20 Auftrag : (Praxis) Schlechte Query - verbessern Sie die Performance"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0009#12-%C3%BCbungsdokumentation-zu-performance-und-indexing",children:"Tag 9 - Kapitel 1.2"})}),"\n",(0,i.jsx)(n.h2,{id:"21-auftrag--theorie---vor--und-nachteile-von-mongodb-erl\xe4utern",children:"21 Auftrag : (Theorie) - Vor- und Nachteile von MongoDB erl\xe4utern"}),"\n",(0,i.jsx)(n.p,{children:"Vorteile:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Skalierbarkeit"}),": MongoDB ist sehr skalierbar, was es erm\xf6glicht gute Cluster zu bauen."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Replikation"}),": Daten k\xf6nnen schnell und einfach auf mehrere Systeme kopiert werden."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Speicherung"}),": Auch grosse Daten k\xf6nnen schnell gespeichert und gelesen werden."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Benutzerfreundlichkeit"}),": Einfach zu lernen und logisch aufgebaut."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Nachteile:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Speicherverbrauch"}),": MongoDB braucht vergleichsweise viel Speicher."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Stored Procedures"}),": existieren nicht"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"22-auftrag--theorie---begrifflichkeiten-von-mongodb-vs-mysql",children:"22 Auftrag : (Theorie) - Begrifflichkeiten von MongoDB vs. MySQL"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0010#begriffe-rundum-mongodb",children:"Tag 10 - Kapitel 1.1"})}),"\n",(0,i.jsx)(n.h2,{id:"23-auftrag--praxis---installation-von-mongodb",children:"23 Auftrag : (Praxis) - Installation von MongoDB"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0010#113-prozess-der-installation-wiewas-habe-ich-es-installiert",children:"Tag 10 - Kapitel 1.1.3"})}),"\n",(0,i.jsx)(n.h2,{id:"24-auftrag--praxis---konfigurationsauftrag-von-mongodb-binding-anpassen-verzeichnisse-anpassen",children:"24 Auftrag : (Praxis) - Konfigurationsauftrag von MongoDB (Binding anpassen, Verzeichnisse anpassen)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0010#12-dokumentation-zur-%C3%BCbung-erste-schritte-mit-mongodb",children:"Tag 10 - Kapitel 1.2"})}),"\n",(0,i.jsx)(n.h2,{id:"25-auftrag--import-und-export-von-verschiedenen-datens\xe4tzen",children:"25 Auftrag : Import und Export von verschiedenen Datens\xe4tzen"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0011#111-import",children:"Tag 11 - Kapitel 1.1.1"})}),"\n",(0,i.jsx)(n.p,{children:"Export:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mongodb",children:"mongoexport --db=cities --collection=cities --out=export_cities.json\n"})}),"\n",(0,i.jsx)(n.h2,{id:"26-auftrag--backup-und-restore-durchf\xfchren",children:"26 Auftrag : Backup und Restore durchf\xfchren"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0011#115-backup-und-restore",children:"Tag 11 - Kapitel 1.1.5"})}),"\n",(0,i.jsx)(n.h2,{id:"27-inbetriebnahme-uri---benutzer-einer-vorgegebenen-applikation-inkl-anpassungenkorrekturen",children:"27 Inbetriebnahme (URI - Benutzer) einer vorgegebenen Applikation (inkl. Anpassungen/Korrekturen)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0012#11-dokumentation-zur-%C3%BCbung-anwendung-von-db-benutzern-und-uris",children:"Tag 12 - Kapitel 1.1"})}),"\n",(0,i.jsx)(n.h2,{id:"28-umsetzung-referenzielle-integrit\xe4t-mit-mongodb",children:"28 Umsetzung Referenzielle Integrit\xe4t mit MongoDB"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0013#112-embedding-vs-referencing",children:"Tag 13 - Kapitel 1.1.2"})}),"\n",(0,i.jsx)(n.h2,{id:"29-design-umsetzung-von-einem-einfachen-beispiel-regeln-korrekt-anwenden",children:"29 Design-Umsetzung von einem einfachen Beispiel (Regeln korrekt anwenden)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0013#11-best-practices-beim-datenbankdesign",children:"Tag 13 - Kapitel 1.1"})}),"\n",(0,i.jsx)(n.h2,{id:"30-umsetzung-von-sharding-und-replication",children:"30 Umsetzung von Sharding und Replication"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/M141/tag-0013#13-%C3%BCbung-replication",children:"Tag 13 - Kapitel 1.3"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/M141/tag-0013#14-%C3%BCbung-sharding",children:"Tag 13 - Kapitel 1.4"})]}),"\n",(0,i.jsxs)(n.h2,{id:"31-umsetzung-von-indexierungen-anhand-von-einer-praxisaufgabe-inkl-explain",children:["31 Umsetzung von Indexierungen anhand von einer Praxisaufgabe (inkl. ",(0,i.jsx)(n.code,{children:"explain()"}),")"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/M141/tag-0013#12-%C3%BCbung-indexierung",children:"Tag 13 - Kapitel 1.2"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Quellen:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.ionos.de/digitalguide/hosting/hosting-technik/mysql-vs-mongodb/",children:"https://www.ionos.de/digitalguide/hosting/hosting-technik/mysql-vs-mongodb/"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var i=r(67294);const a={},t=i.createContext(a);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);