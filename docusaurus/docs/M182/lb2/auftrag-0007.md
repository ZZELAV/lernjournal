---
title: "Auftrag 7"
tags:
  - M182
  - Auftrag 7
  - Systemsicherheit implementieren
  - LB2
  - Fleet Osquery
---

# Fleet Osquery Testing (15%)

[Auftrag](/data/m182/lb2/auftrag07.pdf)

## 1 Recherche - Fleet

### 1.1 Was ist Fleet? Wofür wird es verwendet

Fleet ist ein Open-Source-Tool zur Verwaltung und Überwachung von Osquery-Endpunkten. Es bietet eine benutzerfreundliche, webbasierte Schnittstelle, um Queries auf mehreren Osquery-Endpunkten auszuführen und zu verwalten. Mit Fleet können Administratoren Echtzeit-Daten über ihre Infrastruktur sammeln, was für Sicherheitsüberwachung, Compliance-Überprüfung und Systemdiagnosen nützlich ist.

### 1.2 Was ist die aktuellste Version von Fleet?

[4.42.0](https://fleetdm.com/releases)

### 1.3 Was sind Beispiel-Anwendungen/Use-Cases bei welchen Fleet helfen kann?

**IT-Management und -Überwachung**: Verwaltung und Überwachung von IT-Infrastrukturen, wie Servern, Containern und Endgeräten.

**Sicherheitsüberwachung**: Erkennung von Sicherheitsbedrohungen und ungewöhnlichen Aktivitäten in Echtzeit.

**Compliance-Überprüfung**: Überprüfung der Einhaltung von Compliance-Richtlinien und -Vorschriften.

**Netzwerküberwachung**: Beobachtung von Netzwerkaktivitäten und Identifizierung potenzieller Sicherheitsrisiken.

## 2 Dokumentation / Testing (1)

> Über https://192.168.56.105:8412/queries/manage sind bereits einige Querys vordefiniert

### 2.1 Suchen Sie sich eine Query aus die für Ihre Windows-Umgebung sinnvoll erscheint

Ich habe als Query die `drivers` gewählt.

### 2.2 Beschreiben Sie die Query ausführlich (Sinn / Zweck / Umsetzung der Abfrage)

Diese Query gibt eine Liste aller installierten Treiber zurück, um gegebenfalls fehlende Treiber zu identifizieren.

### 2.3 Testen Sie die Abfrage und dokumentieren Sie die Resultate (mit Printscreens)

[Fleet Query 1 - Drivers PDF](/data/m182/lb2/Fleet_Query1.pdf)

[Fleet Query 1 - Drivers CSV](/data/m182/lb2/Fleet_Query1.csv)

## 3 Dokumentation / Testing (2)

> Über https://192.168.56.105:8412/queries/manage sind bereits einige Querys vordefiniert

### 3.1 Suchen Sie sich eine Query aus die für Ihre Windows-Umgebung sinnvoll erscheint

Ich habe als Query die `etc_hosts` gewählt.

### 3.2 Beschreiben Sie die Query ausführlich (Sinn / Zweck / Umsetzung der Abfrage)

Diese Query gibt eine Liste aller Einträge in der Datei `C:\Windows\System32\drivers\etc\hosts` zurück. Somit kann eine mögliches `Poisoning` vom der Hostdatei erkannt werden. Mit einem Poisoning ist es Angreifern möglich, eine Weburl auf eine andere IP umzuleiten (lokaler DNS-Dienst).

### 3.3 Testen Sie die Abfrage und dokumentieren Sie die Resultate (mit Printscreens)

[Fleet Query 2 - etc_hosts PDF](/data/m182/lb2/Fleet_Query2.pdf)

[Fleet Query 2 - etc_hosts CSV](/data/m182/lb2/Fleet_Query2.csv)

---

Quellen:

[Fleet](https://fleetdm.com/)
