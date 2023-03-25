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
