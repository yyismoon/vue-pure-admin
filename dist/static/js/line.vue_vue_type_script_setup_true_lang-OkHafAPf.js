import{d as n,am as l,V as c,r as i,an as d,e as p,k as f}from"./index-C6_rv3gy.js";const u=n({__name:"line",props:{data:{type:Array,default:()=>[]},color:{type:String,default:"#41b6ff"}},setup(o){const e=o,{isDark:a}=l(),s=c(()=>a.value?"dark":"light"),t=i(),{setOptions:r}=d(t,{theme:s,renderer:"svg"});return r({container:".line-card",xAxis:{type:"category",show:!1,data:e.data},grid:{top:"15px",bottom:0,left:0,right:0},yAxis:{show:!1,type:"value"},series:[{data:e.data,type:"line",symbol:"none",smooth:!0,color:e.color,lineStyle:{shadowOffsetY:3,shadowBlur:7,shadowColor:e.color}}]}),(h,m)=>(p(),f("div",{ref_key:"chartRef",ref:t,style:{width:"100%",height:"60px"}},null,512))}});export{u as _};