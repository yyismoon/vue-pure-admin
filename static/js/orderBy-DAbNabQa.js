import{dx as M,e8 as a,dI as t,eV as b,dB as w,ee as A,e9 as C,fr as k}from"./index-ihsPCFFy.js";function x(r,n){var i=r.length;for(r.sort(n);i--;)r[i]=r[i].value;return r}function G(r,n){if(r!==n){var i=r!==void 0,c=r===null,g=r===r,u=M(r),f=n!==void 0,B=n===null,d=n===n,p=M(n);if(!B&&!p&&!u&&r>n||u&&f&&d&&!B&&!p||c&&f&&d||!i&&d||!g)return 1;if(!c&&!u&&!p&&r<n||p&&i&&g&&!c&&!u||B&&i&&g||!f&&g||!d)return-1}return 0}function L(r,n,i){for(var c=-1,g=r.criteria,u=n.criteria,f=g.length,B=i.length;++c<f;){var d=G(g[c],u[c]);if(d){if(c>=B)return d;var p=i[c];return d*(p=="desc"?-1:1)}}return r.index-n.index}function O(r,n,i){n.length?n=a(n,function(u){return t(u)?function(f){return b(f,u.length===1?u[0]:u)}:u}):n=[w];var c=-1;n=a(n,A(C));var g=k(r,function(u,f,B){var d=a(n,function(p){return p(u)});return{criteria:d,index:++c,value:u}});return x(g,function(u,f){return L(u,f,i)})}function V(r,n,i,c){return r==null?[]:(t(n)||(n=n==null?[]:[n]),i=c?void 0:i,t(i)||(i=i==null?[]:[i]),O(r,n,i))}export{O as b,G as c,V as o};
