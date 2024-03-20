import{d as u,c as n,w as o,e as d,j as v,f as e,i as r,m as s,h as l,k as i,g as c}from"./index-BHSPFdsP.js";const h=c("div",{class:"font-medium"},"波纹(Ripple)",-1),f=c("div",{class:"mb-5"},"组件中的波纹",-1),w=c("div",{class:"mb-5"}," 只要在组件或HTML元素上使用v-ripple指令，就可以启用基本的ripple功能 ",-1),y={class:"mb-5 text-center shadow-md rounded-md p-8 text-lg select-none"},b={class:"inline-block shadow-md rounded-md p-8 text-lg select-none"},x=c("div",{class:"my-5"}," 当使用v-ripple.center时，将始终从目标的中心处产生波纹 ",-1),g={class:"mb-5 text-center shadow-md rounded-md p-8 text-lg select-none"},k=c("div",{class:"mb-5"},` 使用v-ripple="{ class: '' }"添加类来自定义波纹颜色，支持tailwindcss `,-1),B={class:"my-5 text-center shadow-md rounded-md p-4 text-lg select-none"},V=u({name:"Ripple",__name:"ripple",setup(D){return(C,N)=>{const p=d("el-alert"),a=d("el-button"),m=d("el-space"),_=d("el-card"),t=v("ripple");return e(),n(_,{shadow:"never"},{header:o(()=>[h]),default:o(()=>[f,r(p,{title:"v-ripple在某些组件中使用波纹特效会异常，这是因为v-ripple指令只能作用于当前元素，某些组件有多层元素嵌套，且目标元素没在顶层，所以会导致特效异常",type:"warning",closable:!1}),r(m,{wrap:"",class:"my-5"},{default:o(()=>[s((e(),n(a,null,{default:o(()=>[l("Default")]),_:1})),[[t]]),s((e(),n(a,{type:"primary"},{default:o(()=>[l("Primary")]),_:1})),[[t]]),s((e(),n(a,{type:"success"},{default:o(()=>[l("Success")]),_:1})),[[t]]),s((e(),n(a,{type:"info"},{default:o(()=>[l("Info")]),_:1})),[[t]]),s((e(),n(a,{type:"warning"},{default:o(()=>[l("Warning")]),_:1})),[[t]]),s((e(),n(a,{type:"danger"},{default:o(()=>[l("Danger")]),_:1})),[[t]])]),_:1}),s((e(),n(_,{class:"mb-5 w-[510px] select-none",shadow:"hover"},{default:o(()=>[l(" 卡片 ")]),_:1})),[[t]]),w,s((e(),i("div",y,[l(" HTML元素 ")])),[[t]]),s((e(),i("span",b,[l(" 行内元素需要添加display: block或display: inline-block才能生效 ")])),[[t]]),x,s((e(),i("div",g,[l(" 始终从中心触发波纹 ")])),[[t,void 0,void 0,{center:!0}]]),k,r(p,{title:"自定义样式生效为文字颜色，例如：color: 'red';",type:"warning",closable:!1}),s((e(),i("div",B,[l(" 自定义波纹颜色 ")])),[[t,{class:"text-red-500"}]])]),_:1})}}});export{V as default};