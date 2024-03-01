var Z=Object.defineProperty,ee=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var L=(u,c,a)=>c in u?Z(u,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[c]=a,S=(u,c)=>{for(var a in c||(c={}))ae.call(c,a)&&L(u,a,c[a]);if(D)for(var a of D(c))se.call(c,a)&&L(u,a,c[a]);return u},G=(u,c)=>ee(u,le(c));import{d as oe,r as n,a7 as te,c as j,w as l,b as i,e as z,f as d,i as e,h as t,k as H,l as J,E as T,B as O,F as K,u as de,ah as ce,A as ue,p as ne,q as ie,_ as re}from"./index-BfG83_x8.js";const _=u=>(ne("data-v-c5372449"),u=u(),ie(),u),_e={class:"card-header"},pe=_(()=>d("span",{style:{"font-size":"16px","font-weight":"800"}}," 可选按钮 ",-1)),me=_(()=>d("p",{class:"mb-2"},"单选（紧凑风格的按钮样式）",-1)),ve=_(()=>d("p",{class:"mb-2"},"单选（带有边框）",-1)),be=_(()=>d("p",{class:"mb-2"},"单选（自定义内容）",-1)),fe={class:"flex"},he={class:"flex"},ke={class:"flex"},Ve=_(()=>d("p",{class:"mb-2"},"多选（紧凑风格的按钮样式）",-1)),ge=_(()=>d("p",{class:"mb-2"},"多选（带有边框）",-1)),ze=_(()=>d("p",{class:"mb-2"},"多选（来点不一样的体验）",-1)),we={class:"flex"},xe={class:"flex"},Ce={class:"flex"},ye=_(()=>d("p",null,"可控制间距的按钮样式",-1)),Be=_(()=>d("p",{class:"mb-2"},"单选",-1)),Ie={class:"mb-2 mt-4"},Ue=_(()=>d("p",{class:"mb-2"},"单个可选按钮",-1)),Se=oe({name:"CheckButton",__name:"check-button",setup(u){const c=n(20),a=n("default"),p=n(),w=n(!0),$=n("wait"),N=n("complete"),E=n("progress"),F=n(["apple","tomato"]),M=n(["cucumber","onion","blueberry"]),q=n(["tomato","watermelon","strawberry"]),x=n([{title:"等待中",checked:!1},{title:"进行中",checked:!0},{title:"已完成",checked:!1}]),C=n({});function P(m,o){if(a.value==="disabled")return;C.value[o]=Object.assign(G(S({},m),{checked:!m.checked})),x.value.map(V=>V.checked=!1),x.value[o].checked=C.value[o].checked;const{title:r,checked:b}=C.value[o];ue(b?`已选中${r}`:`取消选中${r}`,{type:"success"})}const y=n([{title:"苹果",checked:!0},{title:"西红柿",checked:!0},{title:"香蕉",checked:!1}]),A=n({});function Q(m,o){a.value!=="disabled"&&(A.value[o]=Object.assign(G(S({},m),{checked:!m.checked})),y.value[o].checked=A.value[o].checked)}function R(){a.value!=="disabled"&&(w.value=!w.value)}return te(a,m=>m==="disabled"?p.value="default":p.value=a.value),(m,o)=>{const r=i("el-radio"),b=i("el-radio-group"),V=i("el-space"),f=i("el-radio-button"),v=i("el-divider"),h=i("IconifyIconOnline"),k=i("el-checkbox-button"),B=i("el-checkbox-group"),I=i("el-checkbox"),W=i("el-slider"),U=i("el-check-tag"),X=i("el-card");return z(),j(X,{shadow:"never"},{header:l(()=>[d("div",_e,[e(V,{wrap:"",size:40},{default:l(()=>[pe,e(b,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s),size:"small"},{default:l(()=>[e(r,{value:"large"},{default:l(()=>[t("大尺寸")]),_:1}),e(r,{value:"default"},{default:l(()=>[t("默认尺寸")]),_:1}),e(r,{value:"small"},{default:l(()=>[t("小尺寸")]),_:1}),e(r,{value:"disabled"},{default:l(()=>[t("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),default:l(()=>[me,e(b,{modelValue:$.value,"onUpdate:modelValue":o[1]||(o[1]=s=>$.value=s),size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(f,{value:"wait"},{default:l(()=>[t("等待中")]),_:1}),e(f,{value:"progress"},{default:l(()=>[t("进行中")]),_:1}),e(f,{value:"complete"},{default:l(()=>[t("已完成")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),ve,e(b,{modelValue:N.value,"onUpdate:modelValue":o[2]||(o[2]=s=>N.value=s),size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(r,{value:"wait",border:""},{default:l(()=>[t("等待中")]),_:1}),e(r,{value:"progress",border:""},{default:l(()=>[t("进行中")]),_:1}),e(r,{value:"complete",border:""},{default:l(()=>[t("已完成")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),be,e(b,{modelValue:E.value,"onUpdate:modelValue":o[3]||(o[3]=s=>E.value=s),size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(f,{value:"wait"},{default:l(()=>[d("span",fe,[e(h,{icon:"ri:progress-8-fill",class:"mr-1"}),t(" 等待中 ")])]),_:1}),e(f,{value:"progress"},{default:l(()=>[d("span",he,[e(h,{icon:"ri:progress-6-line",class:"mr-1"}),t(" 进行中 ")])]),_:1}),e(f,{value:"complete"},{default:l(()=>[d("span",ke,[e(h,{icon:"ri:progress-8-line",class:"mr-1"}),t(" 已完成 ")])]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),Ve,e(B,{modelValue:F.value,"onUpdate:modelValue":o[4]||(o[4]=s=>F.value=s),size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(k,{value:"apple"},{default:l(()=>[t("苹果")]),_:1}),e(k,{value:"tomato"},{default:l(()=>[t("西红柿")]),_:1}),e(k,{value:"banana"},{default:l(()=>[t("香蕉")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),ge,e(B,{modelValue:M.value,"onUpdate:modelValue":o[5]||(o[5]=s=>M.value=s),size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(I,{value:"cucumber",border:""},{default:l(()=>[t("黄瓜")]),_:1}),e(I,{value:"onion",border:""},{default:l(()=>[t("洋葱")]),_:1}),e(I,{value:"blueberry",border:""},{default:l(()=>[t("蓝莓")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),ze,e(B,{modelValue:q.value,"onUpdate:modelValue":o[6]||(o[6]=s=>q.value=s),class:"pure-checkbox",size:p.value,disabled:a.value==="disabled"},{default:l(()=>[e(k,{value:"tomato"},{default:l(()=>[d("span",we,[e(h,{icon:"streamline-emojis:tomato",class:"mr-1"}),t(" 番茄 ")])]),_:1}),e(k,{value:"watermelon"},{default:l(()=>[d("span",xe,[e(h,{icon:"streamline-emojis:watermelon-1",class:"mr-1"}),t(" 西瓜 ")])]),_:1}),e(k,{value:"strawberry"},{default:l(()=>[d("span",Ce,[e(h,{icon:"streamline-emojis:strawberry-1",class:"mr-1"}),t(" 草莓 ")])]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(v),ye,e(W,{modelValue:c.value,"onUpdate:modelValue":o[7]||(o[7]=s=>c.value=s),class:"mb-2 !w-[300px]","show-tooltip":!1,disabled:a.value==="disabled"},null,8,["modelValue","disabled"]),Be,e(V,{wrap:"",size:c.value},{default:l(()=>[(z(!0),H(K,null,J(x.value,(s,g)=>(z(),j(U,{key:g,class:T(["select-none",a.value==="disabled"&&"tag-disabled",s.checked&&"is-active"]),checked:s.checked,onChange:Y=>P(s,g)},{default:l(()=>[t(O(s.title),1)]),_:2},1032,["class","checked","onChange"]))),128))]),_:1},8,["size"]),d("p",Ie," 多选 "+O(de(ce)(y.value.filter(s=>s.checked),"title")),1),e(V,{wrap:"",size:c.value},{default:l(()=>[(z(!0),H(K,null,J(y.value,(s,g)=>(z(),j(U,{key:g,class:T(["select-none",a.value==="disabled"&&"tag-disabled",s.checked&&"is-active"]),checked:s.checked,onChange:Y=>Q(s,g)},{default:l(()=>[t(O(s.title),1)]),_:2},1032,["class","checked","onChange"]))),128))]),_:1},8,["size"]),e(v),Ue,e(U,{class:T(["select-none",a.value==="disabled"&&"tag-disabled",w.value&&"is-active"]),checked:w.value,onChange:R},{default:l(()=>[t(" 一个人也要努力 😊 ")]),_:1},8,["class","checked"])]),_:1})}}}),Te=re(Se,[["__scopeId","data-v-c5372449"]]);export{Te as default};
