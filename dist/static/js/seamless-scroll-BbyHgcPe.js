import{d as ae,r as y,bg as I,K as a,bh as Me,bi as Ae,k as $,N as S,E as se,M as N,C as le,f as w,u as e,n as Oe,bj as Fe,e as F,S as $e,V as He,c as Pe,w as k,b as Y,i as O,l as je,B as qe,F as Be,p as De,q as Ee,_ as Re}from"./index-DO6axeOr.js";const We=()=>{window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(l){return window.clearTimeout(l)},window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(l){return window.setTimeout(l,1e3/60)}}()},ze=(l,p)=>{if(l===p)return!0;if(l.length!==p.length)return!1;for(let u=0;u<l.length;++u)if(l[u]!==p[u])return!1;return!0};function re(){Array.isArray||(Array.isArray=function(v){return Object.prototype.toString.call(v)==="[object Array]"});let l,p,u,d,m,f,r=1,t=arguments[0]||{},s=!1,h=arguments.length;if(typeof t=="boolean"&&(s=t,t=arguments[1]||{},r++),typeof t!="object"&&typeof t!="function"&&(t={}),r===h)return t;for(;r<h;r++)if((p=arguments[r])!=null)for(l in p)u=t[l],d=p[l],m=Array.isArray(d),s&&d&&(typeof d=="object"||m)?(m?(m=!1,f=u&&Array.isArray(u)?u:[]):f=u&&typeof u=="object"?u:{},t[l]=re(s,f,d)):d!==void 0&&(t[l]=d);return t}const Le=Object.freeze(Object.defineProperty({__proto__:null,animationFrame:We,arrayEqual:ze,copyObj:re},Symbol.toStringTag,{value:"Module"})),Ie=["innerHTML"],Ne=ae({name:"ReSeamlessScroll",__name:"index",props:{data:{type:Array},classOption:{type:Object}},emits:["scrollEnd"],setup(l,{expose:p,emit:u}){const{animationFrame:d,copyObj:m}=Le;d();const f=l,r=u,t=y(0),s=y(0),h=y(0),v=y(0),T=y(0),x=y(0),H=y(0),P=y("");let C=null,V=null,j=null,U=null,X=null,q=!1,B="ease-in";f.classOption.key===void 0&&(f.classOption.key=0);const K=I(`wrap${f.classOption.key}`,null),G=I(`slotList${f.classOption.key}`,null),J=I(`realBox${f.classOption.key}`,null),Q=a(()=>e(t)<0),Z=a(()=>Math.abs(e(t))<e(x)-e(T)),ce=a(()=>({step:1,limitMoveNum:5,hoverStop:!0,direction:"top",openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1})),o=a(()=>m({},e(ce),f.classOption)),ue=a(()=>e(Q)?"":e(o).switchDisabledClass),fe=a(()=>e(Z)?"":e(o).switchDisabledClass),de=a(()=>({position:"absolute",margin:`${e(v)/2}px 0 0 -${e(o).switchOffset}px`,transform:"translate(-100%,-50%)"})),pe=a(()=>({position:"absolute",margin:`${e(v)/2}px 0 0 ${e(T)+e(o).switchOffset}px`,transform:"translateY(-50%)"})),D=a(()=>e(o).direction!=="bottom"&&e(o).direction!=="top"),ee=a(()=>e(D)?{float:"left",overflow:"hidden"}:{overflow:"hidden"}),me=a(()=>({transform:`translate(${e(t)}px,${e(s)}px)`,transition:`all ${B} ${e(h)}ms`,overflow:"hidden"})),E=a(()=>e(o).navigation),R=a(()=>e(E)?!1:e(o).autoPlay),te=a(()=>f.data.length>=e(o).limitMoveNum),ne=a(()=>e(o).hoverStop&&e(R)&&e(te)),W=a(()=>e(o).openTouch),oe=a(()=>e(o).isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1),z=a(()=>e(o).singleWidth*e(oe)),L=a(()=>e(o).singleHeight*e(oe)),b=a(()=>{let n;const i=e(o).step;if(e(D)?n=e(z):n=e(L),n>0&&n%i>0)throw"如果设置了单步滚动，step需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确";return i});function he(){t.value=0,s.value=0,M(),ie()}function ve(){if(e(Q)){if(Math.abs(e(t))<e(o).switchSingleStep){t.value=0;return}t.value+=e(o).switchSingleStep}}function we(){if(e(Z)){if(e(x)-e(T)+e(t)<e(o).switchSingleStep){t.value=e(T)-e(x);return}t.value-=e(o).switchSingleStep}}function M(){cancelAnimationFrame(V||"")}function ye(n){if(!e(W))return;let i;const c=n.targetTouches[0],{waitTime:g,singleHeight:A,singleWidth:xe}=e(o);j={x:c.pageX,y:c.pageY},U=e(s),X=e(t),A&&xe?(i&&clearTimeout(i),i=setTimeout(()=>{M()},g+20)):M()}function ge(n){if(!e(W)||n.targetTouches.length>1||n.scale&&n.scale!==1)return;const i=n.targetTouches[0],{direction:c}=e(o),g={x:i.pageX-j.x,y:i.pageY-j.y};n.preventDefault();const A=Math.abs(g.x)<Math.abs(g.y)?1:0;A===1&&c==="bottom"||A===1&&c==="top"?s.value=U+g.y:(A===0&&c==="left"||A===0&&c==="right")&&(t.value=X+g.x)}function Se(){if(!e(W))return;let n;const i=e(o).direction;if(h.value=50,i==="top")e(s)>0&&(s.value=0);else if(i==="bottom"){const c=e(H)/2*-1;e(s)<c&&(s.value=c)}else if(i==="left")e(t)>0&&(t.value=0);else if(i==="right"){const c=e(x)*-1;e(t)<c&&(t.value=c)}n&&clearTimeout(n),n=setTimeout(()=>{h.value=0,_()},e(h))}function be(){e(ne)&&Te()}function _e(){e(ne)&&ke()}function _(){q||(V=requestAnimationFrame(function(){const n=e(H)/2,i=e(x)/2,{direction:c,waitTime:g}=e(o);c==="top"?(Math.abs(e(s))>=n&&(r("scrollEnd"),s.value=0),s.value-=b.value):c==="bottom"?(e(s)>=0&&(r("scrollEnd"),s.value=n*-1),s.value+=b.value):c==="left"?(Math.abs(e(t))>=i&&(r("scrollEnd"),t.value=0),t.value-=b.value):c==="right"&&(e(t)>=0&&(r("scrollEnd"),t.value=i*-1),t.value+=b.value),C&&clearTimeout(C),e(L)?Math.abs(e(s))%e(L)<e(b)?C=setTimeout(()=>{_()},g):_():e(z)&&Math.abs(e(t))%e(z)<e(b)?C=setTimeout(()=>{_()},g):_()}))}function ie(){Oe(()=>{const{switchDelay:n}=e(o);if(P.value="",e(D)){v.value=e(K).offsetHeight,T.value=e(K).offsetWidth;let i=e(G).offsetWidth;e(R)&&(i=i*2+1),e(J).style.width=i+"px",x.value=i}if(e(R))B="ease-in",h.value=0;else{B="linear",h.value=n;return}e(te)?(P.value=e(G).innerHTML,setTimeout(()=>{var i;H.value=(i=e(J))==null?void 0:i.offsetHeight,_()},0)):(M(),s.value=t.value=0)})}function ke(){q=!1,_()}function Te(){q=!0,C&&clearTimeout(C),M()}function Ce(n){e(o).direction==="left"||e(o).direction==="right"||Fe(()=>{n.deltaY>0?s.value-=b.value:s.value+=b.value},50)()}return Me(()=>{ie()}),Ae(()=>{M(),clearTimeout(C)}),p({reset:he}),(n,i)=>(F(),$("div",{ref:"wrap"+f.classOption.key},[E.value?(F(),$("div",{key:0,style:S(de.value),class:se(ue.value),onClick:ve},[N(n.$slots,"left-switch")],6)):le("",!0),E.value?(F(),$("div",{key:1,style:S(pe.value),class:se(fe.value),onClick:we},[N(n.$slots,"right-switch")],6)):le("",!0),w("div",{ref:"realBox"+f.classOption.key,style:S(me.value),onMouseenter:be,onMouseleave:_e,onTouchstartPassive:ye,onTouchmovePassive:ge,onTouchend:Se,onMousewheelPassive:Ce},[w("div",{ref:"slotList"+f.classOption.key,style:S(ee.value)},[N(n.$slots,"default")],4),w("div",{style:S(ee.value),innerHTML:P.value},null,12,Ie)],36)],512))}}),Ye=$e(Ne),Ve=l=>(De("data-v-e0b04bdf"),l=l(),Ee(),l),Ue={class:"card-header"},Xe=Ve(()=>w("span",{class:"font-medium"},"无缝滚动",-1)),Ke={class:"item"},Ge=["textContent"],Je=ae({name:"SeamlessScroll",__name:"seamless-scroll",setup(l){const p=y(),u=y([{title:"无缝滚动第一行无缝滚动第一行！！！！！！！！！！"},{title:"无缝滚动第二行无缝滚动第二行！！！！！！！！！！"},{title:"无缝滚动第三行无缝滚动第三行！！！！！！！！！！"},{title:"无缝滚动第四行无缝滚动第四行！！！！！！！！！！"},{title:"无缝滚动第五行无缝滚动第五行！！！！！！！！！！"},{title:"无缝滚动第六行无缝滚动第六行！！！！！！！！！！"},{title:"无缝滚动第七行无缝滚动第七行！！！！！！！！！！"},{title:"无缝滚动第八行无缝滚动第八行！！！！！！！！！！"},{title:"无缝滚动第九行无缝滚动第九行！！！！！！！！！！"}]),d=He({direction:"top"});function m(f){e(p).reset(),e(d).direction=f}return(f,r)=>{const t=Y("el-button"),s=Y("el-card"),h=Y("el-space");return F(),Pe(h,{wrap:""},{default:k(()=>[O(s,{class:"box-card",shadow:"never"},{header:k(()=>[w("div",Ue,[Xe,O(t,{class:"button",link:"",type:"primary",onClick:r[0]||(r[0]=v=>m("top"))},{default:k(()=>[w("span",{style:S({color:d.direction==="top"?"red":""})}," 向上滚动 ",4)]),_:1}),O(t,{class:"button",link:"",type:"primary",onClick:r[1]||(r[1]=v=>m("bottom"))},{default:k(()=>[w("span",{style:S({color:d.direction==="bottom"?"red":""})}," 向下滚动 ",4)]),_:1}),O(t,{class:"button",link:"",type:"primary",onClick:r[2]||(r[2]=v=>m("left"))},{default:k(()=>[w("span",{style:S({color:d.direction==="left"?"red":""})}," 向左滚动 ",4)]),_:1}),O(t,{class:"button",link:"",type:"primary",onClick:r[3]||(r[3]=v=>m("right"))},{default:k(()=>[w("span",{style:S({color:d.direction==="right"?"red":""})}," 向右滚动 ",4)]),_:1})])]),default:k(()=>[O(e(Ye),{ref_key:"scroll",ref:p,data:u.value,"class-option":d,class:"warp"},{default:k(()=>[w("ul",Ke,[(F(!0),$(Be,null,je(u.value,(v,T)=>(F(),$("li",{key:T},[w("span",{class:"title",textContent:qe(v.title)},null,8,Ge)]))),128))])]),_:1},8,["data","class-option"])]),_:1})]),_:1})}}}),Ze=Re(Je,[["__scopeId","data-v-e0b04bdf"]]);export{Ze as default};
