import{p as r,b as _,aH as g,aC as O,as as p,_ as b,ac as h,ab as E,y as N,ad as M}from"./index.ce175854.js";import{B as w,r as y,bW as B,T as I,D as S,F as Y,K as H}from"./vendor.bf608252.js";const c=1e3,l=c*60,u=l*60,T=u*24,$=w({name:"Time",props:{value:r.oneOfType([r.number,r.instanceOf(Date),r.string]).isRequired,step:r.number.def(60),mode:r.oneOf(["date","datetime","relative"]).def("relative")},setup(i){const m=y(""),{t:s}=_();B(d,i.step*c),I(()=>i.value,()=>{d()},{immediate:!0});function v(){const{value:e}=i;let n=0;if(h(e)){const o=e.toString().length>10?e:e*1e3;n=new Date(o).getTime()}else E(e)?n=new Date(e).getTime():N(e)&&(n=e.getTime());return n}function d(){const{mode:e,value:n}=i,o=v();e==="relative"?m.value=D(o):e==="datetime"?m.value=g(n):e==="date"&&(m.value=O(n))}function D(e){const n=new Date().getTime(),o=p(e).isBefore(n);let t=n-e;o||(t=-t);let a="",f=s(o?"component.time.before":"component.time.after");return t<c?a=s("component.time.just"):t<l?a=parseInt(t/c)+s("component.time.seconds")+f:t>=l&&t<u?a=Math.floor(t/l)+s("component.time.minutes")+f:t>=u&&t<T?a=Math.floor(t/u)+s("component.time.hours")+f:t>=T&&t<262386e4?a=Math.floor(t/T)+s("component.time.days")+f:t>=262386e4&&t<=3156786e4&&o?a=p(e).format("MM-DD-HH-mm"):a=p(e).format("YYYY"),a}return{date:m}}});function C(i,m,s,v,d,D){return S(),Y("span",null,H(i.date),1)}var R=b($,[["render",C]]);const k=M(R);export{k as T};
