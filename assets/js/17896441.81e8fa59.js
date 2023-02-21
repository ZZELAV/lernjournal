(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7918],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=i(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85178:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ht});var a=n(67294),o=n(1944),r=n(902);const l=a.createContext(null);function c(e){let{children:t,content:n}=e;const o=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(l.Provider,{value:o},t)}function s(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=s();return a.createElement(o.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(86010),d=n(87524),u=n(87462),p=n(95999),f=n(39960);function h(e){const{permalink:t,title:n,subLabel:o,isNext:r}=e;return a.createElement(f.Z,{className:(0,m.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}function g(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(h,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(h,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){const{metadata:e}=s();return a.createElement(g,{previous:e.previous,next:e.next})}var v=n(52263),E=n(80143),y=n(35281),k=n(60373),N=n(74477);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function C(e){const t=L[e.versionMetadata.banner];return a.createElement(t,e)}function T(e){let{versionLabel:t,to:n,onClick:o}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(f.Z,{to:n,onClick:o},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,v.Z)(),{pluginId:r}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,k.J)(r),{latestDocSuggestion:c,latestVersionSuggestion:s}=(0,E.Jo)(r),i=c??(d=s).docs.find((e=>e.id===d.mainDocId));var d;return a.createElement("div",{className:(0,m.Z)(t,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(C,{siteTitle:o,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(T,{versionLabel:s.label,to:i.path,onClick:()=>l(s.name)})))}function Z(e){let{className:t}=e;const n=(0,N.E)();return n.banner?a.createElement(_,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,N.E)();return n.badge?a.createElement("span",{className:(0,m.Z)(t,y.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function x(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function B(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function O(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:o}=e;return a.createElement("span",{className:y.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:o?a.createElement(B,{lastUpdatedBy:o}):""}},"Last updated{atDate}{byUser}"),!1)}const A="iconEdit_Z9Sw";function j(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(A,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function H(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:y.k.common.editThisPage},a.createElement(j,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var S=n(13008);const M="tags_jXut",P="tag_QGVx";function I(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,m.Z)(M,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:P},a.createElement(S.Z,{label:t,permalink:n}))}))))}const U="lastUpdated_vwxv";function z(e){return a.createElement("div",{className:(0,m.Z)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(I,e)))}function V(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,m.Z)(y.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(H,{editUrl:t})),a.createElement("div",{className:(0,m.Z)("col",U)},(n||o)&&a.createElement(O,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:o})))}function D(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:r,tags:l}=e,c=l.length>0,i=!!(t||n||r);return c||i?a.createElement("footer",{className:(0,m.Z)(y.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(z,{tags:l}),i&&a.createElement(V,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:o})):null}var R=n(86043),$=n(86668);function W(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function F(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=F({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function q(e){const t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function G(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>q(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function Y(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,$.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function J(e){const t=(0,a.useRef)(void 0),n=Y();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),s=G(c,{anchorTopOffset:n.current}),i=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function Q(e){let{toc:t,className:n,linkClassName:o,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(Q,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}const X=a.memo(Q);function K(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:c,...s}=e;const i=(0,$.L)(),m=l??i.tableOfContents.minHeadingLevel,d=c??i.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,a.useMemo)((()=>F({toc:W(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:m,maxHeadingLevel:d});return J((0,a.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:m,maxHeadingLevel:d}}),[o,r,m,d])),a.createElement(X,(0,u.Z)({toc:p,className:n,linkClassName:o},s))}const ee="tocCollapsibleButton_TO0P",te="tocCollapsibleButtonExpanded_MG3E";function ne(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,m.Z)("clean-btn",ee,!t&&te,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const ae="tocCollapsible_ETCw",oe="tocCollapsibleContent_vkbj",re="tocCollapsibleExpanded_sAul";function le(e){let{toc:t,className:n,minHeadingLevel:o,maxHeadingLevel:r}=e;const{collapsed:l,toggleCollapsed:c}=(0,R.u)({initialState:!0});return a.createElement("div",{className:(0,m.Z)(ae,!l&&re,n)},a.createElement(ne,{collapsed:l,onClick:c}),a.createElement(R.z,{lazy:!0,className:oe,collapsed:l},a.createElement(K,{toc:t,minHeadingLevel:o,maxHeadingLevel:r})))}const ce="tocMobile_ITEo";function se(){const{toc:e,frontMatter:t}=s();return a.createElement(le,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(y.k.docs.docTocMobile,ce)})}const ie="tableOfContents_bqdL";function me(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,m.Z)(ie,"thin-scrollbar",t)},a.createElement(K,(0,u.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function de(){const{toc:e,frontMatter:t}=s();return a.createElement(me,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:y.k.docs.docTocDesktop})}const ue="anchorWithStickyNavbar_LWe7",pe="anchorWithHideOnScrollNavbar_WYt5";function fe(e){let{as:t,id:n,...o}=e;const{navbar:{hideOnScroll:r}}=(0,$.L)();if("h1"===t||!n)return a.createElement(t,(0,u.Z)({},o,{id:void 0}));const l=(0,p.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof o.children?o.children:n});return a.createElement(t,(0,u.Z)({},o,{className:(0,m.Z)("anchor",r?pe:ue,o.className),id:n}),o.children,a.createElement(f.Z,{className:"hash-link",to:`#${n}`,"aria-label":l,title:l},"\u200b"))}var he=n(3905),ge=n(35742);var be=n(72389),ve=n(92949);function Ee(){const{prism:e}=(0,$.L)(),{colorMode:t}=(0,ve.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var ye=n(87594),ke=n.n(ye);const Ne=/title=(?<quote>["'])(?<title>.*?)\1/,Le=/\{(?<range>[\d,-]+)\}/,Ce={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function Te(e,t){const n=e.map((e=>{const{start:n,end:a}=Ce[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function _e(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:o,metastring:r}=t;if(r&&Le.test(r)){const e=r.match(Le).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,a=ke()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Te(["js","jsBlock"],t);case"jsx":case"tsx":return Te(["js","jsBlock","jsx"],t);case"html":return Te(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Te(["bash"],t);case"markdown":case"md":return Te(["html","jsx","bash"],t);default:return Te(Object.keys(Ce),t)}}(a,o),c=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(l);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${p},`:m[t]?s[m[t]].start=p:d[t]&&(s[d[t]].range+=`${s[d[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const u={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;ke()(n).forEach((e=>{u[e]??=[],u[e].push(t)}))})),{lineClassNames:u,code:n}}const Ze="codeBlockContainer_Ckt0";function we(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,o]=e;const r=t[a];r&&"string"==typeof o&&(n[r]=o)})),n}(Ee());return a.createElement(t,(0,u.Z)({},n,{style:o,className:(0,m.Z)(n.className,Ze,y.k.common.codeBlock)}))}const xe={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Be(e){let{children:t,className:n}=e;return a.createElement(we,{as:"pre",tabIndex:0,className:(0,m.Z)(xe.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:xe.codeBlockLines},t))}const Oe={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Ae(e,t){const[n,o]=(0,a.useState)(),l=(0,a.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((()=>{l()}),[l]),function(e,t,n){void 0===n&&(n=Oe);const o=(0,r.zX)(t),l=(0,r.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,l),()=>t.disconnect()}),[e,o,l])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const je={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var He={Prism:n(87410).Z,theme:je};function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Me(){return Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Me.apply(this,arguments)}var Pe=/\r\n|\r|\n/,Ie=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Ue=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},ze=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=Me({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=Me({},n,{backgroundColor:null}),o};function Ve(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const De=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Se(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?ze(e.theme,e.language):void 0;return t.themeDict=n})),Se(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=Me({},Ve(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?Me({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),Se(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(c))}})),Se(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=Me({},Ve(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?Me({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),Se(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,c=[],s=[c];l>-1;){for(;(r=a[l]++)<o[l];){var i=void 0,m=t[l],d=n[l][r];if("string"==typeof d?(m=l>0?m:["plain"],i=d):(m=Ue(m,d.type),d.alias&&(m=Ue(m,d.alias)),i=d.content),"string"==typeof i){var u=i.split(Pe),p=u.length;c.push({types:m,content:u[0]});for(var f=1;f<p;f++)Ie(c),s.push(c=[]),c.push({types:m,content:u[f]})}else l++,t.push(m),n.push(i),a.push(0),o.push(i.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return Ie(c),s}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),Re="codeLine_lJS_",$e="codeLineNumber_Tfdd",We="codeLineContent_feaV";function Fe(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:r,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=r({line:t,className:(0,m.Z)(n,o&&Re)}),s=t.map(((e,t)=>a.createElement("span",(0,u.Z)({key:t},l({token:e,key:t})))));return a.createElement("span",c,o?a.createElement(a.Fragment,null,a.createElement("span",{className:$e}),a.createElement("span",{className:We},s)):s,a.createElement("br",null))}const qe={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Ge(e){let{code:t,className:n}=e;const[o,r]=(0,a.useState)(!1),l=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(t),r(!0),l.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),a.createElement("button",{type:"button","aria-label":o?(0,p.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,p.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,m.Z)("clean-btn",n,qe.copyButton,o&&qe.copyButtonCopied),onClick:c},a.createElement("span",{className:qe.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:qe.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:qe.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Ye="wordWrapButtonIcon_Bwma",Je="wordWrapButtonEnabled_EoeP";function Qe(e){let{className:t,onClick:n,isEnabled:o}=e;const r=(0,p.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,m.Z)("clean-btn",t,o&&Je),"aria-label":r,title:r},a.createElement("svg",{className:Ye,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function Xe(e){let{children:t,className:n="",metastring:o,title:r,showLineNumbers:l,language:c}=e;const{prism:{defaultLanguage:s,magicComments:i}}=(0,$.L)(),d=c??n.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")??s;const p=Ee(),f=function(){const[e,t]=(0,a.useState)(!1),[n,o]=(0,a.useState)(!1),r=(0,a.useRef)(null),l=(0,a.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");o(n)}),[r]);return Ae(r,c),(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:l}}(),h=function(e){return e?.match(Ne)?.groups.title??""}(o)||r,{lineClassNames:g,code:b}=_e(t,{metastring:o,language:d,magicComments:i}),v=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return a.createElement(we,{as:"div",className:(0,m.Z)(n,d&&!n.includes(`language-${d}`)&&`language-${d}`)},h&&a.createElement("div",{className:xe.codeBlockTitle},h),a.createElement("div",{className:xe.codeBlockContent},a.createElement(De,(0,u.Z)({},He,{theme:p,code:b,language:d??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:r}=e;return a.createElement("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,m.Z)(t,xe.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,m.Z)(xe.codeBlockLines,v&&xe.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(Fe,{key:t,line:e,getLineProps:o,getTokenProps:r,classNames:g[t],showLineNumbers:v})))))})),a.createElement("div",{className:xe.buttonGroup},(f.isEnabled||f.isCodeScrollable)&&a.createElement(Qe,{className:xe.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),a.createElement(Ge,{className:xe.codeButton,code:b}))))}function Ke(e){let{children:t,...n}=e;const o=(0,be.Z)(),r=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof r?Xe:Be;return a.createElement(l,(0,u.Z)({key:String(o)},n),r)}const et="details_lb9f",tt="isBrowser_bmU9",nt="collapsibleContent_i85q";function at(e){return!!e&&("SUMMARY"===e.tagName||at(e.parentElement))}function ot(e,t){return!!e&&(e===t||ot(e.parentElement,t))}function rt(e){let{summary:t,children:n,...o}=e;const r=(0,be.Z)(),l=(0,a.useRef)(null),{collapsed:c,setCollapsed:s}=(0,R.u)({initialState:!o.open}),[i,d]=(0,a.useState)(o.open);return a.createElement("details",(0,u.Z)({},o,{ref:l,open:i,"data-collapsed":c,className:(0,m.Z)(et,r&&tt,o.className),onMouseDown:e=>{at(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;at(t)&&ot(t,l.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),t??a.createElement("summary",null,"Details"),a.createElement(R.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),d(!e)}},a.createElement("div",{className:nt},n)))}const lt="details_b_Ee";function ct(e){let{...t}=e;return a.createElement(rt,(0,u.Z)({},t,{className:(0,m.Z)("alert alert--info",lt,t.className)}))}function st(e){return a.createElement(fe,e)}const it="containsTaskList_mC6p";const mt="img_ev3q";const dt="admonition_LlT9",ut="admonitionHeading_tbUL",pt="admonitionIcon_kALy",ft="admonitionContent_S0QG";const ht={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(p.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(p.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(p.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},gt={secondary:"note",important:"info",success:"tip",warning:"danger"};function bt(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}const vt={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return a.createElement(e.props.originalType,o)}return e}(e):e));return a.createElement(ge.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(Ke,e)},a:function(e){return a.createElement(f.Z,e)},pre:function(e){return a.createElement(Ke,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(ct,(0,u.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,u.Z)({},e,{className:(t=e.className,(0,m.Z)(t,t?.includes("contains-task-list")&&it))}));var t},img:function(e){return a.createElement("img",(0,u.Z)({loading:"lazy"},e,{className:(t=e.className,(0,m.Z)(t,mt))}));var t},h1:e=>a.createElement(st,(0,u.Z)({as:"h1"},e)),h2:e=>a.createElement(st,(0,u.Z)({as:"h2"},e)),h3:e=>a.createElement(st,(0,u.Z)({as:"h3"},e)),h4:e=>a.createElement(st,(0,u.Z)({as:"h4"},e)),h5:e=>a.createElement(st,(0,u.Z)({as:"h5"},e)),h6:e=>a.createElement(st,(0,u.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:r}=bt(e),l=function(e){const t=gt[e]??e,n=ht[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),ht.info)}(n),c=o??l.label,{iconComponent:s}=l,i=r??a.createElement(s,null);return a.createElement("div",{className:(0,m.Z)(y.k.common.admonition,y.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,dt)},a.createElement("div",{className:ut},a.createElement("span",{className:pt},i),c),a.createElement("div",{className:ft},t))},mermaid:()=>null};function Et(e){let{children:t}=e;return a.createElement(he.Zo,{components:vt},t)}function yt(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,m.Z)(y.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(fe,{as:"h1"},n)),a.createElement(Et,null,t))}var kt=n(52802),Nt=n(48596),Lt=n(44996);function Ct(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const Tt="breadcrumbHomeIcon_YNFT";function _t(){const e=(0,Lt.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(f.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(Ct,{className:Tt})))}const Zt="breadcrumbsContainer_Z_bl";function wt(e){let{children:t,href:n,isLast:o}=e;const r="breadcrumbs__link";return o?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(f.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function xt(e){let{children:t,active:n,index:o,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,m.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(o+1)}))}function Bt(){const e=(0,kt.s1)(),t=(0,Nt.Ns)();return e?a.createElement("nav",{className:(0,m.Z)(y.k.docs.docBreadcrumbs,Zt),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(_t,null),e.map(((t,n)=>{const o=n===e.length-1;return a.createElement(xt,{key:n,active:o,index:n,addMicrodata:!!t.href},a.createElement(wt,{href:t.href,isLast:o},t.label))})))):null}const Ot="docItemContainer_Djhp",At="docItemCol_VOVn";function jt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,d.i)(),o=e.hide_table_of_contents,r=!o&&t.length>0;return{hidden:o,mobile:r?a.createElement(se,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(de,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",!n.hidden&&At)},a.createElement(Z,null),a.createElement("div",{className:Ot},a.createElement("article",null,a.createElement(Bt,null),a.createElement(w,null),n.mobile,a.createElement(yt,null,t),a.createElement(D,null)),a.createElement(b,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function Ht(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(o.FG,{className:t},a.createElement(i,null),a.createElement(jt,null,a.createElement(n,null))))}},13008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294),o=n(86010),r=n(39960);const l="tag_zVej",c="tagRegular_sFm0",s="tagWithCount_h2kH";function i(e){let{permalink:t,label:n,count:i}=e;return a.createElement(r.Z,{href:t,className:(0,o.Z)(l,i?s:c)},n,i&&a.createElement("span",null,i))}},74477:(e,t,n)=>{"use strict";n.d(t,{E:()=>c,q:()=>l});var a=n(67294),o=n(902);const r=a.createContext(null);function l(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new o.i6("DocsVersionProvider");return e}},87594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);