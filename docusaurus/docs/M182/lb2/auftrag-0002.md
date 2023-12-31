---
title: "Auftrag 2"
tags:
  - M182
  - Auftrag 2
  - Systemsicherheit implementieren
  - LB2
  - WSUS
---

# Installation, Konfiguration und Testing von WSUS (20%)

[Auftrag](/data/m182/lb2/auftrag02.pdf)

## 1 Recherche, allgemein - WSUS

### 1.1 Wofür wird der WSUS-Dienst verwendet

Der Windows Server Update Services (kurz WSUS) ist ein Dienst, welcher auf Windows Server installiert werden kann. Er ermöglicht das Bereitstellen von Microsoft-Produktupdates. WSUS kann verwendet werden, um die Verteilung von Updates auf den Computern im Netzwerk zu verwalten.

### 1.2 Welche Alternativen gibt es für den WSUS-Dienst

Neben dem WSUS gibt es eine Alternative die auch von Microsoft kommt. Dem Microsoft Endpoint Manager (kurz MEM). Der Unterschied zum WSUS-Dienst ist, dass der MEM über Intune ausgerollt wird und somit eine Cloudlösung ist.

Weitere Alternativen sind:

- [Matrix42](https://www.matrix42.com/de/)
- [PDQ Deploy](https://www.pdq.com/solutions/patch-management-software/)

Beide Alternativen sind von Drittanbietern entwickelt und bitten neben dem Patch-Management noch andere Lösungen an, wie die Softwareverteilung. Es gibt bereits viele vorgefertigte Softwarepakete die darüber installiert und aktualisiert werden können. Beide Lösungen bitten auch die Möglichkeit benutzerdefinierte Pakete zu erstellen und auszurollen. Da sie von Drittanbietern angeboten werden, sind sie nicht direkt in Windows integriert und müssen vorkonfiguriert werden. Zusätzlich sind beide Werkzeuge kostenpflichtig.

## 2 Recherche, Powershell Server - WSUS

### 2.1 Welche Powershell-Cmdlets gibt es, um den WSUS-Dienst zu konfigurieren/steuern

| Cmdlet | Beschreibung |
| --- | --- |
| `Get-WSUSServer` | Stellt eine Verbindung mit dem (lokalen) WSUS-Server her und gibt den Namen zurück. |
| `Set-WSUSServerSynchronization` | Konfiguriert die Synchronisationseinstellungen für den WSUS-Server mit Microsoft Update oder einem anderen Upstream Server. |
| `Get-WSUSUpdate` | Ruft Informationen zu Updates vom WSUS-Server ab. |
| `Approve-WSUSUpdate` | Genehmigt Updates für eine bestimmte Computergruppe. |
| `Deny-WSUSUpdate` | Lehnt Updates ab, die nicht installiert werden sollen. |
| `Get-WSUSComputer` | Ruft Informationen über den Computer ab, welcher mit dem WSUS-Server verbunden ist. |
| `Add-WSUSComputer` | Fügt einen Computer mit einer Computergruppe zum WSUS-Server hinzu. |
| `Set-WSUSClassification` | Legt fest, welche Arten von Updates der WSUS-Server synchronisieren soll. (z.B. Sicherheitsupdates, Treiber, etc.) |
| `Set-WSUSProduct` | Legt fest, welche Produkte der WSUS-Server synchronisieren soll. |
| `Get-WSUSProduct` | Ruft Informationen über die die momentan verfügbaren Produkten auf dem WSUS-Server ab. |
| `Invoke-WSUSServerCleanup` | Führt eine Bereinigung des WSUS-Server durch, um nicht benötigte Updates und Computer zu entfernen. |

## 3 Installation Client - WSUS

### 3.1 Dokumenation der Konfiguration um den Update-Prozess mittels GPOs zu steuern

#### 3.1.1 Automatische Updates konfigurieren

Im der Gruppenrichtlinien Management Console (gpmc.msc) auf der Domäne eine neue GPO erstellen.

![WSUS GPO erstellen](/data/m182/lb2/wsus_gpo_erstellen.png)

Die Richtlinie mit dem Namen `WSUS – Automatische Updates und Intranetupdatedienstspeicherort` erstellen.

![WSUS GPO benennen](/data/m182/lb2/wsus_gpo_name.png)

Die Richtlinie per rechte Maustaste bearbeiten um die Einstellungen für die automatischen Updates konfigurieren.

Zum Pfad `Computerkonfiguration\Richtlinien\Administrative Vorlagen\Windows-Komponenten\Windows Update` navigieren und per rechte Maustaste auf `Configure Automatic Updates` die Einstellung bearbeiten.

![WSUS GPO Einstellung bearbeiten](/data/m182/lb2/wsus_gpo_bearbeiten.png)

Die Einstellung aktivieren und unter den Optionen die Option `3 - Auto download and notify for install` auswählen. Anschliessend die Einstellungen per `OK` speichern.

![WSUS GPO Einstellung aktivieren](/data/m182/lb2/wsus_gpo_aktivieren.png)

Die Einstellung `Specify intranet Microsoft update service location` bearbeiten. Aktivieren und den Pfad festlegen.

![WSUS GPO Service Location](/data/m182/lb2/wsus_gpo_service_location.png)

#### 3.1.2 Computergruppe in der WSUS-Konsole erstellen

In der WSUS-Verwaltungskonsole eine neue Computergruppe erstellen.

![WSUS Computergruppe erstellen](/data/m182/lb2/wsus_computergruppe.png)

Als Name `Ring 2 Pilot Business Users` eingeben und anschliessend auf `Hinzufügen` klicken.

#### 3.1.3 Computer zum WSUS-Server zuweisen

Unter `Nicht zugewiesene Computer` den Client finden und der neu erstellten Gruppe hinzufügen.

![WSUS Computer zuweisen](/data/m182/lb2/wsus_computer_zuweisen.png)  
![WSUS Computer zuweisen](/data/m182/lb2/wsus_computer_zuweisen2.png)

### 3.2 Welche Powershell-Cmdlets gibt es, um den WSUS-Client zu konfigurieren/steuern

[2.1 Welche Powershell-Cmdlets gibt es, um den WSUS-Dienst zu konfigurieren/steuern](#21-welche-powershell-cmdlets-gibt-es-um-den-wsus-dienst-zu-konfigurierensteuern)

## 4 Testing und Reporting - WSUS

### 4.1 Testen Sie die Update-Funktionalität

Nachdem der WSUS-Server fertig konfiguriert ist, kann der Update-Prozess getestet werden. Dafür muss auf dem Client nach Updates gesucht werden.

![WSUS Client Updates suchen](/data/m182/lb2/wsus_client_updates_suchen.png)

Anschliessend sollte in der WSUS-Konsole gesehen werden, dass der Client die Updates zieht.

![WSUS Überprüfung in der Konsole](/data/m182/lb2/wsus_konsole_updates.png)

### 4.2 Welche Reports können aus dem WSUS über die GUI erstellt werden

In der WSUS-Konsole können viele verschiedene Reports erstellt werden. Der wohl wichtigste Report ist `Update Status Summary`. Dieser zeigt den kompletten Status für alle Updates an.

---

Quellen:

[WSUS](https://learn.microsoft.com/de-de/windows-server/administration/windows-server-update-services/get-started/windows-server-update-services-wsus)

[Alternativen WSUS](https://www.computerweekly.com/de/feature/Acht-WSUS-Alternativen-fuer-das-Patch-Management)
