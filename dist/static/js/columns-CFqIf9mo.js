import{o as i}from"./data-Pgcmi3Hk.js";import{r as p,i as o,e as n,aE as c}from"./index-BYGmXFoi.js";function s(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!c(t)}function f(){const t=p([]),u=[{label:"姓名",prop:"name",cellRenderer:({row:e})=>o(n("el-input"),{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null)},{label:"性别",prop:"sex",cellRenderer:({row:e})=>o(n("el-switch"),{modelValue:e.sex,"onUpdate:modelValue":l=>e.sex=l,"inline-prompt":!0,"active-value":0,"inactive-value":1,"active-text":"男","inactive-text":"女"},null)},{label:"爱好",prop:"hobby",cellRenderer:({row:e})=>{let l;return o(n("el-select"),{modelValue:e.hobby,"onUpdate:modelValue":a=>e.hobby=a,clearable:!0,placeholder:"请选择爱好"},s(l=i.map(a=>o(n("el-option"),{key:a.value,label:a.label,value:a.value},null)))?l:{default:()=>[l]})}},{label:"日期",prop:"date",cellRenderer:({row:e})=>o(n("el-date-picker"),{modelValue:e.date,"onUpdate:modelValue":l=>e.date=l,type:"date",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD",placeholder:"请选择日期"},null),minWidth:110},{label:"操作",fixed:"right",width:90,slot:"operation"}];function r(){t.value.push({id:t.value.length+1,name:"",sex:0,hobby:"",date:""})}function d(e){const l=t.value.indexOf(e);l!==-1&&t.value.splice(l,1)}return{columns:u,dataList:t,onAdd:r,onDel:d}}export{f as useColumns};
