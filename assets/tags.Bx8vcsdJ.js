import{z as W,T as R,b as j,d as H,o as U,u as Z,g as G,a as J,c as K,k as Q,h as X,e as tt,f as et}from"./app.CfZw43ta.js";import{_ as nt}from"./YunPostCollapse.vue_vue_type_style_index_0_lang.BpGDSGI0.js";import{a as ot,u as st}from"./animation.CJ-ZxkjQ.js";import{e as b,r as B,N as c,P as S,R as f,S as $,c as C,M as at,B as t,a2 as n,O as T,a7 as rt,u as o,a3 as it,F as k,$ as ct,Z as lt,U as ut}from"./framework.DZENVrE6.js";import{_ as mt}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.CQfi-FYn.js";import{a as pt,u as _t}from"./chunks/vue-router.DM4wcyWO.js";import"./chunks/dayjs.Byk5cVHE.js";import{u as ft}from"./chunks/vue-i18n.BHw1UmpY.js";import"./chunks/nprogress.UDyXTrCf.js";import"./chunks/pinia.DtpzctVM.js";import"./chunks/@vueuse/motion.mnYIfwk6.js";import"./index.x8TNrC4q.js";function gt(u={primary:"#0078E7"}){const s=W(),a=new R("#999999"),r=new R(u.primary);return{tags:s,getTagStyle:i=>{const p=Array.from(s.value).map(([d,h])=>h.count),g=Math.max(...p),e=Math.min(...p),y=g-e,_=(i-e)/y;return{"--yun-tag-color":a.mix(r,_*100).toString(),fontSize:`${_*36+12}px`}}}}const yt={"inline-flex":""},dt={"inline-flex":"",text:"xs"},ht=b({__name:"YunLayoutPostTag",props:{i:{},title:{},count:{}},setup(u){const s=u,a=B();return ot(a,{i:s.i||0,delay:25}),(r,m)=>(c(),S("span",{ref_key:"tagRef",ref:a,"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},[f("span",yt,"#"+$(r.title),1),f("span",dt,"["+$(r.count)+"]",1)],512))}}),vt={class:"yun-text-light",text:"center",p:"2"},xt={class:"justify-center items-end",flex:"~ wrap",gap:"1"},At=b({__name:"tags",setup(u){j([H({"@type":"CollectionPage"})]);const s=pt(),a=_t(),r=U(),{t:m}=ft(),i=Z(),{tags:p,getTagStyle:g}=gt({primary:r.value.colors.primary}),e=C(()=>s.query.tag||""),y=G(),_=C(()=>y.postList.filter(l=>l.tags?typeof l.tags=="string"?l.tags===e.value:l.tags.includes(e.value):!1)),d=B(),{show:h}=st(d);function V(v){a.push({query:{tag:v}}),h()}const A=J(i),Y=C(()=>Array.from(p.value).sort());return(v,l)=>{const F=K,w=mt,N=ht,L=at("RouterView"),z=nt,E=Q,M=X,q=tt,D=et;return c(),S(k,null,[t(q,null,{default:n(()=>[t(F),t(L,null,{default:n(({Component:I})=>[(c(),T(rt(I),null,{"main-header":n(()=>[t(w,{title:o(A)||o(m)("menu.tags"),icon:o(i).icon||"i-ri-tag-line",color:o(i).color,"page-title-class":o(i).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":n(()=>[t(it,{"enter-active-class":"animate-fade-in animate-duration-400",appear:""},{default:n(()=>[f("div",vt,$(o(m)("counter.tags",Y.value.length)),1)]),_:1}),f("div",xt,[(c(!0),S(k,null,ct(Y.value,([x,P],O)=>(c(),T(N,{key:x,i:O,title:x,count:P.count,style:lt(o(g)(P.count)),onClick:Ct=>V(x.toString())},null,8,["i","title","count","style","onClick"]))),128))]),t(L)]),"main-nav-before":n(()=>[e.value?(c(),T(E,{key:0,ref_key:"collapse",ref:d,m:"t-4",w:"full"},{default:n(()=>[t(w,{title:e.value,icon:"i-ri-hashtag"},null,8,["title"]),t(z,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:_.value},null,8,["posts"])]),_:1},512)):ut("v-if",!0)]),_:2},1024))]),_:1}),t(M)]),_:1}),t(D)],64)}}});export{At as default};
