var d=(r,u,o)=>new Promise((i,a)=>{var n=e=>{try{t(o.next(e))}catch(c){a(c)}},s=e=>{try{t(o.throw(e))}catch(c){a(c)}},t=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,s);t((o=o.apply(r,u)).next())});import{P as B}from"./index.7ecbfaec.js";import{B as F,u as h}from"./useForm.62f51828.js";import{_ as w,f as C}from"./index.ce175854.js";import{e as g}from"./user.f60a4007.js";import{B as E,a1 as p,D as P,a2 as A,a6 as m,J as f,w as l,ae as _}from"./vendor.bf608252.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.03822f4b.js";/* empty css              *//* empty css               *//* empty css                */import"./index.c0fb4cdf.js";/* empty css               *//* empty css               *//* empty css               */import"./index.70882f55.js";import"./index.14e38eb5.js";import"./download.42ce0d92.js";const b=[{field:"oldPassword",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"password",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"rpassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:r})=>[{required:!0,validator:(u,o)=>o?o!==r.password?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u4E0D\u80FD\u4E3A\u7A7A")}]}],y=E({name:"ChangePassword",components:{BasicForm:F,PageWrapper:B},setup(){const[r,{validate:u,resetFields:o}]=h({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:b}),i=C();function a(){return d(this,null,function*(){try{const n=yield u(),{oldPassword:s,password:t,rpassword:e}=n;yield g({oldPassword:s,password:t,rpassword:e}),i.logout()}catch(n){}})}return{register:r,resetFields:o,handleSubmit:a}}}),D={class:"py-8 bg-white flex flex-col justify-center items-center"},v={class:"flex justify-center"},k=_(" \u91CD\u7F6E "),x=_(" \u786E\u8BA4 ");function S(r,u,o,i,a,n){const s=p("BasicForm"),t=p("a-button"),e=p("PageWrapper");return P(),A(e,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:m(()=>[f("div",D,[l(s,{onRegister:r.register},null,8,["onRegister"]),f("div",v,[l(t,{onClick:r.resetFields},{default:m(()=>[k]),_:1},8,["onClick"]),l(t,{class:"!ml-4",type:"primary",onClick:r.handleSubmit},{default:m(()=>[x]),_:1},8,["onClick"])])])]),_:1})}var Y=w(y,[["render",S]]);export{Y as default};
