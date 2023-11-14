"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[24592],{88324:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>_,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=r(85893),i=r(11151);const a={title:"Tag 8",tags:["M141","Tag 8","Datenbanksysteme","Stored Procedures","Views","Triggers"]},t="Tag 8",l={id:"M141/tag-0008",title:"Tag 8",description:"1 Dokumentationsauftr\xe4ge",source:"@site/docs/M141/tag-0008.md",sourceDirName:"M141",slug:"/M141/tag-0008",permalink:"/docs/M141/tag-0008",draft:!1,unlisted:!1,tags:[{label:"M141",permalink:"/docs/tags/m-141"},{label:"Tag 8",permalink:"/docs/tags/tag-8"},{label:"Datenbanksysteme",permalink:"/docs/tags/datenbanksysteme"},{label:"Stored Procedures",permalink:"/docs/tags/stored-procedures"},{label:"Views",permalink:"/docs/tags/views"},{label:"Triggers",permalink:"/docs/tags/triggers"}],version:"current",frontMatter:{title:"Tag 8",tags:["M141","Tag 8","Datenbanksysteme","Stored Procedures","Views","Triggers"]},sidebar:"tutorialSidebar",previous:{title:"Tag 7",permalink:"/docs/M141/tag-0007"},next:{title:"Tag 9",permalink:"/docs/M141/tag-0009"}},d={},c=[{value:"1 Dokumentationsauftr\xe4ge",id:"1-dokumentationsauftr\xe4ge",level:2},{value:"1.1 \xdcbungsdokuemntation Sakila",id:"11-\xfcbungsdokuemntation-sakila",level:3},{value:"1.1.1 SPs, Views, Triggers anzeigen und anwenden",id:"111-sps-views-triggers-anzeigen-und-anwenden",level:4},{value:"1.1.2 SPs, Views, Triggers Import(Create)-Befehle dokumentiert",id:"112-sps-views-triggers-importcreate-befehle-dokumentiert",level:4},{value:"1.2 \xdcbungsdokuemntation Chat-Applikation",id:"12-\xfcbungsdokuemntation-chat-applikation",level:3},{value:"1.2.1 SPs, Views anwenden (erstellen und aus der Applikation verwenden)",id:"121-sps-views-anwenden-erstellen-und-aus-der-applikation-verwenden",level:4}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tag-8",children:"Tag 8"}),"\n",(0,s.jsx)(n.h2,{id:"1-dokumentationsauftr\xe4ge",children:"1 Dokumentationsauftr\xe4ge"}),"\n",(0,s.jsx)(n.h3,{id:"11-\xfcbungsdokuemntation-sakila",children:"1.1 \xdcbungsdokuemntation Sakila"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://downloads.mysql.com/docs/sakila-db.zip",children:"Sakila-DB herunterladen"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Struktur und Daten importieren"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"sudo mysql < sakila-schema.sql\r\nsudo mysql < sakila-data.sql\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Datenbank testen"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"USE sakilla;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW FULL TABLES;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="OUTPUT"',children:"----------------------------+------------+\r\n| Tables_in_sakila           | Table_type |\r\n+----------------------------+------------+\r\n| actor                      | BASE TABLE |\r\n| actor_info                 | VIEW       |\r\n| address                    | BASE TABLE |\r\n| category                   | BASE TABLE |\r\n| city                       | BASE TABLE |\r\n| country                    | BASE TABLE |\r\n| customer                   | BASE TABLE |\r\n| customer_list              | VIEW       |\r\n| film                       | BASE TABLE |\r\n| film_actor                 | BASE TABLE |\r\n| film_category              | BASE TABLE |\r\n| film_list                  | VIEW       |\r\n| film_text                  | BASE TABLE |\r\n| inventory                  | BASE TABLE |\r\n| language                   | BASE TABLE |\r\n| nicer_but_slower_film_list | VIEW       |\r\n| payment                    | BASE TABLE |\r\n| rental                     | BASE TABLE |\r\n| sales_by_film_category     | VIEW       |\r\n| sales_by_store             | VIEW       |\r\n| staff                      | BASE TABLE |\r\n| staff_list                 | VIEW       |\r\n| store                      | BASE TABLE |\r\n+----------------------------+------------+\r\n23 rows in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT COUNT(*) FROM film;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="OUTPUT"',children:"+----------+\r\n| COUNT(*) |\r\n+----------+\r\n|     1000 |\r\n+----------+\r\n1 row in set (0.06 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT COUNT(*) FROM film_text;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="OUTPUT"',children:"+----------+\r\n| COUNT(*) |\r\n+----------+\r\n|     1000 |\r\n+----------+\r\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"111-sps-views-triggers-anzeigen-und-anwenden",children:"1.1.1 SPs, Views, Triggers anzeigen und anwenden"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Zeigen Sie alle Views der Datenbank sakila an:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW FULL TABLES WHERE table_type = 'VIEW';\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="OUTPUT"',children:"+----------------------------+------------+\r\n| Tables_in_sakila           | Table_type |\r\n+----------------------------+------------+\r\n| actor_info                 | VIEW       |\r\n| customer_list              | VIEW       |\r\n| film_list                  | VIEW       |\r\n| nicer_but_slower_film_list | VIEW       |\r\n| sales_by_film_category     | VIEW       |\r\n| sales_by_store             | VIEW       |\r\n| staff_list                 | VIEW       |\r\n+----------------------------+------------+\r\n7 rows in set (0.00 sec)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Zeigen Sie alle Stored Procedures der Datenbank sakila an:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW PROCEDURE STATUS WHERE db = 'sakila';\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="OUTPUT"',children:"+--------+-------------------+-----------+----------------+---------------------+---------------------+---------------+--------------------------------------------------+----------------------+----------------------+--------------------+\r\n| Db     | Name              | Type      | Definer        | Modified            | Created             | Security_type | Comment                                          | character_set_client | collation_connection | Database Collation |\r\n+--------+-------------------+-----------+----------------+---------------------+---------------------+---------------+--------------------------------------------------+----------------------+----------------------+--------------------+\r\n| sakila | film_in_stock     | PROCEDURE | root@localhost | 2023-04-19 11:10:08 | 2023-04-19 11:10:08 | DEFINER       |                                                  | utf8mb4              | utf8mb4_0900_ai_ci   | utf8mb4_0900_ai_ci |\r\n| sakila | film_not_in_stock | PROCEDURE | root@localhost | 2023-04-19 11:10:08 | 2023-04-19 11:10:08 | DEFINER       |                                                  | utf8mb4              | utf8mb4_0900_ai_ci   | utf8mb4_0900_ai_ci |\r\n| sakila | rewards_report    | PROCEDURE | root@localhost | 2023-04-19 11:10:08 | 2023-04-19 11:10:08 | DEFINER       | Provides a customizable report on best customers | utf8mb4              | utf8mb4_0900_ai_ci   | utf8mb4_0900_ai_ci |\r\n+--------+-------------------+-----------+----------------+---------------------+---------------------+---------------+--------------------------------------------------+----------------------+----------------------+--------------------+\r\n3 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Zeigen Sie alle Triggers der Datenbank sakila an:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TRIGGERS IN sakila;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="OUTPUT"',children:"+----------------------+--------+----------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+------------------------+----------------------------------------------------------------------------------------------------------------------------------+----------------+----------------------+----------------------+--------------------+\r\n| Trigger              | Event  | Table    | Statement                                                                                                                                                                                                                                                                                                              | Timing | Created                | sql_mode                                                                                                                         | Definer        | character_set_client | collation_connection | Database Collation |\r\n+----------------------+--------+----------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+------------------------+----------------------------------------------------------------------------------------------------------------------------------+----------------+----------------------+----------------------+--------------------+\r\n| customer_create_date | INSERT | customer | SET NEW.create_date = NOW()                                                                                                                                                                                                                                                                                            | BEFORE | 2023-04-19 11:10:12.03 | STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_ENGINE_SUBSTITUTION | root@localhost | utf8mb4              | utf8mb4_0900_ai_ci   | utf8mb4_0900_ai_ci |\r\n| ins_film             | INSERT | film     | BEGIN\r\n    INSERT INTO film_text (film_id, title, description)\r\n        VALUES (new.film_id, new.title, new.description);\r\n  END                                                                                                                                                                                          | AFTER  | 2023-04-19 11:10:07.07 | STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_ENGINE_SUBSTITUTION | root@localhost | utf8mb4              | utf8mb4_0900_ai_ci   | utf8mb4_0900_ai_ci |\r\n| upd_film             | UPDATE | film     | BEGIN\r\n    IF (old.title != new.title) OR (old.description != new.description) OR (old.film_id != new.film_id)\r\n    THEN\r\n        UPDATE film_text\r\n            SET title=new.title,\r\n                description=new.description,\r\n                film_id=new.film_id\r\n        WHERE film_id=old.film_id;\r\n    END IF;\r\n  END | AFTER  | 2023-04-19 11:10:07.10 | STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_ENGINE_SUBSTITUTION | root@localhost | utf8mb4              | utf8mb4_0900_ai_ci   | utf8mb4_0900_ai_ci |\r\n| del_film             | DELETE | film     | BEGIN\r\n    DELETE FROM film_text WHERE film_id = old.film_id;\r\n  END                                                                                                                                                                                                                                                     | AFTER  | 2023-04-19 11:10:07.12 | STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_ENGINE_SUBSTITUTION | root@localhost | utf8mb4              | utf8mb4_0900_ai_ci   | utf8mb4_0900_ai_ci |\r\n| payment_date         | INSERT | payment  | SET NEW.payment_date = NOW()                                                                                                                                                                                                                                                                                           | BEFORE | 2023-04-19 11:10:13.93 | STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_ENGINE_SUBSTITUTION | root@localhost | utf8mb4              | utf8mb4_0900_ai_ci   | utf8mb4_0900_ai_ci |\r\n| rental_date          | INSERT | rental   | SET NEW.rental_date = NOW()                                                                                                                                                                                                                                                                                            | BEFORE | 2023-04-19 11:10:14.97 | STRICT_TRANS_TABLES,STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_ENGINE_SUBSTITUTION | root@localhost | utf8mb4              | utf8mb4_0900_ai_ci   | utf8mb4_0900_ai_ci |\r\n+----------------------+--------+----------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------+------------------------+----------------------------------------------------------------------------------------------------------------------------------+----------------+----------------------+----------------------+--------------------+\r\n6 rows in set (0.04 sec)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Alle Stored Procedures, alle Views und Triggers sind in der Datei ",(0,s.jsx)(n.code,{children:"sakila-data.sql"})," definiert"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"112-sps-views-triggers-importcreate-befehle-dokumentiert",children:"1.1.2 SPs, Views, Triggers Import(Create)-Befehle dokumentiert"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Dokumentieren Sie den Create-Befehl der Stored Procedures ",(0,s.jsx)(n.code,{children:"film_in_stock"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE PROCEDURE film_in_stock;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="OUTPUT"',children:"...\r\nBEGIN\r\n     SELECT inventory_id\r\n     FROM inventory\r\n     WHERE film_id = p_film_id\r\n     AND store_id = p_store_id\r\n     AND inventory_in_stock(inventory_id);\r\n\r\n     SELECT COUNT(*)\r\n     FROM inventory\r\n     WHERE film_id = p_film_id\r\n     AND store_id = p_store_id\r\n     AND inventory_in_stock(inventory_id)\r\n     INTO p_film_count;\r\nEND\r\n...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Diese SP sucht nach der ",(0,s.jsx)(n.code,{children:"inventory_id"}),", wo die Film und Store ID mit der \xfcbergebenen \xfcbereinstimmt, indem sie die Funktion ",(0,s.jsx)(n.code,{children:"inventory_in_stock"})," verwendet, um zu \xfcberpr\xfcfen, ob das Inventar in dem angegebenen Lagerbestand vorhanden ist. Wenn das Inventar gefunden wird, wird die Anzahl der verf\xfcgbaren Einheiten in der Variable ",(0,s.jsx)(n.code,{children:"p_film_count"})," gespeichert."]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Dokumentieren Sie den Create-Befehl der View ",(0,s.jsx)(n.code,{children:"actor_info"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE VIEW actor_info;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="OUTPUT"',children:"...\r\nCREATE ALGORITHM = UNDEFINED DEFINER = `root` @`localhost` SQL SECURITY INVOKER VIEW `actor_info` AS\r\nselect\r\n  `a`.`actor_id` AS `actor_id`,\r\n  `a`.`first_name` AS `first_name`,\r\n  `a`.`last_name` AS `last_name`,\r\n  group_concat(\r\n    distinct concat(\r\n      `c`.`name`,\r\n      ': ',\r\n      (\r\n        select\r\n          group_concat(\r\n            `f`.`title`\r\n            order by\r\n              `f`.`title` ASC separator ', '\r\n          )\r\n        from\r\n          (\r\n            (\r\n              `film` `f`\r\n              join `film_category` `fc` on(\r\n                (`f`.`film_id` = `fc`.`film_id`)\r\n              )\r\n            )\r\n            join `film_actor` `fa` on(\r\n              (`f`.`film_id` = `fa`.`film_id`)\r\n            )\r\n          )\r\n        where\r\n          (\r\n            (\r\n              `fc`.`category_id` = `c`.`category_id`\r\n            )\r\n            and (`fa`.`actor_id` = `a`.`actor_id`)\r\n          )\r\n      )\r\n    )\r\n    order by\r\n      `c`.`name` ASC separator '; '\r\n  ) AS `film_info`\r\nfrom\r\n  (\r\n    (\r\n      (\r\n        `actor` `a`\r\n        left join `film_actor` `fa` on(\r\n          (`a`.`actor_id` = `fa`.`actor_id`)\r\n        )\r\n      )\r\n      left join `film_category` `fc` on(\r\n        (`fa`.`film_id` = `fc`.`film_id`)\r\n      )\r\n    )\r\n    left join `category` `c` on(\r\n      (\r\n        `fc`.`category_id` = `c`.`category_id`\r\n      )\r\n    )\r\n  )\r\ngroup by\r\n  `a`.`actor_id`,\r\n  `a`.`first_name`,\r\n  `a`.`last_name`\r\n...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Diese View kombiniert Informationen \xfcber Schauspieler, Filme und Kategorien, um eine Tabelle zu erstellen, die detaillierte Informationen \xfcber jeden Schauspieler und seine Filme enth\xe4lt. Die Informationen werden in der Spalte ",(0,s.jsx)(n.code,{children:"film_info"})," durch die Funktion ",(0,s.jsx)(n.code,{children:"group_concat"})," kombiniert. Durch das ",(0,s.jsx)(n.code,{children:"group by"})," nach ",(0,s.jsx)(n.code,{children:"actor_id"}),", ",(0,s.jsx)(n.code,{children:"first_name"})," und ",(0,s.jsx)(n.code,{children:"last_name"})," wird sichergestellt, dass jeder Schauspieler in der Tabelle nur einmal aufgef\xfchrt wird. Die View kann wie folgt aufgerufen werden:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM actor_info;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"12-\xfcbungsdokuemntation-chat-applikation",children:"1.2 \xdcbungsdokuemntation Chat-Applikation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Repo von ",(0,s.jsx)(n.a,{href:"https://github.com/psachan190/realtime-chat-application-using-nodejs-expressjs-and-web-socket.git",children:"GitHub"})," herunterladen."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"NPM-Dependencies installieren"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd realtime-chat-application-using-nodejs-expressjs-and-web-socket\r\nnpm install\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Datenbank erstellen"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE chat;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Benutzerinformation in ",(0,s.jsx)(n.code,{children:"database/db.js"})," anpassen"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Applikation per ",(0,s.jsx)(n.code,{children:"node server.js"})," starten"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Ein User welcher \xfcber ",(0,s.jsx)(n.code,{children:"mysql_native_password"})," identifiziert wird ist n\xf6tig!",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://dba.stackexchange.com/questions/209514/what-is-mysql-native-password",children:"Link"})]})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Erstellen Sie zwei Logins in der Datenbank"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO login VALUES ('1','user1','user1');\r\nINSERT INTO login VALUES ('2','user2','user2');\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"http://localhost:3000"})," in ZWEI Browsern \xf6ffnen und mit ",(0,s.jsx)(n.code,{children:"user1"})," und ",(0,s.jsx)(n.code,{children:"user2"})," anmelden"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Chat App Login",src:r(82827).Z+"",width:"2486",height:"1225"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Chat App Messages",src:r(10366).Z+"",width:"2486",height:"1225"})}),"\n",(0,s.jsx)(n.h4,{id:"121-sps-views-anwenden-erstellen-und-aus-der-applikation-verwenden",children:"1.2.1 SPs, Views anwenden (erstellen und aus der Applikation verwenden)"}),"\n",(0,s.jsxs)(n.p,{children:["Aktueller SQL-Code in ",(0,s.jsx)(n.code,{children:"server.js"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'var sql = "SELECT * FROM message ";\r\n...\r\nvar sql = "INSERT INTO message (message , user) VALUES (\'" + data+ "\' , \'"+user+"\')";\r\n...\r\nvar sql = "SELECT * FROM login WHERE username=\'" + username+"\'";\n'})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"F\xfchren Sie f\xfcr die Applikation eine Stored-Procedures und eine View ein."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="Message View erstellen"',children:"CREATE VIEW view_messages AS\r\nSELECT * FROM message;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="Stored Procedure erstellen"',children:"DELIMITER //\r\nCREATE PROCEDURE insertMessage (IN messageParam VARCHAR(2550), IN userParam VARCHAR(250))\r\nBEGIN\r\nINSERT INTO message (message , user) VALUES (messageParam,userParam);\r\nEND;\r\n//\r\nDELIMITER ;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="Login View erstellen"',children:"CREATE VIEW view_logins AS\r\nSELECT * FROM login;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="Message View testen"',children:"SELECT * FROM view_messages;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="OUTPUT"',children:"+----+----------------------+-------+\r\n| id | message              | user  |\r\n+----+----------------------+-------+\r\n|  1 | Hallo, ich bin User1 | user1 |\r\n|  2 | Hallo, ich bin User2 | user2 |\r\n+----+----------------------+-------+\r\n2 rows in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="Stored Procedure testen"',children:'CALL insertMessage("TEST","user1");\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Die Message sollte nach einem Reload im Browser angezeigt werden."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="Login View testen"',children:"SELECT * FROM view_logins;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",metastring:'title="OUTPUT"',children:"+----+----------+----------+\r\n| id | username | password |\r\n+----+----------+----------+\r\n|  1 | user1    | user1    |\r\n|  2 | user2    | user2    |\r\n+----+----------+----------+\r\n2 rows in set (0.00 sec)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Passen Sie die Applikation entsprechend an und testen Sie sie aus"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'var sql = "SELECT * FROM view_messages ";\r\n...\r\nvar sql = "CALL insertMessage(\'" + data+ "\',\'"+user+"\')";\r\n...\r\nvar sql = "SELECT * FROM view_logins WHERE username=\'" + username+"\'";\n'})}),"\n",(0,s.jsx)(n.p,{children:"Nachdem neustarten der Applikation, sollte immer noch alles funktionieren."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Chat App mit SP und Views",src:r(75291).Z+"",width:"2486",height:"1225"})})]})}function _(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},82827:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/chat_app_login-de9d174ea24b19385159bcb569641121.png"},10366:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/chat_app_messages-3afd15f6916c047d99f10f5a129daef2.png"},75291:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/chat_app_mit_sp_view-7a90c15e1ad45a52bf69a3f6449cba8b.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var s=r(67294);const i={},a=s.createContext(i);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);