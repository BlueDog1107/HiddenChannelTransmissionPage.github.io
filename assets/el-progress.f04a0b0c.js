import{av as A,aw as m,d as L,J as M,q as r,az as O,aA as V,aB as R,aC as q,aD as J,aE as K,v as C,o as l,e as c,n as i,u as t,g,T as f,O as _,t as D,Q as N,K as T,w as Q,R as U,b as j,S as G,W as H}from"./index.23dd7e77.js";const X=A({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:u=>u>=0&&u<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:m(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:m([String,Array,Function]),default:""},format:{type:m(Function),default:u=>`${u}%`}}),Y=["aria-valuenow"],Z={viewBox:"0 0 100 100"},ee=["d","stroke","stroke-width"],te=["d","stroke","opacity","stroke-linecap","stroke-width"],se={key:0},ae={name:"ElProgress"},re=L({...ae,props:X,setup(u){const s=u,v={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},a=M("progress"),B=r(()=>({width:`${s.percentage}%`,animationDuration:`${s.duration}s`,backgroundColor:P(s.percentage)})),y=r(()=>(s.strokeWidth/s.width*100).toFixed(1)),b=r(()=>["circle","dashboard"].includes(s.type)?Number.parseInt(`${50-Number.parseFloat(y.value)/2}`,10):0),w=r(()=>{const e=b.value,o=s.type==="dashboard";return`
          M 50 50
          m 0 ${o?"":"-"}${e}
          a ${e} ${e} 0 1 1 0 ${o?"-":""}${e*2}
          a ${e} ${e} 0 1 1 0 ${o?"":"-"}${e*2}
          `}),h=r(()=>2*Math.PI*b.value),k=r(()=>s.type==="dashboard"?.75:1),$=r(()=>`${-1*h.value*(1-k.value)/2}px`),I=r(()=>({strokeDasharray:`${h.value*k.value}px, ${h.value}px`,strokeDashoffset:$.value})),x=r(()=>({strokeDasharray:`${h.value*k.value*(s.percentage/100)}px, ${h.value}px`,strokeDashoffset:$.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),E=r(()=>{let e;return s.color?e=P(s.percentage):e=v[s.status]||v.default,e}),W=r(()=>s.status==="warning"?O:s.type==="line"?s.status==="success"?V:R:s.status==="success"?q:J),z=r(()=>s.type==="line"?12+s.strokeWidth*.4:s.width*.111111+2),S=r(()=>s.format(s.percentage));function F(e){const o=100/e.length;return e.map((n,p)=>C(n)?{color:n,percentage:(p+1)*o}:n).sort((n,p)=>n.percentage-p.percentage)}const P=e=>{var o;const{color:d}=s;if(K(d))return d(e);if(C(d))return d;{const n=F(d);for(const p of n)if(p.percentage>e)return p.color;return(o=n[n.length-1])==null?void 0:o.color}};return(e,o)=>(l(),c("div",{class:i([t(a).b(),t(a).m(e.type),t(a).is(e.status),{[t(a).m("without-text")]:!e.showText,[t(a).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[e.type==="line"?(l(),c("div",{key:0,class:i(t(a).b("bar"))},[g("div",{class:i(t(a).be("bar","outer")),style:f({height:`${e.strokeWidth}px`})},[g("div",{class:i([t(a).be("bar","inner"),{[t(a).bem("bar","inner","indeterminate")]:e.indeterminate}]),style:f(t(B))},[(e.showText||e.$slots.default)&&e.textInside?(l(),c("div",{key:0,class:i(t(a).be("bar","innerText"))},[_(e.$slots,"default",{percentage:e.percentage},()=>[g("span",null,D(t(S)),1)])],2)):N("v-if",!0)],6)],6)],2)):(l(),c("div",{key:1,class:i(t(a).b("circle")),style:f({height:`${e.width}px`,width:`${e.width}px`})},[(l(),c("svg",Z,[g("path",{class:i(t(a).be("circle","track")),d:t(w),stroke:`var(${t(a).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":t(y),fill:"none",style:f(t(I))},null,14,ee),g("path",{class:i(t(a).be("circle","path")),d:t(w),stroke:t(E),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":t(y),style:f(t(x))},null,14,te)]))],6)),(e.showText||e.$slots.default)&&!e.textInside?(l(),c("div",{key:2,class:i(t(a).e("text")),style:f({fontSize:`${t(z)}px`})},[_(e.$slots,"default",{percentage:e.percentage},()=>[e.status?(l(),T(t(j),{key:1},{default:Q(()=>[(l(),T(U(t(W))))]),_:1})):(l(),c("span",se,D(t(S)),1))])],6)):N("v-if",!0)],10,Y))}});var oe=G(re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const le=H(oe);export{le as E};
