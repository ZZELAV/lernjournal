---
title: "Prüfungsvorbereitung LB1"
tags:
  - M141
  - Prüfungsvorbereitung LB1
  - Datenbanksysteme
---

# Prüfungsvorbereitung LB1

## 1 Recherche Auftrag und Einschätzung von einem "unbekannten" DBMS

DBMS: [Db2](https://www.ibm.com/products/db2)

Db2 ist von IBM entwickelt und ist ein RDBMS. Db2 nutzt ACID und die Konsistenz und Verfügbarkeit des CAP-Theorems. Es ist also ähnlich zu MySQL.

## 2 Durchführung einer Installation

[Tag 2 - Kapitel 2.1.3](/docs/M141/tag-0002#213-prozess-der-installation)

## 3 Anwendung von Storage Engines auf eine Tabelle

Alle anwendbare SE's anzeigen:

```sql
SHOW ENGINES;
```

`MyISAM` auf Tabelle anwenden:

```sql
CREATE TABLE testtable (
  id int
) ENGINE=MyISAM;
```

## 4 Anwendung von Security/Berechtigungen auf eine Umgebung

[Tag 3 - Kapitel 2.1.2](/docs/M141/tag-0003#212-benutzer-und-berechtigungen)

## 5 Transkationsisolation anwenden und konfigurieren

Derzeitige Transkationsisolation anzeigen:

```sql
SHOW VARIABLES LIKE "transaction_isolation";
```

Transkationsisolation global ändern:

```sql
SET PERSIST transaction_isolation='SERIALIZABLE';
```

:::info

Scopes:

- PERSIST (bleibt auch nach Neustart von MySQL)
- GLOBAL (setzt sich nach Neustart von MySQL zurück)
- SESSION (setzt sich nach ausloggen von MySQL zurück)
- ohne scope (nur für eine Transaktion)

Bei `PERSIST` und `GLOBAL` ist ein Ausloggen nötig.

[Alle Transaktionsisolations-Stufen](./pruefungsvorbereitung-lb2.md#3-erklären-sie-was-transaktionen-sind-und-was-anomalien-sind-erklären-sie-in-diesem-zusammenhang-die-einstellungen-zur-perfomancesteigerung)

:::

## 6 Protokollierung langsamer Abfragen aktivieren

[Tag 4 - Kapitel 2.1.2](/docs/M141/tag-0004#212-server-betrieb)

## 7 Umsetzung Referenzielle Integrität

Um die referenzielle Integrität umzusetzen, muss per Foreign Keys auf Primary Keys referenziert werden.

```sql
CREATE TABLE categories(
   cat_id int not null auto_increment primary key,
   cat_name varchar(255) not null,
   cat_description text
) ENGINE=InnoDB;

CREATE TABLE products(
   prd_id int not null auto_increment primary key,
   prd_name varchar(355) not null,
   prd_price decimal,
   cat_id int not null,
   FOREIGN KEY fk_cat(cat_id) REFERENCES categories(cat_id) -- Referenz setzen
        ON UPDATE CASCADE -- was passieren soll wenn die Referenz geupdated wird
        ON DELETE RESTRICT -- was passieren soll wenn die Referenz gelöscht wird
)ENGINE=InnoDB;
```

Hier werden zwei Tabellen erstellt `categories` und `products`. Der FK wird `fk_cat` benannt und verlinkt `cat_id` der beiden Tabellen. `ON UPDATE` definiert was bei einem `UPDATE` passieren soll. `ON DELETE` definiert was bei `DELETE` passieren soll.

Folgende Konfiguration sind möglich:

`RESTRICT` / `NO ACTION`:  
==> Änderung auf referenzierten Tabelle nicht erlaubt

`CASCADE`:  
==> Änderung auf referenzierten Tabelle werden synchronisiert

`SET NULL`:  
==> Bei Änderung auf referenzierten Tabelle, wird der FK's auf der Child-Tabelle auf `NULL` gesetzt

## 8 Indexierungstypen aufgrund Anforderungen umsetzen

[Tag 4 - Kapitel 2.1.4](/docs/M141/tag-0004#214-indexierung)

## 9 Datentypen sinngemäss richtig anwenden

[Tag 4 - Kapitel 2.1.4](/docs/M141/tag-0004#213-datentypen--attribute)

## 10 Auftrag : Import und Export von verschiedenen Datentypen

[Tag 5](/docs/M141/tag-0005)

## 11 Auftrag : Durchführung von Backup/Restore (nicht PITR)

[Tag 5 - Kapitel 2.3](/docs/M141/tag-0005#23-lokales-backup)

## 12 Auftrag : Migration von Daten durchführen

[Tag 5 - Kapitel 2.5](/docs/M141/tag-0005#25-migration-auf-entfernten-server)
