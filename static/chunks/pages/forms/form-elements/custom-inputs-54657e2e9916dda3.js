(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{75158:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var o=n(63366),i=n(87462),s=n(67294),r=n(86010),a=n(94780),c=n(41796),l=n(37743),d=n(54235),m=n(85893),u=(0,d.Z)((0,m.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,d.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,d.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=n(36622),g=n(78884),f=n(67074),j=n(1588),v=n(34867);function y(e){return(0,v.Z)("MuiCheckbox",e)}let b=(0,j.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),C=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],S=e=>{let{classes:t,indeterminate:n,color:o}=e,s={root:["root",n&&"indeterminate",`color${(0,h.Z)(o)}`]},r=(0,a.Z)(s,y,t);return(0,i.Z)({},t,r)},Z=(0,f.ZP)(l.Z,{shouldForwardProp:e=>(0,f.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t[`color${(0,h.Z)(n.color)}`]]}})(({theme:e,ownerState:t})=>(0,i.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${b.checked}, &.${b.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),k=(0,m.jsx)(p,{}),w=(0,m.jsx)(u,{}),I=(0,m.jsx)(x,{}),P=s.forwardRef(function(e,t){var n,a;let c=(0,g.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:l=k,color:d="primary",icon:u=w,indeterminate:p=!1,indeterminateIcon:x=I,inputProps:h,size:f="medium",className:j}=c,v=(0,o.Z)(c,C),y=p?x:u,b=p?x:l,P=(0,i.Z)({},c,{color:d,indeterminate:p,size:f}),R=S(P);return(0,m.jsx)(Z,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":p},h),icon:s.cloneElement(y,{fontSize:null!=(n=y.props.fontSize)?n:f}),checkedIcon:s.cloneElement(b,{fontSize:null!=(a=b.props.fontSize)?a:f}),ownerState:P,ref:t,className:(0,r.Z)(R.root,j)},v,{classes:R}))});var R=P},66485:function(e){function t(){return new DOMException("The request is not allowed","NotAllowedError")}async function n(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}async function o(e){let n=document.createElement("span");n.textContent=e,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);let o=window.getSelection(),i=window.document.createRange();o.removeAllRanges(),i.selectNode(n),o.addRange(i);let s=!1;try{s=window.document.execCommand("copy")}finally{o.removeAllRanges(),window.document.body.removeChild(n)}if(!s)throw t()}async function i(e){try{await n(e)}catch(s){try{await o(e)}catch(i){throw i||s||t()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ e.exports=i},53172:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-elements/custom-inputs",function(){return n(63483)}])},39913:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var o=n(85893),i=n(67294),s=n(61953),r=n(49837),a=n(72389),c=n(44373),l=n(93481),d=n(80562),m=n(59742),u=n(91359),p=n(87054),x=n(61225),h=n(85390),g=n(21609),f=n(15660),j=n.n(f),v=n(86501),y=n(66485),b=n.n(y);let C=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName),S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,i.useRef)(null),n=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&C(t.current)&&t.current.select()},o=()=>{e.onError&&e.onError();let n=!1!==e.selectOnError;n&&C(t.current)&&t.current.select()},s=e=>{b()(e).then(n).catch(o)},r=(0,i.useCallback)(e=>{"string"==typeof e?s(e):t.current&&s(t.current.value)},[]);return{copy:r,target:t}},Z=e=>{let{id:t,sx:n,code:f,title:y,children:b,className:C}=e,[Z,k]=(0,i.useState)(!1),[w,I]=(0,i.useState)(null!==f.tsx?"tsx":"jsx"),P=S(),R=(0,x.Z)(e=>e.breakpoints.down("md"));(0,i.useEffect)(()=>{j().highlightAll()},[Z,w]);let z=()=>null!==f.tsx&&"tsx"===w?f.tsx.props.children.props.children:null!==f.jsx&&"jsx"===w?f.jsx.props.children.props.children:"",G=()=>{P.copy(z()),v.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,o.jsxs)(r.Z,{className:C,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...n},id:t||"card-snippet--".concat(y.toLowerCase().replace(/ /g,"-")),children:[(0,o.jsx)(m.Z,{title:y,...R?{}:{action:(0,o.jsx)(d.Z,{onClick:()=>k(!Z),children:(0,o.jsx)(g.Z,{icon:"mdi:code-tags",fontSize:20})})}}),(0,o.jsx)(u.Z,{children:b}),R?null:(0,o.jsxs)(l.Z,{in:Z,children:[(0,o.jsx)(c.Z,{sx:{my:"0 !important"}}),(0,o.jsxs)(u.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,o.jsx)(s.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,o.jsxs)(h.Z,{exclusive:!0,size:"small",color:"primary",value:w,onChange:(e,t)=>null!==t?I(t):null,children:[null!==f.tsx?(0,o.jsx)(p.Z,{value:"tsx",children:(0,o.jsx)(g.Z,{icon:"mdi:language-typescript",fontSize:20})}):null,null!==f.jsx?(0,o.jsx)(p.Z,{value:"jsx",children:(0,o.jsx)(g.Z,{icon:"mdi:language-javascript",fontSize:20})}):null]})}),(0,o.jsx)(a.Z,{title:"Copy the source",placement:"top",children:(0,o.jsx)(d.Z,{onClick:G,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,o.jsx)(g.Z,{icon:"mdi:content-copy",fontSize:20})})}),(0,o.jsx)("div",{children:null!==f[w]?f[w]:null})]})]})]})};var k=Z},60783:function(e,t,n){"use strict";var o=n(85893),i=n(61953),s=n(79072),r=n(15497),a=n(29630);let c=e=>{let{name:t,data:n,selected:c,gridProps:l,handleChange:d,color:m="primary"}=e,{meta:u,title:p,value:x,content:h}=n;return n?(0,o.jsx)(s.ZP,{item:!0,...l,children:(0,o.jsxs)(i.Z,{onClick:()=>d(x),sx:{p:4,height:"100%",display:"flex",borderRadius:1,cursor:"pointer",position:"relative",alignItems:"flex-start",border:e=>"1px solid ".concat(e.palette.divider),...c===x?{borderColor:"".concat(m,".main")}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}}},children:[(0,o.jsx)(r.Z,{name:t,size:"small",color:m,value:x,onChange:d,checked:c===x,sx:{mb:-2,mt:-1.75,ml:-1.75}}),u&&p&&h?(0,o.jsxs)(i.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[(0,o.jsxs)(i.Z,{sx:{mb:1,width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:["string"==typeof p?(0,o.jsx)(a.Z,{sx:{mr:2,fontWeight:500},children:p}):p,"string"==typeof u?(0,o.jsx)(a.Z,{sx:{color:"text.secondary"},children:u}):u]}),"string"==typeof h?(0,o.jsx)(a.Z,{variant:"body2",children:h}):h]}):u&&p&&!h?(0,o.jsxs)(i.Z,{sx:{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:["string"==typeof p?(0,o.jsx)(a.Z,{sx:{mr:2,fontWeight:500},children:p}):p,"string"==typeof u?(0,o.jsx)(a.Z,{sx:{color:"text.secondary"},children:u}):u]}):!u&&p&&h?(0,o.jsxs)(i.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:["string"==typeof p?(0,o.jsx)(a.Z,{sx:{mb:1,fontWeight:500},children:p}):p,"string"==typeof h?(0,o.jsx)(a.Z,{variant:"body2",children:h}):h]}):u||p||!h?u||!p||h?null:"string"==typeof p?(0,o.jsx)(a.Z,{sx:{fontWeight:500},children:p}):p:"string"==typeof h?(0,o.jsx)(a.Z,{variant:"body2",children:h}):h]})}):null};t.Z=c},80945:function(e,t,n){"use strict";var o=n(85893),i=n(61953),s=n(79072),r=n(15497),a=n(29630),c=n(21609);let l=e=>{let{data:t,icon:n,name:l,selected:d,gridProps:m,iconProps:u,handleChange:p,color:x="primary"}=e,{title:h,value:g,content:f}=t;return t?(0,o.jsx)(s.ZP,{item:!0,...m,children:(0,o.jsxs)(i.Z,{onClick:()=>p(g),sx:{p:4,height:"100%",display:"flex",borderRadius:1,cursor:"pointer",position:"relative",alignItems:"center",flexDirection:"column",border:e=>"1px solid ".concat(e.palette.divider),...d===g?{borderColor:"".concat(x,".main")}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}}},children:[n?(0,o.jsx)(c.Z,{icon:n,...u}):null,h?"string"==typeof h?(0,o.jsx)(a.Z,{sx:{fontWeight:500,...f?{mb:1}:{my:"auto"}},children:h}):h:null,f?"string"==typeof f?(0,o.jsx)(a.Z,{variant:"body2",sx:{my:"auto",textAlign:"center"},children:f}):f:null,(0,o.jsx)(r.Z,{name:l,size:"small",color:x,value:g,onChange:p,checked:d===g,sx:{mb:-2,...!n&&!h&&!f&&{mt:-2}}})]})}):null};t.Z=l},63483:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var o=n(85893),i=n(79072),s=n(39913),r=n(67294),a=n(61953),c=n(15497);let l=e=>{let{name:t,data:n,selected:s,gridProps:r,handleChange:l,color:d="primary"}=e,{alt:m,img:u,value:p}=n;return n?(0,o.jsx)(i.ZP,{item:!0,...r,children:(0,o.jsxs)(a.Z,{onClick:()=>l(p),sx:{height:"100%",display:"flex",borderRadius:1,cursor:"pointer",overflow:"hidden",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",border:e=>"2px solid ".concat(e.palette.divider),...s===p?{borderColor:"".concat(d,".main")}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}},"& img":{width:"100%",height:"100%",objectFit:"cover"}},children:["string"==typeof u?(0,o.jsx)("img",{src:u,alt:null!=m?m:"radio-image-".concat(p)}):u,(0,o.jsx)(c.Z,{name:t,size:"small",value:p,onChange:l,checked:s===p,sx:{zIndex:-1,position:"absolute",visibility:"hidden"}})]})}):null},d=[{value:"clock",isSelected:!0,img:"/images/pages/background-3.jpg"},{value:"donuts",img:"/images/pages/background-8.jpg"},{value:"flowers",img:"/images/pages/background-5.jpg"}],m=()=>{let e=d.filter(e=>e.isSelected)[d.filter(e=>e.isSelected).length-1].value,[t,n]=(0,r.useState)(e),s=e=>{"string"==typeof e?n(e):n(e.target.value)};return(0,o.jsx)(i.ZP,{container:!0,spacing:4,children:d.map((e,n)=>(0,o.jsx)(l,{data:d[n],selected:t,name:"custom-radios-img",handleChange:s,gridProps:{sm:4,xs:12}},n))})};var u=n(60783);let p=[{meta:"Free",title:"Basic",value:"basic",isSelected:!0,content:"Get 1 project with 1 team member."},{meta:"$5.00",title:"Premium",value:"premium",content:"Get 5 projects with 5 team members."}],x=()=>{let e=p.filter(e=>e.isSelected)[p.filter(e=>e.isSelected).length-1].value,[t,n]=(0,r.useState)(e),s=e=>{"string"==typeof e?n(e):n(e.target.value)};return(0,o.jsx)(i.ZP,{container:!0,spacing:4,children:p.map((e,n)=>(0,o.jsx)(u.Z,{data:p[n],selected:t,name:"custom-radios-basic",handleChange:s,gridProps:{sm:6,xs:12}},n))})};var h=n(80945);let g=[{value:"starter",title:"Starter",isSelected:!0,content:"A simple start for everyone."},{value:"standard",title:"Standard",content:"For small to medium businesses."},{value:"enterprise",title:"Enterprise",content:"Solution for big organizations."}],f=[{icon:"mdi:rocket-launch-outline",iconProps:{fontSize:"2rem",style:{marginBottom:8}}},{icon:"mdi:account-outline",iconProps:{fontSize:"2rem",style:{marginBottom:8}}},{icon:"mdi:crown-outline",iconProps:{fontSize:"2rem",style:{marginBottom:8}}}],j=()=>{let e=g.filter(e=>e.isSelected)[g.filter(e=>e.isSelected).length-1].value,[t,n]=(0,r.useState)(e),s=e=>{"string"==typeof e?n(e):n(e.target.value)};return(0,o.jsx)(i.ZP,{container:!0,spacing:4,children:g.map((e,n)=>(0,o.jsx)(h.Z,{data:g[n],selected:t,icon:f[n].icon,name:"custom-radios-icons",handleChange:s,gridProps:{sm:4,xs:12},iconProps:f[n].iconProps},n))})};var v=n(75158);let y=e=>{let{data:t,name:n,selected:s,gridProps:r,handleChange:c,color:l="primary"}=e,{alt:d,img:m,value:u}=t;return t?(0,o.jsx)(i.ZP,{item:!0,...r,children:(0,o.jsxs)(a.Z,{onClick:()=>c(u),sx:{height:"100%",display:"flex",borderRadius:1,cursor:"pointer",overflow:"hidden",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",border:e=>"2px solid ".concat(e.palette.divider),"& img":{width:"100%",height:"100%",objectFit:"cover"},...s.includes(u)?{borderColor:"".concat(l,".main")}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")},"&:not(:hover)":{"& .MuiCheckbox-root":{display:"none"}}}},children:["string"==typeof m?(0,o.jsx)("img",{src:m,alt:null!=d?d:"checkbox-image-".concat(u)}):m,(0,o.jsx)(v.Z,{size:"small",color:l,name:"".concat(n,"-").concat(u),checked:s.includes(u),onChange:()=>c(u),sx:{top:0,right:0,position:"absolute"}})]})}):null},b=[{value:"clock",isSelected:!0,img:"/images/pages/background-3.jpg"},{value:"donuts",img:"/images/pages/background-8.jpg"},{value:"flowers",img:"/images/pages/background-5.jpg"}],C=()=>{let e=b.filter(e=>e.isSelected).map(e=>e.value),[t,n]=(0,r.useState)(e),s=e=>{if(t.includes(e)){let o=t.filter(t=>t!==e);n(o)}else n([...t,e])};return(0,o.jsx)(i.ZP,{container:!0,spacing:4,children:b.map((e,n)=>(0,o.jsx)(y,{data:b[n],selected:t,name:"custom-checkbox-img",handleChange:s,gridProps:{sm:4,xs:12}},n))})};var S=n(29630);let Z=e=>{let{data:t,name:n,selected:s,gridProps:r,handleChange:c,color:l="primary"}=e,{meta:d,title:m,value:u,content:p}=t;return t?(0,o.jsx)(i.ZP,{item:!0,...r,children:(0,o.jsxs)(a.Z,{onClick:()=>c(u),sx:{p:4,height:"100%",display:"flex",borderRadius:1,cursor:"pointer",position:"relative",alignItems:"flex-start",border:e=>"1px solid ".concat(e.palette.divider),...s.includes(u)?{borderColor:"".concat(l,".main")}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}}},children:[(0,o.jsx)(v.Z,{size:"small",color:l,name:"".concat(n,"-").concat(u),checked:s.includes(u),onChange:()=>c(u),sx:{mb:-2,mt:-1.75,ml:-1.75}}),d&&m&&p?(0,o.jsxs)(a.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[(0,o.jsxs)(a.Z,{sx:{mb:1,width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:["string"==typeof m?(0,o.jsx)(S.Z,{sx:{mr:2,fontWeight:500},children:m}):m,"string"==typeof d?(0,o.jsx)(S.Z,{sx:{color:"text.secondary"},children:d}):d]}),"string"==typeof p?(0,o.jsx)(S.Z,{variant:"body2",children:p}):p]}):d&&m&&!p?(0,o.jsxs)(a.Z,{sx:{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:["string"==typeof m?(0,o.jsx)(S.Z,{sx:{mr:2,fontWeight:500},children:m}):m,"string"==typeof d?(0,o.jsx)(S.Z,{sx:{color:"text.secondary"},children:d}):d]}):!d&&m&&p?(0,o.jsxs)(a.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:["string"==typeof m?(0,o.jsx)(S.Z,{sx:{mb:1,fontWeight:500},children:m}):m,"string"==typeof p?(0,o.jsx)(S.Z,{variant:"body2",children:p}):p]}):d||m||!p?d||!m||p?null:"string"==typeof m?(0,o.jsx)(S.Z,{sx:{fontWeight:500},children:m}):m:"string"==typeof p?(0,o.jsx)(S.Z,{variant:"body2",children:p}):p]})}):null},k=[{meta:"20%",isSelected:!0,value:"discount",title:"Discount",content:"Wow! Get 20% off on your next purchase!"},{meta:"Free",value:"updates",title:"Updates",content:"Get Updates regarding related products."}],w=()=>{let e=k.filter(e=>e.isSelected).map(e=>e.value),[t,n]=(0,r.useState)(e),s=e=>{if(t.includes(e)){let o=t.filter(t=>t!==e);n(o)}else n([...t,e])};return(0,o.jsx)(i.ZP,{container:!0,spacing:4,children:k.map((e,n)=>(0,o.jsx)(Z,{data:k[n],selected:t,handleChange:s,name:"custom-checkbox-basic",gridProps:{sm:6,xs:12}},n))})};var I=n(21609);let P=e=>{let{data:t,icon:n,name:s,selected:r,gridProps:c,iconProps:l,handleChange:d,color:m="primary"}=e,{title:u,value:p,content:x}=t;return t?(0,o.jsx)(i.ZP,{item:!0,...c,children:(0,o.jsxs)(a.Z,{onClick:()=>d(p),sx:{p:4,height:"100%",display:"flex",borderRadius:1,cursor:"pointer",position:"relative",alignItems:"center",flexDirection:"column",border:e=>"1px solid ".concat(e.palette.divider),...r.includes(p)?{borderColor:"".concat(m,".main")}:{"&:hover":{borderColor:e=>"rgba(".concat(e.palette.customColors.main,", 0.25)")}}},children:[n?(0,o.jsx)(I.Z,{icon:n,...l}):null,u?"string"==typeof u?(0,o.jsx)(S.Z,{sx:{fontWeight:500,...x?{mb:1}:{my:"auto"}},children:u}):u:null,x?"string"==typeof x?(0,o.jsx)(S.Z,{variant:"body2",sx:{my:"auto",textAlign:"center"},children:x}):x:null,(0,o.jsx)(v.Z,{size:"small",color:m,name:"".concat(s,"-").concat(p),checked:r.includes(p),onChange:()=>d(p),sx:{mb:-2,...!n&&!u&&!x&&{mt:-2}}})]})}):null},R=[{value:"backup",title:"Backup",isSelected:!0,content:"Backup every file from your project."},{value:"encrypt",title:"Encrypt",content:"Translate your data to encrypted text."},{value:"site-lock",title:"Site Lock",content:"Security tool to protect your website."}],z=[{icon:"mdi:server",iconProps:{fontSize:"2rem",style:{marginBottom:8}}},{icon:"mdi:shield-outline",iconProps:{fontSize:"2rem",style:{marginBottom:8}}},{icon:"mdi:lock-outline",iconProps:{fontSize:"2rem",style:{marginBottom:8}}}],G=()=>{let e=R.filter(e=>e.isSelected).map(e=>e.value),[t,n]=(0,r.useState)(e),s=e=>{if(t.includes(e)){let o=t.filter(t=>t!==e);n(o)}else n([...t,e])};return(0,o.jsx)(i.ZP,{container:!0,spacing:4,children:R.map((e,n)=>(0,o.jsx)(P,{data:R[n],selected:t,icon:z[n].icon,handleChange:s,name:"custom-checkbox-icons",gridProps:{sm:4,xs:12},iconProps:z[n].iconProps},n))})},B=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomCheckboxBasic from 'src/@core/components/custom-checkbox/basic'\n\nconst data = [\n  {\n    meta: '20%',\n    isSelected: true,\n    value: 'discount',\n    title: 'Discount',\n    content: 'Wow! Get 20% off on your next purchase!'\n  },\n  {\n    meta: 'Free',\n    value: 'updates',\n    title: 'Updates',\n    content: 'Get Updates regarding related products.'\n  }\n]\n\nconst BasicCustomCheckbox = () => {\n  const initialSelected = data.filter(item => item.isSelected).map(item => item.value)\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = value => {\n    if (selected.includes(value)) {\n      const updatedArr = selected.filter(item => item !== value)\n      setSelected(updatedArr)\n    } else {\n      setSelected([...selected, value])\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomCheckboxBasic\n          key={index}\n          data={data[index]}\n          selected={selected}\n          handleChange={handleChange}\n          name='custom-checkbox-basic'\n          gridProps={{ sm: 6, xs: 12 }}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default BasicCustomCheckbox\n"})}),N=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomCheckboxImg from 'src/@core/components/custom-checkbox/image'\n\nconst data = [\n  {\n    value: 'clock',\n    isSelected: true,\n    img: '/images/pages/background-3.jpg'\n  },\n  {\n    value: 'donuts',\n    img: '/images/pages/background-8.jpg'\n  },\n  {\n    value: 'flowers',\n    img: '/images/pages/background-5.jpg'\n  }\n]\n\nconst CustomCheckboxWithImages = () => {\n  const initialSelected = data.filter(item => item.isSelected).map(item => item.value)\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = value => {\n    if (selected.includes(value)) {\n      const updatedArr = selected.filter(item => item !== value)\n      setSelected(updatedArr)\n    } else {\n      setSelected([...selected, value])\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomCheckboxImg\n          key={index}\n          data={data[index]}\n          selected={selected}\n          name='custom-checkbox-img'\n          handleChange={handleChange}\n          gridProps={{ sm: 4, xs: 12 }}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default CustomCheckboxWithImages\n"})}),E=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomCheckboxIcons from 'src/@core/components/custom-checkbox/icons'\n\nconst data = [\n  {\n    value: 'backup',\n    title: 'Backup',\n    isSelected: true,\n    content: 'Backup every file from your project.'\n  },\n  {\n    value: 'encrypt',\n    title: 'Encrypt',\n    content: 'Translate your data to encrypted text.'\n  },\n  {\n    value: 'site-lock',\n    title: 'Site Lock',\n    content: 'Security tool to protect your website.'\n  }\n]\n\nconst icons = [\n  { icon: 'mdi:server', iconProps: { fontSize: '2rem', style: { marginBottom: 8 } } },\n  { icon: 'mdi:shield-outline', iconProps: { fontSize: '2rem', style: { marginBottom: 8 } } },\n  { icon: 'mdi:lock-outline', iconProps: { fontSize: '2rem', style: { marginBottom: 8 } } }\n]\n\nconst CustomCheckboxWithIcons = () => {\n  const initialSelected = data.filter(item => item.isSelected).map(item => item.value)\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = value => {\n    if (selected.includes(value)) {\n      const updatedArr = selected.filter(item => item !== value)\n      setSelected(updatedArr)\n    } else {\n      setSelected([...selected, value])\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomCheckboxIcons\n          key={index}\n          data={data[index]}\n          selected={selected}\n          icon={icons[index].icon}\n          handleChange={handleChange}\n          name='custom-checkbox-icons'\n          gridProps={{ sm: 4, xs: 12 }}\n          iconProps={icons[index].iconProps}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default CustomCheckboxWithIcons\n"})}),W=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomRadioBasic from 'src/@core/components/custom-radio/basic'\n\nconst data = [\n  {\n    meta: 'Free',\n    title: 'Basic',\n    value: 'basic',\n    isSelected: true,\n    content: 'Get 1 project with 1 team member.'\n  },\n  {\n    meta: '5.00',\n    title: 'Premium',\n    value: 'premium',\n    content: 'Get 5 projects with 5 team members.'\n  }\n]\n\nconst BasicCustomRadio = () => {\n  const initialSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1].value\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = prop => {\n    if (typeof prop === 'string') {\n      setSelected(prop)\n    } else {\n      setSelected(prop.target.value)\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomRadioBasic\n          key={index}\n          data={data[index]}\n          selected={selected}\n          name='custom-radios-basic'\n          handleChange={handleChange}\n          gridProps={{ sm: 6, xs: 12 }}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default BasicCustomRadio\n"})}),D=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomRadioImg from 'src/@core/components/custom-radio/image'\n\nconst data = [\n  {\n    value: 'clock',\n    isSelected: true,\n    img: '/images/pages/background-3.jpg'\n  },\n  {\n    value: 'donuts',\n    img: '/images/pages/background-8.jpg'\n  },\n  {\n    value: 'flowers',\n    img: '/images/pages/background-5.jpg'\n  }\n]\n\nconst CustomRadioWithImages = () => {\n  const initialSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1].value\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = prop => {\n    if (typeof prop === 'string') {\n      setSelected(prop)\n    } else {\n      setSelected(prop.target.value)\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomRadioImg\n          key={index}\n          data={data[index]}\n          selected={selected}\n          name='custom-radios-img'\n          handleChange={handleChange}\n          gridProps={{ sm: 4, xs: 12 }}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default CustomRadioWithImages\n"})}),A=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Grid from '@mui/material/Grid'\n\n// ** Demo Components Imports\nimport CustomRadioIcons from 'src/@core/components/custom-radio/icons'\n\nconst data = [\n  {\n    value: 'starter',\n    title: 'Starter',\n    isSelected: true,\n    content: 'A simple start for everyone.'\n  },\n  {\n    value: 'standard',\n    title: 'Standard',\n    content: 'For small to medium businesses.'\n  },\n  {\n    value: 'enterprise',\n    title: 'Enterprise',\n    content: 'Solution for big organizations.'\n  }\n]\n\nconst icons = [\n  { icon: 'mdi:rocket-launch-outline', iconProps: { fontSize: '2rem', style: { marginBottom: 8 } } },\n  { icon: 'mdi:account-outline', iconProps: { fontSize: '2rem', style: { marginBottom: 8 } } },\n  { icon: 'mdi:crown-outline', iconProps: { fontSize: '2rem', style: { marginBottom: 8 } } }\n]\n\nconst CustomRadioWithIcons = () => {\n  const initialSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1].value\n\n  // ** State\n  const [selected, setSelected] = useState(initialSelected)\n\n  const handleChange = prop => {\n    if (typeof prop === 'string') {\n      setSelected(prop)\n    } else {\n      setSelected(prop.target.value)\n    }\n  }\n\n  return (\n    <Grid container spacing={4}>\n      {data.map((item, index) => (\n        <CustomRadioIcons\n          key={index}\n          data={data[index]}\n          selected={selected}\n          icon={icons[index].icon}\n          name='custom-radios-icons'\n          handleChange={handleChange}\n          gridProps={{ sm: 4, xs: 12 }}\n          iconProps={icons[index].iconProps}\n        />\n      ))}\n    </Grid>\n  )\n}\n\nexport default CustomRadioWithIcons\n"})}),M=()=>(0,o.jsxs)(i.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,o.jsx)(i.ZP,{item:!0,xs:12,lg:6,children:(0,o.jsx)(s.Z,{title:"Custom Radios",code:{tsx:null,jsx:W},children:(0,o.jsx)(x,{})})}),(0,o.jsx)(i.ZP,{item:!0,xs:12,lg:6,children:(0,o.jsx)(s.Z,{title:"Custom Checkboxes",code:{tsx:null,jsx:B},children:(0,o.jsx)(w,{})})}),(0,o.jsx)(i.ZP,{item:!0,xs:12,lg:6,children:(0,o.jsx)(s.Z,{title:"Custom Radios with Icons",code:{tsx:null,jsx:A},children:(0,o.jsx)(j,{})})}),(0,o.jsx)(i.ZP,{item:!0,xs:12,lg:6,children:(0,o.jsx)(s.Z,{title:"Custom Checkboxes with Icons",code:{tsx:null,jsx:E},children:(0,o.jsx)(G,{})})}),(0,o.jsx)(i.ZP,{item:!0,xs:12,lg:6,children:(0,o.jsx)(s.Z,{title:"Custom Radios with Images",code:{tsx:null,jsx:D},children:(0,o.jsx)(m,{})})}),(0,o.jsx)(i.ZP,{item:!0,xs:12,lg:6,children:(0,o.jsx)(s.Z,{title:"Custom Checkboxes with Images",code:{tsx:null,jsx:N},children:(0,o.jsx)(C,{})})})]});var U=M}},function(e){e.O(0,[5307,9774,2888,179],function(){return e(e.s=53172)}),_N_E=e.O()}]);