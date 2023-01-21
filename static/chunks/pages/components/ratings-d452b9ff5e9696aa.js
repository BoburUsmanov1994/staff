(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{66485:function(e){function n(){return new DOMException("The request is not allowed","NotAllowedError")}async function t(e){if(!navigator.clipboard)throw n();return navigator.clipboard.writeText(e)}async function s(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let s=window.getSelection(),o=window.document.createRange();s.removeAllRanges(),o.selectNode(t),s.addRange(o);let i=!1;try{i=window.document.execCommand("copy")}finally{s.removeAllRanges(),window.document.body.removeChild(t)}if(!i)throw n()}async function o(e){try{await t(e)}catch(i){try{await s(e)}catch(o){throw o||i||n()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ e.exports=o},30492:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ratings",function(){return t(10059)}])},39913:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var s=t(85893),o=t(67294),i=t(61953),a=t(49837),l=t(72389),r=t(44373),c=t(93481),d=t(80562),m=t(59742),x=t(91359),u=t(87054),p=t(61225),h=t(85390),g=t(21609),j=t(15660),y=t.n(j),f=t(86501),v=t(66485),Z=t.n(v);let b=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName),R=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,o.useRef)(null),t=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&b(n.current)&&n.current.select()},s=()=>{e.onError&&e.onError();let t=!1!==e.selectOnError;t&&b(n.current)&&n.current.select()},i=e=>{Z()(e).then(t).catch(s)},a=(0,o.useCallback)(e=>{"string"==typeof e?i(e):n.current&&i(n.current.value)},[]);return{copy:a,target:n}},C=e=>{let{id:n,sx:t,code:j,title:v,children:Z,className:b}=e,[C,T]=(0,o.useState)(!1),[I,w]=(0,o.useState)(null!==j.tsx?"tsx":"jsx"),z=R(),B=(0,p.Z)(e=>e.breakpoints.down("md"));(0,o.useEffect)(()=>{y().highlightAll()},[C,I]);let V=()=>null!==j.tsx&&"tsx"===I?j.tsx.props.children.props.children:null!==j.jsx&&"jsx"===I?j.jsx.props.children.props.children:"",S=()=>{z.copy(V()),f.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,s.jsxs)(a.Z,{className:b,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...t},id:n||"card-snippet--".concat(v.toLowerCase().replace(/ /g,"-")),children:[(0,s.jsx)(m.Z,{title:v,...B?{}:{action:(0,s.jsx)(d.Z,{onClick:()=>T(!C),children:(0,s.jsx)(g.Z,{icon:"mdi:code-tags",fontSize:20})})}}),(0,s.jsx)(x.Z,{children:Z}),B?null:(0,s.jsxs)(c.Z,{in:C,children:[(0,s.jsx)(r.Z,{sx:{my:"0 !important"}}),(0,s.jsxs)(x.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,s.jsx)(i.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,s.jsxs)(h.Z,{exclusive:!0,size:"small",color:"primary",value:I,onChange:(e,n)=>null!==n?w(n):null,children:[null!==j.tsx?(0,s.jsx)(u.Z,{value:"tsx",children:(0,s.jsx)(g.Z,{icon:"mdi:language-typescript",fontSize:20})}):null,null!==j.jsx?(0,s.jsx)(u.Z,{value:"jsx",children:(0,s.jsx)(g.Z,{icon:"mdi:language-javascript",fontSize:20})}):null]})}),(0,s.jsx)(l.Z,{title:"Copy the source",placement:"top",children:(0,s.jsx)(d.Z,{onClick:S,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,s.jsx)(g.Z,{icon:"mdi:content-copy",fontSize:20})})}),(0,s.jsx)("div",{children:null!==j[I]?j[I]:null})]})]})]})};var T=C},10059:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var s=t(85893),o=t(79072),i=t(29630),a=t(39913),l=t(61953),r=t(90926);let c=()=>(0,s.jsxs)("div",{children:[(0,s.jsxs)(l.Z,{sx:{mb:3},children:[(0,s.jsx)(i.Z,{sx:{fontWeight:500},children:"Half Ratings"}),(0,s.jsx)(r.Z,{defaultValue:2.5,precision:.5,name:"half-rating"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Z,{sx:{fontWeight:500},children:"Read only"}),(0,s.jsx)(r.Z,{readOnly:!0,defaultValue:2.5,precision:.5,name:"read-only"})]})]});var d=t(67294);let m=()=>{let[e,n]=(0,d.useState)(2);return(0,s.jsxs)("div",{children:[(0,s.jsxs)(l.Z,{sx:{mb:3},children:[(0,s.jsx)(i.Z,{sx:{fontWeight:500},children:"Controlled"}),(0,s.jsx)(r.Z,{value:e,name:"simple-controlled",onChange:(e,t)=>n(t)})]}),(0,s.jsxs)(l.Z,{sx:{mb:3},children:[(0,s.jsx)(i.Z,{sx:{fontWeight:500},children:"Read only"}),(0,s.jsx)(r.Z,{readOnly:!0,value:e,name:"read-only"})]}),(0,s.jsxs)(l.Z,{sx:{mb:3},children:[(0,s.jsx)(i.Z,{sx:{fontWeight:500},children:"Disabled"}),(0,s.jsx)(r.Z,{disabled:!0,value:e,name:"disabled"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Z,{sx:{fontWeight:500},children:"No rating given"}),(0,s.jsx)(r.Z,{value:null,name:"no-value"})]})]})},x=()=>(0,s.jsxs)(l.Z,{className:"demo-space-y",sx:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)(r.Z,{defaultValue:2,name:"size-small",size:"small"}),(0,s.jsx)(r.Z,{defaultValue:2,name:"size-medium"}),(0,s.jsx)(r.Z,{defaultValue:2,name:"size-large",size:"large"})]});var u=t(21609);let p={1:{label:"Very Dissatisfied",icon:"mdi:emoticon-sad-outline"},2:{label:"Neutral",icon:"mdi:emoticon-neutral-outline"},3:{label:"Satisfied",icon:"mdi:emoticon-happy-outline"},4:{label:"Very Satisfied",icon:"mdi:emoticon-outline"}},h=e=>{let{value:n}=e;return(0,s.jsx)("span",{...e,children:(0,s.jsx)(u.Z,{icon:p[n].icon})})},g=()=>(0,s.jsxs)("div",{children:[(0,s.jsxs)(l.Z,{sx:{mb:3},children:[(0,s.jsx)(i.Z,{sx:{fontWeight:500},children:"Custom empty icon"}),(0,s.jsx)(r.Z,{name:"customized-empty",defaultValue:2,precision:.5,emptyIcon:(0,s.jsx)(u.Z,{icon:"mdi:star"})})]}),(0,s.jsxs)(l.Z,{sx:{mb:3},children:[(0,s.jsx)(i.Z,{sx:{fontWeight:500},children:"Custom icon and color"}),(0,s.jsx)(r.Z,{precision:.5,defaultValue:3,name:"customized-color",sx:{color:"error.main"},icon:(0,s.jsx)(u.Z,{icon:"mdi:heart"}),emptyIcon:(0,s.jsx)(u.Z,{icon:"mdi:heart"})})]}),(0,s.jsxs)(l.Z,{sx:{mb:3},children:[(0,s.jsx)(i.Z,{sx:{fontWeight:500},children:"10 stars"}),(0,s.jsx)(r.Z,{name:"customized-10",defaultValue:7,max:10})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Z,{sx:{fontWeight:500},children:"Custom icon set"}),(0,s.jsx)(r.Z,{name:"customized-icons",defaultValue:2,max:4,IconContainerComponent:h})]})]}),j={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},y=()=>{let[e,n]=(0,d.useState)(-1),[t,o]=(0,d.useState)(2);return(0,s.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(r.Z,{value:t,precision:.5,name:"hover-feedback",sx:{mr:4},onChange:(e,n)=>o(n),onChangeActive:(e,t)=>n(t)}),null!==t&&(0,s.jsx)(i.Z,{children:j[-1!==e?e:t]})]})},f=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Rating from '@mui/material/Rating'\nimport Typography from '@mui/material/Typography'\n\nconst RatingsBasic = () => {\n  // ** State\n  const [value, setValue] = useState(2)\n\n  return (\n    <div>\n      <Box sx={{ mb: 3 }}>\n        <Typography sx={{ fontWeight: 500 }}>Controlled</Typography>\n        <Rating value={value} name='simple-controlled' onChange={(event, newValue) => setValue(newValue)} />\n      </Box>\n      <Box sx={{ mb: 3 }}>\n        <Typography sx={{ fontWeight: 500 }}>Read only</Typography>\n        <Rating readOnly value={value} name='read-only' />\n      </Box>\n      <Box sx={{ mb: 3 }}>\n        <Typography sx={{ fontWeight: 500 }}>Disabled</Typography>\n        <Rating disabled value={value} name='disabled' />\n      </Box>\n      <div>\n        <Typography sx={{ fontWeight: 500 }}>No rating given</Typography>\n        <Rating value={null} name='no-value' />\n      </div>\n    </div>\n  )\n}\n\nexport default RatingsBasic\n"})}),v=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Rating from '@mui/material/Rating'\nimport Typography from '@mui/material/Typography'\n\nconst labels = {\n  0.5: 'Useless',\n  1: 'Useless+',\n  1.5: 'Poor',\n  2: 'Poor+',\n  2.5: 'Ok',\n  3: 'Ok+',\n  3.5: 'Good',\n  4: 'Good+',\n  4.5: 'Excellent',\n  5: 'Excellent+'\n}\n\nconst RatingsHoverFeedback = () => {\n  // ** States\n  const [hover, setHover] = useState(-1)\n  const [value, setValue] = useState(2)\n\n  return (\n    <Box sx={{ display: 'flex', alignItems: 'center' }}>\n      <Rating\n        value={value}\n        precision={0.5}\n        name='hover-feedback'\n        sx={{ mr: 4 }}\n        onChange={(event, newValue) => setValue(newValue)}\n        onChangeActive={(event, newHover) => setHover(newHover)}\n      />\n      {value !== null && <Typography>{labels[hover !== -1 ? hover : value]}</Typography>}\n    </Box>\n  )\n}\n\nexport default RatingsHoverFeedback\n"})}),Z=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Typography from '@mui/material/Typography'\nimport Rating from '@mui/material/Rating'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst customIcons = {\n  1: {\n    label: 'Very Dissatisfied',\n    icon: 'mdi:emoticon-sad-outline'\n  },\n  2: {\n    label: 'Neutral',\n    icon: 'mdi:emoticon-neutral-outline'\n  },\n  3: {\n    label: 'Satisfied',\n    icon: 'mdi:emoticon-happy-outline'\n  },\n  4: {\n    label: 'Very Satisfied',\n    icon: 'mdi:emoticon-outline'\n  }\n}\n\nconst IconContainer = props => {\n  const { value } = props\n\n  return (\n    <span {...props}>\n      <Icon icon={customIcons[value].icon} />\n    </span>\n  )\n}\n\nconst RatingsCustomized = () => {\n  return (\n    <div>\n      <Box sx={{ mb: 3 }}>\n        <Typography sx={{ fontWeight: 500 }}>Custom empty icon</Typography>\n        <Rating name='customized-empty' defaultValue={2} precision={0.5} emptyIcon={<Icon icon='mdi:star' />} />\n      </Box>\n      <Box sx={{ mb: 3 }}>\n        <Typography sx={{ fontWeight: 500 }}>Custom icon and color</Typography>\n        <Rating\n          precision={0.5}\n          defaultValue={3}\n          name='customized-color'\n          sx={{ color: 'error.main' }}\n          icon={<Icon icon='mdi:heart' />}\n          emptyIcon={<Icon icon='mdi:heart' />}\n        />\n      </Box>\n      <Box sx={{ mb: 3 }}>\n        <Typography sx={{ fontWeight: 500 }}>10 stars</Typography>\n        <Rating name='customized-10' defaultValue={7} max={10} />\n      </Box>\n      <div>\n        <Typography sx={{ fontWeight: 500 }}>Custom icon set</Typography>\n        <Rating name='customized-icons' defaultValue={2} max={4} IconContainerComponent={IconContainer} />\n      </div>\n    </div>\n  )\n}\n\nexport default RatingsCustomized\n"})}),b=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Rating from '@mui/material/Rating'\nimport Typography from '@mui/material/Typography'\n\nconst RatingsHalf = () => {\n  return (\n    <div>\n      <Box sx={{ mb: 3 }}>\n        <Typography sx={{ fontWeight: 500 }}>Half Ratings</Typography>\n        <Rating defaultValue={2.5} precision={0.5} name='half-rating' />\n      </Box>\n      <div>\n        <Typography sx={{ fontWeight: 500 }}>Read only</Typography>\n        <Rating readOnly defaultValue={2.5} precision={0.5} name='read-only' />\n      </div>\n    </div>\n  )\n}\n\nexport default RatingsHalf\n"})}),R=(0,s.jsx)("pre",{className:"language-jsx",children:(0,s.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Rating from '@mui/material/Rating'\n\nconst RatingsSizes = () => {\n  return (\n    <Box className='demo-space-y' sx={{ display: 'flex', flexDirection: 'column' }}>\n      <Rating defaultValue={2} name='size-small' size='small' />\n      <Rating defaultValue={2} name='size-medium' />\n      <Rating defaultValue={2} name='size-large' size='large' />\n    </Box>\n  )\n}\n\nexport default RatingsSizes\n"})}),C=()=>(0,s.jsxs)(o.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(a.Z,{title:"Basic Ratings",code:{tsx:null,jsx:f},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["Use ",(0,s.jsx)("code",{children:"name"})," prop to name the rating and use ",(0,s.jsx)("code",{children:"value"})," or ",(0,s.jsx)("code",{children:"defaultValue"})," prop to set any initial value to a rating."]}),(0,s.jsx)(m,{})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(a.Z,{title:"Customized Ratings",code:{tsx:null,jsx:Z},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["Use ",(0,s.jsx)("code",{children:"icon"})," or ",(0,s.jsx)("code",{children:"emptyIcon"})," prop to change default icon or empty icon respectively,"," ",(0,s.jsx)("code",{children:"max"})," prop to set number of ratings and ",(0,s.jsx)("code",{children:"IconContainerComponent"})," prop to change every icons in the ratings."]}),(0,s.jsx)(g,{})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(a.Z,{title:"Half Ratings",code:{tsx:null,jsx:b},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["Use ",(0,s.jsx)("code",{children:"precision"})," prop to define the minimum increment value change allowed."]}),(0,s.jsx)(c,{})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(a.Z,{title:"Sizes",code:{tsx:null,jsx:R},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["Use ",(0,s.jsxs)("code",{children:["size=","{'small' | 'large'}"]})," prop for different sizes of ratings."]}),(0,s.jsx)(x,{})]})}),(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsxs)(a.Z,{title:"Hover Feedback",code:{tsx:null,jsx:v},children:[(0,s.jsxs)(i.Z,{sx:{mb:4},children:["You can display a label on hover to help users pick the correct rating value. The demo uses the"," ",(0,s.jsx)("code",{children:"onChangeActive"})," prop."]}),(0,s.jsx)(y,{})]})})]});var T=C}},function(e){e.O(0,[5307,926,9774,2888,179],function(){return e(e.s=30492)}),_N_E=e.O()}]);