import{R as m}from"./index-iOZ0Bzpl.js";import{d as V,as as N,r as S,k as _,i as s,w as o,b as i,j as B,e as n,F as h,l as v,m as p,c as l,f as a,B as y,N as z,u as t,aG as $,E as F,bc as E,bd as O,p as T,q as W,_ as G}from"./index-DO6axeOr.js";import H from"./index-Clc44UWx.js";import{R as L}from"./index-CQfL3Gbv.js";import{u as P}from"./index-DrYK1OiU.js";import{_ as U}from"./bar.vue_vue_type_script_setup_true_lang-CXwWXVe9.js";import{_ as A}from"./line.vue_vue_type_script_setup_true_lang-OetTa8a8.js";import{_ as J}from"./round.vue_vue_type_script_setup_true_lang-CVhK1f7e.js";import{R as K}from"./index-mQFHFLsH.js";import{c as M,b,p as Q,l as X}from"./columns-Be5cj5oi.js";import"./hooks-xsN8C34W.js";import"./propTypes-DnNFEbDH.js";const x=f=>(T("data-v-da11050c"),f=f(),W(),f),Y={class:"flex justify-between"},Z={class:"text-md font-medium"},ee={class:"flex justify-between items-start mt-3"},te={class:"w-1/2"},ae={class:"font-medium text-green-500"},se={class:"flex justify-between"},oe=x(()=>a("span",{class:"text-md font-medium"},"分析概览",-1)),ne={class:"flex justify-between items-start mt-3"},le=x(()=>a("div",{class:"flex justify-between"},[a("span",{class:"text-md font-medium"},"解决概率")],-1)),re={class:"text-nowrap ml-2 text-text_color_regular text-sm"},ie=x(()=>a("div",{class:"flex justify-between"},[a("span",{class:"text-md font-medium"},"数据统计")],-1)),ce=x(()=>a("div",{class:"flex justify-between"},[a("span",{class:"text-md font-medium"},"最新动态")],-1)),de={class:"text-text_color_regular text-sm"},ue=V({name:"Welcome",__name:"index",setup(f){const{isDark:g}=N();let c=S(1);const k=[{label:"上周"},{label:"本周"}];return(me,w)=>{const D=i("IconifyIconOffline"),d=i("el-card"),j=i("el-progress"),I=i("el-timeline-item"),C=i("el-timeline"),R=i("el-scrollbar"),q=i("el-row"),u=B("motion");return n(),_("div",null,[s(q,{gutter:24,justify:"space-around"},{default:o(()=>[(n(!0),_(h,null,v(t(M),(e,r)=>p((n(),l(t(m),{key:r,class:"mb-[18px]",value:6,md:12,sm:12,xs:24,initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:80*(r+1)}}},{default:o(()=>[s(d,{class:"line-card",shadow:"never"},{default:o(()=>[a("div",Y,[a("span",Z,y(e.name),1),a("div",{class:"w-8 h-8 flex justify-center items-center rounded-md",style:z({backgroundColor:t(g)?"transparent":e.bgColor})},[s(D,{icon:e.icon,color:e.color,width:"18"},null,8,["icon","color"])],4)]),a("div",ee,[a("div",te,[s(t(L),{duration:e.duration,fontSize:"1.6em",startVal:100,endVal:e.value},null,8,["duration","endVal"]),a("p",ae,y(e.percent),1)]),e.data.length>1?(n(),l(t(A),{key:0,class:"!w-1/2",color:e.color,data:e.data},null,8,["color","data"])):(n(),l(t(J),{key:1,class:"!w-1/2"}))])]),_:2},1024)]),_:2},1032,["enter"])),[[u]])),128)),p((n(),l(t(m),{class:"mb-[18px]",value:18,xs:24,initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:400}}},{default:o(()=>[s(d,{class:"bar-card",shadow:"never"},{default:o(()=>[a("div",se,[oe,s(t(K),{modelValue:t(c),"onUpdate:modelValue":w[0]||(w[0]=e=>$(c)?c.value=e:c=e),options:k},null,8,["modelValue"])]),a("div",ne,[s(t(U),{requireData:t(b)[t(c)].requireData,questionData:t(b)[t(c)].questionData},null,8,["requireData","questionData"])])]),_:1})]),_:1})),[[u]]),p((n(),l(t(m),{class:"mb-[18px]",value:6,xs:24,initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:480}}},{default:o(()=>[s(d,{shadow:"never"},{default:o(()=>[le,(n(!0),_(h,null,v(t(Q),(e,r)=>(n(),_("div",{key:r,class:F(["flex","justify-between","items-start",r===0?"mt-8":"mt-[2.15rem]"])},[s(j,{"text-inside":!0,percentage:e.percentage,"stroke-width":21,color:e.color,striped:"","striped-flow":"",duration:e.duration},null,8,["percentage","color","duration"]),a("span",re,y(e.week),1)],2))),128))]),_:1})]),_:1})),[[u]]),p((n(),l(t(m),{class:"mb-[18px]",value:18,xs:24,initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:560}}},{default:o(()=>[s(d,{shadow:"never",class:"h-[580px]"},{default:o(()=>[ie,s(H,{class:"mt-3"})]),_:1})]),_:1})),[[u]]),p((n(),l(t(m),{class:"mb-[18px]",value:6,xs:24,initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:640}}},{default:o(()=>[s(d,{shadow:"never"},{default:o(()=>[ce,s(R,{"max-height":"504",class:"mt-3"},{default:o(()=>[s(C,null,{default:o(()=>[(n(!0),_(h,null,v(t(X),(e,r)=>(n(),l(I,{key:r,center:"",placement:"top",icon:E(t(P)({background:t(O)({randomizeHue:!0})})),timestamp:e.date},{default:o(()=>[a("p",de,y(`新增 ${e.requiredNumber} 条问题，${e.resolveNumber} 条已解决`),1)]),_:2},1032,["icon","timestamp"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})),[[u]])]),_:1})])}}}),je=G(ue,[["__scopeId","data-v-da11050c"]]);export{je as default};
