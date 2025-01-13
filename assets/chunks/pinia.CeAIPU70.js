import{s as M,r as V,v as z,j as G,w as $,i as T,l as E,x as B,t as tt,y as et,g as st,o as nt,n as ot,z as ct,c as rt}from"../framework.BDAG0DUs.js";/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let D;const R=t=>D=t,J=Symbol();function L(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var x;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(x||(x={}));function ut(){const t=M(!0),o=t.run(()=>V({}));let s=[],e=[];const r=z({install(u){R(r),r._a=u,u.provide(J,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return this._a?s.push(u):e.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const K=()=>{};function A(t,o,s,e=K){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&st()&&nt(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const at=t=>t(),H=Symbol(),k=Symbol();function O(t,o){t instanceof Map&&o instanceof Map?o.forEach((s,e)=>t.set(e,s)):t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];L(r)&&L(e)&&t.hasOwnProperty(s)&&!E(e)&&!B(e)?t[s]=O(r,e):t[s]=e}return t}const ft=Symbol();function it(t){return!L(t)||!t.hasOwnProperty(ft)}const{assign:y}=Object;function lt(t){return!!(E(t)&&t.effect)}function ht(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let g;function b(){a||(s.state.value[t]=r?r():{});const v=ct(s.state.value[t]);return y(v,u,Object.keys(f||{}).reduce((S,_)=>(S[_]=z(rt(()=>{R(s);const m=s._s.get(t);return f[_].call(m,m)})),S),{}))}return g=q(t,b,o,s,e,!0),g}function q(t,o,s={},e,r,u){let f;const a=y({actions:{}},s),g={deep:!0};let b,v,S=[],_=[],m;const d=e.state.value[t];!u&&!d&&(e.state.value[t]={}),V({});let W;function N(c){let n;b=v=!1,typeof c=="function"?(c(e.state.value[t]),n={type:x.patchFunction,storeId:t,events:m}):(O(e.state.value[t],c),n={type:x.patchObject,payload:c,storeId:t,events:m});const i=W=Symbol();ot().then(()=>{W===i&&(b=!0)}),v=!0,P(S,n,e.state.value[t])}const Q=u?function(){const{state:n}=s,i=n?n():{};this.$patch(j=>{y(j,i)})}:K;function U(){f.stop(),S=[],_=[],e._s.delete(t)}const F=(c,n="")=>{if(H in c)return c[k]=n,c;const i=function(){R(e);const j=Array.from(arguments),C=[],I=[];function Y(l){C.push(l)}function Z(l){I.push(l)}P(_,{args:j,name:i[k],store:h,after:Y,onError:Z});let w;try{w=c.apply(this&&this.$id===t?this:h,j)}catch(l){throw P(I,l),l}return w instanceof Promise?w.then(l=>(P(C,l),l)).catch(l=>(P(I,l),Promise.reject(l))):(P(C,w),w)};return i[H]=!0,i[k]=n,i},X={_p:e,$id:t,$onAction:A.bind(null,_),$patch:N,$reset:Q,$subscribe(c,n={}){const i=A(S,c,n.detached,()=>j()),j=f.run(()=>$(()=>e.state.value[t],C=>{(n.flush==="sync"?v:b)&&c({storeId:t,type:x.direct,events:m},C)},y({},g,n)));return i},$dispose:U},h=T(X);e._s.set(t,h);const p=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(f=M()).run(()=>o({action:F}))));for(const c in p){const n=p[c];if(E(n)&&!lt(n)||B(n))u||(d&&it(n)&&(E(n)?n.value=d[c]:O(n,d[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const i=F(n,c);p[c]=i,a.actions[c]=n}}return y(h,p),y(tt(h),p),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:c=>{N(n=>{y(n,c)})}}),e._p.forEach(c=>{y(h,f.run(()=>c({store:h,app:e._a,pinia:e,options:a})))}),d&&u&&s.hydrate&&s.hydrate(h.$state,d),b=!0,v=!0,h}/*! #__NO_SIDE_EFFECTS__ */function vt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,g){const b=et();return a=a||(b?G(J,null):null),a&&R(a),a=D,a._s.has(e)||(u?q(e,o,r,a):ht(e,r,a)),a._s.get(e)}return f.$id=e,f}const St=({isClient:t,initialState:o,app:s})=>{const e=ut();s.use(e),t?e.state.value=o.pinia||{}:o.pinia=e.state.value};export{vt as d,St as i};
