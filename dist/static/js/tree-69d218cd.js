import{e as g,j as x,h as p,d as D,r as u,y as q,A as Z,o as T,bH as U,b as s,f as t,w as l,m as P,u as a,ap as F,ao as m,g as v,E as M,C as G,p as J,q as K,a7 as Q,_ as W}from"./index-a0fff168.js";import{g as X}from"./system-8281c35d.js";import{u as z}from"./hooks-afe6a0f7.js";import{d as Y}from"./git-branch-line-aa4cb38f.js";import{d as ee}from"./search-cc37b371.js";import{d as te}from"./more-2-fill-a666858a.js";import{d as oe}from"./office-building-cc7a1721.js";const ne={width:24,height:24,body:'<path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"/>'},le=ne,ae={width:1024,height:1024,body:'<path fill="currentColor" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"/><path fill="currentColor" d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"/>'},se=ae,re={width:"32",height:"32",viewBox:"0 0 24 24"},ie=p("path",{fill:"currentColor",d:"M22 4V2H2v2h9v14.17l-5.5-5.5-1.42 1.41L12 22l7.92-7.92-1.42-1.41-5.5 5.5V4h9Z"},null,-1),ce=[ie];function de(d,h){return g(),x("svg",re,ce)}const ue={render:de},pe={width:"32",height:"32",viewBox:"0 0 24 24"},he=p("path",{fill:"currentColor",d:"M4 2H2v20h2v-9h14.17l-5.5 5.5 1.41 1.42L22 12l-7.92-7.92-1.41 1.42 5.5 5.5H4V2Z"},null,-1),_e=[he];function fe(d,h){return g(),x("svg",pe,_e)}const me={render:fe},ve=d=>(J("data-v-628f3521"),d=d(),K(),d),ge={class:"h-full min-h-[780px] bg-bg_color overflow-auto"},xe={class:"flex items-center h-[34px]"},ye=ve(()=>p("p",{class:"flex-1 ml-2 font-bold text-base truncate",title:"部门列表"}," 部门列表 ",-1)),we=D({__name:"tree",setup(d){const h=u(),y=u([]),_=u(!0),i=u(""),r=u({}),{proxy:E}=Q(),N={children:"children",label:"name"},w=q(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]),R=(o,e)=>o?e.name.includes(o):!0;function S(o){var n;const e=o.$treeNodeId;r.value[e]=(n=r.value[e])!=null&&n.highlight?Object.assign({id:e},r.value[e],{highlight:!1}):Object.assign({id:e},r.value[e],{highlight:!0}),Object.values(r.value).forEach(f=>{f.id!==e&&(f.highlight=!1)})}function C(o){_.value=o;const e=E.$refs.treeRef.store._getAllNodes();for(let n=0;n<e.length;n++)e[n].expanded=o}function B(){r.value={},i.value="",C(!0)}return Z(i,o=>{h.value.filter(o)}),T(async()=>{const{data:o}=await X();y.value=U(o)}),(o,e)=>{const n=s("IconifyIconOffline"),f=s("el-icon"),H=s("el-input"),b=s("el-button"),k=s("el-dropdown-item"),L=s("el-dropdown-menu"),O=s("el-dropdown"),j=s("el-divider"),A=s("el-tree");return g(),x("div",ge,[p("div",xe,[ye,t(H,{style:{flex:"2"},size:"small",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=c=>i.value=c),placeholder:"请输入部门名称",clearable:""},{suffix:l(()=>[t(f,{class:"el-input__icon"},{default:l(()=>[P(t(n,{icon:a(ee)},null,8,["icon"]),[[F,i.value.length===0]])]),_:1})]),_:1},8,["modelValue"]),t(O,{"hide-on-click":!1},{dropdown:l(()=>[t(L,null,{default:l(()=>[t(k,null,{default:l(()=>[t(b,{class:m(w.value),link:"",type:"primary",icon:a(z)(_.value?a(ue):a(me)),onClick:e[1]||(e[1]=c=>C(!_.value))},{default:l(()=>[v(M(_.value?"折叠全部":"展开全部"),1)]),_:1},8,["class","icon"])]),_:1}),t(k,null,{default:l(()=>[t(b,{class:m(w.value),link:"",type:"primary",icon:a(z)(a(le)),onClick:B},{default:l(()=>[v(" 重置状态 ")]),_:1},8,["class","icon"])]),_:1})]),_:1})]),default:l(()=>[t(n,{class:"w-[28px] cursor-pointer",width:"18px",icon:a(te)},null,8,["icon"])]),_:1})]),t(j),t(A,{ref_key:"treeRef",ref:h,data:y.value,"node-key":"id",size:"small",props:N,"default-expand-all":"","expand-on-click-node":!1,"filter-node-method":R,onNodeClick:S},{default:l(({node:c,data:$})=>{var I,V;return[p("span",{class:m(["pl-1","pr-1","rounded","flex","items-center","select-none",i.value.trim().length>0&&c.label.includes(i.value)&&"text-red-500",(I=r.value[c.id])!=null&&I.highlight?"dark:text-primary":""]),style:G({background:(V=r.value[c.id])!=null&&V.highlight?"var(--el-color-primary-light-7)":"transparent"})},[t(n,{icon:$.type===1?a(oe):$.type===2?a(se):a(Y)},null,8,["icon"]),v(" "+M(c.label),1)],6)]}),_:1},8,["data"])])}}});const ze=W(we,[["__scopeId","data-v-628f3521"]]);export{ze as default};