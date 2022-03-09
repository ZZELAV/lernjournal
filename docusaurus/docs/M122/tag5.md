# Tag 5

**Listen Sie alle Aliase auf, die sich auf Cmdlets auswirken, die als Substantiv ItemProperty aufweisen.**  
```powershell
get-alias -definition "*-itemproperty"
```

**Definieren Sie einen alias ip auf das Programm ipconfig.exe und zwar derart, dass nach Neustart von Windows PowerShell dieser alias weiterhin zur Verfügung steht.**  
```powershell
echo "new-alias ip ipconfig.exe" >> $Home\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
```

**Beim Starten der Windows PowerShell-Konsole soll immer die aktuelle Version von PowerShell ausgegeben werden!**  
```powershell
echo "get-host | select version" >> $Home\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
```

**Fehlermeldungen sollen immer in gelber, statt roter Schrift ausgegeben werden ($host.PrivateData)!**  
```powershell
$host.privatedata.errorforegroundcolor = 'yellow'
```

**Die Laufwerksbezeichnung "MyDocs" soll auf den Dokumentordner des aktuellen Benutzers zeigen!**  
```powershell
new-psdrive -name MyDocs -psprovider filesystem -root "$home\Documents"
```