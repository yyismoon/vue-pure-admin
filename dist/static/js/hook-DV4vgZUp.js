var W=(l,f,s)=>new Promise((u,m)=>{var p=t=>{try{c(s.next(t))}catch(i){m(i)}},r=t=>{try{c(s.throw(t))}catch(i){m(i)}},c=t=>t.done?u(t.value):Promise.resolve(t.value).then(p,r);c((s=s.apply(l,f)).next())});import{V as F,r as o,o as O,i as _,b as j,aW as x,aY as I,dX as z,ag as V,ae as A,W as N,D as P,A as R}from"./index-ypfYKP8A.js";import{_ as X}from"./form.vue_vue_type_script_setup_true_lang-D_hV4saR.js";import{e as q}from"./system-BHcvi1rD.js";import{u as B}from"./hooks-DkIN3FfF.js";import"./index-BFIWvKEo.js";function E(){const l=F({name:"",status:null}),f=o(),s=o([]),u=o(!0),{tagStyle:m}=B(),p=[{label:"部门名称",prop:"name",width:180,align:"left"},{label:"排序",prop:"sort",minWidth:70},{label:"状态",prop:"status",minWidth:100,cellRenderer:({row:a,props:e})=>_(j("el-tag"),{size:e.size,style:m.value(a.status)},{default:()=>[a.status===1?"启用":"停用"]})},{label:"创建时间",minWidth:200,prop:"createTime",formatter:({createTime:a})=>x(a).format("YYYY-MM-DD HH:mm:ss")},{label:"备注",prop:"remark",minWidth:320},{label:"操作",fixed:"right",width:210,slot:"operation"}];function r(a){}function c(a){a&&(a.resetFields(),t())}function t(){return W(this,null,function*(){u.value=!0;const{data:a}=yield q();let e=a;I(l.name)||(e=e.filter(n=>n.name.includes(l.name))),I(l.status)||(e=e.filter(n=>n.status===l.status)),s.value=z(e),setTimeout(()=>{u.value=!1},500)})}function i(a){if(!a||!a.length)return;const e=[];for(let n=0;n<a.length;n++)a[n].disabled=a[n].status===0,i(a[n].children),e.push(a[n]);return e}function Y(a="新增",e){var n,d,h,g,D,b,v,k;V({title:`${a}部门`,props:{formInline:{higherDeptOptions:i(A(s.value)),parentId:(n=e==null?void 0:e.parentId)!=null?n:0,name:(d=e==null?void 0:e.name)!=null?d:"",principal:(h=e==null?void 0:e.principal)!=null?h:"",phone:(g=e==null?void 0:e.phone)!=null?g:"",email:(D=e==null?void 0:e.email)!=null?D:"",sort:(b=e==null?void 0:e.sort)!=null?b:0,status:(v=e==null?void 0:e.status)!=null?v:1,remark:(k=e==null?void 0:e.remark)!=null?k:""}},width:"40%",draggable:!0,fullscreen:N(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>P(X,{ref:f}),beforeSure:(M,{options:S})=>{const T=f.value.getRef(),$=S.props.formInline;function y(){R(`您${a}了部门名称为${$.name}的这条数据`,{type:"success"}),M(),t()}T.validate(C=>{C&&y()})}})}function H(a){R(`您删除了部门名称为${a.name}的这条数据`,{type:"success"}),t()}return O(()=>{t()}),{form:l,loading:u,columns:p,dataList:s,onSearch:t,resetForm:c,openDialog:Y,handleDelete:H,handleSelectionChange:r}}export{E as useDept};
