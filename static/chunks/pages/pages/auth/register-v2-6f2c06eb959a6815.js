(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9502],{75158:function(e,t,r){"use strict";r.d(t,{Z:function(){return z}});var n=r(63366),i=r(87462),a=r(67294),o=r(86010),s=r(94780),l=r(41796),c=r(37743),d=r(54235),p=r(85893),m=(0,d.Z)((0,p.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,d.Z)((0,p.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=r(36622),f=r(78884),g=r(67074),j=r(1588),Z=r(34867);function v(e){return(0,Z.Z)("MuiCheckbox",e)}let w=(0,j.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),b=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=e=>{let{classes:t,indeterminate:r,color:n}=e,a={root:["root",r&&"indeterminate",`color${(0,u.Z)(n)}`]},o=(0,s.Z)(a,v,t);return(0,i.Z)({},t,o)},k=(0,g.ZP)(c.Z,{shouldForwardProp:e=>(0,g.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t[`color${(0,u.Z)(r.color)}`]]}})(({theme:e,ownerState:t})=>(0,i.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${w.checked}, &.${w.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${w.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),C=(0,p.jsx)(h,{}),_=(0,p.jsx)(m,{}),P=(0,p.jsx)(x,{}),S=a.forwardRef(function(e,t){var r,s;let l=(0,f.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=C,color:d="primary",icon:m=_,indeterminate:h=!1,indeterminateIcon:x=P,inputProps:u,size:g="medium",className:j}=l,Z=(0,n.Z)(l,b),v=h?x:m,w=h?x:c,S=(0,i.Z)({},l,{color:d,indeterminate:h,size:g}),z=y(S);return(0,p.jsx)(k,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":h},u),icon:a.cloneElement(v,{fontSize:null!=(r=v.props.fontSize)?r:g}),checkedIcon:a.cloneElement(w,{fontSize:null!=(s=w.props.fontSize)?s:g}),ownerState:S,ref:t,className:(0,o.Z)(z.root,j)},Z,{classes:z}))});var z=S},69176:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/auth/register-v2",function(){return r(55554)}])},55554:function(e,t,r){"use strict";r.r(t);var n=r(85893),i=r(67294),a=r(41664),o=r.n(a),s=r(54225),l=r(44373),c=r(75158),d=r(67836),p=r(3695),m=r(80562),h=r(61953),x=r(55343),u=r(61225),f=r(39063),g=r(67074),j=r(62097),Z=r(9041),v=r(29630),w=r(22841),b=r(21609),y=r(30152),k=r(88942),C=r(51514),_=r(34361);let P=(0,g.ZP)(h.Z)(e=>{let{theme:t}=e;return{padding:t.spacing(20),paddingRight:"0 !important",[t.breakpoints.down("lg")]:{padding:t.spacing(10)}}}),S=(0,g.ZP)("img")(e=>{let{theme:t}=e;return{maxWidth:"48rem",[t.breakpoints.down("xl")]:{maxWidth:"38rem"},[t.breakpoints.down("lg")]:{maxWidth:"30rem"}}}),z=(0,g.ZP)(h.Z)(e=>{let{theme:t}=e;return{width:"100%",[t.breakpoints.up("md")]:{maxWidth:400},[t.breakpoints.up("lg")]:{maxWidth:450}}}),D=(0,g.ZP)(h.Z)(e=>{let{theme:t}=e;return{width:"100%",[t.breakpoints.down("md")]:{maxWidth:400}}}),W=(0,g.ZP)(v.Z)(e=>{let{theme:t}=e;return{fontWeight:600,letterSpacing:"0.18px",marginBottom:t.spacing(1.5),[t.breakpoints.down("md")]:{marginTop:t.spacing(8)}}}),I=(0,g.ZP)(w.Z)(e=>{let{theme:t}=e;return{marginBottom:t.spacing(4),"& .MuiFormControlLabel-label":{fontSize:"0.875rem",color:t.palette.text.secondary}}}),O=()=>{let[e,t]=(0,i.useState)({password:"",showPassword:!1}),r=(0,j.Z)(),{settings:a}=(0,C.r)(),{skin:g}=a,w=(0,u.Z)(r.breakpoints.down("md")),k=()=>{t({...e,showPassword:!e.showPassword})},O=e=>{e.preventDefault()};return(0,n.jsxs)(h.Z,{className:"content-right",children:[w?null:(0,n.jsxs)(h.Z,{sx:{flex:1,display:"flex",position:"relative",alignItems:"center",justifyContent:"center"},children:[(0,n.jsx)(P,{children:(0,n.jsx)(S,{alt:"register-illustration",src:"/images/pages/".concat("bordered"===g?"auth-v2-register-illustration-bordered":"auth-v2-register-illustration","-").concat(r.palette.mode,".png")})}),(0,n.jsx)(_.Z,{image:"/images/pages/auth-v2-register-mask-".concat(r.palette.mode,".png")})]}),(0,n.jsx)(z,{sx:"bordered"!==g||w?{}:{borderLeft:"1px solid ".concat(r.palette.divider)},children:(0,n.jsx)(h.Z,{sx:{p:7,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"background.paper"},children:(0,n.jsxs)(D,{children:[(0,n.jsxs)(h.Z,{sx:{top:30,left:40,display:"flex",position:"absolute",alignItems:"center",justifyContent:"center"},children:[(0,n.jsxs)("svg",{width:47,fill:"none",height:26,viewBox:"0 0 268 150",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:r.palette.primary.main,transform:"matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)"}),(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fillOpacity:"0.4",fill:"url(#paint0_linear_7821_79167)",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"}),(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:r.palette.primary.main,transform:"matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"}),(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:r.palette.primary.main,transform:"matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"}),(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fillOpacity:"0.4",fill:"url(#paint1_linear_7821_79167)",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"}),(0,n.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:r.palette.primary.main,transform:"matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"}),(0,n.jsxs)("defs",{children:[(0,n.jsxs)("linearGradient",{y1:"0",x1:"25.1443",x2:"25.1443",y2:"143.953",id:"paint0_linear_7821_79167",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{}),(0,n.jsx)("stop",{offset:"1",stopOpacity:"0"})]}),(0,n.jsxs)("linearGradient",{y1:"0",x1:"25.1443",x2:"25.1443",y2:"143.953",id:"paint1_linear_7821_79167",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{}),(0,n.jsx)("stop",{offset:"1",stopOpacity:"0"})]})]})]}),(0,n.jsx)(v.Z,{variant:"h6",sx:{ml:2,lineHeight:1,fontWeight:700,fontSize:"1.5rem !important"},children:y.Z.templateName})]}),(0,n.jsxs)(h.Z,{sx:{mb:6},children:[(0,n.jsx)(W,{variant:"h5",children:"Adventure starts here \uD83D\uDE80"}),(0,n.jsx)(v.Z,{variant:"body2",children:"Make your app management easy and fun!"})]}),(0,n.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:e=>e.preventDefault(),children:[(0,n.jsx)(d.Z,{autoFocus:!0,fullWidth:!0,id:"username",label:"Username",sx:{mb:4}}),(0,n.jsx)(d.Z,{fullWidth:!0,type:"email",label:"Email",sx:{mb:4}}),(0,n.jsxs)(x.Z,{fullWidth:!0,children:[(0,n.jsx)(p.Z,{htmlFor:"auth-register-v2-password",children:"Password"}),(0,n.jsx)(f.Z,{label:"Password",value:e.password,id:"auth-register-v2-password",onChange(r){t({...e,password:r.target.value})},type:e.showPassword?"text":"password",endAdornment:(0,n.jsx)(Z.Z,{position:"end",children:(0,n.jsx)(m.Z,{edge:"end",onClick:k,onMouseDown:O,"aria-label":"toggle password visibility",children:(0,n.jsx)(b.Z,{icon:e.showPassword?"mdi:eye-outline":"mdi:eye-off-outline",fontSize:20})})})})]}),(0,n.jsx)(I,{control:(0,n.jsx)(c.Z,{}),label:(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("span",{children:"I agree to "}),(0,n.jsx)(v.Z,{href:"/",variant:"body2",component:o(),sx:{color:"primary.main",textDecoration:"none"},onClick:e=>e.preventDefault(),children:"privacy policy & terms"})]})}),(0,n.jsx)(s.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:7},children:"Sign up"}),(0,n.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[(0,n.jsx)(v.Z,{sx:{mr:2,color:"text.secondary"},children:"Already have an account?"}),(0,n.jsx)(v.Z,{component:o(),href:"/pages/auth/login-v2",sx:{color:"primary.main",textDecoration:"none"},children:"Sign in instead"})]}),(0,n.jsx)(l.Z,{sx:{"& .MuiDivider-wrapper":{px:4},mt:e=>"".concat(e.spacing(5)," !important"),mb:e=>"".concat(e.spacing(7.5)," !important")},children:"or"}),(0,n.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,n.jsx)(m.Z,{href:"/",component:o(),sx:{color:"#497ce2"},onClick:e=>e.preventDefault(),children:(0,n.jsx)(b.Z,{icon:"mdi:facebook"})}),(0,n.jsx)(m.Z,{href:"/",component:o(),sx:{color:"#1da1f2"},onClick:e=>e.preventDefault(),children:(0,n.jsx)(b.Z,{icon:"mdi:twitter"})}),(0,n.jsx)(m.Z,{href:"/",component:o(),onClick:e=>e.preventDefault(),sx:{color:e=>"light"===e.palette.mode?"#272727":"grey.300"},children:(0,n.jsx)(b.Z,{icon:"mdi:github"})}),(0,n.jsx)(m.Z,{href:"/",component:o(),sx:{color:"#db4437"},onClick:e=>e.preventDefault(),children:(0,n.jsx)(b.Z,{icon:"mdi:google"})})]})]})]})})})]})};O.getLayout=e=>(0,n.jsx)(k.Z,{children:e}),t.default=O},34361:function(e,t,r){"use strict";var n=r(85893),i=r(61225),a=r(67074),o=r(62097);let s=(0,a.ZP)("img")(e=>{let{theme:t}=e;return{zIndex:-1,bottom:"7%",width:"100%",position:"absolute",[t.breakpoints.down("lg")]:{bottom:"17.5%"}}}),l=e=>{let{image:t}=e,r=(0,o.Z)(),a=(0,i.Z)(r.breakpoints.down("md")),l=t||"/images/pages/auth-v2-login-mask-".concat(r.palette.mode,".png");return a?null:(0,n.jsx)(n.Fragment,{children:t&&"string"!=typeof t?t:(0,n.jsx)(s,{alt:"mask",src:l})})};t.Z=l}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=69176)}),_N_E=e.O()}]);