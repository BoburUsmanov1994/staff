(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3694],{58828:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/apex-charts",function(){return a(5804)}])},37645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let a=o.default,r=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:a,pastDelay:s}=e;return null}};if(e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=s({},r,e)),(r=s({},r,t)).suspense&&(delete r.ssr,delete r.loading),r.loadableGenerated&&delete(r=s({},r,r.loadableGenerated)).loadableGenerated,"boolean"==typeof r.ssr&&!r.suspense){if(!r.ssr)return delete r.ssr,l(a,r);delete r.ssr}return a(r)},t.noSSR=l;var s=a(6495).Z,r=a(92648).Z,o=(r(a(67294)),r(a(14588)));function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33644:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var s=(0,a(92648).Z)(a(67294));let r=s.default.createContext(null);t.LoadableContext=r},14588:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(6495).Z,r=(0,a(92648).Z)(a(67294)),o=a(33644);let{useSyncExternalStore:l}=a(67294),i=[],n=[],d=!1;function c(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class p{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function x(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=r.default.lazy(a.loader));let i=null;function c(){if(!i){let t=new p(e,a);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!d){let x=a.webpack?a.webpack():a.modules;x&&n.push(e=>{for(let t of x)if(-1!==e.indexOf(t))return c()})}function u(){c();let e=r.default.useContext(o.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}let h=a.suspense?function(e,t){return u(),r.default.createElement(a.lazy,s({},e,{ref:t}))}:function(e,t){u();let s=l(i.subscribe,i.getCurrentValue,i.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),r.default.useMemo(()=>{var t;return s.loading||s.error?r.default.createElement(a.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:i.retry}):s.loaded?r.default.createElement((t=s.loaded)&&t.__esModule?t.default:t,e):null},[e,s])};return h.preload=()=>c(),h.displayName="LoadableComponent",r.default.forwardRef(h)}(c,e)}function u(e,t){let a=[];for(;e.length;){let s=e.pop();a.push(s(t))}return Promise.all(a).then(()=>{if(e.length)return u(e,t)})}x.preloadAll=()=>new Promise((e,t)=>{u(i).then(e,t)}),x.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let a=()=>(d=!0,t());u(n,e).then(a,a)})},window.__NEXT_PRELOADREADY=x.preloadReady,t.default=x},10792:function(e,t,a){"use strict";var s=a(85893),r=a(79072);let o=e=>{let{title:t,subtitle:a}=e;return(0,s.jsxs)(r.ZP,{item:!0,xs:12,children:[t,a||null]})};t.Z=o},52536:function(e,t,a){"use strict";var s=a(5152),r=a.n(s);let o=r()(()=>Promise.all([a.e(4814),a.e(7229)]).then(a.bind(a,47229)),{loadableGenerated:{webpack:()=>[47229]},ssr:!1});t.Z=o},20037:function(e,t,a){"use strict";var s=a(67074);let r=(0,s.ZP)("div")(e=>{let{theme:t}=e;return{"& .apexcharts-canvas":{"& line[stroke='transparent']":{display:"none"},"& .apexcharts-tooltip":{boxShadow:t.shadows[3],borderColor:t.palette.divider,background:t.palette.background.paper,"& .apexcharts-tooltip-title":{fontWeight:600,borderColor:t.palette.divider,background:t.palette.background.paper},"&.apexcharts-theme-light":{color:t.palette.text.primary},"&.apexcharts-theme-dark":{color:t.palette.common.white},"& .apexcharts-tooltip-series-group:first-of-type":{paddingBottom:0},"& .bar-chart":{padding:t.spacing(2,2.5)}},"& .apexcharts-xaxistooltip":{borderColor:t.palette.divider,background:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg,"&:after":{borderBottomColor:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg},"&:before":{borderBottomColor:t.palette.divider}},"& .apexcharts-yaxistooltip":{borderColor:t.palette.divider,background:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg,"&:after":{borderLeftColor:"light"===t.palette.mode?t.palette.grey[50]:t.palette.customColors.bodyBg},"&:before":{borderLeftColor:t.palette.divider}},"& .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text":{color:t.palette.text.primary},"& .apexcharts-yaxis .apexcharts-yaxis-texts-g .apexcharts-yaxis-label":{textAnchor:"rtl"===t.direction?"start":void 0},"& .apexcharts-text, & .apexcharts-tooltip-text, & .apexcharts-datalabel-label, & .apexcharts-datalabel, & .apexcharts-xaxistooltip-text, & .apexcharts-yaxistooltip-text, & .apexcharts-legend-text":{fontFamily:"".concat(t.typography.fontFamily," !important")},"& .apexcharts-pie-label":{filter:"none",fill:t.palette.common.white},"& .apexcharts-marker":{boxShadow:"none"}}}});t.Z=r},5804:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ee}});var s=a(85893),r=a(79072),o=a(1163),l=a(29630),i=a(10792),n=a(20037),d=a(64488),c=a(67294),p=a(49837),x=a(67836),u=a(62097),h=a(59742),m=a(91359),f=a(9041),b=a(42298),y=a(9198),g=a.n(y),j=a(21609),Z=a(52536);let w=()=>{let[e,t]=(0,c.useState)(null),[a,r]=(0,c.useState)(null),o=(0,u.Z)(),l={chart:{parentHeightOffset:0,toolbar:{show:!1}},colors:["#00cfe8"],dataLabels:{enabled:!1},plotOptions:{bar:{borderRadius:8,barHeight:"30%",horizontal:!0,startingShape:"rounded"}},grid:{borderColor:o.palette.divider,xaxis:{lines:{show:!1}},padding:{top:-10}},yaxis:{labels:{style:{colors:o.palette.text.disabled}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:o.palette.divider},categories:["MON, 11","THU, 14","FRI, 15","MON, 18","WED, 20","FRI, 21","MON, 23"],labels:{style:{colors:o.palette.text.disabled}}}},i=(0,c.forwardRef)((e,t)=>{let a=null!==e.start?(0,b.default)(e.start,"MM/dd/yyyy"):"",r=null!==e.end?" - ".concat((0,b.default)(e.end,"MM/dd/yyyy")):null,o="".concat(a).concat(null!==r?r:"");return(0,s.jsx)(x.Z,{...e,size:"small",value:o,inputRef:t,InputProps:{startAdornment:(0,s.jsx)(f.Z,{position:"start",children:(0,s.jsx)(j.Z,{icon:"mdi:bell-outline"})}),endAdornment:(0,s.jsx)(f.Z,{position:"end",children:(0,s.jsx)(j.Z,{icon:"mdi:chevron-down"})})}})}),n=e=>{let[a,s]=e;r(a),t(s)};return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"Data Science",subheader:"$74,382.72",sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,s.jsx)(g(),{selectsRange:!0,endDate:e,id:"apexchart-bar",selected:a,startDate:a,onChange:n,placeholderText:"Click to select a date",customInput:(0,s.jsx)(i,{start:a,end:e})})}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(Z.Z,{type:"bar",height:400,options:l,series:[{data:[700,350,480,600,210,550,150]}]})})]})},v={series1:"#ab7efd",series2:"#b992fe",series3:"#e0cffe"},k=[{name:"Visits",data:[100,120,90,170,130,160,140,240,220,180,270,280,375]},{name:"Clicks",data:[60,80,70,110,80,100,90,180,160,140,200,220,275]},{name:"Sales",data:[20,40,30,70,40,60,50,140,120,100,140,180,220]}],C=()=>{let[e,t]=(0,c.useState)(null),[a,r]=(0,c.useState)(null),o=(0,u.Z)(),l={chart:{parentHeightOffset:0,toolbar:{show:!1}},tooltip:{shared:!1},dataLabels:{enabled:!1},stroke:{show:!1,curve:"straight"},legend:{position:"top",horizontalAlign:"left",labels:{colors:o.palette.text.secondary},markers:{offsetY:1,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},colors:[v.series3,v.series2,v.series1],fill:{opacity:1,type:"solid"},grid:{show:!0,borderColor:o.palette.divider,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:o.palette.text.disabled}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:o.palette.divider},crosshairs:{stroke:{color:o.palette.divider}},labels:{style:{colors:o.palette.text.disabled}},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12"]}},i=(0,c.forwardRef)((e,t)=>{let a=null!==e.start?(0,b.default)(e.start,"MM/dd/yyyy"):"",r=null!==e.end?" - ".concat((0,b.default)(e.end,"MM/dd/yyyy")):null,o="".concat(a).concat(null!==r?r:"");return(0,s.jsx)(x.Z,{...e,size:"small",value:o,inputRef:t,InputProps:{startAdornment:(0,s.jsx)(f.Z,{position:"start",children:(0,s.jsx)(j.Z,{icon:"mdi:bell-outline"})}),endAdornment:(0,s.jsx)(f.Z,{position:"end",children:(0,s.jsx)(j.Z,{icon:"mdi:chevron-down"})})}})}),n=e=>{let[a,s]=e;r(a),t(s)};return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"Line Chart",subheader:"Commercial networks",subheaderTypographyProps:{sx:{color:e=>"".concat(e.palette.text.disabled," !important")}},sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,s.jsx)(g(),{selectsRange:!0,endDate:e,id:"apexchart-area",selected:a,startDate:a,onChange:n,placeholderText:"Click to select a date",customInput:(0,s.jsx)(i,{start:a,end:e})})}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(Z.Z,{type:"area",height:400,options:l,series:k})})]})};var _=a(61953),M=a(7071);let D=[{data:[280,200,220,180,270,250,70,90,200,150,160,100,150,100,50]}],S=()=>{let e=(0,u.Z)(),t={chart:{parentHeightOffset:0,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#ff9f43"],stroke:{curve:"straight"},dataLabels:{enabled:!1},markers:{strokeWidth:7,strokeOpacity:1,colors:["#ff9f43"],strokeColors:["#fff"]},grid:{padding:{top:-10},borderColor:e.palette.divider,xaxis:{lines:{show:!0}}},tooltip:{custom:e=>"<div class='bar-chart'>\n          <span>".concat(e.series[e.seriesIndex][e.dataPointIndex],"%</span>\n        </div>")},yaxis:{labels:{style:{colors:e.palette.text.disabled}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:e.palette.divider},crosshairs:{stroke:{color:e.palette.divider}},labels:{style:{colors:e.palette.text.disabled}},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12","20/12","21/12"]}};return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"Balance",subheader:"Commercial networks & enterprises",sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,s.jsxs)(_.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(l.Z,{variant:"h6",sx:{mr:5},children:"$221,267"}),(0,s.jsx)(M.Z,{skin:"light",color:"success",sx:{fontWeight:500,borderRadius:1,fontSize:"0.875rem"},label:(0,s.jsxs)(_.Z,{sx:{display:"flex",alignItems:"center","& svg":{mr:1}},children:[(0,s.jsx)(j.Z,{icon:"mdi:arrow-up",fontSize:"1rem"}),(0,s.jsx)("span",{children:"22%"})]})})]})}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(Z.Z,{type:"line",height:400,options:t,series:D})})]})},O={series1:"#9b88fa",series2:"#ffa1a1"},P=[{name:"iPhone 12",data:[41,64,81,60,42,42,33,23]},{name:"Samsung s20",data:[65,46,42,25,58,63,76,43]}],z=()=>{let e=(0,u.Z)(),t={chart:{parentHeightOffset:0,toolbar:{show:!1},dropShadow:{top:1,blur:8,left:1,opacity:.2,enabled:!1}},markers:{size:0},fill:{opacity:[1,.8]},colors:[O.series1,O.series2],stroke:{width:0,show:!1},legend:{labels:{colors:e.palette.text.secondary},markers:{offsetX:-3},itemMargin:{vertical:3,horizontal:10}},plotOptions:{radar:{polygons:{strokeColors:e.palette.divider,connectorColors:e.palette.divider}}},grid:{show:!1,padding:{top:-20,bottom:-20}},yaxis:{show:!1},xaxis:{categories:["Battery","Brand","Camera","Memory","Storage","Display","OS","Price"],labels:{style:{colors:[e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled]}}}};return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"Mobile Comparison"}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(Z.Z,{type:"radar",height:400,options:t,series:P})})]})},R={series1:"#fdd835",series2:"#00d4bd",series3:"#826bf8",series4:"#40CDFA",series5:"#ffa1a1"},T=()=>{let e=(0,u.Z)(),t={stroke:{width:0},labels:["Operational","Networking","Hiring","R&D"],colors:[R.series1,R.series5,R.series3,R.series2],dataLabels:{enabled:!0,formatter:e=>"".concat(parseInt(e,10),"%")},legend:{position:"bottom",markers:{offsetX:-3},labels:{colors:e.palette.text.secondary},itemMargin:{vertical:3,horizontal:10}},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1.2rem"},value:{fontSize:"1.2rem",color:e.palette.text.secondary,formatter:e=>"".concat(parseInt(e,10))},total:{show:!0,fontSize:"1.2rem",label:"Operational",formatter:()=>"31%",color:e.palette.text.primary}}}}},responsive:[{breakpoint:992,options:{chart:{height:380},legend:{position:"bottom"}}},{breakpoint:576,options:{chart:{height:320},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1rem"},value:{fontSize:"1rem"},total:{fontSize:"1rem"}}}}}}}]};return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"Expense Ratio",subheader:"Spending on various categories",subheaderTypographyProps:{sx:{color:e=>"".concat(e.palette.text.disabled," !important")}}}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(Z.Z,{type:"donut",height:400,options:t,series:[85,16,50,50]})})]})},F={bg:"#f8d3ff",series1:"#826af9",series2:"#d2b0ff"},A=[{name:"Apple",data:[90,120,55,100,80,125,175,70,88]},{name:"Samsung",data:[85,100,30,40,95,90,30,110,62]}],H=()=>{let e=(0,u.Z)(),[t,a]=(0,c.useState)(null),[r,o]=(0,c.useState)(null),l={chart:{offsetX:-10,stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},fill:{opacity:1},dataLabels:{enabled:!1},colors:[F.series1,F.series2],legend:{position:"top",horizontalAlign:"left",labels:{colors:e.palette.text.secondary},markers:{offsetY:1,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},stroke:{show:!0,colors:["transparent"]},plotOptions:{bar:{columnWidth:"15%",colors:{backgroundBarRadius:10,backgroundBarColors:[F.bg,F.bg,F.bg,F.bg,F.bg]}}},grid:{borderColor:e.palette.divider,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:e.palette.text.disabled}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:e.palette.divider},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12"],crosshairs:{stroke:{color:e.palette.divider}},labels:{style:{colors:e.palette.text.disabled}}},responsive:[{breakpoint:600,options:{plotOptions:{bar:{columnWidth:"35%"}}}}]},i=(0,c.forwardRef)((e,t)=>{let a=null!==e.start?(0,b.default)(e.start,"MM/dd/yyyy"):"",r=null!==e.end?" - ".concat((0,b.default)(e.end,"MM/dd/yyyy")):null,o="".concat(a).concat(null!==r?r:"");return(0,s.jsx)(x.Z,{...e,size:"small",value:o,inputRef:t,InputProps:{startAdornment:(0,s.jsx)(f.Z,{position:"start",children:(0,s.jsx)(j.Z,{icon:"mdi:bell-outline"})}),endAdornment:(0,s.jsx)(f.Z,{position:"end",children:(0,s.jsx)(j.Z,{icon:"mdi:chevron-down"})})}})}),n=e=>{let[t,s]=e;o(t),a(s)};return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"Data Science",sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,s.jsx)(g(),{selectsRange:!0,endDate:t,selected:r,id:"apexchart-column",startDate:r,onChange:n,placeholderText:"Click to select a date",customInput:(0,s.jsx)(i,{start:r,end:t})})}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(Z.Z,{type:"bar",height:400,options:l,series:A})})]})};var B=a(87054),I=a(85390);let Y={series1:"#ff9f43",series2:"#7367f0",series3:"#28c76f"},L=[{name:"Angular",data:[{x:5.4,y:170},{x:5.4,y:100},{x:6.3,y:170},{x:5.7,y:140},{x:5.9,y:130},{x:7,y:150},{x:8,y:120},{x:9,y:170},{x:10,y:190},{x:11,y:220},{x:12,y:170},{x:13,y:230}]},{name:"Vue",data:[{x:14,y:220},{x:15,y:280},{x:16,y:230},{x:18,y:320},{x:17.5,y:280},{x:19,y:250},{x:20,y:350},{x:20.5,y:320},{x:20,y:320},{x:19,y:280},{x:17,y:280},{x:22,y:300},{x:18,y:120}]},{name:"React",data:[{x:14,y:290},{x:13,y:190},{x:20,y:220},{x:21,y:350},{x:21.5,y:290},{x:22,y:220},{x:23,y:140},{x:19,y:400},{x:20,y:200},{x:22,y:90},{x:20,y:120}]}],E=()=>{let[e,t]=(0,c.useState)("daily"),a=(0,u.Z)(),r=(e,a)=>{t(a)},o={chart:{parentHeightOffset:0,toolbar:{show:!1},zoom:{type:"xy",enabled:!0}},legend:{position:"top",horizontalAlign:"left",markers:{offsetX:-3},labels:{colors:a.palette.text.secondary},itemMargin:{vertical:3,horizontal:10}},colors:[Y.series1,Y.series2,Y.series3],grid:{borderColor:a.palette.divider,xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:a.palette.text.disabled}}},xaxis:{tickAmount:10,axisBorder:{show:!1},axisTicks:{color:a.palette.divider},crosshairs:{stroke:{color:a.palette.divider}},labels:{style:{colors:a.palette.text.disabled},formatter:e=>parseFloat(e).toFixed(1)}}};return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"New Technologies Data",sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,s.jsxs)(I.Z,{exclusive:!0,value:e,onChange:r,children:[(0,s.jsx)(B.Z,{value:"daily",children:"Daily"}),(0,s.jsx)(B.Z,{value:"monthly",children:"Monthly"}),(0,s.jsx)(B.Z,{value:"yearly",children:"Yearly"})]})}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(Z.Z,{type:"scatter",height:400,options:o,series:L})})]})};var N=a(4560);let X=(e,t)=>{let a=0,s=[];for(;a<e;){let r="w".concat((a+1).toString()),o=Math.floor(Math.random()*(t.max-t.min+1))+t.min;s.push({x:r,y:o}),a+=1}return s},W=[{name:"SUN",data:X(24,{min:0,max:60})},{name:"MON",data:X(24,{min:0,max:60})},{name:"TUE",data:X(24,{min:0,max:60})},{name:"WED",data:X(24,{min:0,max:60})},{name:"THU",data:X(24,{min:0,max:60})},{name:"FRI",data:X(24,{min:0,max:60})},{name:"SAT",data:X(24,{min:0,max:60})}],V=()=>{let e=(0,u.Z)(),t={chart:{parentHeightOffset:0,toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{colors:["light"===e.palette.mode?e.palette.background.paper:e.palette.customColors.bodyBg]},legend:{position:"bottom",labels:{colors:e.palette.text.secondary},markers:{offsetY:0,offsetX:-3},itemMargin:{vertical:3,horizontal:10}},plotOptions:{heatmap:{enableShades:!1,colorScale:{ranges:[{to:10,from:0,name:"0-10",color:"#b9b3f8"},{to:20,from:11,name:"10-20",color:"#aba4f6"},{to:30,from:21,name:"20-30",color:"#9d95f5"},{to:40,from:31,name:"30-40",color:"#8f85f3"},{to:50,from:41,name:"40-50",color:"#8176f2"},{to:60,from:51,name:"50-60",color:"#7367f0"}]}}},grid:{padding:{top:-20}},yaxis:{labels:{style:{colors:e.palette.text.disabled}}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}}};return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"Daily Sales States",action:(0,s.jsx)(N.Z,{iconProps:{fontSize:20},options:["Last 28 Days","Last Month","Last Year"],iconButtonProps:{size:"small",className:"card-more-options",sx:{color:"text.secondary"}}})}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(Z.Z,{type:"heatmap",height:400,options:t,series:W})})]})};var G=a(5026);let U={series1:"#fdd835",series2:"#40CDFA",series3:"#00d4bd",series4:"#7367f0",series5:"#FFA1A1"},$=()=>{let e=(0,u.Z)(),t={stroke:{lineCap:"round"},labels:["Comments","Replies","Shares"],legend:{show:!0,position:"bottom",labels:{colors:e.palette.text.secondary},markers:{offsetX:-3},itemMargin:{vertical:3,horizontal:10}},colors:[U.series1,U.series2,U.series4],plotOptions:{radialBar:{hollow:{size:"30%"},track:{margin:15,background:(0,G.E)(e.palette.customColors.trackBg,1)},dataLabels:{name:{fontSize:"2rem"},value:{fontSize:"1rem",color:e.palette.text.secondary},total:{show:!0,fontWeight:400,label:"Comments",fontSize:"1.125rem",color:e.palette.text.primary,formatter:function(e){let t=e.globals.seriesTotals.reduce((e,t)=>e+t,0)/e.globals.series.length;return t%1==0?t+"%":t.toFixed(2)+"%"}}}}},grid:{padding:{top:-35,bottom:-30}}};return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"Statistics"}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(Z.Z,{type:"radialBar",height:400,options:t,series:[80,50,35]})})]})},q={series1:"#28c76f",series2:"#ea5455"},J=[{data:[{x:"7/12/".concat(new Date().getFullYear()),y:[150,170,50,100]},{x:"8/12/".concat(new Date().getFullYear()),y:[200,400,170,330]},{x:"9/12/".concat(new Date().getFullYear()),y:[330,340,250,280]},{x:"10/12/".concat(new Date().getFullYear()),y:[300,330,200,320]},{x:"11/12/".concat(new Date().getFullYear()),y:[320,450,280,350]},{x:"12/12/".concat(new Date().getFullYear()),y:[300,350,80,250]},{x:"13/12/".concat(new Date().getFullYear()),y:[200,330,170,300]},{x:"14/12/".concat(new Date().getFullYear()),y:[200,220,70,130]},{x:"15/12/".concat(new Date().getFullYear()),y:[220,270,180,250]},{x:"16/12/".concat(new Date().getFullYear()),y:[200,250,80,100]},{x:"17/12/".concat(new Date().getFullYear()),y:[150,170,50,120]},{x:"18/12/".concat(new Date().getFullYear()),y:[110,450,10,420]},{x:"19/12/".concat(new Date().getFullYear()),y:[400,480,300,320]},{x:"20/12/".concat(new Date().getFullYear()),y:[380,480,350,450]}]}],K=()=>{let[e,t]=(0,c.useState)(null),[a,r]=(0,c.useState)(null),o=(0,u.Z)(),l={chart:{parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"40%"},candlestick:{colors:{upward:q.series1,downward:q.series2}}},grid:{padding:{top:-10},borderColor:o.palette.divider,xaxis:{lines:{show:!0}}},yaxis:{tooltip:{enabled:!0},crosshairs:{stroke:{color:o.palette.divider}},labels:{style:{colors:o.palette.text.disabled}}},xaxis:{type:"datetime",axisBorder:{show:!1},axisTicks:{color:o.palette.divider},crosshairs:{stroke:{color:o.palette.divider}},labels:{style:{colors:o.palette.text.disabled}}}},i=(0,c.forwardRef)((e,t)=>{let a=null!==e.start?(0,b.default)(e.start,"MM/dd/yyyy"):"",r=null!==e.end?" - ".concat((0,b.default)(e.end,"MM/dd/yyyy")):null,o="".concat(a).concat(null!==r?r:"");return(0,s.jsx)(x.Z,{...e,size:"small",value:o,inputRef:t,InputProps:{startAdornment:(0,s.jsx)(f.Z,{position:"start",children:(0,s.jsx)(j.Z,{icon:"mdi:bell-outline"})}),endAdornment:(0,s.jsx)(f.Z,{position:"end",children:(0,s.jsx)(j.Z,{icon:"mdi:chevron-down"})})}})}),n=e=>{let[a,s]=e;r(a),t(s)};return(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"Stocks Prices",subheader:"$50,863.98",sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,s.jsx)(g(),{selectsRange:!0,endDate:e,selected:a,startDate:a,onChange:n,id:"apexchart-candlestick",placeholderText:"Click to select a date",customInput:(0,s.jsx)(i,{start:a,end:e})})}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(Z.Z,{type:"candlestick",height:400,options:l,series:J})})]})},Q=()=>(0,s.jsx)(n.Z,{children:(0,s.jsx)(d.Z,{children:(0,s.jsxs)(r.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,s.jsx)(i.Z,{title:(0,s.jsx)(l.Z,{variant:"h5",children:(0,s.jsx)(o.Z,{href:"https://github.com/apexcharts/react-apexcharts",target:"_blank",children:"React ApexCharts"})}),subtitle:(0,s.jsx)(l.Z,{variant:"body2",children:"React Component for ApexCharts"})}),(0,s.jsx)(r.ZP,{item:!0,xs:12,children:(0,s.jsx)(C,{})}),(0,s.jsx)(r.ZP,{item:!0,xs:12,children:(0,s.jsx)(H,{})}),(0,s.jsx)(r.ZP,{item:!0,xs:12,children:(0,s.jsx)(E,{})}),(0,s.jsx)(r.ZP,{item:!0,xs:12,children:(0,s.jsx)(S,{})}),(0,s.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)(w,{})}),(0,s.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)(K,{})}),(0,s.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)(V,{})}),(0,s.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)($,{})}),(0,s.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)(z,{})}),(0,s.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)(T,{})})]})})});var ee=Q},95828:function(){},5152:function(e,t,a){e.exports=a(37645)}},function(e){e.O(0,[5307,9198,4661,4488,9774,2888,179],function(){return e(e.s=58828)}),_N_E=e.O()}]);