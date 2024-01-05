---
title: "Auftrag 4"
tags:
  - M182
  - Auftrag 4
  - Systemsicherheit implementieren
  - LB2
  - OSQuery
---

# Beschreibung der Software OSQuery (10%)

[Auftrag](/data/m182/lb2/auftrag04.pdf)

## 1 Recherche - OSQuery

### 1.1 Was ist OSQuery? Wofür wird es verwendet

OSQuery ist ein Open-Source-Tool, welches zur Abfrage und Überwachung von Betriebssystemen verwendet wird. Es sammelt verschiedene Daten über das Betriebssystem und verwandelt diese in eine SQL-ähnliche Datenbank. Mit diesem Tool können Administratoren detaillierte Informationen über die Systeme sammeln. Zu diesen Informationen gehören: installierte Software, laufende Prozesse, Netzwerkverbindungen und Hardware-Events.

Es wird häufig für die Sicherheits-Compliance, Fehlerbehebung und forensische Untersuchen verwendet. OSQuery ist sehr nützlich, da es eine einheitliche Schnittstelle für alle Betriebssysteme wie Windows, Linux und macOS hat. Somit können verschiedene Betriebssystemdaten zusammen geführt werden.

### 1.2 Was ist die aktuellste Version von OSQuery?

[5.10.2](https://www.osquery.io/downloads/official/5.10.2)

### 1.3 Was sind Beispiel-Anwendungen/Use-Cases bei welchen OSQuery helfen kann?

OSQuery kann für die folgenden Use-Cases genutzt werden:

**Sicherheitsüberwachung**: Erkennung von verdächtigen Aktivitäten, wie ungewöhnliche Prozesse, geöffnete Ports oder Änderungen an Systemdateien.

**Compliance-Überwachung**: Überprüfung der Einhaltung von Sicherheitsrichtlinien, wie die Installation von erforderlichen Sicherheitsupdates.

**Inventarisierung**: Sammeln von wichtigen Daten für die Inventarisierung wie installierte Software.

**Fehlerbehebung**: Identifizierung von Ursachen der Fehler.

**Forensische Untersuchung**: Sammeln von Informationen nach einen Sicherheitsvorfall.

## 2 Konfiguration / Testing - OSQuery

### 2.1 Dokumentieren Sie das Config-File welches auf Ihrem System für OSQuery installiert ist

Das Config-File enthält verschiedene Einstellungen, wie geplante Abfragen, Protokollierungseinstellungen und Verbindungsinformationen.

### 2.2 Dokumentieren Sie die Struktur des Config-Files

Das Config-File von OSQuery ist in JSON geschrieben.

### 2.3 Führen Sie einen ersten Test mittels OSquery durch und dokumentieren Sie das Resultat

Nachdem eine Query ausgeführt wurde, erhählt man gute Übersicht über das Ergebnis zurück.

---

Quellen:

[OSQuery](https://www.osquery.io/)
