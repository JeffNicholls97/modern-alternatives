;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "LkK2y7Jpwd"							}), success: c, error: e});						}, cb  = function(section, $) {!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,(function(){"use strict";function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e}).apply(this,arguments)}function i(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function s(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(a){void 0===e[a]?e[a]=t[a]:i(t[a])&&i(e[a])&&Object.keys(t[a]).length>0&&s(e[a],t[a])}))}var a={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function r(){var e="undefined"!=typeof document?document:{};return s(e,a),e}var n={document:a,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}},requestAnimationFrame:function(e){return"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame:function(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function l(){var e="undefined"!=typeof window?window:{};return s(e,n),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e,t,i){return(p=h()?Reflect.construct:function(e,t,i){var s=[null];s.push.apply(s,t);var a=new(Function.bind.apply(e,s));return i&&d(a,i.prototype),a}).apply(null,arguments)}function u(e){var t="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(i=e,-1===Function.toString.call(i).indexOf("[native code]")))return e;var i;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,s)}function s(){return p(e,arguments,o(this).constructor)}return s.prototype=Object.create(e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),d(s,e)})(e)}var c=function(e){var t,i;function s(t){var i,s,a;return i=e.call.apply(e,[this].concat(t))||this,s=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(i),a=s.__proto__,Object.defineProperty(s,"__proto__",{get:function(){return a},set:function(e){a.__proto__=e}}),i}return i=e,(t=s).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,s}(u(Array));function v(e){void 0===e&&(e=[]);var t=[];return e.forEach((function(e){Array.isArray(e)?t.push.apply(t,v(e)):t.push(e)})),t}function f(e,t){return Array.prototype.filter.call(e,t)}function m(e,t){var i=l(),s=r(),a=[];if(!t&&e instanceof c)return e;if(!e)return new c(a);if("string"==typeof e){var n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){var o="div";0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select");var d=s.createElement(o);d.innerHTML=n;for(var h=0;h<d.childNodes.length;h+=1)a.push(d.childNodes[h])}else a=function(e,t){if("string"!=typeof e)return[e];for(var i=[],s=t.querySelectorAll(e),a=0;a<s.length;a+=1)i.push(s[a]);return i}(e.trim(),t||s)}else if(e.nodeType||e===i||e===s)a.push(e);else if(Array.isArray(e)){if(e instanceof c)return e;a=e}return new c(function(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}(a))}m.fn=c.prototype;var g,w,y,b={addClass:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=v(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).add.apply(t,s)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=v(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).remove.apply(t,s)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=v(t.map((function(e){return e.split(" ")})));return f(this,(function(e){return s.filter((function(t){return e.classList.contains(t)})).length>0})).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=v(t.map((function(e){return e.split(" ")})));this.forEach((function(e){s.forEach((function(t){e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===arguments.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transition="string"!=typeof e?e+"ms":e;return this},on:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),m(t).is(a))r.apply(t,i);else for(var s=m(t).parents(),n=0;n<s.length;n+=1)m(s[n]).is(a)&&r.apply(s[n],i)}}function o(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&(s=t[0],r=t[1],n=t[2],a=void 0),n||(n=!1);for(var d,h=s.split(" "),p=0;p<this.length;p+=1){var u=this[p];if(a)for(d=0;d<h.length;d+=1){var c=h[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[c]||(u.dom7LiveListeners[c]=[]),u.dom7LiveListeners[c].push({listener:r,proxyListener:l}),u.addEventListener(c,l,n)}else for(d=0;d<h.length;d+=1){var v=h[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:r,proxyListener:o}),u.addEventListener(v,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=t[0],r=t[1],n=t[2],a=void 0),n||(n=!1);for(var l=s.split(" "),o=0;o<l.length;o+=1)for(var d=l[o],h=0;h<this.length;h+=1){var p=this[h],u=void 0;if(!a&&p.dom7Listeners?u=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(u=p.dom7LiveListeners[d]),u&&u.length)for(var c=u.length-1;c>=0;c-=1){var v=u[c];r&&v.listener===r||r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(p.removeEventListener(d,v.proxyListener,n),u.splice(c,1)):r||(p.removeEventListener(d,v.proxyListener,n),u.splice(c,1))}}return this},trigger:function(){for(var e=l(),t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],d=0;d<this.length;d+=1){var h=this[d];if(e.CustomEvent){var p=new e.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0});h.dom7EventData=i.filter((function(e,t){return t>0})),h.dispatchEvent(p),h.dom7EventData=[],delete h.dom7EventData}}return this},transitionEnd:function(e){var t=this;return e&&t.on("transitionend",(function i(s){s.target===this&&(e.call(this,s),t.off("transitionend",i))})),this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){var e=l();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){var e=l(),t=r(),i=this[0],s=i.getBoundingClientRect(),a=t.body,n=i.clientTop||a.clientTop||0,o=i.clientLeft||a.clientLeft||0,d=i===e?e.scrollY:i.scrollTop,h=i===e?e.scrollX:i.scrollLeft;return{top:s.top+d-n,left:s.left+h-o}}return null},css:function(e,t){var i,s=l();if(1===arguments.length){if("string"!=typeof e){for(i=0;i<this.length;i+=1)for(var a in e)this[i].style[a]=e[a];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(i=0;i<this.length;i+=1)this[i].style[e]=t;return this}return this},each:function(e){return e?(this.forEach((function(t,i){e.apply(t,[t,i])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,i,s=l(),a=r(),n=this[0];if(!n||void 0===e)return!1;if("string"==typeof e){if(n.matches)return n.matches(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);for(t=m(e),i=0;i<t.length;i+=1)if(t[i]===n)return!0;return!1}if(e===a)return n===a;if(e===s)return n===s;if(e.nodeType||e instanceof c){for(t=e.nodeType?[e]:e,i=0;i<t.length;i+=1)if(t[i]===n)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t=this.length;if(e>t-1)return m([]);if(e<0){var i=t+e;return m(i<0?[]:[this[i]])}return m([this[e]])},append:function(){for(var e,t=r(),i=0;i<arguments.length;i+=1){e=i<0||arguments.length<=i?void 0:arguments[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof c)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,i,s=r();for(t=0;t<this.length;t+=1)if("string"==typeof e){var a=s.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[t].insertBefore(a.childNodes[i],this[t].childNodes[0])}else if(e instanceof c)for(i=0;i<e.length;i+=1)this[t].insertBefore(e[i],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&m(this[0].nextElementSibling).is(e)?m([this[0].nextElementSibling]):m([]):this[0].nextElementSibling?m([this[0].nextElementSibling]):m([]):m([])},nextAll:function(e){var t=[],i=this[0];if(!i)return m([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;e?m(s).is(e)&&t.push(s):t.push(s),i=s}return m(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&m(t.previousElementSibling).is(e)?m([t.previousElementSibling]):m([]):t.previousElementSibling?m([t.previousElementSibling]):m([])}return m([])},prevAll:function(e){var t=[],i=this[0];if(!i)return m([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;e?m(s).is(e)&&t.push(s):t.push(s),i=s}return m(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?m(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return m(t)},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var s=this[i].parentNode;s;)e?m(s).is(e)&&t.push(s):t.push(s),s=s.parentNode;return m(t)},closest:function(e){var t=this;return void 0===e?m([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var s=this[i].querySelectorAll(e),a=0;a<s.length;a+=1)t.push(s[a]);return m(t)},children:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var s=this[i].children,a=0;a<s.length;a+=1)e&&!m(s[a]).is(e)||t.push(s[a]);return m(t)},filter:function(e){return m(f(this,e))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function E(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function x(){return Date.now()}function T(e,t){void 0===t&&(t="x");var i,s,a,r=l(),n=r.getComputedStyle(e,null);return r.WebKitCSSMatrix?((s=n.transform||n.webkitTransform).split(",").length>6&&(s=s.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),a=new r.WebKitCSSMatrix("none"===s?"":s)):i=(a=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(s=r.WebKitCSSMatrix?a.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(s=r.WebKitCSSMatrix?a.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0}function C(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object}function S(){for(var e=Object(arguments.length<=0?void 0:arguments[0]),t=1;t<arguments.length;t+=1){var i=t<0||arguments.length<=t?void 0:arguments[t];if(null!=i)for(var s=Object.keys(Object(i)),a=0,r=s.length;a<r;a+=1){var n=s[a],l=Object.getOwnPropertyDescriptor(i,n);void 0!==l&&l.enumerable&&(C(e[n])&&C(i[n])?S(e[n],i[n]):!C(e[n])&&C(i[n])?(e[n]={},S(e[n],i[n])):e[n]=i[n])}}return e}function M(e,t){Object.keys(t).forEach((function(i){C(t[i])&&Object.keys(t[i]).forEach((function(s){"function"==typeof t[i][s]&&(t[i][s]=t[i][s].bind(e))})),e[i]=t[i]}))}function z(){return g||(g=function(){var e=l(),t=r();return{touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),pointerEvents:!!e.PointerEvent&&"maxTouchPoints"in e.navigator&&e.navigator.maxTouchPoints>=0,observer:"MutationObserver"in e||"WebkitMutationObserver"in e,passiveListener:function(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("testPassiveListener",null,i)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),g}function P(e){return void 0===e&&(e={}),w||(w=function(e){var t=(void 0===e?{}:e).userAgent,i=z(),s=l(),a=s.navigator.platform,r=t||s.navigator.userAgent,n={ios:!1,android:!1},o=s.screen.width,d=s.screen.height,h=r.match(/(Android);?[\s\/]+([\d.]+)?/),p=r.match(/(iPad).*OS\s([\d_]+)/),u=r.match(/(iPod)(.*OS\s([\d_]+))?/),c=!p&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v="Win32"===a,f="MacIntel"===a;return!p&&f&&i.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768"].indexOf(o+"x"+d)>=0&&((p=r.match(/(Version)\/([\d.]+)/))||(p=[0,1,"13_0_0"]),f=!1),h&&!v&&(n.os="android",n.android=!0),(p||c||u)&&(n.os="ios",n.ios=!0),n}(e)),w}function k(){return y||(y=function(){var e,t=l();return{isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}()),y}Object.keys(b).forEach((function(e){m.fn[e]=b[e]}));var $={name:"resize",create:function(){var e=this;S(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(e){var t=l();t.addEventListener("resize",e.resize.resizeHandler),t.addEventListener("orientationchange",e.resize.orientationChangeHandler)},destroy:function(e){var t=l();t.removeEventListener("resize",e.resize.resizeHandler),t.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}},L={attach:function(e,t){void 0===t&&(t={});var i=l(),s=this,a=new(i.MutationObserver||i.WebkitMutationObserver)((function(e){if(1!==e.length){var t=function(){s.emit("observerUpdate",e[0])};i.requestAnimationFrame?i.requestAnimationFrame(t):i.setTimeout(t,0)}else s.emit("observerUpdate",e[0])}));a.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),s.observer.observers.push(a)},init:function(){if(this.support.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},I={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){M(this,{observer:t(t({},L),{},{observers:[]})})},on:{init:function(e){e.observer.init()},destroy:function(e){e.observer.destroy()}}};function O(e){var t=r(),i=l(),s=this.touchEventsData,a=this.params,n=this.touches;if(!this.animating||!a.preventInteractionOnTransition){var o=e;o.originalEvent&&(o=o.originalEvent);var d=m(o.target);if(("wrapper"!==a.touchEventsTarget||d.closest(this.wrapperEl).length)&&(s.isTouchEvent="touchstart"===o.type,(s.isTouchEvent||!("which"in o)||3!==o.which)&&!(!s.isTouchEvent&&"button"in o&&o.button>0||s.isTouched&&s.isMoved)))if(a.noSwiping&&d.closest(a.noSwipingSelector?a.noSwipingSelector:"."+a.noSwipingClass)[0])this.allowClick=!0;else if(!a.swipeHandler||d.closest(a.swipeHandler)[0]){n.currentX="touchstart"===o.type?o.targetTouches[0].pageX:o.pageX,n.currentY="touchstart"===o.type?o.targetTouches[0].pageY:o.pageY;var h=n.currentX,p=n.currentY,u=a.edgeSwipeDetection||a.iOSEdgeSwipeDetection,c=a.edgeSwipeThreshold||a.iOSEdgeSwipeThreshold;if(!u||!(h<=c||h>=i.screen.width-c)){if(S(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),n.startX=h,n.startY=p,s.touchStartTime=x(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,a.threshold>0&&(s.allowThresholdMove=!1),"touchstart"!==o.type){var v=!0;d.is(s.formElements)&&(v=!1),t.activeElement&&m(t.activeElement).is(s.formElements)&&t.activeElement!==d[0]&&t.activeElement.blur();var f=v&&this.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||f)&&o.preventDefault()}this.emit("touchStart",o)}}}}function A(e){var t=r(),i=this.touchEventsData,s=this.params,a=this.touches,n=this.rtlTranslate,l=e;if(l.originalEvent&&(l=l.originalEvent),i.isTouched){if(!i.isTouchEvent||"touchmove"===l.type){var o="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),d="touchmove"===l.type?o.pageX:l.pageX,h="touchmove"===l.type?o.pageY:l.pageY;if(l.preventedByNestedSwiper)return a.startX=d,void(a.startY=h);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(S(a,{startX:d,startY:h,currentX:d,currentY:h}),i.touchStartTime=x()));if(i.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(this.isVertical()){if(h<a.startY&&this.translate<=this.maxTranslate()||h>a.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(d<a.startX&&this.translate<=this.maxTranslate()||d>a.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&l.target===t.activeElement&&m(l.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",l),!(l.targetTouches&&l.targetTouches.length>1)){a.currentX=d,a.currentY=h;var p=a.currentX-a.startX,u=a.currentY-a.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(p,2)+Math.pow(u,2))<this.params.threshold)){var c;if(void 0===i.isScrolling)this.isHorizontal()&&a.currentY===a.startY||this.isVertical()&&a.currentX===a.startX?i.isScrolling=!1:p*p+u*u>=25&&(c=180*Math.atan2(Math.abs(u),Math.abs(p))/Math.PI,i.isScrolling=this.isHorizontal()?c>s.touchAngle:90-c>s.touchAngle);if(i.isScrolling&&this.emit("touchMoveOpposite",l),void 0===i.startMoving&&(a.currentX===a.startX&&a.currentY===a.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation(),i.isMoved||(s.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!s.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",l)),this.emit("sliderMove",l),i.isMoved=!0;var v=this.isHorizontal()?p:u;a.diff=v,v*=s.touchRatio,n&&(v=-v),this.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;var f=!0,g=s.resistanceRatio;if(s.touchReleaseOnEdges&&(g=0),v>0&&i.currentTranslate>this.minTranslate()?(f=!1,s.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+v,g))):v<0&&i.currentTranslate<this.maxTranslate()&&(f=!1,s.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-v,g))),f&&(l.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(v)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,i.currentTranslate=i.startTranslate,void(a.diff=this.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY)}s.followFinger&&!s.cssMode&&((s.freeMode||s.watchSlidesProgress||s.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),s.freeMode&&(0===i.velocities.length&&i.velocities.push({position:a[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:a[this.isHorizontal()?"currentX":"currentY"],time:x()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",l)}function D(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,l=t.slidesGrid,o=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",d),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var h,p=x(),u=p-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap click",d),u<300&&p-i.lastClickTime<300&&t.emit("doubleTap doubleClick",d)),i.lastClickTime=x(),E((function(){t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,h=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,!s.cssMode)if(s.freeMode){if(h<-t.minTranslate())return void t.slideTo(t.activeIndex);if(h>-t.maxTranslate())return void(t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var c=i.velocities.pop(),v=i.velocities.pop(),f=c.position-v.position,m=c.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(m>150||x()-c.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var g=1e3*s.freeModeMomentumRatio,w=t.velocity*g,y=t.translate+w;r&&(y=-y);var b,T,C=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),b=t.maxTranslate(),C=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),b=t.minTranslate(),C=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(s.freeModeSticky){for(var M,z=0;z<o.length;z+=1)if(o[z]>-y){M=z;break}y=-(y=Math.abs(o[M]-y)<Math.abs(o[M-1]-y)||"next"===t.swipeDirection?o[M]:o[M-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(g=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),s.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),k=t.slidesSizesGrid[t.activeIndex];g=P<k?s.speed:P<2*k?1.5*s.speed:2.5*s.speed}}else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&C?(t.updateProgress(b),t.setTransition(g),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),setTimeout((function(){t.setTranslate(b),n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(y),t.setTransition(g),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var $=0,L=t.slidesSizesGrid[0],I=0;I<l.length;I+=I<s.slidesPerGroupSkip?1:s.slidesPerGroup){var O=I<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[I+O]?h>=l[I]&&h<l[I+O]&&($=I,L=l[I+O]-l[I]):h>=l[I]&&($=I,L=l[l.length-1]-l[l.length-2])}var A=(h-l[$])/L,D=$<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(A>=s.longSwipesRatio?t.slideTo($+D):t.slideTo($)),"prev"===t.swipeDirection&&(A>1-s.longSwipesRatio?t.slideTo($+D):t.slideTo($))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(d.target===t.navigation.nextEl||d.target===t.navigation.prevEl)?d.target===t.navigation.nextEl?t.slideTo($+D):t.slideTo($):("next"===t.swipeDirection&&t.slideTo($+D),"prev"===t.swipeDirection&&t.slideTo($))}}}function G(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.isBeginning&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}function N(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function B(){var e=this.wrapperEl,t=this.rtlTranslate;this.previousTranslate=this.translate,this.isHorizontal()?this.translate=t?e.scrollWidth-e.offsetWidth-e.scrollLeft:-e.scrollLeft:this.translate=-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var i=this.maxTranslate()-this.minTranslate();(0===i?0:(this.translate-this.minTranslate())/i)!==this.progress&&this.updateProgress(t?-this.translate:this.translate),this.emit("setTranslate",this.translate,!1)}var H=!1;function X(){}var Y={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1},V={modular:{useParams:function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i];s.params&&S(e,s.params)}))},useModules:function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i],a=e[i]||{};s.on&&t.on&&Object.keys(s.on).forEach((function(e){t.on(e,s.on[e])})),s.create&&s.create.bind(t)(a)}))}},eventsEmitter:{on:function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach((function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)})),s},once:function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){s.off(e,a),a.__emitterProxy&&delete a.__emitterProxy;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];t.apply(s,r)}return a.__emitterProxy=t,s.on(e,a,i)},onAny:function(e,t){if("function"!=typeof e)return this;var i=t?"unshift":"push";return this.eventsAnyListeners.indexOf(e)<0&&this.eventsAnyListeners[i](e),this},offAny:function(e){if(!this.eventsAnyListeners)return this;var t=this.eventsAnyListeners.indexOf(e);return t>=0&&this.eventsAnyListeners.splice(t,1),this},off:function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].forEach((function(s,a){(s===t||s.__emitterProxy&&s.__emitterProxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},emit:function(){var e,t,i,s=this;if(!s.eventsListeners)return s;for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),i=s):(e=r[0].events,t=r[0].data,i=r[0].context||s),t.unshift(i);var l=Array.isArray(e)?e:e.split(" ");return l.forEach((function(e){if(s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach((function(s){s.apply(i,[e].concat(t))})),s.eventsListeners&&s.eventsListeners[e]){var a=[];s.eventsListeners[e].forEach((function(e){a.push(e)})),a.forEach((function(e){e.apply(i,t)}))}})),s}},update:{updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width&&null!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height&&null!==this.params.width?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),t=t-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),S(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=l(),t=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,n=this.virtual&&t.virtual.enabled,o=n?this.virtual.slides.length:this.slides.length,d=i.children("."+this.params.slideClass),h=n?this.virtual.slides.length:d.length,p=[],u=[],c=[];function v(e,i){return!t.cssMode||i!==d.length-1}var f=t.slidesOffsetBefore;"function"==typeof f&&(f=t.slidesOffsetBefore.call(this));var m=t.slidesOffsetAfter;"function"==typeof m&&(m=t.slidesOffsetAfter.call(this));var g=this.snapGrid.length,w=this.snapGrid.length,y=t.spaceBetween,b=-f,E=0,x=0;if(void 0!==s){var T,C;"string"==typeof y&&y.indexOf("%")>=0&&(y=parseFloat(y.replace("%",""))/100*s),this.virtualSize=-y,a?d.css({marginLeft:"",marginTop:""}):d.css({marginRight:"",marginBottom:""}),t.slidesPerColumn>1&&(T=Math.floor(h/t.slidesPerColumn)===h/this.params.slidesPerColumn?h:Math.ceil(h/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(T=Math.max(T,t.slidesPerView*t.slidesPerColumn)));for(var M,z=t.slidesPerColumn,P=T/z,k=Math.floor(h/t.slidesPerColumn),$=0;$<h;$+=1){C=0;var L=d.eq($);if(t.slidesPerColumn>1){var I=void 0,O=void 0,A=void 0;if("row"===t.slidesPerColumnFill&&t.slidesPerGroup>1){var D=Math.floor($/(t.slidesPerGroup*t.slidesPerColumn)),G=$-t.slidesPerColumn*t.slidesPerGroup*D,N=0===D?t.slidesPerGroup:Math.min(Math.ceil((h-D*z*t.slidesPerGroup)/z),t.slidesPerGroup);I=(O=G-(A=Math.floor(G/N))*N+D*t.slidesPerGroup)+A*T/z,L.css({"-webkit-box-ordinal-group":I,"-moz-box-ordinal-group":I,"-ms-flex-order":I,"-webkit-order":I,order:I})}else"column"===t.slidesPerColumnFill?(A=$-(O=Math.floor($/z))*z,(O>k||O===k&&A===z-1)&&(A+=1)>=z&&(A=0,O+=1)):O=$-(A=Math.floor($/P))*P;L.css("margin-"+(this.isHorizontal()?"top":"left"),0!==A&&t.spaceBetween&&t.spaceBetween+"px")}if("none"!==L.css("display")){if("auto"===t.slidesPerView){var B=e.getComputedStyle(L[0],null),H=L[0].style.transform,X=L[0].style.webkitTransform;if(H&&(L[0].style.transform="none"),X&&(L[0].style.webkitTransform="none"),t.roundLengths)C=this.isHorizontal()?L.outerWidth(!0):L.outerHeight(!0);else if(this.isHorizontal()){var Y=parseFloat(B.getPropertyValue("width")||0),V=parseFloat(B.getPropertyValue("padding-left")||0),F=parseFloat(B.getPropertyValue("padding-right")||0),R=parseFloat(B.getPropertyValue("margin-left")||0),W=parseFloat(B.getPropertyValue("margin-right")||0),q=B.getPropertyValue("box-sizing");C=q&&"border-box"===q?Y+R+W:Y+V+F+R+W}else{var j=parseFloat(B.getPropertyValue("height")||0),_=parseFloat(B.getPropertyValue("padding-top")||0),U=parseFloat(B.getPropertyValue("padding-bottom")||0),K=parseFloat(B.getPropertyValue("margin-top")||0),Z=parseFloat(B.getPropertyValue("margin-bottom")||0),J=B.getPropertyValue("box-sizing");C=J&&"border-box"===J?j+K+Z:j+_+U+K+Z}H&&(L[0].style.transform=H),X&&(L[0].style.webkitTransform=X),t.roundLengths&&(C=Math.floor(C))}else C=(s-(t.slidesPerView-1)*y)/t.slidesPerView,t.roundLengths&&(C=Math.floor(C)),d[$]&&(this.isHorizontal()?d[$].style.width=C+"px":d[$].style.height=C+"px");d[$]&&(d[$].swiperSlideSize=C),c.push(C),t.centeredSlides?(b=b+C/2+E/2+y,0===E&&0!==$&&(b=b-s/2-y),0===$&&(b=b-s/2-y),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),x%t.slidesPerGroup==0&&p.push(b),u.push(b)):(t.roundLengths&&(b=Math.floor(b)),(x-Math.min(this.params.slidesPerGroupSkip,x))%this.params.slidesPerGroup==0&&p.push(b),u.push(b),b=b+C+y),this.virtualSize+=C+y,E=C,x+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===t.effect||"coverflow"===t.effect)&&i.css({width:this.virtualSize+t.spaceBetween+"px"}),t.setWrapperSize&&(this.isHorizontal()?i.css({width:this.virtualSize+t.spaceBetween+"px"}):i.css({height:this.virtualSize+t.spaceBetween+"px"})),t.slidesPerColumn>1&&(this.virtualSize=(C+t.spaceBetween)*T,this.virtualSize=Math.ceil(this.virtualSize/t.slidesPerColumn)-t.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+t.spaceBetween+"px"}):i.css({height:this.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){M=[];for(var Q=0;Q<p.length;Q+=1){var ee=p[Q];t.roundLengths&&(ee=Math.floor(ee)),p[Q]<this.virtualSize+p[0]&&M.push(ee)}p=M}if(!t.centeredSlides){M=[];for(var te=0;te<p.length;te+=1){var ie=p[te];t.roundLengths&&(ie=Math.floor(ie)),p[te]<=this.virtualSize-s&&M.push(ie)}p=M,Math.floor(this.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(this.virtualSize-s)}if(0===p.length&&(p=[0]),0!==t.spaceBetween&&(this.isHorizontal()?a?d.filter(v).css({marginLeft:y+"px"}):d.filter(v).css({marginRight:y+"px"}):d.filter(v).css({marginBottom:y+"px"})),t.centeredSlides&&t.centeredSlidesBounds){var se=0;c.forEach((function(e){se+=e+(t.spaceBetween?t.spaceBetween:0)}));var ae=(se-=t.spaceBetween)-s;p=p.map((function(e){return e<0?-f:e>ae?ae+m:e}))}if(t.centerInsufficientSlides){var re=0;if(c.forEach((function(e){re+=e+(t.spaceBetween?t.spaceBetween:0)})),(re-=t.spaceBetween)<s){var ne=(s-re)/2;p.forEach((function(e,t){p[t]=e-ne})),u.forEach((function(e,t){u[t]=e+ne}))}}S(this,{slides:d,snapGrid:p,slidesGrid:u,slidesSizesGrid:c}),h!==o&&this.emit("slidesLengthChange"),p.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),u.length!==w&&this.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)if(this.params.centeredSlides)this.visibleSlides.each((function(e){i.push(e)}));else for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,s=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var a=-e;s&&(a=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var r=0;r<i.length;r+=1){var n=i[r],l=(a+(t.centeredSlides?this.minTranslate():0)-n.swiperSlideOffset)/(n.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility||t.centeredSlides&&t.autoHeight){var o=-(a-n.swiperSlideOffset),d=o+this.slidesSizesGrid[r];(o>=0&&o<this.size-1||d>1&&d<=this.size||o<=0&&d>=this.size)&&(this.visibleSlides.push(n),this.visibleSlidesIndexes.push(r),i.eq(r).addClass(t.slideVisibleClass))}n.progress=s?-l:l}this.visibleSlides=m(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;e=this&&this.translate&&this.translate*t||0}var i=this.params,s=this.maxTranslate()-this.minTranslate(),a=this.progress,r=this.isBeginning,n=this.isEnd,l=r,o=n;0===s?(a=0,r=!0,n=!0):(r=(a=(e-this.minTranslate())/s)<=0,n=a>=1),S(this,{progress:a,isBeginning:r,isEnd:n}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&this.updateSlidesProgress(e),r&&!l&&this.emit("reachBeginning toEdge"),n&&!o&&this.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&this.emit("fromEdge"),this.emit("progress",a)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=t.eq(0)).addClass(i.slideNextClass);var o=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===o.length&&(o=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass)),this.emitSlidesClasses()},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,n=this.activeIndex,l=this.realIndex,o=this.snapIndex,d=e;if(void 0===d){for(var h=0;h<s.length;h+=1)void 0!==s[h+1]?i>=s[h]&&i<s[h+1]-(s[h+1]-s[h])/2?d=h:i>=s[h]&&i<s[h+1]&&(d=h+1):i>=s[h]&&(d=h);r.normalizeSlideIndex&&(d<0||void 0===d)&&(d=0)}if(a.indexOf(i)>=0)t=a.indexOf(i);else{var p=Math.min(r.slidesPerGroupSkip,d);t=p+Math.floor((d-p)/r.slidesPerGroup)}if(t>=a.length&&(t=a.length-1),d!==n){var u=parseInt(this.slides.eq(d).attr("data-swiper-slide-index")||d,10);S(this,{snapIndex:t,realIndex:u,previousIndex:n,activeIndex:d}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),l!==u&&this.emit("realIndexChange"),(this.initialized||this.params.runCallbacksOnInit)&&this.emit("slideChange")}else t!==o&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=m(e.target).closest("."+t.slideClass)[0],s=!1;if(i)for(var a=0;a<this.slides.length;a+=1)this.slides[a]===i&&(s=!0);if(!i||!s)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(m(i).attr("data-swiper-slide-index"),10):this.clickedIndex=m(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}},translate:{getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var r=T(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.wrapperEl,n=this.progress,l=0,o=0;this.isHorizontal()?l=i?-e:e:o=e,s.roundLengths&&(l=Math.floor(l),o=Math.floor(o)),s.cssMode?r[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-l:-o:s.virtualTranslate||a.transform("translate3d("+l+"px, "+o+"px, 0px)"),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?l:o;var d=this.maxTranslate()-this.minTranslate();(0===d?0:(e-this.minTranslate())/d)!==n&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,s,a){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===s&&(s=!0);var r=this,n=r.params,l=r.wrapperEl;if(r.animating&&n.preventInteractionOnTransition)return!1;var o,d=r.minTranslate(),h=r.maxTranslate();if(o=s&&e>d?d:s&&e<h?h:e,r.updateProgress(o),n.cssMode){var p,u=r.isHorizontal();if(0===t)l[u?"scrollLeft":"scrollTop"]=-o;else if(l.scrollTo)l.scrollTo(((p={})[u?"left":"top"]=-o,p.behavior="smooth",p));else l[u?"scrollLeft":"scrollTop"]=-o;return!0}return 0===t?(r.setTransition(0),r.setTranslate(o),i&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(o),i&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,i&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;if(!s.cssMode){s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex,a=this.params;if(this.animating=!1,!a.cssMode){this.setTransition(0);var r=t;if(r||(r=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===r?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}}},slide:{slideTo:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=this,r=e;r<0&&(r=0);var n=a.params,l=a.snapGrid,o=a.slidesGrid,d=a.previousIndex,h=a.activeIndex,p=a.rtlTranslate,u=a.wrapperEl;if(a.animating&&n.preventInteractionOnTransition)return!1;var c=Math.min(a.params.slidesPerGroupSkip,r),v=c+Math.floor((r-c)/a.params.slidesPerGroup);v>=l.length&&(v=l.length-1),(h||n.initialSlide||0)===(d||0)&&i&&a.emit("beforeSlideChangeStart");var f,m=-l[v];if(a.updateProgress(m),n.normalizeSlideIndex)for(var g=0;g<o.length;g+=1)-Math.floor(100*m)>=Math.floor(100*o[g])&&(r=g);if(a.initialized&&r!==h){if(!a.allowSlideNext&&m<a.translate&&m<a.minTranslate())return!1;if(!a.allowSlidePrev&&m>a.translate&&m>a.maxTranslate()&&(h||0)!==r)return!1}if(f=r>h?"next":r<h?"prev":"reset",p&&-m===a.translate||!p&&m===a.translate)return a.updateActiveIndex(r),n.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),"slide"!==n.effect&&a.setTranslate(m),"reset"!==f&&(a.transitionStart(i,f),a.transitionEnd(i,f)),!1;if(n.cssMode){var w,y=a.isHorizontal(),b=-m;if(p&&(b=u.scrollWidth-u.offsetWidth-b),0===t)u[y?"scrollLeft":"scrollTop"]=b;else if(u.scrollTo)u.scrollTo(((w={})[y?"left":"top"]=b,w.behavior="smooth",w));else u[y?"scrollLeft":"scrollTop"]=b;return!0}return 0===t?(a.setTransition(0),a.setTranslate(m),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,f),a.transitionEnd(i,f)):(a.setTransition(t),a.setTranslate(m),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,f),a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(e){a&&!a.destroyed&&e.target===this&&(a.$wrapperEl[0].removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].removeEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(i,f))}),a.$wrapperEl[0].addEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].addEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(a&&s.loopPreventsSlide)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return this.slideTo(this.activeIndex+r,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,l=this.rtlTranslate;if(s.loop){if(a&&s.loopPreventsSlide)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function o(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=o(l?this.translate:-this.translate),p=r.map((function(e){return o(e)})),u=(r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0===u&&s.cssMode&&r.forEach((function(e){!u&&h>=e&&(u=e)})),void 0!==u&&(d=n.indexOf(u))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);var a=this.activeIndex,r=Math.min(this.params.slidesPerGroupSkip,a),n=r+Math.floor((a-r)/this.params.slidesPerGroup),l=this.rtlTranslate?this.translate:-this.translate;if(l>=this.snapGrid[n]){var o=this.snapGrid[n];l-o>(this.snapGrid[n+1]-o)*s&&(a+=this.params.slidesPerGroup)}else{var d=this.snapGrid[n-1];l-d<=(this.snapGrid[n]-d)*s&&(a-=this.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,this.slidesGrid.length-1),this.slideTo(a,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,s=t.$wrapperEl,a="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,r=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?r<t.loopedSlides-a/2||r>t.slides.length-t.loopedSlides+a/2?(t.loopFix(),r=s.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r):r>t.slides.length-a?(t.loopFix(),r=s.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r)}else t.slideTo(r)}},loop:{loopCreate:function(){var e=this,t=r(),i=e.params,s=e.$wrapperEl;s.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var a=s.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-a.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var l=0;l<n;l+=1){var o=m(t.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);s.append(o)}a=s.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=a.length),e.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),e.loopedSlides+=i.loopAdditionalSlides,e.loopedSlides>a.length&&(e.loopedSlides=a.length);var d=[],h=[];a.each((function(t,i){var s=m(t);i<e.loopedSlides&&h.push(t),i<a.length&&i>=a.length-e.loopedSlides&&d.push(t),s.attr("data-swiper-slide-index",i)}));for(var p=0;p<h.length;p+=1)s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var u=d.length-1;u>=0;u-=1)s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,i=this.slides,s=this.loopedSlides,a=this.allowSlidePrev,r=this.allowSlideNext,n=this.snapGrid,l=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var o=-n[t]-this.getTranslate();if(t<s)e=i.length-3*s+t,e+=s,this.slideTo(e,0,!1,!0)&&0!==o&&this.setTranslate((l?-this.translate:this.translate)-o);else if(t>=i.length-s){e=-i.length+t+s,e+=s,this.slideTo(e,0,!1,!0)&&0!==o&&this.setTranslate((l?-this.translate:this.translate)-o)}this.allowSlidePrev=a,this.allowSlideNext=r,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){if(!(this.support.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){this.support.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this.el.style.cursor="")}},manipulation:{appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&this.support.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&this.support.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,l=[],o=r-1;o>=e;o-=1){var d=this.slides.eq(o);d.remove(),l.unshift(d)}if("object"==typeof t&&"length"in t){for(var h=0;h<t.length;h+=1)t[h]&&i.append(t[h]);n=a>e?a+t.length:a}else i.append(t);for(var p=0;p<l.length;p+=1)i.append(l[p]);s.loop&&this.loopCreate(),s.observer&&this.support.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&this.support.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},events:{attachEvents:function(){var e=r(),t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,n=this.device,l=this.support;this.onTouchStart=O.bind(this),this.onTouchMove=A.bind(this),this.onTouchEnd=D.bind(this),t.cssMode&&(this.onScroll=B.bind(this)),this.onClick=N.bind(this);var o=!!t.nested;if(!l.touch&&l.pointerEvents)s.addEventListener(i.start,this.onTouchStart,!1),e.addEventListener(i.move,this.onTouchMove,o),e.addEventListener(i.end,this.onTouchEnd,!1);else{if(l.touch){var d=!("touchstart"!==i.start||!l.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,this.onTouchStart,d),s.addEventListener(i.move,this.onTouchMove,l.passiveListener?{passive:!1,capture:o}:o),s.addEventListener(i.end,this.onTouchEnd,d),i.cancel&&s.addEventListener(i.cancel,this.onTouchEnd,d),H||(e.addEventListener("touchstart",X),H=!0)}(t.simulateTouch&&!n.ios&&!n.android||t.simulateTouch&&!l.touch&&n.ios)&&(s.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,o),e.addEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.addEventListener("click",this.onClick,!0),t.cssMode&&a.addEventListener("scroll",this.onScroll),t.updateOnWindowResize?this.on(n.ios||n.android?"resize orientationchange observerUpdate":"resize observerUpdate",G,!0):this.on("observerUpdate",G,!0)},detachEvents:function(){var e=r(),t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,n=this.device,l=this.support,o=!!t.nested;if(!l.touch&&l.pointerEvents)s.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,o),e.removeEventListener(i.end,this.onTouchEnd,!1);else{if(l.touch){var d=!("onTouchStart"!==i.start||!l.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,this.onTouchStart,d),s.removeEventListener(i.move,this.onTouchMove,o),s.removeEventListener(i.end,this.onTouchEnd,d),i.cancel&&s.removeEventListener(i.cancel,this.onTouchEnd,d)}(t.simulateTouch&&!n.ios&&!n.android||t.simulateTouch&&!l.touch&&n.ios)&&(s.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,o),e.removeEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.removeEventListener("click",this.onClick,!0),t.cssMode&&a.removeEventListener("scroll",this.onScroll),this.off(n.ios||n.android?"resize orientationchange observerUpdate":"resize observerUpdate",G)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides,s=void 0===i?0:i,a=this.params,r=this.$el,n=a.breakpoints;if(n&&(!n||0!==Object.keys(n).length)){var l=this.getBreakpoint(n);if(l&&this.currentBreakpoint!==l){var o=l in n?n[l]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=o||this.originalParams,h=a.slidesPerColumn>1,p=d.slidesPerColumn>1;h&&!p?(r.removeClass(a.containerModifierClass+"multirow "+a.containerModifierClass+"multirow-column"),this.emitContainerClasses()):!h&&p&&(r.addClass(a.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&r.addClass(a.containerModifierClass+"multirow-column"),this.emitContainerClasses());var u=d.direction&&d.direction!==a.direction,c=a.loop&&(d.slidesPerView!==a.slidesPerView||u);u&&t&&this.changeDirection(),S(this.params,d),S(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=l,this.emit("_beforeBreakpoint",d),c&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-s+this.loopedSlides,0,!1)),this.emit("breakpoint",d)}}},getBreakpoint:function(e){var t=l();if(e){var i=!1,s=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var i=parseFloat(e.substr(1));return{value:t.innerHeight*i,point:e}}return{value:e,point:e}}));s.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var a=0;a<s.length;a+=1){var r=s[a],n=r.point;r.value<=t.innerWidth&&(i=n)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.params,t=this.isLocked,i=this.slides.length>0&&e.slidesOffsetBefore+e.spaceBetween*(this.slides.length-1)+this.slides[0].offsetWidth*this.slides.length;e.slidesOffsetBefore&&e.slidesOffsetAfter&&i?this.isLocked=i<=this.size:this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,t!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),t&&t!==this.isLocked&&(this.isEnd=!1,this.navigation&&this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=this.device,r=[];r.push("initialized"),r.push(t.direction),t.freeMode&&r.push("free-mode"),t.autoHeight&&r.push("autoheight"),i&&r.push("rtl"),t.slidesPerColumn>1&&(r.push("multirow"),"column"===t.slidesPerColumnFill&&r.push("multirow-column")),a.android&&r.push("android"),a.ios&&r.push("ios"),t.cssMode&&r.push("css-mode"),r.forEach((function(i){e.push(t.containerModifierClass+i)})),s.addClass(e.join(" ")),this.emitContainerClasses()},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" ")),this.emitContainerClasses()}},images:{loadImage:function(e,t,i,s,a,r){var n,o=l();function d(){r&&r()}m(e).parent("picture")[0]||e.complete&&a?d():t?((n=new o.Image).onload=d,n.onerror=d,s&&(n.sizes=s),i&&(n.srcset=i),t&&(n.src=t)):d()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},F={},R=function(){function t(){for(var e,i,s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];1===a.length&&a[0].constructor&&a[0].constructor===Object?i=a[0]:(e=a[0],i=a[1]),i||(i={}),i=S({},i),e&&!i.el&&(i.el=e);var n=this;n.support=z(),n.device=P({userAgent:i.userAgent}),n.browser=k(),n.eventsListeners={},n.eventsAnyListeners=[],void 0===n.modules&&(n.modules={}),Object.keys(n.modules).forEach((function(e){var t=n.modules[e];if(t.params){var s=Object.keys(t.params)[0],a=t.params[s];if("object"!=typeof a||null===a)return;if(!(s in i)||!("enabled"in a))return;!0===i[s]&&(i[s]={enabled:!0}),"object"!=typeof i[s]||"enabled"in i[s]||(i[s].enabled=!0),i[s]||(i[s]={enabled:!1})}}));var l=S({},Y);n.useParams(l),n.params=S({},l,F,i),n.originalParams=S({},n.params),n.passedParams=S({},i),n.params&&n.params.on&&Object.keys(n.params.on).forEach((function(e){n.on(e,n.params.on[e])})),n.params&&n.params.onAny&&n.onAny(n.params.onAny),n.$=m;var o=m(n.params.el);if(e=o[0]){if(o.length>1){var d=[];return o.each((function(e){var s=S({},i,{el:e});d.push(new t(s))})),d}var h,p,u;return e.swiper=n,e&&e.shadowRoot&&e.shadowRoot.querySelector?(h=m(e.shadowRoot.querySelector("."+n.params.wrapperClass))).children=function(e){return o.children(e)}:h=o.children("."+n.params.wrapperClass),S(n,{$el:o,el:e,$wrapperEl:h,wrapperEl:h[0],classNames:[],slides:m(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===n.params.direction},isVertical:function(){return"vertical"===n.params.direction},rtl:"rtl"===e.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===n.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===h.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEvents:(p=["touchstart","touchmove","touchend","touchcancel"],u=["mousedown","mousemove","mouseup"],n.support.pointerEvents&&(u=["pointerdown","pointermove","pointerup"]),n.touchEventsTouch={start:p[0],move:p[1],end:p[2],cancel:p[3]},n.touchEventsDesktop={start:u[0],move:u[1],end:u[2]},n.support.touch||!n.params.simulateTouch?n.touchEventsTouch:n.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:x(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.useModules(),n.emit("_swiper"),n.params.init&&n.init(),n}}var i,s,a,r=t.prototype;return r.emitContainerClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=e.el.className.split(" ").filter((function(t){return 0===t.indexOf("swiper-container")||0===t.indexOf(e.params.containerModifierClass)}));e.emit("_containerClasses",t.join(" "))}},r.emitSlidesClasses=function(){var e=this;e.params._emitClasses&&e.el&&e.slides.each((function(t){var i=t.className.split(" ").filter((function(t){return 0===t.indexOf("swiper-slide")||0===t.indexOf(e.params.slideClass)}));e.emit("_slideClass",t,i.join(" "))}))},r.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,l=t[a].swiperSlideSize,o=a+1;o<t.length;o+=1)t[o]&&!n&&(r+=1,(l+=t[o].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(l+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},r.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},r.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(this.$el.removeClass(""+this.params.containerModifierClass+i).addClass(""+this.params.containerModifierClass+e),this.emitContainerClasses(),this.params.direction=e,this.slides.each((function(t){"vertical"===e?t.style.width="":t.style.height=""})),this.emit("changeDirection"),t&&this.update()),this},r.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"),this.emit("afterInit"))},r.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i,s=this,a=s.params,r=s.$el,n=s.$wrapperEl,l=s.slides;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),r.removeAttr("style"),n.removeAttr("style"),l&&l.length&&l.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((function(e){s.off(e)})),!1!==e&&(s.$el[0].swiper=null,i=s,Object.keys(i).forEach((function(e){try{i[e]=null}catch(e){}try{delete i[e]}catch(e){}}))),s.destroyed=!0),null},t.extendDefaults=function(e){S(F,e)},t.installModule=function(e){t.prototype.modules||(t.prototype.modules={});var i=e.name||Object.keys(t.prototype.modules).length+"_"+x();t.prototype.modules[i]=e},t.use=function(e){return Array.isArray(e)?(e.forEach((function(e){return t.installModule(e)})),t):(t.installModule(e),t)},i=t,a=[{key:"extendedDefaults",get:function(){return F}},{key:"defaults",get:function(){return Y}}],(s=null)&&e(i.prototype,s),a&&e(i,a),t}();Object.keys(V).forEach((function(e){Object.keys(V[e]).forEach((function(t){R.prototype[t]=V[e][t]}))})),R.use([$,I]);var W={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,n=t.params.virtual,l=n.addSlidesBefore,o=n.addSlidesAfter,d=t.virtual,h=d.from,p=d.to,u=d.slides,c=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,w,y=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(s/2)+a+o,w=Math.floor(s/2)+a+l):(g=s+(a-1)+o,w=a+l);var b=Math.max((y||0)-w,0),E=Math.min((y||0)+g,u.length-1),x=(t.slidesGrid[b]||0)-(t.slidesGrid[0]||0);function T(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(S(t.virtual,{from:b,to:E,offset:x,slidesGrid:t.slidesGrid}),h===b&&p===E&&!e)return t.slidesGrid!==c&&x!==f&&t.slides.css(m,x+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:x,from:b,to:E,slides:function(){for(var e=[],t=b;t<=E;t+=1)e.push(u[t]);return e}()}),void(t.params.virtual.renderExternalUpdate&&T());var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var z=h;z<=p;z+=1)(z<b||z>E)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+z+'"]').remove();for(var P=0;P<u.length;P+=1)P>=b&&P<=E&&(void 0===p||e?M.push(P):(P>p&&M.push(P),P<h&&C.push(P)));M.forEach((function(e){t.$wrapperEl.append(v(u[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(v(u[e],e))})),t.$wrapperEl.children(".swiper-slide").css(m,x+"px"),T()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var s=i.renderSlide?m(i.renderSlide.call(this,e,t)):m('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=s),s},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var r=this.virtual.cache,n={};Object.keys(r).forEach((function(e){var t=r[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+1),n[parseInt(e,10)+s]=t})),this.virtual.cache=n}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},q={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}},create:function(){M(this,{virtual:t(t({},W),{},{slides:this.params.virtual.slides,cache:{}})})},on:{beforeInit:function(e){if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};S(e.params,t),S(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(e){e.params.virtual.enabled&&e.virtual.update()}}},j={handle:function(e){var t=l(),i=r(),s=this.rtlTranslate,a=e;a.originalEvent&&(a=a.originalEvent);var n=a.keyCode||a.charCode,o=this.params.keyboard.pageUpDown,d=o&&33===n,h=o&&34===n,p=37===n,u=39===n,c=38===n,v=40===n;if(!this.allowSlideNext&&(this.isHorizontal()&&u||this.isVertical()&&v||h))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&p||this.isVertical()&&c||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||i.activeElement&&i.activeElement.nodeName&&("input"===i.activeElement.nodeName.toLowerCase()||"textarea"===i.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(d||h||p||u||c||v)){var f=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var m=t.innerWidth,g=t.innerHeight,w=this.$el.offset();s&&(w.left-=this.$el[0].scrollLeft);for(var y=[[w.left,w.top],[w.left+this.width,w.top],[w.left,w.top+this.height],[w.left+this.width,w.top+this.height]],b=0;b<y.length;b+=1){var E=y[b];E[0]>=0&&E[0]<=m&&E[1]>=0&&E[1]<=g&&(f=!0)}if(!f)return}this.isHorizontal()?((d||h||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((h||u)&&!s||(d||p)&&s)&&this.slideNext(),((d||p)&&!s||(h||u)&&s)&&this.slidePrev()):((d||h||c||v)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(h||v)&&this.slideNext(),(d||c)&&this.slidePrev()),this.emit("keyPress",n)}},enable:function(){var e=r();this.keyboard.enabled||(m(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){var e=r();this.keyboard.enabled&&(m(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},_={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create:function(){M(this,{keyboard:t({enabled:!1},j)})},on:{init:function(e){e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(e){e.keyboard.enabled&&e.keyboard.disable()}}};var U={lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return l().navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e=r(),t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel"},normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),e.shiftKey&&!s&&(s=a,a=0),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,i=this,s=i.params.mousewheel;i.params.cssMode&&t.preventDefault();var a=i.$el;if("container"!==i.params.mousewheel.eventsTarget&&(a=m(i.params.mousewheel.eventsTarget)),!i.mouseEntered&&!a[0].contains(t.target)&&!s.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var r=0,n=i.rtlTranslate?-1:1,l=U.normalize(t);if(s.forceToAxis)if(i.isHorizontal()){if(!(Math.abs(l.pixelX)>Math.abs(l.pixelY)))return!0;r=-l.pixelX*n}else{if(!(Math.abs(l.pixelY)>Math.abs(l.pixelX)))return!0;r=-l.pixelY}else r=Math.abs(l.pixelX)>Math.abs(l.pixelY)?-l.pixelX*n:-l.pixelY;if(0===r)return!0;if(s.invert&&(r=-r),i.params.freeMode){var o={time:x(),delta:Math.abs(r),direction:Math.sign(r)},d=i.mousewheel.lastEventBeforeSnap,h=d&&o.time<d.time+500&&o.delta<=d.delta&&o.direction===d.direction;if(!h){i.mousewheel.lastEventBeforeSnap=void 0,i.params.loop&&i.loopFix();var p=i.getTranslate()+r*s.sensitivity,u=i.isBeginning,c=i.isEnd;if(p>=i.minTranslate()&&(p=i.minTranslate()),p<=i.maxTranslate()&&(p=i.maxTranslate()),i.setTransition(0),i.setTranslate(p),i.updateProgress(),i.updateActiveIndex(),i.updateSlidesClasses(),(!u&&i.isBeginning||!c&&i.isEnd)&&i.updateSlidesClasses(),i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout),i.mousewheel.timeout=void 0;var v=i.mousewheel.recentWheelEvents;v.length>=15&&v.shift();var f=v.length?v[v.length-1]:void 0,g=v[0];if(v.push(o),f&&(o.delta>f.delta||o.direction!==f.direction))v.splice(0);else if(v.length>=15&&o.time-g.time<500&&g.delta-o.delta>=1&&o.delta<=6){var w=r>0?.8:.2;i.mousewheel.lastEventBeforeSnap=o,v.splice(0),i.mousewheel.timeout=E((function(){i.slideToClosest(i.params.speed,!0,void 0,w)}),0)}i.mousewheel.timeout||(i.mousewheel.timeout=E((function(){i.mousewheel.lastEventBeforeSnap=o,v.splice(0),i.slideToClosest(i.params.speed,!0,void 0,.5)}),500))}if(h||i.emit("scroll",t),i.params.autoplay&&i.params.autoplayDisableOnInteraction&&i.autoplay.stop(),p===i.minTranslate()||p===i.maxTranslate())return!0}}else{var y={time:x(),delta:Math.abs(r),direction:Math.sign(r),raw:e},b=i.mousewheel.recentWheelEvents;b.length>=2&&b.shift();var T=b.length?b[b.length-1]:void 0;if(b.push(y),T?(y.direction!==T.direction||y.delta>T.delta||y.time>T.time+150)&&i.mousewheel.animateSlider(y):i.mousewheel.animateSlider(y),i.mousewheel.releaseScroll(y))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){var t=l();return!(this.params.mousewheel.thresholdDelta&&e.delta<this.params.mousewheel.thresholdDelta)&&(!(this.params.mousewheel.thresholdTime&&x()-this.mousewheel.lastScrollTime<this.params.mousewheel.thresholdTime)&&(e.delta>=6&&x()-this.mousewheel.lastScrollTime<60||(e.direction<0?this.isEnd&&!this.params.loop||this.animating||(this.slideNext(),this.emit("scroll",e.raw)):this.isBeginning&&!this.params.loop||this.animating||(this.slidePrev(),this.emit("scroll",e.raw)),this.mousewheel.lastScrollTime=(new t.Date).getTime(),!1)))},releaseScroll:function(e){var t=this.params.mousewheel;if(e.direction<0){if(this.isEnd&&!this.params.loop&&t.releaseOnEdges)return!0}else if(this.isBeginning&&!this.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=U.event();if(this.params.cssMode)return this.wrapperEl.removeEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarget&&(t=m(this.params.mousewheel.eventsTarget)),t.on("mouseenter",this.mousewheel.handleMouseEnter),t.on("mouseleave",this.mousewheel.handleMouseLeave),t.on(e,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){var e=U.event();if(this.params.cssMode)return this.wrapperEl.addEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(!this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarget&&(t=m(this.params.mousewheel.eventsTarget)),t.off(e,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},K={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=m(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=m(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),S(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},Z={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,s=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,a=this.pagination.$el,r=this.params.loop?Math.ceil((s-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>s-1-2*this.loopedSlides&&(i-=s-2*this.loopedSlides),i>r-1&&(i-=r),i<0&&"bullets"!==this.params.paginationType&&(i=r+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var n,l,o,d=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=d.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),a.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),n=i-this.pagination.dynamicBulletIndex,o=((l=n+(Math.min(d.length,t.dynamicMainBullets)-1))+n)/2),d.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),a.length>1)d.each((function(e){var s=m(e),a=s.index();a===i&&s.addClass(t.bulletActiveClass),t.dynamicBullets&&(a>=n&&a<=l&&s.addClass(t.bulletActiveClass+"-main"),a===n&&s.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),a===l&&s.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var h=d.eq(i),p=h.index();if(h.addClass(t.bulletActiveClass),t.dynamicBullets){for(var u=d.eq(n),c=d.eq(l),v=n;v<=l;v+=1)d.eq(v).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(p>=d.length-t.dynamicMainBullets){for(var f=t.dynamicMainBullets;f>=0;f-=1)d.eq(d.length-f).addClass(t.bulletActiveClass+"-main");d.eq(d.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),c.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),c.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(d.length,t.dynamicMainBullets+4),w=(this.pagination.bulletSize*g-this.pagination.bulletSize)/2-o*this.pagination.bulletSize,y=e?"right":"left";d.css(this.isHorizontal()?y:"top",w+"px")}}if("fraction"===t.type&&(a.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),a.find("."+t.totalClass).text(t.formatFractionTotal(r))),"progressbar"===t.type){var b;b=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var E=(i+1)/r,x=1,T=1;"horizontal"===b?x=E:T=E,a.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+x+") scaleY("+T+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(a.html(t.renderCustom(this,i+1,r)),this.emit("paginationRender",a[0])):this.emit("paginationUpdate",a[0]),a[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=m(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=m(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),S(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},J={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,l=this.params.scrollbar,o=s,d=(a-s)*i;t?(d=-d)>0?(o=s-d,d=0):-d+s>a&&(o=a+d):d<0?(o=s+d,d=0):d+s>a&&(o=a-d),this.isHorizontal()?(r.transform("translate3d("+d+"px, 0, 0)"),r[0].style.width=o+"px"):(r.transform("translate3d(0px, "+d+"px, 0)"),r[0].style.height=o+"px"),l.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout((function(){n[0].style.opacity=0,n.transition(400)}),1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,n=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbar.hide&&(i[0].style.opacity=0),S(e,{trackSize:a,divider:r,moveDivider:n,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize,l=i.dragStartPos;t=(i.getPointerPosition(e)-a.offset()[this.isHorizontal()?"left":"top"]-(null!==l?l:r/2))/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var o=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(o),this.setTranslate(o),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,this.scrollbar.dragStartPos=e.target===r[0]||e.target===r?i.getPointerPosition(e)-e.target.getBoundingClientRect()[this.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.params.cssMode&&this.$wrapperEl.css("scroll-snap-type","none"),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,this.params.cssMode&&(this.$wrapperEl.css("scroll-snap-type",""),s.transition("")),t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=E((function(){a.css("opacity",0),a.transition(400)}),1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var e=r(),t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,n=this.support,l=t.$el[0],o=!(!n.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},d=!(!n.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};n.touch?(l.addEventListener(i.start,this.scrollbar.onDragStart,o),l.addEventListener(i.move,this.scrollbar.onDragMove,o),l.addEventListener(i.end,this.scrollbar.onDragEnd,d)):(l.addEventListener(s.start,this.scrollbar.onDragStart,o),e.addEventListener(s.move,this.scrollbar.onDragMove,o),e.addEventListener(s.end,this.scrollbar.onDragEnd,d))}},disableDraggable:function(){if(this.params.scrollbar.el){var e=r(),t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,n=this.support,l=t.$el[0],o=!(!n.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},d=!(!n.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};n.touch?(l.removeEventListener(i.start,this.scrollbar.onDragStart,o),l.removeEventListener(i.move,this.scrollbar.onDragMove,o),l.removeEventListener(i.end,this.scrollbar.onDragEnd,d)):(l.removeEventListener(s.start,this.scrollbar.onDragStart,o),e.removeEventListener(s.move,this.scrollbar.onDragMove,o),e.removeEventListener(s.end,this.scrollbar.onDragEnd,d))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,s=m(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&s.length>1&&1===t.find(i.el).length&&(s=t.find(i.el));var a=s.find("."+this.params.scrollbar.dragClass);0===a.length&&(a=m('<div class="'+this.params.scrollbar.dragClass+'"></div>'),s.append(a)),S(e,{$el:s,el:s[0],$dragEl:a,dragEl:a[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},Q={setTransform:function(e,t){var i=this.rtl,s=m(e),a=i?-1:1,r=s.attr("data-swiper-parallax")||"0",n=s.attr("data-swiper-parallax-x"),l=s.attr("data-swiper-parallax-y"),o=s.attr("data-swiper-parallax-scale"),d=s.attr("data-swiper-parallax-opacity");if(n||l?(n=n||"0",l=l||"0"):this.isHorizontal()?(n=r,l="0"):(l=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*t*a+"%":n*t*a+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=d){var h=d-(d-1)*(1-Math.abs(t));s[0].style.opacity=h}if(null==o)s.transform("translate3d("+n+", "+l+", 0px)");else{var p=o-(o-1)*(1-Math.abs(t));s.transform("translate3d("+n+", "+l+", 0px) scale("+p+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,s=e.progress,a=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,s)})),i.each((function(t,i){var r=t.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(r+=Math.ceil(i/2)-s*(a.length-1)),r=Math.min(Math.max(r,-1),1),m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,r)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){var i=m(t),s=parseInt(i.attr("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),i.transition(s)}))}},ee={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.support,i=this.params.zoom,s=this.zoom,a=s.gesture;if(s.fakeGestureTouched=!1,s.fakeGestureMoved=!1,!t.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;s.fakeGestureTouched=!0,a.scaleStart=ee.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=m(e.target).closest("."+this.params.slideClass),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),a.$imageWrapEl=a.$imageEl.parent("."+i.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl&&a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.support,i=this.params.zoom,s=this.zoom,a=s.gesture;if(!t.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;s.fakeGestureMoved=!0,a.scaleMove=ee.getDistanceBetweenTouches(e)}a.$imageEl&&0!==a.$imageEl.length?(t.gestures?s.scale=e.scale*s.currentScale:s.scale=a.scaleMove/a.scaleStart*s.currentScale,s.scale>a.maxRatio&&(s.scale=a.maxRatio-1+Math.pow(s.scale-a.maxRatio+1,.5)),s.scale<i.minRatio&&(s.scale=i.minRatio+1-Math.pow(i.minRatio-s.scale+1,.5)),a.$imageEl.transform("translate3d(0,0,0) scale("+s.scale+")")):"gesturechange"===e.type&&s.onGestureStart(e)},onGestureEnd:function(e){var t=this.device,i=this.support,s=this.params.zoom,a=this.zoom,r=a.gesture;if(!i.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!t.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}r.$imageEl&&0!==r.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,r.maxRatio),s.minRatio),r.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(r.$slideEl=void 0))},onTouchStart:function(e){var t=this.device,i=this.zoom,s=i.gesture,a=i.image;s.$imageEl&&0!==s.$imageEl.length&&(a.isTouched||(t.android&&e.cancelable&&e.preventDefault(),a.isTouched=!0,a.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,a.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=T(i.$imageWrapEl[0],"x")||0,s.startY=T(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,n=s.height*t.scale;if(!(r<i.slideWidth&&n<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-n/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,l=i.currentX+n,o=s.y*r,d=i.currentY+o;0!==s.x&&(a=Math.abs((l-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=l,i.currentY=d;var p=i.width*e.scale,u=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-u/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl&&t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl&&t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,s,a,r,n,l,o,d,h,p,u,c,v,f,m,g=this.zoom,w=this.params.zoom,y=g.gesture,b=g.image;(y.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?y.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):y.$slideEl=this.slides.eq(this.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===b.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=b.touchesStart.x,i=b.touchesStart.y),g.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,g.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,s=y.$slideEl.offset().left+f/2-t,a=y.$slideEl.offset().top+m/2-i,l=y.$imageEl[0].offsetWidth,o=y.$imageEl[0].offsetHeight,d=l*g.scale,h=o*g.scale,c=-(p=Math.min(f/2-d/2,0)),v=-(u=Math.min(m/2-h/2,0)),(r=s*g.scale)<p&&(r=p),r>c&&(r=c),(n=a*g.scale)<u&&(n=u),n>v&&(n=v)):(r=0,n=0),y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+g.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(this.params.virtual&&this.params.virtual.enabled&&this.virtual?i.$slideEl=this.$wrapperEl.children("."+this.params.slideActiveClass):i.$slideEl=this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},toggleGestures:function(e){var t=this.zoom,i=t.slideSelector,s=t.passiveListener;this.$wrapperEl[e]("gesturestart",i,t.onGestureStart,s),this.$wrapperEl[e]("gesturechange",i,t.onGestureChange,s),this.$wrapperEl[e]("gestureend",i,t.onGestureEnd,s)},enableGestures:function(){this.zoom.gesturesEnabled||(this.zoom.gesturesEnabled=!0,this.zoom.toggleGestures("on"))},disableGestures:function(){this.zoom.gesturesEnabled&&(this.zoom.gesturesEnabled=!1,this.zoom.toggleGestures("off"))},enable:function(){var e=this.support,t=this.zoom;if(!t.enabled){t.enabled=!0;var i=!("touchstart"!==this.touchEvents.start||!e.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},s=!e.passiveListener||{passive:!1,capture:!0},a="."+this.params.slideClass;this.zoom.passiveListener=i,this.zoom.slideSelector=a,e.gestures?(this.$wrapperEl.on(this.touchEvents.start,this.zoom.enableGestures,i),this.$wrapperEl.on(this.touchEvents.end,this.zoom.disableGestures,i)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,a,t.onGestureStart,i),this.$wrapperEl.on(this.touchEvents.move,a,t.onGestureChange,s),this.$wrapperEl.on(this.touchEvents.end,a,t.onGestureEnd,i),this.touchEvents.cancel&&this.$wrapperEl.on(this.touchEvents.cancel,a,t.onGestureEnd,i)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,t.onTouchMove,s)}},disable:function(){var e=this.zoom;if(e.enabled){var t=this.support;this.zoom.enabled=!1;var i=!("touchstart"!==this.touchEvents.start||!t.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},s=!t.passiveListener||{passive:!1,capture:!0},a="."+this.params.slideClass;t.gestures?(this.$wrapperEl.off(this.touchEvents.start,this.zoom.enableGestures,i),this.$wrapperEl.off(this.touchEvents.end,this.zoom.disableGestures,i)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,a,e.onGestureStart,i),this.$wrapperEl.off(this.touchEvents.move,a,e.onGestureChange,s),this.$wrapperEl.off(this.touchEvents.end,a,e.onGestureEnd,i),this.touchEvents.cancel&&this.$wrapperEl.off(this.touchEvents.cancel,a,e.onGestureEnd,i)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,s)}}},te={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,s=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var a=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),r=a.find("."+s.elementClass+":not(."+s.loadedClass+"):not(."+s.loadingClass+")");!a.hasClass(s.elementClass)||a.hasClass(s.loadedClass)||a.hasClass(s.loadingClass)||r.push(a[0]),0!==r.length&&r.each((function(e){var r=m(e);r.addClass(s.loadingClass);var n=r.attr("data-background"),l=r.attr("data-src"),o=r.attr("data-srcset"),d=r.attr("data-sizes"),h=r.parent("picture");i.loadImage(r[0],l||n,o,d,!1,(function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(n?(r.css("background-image",'url("'+n+'")'),r.removeAttr("data-background")):(o&&(r.attr("srcset",o),r.removeAttr("data-srcset")),d&&(r.attr("sizes",d),r.removeAttr("data-sizes")),h.length&&h.children("source").each((function(e){var t=m(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),l&&(r.attr("src",l),r.removeAttr("data-src"))),r.addClass(s.loadedClass).removeClass(s.loadingClass),a.find("."+s.preloaderClass).remove(),i.params.loop&&t){var e=a.attr("data-swiper-slide-index");if(a.hasClass(i.params.slideDuplicateClass)){var p=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(p.index(),!1)}else{var u=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(u.index(),!1)}}i.emit("lazyImageReady",a[0],r[0]),i.params.autoHeight&&i.updateAutoHeight()}})),i.emit("lazyImageLoad",a[0],r[0])}))}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,s=e.slides,a=e.activeIndex,r=e.virtual&&i.virtual.enabled,n=i.lazy,l=i.slidesPerView;function o(e){if(r){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?m(e).attr("data-swiper-slide-index"):m(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each((function(t){var i=r?m(t).attr("data-swiper-slide-index"):m(t).index();e.lazy.loadInSlide(i)}));else if(l>1)for(var h=a;h<a+l;h+=1)o(h)&&e.lazy.loadInSlide(h);else e.lazy.loadInSlide(a);if(n.loadPrevNext)if(l>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){for(var p=n.loadPrevNextAmount,u=l,c=Math.min(a+u+Math.max(p,u),s.length),v=Math.max(a-Math.max(u,p),0),f=a+l;f<c;f+=1)o(f)&&e.lazy.loadInSlide(f);for(var g=v;g<a;g+=1)o(g)&&e.lazy.loadInSlide(g)}else{var w=t.children("."+i.slideNextClass);w.length>0&&e.lazy.loadInSlide(d(w));var y=t.children("."+i.slidePrevClass);y.length>0&&e.lazy.loadInSlide(d(y))}}},ie={LinearSpline:function(e,t){var i,s,a,r,n,l=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=l(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new ie.LinearSpline(this.slidesGrid,e.slidesGrid):new ie.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control,n=a.constructor;function l(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof n&&l(r[o]);else r instanceof n&&t!==r&&l(r)},setTransition:function(e,t){var i,s=this,a=s.constructor,r=s.controller.control;function n(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&E((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){r&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(r))for(i=0;i<r.length;i+=1)r[i]!==t&&r[i]instanceof a&&n(r[i]);else r instanceof a&&t!==r&&n(r)}},se={getRandomNumber:function(e){void 0===e&&(e=16);return"x".repeat(e).replace(/x/g,(function(){return Math.round(16*Math.random()).toString(16)}))},makeElFocusable:function(e){return e.attr("tabIndex","0"),e},makeElNotFocusable:function(e){return e.attr("tabIndex","-1"),e},addElRole:function(e,t){return e.attr("role",t),e},addElRoleDescription:function(e,t){return e.attr("aria-role-description",t),e},addElControls:function(e,t){return e.attr("aria-controls",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},addElId:function(e,t){return e.attr("id",t),e},addElLive:function(e,t){return e.attr("aria-live",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=m(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop&&this.navigation){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?(this.a11y.disableEl(i),this.a11y.makeElNotFocusable(i)):(this.a11y.enableEl(i),this.a11y.makeElFocusable(i))),t&&t.length>0&&(this.isEnd?(this.a11y.disableEl(t),this.a11y.makeElNotFocusable(t)):(this.a11y.enableEl(t),this.a11y.makeElFocusable(t)))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(i){var s=m(i);e.a11y.makeElFocusable(s),e.params.pagination.renderBullet||(e.a11y.addElRole(s,"button"),e.a11y.addElLabel(s,t.paginationBulletMessage.replace(/\{\{index\}\}/,s.index()+1)))}))},init:function(){var e=this,t=e.params.a11y;e.$el.append(e.a11y.liveRegion);var i=e.$el;t.containerRoleDescriptionMessage&&e.a11y.addElRoleDescription(i,t.containerRoleDescriptionMessage),t.containerMessage&&e.a11y.addElLabel(i,t.containerMessage);var s,a,r,n=e.$wrapperEl,l=n.attr("id")||"swiper-wrapper-"+e.a11y.getRandomNumber(16);e.a11y.addElId(n,l),s=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite",e.a11y.addElLive(n,s),t.itemRoleDescriptionMessage&&e.a11y.addElRoleDescription(m(e.slides),t.itemRoleDescriptionMessage),e.a11y.addElRole(m(e.slides),"group"),e.slides.each((function(t){var i=m(t);e.a11y.addElLabel(i,i.index()+1+" / "+e.slides.length)})),e.navigation&&e.navigation.$nextEl&&(a=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(r=e.navigation.$prevEl),a&&a.length&&(e.a11y.makeElFocusable(a),"BUTTON"!==a[0].tagName&&(e.a11y.addElRole(a,"button"),a.on("keydown",e.a11y.onEnterKey)),e.a11y.addElLabel(a,t.nextSlideMessage),e.a11y.addElControls(a,l)),r&&r.length&&(e.a11y.makeElFocusable(r),"BUTTON"!==r[0].tagName&&(e.a11y.addElRole(r,"button"),r.on("keydown",e.a11y.onEnterKey)),e.a11y.addElLabel(r,t.prevSlideMessage),e.a11y.addElControls(r,l)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},ae={init:function(){var e=l();if(this.params.history){if(!e.history||!e.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var t=this.history;t.initialized=!0,t.paths=ae.getPathValues(this.params.url),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||e.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){var e=l();this.params.history.replaceState||e.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=ae.getPathValues(this.params.url),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(e){var t=l(),i=(e?new URL(e):t.location).pathname.slice(1).split("/").filter((function(e){return""!==e})),s=i.length;return{key:i[s-2],value:i[s-1]}},setHistory:function(e,t){var i=l();if(this.history.initialized&&this.params.history.enabled){var s;s=this.params.url?new URL(this.params.url):i.location;var a=this.slides.eq(t),r=ae.slugify(a.attr("data-history"));s.pathname.includes(e)||(r=e+"/"+r);var n=i.history.state;n&&n.value===r||(this.params.history.replaceState?i.history.replaceState({value:r},null,r):i.history.pushState({value:r},null,r))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(ae.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},re={onHashCange:function(){var e=r();this.emit("hashChange");var t=e.location.hash.replace("#","");if(t!==this.slides.eq(this.activeIndex).attr("data-hash")){var i=this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===i)return;this.slideTo(i)}},setHash:function(){var e=l(),t=r();if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&e.history&&e.history.replaceState)e.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||""),this.emit("hashSet");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");t.location.hash=s||"",this.emit("hashSet")}},init:function(){var e=r(),t=l();if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var s=0,a=this.slides.length;s<a;s+=1){var n=this.slides.eq(s);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&m(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){var e=l();this.params.hashNavigation.watchState&&m(e).off("hashchange",this.hashNavigation.onHashCange)}},ne={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=E((function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),e.params.cssMode&&e.autoplay.running&&e.autoplay.run()}),i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))},onVisibilityChange:function(){var e=r();"hidden"===e.visibilityState&&this.autoplay.running&&this.autoplay.pause(),"visible"===e.visibilityState&&this.autoplay.paused&&(this.autoplay.run(),this.autoplay.paused=!1)},onTransitionEnd:function(e){this&&!this.destroyed&&this.$wrapperEl&&e.target===this.$wrapperEl[0]&&(this.$wrapperEl[0].removeEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].removeEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd),this.autoplay.paused=!1,this.autoplay.running?this.autoplay.run():this.autoplay.stop())}},le={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd((function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}}))}}},oe={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,s=this.slides,a=this.width,r=this.height,n=this.rtlTranslate,l=this.size,o=this.browser,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,u=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:a+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var c=0;c<s.length;c+=1){var v=s.eq(c),f=c;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var g=90*f,w=Math.floor(g/360);n&&(g=-g,w=Math.floor(-g/360));var y=Math.max(Math.min(v[0].progress,1),-1),b=0,E=0,x=0;f%4==0?(b=4*-w*l,x=0):(f-1)%4==0?(b=0,x=4*-w*l):(f-2)%4==0?(b=l+4*w*l,x=l):(f-3)%4==0&&(b=-l,x=3*l+4*l*w),n&&(b=-b),h||(E=b,b=0);var T="rotateX("+(h?0:-g)+"deg) rotateY("+(h?g:0)+"deg) translate3d("+b+"px, "+E+"px, "+x+"px)";if(y<=1&&y>-1&&(u=90*f+90*y,n&&(u=90*-f-90*y)),v.transform(T),d.slideShadows){var C=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===C.length&&(C=m('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(C)),0===S.length&&(S=m('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(S)),C.length&&(C[0].style.opacity=Math.max(-y,0)),S.length&&(S[0].style.opacity=Math.max(y,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(a/2+d.shadowOffset)+"px, "+-a/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var M=Math.abs(u)-90*Math.floor(Math.abs(u)/90),z=1.5-(Math.sin(2*M*Math.PI/360)/2+Math.cos(2*M*Math.PI/360)/2),P=d.shadowScale,k=d.shadowScale/z,$=d.shadowOffset;e.transform("scale3d("+P+", 1, "+k+") translate3d(0px, "+(r/2+$)+"px, "+-r/2/k+"px) rotateX(-90deg)")}var L=o.isSafari||o.isWebView?-l/2:0;i.transform("translate3d(0px,0,"+L+"px) rotateX("+(this.isHorizontal()?0:u)+"deg) rotateY("+(this.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},de={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var s=e.eq(i),a=s[0].progress;this.params.flipEffect.limitRotation&&(a=Math.max(Math.min(s[0].progress,1),-1));var r=-180*a,n=0,l=-s[0].swiperSlideOffset,o=0;if(this.isHorizontal()?t&&(r=-r):(o=l,l=0,n=-r,r=0),s[0].style.zIndex=-Math.abs(Math.round(a))+e.length,this.params.flipEffect.slideShadows){var d=this.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),h=this.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===d.length&&(d=m('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),s.append(d)),0===h.length&&(h=m('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),s.append(h)),d.length&&(d[0].style.opacity=Math.max(-a,0)),h.length&&(h[0].style.opacity=Math.max(a,0))}s.transform("translate3d("+l+"px, "+o+"px, 0px) rotateX("+n+"deg) rotateY("+r+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}}))}}},he={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,s=this.slidesSizesGrid,a=this.params.coverflowEffect,r=this.isHorizontal(),n=this.translate,l=r?e/2-n:t/2-n,o=r?a.rotate:-a.rotate,d=a.depth,h=0,p=i.length;h<p;h+=1){var u=i.eq(h),c=s[h],v=(l-u[0].swiperSlideOffset-c/2)/c*a.modifier,f=r?o*v:0,g=r?0:o*v,w=-d*Math.abs(v),y=a.stretch;"string"==typeof y&&-1!==y.indexOf("%")&&(y=parseFloat(a.stretch)/100*c);var b=r?0:y*v,E=r?y*v:0,x=1-(1-a.scale)*Math.abs(v);Math.abs(E)<.001&&(E=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0),Math.abs(f)<.001&&(f=0),Math.abs(g)<.001&&(g=0),Math.abs(x)<.001&&(x=0);var T="translate3d("+E+"px,"+b+"px,"+w+"px)  rotateX("+g+"deg) rotateY("+f+"deg) scale("+x+")";if(u.transform(T),u[0].style.zIndex=1-Math.abs(Math.round(v)),a.slideShadows){var C=r?u.find(".swiper-slide-shadow-left"):u.find(".swiper-slide-shadow-top"),S=r?u.find(".swiper-slide-shadow-right"):u.find(".swiper-slide-shadow-bottom");0===C.length&&(C=m('<div class="swiper-slide-shadow-'+(r?"left":"top")+'"></div>'),u.append(C)),0===S.length&&(S=m('<div class="swiper-slide-shadow-'+(r?"right":"bottom")+'"></div>'),u.append(S)),C.length&&(C[0].style.opacity=v>0?v:0),S.length&&(S[0].style.opacity=-v>0?-v:0)}}},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},pe={init:function(){var e=this.params.thumbs;if(this.thumbs.initialized)return!1;this.thumbs.initialized=!0;var t=this.constructor;return e.swiper instanceof t?(this.thumbs.swiper=e.swiper,S(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),S(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):C(e.swiper)&&(this.thumbs.swiper=new t(S({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick),!0},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&m(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var s;if(s=e.params.loop?parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var a=this.activeIndex;this.slides.eq(a).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,a=this.activeIndex);var r=this.slides.eq(a).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),n=this.slides.eq(a).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===r?n:void 0===n?r:n-a<a-r?n:r}this.slideTo(s)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView,s=this.params.thumbs.autoScrollOffset,a=s&&!t.params.loop;if(this.realIndex!==t.realIndex||a){var r,n,l=t.activeIndex;if(t.params.loop){t.slides.eq(l).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,l=t.activeIndex);var o=t.slides.eq(l).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),d=t.slides.eq(l).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();r=void 0===o?d:void 0===d?o:d-l==l-o?l:d-l<l-o?d:o,n=this.activeIndex>this.previousIndex?"next":"prev"}else n=(r=this.realIndex)>this.previousIndex?"next":"prev";a&&(r+="next"===n?s:-1*s),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(r)<0&&(t.params.centeredSlides?r=r>l?r-Math.floor(i/2)+1:r+Math.floor(i/2)-1:r>l&&(r=r-i+1),t.slideTo(r,e?0:void 0))}var h=1,p=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(h=this.params.slidesPerView),this.params.thumbs.multipleActiveThumbs||(h=1),h=Math.floor(h),t.slides.removeClass(p),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var u=0;u<h;u+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+u)+'"]').addClass(p);else for(var c=0;c<h;c+=1)t.slides.eq(this.realIndex+c).addClass(p)}}},ue=[q,_,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}},create:function(){M(this,{mousewheel:{enabled:!1,lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],enable:U.enable,disable:U.disable,handle:U.handle,handleMouseEnter:U.handleMouseEnter,handleMouseLeave:U.handleMouseLeave,animateSlider:U.animateSlider,releaseScroll:U.releaseScroll}})},on:{init:function(e){!e.params.mousewheel.enabled&&e.params.cssMode&&e.mousewheel.disable(),e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(e){e.params.cssMode&&e.mousewheel.enable(),e.mousewheel.enabled&&e.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){M(this,{navigation:t({},K)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},click:function(e,t){var i,s=e.navigation,a=s.$nextEl,r=s.$prevEl;!e.params.navigation.hideOnClick||m(t.target).is(r)||m(t.target).is(a)||(a?i=a.hasClass(e.params.navigation.hiddenClass):r&&(i=r.hasClass(e.params.navigation.hiddenClass)),!0===i?e.emit("navigationShow"):e.emit("navigationHide"),a&&a.toggleClass(e.params.navigation.hiddenClass),r&&r.toggleClass(e.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){M(this,{pagination:t({dynamicBulletIndex:0},Z)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||void 0===e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},click:function(e,t){e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!m(t.target).hasClass(e.params.pagination.bulletClass)&&(!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){M(this,{scrollbar:t({isTouched:!1,timeout:null,dragTimeout:null},J)})},on:{init:function(e){e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update:function(e){e.scrollbar.updateSize()},resize:function(e){e.scrollbar.updateSize()},observerUpdate:function(e){e.scrollbar.updateSize()},setTranslate:function(e){e.scrollbar.setTranslate()},setTransition:function(e,t){e.scrollbar.setTransition(t)},destroy:function(e){e.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){M(this,{parallax:t({},Q)})},on:{beforeInit:function(e){e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},init:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTranslate:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTransition:function(e,t){e.params.parallax.enabled&&e.parallax.setTransition(t)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this;M(e,{zoom:t({enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}},ee)});var i=1;Object.defineProperty(e.zoom,"scale",{get:function(){return i},set:function(t){if(i!==t){var s=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(e){e.params.zoom.enabled&&e.zoom.enable()},destroy:function(e){e.zoom.disable()},touchStart:function(e,t){e.zoom.enabled&&e.zoom.onTouchStart(t)},touchEnd:function(e,t){e.zoom.enabled&&e.zoom.onTouchEnd(t)},doubleTap:function(e,t){e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&e.zoom.toggle(t)},transitionEnd:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()},slideChange:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&e.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){M(this,{lazy:t({initialImageLoaded:!1},te)})},on:{beforeInit:function(e){e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)},init:function(e){e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&e.lazy.load()},scroll:function(e){e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},resize:function(e){e.params.lazy.enabled&&e.lazy.load()},scrollbarDragMove:function(e){e.params.lazy.enabled&&e.lazy.load()},transitionStart:function(e){e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(e){e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()},slideChange:function(e){e.params.lazy.enabled&&e.params.cssMode&&e.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){M(this,{controller:t({control:this.params.controller.control},ie)})},on:{update:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},resize:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},observerUpdate:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},setTranslate:function(e,t,i){e.controller.control&&e.controller.setTranslate(t,i)},setTransition:function(e,t,i){e.controller.control&&e.controller.setTransition(t,i)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null}},create:function(){M(this,{a11y:t(t({},se),{},{liveRegion:m('<span class="'+this.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')})})},on:{afterInit:function(e){e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())},toEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},fromEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},paginationUpdate:function(e){e.params.a11y.enabled&&e.a11y.updatePagination()},destroy:function(e){e.params.a11y.enabled&&e.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){M(this,{history:t({},ae)})},on:{init:function(e){e.params.history.enabled&&e.history.init()},destroy:function(e){e.params.history.enabled&&e.history.destroy()},transitionEnd:function(e){e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)},slideChange:function(e){e.history.initialized&&e.params.cssMode&&e.history.setHistory(e.params.history.key,e.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){M(this,{hashNavigation:t({initialized:!1},re)})},on:{init:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.init()},destroy:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.destroy()},transitionEnd:function(e){e.hashNavigation.initialized&&e.hashNavigation.setHash()},slideChange:function(e){e.hashNavigation.initialized&&e.params.cssMode&&e.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){M(this,{autoplay:t(t({},ne),{},{running:!1,paused:!1})})},on:{init:function(e){e.params.autoplay.enabled&&(e.autoplay.start(),r().addEventListener("visibilitychange",e.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t,i){e.autoplay.running&&(i||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(t):e.autoplay.stop())},sliderFirstMove:function(e){e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},touchEnd:function(e){e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&e.autoplay.run()},destroy:function(e){e.autoplay.running&&e.autoplay.stop(),r().removeEventListener("visibilitychange",e.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){M(this,{fadeEffect:t({},le)})},on:{beforeInit:function(e){if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"fade"===e.params.effect&&e.fadeEffect.setTranslate()},setTransition:function(e,t){"fade"===e.params.effect&&e.fadeEffect.setTransition(t)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){M(this,{cubeEffect:t({},oe)})},on:{beforeInit:function(e){if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"cube"===e.params.effect&&e.cubeEffect.setTranslate()},setTransition:function(e,t){"cube"===e.params.effect&&e.cubeEffect.setTransition(t)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){M(this,{flipEffect:t({},de)})},on:{beforeInit:function(e){if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};S(e.params,t),S(e.originalParams,t)}},setTranslate:function(e){"flip"===e.params.effect&&e.flipEffect.setTranslate()},setTransition:function(e,t){"flip"===e.params.effect&&e.flipEffect.setTransition(t)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}},create:function(){M(this,{coverflowEffect:t({},he)})},on:{beforeInit:function(e){"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(e){"coverflow"===e.params.effect&&e.coverflowEffect.setTranslate()},setTransition:function(e,t){"coverflow"===e.params.effect&&e.coverflowEffect.setTransition(t)}}},{name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){M(this,{thumbs:t({swiper:null,initialized:!1},pe)})},on:{beforeInit:function(e){var t=e.params.thumbs;t&&t.swiper&&(e.thumbs.init(),e.thumbs.update(!0))},slideChange:function(e){e.thumbs.swiper&&e.thumbs.update()},update:function(e){e.thumbs.swiper&&e.thumbs.update()},resize:function(e){e.thumbs.swiper&&e.thumbs.update()},observerUpdate:function(e){e.thumbs.swiper&&e.thumbs.update()},setTransition:function(e,t){var i=e.thumbs.swiper;i&&i.setTransition(t)},beforeDestroy:function(e){var t=e.thumbs.swiper;t&&e.thumbs.swiperCreated&&t&&t.destroy()}}}];return R.use(ue),R,window.Swiper =R}));
function floatToString(t,e){var o=t.toFixed(e).toString();return o.match(/^\.\d+/)?"0"+o:o}"undefined"==typeof window.Shopify&&(window.Shopify={}),Shopify.each=function(t,e){for(var o=0;o<t.length;o++)e(t[o],o)},Shopify.map=function(t,e){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o},Shopify.arrayIncludes=function(t,e){for(var o=0;o<t.length;o++)if(t[o]==e)return!0;return!1},Shopify.uniq=function(t){for(var e=[],o=0;o<t.length;o++)Shopify.arrayIncludes(e,t[o])||e.push(t[o]);return e},Shopify.isDefined=function(t){return void 0!==t},Shopify.getClass=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Shopify.extend=function(t,e){function o(){}o.prototype=e.prototype,t.prototype=new o,(t.prototype.constructor=t).baseConstructor=e,t.superClass=e.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(t){window.history.replaceState({},document.title,t)},Shopify.urlParam=function(t){var e=RegExp("[?&]"+t+"=([^&#]*)").exec(Shopify.locationSearch());return e&&decodeURIComponent(e[1].replace(/\+/g," "))},Shopify.newState=function(t,e){return(Shopify.urlParam(t)?Shopify.locationSearch().replace(RegExp("("+t+"=)[^&#]+"),"$1"+e):""===Shopify.locationSearch()?"?"+t+"="+e:Shopify.locationSearch()+"&"+t+"="+e)+Shopify.locationHash()},Shopify.setParam=function(t,e){Shopify.replaceState(Shopify.newState(t,e))},Shopify.Product=function(t){Shopify.isDefined(t)&&this.update(t)},Shopify.Product.prototype.update=function(t){for(property in t)this[property]=t[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(o){if(!Shopify.isDefined(this.variants))return null;var t=Shopify.map(this.variants,function(t){var e="option"+(o+1);return t[e]==undefined?null:t[e]});return null==t[0]?null:Shopify.uniq(t)},Shopify.Product.prototype.getVariant=function(i){var r=null;return i.length!=this.options.length||Shopify.each(this.variants,function(t){for(var e=!0,o=0;o<i.length;o++){t["option"+(o+1)]!=i[o]&&(e=!1)}1!=e||(r=t)}),r},Shopify.Product.prototype.getVariantById=function(t){for(var e=0;e<this.variants.length;e++){var o=this.variants[e];if(t==o.id)return o}return null},Shopify.money_format="${{amount}}",Shopify.formatMoney=function(t,e){function n(t,e){return void 0===t?e:t}function o(t,e,o,i){if(e=n(e,2),o=n(o,","),i=n(i,"."),isNaN(t)||null==t)return 0;var r=(t=(t/100).toFixed(e)).split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+o)+(r[1]?i+r[1]:"")}"string"==typeof t&&(t=t.replace(".",""));var i="",r=/\{\{\s*(\w+)\s*\}\}/,a=e||this.money_format;switch(a.match(r)[1]){case"amount":i=o(t,2);break;case"amount_no_decimals":i=o(t,0);break;case"amount_with_comma_separator":i=o(t,2,".",",");break;case"amount_with_space_separator":i=o(t,2," ",",");break;case"amount_with_period_and_space_separator":i=o(t,2," ",".");break;case"amount_no_decimals_with_comma_separator":i=o(t,0,".",",");break;case"amount_no_decimals_with_space_separator":i=o(t,0," ");break;case"amount_with_apostrophe_separator":i=o(t,2,"'",".")}return a.replace(r,i)},Shopify.OptionSelectors=function(t,e){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=t,this.product=new Shopify.Product(e.product),this.onVariantSelected=Shopify.isDefined(e.onVariantSelected)?e.onVariantSelected:function(){},this.replaceSelector(t),this.initDropdown(),e.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var t={initialLoad:!0};if(!this.selectVariantFromDropdown(t)){var e=this;setTimeout(function(){e.selectVariantFromParams(t)||e.fireOnChangeForFirstDropdown.call(e,t)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(t){this.selectors[0].element.onchange(t)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(t){this.selectVariantFromParams(t)||this.selectVariantFromDropdown(t)},Shopify.OptionSelectors.prototype.replaceSelector=function(t){var e=document.getElementById(t),o=e.parentNode;Shopify.each(this.buildSelectors(),function(t){o.insertBefore(t,e)}),e.style.display="none",this.variantIdField=e},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(t){var e=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(e||(e=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!e)return!1;var o=e.value;return this.selectVariant(o,t)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(t){var e=Shopify.urlParam("variant");return this.selectVariant(e,t)},Shopify.OptionSelectors.prototype.selectVariant=function(t,e){var o=this.product.getVariantById(t);if(null==o)return!1;for(var i=0;i<this.selectors.length;i++){var r=this.selectors[i].element,n=o[r.getAttribute("data-option")];null!=n&&this.optionExistInSelect(r,n)&&(r.value=n)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",e):this.selectors[0].element.onchange(e),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(t,e){for(var o=0;o<t.options.length;o++)if(t.options[o].value==e)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(t,e){Shopify.isDefined(e)&&this.setMessageElement(e),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var o=document.getElementById(t);Shopify.each(this.buildSelectors(),function(t){o.appendChild(t)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var t=0;t<this.product.optionNames().length;t++){var e=new Shopify.SingleOptionSelector(this,t,this.product.optionNames()[t],this.product.optionValues(t));e.element.disabled=!1,this.selectors.push(e)}var i=this.selectorDivClass,r=this.product.optionNames();return Shopify.map(this.selectors,function(t){var e=document.createElement("div");if(e.setAttribute("class",i),1<r.length){var o=document.createElement("label");o.htmlFor=t.element.id,o.innerHTML=t.name,e.appendChild(o)}return e.appendChild(t.element),e})},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var t=[],e=0;e<this.selectors.length;e++){var o=this.selectors[e].element.value;t.push(o)}return t},Shopify.OptionSelectors.prototype.updateSelectors=function(t,e){var o=this.selectedValues(),i=this.product.getVariant(o);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,e),null!=this.historyState&&this.historyState.onVariantChange(i,this,e)},Shopify.OptionSelectorsFromDOM=function(t,e){var o=e.optionNames||[],i=e.priceFieldExists||!0,r=e.delimiter||"/",n=this.createProductFromSelector(t,o,i,r);e.product=n,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,t,e)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(t,n,a,s){if(!Shopify.isDefined(a))a=!0;if(!Shopify.isDefined(s))s="/";var e=document.getElementById(t),o=e.childNodes,p=(e.parentNode,n.length),l=[];Shopify.each(o,function(t){if(1==t.nodeType&&"option"==t.tagName.toLowerCase()){var e=t.innerHTML.split(new RegExp("\\s*\\"+s+"\\s*"));0==n.length&&(p=e.length-(a?1:0));var o=e.slice(0,p),i=a?e[p]:"",r=(t.getAttribute("value"),{available:!t.disabled,id:parseFloat(t.value),price:i,option1:o[0],option2:o[1],option3:o[2]});l.push(r)}});var i={variants:l};if(0==n.length){i.options=[];for(var r=0;r<p;r++)i.options[r]="option "+(r+1)}else i.options=n;return i},Shopify.SingleOptionSelector=function(o,i,t,e){this.multiSelector=o,this.values=e,this.index=i,this.name=t,this.element=document.createElement("select");for(var r=0;r<e.length;r++){var n=document.createElement("option");n.value=e[r],n.innerHTML=e[r],this.element.appendChild(n)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(i+1)),this.element.id=o.domIdPrefix+"-option-"+i,this.element.onchange=function(t,e){e=e||{},o.updateSelectors(i,e)},!0},Shopify.Image={preload:function(t,e){for(var o=0;o<t.length;o++){var i=t[o];this.loadImage(this.getSizedImageUrl(i,e))}},loadImage:function(t){(new Image).src=t},switchImage:function(t,e,o){if(t&&e){var i=this.imageSize(e.src),r=this.getSizedImageUrl(t.src,i);o?o(r,t,e):e.src=r}},imageSize:function(t){var e=t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);return null!==e?e[1]:null},getSizedImageUrl:function(t,e){if(null==e)return t;if("master"==e)return this.removeProtocol(t);var o=t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null==o)return null;var i=t.split(o[0]),r=o[0];return this.removeProtocol(i[0]+"_"+e+r)},removeProtocol:function(t){return t.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(t){this.browserSupports()&&this.register(t)},Shopify.OptionSelectors.HistoryState.prototype.register=function(t){window.addEventListener("popstate",function(){t.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(t,e,o){this.browserSupports()&&(!t||o.initialLoad||o.popStateCall||Shopify.setParam("variant",t.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};"function"!=typeof Object.create&&(Object.create=function(o){function i(){}return i.prototype=o,new i}),function(o,i,t){var e={init:function(i,t){var e=this;if(e.elem=t,e.$elem=o(t),e.options=o.extend({},o.fn.ezPlus.options,e.responsiveConfig(i||{})),e.imageSrc=e.$elem.attr("data-"+e.options.attrImageZoomSrc)?e.$elem.attr("data-"+e.options.attrImageZoomSrc):e.$elem.attr("src"),e.options.enabled){var n;e.options.tint&&(e.options.lensColour="transparent",e.options.lensOpacity="1"),"inner"===e.options.zoomType&&(e.options.showLens=!1),"lens"===e.options.zoomType&&(e.options.zoomWindowWidth=0),-1===e.options.zoomId&&(e.options.zoomId=(n=(new Date).getTime(),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(o){var i=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===o?i:3&i|8).toString(16)})))),e.$elem.parent().removeAttr("title").removeAttr("alt"),e.zoomImage=e.imageSrc,e.refresh(1);var s=e.options.galleryEvent+".ezpspace";s+=e.options.touchEnabled?" touchend.ezpspace":"",e.$galleries=o(e.options.gallery?"#"+e.options.gallery:e.options.gallerySelector),e.$galleries.on(s,e.options.galleryItem,(function(i){if(e.options.galleryActiveClass&&(o(e.options.galleryItem,e.$galleries).removeClass(e.options.galleryActiveClass),o(this).addClass(e.options.galleryActiveClass)),"A"===this.tagName&&i.preventDefault(),o(this).data(e.options.attrImageZoomSrc)?e.zoomImagePre=o(this).data(e.options.attrImageZoomSrc):e.zoomImagePre=o(this).data("image"),e.swaptheimage(o(this).data("image"),e.zoomImagePre),"A"===this.tagName)return!1}))}},refresh:function(o){var i=this;setTimeout((function(){i.fetch(i.imageSrc,i.$elem,i.options.minZoomLevel)}),o||i.options.refresh)},fetch:function(o,i,t){var e=this,n=new Image;n.onload=function(){n.width/i.width()<=t?e.largeWidth=i.width()*t:e.largeWidth=n.width,n.height/i.height()<=t?e.largeHeight=i.height()*t:e.largeHeight=n.height,e.startZoom(),e.currentImage=e.imageSrc,e.options.onZoomedImageLoaded(e.$elem)},e.setImageSource(n,o)},setImageSource:function(o,i){o.src=i},startZoom:function(){var i,t=this;if(t.nzWidth=t.$elem.width(),t.nzHeight=t.$elem.height(),t.isWindowActive=!1,t.isLensActive=!1,t.isTintActive=!1,t.overWindow=!1,t.options.imageCrossfade){var e=o('<div class="zoomWrapper"/>').css({height:t.nzHeight,width:t.nzWidth});t.$elem.parent().hasClass("zoomWrapper")&&t.$elem.unwrap(),t.zoomWrap=t.$elem.wrap(e),t.$elem.css({position:"absolute"})}t.zoomLock=1,t.scrollingLock=!1,t.changeBgSize=!1,t.currentZoomLevel=t.options.zoomLevel,t.updateOffset(t),t.widthRatio=t.largeWidth/t.currentZoomLevel/t.nzWidth,t.heightRatio=t.largeHeight/t.currentZoomLevel/t.nzHeight,"window"===t.options.zoomType&&(t.zoomWindowStyle={display:"none",position:"absolute",height:t.options.zoomWindowHeight,width:t.options.zoomWindowWidth,border:t.options.borderSize+"px solid "+t.options.borderColour,backgroundSize:t.largeWidth/t.currentZoomLevel+"px "+t.largeHeight/t.currentZoomLevel+"px",backgroundPosition:"0px 0px",backgroundRepeat:"no-repeat",backgroundColor:""+t.options.zoomWindowBgColour,overflow:"hidden",zIndex:100}),"inner"===t.options.zoomType&&(t.zoomWindowStyle=(i=t.$elem.css("border-left-width"),t.options.scrollZoom&&(t.zoomLens=o('<div class="zoomLens"/>')),{display:"none",position:"absolute",height:t.nzHeight,width:t.nzWidth,marginTop:i,marginLeft:i,border:t.options.borderSize+"px solid "+t.options.borderColour,backgroundPosition:"0px 0px",backgroundRepeat:"no-repeat",cursor:t.options.cursor,overflow:"hidden",zIndex:t.options.zIndex})),"window"===t.options.zoomType&&(t.lensStyle=(t.nzHeight<t.options.zoomWindowHeight/t.heightRatio?t.lensHeight=t.nzHeight:t.lensHeight=t.options.zoomWindowHeight/t.heightRatio,t.largeWidth<t.options.zoomWindowWidth?t.lensWidth=t.nzWidth:t.lensWidth=t.options.zoomWindowWidth/t.widthRatio,{display:"none",position:"absolute",height:t.lensHeight,width:t.lensWidth,border:t.options.lensBorderSize+"px solid "+t.options.lensBorderColour,backgroundPosition:"0px 0px",backgroundRepeat:"no-repeat",backgroundColor:t.options.lensColour,opacity:t.options.lensOpacity,cursor:t.options.cursor,zIndex:999,overflow:"hidden"})),t.tintStyle={display:"block",position:"absolute",height:t.nzHeight,width:t.nzWidth,backgroundColor:t.options.tintColour,opacity:0},t.lensRound={},"lens"===t.options.zoomType&&(t.lensStyle={display:"none",position:"absolute",float:"left",height:t.options.lensSize,width:t.options.lensSize,border:t.options.borderSize+"px solid "+t.options.borderColour,backgroundPosition:"0px 0px",backgroundRepeat:"no-repeat",backgroundColor:t.options.lensColour,cursor:t.options.cursor}),"round"===t.options.lensShape&&(t.lensRound={borderRadius:t.options.lensSize/2+t.options.borderSize}),t.zoomContainer=o('<div class="'+t.options.container+'" uuid="'+t.options.zoomId+'"/>'),t.zoomContainer.css({position:"absolute",top:t.nzOffset.top,left:t.nzOffset.left,height:t.nzHeight,width:t.nzWidth,zIndex:t.options.zIndex}),t.$elem.attr("id")&&t.zoomContainer.attr("id",t.$elem.attr("id")+"-"+t.options.container),o("."+t.options.container+'[uuid="'+t.options.zoomId+'"]').remove(),o(t.options.zoomContainerAppendTo).append(t.zoomContainer),t.options.containLensZoom&&"lens"===t.options.zoomType&&t.zoomContainer.css("overflow","hidden"),"inner"!==t.options.zoomType&&(t.zoomLens=o('<div class="zoomLens"/>').css(o.extend({},t.lensStyle,t.lensRound)).appendTo(t.zoomContainer).click((function(){t.$elem.trigger("click")})),t.options.tint&&(t.tintContainer=o('<div class="tintContainer"/>'),t.zoomTint=o('<div class="zoomTint"/>').css(t.tintStyle),t.zoomLens.wrap(t.tintContainer),t.zoomTintcss=t.zoomLens.after(t.zoomTint),t.zoomTintImage=o('<img src="'+t.$elem.attr("src")+'">').css({position:"absolute",top:0,left:0,height:t.nzHeight,width:t.nzWidth,maxWidth:"none"}).appendTo(t.zoomLens).click((function(){t.$elem.trigger("click")}))));var n=isNaN(t.options.zoomWindowPosition)?"body":t.zoomContainer;function s(o){t.lastX===o.clientX&&t.lastY===o.clientY||(t.setPosition(o),t.currentLoc=o),t.lastX=o.clientX,t.lastY=o.clientY}t.zoomWindow=o('<div class="zoomWindow"/>').css(o.extend({zIndex:999,top:t.windowOffsetTop,left:t.windowOffsetLeft},t.zoomWindowStyle)).appendTo(n).click((function(){t.$elem.trigger("click")})),t.zoomWindowContainer=o('<div class="zoomWindowContainer" />').css({width:t.options.zoomWindowWidth}),t.zoomWindow.wrap(t.zoomWindowContainer),"lens"===t.options.zoomType&&(t.zoomContainer.css("display","none"),t.zoomLens.css({backgroundImage:'url("'+t.imageSrc+'")'})),"window"===t.options.zoomType&&t.zoomWindow.css({backgroundImage:'url("'+t.imageSrc+'")'}),"inner"===t.options.zoomType&&t.zoomWindow.css({backgroundImage:'url("'+t.imageSrc+'")'}),t.options.touchEnabled&&(t.$elem.on("touchmove.ezpspace",(function(o){o.preventDefault();var i=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];t.setPosition(i)})),t.zoomContainer.on("touchmove.ezpspace",(function(o){t.setElements("show"),o.preventDefault();var i=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];t.setPosition(i)})),t.zoomContainer.add(t.$elem).on("touchend.ezpspace",(function(o){t.showHideWindow("hide"),t.options.showLens&&t.showHideLens("hide"),t.options.tint&&"inner"!==t.options.zoomType&&t.showHideTint("hide")})),t.options.showLens&&(t.zoomLens.on("touchmove.ezpspace",(function(o){o.preventDefault();var i=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];t.setPosition(i)})),t.zoomLens.on("touchend.ezpspace",(function(o){t.showHideWindow("hide"),t.options.showLens&&t.showHideLens("hide"),t.options.tint&&"inner"!==t.options.zoomType&&t.showHideTint("hide")})))),t.zoomContainer.on("click.ezpspace touchstart.ezpspace",t.options.onImageClick),t.zoomContainer.add(t.$elem).on("mousemove.ezpspace",(function(o){!1===t.overWindow&&t.setElements("show"),s(o)}));var h=null;"inner"!==t.options.zoomType&&(h=t.zoomLens),t.options.tint&&"inner"!==t.options.zoomType&&(h=t.zoomTint),"inner"===t.options.zoomType&&(h=t.zoomWindow),h&&h.on("mousemove.ezpspace",s),t.zoomContainer.add(t.$elem).hover((function(){!1===t.overWindow&&t.setElements("show")}),(function(){t.scrollLock||(t.setElements("hide"),t.options.onDestroy(t.$elem))})),"inner"!==t.options.zoomType&&t.zoomWindow.hover((function(){t.overWindow=!0,t.setElements("hide")}),(function(){t.overWindow=!1})),t.options.minZoomLevel?t.minZoomLevel=t.options.minZoomLevel:t.minZoomLevel=2*t.options.scrollZoomIncrement,t.options.scrollZoom&&t.zoomContainer.add(t.$elem).on("wheel DOMMouseScroll MozMousePixelScroll",(function(i){t.scrollLock=!0,clearTimeout(o.data(this,"timer")),o.data(this,"timer",setTimeout((function(){t.scrollLock=!1}),250));var e,n=i.originalEvent.deltaY||-1*i.originalEvent.detail;return i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault(),0!==n&&(n/120>0?(e=parseFloat(t.currentZoomLevel)-t.options.scrollZoomIncrement)>=parseFloat(t.minZoomLevel)&&t.changeZoomLevel(e):(t.fullheight||t.fullwidth)&&t.options.mantainZoomAspectRatio||(e=parseFloat(t.currentZoomLevel)+t.options.scrollZoomIncrement,t.options.maxZoomLevel?e<=t.options.maxZoomLevel&&t.changeZoomLevel(e):t.changeZoomLevel(e)),!1)}))},destroy:function(){this.$elem.off(".ezpspace"),this.$galleries.off(".ezpspace"),o(this.zoomContainer).remove(),this.options.loadingIcon&&this.spinner&&this.spinner.length&&(this.spinner.remove(),delete this.spinner)},getIdentifier:function(){return this.options.zoomId},setElements:function(o){if(!this.options.zoomEnabled)return!1;"show"===o&&this.isWindowSet&&("inner"===this.options.zoomType&&this.showHideWindow("show"),"window"===this.options.zoomType&&this.showHideWindow("show"),this.options.showLens&&(this.showHideZoomContainer("show"),this.showHideLens("show")),this.options.tint&&"inner"!==this.options.zoomType&&this.showHideTint("show")),"hide"===o&&("window"===this.options.zoomType&&this.showHideWindow("hide"),this.options.tint||this.showHideWindow("hide"),this.options.showLens&&(this.showHideZoomContainer("hide"),this.showHideLens("hide")),this.options.tint&&this.showHideTint("hide"))},setPosition:function(o){if(!this.options.zoomEnabled||void 0===o)return!1;(this.nzHeight=this.$elem.height(),this.nzWidth=this.$elem.width(),this.updateOffset(this),this.options.tint&&"inner"!==this.options.zoomType&&this.zoomTint.css({top:0,left:0}),this.options.responsive&&!this.options.scrollZoom)&&(this.options.showLens&&(this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.lensHeight=this.nzHeight:this.lensHeight=this.options.zoomWindowHeight/this.heightRatio,this.largeWidth<this.options.zoomWindowWidth?this.lensWidth=this.nzWidth:this.lensWidth=this.options.zoomWindowWidth/this.widthRatio,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,"lens"!==this.options.zoomType&&(this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.lensHeight=this.nzHeight:this.lensHeight=this.options.zoomWindowHeight/this.heightRatio,this.nzWidth<this.options.zoomWindowHeight/this.heightRatio?this.lensWidth=this.nzWidth:this.lensWidth=this.options.zoomWindowWidth/this.widthRatio,this.zoomLens.css({width:this.lensWidth,height:this.lensHeight}),this.options.tint&&this.zoomTintImage.css({width:this.nzWidth,height:this.nzHeight})),"lens"===this.options.zoomType&&this.zoomLens.css({width:this.options.lensSize,height:this.options.lensSize})));if(this.zoomContainer.css({top:this.nzOffset.top,left:this.nzOffset.left,width:this.nzWidth,height:this.nzHeight}),this.mouseLeft=parseInt(o.pageX-this.pageOffsetX-this.nzOffset.left),this.mouseTop=parseInt(o.pageY-this.pageOffsetY-this.nzOffset.top),"window"===this.options.zoomType){var i=this.zoomLens.height()/2,t=this.zoomLens.width()/2;this.Etoppos=this.mouseTop<0+i,this.Eboppos=this.mouseTop>this.nzHeight-i-2*this.options.lensBorderSize,this.Eloppos=this.mouseLeft<0+t,this.Eroppos=this.mouseLeft>this.nzWidth-t-2*this.options.lensBorderSize}"inner"===this.options.zoomType&&(this.Etoppos=this.mouseTop<this.nzHeight/2/this.heightRatio,this.Eboppos=this.mouseTop>this.nzHeight-this.nzHeight/2/this.heightRatio,this.Eloppos=this.mouseLeft<0+this.nzWidth/2/this.widthRatio,this.Eroppos=this.mouseLeft>this.nzWidth-this.nzWidth/2/this.widthRatio-2*this.options.lensBorderSize),this.mouseLeft<0||this.mouseTop<0||this.mouseLeft>this.nzWidth||this.mouseTop>this.nzHeight?this.setElements("hide"):(this.options.showLens&&(this.lensLeftPos=Math.floor(this.mouseLeft-this.zoomLens.width()/2),this.lensTopPos=Math.floor(this.mouseTop-this.zoomLens.height()/2)),this.Etoppos&&(this.lensTopPos=0),this.Eloppos&&(this.windowLeftPos=0,this.lensLeftPos=0,this.tintpos=0),"window"===this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize)),"inner"===this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.nzWidth-2*this.options.lensBorderSize)),"lens"===this.options.zoomType&&(this.windowLeftPos=-1*((o.pageX-this.pageOffsetX-this.nzOffset.left)*this.widthRatio-this.zoomLens.width()/2),this.windowTopPos=-1*((o.pageY-this.pageOffsetY-this.nzOffset.top)*this.heightRatio-this.zoomLens.height()/2),this.zoomLens.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"}),this.changeBgSize&&(this.nzHeight>this.nzWidth?("lens"===this.options.zoomType&&this.zoomLens.css({backgroundSize:this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"}),this.zoomWindow.css({backgroundSize:this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"})):("lens"===this.options.zoomType&&this.zoomLens.css({backgroundSize:this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"}),this.zoomWindow.css({backgroundSize:this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"})),this.changeBgSize=!1),this.setWindowPosition(o)),this.options.tint&&"inner"!==this.options.zoomType&&this.setTintPosition(o),"window"===this.options.zoomType&&this.setWindowPosition(o),"inner"===this.options.zoomType&&this.setWindowPosition(o),this.options.showLens&&(this.fullwidth&&"lens"!==this.options.zoomType&&(this.lensLeftPos=0),this.zoomLens.css({left:this.lensLeftPos,top:this.lensTopPos})))},showHideZoomContainer:function(o){"show"===o&&this.zoomContainer&&this.zoomContainer.show(),"hide"===o&&this.zoomContainer&&this.zoomContainer.hide()},showHideWindow:function(o){var i=this;"show"===o&&!i.isWindowActive&&i.zoomWindow&&(i.options.onShow(i),i.options.zoomWindowFadeIn?i.zoomWindow.stop(!0,!0,!1).fadeIn(i.options.zoomWindowFadeIn):i.zoomWindow.show(),i.isWindowActive=!0),"hide"===o&&i.isWindowActive&&(i.options.zoomWindowFadeOut?i.zoomWindow.stop(!0,!0).fadeOut(i.options.zoomWindowFadeOut,(function(){i.loop&&(clearInterval(i.loop),i.loop=!1)})):i.zoomWindow.hide(),i.options.onHide(i),i.isWindowActive=!1)},showHideLens:function(o){"show"===o&&(this.isLensActive||(this.zoomLens&&(this.options.lensFadeIn?this.zoomLens.stop(!0,!0,!1).fadeIn(this.options.lensFadeIn):this.zoomLens.show()),this.isLensActive=!0)),"hide"===o&&this.isLensActive&&(this.zoomLens&&(this.options.lensFadeOut?this.zoomLens.stop(!0,!0).fadeOut(this.options.lensFadeOut):this.zoomLens.hide()),this.isLensActive=!1)},showHideTint:function(o){"show"===o&&!this.isTintActive&&this.zoomTint&&(this.options.zoomTintFadeIn?this.zoomTint.css("opacity",this.options.tintOpacity).animate().stop(!0,!0).fadeIn("slow"):(this.zoomTint.css("opacity",this.options.tintOpacity).animate(),this.zoomTint.show()),this.isTintActive=!0),"hide"===o&&this.isTintActive&&(this.options.zoomTintFadeOut?this.zoomTint.stop(!0,!0).fadeOut(this.options.zoomTintFadeOut):this.zoomTint.hide(),this.isTintActive=!1)},setLensPosition:function(o){},setWindowPosition:function(i){var t=this;if(isNaN(t.options.zoomWindowPosition))t.externalContainer=o(t.options.zoomWindowPosition),t.externalContainer.length||(t.externalContainer=o("#"+t.options.zoomWindowPosition)),t.externalContainerWidth=t.externalContainer.width(),t.externalContainerHeight=t.externalContainer.height(),t.externalContainerOffset=t.externalContainer.offset(),t.windowOffsetTop=t.externalContainerOffset.top,t.windowOffsetLeft=t.externalContainerOffset.left;else switch(t.options.zoomWindowPosition){case 1:t.windowOffsetTop=t.options.zoomWindowOffsetY,t.windowOffsetLeft=+t.nzWidth;break;case 2:t.options.zoomWindowHeight>t.nzHeight?(t.windowOffsetTop=-1*(t.options.zoomWindowHeight/2-t.nzHeight/2),t.windowOffsetLeft=t.nzWidth):o.noop();break;case 3:t.windowOffsetTop=t.nzHeight-t.zoomWindow.height()-2*t.options.borderSize,t.windowOffsetLeft=t.nzWidth;break;case 4:t.windowOffsetTop=t.nzHeight,t.windowOffsetLeft=t.nzWidth;break;case 5:t.windowOffsetTop=t.nzHeight,t.windowOffsetLeft=t.nzWidth-t.zoomWindow.width()-2*t.options.borderSize;break;case 6:t.options.zoomWindowHeight>t.nzHeight?(t.windowOffsetTop=t.nzHeight,t.windowOffsetLeft=-1*(t.options.zoomWindowWidth/2-t.nzWidth/2+2*t.options.borderSize)):o.noop();break;case 7:t.windowOffsetTop=t.nzHeight,t.windowOffsetLeft=0;break;case 8:t.windowOffsetTop=t.nzHeight,t.windowOffsetLeft=-1*(t.zoomWindow.width()+2*t.options.borderSize);break;case 9:t.windowOffsetTop=t.nzHeight-t.zoomWindow.height()-2*t.options.borderSize,t.windowOffsetLeft=-1*(t.zoomWindow.width()+2*t.options.borderSize);break;case 10:t.options.zoomWindowHeight>t.nzHeight?(t.windowOffsetTop=-1*(t.options.zoomWindowHeight/2-t.nzHeight/2),t.windowOffsetLeft=-1*(t.zoomWindow.width()+2*t.options.borderSize)):o.noop();break;case 11:t.windowOffsetTop=t.options.zoomWindowOffsetY,t.windowOffsetLeft=-1*(t.zoomWindow.width()+2*t.options.borderSize);break;case 12:t.windowOffsetTop=-1*(t.zoomWindow.height()+2*t.options.borderSize),t.windowOffsetLeft=-1*(t.zoomWindow.width()+2*t.options.borderSize);break;case 13:t.windowOffsetTop=-1*(t.zoomWindow.height()+2*t.options.borderSize),t.windowOffsetLeft=0;break;case 14:t.options.zoomWindowHeight>t.nzHeight?(t.windowOffsetTop=-1*(t.zoomWindow.height()+2*t.options.borderSize),t.windowOffsetLeft=-1*(t.options.zoomWindowWidth/2-t.nzWidth/2+2*t.options.borderSize)):o.noop();break;case 15:t.windowOffsetTop=-1*(t.zoomWindow.height()+2*t.options.borderSize),t.windowOffsetLeft=t.nzWidth-t.zoomWindow.width()-2*t.options.borderSize;break;case 16:t.windowOffsetTop=-1*(t.zoomWindow.height()+2*t.options.borderSize),t.windowOffsetLeft=t.nzWidth;break;default:t.windowOffsetTop=t.options.zoomWindowOffsetY,t.windowOffsetLeft=t.nzWidth}if(t.isWindowSet=!0,t.windowOffsetTop=t.windowOffsetTop+t.options.zoomWindowOffsetY,t.windowOffsetLeft=t.windowOffsetLeft+t.options.zoomWindowOffsetX,t.zoomWindow.css({top:t.windowOffsetTop,left:t.windowOffsetLeft}),"inner"===t.options.zoomType&&t.zoomWindow.css({top:0,left:0}),t.windowLeftPos=-1*((i.pageX-t.pageOffsetX-t.nzOffset.left)*t.widthRatio-t.zoomWindow.width()/2),t.windowTopPos=-1*((i.pageY-t.pageOffsetY-t.nzOffset.top)*t.heightRatio-t.zoomWindow.height()/2),t.Etoppos&&(t.windowTopPos=0),t.Eloppos&&(t.windowLeftPos=0),t.Eboppos&&(t.windowTopPos=-1*(t.largeHeight/t.currentZoomLevel-t.zoomWindow.height())),t.Eroppos&&(t.windowLeftPos=-1*(t.largeWidth/t.currentZoomLevel-t.zoomWindow.width())),t.fullheight&&(t.windowTopPos=0),t.fullwidth&&(t.windowLeftPos=0),"window"===t.options.zoomType||"inner"===t.options.zoomType)if(1===t.zoomLock&&(t.widthRatio<=1&&(t.windowLeftPos=0),t.heightRatio<=1&&(t.windowTopPos=0)),t.options.easing){t.xp||(t.xp=0),t.yp||(t.yp=0);var e=16,n=parseInt(t.options.easing);"number"==typeof n&&isFinite(n)&&Math.floor(n)===n&&(e=n),t.loop||(t.loop=setInterval((function(){t.xp+=(t.windowLeftPos-t.xp)/t.options.easingAmount,t.yp+=(t.windowTopPos-t.yp)/t.options.easingAmount,t.scrollingLock?(clearInterval(t.loop),t.xp=t.windowLeftPos,t.yp=t.windowTopPos,t.xp=-1*((i.pageX-t.pageOffsetX-t.nzOffset.left)*t.widthRatio-t.zoomWindow.width()/2),t.yp=-1*((i.pageY-t.pageOffsetY-t.nzOffset.top)*t.heightRatio-t.zoomWindow.height()/2),t.changeBgSize&&(t.nzHeight>t.nzWidth?("lens"===t.options.zoomType&&t.zoomLens.css({backgroundSize:t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"}),t.zoomWindow.css({backgroundSize:t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"})):("lens"!==t.options.zoomType&&t.zoomLens.css({backgroundSize:t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvalueheight+"px"}),t.zoomWindow.css({backgroundSize:t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"})),t.changeBgSize=!1),t.zoomWindow.css({backgroundPosition:t.windowLeftPos+"px "+t.windowTopPos+"px"}),t.scrollingLock=!1,t.loop=!1):Math.round(Math.abs(t.xp-t.windowLeftPos)+Math.abs(t.yp-t.windowTopPos))<1?(clearInterval(t.loop),t.zoomWindow.css({backgroundPosition:t.windowLeftPos+"px "+t.windowTopPos+"px"}),t.loop=!1):(t.changeBgSize&&(t.nzHeight>t.nzWidth?("lens"===t.options.zoomType&&t.zoomLens.css({backgroundSize:t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"}),t.zoomWindow.css({backgroundSize:t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"})):("lens"!==t.options.zoomType&&t.zoomLens.css({backgroundSize:t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"}),t.zoomWindow.css({backgroundSize:t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"})),t.changeBgSize=!1),t.zoomWindow.css({backgroundPosition:t.xp+"px "+t.yp+"px"}))}),e))}else t.changeBgSize&&(t.nzHeight>t.nzWidth?("lens"===t.options.zoomType&&t.zoomLens.css({backgroundSize:t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"}),t.zoomWindow.css({backgroundSize:t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"})):("lens"===t.options.zoomType&&t.zoomLens.css({backgroundSize:t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"}),t.largeHeight/t.newvaluewidth<t.options.zoomWindowHeight?t.zoomWindow.css({backgroundSize:t.largeWidth/t.newvaluewidth+"px "+t.largeHeight/t.newvaluewidth+"px"}):t.zoomWindow.css({backgroundSize:t.largeWidth/t.newvalueheight+"px "+t.largeHeight/t.newvalueheight+"px"})),t.changeBgSize=!1),t.zoomWindow.css({backgroundPosition:t.windowLeftPos+"px "+t.windowTopPos+"px"})},setTintPosition:function(o){var i=this.zoomLens.width(),t=this.zoomLens.height();this.updateOffset(this),this.tintpos=-1*(o.pageX-this.pageOffsetX-this.nzOffset.left-i/2),this.tintposy=-1*(o.pageY-this.pageOffsetY-this.nzOffset.top-t/2),this.Etoppos&&(this.tintposy=0),this.Eloppos&&(this.tintpos=0),this.Eboppos&&(this.tintposy=-1*(this.nzHeight-t-2*this.options.lensBorderSize)),this.Eroppos&&(this.tintpos=-1*(this.nzWidth-i-2*this.options.lensBorderSize)),this.options.tint&&(this.fullheight&&(this.tintposy=0),this.fullwidth&&(this.tintpos=0),this.zoomTintImage.css({left:this.tintpos,top:this.tintposy}))},swaptheimage:function(i,t){var e=this,n=new Image;if(e.options.loadingIcon&&!e.spinner){var s={background:'url("'+e.options.loadingIcon+'") no-repeat',height:e.nzHeight,width:e.nzWidth,zIndex:2e3,position:"absolute",backgroundPosition:"center center"};"inner"===e.options.zoomType&&s.setProperty("top",0),e.spinner=o('<div class="ezp-spinner"></div>').css(s),e.$elem.after(e.spinner)}else e.spinner&&e.spinner.show();e.options.onImageSwap(e.$elem),n.onload=function(){e.largeWidth=n.width,e.largeHeight=n.height,e.zoomImage=t,e.zoomWindow.css({backgroundSize:e.largeWidth+"px "+e.largeHeight+"px"}),e.swapAction(i,t)},e.setImageSource(n,t)},swapAction:function(i,t){var e=this,n=e.$elem.width(),s=e.$elem.height(),h=new Image;if(h.onload=function(){e.nzHeight=h.height,e.nzWidth=h.width,e.options.onImageSwapComplete(e.$elem),e.doneCallback()},e.setImageSource(h,i),e.currentZoomLevel=e.options.zoomLevel,e.options.maxZoomLevel=!1,"lens"===e.options.zoomType&&e.zoomLens.css("background-image",'url("'+t+'")'),"window"===e.options.zoomType&&e.zoomWindow.css("background-image",'url("'+t+'")'),"inner"===e.options.zoomType&&e.zoomWindow.css("background-image",'url("'+t+'")'),e.currentImage=t,e.options.imageCrossfade){var a=e.$elem,d=a.clone();if(e.$elem.attr("src",i),e.$elem.after(d),d.stop(!0).fadeOut(e.options.imageCrossfade,(function(){o(this).remove()})),e.$elem.width("auto").removeAttr("width"),e.$elem.height("auto").removeAttr("height"),a.fadeIn(e.options.imageCrossfade),e.options.tint&&"inner"!==e.options.zoomType){var p=e.zoomTintImage,r=p.clone();e.zoomTintImage.attr("src",t),e.zoomTintImage.after(r),r.stop(!0).fadeOut(e.options.imageCrossfade,(function(){o(this).remove()})),p.fadeIn(e.options.imageCrossfade),e.zoomTint.css({height:s,width:n})}e.zoomContainer.css({height:s,width:n}),"inner"===e.options.zoomType&&(e.options.constrainType||(e.zoomWrap.parent().css({height:s,width:n}),e.zoomWindow.css({height:s,width:n}))),e.options.imageCrossfade&&e.zoomWrap.css({height:s,width:n})}else e.$elem.attr("src",i),e.options.tint&&(e.zoomTintImage.attr("src",t),e.zoomTintImage.attr("height",s),e.zoomTintImage.css("height",s),e.zoomTint.css("height",s)),e.zoomContainer.css({height:s,width:n}),e.options.imageCrossfade&&e.zoomWrap.css({height:s,width:n});if(e.options.constrainType){if("height"===e.options.constrainType){var l={height:e.options.constrainSize,width:"auto"};e.zoomContainer.css(l),e.options.imageCrossfade?(e.zoomWrap.css(l),e.constwidth=e.zoomWrap.width()):(e.$elem.css(l),e.constwidth=n);var m={height:e.options.constrainSize,width:e.constwidth};"inner"===e.options.zoomType&&(e.zoomWrap.parent().css(m),e.zoomWindow.css(m)),e.options.tint&&(e.tintContainer.css(m),e.zoomTint.css(m),e.zoomTintImage.css(m))}if("width"===e.options.constrainType){var z={height:"auto",width:e.options.constrainSize};e.zoomContainer.css(z),e.options.imageCrossfade?(e.zoomWrap.css(z),e.constheight=e.zoomWrap.height()):(e.$elem.css(z),e.constheight=s);var g={height:e.constheight,width:e.options.constrainSize};"inner"===e.options.zoomType&&(e.zoomWrap.parent().css(g),e.zoomWindow.css(g)),e.options.tint&&(e.tintContainer.css(g),e.zoomTint.css(g),e.zoomTintImage.css(g))}}},doneCallback:function(){this.options.loadingIcon&&this.spinner&&this.spinner.length&&this.spinner.hide(),this.updateOffset(this),this.nzWidth=this.$elem.width(),this.nzHeight=this.$elem.height(),this.currentZoomLevel=this.options.zoomLevel,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,"window"===this.options.zoomType&&(this.nzHeight<this.options.zoomWindowHeight/this.heightRatio?this.lensHeight=this.nzHeight:this.lensHeight=this.options.zoomWindowHeight/this.heightRatio,this.nzWidth<this.options.zoomWindowWidth?this.lensWidth=this.nzWidth:this.lensWidth=this.options.zoomWindowWidth/this.widthRatio,this.zoomLens&&this.zoomLens.css({width:this.lensWidth,height:this.lensHeight}))},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var i=this;return i.gallerylist=[],i.options.gallery?o("#"+i.options.gallery+" a").each((function(){var t="";o(this).data(i.options.attrImageZoomSrc)?t=o(this).data(i.options.attrImageZoomSrc):o(this).data("image")&&(t=o(this).data("image")),t===i.zoomImage?i.gallerylist.unshift({href:""+t,title:o(this).find("img").attr("title")}):i.gallerylist.push({href:""+t,title:o(this).find("img").attr("title")})})):i.gallerylist.push({href:""+i.zoomImage,title:o(this).find("img").attr("title")}),i.gallerylist},changeZoomLevel:function(o){this.scrollingLock=!0,this.newvalue=parseFloat(o).toFixed(2);var i=this.newvalue,t=this.largeHeight/(this.options.zoomWindowHeight/this.nzHeight*this.nzHeight),e=this.largeWidth/(this.options.zoomWindowWidth/this.nzWidth*this.nzWidth);"inner"!==this.options.zoomType&&(t<=i?(this.heightRatio=this.largeHeight/t/this.nzHeight,this.newvalueheight=t,this.fullheight=!0):(this.heightRatio=this.largeHeight/i/this.nzHeight,this.newvalueheight=i,this.fullheight=!1),e<=i?(this.widthRatio=this.largeWidth/e/this.nzWidth,this.newvaluewidth=e,this.fullwidth=!0):(this.widthRatio=this.largeWidth/i/this.nzWidth,this.newvaluewidth=i,this.fullwidth=!1),"lens"===this.options.zoomType&&(t<=i?(this.fullwidth=!0,this.newvaluewidth=t):(this.widthRatio=this.largeWidth/i/this.nzWidth,this.newvaluewidth=i,this.fullwidth=!1))),"inner"===this.options.zoomType&&(i>(t=parseFloat(this.largeHeight/this.nzHeight).toFixed(2))&&(i=t),i>(e=parseFloat(this.largeWidth/this.nzWidth).toFixed(2))&&(i=e),t<=i?(this.heightRatio=this.largeHeight/i/this.nzHeight,this.newvalueheight=i>t?t:i,this.fullheight=!0):(this.heightRatio=this.largeHeight/i/this.nzHeight,this.newvalueheight=i>t?t:i,this.fullheight=!1),e<=i?(this.widthRatio=this.largeWidth/i/this.nzWidth,this.newvaluewidth=i>e?e:i,this.fullwidth=!0):(this.widthRatio=this.largeWidth/i/this.nzWidth,this.newvaluewidth=i,this.fullwidth=!1));var n=!1;"inner"===this.options.zoomType&&(this.nzWidth>=this.nzHeight&&(this.newvaluewidth<=e?n=!0:(n=!1,this.fullheight=!0,this.fullwidth=!0)),this.nzHeight>this.nzWidth&&(this.newvaluewidth<=e?n=!0:(n=!1,this.fullheight=!0,this.fullwidth=!0))),"inner"!==this.options.zoomType&&(n=!0),n&&(this.zoomLock=0,this.changeZoom=!0,this.options.zoomWindowHeight/this.heightRatio<=this.nzHeight&&(this.currentZoomLevel=this.newvalueheight,"lens"!==this.options.zoomType&&"inner"!==this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({height:this.options.zoomWindowHeight/this.heightRatio})),"lens"!==this.options.zoomType&&"inner"!==this.options.zoomType||(this.changeBgSize=!0)),this.options.zoomWindowWidth/this.widthRatio<=this.nzWidth&&("inner"!==this.options.zoomType&&this.newvaluewidth>this.newvalueheight&&(this.currentZoomLevel=this.newvaluewidth),"lens"!==this.options.zoomType&&"inner"!==this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({width:this.options.zoomWindowWidth/this.widthRatio})),"lens"!==this.options.zoomType&&"inner"!==this.options.zoomType||(this.changeBgSize=!0)),"inner"===this.options.zoomType&&(this.changeBgSize=!0,this.nzWidth>this.nzHeight?this.currentZoomLevel=this.newvaluewidth:this.nzHeight>=this.nzWidth&&(this.currentZoomLevel=this.newvaluewidth))),this.setPosition(this.currentLoc)},closeAll:function(){this.zoomWindow&&this.zoomWindow.hide(),this.zoomLens&&this.zoomLens.hide(),this.zoomTint&&this.zoomTint.hide()},updateOffset:function(i){if("body"!==i.options.zoomContainerAppendTo){i.nzOffset=i.$elem.offset();var t=o(i.options.zoomContainerAppendTo).offset();i.nzOffset.top=i.$elem.offset().top-t.top,i.nzOffset.left=i.$elem.offset().left-t.left,i.pageOffsetX=t.left,i.pageOffsetY=t.top}else i.nzOffset=i.$elem.offset(),i.pageOffsetX=0,i.pageOffsetY=0},changeState:function(o){"enable"===o&&(this.options.zoomEnabled=!0),"disable"===o&&(this.options.zoomEnabled=!1)},responsiveConfig:function(i){return i.respond&&i.respond.length>0?o.extend({},i,this.configByScreenWidth(i)):i},configByScreenWidth:function(t){var e=o(i).width(),n=o.grep(t.respond,(function(o){var i=o.range.split("-");return e>=i[0]&&e<=i[1]}));return n.length>0?n[0]:t}};o.fn.ezPlus=function(i){return this.each((function(){var t=Object.create(e);t.init(i,this),o.data(this,"ezPlus",t)}))},o.fn.ezPlus.options={container:"ZoomContainer",attrImageZoomSrc:"zoom-image",borderColour:"#888",borderSize:4,constrainSize:!1,constrainType:!1,containLensZoom:!1,cursor:"inherit",debug:!1,easing:!1,easingAmount:12,enabled:!0,gallery:!1,galleryActiveClass:"zoomGalleryActive",gallerySelector:!1,galleryItem:"a",galleryEvent:"click",imageCrossfade:!1,lensBorderColour:"#000",lensBorderSize:1,lensColour:"white",lensFadeIn:!1,lensFadeOut:!1,lensOpacity:.4,lensShape:"square",lensSize:200,lenszoom:!1,loadingIcon:!1,mantainZoomAspectRatio:!1,maxZoomLevel:!1,minZoomLevel:1.01,onComplete:o.noop,onDestroy:o.noop,onImageClick:o.noop,onImageSwap:o.noop,onImageSwapComplete:o.noop,onShow:o.noop,onHide:o.noop,onZoomedImageLoaded:o.noop,preloading:1,respond:[],responsive:!0,scrollZoom:!1,scrollZoomIncrement:.1,showLens:!0,tint:!1,tintColour:"#333",tintOpacity:.4,touchEnabled:!0,zoomActivation:"hover",zoomContainerAppendTo:"body",zoomId:-1,zoomLevel:1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,zoomType:"window",zoomWindowAlwaysShow:!1,zoomWindowBgColour:"#fff",zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowHeight:400,zoomWindowOffsetX:0,zoomWindowOffsetY:0,zoomWindowPosition:1,zoomWindowWidth:400,zoomEnabled:!0,zIndex:999},o.fn.zoom=o.fn.ezPlus}(window.jQuery,window,document);/*
 * jQuery Countdown - v1.2.8
 * http://github.com/kemar/jquery.countdown
 * Licensed MIT
 */

(function ($, window, document, undefined) {

    "use strict";

    /*
     * .countDown()
     *
     * Description:
     *      Unobtrusive and easily skinable countdown jQuery plugin.
     *
     * Usage:
     *      $(element).countDown()
     *
     *      $(element) is a valid <time> or any other HTML tag containing a text representation of a date/time
     *      or duration remaining before a deadline expires.
     *      If $(element) is a <time> tag, the datetime attribute is checked first.
     *          <time datetime="2013-12-13T17:43:00">Friday, December 13th, 2013 5:43pm</time>
     *          <time>2012-12-08T14:30:00+0100</time>
     *          <time>PT01H01M15S</time>
     *          <h1>600 days, 3:59:12</h1>
     *
     *      The text representation of a date/time or duration can be:
     *      - a valid duration string:
     *          PT00M10S
     *          PT01H01M15S
     *          P2DT20H00M10S
     *      - a valid global date and time string with its timezone offset:
     *          2012-12-08T14:30:00.432+0100
     *          2012-12-08T05:30:00-0800
     *          2012-12-08T13:30Z
     *      - a valid time string:
     *          12:30
     *          12:30:39
     *          12:30:39.929
     *      - a human readable duration string:
     *          2h 0m
     *          4h 18m 3s
     *          24h00m59s
     *          600 jours, 3:59:12
     *          600 days, 3:59:12
     *      - the output of a JavaScript Date.parse() parsable string:
     *          Date.toDateString() => Sat Dec 20 2014
     *          Date.toGMTString()  => Sat, 20 Dec 2014 09:24:00 GMT
     *          Date.toUTCString()  => Sat, 20 Dec 2014 09:24:00 GMT
     *
     *      If $(element) is not a <time> tag, a new one is created and appended to $(element).
     *
     * Literature, resources and inspiration:
     *      JavaScript Date reference:
     *          https://developer.mozilla.org/docs/JavaScript/Reference/Global_Objects/Date
     *      About the <time> element:
     *          https://html.spec.whatwg.org/multipage/semantics.html#the-time-element
     *          http://www.w3.org/TR/html5/text-level-semantics.html#the-time-element
     *          http://wiki.whatwg.org/wiki/Time_element
     *      <time> history:
     *          http://www.brucelawson.co.uk/2012/best-of-time/
     *          http://www.webmonkey.com/2011/11/w3c-adds-time-element-back-to-html5/
     *      Formats:
     *          http://en.wikipedia.org/wiki/ISO_8601
     *      jQuery plugin syntax:
     *          https://github.com/jquery-boilerplate/jquery-patterns
     *          https://github.com/jquery-boilerplate/jquery-boilerplate/wiki/Extending-jQuery-Boilerplate
     *          http://frederictonug.net/jquery-plugin-development-with-the-jquery-boilerplate
     *
     * Example of generated HTML markup:
     *      <time class="countdown" datetime="P12DT05H16M22S">
     *          <span class="item item-dd">
     *              <span class="dd"></span>
     *              <span class="label label-dd">days</span>
     *          </span>
     *          <span class="separator separator-dd">,</span>
     *          <span class="item item-hh">
     *              <span class="hh-1"></span>
     *              <span class="hh-2"></span>
     *              <span class="label label-hh">hours</span>
     *          </span>
     *          <span class="separator">:</span>
     *          <span class="item item-mm">
     *              <span class="mm-1"></span>
     *              <span class="mm-2"></span>
     *              <span class="label label-mm">minutes</span>
     *          </span>
     *          <span class="separator">:</span>
     *          <span class="item item-ss">
     *              <span class="ss-1"></span>
     *              <span class="ss-2"></span>
     *              <span class="label label-ss">seconds</span>
     *          </span>
     *      </time>
     */

    var pluginName = 'countDown';

    var defaults = {
        css_class: 'countdown',
        always_show_days: false,
        with_labels: true,
        with_seconds: true,
        with_separators: true,
        with_hh_leading_zero: true,
        with_mm_leading_zero: true,
        with_ss_leading_zero: true,
        label_dd: 'days',
        label_hh: 'hours',
        label_mm: 'minutes',
        label_ss: 'seconds',
        separator: ':',
        separator_days: ','
    };

    function CountDown(element, options) {
        this.element = $(element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend(CountDown.prototype, {

        init: function () {
            if (this.element.children().length) {
                return;
            }
            if (this.element.attr('datetime')) {  // Try to parse the datetime attribute first.
                this.endDate = this.parseEndDate(this.element.attr('datetime'));
            }
            if (this.endDate === undefined) {  // Fallback on the text content.
                this.endDate = this.parseEndDate(this.element.text());
            }
            if (this.endDate === undefined) {  // Unable to parse a date.
                return;
            }
            if (this.element.is('time')) {
                this.timeElement = this.element;
            } else {
                this.timeElement = $('<time></time>');
                this.element.html(this.timeElement);
            }
            this.markup();
            this.setTimeoutDelay = this.sToMs(1);
            this.daysVisible = true;
            this.timeElement.on('time.elapsed', this.options.onTimeElapsed);
            this.timeElement.on('time.tick', this.options.onTick);
            this.doCountDown();
        },

        parseEndDate: function (str) {

            var d;

            d = this.parseDuration(str);
            if (d instanceof Date) {
                return d;
            }

            d = this.parseDateTime(str);
            if (d instanceof Date) {
                return d;
            }

            d = this.parseHumanReadableDuration(str);
            if (d instanceof Date) {
                return d;
            }

            // Try to parse a string representation of a date.
            // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
            d = Date.parse(str);
            if (!isNaN(d)) {
                return new Date(d);
            }

        },

        // Convert a valid duration string representing a duration to a Date object.
        //
        // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-duration-string
        // http://en.wikipedia.org/wiki/ISO_8601#Durations
        // i.e.: P2DT20H00M10S, PT01H01M15S, PT00M10S, P2D, P2DT20H00M10.55S
        //
        // RegExp:
        // /^
        //    P                     => duration designator (historically called "period")
        //    (?:(\d+)D)?           => (days) followed by the letter "D" (optional)
        //    T?                    => the letter "T" that precedes the time components of the representation (optional)
        //    (?:(\d+)H)?           => (hours) followed by the letter "H" (optional)
        //    (?:(\d+)M)?           => (minutes) followed by the letter "M" (optional)
        //    (
        //         ?:(\d+)          => (seconds) (optional)
        //         (?:\.(\d{1,3}))? => (milliseconds) full stop character (.) and fractional part of second (optional)
        //         S                => followed by the letter "S"
        //    )?
        // $/
        parseDuration: function (str) {
            var timeArray = str.match(/^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)(?:\.(\d{1,3}))?S)?$/);
            if (timeArray) {
                var d, dd, hh, mm, ss, ms;
                dd = timeArray[1] ? this.dToMs(timeArray[1]) : 0;
                hh = timeArray[2] ? this.hToMs(timeArray[2]) : 0;
                mm = timeArray[3] ? this.mToMs(timeArray[3]) : 0;
                ss = timeArray[4] ? this.sToMs(timeArray[4]) : 0;
                ms = timeArray[5] ? parseInt(timeArray[5], 10) : 0;
                d = new Date();
                d.setTime(d.getTime() + dd + hh + mm + ss + ms);
                return d;
            }
        },

        // Convert a valid global date and time string to a Date object.
        // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-global-date-and-time-string
        //
        // 2012-12-08T13:30:39+0100
        //     => ["2012-12-08T13:30:39+0100", "2012", "12", "08", "13", "30", "39", undefined, "+0100"]
        // 2012-12-08T06:54-0800
        //     => ["2012-12-08T06:54-0800", "2012", "12", "08", "06", "54", undefined, undefined, "-0800"]
        // 2012-12-08 13:30Z
        //     => ["2012-12-08 13:30Z", "2012", "12", "08", "13", "30", undefined, undefined, "Z"]
        // 2013-12-08 06:54:39.929-10:30
        //     => ["2013-12-08 06:54:39.929-08:30", "2013", "12", "08", "06", "54", "39", "929", "-10:30"]
        //
        // RegExp:
        // ^
        //     (\d{4,})         => (year) (four or more ASCII digits)
        //     -                => hyphen-minus
        //     (\d{2})          => (month)
        //     -                => hyphen-minus
        //     (\d{2})          => (day)
        //     [T\s]            => T or space
        //     (\d{2})          => (hours)
        //     :                => colon
        //     (\d{2})          => (minutes)
        //     (?:\:(\d{2}))?   => colon and (seconds) (optional)
        //     (?:\.(\d{1,3}))? => full stop character (.) and fractional part of second (milliseconds) (optional)
        //     ([Z\+\-\:\d]+)?  => time-zone (offset) string (optional)
        // $
        parseDateTime: function (str) {
            var timeArray = str.match(
                /^(\d{4,})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2})(?:\:(\d{2}))?(?:\.(\d{1,3}))?([Z\+\-\:\d]+)?$/);
            if (timeArray) {

                // Convert UTC offset from string to milliseconds.
                // +01:00 => ["+01:00", "+", "01", "00"] => -360000
                // -08:00 => ["-08:00", "-", "08", "00"] => 28800000
                // +05:30 => ["+05:30", "+", "05", "30"] => -19800000
                var offset = timeArray[8] ? timeArray[8].match(/^([\+\-])?(\d{2}):?(\d{2})$/) : undefined;

                // Time difference between UTC and the given time zone in milliseconds.
                var utcOffset = 0;
                if (offset) {
                    utcOffset = this.hToMs(offset[2]) + this.mToMs(offset[3]);
                    utcOffset = (offset[1] === '-') ? utcOffset : -utcOffset;
                }

                var d, yy, mo, dd, hh, mm, ss, ms;
                yy = timeArray[1];
                mo = timeArray[2] - 1;
                dd = timeArray[3];
                hh = timeArray[4] || 0;
                mm = timeArray[5] || 0;
                ss = timeArray[6] || 0;
                ms = timeArray[7] || 0;
                d = new Date(Date.UTC(yy, mo, dd, hh, mm, ss, ms));

                d.setTime(d.getTime() + utcOffset);

                return d;

            }
        },

        // Convert a string representing a human readable duration to a Date object.
        // Hours and minutes are mandatory.
        //
        // 600 days, 3:59:12 => ["600 days, 3:59:12", "600", "3", "59", "12", undefined]
        //           3:59:12 => ["3:59:12", undefined, "3", "59", "12", undefined]
        //             00:01 => ["00:01", undefined, "00", "01", undefined, undefined]
        //          00:00:59 => ["00:00:59", undefined, "00", "00", "59", undefined]
        //         240:00:59 => ["240:00:59", undefined, "240", "00", "59", undefined]
        //         4h 18m 3s => ["4h 18m 3s", undefined, "4", "18", "3", undefined]
        //     1d 0h 00m 59s => ["1d 0h 00m 59s", "1", "0", "00", "59", undefined]
        //             2h 0m => ["2h 0m", undefined, "2", "0", undefined, undefined]
        //         24h00m59s => ["24h00m59s", undefined, "24", "00", "59", undefined]
        //      12:30:39.929 => ["12:30:39.929", undefined, "12", "30", "39", "929"]
        //
        // RegExp:
        // /^
        //     (?:(\d+).+\s)?   => (days) followed by any character 0 or more times and a space (optional)
        //     (\d+)[h:]\s?     => (hours) followed by "h" or ":" and an optional space
        //     (\d+)[m:]?\s?    => (minutes) followed by "m" or ":" and an optional space
        //     (\d+)?[s]?       => (seconds) followed by an optional space (optional)
        //     (?:\.(\d{1,3}))? => (milliseconds) full stop character (.) and fractional part of second (optional)
        // $/
        parseHumanReadableDuration: function (str) {
            var timeArray = str.match(/^(?:(\d+).+\s)?(\d+)[h:]\s?(\d+)[m:]?\s?(\d+)?[s]?(?:\.(\d{1,3}))?$/);
            if (timeArray) {
                var d, dd, hh, mm, ss, ms;
                d = new Date();
                dd = timeArray[1] ? this.dToMs(timeArray[1]) : 0;
                hh = timeArray[2] ? this.hToMs(timeArray[2]) : 0;
                mm = timeArray[3] ? this.mToMs(timeArray[3]) : 0;
                ss = timeArray[4] ? this.sToMs(timeArray[4]) : 0;
                ms = timeArray[5] ? parseInt(timeArray[5], 10) : 0;
                d.setTime(d.getTime() + dd + hh + mm + ss + ms);
                return d;
            }
        },

        // Convert seconds to milliseconds.
        sToMs: function (s) {
            return parseInt(s, 10) * 1000;
        },

        // Convert minutes to milliseconds.
        mToMs: function (m) {
            return parseInt(m, 10) * 60 * 1000;
        },

        // Convert hours to milliseconds.
        hToMs: function (h) {
            return parseInt(h, 10) * 60 * 60 * 1000;
        },

        // Convert days to milliseconds.
        dToMs: function (d) {
            return parseInt(d, 10) * 24 * 60 * 60 * 1000;
        },

        // Extract seconds (0-59) from the given timedelta expressed in milliseconds.
        // A timedelta represents a duration, the difference between two dates or times.
        msToS: function (ms) {
            return parseInt((ms / 1000) % 60, 10);
        },

        // Extract minutes (0-59) from the given timedelta expressed in milliseconds.
        msToM: function (ms) {
            return parseInt((ms / 1000 / 60) % 60, 10);
        },

        // Extract hours (0-23) from the given timedelta expressed in milliseconds.
        msToH: function (ms) {
            return parseInt((ms / 1000 / 60 / 60) % 24, 10);
        },

        // Extract the number of days from the given timedelta expressed in milliseconds.
        msToD: function (ms) {
            return parseInt((ms / 1000 / 60 / 60 / 24), 10);
        },

        markup: function () {
            // Prepare the HTML content of the <time> element.
            var html = [
                '<span class="item item-dd">',
                    '<span class="dd"></span>',
                    '<span class="label label-dd">', this.options.label_dd, '</span>',
                '</span>',
                '<span class="separator separator-dd">', this.options.separator_days, '</span>',
                '<span class="item item-hh">',
                    '<span class="hh-1"></span>',
                    '<span class="hh-2"></span>',
                    '<span class="label label-hh">', this.options.label_hh, '</span>',
                '</span>',
                '<span class="separator">', this.options.separator, '</span>',
                '<span class="item item-mm">',
                    '<span class="mm-1"></span>',
                    '<span class="mm-2"></span>',
                    '<span class="label label-mm">', this.options.label_mm, '</span>',
                '</span>',
                '<span class="separator">', this.options.separator, '</span>',
                '<span class="item item-ss">',
                    '<span class="ss-1"></span>',
                    '<span class="ss-2"></span>',
                    '<span class="label label-ss">', this.options.label_ss, '</span>',
                '</span>'
            ];
            this.timeElement.html(html.join(''));
            // Customize HTML according to options.
            if (!this.options.with_labels) {
                this.timeElement.find('.label').remove();
            }
            if (!this.options.with_separators) {
                this.timeElement.find('.separator').remove();
            }
            if (!this.options.with_seconds) {
                this.timeElement.find('.item-ss').remove();
                this.timeElement.find('.separator').last().remove();
            }
            // Cache elements.
            this.item_dd       = this.timeElement.find('.item-dd');
            this.separator_dd  = this.timeElement.find('.separator-dd');
            this.remaining_dd  = this.timeElement.find('.dd');
            this.remaining_hh1 = this.timeElement.find('.hh-1');
            this.remaining_hh2 = this.timeElement.find('.hh-2');
            this.remaining_mm1 = this.timeElement.find('.mm-1');
            this.remaining_mm2 = this.timeElement.find('.mm-2');
            this.remaining_ss1 = this.timeElement.find('.ss-1');
            this.remaining_ss2 = this.timeElement.find('.ss-2');
            // Set the css class of the <time> element.
            this.timeElement.addClass(this.options.css_class);
        },

        doCountDown: function () {
            // Calculate the difference between the two dates in milliseconds.
            var ms = this.endDate.getTime() - new Date().getTime();
            // Extract seconds, minutes, hours and days from the timedelta expressed in milliseconds.
            var ss = this.msToS(ms);
            var mm = this.msToM(ms);
            var hh = this.msToH(ms);
            var dd = this.msToD(ms);
            // Prevent display of negative values.
            if (ms <= 0) {
                ss = mm = hh = dd = 0;
            }
            // Update display.
            // Use a space instead of 0 when no leading zero is required.
            this.displayRemainingTime({
                'ss': ss < 10 ? (this.options.with_ss_leading_zero ? '0' : ' ') + ss.toString() : ss.toString(),
                'mm': mm < 10 ? (this.options.with_mm_leading_zero ? '0' : ' ') + mm.toString() : mm.toString(),
                'hh': hh < 10 ? (this.options.with_hh_leading_zero ? '0' : ' ') + hh.toString() : hh.toString(),
                'dd': dd.toString()
            });
            // If seconds are hidden, stop the counter as soon as there is no minute left.
            if (!this.options.with_seconds && dd === 0 && mm === 0 && hh === 0) {
                ss = 0;
            }
            if (dd === 0 && mm === 0 && hh === 0 && ss === 0) {
                return this.timeElement.trigger('time.elapsed');
            }
            // Reload it.
            var self = this;
            window.setTimeout(function () { self.doCountDown(); }, self.setTimeoutDelay);
            return this.timeElement.trigger('time.tick', ms);
        },

        /**
         * Display the remaining time.
         *
         * @param {Object} remaining - an object literal containing a string representation
         * of days, hours, minutes and seconds remaining.
         * E.g. with leading zeros:
         * { dd: "600", hh: "03", mm: "59", ss: "11" }
         * Or without leading zeros:
         * { dd: "600", hh: " 3", mm: " 9", ss: "11" }
         */
        displayRemainingTime: function (remaining) {
            // Format the datetime attribute of the <time> element to an ISO 8601 duration.
            // https://html.spec.whatwg.org/multipage/semantics.html#datetime-value
            // I.e.: <time datetime="P2DT00H00M30S">2 00:00:00</time>
            var attr = [];
            attr.push('P');
            if (remaining.dd !== '0') {
                attr.push(remaining.dd, 'D');
            }
            attr.push('T', remaining.hh, 'H', remaining.mm, 'M');
            if (this.options.with_seconds) {
                attr.push(remaining.ss, 'S');
            }
            this.timeElement.attr('datetime', attr.join(''));
            // Remove days if necessary.
            if (this.daysVisible && !this.options.always_show_days && remaining.dd === '0') {
                this.item_dd.remove();
                this.separator_dd.remove();
                this.daysVisible = false;
            }
            // Update countdown values.
            // Use `trim` to convert spaces to empty string when there are no leading zeros.
            this.remaining_dd.text(remaining.dd);
            this.remaining_hh1.text(remaining.hh[0].trim());
            this.remaining_hh2.text(remaining.hh[1]);
            this.remaining_mm1.text(remaining.mm[0].trim());
            this.remaining_mm2.text(remaining.mm[1]);
            this.remaining_ss1.text(remaining.ss[0].trim());
            this.remaining_ss2.text(remaining.ss[1]);
        }

    });

    $.fn[pluginName] = function (options) {

        var args = arguments;

        // If the first parameter is an object (options) or was omitted, instantiate a new plugin instance.
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new CountDown(this, options));
                }
            });
        }

        // Allow any public function (i.e. a function whose name isn't 'init' or doesn't start with an underscore)
        // to be called via the jQuery plugin, e.g. $(element).countDown('functionName', arg1, arg2).
        else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

            // Cache the method call to make it possible to return a value.
            var returns;

            this.each(function () {
                var instance = $.data(this, 'plugin_' + pluginName);

                // Tests that there's already a plugin instance and checks that the requested public method exists.
                if (instance instanceof CountDown && typeof instance[options] === 'function') {
                    // Call the method of our plugin instance, and pass it the supplied arguments.
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }

                // Allow instances to be destroyed via the 'destroy' method.
                if (options === 'destroy') {
                    $.data(this, 'plugin_' + pluginName, null);
                }

            });

            // If the earlier cached method gives a value back return the value,
            // otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;

        }

    };

})(window.jQuery, window, document);window.HUB = window.HUB || {};
window.HUB.formatMoney = window.HUB.formatMoney ||  function(t, r) {
    function n(t, r) {
        return void 0 === t ? r : t
    }
    function e(t, r, e, o) {
        if (r = n(r, 2),
        e = n(e, ","),
        o = n(o, "."),
        isNaN(t) || null == t)
            return 0;
        var a = (t = (t / 100).toFixed(r)).split(".");
        return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + e) + (a[1] ? o + a[1] : "")
    }
    "string" == typeof t && (t = t.replace(".", ""));
    var o = ""
      , a = /\{\{\s*(\w+)\s*\}\}/
      , i = r || '${{amount}}';
    switch (i.match(a)[1]) {
    case "amount":
        o = e(t, 2);
        break;
    case "amount_no_decimals":
        o = e(t, 0);
        break;
    case "amount_with_comma_separator":
        o = e(t, 2, ".", ",");
        break;
    case "amount_with_space_separator":
        o = e(t, 2, " ", ",");
        break;
    case "amount_with_period_and_space_separator":
        o = e(t, 2, " ", ".");
        break;
    case "amount_no_decimals_with_comma_separator":
        o = e(t, 0, ".", ",");
        break;
    case "amount_no_decimals_with_space_separator":
        o = e(t, 0, ".", "");
        break;
    case "amount_with_space_separator":
        o = e(t, 2, ",", "");
        break;
    case "amount_with_apostrophe_separator":
        o = e(t, 2, "'", ".")
    }
    return i.replace(a, o)
};;var cb  = function($) {
var $this   = jQuery(this);
var $_this  = $this.closest('.lh-product-single'),
    data_slide = {
      speed : 500,
      breakpointsInverse : true,
      watchSlidesVisibility : true,
      grabCursor : true,
      autoHeight: true,
      watchOverflow : true,
    }
var $for = $_this.find('.lh-details-images .lh-slick-big');
var $nav = $_this.find('.lh-details-images .lh-slick-nav');
var thumb = new Swiper($nav[0], jQuery.extend({
  slidesPerView: 'auto',
  spaceBetween: 10,
  centerInsufficientSlides: true,
  navigation: {
      nextEl: $this.find('.lh-slide-sm-nav .swiper-button-next')[0],
      prevEl: $this.find('.lh-slide-sm-nav .swiper-button-prev')[0]
  }
},data_slide));
var slide = new Swiper($for[0], jQuery.extend({
  slidesPerView: 1,
  noSwipingClass: "no-answer-yet",
  pagination: {
    el: $this.find('.lh-lg-pagination')[0],
    type: 'bullets',
    clickable: true
  },
  navigation: {
      nextEl: $this.find('.lh-slide-lg-nav .swiper-button-next')[0],
      prevEl: $this.find('.lh-slide-lg-nav .swiper-button-prev')[0]
  },
  on : {
    slideChange: function(){
      thumb.slideTo(slide.realIndex,300,false);
      var vid = $(slide.visibleSlides[0]).data('variant_id');
      if (vid) {
          vid = vid.toString();
          var id = $_this.find('[name="id"]').val();
          if(!id || !vid.includes(id.toString()))
            $_this.find('[name="id"]').attr('vid',parseInt(vid.split(',')[0]))[0].dispatchEvent(new Event('swatch'));
      }
    },
    slideChangeTransitionEnd: function(){
      thumb.update();
      $_this.removeClass('lh-onchange-variant');
      initZoom();
    },
    resize: function(){
      initZoom();
    }
  },
  thumbs: {
    swiper:thumb
  }
},data_slide));
function initZoom(){
  if(section.settings.use_zoom == 'no' || !jQuery.fn.ezPlus) return;
  $this.find('.lh-zoomcontainer').remove();
  let type = 'lens';
  let ww = jQuery(window).width();
  if(ww < 992) type = 'lens';
  $_this.find('.zoom__image').each(function() {
    let _ = jQuery(this);

    let $img = _.find('img');
    if(!_.hasClass('swiper-slide-active')){
      $.removeData($img[0], 'ezPlus');
    }else{
      $img.ezPlus({
        zoomType: type,
        container: 'lh-zoomcontainer',
        scrollZoom: ww > 767,
        containLensZoom: true,
        zoomContainerAppendTo: $this.find('.block-slide-lg'),
        zIndex: 1
      });
    }
  });
}
initZoom();
 };						cb.bind($('section[data-section-id="LkK2y7Jpwd"] include[data-name="product-images"][data-id="2"]').get(0))(jQuery);;var cb  = function($) {

var $_this = jQuery(this),$rand_dom = $_this.find('.lh-random-countdown'),prefix='lh-countdown-';
var countdown = $_this.find('.count_time'),
		pid = countdown.data('pid'),
		key  = prefix+pid,
		time = countdown.html(),
		re_digit = new RegExp(/^-?\d*\.?\d*$/),
		int_time = re_digit.test(time);
function createNewDateLoop(){
	var d = window.localStorage.getItem(key);
	if (!Date.parse(d) || Date.parse(d) < new Date().getTime()){
		d = new Date();
		d.setSeconds(d.getSeconds()+ parseInt(countdown.attr('data-loop-time')));
		window.localStorage.setItem(key,d);
	}
}
if(countdown.hasClass('lh-random-countdown'))
{

	if(pid)
	{
		var d = window.localStorage.getItem(key);
		if (!Date.parse(d) || Date.parse(d) < new Date().getTime()){
			d = new Date();
			d.setDate(d.getDate()+ (Math.floor(Math.random() * 14) + 1));
			window.localStorage.setItem(key,d);
		}
		countdown.html(typeof d == 'string' ? d : d.toISOString());
	}
}else{
	if(int_time){
		countdown.attr('data-loop-time',time);
		if(window.LAYOUTHUB_LIVE)
			window.localStorage.setItem(key,'');
		createNewDateLoop();
		countdown.html(window.localStorage.getItem(key));
	}
}
var countdown_trans = {
	label_dd: section.settings.days,
	label_hh: section.settings.hours,
	label_mm: section.settings.mins,
	label_ss:  section.settings.secs,
	css_class: 'countdown-alt-2',
	with_separators: false
};
time   = $_this.find('.count_time').html();
jQuery.fn.countDown &&  $_this.find('.count_time').countDown(countdown_trans);
$_this.find('.count_time').on('time.elapsed',function(ev, ms){
	if(int_time){
		setTimeout(function(){
			createNewDateLoop();
		},1000);
	}
	$(this).hide();
})
 };						cb.bind($('section[data-section-id="LkK2y7Jpwd"] include[data-name="countdown"][data-id="3"]').get(0))(jQuery);;var cb  = function($) {
	var _this = jQuery(this),
			$this = jQuery(_this).closest('.lh-product-single'),
			slide = jQuery($this).find('.block-slide-lg');

	var id = $this.data('pid'),money_format =decodeURIComponent($this.data('moneyFormat')).replace(/\+/g,' ');
	if(window.LAYOUTHUB_LIVE){
		_this.find('.lh-add_to_cart,.lh-buy-now').click(function(event) {
				event.preventDefault();
		});
	}else{
		_this.find('.lh-buy-now').click(function(event) {
				event.preventDefault();
				var $form = $this.find('form');
				var quantity = $form.find('[name="quantity"]').val();
				var id = $form.find('[name="id"]').val();
				location.href="/cart/"+id+':'+quantity;
		});
	}
	function hideSelectbox()
	{
		_this.find('.lh-swatch-variations').map(function(){
			var index = jQuery(this).data('optionIndex');
			_this.find('.lh-option-wrappers .selector-wrapper:eq('+index+')').hide();
		});
	}

	function ProductOptionsInit() {
	    if (!window.Shopify || !window.Shopify.OptionSelectors) return 1;
	    if (!id || !document.getElementById('lh-product-json-' + id)) return;
	    var $product_json = null;
			 try{
			 $product_json = JSON.parse(document.getElementById('lh-product-json-' + id).innerHTML)
			 }catch(e){};
			if(!$product_json) return 0;
	    var productSelect = new window.Shopify.OptionSelectors('product-select-' + id, {
	        product: $product_json,
	        onVariantSelected: selectCallback,
	        enableHistoryState: (window.LAYOUTHUB_LIVE) ? false : $this.data('vid_url')
	    });
	    hideSelectbox();
	    $this.find('#product-select-' + id).on('swatch', function(evt, vid) {
	        productSelect.selectVariant(evt.target.getAttribute('vid'));
	    });
	    var $format = $this.data('moneyFormat');

	    function selectCallback(variant, selector) {
					setMaxQuantity(variant);
					var progress 	= $this.find('.lh-product-progress'),
						label_sale 	= $this.find('.lh-sale_label'),
						add_cart 		= $this.find('.lh-add_to_cart'),
						$status 		= $this.find('.lh-status'),
						$countdown 	= $this.find('.lh-wrap-countdown');
					if(variant){
						try {
							if (variant.featured_image && slide[0].swiper ) {
								var index = $this.find('.block-slide-sm .items-media[data-variant_id*="'+variant.id+'"]').index(),
										current = slide[0].swiper.realIndex;
								if(index != current)
									slide[0].swiper.slideTo(index,200);
								else
									throw "not change";
							}else{
								throw 'erorr';
							}
						} catch (e) {
								$this.removeClass('lh-onchange-variant');
								//console.info(e);
						}
	        }else{
						_this.find('.lh-btn-cart').attr('disabled', 'disabled');
						_this.find('.lh-cart-button-group').attr('data-available',false);
						$status.attr("data-estyle","trans_unavai").html(section.settings.trans_unavai);
						$this.find('.lh-content-summary').attr('data-hidden',true);
						$this.find('.lh-compare-at-price,.lh-price').css('display','none');
						progress.removeClass("lh-show");
						label_sale.css('display','none');
						$countdown.css('display','none');
						$this.removeClass('lh-onchange-variant');
						return;
					}
					var is_show = false;
					$countdown.css('display','block');
					var quantity 	= variant.inventory_quantity,
							policy		= variant.inventory_policy;
					var isSale = variant.available && (variant.price < variant.compare_at_price);
					if(progress.length && quantity){
						var min = parseInt(progress.data('minShow')),
								total = parseInt(progress.data('total')),
								left = variant.inventory_quantity,
								is_show = left > 0 && left < min;
						if(is_show) {
							progress.addClass("lh-show");
							progress.find('.lh-text-bar span.lh-qty').text(left);
							progress.find('.lh-progress-bar').css('width',Math.round(left * 100 / total) + "%");
						}
						else {
							progress.removeClass("lh-show");
						}
					}else progress.removeClass('lh-show');
					if(quantity < 1 && policy == 'continue'){
						add_cart.addClass('lh-pre-order').attr('data-estyle','trans_pre_order').text(add_cart.data('preOrder'));
					}else{
						add_cart.removeClass('lh-pre-order').attr('data-estyle','trans_add_to_cart').text(add_cart.data('addCart'));
					}
					if(((progress.length && !is_show) || !progress.length) && !isSale){
						$countdown.css('display','none')
					}
					$this.find('.lh-content-summary').attr('data-hidden', !isSale);
					$status.attr("data-estyle",variant.available ? "trans_instock" : "trans_outstock").html(variant.available ? section.settings.trans_instock : section.settings.trans_outstock);
	        $this.find('.lh-price,.lh-countdown-product').css('display','block');
	        $this.find('.lh-btn-cart').removeAttr('disabled');
					_this.find('.lh-cart-button-group').attr('data-available',variant.available );
	        $this.find('.lh-price .lh-money').html(window.HUB.formatMoney(variant.price,money_format));
					$this.find('.lh-product-sku .lh-sku').html(variant.sku ? variant.sku: "N/A");
	        if (isSale) {
							label_sale.css('display','block');
							$this.find('.lh-compare-at-price').css('display','block').find('.lh-money').html(window.HUB.formatMoney(variant.compare_at_price,money_format));
	        } else {
							label_sale.css('display','none');
	        }


	        if (variant.inventory_management == "shopify") {

	            $this.find('.lh-title-instock').css('display','block');
	        } else {
	            $this.find('.lh-title-instock').css('display','none');
	        }
	        if (variant.options.length) {
	            for (var i = 0 ; i < variant.options.length ; i++) {
								var wrap_swatch = $this.find('.lh-swatch-variations[data-option-index="' + i + '"]');
								if(wrap_swatch.hasClass('lh-swatch-simple')){
									wrap_swatch.find('.lh-selected-text').text(variant.options[i]);
								}
								wrap_swatch.find(`[data-value='${variant.options[i].replace(/'/g, "&#39;")}']`).addClass('active').siblings().removeClass('active');
	            }
	        }
	    };
	    $this.find('.lh-swatch-select').on('click', function() {
	        var _this = $(this);
					if(!_this.hasClass('active') && !$this.hasClass('lh-onchange-variant')){
						$this.addClass('lh-onchange-variant');
		        _this.siblings('li').removeClass('active');
		        _this.addClass('active');
		        var index = _this.closest('.swatch-index').attr('data-option-index');
		        $this.find('select#product-select-' + id + '-option-' + index).val(_this.data('value')).trigger('change');
					}
	    });
	}

	ProductOptionsInit();
	setDefaultTextCombobox();
	function setDefaultTextCombobox(){
		_this.find('.lh-wrap-combobox').each(function(){
			var selected_text = $(this).find('.lh-selected-text');
			selected_text.text($(this).find('.lh-swatch-select.active span').text());
		});
	}
	eventCombobox();
	function eventCombobox() {
			_this.find('.lh-swatch-simple').each(function(){
				var __this 				= $(this),
						index 				= __this.data('option-index'),
						option_select = $this.find('select#product-select-' + id + '-option-' + index),
						wrap_cb 			= __this.find('.lh-wrap-combobox');
				__this.find('.lh-selected-text').click(function(){
					__this.find('.list-swatch-items').slideToggle(200);
					__this.toggleClass('lh-show');
					__this.siblings('.lh-show').removeClass('lh-show').find('.list-swatch-items').slideUp(100);
				});
				__this.find('.list-swatch-items .lh-swatch-select').click(function(){
					var val = $(this).data('value');
					option_select.val(val).trigger('change');
					$(this).parent().slideUp(100);
					__this.find('.lh-selected-text').text(val);
					__this.removeClass('lh-show');
				});
			});
			_this.find('.lh-swatch-simple').mousedown(function(e){
				var __this = $(e.target),
						block_variant = __this.closest('.lh-swatch-simple');
				if(block_variant.hasClass('lh-show') && __this.is('.lh-wrap-combobox')){
					block_variant.removeClass('lh-show').find('.list-swatch-items').slideUp(100)
				}
			})
	}
	function setMaxQuantity(variant){
		var input = $this.find('.lh-control input[name="quantity"]');
		try{
			var max = 9999;
			if(variant.available){
				if(variant.inventory_management && variant.inventory_policy == 'deny')
					max = variant.inventory_quantity
			}else max = 0;
			var value = parseInt(input.val());
			input.attr('max',max);
			if(value > max){
				input.val(max);
			}else if(value == 0 && max > 0){
				input.val(1);
			}
		}catch(err){input.attr('max',0);input.val(0)}
	}
 };						cb.bind($('section[data-section-id="LkK2y7Jpwd"] include[data-name="product-form"][data-id="4"]').get(0))(jQuery);;var cb  = function($) {
	if(document.querySelector('.page-container') && window.getComputedStyle(document.querySelector('.page-container')).transform.indexOf('matrix') != -1){
		document.querySelector('.page-container').style.webkitTransform='none';
		document.querySelector('.page-container').style.transform='none';
	}
	var _this = jQuery(this),
			_dom  = _this.find('.lh-product-single'),
      _modal= _this.find('.lh-modal');
  _this.find('.lh-item-button a').click(function(e) {
    e.preventDefault();
    let index = $(this).closest('.lh-item-button').index();
    _modal.fadeIn(200);
    _modal.find('.lh-modal-body').eq(index).show().siblings('.lh-modal-body').hide();
  });
	_this.find('.lh-modal').on("click",function(e){
		if($(e.target).closest('.lh-modal-body').length == 0){
			_this.find('.lh-modal').fadeOut(100);
		}
	});
	_this.find('.lh-wrap-product-rating').click(function(){
		var tab_review = _this.closest('#hub-sections').find('.lh-section-rating');
		if(tab_review.length){
			tab_review[0].scrollIntoView({
			    behavior: "smooth",
			    block: "start"
			});
		}
	});
	function setupShopifyXr(){
    if (!window.ShopifyXR) {
      document.addEventListener('shopify_xr_initialized', setupShopifyXr);
    }else{
      var model_json = _this.find('script[id*=lh-product-media-]').html();
			try{
				model_json = JSON.parse(model_json);
			}catch(err){return}
			if(model_json.length){
	      window.ShopifyXR.addModels(model_json);
	      window.ShopifyXR.setupXRElements();
			}
			_this.find('.block-slide-lg model-viewer').each(function(){
				var __this = $(this);
				var model = new Shopify.ModelViewerUI(__this);
			})
    }
  }
	if(!window.LAYOUTHUB_LIVE)
		setupShopifyXr();
	window.LAYOUTHUB_LIVE && _this.find('.lh-product-single').addClass('lh-live');
  initRating();
  function initRating(){
    if (window.LAYOUTHUB_LIVE || window.location.protocol === 'blob:') {
      window.Shopify = window.Shopify || {};
      if(!window.Shopify.shop)window.Shopify.shop = 'tea-dev.myshopify.com';
      if (!document.querySelector('#lh-fake-review')) {
          jQuery.get('https://productreviews.shopifycdn.com/assets/v4/spr.js', function(code) {
            var regex = new RegExp(['"','/','/'].join(''),'gm');
            code = code.replace(regex, '"https://').replace(/SPR\./g,'window.SPR.').replace('window.SPR=','window.SPR=window.SPR || ');
            code = code.replace('return r=t.remote_id.toString()','if(!t.remote_id)return 0;return r=t.remote_id.toString()');
            code = code.replace('return r.fn.serializeObject','return !r || !r.fb ? false : r.fn.serializeObject');
            var blob = new Blob([code], {
              type: "application/javascript"
            });
            var url = URL.createObjectURL(blob);
            var script = document.createElement("script");
            script.src = url;
            script.id = "lh-fake-review";
            script.type = "text/javascript";
            if (!window.SPR)
            document.head.append(script);
          })
      } else {
          if (window.SPR && window.SPR.$) {
            window.SPR.loadjQueryExtentions(window.SPR.$);
            window.SPR.$(document).ready(function() {
              return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges()
            })
          }
      }
    }
  }
 };						cb.bind($('section[data-section-id="LkK2y7Jpwd"]').get(0))(jQuery);};					cb.bind($('section[data-section-id="LkK2y7Jpwd"]').get(0))({						url: "https://library.layouthub.com/HUB/files/RmViLS0yMDIx/NjEzNzA2NjU3/release-2-2021/pages/9Mr4wymCTgDPN1VJ/product/",						settings: {"use_zoom":"yes","days":"DAYS","hours":"HOURS","mins":"MINS","secs":"SECONDS","trans_unavai":"Unavailable","trans_instock":"Limited Quantity. Don't Miss Out. Order Today!","trans_outstock":"Out of stock"}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "6up50aef79n"							}), success: c, error: e});						}, cb  = function(section, $) {window.HUB = window.HUB || {};
 
window.HUB.formatMoney = window.HUB.formatMoney ||  function(t, r) {
    function n(t, r) {
        return void 0 === t ? r : t
    }
    function e(t, r, e, o) {
        if (r = n(r, 2),
        e = n(e, ","),
        o = n(o, "."),
        isNaN(t) || null == t)
            return 0;
        var a = (t = (t / 100).toFixed(r)).split(".");
        return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + e) + (a[1] ? o + a[1] : "")
    }
    "string" == typeof t && (t = t.replace(".", ""));
    var o = ""
      , a = /\{\{\s*(\w+)\s*\}\}/
      , i = r || '${{amount}}';
    switch (i.match(a)[1]) {
    case "amount":
        o = e(t, 2);
        break;
    case "amount_no_decimals":
        o = e(t, 0);
        break;
    case "amount_with_comma_separator":
        o = e(t, 2, ".", ",");
        break;
    case "amount_with_space_separator":
        o = e(t, 2, " ", ",");
        break;
    case "amount_with_period_and_space_separator":
        o = e(t, 2, " ", ".");
        break;
    case "amount_no_decimals_with_comma_separator":
        o = e(t, 0, ".", ",");
        break;
    case "amount_no_decimals_with_space_separator":
        o = e(t, 0, ".", "");
        break;
    case "amount_with_space_separator":
        o = e(t, 2, ",", "");
        break;
    case "amount_with_apostrophe_separator":
        o = e(t, 2, "'", ".")
    }
    return i.replace(a, o)
};;var cb  = function($) {
var $this   = jQuery(this);
var $_this  = $this.closest('.lh-product-single'),
    data_slide = {
      speed : 500,
      breakpointsInverse : true,
      watchSlidesVisibility : true,
      grabCursor : true,
      autoHeight: true,
      watchOverflow : true,
    }
var $for = $_this.find('.lh-details-images .lh-slick-big');
var $nav = $_this.find('.lh-details-images .lh-slick-nav');
  var thumb = new Swiper($nav[0], jQuery.extend({
    slidesPerView: 'auto',
    spaceBetween: 24,
    centerInsufficientSlides: true
  },data_slide));
  var slide = new Swiper($for[0], jQuery.extend({
    slidesPerView: 1,
    noSwipingClass: "no-answer-yet",
     pagination: {
        el: $this.find('.swiper-pagination')[0],
        type: 'bullets',
        clickable: true
      },
    navigation: {
        nextEl: '.lh-slide-lg-nav .swiper-button-next',
        prevEl: '.lh-slide-lg-nav .swiper-button-prev',
    },
    on : {
      slideChange: function(){
        thumb.slideTo(slide.realIndex,300,false);
        var vid = $(slide.visibleSlides[0]).data('variant_id');
        if (vid) {
            vid = vid.toString();
            var id = $_this.find('[name="id"]').val();
            if(!id || !vid.includes(id.toString()))
              $_this.find('[name="id"]').attr('vid',parseInt(vid.split(',')[0]))[0].dispatchEvent(new Event('swatch'));
        }
      },
      slideChangeTransitionEnd: function(){
        thumb.update();
        $_this.removeClass('lh-onchange-variant');
        initZoom();
      },
      resize: function(){
        initZoom();
      }
      },
      thumbs: {
        swiper: thumb
      }
  },data_slide));

function initZoom(){
  if(section.settings.use_zoom == 'no' || !jQuery.fn.ezPlus) return;
  $this.find('.lh-zoomcontainer').remove();
  let type = 'window';
  let ww = jQuery(window).width();
  if(ww < 992) type = 'lens';
  $_this.find('.zoom__image').each(function() {
    let _ = jQuery(this);

    let $img = _.find('img');
    if(!_.hasClass('swiper-slide-active')){
      $.removeData($img[0], 'ezPlus');
    }else{
      $img.ezPlus({
        zoomType: type,
        container: 'lh-zoomcontainer',
        scrollZoom: ww > 767,
        containLensZoom: true,
        zoomContainerAppendTo: $this.find('.lh-details-images')
      });
    }
  });
}
initZoom();


 };						cb.bind($('section[data-section-id="6up50aef79n"] include[data-name="product-images"][data-id="1"]').get(0))(jQuery);;var cb  = function($) {

var $_this = jQuery(this),$rand_dom = $_this.find('.lh-rand-yes'),prefix='lh-countdown-';
var $countdown = $_this.find('.lh-countdown');
var $txt = $_this.find('.lh-wrap-countdown');
if($rand_dom)
{
    var id = $rand_dom.data('id');
    if(id)
    {
        var key = prefix+id;
        var d = window.localStorage.getItem(key);
        if (!Date.parse(d) || Date.parse(d) < new Date().getTime()){
            d = new Date();
            d.setDate(d.getDate()+ (Math.floor(Math.random() * 14) + 1));
            window.localStorage.setItem(key,d);
        }
        d = typeof d == 'string' ? d : d.toISOString();
        $rand_dom.html(d);
    }
}
let countdown_text = $countdown.text();
if(new Date(countdown_text) != 'Invalid Date' && new Date(countdown_text).getTime() < new Date().getTime()){
    $txt.html('<span class="lh-expired"  data-estyle="cd_text_expire" >'+  section.settings.cd_text_expire +'</span>');
}
else{
var countdown_trans = {
    label_dd: section.settings.day,
    label_hh: section.settings.hour,
    label_mm: section.settings.min,
    label_ss: section.settings.sec,
    with_separators: true,
    separator_days: ':',
};
jQuery.fn.countDown &&  $countdown.countDown(countdown_trans);
$txt.on('time.elapsed', function () {
    $(this).html('<div class="lh-expired" data-estyle="cd_text_expire">'+  section.settings.cd_text_expire +'</div>')
});
}
 };						cb.bind($('section[data-section-id="6up50aef79n"] include[data-name="countdown"][data-id="3"]').get(0))(jQuery);;var cb  = function($) {
var _this = jQuery(this),
		$this = jQuery(_this).closest('.lh-product-single'),
		slide = jQuery($this).find('.block-slide-lg'),
		thumb = jQuery($this).find('.block-slide-sm'),
		arr_slide = [];
var id = $this.data('pid'),money_format =decodeURIComponent($this.data('moneyFormat')).replace(/\+/g,' ');
var current_variant = null;
	if(window.LAYOUTHUB_LIVE){
		_this.find('.lh-add_to_cart,.lh-buy-now').click(function(event) {
		event.preventDefault();
		});
	}else{
		_this.find('.lh-buy-now').click(function(event) {
				event.preventDefault();
				var $form = $this.find('form');
				var quantity = $form.find('[name="quantity"]').val();
				var id = $form.find('[name="id"]').val();
				location.href="/cart/"+id+':'+ 1;
		});
	}
	_this.find('.lh-size-chart,.lh-shipping').click(function(e) {
			e.preventDefault();
	    _this.closest('.lh-product-single').find('#' + $(this).data('id')).fadeToggle(300);
	});
	function hideSelectbox(){
		_this.find('.lh-swatch-variations').map(function(){
			var index = jQuery(this).data('optionIndex');
			_this.find('.lh-option-wrappers .selector-wrapper:eq('+index+')').css('display','none');
		});
	}

	function ProductOptionsInit() {
	    if (!window.Shopify || !window.Shopify.OptionSelectors) return 1;
	    if (!id || !document.getElementById('lh-product-json-' + id)) return;
	    var $product_json = null;
			 try{
			 $product_json = JSON.parse(document.getElementById('lh-product-json-' + id).innerHTML)
			 }catch(e){};
			if(!$product_json) return 0;
	    var productSelect = new window.Shopify.OptionSelectors('product-select-' + id, {
	        product: $product_json,
	        onVariantSelected: selectCallback,
	        enableHistoryState: (window.LAYOUTHUB_LIVE) ? false : $this.data('vid_url')
	    });
	    hideSelectbox();
	    $this.find('#product-select-' + id).on('swatch', function(evt, vid) {
	        productSelect.selectVariant(evt.target.getAttribute('vid'));
	    });
	    var $format = $this.data('moneyFormat');

	    function selectCallback(variant, selector) {
          current_variant = variant;
			setMaxQuantity(variant);
			var progress = $this.find('.lh-product-progress'),
				label_sale = $this.find('.lh-sale_label'),
				add_cart = $this.find('.lh-add_to_cart'),
				sold_out = $this.find('.lh-sold-out-title');
			if (variant){
				try {
					if (variant.featured_image && slide[0].swiper ) {
						var index = $this.find('.block-slide-lg .items-img[data-variant_id*="'+variant.id+'"]').index(),
								current = slide[0].swiper.realIndex;
						if(index != current){
							slide[0].swiper.slideTo(index,200);
						}else
							throw "not change";
					}else{
						throw 'erorr';
					}
				} catch (e) {
						$this.removeClass('lh-onchange-variant');
						//console.info(e);
				}
			}
	        else {
	            _this.find('.lh-btn-cart').attr('disabled', 'disabled');
	            sold_out.css({"display":"block","margin-left":0}).find('span').attr("data-lhi","trans_unavai").html(section.settings.trans_unavai);
				_this.find('.lh-cart-button-group').attr('data-available',false);
				$this.find('.lh-content-summary').attr('data-hidden', true);
    			$this.find('.lh-compare-at-price,.product-count-down,.lh-price').css('display','none');
				progress.removeClass("lh-show");
				label_sale.css('display','none');
				$this.removeClass('lh-onchange-variant');
	            return;
	        }
			var quantity 	= variant.inventory_quantity,
				policy		= variant.inventory_policy;
			var isSale =  (current_variant.price < current_variant.compare_at_price);
			if(progress.length && quantity){
				var min = parseInt(progress.data('minShow')),
					total = parseInt(progress.data('total')),
					left = variant.inventory_quantity,
					is_show = left > 0 && left < min;
				if(is_show) progress.addClass("lh-show")
				else progress.removeClass("lh-show");
				if(is_show){
					progress.find('.lh-text-bar span').text(left);
					progress.find('.lh-progress-bar').css('width',Math.round(left * 100 / total) + "%");
				}
			}else progress.removeClass("lh-show");
			if(quantity < 1 && policy == 'continue'){
				add_cart.addClass('lh-pre-order').attr('data-lhi','trans_pre_order').text(add_cart.data('preOrder'));
			}else{
				add_cart.removeClass('lh-pre-order').attr('data-lhi','trans_add_to_cart').text(add_cart.data('addCart'));
			}
			$this.find('.lh-content-summary').attr('data-hidden', !isSale);
	        sold_out.css({"display" : variant.available ? 'none':'block'}).find('span').attr("data-lhi","trans_outstock").html(section.settings.trans_outstock);
	        $this.find('.lh-price').css('display','block');
	        $this.find('.lh-btn-cart').removeAttr('disabled');
			_this.find('.lh-cart-button-group').attr('data-available',variant.available );
	        $this.find('.lh-price').html(window.HUB.formatMoney(variant.price,money_format));
			$this.find('.lh-product-sku .lh-sku').html(variant.sku ? variant.sku: "N/A");
	        if (isSale) {
	        	var sale = window.HUB.formatMoney((variant.compare_at_price - variant.price),money_format);
				label_sale.css('display','block').html(section.settings.trans_sale + (100 - Math.round(variant.price / variant.compare_at_price * 100))+ "%");
	            $this.find('.lh-compare-at-price').css('display','block').html(window.HUB.formatMoney(variant.compare_at_price,money_format));
	             <!-- $this.find('.lh-save').css('display','block').html(section.settings.txt_discount +" "+ sale); -->
	        } else {
				label_sale.css('display','none');
	            $this.find('.lh-compare-at-price').css('display','none');
	            $this.find('.lh-save').css('display','none')
	        }


	        if (variant.inventory_management == "shopify") {

	            $this.find('.lh-title-instock').css('display','block');
	        } else {
	            $this.find('.lh-title-instock').css('display','none');
	        }
	        if (variant.options.length) {
	            for (var i = 0 ; i < variant.options.length ; i++) {
					var wrap_swatch = $this.find('.lh-swatch-variations[data-option-index="' + i + '"]');
					if(wrap_swatch.hasClass('lh-swatch-images')){
						wrap_swatch.find('.meta span').text(variant.options[i]);
					}else{
						wrap_swatch.find('.lh-selected-text').text(variant.options[i]);
					}
					wrap_swatch.find(`[data-value='${variant.options[i].replace(/'/g, "&#39;")}']`).addClass('active').siblings().removeClass('active');
	            }
	        }
	    };
	    $this.find('.lh-swatch-select').on('click', function() {
	        var _this = $(this);
					if(!_this.hasClass('active') && !$this.hasClass('lh-onchange-variant')){
						$this.addClass('lh-onchange-variant');
				        _this.siblings('li').removeClass('active');
				        _this.addClass('active');
				        var index = _this.closest('.swatch-index').attr('data-option-index');
				        $this.find('select#product-select-' + id + '-option-' + index).val(_this.data('value')).trigger('change');
					}
	    });
	}
	
	ProductOptionsInit();
	setDefaultTextCombobox();
	function setDefaultTextCombobox(){
		_this.find('.lh-wrap-combobox').each(function(){
			var selected_text = $(this).find('.lh-selected-text');
			selected_text.text($(this).find('.lh-swatch-select.active span').text());
		});
	}
	eventCombobox();
	function eventCombobox() {
			_this.find('.lh-swatch-simple').each(function(){
				var __this 				= $(this),
						index 				= __this.data('option-index'),
						option_select = $this.find('select#product-select-' + id + '-option-' + index),
						wrap_cb 			= __this.find('.lh-wrap-combobox');
				__this.find('.lh-selected-text').click(function(){
					__this.find('.list-swatch-items').slideToggle(200);
					__this.toggleClass('lh-show');
					__this.siblings('.lh-show').removeClass('lh-show').find('.list-swatch-items').slideUp(100);
				});
				__this.find('.list-swatch-items .lh-swatch-select').click(function(){
					var val = $(this).data('value');
					option_select.val(val).trigger('change');
					$(this).parent().slideUp(100);
					__this.find('.lh-selected-text').text(val);
					__this.removeClass('lh-show');
				});
			});
			_this.find('.lh-swatch-simple').mousedown(function(e){
				var __this = $(e.target),
						block_variant = __this.closest('.lh-swatch-simple');
				if(block_variant.hasClass('lh-show') && __this.is('.lh-wrap-combobox')){
					block_variant.removeClass('lh-show').find('.list-swatch-items').slideUp(100)
				}
			})
	}
	function setMaxQuantity(variant){
		var input = $this.find('.lh-control input[name="quantity"]');
		try{
			var max = 9999;
			if(variant.available){
				if(variant.inventory_management && variant.inventory_policy == 'deny')
					max = variant.inventory_quantity
			}else max = 0;
			var value = parseInt(input.val());
			input.attr('max',max);
			if(value > max){
				input.val(max);
			}else if(value == 0 && max > 0){
				input.val(1);
			}
		}catch(err){input.attr('max',0);input.val(0)}
	}
 };						cb.bind($('section[data-section-id="6up50aef79n"] include[data-name="product-form"][data-id="4"]').get(0))(jQuery);;var cb  = function($) {
	if(document.querySelector('.page-container') && window.getComputedStyle(document.querySelector('.page-container')).transform.indexOf('matrix') != -1){
		document.querySelector('.page-container').style.webkitTransform='none';
		document.querySelector('.page-container').style.transform='none';
	}
	var _this = jQuery(this);
	_this.find('.lh-wrap-product-rating').click(function(){
		var tab_review = _this.find('.lh-item-tabs[data-tab-handle="review"]');
		var tab_review = _this.closest('#hub-sections').find('.lh-section-rating');
		if(tab_review.length){
			if(!tab_review.hasClass('active')){
				tab_review.siblings('.lh-item-tabs.active').removeClass('active').find('.lh-tab-content').slideUp(00);
				tab_review.addClass('active').find('.lh-tab-content').slideDown(00);
			}
			tab_review[0].scrollIntoView({
			    behavior: "smooth",
			    block: "start"
			});
		}
	});
		var _this = jQuery(this),
			$dom = _this.find('.lh-product-single');
	_this.find('.lh-modal-size-guild').on("click",function(e){
		if($(e.target).closest('.lh-modal-body').length == 0){
			_this.find('.lh-modal').fadeOut(100);
		}
	})
	<!-- review -->
	if(window.LAYOUTHUB_LIVE || window.location.protocol === 'blob:'){
      if (!document.querySelector('#lh-fake-review') && !window.SPR && window.LAYOUTHUB_LIVE === true) {
        jQuery.get('https://productreviews.shopifycdn.com/assets/v4/spr.js', function(code) {

            var regex = new RegExp(['"','/','/'].join(''),'gm');
            code = code.replace(regex, '"https://').replace(/SPR\./g,'window.SPR.').replace('window.SPR=','window.SPR=window.SPR || ');
            code = code.replace('return r=t.remote_id.toString()','if(!t.remote_id)return 0;return r=t.remote_id.toString()');
            code = code.replace('return r.fn.serializeObject','return !r || !r.fb ? false : r.fn.serializeObject');
          var blob = new Blob([code], {
            type: "application/javascript"
          });
          var url = URL.createObjectURL(blob);
          var script = document.createElement("script");
          script.src = url;
          script.id = "lh-fake-review";
          script.type = "text/javascript";
          if (!window.SPR)
          document.head.append(script);
        })
      } else {

        if (window.SPR && window.SPR.$) {
            window.SPR.loadjQueryExtentions(window.SPR.$);
            window.SPR.$(document).ready(function() {
                return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges()
            })
        }
      }
    }
	if(!window.LAYOUTHUB_LIVE)
	window.LAYOUTHUB_LIVE && _this.find('.lh-product-single').addClass('lh-live');
	<!-- silde image -->
	var $this   = jQuery(this);
	var $_this  = $this.find('.lh-product-single'),
    data_slide = {
      speed : 500,
      breakpointsInverse : true,
      watchSlidesVisibility : true,
      grabCursor : true,
      autoHeight: true,
      watchOverflow : true,
    }
var $for = $_this.find('.lh-details-images .lh-slick-big');
var $nav = $_this.find('.lh-details-images .lh-slick-nav');
  
  var slide = new Swiper($for[0], jQuery.extend({
    slidesPerView: 1,
    noSwipingClass: "no-answer-yet",
     pagination: {
        el: $this.find('.swiper-pagination')[0],
        type: 'bullets',
        clickable: true
      },
    navigation: {
        nextEl: '.lh-slide-lg-nav .swiper-button-next',
        prevEl: '.lh-slide-lg-nav .swiper-button-prev',
    },
    on : {
      slideChange: function(){
        var vid = $for.find('.items-img:nth-child('+(slide.activeIndex + 1)+')').data('variant_id');
        <!--var vid = $(slide.visibleSlides[0]).data('variant_id');-->
        if (vid) {
            vid = vid.toString();
            var id = $_this.find('[name="id"]').val();
            if(!id || !vid.includes(id.toString()))
              $_this.find('[name="id"]').attr('vid',parseInt(vid.split(',')[0]))[0].dispatchEvent(new Event('swatch'));
        }
      },
      slideChangeTransitionEnd: function(){
       
        $_this.removeClass('lh-onchange-variant');
        initZoom();
      },
      resize: function(){
        initZoom();
      }
      },
     
  },data_slide));

function initZoom(){
  if(section.settings.use_zoom == 'no' || !jQuery.fn.ezPlus) return;
  $this.find('.lh-zoomcontainer').remove();
  let type = 'window';
  let ww = jQuery(window).width();
  if(ww < 992) type = 'lens';
  $_this.find('.zoom__image').each(function() {
    let _ = jQuery(this);

    let $img = _.find('img');
    if(!_.hasClass('swiper-slide-active')){
      $.removeData($img[0], 'ezPlus');
    }else{
      $img.ezPlus({
        zoomType: type,
        container: 'lh-zoomcontainer',
        scrollZoom: ww > 767,
        containLensZoom: true,
        zoomContainerAppendTo: $this.find('.lh-details-images')
      });
    }
  });
}
initZoom();

 };						cb.bind($('section[data-section-id="6up50aef79n"]').get(0))(jQuery);};					cb.bind($('section[data-section-id="6up50aef79n"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWFyLS0yMDIx/NjE1Mjc3MDI3/release-3-2021/pages/7X2dkGaNmzMbZPsC/product/",						settings: {"use_zoom":"no","cd_text_expire":"EXPIRED TIME","day":"","hour":"","min":"","sec":"","trans_unavai":"Unavailable","trans_outstock":"Out of stock","trans_sale":"Sale "}					}, jQuery);})(jQuery);;console.log('This page layout has been built by https://www.layouthub.com');