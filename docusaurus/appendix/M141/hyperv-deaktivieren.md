# Hyper-V deaktivieren

Die neueren MongoDB-Versionen funktionieren !nicht!, wenn auf Ihrem Windows Host Hyper-V aktiviert ist.

Bitte zwingend folgende Schritte durchführen vor der Installation:

1. Deaktivieren Sie den Hyper-V-Launcher

```
bcdedit /set hypervisorlaunchtype off
```

2. Deaktivieren Sie alle Hyper-V-Features

```
DISM /Online /Disable-Feature:Microsoft-Hyper-V
DISM /Online /Disable-Feature:Microsoft-Hyper-V-All
DISM /Online /Disable-Feature:Microsoft-Hyper-V
DISM /Online /Disable-Feature:Microsoft-Hyper-V-Tools-All
DISM /Online /Disable-Feature:Microsoft-Hyper-V-Management-PowerShell
DISM /Online /Disable-Feature:Microsoft-Hyper-V-Hypervisor
DISM /Online /Disable-Feature:Microsoft-Hyper-V-Services
DISM /Online /Disable-Feature:Microsoft-Hyper-V-Management-Clients
```

3. Deaktivieren Sie "Virtualization Based Security " - hier gibt es verschiedene Wege

4. Restarten Sie Ihren Host (Windows)

5. Starten Sie Ihre VM

6. Kontrollieren Sie ob die CPU-Instruktionen AVX und AVX2 auf Ihrer VM emuliert werden:

```
grep avx /proc/cpuinfo
```

Sie sollten eine Ausgabe (so ähnlich) wie folgt erhalten:

```
flags       : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx rdtscp lm constant_tsc rep_good nopl xtopology nonstop_tsc cpuid tsc_known_freq pni pclmulqdq ssse3 cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt aes xsave avx rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single pti fsgsbase bmi1 avx2 bmi2 invpcid rdseed clflushopt md_clear flush_l1d arch_capabilities
```

**Wenn Sie eine Ausgabe erhalten: alles gut. Sonst nicht.**

:::caution DISCLAIMER

Diese Anleitung wurde 1:1 vom M141-Skript von Christian Inauen kopiert

:::
