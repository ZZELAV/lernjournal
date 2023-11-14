"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[20912],{79232:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=r(85893),i=r(11151);const a={title:"Tag 3",tags:["M239","Tag 3","Server","DNS","BIND"]},s="Tag 3: BIND DNS",l={id:"M239/tag-0003",title:"Tag 3",description:"1 BIND9 - DNS-Server",source:"@site/docs/M239/tag-0003.md",sourceDirName:"M239",slug:"/M239/tag-0003",permalink:"/docs/M239/tag-0003",draft:!1,unlisted:!1,tags:[{label:"M239",permalink:"/docs/tags/m-239"},{label:"Tag 3",permalink:"/docs/tags/tag-3"},{label:"Server",permalink:"/docs/tags/server"},{label:"DNS",permalink:"/docs/tags/dns"},{label:"BIND",permalink:"/docs/tags/bind"}],version:"current",frontMatter:{title:"Tag 3",tags:["M239","Tag 3","Server","DNS","BIND"]},sidebar:"tutorialSidebar",previous:{title:"Tag 2",permalink:"/docs/M239/tag-0002"},next:{title:"Tag 4",permalink:"/docs/M239/tag-0004"}},o={},d=[{value:"1 BIND9 - DNS-Server",id:"1-bind9---dns-server",level:2},{value:"1.1 Installation",id:"11-installation",level:3},{value:"1.2 Bedienung",id:"12-bedienung",level:3},{value:"1.3 Konfiguration",id:"13-konfiguration",level:3},{value:"1.3.1 Options",id:"131-options",level:4},{value:"1.3.2 Forward-Zone",id:"132-forward-zone",level:4},{value:"1.3.3 Reverse-Zone",id:"133-reverse-zone",level:4},{value:"1.3.4 Local - Zonen einbinden",id:"134-local---zonen-einbinden",level:4}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tag-3-bind-dns",children:"Tag 3: BIND DNS"}),"\n",(0,t.jsx)(n.h2,{id:"1-bind9---dns-server",children:"1 BIND9 - DNS-Server"}),"\n",(0,t.jsx)(n.p,{children:"BIND (Dienst heisst named) ist ein Open-Source DNS-Server. Als Alternative gibt es den DNS-Server Dnsmasq."}),"\n",(0,t.jsx)(n.h3,{id:"11-installation",children:"1.1 Installation"}),"\n",(0,t.jsx)(n.p,{children:"Um BIND und alle dazuben\xf6tigten Packages zu installieren, kann folgender Befehl genutzt werden:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:"sudo apt install bind9 bind9utils bind9-doc\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"bind9 -> Die eigentliche Software"}),"\n",(0,t.jsx)(n.li,{children:"bind9utils -> Hilfsprogramme"}),"\n",(0,t.jsx)(n.li,{children:"bind9-doc -> Dokumentation zur Software"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"12-bedienung",children:"1.2 Bedienung"}),"\n",(0,t.jsx)(n.p,{children:"Als erstes muss der Dienst zum Autostart hinzugef\xfcgt werden:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:"sudo systemctl enable named\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/appendix/M239/dienste_steuern",children:"Dienste steuern"})}),"\n",(0,t.jsx)(n.h3,{id:"13-konfiguration",children:"1.3 Konfiguration"}),"\n",(0,t.jsx)(n.p,{children:"BIND hat vier Config-Dateien:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"/etc/bind/named.conf.options"}),(0,t.jsx)(n.br,{}),"\n","Enth\xe4lt die Konfigurationsoptionen. Was soll der Server machen, wenn er die DNS-Anfrage nicht beantworten kann."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"/etc/bind/named.conf.local"}),(0,t.jsx)(n.br,{}),"\n","In dieser Datei werden die Zonendatein eingebunden."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"/etc/bind/db.DOMAIN.CH.zone"}),(0,t.jsx)(n.br,{}),"\n","Forward-Zonendatei. Hier werden alle Eintr\xe4ge erfasst welche von Namen zu IP aufgel\xf6st werden sollen. Der Name der Datei kann frei w\xe4hlbar sein. Es macht allerdings Sinn, wenn man sie erkennbar benennt, z.B. *.zone"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"/etc/bind/db.0.0.0.10"}),(0,t.jsx)(n.br,{}),"\n","Reverse-Zonendatei. Wie bei der Forward-Zone werden hier Eintr\xe4ge erfasst, allerdings die Anfragen die von IP zu Namen \xfcbersetzt werden sollen."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"BIND Dateien",src:r(31119).Z+"",width:"1308",height:"510"})}),"\n",(0,t.jsx)(n.h4,{id:"131-options",children:"1.3.1 Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-config",children:'options {\r\n\tdirectory "/var/cache/bind";\r\n\r\n\t// If there is a firewall between you and nameservers you want\r\n\t// to talk to, you may need to fix the firewall to allow multiple\r\n\t// ports to talk.  See http://www.kb.cert.org/vuls/id/800113\r\n\r\n\t// If your ISP provided one or more IP addresses for stable \r\n\t// nameservers, you probably want to use them as forwarders.  \r\n\t// Uncomment the following block, and insert the addresses replacing \r\n\t// the all-0\'s placeholder.\r\n\r\n\tforwarders {\r\n\t\t8.8.8.8;\r\n\t\t4.4.4.4;\r\n\t};\r\n\r\n\t//========================================================================\r\n\t// If BIND logs error messages about the root key being expired,\r\n\t// you will need to update your keys.  See https://www.isc.org/bind-keys\r\n\t//========================================================================\r\n\tdnssec-validation no;\r\n\r\n\trecursion yes;\r\n\r\n\tquerylog yes;\r\n\r\n\tauth-nxdomain no;\r\n\r\n\tlisten-on-v6 { any; };\r\n};\n'})}),"\n",(0,t.jsx)(n.h4,{id:"132-forward-zone",children:"1.3.2 Forward-Zone"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-config",children:";\r\n; BIND data file for local loopback interface\r\n;\r\n$TTL\t604800\r\n@\tIN\tSOA\tbind.PANICOlocal.ch. root.PANICOlocal.ch. (\r\n\t     2022020401\t\t; Serial\r\n\t\t\t 604800\t\t; Refresh\r\n\t\t\t  86400\t\t; Retry\r\n\t\t\t2419200\t\t; Expire\r\n\t\t\t 604800 )      ; Negative Cache TTL\r\n;\r\n@\tIN\tNS  bind\t    ; Nameserver-Eintrag. Wir selber.\r\n@\tIN\tA   10.0.0.200  ; Unsere IP\r\n\r\n; A-Eintr\xe4ge\r\n\r\nbind    IN\tA\t10.0.0.200\r\napache  IN\tA\t10.0.0.100\n"})}),"\n",(0,t.jsx)(n.h4,{id:"133-reverse-zone",children:"1.3.3 Reverse-Zone"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-config",children:";\r\n; BIND reverse data file for local loopback interface\r\n;\r\n$TTL\t604800\r\n@\tIN\tSOA\tbind.PANICOlocal.ch. root.PANICOlocal.ch. (\r\n\t\t\t      1\t\t; Serial\r\n\t\t\t 604800\t\t; Refresh\r\n\t\t\t  86400\t\t; Retry\r\n\t\t\t2419200\t\t; Expire\r\n\t\t\t 604800 )\t; Negative Cache TTL\r\n;\r\n@\tIN\tNS\tbind.PANICOlocal.ch. ; NS Eintrag\r\n\r\n; PTR Eintr\xe4ge\r\n200\tIN\tPTR\tbind.PANICOlocal.ch. ; Dieser Server\r\n100\tIN\tPTR\tapache.PANICOlocal.ch. ; Apache WWW Server\n"})}),"\n",(0,t.jsx)(n.h4,{id:"134-local---zonen-einbinden",children:"1.3.4 Local - Zonen einbinden"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-config",children:'//\r\n// Do any local configuration here\r\n//\r\n\r\n// Consider adding the 1918 zones here, if they are not used in your\r\n// organization\r\n//include "/etc/bind/zones.rfc1918";\r\n\r\n# Forward Zone\r\nzone "panicolocal.ch" {\r\n\ttype master;\r\n\tfile "/etc/bind/PANICOlocal.ch.zone";\r\n};\r\n\r\n# Reverse Zone\r\nzone "0.0.10.in-addr.arpa" {\r\n\ttype master;\r\n\tfile "/etc/bind/db.0.0.10";\r\n};\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Quellen: ",(0,t.jsx)(n.a,{href:"https://wiki.ubuntuusers.de/DNS-Server_Bind/",children:"Beschreibung BIND"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},31119:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/bindDateien-645e53f4a4294e9219115ea8135f849b.svg"},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(67294);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);