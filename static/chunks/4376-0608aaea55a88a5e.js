(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4376],{75158:function(e,r,t){"use strict";t.d(r,{Z:function(){return M}});var a=t(63366),o=t(87462),n=t(67294),i=t(86010),l=t(94780),s=t(41796),c=t(37743),d=t(54235),u=t(85893),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),f=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),b=t(36622),v=t(78884),h=t(67074),y=t(1588),Z=t(34867);function g(e){return(0,Z.Z)("MuiCheckbox",e)}let x=(0,y.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],C=e=>{let{classes:r,indeterminate:t,color:a}=e,n={root:["root",t&&"indeterminate",`color${(0,b.Z)(a)}`]},i=(0,l.Z)(n,g,r);return(0,o.Z)({},r,i)},k=(0,h.ZP)(c.Z,{shouldForwardProp:e=>(0,h.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,t.indeterminate&&r.indeterminate,"default"!==t.color&&r[`color${(0,b.Z)(t.color)}`]]}})(({theme:e,ownerState:r})=>(0,o.Z)({color:(e.vars||e).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===r.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===r.color?e.palette.action.active:e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${x.checked}, &.${x.indeterminate}`]:{color:(e.vars||e).palette[r.color].main},[`&.${x.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),I=(0,u.jsx)(f,{}),$=(0,u.jsx)(m,{}),P=(0,u.jsx)(p,{}),S=n.forwardRef(function(e,r){var t,l;let s=(0,v.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=I,color:d="primary",icon:m=$,indeterminate:f=!1,indeterminateIcon:p=P,inputProps:b,size:h="medium",className:y}=s,Z=(0,a.Z)(s,w),g=f?p:m,x=f?p:c,S=(0,o.Z)({},s,{color:d,indeterminate:f,size:h}),M=C(S);return(0,u.jsx)(k,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":f},b),icon:n.cloneElement(g,{fontSize:null!=(t=g.props.fontSize)?t:h}),checkedIcon:n.cloneElement(x,{fontSize:null!=(l=x.props.fontSize)?l:h}),ownerState:S,ref:r,className:(0,i.Z)(M.root,y)},Z,{classes:M}))});var M=S},86070:function(e,r,t){"use strict";t.d(r,{Z:function(){return T}});var a=t(63366),o=t(87462),n=t(67294),i=t(86010),l=t(94780),s=t(70917),c=t(41796),d=t(36622),u=t(62097),m=t(67074),f=t(78884),p=t(1588),b=t(34867);function v(e){return(0,b.Z)("MuiLinearProgress",e)}(0,p.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var h=t(85893);let y=["className","color","value","valueBuffer","variant"],Z=e=>e,g,x,w,C,k,I,$=(0,s.F4)(g||(g=Z`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),P=(0,s.F4)(x||(x=Z`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),S=(0,s.F4)(w||(w=Z`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),M=e=>{let{classes:r,variant:t,color:a}=e,o={root:["root",`color${(0,d.Z)(a)}`,t],dashed:["dashed",`dashedColor${(0,d.Z)(a)}`],bar1:["bar",`barColor${(0,d.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,d.Z)(a)}`,"buffer"===t&&`color${(0,d.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,l.Z)(o,v,r)},R=(e,r)=>"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,c.$n)(e.palette[r].main,.62):(0,c._j)(e.palette[r].main,.5),L=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,r[`color${(0,d.Z)(t.color)}`],r[t.variant]]}})(({ownerState:e,theme:r})=>(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:R(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})),j=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(e,r){let{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,d.Z)(t.color)}`]]}})(({ownerState:e,theme:r})=>{let t=R(r,e.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,s.iv)(C||(C=Z`
    animation: ${0} 3s infinite linear;
  `),S)),N=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(e,r){let{ownerState:t}=e;return[r.bar,r[`barColor${(0,d.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,s.iv)(k||(k=Z`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),$)),B=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(e,r){let{ownerState:t}=e;return[r.bar,r[`barColor${(0,d.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:R(r,e.color),transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,s.iv)(I||(I=Z`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),P)),z=n.forwardRef(function(e,r){let t=(0,f.Z)({props:e,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:s,valueBuffer:c,variant:d="indeterminate"}=t,m=(0,a.Z)(t,y),p=(0,o.Z)({},t,{color:l,variant:d}),b=M(p),v=(0,u.Z)(),Z={},g={bar1:{},bar2:{}};if(("determinate"===d||"buffer"===d)&&void 0!==s){Z["aria-valuenow"]=Math.round(s),Z["aria-valuemin"]=0,Z["aria-valuemax"]=100;let x=s-100;"rtl"===v.direction&&(x=-x),g.bar1.transform=`translateX(${x}%)`}if("buffer"===d&&void 0!==c){let w=(c||0)-100;"rtl"===v.direction&&(w=-w),g.bar2.transform=`translateX(${w}%)`}return(0,h.jsxs)(L,(0,o.Z)({className:(0,i.Z)(b.root,n),ownerState:p,role:"progressbar"},Z,{ref:r},m,{children:["buffer"===d?(0,h.jsx)(j,{className:b.dashed,ownerState:p}):null,(0,h.jsx)(N,{className:b.bar1,ownerState:p,style:g.bar1}),"determinate"===d?null:(0,h.jsx)(B,{className:b.bar2,ownerState:p,style:g.bar2})]}))});var T=z},19594:function(e,r,t){"use strict";t.d(r,{Z:function(){return Z}});var a=t(63366),o=t(87462),n=t(67294),i=t(86010),l=t(94780),s=t(57742),c=t(67074),d=t(78884),u=t(1588),m=t(34867);function f(e){return(0,m.Z)("MuiListItemAvatar",e)}(0,u.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var p=t(85893);let b=["className"],v=e=>{let{alignItems:r,classes:t}=e;return(0,l.Z)({root:["root","flex-start"===r&&"alignItemsFlexStart"]},f,t)},h=(0,c.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,"flex-start"===t.alignItems&&r.alignItemsFlexStart]}})(({ownerState:e})=>(0,o.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8})),y=n.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiListItemAvatar"}),{className:l}=t,c=(0,a.Z)(t,b),u=n.useContext(s.Z),m=(0,o.Z)({},t,{alignItems:u.alignItems}),f=v(m);return(0,p.jsx)(h,(0,o.Z)({className:(0,i.Z)(f.root,l),ownerState:m,ref:r},c))});var Z=y},61702:function(e,r,t){"use strict";var a=t(63366),o=t(87462),n=t(67294),i=t(86010),l=t(94780),s=t(29630),c=t(57742),d=t(78884),u=t(67074),m=t(97484),f=t(85893);let p=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],b=e=>{let{classes:r,inset:t,primary:a,secondary:o,dense:n}=e;return(0,l.Z)({root:["root",t&&"inset",n&&"dense",a&&o&&"multiline"],primary:["primary"],secondary:["secondary"]},m.L,r)},v=(0,u.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[{[`& .${m.Z.primary}`]:r.primary},{[`& .${m.Z.secondary}`]:r.secondary},r.root,t.inset&&r.inset,t.primary&&t.secondary&&r.multiline,t.dense&&r.dense]}})(({ownerState:e})=>(0,o.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),h=n.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiListItemText"}),{children:l,className:u,disableTypography:m=!1,inset:h=!1,primary:y,primaryTypographyProps:Z,secondary:g,secondaryTypographyProps:x}=t,w=(0,a.Z)(t,p),{dense:C}=n.useContext(c.Z),k=null!=y?y:l,I=g,$=(0,o.Z)({},t,{disableTypography:m,inset:h,primary:!!k,secondary:!!I,dense:C}),P=b($);return null==k||k.type===s.Z||m||(k=(0,f.jsx)(s.Z,(0,o.Z)({variant:C?"body2":"body1",className:P.primary,component:null!=Z&&Z.variant?void 0:"span",display:"block"},Z,{children:k}))),null==I||I.type===s.Z||m||(I=(0,f.jsx)(s.Z,(0,o.Z)({variant:"body2",className:P.secondary,color:"text.secondary",display:"block"},x,{children:I}))),(0,f.jsxs)(v,(0,o.Z)({className:(0,i.Z)(P.root,u),ownerState:$,ref:r},w,{children:[k,I]}))});r.Z=h},66485:function(e){function r(){return new DOMException("The request is not allowed","NotAllowedError")}async function t(e){if(!navigator.clipboard)throw r();return navigator.clipboard.writeText(e)}async function a(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let a=window.getSelection(),o=window.document.createRange();a.removeAllRanges(),o.selectNode(t),a.addRange(o);let n=!1;try{n=window.document.execCommand("copy")}finally{a.removeAllRanges(),window.document.body.removeChild(t)}if(!n)throw r()}async function o(e){try{await t(e)}catch(n){try{await a(e)}catch(o){throw o||n||r()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ e.exports=o}}]);