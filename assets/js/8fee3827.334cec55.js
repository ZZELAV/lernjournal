"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[58732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,s[1]=p;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"Tag 4",tags:["M122","Tag 4","Powershell","PSDrive"]},s="Tag 4: PSDrive",p={unversionedId:"M122/tag-0004",id:"M122/tag-0004",title:"Tag 4",description:"1 \xdcbungen Drives (Laufwerke)",source:"@site/docs/M122/tag-0004.md",sourceDirName:"M122",slug:"/M122/tag-0004",permalink:"/docs/M122/tag-0004",draft:!1,tags:[{label:"M122",permalink:"/docs/tags/m-122"},{label:"Tag 4",permalink:"/docs/tags/tag-4"},{label:"Powershell",permalink:"/docs/tags/powershell"},{label:"PSDrive",permalink:"/docs/tags/ps-drive"}],version:"current",frontMatter:{title:"Tag 4",tags:["M122","Tag 4","Powershell","PSDrive"]},sidebar:"tutorialSidebar",previous:{title:"Tag 3",permalink:"/docs/M122/tag-0003"},next:{title:"Tag 5",permalink:"/docs/M122/tag-0005"}},i={},o=[{value:"1 \xdcbungen Drives (Laufwerke)",id:"1-\xfcbungen-drives-laufwerke",level:2},{value:"2 \xdcbungen Datenspeicher in der PowerShell",id:"2-\xfcbungen-datenspeicher-in-der-powershell",level:2}],c={toc:o},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tag-4-psdrive"},"Tag 4: PSDrive"),(0,a.kt)("h2",{id:"1-\xfcbungen-drives-laufwerke"},"1 \xdcbungen Drives (Laufwerke)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Geben Sie alle Umgebungsvariablen aus!"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"get-childitem env:path\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Geben Sie den Inhalt der Umgebungsvariablen Path aus! Hinweis: Zugriff erfolgt \xfcber $env!"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:path\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Erstellen Sie das Verzeichnis c:\\temp (New-Item)"),"    "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'new-item -path "c:\\temp" -itemtype "directory"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Erweitern Sie die Umgebungsvariable Path um den Pfad c:\\temp"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$env:path += ";c:\\temp"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Erstellen Sie im Verzeichnis c:\\temp die Datei test.txt"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'new-item -path "c:\\temp\\" -name "test.txt" -itemtype "file"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'Schreiben Sie den Text "Das ist ein Test" in die Datei c:\\temp\\test.txt'),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'add-content "c:\\temp\\test.txt" "Das ist ein Test"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'Erweitern Sie die Datei c:\\temp\\test.txt mit der Zeichenkette "Das ist noch ein Test"'),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'add-content "c:\\temp\\test.txt" "Das ist noch ein Test"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"L\xf6schen Sie die Datei test.txt"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'remove-item "C:\\temp\\test.txt"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'Welchen Wert hat der Registrierungseintrag "DisableAntiSpyware" der Antivirussoftware "Windows Defender"?'),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'get-itemproperty -path "HKLM:\\SOFTWARE\\Microsoft\\Windows Defender" -name "DisableAntiSpyware"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'Geben Sie nur den Wert des Registrierungseintrags "DisableAntiVirus" aus!'),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'get-itemproperty -path "HKLM:\\SOFTWARE\\Microsoft\\Windows Defender" -name "DisableAntiVirus" | fl DisableAntiVirus\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Erstellen Sie in der Windows-Registrierung einen Eintrag, dass beim Start des Computers automatisch der Taschenrechner (calc.exe) gestartet wird!"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'new-itemproperty -path HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\ -name "AutostartCalc" -value "C:\\Windows\\System32\\calc.exe"\n')),(0,a.kt)("h2",{id:"2-\xfcbungen-datenspeicher-in-der-powershell"},"2 \xdcbungen Datenspeicher in der PowerShell"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Lassen Sie sich alle PowerShell-Laufwerke des Dateisystems anzeigen."),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"get-psdrive\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Legen Sie (mit der PowerShell) ein Verzeichnis C:\\Testdaten an."),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'new-item -path "c:\\" -name Testdaten -itemtype "directory"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"a) Erstellen Sie ein neues PowerShell-Laufwerk mit Namen Testdaten und dem gerade erstellten Verzeichnis als Stammverzeichnis."),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'new-psdrive -name Testdaten -psprovider filesystem -root "c:\\Testdaten"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"b) Wechseln Sie in das neue PowerShell-Laufwerk."),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'set-location -path "c:\\Testdaten"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Erstellen Sie im Stammverzeichnis des Laufwerks Testdaten: zwei Dateien:"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"a) eine neue, leere Textdatei mit Namen notiz.txt"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'new-item -name "notiz.txt" -itemtype "file"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"b) eine Datei prozesse.txt, die als Inhalt den Namen und die ID der aktuellen Prozesse Ihres Rechners erh\xe4lt, deren Name mit s oder w beginnt."),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'get-process | select -property name, id | where {$\\_.name -match "^s.\\*" -or $_.name -match "^w.*"}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Schreiben Sie in die Datei notiz.txt"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"a) aktuelle Datumsinformationen sowie"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"add-content -path .\\notiz.txt -value (get-date)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"b) die Liste der Dateinamen im Laufwerk Testdaten:."),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"add-content .\\notiz.txt -value (get-childitem)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Versehen Sie die Datei prozesse.txt mit einem Schreibschutz."),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"set-itemproperty .\\prozesse.txt -name isreadonly -value $true\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"L\xf6schen Sie den Inhalt der Datei prozesse.txt."),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"clear-content .\\prozesse.txt -force\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"L\xf6schen Sie das virtuelle PowerShell-Laufwerk Testdaten: aus der Liste der PowerShell-Laufwerke."),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"remove-psdrive Testdaten -force\n")))}m.isMDXComponent=!0}}]);