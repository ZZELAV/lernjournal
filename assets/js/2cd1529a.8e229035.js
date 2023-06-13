"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[43483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={},o="Hyper-V deaktivieren",l={unversionedId:"M141/hyperv-deaktivieren",id:"M141/hyperv-deaktivieren",title:"Hyper-V deaktivieren",description:"Die neueren MongoDB-Versionen funktionieren !nicht!, wenn auf Ihrem Windows Host Hyper-V aktiviert ist.",source:"@site/appendix/M141/hyperv-deaktivieren.md",sourceDirName:"M141",slug:"/M141/hyperv-deaktivieren",permalink:"/appendix/M141/hyperv-deaktivieren",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Classic Models Ohne Index",permalink:"/appendix/M141/classicModelsOhneIndex"},next:{title:"MongoDB Dependencies",permalink:"/appendix/M141/mongodb-dependencies"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hyper-v-deaktivieren"},"Hyper-V deaktivieren"),(0,i.kt)("p",null,"Die neueren MongoDB-Versionen funktionieren !nicht!, wenn auf Ihrem Windows Host Hyper-V aktiviert ist."),(0,i.kt)("p",null,"Bitte zwingend folgende Schritte durchf\xfchren vor der Installation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Deaktivieren Sie den Hyper-V-Launcher")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bcdedit /set hypervisorlaunchtype off\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Deaktivieren Sie alle Hyper-V-Features")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DISM /Online /Disable-Feature:Microsoft-Hyper-V\nDISM /Online /Disable-Feature:Microsoft-Hyper-V-All\nDISM /Online /Disable-Feature:Microsoft-Hyper-V\nDISM /Online /Disable-Feature:Microsoft-Hyper-V-Tools-All\nDISM /Online /Disable-Feature:Microsoft-Hyper-V-Management-PowerShell\nDISM /Online /Disable-Feature:Microsoft-Hyper-V-Hypervisor\nDISM /Online /Disable-Feature:Microsoft-Hyper-V-Services\nDISM /Online /Disable-Feature:Microsoft-Hyper-V-Management-Clients\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Deaktivieren Sie "Virtualization Based Security " - hier gibt es verschiedene Wege')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Restarten Sie Ihren Host (Windows)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Starten Sie Ihre VM")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kontrollieren Sie ob die CPU-Instruktionen AVX und AVX2 auf Ihrer VM emuliert werden:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"grep avx /proc/cpuinfo\n")),(0,i.kt)("p",null,"Sie sollten eine Ausgabe (so \xe4hnlich) wie folgt erhalten:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"flags       : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx rdtscp lm constant_tsc rep_good nopl xtopology nonstop_tsc cpuid tsc_known_freq pni pclmulqdq ssse3 cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt aes xsave avx rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single pti fsgsbase bmi1 avx2 bmi2 invpcid rdseed clflushopt md_clear flush_l1d arch_capabilities\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Wenn Sie eine Ausgabe erhalten: alles gut. Sonst nicht.")),(0,i.kt)("admonition",{title:"DISCLAIMER",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Diese Anleitung wurde 1:1 vom M141-Skript von Christian Inauen kopiert")))}d.isMDXComponent=!0}}]);