import{r as n,K as i,ac as m,E as p,az as u,a$ as h,q as f}from"./index.js";import{a as d}from"./data2.js";function v(){const a=n(i(d,!0).splice(0,4)),t=[{label:"ID",prop:"id"},{label:"姓名",prop:"name"},{label:"日期",prop:"date"},{label:"echarts图表",slot:"echart"}],{isDark:s}=m(),r=p(()=>s.value?"dark":"light");return a.value.forEach((b,e)=>{const{setOptions:o}=u(h(`PieChartRef${e}`),{theme:r});o({tooltip:{trigger:"item",confine:!0},series:[{name:"Github信息",type:"pie",data:[{value:1067,name:"watchers"},{value:4037,name:"star"},{value:859,name:"forks"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{name:"click",callback:({data:{name:l,value:c}})=>{f(`您点击了第 ${e+1} 行，图表标题为${l}，图表数据为：${c}`,{type:"success"})}})}),{columns:t,dataList:a}}export{v as useColumns};