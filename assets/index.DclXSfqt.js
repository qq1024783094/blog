import{_ as v}from"./ValaxyMain.vue_vue_type_style_index_0_lang.B02nImJx.js";import{u as $}from"./chunks/@vueuse/motion.mnYIfwk6.js";import{o as b}from"./index.Bmsgqaiw.js";import{e as k,r as w,N as c,P as u,R as s,S as f,Z as j,F as B,$ as I,u as y,O as _,D as p,a2 as t,B as Y,Y as a}from"./framework.DZENVrE6.js";import{E as D}from"./app.DjqN5m12.js";import"./chunks/dayjs.Byk5cVHE.js";import{f as L,a as z}from"./chunks/vue-router.BGvQsFXF.js";import"./YunComment.vue_vue_type_style_index_0_lang.XKWba2Z6.js";import"./index.C5okkQwF.js";import"./chunks/nprogress.UDyXTrCf.js";import"./chunks/vue-i18n.BHw1UmpY.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CQfi-FYn.js";import"./post.sRU_R3bT.js";import"./animation.zFQy042r.js";import"./chunks/pinia.DtpzctVM.js";const R=["href","title"],S={class:"yun-link-left"},E={class:"yun-link-avatar size-16 overflow-hidden flex-center"},N=["src","alt"],O={class:"yun-link-info",m:"l-2"},P={class:"yun-link-blog",font:"serif black"},V={class:"yun-link-desc"},C=k({__name:"YunLinkItem",props:{i:{},errorImg:{},link:{}},setup(r){const o=r;function l(e){b(e,o.errorImg)}const i=w();return $(i,{initial:{opacity:0,translateY:40},enter:{opacity:1,translateY:0,transition:{type:"spring",duration:400,damping:8,delay:o.i*50}}}),(e,m)=>(c(),u("li",{ref_key:"itemRef",ref:i,class:"yun-link-item inline-flex",style:j({"--primary-color":e.link.color})},[s("a",{class:"yun-link-url",p:"x-4 y-2",href:e.link.url,title:e.link.name,alt:"portrait",rel:"friend",target:"_blank"},[s("div",S,[s("div",E,[s("img",{class:"size-full object-center object-cover m-0! max-w-unset!",loading:"lazy",src:e.link.avatar,alt:e.link.name,onError:l},null,40,N)])]),s("div",O,[s("div",P,f(e.link.blog),1),s("div",V,f(e.link.desc),1)])],8,R)],4))}}),F={class:"yun-links"},M={class:"yun-link-items",flex:"center wrap"},J=k({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(r){const o=r,{data:l}=D(o.links,o.random);return(i,e)=>{const m=C;return c(),u("div",F,[s("ul",M,[(c(!0),u(B,null,I(y(l),(d,n)=>(c(),_(m,{key:n,i:n,link:d,"error-img":i.errorImg},null,8,["i","link","error-img"]))),128))])])}}}),T=L("/links",async r=>JSON.parse('{"title":"我的小伙伴们","description":"云游的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"云游的小伙伴们","links":"https://www.yunyoujun.cn/friends/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","lastUpdated":null}'),{lazy:(r,o)=>r.name===o.name}),sn={__name:"index",setup(r,{expose:o}){var d;const{data:l}=T(),i=z(),e=Object.assign(i.meta.frontmatter||{},((d=l.value)==null?void 0:d.frontmatter)||{});i.meta.frontmatter=e,p("pageData",l.value),p("valaxy:frontmatter",e),globalThis.$frontmatter=e;const m={title:"我的小伙伴们",keywords:"链接",description:"云游的小伙伴们",links:"https://www.yunyoujun.cn/friends/links.json",random:!0};return o({frontmatter:m}),(n,U)=>{const h=J,g=v;return c(),_(g,{frontmatter:y(e)},{"main-content-md":t(()=>[Y(h,{links:m.links,random:m.random},null,8,["links","random"])]),"main-header":t(()=>[a(n.$slots,"main-header")]),"main-header-after":t(()=>[a(n.$slots,"main-header-after")]),"main-nav":t(()=>[a(n.$slots,"main-nav")]),"main-content-before":t(()=>[a(n.$slots,"main-content-before")]),"main-content":t(()=>[a(n.$slots,"main-content")]),"main-content-after":t(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":t(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":t(()=>[a(n.$slots,"main-nav-after")]),comment:t(()=>[a(n.$slots,"comment")]),footer:t(()=>[a(n.$slots,"footer")]),aside:t(()=>[a(n.$slots,"aside")]),"aside-custom":t(()=>[a(n.$slots,"aside-custom")]),default:t(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{sn as default,T as usePageData};
