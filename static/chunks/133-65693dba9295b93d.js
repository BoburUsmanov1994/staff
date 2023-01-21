(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{86070:function(t,n,r){"use strict";r.d(n,{Z:function(){return O}});var e=r(63366),i=r(87462),a=r(67294),o=r(86010),u=r(94780),s=r(70917),c=r(41796),l=r(36622),d=r(62097),f=r(67074),p=r(78884),v=r(1588),m=r(34867);function h(t){return(0,m.Z)("MuiLinearProgress",t)}(0,v.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g=r(85893);let b=["className","color","value","valueBuffer","variant"],y=t=>t,k,x,w,C,M,T,Z=(0,s.F4)(k||(k=y`
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
`)),P=(0,s.F4)(x||(x=y`
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
`)),I=(0,s.F4)(w||(w=y`
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
`)),E=t=>{let{classes:n,variant:r,color:e}=t,i={root:["root",`color${(0,l.Z)(e)}`,r],dashed:["dashed",`dashedColor${(0,l.Z)(e)}`],bar1:["bar",`barColor${(0,l.Z)(e)}`,("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&`barColor${(0,l.Z)(e)}`,"buffer"===r&&`color${(0,l.Z)(e)}`,("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,u.Z)(i,h,n)},z=(t,n)=>"inherit"===n?"currentColor":t.vars?t.vars.palette.LinearProgress[`${n}Bg`]:"light"===t.palette.mode?(0,c.$n)(t.palette[n].main,.62):(0,c._j)(t.palette[n].main,.5),L=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(t,n){let{ownerState:r}=t;return[n.root,n[`color${(0,l.Z)(r.color)}`],n[r.variant]]}})(({ownerState:t,theme:n})=>(0,i.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:z(n,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})),S=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(t,n){let{ownerState:r}=t;return[n.dashed,n[`dashedColor${(0,l.Z)(r.color)}`]]}})(({ownerState:t,theme:n})=>{let r=z(n,t.color);return(0,i.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,s.iv)(C||(C=y`
    animation: ${0} 3s infinite linear;
  `),I)),$=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(t,n){let{ownerState:r}=t;return[n.bar,n[`barColor${(0,l.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&n.bar1Indeterminate,"determinate"===r.variant&&n.bar1Determinate,"buffer"===r.variant&&n.bar1Buffer]}})(({ownerState:t,theme:n})=>(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":(n.vars||n).palette[t.color].main},"determinate"===t.variant&&{transition:"transform .4s linear"},"buffer"===t.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:t})=>("indeterminate"===t.variant||"query"===t.variant)&&(0,s.iv)(M||(M=y`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),Z)),D=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(t,n){let{ownerState:r}=t;return[n.bar,n[`barColor${(0,l.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&n.bar2Indeterminate,"buffer"===r.variant&&n.bar2Buffer]}})(({ownerState:t,theme:n})=>(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":(n.vars||n).palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:z(n,t.color),transition:"transform .4s linear"}),({ownerState:t})=>("indeterminate"===t.variant||"query"===t.variant)&&(0,s.iv)(T||(T=y`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),P)),A=a.forwardRef(function(t,n){let r=(0,p.Z)({props:t,name:"MuiLinearProgress"}),{className:a,color:u="primary",value:s,valueBuffer:c,variant:l="indeterminate"}=r,f=(0,e.Z)(r,b),v=(0,i.Z)({},r,{color:u,variant:l}),m=E(v),h=(0,d.Z)(),y={},k={bar1:{},bar2:{}};if(("determinate"===l||"buffer"===l)&&void 0!==s){y["aria-valuenow"]=Math.round(s),y["aria-valuemin"]=0,y["aria-valuemax"]=100;let x=s-100;"rtl"===h.direction&&(x=-x),k.bar1.transform=`translateX(${x}%)`}if("buffer"===l&&void 0!==c){let w=(c||0)-100;"rtl"===h.direction&&(w=-w),k.bar2.transform=`translateX(${w}%)`}return(0,g.jsxs)(L,(0,i.Z)({className:(0,o.Z)(m.root,a),ownerState:v,role:"progressbar"},y,{ref:n},f,{children:["buffer"===l?(0,g.jsx)(S,{className:m.dashed,ownerState:v}):null,(0,g.jsx)($,{className:m.bar1,ownerState:v,style:k.bar1}),"determinate"===l?null:(0,g.jsx)(D,{className:m.bar2,ownerState:v,style:k.bar2})]}))});var O=A},82730:function(t,n,r){"use strict";var e=r(67294);function i(t){return Array.prototype.slice.call(t)}function a(t,n){var r=Math.floor(t);return r===n||r+1===n?t:n}function o(){return Date.now()}function u(t,n,r){if(n="data-keen-slider-"+n,null===r)return t.removeAttribute(n);t.setAttribute(n,r||"")}function s(t,n){return n=n||document,"function"==typeof t&&(t=t(n)),Array.isArray(t)?t:"string"==typeof t?i(n.querySelectorAll(t)):t instanceof HTMLElement?[t]:t instanceof NodeList?i(t):[]}function c(t){t.raw&&(t=t.raw),t.cancelable&&!t.defaultPrevented&&t.preventDefault()}function l(t){t.raw&&(t=t.raw),t.stopPropagation&&t.stopPropagation()}function d(){var t=[];return{add:function(n,r,e,i){n.addListener?n.addListener(e):n.addEventListener(r,e,i),t.push([n,r,e,i])},input:function(t,n,r,e){this.add(t,n,function(t){t.nativeEvent&&(t=t.nativeEvent);var n=t.changedTouches||[],e=t.targetTouches||[],i=t.detail&&t.detail.x?t.detail:null;return r({id:i?i.identifier?i.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",idChanged:i?i.identifier?i.identifier:"i":n[0]?n[0]?n[0].identifier:"e":"d",raw:t,x:i&&i.x?i.x:e[0]?e[0].screenX:i?i.x:t.pageX,y:i&&i.y?i.y:e[0]?e[0].screenY:i?i.y:t.pageY})},e)},purge:function(){t.forEach(function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])}),t=[]}}}function f(t,n,r){return Math.min(Math.max(t,n),r)}function p(t){return(t>0?1:0)-(t<0?1:0)||+t}function v(t){var n=t.getBoundingClientRect();return{height:a(n.height,t.offsetHeight),width:a(n.width,t.offsetWidth)}}function m(t,n,r,e){var i=t&&t[n];return null==i?r:e&&"function"==typeof i?i():i}function h(t){return Math.round(1e6*t)/1e6}var g=function(){return(g=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)};function b(t,n,r){if(r||2==arguments.length)for(var e,i=0,a=n.length;i<a;i++)!e&&i in n||(e||(e=Array.prototype.slice.call(n,0,i)),e[i]=n[i]);return t.concat(e||Array.prototype.slice.call(n))}function y(t){var n,r,e,i,a,o,u,s;function c(t){return 1-Math.pow(1-t,3)}function l(){return e?t.track.velocity():0}function d(t,n){void 0===n&&(n=1e3);var r=147e-9+(t=Math.abs(t))/n;return{dist:Math.pow(t,2)/r,dur:t/r}}function v(){var n=t.track.details;n&&(a=n.min,o=n.max,u=n.minIdx,s=n.maxIdx)}function m(){t.animator.stop()}t.on("updated",v),t.on("optionsChanged",v),t.on("created",v),t.on("dragStarted",function(){e=!1,m(),n=r=t.track.details.abs}),t.on("dragChecked",function(){e=!0}),t.on("dragEnded",function(){var e,v,h,g,b,y,k=t.options.mode;"snap"===k&&(e=t.track,h=(v=t.track.details).position,g=p(l()),(h>o||h<a)&&(g=0),b=n+g,0===v.slides[e.absToRel(b)].portion&&(b-=g),n!==r&&(b=r),p(e.idxToDist(b,!0))!==g&&(b+=g),b=f(b,u,s),y=e.idxToDist(b,!0),t.animator.start([{distance:y,duration:500,easing:function(t){return 1+--t*t*t*t*t}}])),"free"!==k&&"free-snap"!==k||function(){m();var n="free-snap"===t.options.mode,r=t.track,e=l();i=p(e);var v=t.track.details,h=[];if(e||!n){var g=d(e),b=g.dist,y=g.dur;if(y*=2,b*=i,n){var k=r.idxToDist(r.distToIdx(b),!0);k&&(b=k)}h.push({distance:b,duration:y,easing:c});var x=v.position,w=x+b;if(w<a||w>o){var C=w<a?a-x:o-x,M=0,T=e;if(p(C)===i){var Z=Math.min(Math.abs(C)/Math.abs(b),1),P=(1-Math.pow(1-Z,1/3))*y;h[0].earlyExit=P,T=e*(1-Z)}else h[0].earlyExit=0,M+=C;var I=d(T,100),E=I.dist*i;t.options.rubberband&&(h.push({distance:E,duration:2*I.dur,easing:c}),h.push({distance:-E+M,duration:500,easing:c}))}t.animator.start(h)}else t.moveToIdx(f(v.abs,u,s),!0,{duration:500,easing:function(t){return 1+--t*t*t*t*t}})}()}),t.on("dragged",function(){r=t.track.details.abs})}function k(t){var n,r,e,i,a,o,u,v,m,h,g,b,y,k,x,w,C,M,T=d();function Z(n){if(o&&v===n.id){var s=z(n);if(m){if(!E(n))return I(n);h=s,m=!1,t.emit("dragChecked")}if(w)return h=s;c(n);var d=function(n){if(C===-1/0&&M===1/0)return n;var e=t.track.details,o=e.length,u=e.position,s=f(n,C-u,M-u);if(0===o)return 0;if(!t.options.rubberband)return s;if(u<=M&&u>=C||u<C&&r>0||u>M&&r<0)return n;var c=Math.max(0,1-Math.abs((u<C?u-C:u-M)/o*(i*o))/a*2);return c*c*n}(u(h-s)/i*e);r=p(d);var y=t.track.details.position;(y>C&&y<M||y===C&&r>0||y===M&&r<0)&&l(n),g+=d,!b&&Math.abs(g*i)>5&&(b=!0),t.track.add(d),h=s,t.emit("dragged")}}function P(n){!o&&t.track.details&&t.track.details.length&&(g=0,o=!0,b=!1,m=!0,v=n.id,E(n),h=z(n),t.emit("dragStarted"))}function I(n){o&&v===n.idChanged&&(o=!1,t.emit("dragEnded"))}function E(t){var n=L(),r=n?t.y:t.x,e=n?t.x:t.y,i=void 0!==y&&void 0!==k&&Math.abs(k-e)<=Math.abs(y-r);return y=r,k=e,i}function z(t){return L()?t.y:t.x}function L(){return t.options.vertical}function S(){i=t.size,a=L()?window.innerHeight:window.innerWidth;var n=t.track.details;n&&(C=n.min,M=n.max)}function $(t){b&&(l(t),c(t))}function D(){if(T.purge(),t.options.drag&&!t.options.disabled){u="function"==typeof(i=t.options.dragSpeed||1)?i:function(t){return t*i},e=t.options.rtl?-1:1,S(),n=t.container,r="data-keen-slider-clickable",s("[".concat(r,"]:not([").concat(r,"=false])"),n).map(function(t){T.add(t,"dragstart",l),T.add(t,"mousedown",l),T.add(t,"touchstart",l)}),T.add(n,"dragstart",function(t){c(t)}),T.add(n,"click",$,{capture:!0}),T.input(n,"ksDragStart",P),T.input(n,"ksDrag",Z),T.input(n,"ksDragEnd",I),T.input(n,"mousedown",P),T.input(n,"mousemove",Z),T.input(n,"mouseleave",I),T.input(n,"mouseup",I),T.input(n,"touchstart",P,{passive:!0}),T.input(n,"touchmove",Z,{passive:!1}),T.input(n,"touchend",I),T.input(n,"touchcancel",I),T.add(window,"wheel",function(t){o&&c(t)});var r,i,a="data-keen-slider-scrollable";s("[".concat(a,"]:not([").concat(a,"=false])"),t.container).map(function(t){var n;T.input(t,"touchstart",function(t){n=z(t),w=!0,x=!0},{passive:!0}),T.input(t,"touchmove",function(r){var e=L(),i=e?t.scrollHeight-t.clientHeight:t.scrollWidth-t.clientWidth,a=n-z(r),o=e?t.scrollTop:t.scrollLeft,u=e&&"scroll"===t.style.overflowY||!e&&"scroll"===t.style.overflowX;if(n=z(r),(a<0&&o>0||a>0&&o<i)&&x&&u)return w=!0;x=!1,c(r),w=!1}),T.input(t,"touchend",function(){w=!1})})}}t.on("updated",S),t.on("optionsChanged",D),t.on("created",D),t.on("destroyed",T.purge)}function x(t){var n,r,e=null;function i(n,r,e){t.animator.active?o(n,r,e):requestAnimationFrame(function(){return o(n,r,e)})}function a(){i(!1,!1,r)}function o(r,i,a){var o=0,u=t.size,l=t.track.details;if(l&&n){var d=l.slides;n.forEach(function(t,n){if(r)!e&&i&&s(t,null,a),c(t,null,a);else{if(!d[n])return;var l=d[n].size*u;!e&&i&&s(t,l,a),c(t,d[n].distance*u-o,a),o+=l}})}}function u(n){return"performance"===t.options.renderMode?Math.round(n):n}function s(t,n,r){var e=r?"height":"width";null!==n&&(n=u(n)+"px"),t.style["min-"+e]=n,t.style["max-"+e]=n}function c(t,n,r){if(null!==n){n=u(n);var e=r?n:0;n="translate3d(".concat(r?0:n,"px, ").concat(e,"px, 0)")}t.style.transform=n,t.style["-webkit-transform"]=n}function l(){n&&(o(!0,!0,r),n=null),t.on("detailsChanged",a,!0)}function d(){i(!1,!0,r)}function f(){l(),r=t.options.vertical,t.options.disabled||"custom"===t.options.renderMode||(e="auto"===m(t.options.slides,"perView",null),t.on("detailsChanged",a),(n=t.slides).length&&d())}t.on("created",f),t.on("optionsChanged",f),t.on("beforeOptionsChanged",function(){l()}),t.on("updated",d),t.on("destroyed",l)}var w=function(t,n,r){try{var e,i,a,c;return i=b([(e={drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"},function(n){var r,i,a,o,c,l,f=d();function p(t){var r;u(n.container,"reverse","rtl"!==(r=n.container,window.getComputedStyle(r,null).getPropertyValue("direction"))||t?null:""),u(n.container,"v",n.options.vertical&&!t?"":null),u(n.container,"disabled",n.options.disabled&&!t?"":null)}function h(){b()&&w()}function b(){var t=null;if(o.forEach(function(n){n.matches&&(t=n.__media)}),t===r)return!1;r||n.emit("beforeOptionsChanged"),r=t;var e=t?a.breakpoints[t]:a;return n.options=g(g({},a),e),p(),P(),I(),M(),!0}function y(){return n.options.trackConfig.length}function k(t){for(var u in r=!1,a=g(g({},e),t),f.purge(),i=n.size,o=[],a.breakpoints||[]){var s=window.matchMedia(u);s.__media=u,o.push(s),f.add(s,"change",h)}f.add(window,"orientationchange",Z),f.add(window,"resize",T),b()}function x(t){n.animator.stop();var r=n.track.details;n.track.init(null!=t?t:r?r.abs:0)}function w(t){x(t),n.emit("optionsChanged")}function C(t,r){if(t)return k(t),void w(r);P(),I();var e=y();M(),y()!==e?w(r):x(r),n.emit("updated")}function M(){var t=n.options.slides;if("function"==typeof t)return n.options.trackConfig=t(n.size,n.slides);for(var r=n.slides,e=r.length,i="number"==typeof t?t:m(t,"number",e,!0),a=[],o=m(t,"perView",1,!0),u=m(t,"spacing",0,!0)/n.size||0,s="auto"===o?u:u/o,c=m(t,"origin","auto"),l=0,d=0;d<i;d++){var f="auto"===o?function(t){var r=v(t);return(n.options.vertical?r.height:r.width)/n.size||1}(r[d]):1/o-u+s,p="center"===c?.5-f/2:"auto"===c?0:c;a.push({origin:p,size:f,spacing:u}),l+=f}if(l+=u*(i-1),"auto"===c&&!n.options.loop&&1!==o){var h=0;a.map(function(t){var n=l-h;return h+=t.size+u,n>=1||(t.origin=1-n-(l>1?0:1-l)),t})}n.options.trackConfig=a}function T(){P();var t=n.size;n.options.disabled||t===i||(i=t,C())}function Z(){T(),setTimeout(T,500),setTimeout(T,2e3)}function P(){var t=v(n.container);n.size=(n.options.vertical?t.height:t.width)||1}function I(){n.slides=s(n.options.selector,n.container)}n.container=(l=s(t,c||document)).length?l[0]:null,n.destroy=function(){f.purge(),n.emit("destroyed"),p(!0)},n.prev=function(){n.moveToIdx(n.track.details.abs-1,!0)},n.next=function(){n.moveToIdx(n.track.details.abs+1,!0)},n.update=C,k(n.options)}),x,k,y],r||[],!0),c={},a={emit:function(t){c[t]&&c[t].forEach(function(t){t(a)});var n=a.options&&a.options[t];n&&n(a)},moveToIdx:function(t,n,r){var e=a.track.idxToDist(t,n);if(e){var i=a.options.defaultAnimation;a.animator.start([{distance:e,duration:m(r||i,"duration",500),easing:m(r||i,"easing",function(t){return 1+--t*t*t*t*t})}])}},on:function(t,n,r){void 0===r&&(r=!1),c[t]||(c[t]=[]);var e=c[t].indexOf(n);e>-1?r&&delete c[t][e]:r||c[t].push(n)},options:n},function(){if(a.track=function(t){var n,r,e,i,a,u,s,c,l,d,v,g,y,k,x=1/0,w=[],C=null,M=0;function T(t){S(M+t)}function Z(t){var n=P(M+t).abs;return z(n)===n?n:null}function P(t){var n=Math.floor(Math.abs(h(t/r))),e=h((t%r+r)%r);e===r&&(e=0);var i=p(t),a=s.indexOf(b([],s,!0).reduce(function(t,n){return Math.abs(n-e)<Math.abs(t-e)?n:t})),o=a;return i<0&&n++,a===u&&(o=0,n+=i>0?1:-1),{abs:o+n*u*i,origin:a,rel:o}}function I(t,n,r){if(n||!i.loop)return E(t,r);if(z(t)!==t)return null;var e,a=P(null!=r?r:M),o=a.abs,s=t-a.rel,c=o+s;e=E(c);var l=E(c-u*p(s));return(null!==l&&Math.abs(l)<Math.abs(e)||null===e)&&(e=l),h(e)}function E(t,n){if(null==n&&(n=h(M)),e=t,z(e)!==e||null===t)return null;t=Math.round(t);var e,i=P(n),a=i.abs,o=i.rel,c=i.origin,l=L(t),d=(n%r+r)%r,f=s[c],p=Math.floor((t-(a-o))/u)*r;return h(f-d-f+s[l]+p+(c===u?r:0))}function z(t){return f(t,l,d)}function L(t){return(t%u+u)%u}function S(n){r=n-M,w.push({distance:r,timestamp:o()}),w.length>6&&(w=w.slice(-6)),M=h(n);var r,e=$().abs;if(e!==C){var i=null!==C;C=e,i&&t.emit("slideChanged")}}function $(o){var s=o?null:function(){if(u){var t=i.loop,n=t?(M%r+r)%r:M,o=(t?M%r:M)-a[0][2],s=0-(o<0&&t?r-Math.abs(o):o),c=0,f=P(M),m=f.abs,h=f.rel,b=a[h][2],x=a.map(function(n,e){var a=s+c;(a<0-n[0]||a>1)&&(a+=(Math.abs(a)>r-1&&t?r:0)*p(-a));var o=e-h,l=p(o),d=o+m;t&&(-1===l&&a>b&&(d+=u),1===l&&a<b&&(d-=u),null!==v&&d<v&&(a+=r),null!==g&&d>g&&(a-=r));var f=a+n[0]+n[1],y=Math.max(a>=0&&f<=1?1:f<0||a>1?0:a<0?Math.min(1,(n[0]+a)/n[0]):(1-a)/n[0],0);return c+=n[0]+n[1],{abs:d,distance:i.rtl?-1*a+1-n[0]:a,portion:y,size:n[0]}});return h=L(m=z(m)),{abs:z(m),length:e,max:k,maxIdx:d,min:y,minIdx:l,position:M,progress:t?n/r:M/e,rel:h,slides:x,slidesLength:r}}}();return n.details=s,t.emit("detailsChanged"),s}return n={absToRel:L,add:T,details:null,distToIdx:Z,idxToDist:I,init:function(n){var o,f,p,b;if(function(){if(u=(a=((i=t.options).trackConfig||[]).map(function(t){return[m(t,"size",1),m(t,"spacing",0),m(t,"origin",0)]})).length){r=h(a.reduce(function(t,n){return t+n[0]+n[1]},0));var n,o=u-1;e=h(r+a[0][2]-a[o][0]-a[o][2]-a[o][1]),s=a.reduce(function(t,r){if(!t)return[0];var e=a[t.length-1],i=t[t.length-1]+(e[0]+e[2])+e[1];return i-=r[2],t[t.length-1]>i&&(i=t[t.length-1]),i=h(i),t.push(i),(!n||n<i)&&(c=t.length-1),n=i,t},null),0===e&&(c=0),s.push(h(r))}}(),!u)return $(!0);o=t.options.range,v=l=(f=t.options.loop)?m(f,"min",-1/0):0,g=d=f?m(f,"max",x):c,p=m(o,"min",null),b=m(o,"max",null),p&&(l=p),b&&(d=b),y=l===-1/0?l:t.track.idxToDist(l||0,!0,0),k=d===x?d:I(d,!0,0),null===b&&(g=d),m(o,"align",!1)&&d!==x&&0===a[L(d)][2]&&(k-=1-a[L(d)][0],d=Z(k-M)),y=h(y),k=h(k),Number(n)===n?T(E(z(n))):$()},to:S,velocity:function(){var t=o(),n=w.reduce(function(n,r){var e=r.distance,i=r.timestamp;return t-i>200||(p(e)!==p(n.distance)&&n.distance&&(n={distance:0,lastTimestamp:0,time:0}),n.time&&(n.distance+=e),n.lastTimestamp&&(n.time+=i-n.lastTimestamp),n.lastTimestamp=i),n},{distance:0,lastTimestamp:0,time:0});return n.distance/n.time||0}}}(a),a.animator=function(t){var n,r,e,i,a,o;function u(t){n.active=t}function s(t){n.targetIdx=t}function c(){window.cancelAnimationFrame(a),u(!1),s(null),o&&t.emit("animationStopped"),o=null}return n={active:!1,start:function(n){if(c(),t.track.details){var l=0,d=t.track.details.position;r=0,e=0,i=n.map(function(t){var n,r=d,i=null!==(n=t.earlyExit)&&void 0!==n?n:t.duration,a=t.easing,o=t.distance*a(i/t.duration)||0;d+=o;var u=e;return e+=i,l+=o,[r,t.distance,u,e,t.duration,a]}),s(t.track.distToIdx(l)),function n(){var c;c=function a(c){o||(o=c),u(!0);var l=c-o;l>e&&(l=e);var d=i[r];if(d[3]<l)return r++,a(c);var f=d[2],p=d[4],v=d[0],m=d[1]*(0,d[5])(0===p?1:(l-f)/p);if(m&&t.track.to(v+m),l<e)return n();o=null,u(!1),s(null),t.emit("animationEnded")},a=window.requestAnimationFrame(c)}(),t.emit("animationStarted")}},stop:c,targetIdx:null}}(a),i)for(var t=0;t<i.length;t++)(0,i[t])(a);a.track.init(a.options.initial||0),a.emit("created")}(),a}catch(l){console.error(l)}};n.E=function(t,n){var r=e.useRef(null),i=e.useRef(!1),a=e.useRef(t),o=e.useCallback(function(e){e?(a.current=t,r.current=new w(e,t,n),i.current=!1):(r.current&&r.current.destroy&&r.current.destroy(),r.current=null)},[]);return e.useEffect(function(){(function t(n,r){if(n===r)return!0;var e=typeof n;if(e!==typeof r)return!1;if("object"!==e||null===n||null===r)return"function"===e&&n.toString()===r.toString();if(n.length!==r.length||Object.getOwnPropertyNames(n).length!==Object.getOwnPropertyNames(r).length)return!1;for(var i in n)if(!t(n[i],r[i]))return!1;return!0})(a.current,t)||(a.current=t,r.current&&r.current.update(a.current))},[t]),[o,r]}},41595:function(){}}]);