const n=()=>[{text:"今天",value:()=>{const e=new Date;e.setHours(0,0,0,0);const t=new Date;return t.setHours(23,59,59,999),[e,t]}},{text:"昨天",value:()=>{const e=new Date;e.setDate(e.getDate()-1),e.setHours(0,0,0,0);const t=new Date;return t.setDate(t.getDate()-1),t.setHours(23,59,59,999),[e,t]}},{text:"前天",value:()=>{const e=new Date;e.setDate(e.getDate()-2),e.setHours(0,0,0,0);const t=new Date;return t.setDate(t.getDate()-2),t.setHours(23,59,59,999),[e,t]}},{text:"本周",value:()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay()+(e.getDay()===0?-6:1));t.setHours(0,0,0,0);const a=new Date(t.getTime()+6*24*60*60*1e3+23*60*60*1e3+59*60*1e3+59*1e3+999);return[t,a]}},{text:"上周",value:()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay()-7+(e.getDay()===0?-6:1));t.setHours(0,0,0,0);const a=new Date(t.getTime()+6*24*60*60*1e3+23*60*60*1e3+59*60*1e3+59*1e3+999);return[t,a]}},{text:"本月",value:()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1);t.setHours(0,0,0,0);const a=new Date(e.getFullYear(),e.getMonth()+1,0);return a.setHours(23,59,59,999),[t,a]}},{text:"上个月",value:()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth()-1,1);t.setHours(0,0,0,0);const a=new Date(e.getFullYear(),e.getMonth(),0);return a.setHours(23,59,59,999),[t,a]}},{text:"本年",value:()=>{const e=new Date,t=new Date(e.getFullYear(),0,1);t.setHours(0,0,0,0);const a=new Date(e.getFullYear(),11,31);return a.setHours(23,59,59,999),[t,a]}}];export{n as g};