import{d as k,r as y,c as D,w as m,e as r,f as E,i as e,g as l,h as c,B as N,u as s,D as b,A as R,p as $,q as T,_ as q}from"./index-BHSPFdsP.js";import{d as u}from"./home-filled-NADQtN-e.js";import{u as _}from"./hooks-yTL3JLcC.js";import{R as a}from"./index-tv3g-p-5.js";const t=n=>($("data-v-78544670"),n=n(),T(),n),A=t(()=>l("div",{class:"card-header"},[l("span",{class:"font-medium"},"分段控制器")],-1)),L={class:"mb-2"},O={class:"text-primary"},U=t(()=>l("p",{class:"mb-2"},"tooltip 提示",-1)),z=t(()=>l("p",{class:"mb-2"},"change 事件",-1)),F=t(()=>l("p",{class:"mb-2"},"禁用",-1)),G=t(()=>l("p",{class:"mb-2"},"block 属性(将宽度调整为父元素宽度)",-1)),H=t(()=>l("p",{class:"mb-2"},"可设置图标",-1)),J=t(()=>l("p",{class:"mb-2"},"只设置图标",-1)),K=t(()=>l("p",{class:"mb-2"},"自定义渲染",-1)),M=k({name:"Segmented",__name:"segmented",setup(n){const p=y(4),h=[{label:"周一"},{label:"周二"},{label:"周三"},{label:"周四"},{label:"周五"}],f=[{label:"周一",tip:"周一启航，新的篇章"},{label:"周二",tip:"周二律动，携手共进"},{label:"周三",tip:"周三昂扬，激情不减"},{label:"周四",tip:"周四精进，事半功倍"},{label:"周五",tip:"周五喜悦，收尾归档"}],w=[{label:"周一"},{label:"周二"},{label:"周三",disabled:!0},{label:"周四"},{label:"周五",disabled:!0}],x=[{label:"周一"},{label:"周二"},{label:"周三"},{label:"周四"},{label:"周五喜悦，收尾归档，周末倒计时",tip:"周五喜悦，收尾归档，周末倒计时"}],g=[{label:"周一",icon:u},{label:"周二"},{label:"周三",icon:"ri:terminal-window-line"},{label:"周四"},{label:"周五",icon:"streamline-emojis:2"}],C=[{icon:u},{icon:"ri:terminal-window-line"},{icon:"streamline-emojis:cow-face"},{icon:"streamline-emojis:airplane"},{icon:"streamline-emojis:2"}],I=[{label:()=>e("div",null,[b(_(u),{class:"m-auto mt-1 w-[18px] h-[18px]"}),e("p",null,[c("周一")])])},{label:()=>e("div",null,[b(_("ri:terminal-window-line"),{class:"m-auto mt-1 w-[18px] h-[18px]"}),e("p",null,[c("周二")])])},{label:()=>e("div",null,[b(_("streamline-emojis:cow-face"),{class:"m-auto mt-1 w-[18px] h-[18px]"}),e("p",null,[c("周三")])])}],B=[{label:"周一",value:1},{label:"周二",value:2},{label:"周三",value:3}];function S({index:v,option:i}){const{label:o,value:d}=i;R(`当前选中项索引为：${v}，名字为${o}，值为${d}`,{type:"success"})}return(v,i)=>{const o=r("el-divider"),d=r("el-scrollbar"),V=r("el-card");return E(),D(V,{shadow:"never"},{header:m(()=>[A]),default:m(()=>[e(d,null,{default:m(()=>[l("p",L,[c(" 基础用法（v-model）"),l("span",O,N(h[p.value].label),1)]),e(s(a),{modelValue:p.value,"onUpdate:modelValue":i[0]||(i[0]=j=>p.value=j),options:h},null,8,["modelValue"]),e(o),U,e(s(a),{options:f}),e(o),z,e(s(a),{options:B,onChange:S}),e(o),F,e(s(a),{options:w}),e(o),G,e(s(a),{options:x,block:""}),e(o),H,e(s(a),{options:g}),e(o),J,e(s(a),{options:C}),e(o),K,e(s(a),{options:I})]),_:1})]),_:1})}}}),Y=q(M,[["__scopeId","data-v-78544670"]]);export{Y as default};