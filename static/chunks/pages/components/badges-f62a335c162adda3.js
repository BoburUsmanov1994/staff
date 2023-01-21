(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2501],{62135:function(a,e,r){"use strict";r.d(e,{Z:function(){return f}});var t=r(63366),n=r(87462),o=r(67294),s=r(86010),i=r(94780),l=r(41796),d=r(36622),c=r(67074),g=r(78884),m=r(1588),p=r(34867);function u(a){return(0,p.Z)("MuiButtonGroup",a)}let v=(0,m.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]);var x=r(58907),h=r(85893);let j=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],b=(a,e)=>{let{ownerState:r}=a;return[{[`& .${v.grouped}`]:e.grouped},{[`& .${v.grouped}`]:e[`grouped${(0,d.Z)(r.orientation)}`]},{[`& .${v.grouped}`]:e[`grouped${(0,d.Z)(r.variant)}`]},{[`& .${v.grouped}`]:e[`grouped${(0,d.Z)(r.variant)}${(0,d.Z)(r.orientation)}`]},{[`& .${v.grouped}`]:e[`grouped${(0,d.Z)(r.variant)}${(0,d.Z)(r.color)}`]},e.root,e[r.variant],!0===r.disableElevation&&e.disableElevation,r.fullWidth&&e.fullWidth,"vertical"===r.orientation&&e.vertical]},Z=a=>{let{classes:e,color:r,disabled:t,disableElevation:n,fullWidth:o,orientation:s,variant:l}=a,c={root:["root",l,"vertical"===s&&"vertical",o&&"fullWidth",n&&"disableElevation"],grouped:["grouped",`grouped${(0,d.Z)(s)}`,`grouped${(0,d.Z)(l)}`,`grouped${(0,d.Z)(l)}${(0,d.Z)(s)}`,`grouped${(0,d.Z)(l)}${(0,d.Z)(r)}`,t&&"disabled"]};return(0,i.Z)(c,u,e)},y=(0,c.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:b})(({theme:a,ownerState:e})=>(0,n.Z)({display:"inline-flex",borderRadius:(a.vars||a).shape.borderRadius},"contained"===e.variant&&{boxShadow:(a.vars||a).shadows[2]},e.disableElevation&&{boxShadow:"none"},e.fullWidth&&{width:"100%"},"vertical"===e.orientation&&{flexDirection:"column"},{[`& .${v.grouped}`]:(0,n.Z)({minWidth:40,"&:not(:first-of-type)":(0,n.Z)({},"horizontal"===e.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===e.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===e.variant&&"horizontal"===e.orientation&&{marginLeft:-1},"outlined"===e.variant&&"vertical"===e.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,n.Z)({},"horizontal"===e.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===e.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===e.variant&&"horizontal"===e.orientation&&{borderRight:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===a.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},"text"===e.variant&&"vertical"===e.orientation&&{borderBottom:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===a.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},"text"===e.variant&&"inherit"!==e.color&&{borderColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / 0.5)`:(0,l.Fq)(a.palette[e.color].main,.5)},"outlined"===e.variant&&"horizontal"===e.orientation&&{borderRightColor:"transparent"},"outlined"===e.variant&&"vertical"===e.orientation&&{borderBottomColor:"transparent"},"contained"===e.variant&&"horizontal"===e.orientation&&{borderRight:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${v.disabled}`]:{borderRight:`1px solid ${(a.vars||a).palette.action.disabled}`}},"contained"===e.variant&&"vertical"===e.orientation&&{borderBottom:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${v.disabled}`]:{borderBottom:`1px solid ${(a.vars||a).palette.action.disabled}`}},"contained"===e.variant&&"inherit"!==e.color&&{borderColor:(a.vars||a).palette[e.color].dark},{"&:hover":(0,n.Z)({},"outlined"===e.variant&&"horizontal"===e.orientation&&{borderRightColor:"currentColor"},"outlined"===e.variant&&"vertical"===e.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,n.Z)({},"contained"===e.variant&&{boxShadow:"none"})},"contained"===e.variant&&{boxShadow:"none"})})),B=o.forwardRef(function(a,e){let r=(0,g.Z)({props:a,name:"MuiButtonGroup"}),{children:i,className:l,color:d="primary",component:c="div",disabled:m=!1,disableElevation:p=!1,disableFocusRipple:u=!1,disableRipple:v=!1,fullWidth:b=!1,orientation:B="horizontal",size:f="medium",variant:A="outlined"}=r,C=(0,t.Z)(r,j),U=(0,n.Z)({},r,{color:d,component:c,disabled:m,disableElevation:p,disableFocusRipple:u,disableRipple:v,fullWidth:b,orientation:B,size:f,variant:A}),w=Z(U),N=o.useMemo(()=>({className:w.grouped,color:d,disabled:m,disableElevation:p,disableFocusRipple:u,disableRipple:v,fullWidth:b,size:f,variant:A}),[d,m,p,u,v,b,f,A,w.grouped]);return(0,h.jsx)(y,(0,n.Z)({as:c,role:"group",className:(0,s.Z)(w.root,l),ref:e,ownerState:U},C,{children:(0,h.jsx)(x.Z.Provider,{value:N,children:i})}))});var f=B},66485:function(a){function e(){return new DOMException("The request is not allowed","NotAllowedError")}async function r(a){if(!navigator.clipboard)throw e();return navigator.clipboard.writeText(a)}async function t(a){let r=document.createElement("span");r.textContent=a,r.style.whiteSpace="pre",r.style.webkitUserSelect="auto",r.style.userSelect="all",document.body.appendChild(r);let t=window.getSelection(),n=window.document.createRange();t.removeAllRanges(),n.selectNode(r),t.addRange(n);let o=!1;try{o=window.document.execCommand("copy")}finally{t.removeAllRanges(),window.document.body.removeChild(r)}if(!o)throw e()}async function n(a){try{await r(a)}catch(o){try{await t(a)}catch(n){throw n||o||e()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ a.exports=n},86456:function(a,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/badges",function(){return r(73230)}])},39913:function(a,e,r){"use strict";r.d(e,{Z:function(){return C}});var t=r(85893),n=r(67294),o=r(61953),s=r(49837),i=r(72389),l=r(44373),d=r(93481),c=r(80562),g=r(59742),m=r(91359),p=r(87054),u=r(61225),v=r(85390),x=r(21609),h=r(15660),j=r.n(h),b=r(86501),Z=r(66485),y=r.n(Z);let B=a=>a&&("TEXTAREA"===a.nodeName||"INPUT"===a.nodeName),f=function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,n.useRef)(null),r=()=>{a.onSuccess&&a.onSuccess(),a.selectOnCopy&&B(e.current)&&e.current.select()},t=()=>{a.onError&&a.onError();let r=!1!==a.selectOnError;r&&B(e.current)&&e.current.select()},o=a=>{y()(a).then(r).catch(t)},s=(0,n.useCallback)(a=>{"string"==typeof a?o(a):e.current&&o(e.current.value)},[]);return{copy:s,target:e}},A=a=>{let{id:e,sx:r,code:h,title:Z,children:y,className:B}=a,[A,C]=(0,n.useState)(!1),[U,w]=(0,n.useState)(null!==h.tsx?"tsx":"jsx"),N=f(),S=(0,u.Z)(a=>a.breakpoints.down("md"));(0,n.useEffect)(()=>{j().highlightAll()},[A,U]);let R=()=>null!==h.tsx&&"tsx"===U?h.tsx.props.children.props.children:null!==h.jsx&&"jsx"===U?h.jsx.props.children.props.children:"",k=()=>{N.copy(R()),b.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,t.jsxs)(s.Z,{className:B,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...r},id:e||"card-snippet--".concat(Z.toLowerCase().replace(/ /g,"-")),children:[(0,t.jsx)(g.Z,{title:Z,...S?{}:{action:(0,t.jsx)(c.Z,{onClick:()=>C(!A),children:(0,t.jsx)(x.Z,{icon:"mdi:code-tags",fontSize:20})})}}),(0,t.jsx)(m.Z,{children:y}),S?null:(0,t.jsxs)(d.Z,{in:A,children:[(0,t.jsx)(l.Z,{sx:{my:"0 !important"}}),(0,t.jsxs)(m.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,t.jsx)(o.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,t.jsxs)(v.Z,{exclusive:!0,size:"small",color:"primary",value:U,onChange:(a,e)=>null!==e?w(e):null,children:[null!==h.tsx?(0,t.jsx)(p.Z,{value:"tsx",children:(0,t.jsx)(x.Z,{icon:"mdi:language-typescript",fontSize:20})}):null,null!==h.jsx?(0,t.jsx)(p.Z,{value:"jsx",children:(0,t.jsx)(x.Z,{icon:"mdi:language-javascript",fontSize:20})}):null]})}),(0,t.jsx)(i.Z,{title:"Copy the source",placement:"top",children:(0,t.jsx)(c.Z,{onClick:k,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,t.jsx)(x.Z,{icon:"mdi:content-copy",fontSize:20})})}),(0,t.jsx)("div",{children:null!==h[U]?h[U]:null})]})]})]})};var C=A},8195:function(a,e,r){"use strict";var t=r(85893),n=r(60082),o=r(19550);let s=a=>{let{sx:e,skin:r,color:s}=a,i=(0,o.Z)(),l={primary:{...i.primaryLight},secondary:{...i.secondaryLight},success:{...i.successLight},error:{...i.errorLight},warning:{...i.warningLight},info:{...i.infoLight}};return(0,t.jsx)(n.Z,{...a,sx:"light"===r&&s?Object.assign({"& .MuiBadge-badge":l[s]},e):e})};e.Z=s},73230:function(a,e,r){"use strict";r.r(e),r.d(e,{default:function(){return O}});var t=r(85893),n=r(79072),o=r(29630),s=r(39913),i=r(60082),l=r(72347);let d=()=>(0,t.jsxs)("div",{className:"demo-space-x",children:[(0,t.jsx)(i.Z,{variant:"dot",color:"primary",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{variant:"dot",color:"secondary",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{variant:"dot",color:"error",children:(0,t.jsx)(o.Z,{children:"Typography"})})]}),c=()=>(0,t.jsxs)("div",{className:"demo-space-x",children:[(0,t.jsx)(i.Z,{badgeContent:4,color:"primary",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{badgeContent:4,color:"secondary",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{badgeContent:4,color:"success",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{badgeContent:4,color:"error",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{badgeContent:4,color:"warning",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{badgeContent:4,color:"info",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})})]});var g=r(67074),m=r(8195);let p=(0,g.ZP)("div")(a=>{let{theme:e}=a;return{"& > *":{marginRight:"".concat(e.spacing(6)," !important")}}}),u=()=>(0,t.jsxs)(p,{className:"demo-space-x",children:[(0,t.jsx)(m.Z,{skin:"light",color:"primary",badgeContent:4,children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(m.Z,{skin:"light",color:"secondary",badgeContent:4,children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(m.Z,{skin:"light",color:"success",badgeContent:4,children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(m.Z,{skin:"light",color:"error",badgeContent:4,children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(m.Z,{skin:"light",color:"warning",badgeContent:4,children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(m.Z,{skin:"light",color:"info",badgeContent:4,children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})})]}),v=(0,g.ZP)("div")(a=>{let{theme:e}=a;return{"& > *":{marginRight:"".concat(e.spacing(6)," !important")}}}),x=()=>(0,t.jsxs)(v,{className:"demo-space-x",children:[(0,t.jsx)(i.Z,{color:"primary",badgeContent:" ",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar",variant:"square"})}),(0,t.jsx)(i.Z,{color:"primary",variant:"dot",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar",variant:"square"})}),(0,t.jsx)(i.Z,{color:"primary",overlap:"circular",badgeContent:" ",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{color:"primary",overlap:"circular",variant:"dot",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})})]}),h=(0,g.ZP)("div")(a=>{let{theme:e}=a;return{"& > *":{marginRight:"".concat(e.spacing(6)," !important")}}}),j=()=>(0,t.jsxs)(h,{className:"demo-space-x",children:[(0,t.jsx)(i.Z,{badgeContent:99,color:"primary",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{badgeContent:100,color:"primary",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{badgeContent:1e3,max:999,color:"primary",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})})]}),b=()=>(0,t.jsxs)("div",{className:"demo-space-x",children:[(0,t.jsx)(i.Z,{color:"primary",variant:"dot",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{color:"primary",variant:"dot",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{color:"primary",variant:"dot",anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(i.Z,{color:"primary",variant:"dot",anchorOrigin:{vertical:"top",horizontal:"left"},children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})})]});var Z=r(67294),y=r(16056),B=r(54225),f=r(62135),A=r(22841),C=r(21609);let U=(0,g.ZP)("div")(a=>{let{theme:e}=a;return{display:"flex",alignItems:"center","& > *":{marginRight:"".concat(e.spacing(6)," !important")}}}),w=()=>{let[a,e]=(0,Z.useState)(1),[r,n]=(0,Z.useState)(!1),o=()=>{n(!r)};return(0,t.jsxs)(Z.Fragment,{children:[(0,t.jsxs)(U,{className:"demo-space-x",children:[(0,t.jsx)(i.Z,{badgeContent:a,color:"primary",children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsxs)(f.Z,{size:"small",children:[(0,t.jsx)(B.Z,{"aria-label":"reduce",onClick:()=>e(Math.max(a-1,0)),children:(0,t.jsx)(C.Z,{icon:"mdi:minus",fontSize:20})}),(0,t.jsx)(B.Z,{"aria-label":"increase",onClick:()=>e(a+1),children:(0,t.jsx)(C.Z,{icon:"mdi:plus",fontSize:20})})]})]}),(0,t.jsxs)(U,{className:"demo-space-x",children:[(0,t.jsx)(i.Z,{variant:"dot",color:"primary",invisible:r,children:(0,t.jsx)(l.Z,{src:"/images/avatars/1.png",alt:"User Avatar"})}),(0,t.jsx)(A.Z,{label:"Show Badge",control:(0,t.jsx)(y.Z,{color:"primary",checked:!r,onChange:o})})]})]})},N=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\n\nconst BadgesAlignment = () => {\n  return (\n    <div className='demo-space-x'>\n      <Badge color='primary' variant='dot'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge color='primary' variant='dot' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n    </div>\n  )\n}\n\nexport default BadgesAlignment\n"})}),S=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\nimport Typography from '@mui/material/Typography'\n\nconst BadgesDot = () => {\n  return (\n    <div className='demo-space-x'>\n      <Badge variant='dot' color='primary'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge variant='dot' color='secondary'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge variant='dot' color='error'>\n        <Typography>Typography</Typography>\n      </Badge>\n    </div>\n  )\n}\n\nexport default BadgesDot\n"})}),R=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Avatar from '@mui/material/Avatar'\nimport { styled } from '@mui/material/styles'\n\n// ** Custom Components Imports\nimport CustomBadge from 'src/@core/components/mui/badge'\n\n// Styled component for a wrapper\nconst Wrapper = styled('div')(({ theme }) => ({\n  '& > *': {\n    marginRight: {theme.spacing(6)} !important\n  }\n}))\n\nconst BadgesLight = () => {\n  return (\n    <Wrapper className='demo-space-x'>\n      <CustomBadge skin='light' color='primary' badgeContent={4}>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </CustomBadge>\n      <CustomBadge skin='light' color='secondary' badgeContent={4}>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </CustomBadge>\n      <CustomBadge skin='light' color='success' badgeContent={4}>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </CustomBadge>\n      <CustomBadge skin='light' color='error' badgeContent={4}>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </CustomBadge>\n      <CustomBadge skin='light' color='warning' badgeContent={4}>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </CustomBadge>\n      <CustomBadge skin='light' color='info' badgeContent={4}>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </CustomBadge>\n    </Wrapper>\n  )\n}\n\nexport default BadgesLight\n"})}),k=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\n\nconst BadgesBasic = () => {\n  return (\n    <div className='demo-space-x'>\n      <Badge badgeContent={4} color='primary'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={4} color='secondary'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={4} color='success'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={4} color='error'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={4} color='warning'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={4} color='info'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n    </div>\n  )\n}\n\nexport default BadgesBasic\n"})}),z=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\nimport { styled } from '@mui/material/styles'\n\n// Styled component for the wrapper\nconst Wrapper = styled('div')(({ theme }) => ({\n  '& > *': {\n    marginRight: {theme.spacing(6)} !important\n  }\n}))\n\nconst BadgesMaxValue = () => {\n  return (\n    <Wrapper className='demo-space-x'>\n      <Badge badgeContent={99} color='primary'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={100} color='primary'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge badgeContent={1000} max={999} color='primary'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n    </Wrapper>\n  )\n}\n\nexport default BadgesMaxValue\n"})}),$=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Avatar from '@mui/material/Avatar'\nimport { styled } from '@mui/material/styles'\n\n// Styled component for the wrapper\nconst Wrapper = styled('div')(({ theme }) => ({\n  '& > *': {\n    marginRight: {theme.spacing(6)} !important\n  }\n}))\n\nconst BadgesOverlap = () => {\n  return (\n    <Wrapper className='demo-space-x'>\n      <Badge color='primary' badgeContent=' '>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' variant='square' />\n      </Badge>\n      <Badge color='primary' variant='dot'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' variant='square' />\n      </Badge>\n      <Badge color='primary' overlap='circular' badgeContent=' '>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n      <Badge color='primary' overlap='circular' variant='dot'>\n        <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n      </Badge>\n    </Wrapper>\n  )\n}\n\nexport default BadgesOverlap\n"})}),I=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState, Fragment } from 'react'\n\n// ** MUI Imports\nimport Badge from '@mui/material/Badge'\nimport Switch from '@mui/material/Switch'\nimport Button from '@mui/material/Button'\nimport Avatar from '@mui/material/Avatar'\nimport { styled } from '@mui/material/styles'\nimport ButtonGroup from '@mui/material/ButtonGroup'\nimport FormControlLabel from '@mui/material/FormControlLabel'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\n// Styled component for a wrapper\nconst Wrapper = styled('div')(({ theme }) => ({\n  display: 'flex',\n  alignItems: 'center',\n  '& > *': {\n    marginRight: {theme.spacing(6)} !important\n  }\n}))\n\nconst BadgesVisibility = () => {\n  // ** States\n  const [count, setCount] = useState(1)\n  const [invisible, setInvisible] = useState(false)\n\n  const handleBadgeVisibility = () => {\n    setInvisible(!invisible)\n  }\n\n  return (\n    <Fragment>\n      <Wrapper className='demo-space-x'>\n        <Badge badgeContent={count} color='primary'>\n          <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n        </Badge>\n        <ButtonGroup size='small'>\n          <Button aria-label='reduce' onClick={() => setCount(Math.max(count - 1, 0))}>\n            <Icon icon='mdi:minus' fontSize={20} />\n          </Button>\n          <Button aria-label='increase' onClick={() => setCount(count + 1)}>\n            <Icon icon='mdi:plus' fontSize={20} />\n          </Button>\n        </ButtonGroup>\n      </Wrapper>\n\n      <Wrapper className='demo-space-x'>\n        <Badge variant='dot' color='primary' invisible={invisible}>\n          <Avatar src='/images/avatars/1.png' alt='User Avatar' />\n        </Badge>\n        <FormControlLabel\n          label='Show Badge'\n          control={<Switch color='primary' checked={!invisible} onChange={handleBadgeVisibility} />}\n        />\n      </Wrapper>\n    </Fragment>\n  )\n}\n\nexport default BadgesVisibility\n"})}),T=()=>(0,t.jsxs)(n.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,t.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{title:"Simple Badges",code:{tsx:null,jsx:k},children:[(0,t.jsxs)(o.Z,{sx:{mb:2},children:["Use ",(0,t.jsx)("code",{children:"badgeContent"})," prop for the text inside the badge and ",(0,t.jsx)("code",{children:"color"})," prop for different colors of a badge."]}),(0,t.jsx)(c,{})]})}),(0,t.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{title:"Dot Badges",code:{tsx:null,jsx:S},children:[(0,t.jsxs)(o.Z,{sx:{mb:2},children:["Use ",(0,t.jsx)("code",{children:"variant='dot'"})," prop for dot badges."]}),(0,t.jsx)(d,{})]})}),(0,t.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{title:"Badge Alignment",code:{tsx:null,jsx:N},children:[(0,t.jsxs)(o.Z,{sx:{mb:2},children:["Use ",(0,t.jsx)("code",{children:"anchorOrigin"})," prop to move the badge to any corner of the wrapped element."]}),(0,t.jsx)(b,{})]})}),(0,t.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{title:"Maximum Value",code:{tsx:null,jsx:z},children:[(0,t.jsxs)(o.Z,{sx:{mb:2},children:["Use ",(0,t.jsx)("code",{children:"max"})," prop to cap the value of the badge content."]}),(0,t.jsx)(j,{})]})}),(0,t.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{title:"Badge Overlap",code:{tsx:null,jsx:$},children:[(0,t.jsxs)(o.Z,{sx:{mb:2},children:["Use ",(0,t.jsx)("code",{children:"overlap"})," prop to place the badge relative to the corner of the wrapped element."]}),(0,t.jsx)(x,{})]})}),(0,t.jsx)(n.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{title:"Badge visibility",code:{tsx:null,jsx:I},children:[(0,t.jsxs)(o.Z,{sx:{mb:2},children:["The visibility of badges can be controlled using ",(0,t.jsx)("code",{children:"invisible"})," prop."]}),(0,t.jsx)(w,{})]})}),(0,t.jsx)(n.ZP,{item:!0,xs:12,children:(0,t.jsxs)(s.Z,{title:"Custom Light Badges",code:{tsx:null,jsx:R},children:[(0,t.jsxs)(o.Z,{sx:{mb:2},children:["If you want to use light variant of the badges, you need to use our custom component with"," ",(0,t.jsx)("code",{children:"skin='light'"})," prop."]}),(0,t.jsx)(u,{})]})})]});var O=T}},function(a){a.O(0,[5307,9774,2888,179],function(){return a(a.s=86456)}),_N_E=a.O()}]);