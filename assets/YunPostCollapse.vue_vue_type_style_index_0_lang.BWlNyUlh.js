import{u as D}from"./chunks/@vueuse/motion.mnYIfwk6.js";import{C as x,D as $}from"./app.DjqN5m12.js";import"./chunks/dayjs.Byk5cVHE.js";import{e as C,r as u,M as N,N as o,P as a,R as n,S as d,u as _,U as g,B as Y,a2 as b,V as R,W as y,w as V,c as I,a3 as L,F as k,$ as w,O as M}from"./framework.DZENVrE6.js";import{u as P}from"./chunks/vue-i18n.BHw1UmpY.js";const E={class:"post-meta"},F={key:0,class:"post-time",font:"mono",opacity:"80"},S={class:"post-title w-full","inline-flex":"","items-center":"",font:"serif black"},T=C({__name:"YunPostCollapseItem",props:{i:{},post:{}},setup(m){const p=m,c=u(!1),i=u();return D(i,{initial:{opacity:0,y:20},enter:{opacity:1,y:0,transition:{duration:200,delay:p.i*50,onComplete(){c.value=!0}}}}),(e,l)=>{const v=N("RouterLink");return o(),a("article",{ref_key:"itemRef",ref:i,class:y(["post-item relative",{show:c.value}])},[n("header",{class:y(["post-header cursor-pointer w-full",{show:c.value}]),flex:"~","items-center":"",relative:"",hover:"bg-black/1"},[n("div",E,[e.post.date?(o(),a("time",F,d(_(x)(e.post.date,{template:"MM-DD"})),1)):g("v-if",!0)]),n("h2",S,[Y(v,{to:e.post.path||"",class:"post-title-link"},{default:b(()=>[R(d(e.post.title),1)]),_:1},8,["to"])])],2)],2)}}}),z={class:"post-collapse px-10 lt-sm:px-5 max-w-3xl",relative:""},O={w:"full",text:"center",class:"yun-text-light",p:"2"},U={class:"post-collapse-action",text:"center"},W={key:0,"i-ri-sort-desc":""},q={key:1,"i-ri-sort-asc":""},A={class:"collection-title","m-0":"",relative:""},G=["id"],Z=C({__name:"YunPostCollapse",props:{posts:{}},setup(m){const p=m,{t:c}=P(),i=u([]),e=u({});V(()=>p.posts,()=>{e.value={},i.value=[],p.posts.forEach(s=>{if(!(s.hide&&s.hide!=="index")&&s.date){const t=Number.parseInt(x(s.date,{template:"YYYY"}));e.value[t]?e.value[t].push(s):(i.value.push(t),e.value[t]=[s])}})},{immediate:!0});const l=u(!0),v=I(()=>{const t=i.value.sort((h,r)=>r-h);return l.value?t:[...t].reverse()});return(s,t)=>{const h=T;return o(),a("div",z,[Y(L,{appear:"","enter-active-class":"animate-fade-in animate-duration-400"},{default:b(()=>[n("div",O,d(_(c)("counter.archives",s.posts.length)),1)]),_:1}),n("div",U,[n("button",{class:"yun-icon-btn shadow hover:shadow-md",onClick:t[0]||(t[0]=r=>l.value=!l.value)},[l.value?(o(),a("div",W)):(o(),a("div",q))])]),(o(!0),a(k,null,w(v.value,r=>(o(),a("div",{key:r,m:"b-6"},[n("div",A,[n("h2",{id:`#archive-year-${r}`,class:"archive-year",text:"4xl",p:"y-2"},d(r),9,G)]),(o(!0),a(k,null,w(_($)(e.value[r],l.value),(B,f)=>(o(),M(h,{key:f,post:B,i:f},null,8,["post","i"]))),128))]))),128))])}}});export{Z as _};
