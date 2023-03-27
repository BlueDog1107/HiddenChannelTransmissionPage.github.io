import{aF as W,aG as ce,av as V,aw as k,ax as H,aH as R,d as D,a6 as pe,J as A,A as X,o as _,K as U,w as g,e as S,a8 as fe,n as F,u as s,aI as oe,O as w,Q as $,g as P,f,aJ as me,b as T,t as G,aK as B,T as ve,aA as ye,aC as ge,aD as be,aL as he,aM as _e,P as ke,aN as Ee,S as q,z as Fe,m as $e,aO as z,aP as Ce,aQ as Re,D as Q,F as we,I as Se,aR as Ue,q as Y,aq as Pe,U as Le,aS as Te,aT as Z,aU as x,W as Be,r as De,a as Oe,c as je,i as J,p as Ae,j as Ve,_ as qe}from"./index.501d7dbd.js";import{E as Ie,a as Ne,b as Me}from"./el-form-item.b0b49c4f.js";import{E as Ke}from"./el-progress.3c1bf452.js";import"./el-tag.960ca002.js";import{E as He,a as ze}from"./el-select.b678e17b.js";import{E as We}from"./index.1356f617.js";import"./event.19e4c5e3.js";import"./scroll.dd911b49.js";const le=Symbol("uploadContextKey"),Xe="ElUpload";class Je extends Error{constructor(u,o,d,n){super(u),this.name="UploadAjaxError",this.status=o,this.method=d,this.url=n}}function ee(a,u,o){let d;return o.response?d=`${o.response.error||o.response}`:o.responseText?d=`${o.responseText}`:d=`fail to ${u.method} ${a} ${o.status}`,new Je(d,o.status,u.method,a)}function Ge(a){const u=a.responseText||a.response;if(!u)return u;try{return JSON.parse(u)}catch{return u}}const Qe=a=>{typeof XMLHttpRequest>"u"&&W(Xe,"XMLHttpRequest is undefined");const u=new XMLHttpRequest,o=a.action;u.upload&&u.upload.addEventListener("progress",i=>{const m=i;m.percent=i.total>0?i.loaded/i.total*100:0,a.onProgress(m)});const d=new FormData;if(a.data)for(const[i,m]of Object.entries(a.data))Array.isArray(m)?d.append(i,...m):d.append(i,m);d.append(a.filename,a.file,a.file.name),u.addEventListener("error",()=>{a.onError(ee(o,a,u))}),u.addEventListener("load",()=>{if(u.status<200||u.status>=300)return a.onError(ee(o,a,u));a.onSuccess(Ge(u))}),u.open(a.method,o,!0),a.withCredentials&&"withCredentials"in u&&(u.withCredentials=!0);const n=a.headers||{};if(n instanceof Headers)n.forEach((i,m)=>u.setRequestHeader(m,i));else for(const[i,m]of Object.entries(n))ce(m)||u.setRequestHeader(i,String(m));return u.send(d),u},ne=["text","picture","picture-card"];let Ye=1;const re=()=>Date.now()+Ye++,ue=V({action:{type:String,default:"#"},headers:{type:k(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>H({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:k(Array),default:()=>H([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:ne,default:"text"},httpRequest:{type:k(Function),default:Qe},disabled:Boolean,limit:Number}),Ze=V({...ue,beforeUpload:{type:k(Function),default:R},beforeRemove:{type:k(Function)},onRemove:{type:k(Function),default:R},onChange:{type:k(Function),default:R},onPreview:{type:k(Function),default:R},onSuccess:{type:k(Function),default:R},onProgress:{type:k(Function),default:R},onError:{type:k(Function),default:R},onExceed:{type:k(Function),default:R}}),xe=V({files:{type:k(Array),default:()=>H([])},disabled:{type:Boolean,default:!1},handlePreview:{type:k(Function),default:R},listType:{type:String,values:ne,default:"text"}}),et={remove:a=>!!a},tt=["onKeydown"],st=["src"],at=["onClick"],ot=["onClick"],lt=["onClick"],nt={name:"ElUploadList"},rt=D({...nt,props:xe,emits:et,setup(a,{emit:u}){const o=a,{t:d}=pe(),n=A("upload"),i=A("icon"),m=A("list"),b=X(!1),v=r=>{o.handlePreview(r)},C=r=>{u("remove",r)};return(r,E)=>(_(),U(Ee,{tag:"ul",class:F([s(n).b("list"),s(n).bm("list",r.listType),s(n).is("disabled",r.disabled)]),name:s(m).b()},{default:g(()=>[(_(!0),S(ke,null,fe(r.files,t=>(_(),S("li",{key:t.uid||t.name,class:F([s(n).be("list","item"),s(n).is(t.status),{focusing:b.value}]),tabindex:"0",onKeydown:oe(e=>!r.disabled&&C(t),["delete"]),onFocus:E[0]||(E[0]=e=>b.value=!0),onBlur:E[1]||(E[1]=e=>b.value=!1),onClick:E[2]||(E[2]=e=>b.value=!1)},[w(r.$slots,"default",{file:t},()=>[r.listType==="picture"||t.status!=="uploading"&&r.listType==="picture-card"?(_(),S("img",{key:0,class:F(s(n).be("list","item-thumbnail")),src:t.url,alt:""},null,10,st)):$("v-if",!0),r.listType!=="picture"&&(t.status==="uploading"||r.listType!=="picture-card")?(_(),S("div",{key:1,class:F(s(n).be("list","item-info"))},[P("a",{class:F(s(n).be("list","item-name")),onClick:B(e=>v(t),["prevent"])},[f(s(T),{class:F(s(i).m("document"))},{default:g(()=>[f(s(me))]),_:1},8,["class"]),P("span",{class:F(s(n).be("list","item-file-name"))},G(t.name),3)],10,at),t.status==="uploading"?(_(),U(s(Ke),{key:0,type:r.listType==="picture-card"?"circle":"line","stroke-width":r.listType==="picture-card"?6:2,percentage:Number(t.percentage),style:ve(r.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):$("v-if",!0)],2)):$("v-if",!0),P("label",{class:F(s(n).be("list","item-status-label"))},[r.listType==="text"?(_(),U(s(T),{key:0,class:F([s(i).m("upload-success"),s(i).m("circle-check")])},{default:g(()=>[f(s(ye))]),_:1},8,["class"])):["picture-card","picture"].includes(r.listType)?(_(),U(s(T),{key:1,class:F([s(i).m("upload-success"),s(i).m("check")])},{default:g(()=>[f(s(ge))]),_:1},8,["class"])):$("v-if",!0)],2),r.disabled?$("v-if",!0):(_(),U(s(T),{key:2,class:F(s(i).m("close")),onClick:e=>C(t)},{default:g(()=>[f(s(be))]),_:2},1032,["class","onClick"])),$(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),$(" This is a bug which needs to be fixed "),$(" TODO: Fix the incorrect navigation interaction "),r.disabled?$("v-if",!0):(_(),S("i",{key:3,class:F(s(i).m("close-tip"))},G(s(d)("el.upload.deleteTip")),3)),r.listType==="picture-card"?(_(),S("span",{key:4,class:F(s(n).be("list","item-actions"))},[P("span",{class:F(s(n).be("list","item-preview")),onClick:e=>r.handlePreview(t)},[f(s(T),{class:F(s(i).m("zoom-in"))},{default:g(()=>[f(s(he))]),_:1},8,["class"])],10,ot),r.disabled?$("v-if",!0):(_(),S("span",{key:0,class:F(s(n).be("list","item-delete")),onClick:e=>C(t)},[f(s(T),{class:F(s(i).m("delete"))},{default:g(()=>[f(s(_e))]),_:1},8,["class"])],10,lt))],2)):$("v-if",!0)])],42,tt))),128)),w(r.$slots,"append")]),_:3},8,["class","name"]))}});var te=q(rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const ut=V({disabled:{type:Boolean,default:!1}}),it={file:a=>Fe(a)},dt=["onDrop","onDragover"],ct={name:"ElUploadDrag"},pt=D({...ct,props:ut,emits:it,setup(a,{emit:u}){const o=a,d="ElUploadDrag",n=$e(le);n||W(d,"usage: <el-upload><el-upload-dragger /></el-upload>");const i=A("upload"),m=X(!1),b=C=>{if(o.disabled)return;m.value=!1;const r=Array.from(C.dataTransfer.files),E=n.accept.value;if(!E){u("file",r);return}const t=r.filter(e=>{const{type:l,name:p}=e,h=p.includes(".")?`.${p.split(".").pop()}`:"",c=l.replace(/\/.*$/,"");return E.split(",").map(y=>y.trim()).filter(y=>y).some(y=>y.startsWith(".")?h===y:/\/\*$/.test(y)?c===y.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(y)?l===y:!1)});u("file",t)},v=()=>{o.disabled||(m.value=!0)};return(C,r)=>(_(),S("div",{class:F([s(i).b("dragger"),s(i).is("dragover",m.value)]),onDrop:B(b,["prevent"]),onDragover:B(v,["prevent"]),onDragleave:r[0]||(r[0]=B(E=>m.value=!1,["prevent"]))},[w(C.$slots,"default")],42,dt))}});var ft=q(pt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const mt=V({...ue,beforeUpload:{type:k(Function),default:R},onRemove:{type:k(Function),default:R},onStart:{type:k(Function),default:R},onSuccess:{type:k(Function),default:R},onProgress:{type:k(Function),default:R},onError:{type:k(Function),default:R},onExceed:{type:k(Function),default:R}}),vt=["onKeydown"],yt=["name","multiple","accept"],gt={name:"ElUploadContent",inheritAttrs:!1},bt=D({...gt,props:mt,setup(a,{expose:u}){const o=a,d=A("upload"),n=z({}),i=z(),m=e=>{if(e.length===0)return;const{autoUpload:l,limit:p,fileList:h,multiple:c,onStart:y,onExceed:L}=o;if(p&&h.length+e.length>p){L(e,h);return}c||(e=e.slice(0,1));for(const I of e){const O=I;O.uid=re(),y(O),l&&b(O)}},b=async e=>{if(i.value.value="",!o.beforeUpload)return v(e);let l;try{l=await o.beforeUpload(e)}catch{l=!1}if(l===!1){o.onRemove(e);return}let p=e;l instanceof Blob&&(l instanceof File?p=l:p=new File([l],e.name,{type:e.type})),v(Object.assign(p,{uid:e.uid}))},v=e=>{const{headers:l,data:p,method:h,withCredentials:c,name:y,action:L,onProgress:I,onSuccess:O,onError:ie,httpRequest:de}=o,{uid:N}=e,M={headers:l||{},withCredentials:c,file:e,data:p,method:h,filename:y,action:L,onProgress:j=>{I(j,e)},onSuccess:j=>{O(j,e),delete n.value[N]},onError:j=>{ie(j,e),delete n.value[N]}},K=de(M);n.value[N]=K,K instanceof Promise&&K.then(M.onSuccess,M.onError)},C=e=>{const l=e.target.files;!l||m(Array.from(l))},r=()=>{o.disabled||(i.value.value="",i.value.click())},E=()=>{r()};return u({abort:e=>{Ce(n.value).filter(e?([p])=>String(e.uid)===p:()=>!0).forEach(([p,h])=>{h instanceof XMLHttpRequest&&h.abort(),delete n.value[p]})},upload:b}),(e,l)=>(_(),S("div",{class:F([s(d).b(),s(d).m(e.listType),s(d).is("drag",e.drag)]),tabindex:"0",onClick:r,onKeydown:oe(B(E,["self"]),["enter","space"])},[e.drag?(_(),U(ft,{key:0,disabled:e.disabled,onFile:m},{default:g(()=>[w(e.$slots,"default")]),_:3},8,["disabled"])):w(e.$slots,"default",{key:1}),P("input",{ref_key:"inputRef",ref:i,class:F(s(d).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:C,onClick:l[0]||(l[0]=B(()=>{},["stop"]))},null,42,yt)],42,vt))}});var se=q(bt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const ae="ElUpload",ht=a=>{var u;(u=a.url)!=null&&u.startsWith("blob:")&&URL.revokeObjectURL(a.url)},_t=(a,u)=>{const o=Re(a,"fileList",void 0,{passive:!0}),d=t=>o.value.find(e=>e.uid===t.uid);function n(t){var e;(e=u.value)==null||e.abort(t)}function i(t=["ready","uploading","success","fail"]){o.value=o.value.filter(e=>!t.includes(e.status))}const m=(t,e)=>{const l=d(e);!l||(console.error(t),l.status="fail",o.value.splice(o.value.indexOf(l),1),a.onError(t,l,o.value),a.onChange(l,o.value))},b=(t,e)=>{const l=d(e);!l||(a.onProgress(t,l,o.value),l.status="uploading",l.percentage=Math.round(t.percent))},v=(t,e)=>{const l=d(e);!l||(l.status="success",l.response=t,a.onSuccess(t,l,o.value),a.onChange(l,o.value))},C=t=>{const e={name:t.name,percentage:0,status:"ready",size:t.size,raw:t,uid:t.uid};if(a.listType==="picture-card"||a.listType==="picture")try{e.url=URL.createObjectURL(t)}catch(l){we(ae,l.message),a.onError(l,e,o.value)}o.value=[...o.value,e],a.onChange(e,o.value)},r=async t=>{const e=t instanceof File?d(t):t;e||W(ae,"file to be removed not found");const l=p=>{n(p);const h=o.value;h.splice(h.indexOf(p),1),a.onRemove(p,h),ht(p)};a.beforeRemove?await a.beforeRemove(e,o.value)!==!1&&l(e):l(e)};function E(){o.value.filter(({status:t})=>t==="ready").forEach(({raw:t})=>{var e;return t&&((e=u.value)==null?void 0:e.upload(t))})}return Q(()=>a.listType,t=>{t!=="picture-card"&&t!=="picture"||(o.value=o.value.map(e=>{const{raw:l,url:p}=e;if(!p&&l)try{e.url=URL.createObjectURL(l)}catch(h){a.onError(h,e,o.value)}return e}))}),Q(o,t=>{for(const e of t)e.uid||(e.uid=re()),e.status||(e.status="success")},{immediate:!0,deep:!0}),{uploadFiles:o,abort:n,clearFiles:i,handleError:m,handleProgress:b,handleStart:C,handleSuccess:v,handleRemove:r,submit:E}},kt={name:"ElUpload"},Et=D({...kt,props:Ze,setup(a,{expose:u}){const o=a,d=Se(),n=Ue(),i=z(),{abort:m,submit:b,clearFiles:v,uploadFiles:C,handleStart:r,handleError:E,handleRemove:t,handleSuccess:e,handleProgress:l}=_t(o,i),p=Y(()=>o.listType==="picture-card"),h=Y(()=>({...o,onStart:r,onProgress:l,onSuccess:e,onError:E,onRemove:t}));return Pe(()=>{C.value.forEach(({url:c})=>{c!=null&&c.startsWith("blob:")&&URL.revokeObjectURL(c)})}),Le(le,{accept:Te(o,"accept")}),u({abort:m,submit:b,clearFiles:v,handleStart:r,handleRemove:t}),(c,y)=>(_(),S("div",null,[s(p)&&c.showFileList?(_(),U(te,{key:0,disabled:s(n),"list-type":c.listType,files:s(C),"handle-preview":c.onPreview,onRemove:s(t)},Z({append:g(()=>[c.listType==="picture-card"?(_(),U(se,x({key:0,ref_key:"uploadRef",ref:i},s(h)),{default:g(()=>[s(d).trigger?w(c.$slots,"trigger",{key:0}):$("v-if",!0),!s(d).trigger&&s(d).default?w(c.$slots,"default",{key:1}):$("v-if",!0)]),_:3},16)):$("v-if",!0)]),_:2},[c.$slots.file?{name:"default",fn:g(({file:L})=>[w(c.$slots,"file",{file:L})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):$("v-if",!0),c.listType!=="picture-card"?(_(),U(se,x({key:1,ref_key:"uploadRef",ref:i},s(h)),{default:g(()=>[s(d).trigger?w(c.$slots,"trigger",{key:0}):$("v-if",!0),!s(d).trigger&&s(d).default?w(c.$slots,"default",{key:1}):$("v-if",!0)]),_:3},16)):$("v-if",!0),c.$slots.trigger?w(c.$slots,"default",{key:2}):$("v-if",!0),w(c.$slots,"tip"),!s(p)&&c.showFileList?(_(),U(te,{key:3,disabled:s(n),"list-type":c.listType,files:s(C),"handle-preview":c.onPreview,onRemove:s(t)},Z({_:2},[c.$slots.file?{name:"default",fn:g(({file:L})=>[w(c.$slots,"file",{file:L})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):$("v-if",!0)]))}});var Ft=q(Et,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const $t=Be(Ft);const Ct=a=>(Ae("data-v-95c53dd1"),a=a(),Ve(),a),Rt={class:"container"},wt={class:"form-box"},St=Ct(()=>P("div",{class:"el-upload__text"},[J(" \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),P("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),Ut=J("\u8868\u5355\u63D0\u4EA4"),Pt=J("\u91CD\u7F6E\u8868\u5355"),Lt=D({name:"baseform"}),Tt=D({...Lt,setup(a){const u=b=>{console.log(b)},o={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u4EF6\u5907\u6CE8",trigger:"blur"}],ip:[{required:!0,message:"\u8BF7\u8F93\u5165IPv4\u7684\u683C\u5F0F",trigger:"blur"}]},d=X(),n=De({name:"",ip:"",region:"",desc:""}),i=b=>{!b||b.validate(v=>{if(v)console.log(n),We.success("\u63D0\u4EA4\u6210\u529F\uFF01");else return!1})},m=b=>{!b||b.resetFields()};return(b,v)=>{const C=Ie,r=Ne,E=He,t=ze,e=Oe("upload-filled"),l=T,p=$t,h=je,c=Me;return _(),S("div",Rt,[P("div",wt,[f(c,{ref_key:"formRef",ref:d,rules:o,model:n,"label-width":"80px"},{default:g(()=>[f(r,{label:"\u6587\u4EF6\u540D\u79F0",prop:"name"},{default:g(()=>[f(C,{modelValue:n.name,"onUpdate:modelValue":v[0]||(v[0]=y=>n.name=y)},null,8,["modelValue"])]),_:1}),f(r,{label:"\u63A5\u6536\u5730\u5740",prop:"ip"},{default:g(()=>[f(C,{modelValue:n.ip,"onUpdate:modelValue":v[1]||(v[1]=y=>n.ip=y)},null,8,["modelValue"])]),_:1}),f(r,{label:"\u6587\u4EF6\u7C7B\u578B",prop:"region"},{default:g(()=>[f(t,{modelValue:n.region,"onUpdate:modelValue":v[2]||(v[2]=y=>n.region=y),placeholder:"\u8BF7\u9009\u62E9"},{default:g(()=>[f(E,{key:"txt",label:"txt",value:"txt"}),f(E,{key:"jpg",label:"jpg",value:"jpg"}),f(E,{key:"mp4",label:"mp4",value:"mp4"})]),_:1},8,["modelValue"])]),_:1}),f(r,{label:"\u5907\u6CE8",prop:"desc"},{default:g(()=>[f(C,{type:"textarea",rows:"5",modelValue:n.desc,"onUpdate:modelValue":v[3]||(v[3]=y=>n.desc=y)},null,8,["modelValue"])]),_:1}),f(r,{label:"\u4E0A\u4F20\u6587\u4EF6",prop:"desc"},{default:g(()=>[f(p,{class:"upload-demo",drag:"",action:"http://jsonplaceholder.typicode.com/api/posts/",multiple:"","on-change":u},{default:g(()=>[f(l,{class:"el-icon--upload"},{default:g(()=>[f(e)]),_:1}),St]),_:1})]),_:1}),f(r,null,{default:g(()=>[f(h,{type:"primary",onClick:v[4]||(v[4]=y=>i(d.value))},{default:g(()=>[Ut]),_:1}),f(h,{onClick:v[5]||(v[5]=y=>m(d.value))},{default:g(()=>[Pt]),_:1})]),_:1})]),_:1},8,["model"])])])}}});const Nt=qe(Tt,[["__scopeId","data-v-95c53dd1"]]);export{Nt as default};