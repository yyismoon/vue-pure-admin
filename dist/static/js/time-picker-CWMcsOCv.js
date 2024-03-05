import{d as E,r as o,L as H,k as L,i as l,w as s,b as r,j as M,e as h,f as n,m as B,c as T,h as m}from"./index-DO6axeOr.js";const P={class:"card-header"},R=n("p",{class:"mb-2"},"日期和时间点",-1),q=n("p",{class:"text-[15px]"},"鼠标滚轮进行选择",-1),F=n("p",{class:"text-[15px]"},"箭头进行选择",-1),G=n("p",{class:"mb-2"},"限制时间选择范围",-1),I=n("p",{class:"mb-2"},"任意时间范围",-1),J={class:"card-header"},K=n("p",{class:"mb-2"},"固定时间点",-1),O=n("p",{class:"mb-2 mt-4"},"时间格式",-1),Q=n("p",{class:"mb-2 mt-4"},"固定时间范围",-1),Y=E({name:"TimePicker",__name:"time-picker",setup(W){const t=o("default"),d=o(),z=o(""),w=o(""),x=o(),k=o(new Date(2016,9,10,18,30)),p=(i,e)=>{const c=[];for(let u=i;u<=e;u++)c.push(u);return c},D=()=>p(0,16).concat(p(19,23)),A=i=>{if(i===17)return p(0,29);if(i===18)return p(31,59)},S=(i,e)=>{if(i===18&&e===30)return p(1,59)};H(t,i=>i==="disabled"?d.value="default":d.value=t.value);const g=o(""),U=o(""),b=o(""),f=o("");return(i,e)=>{const c=r("el-link"),u=r("el-radio"),j=r("el-radio-group"),V=r("el-space"),v=r("el-time-picker"),y=r("el-divider"),C=r("el-card"),_=r("el-time-select"),N=M("tippy");return h(),L("div",null,[l(C,{shadow:"never"},{header:s(()=>[n("div",P,[l(V,{wrap:"",size:40},{default:s(()=>[B((h(),T(c,{href:"https://element-plus.org/zh-CN/component/time-picker.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:s(()=>[m(" 时间选择器 ")]),_:1})),[[N,{content:"点击查看详细文档"}]]),l(j,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),size:"small"},{default:s(()=>[l(u,{value:"large"},{default:s(()=>[m("大尺寸")]),_:1}),l(u,{value:"default"},{default:s(()=>[m("默认尺寸")]),_:1}),l(u,{value:"small"},{default:s(()=>[m("小尺寸")]),_:1}),l(u,{value:"disabled"},{default:s(()=>[m("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),default:s(()=>[R,l(V,{wrap:""},{default:s(()=>[q,l(v,{modelValue:z.value,"onUpdate:modelValue":e[1]||(e[1]=a=>z.value=a),placeholder:"请选择时间",class:"!w-[140px]",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"]),F,l(v,{modelValue:w.value,"onUpdate:modelValue":e[2]||(e[2]=a=>w.value=a),"arrow-control":"",placeholder:"请选择时间",class:"!w-[140px]",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"])]),_:1}),l(y),G,l(v,{modelValue:k.value,"onUpdate:modelValue":e[3]||(e[3]=a=>k.value=a),class:"!w-[140px]","disabled-hours":D,"disabled-minutes":A,"disabled-seconds":S,placeholder:"Arbitrary time",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"]),l(y),I,l(v,{modelValue:x.value,"onUpdate:modelValue":e[4]||(e[4]=a=>x.value=a),class:"!w-[220px]","is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"])]),_:1}),l(C,{shadow:"never",class:"mt-4"},{header:s(()=>[n("div",J,[B((h(),T(c,{href:"https://element-plus.org/zh-CN/component/time-select.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:s(()=>[m(" 时间选择 ")]),_:1})),[[N,{content:"点击查看详细文档"}]])])]),default:s(()=>[K,l(_,{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=a=>g.value=a),placeholder:"请选择时间",class:"!w-[140px]",start:"08:30",step:"00:15",end:"18:30",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"]),O,l(_,{modelValue:U.value,"onUpdate:modelValue":e[6]||(e[6]=a=>U.value=a),placeholder:"请选择时间",class:"!w-[140px]",start:"00:00",step:"00:30",end:"23:59",format:"hh:mm A",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","size","disabled"]),Q,l(V,{wrap:""},{default:s(()=>[l(_,{modelValue:b.value,"onUpdate:modelValue":e[7]||(e[7]=a=>b.value=a),placeholder:"开始时间",class:"!w-[140px]","max-time":f.value,start:"08:30",step:"00:15",end:"18:30",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","max-time","size","disabled"]),l(_,{modelValue:f.value,"onUpdate:modelValue":e[8]||(e[8]=a=>f.value=a),placeholder:"结束时间",class:"!w-[140px]","min-time":b.value,start:"08:30",step:"00:15",end:"18:30",size:d.value,disabled:t.value==="disabled"},null,8,["modelValue","min-time","size","disabled"])]),_:1})]),_:1})])}}});export{Y as default};
