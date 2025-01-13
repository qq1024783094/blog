import{e as m,M as h,N as t,P as o,F as y,Z as x,O as k,a1 as $,R as e,S as u,c as b,u as a,U as l,Y as C,B as v}from"./framework.BDAG0DUs.js";import{m as Y,C as _,F as M,l as R}from"./app.HAp6JTgV.js";import{a as P}from"./chunks/vue-router.CnNde355.js";import"./chunks/dayjs.Byk5cVHE.js";import{u as c}from"./chunks/vue-i18n.C8jXiADb.js";import{f as g}from"./index.DodODzOX.js";const j={class:"post-tags inline-flex",items:"center",gap:"1",flex:"wrap 1",justify:"end"},rt=m({__name:"YunPostTags",props:{tags:{}},setup(f){return(s,i)=>{const r=h("RouterLink");return t(),o("div",j,[(t(!0),o(y,null,x(s.tags,(n,d)=>(t(),k(r,{key:d,to:{path:"/tags/",query:{tag:n}},class:"transition post-tag inline-flex-center text-xs border-$va-c-divider","px-2":"",h:"7","rounded-full":"",border:"",hover:"bg-blue-500 text-white"},{default:$(()=>[e("span",null,u(n),1)]),_:2},1032,["to"]))),128))])}}}),at=m({__name:"YunPostCategories",props:{categories:{}},setup(f){return(s,i)=>{const r=h("RouterLink");return t(),k(r,{to:{path:"/categories",query:{category:Array.isArray(s.categories)?s.categories.join("/"):s.categories}},class:"transition post-category inline-flex-center text-xs border-$va-c-divider","px-2":"",h:"7",border:"","rounded-full":"",hover:"bg-blue-500 text-white"},{default:$(()=>[i[0]||(i[0]=e("div",{m:"x-1","inline-flex":"","i-ri-folder-2-line":""},null,-1)),e("span",null,u(Array.isArray(s.categories)?s.categories.join(" / "):s.categories),1)]),_:1},8,["to"])}}}),A={key:0,class:"inline-flex gap-4",text:"sm",h:"5"},B=["title"],L=["data-path"],D=["title"],N=["data-path"],S=m({__name:"YunWalineMeta",setup(f){const s=P(),i=Y(),r=b(()=>i.value.addons["valaxy-addon-waline"]),{t:n}=c();return(d,p)=>r.value&&r.value.options?(t(),o("div",A,[r.value.options.pageview?(t(),o("div",{key:0,"inline-flex":"",justify:"center",items:"center",title:a(n)("post.pageview_count")},[p[0]||(p[0]=e("div",{"inline-flex":"","i-ri-eye-line":""},null,-1)),e("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count op-80","data-path":a(s).path},null,8,L)],8,B)):l("v-if",!0),r.value.options.comment?(t(),o("div",{key:1,"inline-flex":"",justify:"center",items:"center",title:a(n)("post.comment_count")},[p[1]||(p[1]=e("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1)),e("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count op-80","data-path":a(s).path},null,8,N)],8,D)):l("v-if",!0)])):l("v-if",!0)}}),T={key:0,class:"post-time flex items-center gap-4"},F=["title"],V={class:"op-80"},W=["title"],q={class:"op-80"},z=m({__name:"YunPostDateMeta",props:{frontmatter:{}},setup(f){const{t:s}=c();return(i,r)=>i.frontmatter.date?(t(),o("div",T,[e("span",{class:"posted-time inline-flex-center gap-1",title:a(s)("post.posted")+a(g)(i.frontmatter.date)},[r[0]||(r[0]=e("div",{class:"inline-block","i-ri-calendar-line":""},null,-1)),e("time",V,u(a(_)(i.frontmatter.date)),1)],8,F),i.frontmatter.updated&&i.frontmatter.updated!==i.frontmatter.date?(t(),o("span",{key:0,class:"edited-time inline-flex-center gap-1",title:a(s)("post.edited")+a(g)(i.frontmatter.updated)},[r[1]||(r[1]=e("div",{"i-ri-calendar-2-line":""},null,-1)),e("time",q,u(a(_)(i.frontmatter.updated)),1)],8,W)):l("v-if",!0)])):l("v-if",!0)}}),E={key:0,class:"post-draft-icon",title:"draft"},I=["title"],O={key:0,"i-ri-eye-close-line":""},U={key:1,"i-ri-eye-off-line":""},Z={key:2,class:"post-top-icon",color:"$va-c-warning"},G={class:"inline-flex-center gap-4"},H={key:0,class:"inline-flex-center post-counter gap-4"},J=["title"],K={class:"op-80"},Q=["title"],X={class:"op-80"},lt=m({__name:"YunPostMeta",props:{frontmatter:{}},setup(f){const s=M(),{t:i}=c(),r=R();return(n,d)=>{const p=z,w=S;return t(),o(y,null,[n.frontmatter.draft?(t(),o("div",E,d[0]||(d[0]=[e("div",{"i-ri-draft-line":""},null,-1)]))):l("v-if",!0),n.frontmatter.hide?(t(),o("div",{key:1,class:"post-top-icon",color:"$va-c-danger",title:`hide:${n.frontmatter.hide}`},[n.frontmatter.hide==="index"?(t(),o("div",O)):(t(),o("div",U))],8,I)):l("v-if",!0),n.frontmatter.top?(t(),o("div",Z,d[1]||(d[1]=[e("div",{"i-ri-pushpin-line":""},null,-1)]))):l("v-if",!0),n.frontmatter?(t(),o("div",{key:3,class:C(["post-meta gap-4",{"flex-col gap-2!":a(s).isMobile||n.frontmatter.updated}]),flex:"~ center",text:"sm"},[v(p,{frontmatter:n.frontmatter},null,8,["frontmatter"]),e("div",G,[a(r).statistics.enable?(t(),o("div",H,[n.frontmatter.wordCount?(t(),o("span",{key:0,class:"word-count inline-flex-center gap-1",title:a(i)("statistics.word")},[d[2]||(d[2]=e("div",{class:"inline-block","i-ri-file-word-line":""},null,-1)),e("span",K,u(n.frontmatter.wordCount),1)],8,J)):l("v-if",!0),n.frontmatter.readingTime?(t(),o("span",{key:1,class:"reading-time inline-flex-center gap-1",title:a(i)("statistics.time")},[d[3]||(d[3]=e("div",{"i-ri-timer-line":""},null,-1)),e("time",X,u(n.frontmatter.readingTime)+"m",1)],8,Q)):l("v-if",!0)])):l("v-if",!0),v(w)])],2)):l("v-if",!0)],64)}}});export{at as _,rt as a,lt as b};
