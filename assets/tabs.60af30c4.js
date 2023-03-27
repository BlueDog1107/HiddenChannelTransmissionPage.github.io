import{av as X,aw as K,ax as be,d as L,m as ae,aF as se,J,A as x,D as A,H as ne,ak as fe,o as H,e as q,n as ve,u as D,T as Ce,S as me,c7 as z,G as le,aH as ue,db as Te,dc as Ne,q as W,aa as pe,ab as xe,f as t,b as j,bE as Fe,an as Be,aD as $e,bp as G,r as oe,bR as Pe,U as De,dd as Ae,O as _e,v as Se,x as ke,bG as ce,I as Oe,de as ie,ac as Re,L as ze,al as Ve,Q as te,W as Le,X as Me,c as Ue,w as _,g as V,t as Z,P as re,i as M}from"./index.501d7dbd.js";import{a as Ie,b as Ke}from"./el-table-column.05321970.js";import"./el-tag.960ca002.js";import{U as he}from"./event.19e4c5e3.js";const Q=Symbol("tabsRootContextKey"),He=X({tabs:{type:K(Array),default:()=>be([])}}),qe={name:"ElTabBar"},We=L({...qe,props:He,setup(e,{expose:c}){const d=e,g="ElTabBar",i=le(),y=ae(Q);y||se(g,"<el-tabs><el-tab-bar /></el-tabs>");const v=J("tabs"),s=x(),b=x(),l=()=>{let o=0,T=0;const n=["top","bottom"].includes(y.props.tabPosition)?"width":"height",f=n==="width"?"x":"y";return d.tabs.every(a=>{var w,h,$,S;const k=(h=(w=i.parent)==null?void 0:w.refs)==null?void 0:h[`tab-${a.paneName}`];if(!k)return!1;if(!a.active)return!0;T=k[`client${z(n)}`];const U=f==="x"?"left":"top";o=k.getBoundingClientRect()[U]-((S=($=k.parentElement)==null?void 0:$.getBoundingClientRect()[U])!=null?S:0);const O=window.getComputedStyle(k);return n==="width"&&(d.tabs.length>1&&(T-=Number.parseFloat(O.paddingLeft)+Number.parseFloat(O.paddingRight)),o+=Number.parseFloat(O.paddingLeft)),!1}),{[n]:`${T}px`,transform:`translate${z(f)}(${o}px)`}},m=()=>b.value=l();return A(()=>d.tabs,async()=>{await ne(),m()},{immediate:!0}),fe(s,()=>m()),c({ref:s,update:m}),(o,T)=>(H(),q("div",{ref_key:"barRef",ref:s,class:ve([D(v).e("active-bar"),D(v).is(D(y).props.tabPosition)]),style:Ce(b.value)},null,6))}});var je=me(We,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Ge=X({panes:{type:K(Array),default:()=>be([])},currentName:{type:[String,Number],default:""},editable:Boolean,onTabClick:{type:K(Function),default:ue},onTabRemove:{type:K(Function),default:ue},type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),de="ElTabNav",Xe=L({name:de,props:Ge,setup(e,{expose:c}){const d=le(),g=ae(Q);g||se(de,"<el-tabs><tab-nav /></el-tabs>");const i=J("tabs"),y=Te(),v=Ne(),s=x(),b=x(),l=x(),m=x(!1),o=x(0),T=x(!1),n=x(!0),f=W(()=>["top","bottom"].includes(g.props.tabPosition)?"width":"height"),a=W(()=>({transform:`translate${f.value==="width"?"X":"Y"}(-${o.value}px)`})),w=()=>{if(!s.value)return;const u=s.value[`offset${z(f.value)}`],p=o.value;if(!p)return;const r=p>u?p-u:0;o.value=r},h=()=>{if(!s.value||!b.value)return;const u=b.value[`offset${z(f.value)}`],p=s.value[`offset${z(f.value)}`],r=o.value;if(u-r<=p)return;const F=u-r>p*2?r+p:u-p;o.value=F},$=async()=>{const u=b.value;if(!m.value||!l.value||!s.value||!u)return;await ne();const p=l.value.querySelector(".is-active");if(!p)return;const r=s.value,F=["top","bottom"].includes(g.props.tabPosition),N=p.getBoundingClientRect(),C=r.getBoundingClientRect(),P=F?u.offsetWidth-C.width:u.offsetHeight-C.height,B=o.value;let E=B;F?(N.left<C.left&&(E=B-(C.left-N.left)),N.right>C.right&&(E=B+N.right-C.right)):(N.top<C.top&&(E=B-(C.top-N.top)),N.bottom>C.bottom&&(E=B+(N.bottom-C.bottom))),E=Math.max(E,0),o.value=Math.min(E,P)},S=()=>{if(!b.value||!s.value)return;const u=b.value[`offset${z(f.value)}`],p=s.value[`offset${z(f.value)}`],r=o.value;if(p<u){const F=o.value;m.value=m.value||{},m.value.prev=F,m.value.next=F+p<u,u-F<p&&(o.value=u-p)}else m.value=!1,r>0&&(o.value=0)},k=u=>{const p=u.code,{up:r,down:F,left:N,right:C}=G;if(![r,F,N,C].includes(p))return;const P=Array.from(u.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),B=P.indexOf(u.target);let E;p===N||p===r?B===0?E=P.length-1:E=B-1:B<P.length-1?E=B+1:E=0,P[E].focus(),P[E].click(),U()},U=()=>{n.value&&(T.value=!0)},O=()=>T.value=!1;return A(y,u=>{u==="hidden"?n.value=!1:u==="visible"&&setTimeout(()=>n.value=!0,50)}),A(v,u=>{u?setTimeout(()=>n.value=!0,50):n.value=!1}),fe(l,S),pe(()=>setTimeout(()=>$(),0)),xe(()=>S()),c({scrollToActiveTab:$,removeFocus:O}),A(()=>e.panes,()=>d.update(),{flush:"post"}),()=>{const u=m.value?[t("span",{class:[i.e("nav-prev"),i.is("disabled",!m.value.prev)],onClick:w},[t(j,null,{default:()=>[t(Fe,null,null)]})]),t("span",{class:[i.e("nav-next"),i.is("disabled",!m.value.next)],onClick:h},[t(j,null,{default:()=>[t(Be,null,null)]})])]:null,p=e.panes.map((r,F)=>{var N,C,P,B;const E=r.props.disabled,I=(C=(N=r.props.name)!=null?N:r.index)!=null?C:`${F}`,Y=!E&&(r.isClosable||e.editable);r.index=`${F}`;const ye=Y?t(j,{class:"is-icon-close",onClick:R=>e.onTabRemove(r,R)},{default:()=>[t($e,null,null)]}):null,ge=((B=(P=r.slots).label)==null?void 0:B.call(P))||r.props.label,we=!E&&r.active?0:-1;return t("div",{ref:`tab-${I}`,class:[i.e("item"),i.is(g.props.tabPosition),i.is("active",r.active),i.is("disabled",E),i.is("closable",Y),i.is("focus",T.value)],id:`tab-${I}`,key:`tab-${I}`,"aria-controls":`pane-${I}`,role:"tab","aria-selected":r.active,tabindex:we,onFocus:()=>U(),onBlur:()=>O(),onClick:R=>{O(),e.onTabClick(r,I,R)},onKeydown:R=>{Y&&(R.code===G.delete||R.code===G.backspace)&&e.onTabRemove(r,R)}},[ge,ye])});return t("div",{ref:l,class:[i.e("nav-wrap"),i.is("scrollable",!!m.value),i.is(g.props.tabPosition)]},[u,t("div",{class:i.e("nav-scroll"),ref:s},[t("div",{class:[i.e("nav"),i.is(g.props.tabPosition),i.is("stretch",e.stretch&&["top","bottom"].includes(g.props.tabPosition))],ref:b,style:a.value,role:"tablist",onKeydown:k},[e.type?null:t(je,{tabs:[...e.panes]},null),p])])])}}}),Je=X({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:K(Function),default:()=>!0},stretch:Boolean}),ee=e=>Se(e)||ke(e),Qe={[he]:e=>ee(e),"tab-click":(e,c)=>c instanceof Event,"tab-change":e=>ee(e),edit:(e,c)=>["remove","add"].includes(c),"tab-remove":e=>ee(e),"tab-add":()=>!0};var Ye=L({name:"ElTabs",props:Je,emits:Qe,setup(e,{emit:c,slots:d,expose:g}){var i,y;const v=J("tabs"),s=x(),b=oe({}),l=x((y=(i=e.modelValue)!=null?i:e.activeName)!=null?y:"0"),m=a=>{l.value=a,c(he,a),c("tab-change",a)},o=async a=>{var w,h,$;if(!(l.value===a||ce(a)))try{await((w=e.beforeLeave)==null?void 0:w.call(e,a,l.value))!==!1&&(m(a),($=(h=s.value)==null?void 0:h.removeFocus)==null||$.call(h))}catch{}},T=(a,w,h)=>{a.props.disabled||(o(w),c("tab-click",a,h))},n=(a,w)=>{a.props.disabled||ce(a.props.name)||(w.stopPropagation(),c("edit",a.props.name,"remove"),c("tab-remove",a.props.name))},f=()=>{c("edit",void 0,"add"),c("tab-add")};return Pe({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},W(()=>!!e.activeName)),A(()=>e.activeName,a=>o(a)),A(()=>e.modelValue,a=>o(a)),A(l,async()=>{var a;await ne(),(a=s.value)==null||a.scrollToActiveTab()}),De(Q,{props:e,currentName:l,registerPane:h=>b[h.uid]=h,unregisterPane:h=>delete b[h]}),g({currentName:l}),()=>{const a=e.editable||e.addable?t("span",{class:v.e("new-tab"),tabindex:"0",onClick:f,onKeydown:$=>{$.code===G.enter&&f()}},[t(j,{class:v.is("icon-plus")},{default:()=>[t(Ae,null,null)]})]):null,w=t("div",{class:[v.e("header"),v.is(e.tabPosition)]},[a,t(Xe,{ref:s,currentName:l.value,editable:e.editable,type:e.type,panes:Object.values(b),stretch:e.stretch,onTabClick:T,onTabRemove:n},null)]),h=t("div",{class:v.e("content")},[_e(d,"default")]);return t("div",{class:[v.b(),v.m(e.tabPosition),{[v.m("card")]:e.type==="card",[v.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[w,h]:[h,w]])}}});const Ze=X({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),et=["id","aria-hidden","aria-labelledby"],tt={name:"ElTabPane"},at=L({...tt,props:Ze,setup(e){const c=e,d="ElTabPane",g=le(),i=Oe(),y=ae(Q);y||se(d,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const v=J("tab-pane"),s=x(),b=W(()=>c.closable||y.props.closable),l=ie(()=>{var f;return y.currentName.value===((f=c.name)!=null?f:s.value)}),m=x(l.value),o=W(()=>{var f;return(f=c.name)!=null?f:s.value}),T=ie(()=>!c.lazy||m.value||l.value);A(l,f=>{f&&(m.value=!0)});const n=oe({uid:g.uid,slots:i,props:c,paneName:o,active:l,index:s,isClosable:b});return pe(()=>{y.registerPane(n)}),Re(()=>{y.unregisterPane(n.uid)}),(f,a)=>D(T)?ze((H(),q("div",{key:0,id:`pane-${D(o)}`,class:ve(D(v).b()),role:"tabpanel","aria-hidden":!D(l),"aria-labelledby":`tab-${D(o)}`},[_e(f.$slots,"default")],10,et)),[[Ve,D(l)]]):te("v-if",!0)}});var Ee=me(at,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const st=Le(Ye,{TabPane:Ee}),nt=Me(Ee);const lt={class:"container"},ot={class:"message-title"},ut=M("\u6807\u4E3A\u5DF2\u8BFB"),ct={class:"handle-row"},it=M("\u5168\u90E8\u6807\u4E3A\u5DF2\u8BFB"),rt={class:"message-title"},dt=M("\u5220\u9664"),bt={class:"handle-row"},ft=M("\u5220\u9664\u5168\u90E8"),vt={class:"message-title"},mt=M("\u8FD8\u539F"),pt={class:"handle-row"},_t=M("\u6E05\u7A7A\u56DE\u6536\u7AD9"),ht=L({name:"tabs"}),Ct=L({...ht,setup(e){const c=x("first"),d=oe({unread:[{date:"2022-03-19 20:00:00",title:"\u3010\u7CFB\u7EDF\u901A\u77E5\u3011xxx\u53D1\u7ED9\u4E86\u4F60\u4E00\u4E2A\u6587\u4EF6"},{date:"2023-03-12 21:12:20",title:"\u3010\u7CFB\u7EDF\u901A\u77E5\u3011xxx\u53D1\u7ED9\u4E86\u4F60\u4E00\u4E2A\u6587\u4EF6"},{date:"2023-03-13 21:11:40",title:"\u3010\u7CFB\u7EDF\u901A\u77E5\u3011xxx\u53D1\u7ED9\u4E86\u4F60\u4E00\u4E2A\u6587\u4EF6"}],read:[{date:"2020-04-19 20:00:00",title:"\u3010\u7CFB\u7EDF\u901A\u77E5\u3011\u672C\u7CFB\u7EDF\u5C06\u4E8E\u4ECA\u665A\u51CC\u66682\u70B9\u52305\u70B9\u8FDB\u884C\u5347\u7EA7\u7EF4\u62A4"}],recycle:[{date:"2018-04-19 20:00:00",title:"\u3010\u7CFB\u7EDF\u901A\u77E5\u3011xxx\u53D1\u7ED9\u4E86\u4F60\u4E00\u4E2A\u6587\u4EF6"}]}),g=v=>{const s=d.unread.splice(v,1);d.read=s.concat(d.read)},i=v=>{const s=d.read.splice(v,1);d.recycle=s.concat(d.recycle)},y=v=>{const s=d.recycle.splice(v,1);d.read=s.concat(d.read)};return(v,s)=>{const b=Ie,l=Ue,m=Ke,o=nt,T=st;return H(),q("div",lt,[t(T,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=n=>c.value=n)},{default:_(()=>[t(o,{label:`\u672A\u8BFB\u6D88\u606F(${d.unread.length})`,name:"first"},{default:_(()=>[t(m,{data:d.unread,"show-header":!1,style:{width:"100%"}},{default:_(()=>[t(b,null,{default:_(n=>[V("span",ot,Z(n.row.title),1)]),_:1}),t(b,{prop:"date",width:"180"}),t(b,{width:"120"},{default:_(n=>[t(l,{size:"small",onClick:f=>g(n.$index)},{default:_(()=>[ut]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),V("div",ct,[t(l,{type:"primary"},{default:_(()=>[it]),_:1})])]),_:1},8,["label"]),t(o,{label:`\u5DF2\u8BFB\u6D88\u606F(${d.read.length})`,name:"second"},{default:_(()=>[c.value==="second"?(H(),q(re,{key:0},[t(m,{data:d.read,"show-header":!1,style:{width:"100%"}},{default:_(()=>[t(b,null,{default:_(n=>[V("span",rt,Z(n.row.title),1)]),_:1}),t(b,{prop:"date",width:"150"}),t(b,{width:"120"},{default:_(n=>[t(l,{type:"danger",onClick:f=>i(n.$index)},{default:_(()=>[dt]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),V("div",bt,[t(l,{type:"danger"},{default:_(()=>[ft]),_:1})])],64)):te("",!0)]),_:1},8,["label"]),t(o,{label:`\u56DE\u6536\u7AD9(${d.recycle.length})`,name:"third"},{default:_(()=>[c.value==="third"?(H(),q(re,{key:0},[t(m,{data:d.recycle,"show-header":!1,style:{width:"100%"}},{default:_(()=>[t(b,null,{default:_(n=>[V("span",vt,Z(n.row.title),1)]),_:1}),t(b,{prop:"date",width:"150"}),t(b,{width:"120"},{default:_(n=>[t(l,{onClick:f=>y(n.$index)},{default:_(()=>[mt]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),V("div",pt,[t(l,{type:"danger"},{default:_(()=>[_t]),_:1})])],64)):te("",!0)]),_:1},8,["label"])]),_:1},8,["modelValue"])])}}});export{Ct as default};
