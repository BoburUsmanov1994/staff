(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4373],{66485:function(e){function n(){return new DOMException("The request is not allowed","NotAllowedError")}async function t(e){if(!navigator.clipboard)throw n();return navigator.clipboard.writeText(e)}async function r(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let r=window.getSelection(),i=window.document.createRange();r.removeAllRanges(),i.selectNode(t),r.addRange(i);let l=!1;try{l=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(t)}if(!l)throw n()}async function i(e){try{await t(e)}catch(l){try{await r(e)}catch(i){throw i||l||n()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ e.exports=i},29410:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-elements/input-mask",function(){return t(31733)}])},39913:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(85893),i=t(67294),l=t(61953),s=t(49837),o=t(72389),a=t(44373),c=t(93481),d=t(80562),m=t(59742),u=t(91359),p=t(87054),x=t(61225),h=t(85390),b=t(21609),j=t(15660),f=t.n(j),g=t(86501),Z=t(66485),C=t.n(Z);let y=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName),v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,i.useRef)(null),t=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&y(n.current)&&n.current.select()},r=()=>{e.onError&&e.onError();let t=!1!==e.selectOnError;t&&y(n.current)&&n.current.select()},l=e=>{C()(e).then(t).catch(r)},s=(0,i.useCallback)(e=>{"string"==typeof e?l(e):n.current&&l(n.current.value)},[]);return{copy:s,target:n}},S=e=>{let{id:n,sx:t,code:j,title:Z,children:C,className:y}=e,[S,k]=(0,i.useState)(!1),[w,I]=(0,i.useState)(null!==j.tsx?"tsx":"jsx"),P=v(),z=(0,x.Z)(e=>e.breakpoints.down("md"));(0,i.useEffect)(()=>{f().highlightAll()},[S,w]);let G=()=>null!==j.tsx&&"tsx"===w?j.tsx.props.children.props.children:null!==j.jsx&&"jsx"===w?j.jsx.props.children.props.children:"",F=()=>{P.copy(G()),g.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,r.jsxs)(s.Z,{className:y,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...t},id:n||"card-snippet--".concat(Z.toLowerCase().replace(/ /g,"-")),children:[(0,r.jsx)(m.Z,{title:Z,...z?{}:{action:(0,r.jsx)(d.Z,{onClick:()=>k(!S),children:(0,r.jsx)(b.Z,{icon:"mdi:code-tags",fontSize:20})})}}),(0,r.jsx)(u.Z,{children:C}),z?null:(0,r.jsxs)(c.Z,{in:S,children:[(0,r.jsx)(a.Z,{sx:{my:"0 !important"}}),(0,r.jsxs)(u.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,r.jsx)(l.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,r.jsxs)(h.Z,{exclusive:!0,size:"small",color:"primary",value:w,onChange:(e,n)=>null!==n?I(n):null,children:[null!==j.tsx?(0,r.jsx)(p.Z,{value:"tsx",children:(0,r.jsx)(b.Z,{icon:"mdi:language-typescript",fontSize:20})}):null,null!==j.jsx?(0,r.jsx)(p.Z,{value:"jsx",children:(0,r.jsx)(b.Z,{icon:"mdi:language-javascript",fontSize:20})}):null]})}),(0,r.jsx)(o.Z,{title:"Copy the source",placement:"top",children:(0,r.jsx)(d.Z,{onClick:F,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,r.jsx)(b.Z,{icon:"mdi:content-copy",fontSize:20})})}),(0,r.jsx)("div",{children:null!==j[w]?j[w]:null})]})]})]})};var k=S},10792:function(e,n,t){"use strict";var r=t(85893),i=t(79072);let l=e=>{let{title:n,subtitle:t}=e;return(0,r.jsxs)(i.ZP,{item:!0,xs:12,children:[n,t||null]})};n.Z=l},72931:function(e,n,t){"use strict";var r=t(67074),i=t(61953);let l=(0,r.ZP)(i.Z)(e=>{let{theme:n}=e;return{"& input":{height:56,width:"100%",borderWidth:1,lineHeight:1.5,borderRadius:8,fontSize:"1rem",borderStyle:"solid",letterSpacing:"0.15px",padding:n.spacing(4),backgroundColor:"transparent",color:n.palette.text.primary,fontFamily:n.typography.body1.fontFamily,borderColor:"rgba(".concat(n.palette.customColors.main,", 0.22)"),transition:n.transitions.create(["border-color","box-shadow"]),"&:focus, &:focus-visible":{outline:0,borderWidth:2,padding:n.spacing(3.75),borderColor:"".concat(n.palette.primary.main," !important")},"&::-webkit-input-placeholder":{color:n.palette.text.secondary}}}});n.Z=l},31733:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(85893),i=t(79072),l=t(1163),s=t(29630),o=t(10792),a=t(39913),c=t(72931),d=t(3695),m=t(52034),u=t.n(m);t(49634);let p=()=>(0,r.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,r.jsxs)(i.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(d.Z,{htmlFor:"credit-card",sx:{mb:2,fontSize:".75rem"},children:"Credit Card"}),(0,r.jsx)(u(),{id:"credit-card",options:{creditCard:!0},placeholder:"0000 0000 0000 0000"})]}),(0,r.jsxs)(i.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(d.Z,{htmlFor:"phone-number",sx:{mb:2,fontSize:".75rem"},children:"Phone Number"}),(0,r.jsx)(u(),{id:"phone-number",placeholder:"1 234 567 8900",options:{phone:!0,phoneRegionCode:"US"}})]}),(0,r.jsxs)(i.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(d.Z,{htmlFor:"date",sx:{mb:2,fontSize:".75rem"},children:"Date"}),(0,r.jsx)(u(),{id:"date",placeholder:"2001-01-01",options:{date:!0,delimiter:"-",datePattern:["Y","m","d"]}})]}),(0,r.jsxs)(i.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(d.Z,{htmlFor:"time",sx:{mb:2,fontSize:".75rem"},children:"Time"}),(0,r.jsx)(u(),{id:"time",placeholder:"12:00:00",options:{time:!0,timePattern:["h","m","s"]}})]}),(0,r.jsxs)(i.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(d.Z,{htmlFor:"numeral",sx:{mb:2,fontSize:".75rem"},children:"Numeral"}),(0,r.jsx)(u(),{id:"numeral",placeholder:"10,000",options:{numeral:!0,numeralThousandsGroupStyle:"thousand"}})]}),(0,r.jsxs)(i.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(d.Z,{htmlFor:"blocks",sx:{mb:2,fontSize:".75rem"},children:"Blocks"}),(0,r.jsx)(u(),{id:"blocks",placeholder:"Blocks [4, 3, 3]",options:{blocks:[4,3,3],uppercase:!0}})]}),(0,r.jsxs)(i.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(d.Z,{htmlFor:"delimiter",sx:{mb:2,fontSize:".75rem"},children:"Delimiter"}),(0,r.jsx)(u(),{id:"delimiter",placeholder:"Delimiter: '.'",options:{delimiter:"\xb7",blocks:[3,3,3],uppercase:!0}})]}),(0,r.jsxs)(i.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(d.Z,{htmlFor:"custom-delimiter",sx:{mb:2,fontSize:".75rem"},children:"Custom Delimiters"}),(0,r.jsx)(u(),{id:"custom-delimiter",placeholder:"Delimiter: ['.', '.', '-']",options:{delimiters:[".",".","-"],blocks:[3,3,3,2],uppercase:!0}})]}),(0,r.jsxs)(i.ZP,{item:!0,xs:12,sm:6,lg:4,children:[(0,r.jsx)(d.Z,{htmlFor:"prefix",sx:{mb:2,fontSize:".75rem"},children:"Prefix"}),(0,r.jsx)(u(),{id:"prefix",options:{prefix:"+63",blocks:[3,3,3,4],uppercase:!0}})]})]}),x=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Grid from '@mui/material/Grid'\nimport InputLabel from '@mui/material/InputLabel'\n\n// ** CleaveJS Imports\nimport Cleave from 'cleave.js/react'\nimport 'cleave.js/dist/addons/cleave-phone.us'\n\nconst InputMaskExamples = () => {\n  return (\n    <Grid container spacing={6}>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='credit-card' sx={{ mb: 2, fontSize: '.75rem' }}>\n          Credit Card\n        </InputLabel>\n        <Cleave id='credit-card' options={{ creditCard: true }} placeholder='0000 0000 0000 0000' />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='phone-number' sx={{ mb: 2, fontSize: '.75rem' }}>\n          Phone Number\n        </InputLabel>\n        <Cleave id='phone-number' placeholder='1 234 567 8900' options={{ phone: true, phoneRegionCode: 'US' }} />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='date' sx={{ mb: 2, fontSize: '.75rem' }}>\n          Date\n        </InputLabel>\n        <Cleave\n          id='date'\n          placeholder='2001-01-01'\n          options={{ date: true, delimiter: '-', datePattern: ['Y', 'm', 'd'] }}\n        />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='time' sx={{ mb: 2, fontSize: '.75rem' }}>\n          Time\n        </InputLabel>\n        <Cleave id='time' placeholder='12:00:00' options={{ time: true, timePattern: ['h', 'm', 's'] }} />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='numeral' sx={{ mb: 2, fontSize: '.75rem' }}>\n          Numeral\n        </InputLabel>\n        <Cleave id='numeral' placeholder='10,000' options={{ numeral: true, numeralThousandsGroupStyle: 'thousand' }} />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='blocks' sx={{ mb: 2, fontSize: '.75rem' }}>\n          Blocks\n        </InputLabel>\n        <Cleave id='blocks' placeholder='Blocks [4, 3, 3]' options={{ blocks: [4, 3, 3], uppercase: true }} />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='delimiter' sx={{ mb: 2, fontSize: '.75rem' }}>\n          Delimiter\n        </InputLabel>\n        <Cleave\n          id='delimiter'\n          placeholder=\"Delimiter: '.'\"\n          options={{ delimiter: '\xb7', blocks: [3, 3, 3], uppercase: true }}\n        />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='custom-delimiter' sx={{ mb: 2, fontSize: '.75rem' }}>\n          Custom Delimiters\n        </InputLabel>\n        <Cleave\n          id='custom-delimiter'\n          placeholder=\"Delimiter: ['.', '.', '-']\"\n          options={{ delimiters: ['.', '.', '-'], blocks: [3, 3, 3, 2], uppercase: true }}\n        />\n      </Grid>\n      <Grid item xs={12} sm={6} lg={4}>\n        <InputLabel htmlFor='prefix' sx={{ mb: 2, fontSize: '.75rem' }}>\n          Prefix\n        </InputLabel>\n        <Cleave id='prefix' options={{ prefix: '+63', blocks: [3, 3, 3, 4], uppercase: true }} />\n      </Grid>\n    </Grid>\n  )\n}\n\nexport default InputMaskExamples\n"})}),h=()=>(0,r.jsx)(c.Z,{children:(0,r.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(o.Z,{title:(0,r.jsx)(s.Z,{variant:"h5",children:(0,r.jsx)(l.Z,{href:"https://github.com/nosir/cleave.js",target:"_blank",children:"Cleave.js"})}),subtitle:(0,r.jsx)(s.Z,{variant:"body2",children:"Format input text content when you are typing"})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,children:(0,r.jsx)(a.Z,{title:"Input Masks",code:{tsx:null,jsx:x},children:(0,r.jsx)(p,{})})})]})});var b=h}},function(e){e.O(0,[5307,6565,9774,2888,179],function(){return e(e.s=29410)}),_N_E=e.O()}]);