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

#### 1.2.3 Zugriffe auf die Applikationen ("Wie greife ich auf die verschiedenen Softwaren zu?")

### 1.3 Beschreibung der ELK-VM

#### 1.3.1 Login

#### 1.3.2 Installierte Dienste ("Welche Software wurde auf der VM installiert?")

#### 1.3.3 Zugriffe auf die Applikationen ("Wie greife ich auf die verschiedenen Softwaren zu?")

## 2 Infrastruktur-Setup

### 2.1 Sinn und Zweck des Vagrantfile

### 2.2 Sinn und Zweck Provisioning-Befehle

### 2.3 Liste aller Scripts für die Windows-Images die bei einer Installation ausgeführt werden

### 2.4 Beschreibung des bootstrap.sh-Files für das Aufsetzen der Logger-VM

### 2.5 Beschreibung des ELK.sh-Files für das Aufsetzen der Logger-VM
