import{a6 as l,a9 as d,dT as f,av as h,df as n}from"./index-C6_rv3gy.js";function c(){const a=l(),i=d(),s=f(a.params)?a.query:a.params;function o(t,u){Object.keys(t).forEach(e=>{h(t[e])||(t[e]=t[e].toString())}),u==="query"?(n().handleTags("push",{path:"/tabs/query-detail",name:"TabQueryDetail",query:t,meta:{title:{zh:`No.${t.id} - 详情信息`,en:`No.${t.id} - DetailInfo`},dynamicLevel:3}}),i.push({name:"TabQueryDetail",query:t})):u==="params"&&(n().handleTags("push",{path:"/tabs/params-detail/:id",name:"TabParamsDetail",params:t,meta:{title:{zh:`No.${t.id} - 详情信息`,en:`No.${t.id} - DetailInfo`}}}),i.push({name:"TabParamsDetail",params:t}))}return{toDetail:o,initToDetail:t=>{s&&o(s,t)},getParameter:s,router:i}}export{c as u};