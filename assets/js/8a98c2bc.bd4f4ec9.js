"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),g=n,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||l;return r?a.createElement(m,o(o({ref:t},s),{},{components:r})):a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={title:"Tag 12",tags:["M239","Tag 12","Server","Docker","YAML"]},o="Tag 12: Docker und YAML",i={unversionedId:"M239/tag-0012",id:"M239/tag-0012",title:"Tag 12",description:"1 \xdcbung Docker",source:"@site/docs/M239/tag-0012.md",sourceDirName:"M239",slug:"/M239/tag-0012",permalink:"/docs/M239/tag-0012",draft:!1,tags:[{label:"M239",permalink:"/docs/tags/m-239"},{label:"Tag 12",permalink:"/docs/tags/tag-12"},{label:"Server",permalink:"/docs/tags/server"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"YAML",permalink:"/docs/tags/yaml"}],version:"current",frontMatter:{title:"Tag 12",tags:["M239","Tag 12","Server","Docker","YAML"]},sidebar:"tutorialSidebar",previous:{title:"Tag 11",permalink:"/docs/M239/tag-0011"},next:{title:"Tag 13",permalink:"/docs/M239/tag-0013"}},c={},u=[{value:"1 \xdcbung Docker",id:"1-\xfcbung-docker",level:2},{value:"1.1 Auftrag 1: Docker installieren",id:"11-auftrag-1-docker-installieren",level:3},{value:"1.2 Auftrag 2: Docker ausprobieren",id:"12-auftrag-2-docker-ausprobieren",level:3},{value:"1.3 Auftrag 3: Administrative Aufgaben",id:"13-auftrag-3-administrative-aufgaben",level:3},{value:"1.4 Auftrag 4: Docker-Image builden",id:"14-auftrag-4-docker-image-builden",level:3},{value:"2 YAML",id:"2-yaml",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tag-12-docker-und-yaml"},"Tag 12: Docker und YAML"),(0,n.kt)("h2",{id:"1-\xfcbung-docker"},"1 \xdcbung Docker"),(0,n.kt)("h3",{id:"11-auftrag-1-docker-installieren"},"1.1 Auftrag 1: Docker installieren"),(0,n.kt)("admonition",{title:"Auftrag",type:"note"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Installieren Sie Docker auf der VM - gem\xe4ss der Anleitung im Script"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},'sudo apt update\nsudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io\n')),(0,n.kt)("p",null,"Version \xfcberpr\xfcfen:  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"docker version\n")),(0,n.kt)("h3",{id:"12-auftrag-2-docker-ausprobieren"},"1.2 Auftrag 2: Docker ausprobieren"),(0,n.kt)("admonition",{title:"Auftrag",type:"note"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"F\xfchren Sie das obligatorische Hello-World aus"),(0,n.kt)("li",{parentName:"ol"},"Lassen Sie einen Wal Ihren Namen sagen (direkt \xfcber einen docker run)"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"docker run hello-world\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"docker run docker/whalesay cowsay Valentino\n")),(0,n.kt)("h3",{id:"13-auftrag-3-administrative-aufgaben"},"1.3 Auftrag 3: Administrative Aufgaben"),(0,n.kt)("admonition",{title:"Auftrag",type:"note"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Zeigen Sie sich alle Docker-Images"),(0,n.kt)("li",{parentName:"ol"},"Zeigen Sie sich alle erstellen Docker-Container an"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"docker images\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"docker ps -a\n")),(0,n.kt)("h3",{id:"14-auftrag-4-docker-image-builden"},"1.4 Auftrag 4: Docker-Image builden"),(0,n.kt)("admonition",{title:"Auftrag",type:"note"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Erstellen Sie f\xfcr ein Whale-Say-Image ein eigenes Dockerfile"),(0,n.kt)("li",{parentName:"ol"},"Builden Sie das Image mit den Docker-Build Commands"))),(0,n.kt)("p",null,"Neues Directory f\xfcr Docker Build erstellen:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"mkdir whalesaydockerbuild\ncd whalesaydockerbuild\n")),(0,n.kt)("p",null,"Dockerfile erstellen:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"nano Dockerfile\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"FROM docker/whalesay:latest\nRUN apt-get -y update && apt-get install -y fortunes\nCMD /usr/games/fortune -a | cowsay\n")),(0,n.kt)("p",null,"Docker Image erstellen:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"docker build -t docker-own-whale .\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"build"),": neues Image erstellen"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-t [NAME]"),": Image benennen"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"."),": Wo liegt das Dockerfile (. = in diesem Directory)")),(0,n.kt)("p",null,"Docker Image anzeigen (sollte unser neu erstelles anzeigen):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"docker images\n")),(0,n.kt)("p",null,"Image ausf\xfchren:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"docker run docker-own-whale\n")),(0,n.kt)("h2",{id:"2-yaml"},"2 YAML"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started"},"Hier")," ist ein gutes Tutorial f\xfcr YAML."))}d.isMDXComponent=!0}}]);