import{useColumns as u}from"./columns12.js";import{d as _,r as d,c as l,g as y,n as f,j as o,w as C,i as w,u as e}from"./index.js";const v=_({__name:"index",setup(b){const t=d(),{columns:r,dataList:n,print:s,cellStyle:a,rowStyle:c,headerCellStyle:p}=u(t);return(h,k)=>{const i=l("el-button"),m=l("pure-table");return y(),f("div",null,[o(i,{type:"primary",onClick:e(s),class:"mb-[20px] float-right"},{default:C(()=>[w(" 打印 ")]),_:1},8,["onClick"]),o(m,{rowHoverBgColor:"transparent",ref_key:"printRef",ref:t,"row-key":"id",border:"",data:e(n),columns:e(r),"row-style":e(c),"cell-style":e(a),"header-cell-style":e(p)},null,8,["data","columns","row-style","cell-style","header-cell-style"])])}}});export{v as _};