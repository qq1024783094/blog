import{l as m}from"./app.CfZw43ta.js";import"./chunks/dayjs.Byk5cVHE.js";import{e as f,r as _,c as v,N as n,P as r,R as s,u as i,S as x,U as y,F as h,$ as g,W as c,Z as b}from"./framework.DZENVrE6.js";import{u as k}from"./chunks/vue-i18n.BHw1UmpY.js";const C={class:"yun-sponsor-container flex-center flex-col"},w=["title"],S={key:0,class:"sponsor-description",mb:"4",text:"sm"},B={class:"flex justify-around"},z=["href"],N=["src","title"],D=f({__name:"YunSponsor",setup($){const{t:d}=k(),o=m(),l=_(!1),u=v(()=>{var a;return((a=o.value.sponsor)==null?void 0:a.title)??d("reward.donate")});return(a,t)=>(n(),r("div",C,[s("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:u.value,text:"red-400",onClick:t[0]||(t[0]=e=>l.value=!l.value)},t[1]||(t[1]=[s("div",{class:"mt-2px","i-ri-heart-fill":""},null,-1)]),8,w),s("div",{class:c(["qrcode-container qrcode flex-center flex-col",l.value&&"show"]),m:"y-4"},[i(o).sponsor.description?(n(),r("div",S,x(i(o).sponsor.description),1)):y("v-if",!0),s("div",B,[(n(!0),r(h,null,g(i(o).sponsor.methods,(e,p)=>(n(),r("a",{key:p,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:e.url,target:"_blank",style:b(`color:${e.color}`)},[s("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:e.url,title:e.name},null,8,N),s("div",{text:"xl",m:"2",class:c(e.icon)},null,2)],12,z))),128))])],2)]))}});export{D as _};
