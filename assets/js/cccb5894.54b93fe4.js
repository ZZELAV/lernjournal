"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||s;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={title:"Tag 2",tags:["M122","Tag 2","Powershell","Ausgaben formatieren und umleiten"]},l="Tag 2: Ausgaben formatieren und umleiten",i={unversionedId:"M122/tag-0002",id:"M122/tag-0002",title:"Tag 2",description:"1 Auftrag Ausgaben formatieren und umleiten 1",source:"@site/docs/M122/tag-0002.md",sourceDirName:"M122",slug:"/M122/tag-0002",permalink:"/docs/M122/tag-0002",draft:!1,tags:[{label:"M122",permalink:"/docs/tags/m-122"},{label:"Tag 2",permalink:"/docs/tags/tag-2"},{label:"Powershell",permalink:"/docs/tags/powershell"},{label:"Ausgaben formatieren und umleiten",permalink:"/docs/tags/ausgaben-formatieren-und-umleiten"}],version:"current",frontMatter:{title:"Tag 2",tags:["M122","Tag 2","Powershell","Ausgaben formatieren und umleiten"]},sidebar:"tutorialSidebar",previous:{title:"Tag 1",permalink:"/docs/M122/tag-0001"},next:{title:"Tag 3",permalink:"/docs/M122/tag-0003"}},o={},p=[{value:"1 Auftrag Ausgaben formatieren und umleiten 1",id:"1-auftrag-ausgaben-formatieren-und-umleiten-1",level:2},{value:"2 Auftrag Ausgaben formatieren und umleiten 2",id:"2-auftrag-ausgaben-formatieren-und-umleiten-2",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tag-2-ausgaben-formatieren-und-umleiten"},"Tag 2: Ausgaben formatieren und umleiten"),(0,r.kt)("h2",{id:"1-auftrag-ausgaben-formatieren-und-umleiten-1"},"1 Auftrag Ausgaben formatieren und umleiten 1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Erstellen Sie eine Tabelle als Textdatei alle Dienste. Die Tabelle soll Name und Status anzeigen, nach Status sortiert und gruppiert (Format-Table -GroupBy) sein."),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"get-service | sort-object status | format-table -property name, status | out-file -filepath C:\\Temp\\service.txt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Geben Sie alle Alias (Get-Alias) als HTML-Tabelle aus, die den Namen und die Definition des Alias beinhalten soll."),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"get-alias | convertto-html -property name, definition | out-file C:\\Temp\\alias.html\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'Geben Sie die Anzahl Ereignisse der Ereignisanzeige "Anwendung" vom heuteigen Tag aus! Hinweis: Count-Eigenschaft von Measure-Object!'),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"get-eventlog -logname application -after 14.02.2022 | measure-object | format-table -property count\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Geben Sie Name, Status und Starttyp aller Dienste sortiert und gruppiert nach Status aus!"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"get-service | sort-object status | format-table -property name, status, starttype\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'Exportieren Sie alle Services, welche den Starttyp "Manuell" aufweisen in ein CSV.'),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'get-service | where {$_.starttype -eq "Manual"} | select-object -property name, starttype | export-csv -path "C:\\Temp\\services.csv" -delimiter ";"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Geben Sie alle Computerinformationen (Get-Computerinfo) in der Datei c:/tmp/config.txt aus! Es kann sein, dass ein Grossteil der Eigenschaften keinen Wert aufweisen."),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"get-computerinfo | out-file C:\\Temp\\config.txt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Geben Sie die Computerinformationen, welche mit OS starten in der Datei c:/tmp/OSconfig.txt aus!"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"get-computerinfo -property OS* | out-file C:\\Temp\\OSConfig.txt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Geben Sie Name und Kommandotyp aller PS-Befehle, sortiert nach Name in einer grafischen Tabelle, in einem separaten Fenster aus!"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"get-command | select-object -property commandtype, name | sort-object name | out-gridview\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Geben Sie f\xfcr das Subnetz 192.168.102.0/24 alle IP-Adressen aus! Hinweis: ForEach-Object verwenden!"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"1..254 | foreach-object -process {get-ciminstance -class win32_pingstatus -filter (\"Address='192.168.102.$_'\")} | select-object -property address, responsetime\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Geben Sie die Daten aller Tage (1. Januar bis 31. Dezember) des aktuellen Jahres aus! Hinweis: ForEach-Object verwenden!"),"  "),(0,r.kt)("h2",{id:"2-auftrag-ausgaben-formatieren-und-umleiten-2"},"2 Auftrag Ausgaben formatieren und umleiten 2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Zeigen Sie alle Dienste an, die mit dem Buchstaben s beginnen, aber beendet (stopped) sind."),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'get-service "s*" | where-object {$_.status -eq "stopped"}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sortieren Sie den Verzeichnisinhalt des Windows-Verzeichnisses (nur Dateien) absteigend nach Gr\xf6sse und exportieren das Ergebnis in die CSV-Datei dateien.csv im aktuellen Verzeichnis."),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'get-childitem -path "C:\\Windows" -file | sort-object length -descending | export-csv "dateien.csv" -delimiter ";"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Es liegen drei Dateien vor: prozesse1.csv, prozesse2.csv und prozesse3.csv. Die Dateien wurden mit folgenden Befehlen erstellt:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'-1- Get-Process | Export-Csv -Path .\\prozesse1.csv\n-2- Get-Process | Export-Csv -Path .\\prozesse2.csv \u2013Delimiter ";\u201e\n-3- Get-Process | Export-Csv -Path .\\prozesse3.csv \u2013UseCulture\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"a) Welche Unterschiede weisen die Dateien -1-, -2- und -3- auf?"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Die Datei -1- wird mit Kommas getrennt und die Dateien -2- und -3- sind mit Semikolons getrennt.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"b) Was ist der Unterschied zwischen den Dateien -2- und -3-?"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Bei -2- definieren wir einen sogenannten "Delimiter". Das ist das Zeichen welchen die Werte trennt. Bei -3- wird der vordefinierte "Delimeter" von diesem Cmdlets genutzt: `(get-culture).textinfo.listseparator`. In diesem Fall ist es auch ein Semikolon und daher sieht man keinen Unterschied.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wie viele Dateien mit der Erweiterung .exe (extension) weist Ihr Windows-Verzeichnis auf? Wie gross sind diese Dateien insgesamt und durchschnittlich?"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'get-childitem -path "C:\\Windows\\*.exe" | measure-object -property length -sum -average | format-list -property count, average, sum\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"a) Rufen Sie \u2013 mit Mitteln, die in diesem Kapitel besprochen wurden \u2013 zehnmal die Anwendung notepad.exe auf."),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'1..10 | foreach-object -process {start-process -filepath "notepad"}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"b) Lassen Sie sich die zehn laufenden Prozesse anzeigen und beenden sie dann."),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"get-process notepad | stop-process\n")))}c.isMDXComponent=!0}}]);