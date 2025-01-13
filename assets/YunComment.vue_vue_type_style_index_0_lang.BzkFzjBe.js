import{L as A,m as S,k as M}from"./app.CY6J4x6n.js";import{i as f,a as v}from"./index.C5okkQwF.js";import"./chunks/dayjs.Byk5cVHE.js";import{e as d,M as w,N as n,O as i,P as c,R as u,u as B,aj as L,ak as W,r as g,S as y,W as x,B as m,a2 as _,a0 as E,F as N,$ as O,a1 as P,a3 as j,a8 as z,L as D,c as R,U as p,Y as T}from"./framework.DZENVrE6.js";const U=d({__name:"YunArtalk",setup(r){return f(v)||(void 0)(),(a,t)=>{const s=w("ArtalkClient");return n(),i(s)}}}),F=d({__name:"YunTwikoo",setup(r){return f(v)||(void 0)(),(a,t)=>(n(),c("div",null,t[0]||(t[0]=[u("div",{id:"tcomment",w:"full"},null,-1)])))}}),I=d({__name:"YunWaline",setup(r){if(f(v))throw new Error("Please install valaxy-addon-waline");const a=(void 0)();return(t,s)=>{const e=w("WalineClient");return n(),i(e,{w:"full",options:B(a).options||{serverURL:""}},null,8,["options"])}}}),q={"case-capital":"","op-90":""},G={class:"shadow-lg select-options absolute translate-y-1 left-0 top-full w-full bg-$va-c-bg-light overflow-hidden rounded-1"},H=["onClick"],J=d({__name:"YunSelect",props:L({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const a=W(r,"modelValue"),t=g(!1);A("click",()=>{t.value=!1});function s(e){e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),t.value=!t.value}return(e,o)=>(n(),c("div",{class:"relative h-8 w-30 text-$va-c-text-2 z-$yun-z-select",onMousedown:o[0]||(o[0]=z(()=>{},["stop"]))},[u("button",{class:x(["flex h-full w-full px-2 items-center justify-between rounded transition",t.value?"border-$va-c-primary":""]),border:"~ gray op-30",onClick:s},[u("span",q,y(a.value),1),o[1]||(o[1]=u("div",{"inline-flex":"","i-ri-arrow-down-s-line":""},null,-1))],2),m(j,{persisted:""},{default:_(()=>[E(u("ul",G,[(n(!0),c(N,null,O(e.options,l=>(n(),c("li",{key:l,class:x(["cursor-pointer list-none px-2 hover:bg-$va-c-primary-light hover:text-white case-capital",{"bg-$va-c-primary text-white":a.value===l}]),onClick:k=>a.value=l},y(l),11,H))),128))],512),[[P,t.value]])]),_:1})],32))}}),K=D(J,[["__scopeId","data-v-697e638e"]]),Q={key:0,class:"flex justify-end w-full mb-2"},ne=d({__name:"YunComment",setup(r){const a=S(),t=["valaxy-addon-waline","valaxy-addon-twikoo","valaxy-addon-artalk"],s=R(()=>t.filter(o=>a.value.addons[o]).map(o=>o.split("-")[2])),e=g(s.value[0]);return(o,l)=>{const k=K,C=I,h=F,$=U,b=w("ClientOnly"),V=M;return n(),i(V,{w:"full",p:"4",class:"comment yun-comment sm:p-6 lg:px-12 xl:px-16"},{default:_(()=>[m(b,null,{default:_(()=>[s.value.length>1?(n(),c("div",Q,[m(k,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=Y=>e.value=Y),options:s.value},null,8,["modelValue","options"])])):p("v-if",!0),e.value==="waline"?(n(),i(C,{key:1})):p("v-if",!0),e.value==="twikoo"?(n(),i(h,{key:2})):p("v-if",!0),e.value==="artalk"?(n(),i($,{key:3})):p("v-if",!0),T(o.$slots,"default")]),_:3})]),_:3})}}});export{ne as _};
