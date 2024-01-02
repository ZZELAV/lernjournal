---
title: "Auftrag 3"
tags:
  - M182
  - Auftrag 3
  - Systemsicherheit implementieren
  - LB2
  - Sysmon
---

# Beschreibung und Recherche der Software Sysmon (15%)

[Auftrag](/data/m182/lb2/auftrag03.pdf)

## 1 Recherche - Sysmon

### 1.1 Was ist Sysmon? Wofür wird es verwendet

Sysmon (SYStemMONitor) ist ein Dienst von Windows, der zum Überwachen und Protokollieren von Systemaktivitäten im Ereignisprotokoll genutzt wird. Er wird für das Erkennen und Verstehen von schädlichen und anormalen Aktivitäten genutzt. Somit kann nachvollziehen werden wie Angreifer und Schadsoftware sich im Netzwerk bewegen.

Hier gibt es eine [Übersicht über die Sysmon-Funktionen](https://learn.microsoft.com/de-de/sysinternals/downloads/sysmon#overview-of-sysmon-capabilities)

### 1.2 Was ist die aktuellste Version von Sysmon?

Die aktuellste Version ist die 15.1 (Stand 09.11.2023).  
Die Versionen/Changelogs können auf der [Blog-Seite von Sysinternals](https://learn.microsoft.com/de-de/sysinternals/#whats-new-november-9-2023) gefunden werden

### 1.3 Was sind Beispiel-Anwendungen/Use-Cases bei welchen Sysmon helfen kann?

**Erkennung von Malware und APTs**: Mit Sysmon können detallierte Informationen über die Prozesserstellung, Netzwerkverbindungen und Dateizugriffe gesammelt werden. Somit kann verdächtiges Verhalten erkennt werden und potenzielle Bedrohungen verhindert werden.

**Forensische Untersuchungen**: Nach einem Sicherheitsvorfall kann mit Sysmon der Angriff rekonstruiert werden und somit identifiziert werden, welche Komponente vom Angriff Opfer wurde.

**Netzwerkaktivitäten überwachen**: Es können auch eigehende und ausgehende Verbindungen überwacht werden, was bei der Erkennung von Datenexfiltrationen und Kommunikation mit verdächtigen IPs helfen kann.

**Anomaler Aktivitäten erkennen**: Sysmon kann bei der Identifizierung von Anomalien und nicht normale Betriebsmustern helfen.

## 2 Installation - Sysmon

### 2.1 Recherchieren und dokumentieren Sie wie man Sysmon manuell auf einem Windows-Server/Client installieren würde

Sysmon kann von der [Sysinternals-Seite](https://live.sysinternals.com/) heruntergeladen werden. Die heruntergeladene `Sysmon.exe`/`Sysom364.exe` kann direkt ausgeführt werden und somit die Installation durchgeführt werden.

### 2.2 Recherchieren und dokumentieren Sie wie Sysmon auf Ihren Systemen (automatisiert) installiert wurde

Auf unserer VM wurde der Sysmon-Dienst per Powershell Skript bei der automatisierten VM-Erstellung mit Vagrant erstellt.

[2.3 Liste aller Scripts für die Windows-Images die bei einer Installation ausgeführt werden](./auftrag-0001.md#23-liste-aller-scripts-für-die-windows-images-die-bei-einer-installation-ausgeführt-werden)

## 3 Konfiguration - Sysmon

### 3.1 Lesen Sie bitte die folgenden Blog-Posts durch:

[Teil 1](https://medium.com/@olafhartong/endpoint-detection-superpowers-on-the-cheap-part-1-e9c28201ac47)  
[Teil 2](https://medium.com/@olafhartong/endpoint-detection-superpowers-on-the-cheap-part-2-deploy-and-maintain-d06580329fe8)  
[Teil 3](https://medium.com/@olafhartong/endpoint-detection-superpowers-on-the-cheap-part-3-sysmon-tampering-49c2dc9bf6d9)

### 3.2 Dokumentieren Sie das Config-File welches auf Ihrem System für Sysmon installiert ist

[Sysmon Config-File](/appendix/m182/sysmon_config)

### 3.3 Dokumentieren Sie die Struktur des Config-Files

Das Config-File ist ein XML, welches Regeln festlegt, welcher Prozess wie überwacht werden soll.

---

Quellen

[Sysmon - Microsoft Learn](https://learn.microsoft.com/de-de/sysinternals/downloads/sysmon)
