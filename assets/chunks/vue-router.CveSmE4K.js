const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.C9RGc7RC.js","assets/YunPostList.vue_vue_type_script_setup_true_lang.CURM9GOq.js","assets/app.CHFQFRdY.js","assets/framework.DZENVrE6.js","assets/chunks/dayjs.Byk5cVHE.js","assets/chunks/nprogress.UDyXTrCf.js","assets/chunks/vue-i18n.BHw1UmpY.js","assets/chunks/pinia.DtpzctVM.js","assets/chunks/@vueuse/motion.mnYIfwk6.js","assets/app.DiIlVHff.css","assets/YunPostMeta.vue_vue_type_style_index_0_lang.C1q4MASs.js","assets/index.Codtc5Vj.js","assets/animation.zFQy042r.js","assets/YunPostMeta.DCrVMfuT.css","assets/post.Bmyknh-m.js","assets/YunPostList.BfWGcc9d.css","assets/_...path_.DoHQvf45.js","assets/404.30OtnhPR.js","assets/ValaxyMain.vue_vue_type_style_index_0_lang.CY3tnqzF.js","assets/YunComment.vue_vue_type_style_index_0_lang._o7WiOOe.js","assets/index.C5okkQwF.js","assets/YunComment.B2y49mxl.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang.CQfi-FYn.js","assets/ValaxyMain.BHXg_53O.css","assets/index.CCVhShw0.js","assets/site.k5I551DW.js","assets/index.Yb8sPfmQ.js","assets/index.BYPgqQNA.js","assets/index.-xILLtLt.js","assets/index.DfXt1eUW.css","assets/_page_.B3R3yXfM.js","assets/index.CWTDQ2QX.js","assets/hello-valaxy.DJPPv0BR.js","assets/index.CRAijTwG.js"])))=>i.map(i=>d[i]);
import{j as U,A as le,u as oe,C as At,n as bt,e as rt,i as Ot,c as $,h as ot,D as _e,r as Ct,w as Lt,s as Tt,_ as N}from"../framework.DZENVrE6.js";var Ae=(e,t,n)=>typeof e=="function"?e(t,n):e;/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const W=typeof document<"u";function st(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function kt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&st(e.default)}const b=Object.assign;function Re(e,t){const n={};for(const r in t){const o=t[r];n[r]=V(o)?o.map(e):e(o)}return n}const se=()=>{},V=Array.isArray,at=/#/g,xt=/&/g,It=/\//g,Dt=/=/g,Nt=/\?/g,it=/\+/g,Vt=/%5B/g,jt=/%5D/g,ct=/%5E/g,Mt=/%60/g,lt=/%7B/g,$t=/%7C/g,ut=/%7D/g,Ht=/%20/g;function Le(e){return encodeURI(""+e).replace($t,"|").replace(Vt,"[").replace(jt,"]")}function Bt(e){return Le(e).replace(lt,"{").replace(ut,"}").replace(ct,"^")}function be(e){return Le(e).replace(it,"%2B").replace(Ht,"+").replace(at,"%23").replace(xt,"%26").replace(Mt,"`").replace(lt,"{").replace(ut,"}").replace(ct,"^")}function Kt(e){return be(e).replace(Dt,"%3D")}function Gt(e){return Le(e).replace(at,"%23").replace(Nt,"%3F")}function zt(e){return e==null?"":Gt(e).replace(It,"%2F")}function ae(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const qt=/\/$/,Ut=e=>e.replace(qt,"");function we(e,t,n="/"){let r,o={},d="",h="";const p=t.indexOf("#");let s=t.indexOf("?");return p<s&&p>=0&&(s=-1),s>-1&&(r=t.slice(0,s),d=t.slice(s+1,p>-1?p:t.length),o=e(d)),p>-1&&(r=r||t.slice(0,p),h=t.slice(p,t.length)),r=Ft(r??t,n),{fullPath:r+(d&&"?")+d+h,path:r,query:o,hash:ae(h)}}function Zt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function je(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Wt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Q(t.matched[r],n.matched[o])&&ft(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Q(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ft(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Yt(e[n],t[n]))return!1;return!0}function Yt(e,t){return V(e)?Me(e,t):V(t)?Me(t,e):e===t}function Me(e,t){return V(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ft(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let d=n.length-1,h,p;for(h=0;h<r.length;h++)if(p=r[h],p!==".")if(p==="..")d>1&&d--;else break;return n.slice(0,d).join("/")+"/"+r.slice(h).join("/")}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var q;(function(e){e.back="back",e.forward="forward",e.unknown=""})(q||(q={}));const Pe="";function dt(e){if(!e)if(W){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ut(e)}const Qt=/^[^#]+#/;function ht(e,t){return e.replace(Qt,"#")+t}function Xt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const de=()=>({left:window.scrollX,top:window.scrollY});function Jt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Xt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $e(e,t){return(history.state?history.state.position-t:-1)+e}const Oe=new Map;function en(e,t){Oe.set(e,t)}function tn(e){const t=Oe.get(e);return Oe.delete(e),t}let nn=()=>location.protocol+"//"+location.host;function pt(e,t){const{pathname:n,search:r,hash:o}=t,d=e.indexOf("#");if(d>-1){let p=o.includes(e.slice(d))?e.slice(d).length:1,s=o.slice(p);return s[0]!=="/"&&(s="/"+s),je(s,"")}return je(n,e)+r+o}function rn(e,t,n,r){let o=[],d=[],h=null;const p=({state:c})=>{const l=pt(e,location),g=n.value,v=t.value;let w=0;if(c){if(n.value=l,t.value=c,h&&h===g){h=null;return}w=v?c.position-v.position:0}else r(l);o.forEach(P=>{P(n.value,g,{delta:w,type:X.pop,direction:w?w>0?q.forward:q.back:q.unknown})})};function s(){h=n.value}function f(c){o.push(c);const l=()=>{const g=o.indexOf(c);g>-1&&o.splice(g,1)};return d.push(l),l}function u(){const{history:c}=window;c.state&&c.replaceState(b({},c.state,{scroll:de()}),"")}function a(){for(const c of d)c();d=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:s,listen:f,destroy:a}}function He(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?de():null}}function on(e){const{history:t,location:n}=window,r={value:pt(e,n)},o={value:t.state};o.value||d(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function d(s,f,u){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+s:nn()+e+s;try{t[u?"replaceState":"pushState"](f,"",c),o.value=f}catch(l){console.error(l),n[u?"replace":"assign"](c)}}function h(s,f){const u=b({},t.state,He(o.value.back,s,o.value.forward,!0),f,{position:o.value.position});d(s,u,!0),r.value=s}function p(s,f){const u=b({},o.value,t.state,{forward:s,scroll:de()});d(u.current,u,!0);const a=b({},He(r.value,s,null),{position:u.position+1},f);d(s,a,!1),r.value=s}return{location:r,state:o,push:p,replace:h}}function Mn(e){e=dt(e);const t=on(e),n=rn(e,t.state,t.location,t.replace);function r(d,h=!0){h||n.pauseListeners(),history.go(d)}const o=b({location:"",base:e,go:r,createHref:ht.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function $n(e=""){let t=[],n=[Pe],r=0;e=dt(e);function o(p){r++,r!==n.length&&n.splice(r),n.push(p)}function d(p,s,{direction:f,delta:u}){const a={direction:f,delta:u,type:X.pop};for(const c of t)c(p,s,a)}const h={location:Pe,state:{},base:e,createHref:ht.bind(null,e),replace(p){n.splice(r--,1),o(p)},push(p,s){o(p)},listen(p){return t.push(p),()=>{const s=t.indexOf(p);s>-1&&t.splice(s,1)}},destroy(){t=[],n=[Pe],r=0},go(p,s=!0){const f=this.location,u=p<0?q.back:q.forward;r=Math.max(0,Math.min(r+p,n.length-1)),s&&d(this.location,f,{direction:u,delta:p})}};return Object.defineProperty(h,"location",{enumerable:!0,get:()=>n[r]}),h}function sn(e){return typeof e=="string"||e&&typeof e=="object"}function mt(e){return typeof e=="string"||typeof e=="symbol"}const gt=Symbol("");var Be;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Be||(Be={}));function J(e,t){return b(new Error,{type:e,[gt]:!0},t)}function M(e,t){return e instanceof Error&&gt in e&&(t==null||!!(e.type&t))}const Ke="[^/]+?",an={sensitive:!1,strict:!1,start:!0,end:!0},cn=/[.+*?^${}()[\]/\\]/g;function ln(e,t){const n=b({},an,t),r=[];let o=n.start?"^":"";const d=[];for(const f of e){const u=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let a=0;a<f.length;a++){const c=f[a];let l=40+(n.sensitive?.25:0);if(c.type===0)a||(o+="/"),o+=c.value.replace(cn,"\\$&"),l+=40;else if(c.type===1){const{value:g,repeatable:v,optional:w,regexp:P}=c;d.push({name:g,repeatable:v,optional:w});const E=P||Ke;if(E!==Ke){l+=10;try{new RegExp(`(${E})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+T.message)}}let R=v?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;a||(R=w&&f.length<2?`(?:/${R})`:"/"+R),w&&(R+="?"),o+=R,l+=20,w&&(l+=-8),v&&(l+=-20),E===".*"&&(l+=-50)}u.push(l)}r.push(u)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function p(f){const u=f.match(h),a={};if(!u)return null;for(let c=1;c<u.length;c++){const l=u[c]||"",g=d[c-1];a[g.name]=l&&g.repeatable?l.split("/"):l}return a}function s(f){let u="",a=!1;for(const c of e){(!a||!u.endsWith("/"))&&(u+="/"),a=!1;for(const l of c)if(l.type===0)u+=l.value;else if(l.type===1){const{value:g,repeatable:v,optional:w}=l,P=g in f?f[g]:"";if(V(P)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=V(P)?P.join("/"):P;if(!E)if(w)c.length<2&&(u.endsWith("/")?u=u.slice(0,-1):a=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:h,score:r,keys:d,parse:p,stringify:s}}function un(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function yt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const d=un(r[n],o[n]);if(d)return d;n++}if(Math.abs(o.length-r.length)===1){if(Ge(r))return 1;if(Ge(o))return-1}return o.length-r.length}function Ge(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const fn={type:0,value:""},dn=/[a-zA-Z0-9_]/;function hn(e){if(!e)return[[]];if(e==="/")return[[fn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(l){throw new Error(`ERR (${n})/"${f}": ${l}`)}let n=0,r=n;const o=[];let d;function h(){d&&o.push(d),d=[]}let p=0,s,f="",u="";function a(){f&&(n===0?d.push({type:0,value:f}):n===1||n===2||n===3?(d.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:f,regexp:u,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),f="")}function c(){f+=s}for(;p<e.length;){if(s=e[p++],s==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:s==="/"?(f&&a(),h()):s===":"?(a(),n=1):c();break;case 4:c(),n=r;break;case 1:s==="("?n=2:dn.test(s)?c():(a(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--);break;case 2:s===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:a(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),h(),o}function pn(e,t,n){const r=ln(hn(e.path),n),o=b(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function mn(e,t){const n=[],r=new Map;t=Ze({strict:!1,end:!0,sensitive:!1},t);function o(a){return r.get(a)}function d(a,c,l){const g=!l,v=qe(a);v.aliasOf=l&&l.record;const w=Ze(t,a),P=[v];if("alias"in a){const T=typeof a.alias=="string"?[a.alias]:a.alias;for(const k of T)P.push(qe(b({},v,{components:l?l.record.components:v.components,path:k,aliasOf:l?l.record:v})))}let E,R;for(const T of P){const{path:k}=T;if(c&&k[0]!=="/"){const I=c.record.path,x=I[I.length-1]==="/"?"":"/";T.path=c.record.path+(k&&x+k)}if(E=pn(T,c,w),l?l.alias.push(E):(R=R||E,R!==E&&R.alias.push(E),g&&a.name&&!Ue(E)&&h(a.name)),vt(E)&&s(E),v.children){const I=v.children;for(let x=0;x<I.length;x++)d(I[x],E,l&&l.children[x])}l=l||E}return R?()=>{h(R)}:se}function h(a){if(mt(a)){const c=r.get(a);c&&(r.delete(a),n.splice(n.indexOf(c),1),c.children.forEach(h),c.alias.forEach(h))}else{const c=n.indexOf(a);c>-1&&(n.splice(c,1),a.record.name&&r.delete(a.record.name),a.children.forEach(h),a.alias.forEach(h))}}function p(){return n}function s(a){const c=vn(a,n);n.splice(c,0,a),a.record.name&&!Ue(a)&&r.set(a.record.name,a)}function f(a,c){let l,g={},v,w;if("name"in a&&a.name){if(l=r.get(a.name),!l)throw J(1,{location:a});w=l.record.name,g=b(ze(c.params,l.keys.filter(R=>!R.optional).concat(l.parent?l.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),a.params&&ze(a.params,l.keys.map(R=>R.name))),v=l.stringify(g)}else if(a.path!=null)v=a.path,l=n.find(R=>R.re.test(v)),l&&(g=l.parse(v),w=l.record.name);else{if(l=c.name?r.get(c.name):n.find(R=>R.re.test(c.path)),!l)throw J(1,{location:a,currentLocation:c});w=l.record.name,g=b({},c.params,a.params),v=l.stringify(g)}const P=[];let E=l;for(;E;)P.unshift(E.record),E=E.parent;return{name:w,path:v,params:g,matched:P,meta:yn(P)}}e.forEach(a=>d(a));function u(){n.length=0,r.clear()}return{addRoute:d,resolve:f,removeRoute:h,clearRoutes:u,getRoutes:p,getRecordMatcher:o}}function ze(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function qe(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:gn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function gn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ue(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function yn(e){return e.reduce((t,n)=>b(t,n.meta),{})}function Ze(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function vn(e,t){let n=0,r=t.length;for(;n!==r;){const d=n+r>>1;yt(e,t[d])<0?r=d:n=d+1}const o=En(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function En(e){let t=e;for(;t=t.parent;)if(vt(t)&&yt(e,t)===0)return t}function vt({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function _n(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const d=r[o].replace(it," "),h=d.indexOf("="),p=ae(h<0?d:d.slice(0,h)),s=h<0?null:ae(d.slice(h+1));if(p in t){let f=t[p];V(f)||(f=t[p]=[f]),f.push(s)}else t[p]=s}return t}function We(e){let t="";for(let n in e){const r=e[n];if(n=Kt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(V(r)?r.map(d=>d&&be(d)):[r&&be(r)]).forEach(d=>{d!==void 0&&(t+=(t.length?"&":"")+n,d!=null&&(t+="="+d))})}return t}function Rn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=V(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const wn=Symbol(""),Ye=Symbol(""),he=Symbol(""),Te=Symbol(""),Ce=Symbol("");function ne(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function G(e,t,n,r,o,d=h=>h()){const h=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((p,s)=>{const f=c=>{c===!1?s(J(4,{from:n,to:t})):c instanceof Error?s(c):sn(c)?s(J(2,{from:t,to:c})):(h&&r.enterCallbacks[o]===h&&typeof c=="function"&&h.push(c),p())},u=d(()=>e.call(r&&r.instances[o],t,n,f));let a=Promise.resolve(u);e.length<3&&(a=a.then(f)),a.catch(c=>s(c))})}function Se(e,t,n,r,o=d=>d()){const d=[];for(const h of e)for(const p in h.components){let s=h.components[p];if(!(t!=="beforeRouteEnter"&&!h.instances[p]))if(st(s)){const u=(s.__vccOpts||s)[t];u&&d.push(G(u,n,r,h,p,o))}else{let f=s();d.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${p}" at "${h.path}"`);const a=kt(u)?u.default:u;h.mods[p]=u,h.components[p]=a;const l=(a.__vccOpts||a)[t];return l&&G(l,n,r,h,p,o)()}))}}return d}function Fe(e){const t=U(he),n=U(Te),r=$(()=>{const s=oe(e.to);return t.resolve(s)}),o=$(()=>{const{matched:s}=r.value,{length:f}=s,u=s[f-1],a=n.matched;if(!u||!a.length)return-1;const c=a.findIndex(Q.bind(null,u));if(c>-1)return c;const l=Qe(s[f-2]);return f>1&&Qe(u)===l&&a[a.length-1].path!==l?a.findIndex(Q.bind(null,s[f-2])):c}),d=$(()=>o.value>-1&&On(n.params,r.value.params)),h=$(()=>o.value>-1&&o.value===n.matched.length-1&&ft(n.params,r.value.params));function p(s={}){if(bn(s)){const f=t[oe(e.replace)?"replace":"push"](oe(e.to)).catch(se);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:$(()=>r.value.href),isActive:d,isExactActive:h,navigate:p}}function Pn(e){return e.length===1?e[0]:e}const Sn=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fe,setup(e,{slots:t}){const n=Ot(Fe(e)),{options:r}=U(he),o=$(()=>({[Xe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const d=t.default&&Pn(t.default(n));return e.custom?d:ot("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},d)}}}),An=Sn;function bn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function On(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!V(o)||o.length!==r.length||r.some((d,h)=>d!==o[h]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>e??t??n,Cn=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=U(Ce),o=$(()=>e.route||r.value),d=U(Ye,0),h=$(()=>{let f=oe(d);const{matched:u}=o.value;let a;for(;(a=u[f])&&!a.components;)f++;return f}),p=$(()=>o.value.matched[h.value]);_e(Ye,$(()=>h.value+1)),_e(wn,p),_e(Ce,o);const s=Ct();return Lt(()=>[s.value,p.value,e.name],([f,u,a],[c,l,g])=>{u&&(u.instances[a]=f,l&&l!==u&&f&&f===c&&(u.leaveGuards.size||(u.leaveGuards=l.leaveGuards),u.updateGuards.size||(u.updateGuards=l.updateGuards))),f&&u&&(!l||!Q(u,l)||!c)&&(u.enterCallbacks[a]||[]).forEach(v=>v(f))},{flush:"post"}),()=>{const f=o.value,u=e.name,a=p.value,c=a&&a.components[u];if(!c)return Je(n.default,{Component:c,route:f});const l=a.props[u],g=l?l===!0?f.params:typeof l=="function"?l(f):l:null,w=ot(c,b({},g,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(a.instances[u]=null)},ref:s}));return Je(n.default,{Component:w,route:f})||w}}});function Je(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ln=Cn;function Hn(e){const t=mn(e.routes,e),n=e.parseQuery||_n,r=e.stringifyQuery||We,o=e.history,d=ne(),h=ne(),p=ne(),s=le(B);let f=B;W&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Re.bind(null,i=>""+i),a=Re.bind(null,zt),c=Re.bind(null,ae);function l(i,y){let m,_;return mt(i)?(m=t.getRecordMatcher(i),_=y):_=i,t.addRoute(_,m)}function g(i){const y=t.getRecordMatcher(i);y&&t.removeRoute(y)}function v(){return t.getRoutes().map(i=>i.record)}function w(i){return!!t.getRecordMatcher(i)}function P(i,y){if(y=b({},y||s.value),typeof i=="string"){const S=we(n,i,y.path),L=t.resolve({path:S.path},y),te=o.createHref(S.fullPath);return b(S,L,{params:c(L.params),hash:ae(S.hash),redirectedFrom:void 0,href:te})}let m;if(i.path!=null)m=b({},i,{path:we(n,i.path,y.path).path});else{const S=b({},i.params);for(const L in S)S[L]==null&&delete S[L];m=b({},i,{params:a(S)}),y.params=a(y.params)}const _=t.resolve(m,y),O=i.hash||"";_.params=u(c(_.params));const C=Zt(r,b({},i,{hash:Bt(O),path:_.path})),A=o.createHref(C);return b({fullPath:C,hash:O,query:r===We?Rn(i.query):i.query||{}},_,{redirectedFrom:void 0,href:A})}function E(i){return typeof i=="string"?we(n,i,s.value.path):b({},i)}function R(i,y){if(f!==i)return J(8,{from:y,to:i})}function T(i){return x(i)}function k(i){return T(b(E(i),{replace:!0}))}function I(i){const y=i.matched[i.matched.length-1];if(y&&y.redirect){const{redirect:m}=y;let _=typeof m=="function"?m(i):m;return typeof _=="string"&&(_=_.includes("?")||_.includes("#")?_=E(_):{path:_},_.params={}),b({query:i.query,hash:i.hash,params:_.path!=null?{}:i.params},_)}}function x(i,y){const m=f=P(i),_=s.value,O=i.state,C=i.force,A=i.replace===!0,S=I(m);if(S)return x(b(E(S),{state:typeof S=="object"?b({},O,S.state):O,force:C,replace:A}),y||m);const L=m;L.redirectedFrom=y;let te;return!C&&Wt(r,_,m)&&(te=J(16,{to:L,from:_}),Ne(_,_,!0,!1)),(te?Promise.resolve(te):ke(L,_)).catch(D=>M(D)?M(D,2)?D:ye(D):ge(D,L,_)).then(D=>{if(D){if(M(D,2))return x(b({replace:A},E(D.to),{state:typeof D.to=="object"?b({},O,D.to.state):O,force:C}),y||L)}else D=Ie(L,_,!0,A,O);return xe(L,_,D),D})}function H(i,y){const m=R(i,y);return m?Promise.reject(m):Promise.resolve()}function pe(i){const y=ce.values().next().value;return y&&typeof y.runWithContext=="function"?y.runWithContext(i):i()}function ke(i,y){let m;const[_,O,C]=Tn(i,y);m=Se(_.reverse(),"beforeRouteLeave",i,y);for(const S of _)S.leaveGuards.forEach(L=>{m.push(G(L,i,y))});const A=H.bind(null,i,y);return m.push(A),Z(m).then(()=>{m=[];for(const S of d.list())m.push(G(S,i,y));return m.push(A),Z(m)}).then(()=>{m=Se(O,"beforeRouteUpdate",i,y);for(const S of O)S.updateGuards.forEach(L=>{m.push(G(L,i,y))});return m.push(A),Z(m)}).then(()=>{m=[];for(const S of C)if(S.beforeEnter)if(V(S.beforeEnter))for(const L of S.beforeEnter)m.push(G(L,i,y));else m.push(G(S.beforeEnter,i,y));return m.push(A),Z(m)}).then(()=>(i.matched.forEach(S=>S.enterCallbacks={}),m=Se(C,"beforeRouteEnter",i,y,pe),m.push(A),Z(m))).then(()=>{m=[];for(const S of h.list())m.push(G(S,i,y));return m.push(A),Z(m)}).catch(S=>M(S,8)?S:Promise.reject(S))}function xe(i,y,m){p.list().forEach(_=>pe(()=>_(i,y,m)))}function Ie(i,y,m,_,O){const C=R(i,y);if(C)return C;const A=y===B,S=W?history.state:{};m&&(_||A?o.replace(i.fullPath,b({scroll:A&&S&&S.scroll},O)):o.push(i.fullPath,O)),s.value=i,Ne(i,y,m,A),ye()}let ee;function Pt(){ee||(ee=o.listen((i,y,m)=>{if(!Ve.listening)return;const _=P(i),O=I(_);if(O){x(b(O,{replace:!0,force:!0}),_).catch(se);return}f=_;const C=s.value;W&&en($e(C.fullPath,m.delta),de()),ke(_,C).catch(A=>M(A,12)?A:M(A,2)?(x(b(E(A.to),{force:!0}),_).then(S=>{M(S,20)&&!m.delta&&m.type===X.pop&&o.go(-1,!1)}).catch(se),Promise.reject()):(m.delta&&o.go(-m.delta,!1),ge(A,_,C))).then(A=>{A=A||Ie(_,C,!1),A&&(m.delta&&!M(A,8)?o.go(-m.delta,!1):m.type===X.pop&&M(A,20)&&o.go(-1,!1)),xe(_,C,A)}).catch(se)}))}let me=ne(),De=ne(),ie;function ge(i,y,m){ye(i);const _=De.list();return _.length?_.forEach(O=>O(i,y,m)):console.error(i),Promise.reject(i)}function St(){return ie&&s.value!==B?Promise.resolve():new Promise((i,y)=>{me.add([i,y])})}function ye(i){return ie||(ie=!i,Pt(),me.list().forEach(([y,m])=>i?m(i):y()),me.reset()),i}function Ne(i,y,m,_){const{scrollBehavior:O}=e;if(!W||!O)return Promise.resolve();const C=!m&&tn($e(i.fullPath,0))||(_||!m)&&history.state&&history.state.scroll||null;return bt().then(()=>O(i,y,C)).then(A=>A&&Jt(A)).catch(A=>ge(A,i,y))}const ve=i=>o.go(i);let Ee;const ce=new Set,Ve={currentRoute:s,listening:!0,addRoute:l,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:w,getRoutes:v,resolve:P,options:e,push:T,replace:k,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:d.add,beforeResolve:h.add,afterEach:p.add,onError:De.add,isReady:St,install(i){const y=this;i.component("RouterLink",An),i.component("RouterView",Ln),i.config.globalProperties.$router=y,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>oe(s)}),W&&!Ee&&s.value===B&&(Ee=!0,T(o.location).catch(O=>{}));const m={};for(const O in B)Object.defineProperty(m,O,{get:()=>s.value[O],enumerable:!0});i.provide(he,y),i.provide(Te,At(m)),i.provide(Ce,s);const _=i.unmount;ce.add(i),i.unmount=function(){ce.delete(i),ce.size<1&&(f=B,ee&&ee(),ee=null,s.value=B,Ee=!1,ie=!1),_()}}};function Z(i){return i.reduce((y,m)=>y.then(()=>pe(m)),Promise.resolve())}return Ve}function Tn(e,t){const n=[],r=[],o=[],d=Math.max(t.matched.length,e.matched.length);for(let h=0;h<d;h++){const p=t.matched[h];p&&(e.matched.find(f=>Q(f,p))?r.push(p):n.push(p));const s=e.matched[h];s&&(t.matched.find(f=>Q(f,s))||o.push(s))}return[n,r,o]}function kn(){return U(he)}function xn(e){return U(Te)}var j=Symbol("loaders"),F=Symbol("loaderEntries"),Et=Symbol(),K=Symbol(),z=Symbol(),fe=Symbol(),re=Symbol(),ue=Symbol(),_t=Symbol();function et(e){return e&&e[Et]}var Rt;function tt(){return Rt||[]}function Y(e){Rt=e&&e.length?e:null}var In=Object.assign;function Dn({router:e,app:t,effect:n,isSSR:r,errors:o=[],selectNavigationResult:d=h=>h[0].value}){if(e[F]!=null)return()=>{};e[F]=new WeakMap,e[fe]=t,e[_t]=!!r;const h=e.beforeEach(u=>{var c;e[K]&&((c=e[K].meta[re])==null||c.abort()),e[K]=u,u.meta[j]=new Set,u.meta[re]=new AbortController,u.meta[ue]=[];const a=[];for(const l of u.matched)if(!l.meta[j]){l.meta[j]=new Set(l.meta.loaders||[]);for(const g in l.components){const v=l.components[g],w=(Nn(v)?v():Promise.resolve(v)).then(P=>{if(typeof P!="function"){for(const E in P){const R=P[E];et(R)&&l.meta[j].add(R)}if(Array.isArray(P.__loaders))for(const E of P.__loaders)et(E)&&l.meta[j].add(E)}});a.push(w)}}return Promise.all(a).then(()=>{for(const l of u.matched)for(const g of l.meta[j])u.meta[j].add(g)})}),p=e.beforeResolve((u,a)=>{const c=Array.from(u.meta[j]);return Y([]),Promise.all(c.map(l=>{const{server:g,lazy:v,errors:w}=l._.options;if(!g&&r)return;const P=n.run(()=>t.runWithContext(()=>l._.load(u,e,a)));return!r&&Ae(v,u,a)?void 0:P.catch(E=>{if(!w)throw E;if(w===!0){if(Array.isArray(o)?o.some(R=>E instanceof R):o(E))return}else if(Array.isArray(w)?w.some(R=>E instanceof R):w(E))return;throw E})})).then(()=>{if(u.meta[ue].length)return d(u.meta[ue])}).catch(l=>l instanceof wt?l.value:Promise.reject(l)).finally(()=>{Y([])})}),s=e.afterEach((u,a,c)=>{var l;if(c){if((l=u.meta[re])==null||l.abort(c),M(c,16))for(const g of u.meta[j])g._.getEntry(e).resetPending()}else for(const g of u.meta[j]){const{commit:v,lazy:w}=g._.options;if(v==="after-load"){const P=g._.getEntry(e);P&&(!Ae(w,u,a)||!P.isLoading.value)&&P.commit(u)}}e[K]===u&&(e[K]=null)}),f=e.onError((u,a)=>{var c;(c=a.meta[re])==null||c.abort(u),e[K]===a&&(e[K]=null)});return()=>{delete e[F],delete e[fe],h(),p(),s(),f()}}function Nn(e){return typeof e=="function"&&!("displayName"in e)&&!("props"in e)&&!("emits"in e)&&!("__vccOpts"in e)}var wt=class{constructor(e){this.value=e}};function Bn(e,t){const n=Tt(!0),r=Dn(In({app:e,effect:n},t)),{unmount:o}=e;e.unmount=()=>{n.stop(),r(),o.call(e)}}const Kn=[{path:"/",name:"/",component:()=>N(()=>import("../index.C9RGc7RC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),meta:{layout:"home",frontmatter:{time_warning:15552e6}}},{path:"/:path(.*)",name:"/[...path]",component:()=>N(()=>import("../_...path_.DoHQvf45.js"),__vite__mapDeps([16,3])),meta:{layout:404,frontmatter:{time_warning:15552e6}}},{path:"/404",name:"/404",component:()=>N(()=>import("../404.30OtnhPR.js"),__vite__mapDeps([17,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:404,date:"2025-01-11T11:53:15.327Z",updated:"2025-01-11T11:53:17.768Z"},excerpt:"",layout:404}},{path:"/about",children:[{path:"",name:"/about/",component:()=>N(()=>import("../index.CCVhShw0.js"),__vite__mapDeps([24,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"关于我",date:"2025-01-11T11:53:15.328Z",updated:"2025-01-11T11:53:17.768Z"},excerpt:""}},{path:"site",name:"/about/site",component:()=>N(()=>import("../site.k5I551DW.js"),__vite__mapDeps([25,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"关于站点",date:"2025-01-11T11:53:15.340Z",updated:"2025-01-11T11:53:17.776Z"},excerpt:""}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/archives",children:[{path:"",name:"/archives/",component:()=>N(()=>import("../index.Yb8sPfmQ.js"),__vite__mapDeps([26,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"archives",nav:!1,comment:!1,date:"2025-01-11T11:53:15.329Z",updated:"2025-01-11T11:53:17.769Z"},excerpt:"",layout:"archives"}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/categories",children:[{path:"",name:"/categories/",component:()=>N(()=>import("../index.BYPgqQNA.js"),__vite__mapDeps([27,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"categories",nav:!1,toc:!1,icon:"i-ri-folder-2-line",date:"2025-01-11T11:53:15.330Z",updated:"2025-01-11T11:53:17.769Z"},excerpt:"",layout:"categories"}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/links",children:[{path:"",name:"/links/",component:()=>N(()=>import("../index.-xILLtLt.js"),__vite__mapDeps([28,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23,11,12,29])),meta:{frontmatter:{time_warning:15552e6,title:"我的小伙伴们",keywords:"链接",description:"云游的小伙伴们",random:!0,date:"2025-01-11T11:53:15.330Z",updated:"2025-01-11T11:53:17.770Z"},excerpt:""}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/page",children:[{path:":page",name:"/page/[page]",component:()=>N(()=>import("../_page_.B3R3yXfM.js"),__vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),meta:{frontmatter:{time_warning:15552e6}}}],meta:{frontmatter:{time_warning:15552e6},layout:"home"}},{path:"/posts",children:[{path:"",name:"/posts/",component:()=>N(()=>import("../index.CWTDQ2QX.js"),__vite__mapDeps([31,2,3,4,5,6,7,8,9,1,10,11,12,13,14,15])),meta:{frontmatter:{time_warning:15552e6},layout:"posts"}},{path:"hello-valaxy",name:"/posts/hello-valaxy",component:()=>N(()=>import("../hello-valaxy.DJPPv0BR.js"),__vite__mapDeps([32,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"Hello, Valaxy!",date:"2022-04-01",updated:"2022-04-01",categories:"Valaxy 笔记",tags:["valaxy","笔记"],top:1},layout:"post",excerpt:""}}],meta:{frontmatter:{time_warning:15552e6},layout:"posts"}},{path:"/tags",children:[{path:"",name:"/tags/",component:()=>N(()=>import("../index.CRAijTwG.js"),__vite__mapDeps([33,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"tags",icon:"i-ri-price-tag-3-line",nav:!1,date:"2025-01-11T11:53:15.331Z",updated:"2025-01-11T11:53:17.770Z"},excerpt:"",layout:"tags"}}],meta:{frontmatter:{time_warning:15552e6}}}],Gn={};function zn(e,t,n){const r=typeof e=="function"?e:t;n=typeof t=="object"?t:n;const o={...nt,...n,commit:(n==null?void 0:n.commit)||nt.commit};function d(s,f,u,a){var x;const c=f[F],l=f[_t];c.has(r)||c.set(r,{data:le(),isLoading:le(!1),error:le(),to:s,options:o,children:new Set,resetPending(){this.pendingLoad=null,this.pendingTo=null},pendingLoad:null,pendingTo:null,staged:z,stagedError:null,commit:h});const g=c.get(r);if(g.pendingTo===s&&g.pendingLoad)return g.pendingLoad;const{error:v,isLoading:w,data:P}=g,E=f[Vn],R=o.key||"";let T=z;if(E&&R in E&&(T=E[R],delete E[R]),T!==z)return P.value=T,g.pendingLoad=Promise.resolve();g.pendingTo=s,w.value=!0;const k=tt();Y([g,f,s]),g.staged=z,g.stagedError=v.value;const I=Promise.resolve(r(s,{signal:(x=s.meta[re])==null?void 0:x.signal})).then(H=>{g.pendingLoad===I&&(H instanceof wt?s.meta[ue].push(H):(g.staged=H,g.stagedError=null))}).catch(H=>{if(g.pendingLoad===I&&(g.stagedError=H,!Ae(o.lazy,s,u)||l))throw H}).finally(()=>{Y(k),g.pendingLoad===I&&(w.value=!1,(o.commit==="immediate"||!f[K])&&g.commit(s))});return Y(k),g.pendingLoad=I,I}function h(s){if(this.pendingTo===s){this.staged!==z&&(this.data.value=this.staged),this.error.value=this.stagedError,this.staged=z,this.stagedError=this.error.value,this.pendingTo=null,this.to=s;for(const f of this.children)f.commit(s)}}const p=()=>{const s=tt(),[f,u,a]=s,c=u||kn(),l=a||xn(),g=c[F];let v=g.get(r);(!v||f&&v.pendingTo!==l||!v.pendingLoad)&&c[fe].runWithContext(()=>d(l,c,void 0)),v=g.get(r),f&&(f===v&&console.warn(`👶❌ "${o.key}" has itself as parent. This shouldn't be happening. Please report a bug with a reproduction to https://github.com/posva/unplugin-vue-router/`),f.children.add(v));const{data:w,error:P,isLoading:E}=v,R={data:w,error:P,isLoading:E,reload:(k=c.currentRoute.value)=>c[fe].runWithContext(()=>d(k,c)).then(()=>v.commit(k))},T=v.pendingLoad.then(()=>v.staged===z?w.value:v.staged).catch(k=>f?Promise.reject(k):null);return Y(s),Object.assign(T,R)};return p[Et]=!0,p._={load:d,options:o,getEntry(s){return s[F].get(r)}},p}var nt={lazy:!1,server:!0,commit:"after-load"},Vn=Symbol();export{Bn as D,xn as a,Mn as b,Hn as c,$n as d,Gn as e,zn as f,Kn as r,kn as u};