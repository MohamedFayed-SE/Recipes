var e,t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};e=o,t=function(){function e(e){return e&&"[object Function]"==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function o(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function r(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var n=t(e),i=n.overflow,f=n.overflowX,s=n.overflowY;return/(auto|scroll|overlay)/.test(i+s+f)?e:r(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function f(e){return 11===e?Q:10===e?Z:Q||Z}function s(e){if(!e)return document.documentElement;for(var n=f(10)?document.body:null,o=e.offsetParent||null;o===n&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;var r=o&&o.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(o.nodeName)&&"static"===t(o,"position")?s(o):o:e?e.ownerDocument.documentElement:document.documentElement}function a(e){return null===e.parentNode?e:a(e.parentNode)}function p(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var f=i.commonAncestorContainer;if(e!==f&&t!==f||o.contains(r))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||s(e.firstElementChild)===e)}(f)?f:s(f);var l=a(e);return l.host?p(l.host,t):p(e,a(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var r=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||r;return i[n]}return e[n]}function u(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=l(t,"top"),r=l(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}function d(e,t){var n="x"===t?"Left":"Top",o="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+o+"Width"])}function c(e,t,n,o){return _(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],f(10)?parseInt(n["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function h(e){var t=e.body,n=e.documentElement,o=f(10)&&getComputedStyle(n);return{height:c("Height",t,n,o),width:c("Width",t,n,o)}}function m(e){return ne({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var n={};try{if(f(10)){n=e.getBoundingClientRect();var o=l(e,"top"),r=l(e,"left");n.top+=o,n.left+=r,n.bottom+=o,n.right+=r}else n=e.getBoundingClientRect()}catch(e){}var i={left:n.left,top:n.top,width:n.right-n.left,height:n.bottom-n.top},s="HTML"===e.nodeName?h(e.ownerDocument):{},a=s.width||e.clientWidth||i.width,p=s.height||e.clientHeight||i.height,u=e.offsetWidth-a,c=e.offsetHeight-p;if(u||c){var g=t(e);u-=d(g,"x"),c-=d(g,"y"),i.width-=u,i.height-=c}return m(i)}function v(e,n){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=f(10),s="HTML"===n.nodeName,a=g(e),p=g(n),l=r(e),d=t(n),c=parseFloat(d.borderTopWidth),h=parseFloat(d.borderLeftWidth);o&&s&&(p.top=_(p.top,0),p.left=_(p.left,0));var v=m({top:a.top-p.top-c,left:a.left-p.left-h,width:a.width,height:a.height});if(v.marginTop=0,v.marginLeft=0,!i&&s){var b=parseFloat(d.marginTop),w=parseFloat(d.marginLeft);v.top-=c-b,v.bottom-=c-b,v.left-=h-w,v.right-=h-w,v.marginTop=b,v.marginLeft=w}return(i&&!o?n.contains(l):n===l&&"BODY"!==l.nodeName)&&(v=u(v,n)),v}function b(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=v(e,n),r=_(n.clientWidth,window.innerWidth||0),i=_(n.clientHeight,window.innerHeight||0),f=t?0:l(n),s=t?0:l(n,"left"),a={top:f-o.top+o.marginTop,left:s-o.left+o.marginLeft,width:r,height:i};return m(a)}function w(e){var n=e.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===t(e,"position"))return!0;var r=o(e);return!!r&&w(r)}function y(e){if(!e||!e.parentElement||f())return document.documentElement;for(var n=e.parentElement;n&&"none"===t(n,"transform");)n=n.parentElement;return n||document.documentElement}function E(e,t,n,f){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],a={top:0,left:0},l=s?y(e):p(e,i(t));if("viewport"===f)a=b(l,s);else{var u;"scrollParent"===f?"BODY"===(u=r(o(t))).nodeName&&(u=e.ownerDocument.documentElement):u="window"===f?e.ownerDocument.documentElement:f;var d=v(u,l,s);if("HTML"!==u.nodeName||w(l))a=d;else{var c=h(e.ownerDocument),m=c.height,g=c.width;a.top+=d.top-d.marginTop,a.bottom=m+d.top,a.left+=d.left-d.marginLeft,a.right=g+d.left}}var E="number"==typeof(n=n||0);return a.left+=E?n:n.left||0,a.top+=E?n:n.top||0,a.right-=E?n:n.right||0,a.bottom-=E?n:n.bottom||0,a}function x(e){return e.width*e.height}function O(e,t,n,o,r){var i=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var f=E(n,o,i,r),s={top:{width:f.width,height:t.top-f.top},right:{width:f.right-t.right,height:f.height},bottom:{width:f.width,height:f.bottom-t.bottom},left:{width:t.left-f.left,height:f.height}},a=Object.keys(s).map((function(e){return ne({key:e},s[e],{area:x(s[e])})})).sort((function(e,t){return t.area-e.area})),p=a.filter((function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight})),l=0<p.length?p[0].key:a[0].key,u=e.split("-")[1];return l+(u?"-"+u:"")}function L(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=o?y(t):p(t,i(n));return v(n,r,o)}function T(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),o=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function D(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function N(e,t,n){n=n.split("-")[0];var o=T(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),f=i?"top":"left",s=i?"left":"top",a=i?"height":"width",p=i?"width":"height";return r[f]=t[f]+t[a]/2-o[a]/2,r[s]=n===s?t[s]-o[p]:t[D(s)],r}function F(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function H(t,n,o){var r=void 0===o?t:t.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var o=F(e,(function(e){return e[t]===n}));return e.indexOf(o)}(t,"name",o));return r.forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=t.function||t.fn;t.enabled&&e(o)&&(n.offsets.popper=m(n.offsets.popper),n.offsets.reference=m(n.offsets.reference),n=o(n,t))})),n}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=N(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=H(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function C(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function B(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==document.body.style[i])return i}return null}function A(){return this.state.isDestroyed=!0,C(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[B("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function M(e){var t=e.ownerDocument;return t?t.defaultView:window}function P(e,t,n,o){var i="BODY"===e.nodeName,f=i?e.ownerDocument.defaultView:e;f.addEventListener(t,n,{passive:!0}),i||P(r(f.parentNode),t,n,o),o.push(f)}function S(e,t,n,o){n.updateBound=o,M(e).addEventListener("resize",n.updateBound,{passive:!0});var i=r(e);return P(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function W(){this.state.eventsEnabled||(this.state=S(this.reference,this.options,this.state,this.scheduleUpdate))}function j(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,M(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function I(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function R(e,t){Object.keys(t).forEach((function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&I(t[n])&&(o="px"),e.style[n]=t[n]+o}))}function U(e,t,n){var o=F(e,(function(e){return e.name===t})),r=!!o&&e.some((function(e){return e.name===n&&e.enabled&&e.order<o.order}));if(!r){var i="`"+t+"`";console.warn("`"+n+"` modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}function Y(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=ie.indexOf(e),o=ie.slice(n+1).concat(ie.slice(0,n));return t?o.reverse():o}function V(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),f=e.split(/(\+|\-)/).map((function(e){return e.trim()})),s=f.indexOf(F(f,(function(e){return-1!==e.search(/,|\s/)})));f[s]&&-1===f[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var a=/\s*,\s*|\s+/,p=-1===s?[f]:[f.slice(0,s).concat([f[s].split(a)[0]]),[f[s].split(a)[1]].concat(f.slice(s+1))];return p=p.map((function(e,o){var r=(1===o?!i:i)?"height":"width",f=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,f=!0,e):f?(e[e.length-1]+=t,f=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],f=r[2];return i?0===f.indexOf("%")?m("%p"===f?n:o)[t]/100*i:"vh"===f||"vw"===f?("vh"===f?_(document.documentElement.clientHeight,window.innerHeight||0):_(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i:e}(e,r,t,n)}))})),p.forEach((function(e,t){e.forEach((function(n,o){I(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))}))})),r}var q=Math.min,z=Math.floor,G=Math.round,_=Math.max,X="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,J=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(X&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),K=X&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),J))}},Q=X&&!(!window.MSInputMethodContext||!document.documentMode),Z=X&&/MSIE 10/.test(navigator.userAgent),$=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ee=function(){function e(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),te=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},ne=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},oe=X&&/Firefox/i.test(navigator.userAgent),re=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ie=re.slice(3),fe="flip",se="clockwise",ae="counterclockwise",pe=function(){function t(n,o){var r=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};$(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=K(this.update.bind(this)),this.options=ne({},t.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=n&&n.jquery?n[0]:n,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(ne({},t.Defaults.modifiers,i.modifiers)).forEach((function(e){r.options.modifiers[e]=ne({},t.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return ne({name:e},r.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(t){t.enabled&&e(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)})),this.update();var f=this.options.eventsEnabled;f&&this.enableEventListeners(),this.state.eventsEnabled=f}return ee(t,[{key:"update",value:function(){return k.call(this)}},{key:"destroy",value:function(){return A.call(this)}},{key:"enableEventListeners",value:function(){return W.call(this)}},{key:"disableEventListeners",value:function(){return j.call(this)}}]),t}();return pe.Utils=("undefined"==typeof window?n:window).PopperUtils,pe.placements=re,pe.Defaults={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,f=r.popper,s=-1!==["bottom","top"].indexOf(n),a=s?"left":"top",p=s?"width":"height",l={start:te({},a,i[a]),end:te({},a,i[a]+i[p]-f[p])};e.offsets.popper=ne({},f,l[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,o=t.offset,r=e.placement,i=e.offsets,f=i.popper,s=i.reference,a=r.split("-")[0];return n=I(+o)?[+o,0]:V(o,f,s,a),"left"===a?(f.top+=n[0],f.left-=n[1]):"right"===a?(f.top+=n[0],f.left+=n[1]):"top"===a?(f.left+=n[0],f.top-=n[1]):"bottom"===a&&(f.left+=n[0],f.top+=n[1]),e.popper=f,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||s(e.instance.popper);e.instance.reference===n&&(n=s(n));var o=B("transform"),r=e.instance.popper.style,i=r.top,f=r.left,a=r[o];r.top="",r.left="",r[o]="";var p=E(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=i,r.left=f,r[o]=a,t.boundaries=p;var l=t.priority,u=e.offsets.popper,d={primary:function(e){var n=u[e];return u[e]<p[e]&&!t.escapeWithReference&&(n=_(u[e],p[e])),te({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=u[n];return u[e]>p[e]&&!t.escapeWithReference&&(o=q(u[n],p[e]-("right"===e?u.width:u.height))),te({},n,o)}};return l.forEach((function(e){var t=-1===["left","top"].indexOf(e)?"secondary":"primary";u=ne({},u,d[t](e))})),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=z,f=-1!==["top","bottom"].indexOf(r),s=f?"right":"bottom",a=f?"left":"top",p=f?"width":"height";return n[s]<i(o[a])&&(e.offsets.popper[a]=i(o[a])-n[p]),n[a]>i(o[s])&&(e.offsets.popper[a]=i(o[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,n){var o;if(!U(e.instance.modifiers,"arrow","keepTogether"))return e;var r=n.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],f=e.offsets,s=f.popper,a=f.reference,p=-1!==["left","right"].indexOf(i),l=p?"height":"width",u=p?"Top":"Left",d=u.toLowerCase(),c=p?"left":"top",h=p?"bottom":"right",g=T(r)[l];a[h]-g<s[d]&&(e.offsets.popper[d]-=s[d]-(a[h]-g)),a[d]+g>s[h]&&(e.offsets.popper[d]+=a[d]+g-s[h]),e.offsets.popper=m(e.offsets.popper);var v=a[d]+a[l]/2-g/2,b=t(e.instance.popper),w=parseFloat(b["margin"+u]),y=parseFloat(b["border"+u+"Width"]),E=v-e.offsets.popper[d]-w-y;return E=_(q(s[l]-g,E),0),e.arrowElement=r,e.offsets.arrow=(te(o={},d,G(E)),te(o,c,""),o),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(C(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=E(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],r=D(o),i=e.placement.split("-")[1]||"",f=[];switch(t.behavior){case fe:f=[o,r];break;case se:f=Y(o);break;case ae:f=Y(o,!0);break;default:f=t.behavior}return f.forEach((function(s,a){if(o!==s||f.length===a+1)return e;o=e.placement.split("-")[0],r=D(o);var p=e.offsets.popper,l=e.offsets.reference,u=z,d="left"===o&&u(p.right)>u(l.left)||"right"===o&&u(p.left)<u(l.right)||"top"===o&&u(p.bottom)>u(l.top)||"bottom"===o&&u(p.top)<u(l.bottom),c=u(p.left)<u(n.left),h=u(p.right)>u(n.right),m=u(p.top)<u(n.top),g=u(p.bottom)>u(n.bottom),v="left"===o&&c||"right"===o&&h||"top"===o&&m||"bottom"===o&&g,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&c||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&g),y=!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&c||!b&&"start"===i&&g||!b&&"end"===i&&m),E=w||y;(d||v||E)&&(e.flipped=!0,(d||v)&&(o=f[a+1]),E&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=ne({},e.offsets.popper,N(e.instance.popper,e.offsets.reference,e.placement)),e=H(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,f=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return r[f?"left":"top"]=i[n]-(s?r[f?"width":"height"]:0),e.placement=D(t),e.offsets.popper=m(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!U(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=F(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=F(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var f,a,p=void 0===i?t.gpuAcceleration:i,l=s(e.instance.popper),u=g(l),d={position:r.position},c=function(e,t){var n=e.offsets,o=n.popper,r=n.reference,i=G,f=function(e){return e},s=i(r.width),a=i(o.width),p=-1!==["left","right"].indexOf(e.placement),l=-1!==e.placement.indexOf("-"),u=t?p||l||s%2==a%2?i:z:f,d=t?i:f;return{left:u(1==s%2&&1==a%2&&!l&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:u(o.right)}}(e,2>window.devicePixelRatio||!oe),h="bottom"===n?"top":"bottom",m="right"===o?"left":"right",v=B("transform");if(a="bottom"==h?"HTML"===l.nodeName?-l.clientHeight+c.bottom:-u.height+c.bottom:c.top,f="right"==m?"HTML"===l.nodeName?-l.clientWidth+c.right:-u.width+c.right:c.left,p&&v)d[v]="translate3d("+f+"px, "+a+"px, 0)",d[h]=0,d[m]=0,d.willChange="transform";else{var b="bottom"==h?-1:1,w="right"==m?-1:1;d[h]=a*b,d[m]=f*w,d.willChange=h+", "+m}var y={"x-placement":e.placement};return e.attributes=ne({},y,e.attributes),e.styles=ne({},d,e.styles),e.arrowStyles=ne({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return R(e.instance.popper,e.styles),function(e,t){Object.keys(t).forEach((function(n){!1===t[n]?e.removeAttribute(n):e.setAttribute(n,t[n])}))}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&R(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,r){var i=L(r,t,e,n.positionFixed),f=O(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",f),R(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},pe},"object"==typeof o?o=t():"function"==typeof define&&define.amd?define(t):e.Popper=t();
//# sourceMappingURL=index.0b46ac3a.js.map
