---
title: "Auftrag 6"
tags:
  - M182
  - Auftrag 6
  - Systemsicherheit implementieren
  - LB2
  - Security Dashboards
---

# Security Dashboards ELK (15%)

[Auftrag](/data/m182/lb2/auftrag06.pdf)

## 1 Recherche - Security Dashboards/Rules

### 1.1 Beschreiben Sie wie die Security Rules allgemein aufgebaut sind (mit Printscreens)

**Auslöser (Triggers)**: Definiert spezifische Muster oder Ereignisse in den Protokolldaten, wie z.B. bestimmte Ereignis-IDs, Fehlertypen oder ungewöhnliche Aktivitäten, die eine Überprüfung auslösen.

**Bedingungen (Conditions)**: Schränkt die Auslösekriterien weiter ein, indem zusätzliche Parameter oder Schwellenwerte festgelegt werden, wie z.B. die Häufigkeit des Auftretens eines Ereignisses oder die Herkunft der Ereignisdaten.

**Aktionen (Actions)**: Bestimmt, welche Massnahmen ergriffen werden sollen, wenn die Regelbedingungen erfüllt sind. Dazu können Benachrichtigungen, das Erstellen von Berichten oder die Integration mit anderen Sicherheitssystemen gehören.

**Risikobewertung (Risk Scoring)**: Einige Regeln können ein Risikobewertungssystem enthalten, das den Schweregrad des ausgelösten Ereignisses bewertet, um Prioritäten für die Reaktion festzulegen.

![Security Dashboard Rule Definition](/data/m182/lb2/security_dashboard_definition.png)

## 2 Testing und Doku

### 2.1 Suchen Sie sich ein Beispiel aus der Liste aus und dokumentieren Sie das Beispiel konkret (mit Printscreens)

Die Regel [Clearing Windows Event Logs](http://192.168.56.105:5601/app/security/rules/id/7e2a3ae5-7d70-11ee-819a-8d76e9abac74) überprüft ob z.B. in der `powershell.exe` der Befehl `Clear-EventLogs` ausgeführt wird. Dies wird alle 5 Minuten überprüft. Wurde ein Event-Log gelöscht, generiert er einen Alert.

![Security Dashboard Rule Definition](/data/m182/lb2/security_dashboard_definition.png)

### 2.2 Versuchen (und dokumentieren Sie den Versuch!) einen Alert für Ihre Rule zu generieren (mit Printscreens)

Sobald ich den Befehl `Clear-EventLogs` in der `powershell.exe` ausführe, erhalte ich einen Alert.

![Security Dashboard Trigger Rule](/data/m182/lb2/security_dashboard_trigger_rule.png)
