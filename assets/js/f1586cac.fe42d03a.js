"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6319],{85660:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=r(85893),a=r(11151);const i={title:"Tag 9",tags:["M122","Tag 9","Powershell","Kontrollstrukturen"]},s="Tag 9: Kontrollstrukturen",l={id:"M122/tag-0009",title:"Tag 9",description:"1 Kontrollstrukturen",source:"@site/docs/M122/tag-0009.md",sourceDirName:"M122",slug:"/M122/tag-0009",permalink:"/docs/M122/tag-0009",draft:!1,unlisted:!1,tags:[{label:"M122",permalink:"/docs/tags/m-122"},{label:"Tag 9",permalink:"/docs/tags/tag-9"},{label:"Powershell",permalink:"/docs/tags/powershell"},{label:"Kontrollstrukturen",permalink:"/docs/tags/kontrollstrukturen"}],version:"current",frontMatter:{title:"Tag 9",tags:["M122","Tag 9","Powershell","Kontrollstrukturen"]},sidebar:"tutorialSidebar",previous:{title:"Tag 8",permalink:"/docs/M122/tag-0008"},next:{title:"Tag 10",permalink:"/docs/M122/tag-0010"}},o={},u=[{value:"1 Kontrollstrukturen",id:"1-kontrollstrukturen",level:2},{value:"1.1 For Each Schleife",id:"11-for-each-schleife",level:3},{value:"1.2 If Else Bedingung",id:"12-if-else-bedingung",level:3},{value:"1.3 Switch Bedingung",id:"13-switch-bedingung",level:3},{value:"2 Aufgabe Parameter und Verz\xf6gerung",id:"2-aufgabe-parameter-und-verz\xf6gerung",level:2},{value:"2.1 Einf\xfchraufgabe",id:"21-einf\xfchraufgabe",level:3},{value:"2.2 Aufgabe 1",id:"22-aufgabe-1",level:3},{value:"2.3 Aufgabe 2",id:"23-aufgabe-2",level:3},{value:"2.4 Aufgabe 3",id:"24-aufgabe-3",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tag-9-kontrollstrukturen",children:"Tag 9: Kontrollstrukturen"}),"\n",(0,t.jsx)(n.h2,{id:"1-kontrollstrukturen",children:"1 Kontrollstrukturen"}),"\n",(0,t.jsx)(n.h3,{id:"11-for-each-schleife",children:"1.1 For Each Schleife"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'$processlist = Get-Service\nforeach ($process in $processlist) {\n    Write-Host $process.name " "\n    $process.status\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"12-if-else-bedingung",children:"1.2 If Else Bedingung"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'[int]$a = Read-Host "Geben Sie eine Zahl ein:"\nif ($a -ge 0) {\n    Write-Host "$a ist positiv"\n}\nelse {\n    Write-Host "$a ist negativ" -Foregroundcolor Red\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"13-switch-bedingung",children:"1.3 Switch Bedingung"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'[int]$a = Read-Host "Geben Sie eine Zahl\nzwischen von 1 bis 10 ein:"\nswitch ($a) {\n    1 { Write-Host "Eins" }\n    2 { Write-Host "Zwei" }\n    3 { Write-Host "Drei" }\n    4 { Write-Host "Vier" }\n    5 { Write-Host "F\xfcnf" }\n    6 { Write-Host "Sechs" }\n    7 { Write-Host "Sieben" }\n    8 { Write-Host "Acht" }\n    9 { Write-Host "Neun" }\n    10 { Write-Host "Zehn" }\n    default {\n        Write-Host "Ung\xfcltige Zahl"\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"2-aufgabe-parameter-und-verz\xf6gerung",children:"2 Aufgabe Parameter und Verz\xf6gerung"}),"\n",(0,t.jsx)(n.h3,{id:"21-einf\xfchraufgabe",children:"2.1 Einf\xfchraufgabe"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"param (\n    # Parameter help description\n    [Parameter(Mandatory = $true)]\n    [int]\n    $num,\n    # Parameter help description\n    [Parameter(Mandatory = $true)]\n    [int]\n    $delay\n)\n\nfor ($i = 0; $i -le $num; $i++) {\n    Start-Sleep -Milliseconds $delay\n    Write-Host $i\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"22-aufgabe-1",children:"2.2 Aufgabe 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"# Author: Valentino Panico\n# Datum: 25.04.2022\n# Version: 1.0\n# Funktionsbeschreibung: Ordner mit Namen von Lernenden erstellen\n# Parameter: [1] CSV File mit Namen der Lernenden | [2] Pfad f\xfcr Ordererstellung\n# ---\n\n# parameter definieren\nparam (\n    # csv file mit namen der lernenden\n    [Parameter(Mandatory=$true)]\n    [string]\n    $lernende,\n    # pfad f\xfcr ordner erstellung\n    [Parameter(Mandatory=$true)]\n    [string]\n    $ordner\n)\n\n# ordner l\xf6schen falls existiert\nif (Test-Path $ordner -PathType leaf)\n{\n    Remove-Item $ordner\n}\n\n# csv import\n$csvImport = Import-Csv $lernende -Delimiter \";\"\n$csvImport | ForEach-Object {\n\n    # name einlesen und Sonderzeichen ersetzen\n    $name = ($_.Name -ireplace '\xe4', 'ae' -ireplace '\xf6', 'oe' -ireplace '\xfc', 'ue' -ireplace '\xe9', 'e')\n\n    # Vorname einlesen und Sonderzeichen ersetzen\n    $vorname = ($_.Vorname -ireplace '\xe4', 'ae' -ireplace '\xf6', 'oe' -ireplace '\xfc', 'ue' -ireplace '\xe9', 'e')\n\n    # vorname unterteilen und nur ersten nutzen\n    $splitUpVorname = $vorname -split \"\\s\"\n    $vorname = $splitUpVorname[0]\n\n    # vorname und nachname zusammensetzen\n    $fullName = $vorname + \".\" + $name\n\n    # ordner erstellen\n    New-Item -ItemType Directory -Path $ordner -name \"$fullName\"\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"23-aufgabe-2",children:"2.3 Aufgabe 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'# Author: Valentino Panico\n# Datum: 25.04.2022\n# Version: 1.0\n# Funktionsbeschreibung: Abfrage von Schweizer Ortschaften\n# Parameter: [1] CSV mit Orten\n# ---\n\n# parameter definieren\nparam (\n    # pfad zum csv\n    [Parameter(Mandatory = $true)]\n    [string]\n    $ort\n)\n\nWrite-Host "Willkommen zur Schweizer Ortsabfrage."\n\n$hashtableOrtKanton = @{}\n\n# csv daten importieren und in hashtable einsetzen\n$csvImport = Import-Csv $ort -Delimiter ";"\n$csvImport | ForEach-Object {\n    # ort einlesen\n    $ort = $_.ORTNAME\n\n    # kanton und plz einlesen\n    $kanton = $_.KT + " " + $_.PLZ\n\n    # \xfcberpr\xfcfen ob key in hashtable existiert,\n    # wenn ja -> value hinzuf\xfcgen zu key,\n    # wenn nein, key erstellen und value zuordnen\n    if ($hashtableOrtKanton.ContainsKey($ort)) {\n        $hashtableOrtKanton[$ort] += ", " + $kanton\n    }\n    else {\n        $hashtableOrtKanton[$ort] = $kanton\n    }\n}\n\n# solange eingabe nicht exit\nwhile ($inputOrt -ne "exit") {\n    # eingabe einlesen und in variable speichern\n    $inputOrt = Read-Host "Geben Sie einen Ort ein"\n\n    # wenn eingabe exit ist, programm beenden\n    if ($inputOrt -eq "exit") {\n        exit\n    }\n\n    # \xfcberpr\xfcfen ob key in hashtable existiert,\n    # wenn ja -> value ausgeben,\n    # wenn nein -> fehlermeldung ausgeben\n    if ($hashtableOrtKanton.ContainsKey($inputOrt)) {\n        $hashtableOrtKanton.$inputOrt\n    }\n    else {\n        Write-Host "Ort existiert nicht!"\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"24-aufgabe-3",children:"2.4 Aufgabe 3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'# Author: Valentino Panico\n# Datum: 25.04.2022\n# Version: 1.0\n# Funktionsbeschreibung: Alle Exe Dateien in einem Verzeichnis ausgeben, mit Version und Gr\xf6sse\n# Parameter: [1] Pfad der Exe Dateien\n# ---\n\n# parameter definieren\nparam (\n    # pfad der exe dateien\n    [Parameter(Mandatory = $true)]\n    [string]\n    $path\n)\n\nGet-ChildItem $path *.exe | Select-Object Name, @{N="Groesse in Bytes";E={$_.Length}}, @{N="Version";E={$_.VersionInfo.ProductVersion}}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(67294);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);