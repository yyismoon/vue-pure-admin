import{c as _}from"./data-DriGWSjr.js";import{d as b,a as r,e as c,f as h,k as f,h as i,i as l,w as v,g as a,t as s,u as x}from"./index-CiUe5cVr.js";const V={class:"m-4"},y={class:"mb-2"},C={class:"mb-2"},B={class:"mb-2"},N={class:"mb-4"},k=a("h3",null,"Family",-1),A=b({__name:"expand",setup(S){const o=r(!1),d=r(!1),m=[{type:"expand",slot:"expand"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}],u=[{label:"Name",prop:"name"},{label:"State",prop:"state"},{label:"City",prop:"city"},{label:"Address",prop:"address"},{label:"Zip",prop:"zip"}];return(g,t)=>{const n=c("el-switch"),p=c("pure-table");return h(),f("div",null,[i(" switch parent border: "),l(n,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e)},null,8,["modelValue"]),i(" switch child border: "),l(n,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=e=>d.value=e)},null,8,["modelValue"]),l(p,{data:x(_),columns:m,border:o.value},{expand:v(({row:e})=>[a("div",V,[a("p",y,"State: "+s(e.state),1),a("p",C,"City: "+s(e.city),1),a("p",B,"Address: "+s(e.address),1),a("p",N,"Zip: "+s(e.zip),1),k,l(p,{data:e.family,columns:u,border:d.value},null,8,["data","border"])])]),_:1},8,["data","border"])])}}});export{A as _};