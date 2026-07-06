const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.C-wlulYK.js","assets/chunks/framework.BcI6aB5X.js"])))=>i.map(i=>d[i]);
import{d as K,c as h,r as y,n as U,o as u,a as Ae,t as B,b as E,w as k,T as ht,e as S,_ as L,u as un,i as ci,f as ui,g as _e,h as T,j as p,k as m,l as ve,m as jt,p as ke,q as di,s as ft,v as pi,x as Cn,y as G,z as ce,A as ss,B as dn,C as pn,D as Ht,E as On,F as is,G as R,H as z,I as Ce,J as O,K as pe,L as os,M as mi,N as hi,O as ge,P as En,Q as as,R as fi,S as tt,U as rs,V as ls,W as bi,X as Rt,Y as gi,Z as yi,$ as cs,a0 as us,a1 as vi,a2 as ds,a3 as ps,a4 as ms,a5 as _i,a6 as en,a7 as Gn}from"./framework.BcI6aB5X.js";const ki=K({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(u(),h("span",{class:U(["VPBadge",t.type])},[y(e.$slots,"default",{},()=>[Ae(B(t.text),1)])],2))}}),wi={key:0,class:"VPBackdrop"},xi=K({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(u(),E(ht,{name:"fade"},{default:k(()=>[t.show?(u(),h("div",wi)):S("",!0)]),_:1}))}}),Si=L(xi,[["__scopeId","data-v-a61a1050"]]),F=un;function $i(t,e){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(t,e):(t(),(s=!0)&&setTimeout(()=>s=!1,e))}}function st(t){return t.startsWith("/")?t:`/${t}`}function bt(t){const{pathname:e,search:n,hash:s,protocol:i}=new URL(t,"http://a.com");if(ci(t)||t.startsWith("#")||!i.startsWith("http")||!ui(e))return t;const{site:o}=F(),a=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,o.value.cleanUrls?"":".html")}${n}${s}`);return _e(a)}function mn({correspondingLink:t=!1}={}){const{site:e,localeIndex:n,page:s,theme:i,hash:o}=F(),a=T(()=>({label:e.value.locales[n.value]?.label,link:e.value.locales[n.value]?.link||(n.value==="root"?"/":`/${n.value}/`)}));return{localeLinks:T(()=>Object.entries(e.value.locales).flatMap(([l,c])=>a.value.label===c.label?[]:{text:c.label,link:Pi(c.link||(l==="root"?"/":`/${l}/`),i.value.i18nRouting!==!1&&t,s.value.relativePath.slice(a.value.link.length-1),!e.value.cleanUrls)+o.value,lang:c.lang,dir:c.dir})),currentLang:a}}function Pi(t,e,n,s){return e?t.replace(/\/$/,"")+st(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,s?".html":"")):t}const Ai={class:"NotFound"},Ti={class:"code"},Ki={class:"title"},Ni={class:"quote"},Ii={class:"action"},Li=["href","aria-label"],Ci=K({__name:"NotFound",setup(t){const{theme:e}=F(),{currentLang:n}=mn();return(s,i)=>(u(),h("div",Ai,[p("p",Ti,B(m(e).notFound?.code??"404"),1),p("h1",Ki,B(m(e).notFound?.title??"PAGE NOT FOUND"),1),i[0]||(i[0]=p("div",{class:"divider"},null,-1)),p("blockquote",Ni,B(m(e).notFound?.quote??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),p("div",Ii,[p("a",{class:"link",href:m(_e)(m(e).notFound?.link??m(n).link),"aria-label":m(e).notFound?.linkLabel??"go to home"},B(m(e).notFound?.linkText??"Take me home"),9,Li)])]))}}),Oi=L(Ci,[["__scopeId","data-v-0131579c"]]);function hs(t,e){if(Array.isArray(t))return Pn(t);if(t==null)return[];e=st(e);const n=Object.keys(t).sort((i,o)=>o.split("/").length-i.split("/").length).find(i=>e.startsWith(st(i))),s=n?t[n]:[];return Array.isArray(s)?Pn(s):Pn(s.items,s.base)}function Ei(t){const e=[];let n=0;for(const s in t){const i=t[s];if(i.items){n=e.push(i);continue}e[n]||e.push({items:[]}),e[n].items.push(i)}return e}function Bi(t){const e=[];function n(s){for(const i of s)i.text&&i.link&&e.push({text:i.text,link:i.link,docFooterText:i.docFooterText}),i.items&&n(i.items)}return n(t),e}function it(t,e){return Array.isArray(e)?e.some(n=>it(t,n)):ve(t,e.link)?!0:e.items?it(t,e.items):!1}function Pn(t,e){return[...t].map(n=>{const s={...n},i=s.base||e;return i&&s.link&&(s.link=i+s.link.replace(/^\//,i.endsWith("/")?"":"/")),s.items&&(s.items=Pn(s.items,i)),s})}function Di(){const{hasSidebar:t}=we(),e=jt("(min-width: 960px)"),n=jt("(min-width: 1280px)");return{isAsideEnabled:T(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const Mi=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,ot=[];function fs(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Vi(t){const e=[...document.querySelectorAll(".VPDoc h1, .VPDoc h2, .VPDoc h3, .VPDoc h4, .VPDoc h5, .VPDoc h6")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const s=Number(n.tagName[1]);return{element:n,title:ji(n),link:"#"+n.id,level:s}});return Hi(e,t)}function ji(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(Mi.test(n.className))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function Hi(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[s,i]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return Ui(t,s,i)}function Ri(t,e){const{isAsideEnabled:n}=Di(),s=$i(o,100);let i=null;ke(()=>{requestAnimationFrame(o),window.addEventListener("scroll",s)}),di(()=>{a(location.hash)}),ft(()=>{window.removeEventListener("scroll",s)});function o(){if(!n.value)return;const r=window.scrollY,l=window.innerHeight,c=document.body.offsetHeight,g=Math.abs(r+l-c)<1,d=ot.map(({element:_,link:w})=>({link:w,top:Fi(_)})).filter(({top:_})=>!Number.isNaN(_)).sort((_,w)=>_.top-w.top);if(!d.length){a(null);return}if(r<1){a(null);return}if(g){a(d[d.length-1].link);return}let f=null;for(const{link:_,top:w}of d){if(w>r+pi()+4)break;f=_}a(f)}function a(r){i&&i.classList.remove("active"),r==null?i=null:i=t.value.querySelector(`a[href="${decodeURIComponent(r)}"]`);const l=i;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function Fi(t){let e=0;for(;t!==document.body;){if(t===null)return NaN;e+=t.offsetTop,t=t.offsetParent}return e}function Ui(t,e,n){ot.length=0;const s=[],i=[];return t.forEach(o=>{const a={...o,children:[]};let r=i[i.length-1];for(;r&&r.level>=a.level;)i.pop(),r=i[i.length-1];if(a.element.classList.contains("ignore-header")||r&&"shouldIgnore"in r){i.push({level:a.level,shouldIgnore:!0});return}a.level>n||a.level<e||(ot.push({element:a.element,link:a.link}),r?r.children.push(a):s.push(a),i.push(a))}),s}const je=G(!1);function qi(t){let e;Cn(()=>{e=je.value?document.activeElement:void 0}),ke(()=>{window.addEventListener("keyup",n)}),ft(()=>{window.removeEventListener("keyup",n)});function n(s){s.key==="Escape"&&je.value&&(t(),e?.focus())}}function zi(){function t(){je.value=!0}function e(){je.value=!1}function n(){je.value?e():t()}return{isOpen:je,open:t,close:e,toggle:n}}function Gi(t){const{page:e,hash:n}=F(),s=G(!1),i=T(()=>t.value.collapsed!=null),o=T(()=>!!t.value.link),a=G(!1),r=()=>{a.value=ve(e.value.relativePath,t.value.link)};ce([e,t,n],r),ke(r);const l=T(()=>a.value?!0:t.value.items?it(e.value.relativePath,t.value.items):!1),c=T(()=>!!(t.value.items&&t.value.items.length));Cn(()=>{s.value=!!(i.value&&t.value.collapsed)}),ss(()=>{(a.value||l.value)&&(s.value=!1)});function g(){i.value&&(s.value=!s.value)}return{collapsed:s,collapsible:i,isLink:o,isActiveLink:a,hasActiveLink:l,hasChildren:c,toggle:g}}const at=On([]),on=On([]),rt=On(!1);function we(){const{frontmatter:t,theme:e}=F(),n=T(()=>!!(t.value.isHome??t.value.layout==="home")),s=T(()=>t.value.sidebar!==!1&&on.value.length>0&&!n.value),i=T(()=>s.value&&rt.value),o=T(()=>s.value?Ei(on.value):[]),a=T(()=>n.value?!1:t.value.aside!=null?!!t.value.aside:e.value.aside!==!1),r=T(()=>a.value?t.value.aside==null?e.value.aside==="left":t.value.aside==="left":!1),l=T(()=>at.value.length>0);return{isHome:n,sidebar:Ht(on),sidebarGroups:o,hasSidebar:s,isSidebarEnabled:i,hasAside:a,leftAside:r,headers:Ht(at),hasLocalNav:l}}function Wi({closeSidebar:t}){const{frontmatter:e,page:n,theme:s}=F();ce(()=>[n.value.relativePath,s.value.sidebar],([o,a])=>{const r=a?hs(a,o):[];JSON.stringify(r)!==JSON.stringify(on.value)&&(on.value=r)},{immediate:!0,deep:!0,flush:"sync"}),is(()=>{at.value=Vi(e.value.outline??s.value.outline)}),dn&&(rt.value=window.innerWidth>=960,window.addEventListener("resize",()=>{rt.value=window.innerWidth>=960},{passive:!0}));const i=pn();ce(()=>i.path,t),qi(t)}const bs=Symbol("layout-info"),Ji=["href","title"],Yi=K({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){return(e,n)=>{const s=Ce("VPDocOutlineItem",!0);return u(),h("ul",{class:U(["VPDocOutlineItem",t.root?"root":"nested"])},[(u(!0),h(R,null,z(t.headers,({children:i,link:o,title:a})=>(u(),h("li",null,[p("a",{class:"outline-link",href:o,title:a},B(a),9,Ji),i?.length?(u(),E(s,{key:0,headers:i},null,8,["headers"])):S("",!0)]))),256))],2)}}}),gs=L(Yi,[["__scopeId","data-v-fd0b2347"]]),Qi={class:"content"},Xi={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Zi=K({__name:"VPDocAsideOutline",setup(t){const{theme:e}=F(),n=G(),s=G(),{headers:i,hasLocalNav:o}=we();return Ri(n,s),(a,r)=>(u(),h("nav",{"aria-labelledby":"doc-outline-aria-label",class:U(["VPDocAsideOutline",{"has-outline":m(o)}]),ref_key:"container",ref:n},[p("div",Qi,[p("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),p("div",Xi,B(m(fs)(m(e))),1),O(gs,{headers:m(i),root:!0},null,8,["headers"])])],2))}}),eo=L(Zi,[["__scopeId","data-v-2b6c052e"]]),no={class:"VPDocAsideCarbonAds"},to=K({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,s)=>(u(),h("div",no,[O(m(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),so={class:"VPDocAside"},io=K({__name:"VPDocAside",setup(t){const{theme:e}=F();return(n,s)=>(u(),h("div",so,[y(n.$slots,"aside-top",{},void 0,!0),y(n.$slots,"aside-outline-before",{},void 0,!0),O(eo),y(n.$slots,"aside-outline-after",{},void 0,!0),s[0]||(s[0]=p("div",{class:"spacer"},null,-1)),y(n.$slots,"aside-ads-before",{},void 0,!0),m(e).carbonAds?(u(),E(to,{key:0,"carbon-ads":m(e).carbonAds},null,8,["carbon-ads"])):S("",!0),y(n.$slots,"aside-ads-after",{},void 0,!0),y(n.$slots,"aside-bottom",{},void 0,!0)]))}}),oo=L(io,[["__scopeId","data-v-9f53c12c"]]);function ao(){const{theme:t,page:e}=F();return T(()=>{const{text:n="Edit this page",pattern:s=""}=t.value.editLink||{};let i;return typeof s=="function"?i=s(e.value):i=s.replace(/:path/g,e.value.filePath),{url:i,text:n}})}function ro(){const{page:t,theme:e,frontmatter:n}=F();return T(()=>{const s=hs(e.value.sidebar,t.value.relativePath),i=Bi(s),o=lo(i,c=>c.link.replace(/[?#].*$/,"")),a=o.findIndex(c=>ve(t.value.relativePath,c.link)),r=e.value.docFooter?.prev===!1&&!n.value.prev||n.value.prev===!1,l=e.value.docFooter?.next===!1&&!n.value.next||n.value.next===!1;return{prev:r?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??o[a-1]?.docFooterText??o[a-1]?.text,link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??o[a-1]?.link},next:l?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??o[a+1]?.docFooterText??o[a+1]?.text,link:(typeof n.value.next=="object"?n.value.next.link:void 0)??o[a+1]?.link}}})}function lo(t,e){const n=new Set;return t.filter(s=>{const i=e(s);return n.has(i)?!1:n.add(i)})}const me=K({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=T(()=>e.tag??(e.href?"a":"span")),s=T(()=>e.href&&os.test(e.href)||e.target==="_blank");return(i,o)=>(u(),E(pe(n.value),{class:U(["VPLink",{link:t.href,"vp-external-link-icon":s.value,"no-icon":t.noIcon}]),href:t.href?m(bt)(t.href):void 0,target:t.target??(s.value?"_blank":void 0),rel:t.rel??(s.value?"noreferrer":void 0)},{default:k(()=>[y(i.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),co={class:"VPLastUpdated"},uo=["datetime"],po=K({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,lang:s}=F(),{language:i}=hi(),o=mi("timeRef"),a=T(()=>new Date(n.value.lastUpdated)),r=T(()=>a.value.toISOString()),l=On("");return ke(()=>{Cn(()=>{const c=e.value.lastUpdated?.formatOptions?.forceLocale?s.value:i.value;l.value=new Intl.DateTimeFormat(c,e.value.lastUpdated?.formatOptions??{dateStyle:"medium",timeStyle:"medium"}).format(a.value),c&&s.value!==c?o.value?.setAttribute("lang",c):o.value?.removeAttribute("lang")})}),(c,g)=>(u(),h("p",co,[Ae(B(m(e).lastUpdated?.text||m(e).lastUpdatedText||"Last updated")+": ",1),p("time",{ref_key:"timeRef",ref:o,datetime:r.value},B(l.value),9,uo)]))}}),mo=L(po,[["__scopeId","data-v-786e4bbc"]]),ho={key:0,class:"VPDocFooter"},fo={key:0,class:"edit-info"},bo={key:0,class:"edit-link"},go={key:1,class:"last-updated"},yo={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},vo={class:"pager"},_o=["innerHTML"],ko=["innerHTML"],wo={class:"pager"},xo=["innerHTML"],So=["innerHTML"],$o=K({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:s}=F(),i=ao(),o=ro(),a=T(()=>e.value.editLink&&s.value.editLink!==!1),r=T(()=>n.value.lastUpdated),l=T(()=>a.value||r.value||o.value.prev||o.value.next);return(c,g)=>l.value?(u(),h("footer",ho,[y(c.$slots,"doc-footer-before",{},void 0,!0),a.value||r.value?(u(),h("div",fo,[a.value?(u(),h("div",bo,[O(me,{class:"edit-link-button",href:m(i).url,"no-icon":!0},{default:k(()=>[g[0]||(g[0]=p("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Ae(" "+B(m(i).text),1)]),_:1},8,["href"])])):S("",!0),r.value?(u(),h("div",go,[O(mo)])):S("",!0)])):S("",!0),m(o).prev?.link||m(o).next?.link?(u(),h("nav",yo,[g[1]||(g[1]=p("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),p("div",vo,[m(o).prev?.link?(u(),E(me,{key:0,class:"pager-link prev",href:m(o).prev.link},{default:k(()=>[p("span",{class:"desc",innerHTML:m(e).docFooter?.prev||"Previous page"},null,8,_o),p("span",{class:"title",innerHTML:m(o).prev.text},null,8,ko)]),_:1},8,["href"])):S("",!0)]),p("div",wo,[m(o).next?.link?(u(),E(me,{key:0,class:"pager-link next",href:m(o).next.link},{default:k(()=>[p("span",{class:"desc",innerHTML:m(e).docFooter?.next||"Next page"},null,8,xo),p("span",{class:"title",innerHTML:m(o).next.text},null,8,So)]),_:1},8,["href"])):S("",!0)])])):S("",!0)])):S("",!0)}}),Po=L($o,[["__scopeId","data-v-1259db91"]]),Ao={class:"container"},To={class:"aside-container"},Ko={class:"aside-content"},No={class:"content"},Io={class:"content-container"},Lo={class:"main"},Co=K({__name:"VPDoc",setup(t){const{theme:e}=F(),n=pn(),{hasSidebar:s,hasAside:i,leftAside:o}=we(),a=T(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(r,l)=>{const c=Ce("Content");return u(),h("div",{class:U(["VPDoc",{"has-sidebar":m(s),"has-aside":m(i)}])},[y(r.$slots,"doc-top",{},void 0,!0),p("div",Ao,[m(i)?(u(),h("div",{key:0,class:U(["aside",{"left-aside":m(o)}])},[l[0]||(l[0]=p("div",{class:"aside-curtain"},null,-1)),p("div",To,[p("div",Ko,[O(oo,null,{"aside-top":k(()=>[y(r.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[y(r.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[y(r.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[y(r.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[y(r.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[y(r.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):S("",!0),p("div",No,[p("div",Io,[y(r.$slots,"doc-before",{},void 0,!0),p("main",Lo,[O(c,{class:U(["vp-doc",[a.value,m(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),O(Po,null,{"doc-footer-before":k(()=>[y(r.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),y(r.$slots,"doc-after",{},void 0,!0)])])]),y(r.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Oo=L(Co,[["__scopeId","data-v-375e8c13"]]),Eo=K({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const e=t,n=T(()=>e.href&&os.test(e.href)),s=T(()=>e.tag||(e.href?"a":"button"));return(i,o)=>(u(),E(pe(s.value),{class:U(["VPButton",[t.size,t.theme]]),href:t.href?m(bt)(t.href):void 0,target:e.target??(n.value?"_blank":void 0),rel:e.rel??(n.value?"noreferrer":void 0)},{default:k(()=>[y(i.$slots,"default",{},()=>[Ae(B(t.text),1)],!0)]),_:3},8,["class","href","target","rel"]))}}),Bo=L(Eo,[["__scopeId","data-v-720aa379"]]),Do=["src","alt"],Mo=K({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const s=Ce("VPImage",!0);return t.image?(u(),h(R,{key:0},[typeof t.image=="string"||"src"in t.image?(u(),h("img",ge({key:0,class:"VPImage"},typeof t.image=="string"?e.$attrs:{...t.image,...e.$attrs},{src:m(_e)(typeof t.image=="string"?t.image:t.image.src),alt:t.alt??(typeof t.image=="string"?"":t.image.alt||"")}),null,16,Do)):(u(),h(R,{key:1},[O(s,ge({class:"dark",image:t.image.dark,alt:t.image.alt},e.$attrs),null,16,["image","alt"]),O(s,ge({class:"light",image:t.image.light,alt:t.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):S("",!0)}}}),Nn=L(Mo,[["__scopeId","data-v-cf161945"]]),Vo={class:"container"},jo={class:"main"},Ho={class:"heading"},Ro=["innerHTML"],Fo=["innerHTML"],Uo=["innerHTML"],qo={key:0,class:"actions"},zo={key:0,class:"image"},Go={class:"image-container"},Wo=K({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const{heroImageSlotExists:e}=En(bs,{heroImageSlotExists:T(()=>!1)});return(n,s)=>(u(),h("div",{class:U(["VPHero",{"has-image":t.image||m(e)}])},[p("div",Vo,[p("div",jo,[y(n.$slots,"home-hero-info-before",{},void 0,!0),y(n.$slots,"home-hero-info",{},()=>[p("h1",Ho,[t.name?(u(),h("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,Ro)):S("",!0),t.text?(u(),h("span",{key:1,innerHTML:t.text,class:"text"},null,8,Fo)):S("",!0)]),t.tagline?(u(),h("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,Uo)):S("",!0)],!0),y(n.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(u(),h("div",qo,[(u(!0),h(R,null,z(t.actions,i=>(u(),h("div",{key:i.link,class:"action"},[O(Bo,{tag:"a",size:"medium",theme:i.theme,text:i.text,href:i.link,target:i.target,rel:i.rel},null,8,["theme","text","href","target","rel"])]))),128))])):S("",!0),y(n.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||m(e)?(u(),h("div",zo,[p("div",Go,[s[0]||(s[0]=p("div",{class:"image-bg"},null,-1)),y(n.$slots,"home-hero-image",{},()=>[t.image?(u(),E(Nn,{key:0,class:"image-src",image:t.image},null,8,["image"])):S("",!0)],!0)])])):S("",!0)])],2))}}),Jo=L(Wo,[["__scopeId","data-v-54d39240"]]),Yo=K({__name:"VPHomeHero",setup(t){const{frontmatter:e}=F();return(n,s)=>m(e).hero?(u(),E(Jo,{key:0,class:"VPHomeHero",name:m(e).hero.name,text:m(e).hero.text,tagline:m(e).hero.tagline,image:m(e).hero.image,actions:m(e).hero.actions},{"home-hero-info-before":k(()=>[y(n.$slots,"home-hero-info-before")]),"home-hero-info":k(()=>[y(n.$slots,"home-hero-info")]),"home-hero-info-after":k(()=>[y(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":k(()=>[y(n.$slots,"home-hero-actions-after")]),"home-hero-image":k(()=>[y(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):S("",!0)}}),Qo={class:"box"},Xo={key:0,class:"icon"},Zo=["innerHTML"],ea=["innerHTML"],na=["innerHTML"],ta={key:4,class:"link-text"},sa={class:"link-text-value"},ia=K({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(u(),E(me,{class:"VPFeature",href:t.link,rel:t.rel,target:t.target,"no-icon":!0,tag:t.link?"a":"div"},{default:k(()=>[p("article",Qo,[typeof t.icon=="object"&&t.icon.wrap?(u(),h("div",Xo,[O(Nn,{image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])])):typeof t.icon=="object"?(u(),E(Nn,{key:1,image:t.icon,alt:t.icon.alt,height:t.icon.height||48,width:t.icon.width||48},null,8,["image","alt","height","width"])):t.icon?(u(),h("div",{key:2,class:"icon",innerHTML:t.icon},null,8,Zo)):S("",!0),p("h2",{class:"title",innerHTML:t.title},null,8,ea),t.details?(u(),h("p",{key:3,class:"details",innerHTML:t.details},null,8,na)):S("",!0),t.linkText?(u(),h("div",ta,[p("p",sa,[Ae(B(t.linkText)+" ",1),n[0]||(n[0]=p("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):S("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),oa=L(ia,[["__scopeId","data-v-c559a927"]]),aa={key:0,class:"VPFeatures"},ra={class:"container"},la={class:"items"},ca=K({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=T(()=>{const s=e.features.length;if(s){if(s===2)return"grid-2";if(s===3)return"grid-3";if(s%3===0)return"grid-6";if(s>3)return"grid-4"}else return});return(s,i)=>t.features?(u(),h("div",aa,[p("div",ra,[p("div",la,[(u(!0),h(R,null,z(t.features,o=>(u(),h("div",{key:o.title,class:U(["item",[n.value]])},[O(oa,{icon:o.icon,title:o.title,details:o.details,link:o.link,"link-text":o.linkText,rel:o.rel,target:o.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):S("",!0)}}),ua=L(ca,[["__scopeId","data-v-ba749d2a"]]),da=K({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=F();return(n,s)=>m(e).features?(u(),E(ua,{key:0,class:"VPHomeFeatures",features:m(e).features},null,8,["features"])):S("",!0)}}),pa=K({__name:"VPHomeContent",setup(t){const{width:e}=fi({initialWidth:0,includeScrollbar:!1});return(n,s)=>(u(),h("div",{class:"vp-doc container",style:as(m(e)?{"--vp-offset":`calc(50% - ${m(e)/2}px)`}:{})},[y(n.$slots,"default",{},void 0,!0)],4))}}),ma=L(pa,[["__scopeId","data-v-ba6e5bf9"]]),ha=K({__name:"VPHome",setup(t){const{frontmatter:e,theme:n}=F();return(s,i)=>{const o=Ce("Content");return u(),h("div",{class:U(["VPHome",{"external-link-icon-enabled":m(n).externalLinkIcon}])},[y(s.$slots,"home-hero-before",{},void 0,!0),O(Yo,null,{"home-hero-info-before":k(()=>[y(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":k(()=>[y(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":k(()=>[y(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":k(()=>[y(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":k(()=>[y(s.$slots,"home-hero-image",{},void 0,!0)]),_:3}),y(s.$slots,"home-hero-after",{},void 0,!0),y(s.$slots,"home-features-before",{},void 0,!0),O(da),y(s.$slots,"home-features-after",{},void 0,!0),m(e).markdownStyles!==!1?(u(),E(ma,{key:0},{default:k(()=>[O(o)]),_:1})):(u(),E(o,{key:1}))],2)}}}),fa=L(ha,[["__scopeId","data-v-58c7204e"]]),ba={},ga={class:"VPPage"};function ya(t,e){const n=Ce("Content");return u(),h("div",ga,[y(t.$slots,"page-top"),O(n),y(t.$slots,"page-bottom")])}const va=L(ba,[["render",ya]]),_a=K({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=F(),{isHome:s,hasSidebar:i}=we();return(o,a)=>(u(),h("div",{class:U(["VPContent",{"has-sidebar":m(i),"is-home":m(s)}]),id:"VPContent"},[m(e).isNotFound?y(o.$slots,"not-found",{key:0},()=>[O(Oi)],!0):m(n).layout==="page"?(u(),E(va,{key:1},{"page-top":k(()=>[y(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[y(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):m(n).layout==="home"?(u(),E(fa,{key:2},{"home-hero-before":k(()=>[y(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":k(()=>[y(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":k(()=>[y(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":k(()=>[y(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":k(()=>[y(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":k(()=>[y(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[y(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[y(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[y(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):m(n).layout&&m(n).layout!=="doc"?(u(),E(pe(m(n).layout),{key:3})):(u(),E(Oo,{key:4},{"doc-top":k(()=>[y(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[y(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":k(()=>[y(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[y(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[y(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":k(()=>[y(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":k(()=>[y(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[y(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[y(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[y(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":k(()=>[y(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),ka=L(_a,[["__scopeId","data-v-f1bac7bf"]]),wa={class:"container"},xa=["innerHTML"],Sa=["innerHTML"],$a=K({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=F(),{hasSidebar:s}=we();return(i,o)=>m(e).footer&&m(n).footer!==!1?(u(),h("footer",{key:0,class:U(["VPFooter",{"has-sidebar":m(s)}])},[p("div",wa,[m(e).footer.message?(u(),h("p",{key:0,class:"message",innerHTML:m(e).footer.message},null,8,xa)):S("",!0),m(e).footer.copyright?(u(),h("p",{key:1,class:"copyright",innerHTML:m(e).footer.copyright},null,8,Sa)):S("",!0)])],2)):S("",!0)}}),Pa=L($a,[["__scopeId","data-v-a98d4b47"]]),Aa={class:"menu-text"},Ta={class:"header"},Ka={class:"outline"},Na=K({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=F(),s=G(!1),i=G(0),o=G(),a=G();function r(d){o.value?.contains(d.target)||(s.value=!1)}ce(s,d=>{if(d){document.addEventListener("click",r);return}document.removeEventListener("click",r)}),tt("Escape",()=>{s.value=!1}),is(()=>{s.value=!1});function l(){s.value=!s.value,i.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function c(d){d.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),rs(()=>{s.value=!1}))}function g(){s.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(d,f)=>(u(),h("div",{class:"VPLocalNavOutlineDropdown",style:as({"--vp-vh":i.value+"px"}),ref_key:"main",ref:o},[t.headers.length>0?(u(),h("button",{key:0,onClick:l,class:U({open:s.value})},[p("span",Aa,B(m(fs)(m(n))),1),f[0]||(f[0]=p("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(u(),h("button",{key:1,onClick:g},B(m(n).returnToTopLabel||"Return to top"),1)),O(ht,{name:"flyout"},{default:k(()=>[s.value?(u(),h("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:c},[p("div",Ta,[p("a",{class:"top-link",href:"#",onClick:g},B(m(n).returnToTopLabel||"Return to top"),1)]),p("div",Ka,[O(gs,{headers:t.headers},null,8,["headers"])])],512)):S("",!0)]),_:1})],4))}}),Ia=L(Na,[["__scopeId","data-v-e25e4993"]]),La={class:"container"},Ca=["aria-expanded"],Oa={class:"menu-text"},Ea=K({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e}=F(),{isHome:n,hasSidebar:s,headers:i,hasLocalNav:o}=we(),{y:a}=ls(),r=G(0);ke(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))});const l=T(()=>({VPLocalNav:!0,"has-sidebar":s.value,empty:!o.value,fixed:!o.value&&!s.value}));return(c,g)=>!m(n)&&(m(o)||m(s)||m(a)>=r.value)?(u(),h("div",{key:0,class:U(l.value)},[p("div",La,[m(s)?(u(),h("button",{key:0,class:"menu","aria-expanded":t.open,"aria-controls":"VPSidebarNav",onClick:g[0]||(g[0]=d=>c.$emit("open-menu"))},[g[1]||(g[1]=p("span",{class:"vpi-align-left menu-icon"},null,-1)),p("span",Oa,B(m(e).sidebarMenuLabel||"Menu"),1)],8,Ca)):S("",!0),O(Ia,{headers:m(i),navHeight:r.value},null,8,["headers","navHeight"])])],2)):S("",!0)}}),Ba=L(Ea,[["__scopeId","data-v-fe790b99"]]);function Da(){const t=G(!1);function e(){t.value=!0,window.addEventListener("resize",i)}function n(){t.value=!1,window.removeEventListener("resize",i)}function s(){t.value?n():e()}function i(){window.outerWidth>=768&&n()}const o=pn();return ce(()=>o.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:s}}const gt=Symbol("nav"),Ma={},Va={class:"VPSwitch",type:"button",role:"switch"},ja={class:"check"},Ha={key:0,class:"icon"};function Ra(t,e){return u(),h("button",Va,[p("span",ja,[t.$slots.default?(u(),h("span",Ha,[y(t.$slots,"default",{},void 0,!0)])):S("",!0)])])}const Fa=L(Ma,[["render",Ra],["__scopeId","data-v-a4d41cee"]]),Ua=K({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:n}=F(),s=En("toggle-appearance",()=>{e.value=!e.value}),i=G("");return ss(()=>{i.value=e.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(o,a)=>(u(),E(Fa,{title:i.value,class:"VPSwitchAppearance","aria-checked":m(e),onClick:m(s)},{default:k(()=>[...a[0]||(a[0]=[p("span",{class:"vpi-sun sun"},null,-1),p("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),yt=L(Ua,[["__scopeId","data-v-01969f31"]]),qa={key:0,class:"VPNavBarAppearance"},za=K({__name:"VPNavBarAppearance",setup(t){const{site:e}=F();return(n,s)=>m(e).appearance&&m(e).appearance!=="force-dark"&&m(e).appearance!=="force-auto"?(u(),h("div",qa,[O(yt)])):S("",!0)}}),Ga=L(za,[["__scopeId","data-v-6760d333"]]),vt=G();let ys=!1,Wn=0;function Wa(t){const e=G(!1);if(dn){!ys&&Ja(),Wn++;const n=ce(vt,s=>{s===t.el.value||t.el.value?.contains(s)?(e.value=!0,t.onFocus?.()):(e.value=!1,t.onBlur?.())});ft(()=>{n(),Wn--,Wn||Ya()})}return bi(e)}function Ja(){document.addEventListener("focusin",vs),ys=!0,vt.value=document.activeElement}function Ya(){document.removeEventListener("focusin",vs)}function vs(){vt.value=document.activeElement}const Qa={class:"VPMenuLink"},Xa=["innerHTML"],Za=K({inheritAttrs:!1,__name:"VPMenuLink",props:{item:{}},setup(t){const e=t,{page:n}=F(),s=T(()=>typeof e.item.link=="function"?e.item.link(n.value):e.item.link);return(i,o)=>(u(),h("div",Qa,[O(me,ge(i.$attrs,{class:{active:m(ve)(m(n).relativePath,t.item.activeMatch||s.value,!!t.item.activeMatch)},href:s.value,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon}),{default:k(()=>[p("span",{innerHTML:t.item.text},null,8,Xa)]),_:1},16,["class","href","target","rel","no-icon"])]))}}),Bn=L(Za,[["__scopeId","data-v-7b912fbc"]]),er={class:"VPMenuGroup"},nr={key:0,class:"title"},tr=K({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(u(),h("div",er,[t.text?(u(),h("p",nr,B(t.text),1)):S("",!0),(u(!0),h(R,null,z(t.items,s=>(u(),h(R,{key:JSON.stringify(s)},["link"in s?(u(),E(Bn,{key:0,item:s},null,8,["item"])):S("",!0)],64))),128))]))}}),sr=L(tr,[["__scopeId","data-v-ce18b5f0"]]),ir={class:"VPMenu"},or={key:0,class:"items"},ar=K({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(u(),h("div",ir,[t.items?(u(),h("div",or,[(u(!0),h(R,null,z(t.items,s=>(u(),h(R,{key:JSON.stringify(s)},["link"in s?(u(),E(Bn,{key:0,item:s},null,8,["item"])):"component"in s?(u(),E(pe(s.component),ge({key:1,ref_for:!0},s.props),null,16)):(u(),E(sr,{key:2,text:s.text,items:s.items},null,8,["text","items"]))],64))),128))])):S("",!0),y(e.$slots,"default",{},void 0,!0)]))}}),rr=L(ar,[["__scopeId","data-v-b6da1b6e"]]),lr=["aria-expanded","aria-label"],cr={key:0,class:"text"},ur=["innerHTML"],dr={key:1,class:"vpi-more-horizontal icon"},pr={class:"menu"},mr=K({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=G(!1),n=G();Wa({el:n,onBlur:s});function s(){e.value=!1}return(i,o)=>(u(),h("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:o[1]||(o[1]=a=>e.value=!0),onMouseleave:o[2]||(o[2]=a=>e.value=!1)},[p("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":t.label,onClick:o[0]||(o[0]=a=>e.value=!e.value)},[t.button||t.icon?(u(),h("span",cr,[t.icon?(u(),h("span",{key:0,class:U([t.icon,"option-icon"])},null,2)):S("",!0),t.button?(u(),h("span",{key:1,innerHTML:t.button},null,8,ur)):S("",!0),o[3]||(o[3]=p("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(u(),h("span",dr))],8,lr),p("div",pr,[O(rr,{items:t.items},{default:k(()=>[y(i.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),_t=L(mr,[["__scopeId","data-v-44347121"]]),hr=["href","aria-label","rel","innerHTML"],fr=K({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{},me:{type:Boolean}},setup(t){const e=t,n=G();ke(async()=>{await rs();const i=n.value?.children[0];i instanceof HTMLElement&&i.className.startsWith("vpi-social-")&&(getComputedStyle(i).maskImage||getComputedStyle(i).webkitMaskImage)==="none"&&i.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const s=T(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(i,o)=>(u(),h("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:t.link,"aria-label":t.ariaLabel??(typeof t.icon=="string"?t.icon:""),target:"_blank",rel:t.me?"me noopener":"noopener",innerHTML:s.value},null,8,hr))}}),br=L(fr,[["__scopeId","data-v-25db3f3f"]]),gr={class:"VPSocialLinks"},yr=K({__name:"VPSocialLinks",props:{links:{},me:{type:Boolean,default:!0}},setup(t){return(e,n)=>(u(),h("div",gr,[(u(!0),h(R,null,z(t.links,({link:s,icon:i,ariaLabel:o})=>(u(),E(br,{key:s,icon:i,link:s,ariaLabel:o,me:t.me},null,8,["icon","link","ariaLabel","me"]))),128))]))}}),kt=L(yr,[["__scopeId","data-v-45cdfcb8"]]),vr={key:0,class:"group translations"},_r={class:"trans-title"},kr={key:1,class:"group"},wr={class:"item appearance"},xr={class:"label"},Sr={class:"appearance-action"},$r={key:2,class:"group"},Pr={class:"item social-links"},Ar=K({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=F(),{localeLinks:s,currentLang:i}=mn({correspondingLink:!0}),o=T(()=>s.value.length&&i.value.label||e.value.appearance||n.value.socialLinks);return(a,r)=>o.value?(u(),E(_t,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:k(()=>[m(s).length&&m(i).label?(u(),h("div",vr,[p("p",_r,B(m(i).label),1),(u(!0),h(R,null,z(m(s),l=>(u(),E(Bn,{key:l.link,item:l,lang:l.lang,dir:l.dir},null,8,["item","lang","dir"]))),128))])):S("",!0),m(e).appearance&&m(e).appearance!=="force-dark"&&m(e).appearance!=="force-auto"?(u(),h("div",kr,[p("div",wr,[p("p",xr,B(m(n).darkModeSwitchLabel||"Appearance"),1),p("div",Sr,[O(yt)])])])):S("",!0),m(n).socialLinks?(u(),h("div",$r,[p("div",Pr,[O(kt,{class:"social-links-list",links:m(n).socialLinks},null,8,["links"])])])):S("",!0)]),_:1})):S("",!0)}}),Tr=L(Ar,[["__scopeId","data-v-8f259629"]]),Kr=["aria-expanded"],Nr=K({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(u(),h("button",{type:"button",class:U(["VPNavBarHamburger",{active:t.active}]),"aria-label":"mobile navigation","aria-expanded":t.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=s=>e.$emit("click"))},[...n[1]||(n[1]=[p("span",{class:"container"},[p("span",{class:"top"}),p("span",{class:"middle"}),p("span",{class:"bottom"})],-1)])],10,Kr))}}),Ir=L(Nr,[["__scopeId","data-v-943eb6b4"]]),Lr=["innerHTML"],Cr=K({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const e=t,{page:n}=F(),s=T(()=>typeof e.item.link=="function"?e.item.link(n.value):e.item.link);return(i,o)=>(u(),E(me,{class:U({VPNavBarMenuLink:!0,active:m(ve)(m(n).relativePath,t.item.activeMatch||s.value,!!t.item.activeMatch)}),href:s.value,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:k(()=>[p("span",{innerHTML:t.item.text},null,8,Lr)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Or=L(Cr,[["__scopeId","data-v-8e454fee"]]),Er=K({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=F(),s=o=>"component"in o?!1:"link"in o?ve(n.value.relativePath,typeof o.link=="function"?o.link(n.value):o.link,!!e.item.activeMatch):o.items.some(s),i=T(()=>s(e.item));return(o,a)=>(u(),E(_t,{class:U({VPNavBarMenuGroup:!0,active:m(ve)(m(n).relativePath,t.item.activeMatch,!!t.item.activeMatch)||i.value}),button:t.item.text,items:t.item.items},null,8,["class","button","items"]))}}),Br={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Dr=K({__name:"VPNavBarMenu",setup(t){const{theme:e}=F();return(n,s)=>m(e).nav?(u(),h("nav",Br,[s[0]||(s[0]=p("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(u(!0),h(R,null,z(m(e).nav,i=>(u(),h(R,{key:JSON.stringify(i)},["link"in i?(u(),E(Or,{key:0,item:i},null,8,["item"])):"component"in i?(u(),E(pe(i.component),ge({key:1,ref_for:!0},i.props),null,16)):(u(),E(Er,{key:2,item:i},null,8,["item"]))],64))),128))])):S("",!0)}}),Mr=L(Dr,[["__scopeId","data-v-970bc543"]]);function Vr(t){const e=t.mode??"auto",n=jr(t),s=t.askAi,i=!!(s&&typeof s=="object"&&s.sidePanel);switch(e){case"sidePanel":return{mode:e,showKeywordSearch:!1,useSidePanel:!0};case"hybrid":return n||console.error('[vitepress] mode: "hybrid" requires keyword search credentials (appId, apiKey, indexName).'),{mode:e,showKeywordSearch:n,useSidePanel:!0};case"modal":return{mode:e,showKeywordSearch:n,useSidePanel:!1};default:return{mode:"auto",showKeywordSearch:n,useSidePanel:i}}}function jr(t){return!!(t.appId&&t.apiKey&&t.indexName)}function _s(t,e){return[...(Array.isArray(t)?t:t?[t]:[]).map(i=>Array.isArray(i)?i.filter(o=>typeof o=="string"&&!o.startsWith("lang:")):i).filter(i=>typeof i=="string"?!i.startsWith("lang:"):Array.isArray(i)&&i.length>0),`lang:${e}`]}function Hr(t,e,n){const s=typeof t=="string",i=!s&&t.searchParameters?{...t.searchParameters}:void 0,o=i?.facetFilters??e.searchParameters?.facetFilters,a=_s(o,n),r={...i,facetFilters:a.length?a:void 0},l={...s?{}:t,indexName:s?e.indexName:t.indexName,apiKey:s?e.apiKey:t.apiKey,appId:s?e.appId:t.appId,assistantId:s?t:t.assistantId};return Object.values(r).some(c=>c!=null)&&(l.searchParameters=r),l}function Rr(t,e,n){t=ks(t,t.locales?.[e]||{});const s=_s(t.searchParameters?.facetFilters,n),i=t.askAi?Hr(t.askAi,t,n):void 0;return{...t,searchParameters:{...t.searchParameters,facetFilters:s},askAi:i}}function ks(t,e){const n={...t};for(const s in e){const i=e[s];if(i!==void 0){if(s==="searchParameters"){n[s]=i;continue}Rt(i)&&Rt(n[s])?n[s]=ks(n[s],i):n[s]=i}}return delete n.locales,n}function Fr(t,e=(n,s)=>JSON.stringify(n)===JSON.stringify(s)){return T(n=>{const s=t();return n===void 0||!e(n,s)?s:n})}const Ur={},qr={type:"button",class:"VPNavBarAskAiButton"};function zr(t,e){return u(),h("button",qr,[...e[0]||(e[0]=[p("span",{class:"vpi-sparkles","aria-hidden":"true"},null,-1)])])}const Gr=L(Ur,[["render",zr],["__scopeId","data-v-43e7f955"]]),Wr={type:"button",class:"VPNavBarSearchButton"},Jr={class:"text"},Yr=K({__name:"VPNavBarSearchButton",props:{text:{}},setup(t){return(e,n)=>(u(),h("button",Wr,[n[0]||(n[0]=p("span",{class:"vpi-search","aria-hidden":"true"},null,-1)),p("span",Jr,B(t.text),1),n[1]||(n[1]=p("span",{class:"keys","aria-hidden":"true"},[p("kbd",{class:"key-cmd"},"⌘"),p("kbd",{class:"key-ctrl"},"Ctrl"),p("kbd",null,"K")],-1))]))}}),Ft=L(Yr,[["__scopeId","data-v-8236ba2d"]]),Qr={class:"VPNavBarSearch"},Xr=K({__name:"VPNavBarSearch",setup(t){const e=gi(()=>yi(()=>import("./VPLocalSearchBox.C-wlulYK.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:s,localeIndex:i,lang:o}=F(),a="local",r=Fr(()=>Rr(s.value.search?.options||{},i.value,o.value)),l=T(()=>Vr(r.value)),c=T(()=>{if(!l.value.useSidePanel)return null;const x=r.value.askAi;return!x||typeof x=="string"||!x.sidePanel?null:x.sidePanel===!0?{}:x.sidePanel}),g=T(()=>c.value?.keyboardShortcuts?.["Ctrl/Cmd+I"]!==!1),d=G(null);let f=0;const _=G(!1),w=G(!1);ke(()=>{});function b(x){_.value||(_.value=!0),d.value={target:x,nonce:++f}}const v=G(!1);tt("k",x=>{(x.ctrlKey||x.metaKey)&&(x.preventDefault(),v.value=!0)}),tt("/",x=>{$(x)||(x.preventDefault(),v.value=!0)});function $(x){const P=x.target,C=P.tagName;return P.isContentEditable||C==="INPUT"||C==="SELECT"||C==="TEXTAREA"}return(x,P)=>(u(),h("div",Qr,[m(a)==="algolia"?(u(),h(R,{key:0},[l.value.showKeywordSearch?(u(),E(Ft,{key:0,text:m(r).translations?.button?.buttonText||"Search","aria-label":m(r).translations?.button?.buttonAriaLabel||"Search","aria-keyshortcuts":"/ control+k meta+k",onClick:P[0]||(P[0]=C=>b("search"))},null,8,["text","aria-label"])):S("",!0),c.value?(u(),E(Gr,{key:1,"aria-label":c.value.button?.translations?.buttonAriaLabel||"Ask AI","aria-keyshortcuts":g.value?"control+i meta+i":void 0,onClick:P[1]||(P[1]=C=>w.value?b("toggleAskAi"):b("askAi"))},null,8,["aria-label","aria-keyshortcuts"])):S("",!0),_.value?(u(),E(m(n),{key:2,"algolia-options":m(r),"open-request":d.value,onVnodeBeforeMount:P[2]||(P[2]=C=>w.value=!0)},null,8,["algolia-options","open-request"])):S("",!0)],64)):m(a)==="local"?(u(),h(R,{key:1},[O(Ft,{text:m(r).translations?.button?.buttonText||"Search","aria-label":m(r).translations?.button?.buttonAriaLabel||"Search","aria-keyshortcuts":"/ control+k meta+k",onClick:P[3]||(P[3]=C=>v.value=!0)},null,8,["text","aria-label"]),v.value?(u(),E(m(e),{key:0,onClose:P[4]||(P[4]=C=>v.value=!1)})):S("",!0)],64)):S("",!0)]))}}),Zr=L(Xr,[["__scopeId","data-v-0b984a33"]]),el=K({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=F();return(n,s)=>m(e).socialLinks?(u(),E(kt,{key:0,class:"VPNavBarSocialLinks",links:m(e).socialLinks},null,8,["links"])):S("",!0)}}),nl=L(el,[["__scopeId","data-v-d8d77683"]]),tl=["href","rel","target"],sl=["innerHTML"],il={key:2},ol=K({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=F(),{hasSidebar:s}=we(),{currentLang:i}=mn(),o=T(()=>typeof n.value.logoLink=="string"?n.value.logoLink:n.value.logoLink?.link),a=T(()=>typeof n.value.logoLink=="string"?void 0:n.value.logoLink?.rel),r=T(()=>typeof n.value.logoLink=="string"?void 0:n.value.logoLink?.target);return(l,c)=>(u(),h("div",{class:U(["VPNavBarTitle",{"has-sidebar":m(s)}])},[p("a",{class:"title",href:o.value??m(bt)(m(i).link),rel:a.value,target:r.value},[y(l.$slots,"nav-bar-title-before",{},void 0,!0),m(n).logo?(u(),E(Nn,{key:0,class:"logo",image:m(n).logo},null,8,["image"])):S("",!0),m(n).siteTitle?(u(),h("span",{key:1,innerHTML:m(n).siteTitle},null,8,sl)):m(n).siteTitle===void 0?(u(),h("span",il,B(m(e).title),1)):S("",!0),y(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,tl)],2))}}),al=L(ol,[["__scopeId","data-v-86d825ac"]]),rl={class:"items"},ll={class:"title"},cl=K({__name:"VPNavBarTranslations",setup(t){const{theme:e}=F(),{localeLinks:n,currentLang:s}=mn({correspondingLink:!0});return(i,o)=>m(n).length&&m(s).label?(u(),E(_t,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:m(e).langMenuLabel||"Change language"},{default:k(()=>[p("div",rl,[p("p",ll,B(m(s).label),1),(u(!0),h(R,null,z(m(n),a=>(u(),E(Bn,{key:a.link,item:a,lang:a.lang,dir:a.dir},null,8,["item","lang","dir"]))),128))])]),_:1},8,["label"])):S("",!0)}}),ul=L(cl,[["__scopeId","data-v-e28c1205"]]),dl={class:"wrapper"},pl={class:"container"},ml={class:"title"},hl={class:"content"},fl={class:"content-body"},bl=K({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const{y:e}=ls(),{isHome:n,hasSidebar:s}=we();return(i,o)=>(u(),h("div",{class:U(["VPNavBar",{"has-sidebar":m(s),home:m(n),top:m(e)===0,"screen-open":t.isScreenOpen}])},[p("div",dl,[p("div",pl,[p("div",ml,[O(al,null,{"nav-bar-title-before":k(()=>[y(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[y(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),p("div",hl,[p("div",fl,[y(i.$slots,"nav-bar-content-before",{},void 0,!0),O(Zr,{class:"search"}),O(Mr,{class:"menu"}),O(ul,{class:"translations"}),O(Ga,{class:"appearance"}),O(nl,{class:"social-links"}),O(Tr,{class:"extra"}),y(i.$slots,"nav-bar-content-after",{},void 0,!0),O(Ir,{class:"hamburger",active:t.isScreenOpen,onClick:o[0]||(o[0]=a=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),o[1]||(o[1]=p("div",{class:"divider"},[p("div",{class:"divider-line"})],-1))],2))}}),gl=L(bl,[["__scopeId","data-v-04495d5d"]]),yl={key:0,class:"VPNavScreenAppearance"},vl={class:"text"},_l=K({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=F();return(s,i)=>m(e).appearance&&m(e).appearance!=="force-dark"&&m(e).appearance!=="force-auto"?(u(),h("div",yl,[p("p",vl,B(m(n).darkModeSwitchLabel||"Appearance"),1),O(yt)])):S("",!0)}}),kl=L(_l,[["__scopeId","data-v-4939ec63"]]),wl=["innerHTML"],xl=K({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=t,{page:n}=F(),s=T(()=>typeof e.item.link=="function"?e.item.link(n.value):e.item.link),i=T(()=>ve(n.value.relativePath,e.item.activeMatch||s.value,!!e.item.activeMatch)),{closeScreen:o}=En(gt);return(a,r)=>(u(),E(me,{class:U({VPNavScreenMenuLink:!0,active:i.value}),href:s.value,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:m(o)},{default:k(()=>[p("span",{innerHTML:t.item.text},null,8,wl)]),_:1},8,["class","href","target","rel","no-icon","onClick"]))}}),Sl=L(xl,[["__scopeId","data-v-485d31bc"]]),$l=["innerHTML"],Pl=K({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=t,{page:n}=F(),s=T(()=>typeof e.item.link=="function"?e.item.link(n.value):e.item.link),i=T(()=>ve(n.value.relativePath,e.item.activeMatch||s.value,!!e.item.activeMatch)),{closeScreen:o}=En(gt);return(a,r)=>(u(),E(me,{class:U({VPNavScreenMenuGroupLink:!0,active:i.value}),href:s.value,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:m(o)},{default:k(()=>[p("span",{innerHTML:t.item.text},null,8,$l)]),_:1},8,["class","href","target","rel","no-icon","onClick"]))}}),ws=L(Pl,[["__scopeId","data-v-9507eaaf"]]),Al={class:"VPNavScreenMenuGroupSection"},Tl={key:0,class:"title"},Kl=K({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(u(),h("div",Al,[t.text?(u(),h("p",Tl,B(t.text),1)):S("",!0),(u(!0),h(R,null,z(t.items,s=>(u(),E(ws,{key:s.text,item:s},null,8,["item"]))),128))]))}}),Nl=L(Kl,[["__scopeId","data-v-1d586c0c"]]),Il=["aria-controls","aria-expanded"],Ll=["innerHTML"],Cl=["id"],Ol={key:0,class:"item"},El={key:1,class:"item"},Bl={key:2,class:"group"},Dl=K({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=G(!1),s=T(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function i(){n.value=!n.value}return(o,a)=>(u(),h("div",{class:U(["VPNavScreenMenuGroup",{open:n.value}])},[p("button",{class:"button","aria-controls":s.value,"aria-expanded":n.value,onClick:i},[p("span",{class:"button-text",innerHTML:t.text},null,8,Ll),a[0]||(a[0]=p("span",{class:"vpi-plus button-icon"},null,-1))],8,Il),p("div",{id:s.value,class:"items"},[(u(!0),h(R,null,z(t.items,r=>(u(),h(R,{key:JSON.stringify(r)},["link"in r?(u(),h("div",Ol,[O(ws,{item:r},null,8,["item"])])):"component"in r?(u(),h("div",El,[(u(),E(pe(r.component),ge({ref_for:!0},r.props,{"screen-menu":""}),null,16))])):(u(),h("div",Bl,[O(Nl,{text:r.text,items:r.items},null,8,["text","items"])]))],64))),128))],8,Cl)],2))}}),Ml=L(Dl,[["__scopeId","data-v-3c1acb12"]]),Vl={key:0,class:"VPNavScreenMenu"},jl=K({__name:"VPNavScreenMenu",setup(t){const{theme:e}=F();return(n,s)=>m(e).nav?(u(),h("nav",Vl,[(u(!0),h(R,null,z(m(e).nav,i=>(u(),h(R,{key:JSON.stringify(i)},["link"in i?(u(),E(Sl,{key:0,item:i},null,8,["item"])):"component"in i?(u(),E(pe(i.component),ge({key:1,ref_for:!0},i.props,{"screen-menu":""}),null,16)):(u(),E(Ml,{key:2,text:i.text||"",items:i.items},null,8,["text","items"]))],64))),128))])):S("",!0)}}),Hl=K({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=F();return(n,s)=>m(e).socialLinks?(u(),E(kt,{key:0,class:"VPNavScreenSocialLinks",links:m(e).socialLinks},null,8,["links"])):S("",!0)}}),Rl={class:"list"},Fl=K({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=mn({correspondingLink:!0}),s=G(!1);function i(){s.value=!s.value}return(o,a)=>m(e).length&&m(n).label?(u(),h("div",{key:0,class:U(["VPNavScreenTranslations",{open:s.value}])},[p("button",{class:"title",onClick:i},[a[0]||(a[0]=p("span",{class:"vpi-languages icon lang"},null,-1)),Ae(" "+B(m(n).label)+" ",1),a[1]||(a[1]=p("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),p("ul",Rl,[(u(!0),h(R,null,z(m(e),r=>(u(),h("li",{key:r.link,class:"item"},[O(me,{class:"link",href:r.link,lang:r.lang,dir:r.dir},{default:k(()=>[Ae(B(r.text),1)]),_:2},1032,["href","lang","dir"])]))),128))])],2)):S("",!0)}}),Ul=L(Fl,[["__scopeId","data-v-49874f36"]]),ql={key:0,class:"VPNavScreen",id:"VPNavScreen"},zl={class:"container"},Gl=K({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=cs(dn?document.body:null);return(n,s)=>(u(),E(ht,{name:"fade",onEnter:s[0]||(s[0]=i=>e.value=!0),onAfterLeave:s[1]||(s[1]=i=>e.value=!1)},{default:k(()=>[t.open?(u(),h("div",ql,[p("div",zl,[y(n.$slots,"nav-screen-content-before",{},void 0,!0),O(jl,{class:"menu"}),O(Ul,{class:"translations"}),O(kl,{class:"appearance"}),O(Hl,{class:"social-links"}),y(n.$slots,"nav-screen-content-after",{},void 0,!0)])])):S("",!0)]),_:3}))}}),Wl=L(Gl,[["__scopeId","data-v-a5994074"]]),Jl={key:0,class:"VPNav"},Yl=K({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:s}=Da(),{frontmatter:i}=F(),o=T(()=>i.value.navbar!==!1);return us(gt,{closeScreen:n}),Cn(()=>{dn&&document.documentElement.classList.toggle("hide-nav",!o.value)}),(a,r)=>o.value?(u(),h("header",Jl,[O(gl,{"is-screen-open":m(e),onToggleScreen:m(s)},{"nav-bar-title-before":k(()=>[y(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[y(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[y(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[y(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),O(Wl,{open:m(e)},{"nav-screen-content-before":k(()=>[y(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[y(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):S("",!0)}}),Ql=L(Yl,[["__scopeId","data-v-bc8fabd1"]]),Xl=["role","tabindex"],Zl={key:1,class:"items"},ec=K({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:s,isLink:i,isActiveLink:o,hasActiveLink:a,hasChildren:r,toggle:l}=Gi(T(()=>e.item)),c=T(()=>r.value?"section":"div"),g=T(()=>i.value?"a":"div"),d=T(()=>r.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),f=T(()=>i.value?void 0:"button"),_=T(()=>[[`level-${e.depth}`],{collapsible:s.value},{collapsed:n.value},{"is-link":i.value},{"is-active":o.value},{"has-active":a.value}]);function w(v){"key"in v&&v.key!=="Enter"||!e.item.link&&l()}function b(){e.item.link&&l()}return(v,$)=>{const x=Ce("VPSidebarItem",!0);return u(),E(pe(c.value),{class:U(["VPSidebarItem",_.value])},{default:k(()=>[t.item.text?(u(),h("div",ge({key:0,class:"item",role:f.value},vi(t.item.items?{click:w,keydown:w}:{},!0),{tabindex:t.item.items&&0}),[$[1]||($[1]=p("div",{class:"indicator"},null,-1)),t.item.link?(u(),E(me,{key:0,tag:g.value,class:"link",href:t.item.link,rel:t.item.rel,target:t.item.target},{default:k(()=>[(u(),E(pe(d.value),{class:"text",innerHTML:t.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(u(),E(pe(d.value),{key:1,class:"text",innerHTML:t.item.text},null,8,["innerHTML"])),t.item.collapsed!=null&&t.item.items&&t.item.items.length?(u(),h("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:b,onKeydown:ds(b,["enter"]),tabindex:"0"},[...$[0]||($[0]=[p("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):S("",!0)],16,Xl)):S("",!0),t.item.items&&t.item.items.length?(u(),h("div",Zl,[t.depth<5?(u(!0),h(R,{key:0},z(t.item.items,P=>(u(),E(x,{key:P.text,item:P,depth:t.depth+1},null,8,["item","depth"]))),128)):S("",!0)])):S("",!0)]),_:1},8,["class"])}}}),nc=L(ec,[["__scopeId","data-v-f38cac9e"]]),tc=K({__name:"VPSidebarGroup",props:{items:{}},setup(t){const e=G(!0);let n=null;return ke(()=>{n=setTimeout(()=>{n=null,e.value=!1},300)}),ps(()=>{n!=null&&(clearTimeout(n),n=null)}),(s,i)=>(u(!0),h(R,null,z(t.items,o=>(u(),h("div",{key:o.text,class:U(["group",{"no-transition":e.value}])},[O(nc,{item:o,depth:0},null,8,["item"])],2))),128))}}),sc=L(tc,[["__scopeId","data-v-1225a07a"]]),ic={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},oc=K({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=we(),s=t,i=G(null),o=cs(dn?document.body:null);ce([s,i],()=>{s.open?(o.value=!0,i.value?.focus()):o.value=!1},{immediate:!0,flush:"post"});const a=G(0);return ce(e,()=>{a.value+=1},{deep:!0}),(r,l)=>m(n)?(u(),h("aside",{key:0,class:U(["VPSidebar",{open:t.open}]),ref_key:"navEl",ref:i,onClick:l[0]||(l[0]=ms(()=>{},["stop"]))},[l[2]||(l[2]=p("div",{class:"curtain"},null,-1)),p("nav",ic,[l[1]||(l[1]=p("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),y(r.$slots,"sidebar-nav-before",{},void 0,!0),(u(),E(sc,{items:m(e),key:a.value},null,8,["items"])),y(r.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):S("",!0)}}),ac=L(oc,[["__scopeId","data-v-287e562e"]]),rc={href:"#VPContent",class:"VPSkipLink visually-hidden"},lc=K({__name:"VPSkipLink",setup(t){const{theme:e}=F(),n=pn(),s=G();return ce(()=>n.path,()=>s.value.focus()),(i,o)=>(u(),h(R,null,[p("span",{ref_key:"backToTop",ref:s,tabindex:"-1"},null,512),p("a",rc,B(m(e).skipToContentLabel||"Skip to content"),1)],64))}}),cc=L(lc,[["__scopeId","data-v-2b85ce0a"]]),uc=K({__name:"Layout",setup(t){const{isOpen:e,open:n,close:s}=zi();Wi({closeSidebar:s});const{frontmatter:i}=F(),o=_i(),a=T(()=>!!o["home-hero-image"]);return us(bs,{heroImageSlotExists:a}),(r,l)=>{const c=Ce("Content");return m(i).layout!==!1?(u(),h("div",{key:0,class:U(["Layout",m(i).pageClass])},[y(r.$slots,"layout-top",{},void 0,!0),O(cc),O(Si,{class:"backdrop",show:m(e),onClick:m(s)},null,8,["show","onClick"]),O(Ql,null,{"nav-bar-title-before":k(()=>[y(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":k(()=>[y(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":k(()=>[y(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":k(()=>[y(r.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":k(()=>[y(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":k(()=>[y(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),O(Ba,{open:m(e),onOpenMenu:m(n)},null,8,["open","onOpenMenu"]),O(ac,{open:m(e)},{"sidebar-nav-before":k(()=>[y(r.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":k(()=>[y(r.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),O(ka,null,{"page-top":k(()=>[y(r.$slots,"page-top",{},void 0,!0)]),"page-bottom":k(()=>[y(r.$slots,"page-bottom",{},void 0,!0)]),"not-found":k(()=>[y(r.$slots,"not-found",{},void 0,!0)]),"home-hero-before":k(()=>[y(r.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":k(()=>[y(r.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":k(()=>[y(r.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":k(()=>[y(r.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":k(()=>[y(r.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":k(()=>[y(r.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":k(()=>[y(r.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":k(()=>[y(r.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":k(()=>[y(r.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":k(()=>[y(r.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":k(()=>[y(r.$slots,"doc-before",{},void 0,!0)]),"doc-after":k(()=>[y(r.$slots,"doc-after",{},void 0,!0)]),"doc-top":k(()=>[y(r.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":k(()=>[y(r.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":k(()=>[y(r.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":k(()=>[y(r.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":k(()=>[y(r.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":k(()=>[y(r.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":k(()=>[y(r.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":k(()=>[y(r.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),O(Pa),y(r.$slots,"layout-bottom",{},void 0,!0)],2)):(u(),E(c,{key:1}))}}}),dc=L(uc,[["__scopeId","data-v-4ecf6b55"]]),Ut={Layout:dc,enhanceApp:({app:t})=>{t.component("Badge",ki)}},pc={"/":239,"/terminal":119,"/cpp":15,"/cocos":2,"/AI":1,"/css":19,"/css/book-css":5,"/css/book-css/example/01-example":4,"/terminal/linux":53,"/terminal/podman":26,"/databases":10,"/databases/elasticsearch":16,"/databases/elasticsearch/file1/install":9,"/databases/elasticsearch/file1/kibana":5,"/databases/elasticsearch/file1/devTool":6,"/terminal/shell":7,"/terminal/shell/basic/shebang":8,"/databases/prisma":16,"/databases/prisma/basic/install":30,"/databases/prisma/basic/generate":5,"/databases/prisma/basic/schema":13,"/databases/prisma/basic/migrate":14,"/databases/prisma/basic/db":6,"/databases/prisma/basic/studio":2,"/databases/prisma/basic/client":2,"/daily":18,"/daily/ opening":15,"/daily/template":12,"/daily/template/问女生情史":7,"/terminal/linux/system/growpart":6,"/terminal/linux/system/resize2fs":3,"/terminal/linux/system/uname":8,"/rust":21,"/rust/basis":18,"/rust/dioxus":17,"/rust/dioxus/start/install":21,"/rust/dioxus/start/new-fullstack":2,"/rust/dioxus/start/new-desktop":5,"/rust/dioxus/start/new-spa":74,"/rust/dioxus/start/dx":3},mc=JSON.parse('[{"path":"/rust/dioxus/start/new-spa","title":"Single Page（SPA）","views":74,"bookKey":"dioxus","chapterKey":"start","category":"rust"},{"path":"/databases/prisma/basic/install","title":"install 下载","views":30,"bookKey":"prisma","chapterKey":"basic","category":"databases"},{"path":"/rust/dioxus/start/install","title":"安装 Dioxus","views":21,"bookKey":"dioxus","chapterKey":"start","category":"rust"},{"path":"/databases/prisma/basic/migrate","title":"migrate 迁移","views":14,"bookKey":"prisma","chapterKey":"basic","category":"databases"},{"path":"/databases/prisma/basic/schema","title":"schema 概要","views":13,"bookKey":"prisma","chapterKey":"basic","category":"databases"},{"path":"/databases/elasticsearch/file1/install","title":"install","views":9,"bookKey":"elasticsearch","chapterKey":"file1","category":"databases"},{"path":"/terminal/linux/system/uname","title":"uname 系统标识","views":8,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/shell/basic/shebang","title":"Shebang 首行格式","views":8,"bookKey":"shell","chapterKey":"basic","category":"terminal"},{"path":"/databases/elasticsearch/file1/devTool","title":"Dev Tools","views":6,"bookKey":"elasticsearch","chapterKey":"file1","category":"databases"},{"path":"/databases/prisma/basic/db","title":"db 数据库操作","views":6,"bookKey":"prisma","chapterKey":"basic","category":"databases"},{"path":"/terminal/linux/system/growpart","title":"growpart 扩容分区","views":6,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/databases/elasticsearch/file1/kibana","title":"Kibana","views":5,"bookKey":"elasticsearch","chapterKey":"file1","category":"databases"},{"path":"/databases/prisma/basic/generate","title":"generate 生成插件","views":5,"bookKey":"prisma","chapterKey":"basic","category":"databases"},{"path":"/rust/dioxus/start/new-desktop","title":"Desktop（桌面）","views":5,"bookKey":"dioxus","chapterKey":"start","category":"rust"},{"path":"/css/book-css/example/01-example","title":"示例：动画与过渡","views":4,"bookKey":"book-css","chapterKey":"example","category":"css"},{"path":"/rust/dioxus/start/dx","title":"dx 命令","views":3,"bookKey":"dioxus","chapterKey":"start","category":"rust"},{"path":"/terminal/linux/system/resize2fs","title":"resize2fs 扩展文件系统","views":3,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/databases/prisma/basic/client","title":"client 数据库使用","views":2,"bookKey":"prisma","chapterKey":"basic","category":"databases"},{"path":"/databases/prisma/basic/studio","title":"studio 数据库界面","views":2,"bookKey":"prisma","chapterKey":"basic","category":"databases"},{"path":"/rust/dioxus/start/new-fullstack","title":"Fullstack（全栈网页）","views":2,"bookKey":"dioxus","chapterKey":"start","category":"rust"},{"path":"/AI/book-AI/example/01-example","title":"示例：模型与 API","views":0,"bookKey":"book-AI","chapterKey":"example","category":"AI"},{"path":"/block-chain/book-block-chain/example/01-example","title":"示例：节点与共识","views":0,"bookKey":"book-block-chain","chapterKey":"example","category":"block-chain"},{"path":"/block-contract/book-block-contract/example/01-example","title":"示例：Solidity 入门","views":0,"bookKey":"book-block-contract","chapterKey":"example","category":"block-contract"},{"path":"/block-frontend/book-block-frontend/example/01-example","title":"示例：钱包连接","views":0,"bookKey":"book-block-frontend","chapterKey":"example","category":"block-frontend"},{"path":"/block-quant/book-block-quant/example/01-example","title":"示例：策略与回测","views":0,"bookKey":"book-block-quant","chapterKey":"example","category":"block-quant"},{"path":"/cocos/book-cocos/example/01-example","title":"示例：场景与节点","views":0,"bookKey":"book-cocos","chapterKey":"example","category":"cocos"},{"path":"/cpp/book-cpp/example/01-example","title":"示例：环境与工具链","views":0,"bookKey":"book-cpp","chapterKey":"example","category":"cpp"},{"path":"/english/book-english/example/01-example","title":"示例：常用术语","views":0,"bookKey":"book-english","chapterKey":"example","category":"english"},{"path":"/golang/book-golang/example/01-example","title":"示例：HTTP 服务","views":0,"bookKey":"book-golang","chapterKey":"example","category":"golang"},{"path":"/hacker/book-hacker/example/01-example","title":"示例：安全清单","views":0,"bookKey":"book-hacker","chapterKey":"example","category":"hacker"},{"path":"/math/book-math/example/01-example","title":"示例：极限与导数","views":0,"bookKey":"book-math","chapterKey":"example","category":"math"},{"path":"/node.js/book-node.js/example/01-example","title":"示例：Express 起步","views":0,"bookKey":"book-node.js","chapterKey":"example","category":"node.js"},{"path":"/python/book-python/example/01-example","title":"示例：FastAPI 入门","views":0,"bookKey":"book-python","chapterKey":"example","category":"python"},{"path":"/react/book-react/example/01-example","title":"示例：Hooks 入门","views":0,"bookKey":"book-react","chapterKey":"example","category":"react"},{"path":"/rust/basis/start/example","title":"示例：axum 示例","views":0,"bookKey":"basis","chapterKey":"start","category":"rust"},{"path":"/rust/dioxus/start/new-mobile","title":"Mobile（移动端）","views":0,"bookKey":"dioxus","chapterKey":"start","category":"rust"},{"path":"/terminal/linux/directory/cd","title":"cd 切换目录","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/clear","title":"clear 清空屏幕","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/cp","title":"cp 复制文件","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/ln","title":"ln 命令详解","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/ls","title":"ls 命令详解","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/man","title":"man 命令详解","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/mkdir","title":"mkdir 命令详解","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/mv","title":"mv 命令详解","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/pwd","title":"pwd 查看路径","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/readlink","title":"readlink 查软连接","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/rm","title":"rm 删除文件","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/scp","title":"scp 远程复制","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/touch","title":"touch 创建文件","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/directory/which","title":"which 命令路径","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal"},{"path":"/terminal/linux/document/cat","title":"cat 查看文件","views":0,"bookKey":"linux","chapterKey":"document","category":"terminal"},{"path":"/terminal/linux/document/grep","title":"grep 文本搜索","views":0,"bookKey":"linux","chapterKey":"document","category":"terminal"},{"path":"/terminal/linux/document/head","title":"head 看文件头","views":0,"bookKey":"linux","chapterKey":"document","category":"terminal"},{"path":"/terminal/linux/document/less","title":"less 分页查看","views":0,"bookKey":"linux","chapterKey":"document","category":"terminal"},{"path":"/terminal/linux/document/nano","title":"nano 编辑器","views":0,"bookKey":"linux","chapterKey":"document","category":"terminal"},{"path":"/terminal/linux/document/tail","title":"tail 看文件尾","views":0,"bookKey":"linux","chapterKey":"document","category":"terminal"},{"path":"/terminal/linux/document/vim","title":"vim 编辑器","views":0,"bookKey":"linux","chapterKey":"document","category":"terminal"},{"path":"/terminal/linux/file/chmod","title":"chmod 修改权限","views":0,"bookKey":"linux","chapterKey":"file","category":"terminal"},{"path":"/terminal/linux/file/chown","title":"chown 修改所属","views":0,"bookKey":"linux","chapterKey":"file","category":"terminal"},{"path":"/terminal/linux/file/file","title":"file 判断类型","views":0,"bookKey":"linux","chapterKey":"file","category":"terminal"},{"path":"/terminal/linux/file/find","title":"find 查找文件","views":0,"bookKey":"linux","chapterKey":"file","category":"terminal"},{"path":"/terminal/linux/file/gzip","title":"gzip 压缩解压","views":0,"bookKey":"linux","chapterKey":"file","category":"terminal"},{"path":"/terminal/linux/file/stat","title":"stat 查元数据","views":0,"bookKey":"linux","chapterKey":"file","category":"terminal"},{"path":"/terminal/linux/file/tar","title":"tar 打包解包","views":0,"bookKey":"linux","chapterKey":"file","category":"terminal"},{"path":"/terminal/linux/file/zip","title":"zip 打包压缩","views":0,"bookKey":"linux","chapterKey":"file","category":"terminal"},{"path":"/terminal/linux/process/background","title":"& 后台执行","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/journalctl-u","title":"journalctl 服务日志","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/kill","title":"kill 终止进程","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/lsof","title":"lsof 进程端口","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/netstat","title":"netstat 网络端口","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/nice","title":"nice 进程优先级","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/nohup","title":"nohup 后台运行","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/pgrep","title":"pgrep 条件匹配","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/pidof","title":"pidof 查询PID","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/pkill","title":"pkill 名称终止","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/ps","title":"ps 进程快照","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/pstree","title":"pstree 进程树形","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/renice","title":"renice 进程优先","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/systemctl","title":"systemctl 服务管理","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/uptime","title":"uptime 系统负载","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/process/w","title":"w 用户会话","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal"},{"path":"/terminal/linux/system/apt","title":"apt 包管理","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/df","title":"df 查看空间","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/du","title":"du 目录占用","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/echo-path","title":"echo $PATH 查看搜索路径","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/echo","title":"echo 输出文本","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/eval","title":"eval 二次执行","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/exec","title":"exec 替换进程","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/exit","title":"exit 退出会话","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/export-path","title":"export PATH 设置路径","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/free","title":"free 内存查看","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/lsblk","title":"lsblk 磁盘拓扑","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/passwd","title":"passwd 修改密码","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/pipe","title":"| 管道操作符","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/reboot","title":"reboot 重启系统","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/redirect-append","title":">> 追加重定向","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/redirect-overwrite","title":"> 覆盖重定向","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/shutdown","title":"shutdown 关机调度","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/sudo","title":"sudo 提权执行","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/top","title":"top 进程监控","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/unset-path","title":"unset PATH 清除变量","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/wc","title":"wc 文本计数","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/who","title":"who 查看登录会话","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/linux/system/whoami","title":"whoami 当前用户","views":0,"bookKey":"linux","chapterKey":"system","category":"terminal"},{"path":"/terminal/podman/basic/info","title":"podman info","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/install","title":"install podman","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/machine-init","title":"podman machine init","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/machine-ls","title":"podman machine ls","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/machine-restart","title":"podman machine restart","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/machine-rm","title":"podman machine rm","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/machine-ssh","title":"podman machine ssh","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/machine-start","title":"podman machine start","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/machine-status","title":"podman machine status","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/machine-stop","title":"podman machine stop","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/system-df","title":"podman system df","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/system-info","title":"podman system info","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/system-prune","title":"podman system prune","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/system-reset","title":"podman system reset","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/podman/basic/version","title":"podman --version","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal"},{"path":"/terminal/shell/basic/arithmetic","title":"arithmetic 数学运算","views":0,"bookKey":"shell","chapterKey":"basic","category":"terminal"},{"path":"/terminal/shell/basic/builtin-vars","title":"$0 $1 内置变量","views":0,"bookKey":"shell","chapterKey":"basic","category":"terminal"},{"path":"/terminal/shell/basic/comment","title":"：注释","views":0,"bookKey":"shell","chapterKey":"basic","category":"terminal"},{"path":"/terminal/shell/basic/for","title":"for 循环","views":0,"bookKey":"shell","chapterKey":"basic","category":"terminal"},{"path":"/terminal/shell/basic/function","title":"function 函数","views":0,"bookKey":"shell","chapterKey":"basic","category":"terminal"},{"path":"/terminal/shell/basic/if","title":"if 条件","views":0,"bookKey":"shell","chapterKey":"basic","category":"terminal"},{"path":"/terminal/shell/basic/logical","title":"`&& ||` 逻辑判断","views":0,"bookKey":"shell","chapterKey":"basic","category":"terminal"},{"path":"/terminal/shell/basic/read","title":"read 读取输入","views":0,"bookKey":"shell","chapterKey":"basic","category":"terminal"},{"path":"/terminal/shell/basic/variable","title":"variable 变量","views":0,"bookKey":"shell","chapterKey":"basic","category":"terminal"},{"path":"/terminal/shell/basic/while","title":"while 循环","views":0,"bookKey":"shell","chapterKey":"basic","category":"terminal"},{"path":"/testing/book-bug-test/example/01-example","title":"示例：常见 Bug 类型","views":0,"bookKey":"book-bug-test","chapterKey":"example","category":"testing"},{"path":"/vue/book-vue/example/01-example","title":"示例：组件与响应式","views":0,"bookKey":"book-vue","chapterKey":"example","category":"vue"}]'),hc=JSON.parse('[{"path":"/rust/dioxus/start/","title":"快速开始","views":105,"bookKey":"dioxus","chapterKey":"start","category":"rust","contents":[{"path":"/rust/dioxus/start/new-spa","title":"Single Page（SPA）","views":74},{"path":"/rust/dioxus/start/install","title":"安装 Dioxus","views":21},{"path":"/rust/dioxus/start/new-desktop","title":"Desktop（桌面）","views":5},{"path":"/rust/dioxus/start/dx","title":"dx 命令","views":3},{"path":"/rust/dioxus/start/new-fullstack","title":"Fullstack（全栈网页）","views":2},{"path":"/rust/dioxus/start/new-mobile","title":"Mobile（移动端）","views":0}]},{"path":"/databases/prisma/basic/","title":"基础内容","views":72,"bookKey":"prisma","chapterKey":"basic","category":"databases","contents":[{"path":"/databases/prisma/basic/install","title":"install 下载","views":30},{"path":"/databases/prisma/basic/migrate","title":"migrate 迁移","views":14},{"path":"/databases/prisma/basic/schema","title":"schema 概要","views":13},{"path":"/databases/prisma/basic/db","title":"db 数据库操作","views":6},{"path":"/databases/prisma/basic/generate","title":"generate 生成插件","views":5},{"path":"/databases/prisma/basic/client","title":"client 数据库使用","views":2},{"path":"/databases/prisma/basic/studio","title":"studio 数据库界面","views":2}]},{"path":"/databases/elasticsearch/file1/","title":"快速入门","views":20,"bookKey":"elasticsearch","chapterKey":"file1","category":"databases","contents":[{"path":"/databases/elasticsearch/file1/install","title":"install","views":9},{"path":"/databases/elasticsearch/file1/devTool","title":"Dev Tools","views":6},{"path":"/databases/elasticsearch/file1/kibana","title":"Kibana","views":5}]},{"path":"/terminal/linux/system/","title":"系统信息","views":17,"bookKey":"linux","chapterKey":"system","category":"terminal","contents":[{"path":"/terminal/linux/system/uname","title":"uname 系统标识","views":8},{"path":"/terminal/linux/system/growpart","title":"growpart 扩容分区","views":6},{"path":"/terminal/linux/system/resize2fs","title":"resize2fs 扩展文件系统","views":3},{"path":"/terminal/linux/system/apt","title":"apt 包管理","views":0},{"path":"/terminal/linux/system/df","title":"df 查看空间","views":0},{"path":"/terminal/linux/system/du","title":"du 目录占用","views":0},{"path":"/terminal/linux/system/echo-path","title":"echo $PATH 查看搜索路径","views":0},{"path":"/terminal/linux/system/echo","title":"echo 输出文本","views":0},{"path":"/terminal/linux/system/eval","title":"eval 二次执行","views":0},{"path":"/terminal/linux/system/exec","title":"exec 替换进程","views":0},{"path":"/terminal/linux/system/exit","title":"exit 退出会话","views":0},{"path":"/terminal/linux/system/export-path","title":"export PATH 设置路径","views":0},{"path":"/terminal/linux/system/free","title":"free 内存查看","views":0},{"path":"/terminal/linux/system/lsblk","title":"lsblk 磁盘拓扑","views":0},{"path":"/terminal/linux/system/passwd","title":"passwd 修改密码","views":0},{"path":"/terminal/linux/system/pipe","title":"| 管道操作符","views":0},{"path":"/terminal/linux/system/reboot","title":"reboot 重启系统","views":0},{"path":"/terminal/linux/system/redirect-append","title":">> 追加重定向","views":0},{"path":"/terminal/linux/system/redirect-overwrite","title":"> 覆盖重定向","views":0},{"path":"/terminal/linux/system/shutdown","title":"shutdown 关机调度","views":0},{"path":"/terminal/linux/system/sudo","title":"sudo 提权执行","views":0},{"path":"/terminal/linux/system/top","title":"top 进程监控","views":0},{"path":"/terminal/linux/system/unset-path","title":"unset PATH 清除变量","views":0},{"path":"/terminal/linux/system/wc","title":"wc 文本计数","views":0},{"path":"/terminal/linux/system/who","title":"who 查看登录会话","views":0},{"path":"/terminal/linux/system/whoami","title":"whoami 当前用户","views":0}]},{"path":"/terminal/shell/basic/","title":"Bash 基础语法","views":8,"bookKey":"shell","chapterKey":"basic","category":"terminal","contents":[{"path":"/terminal/shell/basic/shebang","title":"Shebang 首行格式","views":8},{"path":"/terminal/shell/basic/arithmetic","title":"arithmetic 数学运算","views":0},{"path":"/terminal/shell/basic/builtin-vars","title":"$0 $1 内置变量","views":0},{"path":"/terminal/shell/basic/comment","title":"：注释","views":0},{"path":"/terminal/shell/basic/for","title":"for 循环","views":0},{"path":"/terminal/shell/basic/function","title":"function 函数","views":0},{"path":"/terminal/shell/basic/if","title":"if 条件","views":0},{"path":"/terminal/shell/basic/logical","title":"`&& ||` 逻辑判断","views":0},{"path":"/terminal/shell/basic/read","title":"read 读取输入","views":0},{"path":"/terminal/shell/basic/variable","title":"variable 变量","views":0},{"path":"/terminal/shell/basic/while","title":"while 循环","views":0}]},{"path":"/css/book-css/example/","title":"入门示例","views":4,"bookKey":"book-css","chapterKey":"example","category":"css","contents":[{"path":"/css/book-css/example/01-example","title":"示例：动画与过渡","views":4}]},{"path":"/AI/book-AI/example/","title":"入门示例","views":0,"bookKey":"book-AI","chapterKey":"example","category":"AI","contents":[{"path":"/AI/book-AI/example/01-example","title":"示例：模型与 API","views":0}]},{"path":"/block-chain/book-block-chain/example/","title":"入门示例","views":0,"bookKey":"book-block-chain","chapterKey":"example","category":"block-chain","contents":[{"path":"/block-chain/book-block-chain/example/01-example","title":"示例：节点与共识","views":0}]},{"path":"/block-contract/book-block-contract/example/","title":"入门示例","views":0,"bookKey":"book-block-contract","chapterKey":"example","category":"block-contract","contents":[{"path":"/block-contract/book-block-contract/example/01-example","title":"示例：Solidity 入门","views":0}]},{"path":"/block-frontend/book-block-frontend/example/","title":"入门示例","views":0,"bookKey":"book-block-frontend","chapterKey":"example","category":"block-frontend","contents":[{"path":"/block-frontend/book-block-frontend/example/01-example","title":"示例：钱包连接","views":0}]},{"path":"/block-quant/book-block-quant/example/","title":"入门示例","views":0,"bookKey":"book-block-quant","chapterKey":"example","category":"block-quant","contents":[{"path":"/block-quant/book-block-quant/example/01-example","title":"示例：策略与回测","views":0}]},{"path":"/cocos/book-cocos/example/","title":"入门示例","views":0,"bookKey":"book-cocos","chapterKey":"example","category":"cocos","contents":[{"path":"/cocos/book-cocos/example/01-example","title":"示例：场景与节点","views":0}]},{"path":"/cpp/book-cpp/example/","title":"入门示例","views":0,"bookKey":"book-cpp","chapterKey":"example","category":"cpp","contents":[{"path":"/cpp/book-cpp/example/01-example","title":"示例：环境与工具链","views":0}]},{"path":"/english/book-english/example/","title":"入门示例","views":0,"bookKey":"book-english","chapterKey":"example","category":"english","contents":[{"path":"/english/book-english/example/01-example","title":"示例：常用术语","views":0}]},{"path":"/golang/book-golang/example/","title":"入门示例","views":0,"bookKey":"book-golang","chapterKey":"example","category":"golang","contents":[{"path":"/golang/book-golang/example/01-example","title":"示例：HTTP 服务","views":0}]},{"path":"/hacker/book-hacker/example/","title":"入门示例","views":0,"bookKey":"book-hacker","chapterKey":"example","category":"hacker","contents":[{"path":"/hacker/book-hacker/example/01-example","title":"示例：安全清单","views":0}]},{"path":"/math/book-math/example/","title":"入门示例","views":0,"bookKey":"book-math","chapterKey":"example","category":"math","contents":[{"path":"/math/book-math/example/01-example","title":"示例：极限与导数","views":0}]},{"path":"/node.js/book-node.js/example/","title":"入门示例","views":0,"bookKey":"book-node.js","chapterKey":"example","category":"node.js","contents":[{"path":"/node.js/book-node.js/example/01-example","title":"示例：Express 起步","views":0}]},{"path":"/python/book-python/example/","title":"入门示例","views":0,"bookKey":"book-python","chapterKey":"example","category":"python","contents":[{"path":"/python/book-python/example/01-example","title":"示例：FastAPI 入门","views":0}]},{"path":"/react/book-react/example/","title":"入门示例","views":0,"bookKey":"book-react","chapterKey":"example","category":"react","contents":[{"path":"/react/book-react/example/01-example","title":"示例：Hooks 入门","views":0}]},{"path":"/rust/basis/start/","title":"基础入门","views":0,"bookKey":"basis","chapterKey":"start","category":"rust","contents":[{"path":"/rust/basis/start/example","title":"示例：axum 示例","views":0}]},{"path":"/terminal/linux/directory/","title":"目录操作","views":0,"bookKey":"linux","chapterKey":"directory","category":"terminal","contents":[{"path":"/terminal/linux/directory/cd","title":"cd 切换目录","views":0},{"path":"/terminal/linux/directory/clear","title":"clear 清空屏幕","views":0},{"path":"/terminal/linux/directory/cp","title":"cp 复制文件","views":0},{"path":"/terminal/linux/directory/ln","title":"ln 命令详解","views":0},{"path":"/terminal/linux/directory/ls","title":"ls 命令详解","views":0},{"path":"/terminal/linux/directory/man","title":"man 命令详解","views":0},{"path":"/terminal/linux/directory/mkdir","title":"mkdir 命令详解","views":0},{"path":"/terminal/linux/directory/mv","title":"mv 命令详解","views":0},{"path":"/terminal/linux/directory/pwd","title":"pwd 查看路径","views":0},{"path":"/terminal/linux/directory/readlink","title":"readlink 查软连接","views":0},{"path":"/terminal/linux/directory/rm","title":"rm 删除文件","views":0},{"path":"/terminal/linux/directory/scp","title":"scp 远程复制","views":0},{"path":"/terminal/linux/directory/touch","title":"touch 创建文件","views":0},{"path":"/terminal/linux/directory/which","title":"which 命令路径","views":0}]},{"path":"/terminal/linux/document/","title":"文档操作","views":0,"bookKey":"linux","chapterKey":"document","category":"terminal","contents":[{"path":"/terminal/linux/document/cat","title":"cat 查看文件","views":0},{"path":"/terminal/linux/document/grep","title":"grep 文本搜索","views":0},{"path":"/terminal/linux/document/head","title":"head 看文件头","views":0},{"path":"/terminal/linux/document/less","title":"less 分页查看","views":0},{"path":"/terminal/linux/document/nano","title":"nano 编辑器","views":0},{"path":"/terminal/linux/document/tail","title":"tail 看文件尾","views":0},{"path":"/terminal/linux/document/vim","title":"vim 编辑器","views":0}]},{"path":"/terminal/linux/file/","title":"文件操作","views":0,"bookKey":"linux","chapterKey":"file","category":"terminal","contents":[{"path":"/terminal/linux/file/chmod","title":"chmod 修改权限","views":0},{"path":"/terminal/linux/file/chown","title":"chown 修改所属","views":0},{"path":"/terminal/linux/file/file","title":"file 判断类型","views":0},{"path":"/terminal/linux/file/find","title":"find 查找文件","views":0},{"path":"/terminal/linux/file/gzip","title":"gzip 压缩解压","views":0},{"path":"/terminal/linux/file/stat","title":"stat 查元数据","views":0},{"path":"/terminal/linux/file/tar","title":"tar 打包解包","views":0},{"path":"/terminal/linux/file/zip","title":"zip 打包压缩","views":0}]},{"path":"/terminal/linux/process/","title":"进程管理","views":0,"bookKey":"linux","chapterKey":"process","category":"terminal","contents":[{"path":"/terminal/linux/process/background","title":"& 后台执行","views":0},{"path":"/terminal/linux/process/journalctl-u","title":"journalctl 服务日志","views":0},{"path":"/terminal/linux/process/kill","title":"kill 终止进程","views":0},{"path":"/terminal/linux/process/lsof","title":"lsof 进程端口","views":0},{"path":"/terminal/linux/process/netstat","title":"netstat 网络端口","views":0},{"path":"/terminal/linux/process/nice","title":"nice 进程优先级","views":0},{"path":"/terminal/linux/process/nohup","title":"nohup 后台运行","views":0},{"path":"/terminal/linux/process/pgrep","title":"pgrep 条件匹配","views":0},{"path":"/terminal/linux/process/pidof","title":"pidof 查询PID","views":0},{"path":"/terminal/linux/process/pkill","title":"pkill 名称终止","views":0},{"path":"/terminal/linux/process/ps","title":"ps 进程快照","views":0},{"path":"/terminal/linux/process/pstree","title":"pstree 进程树形","views":0},{"path":"/terminal/linux/process/renice","title":"renice 进程优先","views":0},{"path":"/terminal/linux/process/systemctl","title":"systemctl 服务管理","views":0},{"path":"/terminal/linux/process/uptime","title":"uptime 系统负载","views":0},{"path":"/terminal/linux/process/w","title":"w 用户会话","views":0}]},{"path":"/terminal/podman/basic/","title":"系统命令","views":0,"bookKey":"podman","chapterKey":"basic","category":"terminal","contents":[{"path":"/terminal/podman/basic/info","title":"podman info","views":0},{"path":"/terminal/podman/basic/install","title":"install podman","views":0},{"path":"/terminal/podman/basic/machine-init","title":"podman machine init","views":0},{"path":"/terminal/podman/basic/machine-ls","title":"podman machine ls","views":0},{"path":"/terminal/podman/basic/machine-restart","title":"podman machine restart","views":0},{"path":"/terminal/podman/basic/machine-rm","title":"podman machine rm","views":0},{"path":"/terminal/podman/basic/machine-ssh","title":"podman machine ssh","views":0},{"path":"/terminal/podman/basic/machine-start","title":"podman machine start","views":0},{"path":"/terminal/podman/basic/machine-status","title":"podman machine status","views":0},{"path":"/terminal/podman/basic/machine-stop","title":"podman machine stop","views":0},{"path":"/terminal/podman/basic/system-df","title":"podman system df","views":0},{"path":"/terminal/podman/basic/system-info","title":"podman system info","views":0},{"path":"/terminal/podman/basic/system-prune","title":"podman system prune","views":0},{"path":"/terminal/podman/basic/system-reset","title":"podman system reset","views":0},{"path":"/terminal/podman/basic/version","title":"podman --version","views":0}]},{"path":"/testing/book-bug-test/example/","title":"入门示例","views":0,"bookKey":"book-bug-test","chapterKey":"example","category":"testing","contents":[{"path":"/testing/book-bug-test/example/01-example","title":"示例：常见 Bug 类型","views":0}]},{"path":"/vue/book-vue/example/","title":"入门示例","views":0,"bookKey":"book-vue","chapterKey":"example","category":"vue","contents":[{"path":"/vue/book-vue/example/01-example","title":"示例：组件与响应式","views":0}]}]'),fc=[{path:"/rust/dioxus/",title:"Dioxus frame",views:105,bookKey:"dioxus",category:"rust",chapters:[{path:"/rust/dioxus/start/",title:"快速开始",views:105}]},{path:"/databases/prisma/",title:"Prisma",views:72,bookKey:"prisma",category:"databases",chapters:[{path:"/databases/prisma/basic/",title:"基础内容",views:72}]},{path:"/databases/elasticsearch/",title:"Elasticsearch",views:20,bookKey:"elasticsearch",category:"databases",chapters:[{path:"/databases/elasticsearch/file1/",title:"快速入门",views:20}]},{path:"/terminal/linux/",title:"Linux 命令",views:17,bookKey:"linux",category:"terminal",chapters:[{path:"/terminal/linux/system/",title:"系统信息",views:17},{path:"/terminal/linux/directory/",title:"目录操作",views:0},{path:"/terminal/linux/document/",title:"文档操作",views:0},{path:"/terminal/linux/file/",title:"文件操作",views:0},{path:"/terminal/linux/process/",title:"进程管理",views:0}]},{path:"/terminal/shell/",title:"Shell 命令",views:8,bookKey:"shell",category:"terminal",chapters:[{path:"/terminal/shell/basic/",title:"Bash 基础语法",views:8}]},{path:"/css/book-css/",title:"CSS 特效基础",views:4,bookKey:"book-css",category:"css",chapters:[{path:"/css/book-css/example/",title:"入门示例",views:4}]},{path:"/AI/book-AI/",title:"AI 基础",views:0,bookKey:"book-AI",category:"AI",chapters:[{path:"/AI/book-AI/example/",title:"入门示例",views:0}]},{path:"/block-chain/book-block-chain/",title:"公链基础",views:0,bookKey:"book-block-chain",category:"block-chain",chapters:[{path:"/block-chain/book-block-chain/example/",title:"入门示例",views:0}]},{path:"/block-contract/book-block-contract/",title:"合约基础",views:0,bookKey:"book-block-contract",category:"block-contract",chapters:[{path:"/block-contract/book-block-contract/example/",title:"入门示例",views:0}]},{path:"/block-frontend/book-block-frontend/",title:"区块链前端基础",views:0,bookKey:"book-block-frontend",category:"block-frontend",chapters:[{path:"/block-frontend/book-block-frontend/example/",title:"入门示例",views:0}]},{path:"/block-quant/book-block-quant/",title:"量化基础",views:0,bookKey:"book-block-quant",category:"block-quant",chapters:[{path:"/block-quant/book-block-quant/example/",title:"入门示例",views:0}]},{path:"/cocos/book-cocos/",title:"Cocos 基础",views:0,bookKey:"book-cocos",category:"cocos",chapters:[{path:"/cocos/book-cocos/example/",title:"入门示例",views:0}]},{path:"/cpp/book-cpp/",title:"嵌入式基础",views:0,bookKey:"book-cpp",category:"cpp",chapters:[{path:"/cpp/book-cpp/example/",title:"入门示例",views:0}]},{path:"/english/book-english/",title:"编程英语基础",views:0,bookKey:"book-english",category:"english",chapters:[{path:"/english/book-english/example/",title:"入门示例",views:0}]},{path:"/golang/book-golang/",title:"Go 后端基础",views:0,bookKey:"book-golang",category:"golang",chapters:[{path:"/golang/book-golang/example/",title:"入门示例",views:0}]},{path:"/hacker/book-hacker/",title:"安全基础",views:0,bookKey:"book-hacker",category:"hacker",chapters:[{path:"/hacker/book-hacker/example/",title:"入门示例",views:0}]},{path:"/math/book-math/",title:"数学基础",views:0,bookKey:"book-math",category:"math",chapters:[{path:"/math/book-math/example/",title:"入门示例",views:0}]},{path:"/node.js/book-node.js/",title:"Node 后端基础",views:0,bookKey:"book-node.js",category:"node.js",chapters:[{path:"/node.js/book-node.js/example/",title:"入门示例",views:0}]},{path:"/python/book-python/",title:"Python 后端基础",views:0,bookKey:"book-python",category:"python",chapters:[{path:"/python/book-python/example/",title:"入门示例",views:0}]},{path:"/react/book-react/",title:"React 基础",views:0,bookKey:"book-react",category:"react",chapters:[{path:"/react/book-react/example/",title:"入门示例",views:0}]},{path:"/rust/basis/",title:"Rust 基础入门",views:0,bookKey:"basis",category:"rust",chapters:[{path:"/rust/basis/start/",title:"基础入门",views:0}]},{path:"/terminal/podman/",title:"Podman 命令",views:0,bookKey:"podman",category:"terminal",chapters:[{path:"/terminal/podman/basic/",title:"系统命令",views:0}]},{path:"/testing/book-bug-test/",title:"测试与 Bug",views:0,bookKey:"book-bug-test",category:"testing",chapters:[{path:"/testing/book-bug-test/example/",title:"入门示例",views:0}]},{path:"/vue/book-vue/",title:"Vue 基础",views:0,bookKey:"book-vue",category:"vue",chapters:[{path:"/vue/book-vue/example/",title:"入门示例",views:0}]}],le={pageViews:pc,byContent:mc,byChapter:hc,byBook:fc},bc=["title"],gc={class:"popular-sidebar-views"},yc=K({__name:"SidebarPopularHeat",props:{views:{}},setup(t){return(e,n)=>(u(),h("span",{class:"popular-sidebar-heat","aria-label":"热度",title:"PV："+t.views},[n[0]||(n[0]=p("svg",{class:"popular-sidebar-flame",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[p("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),p("path",{d:"M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.294 -2.333 5.588c0 3.704 3.134 6.706 7 6.706c3.866 0 7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235"})],-1)),p("span",gc,B(t.views),1)],8,bc))}}),vn=L(yc,[["__scopeId","data-v-45ce1d38"]]),vc={key:0,class:"popular-sidebar"},_c={class:"popular-sidebar-title"},kc=["href"],wc={class:"popular-sidebar-link-text"},xc=["href"],Sc={class:"popular-sidebar-link-text"},$c={key:0,class:"popular-sidebar-group"},Pc=["href"],Ac={class:"popular-sidebar-link-text"},Tc={key:1,class:"popular-sidebar-group"},Kc=["href"],Nc={class:"popular-sidebar-link-text"},_n=5,Ic=K({__name:"SidebarPopular",setup(t){const{page:e}=un(),n=T(()=>({byBook:le?.byBook??[],byChapter:le?.byChapter??[],byContent:le?.byContent??[]})),s=T(()=>{const a=e.value.relativePath;if(!a)return[];const r=a.replace(/\.md$/i,"").split("/").filter(Boolean);return r.length&&r[r.length-1]==="index"&&r.pop(),r}),i=T(()=>{const a=s.value;if(a.length===1){const r=a[0],l=n.value.byBook.filter(c=>c.category===r).slice(0,_n);return l.length?{type:"books",items:l}:null}if(a.length>=3){const r=`/${a.slice(0,3).join("/")}`,l=n.value.byChapter.find(g=>g.path.replace(/\/$/,"")===r);if(!l)return null;const c=l.contents.slice(0,_n);return{type:"chapter",title:l.title||"本章热门",items:c}}if(a.length===2){const r=`/${a[0]}/${a[1]}`,l=n.value.byChapter.filter(g=>g.path.startsWith(r)).slice(0,_n),c=n.value.byContent.filter(g=>g.path.startsWith(r)).slice(0,_n);return!l.length&&!c.length?null:{type:"book",chapters:l,contents:c}}return null});function o(a){return _e(a)}return(a,r)=>i.value?(u(),h("div",vc,[p("div",_c,B(i.value.type==="books"?"热门书本":i.value.type==="book"?"本书热门":i.value.title),1),i.value.type==="books"?(u(!0),h(R,{key:0},z(i.value.items,l=>(u(),h("a",{key:l.path,href:o(l.path),class:"popular-sidebar-link"},[p("span",wc,B(l.title),1),O(vn,{views:l.views},null,8,["views"])],8,kc))),128)):i.value.type==="chapter"?(u(!0),h(R,{key:1},z(i.value.items,l=>(u(),h("a",{key:l.path,href:o(l.path),class:"popular-sidebar-link"},[p("span",Sc,B(l.title),1),O(vn,{views:l.views},null,8,["views"])],8,xc))),128)):(u(),h(R,{key:2},[i.value.chapters.length?(u(),h("div",$c,[r[0]||(r[0]=p("span",{class:"popular-sidebar-label"},"章节",-1)),(u(!0),h(R,null,z(i.value.chapters,l=>(u(),h("a",{key:l.path,href:o(l.path),class:"popular-sidebar-link"},[p("span",Ac,B(l.title),1),O(vn,{views:l.views},null,8,["views"])],8,Pc))),128))])):S("",!0),i.value.contents.length?(u(),h("div",Tc,[r[1]||(r[1]=p("span",{class:"popular-sidebar-label"},"内容",-1)),(u(!0),h(R,null,z(i.value.contents,l=>(u(),h("a",{key:l.path,href:o(l.path),class:"popular-sidebar-link"},[p("span",Nc,B(l.title),1),O(vn,{views:l.views},null,8,["views"])],8,Kc))),128))])):S("",!0)],64))])):S("",!0)}}),Lc=L(Ic,[["__scopeId","data-v-4f24fd06"]]),Cc={class:"popular-home"},Oc={class:"popular-home-grid"},Ec={key:0,class:"popular-home-block"},Bc={class:"popular-home-list"},Dc=["href"],Mc={class:"popular-home-views"},Vc={key:1,class:"popular-home-block"},jc={class:"popular-home-list"},Hc=["href"],Rc={class:"popular-home-views"},Fc={key:2,class:"popular-home-block"},Uc={class:"popular-home-list"},qc=["href"],zc={class:"popular-home-views"},Jn=5,Gc=K({__name:"PopularHome",setup(t){const e=(le?.byBook??[]).slice(0,Jn),n=(le?.byChapter??[]).slice(0,Jn),s=(le?.byContent??[]).slice(0,Jn);function i(o){return _e(o)}return(o,a)=>(u(),h("div",Cc,[a[3]||(a[3]=p("h2",{class:"popular-home-heading"},"热度排行",-1)),p("div",Oc,[m(e).length?(u(),h("div",Ec,[a[0]||(a[0]=p("h3",{class:"popular-home-title"},"热门书本",-1)),p("ul",Bc,[(u(!0),h(R,null,z(m(e),r=>(u(),h("li",{key:r.path},[p("a",{href:i(r.path)},B(r.title),9,Dc),p("span",Mc,B(r.views),1)]))),128))])])):S("",!0),m(n).length?(u(),h("div",Vc,[a[1]||(a[1]=p("h3",{class:"popular-home-title"},"热门章节",-1)),p("ul",jc,[(u(!0),h(R,null,z(m(n),r=>(u(),h("li",{key:r.path},[p("a",{href:i(r.path)},B(r.title),9,Hc),p("span",Rc,B(r.views),1)]))),128))])])):S("",!0),m(s).length?(u(),h("div",Fc,[a[2]||(a[2]=p("h3",{class:"popular-home-title"},"热门内容",-1)),p("ul",Uc,[(u(!0),h(R,null,z(m(s),r=>(u(),h("li",{key:r.path},[p("a",{href:i(r.path)},B(r.title),9,qc),p("span",zc,B(r.views),1)]))),128))])])):S("",!0)])]))}}),Wc=L(Gc,[["__scopeId","data-v-9480b2db"]]),Jc={key:0,class:"popular-in-book"},Yc={key:0,class:"popular-in-book-block"},Qc={class:"popular-in-book-list"},Xc=["href"],Zc={class:"popular-in-book-views"},eu={key:1,class:"popular-in-book-block"},nu={class:"popular-in-book-list"},tu=["href"],su={class:"popular-in-book-views"},qt=5,iu=K({__name:"PopularInBook",props:{bookKey:{}},setup(t){const e=t,n=T(()=>{const a=(le?.byBook??[]).find(r=>r.bookKey===e.bookKey);return a?{...a,chapters:(a.chapters??[]).slice(0,qt),contents:[]}:null}),s=T(()=>(le?.byContent??[]).filter(a=>a.bookKey===e.bookKey).slice(0,qt));function i(o){return _e(o)}return(o,a)=>n.value?(u(),h("div",Jc,[a[2]||(a[2]=p("h3",{class:"popular-in-book-title"},"本书热度",-1)),n.value.chapters.length?(u(),h("div",Yc,[a[0]||(a[0]=p("span",{class:"popular-in-book-label"},"热门章节",-1)),p("ul",Qc,[(u(!0),h(R,null,z(n.value.chapters,r=>(u(),h("li",{key:r.path},[p("a",{href:i(r.path)},B(r.title),9,Xc),p("span",Zc,B(r.views),1)]))),128))])])):S("",!0),s.value.length?(u(),h("div",eu,[a[1]||(a[1]=p("span",{class:"popular-in-book-label"},"热门内容",-1)),p("ul",nu,[(u(!0),h(R,null,z(s.value,r=>(u(),h("li",{key:r.path},[p("a",{href:i(r.path)},B(r.title),9,tu),p("span",su,B(r.views),1)]))),128))])])):S("",!0)])):S("",!0)}}),ou=L(iu,[["__scopeId","data-v-a67547c8"]]),au={key:0,class:"popular-in-chapter"},ru={class:"popular-in-chapter-list"},lu=["href"],cu={class:"popular-in-chapter-views"},uu=K({__name:"PopularInChapter",props:{chapterPath:{}},setup(t){const e=t,n=T(()=>e.chapterPath.replace(/\/?$/,"")+"/"),s=T(()=>(le?.byChapter??[]).find(r=>r.path===n.value||r.path.replace(/\/$/,"")===n.value.replace(/\/$/,""))),i=T(()=>(s.value?.contents??[]).slice(0,8));function o(a){return _e(a)}return(a,r)=>s.value&&i.value.length?(u(),h("div",au,[r[0]||(r[0]=p("h3",{class:"popular-in-chapter-title"},"本章热门",-1)),p("ul",ru,[(u(!0),h(R,null,z(i.value,l=>(u(),h("li",{key:l.path},[p("a",{href:o(l.path)},B(l.title),9,lu),p("span",cu,B(l.views),1)]))),128))])])):S("",!0)}}),du=L(uu,[["__scopeId","data-v-eb4bd410"]]),pu=K({__name:"ViewTracker",setup(t){const{page:e}=un(),n=pn();function s(r){if(r==="index.md")return"/";const l=r.replace(/\.md$/,"");return l.endsWith("/index")?"/"+l.slice(0,-6)+"/":"/"+l}function i(r){return r.replace(/\.html$/i,"").replace(/\/$/,"")||"/"}function o(){const r=e.value.relativePath;return i(r&&r!=="404.md"?s(r):n.path||"/")}function a(r){}return ce(()=>[e.value.relativePath,n.path],()=>(o(),void 0),{immediate:!0}),(r,l)=>null}}),mu={AI:[{bookKey:"book-AI",title:"AI 基础",desc:"人工智能开发笔记。"}],"block-chain":[{bookKey:"book-block-chain",title:"公链基础",desc:"公链开发笔记。"}],"block-contract":[{bookKey:"book-block-contract",title:"合约基础",desc:"智能合约开发笔记。"}],"block-frontend":[{bookKey:"book-block-frontend",title:"区块链前端基础",desc:"区块链前端开发笔记。"}],"block-quant":[{bookKey:"book-block-quant",title:"量化基础",desc:"区块链量化交易笔记。"}],cocos:[{bookKey:"book-cocos",title:"Cocos 基础",desc:"Cocos 游戏前端开发笔记。"}],cpp:[{bookKey:"book-cpp",title:"嵌入式基础",desc:"C++ 嵌入式开发笔记：环境、工具链、示例。"}],css:[{bookKey:"book-css",title:"CSS 特效基础",desc:"前端 CSS 样式与特效笔记。"}],daily:[{bookKey:" opening",title:"opening",desc:"聊天开场白"},{bookKey:"template",title:"template",desc:"聊天模板"}],databases:[{bookKey:"elasticsearch",title:"Elasticsearch",desc:"分布式搜索与数据分析引擎相关笔记。"},{bookKey:"prisma",title:"Prisma",desc:"Node/TypeScript 生态常用的 ORM 与数据库工具链：Schema、迁移、类型安全的 Prisma Client。"}],english:[{bookKey:"book-english",title:"编程英语基础",desc:"编程英语笔记。"}],golang:[{bookKey:"book-golang",title:"Go 后端基础",desc:"Golang 后端开发笔记。"}],hacker:[{bookKey:"book-hacker",title:"安全基础",desc:"安全与防护相关笔记。"}],math:[{bookKey:"book-math",title:"数学基础",desc:"数学与微积分笔记。"}],"node.js":[{bookKey:"book-node.js",title:"Node 后端基础",desc:"Node.js 后端开发笔记。"}],python:[{bookKey:"book-python",title:"Python 后端基础",desc:"Python 后端开发笔记。"}],react:[{bookKey:"book-react",title:"React 基础",desc:"React 前端开发笔记。"}],rust:[{bookKey:"basis",title:"Rust 基础入门",desc:"包括开发环境配置、常用命令、项目结构、包管理、依赖管理、构建与运行、调试、测试等内容。"},{bookKey:"dioxus",title:"Dioxus frame",desc:"高性能跨端全栈框架，支持声明式 UI、响应式状态管理，以及多端部署（如 Web、桌面和移动端）。"}],terminal:[{bookKey:"linux",title:"Linux 命令",desc:"Linux 服务器运维笔记：常用命令、SSH、服务配置等。"},{bookKey:"podman",title:"Podman 命令",desc:"Podman 使用笔记：常用命令、基础用法、容器管理等。"},{bookKey:"shell",title:"Shell 命令",desc:"Shell 常用命令笔记：基础用法、快捷技巧、终端操作等。"}],testing:[{bookKey:"book-bug-test",title:"测试与 Bug",desc:"软件测试与 Bug 榜单笔记。"}],vue:[{bookKey:"book-vue",title:"Vue 基础",desc:"Vue 前端开发笔记。"}]},hu={class:"category-books"},fu=["href"],bu={class:"category-books-badge","aria-label":"热度"},gu={class:"category-books-title"},yu={key:0,class:"category-books-desc"},vu=K({__name:"CategoryBooks",setup(t){const{frontmatter:e,page:n}=un();let s=!1;function i(r,l){return r.length<=l?r:`${r.slice(0,l)}...`}ke(()=>{e.value.categoryBooksWide!==!1&&(s=!0,document.documentElement.classList.add("vp-category-wide"))}),ps(()=>{s&&(document.documentElement.classList.remove("vp-category-wide"),s=!1)});const o=T(()=>{const r=n.value.relativePath.split("/")[0]||"",l=le?.byBook??[],c=Object.fromEntries(l.filter(d=>d.category===r).map(d=>[d.bookKey,d]));return(mu[r]??[]).map(d=>{const f=c[d.bookKey];return{title:d.title,link:f?.path??`/${r}/${d.bookKey}/`,views:f?.views??0,desc:i((d.desc??"").trim(),20)}}).sort((d,f)=>f.views-d.views)});function a(r){return _e(r)}return(r,l)=>(u(),h("div",hu,[(u(!0),h(R,null,z(o.value,c=>(u(),h("a",{key:c.link,href:a(c.link),class:"category-books-card"},[p("span",bu,[l[0]||(l[0]=p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"category-books-flame"},[p("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),p("path",{d:"M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.294 -2.333 5.588c0 3.704 3.134 6.706 7 6.706c3.866 0 7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235"})],-1)),p("span",null,B(c.views),1)]),p("span",gu,B(c.title),1),c.desc?(u(),h("span",yu,B(c.desc),1)):S("",!0)],8,fu))),128))]))}}),_u=L(vu,[["__scopeId","data-v-6473e5fc"]]),ku=`# 示例：模型与 API

本文为示例，可替换为实际笔记。

常见用法：调用 OpenAI/Claude 等 API、本地部署开源模型。
`,wu=`# 入门示例

模型与 API 简介。

## 小节

- [示例：模型与 API](01-example)
`,xu=`# AI 基础

人工智能开发笔记。

## 章节

- [入门示例](/AI/book-AI/example/01-example) — 模型与 API
`,Su=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# 人工智能开发

本分类收录人工智能开发相关笔记。

## 书目

- [AI 基础](/AI/book-AI/) — 模型与 API、示例

<CategoryBooks />
`,$u=`# 示例：节点与共识

本文为示例，可替换为实际笔记。

公链核心：P2P 节点、共识算法（PoW/PoS 等）、区块与状态。
`,Pu=`# 入门示例

节点与共识简介。

## 小节

- [示例：节点与共识](01-example)
`,Au=`# 公链基础

公链开发笔记。

## 章节

- [入门示例](/block-chain/book-block-chain/example/01-example) — 节点与共识
`,Tu=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# 区块链公链开发

本分类收录公链开发相关笔记。

## 书目

- [公链基础](/block-chain/book-block-chain/) — 节点与共识、示例

<CategoryBooks />
`,Ku=`# 示例：Solidity 入门

本文为示例，可替换为实际笔记。

\`\`\`solidity
pragma solidity ^0.8.0;
contract Hello {
    function say() public pure returns (string memory) {
        return "Hello";
    }
}
\`\`\`
`,Nu=`# 入门示例

Solidity 入门。

## 小节

- [示例：Solidity 入门](01-example)
`,Iu=`# 合约基础

智能合约开发笔记。

## 章节

- [入门示例](/block-contract/book-block-contract/example/01-example) — Solidity 入门
`,Lu=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# 区块链合约开发

本分类收录智能合约开发相关笔记。

## 书目

- [合约基础](/block-contract/book-block-contract/) — Solidity 入门、示例

<CategoryBooks />
`,Cu=`# 示例：钱包连接

本文为示例，可替换为实际笔记。

常见库：ethers.js、wagmi、Web3.js 等，用于连接 MetaMask 等钱包。
`,Ou=`# 入门示例

钱包连接简介。

## 小节

- [示例：钱包连接](01-example)
`,Eu=`# 区块链前端基础

区块链前端开发笔记。

## 章节

- [入门示例](/block-frontend/book-block-frontend/example/01-example) — 钱包连接
`,Bu=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# 区块链前端开发

本分类收录区块链前端开发相关笔记。

## 书目

- [区块链前端基础](/block-frontend/book-block-frontend/) — 钱包连接、示例

<CategoryBooks />
`,Du=`# 示例：策略与回测

本文为示例，可替换为实际笔记。

量化常见步骤：数据获取、信号、回测、实盘/模拟盘。
`,Mu=`# 入门示例

策略与回测简介。

## 小节

- [示例：策略与回测](01-example)
`,Vu=`# 量化基础

区块链量化交易笔记。

## 章节

- [入门示例](/block-quant/book-block-quant/example/01-example) — 策略与回测
`,ju=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# 区块链量化交易

本分类收录区块链量化交易相关笔记。

## 书目

- [量化基础](/block-quant/book-block-quant/) — 策略与回测、示例

<CategoryBooks />
`,Hu=`# 示例：场景与节点

本文为示例，可替换为实际笔记。

Cocos 中场景（Scene）与节点（Node）是基本结构。
`,Ru=`# 入门示例

场景与节点简介。

## 小节

- [示例：场景与节点](01-example)
`,Fu=`# Cocos 基础

Cocos 游戏前端开发笔记。

## 章节

- [入门示例](/cocos/book-cocos/example/01-example) — 场景与节点
`,Uu=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# Cocos 游戏前端开发

本分类收录 Cocos 游戏前端开发相关笔记。

## 书目

- [Cocos 基础](/cocos/book-cocos/) — 场景与节点、示例

<CategoryBooks />
`,qu=`# 示例：环境与工具链

本文为示例，可替换为实际笔记。

嵌入式 C++ 常用工具链：GCC/Clang 交叉编译、OpenOCD 调试等。
`,zu=`# 入门示例

环境与工具链简介。

## 小节

- [示例：环境与工具链](01-example)
`,Gu=`# 嵌入式基础

C++ 嵌入式开发笔记：环境、工具链、示例。

## 章节

- [入门示例](/cpp/book-cpp/example/01-example) — 环境与工具链
`,Wu=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# C++嵌入式开发

本分类收录 C++ 嵌入式开发相关笔记。

## 书目

- [嵌入式基础](/cpp/book-cpp/) — 环境与工具链、示例

<CategoryBooks />`,Ju=`# 示例：动画与过渡

下面是一个 \`vitepress-theme-demoblock\` 的基础示例，点击按钮可切换卡片状态。

:::demo
\`\`\`vue
<template>
  <section class="demo-wrap">
    <button class="demo-btn" @click="active = !active">
      {{ active ? '恢复' : '激活' }}
    </button>

    <div class="card" :class="{ 'card--active': active }">
      <span class="dot" :class="{ 'dot--run': active }"></span>
      <p>transition + keyframes</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(false)
<\/script>

<style scoped>
.demo-wrap {
  display: grid;
  gap: 12px;
}

.demo-btn {
  width: 96px;
  height: 34px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  transform: translateY(0);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card--active {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #999;
}

.dot--run {
  animation: pulse 0.9s ease-in-out infinite;
  background: var(--vp-c-brand-1);
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.4);
    opacity: 1;
  }
}
</style>
\`\`\`
:::
`,Yu=`# 入门示例

动画与过渡简介。

## 小节

- [示例：动画与过渡](01-example)
`,Qu=`# CSS 特效基础

前端 CSS 样式与特效笔记。

## 章节

- [入门示例](/css/book-css/example/01-example) — 动画与过渡
`,Xu=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# 前端css样式特效

本分类收录前端 CSS 样式与特效相关笔记。

<CategoryBooks />
`,Zu=`# opening

聊天开场白

## 夸赞型
1. 感觉你是很有气质的人，想和你认识一下。
2. 你的朋友圈很好看，可以和你认识一下吗？
3. 你好，感觉你很特别，想了解你多一点。

## 有趣型
1. 发现你很有趣耶，可以聊聊吗？
2. 你分享的内容，让人感觉很开心，认识一下？

`,ed=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# 考研日记

本分类收录AI聊天训练集

## 书目

<CategoryBooks />
`,nd=`# template

聊天模板

## 章节

<CommandYamlTable />

`,td=`---
command: 问女生情史
function: 3步
order: 1
options: 无
---

# 问女生情史

1.我刚看到一个特别有意思的话题，说现在的年轻人都已经失去了心动的能力，
只会搭伙过日子，你最近有这种感觉吗？`,sd=`---
command: Dev Tools
function: 常用命令示例
order: 3
options: Cluster, Index, Document, Query, Aggregation
---

# Dev Tools

以下示例可直接在 Kibana 的 **Dev Tools -> Console** 中执行。

## 集群与节点

\`\`\`http
# 查看集群健康状态
GET /_cluster/health

# 查看节点列表
GET /_cat/nodes?v

# 查看索引概要
GET /_cat/indices?v

# 查看自己创建的索引
GET /_cat/indices?h=index&index=*,-.*

# 查看索引有多少条数据
GET /my-index/_count

# 查询索引里的所有数据（默认最多 10 条）
GET /my-index/_search
\`\`\`

## 索引管理

\`\`\`http
# 创建索引（含简单 mapping）
PUT /demo_users
{
  "mappings": {
    "properties": {
      "name": { "type": "keyword" },
      "age": { "type": "integer" },
      "bio": { "type": "text" },
      "created_at": { "type": "date" }
    }
  }
}

# 查看 mapping
GET /demo_users/_mapping

# 删除索引（谨慎）
DELETE /demo_users
\`\`\`

## 文档写入与读取

\`\`\`http
# 写入单条文档（指定 ID）
PUT /demo_users/_doc/1
{
  "name": "alice",
  "age": 28,
  "bio": "love search and data",
  "created_at": "2026-03-31T10:00:00Z"
}

# 批量写入
POST /_bulk
{ "index": { "_index": "demo_users", "_id": "2" } }
{ "name": "bob", "age": 31, "bio": "backend engineer", "created_at": "2026-03-31T10:05:00Z" }
{ "index": { "_index": "demo_users", "_id": "3" } }
{ "name": "cathy", "age": 25, "bio": "frontend developer", "created_at": "2026-03-31T10:10:00Z" }

# 按 ID 查询
GET /demo_users/_doc/1
\`\`\`

## 常见查询

\`\`\`http
# 全部查询（仅演示）
GET /demo_users/_search
{
  "query": {
    "match_all": {}
  }
}

# 精确匹配 keyword 字段
GET /demo_users/_search
{
  "query": {
    "term": {
      "name": "alice"
    }
  }
}

# 全文检索 text 字段
GET /demo_users/_search
{
  "query": {
    "match": {
      "bio": "engineer"
    }
  }
}

# 条件组合 + 排序 + 分页
GET /demo_users/_search
{
  "from": 0,
  "size": 10,
  "sort": [
    { "age": "desc" }
  ],
  "query": {
    "bool": {
      "must": [
        { "range": { "age": { "gte": 26 } } }
      ],
      "filter": [
        { "exists": { "field": "created_at" } }
      ]
    }
  }
}
\`\`\`

## 常见聚合

\`\`\`http
# 按年龄做 stats 聚合
GET /demo_users/_search
{
  "size": 0,
  "aggs": {
    "age_stats": {
      "stats": {
        "field": "age"
      }
    }
  }
}

# terms 分桶
GET /demo_users/_search
{
  "size": 0,
  "aggs": {
    "by_name": {
      "terms": {
        "field": "name"
      }
    }
  }
}
\`\`\`

## 实用排错命令

\`\`\`http
# 查看某索引段与存储信息
GET /_cat/indices/demo_users?v

# 查看线程池状态
GET /_cat/thread_pool?v

# 查看分片分布
GET /_cat/shards?v
\`\`\`

## 小提示

- 在 Console 中可用 \`Ctrl/Cmd + Enter\` 执行当前请求。
- 可一次写多段请求，Console 会逐段执行。
- 生产环境建议使用业务账号与最小权限，不要长期使用超级用户。
`,id=`---
title: 快速入门
order: 1
---
`,od=`---
command: install
function: 下载安装
order: 1
options: Official Script, Docker
---

# install

以下为本地开发常用的两种安装方式，任选其一即可。

## 方案一：官方 start-local 脚本

使用 Elastic 官方提供的本地一键脚本（通常包含 Elasticsearch 等组件）：

\`\`\`bash
curl -fsSL https://elastic.co/start-local | sh
\`\`\`

**说明：**

- 需已安装 \`curl\`；
- 若遇证书或代理问题，可先检查网络环境，或改用下方 Docker 方案。

## 方案二：Docker

单机开发可用官方镜像，单节点模式、关闭安全认证以方便本地 \`curl\` 调试（**仅用于本机开发，勿用于生产**）：

\`\`\`bash
docker run -d --name elasticsearch \\
  -p 9200:9200 -p 9300:9300 \\
  -e "discovery.type=single-node" \\
  -e "xpack.security.enabled=false" \\
  -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" \\
  docker.elastic.co/elasticsearch/elasticsearch:8.15.0
\`\`\`

**说明：**

- 首次运行会拉取镜像，版本号可按需改为当前 [Elastic Docker 镜像](https://www.docker.elastic.co/) 上的标签。
- 内存不足时可调小 \`-Xms\` / \`-Xmx\`，或关闭其它占用内存的进程。
- 生产环境应启用安全、TLS、认证与持久化卷，勿使用 \`xpack.security.enabled=false\`。

## 验证

服务就绪后，可访问 HTTP 接口（本示例为无认证本地开发）：

\`\`\`bash
curl -s http://127.0.0.1:9200
\`\`\`

若返回包含 \`cluster_name\`、\`version\` 等字段的 JSON，说明节点已启动。

## 生产环境配置要点

上线时与「本机开发」差异主要在**安全、数据与资源**，可按需逐项落实：

| 方向 | 说明 |
|------|------|
| **安全与访问** | 保持 \`xpack.security.enabled=true\`（ES 8 默认）；为 \`elastic\` 等内置用户设置强密码；按需配置 **TLS**（HTTP / transport 层证书，可用公司 CA 或 \`elasticsearch-certutil\` 自建 CA）；限制仅内网或经网关/API 访问，勿将 \`9200\` 裸暴露公网。 |
| **持久化** | 数据目录挂载到**命名卷或宿主机目录**（如 \`/usr/share/elasticsearch/data\`），避免容器删除即丢数据；定期快照与跨区备份按官方 Snapshot 流程做。 |
| **资源** | 合理设置 \`ES_JAVA_OPTS\`（堆一般不超过 50% 物理内存）；Linux 宿主机注意 \`vm.max_map_count\`（通常 ≥ \`262144\`）、\`ulimits\`（如 \`memlock\`）；生产多节点时再配置 \`cluster.initial_master_nodes\`、分片副本策略等。 |
| **运维** | 监控 JVM、磁盘、线程池拒绝；升级与滚动重启走官方升级路径；密钥与 \`elasticsearch.keystore\` 不入库明文。 |

更细的 TLS、证书与 \`elasticsearch.yml\` 项以当前大版本的 [Elastic 官方文档](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html) 为准（检索 *TLS*、*security*、*SSL*）。

## Docker Compose（生产向示例）

下列示例：**开启安全**、**数据卷持久化**、**内存与文件句柄限制**，适合单机生产或作为多节点编排的起点；**务必**将密码改为强密码，并结合防火墙与反向代理。

**\`.env\`（与 \`docker-compose.yml\` 同目录，勿提交到仓库）：**

\`\`\`env
# 强密码；首次启动会用于 bootstrap elastic 用户
ELASTIC_PASSWORD=请替换为强密码
\`\`\`

**\`docker-compose.yml\`：**

\`\`\`yaml
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.15.0
    container_name: elasticsearch
    environment:
      - node.name=es01
      - cluster.name=docker-prod
      - discovery.type=single-node
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms1g -Xmx1g"
      - xpack.security.enabled=true
      - ELASTIC_PASSWORD=\${ELASTIC_PASSWORD}
    ulimits:
      memlock:
        soft: -1
        hard: -1
      nofile:
        soft: 65536
        hard: 65536
    volumes:
      - esdata:/usr/share/elasticsearch/data
    ports:
      - "127.0.0.1:9200:9200"
    networks:
      - elastic

volumes:
  esdata:

networks:
  elastic:
    driver: bridge
\`\`\`

**说明：**

- 将 \`9200\` 绑定到 \`127.0.0.1\` 可避免直接对全网监听；若需局域网访问可改为 \`"9200:9200"\`，并配合防火墙或仅内网网卡。
- ES 8 在安全开启时，HTTP 层通常为 **HTTPS**；镜像首次启动会生成证书，客户端需使用 **HTTPS** 并信任证书（自签可用 \`-k\` 仅作调试，生产应配置可信 CA 或挂载自己的证书）。
- Linux 宿主机若启动失败，可检查 \`vm.max_map_count\`：\`sudo sysctl -w vm.max_map_count=262144\`（持久化写入 \`/etc/sysctl.d/\`）。

**启动与验证：**

\`\`\`bash
docker compose up -d
# 加载 .env 后再请求（自签证书调试用 -k；生产应配置可信 CA）
set -a && source .env && set +a
curl -s -u "elastic:\${ELASTIC_PASSWORD}" -k https://127.0.0.1:9200
\`\`\`

若返回含 \`cluster_name\`、\`version\` 的 JSON，说明节点在安全模式下已就绪。
`,ad=`---
command: kibana
function: 使用 Kibana
order: 2
options: login, Dev Tools, Discover
---

# Kibana

Kibana 是 Elastic Stack 的可视化与运维界面，用于查询 Elasticsearch 数据、写 DSL、做仪表盘与索引管理。以下假设你已能访问同一套集群中的 Elasticsearch（参见同章 [安装](install)）。

## 如何访问

- **本机或脚本一键环境**：若使用 \`start-local\` 等脚本，终端或文档会提示 **Kibana 地址**，常见为 \`http://localhost:5601\`（具体端口以实际输出为准）。
- **仅自搭 Elasticsearch**：需**单独部署 Kibana 镜像/进程**，并配置与 ES 相同的集群地址与安全认证（见下文 Docker 片段）。

首次打开若为 **HTTPS** 且为自签证书，浏览器会提示不安全，开发环境可临时继续访问；生产环境应使用可信证书。

## 登录

开启 \`xpack.security\` 时，使用与 Elasticsearch 内置用户一致的账号，通常为：

- 用户名：\`elastic\`
- 密码：与创建集群时设置的 **\`ELASTIC_PASSWORD\`**（或 \`bootstrap.password\`）相同。

若使用其他已创建用户，需具备对应索引与 Kibana 功能的角色权限。

## 常用功能速览

| 入口 | 用途 |
|------|------|
| **Discover（发现）** | 按时间轴浏览索引中的文档、过滤字段、保存检索条件。 |
| **Dashboard（仪表盘）** | 将可视化图表组合成大屏；可视化多来自 **Lens** 或 **Aggregation**。 |
| **Dev Tools（开发工具）** | 打开 **Console**，直接对 ES 发 \`GET/POST\` REST 请求，适合调试查询与 mapping。 |
| **Stack Management（堆栈管理）** | 创建 **Data view（数据视图）**、管理索引模板、用户与角色、快照等。 |

ES 8.x 中，分析数据前通常要在 **Stack Management → Data views** 里新建**数据视图**，绑定到目标索引模式（如 \`logs-*\`），之后 Discover、Dashboard 才能选用该视图。

## 在 Docker Compose 中增加 Kibana（可选）

与 [安装](install) 中 Elasticsearch 服务同网段时，可并列增加 Kibana 服务（版本需与 ES **主版本一致**），示例：

\`\`\`yaml
  kibana:
    image: docker.elastic.co/kibana/kibana:8.15.0
    container_name: kibana
    environment:
      - ELASTICSEARCH_HOSTS=https://elasticsearch:9200
      - ELASTICSEARCH_USERNAME=kibana_system
      - ELASTICSEARCH_PASSWORD=\${KIBANA_SYSTEM_PASSWORD}
    ports:
      - "127.0.0.1:5601:5601"
    depends_on:
      - elasticsearch
    networks:
      - elastic
\`\`\`

**说明：** 生产环境应使用 **\`kibana_system\`** 用户及专用密码（首次可用 \`elasticsearch-reset-password\` 为 \`kibana_system\` 生成密码，再写入环境变量或密钥管理），勿长期使用 \`elastic\` 超级用户跑 Kibana；上例为结构示意，实际需与当前 ES 安全、TLS 配置一致。更稳妥的做法是参考官方 [Run Kibana on Docker](https://www.elastic.co/guide/en/kibana/current/docker.html) 按版本调整变量。

## Dev Tools 示例

在 **Dev Tools → Console** 中可试：

\`\`\`http
GET /_cluster/health
GET /_cat/indices?v
\`\`\`

若集群启用了 HTTPS 与认证，Kibana 已代你处理与 ES 的连接；在 Console 里写路径即可。
`,rd=`# Elasticsearch

分布式搜索与数据分析引擎相关笔记。

## 章节

<CommandYamlTable />
`,ld=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# 数据库

本分类收录关系型数据库、NoSQL、存储与数据建模等相关笔记。

## 书目

<CategoryBooks />
`,cd=`---
command: PrismaClient
function: 实例化与基础查询
order: 6
options: findMany, create, update, delete
---

# client 数据库使用

生成客户端后，在应用代码中实例化 \`PrismaClient\` 并调用与 Model 对应的方法。

## 实例化（TypeScript 示例）

\`\`\`typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
\`\`\`

应用退出前可断开连接：

\`\`\`typescript
await prisma.$disconnect()
\`\`\`

## 查询示例

假定已有 \`User\` 模型：

\`\`\`typescript
// 列表
const users = await prisma.user.findMany()

// 单条
const one = await prisma.user.findUnique({ where: { id: 1 } })

// 创建
const created = await prisma.user.create({
  data: { email: 'a@b.com', name: 'Ada' },
})

// 更新
const updated = await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Bob' },
})

// 删除
await prisma.user.delete({ where: { id: 1 } })
\`\`\`

## 说明

- API 名称与 \`model User\` 对应为 \`prisma.user\`（首字母小写）。
- \`where\`、\`data\`、\`select\`、\`include\` 等组合较多，复杂查询请查阅官方 Client 文档。
`,ud=`---
command: db
function: push / pull / seed / execute 等子命令
order: 7
options: push, pull, seed, execute
---

# db 数据库操作

\`prisma db\` 是 CLI 下的**命名空间**，用于在**数据库与 Schema/数据**之间同步或执行脚本；**不包含** \`migrate\`（迁移在 \`prisma migrate\`）。

## 子命令一览

| 子命令 | 作用 |
|--------|------|
| \`db push\` | 将 Schema 变更直接推到数据库，不产生迁移文件。 |
| \`db pull\` | 从现有数据库内省，更新 \`schema.prisma\`。 |
| \`db seed\` | 运行 \`package.json\` 里配置的 seed 脚本。 |
| \`db execute\` | 从文件向数据源执行 SQL。 |

---

## prisma db push

把当前 \`schema.prisma\` 的变更**直接应用到数据库**，**不生成**迁移 SQL 文件。适合原型、本地快速迭代；团队正式协作更常用 \`migrate dev\`。

### 基本用法

\`\`\`bash
npx prisma db push
\`\`\`

### 常用参数

- \`--accept-data-loss\`：当变更会导致**数据丢失**（如删列）时须显式传入，否则命令会拒绝执行。
- \`--skip-generate\`：推送后不自动执行 \`prisma generate\`（默认一般会生成客户端，依版本而定）。

### 与 migrate 的对比（简述）

| 场景 | 更常用 |
|------|--------|
| 需要可审计的 SQL、多环境一致 | \`migrate dev\` / \`migrate deploy\` |
| 本地试 Schema、不关心迁移历史 | \`db push\` |

### 注意

- 生产环境是否允许 \`db push\` 由团队规范决定；多数生产发布仍走迁移。

---

## prisma db pull

根据**已存在的数据库**结构做**内省（introspection）**，生成或覆盖 \`schema.prisma\` 中的 model（及关系等）。常用于接手工库、遗留库或先建表再补 Schema。

### 基本用法

\`\`\`bash
npx prisma db pull
\`\`\`

默认会更新项目中的 \`prisma/schema.prisma\`（路径以项目配置为准）。

### 常用参数

- \`--print\`：将结果输出到标准输出，**不写文件**，便于预览。
- \`--force\`：在需覆盖等场景下使用（以当前 Prisma 版本文档为准）。

### 典型流程

1. 配置好 \`.env\` 中的 \`DATABASE_URL\`。
2. 执行 \`db pull\` 得到与库表一致的 Model。
3. 再按需手改命名、\`@map\` / \`@@map\`、关系注释等。
4. 后续开发可配合 \`migrate\` 或继续 \`db push\`，按团队约定执行。

### 注意

- 内省结果可能包含大量 \`Unsupported\` 或需人工整理的类型，复杂库要预留整理时间。

---

## prisma db seed

执行在 **\`package.json\`** 里为 Prisma 配置的 **seed 命令**，用于插入测试数据、初始字典数据等。

### 配置示例

在 \`package.json\` 中增加：

\`\`\`json
{
  "prisma": {
    "seed": "tsx prisma/seed.ts"
  }
}
\`\`\`

也可用 \`node\`、\`ts-node\` 等指向你的种子入口文件。

### 运行

\`\`\`bash
npx prisma db seed
\`\`\`

### 种子脚本示例（TypeScript）

\`\`\`typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: { email: 'demo@example.com', name: 'Demo' },
  })
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
\`\`\`

### 说明

- 具体脚本路径、是否用 TS 需与项目构建链一致（如安装 \`tsx\`）。
- \`migrate\` 后是否在本地自动跑 seed 可由 \`package.json\` 的 \`prisma\` 配置与 CI 约定，并非所有环境都会自动执行。

---

## prisma db execute

向配置中的**数据源**执行给定 **SQL 文件**（如建表补丁、一次性脚本）。适用于需要直接跑 SQL、又不一定把语句写进迁移的场景（仍建议生产变更以迁移或发布流程为准）。

### 基本用法

\`\`\`bash
npx prisma db execute --file ./scripts/init.sql
\`\`\`

### 常用参数

- \`--file\`：SQL 文件路径（必填，依版本文档为准）。
- \`--schema\`：指定 \`schema.prisma\` 路径；多 schema 或非常规路径时使用。

### 说明

- 执行账户需具备相应 DDL/DML 权限；**生产环境**务必评审 SQL、备份并做好回滚预案。
- 与 \`migrate\` 的区别：\`migrate\` 管理版本化迁移历史；\`db execute\` 是**单次执行文件**，不记入 Prisma 迁移链。

---

## 查看帮助

\`\`\`bash
npx prisma db --help
npx prisma db push --help
\`\`\`

## 总述

- 日常「改模型 → 落库」若走迁移，用 \`migrate dev\`；若快速试 Schema，多用 \`db push\`。
- 接现有库、对齐表结构，多用 \`db pull\`。
`,dd=`---
command: generate
function: 根据 Schema 生成 Prisma Client
order: 4
options:
---

# generate 生成插件

根据 \`schema.prisma\` 生成（或更新）**Prisma Client** 代码，供应用 \`import\` 使用。

## 用法

\`\`\`bash
npx prisma generate
\`\`\`

## 何时需要执行

- 修改了 \`schema.prisma\`（模型、字段、枚举等）之后。
- 拉取他人分支且迁移或 Schema 有更新之后。
- CI 构建应用前（若未在 \`postinstall\` 等脚本中自动生成）。

## 说明

- 生成物默认位于 \`node_modules/.prisma/client\`（具体以项目配置为准）。
- 若生成失败，先检查 Schema 语法、\`DATABASE_URL\` 是否在部分命令中需要，以及 Node 版本是否满足要求。
`,pd=`---
title: 基础内容
order: 1
---
`,md=`---
command: install / init
function: 安装依赖与初始化 prisma 目录
order: 1
options: npm, pnpm, yarn, --datasource-provider
---

# install 下载

在已有 Node.js 的项目中安装 **Prisma CLI**（\`prisma\`）与 **Prisma Client**（\`@prisma/client\`），再用 **\`prisma init\`** 生成 \`prisma/schema.prisma\` 与连接占位。

## 要求

- **Node.js**：建议使用当前 LTS；具体版本以 [Prisma 文档](https://www.prisma.io/docs/orm/reference/system-requirements) 为准。
- 已初始化 \`package.json\`（\`npm init\` 等）。

## 安装依赖

### pnpm

\`\`\`bash
pnpm add -D prisma
pnpm add @prisma/client
\`\`\`

### 说明

- \`prisma\`：命令行工具（\`npx prisma\`），用于 \`init\`、\`migrate\`、\`generate\` 等。
- \`@prisma/client\`：运行时代码，执行查询；在修改 Schema 后需执行 \`prisma generate\` 重新生成。

---

## init 初始化

在项目中创建 \`prisma/schema.prisma\`，并可选写入默认数据库连接占位。

在 **Next.js** 项目里，官方/社区一般**默认按 PostgreSQL** 配置数据源

\`\`\`bash
npx prisma init
\`\`\`

### 指定数据库类型

\`\`\`bash
npx prisma init --datasource-provider postgresql
npx prisma init --datasource-provider mysql
npx prisma init --datasource-provider sqlite
\`\`\`

### 生成内容

- \`prisma/schema.prisma\`：数据模型与数据源配置。
- 编辑 \`.env\` 中的 \`DATABASE_URL\`。

### 文件示例

在 \`schema.prisma\` 中定义 \`model\`，文件通常长这样：

\`\`\`prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema
// Get a free hosted Postgres database in seconds: \`npx create-db\`

generator client {
  provider = "prisma-client"
  output   = "../app/generated/prisma"
}

datasource db {
  provider = "sqlite"
}

/// 示例用户表
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}
\`\`\`

- \`generator client\`：生成 Prisma Client 的插件和输出目录。
- \`datasource db\`：指定数据库类型（如 \`sqlite\`、\`postgresql\`、\`mysql\`）。
- \`model User\`：定义一个用户表，包括主键、唯一字段等。

### 下一步

使用 \`prisma migrate dev\` 或 \`db push\` 同步数据库（依场景而定）。
`,hd=`---
command: migrate
function: 开发迁移与生产部署
order: 3
options: dev, deploy, status, reset, resolve
---

# migrate 迁移

用迁移文件记录 Schema 变更，便于团队协作与生产发布。

## 开发：创建并应用迁移

在项目根目录（存在 \`prisma/schema.prisma\`）执行：

\`\`\`bash
npx prisma migrate dev --name init_user
\`\`\`

- 根据当前 Schema 生成 SQL 迁移并应用到**开发数据库**。
- 会触发 \`prisma generate\`（依版本与配置可能略有差异）。

## 生产：仅执行已有迁移

在 CI/CD 或生产环境使用已提交的迁移目录，不随意改 Schema：

\`\`\`bash
npx prisma migrate deploy
\`\`\`

## 查看状态

\`\`\`bash
npx prisma migrate status
\`\`\`

## 重置：\`migrate reset\`（慎用）

**删除数据库中由 Prisma 管理的数据**，再按 \`prisma/migrations\` **从头依次执行全部迁移**。常用于本地开发把库「洗成干净状态」。（例如：删除了 migrations 目录）

\`\`\`bash
# 如已经删除了 migrations 目录，执行重置命令
npx prisma migrate reset
# 后续可以 pnpm prisma migrate dev --name init 重新生成迁移文件
\`\`\`

- **会清空数据**，仅适合本地/可丢弃环境；**勿在生产库执行**。
- 若配置了 \`package.json\` 里的 \`prisma.seed\`，重置后可能会自动跑 seed（依 Prisma 版本与提示为准）。

## 修复历史：\`migrate resolve\`

当迁移目录与数据库里的 \`_prisma_migrations\` **记录不一致**（例如迁移已手工在库里执行过、或某次迁移失败需人工收尾）时，可用 \`resolve\` **标记**某条迁移为已应用或已回滚，而不改 Schema 文件本身。

\`\`\`bash
# 将指定迁移标为「已应用」（库里已有对应变更、但 Prisma 认为未记录时）
npx prisma migrate resolve --applied 20240101000000_some_name

# 将指定迁移标为「已回滚」（从迁移历史中移除该条记录，需结合实际情况）
npx prisma migrate resolve --rolled-back 20240101000000_some_name
\`\`\`

迁移目录名以你项目 \`prisma/migrations/\` 下的文件夹名为准。操作前建议**备份数据库**，并确认与团队流程一致。

## 与 db push 的区别（简述）

- **\`migrate dev\` / \`migrate deploy\`**：有迁移历史，适合正式流程。
- **\`db push\`**：将 Schema 直接推到数据库，**不产生迁移文件**，更适合原型或本地快速试验。

具体选型以团队规范为准。
`,fd=`---
command: schema
function: 数据源、生成器与模型定义
order: 2
options: PostgreSQL, MySQL, SQLite, prisma.config.ts
---

# schema 概要

\`prisma/schema.prisma\` 描述**数据库连接**、**Prisma Client 生成器**以及 **Model ↔ 表** 的映射。

## 结构示例

\`\`\`prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}
\`\`\`

## prisma.config.ts（可选）

较新版本 Prisma 支持在项目根使用 **\`prisma.config.ts\`**，用 TypeScript 集中配置 **Schema 路径**、**迁移目录**、**数据源 URL** 等；执行 CLI 时会读取该文件（具体行为以当前安装的 Prisma 版本文档为准）。

需安装 \`dotenv\` 时自行加入依赖；\`env("DATABASE_URL")\` 从环境变量读取连接串。

\`\`\`typescript
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
\`\`\`

若同时使用 \`schema.prisma\` 里的 \`datasource\`，避免 **URL 或路径配置重复、互相矛盾**；以团队约定与官方「Schema 与 config 的关系」说明为准。

## 常用概念

- **datasource**：\`provider\` 与 \`url\`（多从 \`DATABASE_URL\` 读取）。
- **generator**：通常使用 \`prisma-client-js\`，执行 \`prisma generate\` 时生成客户端代码。
- **model**：字段类型如 \`String\`、\`Int\`、\`DateTime\`；\`@id\`、\`@unique\`、\`@default\` 等属性定义约束与默认值。

## 注意

- 修改 Schema 后需 **迁移** 或 **\`db push\`**（开发期），并 **\`prisma generate\`**，应用中的类型与 API 才会更新。
- 字段名、关系（\`@relation\`）较复杂时建议查阅官方 Schema 参考。
`,bd=`---
command: studio
function: 浏览器中查看与编辑数据
order: 5
options:
---

# studio 数据库界面

启动本地 Web UI，连接配置中的数据库，浏览与编辑表数据（开发辅助工具）。

## 用法

\`\`\`bash
npx prisma studio
\`\`\`

默认会在浏览器中打开，例如 \`http://localhost:51212\`。

## 说明

- 适合本地调试与快速验数据，**不应**暴露到公网或未授权网络。
- 生产环境数据操作请使用正式流程与权限控制，勿依赖 Studio 作为运维主入口。
`,gd=`# Prisma

Node/TypeScript 生态常用的 ORM 与数据库工具链：Schema、迁移、类型安全的 Prisma Client。

## 章节

<CommandYamlTable />
`,yd=`# 示例：常用术语

本文为示例，可替换为实际笔记。

例如：refactor、deprecate、backward compatible、idempotent 等。
`,vd=`# 入门示例

常用术语简介。

## 小节

- [示例：常用术语](01-example)
`,_d=`# 编程英语基础

编程英语笔记。

## 章节

- [入门示例](/english/book-english/example/01-example) — 常用术语
`,kd=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# 编程英语

本分类收录编程英语相关笔记。

## 书目

- [编程英语基础](/english/book-english/) — 常用术语、示例

<CategoryBooks />
`,wd=`# 示例：HTTP 服务

本文为示例，可替换为实际笔记。

\`\`\`go
package main

import "net/http"

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("Hello"))
    })
    http.ListenAndServe(":8080", nil)
}
\`\`\`
`,xd=`# 入门示例

HTTP 服务示例。

## 小节

- [示例：HTTP 服务](01-example)
`,Sd=`# Go 后端基础

Golang 后端开发笔记。

## 章节

- [入门示例](/golang/book-golang/example/01-example) — HTTP 服务
`,$d=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# golang后端开发

本分类收录 Golang 后端开发相关笔记。

## 书目

- [Go 后端基础](/golang/book-golang/) — HTTP 服务、示例

<CategoryBooks />
`,Pd=`# 示例：安全清单

本文为示例，可替换为实际笔记。

常见防护项：强密码、双因素认证、最小权限、定期更新。
`,Ad=`# 入门示例

安全清单简介。

## 小节

- [示例：安全清单](01-example)
`,Td=`# 安全基础

安全与防护相关笔记。

## 章节

- [入门示例](/hacker/book-hacker/example/01-example) — 安全清单
`,Kd=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# hacker 安全防护

本分类收录安全与防护相关笔记。

## 书目

- [安全基础](/hacker/book-hacker/) — 安全清单、示例

<CategoryBooks />
`,Nd=`---
layout: home

hero:
  name: "Code Notes"
  text: "全栈工程师的自我修养"
  tagline: AI · 区块链 · 前端 · 后端 · 嵌入式

features:
  - title: Terminal
    details: 终端、Shell 与服务器运维相关笔记
    link: /terminal/
  - title: Databases
    details: 数据库与存储相关笔记
    link: /databases/
  - title: C++
    details: C++ 嵌入式开发相关笔记
    link: /cpp/
  - title: Cocos
    details: Cocos 游戏前端开发相关笔记
    link: /cocos/
  - title: Golang
    details: Golang 后端开发相关笔记
    link: /golang/
  - title: Hacker
    details: 安全与防护相关笔记
    link: /hacker/
  - title: Node.js
    details: Node.js 后端开发相关笔记
    link: /node.js/
  - title: Python
    details: Python 后端开发相关笔记
    link: /python/
  - title: Rust
    details: Rust 后端开发相关笔记
    link: /rust/
  - title: Vue
    details: Vue 前端开发相关笔记
    link: /vue/
  - title: React
    details: React 前端开发相关笔记
    link: /react/
  - title: Solidity
    details: 智能合约开发相关笔记
    link: /block-contract/
  - title: Blockchain
    details: 公链开发相关笔记
    link: /block-chain/
  - title: Web3 Front
    details: 区块链前端开发相关笔记
    link: /block-frontend/
  - title: Web3 Quant
    details: 区块链量化交易相关笔记
    link: /block-quant/
  - title: AI Agent
    details: 人工智能开发相关笔记
    link: /AI/
  - title: Css
    details: 前端 CSS 样式与特效相关笔记
    link: /css/
  - title: Testing
    details: 软件测试与 Bug 榜单相关笔记
    link: /testing/
  - title: Databases
    details: 数据库与存储相关笔记
    link: /databases/
  - title: Math
    details: 数学与微积分相关笔记
    link: /math/
  - title: English
    details: 编程英语相关笔记
    link: /english/
  - title: Daily
    details: 聊天话术日记
    link: /daily/
---

<PopularHome />
`,Id=`# 示例：极限与导数

本文为示例，可替换为实际笔记。

极限定义、求导法则、链式法则等在编程与机器学习中常用。
`,Ld=`# 入门示例

极限与导数简介。

## 小节

- [示例：极限与导数](01-example)
`,Cd=`# 数学基础

数学与微积分笔记。

## 章节

- [入门示例](/math/book-math/example/01-example) — 极限与导数
`,Od=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# 数学与微积分

本分类收录数学与微积分相关笔记。

## 书目

- [数学基础](/math/book-math/) — 极限与导数、示例

<CategoryBooks />
`,Ed=`# 示例：Express 起步

本文为示例，可替换为实际笔记。

\`\`\`javascript
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello'))
app.listen(3000)
\`\`\`
`,Bd=`# 入门示例

Express 起步。

## 小节

- [示例：Express 起步](01-example)
`,Dd=`# Node 后端基础

Node.js 后端开发笔记。

## 章节

- [入门示例](/node.js/book-node.js/example/01-example) — Express 起步
`,Md=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# node.js 后端开发

本分类收录 Node.js 后端开发相关笔记。

## 书目

- [Node 后端基础](/node.js/book-node.js/) — Express 起步、示例

<CategoryBooks />
`,Vd=`# 示例：FastAPI 入门

本文为示例，可替换为实际笔记。

\`\`\`python
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
\`\`\`
`,jd=`# 入门示例

FastAPI 入门。

## 小节

- [示例：FastAPI 入门](01-example)
`,Hd=`# Python 后端基础

Python 后端开发笔记。

## 章节

- [入门示例](/python/book-python/example/01-example) — FastAPI 入门
`,Rd=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# python 后端开发

本分类收录 Python 后端开发相关笔记。

## 书目

- [Python 后端基础](/python/book-python/) — FastAPI 入门、示例

<CategoryBooks />
`,Fd=`# 示例：Hooks 入门

本文为示例，可替换为实际笔记。

\`useState\`、\`useEffect\` 是 React 最常用的 Hooks。
`,Ud=`# 入门示例

Hooks 入门。

## 小节

- [示例：Hooks 入门](01-example)
`,qd=`# React 基础

React 前端开发笔记。

## 章节

- [入门示例](/react/book-react/example/01-example) — Hooks 入门
`,zd=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# React 前端开发

本分类收录 React 前端开发相关笔记。

## 书目

- [React 基础](/react/book-react/) — Hooks 入门、示例

<CategoryBooks />
`,Gd=`# Rust 基础入门

包括开发环境配置、常用命令、项目结构、包管理、依赖管理、构建与运行、调试、测试等内容。

##

<CommandYamlTable />
`,Wd=`---
command: example
function: axum 示例
order: 1
options: 
---

# 示例：axum 示例

本文为示例，可替换为实际笔记。

使用 axum 构建 HTTP 服务是 Rust 后端的常见选择。
`,Jd=`---
title: 基础入门
order: 1
---`,Yd=`# Dioxus frame

高性能跨端全栈框架，支持声明式 UI、响应式状态管理，以及多端部署（如 Web、桌面和移动端）。

##

<CommandYamlTable />
`,Qd="---\ncommand: dx\nfunction: Build、Bundle 与发布应用\norder: 2\noptions:\n---\n\n# dx 命令\n\n**Dioxus CLI**：Build, Bundle & Ship Dioxus Apps。在已安装 CLI 的前提下，在项目根目录执行子命令即可。\n\n## 用法\n\n```text\nUsage: dx [OPTIONS] <COMMAND>\n```\n\n常用流程：`dx new` 或 `dx init` 创建项目 → `dx serve` 本地开发与热更新 → `dx build` / `dx bundle` 产出可部署产物。\n\n## 子命令（Commands）\n\n| 子命令 | 说明 |\n|--------|------|\n| `build` | 构建 Dioxus 项目及其资源 |\n| `translate` | 将HTML源文件转换为 Dioxus 代码 |\n| `serve` | 构建、监听并本地提供项目（含资源），适合开发 |\n| `new` | 新建 Dioxus 项目 |\n| `init` | 在当前目录（默认）初始化项目，并尽量保持工程状态合理 |\n| `clean` | 清理构建输出 |\n| `bundle` | 将应用打包为可分发形态 |\n| `fmt` | 自动格式化 RSX |\n| `check` | 检查项目是否存在问题 |\n| `run` | 运行项目（无热重载） |\n| `config` | 管理 Dioxus 配置文件 |\n| `help` | 打印帮助；可对子命令使用 `dx help <COMMAND>` |\n\n查看某子命令详情：\n\n```bash\ndx help build\ndx build --help\n```\n\n## 全局选项（Options）\n\n| 选项 | 说明 |\n|------|------|\n| `--verbose` | 详细输出（默认关闭） |\n| `--trace` | 更细的 trace 级日志（默认关闭） |\n| `--json-output` | 以 JSON 格式输出日志 |\n| `-h`, `--help` | 打印帮助 |\n| `-V`, `--version` | 打印版本 |\n\n## 版本与帮助\n\n```bash\ndx --version\ndx --help\n```\n\n官方文档：[Dioxus — Tools / CLI](https://dioxuslabs.com/learn/0.7/guides/tools/)。\n",Xd=`---
title: 快速开始
order: 1
---
`,Zd=`---
command: cargo
function: 安装 Dioxus CLI
order: 1
options: install
---

# 安装 Dioxus 

Dioxus 应用用 **Rust** 编写，开发时常用官方命令行工具 **\`dx\`**（crate 名：\`dioxus-cli\`）。下面任选一种方式安装即可。

## 前置条件

- 已安装 [Rust](https://rustup.rs/)（\`rustc\`、\`cargo\` 可用）。
- 安装后提示找不到 \`dx\`，请确认 \`~/.cargo/bin\` 已在 \`PATH\` 中（\`rustup\` 默认会配置）。

## 方式一：官方安装脚本（快捷）

\`\`\`bash
curl -sSL https://dioxus.dev/install.sh | bash
\`\`\`

脚本会把 CLI 装到 Cargo 的全局 bin 目录（一般为 \`~/.cargo/bin\`）。

## 方式二：预编译二进制（推荐，较快）

先安装 cargo-binstall，再用它拉取预编译的 \`dioxus-cli\`：

\`\`\`bash
cargo install cargo-binstall
cargo binstall dioxus-cli --force
\`\`\`

## 方式三：从 crates.io 源码编译安装

编译时间较长，但无需额外工具：

\`\`\`bash
cargo install dioxus-cli
\`\`\`

## 验证

\`\`\`bash
dx --version
dx --help
\`\`\`

## Ubuntu 系统依赖

在 Ubuntu 上编译或运行 **桌面端** Dioxus 应用时，通常需要系统库与构建工具。先更新软件源索引，再安装下列包：

\`\`\`bash
sudo apt update
sudo apt install libwebkit2gtk-4.1-dev \\
  build-essential \\
  curl \\
  wget \\
  file \\
  libxdo-dev \\
  libssl-dev \\
  libayatana-appindicator3-dev \\
  librsvg2-dev \\
  lld
\`\`\`

说明：\`libwebkit2gtk-4.1-dev\` 等与 **WebView / 桌面窗口** 相关；\`build-essential\`、\`lld\` 等与 **本地编译、链接** 相关。若只做纯 Web 目标，部分包可能不必装，但备齐可减少后续报错。
`,ep=`---
command: new desktop
function: Desktop 桌面应用
order: 5
options:
---

# Desktop（桌面）

适用于 **Windows / macOS / Linux** 本地窗口应用（基于系统 WebView 等），开发与打包由 \`dx\` 管理。

## 步骤

1. 已安装 CLI 与 Rust（见 [安装](./install)）；Linux 桌面依赖见该文 **Ubuntu 系统依赖** 小节。
2. 执行：

\`\`\`bash
dx new my-desktop
\`\`\`

3. **子模板**（若出现 \`Which sub-template should be expanded?\`，方向键选择后回车）：**Bare-Bones** / **Jumpstart** / **Workspace** 含义见 [SPA 笔记](./new-spa) 中的「子模板」表格。

4. 在向导中：
   - 若出现 **\`Do you want to use Dioxus Fullstack?\`**：只做本地桌面窗口、后端不在此 Dioxus 工程里时选 **No**；若需要 **桌面 + 同仓服务端**（Server Functions 等），选 **Yes**，详见 [Fullstack](./new-fullstack) 与官方 Native + Fullstack 说明。
   - 将 **默认平台** 选为 **Desktop**（或等价选项）。

5. 开发与运行：

\`\`\`bash
cd my-desktop
dx serve --desktop
\`\`\`

部分版本也可能用 \`dx serve\` 配合项目内默认特性启用桌面；以 **\`dx serve --help\`** 与生成工程中的 \`Cargo.toml\` / \`Dioxus.toml\` 为准。

## 参考

- [Dioxus — Tools / CLI](https://dioxuslabs.com/learn/0.7/guides/tools/)
- [Fullstack — Native clients](https://dioxuslabs.com/learn/0.7/essentials/fullstack/native/)（若桌面与后端组合）
`,np=`---
command: new fullstack
function: Fullstack 全栈 Web
order: 4
options:
---

# Fullstack（全栈网页）

适用于 **浏览器端 + 服务端** 一体工程：客户端 WASM、服务端 Axum 等由 \`dx\` 按特性分别构建，可使用 Server Functions、全栈路由等能力。

## 步骤

1. 已安装 CLI 与 Rust（见 [安装](./install)）。
2. 在父目录执行：

\`\`\`bash
dx new my-fullstack
\`\`\`

3. **子模板**（若出现 \`Which sub-template should be expanded?\`，方向键选择后回车）：**Bare-Bones**（最少骨架）、**Jumpstart**（推荐入门）、**Workspace**（多 crate workspace）。含义与选型见 [SPA 笔记](./new-spa) 中的「子模板」表格。

4. 若出现 **\`Do you want to use Dioxus Fullstack?\`**：选 **Yes** / **true**。这样会生成带 **server + web** 等特性的全栈工程（与 [纯 SPA](./new-spa) 里对该提示选 **No** 相对）。

5. 在 **\`dx new\` 交互向导** 中继续按提示操作，核心是：
   - 若出现 **\`Do you want to use Dioxus Router?\`**：需要全栈下的 **客户端路由 / 多页面** 时一般选 **Yes**；极简单页实验可选 **No**。详细取舍见 [SPA 笔记](./new-spa) 第 5 步中的 Router 表格。
   - **Tailwind** 等其余选项按需勾选。

6. 若出现 **\`Which platform do you want DX to serve by default?\`**：做 **全栈网页**（浏览器 + 服务端）时选 **Web**，这样 \`dx serve\` 默认对齐 Web 客户端与全栈开发流程。选项含义与 Desktop/Mobile 对照见 [SPA 笔记](./new-spa) 第 6 步。

7. 进入目录并启动开发服务：

\`\`\`bash
cd my-fullstack
dx serve
\`\`\`

全栈应用下，\`dx serve\` 通常会同时处理客户端与服务器侧构建；若需只跑某一侧，以官方文档与本机 \`dx serve --help\` 为准。

## 参考

- [Fullstack — Project Setup](https://dioxuslabs.com/learn/0.7/essentials/fullstack/project_setup/)
- [Tutorial — Creating a new project](https://dioxuslabs.com/learn/0.7/tutorial/new_app/)
`,tp=`---
command: new mobile
function: Mobile 移动端
order: 6
options:
---

# Mobile（移动端）

适用于 **Android / iOS** 应用；需本机已配置对应平台 SDK、模拟器或真机调试环境（官方文档会列出 Xcode、Android SDK 等要求）。

## 步骤

1. 已安装 CLI 与 Rust（见 [安装](./install)）。
2. 执行：

\`\`\`bash
dx new my-mobile
\`\`\`

3. **子模板**（若出现 \`Which sub-template should be expanded?\`，方向键选择后回车）：**Bare-Bones** / **Jumpstart** / **Workspace** 含义见 [SPA 笔记](./new-spa) 中的「子模板」表格。

4. 在向导中：
   - 若出现 **\`Do you want to use Dioxus Fullstack?\`**：仅移动端客户端、API 放别处时一般选 **No**；需要 **移动端 + 同仓服务端** 时选 **Yes**（见 [Fullstack](./new-fullstack)）。
   - 将 **默认平台** 选为 **Mobile**（或 **iOS / Android** 等子选项，以本机 CLI 为准）。

5. 连接模拟器或设备后启动（命令随 \`dx\` 版本可能略有差异）：

\`\`\`bash
cd my-mobile
dx serve --android
# 或
dx serve --ios
\`\`\`

若你的 \`dx\` 使用 \`--platform android\` 等写法，请以 **\`dx serve --help\`** 为准。

## 参考

- [Dioxus — Tools / CLI](https://dioxuslabs.com/learn/0.7/guides/tools/)
- 发行说明中的移动端与 \`dx serve\` 说明：[Dioxus releases](https://github.com/DioxusLabs/dioxus/releases)
`,sp=`---
command: new spa
function: SPA 单页应用
order: 3
options:
---

# Single Page（SPA）

适用于 **仅浏览器内运行** 的单页应用：无独立 Dioxus 服务端二进制，构建产物以 **WASM + 静态资源** 为主，部署到任意静态站点或 CDN 即可（后端 API 可仍由其它服务提供）。

## 步骤

1. 已安装 CLI 与 Rust（见 [安装](./install)）。
2. 执行：

\`\`\`bash
dx new my-spa
\`\`\`

3. 提示 \`Which sub-template should be expanded?\`，用方向键选择后回车：

   | 选项 | 说明 |
   |------|------|
   | **Bare-Bones** | 最少代码，近似最基础的 \`main.rs\` 和资源目录。适合跟教程从零开始，或只需极简 Demo 的场景。|
   | **Jumpstart**  | 包含预设目录结构与脚手架（如组件、视图等常见拆分）。绝大多数 SPA 入门推荐选择，上手最快（✅ 推荐）|
   | **Workspace**  | 基于 **Cargo workspace**，支持多 crate，适合中大型项目需求。建议已有 workspace 经验或明确需多包架构时选择|

4. 提示 **\`Do you want to use Dioxus Fullstack?\`**：

   | 选项 | 说明 |
   |------|------|
   | **false** | 仅需浏览器内 SPA，暂不需要 Dioxus 内置后端（✅ 推荐）|
   | **true**  | 若构建**前后端同仓**全栈应用，可选 true|

   做纯 SPA 时选 **false**。默认开发目标（**Web**）在第 **6** 步里选择。

5. 提示 **\`Do you want to use Dioxus Router?\`**：

     | 选项 | 说明 |
     |------|------|
     | **false** | 工程中**不内置路由**：整站只有一个根组件，适合极简 Demo，或你更倾向自行用状态切换 UI，不使用官方路由。 |
     | **true**  | 推荐选项：集成 **dioxus-router**，支持多页面、浏览器地址栏、\`Route\`/嵌套路由等典型 SPA 需求。（✅ 推荐） |


   - **Tailwind**、LLM 提示等其余选项按项目需要勾选（✅ 推荐 true）。

6. 提示 **\`Which platform do you want DX to serve by default?\`**：

   | 选项 | 说明 |
   |------|------|
   | **Web** | 默认用 **\`dx serve\` 针对 Web/WASM** 启动开发，符合 SPA 部署路径。（✅ 推荐） |
   | **Desktop** | 默认面向桌面窗口；更适合 [Desktop](./new-desktop)。 |
   | **Mobile** | 默认面向移动端；更适合 [Mobile](./new-mobile)。 |

   该选项决定 **\`dx serve\` 不带额外参数时的默认目标**；仍可用 \`dx serve --desktop\` 等覆盖。

7. 本地预览：

\`\`\`bash
cd my-spa
dx serve
\`\`\`

浏览器访问终端里给出的本地地址（常见为 \`http://127.0.0.1:8080\`，以实际输出为准）。

## 与 Fullstack 的区别

| 类型             | 说明 |
|------------------|------|
| **SPA（本页）**      | 通常采用静态托管方式进行部署，前端直接发布到 CDN 或静态文件服务器，如 Vercel、GitHub Pages、Netlify 等。后端若有需求，可以接入外部的 API 服务。 |
| **Fullstack Web** | 客户端与服务端集成在一个项目中，由 Dioxus 提供全栈能力。既包括运行于浏览器的前端 WASM 应用，也包含服务端（如 Axum）的后端逻辑。 |

## 参考

- [Tutorial — Creating a new project](https://dioxuslabs.com/learn/0.7/tutorial/new_app/)（文中 “fullstack 选 false、平台选 Web” 的示例即偏 SPA 入门）
`,ip=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# rust 后端开发

本分类收录 Rust 后端开发相关笔记。

## 书集目录

<CategoryBooks />
`,op=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# Terminal（终端与运维）

本分类收录终端、Shell 与 Linux 服务器运维相关笔记。

## 书集目录

<CategoryBooks />
`,ap=`---
command: cd
function: 切换目录
order: 2
options: .., ~, /path/to/dir
---

# cd 切换目录

\`cd\`（change directory）用于切换当前工作目录。在 Shell 中，许多相对路径命令都基于当前目录。

## 基本用法

\`\`\`bash
cd /path/to/dir    # 进入绝对路径目录
cd subdir          # 进入当前目录下的子目录
cd                 # 回到用户主目录（与 cd ~ 相同）
\`\`\`

## 常用路径写法

- \`..\`  上一级目录。
- \`~\`  或 \`~用户名\`  用户主目录（如 \`/home/alice\`）。
- \`-\`  回到上一次所在的目录（方便在两个目录间切换）。
- \`.\`  当前目录（在脚本或复制源中常见）。

## 示例

\`\`\`bash
cd /var/log
cd ~/Documents
cd ..
cd -
cd /etc && cd ../usr
\`\`\`

## 常见技巧

- 路径含空格时用引号包裹：
  \`\`\`bash
  cd "My Documents"
  \`\`\`
- 在脚本中确保目录存在再进入，可先判断或使用 \`set -e\` 与错误处理。
`,rp=`---
command: clear
function: 清屏
order: 10
options: 无
---

# clear 清空屏幕

\`clear\` 清空当前终端可视区域（滚动缓冲是否一并清除取决于终端实现）。常用于命令输出太多时恢复可读界面。

## 基本用法

\`\`\`bash
clear
\`\`\`

## 快捷键与等价方式

- 多数终端里 **\`Ctrl + L\`** 与 \`clear\` 效果相近（清屏或把提示符移到顶行，依 Shell/终端而定）。
- 终端显示乱码、控制字符异常时，可尝试 \`reset\`（比 \`clear\` 更「重置」终端状态）。

## 说明

- \`clear\` 通常由 \`ncurses\` 等提供，具体行为见本机 \`man clear\`。
- 清屏不会结束正在运行的进程，只是刷新显示。
`,lp=`---
command: cp
function: 复制文件/文件夹
order: 8
options: -r
---

# cp 复制文件

\`cp\` 用于复制文件或目录。

## 基本用法

\`\`\`bash
cp source.txt dest.txt       # 复制文件，可改名
cp a.txt b.txt dir/          # 多个文件复制到目标目录
cp -r srcdir destdir         # 递归复制目录
\`\`\`

## 常用参数

- \`-r\` / \`-R\`  递归复制目录。
- \`-i\`  覆盖前询问。
- \`-u\`  仅在源较新或目标不存在时复制（增量同步常用）。
- \`-v\`  显示复制过程。
- \`-a\`  归档模式（保留权限、时间等，常用于备份，等价于 \`-dR --preserve=all\` 的组合，具体以手册为准）。

## 示例

\`\`\`bash
cp /etc/hosts hosts.bak
cp -r ~/project ~/project-backup
cp -iv important.conf important.conf.bak
\`\`\`

## 常见技巧

- 保持软链接本身而非跟链复制时，注意 GNU/BSD 上 \`-d\`、\`-P\` 等选项差异，必要时查看 \`man cp\`。
- 大目录同步更常用 \`rsync\`；\`cp -a\` 适合本地整目录镜像。
`,cp=`---
title: 目录操作
order: 1
---`,up=`---
command: ln
function: 创建硬链接或软链接
order: 12
options: -s, -f
---

# ln 命令详解

\`ln\` 为文件或目录创建**链接**：**硬链接**指向同一 inode；**软链接（符号链接）**类似快捷方式，可指向文件或目录。

## 基本用法

\`\`\`bash
ln target.txt hard.txt           # 硬链接：同一数据多个名字
ln -s target.txt soft.txt        # 软链接：记录目标路径
ln -s /path/to/dir mydir         # 目录常用软链接
\`\`\`

## 常用参数

- \`-s\`  创建软链接（symbolic）；不加则为硬链接。
- \`-f\`  目标已存在则强制覆盖（谨慎使用）。
- \`-i\`  覆盖前询问。
- \`-v\`  显示创建过程。

## 说明

- **硬链接**不能跨文件系统，通常不能链接目录；删除其中一个名字，数据仍在，直到 inode 无链接。
- **软链接**可跨分区；目标被删后链接会「悬空」；相对路径在链接文件所在目录解析。

## 示例

\`\`\`bash
ln -s ../config/.env .env
ln -sf release/current www
\`\`\`
`,dp=`---
command: ls
function: 查看目录文件
order: 1
options: -l, -a
---

# ls 命令详解

\`ls\` 命令用于列出目录内容，是 Linux/Unix 系统中最常用的文件操作命令之一。

## 基本用法

\`\`\`bash
ls             # 列出当前目录下的文件和文件夹
ls /path/      # 列出指定路径下的内容
\`\`\`

## 常用参数

- \`-l\`  以长格式显示详细信息（权限、所有者、大小、时间等）。
- \`-a\`  显示所有文件，包括以\`.\`开头的隐藏文件。
- \`-h\`  与 \`-l\` 配合，显示更易读的文件大小（如 KB、MB）。
- \`-t\`  按修改时间排序。
- \`-r\`  反转排序顺序。
- \`-S\`  按文件大小排序。

## 示例

\`\`\`bash
ls -l               # 以详细列表形式显示
ls -la              # 显示所有文件（含隐藏），并详细列表
ls -lh              # 详细列表+人类可读的文件大小
ls -ltr             # 按修改时间倒序排列（最近修改的在最后）
ls /etc             # 查看 /etc 目录下的文件
ls -lhS             # 按文件大小排序并显示人类可读大小
\`\`\`

## 常见技巧

- 查看当前目录下的隐藏文件：
  \`\`\`bash
  ls -d .*
  \`\`\`
- 只列出目录（不显示文件）：
  \`\`\`bash
  ls -l | grep "^d"
  \`\`\`
- 显示文件的 inode 编号：
  \`\`\`bash
  ls -li
  \`\`\`
`,pp=`---
command: man
function: 查看命令手册（Manual）
order: 14
options: -k, -f, -a
---

# man 命令详解

\`man\`（manual）用于查看系统命令、库函数与配置文件的帮助文档，是终端里最权威的本地说明来源之一。

## 基本用法

\`\`\`bash
man ls               # 查看 ls 手册
man 5 crontab        # 查看第 5 节（文件格式）
\`\`\`

## 常用参数

- \`-k\`  按关键字搜索相关条目（等价 \`apropos\`）。
- \`-f\`  查看命令的一句话简介（等价 \`whatis\`）。
- \`-a\`  显示所有匹配到的手册页（默认只看第一个）。

## 示例

\`\`\`bash
man ssh
man -k copy
man -f chmod
\`\`\`

## 常见技巧

- 在 \`man\` 页面内：\`/关键词\` 搜索，\`n\` 跳下一个，\`q\` 退出。
- 某些极简环境未安装完整手册数据库，可先安装 \`man-db\` 或对应发行版文档包。
`,mp=`---
command: mkdir
function: 新建目录
order: 4
options: -p
---

# mkdir 命令详解

\`mkdir\` 用于创建目录（文件夹）。

## 基本用法

\`\`\`bash
mkdir dirname              # 在当前目录下创建单个目录
mkdir dir1 dir2 dir3       # 一次创建多个同级目录
\`\`\`

## 常用参数

- \`-p\`  若父目录不存在则一并创建（递归创建路径），且目录已存在时不报错。
- \`-v\`  显示创建的每个目录（verbose）。

## 示例

\`\`\`bash
mkdir myproject
mkdir -p a/b/c/d           # 创建多级嵌套目录
mkdir -pv logs/2026/03     # 创建并打印过程
\`\`\`

## 常见技巧

- 创建项目骨架：
  \`\`\`bash
  mkdir -p src/{components,utils} tests docs
  \`\`\`
- 权限由 \`umask\` 影响；需要特定权限时可配合 \`chmod\` 或在创建后调整。
`,hp=`---
command: mv
function: 移动/重命名文件
order: 7
options: 无
---

# mv 命令详解

\`mv\` 用于移动文件或目录，也可用于**同一目录内重命名**。

## 基本用法

\`\`\`bash
mv oldname newname           # 重命名（同目录）
mv file.txt /path/to/dir/    # 移动到目录
mv a b c target_dir/         # 多个条目移动到目录
\`\`\`

## 常用参数

- \`-i\`  覆盖前询问。
- \`-n\`  不覆盖已存在目标。
- \`-v\`  显示移动过程。
- \`-f\`  强制覆盖（默认在交互式 shell 中可能被别名覆盖为 \`-i\`，可用 \`alias\` 查看）。

## 示例

\`\`\`bash
mv draft.md final.md
mv ~/Downloads/*.pdf ~/Documents/
mv -iv logo.png backup/logo-old.png
\`\`\`

## 常见技巧

- 跨文件系统移动大目录时，\`mv\` 可能实际先复制再删除；耗时与磁盘有关。
- 批量重命名可结合循环或 \`rename\` 工具；简单场景用 \`mv\` 即可。
`,fp=`---
command: pwd
function: 查看绝对路径
order: 3
options: 无
---

# pwd 查看路径

\`pwd\`（print working directory）输出当前 Shell 的工作目录的绝对路径。

## 基本用法

\`\`\`bash
pwd        # 打印逻辑路径（可能含符号链接）
pwd -P     # 打印物理路径（解析掉符号链接，GNU coreutils）
\`\`\`

## 说明

- 在 macOS/BSD 上 \`pwd\` 行为与 GNU 略有差异；内置 \`pwd\` 与 \`/bin/pwd\` 也可能不同，需要时可用 \`pwd -P\` 或 \`readlink -f\`（Linux）查看真实路径。
- 脚本里保存当前目录便于后续返回：
  \`\`\`bash
  HERE=$(pwd)
  \`\`\`

## 示例

\`\`\`bash
pwd
cd /tmp && pwd
ls "$(pwd)/subdir"
\`\`\`

## 常见技巧

- 与 \`cd\` 配合确认是否在对的目录：
  \`\`\`bash
  cd some/nested/path && pwd
  \`\`\`
`,bp='---\ncommand: readlink\nfunction: 解析符号链接路径\norder: 13\noptions: -f\n---\n\n# readlink 查软连接\n\n**`readlink`** 打印符号链接指向的路径；**`realpath`**（若系统提供）可解析为规范绝对路径（解析 `.`、`..` 与符号链接）。\n\n## readlink 基本用法\n\n```bash\nreadlink soft.txt           # 打印链接目标字符串\nreadlink -f soft.txt        # GNU：递归解析到带全局路径的最终文件\n```\n\n## realpath 基本用法\n\n```bash\nrealpath soft.txt           # 效果等于 readlink -f, 但是没有该文件会报错\n```\n\n## 说明\n\n- `readlink` 在 BSD 系统（如 macOS）与 GNU/Linux 上选项差异明显：macOS 下标准 `readlink` 不支持 `-f`，若需获得全路径，可以用 `python3 -c \'import os; print(os.path.realpath("文件名"))\'`，或通过安装 GNU coreutils 后使用 `greadlink -f` 实现。\n- 通常可结合 `pwd -P`、`ls -l` 的符号链接箭头 `->` 一同排查目标的真实路径，帮助定位文件的实际位置。\n\n## 示例\n\n```bash\nreadlink "$(which node)"\nrealpath "$(pwd)/config.json"\n```\n',gp="---\ncommand: rm\nfunction: 删除文件/文件夹\norder: 6\noptions: -rf\n---\n\n# rm 删除文件\n\n`rm` 用于删除文件；删除目录通常需要 `-r`。**删除不可恢复**（无回收站），使用前务必确认路径。\n\n## 基本用法\n\n```bash\nrm file.txt              # 删除单个文件\nrm f1 f2 f3              # 删除多个文件\nrm -r dirname            # 递归删除目录及其内容\n```\n\n## 常用参数\n\n- `-r` / `-R`  递归删除目录。\n- `-f`  强制删除，忽略不存在的文件、不提示（与 `-i` 互斥）。\n- `-i`  每个文件删除前询问（更安全）。\n- `-v`  显示被删除的文件。\n\n`rm -rf` 威力大，误删风险高，**不要在生产或家目录随意使用通配符**（如 `rm -rf *`）。\n\n## 示例\n\n```bash\nrm old.log\nrm -ri somedir           # 递归且交互确认\nrm -rf build/            # 常见：清理构建产物（确认路径后再执行）\n```\n\n## 常见技巧\n\n- 先用 `ls` 确认再删：\n  ```bash\n  ls target*\n  rm target*\n  ```\n- 移动至「废纸篓」可用桌面环境提供的命令；纯终端可考虑 `trash-cli` 等工具代替裸 `rm`。\n",yp=`---
command: scp
function: 远程复制文件
order: 9
options: -r, -P
---

# scp 远程复制

\`scp\`（secure copy）基于 **SSH** 在本地与远程主机之间（或两台远程机之间）复制文件/目录，传输过程加密。

## 基本用法

\`\`\`bash
scp local.txt user@host:/remote/path/           # 本地上传到远程
scp user@host:/remote/file.txt ./               # 远程下载到本地
scp -r user@host:/remote/dir ./local-dir/       # 递归复制目录
\`\`\`

## 常用参数

- \`-r\`  递归复制目录。
- \`-P port\`  指定 SSH 端口（**大写 P**；与 \`ssh -p\` 小写不同）。
- \`-i keyfile\`  指定私钥文件。
- \`-p\`  尽量保留修改时间、权限等（小写 p）。
- \`-v\`  显示详细过程，便于排查连接问题。

## 示例

\`\`\`bash
scp -P 2222 ./app.zip deploy@1.2.3.4:/var/www/
scp -r user@server:~/backup ./restore/
\`\`\`

## 说明

- 路径中含空格或特殊字符时注意加引号。
- 大文件或断点续传更常用 \`rsync\`；\`scp\` 适合简单、一次性拷贝。
- 首次连接会提示确认主机指纹，属正常 SSH 行为。
`,vp=`---
command: touch
function: 创建空文件或改时间
order: 5
options: macOS, Linux, WSL
---

# touch 创建文件

\`touch\` 常见用途：**文件不存在则创建空文件**；**已存在则把访问/修改时间更新为当前时间**（可用选项指定具体时间）。

## 基本用法

\`\`\`bash
touch new.txt           # 不存在则创建；存在则更新时间戳
touch a.txt b.txt       # 多个文件
\`\`\`

## 常用参数

- \`-c\`  文件不存在时不创建（仅更新时间戳）。
- \`-a\`  只改访问时间（access）。
- \`-m\`  只改修改时间（modification）。
- \`-t [[CC]YY]MMDDhhmm[.ss]\`  使用指定时间而非「现在」（GNU/BSD 格式略有差异，以 \`man touch\` 为准）。

## 示例

\`\`\`bash
touch log.txt
touch -t 202401011200.00 release.flag
touch -c maybe.txt      # 仅当 maybe.txt 已存在时才更新时间
\`\`\`

## 说明

- 权限不足时无法在目标目录创建文件，需检查写权限或加 \`sudo\`（谨慎使用）。
`,_p=`---
command: which
function: 查看命令路径
order: 11
options: 无
---

# which 命令路径

\`which\` 在 **\`PATH\` 环境变量**所列目录中查找可执行文件，并打印第一个匹配项的路径。适合确认「当前会执行的是哪一个命令」。

## 基本用法

\`\`\`bash
which ls
which python3
which -a git    # 打印 PATH 中所有匹配（部分系统支持 -a）
\`\`\`

## 说明

- 只对**已声明在 PATH 里**、且为可执行文件的命令有效；Shell **内置命令**（如 \`cd\`）通常没有独立路径，\`which cd\` 可能无结果或行为依系统而异，可用 \`type cd\` / \`command -v cd\`。
- 不同系统实现可能是 \`which\`（独立工具）或 Shell 内建别名，细节见 \`man which\`。

## 示例

\`\`\`bash
which node npm
command -v python || which python3
\`\`\`
`,kp=`---
command: cat
function: 一次性查看完整文件内容（适合小文件）
order: 3
options: 无
---
# cat 查看文件

\`cat\`（concatenate）把文件内容连续输出到终端，默认不做分页，**大文件会刷屏或卡顿**，适合日志片段、小配置等。

## 基本用法

\`\`\`bash
cat readme.txt           # 打印整个文件到屏幕
cat a.txt b.txt          # 按顺序拼接多个文件后输出
\`\`\`

## 常用参数

- \`-n\`  显示行号。
- \`-b\`  对非空行显示行号。
- \`-s\`  连续多个空行压成一行。
- \`-A\`  显示不可见字符（行尾 \`$\`、Tab 等），调试用。

## 示例

\`\`\`bash
cat /etc/hostname
cat -n script.sh
\`\`\`

## 注意

- 二进制文件勿用 \`cat\` 直接打到终端，可能乱码或影响终端状态。
- 大文件请用 \`less\` 或 \`head\` / \`tail\`。
`,wp=`---
command: grep
function: 按模式匹配文本行（可在文件或管道中搜索）
order: 7
options: -i, -n, -r, -v, -E, -w
---
# grep 文本搜索

\`grep\` 用于按关键字或正则表达式查找匹配的文本行，是排查日志、定位配置和代码搜索的高频命令。

## 基本用法

\`\`\`bash
grep "error" app.log
grep "root" /etc/passwd
\`\`\`

## 常用参数

- \`-i\`  忽略大小写。
- \`-n\`  显示匹配行号。
- \`-r\`  递归搜索目录（含子目录）。
- \`-v\`  反向匹配（显示不匹配行）。
- \`-E\`  使用扩展正则（等价常见 \`egrep\`）。
- \`-w\`  按完整单词匹配。

## 示例

\`\`\`bash
grep -n "TODO" main.sh
grep -ri "timeout" /etc/nginx
dmesg | grep -i "usb"
\`\`\`

## 注意

- 包含空格或特殊字符的模式建议用引号包起来。
- 正则元字符需转义，避免与 shell 通配符混淆。
`,xp=`---
command: head
function: 查看文件前若干行（默认约 10 行）
order: 4
options: -n 行数, -c 字节数
---
# head 看文件头

\`head\` 只输出文件**开头**的一部分，适合快速看文件头部、CSV 表头、配置说明等。

## 基本用法

\`\`\`bash
head notes.txt              # 默认前 10 行
head -n 20 notes.txt        # 前 20 行
head -n 5 a.txt b.txt       # 每个文件各显示前 5 行
\`\`\`

## 常用参数

- \`-n <行数>\`  指定行数（GNU 也支持 \`head -n -5\` 表示去掉最后 5 行等写法，以手册为准）。
- \`-c <字节>\`  按字节截取开头。

## 示例

\`\`\`bash
head -n 1 data.csv          # 只看表头一行
head -n 50 /var/log/auth.log
\`\`\`
`,Sp=`---
title: 文档操作
order: 3
---`,$p=`---
command: less
function: 分页查看大文件（上下翻页，q 退出）
order: 6
options: 空格 / f — 下一屏, b — 上一屏, ↑↓ / j k — 逐行, q — 退出
---
# less 分页查看

\`less\` 按屏浏览文件，**不会把整个文件一次性读进终端**，适合日志与大文本。

## 基本用法

\`\`\`bash
less /var/log/syslog
less +100 big.log      # 从第 100 行开始打开（部分版本）
\`\`\`

## 常用操作（浏览中）

- **空格** 或 **PageDown**：向下翻一屏。
- **b** 或 **PageUp**：向上翻一屏。
- **↓ / j**：下一行；**↑ / k**：上一行。
- **/** 后输入文字 **Enter**：向下搜索；**n** 下一个，**N** 上一个。
- **q**：退出。

## 示例

\`\`\`bash
less README.md
dmesg | less
\`\`\`

## 提示

- 部分系统 \`less\` 支持 \`-R\` 解析颜色转义（视环境而定）。
- 与 \`more\` 相比，\`less\` 可自由前后翻页，更常用。
`,Pp=`---
command: nano
function: 新手友好终端编辑器（底部有快捷键提示）
order: 1
options: Ctrl+O — 保存, Ctrl+X — 退出（可提示是否保存）
---
# nano 编辑器

\`nano\` 界面简单，底部菜单列出常用快捷键，适合**刚接触终端编辑**时改小文件、配置片段。

## 基本用法

\`\`\`bash
nano readme.txt             # 打开或新建文件
nano                        # 无文件名则进入空缓冲，保存时再命名
\`\`\`

## 常用快捷键

- **Ctrl+O**（Write Out）：保存；确认文件名后 **Enter**。
- **Ctrl+X**：退出；若已修改会询问是否保存。
- **Ctrl+K**：剪切当前行；**Ctrl+U**：粘贴。
- **Ctrl+W**：搜索；**Ctrl+\\\\**：替换（依版本而定）。
- **Ctrl+G**：查看帮助。

## 示例

\`\`\`bash
nano ~/.bashrc
sudo nano /etc/hosts
\`\`\`

## 提示

- \`^\` 表示 **Ctrl**，如 \`^O\` 即 Ctrl+O。
- 需要 root 权限编辑系统文件时配合 \`sudo\`。
`,Ap=`---
command: tail
function: 查看文件末尾若干行（tail -f 可实时监听日志）
order: 5
options: -n 行数, -f, -F
---
# tail 看文件尾

\`tail\` 输出文件**末尾**内容；\`-f\` 常用于**跟踪日志**追加写入。

## 基本用法

\`\`\`bash
tail app.log                # 默认最后约 10 行
tail -n 50 app.log          # 最后 50 行
tail -f /var/log/nginx/access.log   # 阻塞并持续打印新增内容
\`\`\`

## 常用参数

- \`-n <行数>\`  指定末尾行数。
- \`-f\`  文件增长时继续输出（follow）；日志排查最常用。
- \`-F\`  类似 \`-f\`，若文件被轮转/重建会重新打开（视实现而定）。

## 示例

\`\`\`bash
tail -n 100 error.log
tail -f debug.log           # Ctrl+C 结束监听
\`\`\`

## 注意

- \`-f\` 会一直占用终端，用 **Ctrl+C** 结束。
- 极快增长的日志注意磁盘与权限。
`,Tp='---\ncommand: vim\nfunction: 专业终端编辑器（模式编辑、可编程）\norder: 2\noptions: :q — 退出（未改或已放弃）, :w — 保存, :wq / :x — 保存并退出, :q! — 不保存强制退出\n---\n# vim 编辑器\n\n`vim`（Vi IMproved）是**模式化**编辑器：默认在**普通模式**移动/删除，按 **i** 等进入**插入模式**输入文字，功能强大，学习曲线比 `nano` 陡。\n\n## `vi` 与 `vim`\n\n很多 Linux 发行版里，命令 **`vi` 并非独立程序**，而是指向 **`vim` 的符号链接**（或同名包装脚本），因此日常输入 `vi file` 实际往往在跑 Vim。可自行确认：\n\n```bash\nls -l "$(command -v vi)"\nreadlink -f "$(command -v vi)"   # GNU；macOS 可用 readlink / realpath 视系统而定\n```\n\n也可能看到 `vi -> vim` 或 `vi -> /etc/alternatives/vi` 再链到 `vim`。少数环境仍是 **nvi**、**BusyBox vi** 等「真 vi」，行为与 Vim 略有差别；嵌入式或极简系统更常见。\n\n## 基本用法\n\n```bash\nvim script.sh               # 打开文件\nvim +10 log.txt             # 打开后跳到第 10 行（常见写法）\n```\n\n## 模式简述\n\n- **普通模式**：方向键 / `h j k l` 移动，`dd` 删行，`yy` 复制，`p` 粘贴。\n- **插入模式**：按 **i**（光标前）、**a**（光标后）、**o**（下行新起一行）等进入；**Esc** 回到普通模式。\n- **命令行模式**：普通模式下按 **:**，输入命令后 **Enter**。\n\n## 常用退出与保存\n\n| 场景       | 命令   |\n|------------|--------|\n| 保存       | `:w`   |\n| 保存并退出 | `:wq` 或 `:x` |\n| 不保存退出 | `:q!`  |\n| 仅退出（无修改） | `:q` |\n\n## 示例\n\n```bash\nvim ~/.vimrc\nvim -R huge.log             # 只读打开（避免误改）\n```\n\n## 学习建议\n\n- 在普通模式输入 `:help tutor` 可看内置教程（若发行版提供）。\n- 可先掌握 **i / Esc / :wq / :q!** 再逐步扩展。\n',Kp="---\ncommand: chmod\nfunction: 修改文件权限\norder: 1\noptions: u/g/o/a, +/-\n---\n# chmod 修改权限\n\n`chmod` 修改文件或目录的**读/写/执行**权限（rwx），可用**八进制数字**或**符号模式**（u/g/o/a +/-/=）。\n\n## 基本用法\n\n```bash\nchmod 644 file.txt          # rw-r--r--\nchmod +x script.sh          # 为所有者/组/其他增加可执行（依默认掩码）\nchmod u+x,g-w data.bin      # 符号模式：用户加执行，组去掉写\nchmod -R 755 myapp/         # 递归修改目录下内容\n```\n\n## 八进制速记\n\n- `4` 读 `r`，`2` 写 `w`，`1` 执行 `x`；三位依次为 **所有者 / 组 / 其他**。\n- 常见：`644` 文件默认可读、`755` 目录与可执行脚本、`600` 仅所有者可读写。\n\n## 常用符号\n\n- `u`  用户（owner），`g`  组，`o`  其他，`a`  全部。\n- `+`  增加权限，`-`  去掉，`=`  设为指定权限。\n\n## 说明\n\n- 目录的「执行」权限 `x` 表示能否**进入**该目录（`cd`）。\n- 修改系统文件常需合适身份；误用 `chmod -R` 可能破坏安全策略。\n\n## 示例\n\n```bash\nchmod go-rwx private.key\nfind . -type d -exec chmod 750 {} \\;\n```\n",Np=`---
command: chown
function: 修改所有者与组
order: 2
options: -R
---
# chown 修改所属

**\`chown\`** 修改文件或目录的**所有者**，可同时改**所属组**。**\`chgrp\`** 只改组（等价于 \`chown :GROUP\` 的常见场景）。

## chown 基本用法

\`\`\`bash
chown alice file.txt              # 只改所有者
chown alice:staff file.txt        # 所有者与组（Linux 常见写法）
chown :developers dir/            # 只改组（保留原所有者）
sudo chown -R deploy:deploy /var/www/app
\`\`\`

## chgrp 基本用法

\`\`\`bash
chgrp staff shared.log
sudo chgrp -R www-data uploads/
\`\`\`

## 常用参数

- \`-R\`  递归处理目录。
- \`-h\`  作用于符号链接本身而非目标（部分系统默认行为不同，见 \`man\`）。

## 说明

- 普通用户通常只能把**自己拥有的文件**的组改到自己所属的组；改所有者一般需 **root** / \`sudo\`。
- NFS、容器挂载目录上行为可能受限，以实际环境为准。

## 示例

\`\`\`bash
sudo chown root:root /etc/hosts
chgrp -R students homework/
\`\`\`
`,Ip=`---
command: file
function: 判断文件类型
order: 5
options: 无
---
# file 判断类型

\`file\` 根据**魔数、编码特征**等推测文件类型（文本/二进制、字符集、压缩格式等），不依赖扩展名。

## 基本用法

\`\`\`bash
file readme.txt
file /bin/ls
file -I *.md                    # GNU：MIME 类型
\`\`\`

## 常用参数

- \`-b\`  简短输出，不显示文件名。
- \`-L\`  跟随符号链接（默认可能已跟随，依实现而定）。

## 说明

- 对脚本、JSON、可执行文件等很有用；编码检测对「乱码」排查有帮助。
- 输出为**启发式**结果，极少数情况会误判。

## 示例

\`\`\`bash
file data.bin logo.png
file -bi unknown.dat            # GNU：MIME，便于脚本解析
\`\`\`
`,Lp='---\ncommand: find\nfunction: 按条件查找文件\norder: 3\noptions: -name, -type, -mtime\n---\n# find 查找文件\n\n`find` 在目录树中按**名称、类型、时间、大小**等条件查找文件或目录，并可对结果执行命令（`-exec`、`-delete` 等）。\n\n## 基本用法\n\n```bash\nfind . -name "*.log"              # 当前目录树下匹配文件名（区分大小写）\nfind /tmp -type f -mtime -1       # 一天内修改过的普通文件\nfind . -type d -name "node_modules" -prune -o -print   # 复杂组合时常配合 -o\n```\n\n## 常用条件\n\n- `-name` / `-iname`  按文件名通配（`-iname` 忽略大小写）。\n- `-type f`  文件，`-type d`  目录，`l`  符号链接等。\n- `-mtime -n` / `+n` / `n`  按修改天数（`-n`  n 天内）。\n- `-size +100M`  大于 100MB（GNU）。\n- `-maxdepth n`  限制深度（GNU/BSD 均常见）。\n\n## 说明\n\n- 通配符要**加引号**，避免 Shell 先展开。\n- `-delete` 与 `-exec rm {} +` 有破坏性，先 `find ... -print` 确认结果。\n- BSD 与 GNU 选项略有差异，不确定时查看 `man find`。\n\n## 示例\n\n```bash\nfind . -type f -empty\nfind ~/Projects -name "*.ts" -not -path "*/node_modules/*"\nfind . -name "*.tmp" -mtime +7 -delete    # 慎用：删除匹配文件\n```\n',Cp="---\ncommand: gzip\nfunction: 压缩与解压 .gz\norder: 7\noptions: -d, -k\n---\n# gzip 压缩解压\n\n**`gzip`** 压缩文件，默认生成 `.gz` 并**删除原文件**（可用 `-k` 保留）。**`gunzip`** 等价于 `gzip -d`，用于解压。\n\n## 基本用法\n\n```bash\ngzip big.log                    # 生成 big.log.gz，默认删除 big.log\ngzip -k big.log                 # 保留原文件（GNU 常见 -k；macOS 需看 man）\ngunzip big.log.gz               # 解压为 big.log\ngzip -dc file.gz > out.txt      # 解压到标准输出，不改变文件\n```\n\n## 常用参数\n\n- `-d` / `--decompress`  解压。\n- `-k` / `--keep`  压缩/解压时保留原文件。\n- `-v`  显示比例与文件名。\n- `-1` … `-9`  压缩速度与压缩率权衡（`-1` 最快，`-9` 最小）。\n\n## 说明\n\n- **只压缩单个文件**；多个文件需先用 `tar` 再打 `.tar.gz`。\n- `zcat`、`gzcat`（系统相关）可直接查看 `.gz` 文本内容。\n\n## 示例\n\n```bash\ngzip -9 image.raw\nls *.gz | xargs gunzip\n```\n",Op=`---
title: 文件操作
order: 2
---`,Ep=`---
command: stat
function: 查看文件元数据
order: 4
options: 无
---
# stat 查元数据

\`stat\` 显示文件或文件系统的**详细状态**：大小、inode、权限、访问/修改/变更时间、设备号等（比 \`ls -l\` 更全）。

## 基本用法

\`\`\`bash
stat file.txt
stat -f "%z bytes" file.txt    # macOS：自定义格式（-f 与 Linux 的 -c 不同）
stat -c "%s %n" file.txt       # GNU：自定义格式
\`\`\`

## 说明

- **macOS/BSD** 与 **GNU/Linux** 的格式选项不同：BSD 常用 \`stat -f "..."\`，GNU 常用 \`stat -c "..."\`。
- 符号链接默认显示**目标**信息；查看链接本身可用 \`stat -L\`（GNU）或 \`lstat\` 类行为（以本机手册为准）。

## 示例

\`\`\`bash
stat /etc/passwd
stat -f "%Sp %N" ./script.sh    # macOS：权限与名称
ls -i && stat README.md         # 结合 inode 查看
\`\`\`
`,Bp="---\ncommand: tar\nfunction: 打包与解包归档\norder: 6\noptions: c/x/t, z/j\n---\n# tar 打包解包\n\n`tar` 将多个文件**打包**成单个归档（`.tar`），常配合 **gzip**（`.tar.gz`）、**xz**、**bzip2** 压缩。名称来自 *tape archive*，现今广泛用于分发与备份。\n\n## 基本用法\n\n```bash\ntar -cvf archive.tar dir/           # 创建归档（c=create, v=verbose, f=file）\ntar -xvf archive.tar                # 解包到当前目录\ntar -tzf archive.tar.gz             # 列出压缩包内容（不解压）\ntar -czvf backup.tar.gz project/    # gzip 压缩打包（GNU/BSD 常见）\ntar -xzvf backup.tar.gz             # 解压 .tar.gz\n```\n\n## 常用模式\n\n- **创建** `-c`、**解包** `-x`、**列表** `-t`（三者互斥，只能选其一）。\n- `-v`  显示详细处理过程（verbose，打包/解包时打印文件名）。\n- `-f FILE`  指定归档文件名（通常紧跟在 `-f` 后写路径）。\n- `-z`  使用 gzip 压缩或解压；`-j`  bzip2；`-J`  xz（依系统支持而定）。\n\n## 说明\n\n- **macOS BSD tar** 与 **GNU tar** 对部分选项兼容，复杂场景请查 `man tar`。\n- 解压前可用 `tar -tf` 查看内容；避免解压不可信来源覆盖敏感路径。\n\n## 示例\n\n```bash\ntar -cJf code.tar.xz src/\ntar -xvf release.tar -C /tmp/extract/\n```\n",Dp=`---
command: zip
function: 打包压缩 zip
order: 8
options: -r, -e
---
# zip 打包压缩

**\`zip\`** 将文件或目录打包为 **\`.zip\`**（可同时压缩，Windows/macOS/Linux 通用度好）。**\`unzip\`** 解包或列出内容。

## zip 基本用法

\`\`\`bash
zip archive.zip file1.txt file2.txt
zip -r project.zip myapp/           # 递归目录
zip -e secret.zip notes.txt         # 加密（交互输入密码）
\`\`\`

## unzip 基本用法

\`\`\`bash
unzip archive.zip
unzip -l archive.zip                # 仅列表
unzip -o archive.zip -d /tmp/out  # 覆盖、指定目录
\`\`\`

## 常用参数（zip）

- \`-r\`  递归子目录。
- \`-q\`  安静模式。
- \`-x pattern\`  排除文件。

## 说明

- 与 \`tar.gz\` 相比，\`zip\` 在跨平台交换、邮件附件场景更常见；大备份仍多选 \`tar\` + 压缩。
- 密码加密强度有限，敏感数据需额外方案。

## 示例

\`\`\`bash
zip -r dist.zip build/ -x "*.map"
unzip -t backup.zip                 # 测试完整性
\`\`\`
`,Mp=`# Linux 命令

Linux 服务器运维笔记：常用命令、SSH、服务配置等。

##

<CommandYamlTable />
`,Vp=`---
command: "&"
function: 后台执行命令
order: 9
options: jobs, fg, bg
---

# & 后台执行

在命令末尾加 \`&\` 可让任务进入后台运行，终端可继续接收新命令。

## 基本用法

\`\`\`bash
python app.py &
sleep 100 &
\`\`\`

## 常见写法

- \`jobs\`  查看当前 shell 的后台任务。
- \`fg %1\`  将编号为 1 的任务切回前台。
- \`bg %1\`  让暂停任务继续在后台运行。

## 注意

- 直接后台运行仍可能受终端会话影响。
- 长期任务建议配合 \`nohup\` 或使用服务管理器。
`,jp=`---
title: 进程管理
order: 5
---
`,Hp=`---
command: journalctl
function: 查看服务日志
order: 16
options: -u, -f, -n, --since
---

# journalctl 服务日志

\`journalctl -u [server_name]\` 用于查看指定 systemd 服务日志，常用于排查启动失败和运行异常。

## 基本用法

\`\`\`bash
journalctl -u nginx
journalctl -u nginx -f
\`\`\`

## 常见写法

- \`journalctl -u service -n 100\`  查看最近 100 行日志。
- \`journalctl -u service --since "2026-04-08 10:00:00"\`  按时间筛选。
- \`journalctl -u service -f\`  实时跟踪日志输出。

## 注意

- 服务名通常对应 \`*.service\`，如 \`nginx\` 或 \`nginx.service\`。
- 排障时可与 \`systemctl status service\` 一起使用。
`,Rp=`---
command: kill
function: 终止进程
order: 1
options: -9, -15, -l
---

# kill 终止进程

\`kill\` 用于向指定 PID 发送信号，常见于结束异常进程或触发平滑退出。

## 基本用法

\`\`\`bash
kill 12345
kill -15 12345
\`\`\`

## 常见写法

- \`kill -9 PID\`  强制终止进程。
- \`kill -15 PID\`  发送 TERM，通常用于优雅停止。
- \`kill -l\`  查看信号列表。

## 注意

- \`-9\` 不会给进程清理资源的机会，优先使用 \`-15\`。
- 可先用 \`ps\` 或 \`pgrep\` 确认 PID 再执行。
`,Fp=`---
command: lsof
function: 查看打开文件
order: 4
options: -i, -p, -u
---

# lsof 进程端口

\`lsof\` 可查看某进程打开的文件、网络连接与端口，常用于定位“文件被占用”问题。

## 基本用法

\`\`\`bash
lsof -i :3000
lsof -p 12345
\`\`\`

## 常见写法

- \`lsof -i\`  查看所有网络打开项。
- \`lsof -i :80\`  查看 80 端口占用进程。
- \`lsof -u user\`  查看指定用户打开的文件。

## 注意

- 输出量可能很大，建议结合端口或 PID 过滤。
- 删除文件后空间未释放时，可用 \`lsof\` 找到占用进程。
`,Up=`---
command: netstat
function: 网络状态查看
order: 3
options: -tulnp, -an, -r
---

# netstat 网络端口

\`netstat\` 用于查看网络连接、监听端口与路由信息，常用于排查端口占用。

## 基本用法

\`\`\`bash
netstat -tulnp
netstat -an
\`\`\`

## 常见写法

- \`netstat -tulnp\`  查看 TCP/UDP 监听与对应进程。
- \`netstat -an | grep 8080\`  查找指定端口连接。
- \`netstat -r\`  查看路由表。

## 注意

- 新系统更推荐 \`ss\`，但 \`netstat\` 仍常见于历史环境。
- 需要足够权限才能看到完整进程信息。
`,qp=`---
command: nice -n
function: 设置启动优先级
order: 11
options: -n
---

# nice 进程优先级

\`nice -n\` 在启动进程时设置 nice 值，数值越大优先级越低。

## 基本用法

\`\`\`bash
nice -n 10 tar -czf backup.tar.gz /data
nice -n -5 ./cpu_task
\`\`\`

## 常见写法

- \`nice -n 10 cmd\`  降低任务优先级，减少对在线业务影响。
- \`nice -n -5 cmd\`  提高优先级（通常需要 root）。

## 注意

- nice 值范围通常为 \`-20\` 到 \`19\`。
- \`nice\` 仅对新启动进程生效，已运行进程用 \`renice\`。
`,zp=`---
command: "nohup"
function: 后台保活运行
order: 10
options: nohup.out, 2>&1
---


# nohup 后台运行

\`nohup [command] &\` 可让命令在会话断开后继续执行，默认输出写入 \`nohup.out\`。

## 基本用法

\`\`\`bash
nohup python app.py &
nohup ./server > server.log 2>&1 &
\`\`\`

## 常见写法

- \`nohup cmd > app.log 2>&1 &\`  自定义日志并合并错误输出。
- \`nohup bash script.sh &\`  后台执行脚本并忽略挂断信号。

## 注意

- \`nohup\` 只解决会话断开问题，不负责进程拉起和重启。
- 生产环境长期服务更推荐 \`systemd\`。
`,Gp=`---
command: pgrep
function: 条件匹配进程 PID
order: 8
options: -f, -a, -u
---

# pgrep 条件匹配

\`pgrep\` 按名称或规则查找进程 PID，常用于脚本判断和批量操作前校验。

## 基本用法

\`\`\`bash
pgrep nginx
pgrep -f "python app.py"
\`\`\`

## 常见写法

- \`pgrep -a name\`  同时输出 PID 与命令行。
- \`pgrep -u user name\`  仅匹配指定用户进程。
- \`pgrep -f pattern\`  按完整命令行匹配。

## 注意

- 先 \`pgrep\` 再 \`pkill\`，可降低误杀风险。
- 模糊模式太宽会返回过多 PID，建议收紧关键字。
`,Wp=`---
command: pidof
function: 查询进程 PID
order: 5
options: -s, -x
---

# pidof 查询PID

\`pidof\` 用于通过进程名快速获取 PID，适合脚本中做进程判断。

## 基本用法

\`\`\`bash
pidof nginx
pidof sshd
\`\`\`

## 常见写法

- \`pidof -s name\`  只返回一个 PID。
- \`pidof -x script.sh\`  包含脚本解释器对应进程。

## 注意

- 若返回空，说明进程名未匹配到或进程未运行。
- 复杂匹配建议改用 \`pgrep -f\`。
`,Jp=`---
command: pkill
function: 进程名终止
order: 2
options: -f, -9, -u
---

# pkill 名称终止

\`pkill\` 按名称或条件匹配进程并发送信号，适合批量处理同类进程。

## 基本用法

\`\`\`bash
pkill nginx
pkill -f "python app.py"
\`\`\`

## 常见写法

- \`pkill -9 name\`  强制结束匹配进程。
- \`pkill -u user name\`  只处理指定用户的进程。
- \`pkill -f pattern\`  按完整命令行匹配。

## 注意

- 名称匹配可能命中多个进程，执行前建议先用 \`pgrep\` 预览。
- 生产环境优先使用温和信号，避免强杀导致数据丢失。
`,Yp=`---
command: ps
function: 进程快照信息
order: 6
options: aux, -ef
---

# ps 进程快照

\`ps\` 展示当前时刻的进程快照，常与管道结合筛选目标进程。

## 基本用法

\`\`\`bash
ps aux
ps -ef
\`\`\`

## 常见写法

- \`ps aux | grep nginx\`  查找特定进程。
- \`ps -ef | grep java\`  按完整格式查看 Java 进程。

## 注意

- \`grep\` 本身也会出现在结果中，可结合 \`pgrep\` 避免误判。
- \`ps\` 是快照，不是实时刷新；实时监控可用 \`top\`。
`,Qp=`---
command: pstree
function: 进程树查看
order: 7
options: -p, -a
---

# pstree 进程树形

\`pstree\` 用树形方式展示进程父子关系，适合定位谁启动了目标进程。

## 基本用法

\`\`\`bash
pstree
pstree -p
\`\`\`

## 常见写法

- \`pstree -p\`  显示 PID。
- \`pstree -a\`  显示完整命令参数。
- \`pstree user\`  查看指定用户进程树。

## 注意

- 容器或服务管理器场景下，进程层级有助于定位僵尸/孤儿进程来源。
- 某些系统需要安装 \`psmisc\` 才有该命令。
`,Xp=`---
command: "renice"
function: 调整进程优先级
order: 12
options: -p, -u, -g
---

# renice 进程优先

\`renice\` 用于修改已运行进程的 nice 值，便于动态控制资源分配。

## 基本用法

\`\`\`bash
renice 10 -p 12345
renice -5 -p 12345
\`\`\`

## 常见写法

- \`renice 10 -p PID\`  降低某进程优先级。
- \`renice 5 -u user\`  批量调整某用户进程。
- \`renice 0 -g group\`  按进程组调整优先级。

## 注意

- 普通用户通常只能提高 nice 值（降低优先级）。
- 降低 nice 值（提升优先级）一般需要管理员权限。
`,Zp=`---
command: systemctl
function: 系统服务管理
order: 15
options: status, start, stop, restart, enable, disable
---

# systemctl 服务管理

\`systemctl\` 是 systemd 的服务管理入口，可查看状态、启停服务以及控制开机自启。

## 基本用法

\`\`\`bash
systemctl status nginx
systemctl restart nginx
\`\`\`

## 常见写法

- \`systemctl start service\`  启动服务。
- \`systemctl stop service\`  停止服务。
- \`systemctl restart service\`  重启服务。
- \`systemctl enable service\`  设置开机自启。
- \`systemctl disable service\`  关闭开机自启。

## 注意

- 配置变更后可先 \`systemctl restart\` 再 \`status\` 验证。
- 生产环境建议结合 \`journalctl\` 查看失败原因。
`,em=`---
command: uptime
function: 查看系统负载
order: 13
options: -p, -s
---

# uptime 系统负载

\`uptime\` 显示系统已运行时长、当前登录用户数和 1/5/15 分钟平均负载。

## 基本用法

\`\`\`bash
uptime
uptime -p
\`\`\`

## 常见写法

- \`uptime -p\`  以可读格式显示运行时长。
- \`uptime -s\`  显示系统启动时间。

## 注意

- 负载不是 CPU 使用率，需结合 CPU 核数判断是否过载。
- 建议配合 \`top\`、\`w\` 进一步定位压力来源。
`,nm=`---
command: w
function: 查看用户在线会话
order: 14
options: -h, -s
---

# w 用户会话

\`w\` 用于查看当前在线用户、登录来源、空闲时间和正在执行的命令。

## 基本用法

\`\`\`bash
w
w user
\`\`\`

## 常见写法

- \`w -h\`  不显示表头。
- \`w -s\`  使用简洁模式输出。
- \`w username\`  查看指定用户会话。

## 注意

- 可快速判断高负载是否由某个交互会话触发。
- 与 \`who\` 相比，\`w\` 提供了更详细的命令执行信息。
`,tm=`---
command: apt
function: Debian/Ubuntu 包管理工具
order: 39
options: update, install, remove, upgrade
---

# apt 包管理

\`apt\` 用于在 Debian/Ubuntu 系统中管理软件包。

## 常用命令

\`\`\`bash
sudo apt update
sudo apt install nginx
sudo apt upgrade
sudo apt remove nginx
\`\`\`

## 常见子命令

- \`update\`  更新软件源索引。
- \`install\`  安装软件包。
- \`upgrade\`  升级已安装软件包。
- \`remove\` / \`purge\`  卸载软件包（\`purge\` 含配置）。

## 注意

- \`apt\` 主要用于交互式使用；脚本中常用 \`apt-get\`。
`,sm=`---
command: df
function: 查看分区空间
order: 20
options: -h, -T
---

# df 查看空间

\`df\`（disk free）显示**已挂载文件系统**的总容量、已用、可用与挂载点；可针对某路径查看其所在分区。

## 基本用法

\`\`\`bash
df -h                      # 人类可读
df -h .                    # 当前目录所在分区
df -T                      # GNU：显示文件系统类型
df -hT /home
\`\`\`

## 常用参数

- \`-h\`  易读单位。
- \`-i\`  inode 使用情况（文件很多时可能 inode 先满）。
- \`-P\`  POSIX 输出格式，便于脚本解析。

## 说明

- **macOS** 上部分选项与 GNU 不同，以 \`man df\` 为准。
- 与 \`du\` 配合：\`df\` 看**分区**，\`du\` 看**目录树**谁占空间。

## 示例

\`\`\`bash
df -h /
watch -n 5 df -h /data      # 需安装 watch
\`\`\`
`,im=`---
command: du
function: 查看目录占用空间
order: 19
options: -h, -s, -d
---

# du 目录占用

\`du\`（disk usage）估算目录或文件占用的**磁盘块**，常用于找出体积大的目录。

## 基本用法

\`\`\`bash
du -h                      # 人类可读大小，列出当前目录各子项
du -h ./data               # 列出指定目录各子项
du -sh ~/Downloads         # 只显示总计（summary）
du -h -d 1 .               # BSD/macOS：只深入一层
du -h --max-depth=1 .      # GNU：同上
\`\`\`

## 常用参数

- \`-h\` / \`-human-readable\`  以 KB/MB/GB 显示。
- \`-s\` / \`--summarize\`  仅显示参数本身的总计。
- \`-a\`  同时列出文件（不仅目录）。
- \`--exclude=pattern\`  排除路径（GNU）。

## 说明

- 与 \`ls -lh\` 看到的「文件大小」不同，\`du\` 更贴近**磁盘占用**（含目录块、稀疏文件等差异）。
- 权限不足时部分子目录会显示 \`Permission denied\`。

## 示例

\`\`\`bash
du -sh * | sort -h
sudo du -xh /var | head
\`\`\`
`,om=`---
command: echo "$PATH"
function: 查看 PATH 环境变量内容
order: 40
options: 无
---

# echo $PATH 查看搜索路径

\`echo "$PATH"\` 用于查看命令搜索路径列表，目录之间通常以冒号 \`:\` 分隔。

## 基本用法

\`\`\`bash
echo "$PATH"
\`\`\`

## 示例

\`\`\`bash
echo "$PATH" | tr ':' '\\n'
\`\`\`

## 注意

- PATH 顺序会影响同名命令优先级。
- 修改 PATH 后可再 \`echo "$PATH"\` 验证结果。
`,am=`---
command: echo
function: 输出字符串或变量值
order: 23
options: -n, -e
---

# echo 输出文本

\`echo\` 用于在终端打印文本，也可打印环境变量内容。

## 基本用法

\`\`\`bash
echo "hello"
echo "$HOME"
echo "$PATH"
\`\`\`

## 常用参数

- \`-n\`  不自动换行。
- \`-e\`  解析转义字符（如 \`\\n\`、\`\\t\`，依实现而定）。

## 示例

\`\`\`bash
echo -e "line1\\nline2"
echo "bin path: $PATH"
\`\`\`

## 注意

- 变量建议放在双引号中，避免空格被拆词。
- 更复杂输出可用 \`printf\`。
`,rm=`---
command: eval
function: 将字符串作为 shell 命令再次解析执行
order: 24
options: 无
---

# eval 二次执行

\`eval\` 会把参数拼成一条命令，再交给当前 shell 重新解析并执行。

## 基本用法

\`\`\`bash
cmd='echo "hello eval"'
eval "$cmd"
\`\`\`

## 示例

\`\`\`bash
name="PATH"
eval "echo \\$$name"
\`\`\`

## 注意

- \`eval\` 有注入风险，不要直接执行不可信输入。
- 能不用就不用，优先数组、函数或明确变量展开。
`,lm=`---
command: exec
function: 用新程序替换当前 shell 进程
order: 25
options: -c, -l
---

# exec 替换进程

\`exec\` 会直接用目标命令替换当前 shell 进程，不再返回原 shell。

## 基本用法

\`\`\`bash
exec bash
exec /bin/sh
\`\`\`

## 示例

\`\`\`bash
exec > app.log 2>&1
echo "this line goes to log"
\`\`\`

## 注意

- \`exec\` 后原 shell 状态会丢失，请谨慎使用。
- 重定向场景里常见 \`exec >file\` 一次性修改后续输出目标。
`,cm=`---
command: exit
function: 退出当前 shell 会话
order: 36
options: exit 状态码
---

# exit 退出会话

\`exit\` 用于结束当前 shell 或脚本执行，并可返回退出码。

## 基本用法

\`\`\`bash
exit
exit 1
\`\`\`

## 示例

\`\`\`bash
if [ ! -f config.yml ]; then
  echo "missing config"
  exit 1
fi
\`\`\`

## 注意

- 在 SSH 会话中执行 \`exit\` 会断开连接。
- 在脚本里 \`exit 0\` 通常表示成功，非 0 表示异常。
`,um=`---
command: export PATH=...
function: 临时追加或设置当前 shell 的 PATH
order: 41
options: 无
---

# export PATH 设置路径

\`export PATH=...\` 用于在当前 shell 会话中设置环境变量 PATH。

## 基本用法

\`\`\`bash
export PATH="$PATH:/opt/mybin"
\`\`\`

## 示例

\`\`\`bash
export PATH="/usr/local/bin:$PATH"
which mycmd
\`\`\`

## 注意

- 只对当前会话和子进程生效，重开终端会失效。
- 永久生效需写入 \`~/.bashrc\`、\`~/.zshrc\` 等启动文件。
`,dm=`---
command: free
function: 查看内存与 swap 使用情况
order: 32
options: -h, -m, -s
---

# free 内存查看

\`free\` 显示系统内存和交换分区使用情况，排查内存压力时常用。

## 基本用法

\`\`\`bash
free -h
free -m
\`\`\`

## 常用参数

- \`-h\`  人类可读单位。
- \`-m\`  以 MB 显示。
- \`-s <秒>\`  周期刷新。

## 示例

\`\`\`bash
free -h -s 2
\`\`\`
`,pm=`---
command: growpart
function: 扩展分区到磁盘可用空间
order: 43
options: 设备 分区号
---

# growpart 扩容分区

\`growpart\` 常用于云主机扩容后，把分区扩展到磁盘新增空间。

## 基本用法

\`\`\`bash
# 查看磁盘名称是 vda 版本还是 nvme 版本
lsblk
# 用 vda 版本
sudo growpart /dev/vda 1
# 用 nvme 版本
sudo growpart /dev/nvme0n1 1
\`\`\`

## 说明

- 命令格式为 \`growpart <设备> <分区号>\`。
- 扩展分区后还需扩展文件系统（如 \`resize2fs\` 或 \`xfs_growfs\`）。

## 注意

- 操作前建议先备份并确认设备名，避免误改分区表。
`,mm=`---
title: 系统信息
order: 4
---`,hm=`---
command: lsblk
function: 列出块设备及分区结构
order: 31
options: -f, -o
---

# lsblk 磁盘拓扑

\`lsblk\` 展示磁盘、分区、挂载点的树形关系，适合排查磁盘结构。

## 基本用法

\`\`\`bash
lsblk
lsblk -f
\`\`\`

## 常用参数

- \`-f\`  显示文件系统信息。
- \`-o\`  指定输出列，如 \`NAME,SIZE,FSTYPE,MOUNTPOINT\`。

## 示例

\`\`\`bash
lsblk -o NAME,SIZE,TYPE,MOUNTPOINT
\`\`\`

## 注意

- 某些最小系统可能不带 \`lsblk\`，可用 \`fdisk -l\` 辅助查看。
`,fm=`---
command: passwd
function: 修改用户密码
order: 35
options: 用户名, -l, -u
---

# passwd 修改密码

\`passwd\` 用于修改当前用户或指定用户的密码。

## 基本用法

\`\`\`bash
passwd
sudo passwd alice
\`\`\`

## 常见操作

- \`sudo passwd <user>\`  重置指定用户密码。
- \`sudo passwd -l <user>\`  锁定账户密码登录。
- \`sudo passwd -u <user>\`  解锁账户密码登录。

## 注意

- 输入密码时终端不回显属于正常现象。
- 生产环境请遵循密码复杂度策略。
`,bm=`---
command: "|"
function: 管道，把前一命令输出传给后一命令输入
order: 29
options: 无
---

# | 管道操作符

\`|\` 将左侧命令的标准输出作为右侧命令的标准输入，用于命令组合。

## 基本用法

\`\`\`bash
dmesg | less
ps aux | grep nginx
\`\`\`

## 示例

\`\`\`bash
ls -l | wc -l
cat access.log | grep 500 | wc -l
\`\`\`

## 注意

- 管道默认只传递标准输出，不包含标准错误。
- 需要时可先 \`2>&1\` 再管道处理。
`,gm=`---
command: reboot
function: 重启系统
order: 37
options: now, -f
---

# reboot 重启系统

\`reboot\` 用于立即或按调度重启系统，通常需要 root 权限。

## 基本用法

\`\`\`bash
sudo reboot
sudo shutdown -r now
\`\`\`

## 注意

- 重启前应确认服务状态和未保存数据。
- 生产环境建议先通知业务并设置维护窗口。
`,ym=`---
command: ">>"
function: 重定向输出到文件（追加写）
order: 28
options: 2>>, 1>>
---

# >> 追加重定向

\`>>\` 将命令输出追加到文件末尾，不会清空原有内容。

## 基本用法

\`\`\`bash
echo "new line" >> app.log
date >> app.log
\`\`\`

## 常见写法

- \`2>> err.log\`  将标准错误追加到日志。
- \`cmd >> all.log 2>&1\`  输出和错误统一追加。

## 注意

- 追加日志常用于 cron 和后台任务。
- 长期追加要配合日志轮转，避免文件无限增长。
`,vm=`---
command: ">"
function: 重定向输出到文件（覆盖写）
order: 27
options: 2>, 1>, &>
---

# > 覆盖重定向

\`>\` 把命令标准输出写入文件；若文件已存在会覆盖原内容。

## 基本用法

\`\`\`bash
echo "hello" > out.txt
ls -l > list.txt
\`\`\`

## 常见写法

- \`2> err.log\`  仅重定向标准错误。
- \`> out.log 2>&1\`  标准输出和错误都进同一文件。
- \`&> all.log\`  Bash 中同时重定向 stdout/stderr。

## 注意

- 覆盖操作不可逆，生产环境建议先确认路径。
`,_m=`---
command: resize2fs
function: 调整 ext2/ext3/ext4 文件系统大小
order: 44
options: 设备
---

# resize2fs 扩展文件系统

\`resize2fs\` 用于调整 ext 系列文件系统大小，常与 \`growpart\` 配合完成磁盘扩容。

## 基本用法

\`\`\`bash
# 查看磁盘名称是 vda 版本还是 nvme 版本
lsblk
# 用 vda 版本
sudo resize2fs /dev/vda1
# 用 nvme 版本
sudo resize2fs /dev/nvme0n1p1
\`\`\`

## 扩容流程示例

\`\`\`bash
lsblk
sudo growpart /dev/vda 1
sudo resize2fs /dev/vda1
df -h
\`\`\`

## 注意

- 仅适用于 ext2/ext3/ext4；XFS 需使用 \`xfs_growfs\`。
- 先确认分区已扩展，再执行文件系统扩容。
`,km=`---
command: shutdown
function: 关机或重启并可设置时间
order: 38
options: -h, -r, now
---

# shutdown 关机调度

\`shutdown\` 可执行关机或重启，并支持延时与广播通知。

## 基本用法

\`\`\`bash
sudo shutdown -h now
sudo shutdown -r now
sudo shutdown -h +10 "system maintenance"
\`\`\`

## 常用参数

- \`-h\`  关机（halt/poweroff）。
- \`-r\`  重启。
- \`now\`  立即执行。

## 注意

- 取消已计划的关机：\`sudo shutdown -c\`（系统支持时）。
`,wm=`---
command: sudo
function: 以其他用户身份执行命令（默认 root）
order: 34
options: -i, -u, -k
---

# sudo 提权执行

\`sudo\` 允许普通用户在授权范围内以管理员权限执行命令。

## 基本用法

\`\`\`bash
sudo apt update
sudo systemctl restart nginx
\`\`\`

## 常用参数

- \`-i\`  登录式 root shell。
- \`-u <user>\`  以指定用户执行命令。
- \`-k\`  使缓存凭据失效，下次强制重新输入密码。

## 注意

- sudo 权限由 \`/etc/sudoers\` 或 sudoers.d 控制。
- 不建议长期保持 root shell，按需提权更安全。
`,xm=`---
command: top
function: 实时查看进程与系统资源占用
order: 30
options: -d, -p
---

# top 进程监控

\`top\` 可实时查看 CPU、内存、负载及进程资源占用，常用于性能排查。

## 基本用法

\`\`\`bash
top
top -d 2
\`\`\`

## 常见操作（运行中）

- \`P\` 按 CPU 排序。
- \`M\` 按内存排序。
- \`k\` 结束指定进程。
- \`q\` 退出。

## 示例

\`\`\`bash
top -p 1
\`\`\`
`,Sm=`---
command: uname
function: 显示内核与系统信息
order: 33
options: -a, -r, -m
---

# uname 系统标识

\`uname\` 用于查看操作系统内核信息；\`uname -a\` 显示更完整信息。

## 基本用法

\`\`\`bash
uname
uname -a
uname -r
uname -m
\`\`\`

## 常用参数

- \`-a\`  显示全部常见字段。
- \`-r\`  显示内核版本。
- \`-m\`  显示机器架构（如 x86_64、aarch64）。
`,$m=`---
command: unset PATH
function: 删除当前 shell 的 PATH 变量
order: 42
options: 无
---

# unset PATH 清除变量

\`unset PATH\` 会移除当前 shell 的 PATH 环境变量，通常用于测试环境隔离。

## 基本用法

\`\`\`bash
unset PATH
\`\`\`

## 示例

\`\`\`bash
unset PATH
/bin/ls
\`\`\`

## 注意

- 清除 PATH 后直接输入 \`ls\`、\`grep\` 可能提示命令找不到。
- 如误操作，可执行 \`export PATH="/usr/bin:/bin"\` 先恢复基础命令路径。
`,Pm=`---
command: wc
function: 统计行数、单词数、字节数
order: 26
options: -l, -w, -c
---

# wc 文本计数

\`wc\`（word count）用于统计文件或输入流的行、词、字节等数量。

## 基本用法

\`\`\`bash
wc file.txt
wc -l file.txt
\`\`\`

## 常用参数

- \`-l\`  只统计行数。
- \`-w\`  只统计单词数。
- \`-c\`  只统计字节数。

## 示例

\`\`\`bash
ps aux | wc -l
wc -l *.log
\`\`\`
`,Am=`---
command: who
function: 查看当前登录用户会话
order: 21
options: -a, -H
---

# who 查看登录会话

\`who\` 用于显示当前系统中已登录的用户、终端和登录时间。

## 基本用法

\`\`\`bash
who
who -H
\`\`\`

## 常用参数

- \`-H\`  显示表头。
- \`-a\`  显示更完整信息（空闲、进程等，依实现而定）。

## 示例

\`\`\`bash
who
who | wc -l
\`\`\`

## 注意

- 容器或最小系统里输出可能较少。
- 远程登录排查可结合 \`w\`、\`last\` 一起看。
`,Tm=`---
command: whoami
function: 输出当前有效用户名
order: 22
options: 无
---

# whoami 当前用户

\`whoami\` 显示当前 shell 的有效用户（effective user），常用于确认是否已切到 root。

## 基本用法

\`\`\`bash
whoami
\`\`\`

## 示例

\`\`\`bash
sudo -s
whoami
\`\`\`

## 注意

- \`whoami\` 常等价于 \`id -un\`。
- 在 \`sudo\` 或 \`su\` 后，结果会变化。
`,Km=`---
title: 系统命令
order: 1
---`,Nm=`---
command: podman info
function: 查看环境信息（含 rootless）
order: 3
options: --format
---

# podman info

显示 Podman 运行时环境的详细信息，包括存储驱动、OS 版本、是否为 rootless 模式等。

## 基本用法

\`\`\`bash
podman info
podman info | grep rootless
\`\`\`

## 常用参数

- \`--format\`  按 Go 模板格式化输出，如 <span v-pre>\`--format '{{.Host.Security.Rootless}}'\`</span>。

## 示例

\`\`\`bash
podman info --format '{{.Host.OCIRuntime.Name}}'
\`\`\`
`,Im=`---
command: install
function: 安装方法
order: 1
options: macOS, Linux, 
---

# install podman

\`Podman\` 是兼容 OCI 的容器引擎，默认支持 **rootless** 模式，常作为 Docker 的替代方案。

## Ubuntu / Debian

\`\`\`bash
sudo apt update
sudo apt install -y podman
\`\`\`

安装后验证：

\`\`\`bash
podman --version
podman info
\`\`\`

## macOS

macOS 需初始化并启动虚拟机运行 Linux 容器：

\`\`\`bash
brew install podman   # 下载安装 podman
podman machine init   # 初始化podman虚拟机
podman machine start  # 启动podman虚拟机
\`\`\`

验证：

\`\`\`bash
podman --version
podman info
\`\`\`

## macOS 验证是否为 Rootless 容器
\`\`\`bash
podman info | grep rootless  # 查看是否 rootless

podman machine ssh
cat /etc/subuid
# 输出 core:100000:1000000 表示拥有 1000000 个用户池，比系统100000个还多
cat /etc/subgid
# 输出 core:100000:1000000 表示拥有 1000000 个用户组池，比系统100000个还多
\`\`\`\`

## 快速测试

\`\`\`bash
podman run --rm hello-world
\`\`\`

若输出欢迎信息，说明安装正常。

## 常见初始化（Linux Rootless）

首次使用 rootless 容器，建议确认 \`uidmap\` 与用户命名空间配置：

\`\`\`bash
sudo apt install -y uidmap  # Debian/Ubuntu
grep "^$(whoami):" /etc/subuid /etc/subgid
\`\`\`

如果未分配 \`subuid/subgid\`，可让管理员通过以下命令添加（以用户名 \`youruser\` 为例）：

\`\`\`bash
sudo usermod --add-subuids 100000-165535 ubuntu
sudo usermod --add-subgids 100000-165535 ubuntu
\`\`\`

补充完成后，重新登录使配置生效。
`,Lm=`---
command: podman machine init
function: 创建虚拟机
order: 8
options: --cpus, --memory, --disk-size
---

# podman machine init

在 macOS / Windows 上初始化一台用于运行容器的 Linux 虚拟机。

## 基本用法

\`\`\`bash
podman machine init
podman machine init --cpus 4 --memory 4096 --disk-size 60
\`\`\`

## 常用参数

- \`--cpus\`  分配 CPU 核心数。
- \`--memory\`  分配内存（MB）。
- \`--disk-size\`  磁盘大小（GB）。

## 注意

- 初始化后需执行 \`podman machine start\` 才能使用。
`,Cm=`---
command: podman machine ls
function: 列出所有虚拟机
order: 13
options: --format
---

# podman machine ls

列出本机所有 Podman 虚拟机及其状态、CPU、内存等信息。

## 基本用法

\`\`\`bash
podman machine ls
\`\`\`

## 常用参数

- \`--format\`  自定义输出格式，如 <span v-pre>\`--format '{{.Name}} {{.Running}}'\`</span>。
`,Om=`---
command: podman machine restart
function: 重启虚拟机
order: 11
options: 无
---

# podman machine restart

等价于先 stop 再 start，用于虚拟机异常或配置变更后刷新。

## 基本用法

\`\`\`bash
podman machine restart
\`\`\`
`,Em=`---
command: podman machine rm
function: 删除虚拟机
order: 15
options: -f
---

# podman machine rm

删除指定的 Podman 虚拟机及其磁盘映像。

## 基本用法

\`\`\`bash
podman machine rm
podman machine rm -f
\`\`\`

## 常用参数

- \`-f\`  跳过确认提示直接删除。

## 注意

- 删除后虚拟机内的数据不可恢复，需重新 \`podman machine init\`。
`,Bm=`---
command: podman machine ssh
function: 进入虚拟机
order: 14
options: 无
---

# podman machine ssh

通过 SSH 进入 Podman 虚拟机的 Linux 环境，可执行任意 Linux 命令。

## 基本用法

\`\`\`bash
podman machine ssh
podman machine ssh -- cat /etc/os-release
\`\`\`

## 注意

- 输入 \`exit\` 退出虚拟机回到宿主终端。
`,Dm=`---
command: podman machine start
function: 启动虚拟机
order: 9
options: 无
---

# podman machine start

启动已创建的 Podman 虚拟机，启动后即可正常运行容器命令。

## 基本用法

\`\`\`bash
podman machine start
\`\`\`
`,Mm=`---
command: podman machine status
function: 查看虚拟机状态
order: 12
options: 无
---

# podman machine status

查看默认虚拟机当前是否运行、已停止或其他状态。

## 基本用法

\`\`\`bash
podman machine status
\`\`\`

## 示例输出

\`\`\`
Running
\`\`\`
`,Vm=`---
command: podman machine stop
function: 停止虚拟机
order: 10
options: 无
---

# podman machine stop

关闭正在运行的 Podman 虚拟机，所有容器随之停止。

## 基本用法

\`\`\`bash
podman machine stop
\`\`\`
`,jm=`---
command: podman system df
function: 磁盘占用
order: 5
options: -v
---

# podman system df

统计镜像、容器、卷各自占用的磁盘空间，类似 \`docker system df\`。

## 基本用法

\`\`\`bash
podman system df
podman system df -v
\`\`\`

## 常用参数

- \`-v\`  显示各项的详细明细。

## 示例

\`\`\`bash
podman system df
\`\`\`
`,Hm=`---
command: podman system info
function: 系统信息
order: 4
options: --format
---

# podman system info

与 \`podman info\` 等价，显示主机、存储、注册源等运行时信息。

## 基本用法

\`\`\`bash
podman system info
\`\`\`

## 示例

\`\`\`bash
podman system info --format '{{.Store.GraphRoot}}'
\`\`\`
`,Rm=`---
command: podman system prune
function: 清理无用资源
order: 6
options: -a, -f, --volumes
---

# podman system prune

一键删除所有未使用的容器、镜像和（可选的）卷，释放磁盘空间。

## 基本用法

\`\`\`bash
podman system prune
podman system prune -a -f
\`\`\`

## 常用参数

- \`-a\`  同时移除所有未被容器引用的镜像（不仅 dangling）。
- \`-f\`  跳过确认提示。
- \`--volumes\`  同时清理未使用的卷。

## 注意

- 生产环境谨慎使用，可能删除仍需保留的镜像。
`,Fm=`---
command: podman system reset
function: 重置 podman（谨慎）
order: 7
options: -f
---

# podman system reset

删除所有容器、镜像、卷和存储数据，恢复到初始状态。

## 基本用法

\`\`\`bash
podman system reset
podman system reset -f
\`\`\`

## 注意

- 操作不可逆，执行前务必确认无重要数据。
- \`-f\` 跳过确认提示。
`,Um=`---
command: podman --version
function: 查看版本
order: 2
options: 无
---

# podman --version

输出当前安装的 Podman 版本号，确认是否安装成功或版本是否符合预期。

## 基本用法

\`\`\`bash
podman --version
\`\`\`

## 示例输出

\`\`\`
podman version 5.4.2
\`\`\`
`,qm=`# Podman 命令

Podman 使用笔记：常用命令、基础用法、容器管理等。

##

<CommandYamlTable />
`,zm=`---
command: '$(( ))'
function: 整数加减乘除与取余
order: 9
options:
---

# arithmetic 数学运算

Bash 内置算术扩展 \`$(( ))\`，支持 \`+\`、\`-\`、\`*\`、\`/\`、\`%\`（取余）及括号优先级。

## 示例

\`\`\`bash
a=10
b=3
echo $((a + b))   # 13
echo $((a - b))   # 7
echo $((a * b))   # 30
echo $((a / b))   # 3  整数除法
echo $((a % b))   # 1  取余
\`\`\`

## 赋值

\`\`\`bash
((sum = 1 + 2))
echo "$sum"
\`\`\`

## 注意

- \`$(( ))\` 内变量可写 \`a\` 或 \`$a\`。
- 需要浮点运算时用 \`bc\`、\`awk\` 等外部工具。
`,Gm=`---
command: '$0 $1 $# $@'
function: 位置参数与脚本名等内置变量
order: 5
options:
---

# $0 $1 内置变量

常用内置变量用于脚本名、参数个数与参数列表。

## 示例脚本

\`\`\`bash
#!/bin/bash
echo "脚本路径/名: $0"
echo "第一个参数: \${1:-无}"
echo "参数个数: $#"
echo "所有参数: $@"
\`\`\`

## 常见变量

| 变量 | 含义 |
|------|------|
| \`$0\` | 脚本名或调用时的命令串 |
| \`$1\`…\`$9\` | 第 n 个位置参数 |
| \`$#\` | 位置参数个数 |
| \`$@\` | 所有参数，保持分词 |
| \`$*\` | 所有参数，作为一个词（受 IFS 影响） |
| \`$?\` | 上一条命令退出码 |
| \`$$\` | 当前 shell 进程号 |
`,Wm=`---
command: '# / :'
function: 单行与行内注释、空命令占位
order: 3
options:
---

# ：注释

Shell 中常用 \`#\` 写注释；\`:\` 是**空命令**，可作占位或「伪注释」行。

## \`#\` 单行注释

\`\`\`bash
# 整行都是注释
echo hello  # 行尾注释
\`\`\`

## \`:\` 空命令

\`\`\`bash
: "这里可以放说明文字，不产生副作用"
: \${VAR:=default}   # 常用于参数默认值等模式
\`\`\`

## 注意

- 脚本维护优先用 \`#\`，语义更清晰。
- 多行大段说明用多个 \`#\` 行，或 here-doc 仅作文档块（较少用）。
`,Jm=`---
command: for
function: 遍历列表或 C 风格循环
order: 7
options:
---

# for 循环

\`for\` 可遍历单词列表，或在 bash 中使用 C 风格算术循环。

## 遍历列表

\`\`\`bash
for f in *.txt; do
  echo "$f"
done
\`\`\`

## C 风格（bash）

\`\`\`bash
for ((i = 0; i < 5; i++)); do
  echo "$i"
done
\`\`\`

## 注意

- 未加引号的 \`$@\` / \`$*\` 在 \`in\` 后展开方式不同，复杂场景建议显式写 \`"$@"\`。
`,Ym=`---
command: function / name()
function: 定义可复用函数
order: 10
options:
---

# function 函数

Bash 可用 \`function name { }\` 或 \`name() { }\` 定义函数。

## 两种写法

\`\`\`bash
function greet() {
  echo "你好, $1"
}

sum() {
  echo $(($1 + $2))
}

greet "世界"
sum 3 5
\`\`\`

## 返回值

- 函数内用 \`return N\` 设置退出码（0–255），**不是**数学返回值。
- 需要「输出结果」时用 \`echo\` 由调用方捕获：\`result=$(sum 1 2)\`。

## 注意

- 函数与当前 shell 共享变量作用域，局部变量用 \`local\`（在函数内）。
`,Qm=`---
command: if
function: 条件分支
order: 6
options:
---

# if 条件

\`if\` 根据命令**退出码**判断：0 为真，非 0 为假。数值与字符串比较常用 \`[[ ]]\` 或 \`test\` / \`[ ]\`。

## 结构

\`\`\`bash
if [[ "$age" -ge 18 ]]; then
  echo "成年"
elif [[ "$age" -ge 12 ]]; then
  echo "少年"
else
  echo "儿童"
fi
\`\`\`

## test 写法（POSIX）

\`\`\`bash
if [ "$age" -ge 18 ]; then
  echo ok
fi
\`\`\`

## 注意

- \`[[ ]]\` 是 bash 关键字，功能比 \`[ ]\` 更丰富（如模式匹配）。
- 变量比较务必加引号，避免空值或未拆词问题。
`,Xm=`---
title: Bash 基础语法
order: 1
---
`,Zm='---\ncommand: \'&& ||\'\nfunction: 短路逻辑与命令连接\norder: 11\noptions:\n---\n\n# `&& ||` 逻辑判断\n\n- `cmd1 && cmd2`：`cmd1` **成功**（退出码 0）才执行 `cmd2`。\n- `cmd1 || cmd2`：`cmd1` **失败**（非 0）才执行 `cmd2`。\n\n## 示例\n\n```bash\n[[ -f /etc/hosts ]] && echo "hosts 存在"\ngrep -q root /etc/passwd || echo "未找到 root"\n```\n\n## 组合\n\n```bash\nmkdir -p tmp && cd tmp && touch a.txt\n```\n\n## 注意\n\n- 与 `if` 中的 `[[ A && B ]]` 不同：这里是**两个命令**的短路求值。\n- 不要依赖 `a && b || c` 充当 if-else，边界情况可能出错；复杂逻辑用 `if`。\n',eh=`---
command: read
function: 从标准输入读取一行到变量
order: 2
options: -p, -s, -t, -n
---

# read 读取输入

\`read\` 从终端（或管道）读入一行，拆成字段赋给变量。

## 基本用法

\`\`\`bash
read name
echo "你好, $name"
\`\`\`

## 常用参数

- \`-p "提示"\`  先打印提示再读入。
- \`-s\`  静默（密码输入不回显）。
- \`-t N\`  超时秒数。
- \`-n N\`  读满 N 个字符即结束。

## 示例

\`\`\`bash
read -p "请输入年龄: " age
echo "age=$age"
\`\`\`
`,nh=`---
command: '#!/bin/bash'
function: 指定脚本由 bash 解释执行
order: 1
options: env
---

# Shebang 首行格式

脚本首行写 **shebang**，告诉系统用哪个解释器执行该文件。

## 写法

\`\`\`bash
#!/bin/bash
\`\`\`

## 可移植写法（PATH 中查找 bash）

\`\`\`bash
#!/usr/bin/env bash
\`\`\`

## 注意

- 需有执行权限：\`chmod +x script.sh\`，再 \`./script.sh\`。
- 无 shebang 时，若用 \`bash script.sh\` 显式调用，首行可不写。
`,th=`---
command: name=value
function: 变量赋值与引用
order: 4
options:
---

# variable 变量

Bash 变量**赋值等号两侧不能有空格**；取值用 \`$name\` 或 \`\${name}\`。

## 赋值与引用

\`\`\`bash
age=18
echo "$age"
echo "\${age}"
\`\`\`

## 只读与导出

\`\`\`bash
readonly PI=3.14
export PATH="$HOME/bin:$PATH"
\`\`\`

## 注意

- 双引号内会进行变量展开；单引号内原样输出。
- \`age = 18\` 会被解析为命令 \`age\`，参数 \`=\`、\`18\`，通常报错。
`,sh=`---
command: while
function: 条件为真时重复执行
order: 8
options:
---

# while 循环

\`while\` 在条件命令**成功**（退出码 0）时重复执行循环体。

## 基本用法

\`\`\`bash
n=0
while [[ $n -lt 3 ]]; do
  echo "n=$n"
  n=$((n + 1))
done
\`\`\`

## 按行读文件

\`\`\`bash
while IFS= read -r line; do
  echo "$line"
done < input.txt
\`\`\`

## 注意

- 避免在循环中反复调用外部命令导致性能问题；能用内置算术尽量用 \`$(( ))\`。
`,ih=`# Shell 命令

Shell 常用命令笔记：基础用法、快捷技巧、终端操作等。

##

<CommandYamlTable />
`,oh=`# 示例：常见 Bug 类型

本文为示例，可替换为实际笔记。

边界条件、空指针、并发、兼容性等是常见问题来源。
`,ah=`# 入门示例

常见 Bug 类型简介。

## 小节

- [示例：常见 Bug 类型](01-example)
`,rh=`# 测试与 Bug

软件测试与 Bug 榜单笔记。

## 章节

- [入门示例](/testing/book-bug-test/example/01-example) — 常见 Bug 类型
`,lh=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# 软件测试Bug榜单

本分类收录软件测试与 Bug 榜单相关笔记。

## 书目

- [测试与 Bug](/testing/book-bug-test/) — 常见 Bug 类型、示例

<CategoryBooks />
`,ch="# 示例：组件与响应式\n\n本文为示例，可替换为实际笔记。\n\nVue 3 组合式 API：`ref`、`reactive`、`computed` 等。\n",uh=`# 入门示例

组件与响应式简介。

## 小节

- [示例：组件与响应式](01-example)
`,dh=`# Vue 基础

Vue 前端开发笔记。

## 章节

- [入门示例](/vue/book-vue/example/01-example) — 组件与响应式
`,ph=`---
prev: false
next: false
sidebar: false
aside: false
pageClass: vp-category-page
---

# Vue 前端开发

本分类收录 Vue 前端开发相关笔记。

## 书目

- [Vue 基础](/vue/book-vue/) — 组件与响应式、示例

<CategoryBooks />
`,wt=Symbol.for("yaml.alias"),lt=Symbol.for("yaml.document"),Pe=Symbol.for("yaml.map"),xs=Symbol.for("yaml.pair"),he=Symbol.for("yaml.scalar"),We=Symbol.for("yaml.seq"),oe=Symbol.for("yaml.node.type"),Oe=t=>!!t&&typeof t=="object"&&t[oe]===wt,Dn=t=>!!t&&typeof t=="object"&&t[oe]===lt,hn=t=>!!t&&typeof t=="object"&&t[oe]===Pe,Z=t=>!!t&&typeof t=="object"&&t[oe]===xs,W=t=>!!t&&typeof t=="object"&&t[oe]===he,fn=t=>!!t&&typeof t=="object"&&t[oe]===We;function Q(t){if(t&&typeof t=="object")switch(t[oe]){case Pe:case We:return!0}return!1}function X(t){if(t&&typeof t=="object")switch(t[oe]){case wt:case Pe:case he:case We:return!0}return!1}const Ss=t=>(W(t)||Q(t))&&!!t.anchor,Ke=Symbol("break visit"),mh=Symbol("skip children"),an=Symbol("remove node");function Je(t,e){const n=hh(e);Dn(t)?He(null,t.contents,n,Object.freeze([t]))===an&&(t.contents=null):He(null,t,n,Object.freeze([]))}Je.BREAK=Ke;Je.SKIP=mh;Je.REMOVE=an;function He(t,e,n,s){const i=fh(t,e,n,s);if(X(i)||Z(i))return bh(t,s,i),He(t,i,n,s);if(typeof i!="symbol"){if(Q(e)){s=Object.freeze(s.concat(e));for(let o=0;o<e.items.length;++o){const a=He(o,e.items[o],n,s);if(typeof a=="number")o=a-1;else{if(a===Ke)return Ke;a===an&&(e.items.splice(o,1),o-=1)}}}else if(Z(e)){s=Object.freeze(s.concat(e));const o=He("key",e.key,n,s);if(o===Ke)return Ke;o===an&&(e.key=null);const a=He("value",e.value,n,s);if(a===Ke)return Ke;a===an&&(e.value=null)}}return i}function hh(t){return typeof t=="object"&&(t.Collection||t.Node||t.Value)?Object.assign({Alias:t.Node,Map:t.Node,Scalar:t.Node,Seq:t.Node},t.Value&&{Map:t.Value,Scalar:t.Value,Seq:t.Value},t.Collection&&{Map:t.Collection,Seq:t.Collection},t):t}function fh(t,e,n,s){if(typeof n=="function")return n(t,e,s);if(hn(e))return n.Map?.(t,e,s);if(fn(e))return n.Seq?.(t,e,s);if(Z(e))return n.Pair?.(t,e,s);if(W(e))return n.Scalar?.(t,e,s);if(Oe(e))return n.Alias?.(t,e,s)}function bh(t,e,n){const s=e[e.length-1];if(Q(s))s.items[t]=n;else if(Z(s))t==="key"?s.key=n:s.value=n;else if(Dn(s))s.contents=n;else{const i=Oe(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const gh={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},yh=t=>t.replace(/[!,[\]{}]/g,e=>gh[e]);class ne{constructor(e,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},ne.defaultYaml,e),this.tags=Object.assign({},ne.defaultTags,n)}clone(){const e=new ne(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new ne(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:ne.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},ne.defaultTags);break}return e}add(e,n){this.atNextDocument&&(this.yaml={explicit:ne.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},ne.defaultTags),this.atNextDocument=!1);const s=e.trim().split(/[ \t]+/),i=s.shift();switch(i){case"%TAG":{if(s.length!==2&&(n(0,"%TAG directive should contain exactly two parts"),s.length<2))return!1;const[o,a]=s;return this.tags[o]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,s.length!==1)return n(0,"%YAML directive should contain exactly one part"),!1;const[o]=s;if(o==="1.1"||o==="1.2")return this.yaml.version=o,!0;{const a=/^\d+\.\d+$/.test(o);return n(6,`Unsupported YAML version ${o}`,a),!1}}default:return n(0,`Unknown directive ${i}`,!0),!1}}tagName(e,n){if(e==="!")return"!";if(e[0]!=="!")return n(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(n(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&n("Verbatim tags must end with a >"),a)}const[,s,i]=e.match(/^(.*!)([^!]*)$/s);i||n(`The ${e} tag has no suffix`);const o=this.tags[s];if(o)try{return o+decodeURIComponent(i)}catch(a){return n(String(a)),null}return s==="!"?e:(n(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[n,s]of Object.entries(this.tags))if(e.startsWith(s))return n+yh(e.substring(s.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const n=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],s=Object.entries(this.tags);let i;if(e&&s.length>0&&X(e.contents)){const o={};Je(e.contents,(a,r)=>{X(r)&&r.tag&&(o[r.tag]=!0)}),i=Object.keys(o)}else i=[];for(const[o,a]of s)o==="!!"&&a==="tag:yaml.org,2002:"||(!e||i.some(r=>r.startsWith(a)))&&n.push(`%TAG ${o} ${a}`);return n.join(`
`)}}ne.defaultYaml={explicit:!1,version:"1.2"};ne.defaultTags={"!!":"tag:yaml.org,2002:"};function $s(t){if(/[\x00-\x19\s,[\]{}]/.test(t)){const n=`Anchor must not contain whitespace or control characters: ${JSON.stringify(t)}`;throw new Error(n)}return!0}function Ps(t){const e=new Set;return Je(t,{Value(n,s){s.anchor&&e.add(s.anchor)}}),e}function As(t,e){for(let n=1;;++n){const s=`${t}${n}`;if(!e.has(s))return s}}function vh(t,e){const n=[],s=new Map;let i=null;return{onAnchor:o=>{n.push(o),i??(i=Ps(t));const a=As(e,i);return i.add(a),a},setAnchors:()=>{for(const o of n){const a=s.get(o);if(typeof a=="object"&&a.anchor&&(W(a.node)||Q(a.node)))a.node.anchor=a.anchor;else{const r=new Error("Failed to resolve repeated object (this should not happen)");throw r.source=o,r}}},sourceObjects:s}}function Re(t,e,n,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let i=0,o=s.length;i<o;++i){const a=s[i],r=Re(t,s,String(i),a);r===void 0?delete s[i]:r!==a&&(s[i]=r)}else if(s instanceof Map)for(const i of Array.from(s.keys())){const o=s.get(i),a=Re(t,s,i,o);a===void 0?s.delete(i):a!==o&&s.set(i,a)}else if(s instanceof Set)for(const i of Array.from(s)){const o=Re(t,s,i,i);o===void 0?s.delete(i):o!==i&&(s.delete(i),s.add(o))}else for(const[i,o]of Object.entries(s)){const a=Re(t,s,i,o);a===void 0?delete s[i]:a!==o&&(s[i]=a)}return t.call(e,n,s)}function ie(t,e,n){if(Array.isArray(t))return t.map((s,i)=>ie(s,String(i),n));if(t&&typeof t.toJSON=="function"){if(!n||!Ss(t))return t.toJSON(e,n);const s={aliasCount:0,count:1,res:void 0};n.anchors.set(t,s),n.onCreate=o=>{s.res=o,delete n.onCreate};const i=t.toJSON(e,n);return n.onCreate&&n.onCreate(i),i}return typeof t=="bigint"&&!n?.keep?Number(t):t}class xt{constructor(e){Object.defineProperty(this,oe,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:n,maxAliasCount:s,onAnchor:i,reviver:o}={}){if(!Dn(e))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:e,keep:!0,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},r=ie(this,"",a);if(typeof i=="function")for(const{count:l,res:c}of a.anchors.values())i(c,l);return typeof o=="function"?Re(o,{"":r},"",r):r}}class St extends xt{constructor(e){super(wt),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,n){let s;n?.aliasResolveCache?s=n.aliasResolveCache:(s=[],Je(e,{Node:(o,a)=>{(Oe(a)||Ss(a))&&s.push(a)}}),n&&(n.aliasResolveCache=s));let i;for(const o of s){if(o===this)break;o.anchor===this.source&&(i=o)}return i}toJSON(e,n){if(!n)return{source:this.source};const{anchors:s,doc:i,maxAliasCount:o}=n,a=this.resolve(i,n);if(!a){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let r=s.get(a);if(r||(ie(a,null,n),r=s.get(a)),r?.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(o>=0&&(r.count+=1,r.aliasCount===0&&(r.aliasCount=An(i,a,s)),r.count*r.aliasCount>o)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return r.res}toString(e,n,s){const i=`*${this.source}`;if(e){if($s(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const o=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(o)}if(e.implicitKey)return`${i} `}return i}}function An(t,e,n){if(Oe(e)){const s=e.resolve(t),i=n&&s&&n.get(s);return i?i.count*i.aliasCount:0}else if(Q(e)){let s=0;for(const i of e.items){const o=An(t,i,n);o>s&&(s=o)}return s}else if(Z(e)){const s=An(t,e.key,n),i=An(t,e.value,n);return Math.max(s,i)}return 1}const Ts=t=>!t||typeof t!="function"&&typeof t!="object";class H extends xt{constructor(e){super(he),this.value=e}toJSON(e,n){return n?.keep?this.value:ie(this.value,e,n)}toString(){return String(this.value)}}H.BLOCK_FOLDED="BLOCK_FOLDED";H.BLOCK_LITERAL="BLOCK_LITERAL";H.PLAIN="PLAIN";H.QUOTE_DOUBLE="QUOTE_DOUBLE";H.QUOTE_SINGLE="QUOTE_SINGLE";const _h="tag:yaml.org,2002:";function kh(t,e,n){if(e){const s=n.filter(o=>o.tag===e),i=s.find(o=>!o.format)??s[0];if(!i)throw new Error(`Tag ${e} not found`);return i}return n.find(s=>s.identify?.(t)&&!s.format)}function ln(t,e,n){if(Dn(t)&&(t=t.contents),X(t))return t;if(Z(t)){const d=n.schema[Pe].createNode?.(n.schema,null,n);return d.items.push(t),d}(t instanceof String||t instanceof Number||t instanceof Boolean||typeof BigInt<"u"&&t instanceof BigInt)&&(t=t.valueOf());const{aliasDuplicateObjects:s,onAnchor:i,onTagObj:o,schema:a,sourceObjects:r}=n;let l;if(s&&t&&typeof t=="object"){if(l=r.get(t),l)return l.anchor??(l.anchor=i(t)),new St(l.anchor);l={anchor:null,node:null},r.set(t,l)}e?.startsWith("!!")&&(e=_h+e.slice(2));let c=kh(t,e,a.tags);if(!c){if(t&&typeof t.toJSON=="function"&&(t=t.toJSON()),!t||typeof t!="object"){const d=new H(t);return l&&(l.node=d),d}c=t instanceof Map?a[Pe]:Symbol.iterator in Object(t)?a[We]:a[Pe]}o&&(o(c),delete n.onTagObj);const g=c?.createNode?c.createNode(n.schema,t,n):typeof c?.nodeClass?.from=="function"?c.nodeClass.from(n.schema,t,n):new H(t);return e?g.tag=e:c.default||(g.tag=c.tag),l&&(l.node=g),g}function In(t,e,n){let s=n;for(let i=e.length-1;i>=0;--i){const o=e[i];if(typeof o=="number"&&Number.isInteger(o)&&o>=0){const a=[];a[o]=s,s=a}else s=new Map([[o,s]])}return ln(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:t,sourceObjects:new Map})}const tn=t=>t==null||typeof t=="object"&&!!t[Symbol.iterator]().next().done;class Ks extends xt{constructor(e,n){super(e),Object.defineProperty(this,"schema",{value:n,configurable:!0,enumerable:!1,writable:!0})}clone(e){const n=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(n.schema=e),n.items=n.items.map(s=>X(s)||Z(s)?s.clone(e):s),this.range&&(n.range=this.range.slice()),n}addIn(e,n){if(tn(e))this.add(n);else{const[s,...i]=e,o=this.get(s,!0);if(Q(o))o.addIn(i,n);else if(o===void 0&&this.schema)this.set(s,In(this.schema,i,n));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}deleteIn(e){const[n,...s]=e;if(s.length===0)return this.delete(n);const i=this.get(n,!0);if(Q(i))return i.deleteIn(s);throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}getIn(e,n){const[s,...i]=e,o=this.get(s,!0);return i.length===0?!n&&W(o)?o.value:o:Q(o)?o.getIn(i,n):void 0}hasAllNullValues(e){return this.items.every(n=>{if(!Z(n))return!1;const s=n.value;return s==null||e&&W(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[n,...s]=e;if(s.length===0)return this.has(n);const i=this.get(n,!0);return Q(i)?i.hasIn(s):!1}setIn(e,n){const[s,...i]=e;if(i.length===0)this.set(s,n);else{const o=this.get(s,!0);if(Q(o))o.setIn(i,n);else if(o===void 0&&this.schema)this.set(s,In(this.schema,i,n));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}}const wh=t=>t.replace(/^(?!$)(?: $)?/gm,"#");function be(t,e){return/^\n+$/.test(t)?t.substring(1):e?t.replace(/^(?! *$)/gm,e):t}const Ne=(t,e,n)=>t.endsWith(`
`)?be(n,e):n.includes(`
`)?`
`+be(n,e):(t.endsWith(" ")?"":" ")+n,Ns="flow",ct="block",Tn="quoted";function Mn(t,e,n="flow",{indentAtStart:s,lineWidth:i=80,minContentWidth:o=20,onFold:a,onOverflow:r}={}){if(!i||i<0)return t;i<o&&(o=0);const l=Math.max(1+o,1+i-e.length);if(t.length<=l)return t;const c=[],g={};let d=i-e.length;typeof s=="number"&&(s>i-Math.max(2,o)?c.push(0):d=i-s);let f,_,w=!1,b=-1,v=-1,$=-1;n===ct&&(b=zt(t,b,e.length),b!==-1&&(d=b+l));for(let P;P=t[b+=1];){if(n===Tn&&P==="\\"){switch(v=b,t[b+1]){case"x":b+=3;break;case"u":b+=5;break;case"U":b+=9;break;default:b+=1}$=b}if(P===`
`)n===ct&&(b=zt(t,b,e.length)),d=b+e.length+l,f=void 0;else{if(P===" "&&_&&_!==" "&&_!==`
`&&_!=="	"){const C=t[b+1];C&&C!==" "&&C!==`
`&&C!=="	"&&(f=b)}if(b>=d)if(f)c.push(f),d=f+l,f=void 0;else if(n===Tn){for(;_===" "||_==="	";)_=P,P=t[b+=1],w=!0;const C=b>$+1?b-2:v-1;if(g[C])return t;c.push(C),g[C]=!0,d=C+l,f=void 0}else w=!0}_=P}if(w&&r&&r(),c.length===0)return t;a&&a();let x=t.slice(0,c[0]);for(let P=0;P<c.length;++P){const C=c[P],M=c[P+1]||t.length;C===0?x=`
${e}${t.slice(0,M)}`:(n===Tn&&g[C]&&(x+=`${t[C]}\\`),x+=`
${e}${t.slice(C+1,M)}`)}return x}function zt(t,e,n){let s=e,i=e+1,o=t[i];for(;o===" "||o==="	";)if(e<i+n)o=t[++e];else{do o=t[++e];while(o&&o!==`
`);s=e,i=e+1,o=t[i]}return s}const Vn=(t,e)=>({indentAtStart:e?t.indent.length:t.indentAtStart,lineWidth:t.options.lineWidth,minContentWidth:t.options.minContentWidth}),jn=t=>/^(%|---|\.\.\.)/m.test(t);function xh(t,e,n){if(!e||e<0)return!1;const s=e-n,i=t.length;if(i<=s)return!1;for(let o=0,a=0;o<i;++o)if(t[o]===`
`){if(o-a>s)return!0;if(a=o+1,i-a<=s)return!1}return!0}function rn(t,e){const n=JSON.stringify(t);if(e.options.doubleQuotedAsJSON)return n;const{implicitKey:s}=e,i=e.options.doubleQuotedMinMultiLineLength,o=e.indent||(jn(t)?"  ":"");let a="",r=0;for(let l=0,c=n[l];c;c=n[++l])if(c===" "&&n[l+1]==="\\"&&n[l+2]==="n"&&(a+=n.slice(r,l)+"\\ ",l+=1,r=l,c="\\"),c==="\\")switch(n[l+1]){case"u":{a+=n.slice(r,l);const g=n.substr(l+2,4);switch(g){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:g.substr(0,2)==="00"?a+="\\x"+g.substr(2):a+=n.substr(l,6)}l+=5,r=l+1}break;case"n":if(s||n[l+2]==='"'||n.length<i)l+=1;else{for(a+=n.slice(r,l)+`

`;n[l+2]==="\\"&&n[l+3]==="n"&&n[l+4]!=='"';)a+=`
`,l+=2;a+=o,n[l+2]===" "&&(a+="\\"),l+=1,r=l+1}break;default:l+=1}return a=r?a+n.slice(r):n,s?a:Mn(a,o,Tn,Vn(e,!1))}function ut(t,e){if(e.options.singleQuote===!1||e.implicitKey&&t.includes(`
`)||/[ \t]\n|\n[ \t]/.test(t))return rn(t,e);const n=e.indent||(jn(t)?"  ":""),s="'"+t.replace(/'/g,"''").replace(/\n+/g,`$&
${n}`)+"'";return e.implicitKey?s:Mn(s,n,Ns,Vn(e,!1))}function Fe(t,e){const{singleQuote:n}=e.options;let s;if(n===!1)s=rn;else{const i=t.includes('"'),o=t.includes("'");i&&!o?s=ut:o&&!i?s=rn:s=n?ut:rn}return s(t,e)}let dt;try{dt=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{dt=/\n+(?!\n|$)/g}function Kn({comment:t,type:e,value:n},s,i,o){const{blockQuote:a,commentString:r,lineWidth:l}=s.options;if(!a||/\n[\t ]+$/.test(n))return Fe(n,s);const c=s.indent||(s.forceBlockIndent||jn(n)?"  ":""),g=a==="literal"?!0:a==="folded"||e===H.BLOCK_FOLDED?!1:e===H.BLOCK_LITERAL?!0:!xh(n,l,c.length);if(!n)return g?`|
`:`>
`;let d,f;for(f=n.length;f>0;--f){const M=n[f-1];if(M!==`
`&&M!=="	"&&M!==" ")break}let _=n.substring(f);const w=_.indexOf(`
`);w===-1?d="-":n===_||w!==_.length-1?(d="+",o&&o()):d="",_&&(n=n.slice(0,-_.length),_[_.length-1]===`
`&&(_=_.slice(0,-1)),_=_.replace(dt,`$&${c}`));let b=!1,v,$=-1;for(v=0;v<n.length;++v){const M=n[v];if(M===" ")b=!0;else if(M===`
`)$=v;else break}let x=n.substring(0,$<v?$+1:v);x&&(n=n.substring(x.length),x=x.replace(/\n+/g,`$&${c}`));let C=(b?c?"2":"1":"")+d;if(t&&(C+=" "+r(t.replace(/ ?[\r\n]+/g," ")),i&&i()),!g){const M=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let V=!1;const q=Vn(s,!0);a!=="folded"&&e!==H.BLOCK_FOLDED&&(q.onOverflow=()=>{V=!0});const N=Mn(`${x}${M}${_}`,c,ct,q);if(!V)return`>${C}
${c}${N}`}return n=n.replace(/\n+/g,`$&${c}`),`|${C}
${c}${x}${n}${_}`}function Sh(t,e,n,s){const{type:i,value:o}=t,{actualString:a,implicitKey:r,indent:l,indentStep:c,inFlow:g}=e;if(r&&o.includes(`
`)||g&&/[[\]{},]/.test(o))return Fe(o,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o))return r||g||!o.includes(`
`)?Fe(o,e):Kn(t,e,n,s);if(!r&&!g&&i!==H.PLAIN&&o.includes(`
`))return Kn(t,e,n,s);if(jn(o)){if(l==="")return e.forceBlockIndent=!0,Kn(t,e,n,s);if(r&&l===c)return Fe(o,e)}const d=o.replace(/\n+/g,`$&
${l}`);if(a){const f=b=>b.default&&b.tag!=="tag:yaml.org,2002:str"&&b.test?.test(d),{compat:_,tags:w}=e.doc.schema;if(w.some(f)||_?.some(f))return Fe(o,e)}return r?d:Mn(d,l,Ns,Vn(e,!1))}function $t(t,e,n,s){const{implicitKey:i,inFlow:o}=e,a=typeof t.value=="string"?t:Object.assign({},t,{value:String(t.value)});let{type:r}=t;r!==H.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(r=H.QUOTE_DOUBLE);const l=g=>{switch(g){case H.BLOCK_FOLDED:case H.BLOCK_LITERAL:return i||o?Fe(a.value,e):Kn(a,e,n,s);case H.QUOTE_DOUBLE:return rn(a.value,e);case H.QUOTE_SINGLE:return ut(a.value,e);case H.PLAIN:return Sh(a,e,n,s);default:return null}};let c=l(r);if(c===null){const{defaultKeyType:g,defaultStringType:d}=e.options,f=i&&g||d;if(c=l(f),c===null)throw new Error(`Unsupported default string type ${f}`)}return c}function Is(t,e){const n=Object.assign({blockQuote:!0,commentString:wh,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},t.schema.toStringOptions,e);let s;switch(n.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:t,flowCollectionPadding:n.flowCollectionPadding?" ":"",indent:"",indentStep:typeof n.indent=="number"?" ".repeat(n.indent):"  ",inFlow:s,options:n}}function $h(t,e){if(e.tag){const i=t.filter(o=>o.tag===e.tag);if(i.length>0)return i.find(o=>o.format===e.format)??i[0]}let n,s;if(W(e)){s=e.value;let i=t.filter(o=>o.identify?.(s));if(i.length>1){const o=i.filter(a=>a.test);o.length>0&&(i=o)}n=i.find(o=>o.format===e.format)??i.find(o=>!o.format)}else s=e,n=t.find(i=>i.nodeClass&&s instanceof i.nodeClass);if(!n){const i=s?.constructor?.name??(s===null?"null":typeof s);throw new Error(`Tag not resolved for ${i} value`)}return n}function Ph(t,e,{anchors:n,doc:s}){if(!s.directives)return"";const i=[],o=(W(t)||Q(t))&&t.anchor;o&&$s(o)&&(n.add(o),i.push(`&${o}`));const a=t.tag??(e.default?null:e.tag);return a&&i.push(s.directives.tagString(a)),i.join(" ")}function ze(t,e,n,s){if(Z(t))return t.toString(e,n,s);if(Oe(t)){if(e.doc.directives)return t.toString(e);if(e.resolvedAliases?.has(t))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(t):e.resolvedAliases=new Set([t]),t=t.resolve(e.doc)}let i;const o=X(t)?t:e.doc.createNode(t,{onTagObj:l=>i=l});i??(i=$h(e.doc.schema.tags,o));const a=Ph(o,i,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const r=typeof i.stringify=="function"?i.stringify(o,e,n,s):W(o)?$t(o,e,n,s):o.toString(e,n,s);return a?W(o)||r[0]==="{"||r[0]==="["?`${a} ${r}`:`${a}
${e.indent}${r}`:r}function Ah({key:t,value:e},n,s,i){const{allNullValues:o,doc:a,indent:r,indentStep:l,options:{commentString:c,indentSeq:g,simpleKeys:d}}=n;let f=X(t)&&t.comment||null;if(d){if(f)throw new Error("With simple keys, key nodes cannot have comments");if(Q(t)||!X(t)&&typeof t=="object"){const q="With simple keys, collection cannot be used as a key value";throw new Error(q)}}let _=!d&&(!t||f&&e==null&&!n.inFlow||Q(t)||(W(t)?t.type===H.BLOCK_FOLDED||t.type===H.BLOCK_LITERAL:typeof t=="object"));n=Object.assign({},n,{allNullValues:!1,implicitKey:!_&&(d||!o),indent:r+l});let w=!1,b=!1,v=ze(t,n,()=>w=!0,()=>b=!0);if(!_&&!n.inFlow&&v.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");_=!0}if(n.inFlow){if(o||e==null)return w&&s&&s(),v===""?"?":_?`? ${v}`:v}else if(o&&!d||e==null&&_)return v=`? ${v}`,f&&!w?v+=Ne(v,n.indent,c(f)):b&&i&&i(),v;w&&(f=null),_?(f&&(v+=Ne(v,n.indent,c(f))),v=`? ${v}
${r}:`):(v=`${v}:`,f&&(v+=Ne(v,n.indent,c(f))));let $,x,P;X(e)?($=!!e.spaceBefore,x=e.commentBefore,P=e.comment):($=!1,x=null,P=null,e&&typeof e=="object"&&(e=a.createNode(e))),n.implicitKey=!1,!_&&!f&&W(e)&&(n.indentAtStart=v.length+1),b=!1,!g&&l.length>=2&&!n.inFlow&&!_&&fn(e)&&!e.flow&&!e.tag&&!e.anchor&&(n.indent=n.indent.substring(2));let C=!1;const M=ze(e,n,()=>C=!0,()=>b=!0);let V=" ";if(f||$||x){if(V=$?`
`:"",x){const q=c(x);V+=`
${be(q,n.indent)}`}M===""&&!n.inFlow?V===`
`&&P&&(V=`

`):V+=`
${n.indent}`}else if(!_&&Q(e)){const q=M[0],N=M.indexOf(`
`),J=N!==-1,de=n.inFlow??e.flow??e.items.length===0;if(J||!de){let xe=!1;if(J&&(q==="&"||q==="!")){let Y=M.indexOf(" ");q==="&"&&Y!==-1&&Y<N&&M[Y+1]==="!"&&(Y=M.indexOf(" ",Y+1)),(Y===-1||N<Y)&&(xe=!0)}xe||(V=`
${n.indent}`)}}else(M===""||M[0]===`
`)&&(V="");return v+=V+M,n.inFlow?C&&s&&s():P&&!C?v+=Ne(v,n.indent,c(P)):b&&i&&i(),v}function Ls(t,e){(t==="debug"||t==="warn")&&console.warn(e)}const kn="<<",ye={identify:t=>t===kn||typeof t=="symbol"&&t.description===kn,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new H(Symbol(kn)),{addToJSMap:Cs}),stringify:()=>kn},Th=(t,e)=>(ye.identify(e)||W(e)&&(!e.type||e.type===H.PLAIN)&&ye.identify(e.value))&&t?.doc.schema.tags.some(n=>n.tag===ye.tag&&n.default);function Cs(t,e,n){if(n=t&&Oe(n)?n.resolve(t.doc):n,fn(n))for(const s of n.items)Yn(t,e,s);else if(Array.isArray(n))for(const s of n)Yn(t,e,s);else Yn(t,e,n)}function Yn(t,e,n){const s=t&&Oe(n)?n.resolve(t.doc):n;if(!hn(s))throw new Error("Merge sources must be maps or map aliases");const i=s.toJSON(null,t,Map);for(const[o,a]of i)e instanceof Map?e.has(o)||e.set(o,a):e instanceof Set?e.add(o):Object.prototype.hasOwnProperty.call(e,o)||Object.defineProperty(e,o,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function Os(t,e,{key:n,value:s}){if(X(n)&&n.addToJSMap)n.addToJSMap(t,e,s);else if(Th(t,n))Cs(t,e,s);else{const i=ie(n,"",t);if(e instanceof Map)e.set(i,ie(s,i,t));else if(e instanceof Set)e.add(i);else{const o=Kh(n,i,t),a=ie(s,o,t);o in e?Object.defineProperty(e,o,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[o]=a}}return e}function Kh(t,e,n){if(e===null)return"";if(typeof e!="object")return String(e);if(X(t)&&n?.doc){const s=Is(n.doc,{});s.anchors=new Set;for(const o of n.anchors.keys())s.anchors.add(o.anchor);s.inFlow=!0,s.inStringifyKey=!0;const i=t.toString(s);if(!n.mapKeyWarned){let o=JSON.stringify(i);o.length>40&&(o=o.substring(0,36)+'..."'),Ls(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${o}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return i}return JSON.stringify(e)}function Pt(t,e,n){const s=ln(t,void 0,n),i=ln(e,void 0,n);return new te(s,i)}class te{constructor(e,n=null){Object.defineProperty(this,oe,{value:xs}),this.key=e,this.value=n}clone(e){let{key:n,value:s}=this;return X(n)&&(n=n.clone(e)),X(s)&&(s=s.clone(e)),new te(n,s)}toJSON(e,n){const s=n?.mapAsMap?new Map:{};return Os(n,s,this)}toString(e,n,s){return e?.doc?Ah(this,e,n,s):JSON.stringify(this)}}function Es(t,e,n){return(e.inFlow??t.flow?Ih:Nh)(t,e,n)}function Nh({comment:t,items:e},n,{blockItemPrefix:s,flowChars:i,itemIndent:o,onChompKeep:a,onComment:r}){const{indent:l,options:{commentString:c}}=n,g=Object.assign({},n,{indent:o,type:null});let d=!1;const f=[];for(let w=0;w<e.length;++w){const b=e[w];let v=null;if(X(b))!d&&b.spaceBefore&&f.push(""),Ln(n,f,b.commentBefore,d),b.comment&&(v=b.comment);else if(Z(b)){const x=X(b.key)?b.key:null;x&&(!d&&x.spaceBefore&&f.push(""),Ln(n,f,x.commentBefore,d))}d=!1;let $=ze(b,g,()=>v=null,()=>d=!0);v&&($+=Ne($,o,c(v))),d&&v&&(d=!1),f.push(s+$)}let _;if(f.length===0)_=i.start+i.end;else{_=f[0];for(let w=1;w<f.length;++w){const b=f[w];_+=b?`
${l}${b}`:`
`}}return t?(_+=`
`+be(c(t),l),r&&r()):d&&a&&a(),_}function Ih({items:t},e,{flowChars:n,itemIndent:s}){const{indent:i,indentStep:o,flowCollectionPadding:a,options:{commentString:r}}=e;s+=o;const l=Object.assign({},e,{indent:s,inFlow:!0,type:null});let c=!1,g=0;const d=[];for(let w=0;w<t.length;++w){const b=t[w];let v=null;if(X(b))b.spaceBefore&&d.push(""),Ln(e,d,b.commentBefore,!1),b.comment&&(v=b.comment);else if(Z(b)){const x=X(b.key)?b.key:null;x&&(x.spaceBefore&&d.push(""),Ln(e,d,x.commentBefore,!1),x.comment&&(c=!0));const P=X(b.value)?b.value:null;P?(P.comment&&(v=P.comment),P.commentBefore&&(c=!0)):b.value==null&&x?.comment&&(v=x.comment)}v&&(c=!0);let $=ze(b,l,()=>v=null);c||(c=d.length>g||$.includes(`
`)),w<t.length-1?$+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(c||(c=d.reduce((x,P)=>x+P.length+2,2)+($.length+2)>e.options.lineWidth)),c&&($+=",")),v&&($+=Ne($,s,r(v))),d.push($),g=d.length}const{start:f,end:_}=n;if(d.length===0)return f+_;if(!c){const w=d.reduce((b,v)=>b+v.length+2,2);c=e.options.lineWidth>0&&w>e.options.lineWidth}if(c){let w=f;for(const b of d)w+=b?`
${o}${i}${b}`:`
`;return`${w}
${i}${_}`}else return`${f}${a}${d.join(" ")}${a}${_}`}function Ln({indent:t,options:{commentString:e}},n,s,i){if(s&&i&&(s=s.replace(/^\n+/,"")),s){const o=be(e(s),t);n.push(o.trimStart())}}function Ie(t,e){const n=W(e)?e.value:e;for(const s of t)if(Z(s)&&(s.key===e||s.key===n||W(s.key)&&s.key.value===n))return s}class se extends Ks{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Pe,e),this.items=[]}static from(e,n,s){const{keepUndefined:i,replacer:o}=s,a=new this(e),r=(l,c)=>{if(typeof o=="function")c=o.call(n,l,c);else if(Array.isArray(o)&&!o.includes(l))return;(c!==void 0||i)&&a.items.push(Pt(l,c,s))};if(n instanceof Map)for(const[l,c]of n)r(l,c);else if(n&&typeof n=="object")for(const l of Object.keys(n))r(l,n[l]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}add(e,n){let s;Z(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new te(e,e?.value):s=new te(e.key,e.value);const i=Ie(this.items,s.key),o=this.schema?.sortMapEntries;if(i){if(!n)throw new Error(`Key ${s.key} already set`);W(i.value)&&Ts(s.value)?i.value.value=s.value:i.value=s.value}else if(o){const a=this.items.findIndex(r=>o(s,r)<0);a===-1?this.items.push(s):this.items.splice(a,0,s)}else this.items.push(s)}delete(e){const n=Ie(this.items,e);return n?this.items.splice(this.items.indexOf(n),1).length>0:!1}get(e,n){const i=Ie(this.items,e)?.value;return(!n&&W(i)?i.value:i)??void 0}has(e){return!!Ie(this.items,e)}set(e,n){this.add(new te(e,n),!0)}toJSON(e,n,s){const i=s?new s:n?.mapAsMap?new Map:{};n?.onCreate&&n.onCreate(i);for(const o of this.items)Os(n,i,o);return i}toString(e,n,s){if(!e)return JSON.stringify(this);for(const i of this.items)if(!Z(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Es(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:n})}}const Ye={collection:"map",default:!0,nodeClass:se,tag:"tag:yaml.org,2002:map",resolve(t,e){return hn(t)||e("Expected a mapping for this tag"),t},createNode:(t,e,n)=>se.from(t,e,n)};class Le extends Ks{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(We,e),this.items=[]}add(e){this.items.push(e)}delete(e){const n=wn(e);return typeof n!="number"?!1:this.items.splice(n,1).length>0}get(e,n){const s=wn(e);if(typeof s!="number")return;const i=this.items[s];return!n&&W(i)?i.value:i}has(e){const n=wn(e);return typeof n=="number"&&n<this.items.length}set(e,n){const s=wn(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const i=this.items[s];W(i)&&Ts(n)?i.value=n:this.items[s]=n}toJSON(e,n){const s=[];n?.onCreate&&n.onCreate(s);let i=0;for(const o of this.items)s.push(ie(o,String(i++),n));return s}toString(e,n,s){return e?Es(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:n}):JSON.stringify(this)}static from(e,n,s){const{replacer:i}=s,o=new this(e);if(n&&Symbol.iterator in Object(n)){let a=0;for(let r of n){if(typeof i=="function"){const l=n instanceof Set?r:String(a++);r=i.call(n,l,r)}o.items.push(ln(r,void 0,s))}}return o}}function wn(t){let e=W(t)?t.value:t;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Qe={collection:"seq",default:!0,nodeClass:Le,tag:"tag:yaml.org,2002:seq",resolve(t,e){return fn(t)||e("Expected a sequence for this tag"),t},createNode:(t,e,n)=>Le.from(t,e,n)},Hn={identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify(t,e,n,s){return e=Object.assign({actualString:!0},e),$t(t,e,n,s)}},Rn={identify:t=>t==null,createNode:()=>new H(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new H(null),stringify:({source:t},e)=>typeof t=="string"&&Rn.test.test(t)?t:e.options.nullStr},At={identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:t=>new H(t[0]==="t"||t[0]==="T"),stringify({source:t,value:e},n){if(t&&At.test.test(t)){const s=t[0]==="t"||t[0]==="T";if(e===s)return t}return e?n.options.trueStr:n.options.falseStr}};function ue({format:t,minFractionDigits:e,tag:n,value:s}){if(typeof s=="bigint")return String(s);const i=typeof s=="number"?s:Number(s);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let o=Object.is(s,-0)?"-0":JSON.stringify(s);if(!t&&e&&(!n||n==="tag:yaml.org,2002:float")&&/^\d/.test(o)){let a=o.indexOf(".");a<0&&(a=o.length,o+=".");let r=e-(o.length-a-1);for(;r-- >0;)o+="0"}return o}const Bs={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:ue},Ds={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t),stringify(t){const e=Number(t.value);return isFinite(e)?e.toExponential():ue(t)}},Ms={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(t){const e=new H(parseFloat(t)),n=t.indexOf(".");return n!==-1&&t[t.length-1]==="0"&&(e.minFractionDigits=t.length-n-1),e},stringify:ue},Fn=t=>typeof t=="bigint"||Number.isInteger(t),Tt=(t,e,n,{intAsBigInt:s})=>s?BigInt(t):parseInt(t.substring(e),n);function Vs(t,e,n){const{value:s}=t;return Fn(s)&&s>=0?n+s.toString(e):ue(t)}const js={identify:t=>Fn(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(t,e,n)=>Tt(t,2,8,n),stringify:t=>Vs(t,8,"0o")},Hs={identify:Fn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(t,e,n)=>Tt(t,0,10,n),stringify:ue},Rs={identify:t=>Fn(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(t,e,n)=>Tt(t,2,16,n),stringify:t=>Vs(t,16,"0x")},Lh=[Ye,Qe,Hn,Rn,At,js,Hs,Rs,Bs,Ds,Ms];function Gt(t){return typeof t=="bigint"||Number.isInteger(t)}const xn=({value:t})=>JSON.stringify(t),Ch=[{identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify:xn},{identify:t=>t==null,createNode:()=>new H(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:xn},{identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:t=>t==="true",stringify:xn},{identify:Gt,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(t,e,{intAsBigInt:n})=>n?BigInt(t):parseInt(t,10),stringify:({value:t})=>Gt(t)?t.toString():JSON.stringify(t)},{identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:t=>parseFloat(t),stringify:xn}],Oh={default:!0,tag:"",test:/^/,resolve(t,e){return e(`Unresolved plain scalar ${JSON.stringify(t)}`),t}},Eh=[Ye,Qe].concat(Ch,Oh),Kt={identify:t=>t instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(t,e){if(typeof atob=="function"){const n=atob(t.replace(/[\n\r]/g,"")),s=new Uint8Array(n.length);for(let i=0;i<n.length;++i)s[i]=n.charCodeAt(i);return s}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),t},stringify({comment:t,type:e,value:n},s,i,o){if(!n)return"";const a=n;let r;if(typeof btoa=="function"){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);r=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=H.BLOCK_LITERAL),e!==H.QUOTE_DOUBLE){const l=Math.max(s.options.lineWidth-s.indent.length,s.options.minContentWidth),c=Math.ceil(r.length/l),g=new Array(c);for(let d=0,f=0;d<c;++d,f+=l)g[d]=r.substr(f,l);r=g.join(e===H.BLOCK_LITERAL?`
`:" ")}return $t({comment:t,type:e,value:r},s,i,o)}};function Fs(t,e){if(fn(t))for(let n=0;n<t.items.length;++n){let s=t.items[n];if(!Z(s)){if(hn(s)){s.items.length>1&&e("Each pair must have its own sequence indicator");const i=s.items[0]||new te(new H(null));if(s.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${s.commentBefore}
${i.key.commentBefore}`:s.commentBefore),s.comment){const o=i.value??i.key;o.comment=o.comment?`${s.comment}
${o.comment}`:s.comment}s=i}t.items[n]=Z(s)?s:new te(s)}}else e("Expected a sequence for this tag");return t}function Us(t,e,n){const{replacer:s}=n,i=new Le(t);i.tag="tag:yaml.org,2002:pairs";let o=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof s=="function"&&(a=s.call(e,String(o++),a));let r,l;if(Array.isArray(a))if(a.length===2)r=a[0],l=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const c=Object.keys(a);if(c.length===1)r=c[0],l=a[r];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else r=a;i.items.push(Pt(r,l,n))}return i}const Nt={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Fs,createNode:Us};class Ue extends Le{constructor(){super(),this.add=se.prototype.add.bind(this),this.delete=se.prototype.delete.bind(this),this.get=se.prototype.get.bind(this),this.has=se.prototype.has.bind(this),this.set=se.prototype.set.bind(this),this.tag=Ue.tag}toJSON(e,n){if(!n)return super.toJSON(e);const s=new Map;n?.onCreate&&n.onCreate(s);for(const i of this.items){let o,a;if(Z(i)?(o=ie(i.key,"",n),a=ie(i.value,o,n)):o=ie(i,"",n),s.has(o))throw new Error("Ordered maps must not include duplicate keys");s.set(o,a)}return s}static from(e,n,s){const i=Us(e,n,s),o=new this;return o.items=i.items,o}}Ue.tag="tag:yaml.org,2002:omap";const It={collection:"seq",identify:t=>t instanceof Map,nodeClass:Ue,default:!1,tag:"tag:yaml.org,2002:omap",resolve(t,e){const n=Fs(t,e),s=[];for(const{key:i}of n.items)W(i)&&(s.includes(i.value)?e(`Ordered maps must not include duplicate keys: ${i.value}`):s.push(i.value));return Object.assign(new Ue,n)},createNode:(t,e,n)=>Ue.from(t,e,n)};function qs({value:t,source:e},n){return e&&(t?zs:Gs).test.test(e)?e:t?n.options.trueStr:n.options.falseStr}const zs={identify:t=>t===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new H(!0),stringify:qs},Gs={identify:t=>t===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new H(!1),stringify:qs},Bh={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:ue},Dh={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t.replace(/_/g,"")),stringify(t){const e=Number(t.value);return isFinite(e)?e.toExponential():ue(t)}},Mh={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(t){const e=new H(parseFloat(t.replace(/_/g,""))),n=t.indexOf(".");if(n!==-1){const s=t.substring(n+1).replace(/_/g,"");s[s.length-1]==="0"&&(e.minFractionDigits=s.length)}return e},stringify:ue},bn=t=>typeof t=="bigint"||Number.isInteger(t);function Un(t,e,n,{intAsBigInt:s}){const i=t[0];if((i==="-"||i==="+")&&(e+=1),t=t.substring(e).replace(/_/g,""),s){switch(n){case 2:t=`0b${t}`;break;case 8:t=`0o${t}`;break;case 16:t=`0x${t}`;break}const a=BigInt(t);return i==="-"?BigInt(-1)*a:a}const o=parseInt(t,n);return i==="-"?-1*o:o}function Lt(t,e,n){const{value:s}=t;if(bn(s)){const i=s.toString(e);return s<0?"-"+n+i.substr(1):n+i}return ue(t)}const Vh={identify:bn,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(t,e,n)=>Un(t,2,2,n),stringify:t=>Lt(t,2,"0b")},jh={identify:bn,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(t,e,n)=>Un(t,1,8,n),stringify:t=>Lt(t,8,"0")},Hh={identify:bn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(t,e,n)=>Un(t,0,10,n),stringify:ue},Rh={identify:bn,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(t,e,n)=>Un(t,2,16,n),stringify:t=>Lt(t,16,"0x")};class qe extends se{constructor(e){super(e),this.tag=qe.tag}add(e){let n;Z(e)?n=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?n=new te(e.key,null):n=new te(e,null),Ie(this.items,n.key)||this.items.push(n)}get(e,n){const s=Ie(this.items,e);return!n&&Z(s)?W(s.key)?s.key.value:s.key:s}set(e,n){if(typeof n!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);const s=Ie(this.items,e);s&&!n?this.items.splice(this.items.indexOf(s),1):!s&&n&&this.items.push(new te(e))}toJSON(e,n){return super.toJSON(e,n,Set)}toString(e,n,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),n,s);throw new Error("Set items must all have null values")}static from(e,n,s){const{replacer:i}=s,o=new this(e);if(n&&Symbol.iterator in Object(n))for(let a of n)typeof i=="function"&&(a=i.call(n,a,a)),o.items.push(Pt(a,null,s));return o}}qe.tag="tag:yaml.org,2002:set";const Ct={collection:"map",identify:t=>t instanceof Set,nodeClass:qe,default:!1,tag:"tag:yaml.org,2002:set",createNode:(t,e,n)=>qe.from(t,e,n),resolve(t,e){if(hn(t)){if(t.hasAllNullValues(!0))return Object.assign(new qe,t);e("Set items must all have null values")}else e("Expected a mapping for this tag");return t}};function Ot(t,e){const n=t[0],s=n==="-"||n==="+"?t.substring(1):t,i=a=>e?BigInt(a):Number(a),o=s.replace(/_/g,"").split(":").reduce((a,r)=>a*i(60)+i(r),i(0));return n==="-"?i(-1)*o:o}function Ws(t){let{value:e}=t,n=a=>a;if(typeof e=="bigint")n=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return ue(t);let s="";e<0&&(s="-",e*=n(-1));const i=n(60),o=[e%i];return e<60?o.unshift(0):(e=(e-o[0])/i,o.unshift(e%i),e>=60&&(e=(e-o[0])/i,o.unshift(e))),s+o.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Js={identify:t=>typeof t=="bigint"||Number.isInteger(t),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(t,e,{intAsBigInt:n})=>Ot(t,n),stringify:Ws},Ys={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:t=>Ot(t,!1),stringify:Ws},qn={identify:t=>t instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(t){const e=t.match(qn.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,n,s,i,o,a,r]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(n,s-1,i,o||0,a||0,r||0,l);const g=e[8];if(g&&g!=="Z"){let d=Ot(g,!1);Math.abs(d)<30&&(d*=60),c-=6e4*d}return new Date(c)},stringify:({value:t})=>t?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},Wt=[Ye,Qe,Hn,Rn,zs,Gs,Vh,jh,Hh,Rh,Bh,Dh,Mh,Kt,ye,It,Nt,Ct,Js,Ys,qn],Jt=new Map([["core",Lh],["failsafe",[Ye,Qe,Hn]],["json",Eh],["yaml11",Wt],["yaml-1.1",Wt]]),Yt={binary:Kt,bool:At,float:Ms,floatExp:Ds,floatNaN:Bs,floatTime:Ys,int:Hs,intHex:Rs,intOct:js,intTime:Js,map:Ye,merge:ye,null:Rn,omap:It,pairs:Nt,seq:Qe,set:Ct,timestamp:qn},Fh={"tag:yaml.org,2002:binary":Kt,"tag:yaml.org,2002:merge":ye,"tag:yaml.org,2002:omap":It,"tag:yaml.org,2002:pairs":Nt,"tag:yaml.org,2002:set":Ct,"tag:yaml.org,2002:timestamp":qn};function Qn(t,e,n){const s=Jt.get(e);if(s&&!t)return n&&!s.includes(ye)?s.concat(ye):s.slice();let i=s;if(!i)if(Array.isArray(t))i=[];else{const o=Array.from(Jt.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${o} or define customTags array`)}if(Array.isArray(t))for(const o of t)i=i.concat(o);else typeof t=="function"&&(i=t(i.slice()));return n&&(i=i.concat(ye)),i.reduce((o,a)=>{const r=typeof a=="string"?Yt[a]:a;if(!r){const l=JSON.stringify(a),c=Object.keys(Yt).map(g=>JSON.stringify(g)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return o.includes(r)||o.push(r),o},[])}const Uh=(t,e)=>t.key<e.key?-1:t.key>e.key?1:0;class Et{constructor({compat:e,customTags:n,merge:s,resolveKnownTags:i,schema:o,sortMapEntries:a,toStringDefaults:r}){this.compat=Array.isArray(e)?Qn(e,"compat"):e?Qn(null,e):null,this.name=typeof o=="string"&&o||"core",this.knownTags=i?Fh:{},this.tags=Qn(n,this.name,s),this.toStringOptions=r??null,Object.defineProperty(this,Pe,{value:Ye}),Object.defineProperty(this,he,{value:Hn}),Object.defineProperty(this,We,{value:Qe}),this.sortMapEntries=typeof a=="function"?a:a===!0?Uh:null}clone(){const e=Object.create(Et.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function qh(t,e){const n=[];let s=e.directives===!0;if(e.directives!==!1&&t.directives){const l=t.directives.toString(t);l?(n.push(l),s=!0):t.directives.docStart&&(s=!0)}s&&n.push("---");const i=Is(t,e),{commentString:o}=i.options;if(t.commentBefore){n.length!==1&&n.unshift("");const l=o(t.commentBefore);n.unshift(be(l,""))}let a=!1,r=null;if(t.contents){if(X(t.contents)){if(t.contents.spaceBefore&&s&&n.push(""),t.contents.commentBefore){const g=o(t.contents.commentBefore);n.push(be(g,""))}i.forceBlockIndent=!!t.comment,r=t.contents.comment}const l=r?void 0:()=>a=!0;let c=ze(t.contents,i,()=>r=null,l);r&&(c+=Ne(c,"",o(r))),(c[0]==="|"||c[0]===">")&&n[n.length-1]==="---"?n[n.length-1]=`--- ${c}`:n.push(c)}else n.push(ze(t.contents,i));if(t.directives?.docEnd)if(t.comment){const l=o(t.comment);l.includes(`
`)?(n.push("..."),n.push(be(l,""))):n.push(`... ${l}`)}else n.push("...");else{let l=t.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||r)&&n[n.length-1]!==""&&n.push(""),n.push(be(o(l),"")))}return n.join(`
`)+`
`}class zn{constructor(e,n,s){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,oe,{value:lt});let i=null;typeof n=="function"||Array.isArray(n)?i=n:s===void 0&&n&&(s=n,n=void 0);const o=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},s);this.options=o;let{version:a}=o;s?._directives?(this.directives=s._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new ne({version:a}),this.setSchema(a,s),this.contents=e===void 0?null:this.createNode(e,i,s)}clone(){const e=Object.create(zn.prototype,{[oe]:{value:lt}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=X(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Me(this.contents)&&this.contents.add(e)}addIn(e,n){Me(this.contents)&&this.contents.addIn(e,n)}createAlias(e,n){if(!e.anchor){const s=Ps(this);e.anchor=!n||s.has(n)?As(n||"a",s):n}return new St(e.anchor)}createNode(e,n,s){let i;if(typeof n=="function")e=n.call({"":e},"",e),i=n;else if(Array.isArray(n)){const v=x=>typeof x=="number"||x instanceof String||x instanceof Number,$=n.filter(v).map(String);$.length>0&&(n=n.concat($)),i=n}else s===void 0&&n&&(s=n,n=void 0);const{aliasDuplicateObjects:o,anchorPrefix:a,flow:r,keepUndefined:l,onTagObj:c,tag:g}=s??{},{onAnchor:d,setAnchors:f,sourceObjects:_}=vh(this,a||"a"),w={aliasDuplicateObjects:o??!0,keepUndefined:l??!1,onAnchor:d,onTagObj:c,replacer:i,schema:this.schema,sourceObjects:_},b=ln(e,g,w);return r&&Q(b)&&(b.flow=!0),f(),b}createPair(e,n,s={}){const i=this.createNode(e,null,s),o=this.createNode(n,null,s);return new te(i,o)}delete(e){return Me(this.contents)?this.contents.delete(e):!1}deleteIn(e){return tn(e)?this.contents==null?!1:(this.contents=null,!0):Me(this.contents)?this.contents.deleteIn(e):!1}get(e,n){return Q(this.contents)?this.contents.get(e,n):void 0}getIn(e,n){return tn(e)?!n&&W(this.contents)?this.contents.value:this.contents:Q(this.contents)?this.contents.getIn(e,n):void 0}has(e){return Q(this.contents)?this.contents.has(e):!1}hasIn(e){return tn(e)?this.contents!==void 0:Q(this.contents)?this.contents.hasIn(e):!1}set(e,n){this.contents==null?this.contents=In(this.schema,[e],n):Me(this.contents)&&this.contents.set(e,n)}setIn(e,n){tn(e)?this.contents=n:this.contents==null?this.contents=In(this.schema,Array.from(e),n):Me(this.contents)&&this.contents.setIn(e,n)}setSchema(e,n={}){typeof e=="number"&&(e=String(e));let s;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new ne({version:"1.1"}),s={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new ne({version:e}),s={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,s=null;break;default:{const i=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(n.schema instanceof Object)this.schema=n.schema;else if(s)this.schema=new Et(Object.assign(s,n));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:n,mapAsMap:s,maxAliasCount:i,onAnchor:o,reviver:a}={}){const r={anchors:new Map,doc:this,keep:!e,mapAsMap:s===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},l=ie(this.contents,n??"",r);if(typeof o=="function")for(const{count:c,res:g}of r.anchors.values())o(g,c);return typeof a=="function"?Re(a,{"":l},"",l):l}toJSON(e,n){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:n})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const n=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${n}`)}return qh(this,e)}}function Me(t){if(Q(t))return!0;throw new Error("Expected a YAML collection as document contents")}class Qs extends Error{constructor(e,n,s,i){super(),this.name=e,this.code=s,this.message=i,this.pos=n}}class sn extends Qs{constructor(e,n,s){super("YAMLParseError",e,n,s)}}class zh extends Qs{constructor(e,n,s){super("YAMLWarning",e,n,s)}}const Qt=(t,e)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(r=>e.linePos(r));const{line:s,col:i}=n.linePos[0];n.message+=` at line ${s}, column ${i}`;let o=i-1,a=t.substring(e.lineStarts[s-1],e.lineStarts[s]).replace(/[\n\r]+$/,"");if(o>=60&&a.length>80){const r=Math.min(o-39,a.length-79);a="…"+a.substring(r),o-=r-1}if(a.length>80&&(a=a.substring(0,79)+"…"),s>1&&/^ *$/.test(a.substring(0,o))){let r=t.substring(e.lineStarts[s-2],e.lineStarts[s-1]);r.length>80&&(r=r.substring(0,79)+`…
`),a=r+a}if(/[^ ]/.test(a)){let r=1;const l=n.linePos[1];l?.line===s&&l.col>i&&(r=Math.max(1,Math.min(l.col-i,80-o)));const c=" ".repeat(o)+"^".repeat(r);n.message+=`:

${a}
${c}
`}};function Ge(t,{flow:e,indicator:n,next:s,offset:i,onError:o,parentIndent:a,startOnNewline:r}){let l=!1,c=r,g=r,d="",f="",_=!1,w=!1,b=null,v=null,$=null,x=null,P=null,C=null,M=null;for(const N of t)switch(w&&(N.type!=="space"&&N.type!=="newline"&&N.type!=="comma"&&o(N.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),w=!1),b&&(c&&N.type!=="comment"&&N.type!=="newline"&&o(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),b=null),N.type){case"space":!e&&(n!=="doc-start"||s?.type!=="flow-collection")&&N.source.includes("	")&&(b=N),g=!0;break;case"comment":{g||o(N,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const J=N.source.substring(1)||" ";d?d+=f+J:d=J,f="",c=!1;break}case"newline":c?d?d+=N.source:(!C||n!=="seq-item-ind")&&(l=!0):f+=N.source,c=!0,_=!0,(v||$)&&(x=N),g=!0;break;case"anchor":v&&o(N,"MULTIPLE_ANCHORS","A node can have at most one anchor"),N.source.endsWith(":")&&o(N.offset+N.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),v=N,M??(M=N.offset),c=!1,g=!1,w=!0;break;case"tag":{$&&o(N,"MULTIPLE_TAGS","A node can have at most one tag"),$=N,M??(M=N.offset),c=!1,g=!1,w=!0;break}case n:(v||$)&&o(N,"BAD_PROP_ORDER",`Anchors and tags must be after the ${N.source} indicator`),C&&o(N,"UNEXPECTED_TOKEN",`Unexpected ${N.source} in ${e??"collection"}`),C=N,c=n==="seq-item-ind"||n==="explicit-key-ind",g=!1;break;case"comma":if(e){P&&o(N,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),P=N,c=!1,g=!1;break}default:o(N,"UNEXPECTED_TOKEN",`Unexpected ${N.type} token`),c=!1,g=!1}const V=t[t.length-1],q=V?V.offset+V.source.length:i;return w&&s&&s.type!=="space"&&s.type!=="newline"&&s.type!=="comma"&&(s.type!=="scalar"||s.source!=="")&&o(s.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),b&&(c&&b.indent<=a||s?.type==="block-map"||s?.type==="block-seq")&&o(b,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:P,found:C,spaceBefore:l,comment:d,hasNewline:_,anchor:v,tag:$,newlineAfterProp:x,end:q,start:M??q}}function cn(t){if(!t)return null;switch(t.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(t.source.includes(`
`))return!0;if(t.end){for(const e of t.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of t.items){for(const n of e.start)if(n.type==="newline")return!0;if(e.sep){for(const n of e.sep)if(n.type==="newline")return!0}if(cn(e.key)||cn(e.value))return!0}return!1;default:return!0}}function pt(t,e,n){if(e?.type==="flow-collection"){const s=e.end[0];s.indent===t&&(s.source==="]"||s.source==="}")&&cn(e)&&n(s,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Xs(t,e,n){const{uniqueKeys:s}=t.options;if(s===!1)return!1;const i=typeof s=="function"?s:(o,a)=>o===a||W(o)&&W(a)&&o.value===a.value;return e.some(o=>i(o.key,n))}const Xt="All mapping items must start at the same column";function Gh({composeNode:t,composeEmptyNode:e},n,s,i,o){const a=o?.nodeClass??se,r=new a(n.schema);n.atRoot&&(n.atRoot=!1);let l=s.offset,c=null;for(const g of s.items){const{start:d,key:f,sep:_,value:w}=g,b=Ge(d,{indicator:"explicit-key-ind",next:f??_?.[0],offset:l,onError:i,parentIndent:s.indent,startOnNewline:!0}),v=!b.found;if(v){if(f&&(f.type==="block-seq"?i(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in f&&f.indent!==s.indent&&i(l,"BAD_INDENT",Xt)),!b.anchor&&!b.tag&&!_){c=b.end,b.comment&&(r.comment?r.comment+=`
`+b.comment:r.comment=b.comment);continue}(b.newlineAfterProp||cn(f))&&i(f??d[d.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else b.found?.indent!==s.indent&&i(l,"BAD_INDENT",Xt);n.atKey=!0;const $=b.end,x=f?t(n,f,b,i):e(n,$,d,null,b,i);n.schema.compat&&pt(s.indent,f,i),n.atKey=!1,Xs(n,r.items,x)&&i($,"DUPLICATE_KEY","Map keys must be unique");const P=Ge(_??[],{indicator:"map-value-ind",next:w,offset:x.range[2],onError:i,parentIndent:s.indent,startOnNewline:!f||f.type==="block-scalar"});if(l=P.end,P.found){v&&(w?.type==="block-map"&&!P.hasNewline&&i(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),n.options.strict&&b.start<P.found.offset-1024&&i(x.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const C=w?t(n,w,P,i):e(n,l,_,null,P,i);n.schema.compat&&pt(s.indent,w,i),l=C.range[2];const M=new te(x,C);n.options.keepSourceTokens&&(M.srcToken=g),r.items.push(M)}else{v&&i(x.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),P.comment&&(x.comment?x.comment+=`
`+P.comment:x.comment=P.comment);const C=new te(x);n.options.keepSourceTokens&&(C.srcToken=g),r.items.push(C)}}return c&&c<l&&i(c,"IMPOSSIBLE","Map comment with trailing content"),r.range=[s.offset,l,c??l],r}function Wh({composeNode:t,composeEmptyNode:e},n,s,i,o){const a=o?.nodeClass??Le,r=new a(n.schema);n.atRoot&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let l=s.offset,c=null;for(const{start:g,value:d}of s.items){const f=Ge(g,{indicator:"seq-item-ind",next:d,offset:l,onError:i,parentIndent:s.indent,startOnNewline:!0});if(!f.found)if(f.anchor||f.tag||d)d?.type==="block-seq"?i(f.end,"BAD_INDENT","All sequence items must start at the same column"):i(l,"MISSING_CHAR","Sequence item without - indicator");else{c=f.end,f.comment&&(r.comment=f.comment);continue}const _=d?t(n,d,f,i):e(n,f.end,g,null,f,i);n.schema.compat&&pt(s.indent,d,i),l=_.range[2],r.items.push(_)}return r.range=[s.offset,l,c??l],r}function gn(t,e,n,s){let i="";if(t){let o=!1,a="";for(const r of t){const{source:l,type:c}=r;switch(c){case"space":o=!0;break;case"comment":{n&&!o&&s(r,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const g=l.substring(1)||" ";i?i+=a+g:i=g,a="";break}case"newline":i&&(a+=l),o=!0;break;default:s(r,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:i,offset:e}}const Xn="Block collections are not allowed within flow collections",Zn=t=>t&&(t.type==="block-map"||t.type==="block-seq");function Jh({composeNode:t,composeEmptyNode:e},n,s,i,o){const a=s.start.source==="{",r=a?"flow map":"flow sequence",l=o?.nodeClass??(a?se:Le),c=new l(n.schema);c.flow=!0;const g=n.atRoot;g&&(n.atRoot=!1),n.atKey&&(n.atKey=!1);let d=s.offset+s.start.source.length;for(let v=0;v<s.items.length;++v){const $=s.items[v],{start:x,key:P,sep:C,value:M}=$,V=Ge(x,{flow:r,indicator:"explicit-key-ind",next:P??C?.[0],offset:d,onError:i,parentIndent:s.indent,startOnNewline:!1});if(!V.found){if(!V.anchor&&!V.tag&&!C&&!M){v===0&&V.comma?i(V.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${r}`):v<s.items.length-1&&i(V.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${r}`),V.comment&&(c.comment?c.comment+=`
`+V.comment:c.comment=V.comment),d=V.end;continue}!a&&n.options.strict&&cn(P)&&i(P,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(v===0)V.comma&&i(V.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${r}`);else if(V.comma||i(V.start,"MISSING_CHAR",`Missing , between ${r} items`),V.comment){let q="";e:for(const N of x)switch(N.type){case"comma":case"space":break;case"comment":q=N.source.substring(1);break e;default:break e}if(q){let N=c.items[c.items.length-1];Z(N)&&(N=N.value??N.key),N.comment?N.comment+=`
`+q:N.comment=q,V.comment=V.comment.substring(q.length+1)}}if(!a&&!C&&!V.found){const q=M?t(n,M,V,i):e(n,V.end,C,null,V,i);c.items.push(q),d=q.range[2],Zn(M)&&i(q.range,"BLOCK_IN_FLOW",Xn)}else{n.atKey=!0;const q=V.end,N=P?t(n,P,V,i):e(n,q,x,null,V,i);Zn(P)&&i(N.range,"BLOCK_IN_FLOW",Xn),n.atKey=!1;const J=Ge(C??[],{flow:r,indicator:"map-value-ind",next:M,offset:N.range[2],onError:i,parentIndent:s.indent,startOnNewline:!1});if(J.found){if(!a&&!V.found&&n.options.strict){if(C)for(const Y of C){if(Y===J.found)break;if(Y.type==="newline"){i(Y,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}V.start<J.found.offset-1024&&i(J.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else M&&("source"in M&&M.source?.[0]===":"?i(M,"MISSING_CHAR",`Missing space after : in ${r}`):i(J.start,"MISSING_CHAR",`Missing , or : between ${r} items`));const de=M?t(n,M,J,i):J.found?e(n,J.end,C,null,J,i):null;de?Zn(M)&&i(de.range,"BLOCK_IN_FLOW",Xn):J.comment&&(N.comment?N.comment+=`
`+J.comment:N.comment=J.comment);const xe=new te(N,de);if(n.options.keepSourceTokens&&(xe.srcToken=$),a){const Y=c;Xs(n,Y.items,N)&&i(q,"DUPLICATE_KEY","Map keys must be unique"),Y.items.push(xe)}else{const Y=new se(n.schema);Y.flow=!0,Y.items.push(xe);const yn=(de??N).range;Y.range=[N.range[0],yn[1],yn[2]],c.items.push(Y)}d=de?de.range[2]:J.end}}const f=a?"}":"]",[_,...w]=s.end;let b=d;if(_?.source===f)b=_.offset+_.source.length;else{const v=r[0].toUpperCase()+r.substring(1),$=g?`${v} must end with a ${f}`:`${v} in block collection must be sufficiently indented and end with a ${f}`;i(d,g?"MISSING_CHAR":"BAD_INDENT",$),_&&_.source.length!==1&&w.unshift(_)}if(w.length>0){const v=gn(w,b,n.options.strict,i);v.comment&&(c.comment?c.comment+=`
`+v.comment:c.comment=v.comment),c.range=[s.offset,b,v.offset]}else c.range=[s.offset,b,b];return c}function et(t,e,n,s,i,o){const a=n.type==="block-map"?Gh(t,e,n,s,o):n.type==="block-seq"?Wh(t,e,n,s,o):Jh(t,e,n,s,o),r=a.constructor;return i==="!"||i===r.tagName?(a.tag=r.tagName,a):(i&&(a.tag=i),a)}function Yh(t,e,n,s,i){const o=s.tag,a=o?e.directives.tagName(o.source,f=>i(o,"TAG_RESOLVE_FAILED",f)):null;if(n.type==="block-seq"){const{anchor:f,newlineAfterProp:_}=s,w=f&&o?f.offset>o.offset?f:o:f??o;w&&(!_||_.offset<w.offset)&&i(w,"MISSING_CHAR","Missing newline after block sequence props")}const r=n.type==="block-map"?"map":n.type==="block-seq"?"seq":n.start.source==="{"?"map":"seq";if(!o||!a||a==="!"||a===se.tagName&&r==="map"||a===Le.tagName&&r==="seq")return et(t,e,n,i,a);let l=e.schema.tags.find(f=>f.tag===a&&f.collection===r);if(!l){const f=e.schema.knownTags[a];if(f?.collection===r)e.schema.tags.push(Object.assign({},f,{default:!1})),l=f;else return f?i(o,"BAD_COLLECTION_TYPE",`${f.tag} used for ${r} collection, but expects ${f.collection??"scalar"}`,!0):i(o,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),et(t,e,n,i,a)}const c=et(t,e,n,i,a,l),g=l.resolve?.(c,f=>i(o,"TAG_RESOLVE_FAILED",f),e.options)??c,d=X(g)?g:new H(g);return d.range=c.range,d.tag=a,l?.format&&(d.format=l.format),d}function Qh(t,e,n){const s=e.offset,i=Xh(e,t.options.strict,n);if(!i)return{value:"",type:null,comment:"",range:[s,s,s]};const o=i.mode===">"?H.BLOCK_FOLDED:H.BLOCK_LITERAL,a=e.source?Zh(e.source):[];let r=a.length;for(let b=a.length-1;b>=0;--b){const v=a[b][1];if(v===""||v==="\r")r=b;else break}if(r===0){const b=i.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let v=s+i.length;return e.source&&(v+=e.source.length),{value:b,type:o,comment:i.comment,range:[s,v,v]}}let l=e.indent+i.indent,c=e.offset+i.length,g=0;for(let b=0;b<r;++b){const[v,$]=a[b];if($===""||$==="\r")i.indent===0&&v.length>l&&(l=v.length);else{v.length<l&&n(c+v.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(l=v.length),g=b,l===0&&!t.atRoot&&n(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=v.length+$.length+1}for(let b=a.length-1;b>=r;--b)a[b][0].length>l&&(r=b+1);let d="",f="",_=!1;for(let b=0;b<g;++b)d+=a[b][0].slice(l)+`
`;for(let b=g;b<r;++b){let[v,$]=a[b];c+=v.length+$.length+1;const x=$[$.length-1]==="\r";if(x&&($=$.slice(0,-1)),$&&v.length<l){const C=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;n(c-$.length-(x?2:1),"BAD_INDENT",C),v=""}o===H.BLOCK_LITERAL?(d+=f+v.slice(l)+$,f=`
`):v.length>l||$[0]==="	"?(f===" "?f=`
`:!_&&f===`
`&&(f=`

`),d+=f+v.slice(l)+$,f=`
`,_=!0):$===""?f===`
`?d+=`
`:f=`
`:(d+=f+$,f=" ",_=!1)}switch(i.chomp){case"-":break;case"+":for(let b=r;b<a.length;++b)d+=`
`+a[b][0].slice(l);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}const w=s+i.length+e.source.length;return{value:d,type:o,comment:i.comment,range:[s,w,w]}}function Xh({offset:t,props:e},n,s){if(e[0].type!=="block-scalar-header")return s(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=e[0],o=i[0];let a=0,r="",l=-1;for(let f=1;f<i.length;++f){const _=i[f];if(!r&&(_==="-"||_==="+"))r=_;else{const w=Number(_);!a&&w?a=w:l===-1&&(l=t+f)}}l!==-1&&s(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let c=!1,g="",d=i.length;for(let f=1;f<e.length;++f){const _=e[f];switch(_.type){case"space":c=!0;case"newline":d+=_.source.length;break;case"comment":n&&!c&&s(_,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),d+=_.source.length,g=_.source.substring(1);break;case"error":s(_,"UNEXPECTED_TOKEN",_.message),d+=_.source.length;break;default:{const w=`Unexpected token in block scalar header: ${_.type}`;s(_,"UNEXPECTED_TOKEN",w);const b=_.source;b&&typeof b=="string"&&(d+=b.length)}}}return{mode:o,indent:a,chomp:r,comment:g,length:d}}function Zh(t){const e=t.split(/\n( *)/),n=e[0],s=n.match(/^( *)/),o=[s?.[1]?[s[1],n.slice(s[1].length)]:["",n]];for(let a=1;a<e.length;a+=2)o.push([e[a],e[a+1]]);return o}function ef(t,e,n){const{offset:s,type:i,source:o,end:a}=t;let r,l;const c=(f,_,w)=>n(s+f,_,w);switch(i){case"scalar":r=H.PLAIN,l=nf(o,c);break;case"single-quoted-scalar":r=H.QUOTE_SINGLE,l=tf(o,c);break;case"double-quoted-scalar":r=H.QUOTE_DOUBLE,l=sf(o,c);break;default:return n(t,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[s,s+o.length,s+o.length]}}const g=s+o.length,d=gn(a,g,e,n);return{value:l,type:r,comment:d.comment,range:[s,g,d.offset]}}function nf(t,e){let n="";switch(t[0]){case"	":n="a tab character";break;case",":n="flow indicator character ,";break;case"%":n="directive indicator character %";break;case"|":case">":{n=`block scalar indicator ${t[0]}`;break}case"@":case"`":{n=`reserved character ${t[0]}`;break}}return n&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${n}`),Zs(t)}function tf(t,e){return(t[t.length-1]!=="'"||t.length===1)&&e(t.length,"MISSING_CHAR","Missing closing 'quote"),Zs(t.slice(1,-1)).replace(/''/g,"'")}function Zs(t){let e,n;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),n=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,n=/[ \t]*(.*?)[ \t]*\r?\n/sy}let s=e.exec(t);if(!s)return t;let i=s[1],o=" ",a=e.lastIndex;for(n.lastIndex=a;s=n.exec(t);)s[1]===""?o===`
`?i+=o:o=`
`:(i+=o+s[1],o=" "),a=n.lastIndex;const r=/[ \t]*(.*)/sy;return r.lastIndex=a,s=r.exec(t),i+o+(s?.[1]??"")}function sf(t,e){let n="";for(let s=1;s<t.length-1;++s){const i=t[s];if(!(i==="\r"&&t[s+1]===`
`))if(i===`
`){const{fold:o,offset:a}=of(t,s);n+=o,s=a}else if(i==="\\"){let o=t[++s];const a=af[o];if(a)n+=a;else if(o===`
`)for(o=t[s+1];o===" "||o==="	";)o=t[++s+1];else if(o==="\r"&&t[s+1]===`
`)for(o=t[++s+1];o===" "||o==="	";)o=t[++s+1];else if(o==="x"||o==="u"||o==="U"){const r={x:2,u:4,U:8}[o];n+=rf(t,s+1,r,e),s+=r}else{const r=t.substr(s-1,2);e(s-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${r}`),n+=r}}else if(i===" "||i==="	"){const o=s;let a=t[s+1];for(;a===" "||a==="	";)a=t[++s+1];a!==`
`&&!(a==="\r"&&t[s+2]===`
`)&&(n+=s>o?t.slice(o,s+1):i)}else n+=i}return(t[t.length-1]!=='"'||t.length===1)&&e(t.length,"MISSING_CHAR",'Missing closing "quote'),n}function of(t,e){let n="",s=t[e+1];for(;(s===" "||s==="	"||s===`
`||s==="\r")&&!(s==="\r"&&t[e+2]!==`
`);)s===`
`&&(n+=`
`),e+=1,s=t[e+1];return n||(n=" "),{fold:n,offset:e}}const af={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function rf(t,e,n,s){const i=t.substr(e,n),a=i.length===n&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(a)){const r=t.substr(e-2,n+2);return s(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${r}`),r}return String.fromCodePoint(a)}function ei(t,e,n,s){const{value:i,type:o,comment:a,range:r}=e.type==="block-scalar"?Qh(t,e,s):ef(e,t.options.strict,s),l=n?t.directives.tagName(n.source,d=>s(n,"TAG_RESOLVE_FAILED",d)):null;let c;t.options.stringKeys&&t.atKey?c=t.schema[he]:l?c=lf(t.schema,i,l,n,s):e.type==="scalar"?c=cf(t,i,e,s):c=t.schema[he];let g;try{const d=c.resolve(i,f=>s(n??e,"TAG_RESOLVE_FAILED",f),t.options);g=W(d)?d:new H(d)}catch(d){const f=d instanceof Error?d.message:String(d);s(n??e,"TAG_RESOLVE_FAILED",f),g=new H(i)}return g.range=r,g.source=i,o&&(g.type=o),l&&(g.tag=l),c.format&&(g.format=c.format),a&&(g.comment=a),g}function lf(t,e,n,s,i){if(n==="!")return t[he];const o=[];for(const r of t.tags)if(!r.collection&&r.tag===n)if(r.default&&r.test)o.push(r);else return r;for(const r of o)if(r.test?.test(e))return r;const a=t.knownTags[n];return a&&!a.collection?(t.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(i(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${n}`,n!=="tag:yaml.org,2002:str"),t[he])}function cf({atKey:t,directives:e,schema:n},s,i,o){const a=n.tags.find(r=>(r.default===!0||t&&r.default==="key")&&r.test?.test(s))||n[he];if(n.compat){const r=n.compat.find(l=>l.default&&l.test?.test(s))??n[he];if(a.tag!==r.tag){const l=e.tagString(a.tag),c=e.tagString(r.tag),g=`Value may be parsed as either ${l} or ${c}`;o(i,"TAG_RESOLVE_FAILED",g,!0)}}return a}function uf(t,e,n){if(e){n??(n=e.length);for(let s=n-1;s>=0;--s){let i=e[s];switch(i.type){case"space":case"comment":case"newline":t-=i.source.length;continue}for(i=e[++s];i?.type==="space";)t+=i.source.length,i=e[++s];break}}return t}const df={composeNode:ni,composeEmptyNode:Bt};function ni(t,e,n,s){const i=t.atKey,{spaceBefore:o,comment:a,anchor:r,tag:l}=n;let c,g=!0;switch(e.type){case"alias":c=pf(t,e,s),(r||l)&&s(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=ei(t,e,l,s),r&&(c.anchor=r.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{c=Yh(df,t,e,n,s),r&&(c.anchor=r.source.substring(1))}catch(d){const f=d instanceof Error?d.message:String(d);s(e,"RESOURCE_EXHAUSTION",f)}break;default:{const d=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;s(e,"UNEXPECTED_TOKEN",d),g=!1}}return c??(c=Bt(t,e.offset,void 0,null,n,s)),r&&c.anchor===""&&s(r,"BAD_ALIAS","Anchor cannot be an empty string"),i&&t.options.stringKeys&&(!W(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&s(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),o&&(c.spaceBefore=!0),a&&(e.type==="scalar"&&e.source===""?c.comment=a:c.commentBefore=a),t.options.keepSourceTokens&&g&&(c.srcToken=e),c}function Bt(t,e,n,s,{spaceBefore:i,comment:o,anchor:a,tag:r,end:l},c){const g={type:"scalar",offset:uf(e,n,s),indent:-1,source:""},d=ei(t,g,r,c);return a&&(d.anchor=a.source.substring(1),d.anchor===""&&c(a,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(d.spaceBefore=!0),o&&(d.comment=o,d.range[2]=l),d}function pf({options:t},{offset:e,source:n,end:s},i){const o=new St(n.substring(1));o.source===""&&i(e,"BAD_ALIAS","Alias cannot be an empty string"),o.source.endsWith(":")&&i(e+n.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+n.length,r=gn(s,a,t.strict,i);return o.range=[e,a,r.offset],r.comment&&(o.comment=r.comment),o}function mf(t,e,{offset:n,start:s,value:i,end:o},a){const r=Object.assign({_directives:e},t),l=new zn(void 0,r),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},g=Ge(s,{indicator:"doc-start",next:i??o?.[0],offset:n,onError:a,parentIndent:0,startOnNewline:!0});g.found&&(l.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!g.hasNewline&&a(g.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=i?ni(c,i,g,a):Bt(c,g.end,s,null,g,a);const d=l.contents.range[2],f=gn(o,d,!1,a);return f.comment&&(l.comment=f.comment),l.range=[n,d,f.offset],l}function nn(t){if(typeof t=="number")return[t,t+1];if(Array.isArray(t))return t.length===2?t:[t[0],t[1]];const{offset:e,source:n}=t;return[e,e+(typeof n=="string"?n.length:1)]}function Zt(t){let e="",n=!1,s=!1;for(let i=0;i<t.length;++i){const o=t[i];switch(o[0]){case"#":e+=(e===""?"":s?`

`:`
`)+(o.substring(1)||" "),n=!0,s=!1;break;case"%":t[i+1]?.[0]!=="#"&&(i+=1),n=!1;break;default:n||(s=!0),n=!1}}return{comment:e,afterEmptyLine:s}}class hf{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(n,s,i,o)=>{const a=nn(n);o?this.warnings.push(new zh(a,s,i)):this.errors.push(new sn(a,s,i))},this.directives=new ne({version:e.version||"1.2"}),this.options=e}decorate(e,n){const{comment:s,afterEmptyLine:i}=Zt(this.prelude);if(s){const o=e.contents;if(n)e.comment=e.comment?`${e.comment}
${s}`:s;else if(i||e.directives.docStart||!o)e.commentBefore=s;else if(Q(o)&&!o.flow&&o.items.length>0){let a=o.items[0];Z(a)&&(a=a.key);const r=a.commentBefore;a.commentBefore=r?`${s}
${r}`:s}else{const a=o.commentBefore;o.commentBefore=a?`${s}
${a}`:s}}n?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Zt(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,n=!1,s=-1){for(const i of e)yield*this.next(i);yield*this.end(n,s)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(n,s,i)=>{const o=nn(e);o[0]+=n,this.onError(o,"BAD_DIRECTIVE",s,i)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const n=mf(this.options,this.directives,e,this.onError);this.atDirectives&&!n.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(n,!1),this.doc&&(yield this.doc),this.doc=n,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const n=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,s=new sn(nn(e),"UNEXPECTED_TOKEN",n);this.atDirectives||!this.doc?this.errors.push(s):this.doc.errors.push(s);break}case"doc-end":{if(!this.doc){const s="Unexpected doc-end without preceding document";this.errors.push(new sn(nn(e),"UNEXPECTED_TOKEN",s));break}this.doc.directives.docEnd=!0;const n=gn(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),n.comment){const s=this.doc.comment;this.doc.comment=s?`${s}
${n.comment}`:n.comment}this.doc.range[2]=n.offset;break}default:this.errors.push(new sn(nn(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,n=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const s=Object.assign({_directives:this.directives},this.options),i=new zn(void 0,s);this.atDirectives&&this.onError(n,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,n,n],this.decorate(i,!1),yield i}}}const ti="\uFEFF",si="",ii="",mt="";function ff(t){switch(t){case ti:return"byte-order-mark";case si:return"doc-mode";case ii:return"flow-error-end";case mt:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(t[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function re(t){switch(t){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const es=new Set("0123456789ABCDEFabcdef"),bf=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Sn=new Set(",[]{}"),gf=new Set(` ,[]{}
\r	`),nt=t=>!t||gf.has(t);class yf{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,n=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!n;let s=this.next??"stream";for(;s&&(n||this.hasChars(1));)s=yield*this.parseNext(s)}atLineEnd(){let e=this.pos,n=this.buffer[e];for(;n===" "||n==="	";)n=this.buffer[++e];return!n||n==="#"||n===`
`?!0:n==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let n=this.buffer[e];if(this.indentNext>0){let s=0;for(;n===" ";)n=this.buffer[++s+e];if(n==="\r"){const i=this.buffer[s+e+1];if(i===`
`||!i&&!this.atEnd)return e+s+1}return n===`
`||s>=this.indentNext||!n&&!this.atEnd?e+s:-1}if(n==="-"||n==="."){const s=this.buffer.substr(e,3);if((s==="---"||s==="...")&&re(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===ti&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let n=e.length,s=e.indexOf("#");for(;s!==-1;){const o=e[s-1];if(o===" "||o==="	"){n=s-1;break}else s=e.indexOf("#",s+1)}for(;;){const o=e[n-1];if(o===" "||o==="	")n-=1;else break}const i=(yield*this.pushCount(n))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const n=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-n),yield*this.pushNewline(),"stream"}return yield si,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const n=this.peek(3);if((n==="---"||n==="...")&&re(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,n==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!re(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,n]=this.peek(2);if(!n&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&re(n)){const s=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=s,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let n=yield*this.pushIndicators();switch(e[n]){case"#":yield*this.pushCount(e.length-n);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(nt),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return n+=yield*this.parseBlockScalarHeader(),n+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-n),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,n,s=-1;do e=yield*this.pushNewline(),e>0?(n=yield*this.pushSpaces(!1),this.indentValue=s=n):n=0,n+=yield*this.pushSpaces(!0);while(e+n>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((s!==-1&&s<this.indentNext&&i[0]!=="#"||s===0&&(i.startsWith("---")||i.startsWith("..."))&&re(i[3]))&&!(s===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield ii,yield*this.parseLineStart();let o=0;for(;i[o]===",";)o+=yield*this.pushCount(1),o+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(o+=yield*this.pushIndicators(),i[o]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-o),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(nt),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||re(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let n=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;n!==-1&&this.buffer[n+1]==="'";)n=this.buffer.indexOf("'",n+2);else for(;n!==-1;){let o=0;for(;this.buffer[n-1-o]==="\\";)o+=1;if(o%2===0)break;n=this.buffer.indexOf('"',n+1)}const s=this.buffer.substring(0,n);let i=s.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const o=this.continueScalar(i+1);if(o===-1)break;i=s.indexOf(`
`,o)}i!==-1&&(n=i-(s[i-1]==="\r"?2:1))}if(n===-1){if(!this.atEnd)return this.setNext("quoted-scalar");n=this.buffer.length}return yield*this.pushToIndex(n+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const n=this.buffer[++e];if(n==="+")this.blockScalarKeep=!0;else if(n>"0"&&n<="9")this.blockScalarIndent=Number(n)-1;else if(n!=="-")break}return yield*this.pushUntil(n=>re(n)||n==="#")}*parseBlockScalar(){let e=this.pos-1,n=0,s;e:for(let o=this.pos;s=this.buffer[o];++o)switch(s){case" ":n+=1;break;case`
`:e=o,n=0;break;case"\r":{const a=this.buffer[o+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!s&&!this.atEnd)return this.setNext("block-scalar");if(n>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=n:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const o=this.continueScalar(e+1);if(o===-1)break;e=this.buffer.indexOf(`
`,o)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let i=e+1;for(s=this.buffer[i];s===" ";)s=this.buffer[++i];if(s==="	"){for(;s==="	"||s===" "||s==="\r"||s===`
`;)s=this.buffer[++i];e=i-1}else if(!this.blockScalarKeep)do{let o=e-1,a=this.buffer[o];a==="\r"&&(a=this.buffer[--o]);const r=o;for(;a===" ";)a=this.buffer[--o];if(a===`
`&&o>=this.pos&&o+1+n>r)e=o;else break}while(!0);return yield mt,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let n=this.pos-1,s=this.pos-1,i;for(;i=this.buffer[++s];)if(i===":"){const o=this.buffer[s+1];if(re(o)||e&&Sn.has(o))break;n=s}else if(re(i)){let o=this.buffer[s+1];if(i==="\r"&&(o===`
`?(s+=1,i=`
`,o=this.buffer[s+1]):n=s),o==="#"||e&&Sn.has(o))break;if(i===`
`){const a=this.continueScalar(s+1);if(a===-1)break;s=Math.max(s,a-2)}}else{if(e&&Sn.has(i))break;n=s}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield mt,yield*this.pushToIndex(n+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,n){const s=this.buffer.slice(this.pos,e);return s?(yield s,this.pos+=s.length,s.length):(n&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(nt))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,n=this.charAt(1);if(re(n)||e&&Sn.has(n))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,n=this.buffer[e];for(;!re(n)&&n!==">";)n=this.buffer[++e];return yield*this.pushToIndex(n===">"?e+1:e,!1)}else{let e=this.pos+1,n=this.buffer[e];for(;n;)if(bf.has(n))n=this.buffer[++e];else if(n==="%"&&es.has(this.buffer[e+1])&&es.has(this.buffer[e+2]))n=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let n=this.pos-1,s;do s=this.buffer[++n];while(s===" "||e&&s==="	");const i=n-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=n),i}*pushUntil(e){let n=this.pos,s=this.buffer[n];for(;!e(s);)s=this.buffer[++n];return yield*this.pushToIndex(n,!1)}}class vf{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let n=0,s=this.lineStarts.length;for(;n<s;){const o=n+s>>1;this.lineStarts[o]<e?n=o+1:s=o}if(this.lineStarts[n]===e)return{line:n+1,col:1};if(n===0)return{line:0,col:e};const i=this.lineStarts[n-1];return{line:n,col:e-i+1}}}}function $e(t,e){for(let n=0;n<t.length;++n)if(t[n].type===e)return!0;return!1}function ns(t){for(let e=0;e<t.length;++e)switch(t[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function oi(t){switch(t?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function $n(t){switch(t.type){case"document":return t.start;case"block-map":{const e=t.items[t.items.length-1];return e.sep??e.start}case"block-seq":return t.items[t.items.length-1].start;default:return[]}}function Ve(t){if(t.length===0)return[];let e=t.length;e:for(;--e>=0;)switch(t[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;t[++e]?.type==="space";);return t.splice(e,t.length)}function ts(t){if(t.start.type==="flow-seq-start")for(const e of t.items)e.sep&&!e.value&&!$e(e.start,"explicit-key-ind")&&!$e(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,oi(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class _f{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new yf,this.onNewLine=e}*parse(e,n=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const s of this.lexer.lex(e,n))yield*this.next(s);n||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const n=ff(e);if(n)if(n==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=n,yield*this.step(),n){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const s=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:s,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&e?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const n=e??this.stack.pop();if(!n)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield n;else{const s=this.peek(1);switch(n.type==="block-scalar"?n.indent="indent"in s?s.indent:0:n.type==="flow-collection"&&s.type==="document"&&(n.indent=0),n.type==="flow-collection"&&ts(n),s.type){case"document":s.value=n;break;case"block-scalar":s.props.push(n);break;case"block-map":{const i=s.items[s.items.length-1];if(i.value){s.items.push({start:[],key:n,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=n;else{Object.assign(i,{key:n,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=s.items[s.items.length-1];i.value?s.items.push({start:[],value:n}):i.value=n;break}case"flow-collection":{const i=s.items[s.items.length-1];!i||i.value?s.items.push({start:[],key:n,sep:[]}):i.sep?i.value=n:Object.assign(i,{key:n,sep:[]});return}default:yield*this.pop(),yield*this.pop(n)}if((s.type==="document"||s.type==="block-map"||s.type==="block-seq")&&(n.type==="block-map"||n.type==="block-seq")){const i=n.items[n.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&ns(i.start)===-1&&(n.indent===0||i.start.every(o=>o.type!=="comment"||o.indent<n.indent))&&(s.type==="document"?s.end=i.start:s.items.push({start:i.start}),n.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{ns(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const n=$n(this.peek(2)),s=Ve(n);let i;e.end?(i=e.end,i.push(this.sourceToken),delete e.end):i=[this.sourceToken];const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:s,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){const n=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,n.value){const s="end"in n.value?n.value.end:void 0;(Array.isArray(s)?s[s.length-1]:void 0)?.type==="comment"?s?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)e.items.push({start:[this.sourceToken]});else if(n.sep)n.sep.push(this.sourceToken);else{if(this.atIndentedComment(n.start,e.indent)){const i=e.items[e.items.length-2]?.value?.end;if(Array.isArray(i)){Array.prototype.push.apply(i,n.start),i.push(this.sourceToken),e.items.pop();return}}n.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent,i=s&&(n.sep||n.explicitKey)&&this.type!=="seq-item-ind";let o=[];if(i&&n.sep&&!n.value){const a=[];for(let r=0;r<n.sep.length;++r){const l=n.sep[r];switch(l.type){case"newline":a.push(r);break;case"space":break;case"comment":l.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(o=n.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":i||n.value?(o.push(this.sourceToken),e.items.push({start:o}),this.onKeyLine=!0):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"explicit-key-ind":!n.sep&&!n.explicitKey?(n.start.push(this.sourceToken),n.explicitKey=!0):i||n.value?(o.push(this.sourceToken),e.items.push({start:o,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(n.explicitKey)if(n.sep)if(n.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if($e(n.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]});else if(oi(n.key)&&!$e(n.sep,"newline")){const a=Ve(n.start),r=n.key,l=n.sep;l.push(this.sourceToken),delete n.key,delete n.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:r,sep:l}]})}else o.length>0?n.sep=n.sep.concat(o,this.sourceToken):n.sep.push(this.sourceToken);else if($e(n.start,"newline"))Object.assign(n,{key:null,sep:[this.sourceToken]});else{const a=Ve(n.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else n.sep?n.value||i?e.items.push({start:o,key:null,sep:[this.sourceToken]}):$e(n.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);i||n.value?(e.items.push({start:o,key:a,sep:[]}),this.onKeyLine=!0):n.sep?this.stack.push(a):(Object.assign(n,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!n.explicitKey&&n.sep&&!$e(n.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&e.items.push({start:o});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){const n=e.items[e.items.length-1];switch(this.type){case"newline":if(n.value){const s="end"in n.value?n.value.end:void 0;(Array.isArray(s)?s[s.length-1]:void 0)?.type==="comment"?s?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else n.start.push(this.sourceToken);return;case"space":case"comment":if(n.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(n.start,e.indent)){const i=e.items[e.items.length-2]?.value?.end;if(Array.isArray(i)){Array.prototype.push.apply(i,n.start),i.push(this.sourceToken),e.items.pop();return}}n.start.push(this.sourceToken)}return;case"anchor":case"tag":if(n.value||this.indent<=e.indent)break;n.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;n.value||$e(n.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const n=e.items[e.items.length-1];if(this.type==="flow-error-end"){let s;do yield*this.pop(),s=this.peek(1);while(s?.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!n||n.sep?e.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken);return;case"map-value-ind":!n||n.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!n||n.value?e.items.push({start:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!n||n.value?e.items.push({start:[],key:i,sep:[]}):n.sep?this.stack.push(i):Object.assign(n,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const s=this.startBlockValue(e);s?this.stack.push(s):(yield*this.pop(),yield*this.step())}else{const s=this.peek(2);if(s.type==="block-map"&&(this.type==="map-value-ind"&&s.indent===e.indent||this.type==="newline"&&!s.items[s.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&s.type!=="flow-collection"){const i=$n(s),o=Ve(i);ts(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:o,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const n=$n(e),s=Ve(n);return s.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const n=$n(e),s=Ve(n);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,n){return this.type!=="comment"||this.indent<=n?!1:e.every(s=>s.type==="newline"||s.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function kf(t){const e=t.prettyErrors!==!1;return{lineCounter:t.lineCounter||e&&new vf||null,prettyErrors:e}}function wf(t,e={}){const{lineCounter:n,prettyErrors:s}=kf(e),i=new _f(n?.addNewLine),o=new hf(e);let a=null;for(const r of o.compose(i.parse(t),!0,t.length))if(!a)a=r;else if(a.options.logLevel!=="silent"){a.errors.push(new sn(r.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return s&&n&&(a.errors.forEach(Qt(t,n)),a.warnings.forEach(Qt(t,n))),a}function xf(t,e,n){let s;const i=wf(t,n);if(!i)return null;if(i.warnings.forEach(o=>Ls(i.options.logLevel,o)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:s},n))}const Sf={class:"command-yaml-tables"},$f={class:"command-yaml-section-title"},Pf={class:"command-yaml-table-wrap"},Af={class:"command-yaml-table"},Tf={class:"command-yaml-th-heat command-yaml-th-heat-head",scope:"col"},Kf=["onClick","onKeydown","data-section","aria-pressed","title"],Nf={class:"command-yaml-col-command"},If=["href"],Lf={class:"command-yaml-options"},Cf=["title"],Of=["value","disabled","onInput","onKeydown","onBlur"],Ef={key:0,class:"command-yaml-order-error"},Bf=K({__name:"CommandYamlTable",setup(t){const{page:e}=un();function n(I){return I.replace(/\.html$/i,"").replace(/\/$/,"")||"/"}function s(I){const A=new Map;for(const j of I.byContent??[])j?.path&&A.set(n(j.path),Number(j.views)||0);const D=I.pageViews??{};return j=>{const ee=n(j);return A.has(ee)?A.get(ee):Number(D[ee]??0)||0}}const i=s(le),o=Object.assign({"../../../docs/AI/book-AI/example/01-example.md":ku,"../../../docs/AI/book-AI/example/index.md":wu,"../../../docs/AI/book-AI/index.md":xu,"../../../docs/AI/index.md":Su,"../../../docs/block-chain/book-block-chain/example/01-example.md":$u,"../../../docs/block-chain/book-block-chain/example/index.md":Pu,"../../../docs/block-chain/book-block-chain/index.md":Au,"../../../docs/block-chain/index.md":Tu,"../../../docs/block-contract/book-block-contract/example/01-example.md":Ku,"../../../docs/block-contract/book-block-contract/example/index.md":Nu,"../../../docs/block-contract/book-block-contract/index.md":Iu,"../../../docs/block-contract/index.md":Lu,"../../../docs/block-frontend/book-block-frontend/example/01-example.md":Cu,"../../../docs/block-frontend/book-block-frontend/example/index.md":Ou,"../../../docs/block-frontend/book-block-frontend/index.md":Eu,"../../../docs/block-frontend/index.md":Bu,"../../../docs/block-quant/book-block-quant/example/01-example.md":Du,"../../../docs/block-quant/book-block-quant/example/index.md":Mu,"../../../docs/block-quant/book-block-quant/index.md":Vu,"../../../docs/block-quant/index.md":ju,"../../../docs/cocos/book-cocos/example/01-example.md":Hu,"../../../docs/cocos/book-cocos/example/index.md":Ru,"../../../docs/cocos/book-cocos/index.md":Fu,"../../../docs/cocos/index.md":Uu,"../../../docs/cpp/book-cpp/example/01-example.md":qu,"../../../docs/cpp/book-cpp/example/index.md":zu,"../../../docs/cpp/book-cpp/index.md":Gu,"../../../docs/cpp/index.md":Wu,"../../../docs/css/book-css/example/01-example.md":Ju,"../../../docs/css/book-css/example/index.md":Yu,"../../../docs/css/book-css/index.md":Qu,"../../../docs/css/index.md":Xu,"../../../docs/daily/ opening/index.md":Zu,"../../../docs/daily/index.md":ed,"../../../docs/daily/template/index.md":nd,"../../../docs/daily/template/问女生情史.md":td,"../../../docs/databases/elasticsearch/file1/devTool.md":sd,"../../../docs/databases/elasticsearch/file1/index.md":id,"../../../docs/databases/elasticsearch/file1/install.md":od,"../../../docs/databases/elasticsearch/file1/kibana.md":ad,"../../../docs/databases/elasticsearch/index.md":rd,"../../../docs/databases/index.md":ld,"../../../docs/databases/prisma/basic/client.md":cd,"../../../docs/databases/prisma/basic/db.md":ud,"../../../docs/databases/prisma/basic/generate.md":dd,"../../../docs/databases/prisma/basic/index.md":pd,"../../../docs/databases/prisma/basic/install.md":md,"../../../docs/databases/prisma/basic/migrate.md":hd,"../../../docs/databases/prisma/basic/schema.md":fd,"../../../docs/databases/prisma/basic/studio.md":bd,"../../../docs/databases/prisma/index.md":gd,"../../../docs/english/book-english/example/01-example.md":yd,"../../../docs/english/book-english/example/index.md":vd,"../../../docs/english/book-english/index.md":_d,"../../../docs/english/index.md":kd,"../../../docs/golang/book-golang/example/01-example.md":wd,"../../../docs/golang/book-golang/example/index.md":xd,"../../../docs/golang/book-golang/index.md":Sd,"../../../docs/golang/index.md":$d,"../../../docs/hacker/book-hacker/example/01-example.md":Pd,"../../../docs/hacker/book-hacker/example/index.md":Ad,"../../../docs/hacker/book-hacker/index.md":Td,"../../../docs/hacker/index.md":Kd,"../../../docs/index.md":Nd,"../../../docs/math/book-math/example/01-example.md":Id,"../../../docs/math/book-math/example/index.md":Ld,"../../../docs/math/book-math/index.md":Cd,"../../../docs/math/index.md":Od,"../../../docs/node.js/book-node.js/example/01-example.md":Ed,"../../../docs/node.js/book-node.js/example/index.md":Bd,"../../../docs/node.js/book-node.js/index.md":Dd,"../../../docs/node.js/index.md":Md,"../../../docs/python/book-python/example/01-example.md":Vd,"../../../docs/python/book-python/example/index.md":jd,"../../../docs/python/book-python/index.md":Hd,"../../../docs/python/index.md":Rd,"../../../docs/react/book-react/example/01-example.md":Fd,"../../../docs/react/book-react/example/index.md":Ud,"../../../docs/react/book-react/index.md":qd,"../../../docs/react/index.md":zd,"../../../docs/rust/basis/index.md":Gd,"../../../docs/rust/basis/start/example.md":Wd,"../../../docs/rust/basis/start/index.md":Jd,"../../../docs/rust/dioxus/index.md":Yd,"../../../docs/rust/dioxus/start/dx.md":Qd,"../../../docs/rust/dioxus/start/index.md":Xd,"../../../docs/rust/dioxus/start/install.md":Zd,"../../../docs/rust/dioxus/start/new-desktop.md":ep,"../../../docs/rust/dioxus/start/new-fullstack.md":np,"../../../docs/rust/dioxus/start/new-mobile.md":tp,"../../../docs/rust/dioxus/start/new-spa.md":sp,"../../../docs/rust/index.md":ip,"../../../docs/terminal/index.md":op,"../../../docs/terminal/linux/directory/cd.md":ap,"../../../docs/terminal/linux/directory/clear.md":rp,"../../../docs/terminal/linux/directory/cp.md":lp,"../../../docs/terminal/linux/directory/index.md":cp,"../../../docs/terminal/linux/directory/ln.md":up,"../../../docs/terminal/linux/directory/ls.md":dp,"../../../docs/terminal/linux/directory/man.md":pp,"../../../docs/terminal/linux/directory/mkdir.md":mp,"../../../docs/terminal/linux/directory/mv.md":hp,"../../../docs/terminal/linux/directory/pwd.md":fp,"../../../docs/terminal/linux/directory/readlink.md":bp,"../../../docs/terminal/linux/directory/rm.md":gp,"../../../docs/terminal/linux/directory/scp.md":yp,"../../../docs/terminal/linux/directory/touch.md":vp,"../../../docs/terminal/linux/directory/which.md":_p,"../../../docs/terminal/linux/document/cat.md":kp,"../../../docs/terminal/linux/document/grep.md":wp,"../../../docs/terminal/linux/document/head.md":xp,"../../../docs/terminal/linux/document/index.md":Sp,"../../../docs/terminal/linux/document/less.md":$p,"../../../docs/terminal/linux/document/nano.md":Pp,"../../../docs/terminal/linux/document/tail.md":Ap,"../../../docs/terminal/linux/document/vim.md":Tp,"../../../docs/terminal/linux/file/chmod.md":Kp,"../../../docs/terminal/linux/file/chown.md":Np,"../../../docs/terminal/linux/file/file.md":Ip,"../../../docs/terminal/linux/file/find.md":Lp,"../../../docs/terminal/linux/file/gzip.md":Cp,"../../../docs/terminal/linux/file/index.md":Op,"../../../docs/terminal/linux/file/stat.md":Ep,"../../../docs/terminal/linux/file/tar.md":Bp,"../../../docs/terminal/linux/file/zip.md":Dp,"../../../docs/terminal/linux/index.md":Mp,"../../../docs/terminal/linux/process/background.md":Vp,"../../../docs/terminal/linux/process/index.md":jp,"../../../docs/terminal/linux/process/journalctl-u.md":Hp,"../../../docs/terminal/linux/process/kill.md":Rp,"../../../docs/terminal/linux/process/lsof.md":Fp,"../../../docs/terminal/linux/process/netstat.md":Up,"../../../docs/terminal/linux/process/nice.md":qp,"../../../docs/terminal/linux/process/nohup.md":zp,"../../../docs/terminal/linux/process/pgrep.md":Gp,"../../../docs/terminal/linux/process/pidof.md":Wp,"../../../docs/terminal/linux/process/pkill.md":Jp,"../../../docs/terminal/linux/process/ps.md":Yp,"../../../docs/terminal/linux/process/pstree.md":Qp,"../../../docs/terminal/linux/process/renice.md":Xp,"../../../docs/terminal/linux/process/systemctl.md":Zp,"../../../docs/terminal/linux/process/uptime.md":em,"../../../docs/terminal/linux/process/w.md":nm,"../../../docs/terminal/linux/system/apt.md":tm,"../../../docs/terminal/linux/system/df.md":sm,"../../../docs/terminal/linux/system/du.md":im,"../../../docs/terminal/linux/system/echo-path.md":om,"../../../docs/terminal/linux/system/echo.md":am,"../../../docs/terminal/linux/system/eval.md":rm,"../../../docs/terminal/linux/system/exec.md":lm,"../../../docs/terminal/linux/system/exit.md":cm,"../../../docs/terminal/linux/system/export-path.md":um,"../../../docs/terminal/linux/system/free.md":dm,"../../../docs/terminal/linux/system/growpart.md":pm,"../../../docs/terminal/linux/system/index.md":mm,"../../../docs/terminal/linux/system/lsblk.md":hm,"../../../docs/terminal/linux/system/passwd.md":fm,"../../../docs/terminal/linux/system/pipe.md":bm,"../../../docs/terminal/linux/system/reboot.md":gm,"../../../docs/terminal/linux/system/redirect-append.md":ym,"../../../docs/terminal/linux/system/redirect-overwrite.md":vm,"../../../docs/terminal/linux/system/resize2fs.md":_m,"../../../docs/terminal/linux/system/shutdown.md":km,"../../../docs/terminal/linux/system/sudo.md":wm,"../../../docs/terminal/linux/system/top.md":xm,"../../../docs/terminal/linux/system/uname.md":Sm,"../../../docs/terminal/linux/system/unset-path.md":$m,"../../../docs/terminal/linux/system/wc.md":Pm,"../../../docs/terminal/linux/system/who.md":Am,"../../../docs/terminal/linux/system/whoami.md":Tm,"../../../docs/terminal/podman/basic/index.md":Km,"../../../docs/terminal/podman/basic/info.md":Nm,"../../../docs/terminal/podman/basic/install.md":Im,"../../../docs/terminal/podman/basic/machine-init.md":Lm,"../../../docs/terminal/podman/basic/machine-ls.md":Cm,"../../../docs/terminal/podman/basic/machine-restart.md":Om,"../../../docs/terminal/podman/basic/machine-rm.md":Em,"../../../docs/terminal/podman/basic/machine-ssh.md":Bm,"../../../docs/terminal/podman/basic/machine-start.md":Dm,"../../../docs/terminal/podman/basic/machine-status.md":Mm,"../../../docs/terminal/podman/basic/machine-stop.md":Vm,"../../../docs/terminal/podman/basic/system-df.md":jm,"../../../docs/terminal/podman/basic/system-info.md":Hm,"../../../docs/terminal/podman/basic/system-prune.md":Rm,"../../../docs/terminal/podman/basic/system-reset.md":Fm,"../../../docs/terminal/podman/basic/version.md":Um,"../../../docs/terminal/podman/index.md":qm,"../../../docs/terminal/shell/basic/arithmetic.md":zm,"../../../docs/terminal/shell/basic/builtin-vars.md":Gm,"../../../docs/terminal/shell/basic/comment.md":Wm,"../../../docs/terminal/shell/basic/for.md":Jm,"../../../docs/terminal/shell/basic/function.md":Ym,"../../../docs/terminal/shell/basic/if.md":Qm,"../../../docs/terminal/shell/basic/index.md":Xm,"../../../docs/terminal/shell/basic/logical.md":Zm,"../../../docs/terminal/shell/basic/read.md":eh,"../../../docs/terminal/shell/basic/shebang.md":nh,"../../../docs/terminal/shell/basic/variable.md":th,"../../../docs/terminal/shell/basic/while.md":sh,"../../../docs/terminal/shell/index.md":ih,"../../../docs/testing/book-bug-test/example/01-example.md":oh,"../../../docs/testing/book-bug-test/example/index.md":ah,"../../../docs/testing/book-bug-test/index.md":rh,"../../../docs/testing/index.md":lh,"../../../docs/vue/book-vue/example/01-example.md":ch,"../../../docs/vue/book-vue/example/index.md":uh,"../../../docs/vue/book-vue/index.md":dh,"../../../docs/vue/index.md":ph});function a(I){const A=I.replace(/\\/g,"/"),D=A.lastIndexOf("/docs/");return D!==-1?A.slice(D+6):A}function r(I){const A=I.replace(/\\/g,"/"),D=A.lastIndexOf("/");return D===-1?"":A.slice(0,D)}function l(I){const A=I.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/);if(!A)return null;try{return xf(A[1])}catch{return null}}function c(I){const A=I.order;if(typeof A=="number"&&!Number.isNaN(A))return A;if(typeof A=="string"&&A.trim()!==""){const D=Number(A);if(!Number.isNaN(D))return D}return Number.POSITIVE_INFINITY}function g(I){if(!I)return null;const A=I.title;return typeof A=="string"&&A.trim()?A.trim():null}function d(I){const A=I.split("/").pop()??"";return!A.endsWith(".md")||A==="index.md"?null:A.replace(/\.md$/,"")}function f(I){return I==null?"":typeof I=="string"?I.trim():Array.isArray(I)?I.map(A=>typeof A=="string"?A:String(A)).join(", "):String(I)}function _(I){return I.replace(new RegExp("(?<!\\[)\\bFILE\\b(?!\\])","g"),"[FILE]")}const w=en({}),b=en({}),v=en({}),$=en({}),x=en({}),P=!1;function C(I,A){return`${I}/${A}`}ce(()=>e.value.relativePath,()=>{for(const I of Object.keys(w))delete w[I];for(const I of Object.keys(b))delete b[I];for(const I of Object.keys(v))delete v[I];for(const I of Object.keys($))delete $[I];for(const I of Object.keys(x))delete x[I]});function M(I,A){const D=[...I];return A==="views"?D.sort((j,ee)=>ee.views-j.views||j.order-ee.order||j.slug.localeCompare(ee.slug,"en",{numeric:!0})):D.sort((j,ee)=>j.order-ee.order||ee.views-j.views||j.slug.localeCompare(ee.slug,"en",{numeric:!0})),D}function V(I){const D=(w[I]??"order")==="order"?"views":"order";w[I]=D}function q(I,A){A.key!=="Enter"&&A.key!==" "||(A.preventDefault(),V(I))}const N=T(()=>{const I=e.value.relativePath.replace(/\\/g,"/"),A=r(I);if(!A)return[];const D=`${A}/`,j=new Map;for(const[ae,fe]of Object.entries(o)){const Be=a(ae);if(!Be.startsWith(D))continue;const Te=Be.slice(D.length).split("/");if(Te.length!==2||!Te[1].endsWith(".md"))continue;const Se=Te[0];if(Se.startsWith("."))continue;const De=d(ae);if(!De)continue;const Ze=l(fe);if(!Ze)continue;const Mt=Ze.command,Vt=Ze.function;if(typeof Mt!="string"||typeof Vt!="string")continue;const ai=c(Ze),ri=`/${A}/${Se}/${De}`,li={command:_(Mt),function:Vt,options:f(Ze.options),slug:De,docsRelativePath:`${A}/${Se}/${De}.md`,order:ai,views:i(ri)};j.has(Se)||j.set(Se,[]),j.get(Se).push(li)}function ee(ae){const fe=ae.replace(/\\/g,"/");for(const[Be,Xe]of Object.entries(o))if(a(Be).replace(/\\/g,"/")===fe)return Xe}const Ee=[];for(const[ae,fe]of j){if(fe.length===0)continue;const Be=`${A}/${ae}/index.md`,Xe=ee(Be),Te=Xe?l(Xe):null,Se=g(Te)??ae,De=Te?c(Te):Number.POSITIVE_INFINITY;Ee.push({section:ae,sectionTitle:Se,sectionOrder:De,rows:fe})}return Ee.sort((ae,fe)=>ae.sectionOrder-fe.sectionOrder||ae.section.localeCompare(fe.section,"en",{numeric:!0})),Ee}),J=T(()=>N.value.map(I=>{const A=w[I.section]??"order",D=I.rows.map(j=>{const ee=C(I.section,j.slug),Ee=x[ee];return Number.isFinite(Ee)?{...j,order:Ee}:j});return{...I,sortedRows:M(D,A),heatSortActive:A==="views"}})),de=T(()=>r(e.value.relativePath.replace(/\\/g,"/")));function xe(I,A){return _e(`/${de.value}/${I}/${A}`)}function Y(I,A){const D=C(I,A.slug);return Object.prototype.hasOwnProperty.call(b,D)?b[D]:Number.isFinite(A.order)?String(A.order):""}function yn(I,A,D){const j=C(I,A.slug);b[j]=D,delete $[j]}async function Dt(I,A){}return(I,A)=>(u(),h("div",Sf,[(u(!0),h(R,null,z(J.value,D=>(u(),h(R,{key:D.section},[p("h3",$f,B(D.sectionTitle),1),p("div",Pf,[p("table",Af,[p("thead",null,[p("tr",null,[A[0]||(A[0]=p("th",{class:"command-yaml-col-command"},"命令",-1)),A[1]||(A[1]=p("th",null,"功能",-1)),A[2]||(A[2]=p("th",null,"选项",-1)),p("th",Tf,[p("button",{type:"button",class:U(["command-yaml-th-heat-toggle",{"command-yaml-th-heat--views":D.heatSortActive}]),onClick:j=>V(D.section),onKeydown:j=>q(D.section,j),"data-section":D.section,"aria-pressed":D.heatSortActive,title:D.heatSortActive?"当前：按热度（PV）降序，列内为浏览量。点击切换为按 order 与排序值":"当前：按文档 order 排序，列内为 order。点击切换为按热度（PV）"},B(D.heatSortActive?"热度":"排序"),43,Kf)])])]),p("tbody",null,[(u(!0),h(R,null,z(D.sortedRows,j=>(u(),h("tr",{key:D.section+"/"+j.slug},[p("td",Nf,[p("a",{href:xe(D.section,j.slug)},[p("code",null,B(j.command),1)],8,If)]),p("td",null,B(j.function),1),p("td",Lf,B(j.options),1),p("td",{class:"command-yaml-heat",title:D.heatSortActive?"PV："+j.views:"order："+j.order},[D.heatSortActive||!m(P)?(u(),h(R,{key:0},[Ae(B(D.heatSortActive?j.views:j.order===Number.POSITIVE_INFINITY?"—":j.order),1)],64)):(u(),h(R,{key:1},[p("input",{class:"command-yaml-order-input",type:"number",min:"0",step:"1",inputmode:"numeric",value:Y(D.section,j),disabled:v[C(D.section,j.slug)],onInput:ee=>yn(D.section,j,ee.target.value),onKeydown:ds(ms(ee=>Dt(D.section),["prevent"]),["enter"]),onBlur:ee=>Dt(D.section)},null,40,Of),$[C(D.section,j.slug)]?(u(),h("span",Ef," ! ")):S("",!0)],64))],8,Cf)]))),128))])])])],64))),128))]))}}),Df=L(Bf,[["__scopeId","data-v-914a35b9"]]),Vf={extends:Ut,Layout(){return Gn(Ut.Layout,null,{"sidebar-nav-after":()=>Gn(Lc),"layout-bottom":()=>Gn(pu)})},enhanceApp({app:t}){t.component("PopularHome",Wc),t.component("PopularInBook",ou),t.component("PopularInChapter",du),t.component("CategoryBooks",_u),t.component("CommandYamlTable",Df)}};export{Vf as R,F as u};
