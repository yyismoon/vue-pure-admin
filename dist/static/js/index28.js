import{d as N,r as s,a as T,c as l,e as $,n as m,h as j,j as n,w as r,u as p,l as v,v as f,F as y,k as U,g as u,i as E,y as F,f as O,dy as q,q as R,x as G}from"./index.js";import H from"./Card.js";import{a as J}from"./list3.js";import{_ as K}from"./DialogForm.vue_vue_type_script_setup_true_lang.js";import{u as Q}from"./hooks.js";import{d as W}from"./search.js";import{d as X}from"./add-circle-line.js";import"./more-2-fill.js";const Y={class:"main"},Z={class:"w-full flex justify-between mb-4"},ee=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,ce=N({name:"ListCard",__name:"index",setup(te){const h={name:"",status:"",description:"",type:"",mark:""},e=s({current:1,pageSize:12,total:0}),d=s([]),g=s(!0),w=async()=>{try{const{data:t}=await J();d.value=t.list,e.value={...e.value,total:t.list.length}}catch{}finally{setTimeout(()=>{g.value=!1},500)}};T(()=>{w()});const c=s(!1),_=s({...h}),i=s(""),C=t=>{e.value.pageSize=t,e.value.current=1},x=t=>{e.value.current=t},z=t=>{q.confirm(t?`确认删除后${t.name}的所有产品信息将被清空, 且无法恢复`:"","提示",{type:"warning"}).then(()=>{R("删除成功",{type:"success"})}).catch(()=>{})},L=t=>{c.value=!0,G(()=>{_.value={...t,status:t!=null&&t.isSetup?"1":"0"}})};return(t,o)=>{const b=l("el-button"),k=l("IconifyIconOffline"),S=l("el-icon"),I=l("el-input"),V=l("el-empty"),D=l("el-col"),M=l("el-row"),P=l("el-pagination"),A=$("loading");return u(),m("div",Y,[j("div",Z,[n(b,{icon:p(Q)(p(X)),onClick:o[0]||(o[0]=a=>c.value=!0)},{default:r(()=>[E(" 新建产品 ")]),_:1},8,["icon"]),n(I,{style:{width:"300px"},modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=a=>i.value=a),placeholder:"请输入产品名称",clearable:""},{suffix:r(()=>[n(S,{class:"el-input__icon"},{default:r(()=>[v(n(k,{icon:p(W)},null,8,["icon"]),[[f,i.value.length===0]])]),_:1})]),_:1},8,["modelValue"])]),v((u(),m("div",{"element-loading-svg":ee,"element-loading-svg-view-box":"-10, -10, 50, 50"},[v(n(V,{description:"暂无数据"},null,512),[[f,d.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(a=>a.name.toLowerCase().includes(i.value.toLowerCase())).length===0]]),e.value.total>0?(u(),m(y,{key:0},[n(M,{gutter:16},{default:r(()=>[(u(!0),m(y,null,F(d.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(a=>a.name.toLowerCase().includes(i.value.toLowerCase())),(a,B)=>(u(),O(D,{key:B,xs:24,sm:12,md:8,lg:6,xl:4},{default:r(()=>[n(H,{product:a,onDeleteItem:z,onManageProduct:L},null,8,["product"])]),_:2},1024))),128))]),_:1}),n(P,{class:"float-right",currentPage:e.value.current,"onUpdate:currentPage":o[2]||(o[2]=a=>e.value.current=a),"page-size":e.value.pageSize,total:e.value.total,"page-sizes":[12,24,36],background:!0,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:C,onCurrentChange:x},null,8,["currentPage","page-size","total"])],64)):U("",!0)])),[[A,g.value]]),n(K,{visible:c.value,"onUpdate:visible":o[3]||(o[3]=a=>c.value=a),data:_.value},null,8,["visible","data"])])}}});export{ce as default};