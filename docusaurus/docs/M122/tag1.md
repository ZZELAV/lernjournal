# Tag 1

## 1 Auftrag Cmdlets

- **Was gibt das Cmdlet get-ChildItem aus?**  
Gibt alle Dateien und Ordner im derzeitigem Verzeichnis aus

- **Welcher DOS-Befehl entspricht dem Cmdlet get-ChildItem?**  
dir, ls

- **Wie können Sie rekursiv alle Verzeichnisse und Dateien ausgeben?**  
get-childitem -r, ls -r

- **Welche Cmdlets weisen das Verb use auf?**  
get-command -verb use

- **Geben Sie die Meldungen aus dem Ereignisprotokoll (Typ Application) von heute aus. Hinweis: Heute entspricht "$(get-date).date"**  
Get-EventLog "$(get-date).date"

- **Ermitteln Sie das heutige Datum**  
get-date

- **Geben Sie den aktuellen Jahrestag aus!**  
(get-date).dayofyear

- **Listen Sie die Cmdlets auf, welche mit der Verwaltung von Diensten zu tun haben (Dienst heisst auf Englisch "Service").**  
get-command -noun service

- **Geben Sie die IP-Konfiguration der aktiven Schnittstelle aus (wahrscheinlich LAN-Adapter). Hinweis: Grenzen Sie die Ausgabe mit den vorhandenen Parametern ein!**  
get-netadapter

- **Geben Sie alle Informationen zu den lokalen Disks aus!**  
get-psdrive -psprovider filesystem

- **Geben Sie nur die IPv4-Adresse (192.168.xxx.xxx) der aktiven Schnittstelle aus**  
get-netipaddress -addressfamily IPv4 -interfacealias Ethernet

- **Welche Eigenschaften und Methoden weist der Output des Cmdlets get-hotfix auf?**  
Source, Description, HotFixID, InstalledBy, InstalledOn

- **Geben Sie alle Eigenschaften des letzten Hotfixes (unterster in der Liste) aus!**  
(get-hotfix | sort installedon)[-1]