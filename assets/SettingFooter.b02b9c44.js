import{_ as k,G as b,a as h,X as R,f as v,Q as O,b as M,a_ as T,a5 as S,aS as B,aT as A,h as F}from"./index.ce175854.js";import{B as $,cc as w,ba as D,a1 as c,D as N,F as P,w as o,a6 as i,ae as u,K as p,L as j,u as _}from"./vendor.bf608252.js";const x=$({name:"SettingFooter",components:{CopyOutlined:w,RedoOutlined:D},setup(){const e=b(),{prefixCls:d}=h("setting-footer"),{t:s}=M(),{createSuccessModal:g,createMessage:r}=F(),C=R(),l=v(),t=O();function n(){const{isSuccessRef:a}=T(JSON.stringify(_(t.getProjectConfig),null,2));_(a)&&g({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function f(){try{t.setProjectConfig(S);const{colorWeak:a,grayMode:y}=S;B(a),A(y),r.success(s("layout.setting.resetSuccess"))}catch(a){r.error(a)}}function m(){localStorage.clear(),t.resetAllState(),e.resetState(),C.resetState(),l.resetState(),location.reload()}return{prefixCls:d,t:s,handleCopy:n,handleResetSetting:f,handleClearAndRedo:m}}});function G(e,d,s,g,r,C){const l=c("CopyOutlined"),t=c("a-button"),n=c("RedoOutlined");return N(),P("div",{class:j(e.prefixCls)},[o(t,{type:"primary",block:"",onClick:e.handleCopy},{default:i(()=>[o(l,{class:"mr-2"}),u(" "+p(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:i(()=>[o(n,{class:"mr-2"}),u(" "+p(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:i(()=>[o(n,{class:"mr-2"}),u(" "+p(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var W=k(x,[["render",G],["__scopeId","data-v-68a367be"]]);export{W as default};
