---
title: "Auftrag 5"
tags:
  - M182
  - Auftrag 5
  - Systemsicherheit implementieren
  - LB2
  - Winlogbeat
---

# Installation Winlogbeat (15%)

[Auftrag](/data/m182/lb2/auftrag05.pdf)

## 1 Recherche - Winlogbeat

### 1.1 Was ist Winlogbeat? Wofür wird es verwendet

Winlogbeat ist Teil der Elastic Beats Plattform. Er wird verwendet, um Windows-Ereignisprotokolle zu erfassen, zu verarbeiten und weiterzuleiten. Diese Daten können dann an einer zentralen Stelle wie Logstash gesendet werden, um dort analysiert und visualisiert zu werden.

### 1.2 Was ist die aktuellste Version von Winlogbeat?

[8.11.3](https://www.elastic.co/downloads/beats/winlogbeat)

## 2 Installation - Winlogbeat

### 2.1 Dokumentation der Installation Winlogbeat (mit Printscreens)

Elastic hat eine [offizielle Anleitung](https://www.elastic.co/guide/en/beats/winlogbeat/master/winlogbeat-installation-configuration.html) zur Installation von Winlogbeat.

#### 2.1.1 Installation Winlogbeat

Nach dem herunterladen der aktuellen Version, muss der Ordner in `C:\Program Files` entzippt werden. Anschliessend sollte der Ordner `winlogbeat-<version>` in `Winlogbeat` umbenannt werden. Danach muss eine Powershell als Administrator ausgeführt werden, in dieser müssen folgende Command ausgeführt werden.

```powershell
cd 'C:\Program Files\Winlogbeat'
.\install-service-winlogbeat.ps1
```

![Winlogbeat Installation](/data/m182/lb2/winlogbeat_install.png)

#### 2.1.2 Verbindung zu Elastic Stack

Als nächstes muss die `winlogbeat.yml` Konfiguration angepasst werden. In dieser müssen die Kibana und Elasticsearch Optionen angepasst werden.

![Kibana Konfiguration](/data/m182/lb2/kibana_config.png)

![Elasticsearch Konfiguration](/data/m182/lb2/elasticsearch_config.png)

#### 2.1.3 Assets einrichten

Nachdem die Konfiguration angepasst wurde, können die Assets eingerichtet werden.

![Winlogbeat Setup](/data/m182/lb2/winlogbeat_setup.png)

#### 2.1.4 Winlogbeat Service starten

Nach dem Setup muss der Service gestartet werden.

![Winlogbeat Service](/data/m182/lb2/winlogbeat_service.png)

#### 2.1.5 Daten in Kibana sehen

Als letztes muss auf das Kibana Dashboard zugegriffen werden. Dieses läuft auf `HOST:5601`. Da sollte unter `winlogbeat-*` verschiedene erfasste Events zu sehen sein.

![Winlogbeat Dashboard](/data/m182/lb2/winlogbeat_dashboard.png)

## 3 Dokumentation / Testing - Winlogbeat

### 3.1 Dokumentieren Sie den Erfolg von Ihrer Installation ("sehen Sie Events von Ihrem Windows Rechner auf ELK"), mit Printscreens

[Siehe Abschnitt 2.1.5](#215-daten-in-kibana-sehen)

---

Quellen:

[Elastic Winlogbeat](https://www.elastic.co/de/beats/winlogbeat)
