import{d as A,K as B,X as F,n as M,i as o,u as x,F as I,a$ as N,b0 as c,b1 as d,$ as T,S as X,r as D,k as w,l as j,b as z,e as C,c as G,w as L,f as J,B as R,C as O}from"./index-DO6axeOr.js";const i="stay",h="hs-on",f="hs-off",m="hs-range",g="both-left-sides",S="both-right-sides";let H="right",b=[],s=[];const P={HsKey:{type:Number||String,default:0},disabled:{type:Boolean,default:!1},value:{type:Number,default:0},max:{type:Array,default(){return[1,2,3,4,5,6,7,8,9,10]}},echo:{type:Array,default(){return[]}}},Q=A({name:"ReSelector",props:P,emits:["selectedVal"],setup(l,{emit:_}){const a=T(),y=l.value,q=B(()=>l.disabled),v=B(()=>{const e=[];let t=0,r=y;for(y!==Math.floor(y)&&r--;t<r;t++)e.push(h);for(;t<l.max.length;t++)e.push(f);return e}),K=e=>{if(!l.disabled){if(s.length===1){b.length<1&&b.push({index:e});let t=b[0].index;if(e>t)for(H="right",N(!1,S,document.querySelector(".hs-select__item"+s[0].index));e>=t;)c(document.querySelector(".hs-select__item"+t),m),t++;else for(H="left",N(!0,S,document.querySelector(".hs-select__item"+s[0].index));e<=t;)c(document.querySelector(".hs-select__item"+t),m),t--}c(document.querySelector("."+f+e),h)}},u=e=>{if(l.disabled)return;const t=document.querySelector("."+f+e);if(t.className.includes(i))return!1;if(d(t,h),s.length===1){const r=b[0].index;if(e>=r)for(let n=0;n<=e;n++)d(document.querySelector(".hs-select__item"+n),m);else for(;e<=r;)d(document.querySelector(".hs-select__item"+e),m),e++}},V=(e,t)=>{if(l.disabled)return;const r=s.length;r<2?(s.push({item:t,index:e}),c(document.querySelector("."+f+e),i),c(document.querySelector(".hs-select__item"+s[0].index),g),s[1]&&(H==="right"?c(document.querySelector(".hs-select__item"+s[1].index),S):c(document.querySelector(".hs-select__item"+s[1].index),g)),r===1&&(H==="right"?_("selectedVal",{left:s[0].item,right:s[1].item,whole:s}):_("selectedVal",{left:s[1].item,right:s[0].item,whole:s}))):M(()=>{s.forEach(n=>{d(document.querySelector("."+f+n.index),h,i),d(document.querySelector(".hs-select__item"+n.index),g,S)}),s=[],b=[];for(let n=0;n<=l.max.length;n++){const $=document.querySelector(".hs-select__item"+n);$&&d($,m)}s.push({item:t,index:e}),c(document.querySelector("."+f+e),i),c(document.querySelector(".hs-select__item"+s[0].index),g)})},E=e=>{if(e.length!==0){if(e.length>2||e.length===1)throw"传入的数组长度必须是2";for(e.sort((t,r)=>t-r),c(a.refs["hsdiv"+l.HsKey+e[0]],h,i),c(a.refs["hstd"+l.HsKey+e[0]],g),c(a.refs["hsdiv"+l.HsKey+e[1]],h,i),c(a.refs["hstd"+l.HsKey+e[1]],S);e[1]>=e[0];)c(a.refs["hstd"+l.HsKey+e[0]],m),e[0]++}};return F(()=>{M(()=>{E(l.echo)})}),()=>o(I,null,[o("table",{cellspacing:"0",cellpadding:"0"},[o("tbody",null,[o("tr",null,[l.max.map((e,t)=>o("td",{"data-index":l.HsKey,ref:`hstd${l.HsKey}${t}`,class:`hs-select__item${t}`,onMousemove:()=>K(t),onMouseleave:()=>u(t),onClick:()=>V(t,e),style:{cursor:x(q)?"auto":"pointer",textAlign:"center"},key:t},[o("div",{ref:`hsdiv${l.HsKey}${t}`,class:`hs-item ${[x(v)[t]+t]}`},[o("span",null,[e])])]))])])])])}}),U=X(Q),W={class:"font-medium"},Y={key:0,class:"mt-3"},k=A({name:"Selector",__name:"selector",setup(l){const _=D(""),a=D([{title:"基础用法",echo:[],disabled:!1},{title:"回显模式",echo:[2,7],disabled:!0}]),y=({left:q,right:v})=>{_.value=`${q}-${v}`};return(q,v)=>{const K=z("el-card");return C(),w("div",null,[(C(!0),w(I,null,j(a.value,(u,V)=>(C(),G(K,{key:V,class:"mb-2",shadow:"never"},{header:L(()=>[J("span",W,R(u.title),1)]),default:L(()=>[o(x(U),{HsKey:V,echo:u.echo,disabled:u.disabled,onSelectedVal:y},null,8,["HsKey","echo","disabled"]),u.disabled?O("",!0):(C(),w("h4",Y,"选中范围："+R(_.value),1))]),_:2},1024))),128))])}}});export{k as default};
