"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[62816],{1969:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>t});var a=r(85893),l=r(11151);const s={title:"Tag 12",tags:["M239","Tag 12","Server","Docker","YAML"]},i="Tag 12: Docker und YAML",c={id:"M239/tag-0012",title:"Tag 12",description:"1 \xdcbung Docker",source:"@site/docs/M239/tag-0012.md",sourceDirName:"M239",slug:"/M239/tag-0012",permalink:"/docs/M239/tag-0012",draft:!1,unlisted:!1,tags:[{label:"M239",permalink:"/docs/tags/m-239"},{label:"Tag 12",permalink:"/docs/tags/tag-12"},{label:"Server",permalink:"/docs/tags/server"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"YAML",permalink:"/docs/tags/yaml"}],version:"current",frontMatter:{title:"Tag 12",tags:["M239","Tag 12","Server","Docker","YAML"]},sidebar:"tutorialSidebar",previous:{title:"Tag 11",permalink:"/docs/M239/tag-0011"},next:{title:"Tag 13",permalink:"/docs/M239/tag-0013"}},d={},t=[{value:"1 \xdcbung Docker",id:"1-\xfcbung-docker",level:2},{value:"1.1 Auftrag 1: Docker installieren",id:"11-auftrag-1-docker-installieren",level:3},{value:"1.2 Auftrag 2: Docker ausprobieren",id:"12-auftrag-2-docker-ausprobieren",level:3},{value:"1.3 Auftrag 3: Administrative Aufgaben",id:"13-auftrag-3-administrative-aufgaben",level:3},{value:"1.4 Auftrag 4: Docker-Image builden",id:"14-auftrag-4-docker-image-builden",level:3},{value:"2 YAML",id:"2-yaml",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"tag-12-docker-und-yaml",children:"Tag 12: Docker und YAML"}),"\n",(0,a.jsx)(n.h2,{id:"1-\xfcbung-docker",children:"1 \xdcbung Docker"}),"\n",(0,a.jsx)(n.h3,{id:"11-auftrag-1-docker-installieren",children:"1.1 Auftrag 1: Docker installieren"}),"\n",(0,a.jsx)(n.admonition,{title:"Auftrag",type:"note",children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Installieren Sie Docker auf der VM - gem\xe4ss der Anleitung im Script"}),"\n"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:'sudo apt update\nsudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io\n'})}),"\n",(0,a.jsx)(n.p,{children:"Version \xfcberpr\xfcfen:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:"docker version\n"})}),"\n",(0,a.jsx)(n.h3,{id:"12-auftrag-2-docker-ausprobieren",children:"1.2 Auftrag 2: Docker ausprobieren"}),"\n",(0,a.jsx)(n.admonition,{title:"Auftrag",type:"note",children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"F\xfchren Sie das obligatorische Hello-World aus"}),"\n",(0,a.jsx)(n.li,{children:"Lassen Sie einen Wal Ihren Namen sagen (direkt \xfcber einen docker run)"}),"\n"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:"docker run hello-world\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:"docker run docker/whalesay cowsay Valentino\n"})}),"\n",(0,a.jsx)(n.h3,{id:"13-auftrag-3-administrative-aufgaben",children:"1.3 Auftrag 3: Administrative Aufgaben"}),"\n",(0,a.jsx)(n.admonition,{title:"Auftrag",type:"note",children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Zeigen Sie sich alle Docker-Images"}),"\n",(0,a.jsx)(n.li,{children:"Zeigen Sie sich alle erstellen Docker-Container an"}),"\n"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:"docker images\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:"docker ps -a\n"})}),"\n",(0,a.jsx)(n.h3,{id:"14-auftrag-4-docker-image-builden",children:"1.4 Auftrag 4: Docker-Image builden"}),"\n",(0,a.jsx)(n.admonition,{title:"Auftrag",type:"note",children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Erstellen Sie f\xfcr ein Whale-Say-Image ein eigenes Dockerfile"}),"\n",(0,a.jsx)(n.li,{children:"Builden Sie das Image mit den Docker-Build Commands"}),"\n"]})}),"\n",(0,a.jsx)(n.p,{children:"Neues Directory f\xfcr Docker Build erstellen:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:"mkdir whalesaydockerbuild\ncd whalesaydockerbuild\n"})}),"\n",(0,a.jsx)(n.p,{children:"Dockerfile erstellen:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:"nano Dockerfile\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:"FROM docker/whalesay:latest\nRUN apt-get -y update && apt-get install -y fortunes\nCMD /usr/games/fortune -a | cowsay\n"})}),"\n",(0,a.jsx)(n.p,{children:"Docker Image erstellen:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:"docker build -t docker-own-whale .\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"build"}),": neues Image erstellen"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"-t [NAME]"}),": Image benennen"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"."}),": Wo liegt das Dockerfile (. = in diesem Directory)"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Docker Image anzeigen (sollte unser neu erstelles anzeigen):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:"docker images\n"})}),"\n",(0,a.jsx)(n.p,{children:"Image ausf\xfchren:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cmd",children:"docker run docker-own-whale\n"})}),"\n",(0,a.jsx)(n.h2,{id:"2-yaml",children:"2 YAML"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started",children:"Hier"})," ist ein gutes Tutorial f\xfcr YAML."]})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var a=r(67294);const l={},s=a.createContext(l);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);