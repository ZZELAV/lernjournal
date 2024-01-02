# Sysmon Config

```xml
<?xml version="1.0"?>

<!-- NOTICE : This is a balanced generated output of Sysmon-modular with medium verbosity -->

<!-- due to the balanced nature of this configuration there will be potential blind spots -->

<!-- for more information go to https://github.com/olafhartong/sysmon-modular/wiki -->

<!-- -->

<!-- //** ***// -->

<!-- ///#(** **%(/// -->

<!-- ((&&&** **&&&(( -->

<!-- (&&&** ,(((((((. **&&&( -->

<!-- ((&&**(((((//(((((((/**&&(( _____ __ __ -->

<!-- (&&///((////(((((((///&&( / ___/__ ___________ ___ ____ ____ ____ ___ ____ ____/ /_ __/ /___ ______ -->

<!-- &////(/////(((((/(////& \__ \/ / / / ___/ __ `__ \/ __ \/ __ \______/ __ `__ \/ __ \/ __ / / / / / __ `/ ___/ -->

<!-- ((// /////(///// /((( ___/ / /_/ (__ ) / / / / / /_/ / / / /_____/ / / / / / /_/ / /_/ / /_/ / / /_/ / / -->

<!-- &(((((#.///////// #(((((& /____/\__, /____/_/ /_/ /_/\____/_/ /_/ /_/ /_/ /_/\____/\__,_/\__,_/_/\__,_/_/ -->

<!-- &&&&((#///////((#((&&&& /____/ -->

<!-- &&&&(#/***//(#(&&&& -->

<!-- &&&&****///&&&& by Olaf Hartong -->

<!-- (& ,&. -->

<!-- .*&&*. -->

<!-- -->

-<Sysmon schemaversion="4.90">

<HashAlgorithms>*</HashAlgorithms>

<!-- This now also determines the file names of the files preserved (String) -->


<CheckRevocation>False</CheckRevocation>

<!-- Setting this to true might impact performance -->


<DnsLookup>False</DnsLookup>

<!-- Disables lookup behavior, default is True (Boolean) -->


<ArchiveDirectory>Sysmon</ArchiveDirectory>

<!-- Sets the name of the directory in the C:\ root where preserved files will be saved (String)-->



-<EventFiltering>

<!-- Event ID 1 == Process Creation - Includes -->



-<RuleGroup groupRelation="or">


-<ProcessCreate onmatch="include">

<ParentImage condition="image" name="technique_id=T1546.008,technique_name=Accessibility Features">sethc.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1546.008,technique_name=Accessibility Features">utilman.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1546.008,technique_name=Accessibility Features">osk.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1546.008,technique_name=Accessibility Features">Magnify.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1546.008,technique_name=Accessibility Features">DisplaySwitch.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1546.008,technique_name=Accessibility Features">Narrator.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1546.008,technique_name=Accessibility Features">AtBroker.exe</ParentImage>

<OriginalFileName condition="contains">\</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1546.011,technique_name=Application Shimming">sdbinst.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1197,technique_name=BITS Jobs">bitsadmin.exe</OriginalFileName>


-<Rule groupRelation="and" name="Eventviewer Bypass UAC">

<ParentImage condition="image" name="technique_id=T1548.002,technique_name=Bypass User Access Control">eventvwr.exe</ParentImage>

<Image condition="is not">c:\windows\system32\mmc.exe</Image>

</Rule>

<ParentImage condition="image" name="technique_id=T1548.002,technique_name=Bypass User Access Control">fodhelper.exe</ParentImage>


-<Rule groupRelation="and" name="technique_id=T1021.003,technique_name=Distributed Component Object Model">

<ParentCommandLine condition="contains">-Embedding</ParentCommandLine>

<ParentImage condition="is">c:\windows\system32\mmc.exe</ParentImage>

</Rule>


-<Rule groupRelation="and">

<CommandLine condition="contains">Set-MpPreference</CommandLine>

<CommandLine condition="contains any">-DisableRealTimeMonitoring $true;-DisableBehaviorMonitoring $true;-DisableBlockAtFirstSeen $true;-DisableIOAVProtection $true;-DisablePrivacyMode $true;-SignatureDisableUpdateOnStartupWithoutEngine $true;-DisableArchiveScanning $true;-DisableIntrusionPreventionSystem $true;-DisableScriptScanning $true</CommandLine>

</Rule>

<CommandLine condition="contains" name="technique_id=T1027,technique_name=Obfuscated Files or Information">^</CommandLine>

<CommandLine condition="contains" name="technique_id=T1027,technique_name=Obfuscated Files or Information">../../</CommandLine>

<ParentCommandLine condition="is" name="technique_id=T1204,technique_name=User Execution">C:\Windows\explorer.exe</ParentCommandLine>

<ParentImage condition="is" name="technique_id=T1204,technique_name=User Execution">C:\Windows\explorer.exe</ParentImage>


-<Rule groupRelation="and" name="Fltmc">

<OriginalFileName condition="is" name="technique_id=T1562.006,technique_name=Indicator Blocking">fltMC.exe</OriginalFileName>

<CommandLine condition="contains" name="technique_id=T1562.006,technique_name=Indicator Blocking">unload;detach</CommandLine>

</Rule>


-<Rule groupRelation="or">

<OriginalFileName condition="is" name="technique_id=T1518.001,technique_name=Security Software Discovery">fltMC.exe</OriginalFileName>

<CommandLine condition="contains" name="technique_id=T1518.001,technique_name=Security Software Discovery">misc::mflt</CommandLine>

</Rule>


-<Rule groupRelation="and" name="InstallUtil">

<OriginalFileName condition="is" name="technique_id=T1218.004,technique_name=InstallUtil">InstallUtil.exe</OriginalFileName>

<CommandLine condition="contains all" name="technique_id=T1218.004,technique_name=InstallUtil">/logfile=;/LogToConsole=false;/U</CommandLine>

</Rule>

<OriginalFileName condition="contains" name="technique_id=T1546.008,technique_name=Windows Error Reporting">werfault.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1574.002,technique_name=DLL Side-Loading">odbcconf.exe</OriginalFileName>


-<Rule groupRelation="and" name="technique_id=T1027.004,technique_name=Compile After Delivery">

<ParentImage condition="is">csc.exe</ParentImage>

<CommandLine condition="contains">-target:library</CommandLine>

<CommandLine condition="contains">.cs</CommandLine>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1027.004,technique_name=Compile After Delivery">

<ParentImage condition="is">csc.exe</ParentImage>

<CommandLine condition="contains">-out:</CommandLine>

<CommandLine condition="contains">.cs</CommandLine>

</Rule>

<OriginalFileName condition="is" name="technique_id=T1564.001,technique_name=Hidden Files and Directories">attrib.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1543.003,technique_name=Windows Service">sc.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1569.002,technique_name=Service Execution">dnscmd.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1489,technique_name=Service Stop">taskkill.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1074,technique_name=Data Staged">xcopy.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1074,technique_name=Data Staged">robocopy.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1105,technique_name=Remote File Copy">GfxDownloadWrapper.exe</OriginalFileName>

<CommandLine condition="contains all" name="technique_id=T1105,technique_name=Remote File Copy">update;--download</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1105,technique_name=Remote File Copy">squirrel;--download</CommandLine>

<OriginalFileName condition="is" name="technique_id=T1105,technique_name=Remote File Copy">expand.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1564.001,technique_name=Hidden Files and Directories">attrib.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1543.003,technique_name=Windows Service">sc.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1040,technique_name=Network Sniffing">PktMon.exe</OriginalFileName>


-<Rule groupRelation="and" name="technique_id=T1003,technique_name=Credential Dumping">

<OriginalFileName condition="is">esentutl.exe</OriginalFileName>

<CommandLine condition="contains all">/y;/vss/d</CommandLine>

</Rule>

<OriginalFileName condition="is" name="technique_id=T1003,technique_name=Credential Dumping">TTTracer.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1003,technique_name=Credential Dumping">sqldumper.exe</OriginalFileName>


-<Rule groupRelation="and" name="technique_id=T1003,technique_name=Credential Dumping">

<OriginalFileName condition="is">ntdsutil.exe</OriginalFileName>

<CommandLine condition="contains">ifm</CommandLine>

</Rule>

<ParentImage condition="is" name="technique_id=T1003,technique_name=Credential Dumping">diskshadow.exe</ParentImage>


-<Rule groupRelation="and" name="technique_id=T1003,technique_name=Credential Dumping (Likely)">

<OriginalFileName condition="image">rpcping.exe</OriginalFileName>

<CommandLine condition="contains any">\s;-s</CommandLine>

<CommandLine condition="contains any">-u;\u;-t;\t</CommandLine>

<CommandLine condition="contains any">NTLM;ncacn_np</CommandLine>

</Rule>

<OriginalFileName condition="is" name="technique_id=T1003,technique_name=Credential Dumping">rpcping.exe</OriginalFileName>


-<Rule groupRelation="or" name="Ingress Tool Transfer">

<OriginalFileName condition="is" name="technique_id=T1105,technique_name=Ingress Tool Transfer">expand</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1105,technique_name=Ingress Tool Transfer">IEExec.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1105,technique_name=Ingress Tool Transfer">Print.Exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1105,technique_name=Ingress Tool Transfer">curl.exe</OriginalFileName>

<ParentImage condition="is" name="technique=T1105,technique_name=Ingress Tool Transfer">ftp.exe</ParentImage>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1564.004,technique_name=NTFS File Attributes">

<OriginalFileName condition="is">print.exe</OriginalFileName>

<CommandLine condition="contains">:</CommandLine>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1564.004,technique_name=NTFS File Attributes">

<OriginalFileName condition="is">regedit.exe</OriginalFileName>

<CommandLine condition="contains">:</CommandLine>

</Rule>


-<Rule groupRelation="or" name="NTFS File Attributes">

<OriginalFileName condition="is" name="technique_id=T1564.004,technique_name=NTFS File Attributes">esentutl.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1564.004,technique_name=NTFS File Attributes">extrac32.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="or" name="Scheduled Task/Job">

<OriginalFileName condition="contains any" name="technique_id=T1053.005,technique_name=Scheduled Task/Job">schtasks.exe;sctasks.exe</OriginalFileName>

<OriginalFileName condition="contains any" name="technique=T1053.002,technique_name=At">at.exe;At.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1053,technique_name=Scheduled Task/Job">taskeng.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="or" name="File Permissions Modification">

<OriginalFileName condition="is" name="technique_id=T1222.001,technique_name=File Permissions Modification">takeown.exe</OriginalFileName>

<Image condition="image" name="technique_id=T1222.001,technique_name=File Permissions Modification">forfiles.exe</Image>

<OriginalFileName condition="contains any" name="technique_id=T1222.001,technique_name=File Permissions Modification">icacls.exe;cacls.exe;xcacls.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="or" name="Access Token Manipulation">

<OriginalFileName condition="is" name="technique_id=T1134,technique_name=Access Token Manipulation">runas.exe</OriginalFileName>

<CommandLine condition="contains" name="technique_id=T1134,technique_name=Access Token Manipulation">runas</CommandLine>

</Rule>


-<Rule groupRelation="or" name="Bypass User Access Control">

<OriginalFileName condition="is" name="technique_id=T1548.002,technique_name=Bypass User Access Control">WSReset.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1548.002,technique_name=Bypass User Access Control">xwizard.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1548.002,technique_name=Bypass User Access Control">computerdefaults.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1548.002,technique_name=Bypass User Access Control">dism.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1548.002,technique_name=Bypass User Access Control">fodhelper.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1548.002,technique_name=Bypass User Account Control">computerdefaults.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1548.002,technique_name=Bypass User Account Control">dism.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1548.002,technique_name=Bypass User Account Control">fodhelper.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1490,technique_name=Inhibit System Recovery">

<OriginalFileName condition="contains any">vssadmin.exe;wbadmin.exe</OriginalFileName>

<CommandLine condition="contains">delete</CommandLine>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1490,technique_name=Inhibit System Recovery">

<OriginalFileName condition="is">bcdedit.exe</OriginalFileName>

<CommandLine condition="contains">/set</CommandLine>

</Rule>


-<Rule groupRelation="or" name="Inhibit System Recovery">

<OriginalFileName condition="is" name="technique_id=T1490,technique_name=Inhibit System Recovery">vssadmin.exe</OriginalFileName>

<CommandLine condition="contains all" name="technique_id=T1490,technique_name=Inhibit System Recovery">vssadmin;delete</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1490,technique_name=Inhibit System Recovery">wbadmin;delete</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1490,technique_name=Inhibit System Recovery">bcedit;set</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1490,technique_name=Inhibit System Recovery">wmic;delete</CommandLine>

</Rule>


-<Rule groupRelation="or" name="Windows Management Instrumentation">

<OriginalFileName condition="is" name="technique_id=T1047,technique_name=Windows Management Instrumentation">mofcomp.exe</OriginalFileName>

<Image condition="begin with" name="technique_id=T1047,technique_name=Windows Management Instrumentation">C:\WINDOWS\system32\wbem\scrcons.exe</Image>

<OriginalFileName condition="is" name="technique_id=T1047,technique_name=Windows Management Instrumentation">ScrCons</OriginalFileName>

<ParentImage condition="image" name="technique_id=T1047,technique_name=Windows Management Instrumentation">wmiprvse.exe</ParentImage>

<OriginalFileName condition="is" name="technique_id=T1047,technique_name=Windows Management Instrumentation">wmiprvse.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="or" name="Account Discovery">

<OriginalFileName condition="is" name="technique_id=T1087,technique_name=Account Discovery">klist.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1087,technique_name=Account Discovery">cmdkey.exe</OriginalFileName>

<CommandLine condition="contains any" name="technique_id=T1087.001,technique_name=Local Account">net localgroup;net user;net group</CommandLine>

<CommandLine condition="contains any" name="technique_id=T1087.001,technique_name=Local Account">dir C:\users;ls C:\users;dir C:\Users;ls C:\Users</CommandLine>

<OriginalFileName condition="is" name="technique_id=T1078.002,technique_name=Domain Accounts">djoin.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="or" name="System Owner/User Discovery">

<OriginalFileName condition="contains any" name="technique_id=T1033,technique_name=System Owner/User Discovery">systeminfo.exe;sysinfo.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1033,technique_name=System Owner/User Discovery">whoami.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1033,technique_name=System Owner/User Discovery">quser.exe</OriginalFileName>

<OriginalFileName condition="contains any" name="technique_id=T1033,technique_name=System Owner/User Discovery">nltest.exe;nltestk.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="or" name="System Network Configuration Discovery">

<OriginalFileName condition="is" name="technique_id=T1016,technique_name=System Network Configuration Discovery">ipconfig.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1016,technique_name=System Network Configuration Discovery">nslookup.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1016,technique_name=System Network Configuration Discovery">tracert.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1016,technique_name=System Network Configuration Discovery">route.exe</OriginalFileName>

<OriginalFileName condition="contains any" name="technique_id=T1016,technique_name=System Network Configuration Discovery">nbtstat.exe;nbtinfo.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="or" name="Security Software Discovery">

<OriginalFileName condition="is" name="technique_id=T1518.001,technique_name=Security Software Discovery">netsh.exe</OriginalFileName>

<CommandLine condition="contains" name="technique_id=T1518.001,technique_name=Security Software Discovery">netsh advfirewall</CommandLine>

</Rule>


-<Rule groupRelation="or" name="Remote System Discovery">

<OriginalFileName condition="contains any" name="technique_id=T1018,technique_name=Remote System Discovery">net.exe;net1.exe</OriginalFileName>

<OriginalFileName condition="contains any" name="technique_id=T1018,technique_name=Remote System Discovery">ping.exe</OriginalFileName>

<OriginalFileName condition="contains any" name="technique_id=T1018,technique_name=Remote System Discovery">dsquery.exe</OriginalFileName>

<CommandLine condition="contains any" name="technique_id=T1018,technique_name=Remote System Discovery">net view;net group</CommandLine>

</Rule>


-<Rule groupRelation="or" name="Process Discovery">

<OriginalFileName condition="image" name="technique_id=T1057,technique_name=Process Discovery">tasklist.exe</OriginalFileName>

<OriginalFileName condition="image" name="technique_id=T1057,technique_name=Process Discovery">qprocess.exe</OriginalFileName>

<OriginalFileName condition="image" name="technique_id=T1057,technique_name=Process Discovery">query.exe</OriginalFileName>

<OriginalFileName condition="image" name="technique_id=T1057,technique_name=Process Discovery">qwinsta.exe</OriginalFileName>

<OriginalFileName condition="image" name="technique_id=T1057,technique_name=Process Discovery">rwinsta.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="or" name="File and Directory Discovery">

<OriginalFileName condition="contains any" name="technique_id=T1083,technique_name=File and Directory Discovery">tree.com;findstr.exe;where.exe</OriginalFileName>

<CommandLine condition="contains any" name="technique_id=T1083,technique_name=File and Directory Discovery">ls;dir</CommandLine>

</Rule>


-<Rule groupRelation="or" name="System Network Connections Discovery">

<OriginalFileName condition="is" name="technique_id=T1049,technique_name=System Network Connections Discovery">netstat.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1482,technique_name=Domain Trust Discovery">

<OriginalFileName condition="is">nltestrk.exe</OriginalFileName>

<CommandLine condition="contains">/domain_trusts</CommandLine>

</Rule>


-<Rule groupRelation="or" name="Domain Trust Discovery">

<OriginalFileName condition="is" name="technique_id=T1482,technique_name=Domain Trust Discovery">nltest.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="or" name="Query Registry">

<OriginalFileName condition="is any" name="technique_id=T1012,technique_name=Query Registry">reg.exe;regedit.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1070.001,technique_name=Clear Windows Event Logs">

<OriginalFileName condition="is">wevtutil.exe</OriginalFileName>

<CommandLine condition="contains any">cl;clear-log</CommandLine>

</Rule>


-<Rule groupRelation="or" name="Indicator Removal">

<OriginalFileName condition="is" name="Event Log Access">wevtutil.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1070,technique_name=Indicator Removal">fsutil.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1112,technique_name=Modify Registry">

<OriginalFileName condition="is any">reg.exe;regedit.exe</OriginalFileName>

<CommandLine condition="contains any">/i;.reg</CommandLine>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1112,technique_name=Modify Registry">

<OriginalFileName condition="is any">reg.exe;regedit.exe</OriginalFileName>

<CommandLine condition="contains any">hklm;HKLM;hkey_local_machine</CommandLine>

<CommandLine condition="contains any">\system;\sam;\security</CommandLine>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1202,technique_name=Indirect Command Execution">

<ParentImage condition="is">hh.exe</ParentImage>

<CommandLine condition="contains">.exe</CommandLine>

</Rule>


-<Rule groupRelation="or" name="Indirect Command Execution">

<OriginalFileName condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">pcalua.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">cscript.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">wscript.exe</OriginalFileName>

<ParentImage condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">pcalua.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">cscript.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">wscript.exe</ParentImage>

<OriginalFileName condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">bash.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">certutil.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">winrs.exe</OriginalFileName>

<ParentImage condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">control.exe</ParentImage>

<OriginalFileName condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">desktopimgdownldr.exe</OriginalFileName>

<ParentImage condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">wsl.exe</ParentImage>

</Rule>


-<Rule groupRelation="or" name="System Script Proxy Execution">

<CommandLine condition="contains" name="technique_id=T1216.001,technique_name=PubPrn">pubprn</CommandLine>

<CommandLine condition="contains" name="technique_id=T1216,technique_name=System Script Proxy Execution">slmgr</CommandLine>

<CommandLine condition="contains" name="technique_id=T1216,technique_name=System Script Proxy Execution">manage-bde</CommandLine>

<CommandLine condition="contains" name="technique_id=T1216,technique_name=System Script Proxy Execution">CL_Invocation</CommandLine>

<CommandLine condition="contains" name="technique_id=T1216,technique_name=System Script Proxy Execution">CL_Mutexverifiers</CommandLine>

<CommandLine condition="contains" name="technique_id=T1216,technique_name=System Script Proxy Execution">winrm</CommandLine>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1216,technique_name=System Script Proxy Execution">

<OriginalFileName condition="is">cscript.exe</OriginalFileName>

<CommandLine condition="contains">.js</CommandLine>

</Rule>

<OriginalFileName condition="is" name="technique_id=T1218.001,technique_name=Compiled HTML File">hh.exe</OriginalFileName>

<ParentImage condition="is" name="technique_id=T1218.001,technique_name=Compiled HTML File">hh.exe</ParentImage>

<OriginalFileName condition="is" name="technique_id=T1218.004,technique_name=InstallUtil">installutil.exe</OriginalFileName>

<ParentImage condition="image" name="technique_id=T1218.005,technique_name=Mshta">mshta.exe</ParentImage>

<OriginalFileName condition="is" name="technique_id=T1218.005,technique_name=Mshta">mshta.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218.010,technique_name=Regsvr32">regsvr32.exe</OriginalFileName>

<OriginalFileName condition="contains" name="technique_id=T1218.011,technique_name=rundll32.exe">rundll32.exe</OriginalFileName>


-<Rule groupRelation="or" name="System Binary Proxy Execution">

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">InfDefaultInstall.EXE</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">extexport.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">msconfig.EXE</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">msiexec.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">odbcconf.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">PresentationHost.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">rasdlui.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">RegisterCimProvider2.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">RegisterCimProvider.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">ScriptRunner.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">verclsid.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">wab.exe</OriginalFileName>

<ParentImage condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">wab.exe</ParentImage>

<ParentImage condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">wsreset.exe</ParentImage>

<CommandLine condition="contains" name="technique_id=T1218,technique_name=System Binary Proxy Execution">xwizard RunWizard</CommandLine>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">Appvlp.exe</OriginalFileName>

<CommandLine condition="contains" name="technique_id=T1218,technique_name=System Binary Proxy Execution">bginfo</CommandLine>

<ParentCommandLine condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">bginfo</ParentCommandLine>

<CommandLine condition="contains" name="technique_id=T1218,technique_name=System Binary Proxy Execution">cbd</CommandLine>

<ParentCommandLine condition="contains" name="technique_id=T1218,technique_name=System Binary Proxy Execution">csi.exe</ParentCommandLine>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">csi.exe</OriginalFileName>

<ParentCommandLine condition="contains" name="technique_id=T1218,technique_name=System Binary Proxy Execution">devtoolslauncher.exe LaunchForDeploy</ParentCommandLine>

<ParentImage condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">devtoolslauncher.exe</ParentImage>

<CommandLine condition="contains" name="technique_id=T1218,technique_name=System Binary Proxy Execution">runscripthelper.exe surfacecheck</CommandLine>

<CommandLine condition="contains" name="technique_id=T1218,technique_name=System Binary Proxy Execution">Scriptrunner.exe -appvscript</CommandLine>

<OriginalFileName condition="contains" name="technique_id=T1218,technique_name=System Binary Proxy Execution">Scriptrunner.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">tttracer.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">msdt.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">rasautou.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">Register-cimprovider.exe</OriginalFileName>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">diskshadow.exe</Image>

<CommandLine condition="contains all" name="technique_id=T1218,technique_name=System Binary Proxy Execution">diskshadow.exe;/s</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1218,technique_name=System Binary Proxy Execution">diskshadow.exe;-s</CommandLine>

<OriginalFileName condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">replace.exe</OriginalFileName>

<Image condition="image" name="technique_id=T1218,technique_name=System Binary Proxy Execution">jjs.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=System Binary Proxy Execution">appcmd.exe</Image>

<CommandLine condition="contains" name="technique_id=T1218,technique_name=System Binary Proxy Execution">ieexec.exe http</CommandLine>

</Rule>


-<Rule groupRelation="or" name="Trusted Developer Utilities Proxy Execution">

<CommandLine condition="contains" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">vbc.exe /target:exe</CommandLine>

<OriginalFileName condition="contains" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">vbc.exe</OriginalFileName>

<CommandLine condition="contains" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">dnx.exe</CommandLine>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">csc.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">dfsvc.exe</OriginalFileName>

<CommandLine condition="contains" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">msdeploy.exe -verb:sync -source:RunCommand</CommandLine>

<ParentImage condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">mftrace.exe</ParentImage>

<ParentImage condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">dxcap.exe</ParentImage>

<CommandLine condition="contains all" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">dxcap.exe;-c</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">dxcap.exe;/c</CommandLine>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">ilasm.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">jsc.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">vbc.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">Microsoft.Workflow.Compiler.exe</OriginalFileName>

<ParentImage condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">vsjitdebugger.exe</ParentImage>

<CommandLine condition="contains" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">vsjitdebugger</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">update.exe;--update</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">update.exe;--ProcessStart</CommandLine>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">tracker.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">te.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">rcsi.exe</OriginalFileName>

<CommandLine condition="contains all" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">squirrel.exe;--update</CommandLine>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">Microsoft.Workflow.Compiler.exe</OriginalFileName>

<CommandLine condition="contains" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">rundll32.exe dfshim.dll,ShOpenVerbApplication http://</CommandLine>

<CommandLine condition="contains" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">ilasm</CommandLine>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">jsc.exe</OriginalFileName>

</Rule>


-<Rule groupRelation="and" name="Mavinject">

<OriginalFileName condition="contains any" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">Mavinject.exe;mavinject64.exe</OriginalFileName>

<CommandLine condition="contains" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">/INJECTRUNNING</CommandLine>

</Rule>


-<Rule groupRelation="and" name="CMSTP">

<OriginalFileName condition="is" name="technique_id=T1218.003,technique_name=CMSTP">CMSTP.exe</OriginalFileName>

<CommandLine condition="contains all" name="technique_id=T1218.003,technique_name=CMSTP">/ni;/s</CommandLine>

</Rule>

<OriginalFileName condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">MSBuild.exe</OriginalFileName>

<ParentImage condition="image" name="technique_id=T1137,technique_name=Office Application Startup">excel.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1137,technique_name=Office Application Startup">winword.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1137,technique_name=Office Application Startup">powerpnt.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1137,technique_name=Office Application Startup">outlook.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1137,technique_name=Office Application Startup">msaccess.exe</ParentImage>

<ParentImage condition="image" name="technique_id=T1137,technique_name=Office Application Startup">mspub.exe</ParentImage>

<OriginalFileName condition="contains any" name="technique_id=T1218.009,technique_name=Regsvcs/Regasm">regsvcs.exe;regasm.exe</OriginalFileName>


-<Rule groupRelation="or" name="Windows Command Shell">

<OriginalFileName condition="is" name="technique_id=T1059.003,technique_name=Windows Command Shell">cmd.exe</OriginalFileName>

<Image condition="image" name="technique_id=T1059.003,technique_name=Windows Command Shell">cmd.exe</Image>

</Rule>


-<Rule groupRelation="or" name="PowerShell">

<OriginalFileName condition="image" name="technique_id=T1059.001,technique_name=PowerShell">powershell.exe</OriginalFileName>

<OriginalFileName condition="image" name="technique_id=T1059.001,technique_name=PowerShell">powershell_ise.exe</OriginalFileName>

<OriginalFileName condition="contains" name="technique_id=T1059.001,technique_name=PowerShell">Sqlps.exe</OriginalFileName>

<CommandLine condition="contains" name="technique_id=T1059.001,technique_name=PowerShell">pester</CommandLine>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1218,technique_name=System Binary Proxy Execution">

<OriginalFileName condition="is">ATBroker.exe</OriginalFileName>

<CommandLine condition="contains">start</CommandLine>

</Rule>

<CommandLine condition="contains" name="technique_id=T1027,technique_name=Obfuscated Files or Information">FromBase64</CommandLine>

<CommandLine condition="contains" name="technique_id=T1027,technique_name=Obfuscated Files or Information">gzip</CommandLine>

<CommandLine condition="contains" name="technique_id=T1027,technique_name=Obfuscated Files or Information">decompress</CommandLine>

<CommandLine condition="contains" name="technique_id=T1027,technique_name=Obfuscated Files or Information">http</CommandLine>

<CommandLine condition="contains" name="technique_id=T1027,technique_name=Obfuscated Files or Information">replace</CommandLine>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">SyncAppvPublishingServer.exe</Image>

<OriginalFileName condition="is" name="technique_id=T1057,technique_name=Process Discovery">PsList.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1007,technique_name=System Service Discovery">PsService.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1569.002,technique_name=Service Execution">PsExec.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1569.002,technique_name=Service Execution">PsExec.c</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1033,technique_name=System Owner/User Discovery">PsGetSID.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">PsKill.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">PKill.exe</OriginalFileName>

<OriginalFileName condition="contains" name="technique_id=T1003,technique_name=Credential Dumping">ProcDump</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1033,technique_name=System Owner/User Discovery">PsLoggedOn.exe</OriginalFileName>

<OriginalFileName condition="image" name="technique_id=T1105,technique_name=Ingress Tool Transfer">PsFile.exe</OriginalFileName>

<OriginalFileName condition="contains" name="technique_id=T1548.002,technique_name=Bypass User Access Control">ShellRunas</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1057,technique_name=Process Discovery">PipeList.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1083,technique_name=File and Directory Discovery">AccessChk.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1083,technique_name=File and Directory Discovery">AccessEnum.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1033,technique_name=System Owner/User Discovery">LogonSessions.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1005,technique_name=Data from Local System">PsLogList.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1057,technique_name=Process Discovery">PsInfo.exe</OriginalFileName>

<OriginalFileName condition="contains" name="technique_id=T1007,technique_name=System Service Discovery">LoadOrd</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1098,technique_name=Account Manipulation">PsPasswd.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1012,technique_name=Query Registry">ru.exe</OriginalFileName>

<OriginalFileName condition="contains" name="technique_id=T1012,technique_name=Query Registry">Regsize</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1003,technique_name=Credential Dumping">ProcDump</OriginalFileName>

<CommandLine condition="contains" name="technique_id=T1003,technique_name=Credential Dumping">-ma lsass.exe</CommandLine>

<CommandLine condition="contains" name="technique_id=T1036,technique_name=Process Evasion">-accepteula -ma</CommandLine>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1490,technique_name=Inhibit System Recovery">vssadmin.exe</OriginalFileName>

<CommandLine condition="contains all" name="technique_id=T1490,technique_name=Inhibit System Recovery">delete;shadow</CommandLine>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1490,technique_name=Inhibit System Recovery">vssadmin.exe</OriginalFileName>

<CommandLine condition="contains all" name="technique_id=T1490,technique_name=Inhibit System Recovery">resize;shadowstorage</CommandLine>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1490,technique_name=Inhibit System Recovery">wmic.exe</OriginalFileName>

<CommandLine condition="contains all" name="technique_id=T1490,technique_name=Inhibit System Recovery">delete;shadowcopy</CommandLine>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1490,technique_name=Inhibit System Recovery">wbadmin.exe</OriginalFileName>

<CommandLine condition="contains all" name="technique_id=T1490,technique_name=Inhibit System Recovery">delete;catalog</CommandLine>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1490,technique_name=Inhibit System Recovery">bcdedit.exe</OriginalFileName>

<CommandLine condition="contains all" name="technique_id=T1490,technique_name=Inhibit System Recovery">recoveryenabled;no</CommandLine>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1490,technique_name=Inhibit System Recovery">bcdedit.exe</OriginalFileName>

<CommandLine condition="contains all" name="technique_id=T1490,technique_name=Inhibit System Recovery">bootstatuspolicy;ignoreallfailures</CommandLine>

</Rule>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\PerfLogs\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\$Recycle.bin\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Intel\Logs\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Users\Default\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Users\Public\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Users\NetworkService\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Fonts\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Debug\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Media\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Help\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\addins\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\repair\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\security\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\system32\config\systemprofile\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">VolumeShadowCopy</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\htdocs\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\wwwroot\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\Temp\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\Downloads\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\Desktop\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\Appdata\Local\</Image>


-<Rule groupRelation="or" name="Control Panel Items">

<CommandLine condition="contains all" name="technique_id=T1218.002,technique_name=Control Panel Items">control;/name</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1218.002,technique_name=Control Panel Items">rundll32.exe;shell32.dll;Control_RunDLL</CommandLine>

</Rule>


-<Rule groupRelation="and" name="Windows Defender tampering">

<Image condition="image" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">MpCmdRun.exe</Image>

<CommandLine condition="contains any" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">Add-MpPreference;RemoveDefinitions;DisableIOAVProtection</CommandLine>

</Rule>

<OriginalFileName condition="is" name="technique_id=T1021.006,technique_name=Windows Remote Management">wsmprovhost.exe</OriginalFileName>

<OriginalFileName condition="is" name="technique_id=T1021.006,technique_name=Windows Remote Management">winrshost.exe</OriginalFileName>

<Image condition="image" name="technique_id=T1021.006,technique_name=Windows Remote Management">winrm.cmd</Image>

<ParentImage condition="is" name="technique_id=T1218,technique_name=Trusted Binary Proxy Execution">wsl.exe</ParentImage>

<ParentCommandLine condition="contains all" name="technique_id=T1218,technique_name=Trusted Binary Proxy Execution">wsl.exe;-e</ParentCommandLine>

<ParentCommandLine condition="contains all" name="technique_id=T1218,technique_name=Trusted Binary Proxy Execution">wsl.exe;/e</ParentCommandLine>

<CommandLine condition="contains all" name="technique_id=T1218,technique_name=Trusted Binary Proxy Execution">wsl.exe;-e</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1218,technique_name=Trusted Binary Proxy Execution">wsl.exe;/e</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1218,technique_name=Trusted Binary Proxy Execution">wsl.exe;-u root</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1218,technique_name=Trusted Binary Proxy Execution">wsl.exe;/u root</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1218,technique_name=Trusted Binary Proxy Execution">wsl.exe;--exec bash</CommandLine>


-<Rule groupRelation="and" name="Remote Copy via wsl">

<CommandLine condition="contains all" name="technique_id=T1202,technique_name=Remote File Copy">wsl.exe;--exec bash</CommandLine>

<CommandLine condition="contains all" name="technique_id=T1202,technique_name=Remote File Copy">/dev/tcp</CommandLine>

</Rule>

</ProcessCreate>

</RuleGroup>

<!-- Event ID 1 == Process Creation - Excludes -->



-<RuleGroup groupRelation="or">


-<ProcessCreate onmatch="exclude">


-<Rule groupRelation="and">

<Image condition="end with">AcroRd32.exe</Image>

<CommandLine condition="contains any">/CR;channel=</CommandLine>

</Rule>


-<Rule groupRelation="or">

<Image condition="end with">C:\Program Files (x86)\Adobe\Acrobat DC\Acrobat\AcroCEF\AcroCEF.exe</Image>

<ParentImage condition="end with">C:\Program Files (x86)\Common Files\Adobe\AdobeGCClient\AGSService.exe</ParentImage>

<Image condition="end with">C:\Program Files (x86)\Adobe\Acrobat Reader DC\Reader\AcroCEF\RdrCEF.exe</Image>

<Image condition="end with">C:\Program Files (x86)\Adobe\Acrobat DC\Acrobat\LogTransport2.exe</Image>

</Rule>

<Image condition="end with">C:\Program Files (x86)\Adobe\Adobe Creative Cloud\ACC\Creative Cloud.exe</Image>

<ParentImage condition="end with">C:\Program Files (x86)\Adobe\Adobe Creative Cloud\ACC\Creative Cloud.exe</ParentImage>

<ParentImage condition="end with">C:\Program Files (x86)\Adobe\Adobe Creative Cloud\CCXProcess\CCXProcess.exe</ParentImage>

<ParentImage condition="end with">C:\Program Files (x86)\Adobe\Adobe Creative Cloud\CoreSync\CoreSync.exe</ParentImage>

<Image condition="end with">C:\Windows\SysWOW64\Macromed\Flash\FlashPlayerUpdateService.exe</Image>

<Image condition="end with">C:\Program Files (x86)\Common Files\Adobe\ARM\1.0\AdobeARM.exe</Image>

<ParentImage condition="end with">C:\Program Files (x86)\Common Files\Adobe\ARM\1.0\AdobeARM.exe</ParentImage>

<Image condition="end with">C:\Program Files (x86)\Common Files\Adobe\ARM\1.0\armsvc.exe</Image>

<Image condition="end with">C:\Program Files (x86)\Adobe\Acrobat DC\Acrobat\AdobeCollabSync.exe</Image>

<Image condition="end with">C:\Program Files (x86)\Common Files\Adobe\Adobe Desktop Common\HEX\Adobe CEF Helper.exe</Image>

<Image condition="end with">C:\Program Files (x86)\Common Files\Adobe\AdobeGCClient\AdobeGCClient.exe</Image>

<Image condition="end with">C:\Program Files (x86)\Common Files\Adobe\OOBE\PDApp\P6\adobe_licutil.exe</Image>

<Image condition="end with">C:\Program Files (x86)\Common Files\Adobe\OOBE\PDApp\P7\adobe_licutil.exe</Image>

<ParentImage condition="end with">C:\Program Files (x86)\Common Files\Adobe\OOBE\PDApp\P7\adobe_licutil.exe</ParentImage>

<Image condition="end with">C:\Program Files (x86)\Common Files\Adobe\OOBE\PDApp\UWA\updaterstartuputility.exe</Image>

<ParentImage condition="is">C:\Program Files (x86)\Common Files\Adobe\OOBE\PDApp\UWA\updaterstartuputility.exe</ParentImage>

<ParentCommandLine condition="is">"C:\Program Files\Microsoft Monitoring Agent\Agent\MonitoringHost.exe" -Embedding</ParentCommandLine>


-<Rule groupRelation="and">

<ParentImage condition="is">"C:\Program Files\Microsoft Monitoring Agent\Agent\MonitoringHost.exe"</ParentImage>

<CommandLine condition="is">"C:\Windows\system32\cscript.exe" /nologo "MonitorKnowledgeDiscovery.vbs"</CommandLine>

</Rule>

<ParentImage condition="end with">C:\Program Files (x86)\Cisco\Cisco AnyConnect Secure Mobility Client\vpnagent.exe</ParentImage>

<Image condition="begin with">C:\program files (x86)\desktopcentral_agent\bin\</Image>

<Image condition="begin with">C:\program files\desktopcentral_server\bin\</Image>

<CommandLine condition="begin with">C:\Windows\Microsoft.NET\Framework\v4.0.30319\ngen.exe</CommandLine>

<Image condition="is">C:\Windows\Microsoft.NET\Framework64\v4.0.30319\mscorsvw.exe</Image>

<Image condition="is">C:\Windows\Microsoft.NET\Framework\v4.0.30319\mscorsvw.exe</Image>

<Image condition="is">C:\Windows\Microsoft.Net\Framework64\v3.0\WPF\PresentationFontCache.exe</Image>

<Image condition="is">C:\Windows\Microsoft.Net\Framework64\v3.0\WPF\PresentationFontCache.exe</Image>

<ParentCommandLine condition="contains">C:\Windows\Microsoft.NET\Framework64\v4.0.30319\ngentask.exe</ParentCommandLine>

<ParentImage condition="is">C:\Windows\Microsoft.NET\Framework64\v4.0.30319\mscorsvw.exe</ParentImage>

<ParentImage condition="is">C:\Windows\Microsoft.NET\Framework64\v4.0.30319\ngentask.exe</ParentImage>

<ParentImage condition="is">C:\Windows\Microsoft.NET\Framework\v4.0.30319\mscorsvw.exe</ParentImage>

<ParentImage condition="is">C:\Windows\Microsoft.NET\Framework\v4.0.30319\ngentask.exe</ParentImage>

<ParentImage condition="is">C:\Windows\Microsoft.NET\Framework\v4.0.30319\ngentask.exe</ParentImage>

<Image condition="begin with">C:\Program Files\NVIDIA Corporation\</Image>

<Image condition="begin with">C:\Program Files\Realtek\</Image>

<ParentImage condition="end with">C:\Program Files\Realtek\Audio\HDA\RtkAudioService64.exe</ParentImage>

<Image condition="end with">C:\Program Files (x86)\Dropbox\Update\DropboxUpdate.exe</Image>

<ParentImage condition="end with">C:\Program Files (x86)\Dropbox\Update\DropboxUpdate.exe</ParentImage>

<Image condition="is">C:\Program Files\ESET\ESET Nod32 Antivirus\ekrn.exe</Image>

<CommandLine condition="begin with">"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --type=</CommandLine>

<CommandLine condition="begin with">"C:\Program Files\Google\Chrome\Application\chrome.exe" --type=</CommandLine>

<Image condition="begin with">C:\Program Files (x86)\Google\Update\</Image>

<ParentImage condition="begin with">C:\Program Files (x86)\Google\Update\</ParentImage>

<ParentImage condition="is">C:\Program Files (x86)\RES Software\Workspace Manager\pfwsmgr.exe</ParentImage>

<ParentImage condition="is">C:\Program Files (x86)\RES Software\Workspace Manager\respesvc64.exe</ParentImage>

<ParentImage condition="is">C:\Program Files (x86)\Ivanti\Workspace Control\pfwsmgr.exe</ParentImage>

<ParentImage condition="is">C:\Program Files (x86)\RES Software\Workspace Manager\ResPesvc64.exe</ParentImage>

<ParentImage condition="is">C:\Program Files\RES Software\Workspace Manager\respesvc.exe</ParentImage>

<ParentImage condition="is">C:\Program Files\Ivanti\Workspace Control\ResPesvc.exe</ParentImage>

<Image condition="is">C:\Program Files\Malwarebytes\Anti-Malware\mbam.exe</Image>

<Image condition="is">C:\Program Files\Malwarebytes\Anti-Malware\mbamservice.exe</Image>

<Image condition="is">C:\Program Files\Malwarebytes\Anti-Malware\mbamtray.exe</Image>

<Image condition="is">C:\Program Files\Common Files\Microsoft Shared\ClickToRun\OfficeC2RClient.exe</Image>

<ParentImage condition="end with">C:\Program Files\Common Files\Microsoft Shared\ClickToRun\OfficeClickToRun.exe</ParentImage>

<ParentImage condition="is">C:\Program Files\Common Files\Microsoft Shared\ClickToRun\OfficeC2RClient.exe</ParentImage>

<Image condition="is">C:\Program Files (x86)\Microsoft Office\Office16\MSOSYNC.EXE</Image>

<Image condition="is">C:\Program Files\Common Files\Microsoft Shared\OfficeSoftwareProtectionPlatform\OSPPSVC.EXE</Image>

<CommandLine condition="begin with">"C:\Program Files\Mozilla Firefox\plugin-container.exe" --channel</CommandLine>

<CommandLine condition="begin with">"C:\Program Files (x86)\Mozilla Firefox\plugin-container.exe" --channel</CommandLine>

<Image condition="contains all"> C:\Users\;\AppData\Local\Microsoft\OneDrive;\FileCoAuth.exe</Image>

<Image condition="is">C:\Program Files (x86)\Sophos\Sophos Anti-Virus\Web Intelligence\swi_service.exe</Image>

<Image condition="is">C:\Program Files (x86)\Sophos\Sophos Anti-Virus\Web Control\swc_service.exe</Image>

<Image condition="is">C:\Program Files (x86)\Sophos\Sophos System Protection\ssp.exe</Image>

<Image condition="is">C:\Program Files (x86)\Sophos\Remote Management System\RouterNT.exe</Image>

<Image condition="is">C:\Program Files (x86)\Sophos\AutoUpdate\ALsvc.exe</Image>

<Image condition="is">C:\Program Files (x86)\Sophos\Sophos Anti-Virus\SAVAdminService.exe</Image>

<Image condition="is">C:\Program Files (x86)\Sophos\Remote Management System\ManagementAgentNT.exe</Image>

<Image condition="begin with">C:\Program Files\Splunk\bin\</Image>

<ParentImage condition="is">C:\Program Files\Splunk\bin\splunkd.exe</ParentImage>

<ParentImage condition="is">C:\Program Files\Splunk\bin\splunk.exe</ParentImage>

<Image condition="begin with">D:\Program Files\Splunk\bin\</Image>

<ParentImage condition="is">D:\Program Files\Splunk\bin\splunkd.exe</ParentImage>

<ParentImage condition="is">D:\Program Files\Splunk\bin\splunk.exe</ParentImage>

<Image condition="begin with">C:\Program Files\SplunkUniversalForwarder\bin\</Image>

<ParentImage condition="is">C:\Program Files\SplunkUniversalForwarder\bin\splunkd.exe</ParentImage>

<ParentImage condition="is">C:\Program Files\SplunkUniversalForwarder\bin\splunk.exe</ParentImage>

<Image condition="begin with">D:\Program Files\SplunkUniversalForwarder\bin\</Image>

<ParentImage condition="is">D:\Program Files\SplunkUniversalForwarder\bin\splunkd.exe</ParentImage>

<ParentImage condition="is">D:\Program Files\SplunkUniversalForwarder\bin\splunk.exe</ParentImage>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k appmodel -s StateRepository</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k appmodel</CommandLine>

<CommandLine condition="is">C:\WINDOWS\system32\svchost.exe -k appmodel -p -s tiledatamodelsvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k camera -s FrameServer</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k dcomlaunch -s LSM</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k dcomlaunch -s PlugPlay</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k defragsvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k devicesflow -s DevicesFlowUserSvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k imgsvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localService -s EventSystem</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localService -s bthserv</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localService -s nsi</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localService -s w32Time</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localServiceAndNoImpersonation</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localServiceNetworkRestricted -s Dhcp</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localServiceNetworkRestricted -s EventLog</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localServiceNetworkRestricted -s TimeBrokerSvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localServiceNetworkRestricted -s WFDSConMgrSvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localServiceNetworkRestricted</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localServiceAndNoImpersonation -s SensrSvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localServiceNoNetwork</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localSystemNetworkRestricted -p -s WPDBusEnum</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localSystemNetworkRestricted -p -s fhsvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localSystemNetworkRestricted -s DeviceAssociationService</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localSystemNetworkRestricted -s NcbService</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localSystemNetworkRestricted -s SensorService</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localSystemNetworkRestricted -s TabletInputService</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localSystemNetworkRestricted -s UmRdpService</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localSystemNetworkRestricted -s WPDBusEnum</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localSystemNetworkRestricted -s WdiSystemHost</CommandLine>

<CommandLine condition="is">C:\WINDOWS\System32\svchost.exe -k LocalSystemNetworkRestricted -p -s WdiSystemHost</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k localSystemNetworkRestricted</CommandLine>

<CommandLine condition="is">C:\WINDOWS\system32\svchost.exe -k netsvcs -p -s wlidsvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs -p -s ncaSvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs -s BDESVC</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs -s BITS</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs -s CertPropSvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs -s DsmSvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs -s Gpsvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs -s ProfSvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs -s SENS</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs -s SessionEnv</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs -s Themes</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs -s Winmgmt</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k networkService -p -s DoSvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k networkService -s Dnscache</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k networkService -s LanmanWorkstation</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k networkService -s NlaSvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k networkService -s TermService</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k networkService</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k networkServiceNetworkRestricted</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k rPCSS</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k secsvcs</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k swprv</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k unistackSvcGroup</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k utcsvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k wbioSvcGroup</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k werSvcGroup</CommandLine>

<CommandLine condition="is">C:\WINDOWS\System32\svchost.exe -k wsappx -p -s ClipSVC</CommandLine>

<CommandLine condition="is">C:\WINDOWS\system32\svchost.exe -k wsappx -p -s AppXSvc</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k wsappx -s ClipSVC</CommandLine>

<CommandLine condition="is">C:\Windows\system32\svchost.exe -k wsappx</CommandLine>

<ParentCommandLine condition="is">C:\Windows\system32\svchost.exe -k netsvcs</ParentCommandLine>

<ParentCommandLine condition="is">C:\Windows\system32\svchost.exe -k localSystemNetworkRestricted</ParentCommandLine>

<Image condition="is">C:\Program Files\Trend Micro\Deep Security Agent\ds_monitor.exe</Image>

<Image condition="is">C:\Program Files\Trend Micro\Deep Security Agent\dsa.exe</Image>

<Image condition="is">C:\Program Files\Trend Micro\Deep Security Agent\dsuam.exe</Image>

<Image condition="is">C:\Program Files\Trend Micro\Deep Security Agent\Notifier.exe</Image>

<Image condition="is">C:\Program Files\Trend Micro\Deep Security Agent\lib\Patch.exe</Image>

<Image condition="is">C:\Program Files (x86)\Trend Micro\BM\TMBMSRV.exe</Image>

<Image condition="is">C:\Program Files (x86)\Trend Micro\OfficeScan Client\TmopExtIns32.exe</Image>

<Image condition="is">C:\Program Files (x86)\Trend Micro\OfficeScan Client\TmExtIns.exe</Image>

<Image condition="is">C:\Program Files (x86)\Trend Micro\OfficeScan Client\TmListen.exe</Image>

<Image condition="begin with">C:\Program Files\Windows Defender\</Image>

<Image condition="is">C:\Windows\system32\MpSigStub.exe</Image>

<Image condition="begin with">C:\Windows\SoftwareDistribution\Download\Install\AM_</Image>

<Image condition="is">C:\Program Files\Microsoft Security Client\MpCmdRun.exe</Image>

<CommandLine condition="begin with">C:\Windows\system32\DllHost.exe /Processid</CommandLine>

<CommandLine condition="is">C:\Windows\system32\SearchIndexer.exe /Embedding</CommandLine>

<Image condition="end with">C:\Windows\System32\CompatTelRunner.exe</Image>

<Image condition="is">C:\Windows\System32\MusNotification.exe</Image>

<Image condition="is">C:\Windows\System32\MusNotificationUx.exe</Image>

<Image condition="is">C:\Windows\System32\audiodg.exe</Image>

<Image condition="is">C:\Windows\System32\conhost.exe</Image>

<Image condition="is">C:\Windows\System32\powercfg.exe</Image>

<Image condition="is">C:\Windows\System32\wbem\WmiApSrv.exe</Image>

<Image condition="is">C:\Windows\System32\wermgr.exe</Image>

<Image condition="is">C:\Windows\SysWOW64\wermgr.exe</Image>

<Image condition="is">C:\Windows\system32\sppsvc.exe</Image>

<IntegrityLevel condition="is">AppContainer</IntegrityLevel>

<ParentCommandLine condition="begin with">%%SystemRoot%%\system32\csrss.exe ObjectDirectory=\Windows</ParentCommandLine>

<ParentImage condition="is">C:\Windows\system32\SearchIndexer.exe</ParentImage>

</ProcessCreate>

</RuleGroup>

<!-- Event ID 2 == File Creation Time - Includes -->



-<RuleGroup groupRelation="or">


-<FileCreateTime onmatch="include">

<TargetFilename condition="end with" name="technique_id=T1099,technique_name=Timestomp">.exe</TargetFilename>

<Image condition="begin with" name="technique_id=T1070.006,technique_name=Timestomp">C:\Temp</Image>

<Image condition="begin with" name="technique_id=T1070.006,technique_name=Timestomp">C:\Windows\Temp</Image>

<Image condition="begin with" name="technique_id=T1070.006,technique_name=Timestomp">C:\Tmp</Image>

<Image condition="begin with" name="technique_id=T1070.006,technique_name=Timestomp">C:\Users</Image>

<Image condition="begin with" name="technique_id=T1099,technique_name=Timestomp">\Device\HarddiskVolumeShadowCopy</Image>

</FileCreateTime>

</RuleGroup>

<!-- Event ID 2 == File Creation Time - Excludes -->



-<RuleGroup groupRelation="or">


-<FileCreateTime onmatch="exclude">

<Image condition="end with">AppData\Local\Google\Chrome\Application\chrome.exe</Image>

<Image condition="end with">Root\VFS\ProgramFilesX86\Google\Chrome\Application\chrome.exe</Image>

<TargetFilename condition="contains">\NVIDIA\NvBackend\ApplicationOntology\</TargetFilename>

<Image condition="image">OneDrive.exe</Image>

<Image condition="contains">setup</Image>

<Image condition="end with">slack.exe</Image>

<Image condition="end with">AppData\Local\Microsoft\Teams\current\Teams.exe</Image>

</FileCreateTime>

</RuleGroup>

<!-- Event ID 3 == Network Connection - Includes -->



-<RuleGroup groupRelation="or">


-<NetworkConnect onmatch="include">

<Image condition="image" name="technique_id=T1021,technique_name=Remote Services">vnc.exe</Image>

<Image condition="image" name="technique_id=T1021,technique_name=Remote Services">vncviewer.exe</Image>

<Image condition="image" name="technique_id=T1021,technique_name=Remote Services">vncservice.exe</Image>

<Image condition="image" name="technique_id=T1569.002,technique_name=Service Execution">winexesvc.exe</Image>

<Image condition="image" name="technique_id=T1197,technique_name=BITS Jobs">bitsadmin.exe</Image>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">4444</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">31337</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">6667</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">5555</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">5353</DestinationPort>

<Image condition="image" name="technique_id=T1021,technique_name=Remote Services">omniinet.exe</Image>

<Image condition="image" name="technique_id=T1021,technique_name=Remote Services">hpsmhd.exe</Image>

<Image condition="begin with" name="technique_id=T1102,technique_name=Web Service">C:\Program Files\Microsoft\HybridConnectionManager</Image>


-<Rule groupRelation="or" name="Unusual Connection">

<Image condition="image">dllhost.exe</Image>

<Image condition="image">hh.exe</Image>

<Image condition="image">klist.exe</Image>

<Image condition="image">schtasks.exe</Image>

<Image condition="image">taskkill.exe</Image>

<Image condition="image" name="technique_id=T1218.005,technique_name=Mshta">mshta.exe</Image>

<Image condition="image" name="technique_id=T1218.010,technique_name=Regsvr32">regsvr32.exe</Image>

<Image condition="image" name="technique_id=T1518.001,technique_name=Security Software Discovery">netsh.exe</Image>

<Image condition="image" name="technique_id=T1548.002,technique_name=Bypass User Access Control">xwizard.exe</Image>

<Image condition="image" name="technique_id=T1564.004,technique_name=NTFS File Attributes">esentutl.exe</Image>

<Image condition="image" name="technique_id=T1112,technique_name=Modify Registry">reg.exe</Image>

<Image condition="image" name="technique_id=T1134,technique_name=Access Token Manipulation">runas.exe</Image>

<Image condition="image" name="technique_id=T1069,technique_name=Permission Groups Discovery">net1.exe</Image>

<Image condition="image" name="technique_id=T1070,technique_name=Indicator Removal on Host">wevtutil.exe</Image>

</Rule>

<Image condition="image" name="technique_id=T1003,technique_name=Credential Dumping">RpcPing.exe</Image>


-<Rule groupRelation="or" name="Discovery">

<Image condition="image" name="technique_id=T1016,technique_name=System Network Configuration Discovery">ipconfig.exe</Image>

<Image condition="image" name="technique_id=T1016,technique_name=System Network Configuration Discovery">nbtstat.exe</Image>

<Image condition="image" name="technique_id=T1016,technique_name=System Network Configuration Discovery">nslookup.exe</Image>

<Image condition="image" name="technique_id=T1018,technique_name=Remote System Discovery">net.exe</Image>

<Image condition="image" name="technique_id=T1018,technique_name=Remote System Discovery">nslookup.exe</Image>

<Image condition="image" name="technique_id=T1033,technique_name=System Owner/User Discovery">nltest.exe</Image>

<Image condition="image" name="technique_id=T1033,technique_name=System Owner/User Discovery">quser.exe</Image>

<Image condition="image" name="technique_id=T1049,technique_name=System Network Connections Discovery">netstat.exe</Image>

<Image condition="image" name="technique_id=T1057,technique_name=Process Discovery">qprocess.exe</Image>

<Image condition="image" name="technique_id=T1057,technique_name=Process Discovery">query.exe</Image>

<Image condition="image" name="technique_id=T1057,technique_name=Process Discovery">qwinsta.exe</Image>

<Image condition="image" name="technique_id=T1057,technique_name=Process Discovery">rwinsta.exe</Image>

<Image condition="image" name="technique_id=T1057,technique_name=Process Discovery">tasklist.exe</Image>

</Rule>


-<Rule groupRelation="or" name="Ingress Tool Transfer">

<Image condition="image" name="technique_id=T1105,technique_name=Ingress Tool Transfer">expand.exe</Image>

<Image condition="image" name="technique_id=T1105,technique_name=Ingress Tool Transfer">extrac32.exe</Image>

<Image condition="image" name="technique_id=T1105,technique_name=Ingress Tool Transfer">IEExec.exe</Image>

<Image condition="image" name="technique_id=T1105,technique_name=Ingress Tool Transfer">Print.Exe</Image>

</Rule>


-<Rule groupRelation="or" name="Execution">

<Image condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">cscript.exe</Image>

<Image condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">desktopimgdownldr.exe</Image>

<Image condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">pcalua.exe</Image>

<Image condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">winrs.exe</Image>

<Image condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">wscript.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">Msdt.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">msiexec.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">RegisterCimProvider.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">ScriptRunner.exe</Image>

<Image condition="image" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">dfsvc.exe</Image>

</Rule>


-<Rule groupRelation="or" name="Services">

<Image condition="image" name="technique_id=T1569.002,technique_name=Service Execution">dnscmd.exe</Image>

<Image condition="image" name="technique_id=T1543.003,technique_name=Windows Service">sc.exe</Image>

<Image condition="image" name="technique_id=T1053,technique_name=Scheduled Task/Job">taskeng.exe</Image>

</Rule>


-<Rule groupRelation="or" name="Shells and Terminals">

<Image condition="image" name="technique_id=T1059.001,technique_name=PowerShell">OpenConsole.exe</Image>

<Image condition="image" name="technique_id=T1059.001,technique_name=PowerShell">powershell.exe</Image>

<Image condition="image" name="technique_id=T1059.001,technique_name=PowerShell">WindowsTerminal.exe</Image>

<Image condition="image" name="technique_id=T1059.003,technique_name=Windows Command Shell">cmd.exe</Image>

<Image condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">bash.exe</Image>

</Rule>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">Mavinject.exe</Image>

<Image condition="image" name="technique_id=T1053,technique_name=Scheduled Task">at.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">certutil.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Script Proxy Execution">cscript.exe</Image>

<Image condition="image">java.exe</Image>

<Image condition="image" name="technique_id=T1218.005,technique_name=Mshta">mshta.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">msiexec.exe</Image>

<Image condition="image" name="technique_id=T1069,technique_name=Permission Groups Discovery">net.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">notepad.exe</Image>

<Image condition="image" name="technique_id=T1012,technique_name=Query Registry">reg.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Regsvr32">regsvr32.exe</Image>

<Image condition="image" name="technique_id=T1218.011,technique_name=Rundll32">rundll32.exe</Image>

<Image condition="image" name="technique_id=T1543.003,technique_name=Windows Service">sc.exe</Image>

<Image condition="image" name="technique_id=T1047,technique_name=Windows Management Instrumentation">wmic.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Script Proxy Execution">wscript.exe</Image>

<Image condition="image">driverquery.exe</Image>

<Image condition="image" name="technique_id=T1069,technique_name=Permission Groups Discovery">dsquery.exe</Image>

<Image condition="image" name="technique_id=T1069,technique_name=Permission Groups Discovery">AdFind.exe</Image>

<Image condition="image">hh.exe</Image>

<Image condition="image">infDefaultInstall.exe</Image>

<Image condition="image">javaw.exe</Image>

<Image condition="image">javaws.exe</Image>

<Image condition="image" name="technique_id=T1543.003,technique_name=Windows Service">mmc.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">msbuild.exe</Image>

<Image condition="image" name="technique_id=T1016,technique_name=System Network Configuration Discovery">nbtstat.exe</Image>

<Image condition="image" name="technique_id=T1018,technique_name=Remote System Discovery">nslookup.exe</Image>

<Image condition="image" name="technique_id=T1057,technique_name=Process Discovery">qprocess.exe</Image>

<Image condition="image" name="technique_id=T1057,technique_name=Process Discovery">qwinsta.exe</Image>

<Image condition="image" name="technique_id=T1218.009,technique_name=Regsvcs/Regasm">regsvcs.exe</Image>

<Image condition="image" name="technique_id=T1057,technique_name=Process Discovery">rwinsta.exe</Image>

<Image condition="image" name="technique_id=T1053,technique_name=Scheduled Task/Job">schtasks.exe</Image>

<Image condition="image" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">taskkill.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">replace.exe</Image>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">1080</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">3128</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">8080</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1021,technique_name=Remote Services">22</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1021,technique_name=Remote Services">23</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">25</DestinationPort>


-<Rule groupRelation="and">

<DestinationPort condition="is" name="technique_id=T1021,technique_name=Remote Services">88</DestinationPort>

<Image condition="is not">C:\Windows\System32\lsass.exe</Image>

</Rule>

<DestinationPort condition="is" name="technique_id=T1021,technique_name=Remote Services">3389</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1021,technique_name=Remote Services">5800</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1021,technique_name=Remote Services">5900</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1021,technique_name=Remote Services">5985</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1021,technique_name=Remote Services">5986</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1087.002,technique_name=Account Discovery: Domain Account">9389</DestinationPort>

<Image condition="image" name="technique_id=T1569.002,technique_name=Service Execution">psexec.exe</Image>

<Image condition="image" name="technique_id=T1569.002,technique_name=Service Execution">psexesvc.exe</Image>


-<Rule groupRelation="and">

<SourcePort condition="is any" name="technique_id=T1557,technique_name=Adversary-in-the-Middle">445;389;8492;636;3268;3269</SourcePort>

<Image condition="is not">C:\Windows\System32\lsass.exe</Image>

<Image condition="is not">c:\Windows\System32\dsamain.exe</Image>

<ProcessId condition="is not">4</ProcessId>

</Rule>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Users</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\ProgramData</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Temp</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Temp</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\PerfLogs\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\$Recycle.bin\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Intel\Logs\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Users\Default\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Users\Public\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Users\NetworkService\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Fonts\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Debug\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Media\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Help\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\addins\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\repair\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\security\</Image>

<Image condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\system32\config\systemprofile\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\htdocs\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\wwwroot\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\AppData\Local\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\AppData\Local\Temp\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\AppData\Roaming\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">\AppData\LocalLow\</Image>

<Image condition="contains" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\SysWOW64</Image>

<Image condition="image" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">SyncAppvPublishingServer.exe</Image>

<Image condition="image">tor.exe</Image>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">1723</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">4500</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">9001</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1571,technique_name=Non-Standard Port">9030</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1021.006,technique_name=Windows Remote Management">5985</DestinationPort>

<DestinationPort condition="is" name="technique_id=T1021.006,technique_name=Windows Remote Management">5986</DestinationPort>

</NetworkConnect>

</RuleGroup>

<!-- Event ID 3 == Network Connection - Excludes -->



-<RuleGroup groupRelation="or">


-<NetworkConnect onmatch="exclude">

<Image condition="end with">AppData\Roaming\Dropbox\bin\Dropbox.exe</Image>

<Image condition="end with">winlogbeat.exe</Image>

<Image condition="end with">packetbeat.exe</Image>

<Image condition="is">C:\Program Files\ESET\ESET Nod32 Antivirus\ekrn.exe</Image>


-<Rule groupRelation="and">

<Image condition="is">C:\Windows\System32\lsass.exe</Image>

<DestinationPort condition="is">88</DestinationPort>

</Rule>

<Image condition="image">OneDrive.exe</Image>

<Image condition="image">OneDriveStandaloneUpdater.exe</Image>

<Image condition="end with">ownCloud\owncloud.exe</Image>

<Image condition="is">C:\Program Files\Palo Alto Networks\Traps\cyserver.exe</Image>


-<Rule groupRelation="and">

<Protocol condition="is">udp</Protocol>

<DestinationPort condition="is">3389</DestinationPort>

</Rule>

<Image condition="is">C:\Program Files (x86)\Sophos\Sophos Anti-Virus\Web Intelligence\swi_service.exe</Image>

<Image condition="is">C:\Program Files (x86)\Sophos\AutoUpdate\ALsvc.exe</Image>

<Image condition="is">C:\Program Files (x86)\Sophos\Remote Management System\RouterNT.exe</Image>

<Image condition="is">C:\Program Files (x86)\Sophos\Sophos Anti-Virus\Web Control\swc_service.exe</Image>

<Image condition="is">C:\Program Files (x86)\Sophos\Sophos Anti-Virus\Web Intelligence\swi_service.exe</Image>

<Image condition="is">C:\Program Files\Sophos\Sophos Network Threat Protection\bin\SntpService.exe</Image>

<Image condition="end with">AppData\Roaming\Spotify\Spotify.exe</Image>

<Image condition="end with">AppData\Local\SynologyDrive\SynologyDrive.app\bin\cloud-drive-ui.exe</Image>

<Image condition="end with">AppData\Local\SynologyDrive\SynologyDrive.app\bin\cloud-drive-daemon.exe</Image>

<Image condition="is">C:\Program files (x86)\Trend Micro\OfficeScan Client\tmlisten.exe</Image>

<Image condition="is">C:\Program Files (x86)\Trend Micro\BM\TMBMSRV.exe</Image>

<DestinationHostname condition="end with">.windowsupdate.microsoft.com</DestinationHostname>

<DestinationHostname condition="end with">.windowsupdate.com</DestinationHostname>

<DestinationHostname condition="end with">wustat.windows.com</DestinationHostname>

<DestinationHostname condition="end with">go.microsoft.com</DestinationHostname>

<DestinationHostname condition="end with">.update.microsoft.com</DestinationHostname>

<DestinationHostname condition="end with">download.microsoft.com</DestinationHostname>

<DestinationHostname condition="end with">microsoft.com.akadns.net</DestinationHostname>

<DestinationHostname condition="end with">microsoft.com.nsatc.net</DestinationHostname>

</NetworkConnect>

</RuleGroup>

<!-- Event ID 5 == Process Terminated - Includes -->



-<RuleGroup groupRelation="or">


-<ProcessTerminate onmatch="include">

<Image condition="begin with">C:\Users</Image>

<Image condition="begin with">C:\Temp</Image>

<Image condition="begin with">C:\Windows\Temp</Image>

</ProcessTerminate>

</RuleGroup>

<!-- Event ID 6 == Driver Loaded - Excludes -->



-<RuleGroup groupRelation="or">

<!--Default to log all and exclude only valid signed Microsoft or Intel drivers-->



-<DriverLoad onmatch="exclude">


-<Rule groupRelation="and">

<Signature condition="begin with">Intel </Signature>

<SignatureStatus condition="is">Valid</SignatureStatus>

</Rule>


-<Rule groupRelation="and">

<Signature condition="contains">Microsoft</Signature>

<SignatureStatus condition="is">Valid</SignatureStatus>

</Rule>

</DriverLoad>

</RuleGroup>

<!-- Event ID 7 == Image Loaded - Includes -->



-<RuleGroup groupRelation="or">


-<ImageLoad onmatch="include">


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1059.001,technique_name=PowerShell">amsi.dll</OriginalFileName>

<Image condition="excludes any">powershell.exe;powershell_ise.exe</Image>

</Rule>


-<Rule groupRelation="and">

<Image condition="end with" name="technique_id=T1037.005,technique_name=Boot or Logon Initialization Scripts - Startup Items">bginfo.exe</Image>

<ImageLoaded condition="contains any">System.ni.dll;System.Core.ni.dll</ImageLoaded>

</Rule>

<ImageLoaded condition="end with" name="technique_id=T1197,technique_name=BITS">bitsproxy.dll</ImageLoaded>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1055,technique_name=Process Injection">clr.dll</OriginalFileName>

<Image condition="excludes">C:\Windows\Microsoft.NET\</Image>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1055,technique_name=Process Injection">clrjit.dll</OriginalFileName>

<Image condition="excludes">C:\Windows\Microsoft.NET\</Image>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1055,technique_name=Process Injection">mscoreei.dll</OriginalFileName>

<Image condition="excludes">C:\Windows\Microsoft.NET\</Image>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1055,technique_name=Process Injection">mscoree.dll</OriginalFileName>

<Image condition="excludes">C:\Windows\Microsoft.NET\</Image>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1055,technique_name=Process Injection">mscoreeis.dll</OriginalFileName>

<Image condition="excludes">C:\Windows\Microsoft.NET\</Image>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1055,technique_name=Process Injection">mscorlib.dll</OriginalFileName>

<Image condition="excludes">C:\Windows\Microsoft.NET\</Image>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1055,technique_name=Process Injection">mscorlib.ni.dll</OriginalFileName>

<Image condition="excludes">C:\Windows\Microsoft.NET\</Image>

</Rule>

<ImageLoaded condition="end with" name="technique_id=T1047,technique_name=Windows Scheduled Tasks">mstask.dll</ImageLoaded>

<ImageLoaded condition="end with" name="technique_id=T1059,technique_name=Command and Scripting Interpreter">wshom.ocx</ImageLoaded>

<OriginalFileName condition="is">scrrun.dll</OriginalFileName>

<OriginalFileName condition="is">vbscript.dll</OriginalFileName>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1218.005,technique_name=MSHTA with AMSI Bypass">jscript.dll</OriginalFileName>

<Image condition="end with">mshta.exe</Image>

</Rule>


-<Rule groupRelation="and">

<OriginalFileName condition="is" name="technique_id=T1218.005,technique_name=MSHTA with AMSI Bypass">jscript9.dll</OriginalFileName>

<Image condition="end with">mshta.exe</Image>

</Rule>

<ImageLoaded condition="end with" name="technique_id=T1137,technique_name=Office Application Startup">.wll</ImageLoaded>

<ImageLoaded condition="end with" name="technique_id=T1137,technique_name=Office Application Startup">.xll</ImageLoaded>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Microsoft Office\root\Office</Image>

<OriginalFileName condition="is" name="technique_id=T1559.001,technique_name=Component Object Model">combase.dll</OriginalFileName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Microsoft Office\root\Office</Image>

<OriginalFileName condition="is" name="technique_id=T1559.001,technique_name=Component Object Model">coml2.dll</OriginalFileName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Microsoft Office\root\Office</Image>

<OriginalFileName condition="is" name="technique_id=T1559.001,technique_name=Component Object Model">comsvcs.dll</OriginalFileName>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1055,technique_name=Process Injection">

<Image condition="contains all">C:\Program Files;\Microsoft Office\root\Office</Image>

<ImageLoaded condition="begin with">C:\Windows\assembly\</ImageLoaded>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1055,technique_name=Process Injection">

<Image condition="contains all">C:\Program Files;\Microsoft Office\root\Office</Image>

<ImageLoaded condition="begin with">C:\Windows\Microsoft.NET\assembly\GAC_MSIL</ImageLoaded>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1055,technique_name=Process Injection">

<Image condition="contains all">C:\Program Files;\Microsoft Office\root\Office</Image>

<OriginalFileName condition="is">clr.dll</OriginalFileName>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1059.005,technique_name=Command and Scripting Interpreter VBScript">

<Image condition="contains all">C:\Program Files;\Microsoft Office\root\Office</Image>

<OriginalFileName condition="is">VBE7INTL.DLL</OriginalFileName>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1059.005,technique_name=Command and Scripting Interpreter VBScript">

<Image condition="contains all">C:\Program Files;\Microsoft Office\root\Office</Image>

<OriginalFileName condition="is">VBE7.DLL</OriginalFileName>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1059.005,technique_name=Command and Scripting Interpreter VBScript">

<Image condition="contains all">C:\Program Files;\Microsoft Office\root\Office</Image>

<OriginalFileName condition="is">VBEUI.DLL</OriginalFileName>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1137.001,technique_name=Office Application Startup - Office Template Macros">

<Image condition="contains all">C:\Program Files;\Microsoft Office\root\Office</Image>

<OriginalFileName condition="is">OUTLVBA.DLL</OriginalFileName>

</Rule>

<Image condition="end with" name="technique_id=T1137,technique_name=Office Application Startup">VSTOInstaller.exe</Image>


-<Rule groupRelation="and">

<Image condition="contains all" name="technique_id=T1047,technique_name=Windows Management Instrumentation">C:\Program Files;\Microsoft Office\root\Office</Image>

<ImageLoaded condition="is">C:\Windows\SysWOW64\wbem\wbemdisp.dll</ImageLoaded>

</Rule>

<ImageLoaded condition="end with" name="technique_id=T1059.001,technique_name=PowerShell">system.management.automation.ni.dll</ImageLoaded>

<ImageLoaded condition="end with" name="technique_id=T1059.001,technique_name=PowerShell">system.management.automation.dll</ImageLoaded>

<ImageLoaded condition="end with" name="technique_id=T1059.001,technique_name=PowerShell">Microsoft.PowerShell.Commands.Diagnostics.dll</ImageLoaded>

<ImageLoaded condition="end with" name="technique_id=T1059.001,technique_name=PowerShell">Microsoft.PowerShell.Commands.Management.dll</ImageLoaded>

<ImageLoaded condition="end with" name="technique_id=T1059.001,technique_name=PowerShell">Microsoft.PowerShell.Commands.Utility.dll</ImageLoaded>

<ImageLoaded condition="end with" name="technique_id=T1059.001,technique_name=PowerShell">Microsoft.PowerShell.ConsoleHost.dll</ImageLoaded>

<ImageLoaded condition="end with" name="technique_id=T1059.001,technique_name=PowerShell">Microsoft.PowerShell.Security.dll</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1210,technique_name=Exploitation of Remote Services">C:\Windows\System32\spool\drivers\</ImageLoaded>

<OriginalFileName condition="is" name="technique_id=T1112,technique_name=Modify Registry">regsvc.dll</OriginalFileName>


-<Rule groupRelation="and">

<Image condition="end with">rundll32.exe</Image>

<OriginalFileName condition="is" name="technique_id=T1003.004,technique_name=LSASS Memory">comsvcs.dll</OriginalFileName>

</Rule>

<OriginalFileName condition="is" name="technique_id=T1053,technique_name=Scheduled Task">taskschd.dll</OriginalFileName>

<ImageLoaded condition="end with" name="technique_id=T1218.010,technique_name=Regsvr32">scrobj.dll</ImageLoaded>

<OriginalFileName condition="is" name="technique_id=T1218.010,technique_name=Regsvr32">scrobj.dll</OriginalFileName>

<ImageLoaded condition="contains any" name="technique_id=T1574.002,technique_name=DLL Side-Loading">admin$;c$;\\;\appdata\;\temp\</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">c:\programdata\</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\Windows\Media\</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\Windows\addins\</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\Windows\system32\config\systemprofile\</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\Windows\Debug\</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\Windows\Temp</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\PerfLogs\</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\Windows\Help\</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\Intel\Logs\</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\Temp</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\Windows\repair\</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\Windows\security\</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">C:\Windows\Fonts\</ImageLoaded>

<ImageLoaded condition="contains" name="technique_id=T1574.002,technique_name=DLL Side-Loading">Downloads</ImageLoaded>

<ImageLoaded condition="contains" name="technique_id=T1574.002,technique_name=DLL Side-Loading">Public</ImageLoaded>

<ImageLoaded condition="contains" name="technique_id=T1574.002,technique_name=DLL Side-Loading">Documents</ImageLoaded>

<ImageLoaded condition="contains" name="technique_id=T1574.002,technique_name=DLL Side-Loading">Music</ImageLoaded>

<ImageLoaded condition="contains" name="technique_id=T1574.002,technique_name=DLL Side-Loading">Video</ImageLoaded>

<ImageLoaded condition="begin with" name="technique_id=T1574.002,technique_name=DLL Side-Loading">file:</ImageLoaded>

<ImageLoaded condition="contains" name="technique_id=T1574.002,technique_name=DLL Side-Loading">$Recycle.bin\</ImageLoaded>

<ImageLoaded condition="contains" name="technique_id=T1574.002,technique_name=DLL Side-Loading">\Windows\IME\</ImageLoaded>


-<Rule groupRelation="and">

<OriginalFileName condition="is">urlmon.dll</OriginalFileName>

</Rule>

<ImageLoaded condition="end with" name="technique_id=T1047,technique_name=Windows Management Instrumentation">wmiutils.dll</ImageLoaded>

</ImageLoad>

</RuleGroup>

<!-- Event ID 7 == Image Loaded - Excludes -->



-<RuleGroup groupRelation="or">


-<ImageLoad onmatch="exclude">


-<Rule groupRelation="and">

<Image condition="is">C:\Windows\System32\cscript.exe</Image>

<OriginalFileName condition="is">scrobj.dll</OriginalFileName>

</Rule>


-<Rule groupRelation="and">

<Image condition="is">powershell.exe</Image>

<OriginalFileName condition="excludes all">mscoree.dll;mscoreei.dll;mscoreeis.dll;clr.dll;clrjit.dll</OriginalFileName>

</Rule>


-<Rule groupRelation="and">

<Image condition="end with" name="technique_id=T1137,technique_name=Office Application Startup">VSTOInstaller.exe</Image>

<ImageLoaded condition="begin with">C:\Windows\</ImageLoaded>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all"> C:\Users\;\AppData\Local\Microsoft\OneDrive;\FileCoAuth.exe</Image>

<ImageLoaded condition="contains all">C:\Users\;\AppData\Local\Microsoft\OneDrive\;\FileSyncTelemetryExtensions.dll</ImageLoaded>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all"> C:\Users\;\AppData\Local\Microsoft\OneDrive;\FileCoAuth.exe</Image>

<ImageLoaded condition="contains all">C:\Users\;\AppData\Local\Microsoft\OneDrive\;\FileCoAuthLib.dll</ImageLoaded>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all"> C:\Users\;\AppData\Local\Microsoft\OneDrive;\FileCoAuth.exe</Image>

<ImageLoaded condition="contains all">C:\Users\;\AppData\Local\Microsoft\OneDrive\;\OneDriveTelemetryStable.dll</ImageLoaded>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all"> C:\Users\;\AppData\Local\Microsoft\OneDrive;\FileCoAuth.exe</Image>

<ImageLoaded condition="contains all">C:\Users\;\AppData\Local\Microsoft\OneDrive\;\vcruntime140.dll</ImageLoaded>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all"> C:\Users\;\AppData\Local\Microsoft\OneDrive;\FileCoAuth.exe</Image>

<ImageLoaded condition="contains all">C:\Users\;\AppData\Local\Microsoft\OneDrive\;\UpdateRingSettings.dll</ImageLoaded>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all"> C:\Users\;\AppData\Local\Microsoft\OneDrive;\FileCoAuth.exe</Image>

<ImageLoaded condition="contains all">C:\Users\;\AppData\Local\Microsoft\OneDrive\;\LoggingPlatform.dll</ImageLoaded>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all"> C:\Users\;\AppData\Local\Microsoft\OneDrive;\FileCoAuth.exe</Image>

<ImageLoaded condition="contains all">C:\Users\;\AppData\Local\Microsoft\OneDrive\;\FileCoAuth.exe</ImageLoaded>

</Rule>


-<Rule groupRelation="and">

<Image condition="is">C:\Windows\System32\svchost.exe</Image>

<ImageLoaded condition="is">C:\Windows\System32\netapi32.dll</ImageLoaded>

</Rule>


-<Rule groupRelation="and">

<Image condition="is">C:\Windows\System32\svchost.exe</Image>

<ImageLoaded condition="is">C:\Windows\System32\msvcp110_win.dll</ImageLoaded>

</Rule>


-<Rule groupRelation="and">

<Image condition="is">C:\Windows\System32\svchost.exe</Image>

<ImageLoaded condition="is">C:\Windows\System32\dsreg.dll</ImageLoaded>

</Rule>


-<Rule groupRelation="and">

<Image condition="is">C:\Windows\System32\svchost.exe</Image>

<ImageLoaded condition="is">C:\Windows\System32\perfctrs.dll</ImageLoaded>

</Rule>

</ImageLoad>

</RuleGroup>

<!-- Event ID 8 == CreateRemoteThread - Excludes -->



-<RuleGroup groupRelation="or">

<!--Default to log all and exclude a few common processes-->



-<CreateRemoteThread onmatch="exclude">

<SourceImage condition="is">C:\Windows\System32\svchost.exe</SourceImage>

<SourceImage condition="is">C:\Windows\System32\wininit.exe</SourceImage>

<SourceImage condition="is">C:\Windows\System32\csrss.exe</SourceImage>

<SourceImage condition="is">C:\Windows\System32\services.exe</SourceImage>

<SourceImage condition="is">C:\Windows\System32\winlogon.exe</SourceImage>

<SourceImage condition="is">C:\Windows\System32\audiodg.exe</SourceImage>


-<Rule groupRelation="and">

<SourceImage condition="is">C:\Windows\System32\dwm.exe</SourceImage>

<TargetImage condition="is">C:\Windows\System32\csrss.exe</TargetImage>

</Rule>

<TargetImage condition="end with">Google\Chrome\Application\chrome.exe</TargetImage>

<SourceImage condition="is">C:\Windows\System32\wbem\WmiPrvSE.exe</SourceImage>

</CreateRemoteThread>

</RuleGroup>

<!-- Event ID 9 == RawAccessRead - Includes -->



-<RuleGroup groupRelation="or">

<RawAccessRead onmatch="include"/>

</RuleGroup>

<!-- Event ID 10 == ProcessAccess - Includes -->



-<RuleGroup groupRelation="or">


-<ProcessAccess onmatch="include">

<CallTrace condition="contains" name="technique_id=T1003,technique_name=Credential Dumping">dbghelp.dll</CallTrace>

<CallTrace condition="contains" name="technique_id=T1003,technique_name=Credential Dumping">dbgcore.dll</CallTrace>

<TargetImage condition="contains">Desktop</TargetImage>


-<Rule groupRelation="and">

<TargetImage condition="is" name="technique_id=T1003,technique_name=Credential Dumping">C:\Windows\system32\csrss.exe</TargetImage>

<GrantedAccess>0x1F1FFF</GrantedAccess>

</Rule>


-<Rule groupRelation="and">

<TargetImage condition="is" name="technique_id=T1003,technique_name=Credential Dumping">C:\Windows\system32\wininit.exe</TargetImage>

<GrantedAccess>0x1F1FFF</GrantedAccess>

</Rule>


-<Rule groupRelation="and">

<TargetImage condition="is" name="technique_id=T1003,technique_name=Credential Dumping">C:\Windows\system32\winlogon.exe</TargetImage>

<GrantedAccess>0x1F1FFF</GrantedAccess>

</Rule>


-<Rule groupRelation="and">

<TargetImage condition="is" name="technique_id=T1003,technique_name=Credential Dumping">C:\Windows\system32\services.exe</TargetImage>

<GrantedAccess>0x1F1FFF</GrantedAccess>

</Rule>

<GrantedAccess name="technique_id=T1055.012,technique_name=Process Hollowing">0x21410</GrantedAccess>


-<Rule groupRelation="and">

<TargetImage condition="is" name="technique_id=T1003,technique_name=Credential Dumping">C:\Windows\system32\lsass.exe</TargetImage>

<GrantedAccess>0x1FFFFF</GrantedAccess>

</Rule>


-<Rule groupRelation="and">

<TargetImage condition="is" name="technique_id=T1003,technique_name=Credential Dumping">C:\Windows\system32\lsass.exe</TargetImage>

<GrantedAccess>0x1F1FFF</GrantedAccess>

</Rule>


-<Rule groupRelation="and">

<TargetImage condition="is" name="technique_id=T1003,technique_name=Credential Dumping">C:\Windows\system32\lsass.exe</TargetImage>

<GrantedAccess>0x1010</GrantedAccess>

</Rule>


-<Rule groupRelation="and">

<TargetImage condition="is" name="technique_id=T1003,technique_name=Credential Dumping">C:\Windows\system32\lsass.exe</TargetImage>

<GrantedAccess>0x143A</GrantedAccess>

</Rule>


-<Rule groupRelation="and">

<TargetImage condition="image" name="technique_id=T1003,technique_name=Credential Dumping">lsass.exe</TargetImage>

<SourceImage condition="image" name="technique_id=T1003,technique_name=Credential Dumping">wsmprovhost.exe</SourceImage>

</Rule>


-<Rule groupRelation="and" name="technique_id=T1055,technique_name=Process Injection">

<SourceImage condition="contains all">C:\Program Files;\Microsoft Office\Root\Office</SourceImage>

<CallTrace condition="contains">\Microsoft Shared\VBA</CallTrace>

</Rule>


-<Rule groupRelation="and">

<CallTrace condition="contains all" name="technique_id=T1055.001,technique_name=Dynamic-link Library Injection">C:\Windows\SYSTEM32\ntdll.dll;C:\Windows\System32\kernelbase.dll;UNKNOWN</CallTrace>

<GrantedAccess condition="contains any" name="technique_id=T1055.001,technique_name=Dynamic-link Library Injection">0x1F0FFF;0x1F1FFF;0x143A;0x1410;0x1010;0x1F2FFF;0x1F3FFF;0x1FFFFF;0x147A</GrantedAccess>

</Rule>

<GrantedAccess name="technique_id=T1055.012,technique_name=Process Hollowing">0x0800</GrantedAccess>

<GrantedAccess name="technique_id=T1003,technique_name=Credential Dumping">0x0810</GrantedAccess>

<GrantedAccess name="technique_id=T1055,technique_name=Process Injection">0x0820</GrantedAccess>

<GrantedAccess name="technique_id=T1055.012,technique_name=Process Hollowing">0x800</GrantedAccess>

<GrantedAccess name="technique_id=T1003,technique_name=Credential Dumping">0x810</GrantedAccess>

<GrantedAccess name="technique_id=T1055,technique_name=Process Injection">0x820</GrantedAccess>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\PerfLogs\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\$Recycle.bin\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Intel\Logs\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Users\Default\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Users\Public\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Users\NetworkService\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Fonts\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Debug\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Media\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\Help\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\addins\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\repair\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\security\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1036,technique_name=Masquerading">C:\Windows\system32\config\systemprofile\</SourceImage>

<SourceImage condition="contains" name="technique_id=T1036,technique_name=Masquerading">VolumeShadowCopy</SourceImage>

<SourceImage condition="contains" name="technique_id=T1036,technique_name=Masquerading">\htdocs\</SourceImage>

<SourceImage condition="contains" name="technique_id=T1036,technique_name=Masquerading">\wwwroot\</SourceImage>

<SourceImage condition="contains" name="technique_id=T1036,technique_name=Masquerading">\Temp\</SourceImage>


-<Rule groupRelation="and">

<SourceImage condition="contains" name="technique_id=T1036,technique_name=Masquerading">\AppData\</SourceImage>

<SourceImage condition="not end with">\AppData\Local\Microsoft\Teams\current\Teams.exe</SourceImage>

</Rule>


-<Rule groupRelation="and">

<CallTrace condition="contains" name="technique_id=T1059.001,technique_name=PowerShell">System.Management.Automation.ni.dll</CallTrace>

<SourceImage condition="is not">C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe</SourceImage>

</Rule>


-<Rule groupRelation="and">

<CallTrace condition="not begin with" name="technique_id=T1055,technique_name=Process Injection">C:\Windows\SYSTEM32\ntdll.dll</CallTrace>

<CallTrace condition="not begin with" name="technique_id=T1055,technique_name=Process Injection">C:\Windows\SYSTEM32\win32u.dll</CallTrace>

<CallTrace condition="not begin with" name="technique_id=T1055,technique_name=Process Injection">C:\Windows\SYSTEM32\wow64win.dll</CallTrace>

</Rule>

</ProcessAccess>

</RuleGroup>

<!-- Event ID 10 == ProcessAccess - Excludes -->



-<RuleGroup groupRelation="or">


-<ProcessAccess onmatch="exclude">

<SourceImage condition="is">C:\Program Files\Adobe\Adobe Creative Cloud Experience\libs\node.exe</SourceImage>

<SourceImage condition="contains all">C:\Program Files;\Common Files\Adobe\AdobeGCClient\AGMService.exe</SourceImage>

<SourceImage condition="is">C:\Program Files (x86)\Adobe\Acrobat DC\Acrobat\Acrobat.exe</SourceImage>

<SourceImage condition="is">C:\Program Files (x86)\Adobe\Acrobat DC\Acrobat\AcroCEF\AcroCEF.exe</SourceImage>

<SourceImage condition="is">C:\Program Files (x86)\Common Files\Adobe\ARM\1.0\AdobeARMHelper.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\Adobe\Adobe Photoshop 2021\Photoshop.exe</SourceImage>

<TargetImage condition="begin with">C:\Program Files\Autodesk\Autodesk Desktop App</TargetImage>

<TargetImage condition="begin with">C:\Program Files (x86)\Autodesk\Autodesk Desktop App</TargetImage>


-<Rule groupRelation="and">

<SourceImage condition="is">C:\Program Files\Microsoft Monitoring Agent\Agent\MonitoringHost.exe</SourceImage>

<TargetImage condition="is">C:\Windows\system32\cscript.exe</TargetImage>

</Rule>

<SourceImage condition="contains all">C:\WindowsAzure\GuestAgent_;CollectGuestLogs.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\Microsoft Monitoring Agent\Agent\HealthService.exe</SourceImage>

<SourceImage condition="is">C:\Windows\CarbonBlack\cb.exe</SourceImage>


-<Rule groupRelation="and" name="Exclude Chrome SW Reporter into Reporter">

<SourceImage condition="image">software_reporter_tool.exe</SourceImage>

<TargetImage condition="image">software_reporter_tool.exe</TargetImage>

<GrantedAccess condition="is">0x1410</GrantedAccess>

</Rule>


-<Rule groupRelation="and" name="Exclude Chrome SW Reporter into Chrome">

<SourceImage condition="image">software_reporter_tool.exe</SourceImage>

<TargetImage condition="image">chrome.exe</TargetImage>

<GrantedAccess condition="is">0x1410</GrantedAccess>

</Rule>


-<Rule groupRelation="and" name="Exclude Chrome SW Reporter Accessing Anything">

<SourceImage condition="image">software_reporter_tool.exe</SourceImage>

<GrantedAccess condition="is">0x1410</GrantedAccess>

</Rule>

<SourceImage condition="contains all">C:\Program Files\Cisco\AMP\;sfc.exe</SourceImage>

<SourceImage condition="contains all">C:\Users\;\AppData\Local\Citrix\ICA Client\receiver\Receiver.exe</SourceImage>

<SourceImage condition="is">C:\Program Files (x86)\Citrix\ICA Client\Receiver\Receiver.exe</SourceImage>

<SourceImage condition="is">c:\Program Files\Couchbase\Server\bin\sigar_port.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\Windows Defender Advanced Threat Protection\MsSense.exe</SourceImage>

<SourceImage condition="contains all">C:\ProgramData\Microsoft\Windows Defender Advanced Threat Protection\DataCollection\;\OpenHandleCollector.exe</SourceImage>

<SourceImage condition="contains all">C:\Program Files\Elastic\Agent\data\;\metricbeat.exe</SourceImage>

<SourceImage condition="contains all">C:\Program Files;\FireEye\xagt\xagt.exe</SourceImage>

<SourceImage condition="is">C:\Program Files (x86)\Ivanti\Workspace Control\cpushld.exe</SourceImage>

<SourceImage condition="is">C:\Program Files (x86)\RES Software\Workspace Manager\cpushld.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\Ivanti\Workspace Control\cpushld.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\RES Software\Workspace Manager\cpushld.exe</SourceImage>

<SourceImage condition="end with">wmiprvse.exe</SourceImage>

<SourceImage condition="end with">GoogleUpdate.exe</SourceImage>

<SourceImage condition="end with">LTSVC.exe</SourceImage>

<SourceImage condition="end with">taskmgr.exe</SourceImage>

<SourceImage condition="end with">VBoxService.exe</SourceImage>

<SourceImage condition="end with">vmtoolsd.exe</SourceImage>

<SourceImage condition="end with">\Citrix\System32\wfshell.exe</SourceImage>

<SourceImage condition="is">C:\Windows\System32\lsm.exe</SourceImage>

<SourceImage condition="end with">Microsoft.Identity.AadConnect.Health.AadSync.Host.exe</SourceImage>

<SourceImage condition="begin with">C:\Program Files (x86)\Symantec\Symantec Endpoint Protection</SourceImage>

<GrantedAccess>0x1000</GrantedAccess>

<GrantedAccess>0x1400</GrantedAccess>

<GrantedAccess>0x101400</GrantedAccess>

<GrantedAccess>0x101000</GrantedAccess>

<SourceImage condition="is">C:\Program Files\McAfee\Endpoint Security\Endpoint Security Platform\mfeesp.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\McAfee\Agent\x86\macompatsvc.exe</SourceImage>

<SourceImage condition="contains all">C:\Users\;\AppData\Local\Microsoft\OneDrive\StandaloneUpdater\OneDriveSetup.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\Microsoft Office\root\Office16\OUTLOOK.EXE</SourceImage>

<SourceImage condition="is">C:\Program Files\PowerToys\modules\KeyboardManager\KeyboardManagerEngine\PowerToys.KeyboardManagerEngine.exe</SourceImage>


-<Rule groupRelation="and">

<SourceImage condition="contains all">C:\Users\;\AppData\Local\Microsoft\Teams\current\Teams.exe</SourceImage>

<TargetImage condition="contains all">C:\Users\;\AppData\Local\Microsoft\Teams\current\Teams.exe</TargetImage>

</Rule>

<SourceImage condition="is">C:\Program Files\Microsoft Security Client\MsMpEng.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\Windows Defender\MsMpEng.exe</SourceImage>

<SourceImage condition="contains all">C:\ProgramData\Microsoft\Windows Defender\Platform\;\MsMpEng.exe</SourceImage>

<SourceImage condition="is">C:\Program Files (x86)\Mobatek\MobaXterm\MobaXterm.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\Palo Alto Networks\Traps\cyserver.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\Qualys\QualysAgent\QualysAgent.exe</SourceImage>

<SourceImage condition="is">C:\Program Files (x86)\Razer Chroma SDK\bin\RzSDKService.exe</SourceImage>

<SourceImage condition="is">C:\WINDOWS\CCM\CcmExec.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\Splunk\bin\splunkd.exe</SourceImage>


-<Rule groupRelation="and">

<SourceImage condition="is">C:\Program Files\Microsoft VS Code\Code.exe</SourceImage>

<TargetImage condition="is">C:\Program Files\Microsoft VS Code\Code.exe</TargetImage>

<GrantedAccess condition="is">0x100000</GrantedAccess>

</Rule>


-<Rule groupRelation="and">

<SourceImage condition="is">C:\Program Files\Microsoft VS Code\Code.exe</SourceImage>

<TargetImage condition="is">C:\Program Files\Microsoft VS Code\Code.exe</TargetImage>

<GrantedAccess condition="is">0x1401</GrantedAccess>

</Rule>


-<Rule groupRelation="and">

<SourceImage condition="contains all">C:\Users\;\AppData\Local\Programs\Microsoft VS Code\Code.exe</SourceImage>

<TargetImage condition="contains all">C:\Users\;\AppData\Local\Programs\Microsoft VS Code\Code.exe</TargetImage>

<GrantedAccess condition="is">0x1401</GrantedAccess>

</Rule>

<SourceImage condition="is">C:\Program Files (x86)\VMware\VMWare Player\vmware-authd.exe</SourceImage>

<SourceImage condition="is">C:\Program Files (x86)\VMware\VMware Workstation\vmware-authd.exe</SourceImage>

<SourceImage condition="is">C:\Program Files\WinZip\FAHWindow64.exe</SourceImage>

</ProcessAccess>

</RuleGroup>

<!-- Event ID 11 == FileCreate - Includes -->



-<RuleGroup groupRelation="or">


-<FileCreate onmatch="include">

<TargetFilename condition="contains" name="technique_id=T1546.011,technique_name=Application Shimming">C:\Windows\AppPatch\Custom</TargetFilename>

<TargetFilename condition="end with">.bat</TargetFilename>

<TargetFilename condition="end with">.cmd</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1059,technique_name=Command and Scripting Interpreter">.chm</TargetFilename>

<TargetFilename condition="contains all">C:\Users\;\.azure\accesstokens.json</TargetFilename>

<TargetFilename condition="contains all">C:\Users\;\.aws\credentials</TargetFilename>

<TargetFilename condition="contains all">C:\Users\;\config\gcloud</TargetFilename>

<TargetFilename condition="contains all">C:\Users\;\.alibabacloud\credentials</TargetFilename>

<TargetFilename condition="contains all">C:\Users\;\.kube\config</TargetFilename>

<TargetFilename condition="contains all">C:\Users\;\.ssh\</TargetFilename>


-<Rule groupRelation="and">

<Image condition="end with">\WINWORD.EXE</Image>

<TargetFilename condition="contains any">.cab;.inf</TargetFilename>

</Rule>

<TargetFilename condition="begin with">C:\Users\Default</TargetFilename>

<TargetFilename condition="contains">Desktop</TargetFilename>

<TargetFilename condition="contains" name="technique_id=T1218,technique_name=Office Signed Binary Proxy Execution">AppData\Local\Microsoft\CLR_v2.0\UsageLogs\</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1218,technique_name=Office Signed Binary Proxy Execution">\UsageLogs\cscript.exe.log</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1218,technique_name=Office Signed Binary Proxy Execution">\UsageLogs\wscript.exe.log</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1218,technique_name=Office Signed Binary Proxy Execution">\UsageLogs\wmic.exe.log</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1218,technique_name=Office Signed Binary Proxy Execution">\UsageLogs\mshta.exe.log</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1218,technique_name=Office Signed Binary Proxy Execution">\UsageLogs\svchost.exe.log</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1218,technique_name=Office Signed Binary Proxy Execution">\UsageLogs\regsvr32.exe.log</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1218,technique_name=Office Signed Binary Proxy Execution">\UsageLogs\rundll32.exe.log</TargetFilename>

<TargetFilename condition="contains">\Downloads\</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\System32\Drivers</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\SysWOW64\Drivers</TargetFilename>


-<Rule groupRelation="and">

<TargetFilename condition="end with">.js</TargetFilename>

<TargetFilename condition="contains">Appdata\Local\whatsapp\</TargetFilename>

<Image condition="excludes">Appdata\Local\whatsapp\</Image>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="end with">.js</TargetFilename>

<TargetFilename condition="contains">Appdata\Local\Microsoft\Teams\</TargetFilename>

<Image condition="excludes">Appdata\Local\Microsoft\Teams\</Image>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="end with">.js</TargetFilename>

<TargetFilename condition="contains">Appdata\Local\slack\</TargetFilename>

<Image condition="excludes">Appdata\Local\slack\</Image>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="end with">.js</TargetFilename>

<TargetFilename condition="contains">Appdata\Local\discord\</TargetFilename>

<Image condition="excludes">Appdata\Local\discord\</Image>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="end with">.js</TargetFilename>

<TargetFilename condition="contains">Appdata\Local\signal\</TargetFilename>

<Image condition="excludes">Appdata\Local\signal\</Image>

</Rule>

<TargetFilename condition="end with">.exe</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\System32\GroupPolicy\Machine\Scripts</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\System32\GroupPolicy\User\Scripts</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1218.005,technique_name=Mshta">.hta</TargetFilename>

<TargetFilename condition="end with">.iso</TargetFilename>

<TargetFilename condition="end with">.img</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1059.007,technique_name=JavaScript">.js</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1059.007,technique_name=JavaScript">.javascript</TargetFilename>

<TargetFilename condition="end with">.kirbi</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1187,technique_name=Forced Authentication">.lnk</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1187,technique_name=Forced Authentication">.scf</TargetFilename>

<TargetFilename condition="end with">.application</TargetFilename>

<TargetFilename condition="end with">.appref-ms</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">.*proj</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">.sln</TargetFilename>

<TargetFilename condition="end with">.settingcontent-ms</TargetFilename>

<TargetFilename condition="end with">.docm</TargetFilename>

<TargetFilename condition="end with">.pptm</TargetFilename>

<TargetFilename condition="end with">.xlsm</TargetFilename>

<TargetFilename condition="end with">.xlm</TargetFilename>

<TargetFilename condition="end with">.dotm</TargetFilename>

<TargetFilename condition="end with">.xltm</TargetFilename>

<TargetFilename condition="end with">.potm</TargetFilename>

<TargetFilename condition="end with">.ppsm</TargetFilename>

<TargetFilename condition="end with">.sldm</TargetFilename>

<TargetFilename condition="end with">.xlam</TargetFilename>

<TargetFilename condition="end with">.xla</TargetFilename>

<TargetFilename condition="end with">.iqy</TargetFilename>

<TargetFilename condition="end with">.slk</TargetFilename>

<TargetFilename condition="contains">\Content.Outlook\</TargetFilename>

<TargetFilename condition="contains">Roaming\Microsoft\Outlook\VbaProject.OTM</TargetFilename>

<TargetFilename condition="end with">.rwz</TargetFilename>

<TargetFilename condition="contains">Roaming\Microsoft\Outlook\Outlook.xml</TargetFilename>

<TargetFilename condition="end with">.rft</TargetFilename>

<TargetFilename condition="end with">.jsp</TargetFilename>

<TargetFilename condition="end with">.jspx</TargetFilename>

<TargetFilename condition="end with">.asp</TargetFilename>

<TargetFilename condition="end with">.aspx</TargetFilename>

<TargetFilename condition="end with">.php</TargetFilename>

<TargetFilename condition="end with">.war</TargetFilename>

<TargetFilename condition="end with">.ace</TargetFilename>

<TargetFilename condition="begin with" name="technique_id=T1059.001,technique_name=PowerShell">C:\Windows\System32\WindowsPowerShell</TargetFilename>

<TargetFilename condition="begin with" name="technique_id=T1059.001,technique_name=PowerShell">C:\Windows\SysWOW64\WindowsPowerShell</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1059.001,technique_name=PowerShell">.ps1</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1059.001,technique_name=PowerShell">.ps2</TargetFilename>

<TargetFilename condition="end with">.py</TargetFilename>

<TargetFilename condition="end with">.pyc</TargetFilename>

<TargetFilename condition="end with">.pyw</TargetFilename>

<TargetFilename condition="end with">.rdp</TargetFilename>

<Image condition="image">rundll32.exe</Image>

<TargetFilename condition="begin with">C:\Windows\System32\Tasks</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\Tasks\</TargetFilename>

<TargetFilename condition="contains">\Start Menu</TargetFilename>

<TargetFilename condition="contains">\Startup</TargetFilename>

<TargetFilename condition="begin with" name="technique_id=T1574.010,technique_name=Services File Permissions Weakness">C:\Windows\SysWoW64</TargetFilename>

<TargetFilename condition="begin with" name="technique_id=T1574.010,technique_name=Services File Permissions Weakness">C:\Windows\System32</TargetFilename>

<TargetFilename condition="begin with" name="technique_id=T1574.010,technique_name=Services File Permissions Weakness">C:\Windows\</TargetFilename>

<TargetFilename condition="end with">.sys</TargetFilename>


-<Rule groupRelation="and" name="technique_id=T1003.001,technique_name=OS Credential Dumping: LSASS Memory">

<TargetFilename condition="contains">lsass</TargetFilename>

<TargetFilename condition="contains any">dmp;DMP</TargetFilename>

<Image condition="image">taskmgr.exe</Image>

</Rule>

<TargetFilename condition="end with">.url</TargetFilename>

<TargetFilename condition="end with">.vb</TargetFilename>

<TargetFilename condition="end with">.vbe</TargetFilename>

<TargetFilename condition="end with">.vbs</TargetFilename>


-<Rule groupRelation="and">

<TargetFilename condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify tools">C:\Windows\System32\CodeIntegrity\CIPolicies\Active\</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1562.001,technique_name=Disable or Modify tools">.cip</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify tools">C:\Windows\System32\CodeIntegrity\</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1562.001,technique_name=Disable or Modify tools">.p7b</TargetFilename>

</Rule>

<TargetFilename condition="begin with" name="technique_id=T1047,technique_name=Windows Management Instrumentation">C:\Windows\System32\Wbem</TargetFilename>

<TargetFilename condition="begin with" name="technique_id=T1047,technique_name=Windows Management Instrumentation">C:\Windows\SysWOW64\Wbem</TargetFilename>

<Image condition="begin with" name="technique_id=T1047,technique_name=Windows Management Instrumentation">C:\WINDOWS\system32\wbem\scrcons.exe</Image>

<TargetFilename condition="begin with" name="technique_id=T1546.008,technique_name=Services File Permissions Weakness">C:\Windows\Temp\</TargetFilename>

<TargetFilename condition="begin with" name="technique_id=T1546.008,technique_name=Services File Permissions Weakness">C:\Program\</TargetFilename>

<TargetFilename condition="begin with" name="technique_id=T1047,technique_name=File System Permissions Weakness">C:\Temp\</TargetFilename>

<TargetFilename condition="begin with" name="technique_id=T1047,technique_name=File System Permissions Weakness">C:\PerfLogs\</TargetFilename>

<TargetFilename condition="begin with" name="technique_id=T1047,technique_name=File System Permissions Weakness">C:\Users\Public\</TargetFilename>

<TargetFilename condition="contains" name="technique_id=T1047,technique_name=File System Permissions Weakness">\AppData\Temp\</TargetFilename>

</FileCreate>

</RuleGroup>

<!-- Event ID 11 == FileCreate - Excludes -->



-<RuleGroup groupRelation="or">


-<FileCreate onmatch="exclude">

<Image condition="is">C:\Program Files (x86)\Dell\CommandUpdate\InvColPC.exe</Image>


-<Rule groupRelation="and">

<Image condition="is">C:\Program Files\Elastic\Endpoint\elastic-endpoint.exe</Image>

<TargetFilename condition="is">C:\Program Files\Elastic\Endpoint\state\last-document-id.json</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<Image condition="begin with">C:\Program Files\Elastic\Agent\data\</Image>

<TargetFilename condition="contains all">C:\Program Files\Elastic\Agent\data\;.ndjson</TargetFilename>

</Rule>

<Image condition="is">C:\Windows\system32\igfxCUIService.exe</Image>

<Image condition="is">C:\Program Files (x86)\Ivanti\Workspace Control\pfwsmgr.exe</Image>

<Image condition="is">C:\Program Files (x86)\RES Software\Workspace Manager\pfwsmgr.exe</Image>

<Image condition="is">C:\Program Files\Common Files\Microsoft Shared\ClickToRun\OfficeC2RClient.exe</Image>

<TargetFilename condition="contains all">C:\Windows\Prefetch;.pf</TargetFilename>

<Image condition="is">C:\Windows\System32\smss.exe</Image>

<Image condition="is">C:\Windows\system32\CompatTelRunner.exe</Image>

<Image condition="is">C:\Windows\system32\wbem\WMIADAP.EXE</Image>

<TargetFilename condition="begin with">C:\Windows\System32\DriverStore\Temp\</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\System32\wbem\Performance\</TargetFilename>

<TargetFilename condition="end with">WRITABLE.TST</TargetFilename>

<TargetFilename condition="contains">\AppData\Roaming\Microsoft\Windows\Recent\</TargetFilename>

<TargetFilename condition="begin with">C:\$WINDOWS.~BT\Sources\SafeOS\SafeOS.Mount\</TargetFilename>

<Image condition="begin with">C:\WINDOWS\winsxs\amd64_microsoft-windows</Image>

<Image condition="is">c:\Program Files\Microsoft Security Client\MsMpEng.exe</Image>


-<Rule groupRelation="and">

<Image condition="image">Outlook.exe</Image>

<TargetFilename condition="contains">Roaming\Microsoft\Outlook\Outlook.xml</TargetFilename>

</Rule>

<Image condition="is">c:\windows\system32\provtool.exe</Image>


-<Rule groupRelation="and">

<Image condition="is">C:\Windows\system32\wsmprovhost.exe</Image>

<TargetFilename condition="contains all">C:\Users\;\AppData\Local\Temp;__PSScriptPolicyTest;.ps1</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<Image condition="is">C:\Windows\system32\WindowsPowerShell\v1.0\powershell.exe</Image>

<TargetFilename condition="contains all">C:\Windows\Temp;__PSScriptPolicyTest;.ps1</TargetFilename>

<User condition="is">NT AUTHORITY\SYSTEM</User>

</Rule>

<Image condition="is">C:\WINDOWS\CCM\CcmExec.exe</Image>

<TargetFilename condition="begin with">C:\Windows\CCM</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\System32\Tasks\Microsoft\Windows\PLA\FabricTraces</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\System32\Tasks\Microsoft\Windows\SoftwareProtectionPlatform\SvcRestartTask</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\System32\Tasks\Microsoft\Windows\Customer Experience Improvement Program\Server\ServerRoleUsageCollector</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\System32\Tasks\Microsoft\Windows\Customer Experience Improvement Program\Server\ServerCeipAssistant</TargetFilename>


-<Rule groupRelation="and">

<Image condition="is">C:\Windows\System32\svchost.exe</Image>

<TargetFilename condition="is">C:\Windows\ServiceProfiles\LocalService\AppData\Local\lastalive0.dat</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<Image condition="is">C:\Windows\System32\svchost.exe</Image>

<TargetFilename condition="is">C:\Windows\ServiceProfiles\LocalService\AppData\Local\lastalive1.dat</TargetFilename>

</Rule>

</FileCreate>

</RuleGroup>

<!-- Event ID 12,13,14 == RegObject added/deleted, RegValue Set, RegObject Renamed - Includes -->



-<RuleGroup groupRelation="or">


-<RegistryEvent onmatch="include">

<TargetObject condition="contains" name="technique_id=T1546.011,technique_name=Application Shimming">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\InstalledSDB</TargetObject>

<TargetObject condition="contains" name="technique_id=T1546.011,technique_name=Application Shimming">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Custom</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.002,technique_name=Authentication Package">HKLM\SYSTEM\CurrentControlSet\Control\Lsa\Authentication</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.002,technique_name=Authentication Package">HKLM\SYSTEM\CurrentControlSet\Control\Lsa\RunAsPPL</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.002,technique_name=Authentication Package">HKLM\SYSTEM\CurrentControlSet\Control\Lsa\NtlmMinClientSec</TargetObject>

<TargetObject condition="contains" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">\CurrentVersion\Run</TargetObject>

<TargetObject condition="contains">\Group Policy\Scripts</TargetObject>

<TargetObject condition="contains" name="technique_id=T1037,technique_name=Boot or Logon Initialization Scripts">\Windows\System\Scripts</TargetObject>

<TargetObject condition="contains" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">\Policies\Explorer\Run</TargetObject>

<TargetObject condition="end with">\ServiceDll</TargetObject>

<TargetObject condition="end with">\ImagePath</TargetObject>

<TargetObject condition="end with">\Start</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.004,technique_name=Winlogon Helper DLL">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.004,technique_name=Winlogon Helper DLL">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Userinit</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.004,technique_name=Winlogon Helper DLL">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Shell</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.004,technique_name=Winlogon Helper DLL">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\VmApplet</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.004,technique_name=Winlogon Helper DLL">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Specialaccounts\userlist</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.004,technique_name=Winlogon Helper DLL">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Uihostl</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\WOW6432Node\Microsoft\Windows NT\CurrentVersion\Drivers32</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Drivers32</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">HKLM\SYSTEM\;Control\Session Manager\BootExecute</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">HKLM\SYSTEM\;Control\Session Manager\excludefromknowndlls</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">HKLM\SYSTEM\;Control\Session Manager\safedllsearchmode</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">HKLM\SYSTEM\;Control\Session Manager\setupexecute</TargetObject>

<TargetObject condition="contains" name="technique_id=T1546.001,technique_name=Change Default File Association">\Explorer\FileExts</TargetObject>

<TargetObject condition="contains">\shell\install\command</TargetObject>

<TargetObject condition="contains">\shell\open\command</TargetObject>

<TargetObject condition="contains">\shell\open\ddeexec</TargetObject>

<TargetObject condition="contains" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders\Startup</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">software\microsoft\windows nt\currentversion\accessibility\ATs\;\StartExe</TargetObject>

<TargetObject condition="contains" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">software\microsoft\windows nt\currentversion\windows\run\</TargetObject>

<TargetObject condition="contains" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU\</TargetObject>

<TargetObject condition="contains" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">software\microsoft\windows\currentversion\explorer\shell folders\common startup</TargetObject>

<TargetObject condition="contains" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">software\microsoft\windows\currentversion\explorer\shell folders\startup</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">hklm\software\microsoft\command processor\autorun</TargetObject>

<TargetObject condition="contains" name="technique_id=T1548.002,technique_name=Bypass User Access Control">\mscfile\shell\open\command</TargetObject>

<TargetObject condition="contains" name="technique_id=T1548.002,technique_name=Bypass User Access Control">ms-settings\shell\open\command</TargetObject>

<TargetObject condition="contains" name="technique_id=T1548.002,technique_name=Bypass User Access Control">Classes\exefile\shell\runas\command\isolatedCommand</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1546.015,technique_name=Component Object Model Hijacking">Software\Classes\CLSID;inprocserver32</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1546.015,technique_name=Component Object Model Hijacking">Software\Classes\CLSID;localserver32</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1546.015,technique_name=Component Object Model Hijacking">Classes\CLSID\;TreatAs</TargetObject>

<TargetObject condition="contains" name="technique_id=T1003.002,technique_name=Security Account Manager">System\CurrentControlSet\Services\VSS</TargetObject>

<TargetObject condition="contains" name="technique_id=T1098,technique_name=Account Manipulation">\services\Netlogon\Parameters\DisablePasswordChange</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1546.010,technique_name=Appinit DLLs">HKLM\SOFTWARE\;Microsoft\Windows NT\CurrentVersion\Windows\Appinit_Dlls</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1546.010,technique_name=Appinit DLLs">HKLM\SOFTWARE\;Microsoft\Windows NT\CurrentVersion\Windows\loadappinit_dlls</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1546.010,technique_name=Appinit DLLs">\SYSTEM\;\Services\DNS\Parameters\ServerLevelPluginDll</TargetObject>

<TargetObject condition="end with" name="technique_id=T1562.006,technique_name=Impair Defenses - Indicator Blocking">SOFTWARE\Microsoft\.NETFramework\ETWEnabled</TargetObject>

<TargetObject condition="contains" name="technique_id=T1546.008,technique_name=Accessibility Features">\Environment\</TargetObject>

<TargetObject condition="begin with">HKLM\SYSTEM\setup\cmdline</TargetObject>

<TargetObject condition="begin with">HKLM\SYSTEM\setup\upgrade</TargetObject>

<TargetObject condition="contains all">Software\microsoft\ctf\langbaraddin\;\Enable</TargetObject>

<TargetObject condition="contains all">Software\microsoft\ctf\langbaraddin\;\FilePath</TargetObject>

<TargetObject condition="contains">Software\policies\microsoft\windows\control panel\desktop\scrnsave.exe</TargetObject>

<TargetObject condition="begin with">HKLM\Software\Classes\protocols\filter\</TargetObject>

<TargetObject condition="begin with">HKLM\Software\Classes\protocols\handler\</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1562.002,technique_name=Disable Windows Event Logging">\SYSTEM\;\Service\EventLog;Retention</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1562.002,technique_name=Disable Windows Event Logging">\SYSTEM\;\Service\EventLog;MaxSize</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\GPExtensions</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1546.012,technique_name=Image File Execution Options Injection">HKLM\Software\Microsoft\Windows NT\CurrentVersion\Image File Execution Options</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1546.012,technique_name=Image File Execution Options Injection">HKLM\SOFTWARE\Wow6432Node\Microsoft\Windows NT\CurrentVersion\Image File Execution Options</TargetObject>

<TargetObject condition="contains">\Internet Explorer\Toolbar</TargetObject>

<TargetObject condition="contains">\Internet Explorer\Extensions</TargetObject>

<TargetObject condition="contains">\Browser Helper Objects</TargetObject>

<TargetObject condition="contains">\software\microsoft\internet explorer\desktop\components\Source</TargetObject>

<TargetObject condition="contains">\software\microsoft\internet explorer\explorer bars\</TargetObject>

<TargetObject condition="contains">\software\microsoft\internet explorer\Styles\MaxScriptStatements</TargetObject>

<TargetObject condition="contains">\software\microsoft\internet explorer\toolbar\WebBrowser\ITBarLayout</TargetObject>

<TargetObject condition="contains">\software\wow6432node\microsoft\internet explorer\toolbar\WebBrowser\ITBarLayout</TargetObject>

<TargetObject condition="contains">\software\microsoft\internet explorer\urlsearchhooks\</TargetObject>

<TargetObject condition="contains">HKLM\software\wow6432node\microsoft\internet explorer\urlsearchhooks\</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.010,technique_name=Port Monitors">HKLM\SYSTEM\CurrentControlSet\Control\Print\Monitors</TargetObject>

<TargetObject condition="begin with">hklm\system\mounteddevices\</TargetObject>

<TargetObject condition="contains all">hklm\system\;\enum\usb\</TargetObject>

<TargetObject condition="contains" name="technique_id=T1546.007,technique_name=Netsh Helper DLL">SOFTWARE\Microsoft\Netsh</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1137.006,technique_name=Office Add-ins">\Microsoft\Office;\Outlook\Addins</TargetObject>

<TargetObject condition="contains" name="technique_id=T1137.006,technique_name=Office Add-ins">\Software\Microsoft\VSTO\Security\Inclusion</TargetObject>

<TargetObject condition="contains" name="technique_id=T1137.006,technique_name=Office Add-ins">\Software\Microsoft\VSTO\SolutionMetadata</TargetObject>

<TargetObject condition="contains" name="technique_name=Outlook Server 95/98 Identity Keys">Identities</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\Account Name</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\Display Name</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\Email</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\HTTP Password</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\HTTP User</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\IMAP Password</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\IMAP User</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\MAPI Provider</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\POP3 Password</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\POP3 User</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\SMTP Password</TargetObject>

<TargetObject condition="contains all">SOFTWARE\Microsoft\Office\;\Outlook\Profiles\;\9375CFF0413111d3B88A00104B2A6676\;\SMTP User</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1137.004,technique_name=Outlook Home Page">software\microsoft\office\;\outlook\security\</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1137.004,technique_name=Outlook Home Page">software\microsoft\office\;\outlook\today\</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1137.004,technique_name=Outlook Home Page">software\microsoft\office\;\outlook\webview\;\</TargetObject>

<TargetObject condition="contains all">software\microsoft\office\;\word\options\globaldotname</TargetObject>

<TargetObject condition="contains all">software\microsoft\office\;\common\internet\server cache\</TargetObject>

<TargetObject condition="contains all">software\;microsoft\office\;\addins\</TargetObject>

<TargetObject condition="contains all">software\;microsoft\office\;\Common\COM Compatibility</TargetObject>

<TargetObject condition="contains">\Security\Trusted Documents\TrustRecords</TargetObject>

<TargetObject condition="contains">\Security\Trusted Documents\</TargetObject>

<TargetObject condition="end with">\UrlUpdateInfo</TargetObject>

<TargetObject condition="contains">software\microsoft\windows\currentversion\explorer\recentdocs\.docx\</TargetObject>

<TargetObject condition="contains">software\microsoft\windows\currentversion\explorer\recentdocs\.xlsx\</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Clients\Mail\Microsoft Outlook\DllPath</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Clients\Mail\Microsoft Outlook\DllPathEx</TargetObject>

<TargetObject condition="contains">software\microsoft\Office test\special\perf\</TargetObject>

<TargetObject condition="contains all">software\microsoft\office\;\Options\OPEN</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1137.006,technique_name=Office Add-ins">\Microsoft\Office;\PowerPoint\Addins</TargetObject>

<TargetObject condition="end with" name="T1559.002,office">\Word\Security\AllowDDE</TargetObject>

<TargetObject condition="end with" name="T1559.002,office">\Excel\Security\DisableDDEServerLaunch</TargetObject>

<TargetObject condition="end with" name="T1559.002,office">\Excel\Security\DisableDDEServerLookup</TargetObject>

<TargetObject condition="end with" name="T1562,office">\VBAWarnings</TargetObject>

<TargetObject condition="end with" name="T1562,office">\DisableInternetFilesInPV</TargetObject>

<TargetObject condition="end with" name="T1562,office">\DisableUnsafeLocationsInPV</TargetObject>

<TargetObject condition="end with" name="T1562,office">\DisableAttachementsInPV</TargetObject>

<TargetObject condition="is" name="technique_id=T1021.001,technique_name=Remote Desktop Protocol">HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services\MaxInstanceCount</TargetObject>

<TargetObject condition="is" name="technique_id=T1021.001,technique_name=Remote Desktop Protocol">HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services\RaunSolicit</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1112,technique_name=Modify Registry">HKLM\SYSTEM\CurrentControlSet\services\TermService\Parameters\ServiceDll</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1112,technique_name=Modify Registry">HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server\fSingleSessionPerUser</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1112,technique_name=Modify Registry">HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server\fDenyTSConnections</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1112,technique_name=Modify Registry">HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Terminal Services\Shadow</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1053,technique_name=Scheduled Task">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tasks;Actions</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1053,technique_name=Scheduled Task">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tree</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1053,technique_name=Scheduled Task">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SilentProcessExit\</TargetObject>

<TargetObject condition="contains" name="technique_id=T1547.005,technique_name=Security Support Provider">SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\LSASS.exe</TargetObject>

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1553.003,technique_name=SIP and Trust Provider Hijacking">HKLM\SOFTWARE\Microsoft\Cryptography\OID</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1553.003,technique_name=SIP and Trust Provider Hijacking">HKLM\SOFTWARE\WOW6432Node\Microsoft\Cryptography\OID</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1553.003,technique_name=SIP and Trust Provider Hijacking">HKLM\SOFTWARE\Microsoft\Cryptography\Providers\Trust</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1553.003,technique_name=SIP and Trust Provider Hijacking">HKLM\SOFTWARE\WOW6432Node\Microsoft\Cryptography\Providers\Trust</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1553.003,technique_name=SIP and Trust Provider Hijacking">HKLM\SOFTWARE\Microsoft\Cryptography\Offload\ExpoOffload</TargetObject>

<TargetObject condition="end with" name="technique_id=T1569.002,technique_name=Service Execution">\PsExec\EulaAccepted</TargetObject>

<TargetObject condition="end with" name="technique_id=T1105,technique_name=Ingress Tool Transfer">\PsFile\EulaAccepted</TargetObject>

<TargetObject condition="end with" name="technique_id=T1033,technique_name=System Owner/User Discovery">\PsGetSID\EulaAccepted</TargetObject>

<TargetObject condition="end with" name="technique_id=T1057,technique_name=Process Discovery">\PsInfo\EulaAccepted</TargetObject>

<TargetObject condition="end with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">\PsKill\EulaAccepted</TargetObject>

<TargetObject condition="end with" name="technique_id=T1057,technique_name=Process Discovery">\PsList\EulaAccepted</TargetObject>

<TargetObject condition="end with" name="technique_id=T1033,technique_name=System Owner/User Discovery">\PsLoggedOn\EulaAccepted</TargetObject>

<TargetObject condition="end with" name="technique_id=T1569.002,technique_name=Service Execution">\PsLogList\EulaAccepted</TargetObject>

<TargetObject condition="end with" name="technique_id=T1098,technique_name=Account Manipulation">\PsPasswd\EulaAccepted</TargetObject>

<TargetObject condition="end with" name="technique_id=T1569.002,technique_name=Service Execution">\PsService\EulaAccepted</TargetObject>

<TargetObject condition="end with" name="undefined">\PsShutDown\EulaAccepted</TargetObject>

<TargetObject condition="end with" name="undefined">\PsSuspend\EulaAccepted</TargetObject>

<TargetObject condition="contains" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">SYSTEM\CurrentControlSet\services\SysmonDrv</TargetObject>

<TargetObject condition="contains" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">SYSTEM\CurrentControlSet\services\Sysmon</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.001,technique_name=Registry Run Keys / Start Folder">HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp\InitialProgram</TargetObject>

<TargetObject condition="contains" name="technique_id=T1547.003,technique_name=Time Providers">HKLM\System\CurrentControlSet\Services\W32Time\TimeProviders</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1218,technique_name=Signed Binary Proxy Execution">HKLM\Software\Microsoft\WAB\DLLPath</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\Control.exe</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1546.009,technique_name=AppCert DLLs">HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\AppCertDlls</TargetObject>

<TargetObject condition="contains" name="technique_id=T1546.015,technique_name=Component Object Model Hijacking">software\classes\clsid\{083863f1-70de-11d0-bd40-00a0c911ce86}\instance</TargetObject>

<TargetObject condition="contains" name="technique_id=T1546.015,technique_name=Component Object Model Hijacking">software\classes\clsid\{7ed96837-96f0-4812-b211-f13c24117ed3}\instance</TargetObject>


-<Rule groupRelation="and">

<TargetObject condition="contains" name="technique_id=T1125,technique_name=Video Capture">\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\webcam</TargetObject>

<Image condition="excludes any">Google\Chrome\Application\chrome.exe;Zoom\bin\Zoom.exe;slack\slack.exe;Mozilla Firefox\firefox.exe</Image>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="contains" name="technique_id=T1123,technique_name=Audio Capture">\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\microphone</TargetObject>

<Image condition="excludes any">Google\Chrome\Application\chrome.exe;Zoom\bin\Zoom.exe;slack\slack.exe;Mozilla Firefox\firefox.exe</Image>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="contains" name="technique_id=T1123,technique_name=Audio Capture">\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\bluetooth</TargetObject>

<Image condition="excludes any">Google\Chrome\Application\chrome.exe;Zoom\bin\Zoom.exe;slack\slack.exe;Mozilla Firefox\firefox.exe</Image>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="contains" name="technique_id=T1005,technique_name=Data from Local System">\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\usb</TargetObject>

<Image condition="excludes any">Google\Chrome\Application\chrome.exe;Zoom\bin\Zoom.exe;slack\slack.exe;Mozilla Firefox\firefox.exe</Image>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="contains" name="technique_id=T1005,technique_name=Data from Local System">\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\location</TargetObject>

<Image condition="excludes any">Google\Chrome\Application\chrome.exe;Zoom\bin\Zoom.exe;slack\slack.exe;Mozilla Firefox\firefox.exe</Image>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="contains" name="technique_id=T1005,technique_name=Data from Local System">\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\contacts</TargetObject>

<Image condition="excludes any">Google\Chrome\Application\chrome.exe;Zoom\bin\Zoom.exe;slack\slack.exe;Mozilla Firefox\firefox.exe</Image>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="contains" name="technique_id=T1056.001,technique_name=Input Capture - Keylogging">\SOFTWARE\Microsoft\Windows\CurrentVersion\CapabilityAccessManager\ConsentStore\humanInterfaceDevice</TargetObject>

<Image condition="excludes any">Google\Chrome\Application\chrome.exe;Zoom\bin\Zoom.exe;slack\slack.exe;Mozilla Firefox\firefox.exe</Image>

</Rule>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\Credential Provider</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\Plap Providers</TargetObject>

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Control\Lsa</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1003,technique_name=Credential Dumping">HKLM\SYSTEM\CurrentControlSet\Control\SecurityProviders\</TargetObject>

<TargetObject condition="contains" name="technique_id=T1003,technique_name=Credential Dumping">\Control\SecurityProviders\WDigest</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Microsoft\Security Center\AntiVirusDisableNotify</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\DisableAntiSpyware</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\DisableAntiVirus</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection\DisableBehaviorMonitoring</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection\DisableOnAccessProtection</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection\DisableScanOnRealtimeEnable</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection\DisableIOAVProtection</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection\DisableRealtimeMonitoring</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows Defender\Spynet\SpyNetReporting</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows Defender</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\software\microsoft\microsoft antimalware\exclusions\</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\software\microsoft\Windows Advanced Threat Protection\TelLib</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\software\policies\microsoft\windows advanced threat protection\</TargetObject>


-<Rule groupRelation="and">

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\Sense</TargetObject>

<Details condition="contains">DWORD (0x00000004)</Details>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\WinDefend</TargetObject>

<Details condition="contains">DWORD (0x00000004)</Details>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\MsMpSvc</TargetObject>

<Details condition="contains">DWORD (0x00000004)</Details>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\NisSrv</TargetObject>

<Details condition="contains">DWORD (0x00000004)</Details>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\WdBoot</TargetObject>

<Details condition="contains">DWORD (0x00000004)</Details>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\WdNisDrv</TargetObject>

<Details condition="contains">DWORD (0x00000004)</Details>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\WdNisSvc</TargetObject>

<Details condition="contains">DWORD (0x00000004)</Details>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\wscsvc</TargetObject>

<Details condition="contains">DWORD (0x00000004)</Details>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\SecurityHealthService</TargetObject>

<Details condition="contains">DWORD (0x00000004)</Details>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\wuauserv</TargetObject>

<Details condition="contains">DWORD (0x00000004)</Details>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\UsoSvc</TargetObject>

<Details condition="contains">DWORD (0x00000004)</Details>

</Rule>

<TargetObject condition="begin with">hklm\software\microsoft\windows script\settings\amsienable</TargetObject>

<TargetObject condition="contains">\software\microsoft\windows script\settings\amsienable</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SYSTEM\CurrentControlSet\Services\SharedAccess\Parameters\FirewallPolicy\StandardProfile\AuthorizedApplications\List</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Microsoft\Security Center\FirewallDisableNotify</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Microsoft\Security Center\FirewallOverride</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\software\policies\microsoft\windowsfirewall\;\authorizedapplications</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\software\policies\microsoft\windowsfirewall\;\authorizedapplications\list</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\software\policies\microsoft\windowsfirewall\;\globallyopenports</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WINEVT</TargetObject>

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Control\Safeboot</TargetObject>

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Control\Winlogon</TargetObject>

<TargetObject condition="end with">\FriendlyName</TargetObject>

<TargetObject condition="is">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Installer\InProgress\(Default)</TargetObject>


-<Rule groupRelation="and">

<TargetObject condition="begin with" name="technique_id=T1548.002,technique_name=Bypass User Access Control">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System</TargetObject>

<Image condition="is not">C:\Windows\System32\svchost.exe</Image>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="contains" name="technique_id=T1548.002,technique_name=Bypass User Access Control">\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System</TargetObject>

<Image condition="is not">C:\Windows\System32\svchost.exe</Image>

</Rule>

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Control\NetworkProvider\Order</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Profiles</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1547.010,technique_name=Boot or Logon Autostart Execution - Port Monitors">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Ports</TargetObject>

<TargetObject condition="contains" name="technique_id=T1547.010,technique_name=Boot or Logon Autostart Execution - Port Monitors">\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Ports</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows\PowerShell\ModuleLogging</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows\PowerShell\ScriptBlockLogging</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Policies\Microsoft\Windows\PowerShell\Transcription</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">software\microsoft\powershell\;\shellids\microsoft.powershell\executionpolicy</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1553.004,technique_name=Install Root Certificate">HKLM\SOFTWARE\Microsoft\EnterpriseCertificates\Root\Certificates</TargetObject>

<TargetObject condition="contains" name="technique_id=T1553.004,technique_name=Install Root Certificate">\Microsoft\SystemCertificates\Root\Certificates</TargetObject>

<TargetObject condition="contains" name="technique_id=T1553.004,technique_name=Install Root Certificate">\Microsoft\SystemCertificates\CA\Certificates</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Microsoft\Security Center\AllAlertsDisabled</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1562.001,technique_name=Disable or Modify Tools">HKLM\SOFTWARE\Microsoft\Security Center\DisableMonitoring</TargetObject>

<TargetObject condition="contains">\Classes\AllFilesystemObjects</TargetObject>

<TargetObject condition="contains">\Classes\Directory</TargetObject>

<TargetObject condition="contains">\Classes\Drive</TargetObject>

<TargetObject condition="contains">\Classes\Folder</TargetObject>

<TargetObject condition="contains">\ShellEx\ContextMenuHandlers</TargetObject>

<TargetObject condition="contains">\CurrentVersion\Shell</TargetObject>

<TargetObject condition="begin with">HKLM\Software\Microsoft\Windows\CurrentVersion\explorer\ShellExecuteHooks</TargetObject>

<TargetObject condition="begin with">HKLM\Software\Microsoft\Windows\CurrentVersion\explorer\ShellServiceObject</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1210,technique_name=Exploitation of Remote Services">HKLM\SOFTWARE\Microsoft\Windows;\CurrentVersion\Print\Connections</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1210,technique_name=Exploitation of Remote Services">HKLM\System;\control\print\monitors</TargetObject>

<TargetObject condition="contains" name="technique_id=T1548.002,technique_name=Bypass User Access Control">\Software\Classes\AppX82a6gwre4fdg3bt635tn5ctqjf8msdd2\Shell\open\command</TargetObject>

<TargetObject condition="contains">{AB8902B4-09CA-4bb6-B78D-A8F59079A8D5}</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1548.002,technique_name=Bypass User Access Control">HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System\EnableLUA</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1548.002,technique_name=Bypass User Access Control">HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System\LocalAccountTokenFilterPolicy</TargetObject>

<TargetObject condition="begin with">HKLM\Software\Microsoft\Windows\CurrentVersion\Policies\System\DontDisplayLastUsername</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1548.002,technique_name=Bypass User Access Control">HKLM\SOFTWARE\Microsoft\Security Center\UacDisableNotify</TargetObject>

<TargetObject condition="begin with" name="technique_id=T1548.002,technique_name=Bypass User Access Control">HKLM\SOFTWARE\Microsoft\Security Center\UpdatesDisableNotify</TargetObject>

<TargetObject condition="contains all" name="UACMe Dir Prep">HKU;Environment</TargetObject>

<TargetObject condition="contains all" name="UACMe Dir Prep">HKLM;Environment</TargetObject>

<TargetObject condition="is">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\Setup\ServiceStartup</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\Services\Pending\</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\Auto Update\PostRebootReporting\</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\Auto Update\RebootRequired\</TargetObject>

<TargetObject condition="begin with">HKLM\SYSTEM\CurrentControlSet\Services\WinSock</TargetObject>

<TargetObject condition="end with">\ProxyServer</TargetObject>

<TargetObject condition="contains" name="technique_id=T1047,technique_name=Windows Management Instrumentation">SYSTEM\CurrentControlSet\Control\CrashControl</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1047,technique_name=Windows Management Instrumentation">HKLM\SYSTEM\;Control\WMI\autologger\senseauditlogger</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1047,technique_name=Windows Management Instrumentation">HKLM\SYSTEM\;Control\WMI\autologger\senseeventlog</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1047,technique_name=Windows Management Instrumentation">HKLM\SYSTEM\;Control\WMI\EtwMaxLoggers</TargetObject>

<TargetObject condition="contains all" name="technique_id=T1047,technique_name=Windows Management Instrumentation">HKLM\SYSTEM\;Control\WMI\Security</TargetObject>

</RegistryEvent>

</RuleGroup>

<!-- Event ID 12,13,14 == RegObject added/deleted, RegValue Set, RegObject Renamed - Excludes -->



-<RuleGroup groupRelation="or">


-<RegistryEvent onmatch="exclude">

<Image condition="is">C:\Program Files (x86)\Cisco\Cisco AnyConnect Secure Mobility Client\aciseposture.exe</Image>

<Image condition="is">C:\Program Files (x86)\Cisco\Cisco AnyConnect Secure Mobility Client\vpnagent.exe</Image>

<Image condition="is">C:\Program Files\Cylance\Optics\CyOptics.exe</Image>

<Image condition="is">C:\Program Files\Cylance\Desktop\CylanceSvc.exe</Image>


-<Rule groupRelation="and">

<Image condition="image">svchost.exe</Image>

<TargetObject condition="begin with">HKLM\System\CurrentControlSet\Services\Tcpip\Parameters\DNSRegisteredAdapters</TargetObject>

</Rule>


-<Rule groupRelation="and">

<Image condition="image">svchost.exe</Image>

<TargetObject condition="begin with">HKLM\System\CurrentControlSet\Services\Tcpip\Parameters\Interfaces</TargetObject>

</Rule>

<TargetObject condition="end with">Toolbar\WebBrowser</TargetObject>

<TargetObject condition="end with">Toolbar\WebBrowser\ITBar7Height</TargetObject>

<TargetObject condition="end with">Toolbar\ShellBrowser\ITBar7Layout</TargetObject>

<TargetObject condition="end with">Internet Explorer\Toolbar\Locked</TargetObject>

<TargetObject condition="end with">ShellBrowser</TargetObject>

<Image condition="is">C:\Program Files (x86)\Ivanti\Workspace Control\pfwsmgr.exe</Image>

<Image condition="is">C:\Program Files\RES Software\Workspace Manager\pfwsmgr.exe</Image>

<Image condition="begin with">C:\Program Files (x86)\Kaspersky Lab\Kaspersky Internet Security </Image>

<Image condition="begin with">C:\Program Files\Kaspersky Lab\Kaspersky Internet Security </Image>

<Image condition="is">C:\Program Files\McAfee\Endpoint Encryption Agent\MfeEpeHost.exe</Image>

<Image condition="is">C:\Program Files\McAfee\Endpoint Security\Adaptive Threat Protection\mfeatp.exe</Image>

<Image condition="is">C:\Program Files\McAfee\Endpoint Security\Endpoint Security Platform\mfeesp.exe</Image>

<Image condition="is">C:\Program Files\Common Files\McAfee\Engine\AMCoreUpdater\amupdate.exe</Image>

<Image condition="is">C:\Program Files\McAfee\Agent\masvc.exe</Image>

<Image condition="is">C:\Program Files\McAfee\Agent\x86\mfemactl.exe</Image>

<Image condition="is">C:\Program Files\McAfee\Agent\x86\McScript_InUse.exe</Image>

<Image condition="is">C:\Program Files\McAfee\Agent\x86\macompatsvc.exe</Image>

<Image condition="is">C:\Program Files\McAfee\Endpoint Security\Threat Prevention\mfeensppl.exe</Image>

<Image condition="begin with">C:\Program Files\Common Files\McAfee\Engine\scanners</Image>

<Image condition="is">C:\Program Files\Common Files\McAfee\AVSolution\mcshield.exe</Image>

<Image condition="is">C:\Program Files\Windows Defender Advanced Threat Protection\MsSense.exe</Image>

<Image condition="is">C:\Program Files\Windows Defender Advanced Threat Protection\SenseCncProxy.exe</Image>

<Image condition="is">C:\Program Files\Windows Defender Advanced Threat Protection\SenseIR.exe</Image>


-<Rule groupRelation="and">

<Image condition="is">C:\Program Files\Microsoft Monitoring Agent\Agent\HealthService.exe</Image>

<TargetObject condition="begin with">HKLM\System\CurrentControlSet\Services\HealthService\Parameters\Management Groups</TargetObject>

</Rule>

<TargetObject condition="contains">\{CAFEEFAC-</TargetObject>

<EventType condition="is">CreateKey</EventType>

<TargetObject condition="begin with">HKLM\COMPONENTS</TargetObject>

<Image condition="is">C:\Program Files\ownCloud\owncloud.exe</Image>

<Image condition="is">C:\Program Files (x86)\ownCloud\owncloud.exe</Image>


-<Rule groupRelation="and">

<Image condition="image">svchost.exe</Image>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tasks</TargetObject>

</Rule>

<Image condition="begin with">C:\Program Files\SentinelOne\Sentinel Agent</Image>

<Image condition="is">System</Image>


-<Rule groupRelation="and">

<Image condition="is">C:\Program Files\VMware\VMware Tools\vmtoolsd.exe</Image>

<TargetObject condition="is">HKLM\System\CurrentControlSet\Services\Tcpip\Parameters</TargetObject>

</Rule>

<Image condition="is">C:\Program Files (x86)\Webroot\WRSA.exe</Image>

<Image condition="is">C:\Program Files\WIDCOMM\Bluetooth Software\btwdins.exe</Image>

<TargetObject condition="end with">HKLM\SYSTEM\CurrentControlSet\Control\Lsa\Audit</TargetObject>

<TargetObject condition="end with">HKLM\SYSTEM\CurrentControlSet\Control\Lsa\Audit\AuditPolicy</TargetObject>

<TargetObject condition="end with">HKLM\SYSTEM\CurrentControlSet\Control\Lsa\Audit\PerUserAuditing\System</TargetObject>

<TargetObject condition="end with">HKLM\SYSTEM\CurrentControlSet\Control\Lsa\SspiCache</TargetObject>

<TargetObject condition="end with">HKLM\SYSTEM\CurrentControlSet\Control\Lsa\Kerberos\Domains</TargetObject>

<TargetObject condition="end with">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\Audit</TargetObject>

<TargetObject condition="contains">\OpenWithProgids</TargetObject>

<TargetObject condition="end with">\OpenWithList</TargetObject>

<TargetObject condition="end with">\UserChoice</TargetObject>

<TargetObject condition="end with">\UserChoice\ProgId</TargetObject>

<TargetObject condition="end with">\UserChoice\Hash</TargetObject>

<TargetObject condition="end with">\OpenWithList\MRUList</TargetObject>

<TargetObject condition="end with">} 0xFFFF</TargetObject>

<Image condition="end with">Office\root\integration\integrator.exe</Image>

<Image condition="is">C:\WINDOWS\system32\backgroundTaskHost.exe</Image>

<Image condition="is">C:\Program Files\Common Files\Microsoft Shared\ClickToRun\OfficeClickToRun.exe</Image>

<Image condition="is">C:\Program Files\Windows Defender\MsMpEng.exe</Image>

<Image condition="is">C:\Windows\SystemApps\Microsoft.Windows.Cortana_cw5n1h2txyewy\SearchUI.exe</Image>

<Image condition="is">C:\Program Files\Microsoft Application Virtualization\Client\AppVClient.exe</Image>

<TargetObject condition="end with">\CurrentVersion\App Paths</TargetObject>

<TargetObject condition="end with">\CurrentVersion\Image File Execution Options</TargetObject>

<TargetObject condition="end with">\CurrentVersion\Shell Extensions\Cached</TargetObject>

<TargetObject condition="end with">\CurrentVersion\Shell Extensions\Approved</TargetObject>

<TargetObject condition="end with">}\PreviousPolicyAreas</TargetObject>

<TargetObject condition="contains">\Control\WMI\Autologger\</TargetObject>

<TargetObject condition="end with">HKLM\SYSTEM\CurrentControlSet\Services\UsoSvc\Start</TargetObject>

<TargetObject condition="end with">\Lsa\OfflineJoin\CurrentValue</TargetObject>

<TargetObject condition="end with">\Components\TrustedInstaller\Events</TargetObject>

<TargetObject condition="end with">\Components\TrustedInstaller</TargetObject>

<TargetObject condition="end with">\Components\Wlansvc</TargetObject>

<TargetObject condition="end with">\Components\Wlansvc\Events</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Installer\UserData\S-1-5-18\</TargetObject>

<TargetObject condition="end with">\Directory\shellex</TargetObject>

<TargetObject condition="end with">\Directory\shellex\DragDropHandlers</TargetObject>

<TargetObject condition="end with">\Drive\shellex</TargetObject>

<TargetObject condition="end with">\Drive\shellex\DragDropHandlers</TargetObject>

<TargetObject condition="contains">_Classes\AppX</TargetObject>

<TargetObject condition="begin with">HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WINEVT\Publishers\</TargetObject>

<TargetObject condition="contains all">SOFTWARE;\Microsoft\EnterpriseCertificates\Disallowed</TargetObject>

<TargetObject condition="contains all">SOFTWARE;\Microsoft\SystemCertificates\Disallowed</TargetObject>

<TargetObject condition="contains">Software\Microsoft\Windows\CurrentVersion\WinTrust\Trust Providers\Software Publishing</TargetObject>

<TargetObject condition="is">HKLM\SOFTWARE\Policies\Microsoft\SystemCertificates\Root\Certificates</TargetObject>

<Image condition="is">C:\Windows\SystemApps\Microsoft.Windows.Cortana_cw5n1h2txyewy\SearchUI.exe</Image>

<Image condition="begin with">C:\$WINDOWS.~BT\</Image>

<TargetObject condition="is">HKLM\System\CurrentControlSet\Services\Tcpip\Parameters</TargetObject>


-<Rule groupRelation="and">

<Image condition="is">C:\Windows\system32\lsass.exe</Image>

<TargetObject condition="contains">HKLM\System\CurrentControlSet\Services</TargetObject>

</Rule>


-<Rule groupRelation="and">

<TargetObject condition="contains">SOFTWARE\Microsoft\Windows\CurrentVersion\DeliveryOptimization</TargetObject>

<Image condition="is">C:\Windows\System32\svchost.exe</Image>

</Rule>

<TargetObject condition="is">HKLM\System\CurrentControlSet\Services\W32Time\Config\LastKnownGoodTime</TargetObject>

<TargetObject condition="is">HKLM\System\CurrentControlSet\Services\SmsRouter\State\Registration\Ids</TargetObject>

<TargetObject condition="end with">\services\clr_optimization_v2.0.50727_32\Start</TargetObject>

<TargetObject condition="end with">\services\clr_optimization_v2.0.50727_64\Start</TargetObject>

<TargetObject condition="end with">\services\clr_optimization_v4.0.30319_32\Start</TargetObject>

<TargetObject condition="end with">\services\clr_optimization_v4.0.30319_64\Start</TargetObject>

<TargetObject condition="end with">\services\DeviceAssociationService\Start</TargetObject>

<TargetObject condition="end with">\services\BITS\Start</TargetObject>

<TargetObject condition="end with">\services\TrustedInstaller\Start</TargetObject>

<TargetObject condition="end with">\services\tunnel\Start</TargetObject>

<TargetObject condition="end with">\services\UsoSvc\Start</TargetObject>

</RegistryEvent>

</RuleGroup>

<!-- Event ID 15 == FileStream Created - Includes -->



-<RuleGroup groupRelation="or">


-<FileCreateStreamHash onmatch="include">

<TargetFilename condition="contains">Temp\7z</TargetFilename>

<TargetFilename condition="end with">.bat</TargetFilename>

<TargetFilename condition="end with">.cmd</TargetFilename>

<TargetFilename condition="end with">Temp\debug.bin</TargetFilename>

<TargetFilename condition="end with">.dll</TargetFilename>

<TargetFilename condition="end with">.exe</TargetFilename>

<TargetFilename condition="end with">.hta</TargetFilename>


-<Rule groupRelation="and" name="technique_id=T1189,technique_name=Drive-by Compromise">

<TargetFilename condition="end with">:Zone.Identifier</TargetFilename>

<Contents condition="contains any">blob:;about:internet</Contents>

</Rule>

<TargetFilename condition="end with">.lnk</TargetFilename>

<TargetFilename condition="contains">Content.Outlook</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1059.001,technique_name=PowerShell">.ps1</TargetFilename>

<TargetFilename condition="end with" name="technique_id=T1059.001,technique_name=PowerShell">.ps2</TargetFilename>

<TargetFilename condition="end with">.reg</TargetFilename>

<TargetFilename condition="contains">Downloads</TargetFilename>

<TargetFilename condition="contains">AppData</TargetFilename>

<TargetFilename condition="contains">Temp</TargetFilename>

<TargetFilename condition="contains">ProgramData</TargetFilename>

<TargetFilename condition="contains">Users</TargetFilename>

<TargetFilename condition="end with">.vb</TargetFilename>

<TargetFilename condition="end with">.vbe</TargetFilename>

<TargetFilename condition="end with">.vbs</TargetFilename>

</FileCreateStreamHash>

</RuleGroup>

<!-- Event ID 17,18 == PipeEvent. Log Named pipe created & Named pipe connected - Includes -->



-<RuleGroup groupRelation="or">


-<PipeEvent onmatch="include">


-<Rule groupRelation="and">

<PipeName condition="begin with">\</PipeName>

<EventType>CreatePipe</EventType>

</Rule>

<PipeName condition="begin with" name="technique_id=T1021.002,technique_name=SMB/Windows Admin Shares">\atsvc</PipeName>


-<Rule groupRelation="and">

<PipeName condition="begin with" name="technique_id=T1021.002,technique_name=SMB/Windows Admin Shares">\msse-</PipeName>

<PipeName condition="end with" name="technique_id=T1021.002,technique_name=SMB/Windows Admin Shares">-server</PipeName>

</Rule>

<PipeName condition="begin with" name="technique_id=T1021.002,technique_name=SMB/Windows Admin Shares">\msagent_</PipeName>

<PipeName condition="begin with" name="technique_id=T1055; Possible Cobalt Strike post-exploitation jobs.">\postex_</PipeName>

<PipeName condition="begin with" name="technique_id=T1021.004,technique_name=Remote Services: SSH">\postex_ssh_</PipeName>

<PipeName condition="begin with" name="technique_id=T1021.002,technique_name=SMB/Windows Admin Shares">\status_</PipeName>

<PipeName condition="begin with" name="technique_id=T1021.002,technique_name=SMB/Windows Admin Shares">\gruntsvc</PipeName>

<PipeName condition="begin with" name="technique_id=T1021.002,technique_name=SMB/Windows Admin Shares">\svcctl</PipeName>

<PipeName condition="begin with" name="technique_id=T1021.002,technique_name=SMB/Windows Admin Shares">\msf-pipe</PipeName>


-<Rule groupRelation="and">

<PipeName condition="begin with" name="technique_id=T1059.001,technique_name=PowerShell">\PSHost</PipeName>

<Image condition="is not">powershell.exe</Image>

</Rule>


-<Rule groupRelation="and">

<PipeName condition="begin with" name="technique_id=T1059.001,technique_name=PowerShell">\PSHost</PipeName>

<Image condition="is not">powershell_ise.exe</Image>

</Rule>

<PipeName condition="begin with" name="technique_id=T1021.002,technique_name=SMB/Windows Admin Shares">\PSEXESVC</PipeName>

<PipeName condition="begin with" name="technique_id=T1049,technique_name=System Network Connections Discovery">\srvsvc</PipeName>


-<Rule groupRelation="and">

<PipeName condition="begin with">\TSVCPIPE</PipeName>

</Rule>

<PipeName condition="begin with" name="technique_id=T1033,technique_name=System Owner/User Discovery">\winreg</PipeName>

</PipeEvent>

</RuleGroup>

<!-- Event ID 17,18 == PipeEvent. Log Named pipe created & Named pipe connected - Excludes -->



-<RuleGroup groupRelation="or">


-<PipeEvent onmatch="exclude">


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Common Files\Adobe\ARM\1.0\AdobeARM.exe</Image>

<PipeName condition="begin with">\32B6B37A-4A7D-4e00-95F2-</PipeName>

<PipeName condition="end with">thsnYaVieBoda</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Adobe\Acrobat Reader DC\Reader\AcroCEF\RdrCEF.exe</Image>

<PipeName condition="begin with">\com.adobe.reader.rna.;\mojo</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Common Files\Adobe\AdobeGCClient\AGMService.exe</Image>

<PipeName condition="begin with">\gc_pipe_</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Common Files\Adobe\Creative Cloud Libraries\libs\node.exe</Image>

<PipeName condition="begin with">\uv\</PipeName>

</Rule>

<Image condition="is">"C:\Program Files\Microsoft Monitoring Agent\Agent\MonitoringHost.exe"</Image>


-<Rule groupRelation="and">

<Image condition="contains all"> C:\Users\;\AppData\Local\Programs\Call Manager\Call Manager.exe</Image>

<PipeName condition="begin with">\crashpad_;\mojo.;\uv\</PipeName>

</Rule>

<Image condition="contains all">C:\Program Files;\Citrix\ICA Client\SelfServicePlugin\SelfService.exe</Image>

<Image condition="contains all">C:\Program Files;\Citrix\ICA Client\Receiver\Receiver.exe</Image>

<Image condition="contains all">C:\Program Files;\Citrix\ICA Client\wfcrun32.exe</Image>

<Image condition="contains all">C:\Program Files;\Citrix\ICA Client\concentr.exe</Image>

<Image condition="contains all">C:\Users\;\AppData\Local\Citrix\ICA Client\receiver\Receiver.exe</Image>

<Image condition="contains all">C:\Users\;\AppData\Local\Citrix\ICA Client\SelfServicePlugin\SelfService.exe</Image>

<Image condition="contains all">C:\Program Files;\FireEye\xagt\xagt.exe</Image>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Google\Update\Install\;setup.exe</Image>

<PipeName condition="begin with">\crashpad_</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Google\Chrome\Application\chrome.exe</Image>

<PipeName condition="begin with">\mojo.</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Google\Chrome\Application\;\Installer\chrmstp.exe</Image>

<PipeName condition="begin with">\crashpad_</PipeName>

</Rule>

<PipeName condition="begin with">\Vivisimo Velocity</PipeName>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Microsoft\Edge\Application\msedge.exe</Image>

<PipeName condition="begin with">\LOCAL\mojo.</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Microsoft\Edge\Application\msedge.exe</Image>

<PipeName condition="begin with">\LOCAL\chrome.sync.</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Microsoft\Edge\Application\msedge.exe</Image>

<PipeName condition="begin with">\LOCAL\crashpad_</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Microsoft Office\root\Office16\OUTLOOK.EXE</Image>

<PipeName condition="is">\MsFteWds</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Users\;\AppData\Local\Microsoft\Teams\current\Teams.exe</Image>

<PipeName condition="begin with">\mojo.</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Users\;\AppData\Local\Microsoft\Teams\current\Teams.exe</Image>

<PipeName condition="begin with">\chrome.sync.</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Mozilla Firefox\firefox.exe</Image>

<PipeName condition="begin with">\cubeb-pipe-</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Mozilla Firefox\firefox.exe</Image>

<PipeName condition="begin with">\chrome.</PipeName>

</Rule>


-<Rule groupRelation="and">

<Image condition="contains all">C:\Program Files;\Mozilla Firefox\firefox.exe</Image>

<PipeName condition="begin with">\gecko-crash-server-pipe.</PipeName>

</Rule>

<PipeName condition="is">\SQLLocal\MSSQLSERVER</PipeName>

<PipeName condition="is">\SQLLocal\INSTANCE01</PipeName>

<PipeName condition="is">\SQLLocal\SQLEXPRESS</PipeName>

<PipeName condition="is">\SQLLocal\COMMVAULT</PipeName>

<PipeName condition="is">\SQLLocal\RTCLOCAL</PipeName>

<PipeName condition="is">\SQLLocal\RTC</PipeName>

<PipeName condition="is">\SQLLocal\TMSM</PipeName>

<Image condition="is">Program Files (x86)\Microsoft SQL Server\110\DTS\binn\dtexec.exe</Image>

<Image condition="end with">PostgreSQL\9.6\bin\postgres.exe</Image>

<PipeName condition="contains">\pgsignal_</PipeName>

<Image condition="is">Program Files\Qlik\Sense\Engine\Engine.exe</Image>

<Image condition="contains all">C:\Program Files;\Qualys\QualysAgent\QualysAgent.exe</Image>

<Image condition="end with">Program Files\SplunkUniversalForwarder\bin\splunkd.exe</Image>

<Image condition="end with">Program Files\SplunkUniversalForwarder\bin\splunk.exe</Image>

<Image condition="end with">Program Files\SplunkUniversalForwarder\bin\splunk-MonitorNoHandle.exe</Image>

<Image condition="end with">Program Files (x86)\Trend Micro\OfficeScan\PCCSRV\CMAgent\OfcCMAgent.exe</Image>

<Image condition="end with">Program Files (x86)\Trend Micro\OfficeScan\PCCSRV\web\service\ofcservice.exe</Image>

<Image condition="end with">Program Files (x86)\Trend Micro\OfficeScan\PCCSRV\Web\Service\DbServer.exe</Image>

<Image condition="end with">Program Files (x86)\Trend Micro\OfficeScan\PCCSRV\web\service\verconn.exe</Image>

<Image condition="end with">Program Files (x86)\Trend Micro\OfficeScan\PCCSRV\WEB_OSCE\WEB\CGI\cgiOnClose.exe</Image>

<Image condition="end with">Program Files (x86)\Trend Micro\OfficeScan\PCCSRV\WEB_OSCE\WEB\CGI\cgiRqHotFix.exe</Image>

<Image condition="end with">Program Files (x86)\Trend Micro\OfficeScan\PCCSRV\LWCS\LWCSService.exe</Image>

<Image condition="end with">Program Files (x86)\Trend Micro\OfficeScan\PCCSRV\WSS\iCRCService.exe</Image>

<Image condition="end with">Program Files\Trend\SPROTECT\x64\tsc.exe</Image>

<Image condition="end with">Program Files\Trend\SPROTECT\x64\tsc64.exe</Image>

<Image condition="end with">Program Files (x86)\Trend Micro\OfficeScan\PCCSRV\web\service\osceintegrationservice.exe</Image>

<Image condition="end with">Program Files (x86)\Trend Micro\OfficeScan\PCCSRV\web\service\OfcLogReceiverSvc.exe</Image>

<PipeName condition="is">\Trend Micro OSCE Command Handler Manager</PipeName>

<PipeName condition="is">\Trend Micro OSCE Command Handler2 Manager</PipeName>

<PipeName condition="is">\Trend Micro Endpoint Encryption ToolBox Command Handler Manager</PipeName>

<PipeName condition="is">\OfcServerNamePipe</PipeName>

<PipeName condition="is">\ntapvsrq</PipeName>

<PipeName condition="is">\srvsvc</PipeName>

<PipeName condition="is">\wkssvc</PipeName>

<PipeName condition="is">\lsass</PipeName>

<PipeName condition="is">\winreg</PipeName>

<PipeName condition="is">\spoolss</PipeName>

<PipeName condition="contains">Anonymous Pipe</PipeName>

<Image condition="is">c:\windows\system32\inetsrv\w3wp.exe</Image>

</PipeEvent>

</RuleGroup>

<!-- Event ID 19,20,21, == WmiEvent. Log all WmiEventFilter, WmiEventConsumer, WmiEventConsumerToFilter activity - Includes -->



-<RuleGroup groupRelation="or">


-<WmiEvent onmatch="include">

<Operation condition="is" name="technique_id=T1047,technique_name=Windows Management Instrumentation">Created</Operation>

</WmiEvent>

</RuleGroup>

<!-- Event ID 22 == DNS Queries and their results Excludes -->



-<RuleGroup groupRelation="or">

<!--Default to log all and exclude a few common processes-->



-<DnsQuery onmatch="exclude">

<QueryName condition="end with">.1rx.io</QueryName>

<QueryName condition="end with">.2mdn.net</QueryName>

<QueryName condition="end with">.adadvisor.net</QueryName>

<QueryName condition="end with">.adap.tv</QueryName>

<QueryName condition="end with">.addthis.com</QueryName>

<QueryName condition="end with">.adform.net</QueryName>

<QueryName condition="end with">.adnxs.com</QueryName>

<QueryName condition="end with">.adroll.com</QueryName>

<QueryName condition="end with">.adrta.com</QueryName>

<QueryName condition="end with">.adsafeprotected.com</QueryName>

<QueryName condition="end with">.adsrvr.org</QueryName>

<QueryName condition="end with">.advertising.com</QueryName>

<QueryName condition="end with">.amazon-adsystem.com</QueryName>

<QueryName condition="end with">.amazon-adsystem.com</QueryName>

<QueryName condition="end with">.analytics.yahoo.com</QueryName>

<QueryName condition="end with">.aol.com</QueryName>

<QueryName condition="end with">.betrad.com</QueryName>

<QueryName condition="end with">.bidswitch.net</QueryName>

<QueryName condition="end with">.casalemedia.com</QueryName>

<QueryName condition="end with">.chartbeat.net</QueryName>

<QueryName condition="end with">.cnn.com</QueryName>

<QueryName condition="end with">.convertro.com</QueryName>

<QueryName condition="end with">.criteo.com</QueryName>

<QueryName condition="end with">.criteo.net</QueryName>

<QueryName condition="end with">.crwdcntrl.net</QueryName>

<QueryName condition="end with">.demdex.net</QueryName>

<QueryName condition="end with">.domdex.com</QueryName>

<QueryName condition="end with">.dotomi.com</QueryName>

<QueryName condition="end with">.doubleclick.net</QueryName>

<QueryName condition="end with">.doubleverify.com</QueryName>

<QueryName condition="end with">.emxdgt.com</QueryName>

<QueryName condition="end with">.exelator.com</QueryName>

<QueryName condition="end with">.google-analytics.com</QueryName>

<QueryName condition="end with">.googleadservices.com</QueryName>

<QueryName condition="end with">.googlesyndication.com</QueryName>

<QueryName condition="end with">.googletagmanager.com</QueryName>

<QueryName condition="end with">.googlevideo.com</QueryName>

<QueryName condition="end with">.gstatic.com</QueryName>

<QueryName condition="end with">.gvt1.com</QueryName>

<QueryName condition="end with">.gvt2.com</QueryName>

<QueryName condition="end with">.ib-ibi.com</QueryName>

<QueryName condition="end with">.jivox.com</QueryName>

<QueryName condition="end with">.mathtag.com</QueryName>

<QueryName condition="end with">.moatads.com</QueryName>

<QueryName condition="end with">.moatpixel.com</QueryName>

<QueryName condition="end with">.mookie1.com</QueryName>

<QueryName condition="end with">.myvisualiq.net</QueryName>

<QueryName condition="end with">.netmng.com</QueryName>

<QueryName condition="end with">.nexac.com</QueryName>

<QueryName condition="end with">.openx.net</QueryName>

<QueryName condition="end with">.optimizely.com</QueryName>

<QueryName condition="end with">.outbrain.com</QueryName>

<QueryName condition="end with">.pardot.com</QueryName>

<QueryName condition="end with">.phx.gbl</QueryName>

<QueryName condition="end with">.pinterest.com</QueryName>

<QueryName condition="end with">.pubmatic.com</QueryName>

<QueryName condition="end with">.quantcount.com</QueryName>

<QueryName condition="end with">.quantserve.com</QueryName>

<QueryName condition="end with">.revsci.net</QueryName>

<QueryName condition="end with">.rfihub.net</QueryName>

<QueryName condition="end with">.rlcdn.com</QueryName>

<QueryName condition="end with">.rubiconproject.com</QueryName>

<QueryName condition="end with">.scdn.co</QueryName>

<QueryName condition="end with">.scorecardresearch.com</QueryName>

<QueryName condition="end with">.serving-sys.com</QueryName>

<QueryName condition="end with">.sharethrough.com</QueryName>

<QueryName condition="end with">.simpli.fi</QueryName>

<QueryName condition="end with">.sitescout.com</QueryName>

<QueryName condition="end with">.smartadserver.com</QueryName>

<QueryName condition="end with">.snapads.com</QueryName>

<QueryName condition="end with">.spotxchange.com</QueryName>

<QueryName condition="end with">.taboola.com</QueryName>

<QueryName condition="end with">.taboola.map.fastly.net</QueryName>

<QueryName condition="end with">.tapad.com</QueryName>

<QueryName condition="end with">.tidaltv.com</QueryName>

<QueryName condition="end with">.trafficmanager.net</QueryName>

<QueryName condition="end with">.tremorhub.com</QueryName>

<QueryName condition="end with">.tribalfusion.com</QueryName>

<QueryName condition="end with">.turn.com</QueryName>

<QueryName condition="end with">.twimg.com</QueryName>

<QueryName condition="end with">.tynt.com</QueryName>

<QueryName condition="end with">.w55c.net</QueryName>

<QueryName condition="end with">.ytimg.com</QueryName>

<QueryName condition="end with">.zorosrv.com</QueryName>

<QueryName condition="is">1rx.io</QueryName>

<QueryName condition="is">adservice.google.com</QueryName>

<QueryName condition="is">ampcid.google.com</QueryName>

<QueryName condition="is">clientservices.googleapis.com</QueryName>

<QueryName condition="is">googleadapis.l.google.com</QueryName>

<QueryName condition="is">imasdk.googleapis.com</QueryName>

<QueryName condition="is">l.google.com</QueryName>

<QueryName condition="is">ml314.com</QueryName>

<QueryName condition="is">mtalk.google.com</QueryName>

<QueryName condition="is">update.googleapis.com</QueryName>

<QueryName condition="is">www.googletagservices.com</QueryName>

<QueryName condition="end with">.mozaws.net</QueryName>

<QueryName condition="end with">.mozilla.com</QueryName>

<QueryName condition="end with">.mozilla.net</QueryName>

<QueryName condition="end with">.mozilla.org</QueryName>

<QueryName condition="is">clients1.google.com</QueryName>

<QueryName condition="is">clients2.google.com</QueryName>

<QueryName condition="is">clients3.google.com</QueryName>

<QueryName condition="is">clients4.google.com</QueryName>

<QueryName condition="is">clients5.google.com</QueryName>

<QueryName condition="is">clients6.google.com</QueryName>

<QueryName condition="is">safebrowsing.googleapis.com</QueryName>

<QueryName condition="end with">.akadns.net</QueryName>

<QueryName condition="end with">.netflix.com</QueryName>

<QueryName condition="end with">.aspnetcdn.com</QueryName>

<QueryName condition="is">ajax.googleapis.com</QueryName>

<QueryName condition="is">cdnjs.cloudflare.com</QueryName>

<QueryName condition="is">fonts.googleapis.com</QueryName>

<QueryName condition="end with">.typekit.net</QueryName>

<QueryName condition="is">cdnjs.cloudflare.com</QueryName>

<QueryName condition="end with">.stackassets.com</QueryName>

<QueryName condition="end with">.steamcontent.com</QueryName>

<QueryName condition="end with">.arpa.</QueryName>

<QueryName condition="end with">.arpa</QueryName>

<QueryName condition="end with">.msftncsi.com</QueryName>

<QueryName condition="end with">.localmachine</QueryName>

<QueryName condition="is">localhost</QueryName>


-<Rule groupRelation="and">

<Image condition="is">C:\ProgramData\LogiShrd\LogiOptions\Software\Current\updater.exe</Image>

<QueryName condition="end with">.logitech.com</QueryName>

</Rule>

<Image condition="is">C:\Program Files\Windows Defender Advanced Threat Protection\MsSense.exe</Image>

<QueryName condition="end with">-pushp.svc.ms</QueryName>

<QueryName condition="end with">.b-msedge.net</QueryName>

<QueryName condition="end with">.bing.com</QueryName>

<QueryName condition="end with">.hotmail.com</QueryName>

<QueryName condition="end with">.live.com</QueryName>

<QueryName condition="end with">.live.net</QueryName>

<QueryName condition="end with">.s-microsoft.com</QueryName>

<QueryName condition="end with">.microsoft.com</QueryName>

<QueryName condition="end with">.microsoftonline.com</QueryName>

<QueryName condition="end with">.microsoftstore.com</QueryName>

<QueryName condition="end with">.ms-acdc.office.com</QueryName>

<QueryName condition="end with">.msedge.net</QueryName>

<QueryName condition="end with">.msn.com</QueryName>

<QueryName condition="end with">.msocdn.com</QueryName>

<QueryName condition="end with">.skype.com</QueryName>

<QueryName condition="end with">.skype.net</QueryName>

<QueryName condition="end with">.windows.com</QueryName>

<QueryName condition="end with">.windows.net.nsatc.net</QueryName>

<QueryName condition="end with">.windowsupdate.com</QueryName>

<QueryName condition="end with">.xboxlive.com</QueryName>

<QueryName condition="is">login.windows.net</QueryName>

<QueryName condition="is">outlook.office.com</QueryName>

<QueryName condition="is">statics.teams.cdn.office.net</QueryName>

<QueryName condition="is">acdc-direct.office.com</QueryName>

<QueryName condition="end with">.fp.measure.office.com</QueryName>

<QueryName condition="end with">office365.com</QueryName>

<QueryName condition="end with">.activedirectory.windowsazure.com</QueryName>

<QueryName condition="end with">.aria.microsoft.com</QueryName>

<QueryName condition="end with">.msauth.net</QueryName>

<QueryName condition="end with">.msftauth.net</QueryName>

<QueryName condition="end with">.opinsights.azure.com</QueryName>

<QueryName condition="is">management.azure.com</QueryName>

<QueryName condition="is">outlook.office365.com</QueryName>

<QueryName condition="is">portal.azure.com</QueryName>

<QueryName condition="is">substrate.office.com</QueryName>

<QueryName condition="is">osi.office.net</QueryName>

<QueryName condition="end with">.digicert.com</QueryName>

<QueryName condition="end with">.globalsign.com</QueryName>

<QueryName condition="end with">.globalsign.net</QueryName>

<QueryName condition="is">msocsp.com</QueryName>

<QueryName condition="is">ocsp.msocsp.com</QueryName>

<QueryName condition="is">pki.goog</QueryName>

<QueryName condition="end with">.pki.goog</QueryName>

<QueryName condition="is">ocsp.godaddy.com</QueryName>

<QueryName condition="is">amazontrust.com</QueryName>

<QueryName condition="end with">.amazontrust.com</QueryName>

<QueryName condition="is">ocsp.sectigo.com</QueryName>

<QueryName condition="is">pki-goog.l.google.com</QueryName>

<QueryName condition="end with">.usertrust.com</QueryName>

<QueryName condition="is">ocsp.comodoca.com</QueryName>

<QueryName condition="is">ocsp.verisign.com</QueryName>

<QueryName condition="is">ocsp.entrust.net</QueryName>

<QueryName condition="end with">ocsp.identrust.com</QueryName>

<QueryName condition="is">status.rapidssl.com</QueryName>

<QueryName condition="is">status.thawte.com</QueryName>

<QueryName condition="is">ocsp.int-x3.letsencrypt.org</QueryName>

<QueryName condition="is">subca.ocsp-certum.com</QueryName>

<QueryName condition="is">cscasha2.ocsp-certum.com</QueryName>

<QueryName condition="is">crl.verisign.com</QueryName>

<Image condition="contains all">C:\Program Files\SentinelOne\Sentinel Agent;\SentinelAgent.exe</Image>

<QueryName condition="end with">.spotify.com</QueryName>

<QueryName condition="end with">.spotify.map.fastly.net</QueryName>

<Image condition="contains all">C:\Windows\SystemApps\Microsoft.Windows.Search;SearchApp.exe</Image>

</DnsQuery>

</RuleGroup>

<!-- Event ID 23 == File Delete and overwrite events which saves a copy to the archivedir - Includes -->


<!-- Default set to disabled due to disk space implications, enable with care!-->



-<RuleGroup groupRelation="or">

<FileDelete onmatch="include"/>

</RuleGroup>

<!-- Event ID 24 == Clipboard change events, only captures text, not files - Includes -->


<!-- Default set to disabled due to privacy implications and potential data you leave for attackers, enable with care!-->



-<RuleGroup groupRelation="or">

<ClipboardChange onmatch="include"/>

</RuleGroup>

<!-- Event ID 25 == Process tampering events - Excludes -->



-<RuleGroup groupRelation="or">


-<ProcessTampering onmatch="exclude">

<Image condition="is">C:\Program Files\Mozilla Firefox\firefox.exe</Image>

<Image condition="is">C:\Program Files\Mozilla Firefox\updater.exe</Image>

<Image condition="is">C:\Program Files\Mozilla Firefox\default-browser-agent.exe</Image>

<Image condition="is">C:\Program Files\Mozilla Firefox\pingsender.exe</Image>

<Image condition="is">C:\Program Files\Git\cmd\git.exe</Image>

<Image condition="is">C:\Program Files\Git\mingw64\bin\git.exe</Image>

<Image condition="is">C:\Program Files\Git\mingw64\libexec\git-core\git.exe</Image>

<Image condition="is">C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe</Image>


-<Rule groupRelation="and">

<Image condition="begin with">C:\Program Files (x86)\Microsoft\Edge\Application\</Image>

<Image condition="end with">\BHO\ie_to_edge_stub.exe</Image>

</Rule>


-<Rule groupRelation="and">

<Image condition="begin with">C:\Program Files (x86)\Microsoft\Edge\Application\</Image>

<Image condition="end with">\identity_helper.exe</Image>

</Rule>


-<Rule groupRelation="and">

<Image condition="begin with">C:\Program Files (x86)\Microsoft\EdgeUpdate\Install\</Image>

<Image condition="contains">\MicrosoftEdge_X64_</Image>

</Rule>

<Image condition="is">C:\Program Files (x86)\Symantec\Symantec Endpoint Protection Manager\bin\XDelta64\xdelta3.exe</Image>

<Image condition="contains">unknown process</Image>

<Image condition="is">C:\Program Files\Microsoft VS Code\Code.exe</Image>

<Image condition="is">C:\Windows\System32\wbem\WMIADAP.exe</Image>

</ProcessTampering>

</RuleGroup>

<!-- Event ID 26 == File Delete and overwrite events, does NOT save the file - Includes -->



-<RuleGroup groupRelation="or">


-<FileDeleteDetected onmatch="include">

<TargetFilename condition="contains all">C:\Program Files\Microsoft SQL Server;\Shared\ErrorDumps</TargetFilename>

<TargetFilename condition="contains all">C:\Program Files\Microsoft SQL Server;\DataDumps</TargetFilename>

<TargetFilename condition="contains all">C:\Program Files (X86)\Microsoft SQL Server\;Shared\ErrorDumps</TargetFilename>


-<Rule groupRelation="and">

<TargetFilename condition="contains all">C:\PS-Transcripts\;PowerShell_transcript</TargetFilename>

<TargetFilename condition="contains">.txt</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Program Files\Qualys\QualysAgent</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="contains">\Downloads\</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="contains">\Appdata\Local\Temp\</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="contains">\Appdata\Local\Microsoft\Windows\INetCache\Content.Outlook\</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\Intel</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\Mozilla</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\chocolatey\logs</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\DeviceSync</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\PlayReady</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\User Account Pictures</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\Crypto\DSS\MachineKeys</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\Crypto\RSA\MachineKeys</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\NetFramework\BreadcrumbStore</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\Office\Heartbeat</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\Windows\WER\ReportQueue</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\Windows\WER\Temp</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Intel</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Mozilla</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\chocolatey\logs</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Microsoft\DeviceSync</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Microsoft\PlayReady</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Microsoft\User Account Pictures</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Microsoft\Crypto\DSS\MachineKeys</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Microsoft\Crypto\RSA\MachineKeys</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Microsoft\NetFramework\BreadcrumbStore</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Microsoft\Office\Heartbeat</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Microsoft\Windows\WER\ReportArchive</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Microsoft\Windows\WER\ReportQueue</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Users\All Users\Microsoft\Windows\WER\Temp</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Windows\Tasks</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Windows\tracing</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Windows\Registration\CRMLog</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Windows\System32\Tasks</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Windows\System32\Microsoft\Crypto\RSA\MachineKeys</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Windows\System32\spool\drivers\color</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>


-<Rule groupRelation="and">

<TargetFilename condition="begin with">C:\Windows\SysWOW64\Tasks</TargetFilename>

<TargetFilename condition="contains any">.com;.bat;.exe;.reg;.ps1;.vbs;.vba;.lnk;.doc;.xls;.hta;.bin;.7z;.dll;.xla;.cmd;.sh;.lnk;.pptm;.scr;.msi;.sct</TargetFilename>

</Rule>

</FileDeleteDetected>

</RuleGroup>

<!-- Event ID 27 == File Block Executable and overwrite events - Includes -->


<!-- Default set to disabled due to potential unwanted blocks, enable with care!-->



-<RuleGroup groupRelation="or">

<FileBlockExecutable onmatch="include"/>

</RuleGroup>

<!-- Event ID 28 == Fileblock Shredding events - Includes -->


<!-- Default set to disabled due to disk space implications, enable with care!-->



-<RuleGroup groupRelation="or">

<FileBlockShredding onmatch="include"/>

</RuleGroup>

<!-- Event ID 29 == File Executable Detected events - Excludes -->



-<RuleGroup groupRelation="or">

<FileExecutableDetected onmatch="exclude"/>

</RuleGroup>


-<RuleGroup groupRelation="or">


-<CreateRemoteThread onmatch="include">

<SourceImage condition="begin with" name="technique_id=T1055,technique_name=Process Injection">C:\</SourceImage>

<SourceImage condition="begin with" name="technique_id=T1055,technique_name=Process Injection">\\</SourceImage>

</CreateRemoteThread>

</RuleGroup>


-<RuleGroup groupRelation="or">

<WmiEvent onmatch="exclude"/>

</RuleGroup>


-<RuleGroup groupRelation="or">


-<FileDeleteDetected onmatch="exclude">

<Image condition="contains all">C:\WindowsAzure\GuestAgent;\WindowsAzureGuestAgent.exe</Image>

<Image condition="contains all">C:\Packages\Plugins\Microsoft.Azure.Monitor.AzureMonitorWindowsAgent\;\AMAExtHealthMonitor.exe</Image>

<TargetFilename condition="begin with">C:\WindowsAzure\Logs\AggregateStatus\aggregatestatus</TargetFilename>

<Image condition="contains all">\appdata\local\google\chrome\user data\swreporter\;software_reporter_tool.exe</Image>

<Image condition="is">C:\Program Files (x86)\Google\Chrome\Application\chrome.exe</Image>

<TargetFilename condition="contains all">C:\Windows\Prefetch;.pf</TargetFilename>

<User condition="contains any">NETWORK SERVICE; LOCAL SERVICE</User>

</FileDeleteDetected>

</RuleGroup>


-<RuleGroup groupRelation="or">


-<FileExecutableDetected onmatch="include">

<Image condition="contains" name="technique_id=T1546.008,technique_name=Windows Error Reporting">werfault.exe</Image>

<Image condition="is" name="technique_id=T1574.002,technique_name=DLL Side-Loading">odbcconf.exe</Image>

<Image condition="is" name="technique_id=T1027.004,technique_name=Compile After Delivery">csc.exe</Image>

<Image condition="is" name="technique_id=T1543.003,technique_name=Windows Service">sc.exe</Image>

<Image condition="is" name="technique_id=T1489,technique_name=Service Stop">taskkill.exe</Image>

<Image condition="is" name="technique_id=T1074,technique_name=Data Staged">xcopy.exe</Image>

<Image condition="is" name="technique_id=T1074,technique_name=Data Staged">robocopy.exe</Image>

<Image condition="is" name="technique_id=T,technique_name=">makecab.exe</Image>

<Image condition="is" name="technique_id=T1105,technique_name=Remote File Copy">GfxDownloadWrapper.exe</Image>

<Image condition="is" name="technique_id=T1105,technique_name=Remote File Copy">expand.exe</Image>

<Image condition="is" name="technique_id=T1105,technique_name=Ingress Tool Transfer">curl.exe</Image>

<Image condition="is" name="technique=T1105,technique_name=Ingress Tool Transfer">ftp.exe</Image>

<Image condition="is" name="technique_id=T1564.004,technique_name=NTFS File Attributes">extrac32.exe</Image>

<Image condition="contains any" name="technique_id=T1053.005,technique_name=Scheduled Task/Job">schtasks.exe;sctasks.exe</Image>

<Image condition="contains any" name="technique=T1053.002,technique_name=At">at.exe;At.exe</Image>

<Image condition="is" name="technique_id=T1053,technique_name=Scheduled Task/Job">taskeng.exe</Image>

<Image condition="begin with" name="technique_id=T1047,technique_name=Windows Management Instrumentation">C:\WINDOWS\system32\wbem\scrcons.exe</Image>

<Image condition="is" name="technique_id=T1047,technique_name=Windows Management Instrumentation">wmiprvse.exe</Image>

<Image condition="is">wevtutil.exe</Image>

<Image condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">pcalua.exe</Image>

<Image condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">cscript.exe</Image>

<Image condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">wscript.exe</Image>

<Image condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">bash.exe</Image>

<Image condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">certutil.exe</Image>

<Image condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">winrs.exe</Image>

<Image condition="image" name="technique_id=T1202,technique_name=Indirect Command Execution">control.exe</Image>

<Image condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">desktopimgdownldr.exe</Image>

<Image condition="is" name="technique_id=T1202,technique_name=Indirect Command Execution">wsl.exe</Image>

<Image condition="is" name="technique_id=T1218.001,technique_name=Compiled HTML File">hh.exe</Image>

<Image condition="is" name="technique_id=T1218.004,technique_name=InstallUtil">installutil.exe</Image>

<Image condition="image" name="technique_id=T1218.005,technique_name=Mshta">mshta.exe</Image>

<Image condition="is" name="technique_id=T1218.005,technique_name=Mshta">mshta.exe</Image>

<Image condition="is" name="technique_id=T1218.010,technique_name=Regsvr32">regsvr32.exe</Image>

<Image condition="contains" name="technique_id=T1218.011,technique_name=rundll32.exe">rundll32.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">InfDefaultInstall.EXE</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">extexport.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">msconfig.EXE</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">msiexec.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">odbcconf.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">PresentationHost.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">rasdlui.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">RegisterCimProvider2.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">RegisterCimProvider.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">ScriptRunner.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">verclsid.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">wab.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">wab.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">wsreset.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">Appvlp.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">csi.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">devtoolslauncher.exe</Image>

<Image condition="contains" name="technique_id=T1218,technique_name=System Binary Proxy Execution">Scriptrunner.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">tttracer.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">msdt.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">rasautou.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">Register-cimprovider.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">diskshadow.exe</Image>

<Image condition="is" name="technique_id=T1218,technique_name=System Binary Proxy Execution">replace.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=System Binary Proxy Execution">jjs.exe</Image>

<Image condition="image" name="technique_id=T1218,technique_name=System Binary Proxy Execution">appcmd.exe</Image>

<Image condition="contains" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">vbc.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">csc.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">dfsvc.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">mftrace.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">dxcap.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">ilasm.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">jsc.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">vbc.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">Microsoft.Workflow.Compiler.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">vsjitdebugger.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">tracker.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">te.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">rcsi.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">Microsoft.Workflow.Compiler.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">jsc.exe</Image>

<Image condition="is" name="technique_id=T1127,technique_name=Trusted Developer Utilities Proxy Execution">MSBuild.exe</Image>

<Image condition="image" name="technique_id=T1137,technique_name=Office Application Startup">excel.exe</Image>

<Image condition="image" name="technique_id=T1137,technique_name=Office Application Startup">winword.exe</Image>

<Image condition="image" name="technique_id=T1137,technique_name=Office Application Startup">powerpnt.exe</Image>

<Image condition="image" name="technique_id=T1137,technique_name=Office Application Startup">outlook.exe</Image>

<Image condition="image" name="technique_id=T1137,technique_name=Office Application Startup">msaccess.exe</Image>

<Image condition="image" name="technique_id=T1137,technique_name=Office Application Startup">mspub.exe</Image>

<TargetFilename condition="begin with">C:\Program Files\Qualys\QualysAgent</TargetFilename>

<Image condition="is" name="technique_id=T1059.003,technique_name=Windows Command Shell">cmd.exe</Image>

<Image condition="image" name="technique_id=T1059.001,technique_name=PowerShell">powershell.exe</Image>

<Image condition="image" name="technique_id=T1059.001,technique_name=PowerShell">pwsh.exe</Image>

<Image condition="image" name="technique_id=T1059.001,technique_name=PowerShell">powershell_ise.exe</Image>

<Image condition="contains" name="technique_id=T1059.001,technique_name=PowerShell">Sqlps.exe</Image>

<TargetFilename condition="contains">\Downloads\</TargetFilename>

<TargetFilename condition="contains">\Appdata\Local\Temp\</TargetFilename>

<TargetFilename condition="contains">\Appdata\Local\Microsoft\Windows\INetCache\Content.Outlook\</TargetFilename>

<Image condition="is" name="technique_id=T1021.006,technique_name=Windows Remote Management">wsmprovhost.exe</Image>

<Image condition="is" name="technique_id=T1021.006,technique_name=Windows Remote Management">winrshost.exe</Image>

<Image condition="image" name="technique_id=T1021.006,technique_name=Windows Remote Management">winrm.cmd</Image>

<TargetFilename condition="begin with">C:\ProgramData\Intel</TargetFilename>

<TargetFilename condition="begin with">C:\ProgramData\Mozilla</TargetFilename>

<TargetFilename condition="begin with">C:\ProgramData\chocolatey\</TargetFilename>

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\DeviceSync</TargetFilename>

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\PlayReady</TargetFilename>

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\User Account Pictures</TargetFilename>

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\Office\Heartbeat</TargetFilename>

<TargetFilename condition="begin with">C:\ProgramData\Microsoft\Windows\WER</TargetFilename>

<TargetFilename condition="begin with">C:\Users\All Users\</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\Tasks</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\tracing</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\System32\Tasks</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\System32\spool\drivers\color</TargetFilename>

<TargetFilename condition="begin with">C:\Windows\SysWOW64\Tasks</TargetFilename>

</FileExecutableDetected>

</RuleGroup>

</EventFiltering>

</Sysmon>
```
