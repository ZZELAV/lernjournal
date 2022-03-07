# Tag 4

## 1 Übungen Drives (Laufwerke)

**Geben Sie alle Umgebungsvariablen aus!**  
get-childitem env:path

**Geben Sie den Inhalt der Umgebungsvariablen Path aus! Hinweis: Zugriff erfolgt über $env!**  
$env:path

**Erstellen Sie das Verzeichnis c:\temp (New-Item)**    
new-item -path "c:\temp" -itemtype "directory"

**Erweitern Sie die Umgebungsvariable Path um den Pfad c:\temp**  
$env:path += ";c:\temp"

**Erstellen Sie im Verzeichnis c:\temp die Datei test.txt**  
new-item -path "c:\temp\\" -name "test.txt" -itemtype "file"

**Schreiben Sie den Text "Das ist ein Test" in die Datei c:\temp\test.txt**  
add-content "c:\temp\test.txt" "Das ist ein Test"

**Erweitern Sie die Datei c:\temp\test.txt mit der Zeichenkette "Das ist noch ein Test"**  
add-content "c:\temp\test.txt" "Das ist noch ein Test"

**Löschen Sie die Datei test.txt**  
remove-item "C:\temp\test.txt"

**Welchen Wert hat der Registrierungseintrag "DisableAntiSpyware" der Antivirussoftware "Windows Defender"?**  
get-itemproperty -path "HKLM:\SOFTWARE\Microsoft\Windows Defender" -name "DisableAntiSpyware"

**Geben Sie nur den Wert des Registrierungseintrags "DisableAntiVirus" aus!**  
get-itemproperty -path "HKLM:\SOFTWARE\Microsoft\Windows Defender" -name "DisableAntiVirus" | fl DisableAntiVirus

**Erstellen Sie in der Windows-Registrierung einen Eintrag, dass beim Start des Computers automatisch der Taschenrechner (calc.exe) gestartet wird!**  
new-itemproperty -path HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Run\ -name "AutostartCalc" -value "C:\Windows\System32\calc.exe"

## 2 Übungen Datenspeicher in der PowerShell

**Lassen Sie sich alle PowerShell-Laufwerke des Dateisystems anzeigen.**  
get-psdrive

**Legen Sie (mit der PowerShell) ein Verzeichnis C:\Testdaten an.**  
new-item -path "c:\\" -name Testdaten -itemtype "directory"

**a) Erstellen Sie ein neues PowerShell-Laufwerk mit Namen Testdaten und dem gerade erstellten Verzeichnis als Stammverzeichnis.**  
new-psdrive -name Testdaten -psprovider filesystem -root "c:\Testdaten"

**b) Wechseln Sie in das neue PowerShell-Laufwerk.**  
set-location -path "c:\Testdaten"

**Erstellen Sie im Stammverzeichnis des Laufwerks Testdaten: zwei Dateien:**  

**a) eine neue, leere Textdatei mit Namen notiz.txt**  
new-item -name "notiz.txt" -itemtype "file"

**b) eine Datei prozesse.txt, die als Inhalt den Namen und die ID der aktuellen Prozesse Ihres Rechners erhält, deren Name mit s oder w beginnt.**  
get-process | select -property name, id | where {$\_.name -match "^s.\*" -or $_.name -match "^w.*"}

**Schreiben Sie in die Datei notiz.txt**  

**a) aktuelle Datumsinformationen sowie**  
add-content -path .\notiz.txt -value (get-date)

**b) die Liste der Dateinamen im Laufwerk Testdaten:.**  
add-content .\notiz.txt -value (get-childitem)

**Versehen Sie die Datei prozesse.txt mit einem Schreibschutz.**  
set-itemproperty .\prozesse.txt -name isreadonly -value $true

**Löschen Sie den Inhalt der Datei prozesse.txt.**  
clear-content .\prozesse.txt -force

**Löschen Sie das virtuelle PowerShell-Laufwerk Testdaten: aus der Liste der PowerShell-Laufwerke.**  
remove-psdrive Testdaten -force