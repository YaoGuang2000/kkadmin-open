var f=(e,m,s)=>new Promise((p,r)=>{var d=o=>{try{a(s.next(o))}catch(n){r(n)}},t=o=>{try{a(s.throw(o))}catch(n){r(n)}},a=o=>o.done?p(o.value):Promise.resolve(o.value).then(d,t);a((s=s.apply(e,m)).next())});import{_ as w,a as y,f as $,b as L}from"./index.ce175854.js";import{B as F,b as M}from"./index.14e38eb5.js";import{B as S,u as I}from"./useForm.62f51828.js";import{u as b}from"./lock.96c49fc0.js";import{h as N}from"./header.d801b988.js";import{B as R,j as _,a1 as u,D,a2 as P,a6 as g,J as i,L as c,K as k,w as h,ae as U,a5 as V}from"./vendor.bf608252.js";import"./useWindowSizeFn.011a8160.js";/* empty css              *//* empty css               *//* empty css                */import"./index.c0fb4cdf.js";/* empty css               *//* empty css               *//* empty css               */import"./index.70882f55.js";import"./download.42ce0d92.js";const j=R({name:"LockModal",components:{BasicModal:F,BasicForm:S},setup(){const{t:e}=L(),{prefixCls:m}=y("header-lock-modal"),s=$(),p=b(),r=_(()=>{var l;return(l=s.getUserInfo)==null?void 0:l.realName}),[d,{closeModal:t}]=M(),[a,{validateFields:o,resetFields:n}]=I({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield o()).password;t(),p.setLockInfo({isLock:!0,pwd:C}),yield n()})}const B=_(()=>{const{avatar:l}=s.getUserInfo;return l||N});return{t:e,prefixCls:m,getRealName:r,register:d,registerForm:a,handleLock:v,avatar:B}}}),q=["src"];function z(e,m,s,p,r,d){const t=u("BasicForm"),a=u("a-button"),o=u("BasicModal");return D(),P(o,V({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:g(()=>[i("div",{class:c(`${e.prefixCls}__entry`)},[i("div",{class:c(`${e.prefixCls}__header`)},[i("img",{src:e.avatar,class:c(`${e.prefixCls}__header-img`)},null,10,q),i("p",{class:c(`${e.prefixCls}__header-name`)},k(e.getRealName),3)],2),h(t,{onRegister:e.registerForm},null,8,["onRegister"]),i("div",{class:c(`${e.prefixCls}__footer`)},[h(a,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:g(()=>[U(k(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var ae=w(j,[["render",z]]);export{ae as default};
