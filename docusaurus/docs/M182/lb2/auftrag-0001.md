---
title: "Auftrag 1"
tags:
  - M182
  - Auftrag 1
  - Systemsicherheit implementieren
  - LB2
  - Infrastruktur aufbauen
---

# Infrastruktur aufbauen/verstehen und dokumentieren (10%)

## 1 Infrastruktur-Lab

### 1.1 Netzwerk-Diagramm mit IP-Adressen der VMs

![Netzwerk-Diagramm SVG](/data/m182/lb2/M182_LAB.drawio.svg)  
[Netzwerk-Diagramm als draw.io-Datei](/data/m182/lb2/M182_LAB.drawio)

### 1.2 Beschreibung der beiden Windows-VMs

#### 1.2.1 Login

Die Anmeldung an den zwei Windows-VMs ist automatisiert. Dies wird durch eine Konfiguration in der Windows-Registry ermöglicht.

Die automatische Anmeldung ermöglicht den direkten Zugriff auf das Benutzerkonto ohne manuelle Eingabe von Benutzername und Passwort. In unserem Fall sind sowohl der Benutzername als auch das Passwort auf "vagrant" gesetzt.

Registry-Pfad: "Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon"  
![Autologin Registry](/data/m182/lb2/autologin_regedit.png)

```
AutoAdminLogon      1
DefaultPassword     vagrant
DefaultUserName     vagrant
```

#### 1.2.2 Installierte Dienste ("Welche Software wurde auf der VM installiert?")

Domain Controller:

![Software Domain Controller](/data/m182/lb2/software_dc.png)

Windows 10 Client:

![Software Windows 10 Client](/data/m182/lb2/software_client.png)

#### 1.2.3 Zugriffe auf die Applikationen ("Wie greife ich auf die verschiedenen Softwaren zu?")

Auf beiden Windows VMs kann die Software per integrierte Windows Suche geöffnet werden. Jede Software hat eine GUI.

### 1.3 Beschreibung der ELK-VM

#### 1.3.1 Login

Auf die ELK-VM (Elasticsearch, Logstash, Kibana) wird per SSH zugegriffen.

Um per SSH auf die VM zuzugreifen, muss im Terminal folgender Befehl eingeben werden:

```ssh
ssh vagrant@192.168.56.105
```

Bei der ersten Verbindung muss der Authentifizierungsschlüssel (Fingerprint) akzeptiert werden. Anschliessend muss das Passwort des Benutzers eingegeben werden.

#### 1.3.2 Installierte Dienste ("Welche Software wurde auf der VM installiert?")

Um eine Übersicht über die installierte Software zu erhalten, kann der Befehl `apt list --installed` genutzt werden.

[Output installierte Software](/appendix/M182/apt_installed)

Wichtig für uns sind:

```
elasticsearch/stable,now 7.17.14 amd64 [installed]
kibana/stable,now 7.17.14 amd64 [installed]
filebeat/stable,now 7.17.14 amd64 [installed]
auditbeat/stable,now 7.17.14 amd64 [installed]
elasticsearch-curator/unknown,now 5.8.4 amd64 [installed]
```

#### 1.3.3 Zugriffe auf die Applikationen ("Wie greife ich auf die verschiedenen Softwaren zu?")

Die meisten Softwares können direkt über die Konsole genutzt werden. Es gibt auch Dienste welche gestartet werden können und dann über ein Webinterface genutzt werden.

Zugriff auf ELK-Komponenten:

[http://192.168.56.105:5601](http://192.168.56.105:5601) Kibana - Credentials: `vagrant:vagrant`  
[https://192.168.56.105:8412](https://192.168.56.105:8412) Fleet - Credentials: `vagrant:vagrant`  

## 2 Infrastruktur-Setup

### 2.1 Sinn und Zweck des Vagrantfile

### 2.2 Sinn und Zweck Provisioning-Befehle

### 2.3 Liste aller Scripts für die Windows-Images die bei einer Installation ausgeführt werden

### 2.4 Beschreibung des bootstrap.sh-Files für das Aufsetzen der Logger-VM

### 2.5 Beschreibung des ELK.sh-Files für das Aufsetzen der Logger-VM
