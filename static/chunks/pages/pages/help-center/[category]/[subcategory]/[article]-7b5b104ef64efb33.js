(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6717],{91359:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(87462),i=n(63366),o=n(67294),a=n(86010),s=n(94780),l=n(67074),c=n(78884),u=n(1588),d=n(34867);function x(e){return(0,d.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var h=n(85893);let m=["className","component"],f=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},x,t)},Z=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),p=o.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:s="div"}=n,l=(0,i.Z)(n,m),u=(0,r.Z)({},n,{component:s}),d=f(u);return(0,h.jsx)(Z,(0,r.Z)({as:s,className:(0,a.Z)(d.root,o),ownerState:u,ref:t},l))});var g=p},49837:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(87462),i=n(63366),o=n(67294),a=n(86010),s=n(94780),l=n(67074),c=n(78884),u=n(70918),d=n(1588),x=n(34867);function h(e){return(0,x.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var m=n(85893);let f=["className","raised"],Z=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},h,t)},p=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),g=o.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:s=!1}=n,l=(0,i.Z)(n,f),u=(0,r.Z)({},n,{raised:s}),d=Z(u);return(0,m.jsx)(p,(0,r.Z)({className:(0,a.Z)(d.root,o),elevation:s?8:void 0,ref:t,ownerState:u},l))});var v=g},60376:function(e,t,n){"use strict";n(67294);var r=n(54235),i=n(85893);t.Z=(0,r.Z)((0,i.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},79476:function(e,t,n){"use strict";n(67294);var r=n(54235),i=n(85893);t.Z=(0,r.Z)((0,i.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},91321:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/help-center/[category]/[subcategory]/[article]",function(){return n(45722)}])},45722:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return M}});var r=n(85893),i=n(67294),o=n(41664),a=n.n(o),s=n(11163),l=n(61953),c=n(18661),u=n(49837),d=n(55050),x=n(54225),h=n(44373),m=n(45670),f=n(67074),Z=n(29630),p=n(91359),g=n(8769),v=n(70754),j=n(21609),b=n(92024);let y=(0,f.ZP)(g.Z)(e=>{let{theme:t}=e;return{border:0,marginRight:0,overflow:"visible","& .MuiTabs-flexContainer":{flexDirection:"column"},"& .MuiTabs-indicator":{display:"none"},"& .Mui-selected":{backgroundColor:t.palette.primary.main,color:"".concat(t.palette.common.white," !important")},"& .MuiTab-root":{minHeight:40,minWidth:300,maxWidth:300,textAlign:"start",flexDirection:"row",justifyContent:"flex-start",borderRadius:t.shape.borderRadius,"& svg":{marginBottom:0,marginRight:t.spacing(1)},[t.breakpoints.down("md")]:{minWidth:"100%",maxWidth:"100%"}}}}),w=e=>{let{articles:t,activeArticle:n,activeSubcategory:o}=e,[f,g]=(0,i.useState)(!1),[w,C]=(0,i.useState)(n.slug),_=(0,s.useRouter)(),M=(e,t)=>{g(!0),_.push({pathname:"/pages/help-center/".concat(_.query.category,"/").concat(_.query.subcategory,"/").concat(t)}).then(()=>g(!1))};return(0,i.useEffect)(()=>{n&&n.slug!==w&&C(n.slug)},[n]),(0,r.jsx)(m.ZP,{value:w,children:(0,r.jsxs)(l.Z,{sx:{display:"flex",flexDirection:["column","column","row"]},children:[(0,r.jsxs)(l.Z,{sx:{mr:[0,0,5],mb:[5,5,0],display:"flex",flexDirection:"column"},children:[(0,r.jsx)(Z.Z,{variant:"h6",sx:{mb:4,fontWeight:600},children:o.title}),(0,r.jsx)(y,{orientation:"vertical",onChange:M,"aria-label":"vertical tabs example",children:t&&t.map(e=>(0,r.jsx)(c.Z,{value:e.slug,label:e.title},e.slug))})]}),f?(0,r.jsxs)(l.Z,{sx:{mt:11,width:"100%",display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,r.jsx)(v.Z,{sx:{mb:4}}),(0,r.jsx)(Z.Z,{children:"Loading..."})]}):(0,r.jsx)(d.Z,{value:w,sx:{p:0,width:"100%"},children:(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(p.Z,{children:[(0,r.jsx)(x.Z,{component:a(),variant:"outlined",startIcon:(0,r.jsx)(j.Z,{icon:"mdi:chevron-left"}),href:"/pages/help-center/".concat(_.query.category,"/").concat(_.query.subcategory),children:"Back to Categories"}),(0,r.jsxs)(l.Z,{sx:{mt:6,mb:6.5,display:"flex",alignItems:"center"},children:[(0,r.jsx)(b.Z,{skin:"light",variant:"rounded",color:"secondary",sx:{mr:3},children:(0,r.jsx)(j.Z,{icon:o.icon})}),(0,r.jsx)(Z.Z,{variant:"h6",children:n.title})]}),(0,r.jsx)(l.Z,{sx:{"& p":{color:"text.secondary"}},dangerouslySetInnerHTML:{__html:n.content}})]}),(0,r.jsx)(h.Z,{sx:{m:"0 !important"}}),(0,r.jsxs)(p.Z,{sx:{gap:4,display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(Z.Z,{variant:"h6",sx:{fontWeight:600},children:n.title}),(0,r.jsx)(Z.Z,{sx:{mb:4,color:"text.secondary"},children:"55 People found this helpful"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(x.Z,{variant:"outlined",sx:{mr:2.5,p:1.5,minWidth:32},children:(0,r.jsx)(j.Z,{fontSize:18,icon:"mdi:thumbs-up-outline"})}),(0,r.jsx)(x.Z,{variant:"outlined",sx:{p:1.5,minWidth:32},children:(0,r.jsx)(j.Z,{fontSize:18,icon:"mdi:thumbs-down-outline"})})]})]}),(0,r.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,r.jsx)(Z.Z,{sx:{mr:1,fontWeight:600},children:"Still need help?"}),(0,r.jsx)(Z.Z,{href:"/",component:a(),onClick:e=>e.preventDefault(),sx:{fontWeight:600,color:"primary.main",textDecoration:"none"},children:"Contact us?"})]})]})]})})]})})},C=e=>{let{apiData:t}=e;return t?(0,r.jsx)(w,{articles:t.articles,activeArticle:t.activeArticle,activeSubcategory:t.activeSubcategory}):null};var _=!0,M=C}},function(e){e.O(0,[4297,9774,2888,179],function(){return e(e.s=91321)}),_N_E=e.O()}]);