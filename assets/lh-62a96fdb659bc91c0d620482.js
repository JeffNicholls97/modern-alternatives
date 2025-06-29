;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "lqx764tuyvj"							}), success: c, error: e});						}, cb  = function(section, $) {(function(a){var b={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};a.zoom=function(b,c,d,e){var f,g,h,i,j,k,l,m=a(b),n=m.css("position"),o=a(c);return b.style.position=/(absolute|fixed)/.test(n)?n:"relative",b.style.overflow="hidden",d.style.width=d.style.height="",a(d).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:d.width*e,height:d.height*e,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(b),{init:function(){g=m.outerWidth(),f=m.outerHeight(),c===b?(i=g,h=f):(i=o.outerWidth(),h=o.outerHeight()),j=(d.width-g)/i,k=(d.height-f)/h,l=o.offset()},move:function(a){var b=a.pageX-l.left,c=a.pageY-l.top;c=Math.max(Math.min(c,h),0),b=Math.max(Math.min(b,i),0),d.style.left=b*-j+"px",d.style.top=c*-k+"px"}}},a.fn.zoom=function(c){return this.each(function(){var d=a.extend({},b,c||{}),e=d.target&&a(d.target)[0]||this,f=this,g=a(f),h=document.createElement("img"),i=a(h),j=!1,k=!1;if(!d.url){var l=f.querySelector("img");if(l&&(d.url=l.getAttribute("data-src")||l.currentSrc||l.src),!d.url)return}g.one("zoom.destroy",function(a,b){g.off(".zoom"),e.style.position=a,e.style.overflow=b,h.onload=null,i.remove()}.bind(this,e.style.position,e.style.overflow)),h.onload=function(){function b(b){l.init(),l.move(b),i.stop().fadeTo(a.support.opacity?d.duration:0,1,!!a.isFunction(d.onZoomIn)&&d.onZoomIn.call(h))}function c(){i.stop().fadeTo(d.duration,0,!!a.isFunction(d.onZoomOut)&&d.onZoomOut.call(h))}var l=a.zoom(e,f,h,d.magnify);"grab"===d.on?g.on("mousedown.zoom",function(d){1===d.which&&(a(document).one("mouseup.zoom",function(){c(),a(document).off("mousemove.zoom",l.move)}),b(d),a(document).on("mousemove.zoom",l.move),d.preventDefault())}):"click"===d.on?g.on("click.zoom",function(d){return j?void 0:(j=!0,b(d),a(document).on("mousemove.zoom",l.move),a(document).one("click.zoom",function(){c(),j=!1,a(document).off("mousemove.zoom",l.move)}),!1)}):"toggle"===d.on?g.on("click.zoom",function(a){j?c():b(a),j=!j}):"mouseover"===d.on&&(l.init(),g.on("mouseenter.zoom",b).on("mouseleave.zoom",c).on("mousemove.zoom",l.move)),d.touch&&g.on("touchstart.zoom",function(a){a.preventDefault(),k?(k=!1,c()):(k=!0,b(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(a){a.preventDefault(),l.move(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])}).on("touchend.zoom",function(a){a.preventDefault(),k&&(k=!1,c())}),a.isFunction(d.callback)&&d.callback.call(h)},h.setAttribute("role","presentation"),h.alt="",h.src=d.url})},a.fn.zoom.defaults=b})(window.jQuery);(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global=global||self,global.Swiper=factory());}(this,function(){'use strict';var doc=(typeof document==='undefined')?{body:{},addEventListener:function addEventListener(){},removeEventListener:function removeEventListener(){},activeElement:{blur:function blur(){},nodeName:'',},querySelector:function querySelector(){return null;},querySelectorAll:function querySelectorAll(){return[];},getElementById:function getElementById(){return null;},createEvent:function createEvent(){return{initEvent:function initEvent(){},};},createElement:function createElement(){return{children:[],childNodes:[],style:{},setAttribute:function setAttribute(){},getElementsByTagName:function getElementsByTagName(){return[];},};},location:{hash:''},}:document;var win=(typeof window==='undefined')?{document:doc,navigator:{userAgent:'',},location:{},history:{},CustomEvent:function CustomEvent(){return this;},addEventListener:function addEventListener(){},removeEventListener:function removeEventListener(){},getComputedStyle:function getComputedStyle(){return{getPropertyValue:function getPropertyValue(){return '';},};},Image:function Image(){},Date:function Date(){},screen:{},setTimeout:function setTimeout(){},clearTimeout:function clearTimeout(){},}:window;var Dom7=function Dom7(arr){var self=this;for(var i=0;i<arr.length;i+=1){self[i]=arr[i];}
self.length=arr.length;return this;};function $(selector,context){var arr=[];var i=0;if(selector&&!context){if(selector instanceof Dom7){return selector;}}
if(selector){if(typeof selector==='string'){var els;var tempParent;var html=selector.trim();if(html.indexOf('<')>=0&&html.indexOf('>')>=0){var toCreate='div';if(html.indexOf('<li')===0){toCreate='ul';}
if(html.indexOf('<tr')===0){toCreate='tbody';}
if(html.indexOf('<td')===0||html.indexOf('<th')===0){toCreate='tr';}
if(html.indexOf('<tbody')===0){toCreate='table';}
if(html.indexOf('<option')===0){toCreate='select';}
tempParent=doc.createElement(toCreate);tempParent.innerHTML=html;for(i=0;i<tempParent.childNodes.length;i+=1){arr.push(tempParent.childNodes[i]);}}else{if(!context&&selector[0]==='#'&&!selector.match(/[ .<>:~]/)){els=[doc.getElementById(selector.trim().split('#')[1])];}else{els=(context||doc).querySelectorAll(selector.trim());}
for(i=0;i<els.length;i+=1){if(els[i]){arr.push(els[i]);}}}}else if(selector.nodeType||selector===win||selector===doc){arr.push(selector);}else if(selector.length>0&&selector[0].nodeType){for(i=0;i<selector.length;i+=1){arr.push(selector[i]);}}}
return new Dom7(arr);}
$.fn=Dom7.prototype;$.Class=Dom7;$.Dom7=Dom7;function unique(arr){var uniqueArray=[];for(var i=0;i<arr.length;i+=1){if(uniqueArray.indexOf(arr[i])===-1){uniqueArray.push(arr[i]);}}
return uniqueArray;}
function addClass(className){if(typeof className==='undefined'){return this;}
var classes=className.split(' ');for(var i=0;i<classes.length;i+=1){for(var j=0;j<this.length;j+=1){if(typeof this[j]!=='undefined'&&typeof this[j].classList!=='undefined'){this[j].classList.add(classes[i]);}}}
return this;}
function removeClass(className){var classes=className.split(' ');for(var i=0;i<classes.length;i+=1){for(var j=0;j<this.length;j+=1){if(typeof this[j]!=='undefined'&&typeof this[j].classList!=='undefined'){this[j].classList.remove(classes[i]);}}}
return this;}
function hasClass(className){if(!this[0]){return false;}
return this[0].classList.contains(className);}
function toggleClass(className){var classes=className.split(' ');for(var i=0;i<classes.length;i+=1){for(var j=0;j<this.length;j+=1){if(typeof this[j]!=='undefined'&&typeof this[j].classList!=='undefined'){this[j].classList.toggle(classes[i]);}}}
return this;}
function attr(attrs,value){var arguments$1=arguments;if(arguments.length===1&&typeof attrs==='string'){if(this[0]){return this[0].getAttribute(attrs);}
return undefined;}
for(var i=0;i<this.length;i+=1){if(arguments$1.length===2){this[i].setAttribute(attrs,value);}else{for(var attrName in attrs){this[i][attrName]=attrs[attrName];this[i].setAttribute(attrName,attrs[attrName]);}}}
return this;}
function removeAttr(attr){for(var i=0;i<this.length;i+=1){this[i].removeAttribute(attr);}
return this;}
function data(key,value){var el;if(typeof value==='undefined'){el=this[0];if(el){if(el.dom7ElementDataStorage&&(key in el.dom7ElementDataStorage)){return el.dom7ElementDataStorage[key];}
var dataKey=el.getAttribute(("data-"+key));if(dataKey){return dataKey;}
return undefined;}
return undefined;}
for(var i=0;i<this.length;i+=1){el=this[i];if(!el.dom7ElementDataStorage){el.dom7ElementDataStorage={};}
el.dom7ElementDataStorage[key]=value;}
return this;}
function transform(transform){for(var i=0;i<this.length;i+=1){var elStyle=this[i].style;elStyle.webkitTransform=transform;elStyle.transform=transform;}
return this;}
function transition(duration){if(typeof duration!=='string'){duration=duration+"ms";}
for(var i=0;i<this.length;i+=1){var elStyle=this[i].style;elStyle.webkitTransitionDuration=duration;elStyle.transitionDuration=duration;}
return this;}
function on(){var assign;var args=[],len=arguments.length;while(len--)args[len]=arguments[len];var eventType=args[0];var targetSelector=args[1];var listener=args[2];var capture=args[3];if(typeof args[1]==='function'){(assign=args,eventType=assign[0],listener=assign[1],capture=assign[2]);targetSelector=undefined;}
if(!capture){capture=false;}
function handleLiveEvent(e){var target=e.target;if(!target){return;}
var eventData=e.target.dom7EventData||[];if(eventData.indexOf(e)<0){eventData.unshift(e);}
if($(target).is(targetSelector)){listener.apply(target,eventData);}
else{var parents=$(target).parents();for(var k=0;k<parents.length;k+=1){if($(parents[k]).is(targetSelector)){listener.apply(parents[k],eventData);}}}}
function handleEvent(e){var eventData=e&&e.target?e.target.dom7EventData||[]:[];if(eventData.indexOf(e)<0){eventData.unshift(e);}
listener.apply(this,eventData);}
var events=eventType.split(' ');var j;for(var i=0;i<this.length;i+=1){var el=this[i];if(!targetSelector){for(j=0;j<events.length;j+=1){var event=events[j];if(!el.dom7Listeners){el.dom7Listeners={};}
if(!el.dom7Listeners[event]){el.dom7Listeners[event]=[];}
el.dom7Listeners[event].push({listener:listener,proxyListener:handleEvent,});el.addEventListener(event,handleEvent,capture);}}else{for(j=0;j<events.length;j+=1){var event$1=events[j];if(!el.dom7LiveListeners){el.dom7LiveListeners={};}
if(!el.dom7LiveListeners[event$1]){el.dom7LiveListeners[event$1]=[];}
el.dom7LiveListeners[event$1].push({listener:listener,proxyListener:handleLiveEvent,});el.addEventListener(event$1,handleLiveEvent,capture);}}}
return this;}
function off(){var assign;var args=[],len=arguments.length;while(len--)args[len]=arguments[len];var eventType=args[0];var targetSelector=args[1];var listener=args[2];var capture=args[3];if(typeof args[1]==='function'){(assign=args,eventType=assign[0],listener=assign[1],capture=assign[2]);targetSelector=undefined;}
if(!capture){capture=false;}
var events=eventType.split(' ');for(var i=0;i<events.length;i+=1){var event=events[i];for(var j=0;j<this.length;j+=1){var el=this[j];var handlers=(void 0);if(!targetSelector&&el.dom7Listeners){handlers=el.dom7Listeners[event];}else if(targetSelector&&el.dom7LiveListeners){handlers=el.dom7LiveListeners[event];}
if(handlers&&handlers.length){for(var k=handlers.length-1;k>=0;k-=1){var handler=handlers[k];if(listener&&handler.listener===listener){el.removeEventListener(event,handler.proxyListener,capture);handlers.splice(k,1);}else if(listener&&handler.listener&&handler.listener.dom7proxy&&handler.listener.dom7proxy===listener){el.removeEventListener(event,handler.proxyListener,capture);handlers.splice(k,1);}else if(!listener){el.removeEventListener(event,handler.proxyListener,capture);handlers.splice(k,1);}}}}}
return this;}
function trigger(){var args=[],len=arguments.length;while(len--)args[len]=arguments[len];var events=args[0].split(' ');var eventData=args[1];for(var i=0;i<events.length;i+=1){var event=events[i];for(var j=0;j<this.length;j+=1){var el=this[j];var evt=(void 0);try{evt=new win.CustomEvent(event,{detail:eventData,bubbles:true,cancelable:true,});}catch(e){evt=doc.createEvent('Event');evt.initEvent(event,true,true);evt.detail=eventData;}
el.dom7EventData=args.filter(function(data,dataIndex){return dataIndex>0;});el.dispatchEvent(evt);el.dom7EventData=[];delete el.dom7EventData;}}
return this;}
function transitionEnd(callback){var events=['webkitTransitionEnd','transitionend'];var dom=this;var i;function fireCallBack(e){if(e.target!==this){return;}
callback.call(this,e);for(i=0;i<events.length;i+=1){dom.off(events[i],fireCallBack);}}
if(callback){for(i=0;i<events.length;i+=1){dom.on(events[i],fireCallBack);}}
return this;}
function outerWidth(includeMargins){if(this.length>0){if(includeMargins){var styles=this.styles();return this[0].offsetWidth+parseFloat(styles.getPropertyValue('margin-right'))+parseFloat(styles.getPropertyValue('margin-left'));}
return this[0].offsetWidth;}
return null;}
function outerHeight(includeMargins){if(this.length>0){if(includeMargins){var styles=this.styles();return this[0].offsetHeight+parseFloat(styles.getPropertyValue('margin-top'))+parseFloat(styles.getPropertyValue('margin-bottom'));}
return this[0].offsetHeight;}
return null;}
function offset(){if(this.length>0){var el=this[0];var box=el.getBoundingClientRect();var body=doc.body;var clientTop=el.clientTop||body.clientTop||0;var clientLeft=el.clientLeft||body.clientLeft||0;var scrollTop=el===win?win.scrollY:el.scrollTop;var scrollLeft=el===win?win.scrollX:el.scrollLeft;return{top:(box.top+scrollTop)-clientTop,left:(box.left+scrollLeft)-clientLeft,};}
return null;}
function styles(){if(this[0]){return win.getComputedStyle(this[0],null);}
return{};}
function css(props,value){var i;if(arguments.length===1){if(typeof props==='string'){if(this[0]){return win.getComputedStyle(this[0],null).getPropertyValue(props);}}else{for(i=0;i<this.length;i+=1){for(var prop in props){this[i].style[prop]=props[prop];}}
return this;}}
if(arguments.length===2&&typeof props==='string'){for(i=0;i<this.length;i+=1){this[i].style[props]=value;}
return this;}
return this;}
function each(callback){if(!callback){return this;}
for(var i=0;i<this.length;i+=1){if(callback.call(this[i],i,this[i])===false){return this;}}
return this;}
function html(html){if(typeof html==='undefined'){return this[0]?this[0].innerHTML:undefined;}
for(var i=0;i<this.length;i+=1){this[i].innerHTML=html;}
return this;}
function text(text){if(typeof text==='undefined'){if(this[0]){return this[0].textContent.trim();}
return null;}
for(var i=0;i<this.length;i+=1){this[i].textContent=text;}
return this;}
function is(selector){var el=this[0];var compareWith;var i;if(!el||typeof selector==='undefined'){return false;}
if(typeof selector==='string'){if(el.matches){return el.matches(selector);}
else if(el.webkitMatchesSelector){return el.webkitMatchesSelector(selector);}
else if(el.msMatchesSelector){return el.msMatchesSelector(selector);}
compareWith=$(selector);for(i=0;i<compareWith.length;i+=1){if(compareWith[i]===el){return true;}}
return false;}else if(selector===doc){return el===doc;}
else if(selector===win){return el===win;}
if(selector.nodeType||selector instanceof Dom7){compareWith=selector.nodeType?[selector]:selector;for(i=0;i<compareWith.length;i+=1){if(compareWith[i]===el){return true;}}
return false;}
return false;}
function index(){var child=this[0];var i;if(child){i=0;while((child=child.previousSibling)!==null){if(child.nodeType===1){i+=1;}}
return i;}
return undefined;}
function eq(index){if(typeof index==='undefined'){return this;}
var length=this.length;var returnIndex;if(index>length-1){return new Dom7([]);}
if(index<0){returnIndex=length+index;if(returnIndex<0){return new Dom7([]);}
return new Dom7([this[returnIndex]]);}
return new Dom7([this[index]]);}
function append(){var args=[],len=arguments.length;while(len--)args[len]=arguments[len];var newChild;for(var k=0;k<args.length;k+=1){newChild=args[k];for(var i=0;i<this.length;i+=1){if(typeof newChild==='string'){var tempDiv=doc.createElement('div');tempDiv.innerHTML=newChild;while(tempDiv.firstChild){this[i].appendChild(tempDiv.firstChild);}}else if(newChild instanceof Dom7){for(var j=0;j<newChild.length;j+=1){this[i].appendChild(newChild[j]);}}else{this[i].appendChild(newChild);}}}
return this;}
function prepend(newChild){var i;var j;for(i=0;i<this.length;i+=1){if(typeof newChild==='string'){var tempDiv=doc.createElement('div');tempDiv.innerHTML=newChild;for(j=tempDiv.childNodes.length-1;j>=0;j-=1){this[i].insertBefore(tempDiv.childNodes[j],this[i].childNodes[0]);}}else if(newChild instanceof Dom7){for(j=0;j<newChild.length;j+=1){this[i].insertBefore(newChild[j],this[i].childNodes[0]);}}else{this[i].insertBefore(newChild,this[i].childNodes[0]);}}
return this;}
function next(selector){if(this.length>0){if(selector){if(this[0].nextElementSibling&&$(this[0].nextElementSibling).is(selector)){return new Dom7([this[0].nextElementSibling]);}
return new Dom7([]);}
if(this[0].nextElementSibling){return new Dom7([this[0].nextElementSibling]);}
return new Dom7([]);}
return new Dom7([]);}
function nextAll(selector){var nextEls=[];var el=this[0];if(!el){return new Dom7([]);}
while(el.nextElementSibling){var next=el.nextElementSibling;if(selector){if($(next).is(selector)){nextEls.push(next);}}else{nextEls.push(next);}
el=next;}
return new Dom7(nextEls);}
function prev(selector){if(this.length>0){var el=this[0];if(selector){if(el.previousElementSibling&&$(el.previousElementSibling).is(selector)){return new Dom7([el.previousElementSibling]);}
return new Dom7([]);}
if(el.previousElementSibling){return new Dom7([el.previousElementSibling]);}
return new Dom7([]);}
return new Dom7([]);}
function prevAll(selector){var prevEls=[];var el=this[0];if(!el){return new Dom7([]);}
while(el.previousElementSibling){var prev=el.previousElementSibling;if(selector){if($(prev).is(selector)){prevEls.push(prev);}}else{prevEls.push(prev);}
el=prev;}
return new Dom7(prevEls);}
function parent(selector){var parents=[];for(var i=0;i<this.length;i+=1){if(this[i].parentNode!==null){if(selector){if($(this[i].parentNode).is(selector)){parents.push(this[i].parentNode);}}else{parents.push(this[i].parentNode);}}}
return $(unique(parents));}
function parents(selector){var parents=[];for(var i=0;i<this.length;i+=1){var parent=this[i].parentNode;while(parent){if(selector){if($(parent).is(selector)){parents.push(parent);}}else{parents.push(parent);}
parent=parent.parentNode;}}
return $(unique(parents));}
function closest(selector){var closest=this;if(typeof selector==='undefined'){return new Dom7([]);}
if(!closest.is(selector)){closest=closest.parents(selector).eq(0);}
return closest;}
function find(selector){var foundElements=[];for(var i=0;i<this.length;i+=1){var found=this[i].querySelectorAll(selector);for(var j=0;j<found.length;j+=1){foundElements.push(found[j]);}}
return new Dom7(foundElements);}
function children(selector){var children=[];for(var i=0;i<this.length;i+=1){var childNodes=this[i].childNodes;for(var j=0;j<childNodes.length;j+=1){if(!selector){if(childNodes[j].nodeType===1){children.push(childNodes[j]);}}else if(childNodes[j].nodeType===1&&$(childNodes[j]).is(selector)){children.push(childNodes[j]);}}}
return new Dom7(unique(children));}
function remove(){for(var i=0;i<this.length;i+=1){if(this[i].parentNode){this[i].parentNode.removeChild(this[i]);}}
return this;}
function add(){var args=[],len=arguments.length;while(len--)args[len]=arguments[len];var dom=this;var i;var j;for(i=0;i<args.length;i+=1){var toAdd=$(args[i]);for(j=0;j<toAdd.length;j+=1){dom[dom.length]=toAdd[j];dom.length+=1;}}
return dom;}
var Methods={addClass:addClass,removeClass:removeClass,hasClass:hasClass,toggleClass:toggleClass,attr:attr,removeAttr:removeAttr,data:data,transform:transform,transition:transition,on:on,off:off,trigger:trigger,transitionEnd:transitionEnd,outerWidth:outerWidth,outerHeight:outerHeight,offset:offset,css:css,each:each,html:html,text:text,is:is,index:index,eq:eq,append:append,prepend:prepend,next:next,nextAll:nextAll,prev:prev,prevAll:prevAll,parent:parent,parents:parents,closest:closest,find:find,children:children,remove:remove,add:add,styles:styles,};Object.keys(Methods).forEach(function(methodName){$.fn[methodName]=Methods[methodName];});var Utils={deleteProps:function deleteProps(obj){var object=obj;Object.keys(object).forEach(function(key){try{object[key]=null;}catch(e){}
try{delete object[key];}catch(e){}});},nextTick:function nextTick(callback,delay){if(delay===void 0)delay=0;return setTimeout(callback,delay);},now:function now(){return Date.now();},getTranslate:function getTranslate(el,axis){if(axis===void 0)axis='x';var matrix;var curTransform;var transformMatrix;var curStyle=win.getComputedStyle(el,null);if(win.WebKitCSSMatrix){curTransform=curStyle.transform||curStyle.webkitTransform;if(curTransform.split(',').length>6){curTransform=curTransform.split(', ').map(function(a){return a.replace(',','.');}).join(', ');}
transformMatrix=new win.WebKitCSSMatrix(curTransform==='none'?'':curTransform);}else{transformMatrix=curStyle.MozTransform||curStyle.OTransform||curStyle.MsTransform||curStyle.msTransform||curStyle.transform||curStyle.getPropertyValue('transform').replace('translate(','matrix(1, 0, 0, 1,');matrix=transformMatrix.toString().split(',');}
if(axis==='x'){if(win.WebKitCSSMatrix){curTransform=transformMatrix.m41;}
else if(matrix.length===16){curTransform=parseFloat(matrix[12]);}
else{curTransform=parseFloat(matrix[4]);}}
if(axis==='y'){if(win.WebKitCSSMatrix){curTransform=transformMatrix.m42;}
else if(matrix.length===16){curTransform=parseFloat(matrix[13]);}
else{curTransform=parseFloat(matrix[5]);}}
return curTransform||0;},parseUrlQuery:function parseUrlQuery(url){var query={};var urlToParse=url||win.location.href;var i;var params;var param;var length;if(typeof urlToParse==='string'&&urlToParse.length){urlToParse=urlToParse.indexOf('?')>-1?urlToParse.replace(/\S*\?/,''):'';params=urlToParse.split('&').filter(function(paramsPart){return paramsPart!=='';});length=params.length;for(i=0;i<length;i+=1){param=params[i].replace(/#\S+/g,'').split('=');query[decodeURIComponent(param[0])]=typeof param[1]==='undefined'?undefined:decodeURIComponent(param[1])||'';}}
return query;},isObject:function isObject(o){return typeof o==='object'&&o!==null&&o.constructor&&o.constructor===Object;},extend:function extend(){var args=[],len$1=arguments.length;while(len$1--)args[len$1]=arguments[len$1];var to=Object(args[0]);for(var i=1;i<args.length;i+=1){var nextSource=args[i];if(nextSource!==undefined&&nextSource!==null){var keysArray=Object.keys(Object(nextSource));for(var nextIndex=0,len=keysArray.length;nextIndex<len;nextIndex+=1){var nextKey=keysArray[nextIndex];var desc=Object.getOwnPropertyDescriptor(nextSource,nextKey);if(desc!==undefined&&desc.enumerable){if(Utils.isObject(to[nextKey])&&Utils.isObject(nextSource[nextKey])){Utils.extend(to[nextKey],nextSource[nextKey]);}else if(!Utils.isObject(to[nextKey])&&Utils.isObject(nextSource[nextKey])){to[nextKey]={};Utils.extend(to[nextKey],nextSource[nextKey]);}else{to[nextKey]=nextSource[nextKey];}}}}}
return to;},};var Support=(function Support(){var testDiv=doc.createElement('div');return{touch:(win.Modernizr&&win.Modernizr.touch===true)||(function checkTouch(){return!!((win.navigator.maxTouchPoints>0)||('ontouchstart'in win)||(win.DocumentTouch&&doc instanceof win.DocumentTouch));}()),pointerEvents:!!(win.navigator.pointerEnabled||win.PointerEvent||('maxTouchPoints'in win.navigator&&win.navigator.maxTouchPoints>0)),prefixedPointerEvents:!!win.navigator.msPointerEnabled,transition:(function checkTransition(){var style=testDiv.style;return('transition'in style||'webkitTransition'in style||'MozTransition'in style);}()),transforms3d:(win.Modernizr&&win.Modernizr.csstransforms3d===true)||(function checkTransforms3d(){var style=testDiv.style;return('webkitPerspective'in style||'MozPerspective'in style||'OPerspective'in style||'MsPerspective'in style||'perspective'in style);}()),flexbox:(function checkFlexbox(){var style=testDiv.style;var styles=('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');for(var i=0;i<styles.length;i+=1){if(styles[i]in style){return true;}}
return false;}()),observer:(function checkObserver(){return('MutationObserver'in win||'WebkitMutationObserver'in win);}()),passiveListener:(function checkPassiveListener(){var supportsPassive=false;try{var opts=Object.defineProperty({},'passive',{get:function get(){supportsPassive=true;},});win.addEventListener('testPassiveListener',null,opts);}catch(e){}
return supportsPassive;}()),gestures:(function checkGestures(){return 'ongesturestart'in win;}()),};}());var Browser=(function Browser(){function isSafari(){var ua=win.navigator.userAgent.toLowerCase();return(ua.indexOf('safari')>=0&&ua.indexOf('chrome')<0&&ua.indexOf('android')<0);}
return{isIE:!!win.navigator.userAgent.match(/Trident/g)||!!win.navigator.userAgent.match(/MSIE/g),isEdge:!!win.navigator.userAgent.match(/Edge/g),isSafari:isSafari(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),};}());var SwiperClass=function SwiperClass(params){if(params===void 0)params={};var self=this;self.params=params;self.eventsListeners={};if(self.params&&self.params.on){Object.keys(self.params.on).forEach(function(eventName){self.on(eventName,self.params.on[eventName]);});}};var staticAccessors={components:{configurable:true}};SwiperClass.prototype.on=function on(events,handler,priority){var self=this;if(typeof handler!=='function'){return self;}
var method=priority?'unshift':'push';events.split(' ').forEach(function(event){if(!self.eventsListeners[event]){self.eventsListeners[event]=[];}
self.eventsListeners[event][method](handler);});return self;};SwiperClass.prototype.once=function once(events,handler,priority){var self=this;if(typeof handler!=='function'){return self;}
function onceHandler(){var args=[],len=arguments.length;while(len--)args[len]=arguments[len];handler.apply(self,args);self.off(events,onceHandler);if(onceHandler.f7proxy){delete onceHandler.f7proxy;}}
onceHandler.f7proxy=handler;return self.on(events,onceHandler,priority);};SwiperClass.prototype.off=function off(events,handler){var self=this;if(!self.eventsListeners){return self;}
events.split(' ').forEach(function(event){if(typeof handler==='undefined'){self.eventsListeners[event]=[];}else if(self.eventsListeners[event]&&self.eventsListeners[event].length){self.eventsListeners[event].forEach(function(eventHandler,index){if(eventHandler===handler||(eventHandler.f7proxy&&eventHandler.f7proxy===handler)){self.eventsListeners[event].splice(index,1);}});}});return self;};SwiperClass.prototype.emit=function emit(){var args=[],len=arguments.length;while(len--)args[len]=arguments[len];var self=this;if(!self.eventsListeners){return self;}
var events;var data;var context;if(typeof args[0]==='string'||Array.isArray(args[0])){events=args[0];data=args.slice(1,args.length);context=self;}else{events=args[0].events;data=args[0].data;context=args[0].context||self;}
var eventsArray=Array.isArray(events)?events:events.split(' ');eventsArray.forEach(function(event){if(self.eventsListeners&&self.eventsListeners[event]){var handlers=[];self.eventsListeners[event].forEach(function(eventHandler){handlers.push(eventHandler);});handlers.forEach(function(eventHandler){eventHandler.apply(context,data);});}});return self;};SwiperClass.prototype.useModulesParams=function useModulesParams(instanceParams){var instance=this;if(!instance.modules){return;}
Object.keys(instance.modules).forEach(function(moduleName){var module=instance.modules[moduleName];if(module.params){Utils.extend(instanceParams,module.params);}});};SwiperClass.prototype.useModules=function useModules(modulesParams){if(modulesParams===void 0)modulesParams={};var instance=this;if(!instance.modules){return;}
Object.keys(instance.modules).forEach(function(moduleName){var module=instance.modules[moduleName];var moduleParams=modulesParams[moduleName]||{};if(module.instance){Object.keys(module.instance).forEach(function(modulePropName){var moduleProp=module.instance[modulePropName];if(typeof moduleProp==='function'){instance[modulePropName]=moduleProp.bind(instance);}else{instance[modulePropName]=moduleProp;}});}
if(module.on&&instance.on){Object.keys(module.on).forEach(function(moduleEventName){instance.on(moduleEventName,module.on[moduleEventName]);});}
if(module.create){module.create.bind(instance)(moduleParams);}});};staticAccessors.components.set=function(components){var Class=this;if(!Class.use){return;}
Class.use(components);};SwiperClass.installModule=function installModule(module){var params=[],len=arguments.length-1;while(len-->0)params[len]=arguments[len+1];var Class=this;if(!Class.prototype.modules){Class.prototype.modules={};}
var name=module.name||(((Object.keys(Class.prototype.modules).length)+"_"+(Utils.now())));Class.prototype.modules[name]=module;if(module.proto){Object.keys(module.proto).forEach(function(key){Class.prototype[key]=module.proto[key];});}
if(module.static){Object.keys(module.static).forEach(function(key){Class[key]=module.static[key];});}
if(module.install){module.install.apply(Class,params);}
return Class;};SwiperClass.use=function use(module){var params=[],len=arguments.length-1;while(len-->0)params[len]=arguments[len+1];var Class=this;if(Array.isArray(module)){module.forEach(function(m){return Class.installModule(m);});return Class;}
return Class.installModule.apply(Class,[module].concat(params));};Object.defineProperties(SwiperClass,staticAccessors);function updateSize(){var swiper=this;var width;var height;var $el=swiper.$el;if(typeof swiper.params.width!=='undefined'){width=swiper.params.width;}else{width=$el[0].clientWidth;}
if(typeof swiper.params.height!=='undefined'){height=swiper.params.height;}else{height=$el[0].clientHeight;}
if((width===0&&swiper.isHorizontal())||(height===0&&swiper.isVertical())){return;}
width=width-parseInt($el.css('padding-left'),10)-parseInt($el.css('padding-right'),10);height=height-parseInt($el.css('padding-top'),10)-parseInt($el.css('padding-bottom'),10);Utils.extend(swiper,{width:width,height:height,size:swiper.isHorizontal()?width:height,});}
function updateSlides(){var swiper=this;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var swiperSize=swiper.size;var rtl=swiper.rtlTranslate;var wrongRTL=swiper.wrongRTL;var isVirtual=swiper.virtual&&params.virtual.enabled;var previousSlidesLength=isVirtual?swiper.virtual.slides.length:swiper.slides.length;var slides=$wrapperEl.children(("."+(swiper.params.slideClass)));var slidesLength=isVirtual?swiper.virtual.slides.length:slides.length;var snapGrid=[];var slidesGrid=[];var slidesSizesGrid=[];var offsetBefore=params.slidesOffsetBefore;if(typeof offsetBefore==='function'){offsetBefore=params.slidesOffsetBefore.call(swiper);}
var offsetAfter=params.slidesOffsetAfter;if(typeof offsetAfter==='function'){offsetAfter=params.slidesOffsetAfter.call(swiper);}
var previousSnapGridLength=swiper.snapGrid.length;var previousSlidesGridLength=swiper.snapGrid.length;var spaceBetween=params.spaceBetween;var slidePosition=-offsetBefore;var prevSlideSize=0;var index=0;if(typeof swiperSize==='undefined'){return;}
if(typeof spaceBetween==='string'&&spaceBetween.indexOf('%')>=0){spaceBetween=(parseFloat(spaceBetween.replace('%',''))/100)*swiperSize;}
swiper.virtualSize=-spaceBetween;if(rtl){slides.css({marginLeft:'',marginTop:''});}
else{slides.css({marginRight:'',marginBottom:''});}
var slidesNumberEvenToRows;if(params.slidesPerColumn>1){if(Math.floor(slidesLength/params.slidesPerColumn)===slidesLength/swiper.params.slidesPerColumn){slidesNumberEvenToRows=slidesLength;}else{slidesNumberEvenToRows=Math.ceil(slidesLength/params.slidesPerColumn)*params.slidesPerColumn;}
if(params.slidesPerView!=='auto'&&params.slidesPerColumnFill==='row'){slidesNumberEvenToRows=Math.max(slidesNumberEvenToRows,params.slidesPerView*params.slidesPerColumn);}}
var slideSize;var slidesPerColumn=params.slidesPerColumn;var slidesPerRow=slidesNumberEvenToRows/slidesPerColumn;var numFullColumns=Math.floor(slidesLength/params.slidesPerColumn);for(var i=0;i<slidesLength;i+=1){slideSize=0;var slide=slides.eq(i);if(params.slidesPerColumn>1){var newSlideOrderIndex=(void 0);var column=(void 0);var row=(void 0);if(params.slidesPerColumnFill==='column'){column=Math.floor(i/slidesPerColumn);row=i-(column*slidesPerColumn);if(column>numFullColumns||(column===numFullColumns&&row===slidesPerColumn-1)){row+=1;if(row>=slidesPerColumn){row=0;column+=1;}}
newSlideOrderIndex=column+((row*slidesNumberEvenToRows)/slidesPerColumn);slide.css({'-webkit-box-ordinal-group':newSlideOrderIndex,'-moz-box-ordinal-group':newSlideOrderIndex,'-ms-flex-order':newSlideOrderIndex,'-webkit-order':newSlideOrderIndex,order:newSlideOrderIndex,});}else{row=Math.floor(i/slidesPerRow);column=i-(row*slidesPerRow);}
slide.css(("margin-"+(swiper.isHorizontal()?'top':'left')),(row!==0&&params.spaceBetween)&&(((params.spaceBetween)+"px"))).attr('data-swiper-column',column).attr('data-swiper-row',row);}
if(slide.css('display')==='none'){continue;}
if(params.slidesPerView==='auto'){var slideStyles=win.getComputedStyle(slide[0],null);var currentTransform=slide[0].style.transform;var currentWebKitTransform=slide[0].style.webkitTransform;if(currentTransform){slide[0].style.transform='none';}
if(currentWebKitTransform){slide[0].style.webkitTransform='none';}
if(params.roundLengths){slideSize=swiper.isHorizontal()?slide.outerWidth(true):slide.outerHeight(true);}else{if(swiper.isHorizontal()){var width=parseFloat(slideStyles.getPropertyValue('width'));var paddingLeft=parseFloat(slideStyles.getPropertyValue('padding-left'));var paddingRight=parseFloat(slideStyles.getPropertyValue('padding-right'));var marginLeft=parseFloat(slideStyles.getPropertyValue('margin-left'));var marginRight=parseFloat(slideStyles.getPropertyValue('margin-right'));var boxSizing=slideStyles.getPropertyValue('box-sizing');if(boxSizing&&boxSizing==='border-box'){slideSize=width+marginLeft+marginRight;}else{slideSize=width+paddingLeft+paddingRight+marginLeft+marginRight;}}else{var height=parseFloat(slideStyles.getPropertyValue('height'));var paddingTop=parseFloat(slideStyles.getPropertyValue('padding-top'));var paddingBottom=parseFloat(slideStyles.getPropertyValue('padding-bottom'));var marginTop=parseFloat(slideStyles.getPropertyValue('margin-top'));var marginBottom=parseFloat(slideStyles.getPropertyValue('margin-bottom'));var boxSizing$1=slideStyles.getPropertyValue('box-sizing');if(boxSizing$1&&boxSizing$1==='border-box'){slideSize=height+marginTop+marginBottom;}else{slideSize=height+paddingTop+paddingBottom+marginTop+marginBottom;}}}
if(currentTransform){slide[0].style.transform=currentTransform;}
if(currentWebKitTransform){slide[0].style.webkitTransform=currentWebKitTransform;}
if(params.roundLengths){slideSize=Math.floor(slideSize);}}else{slideSize=(swiperSize-((params.slidesPerView-1)*spaceBetween))/params.slidesPerView;if(params.roundLengths){slideSize=Math.floor(slideSize);}
if(slides[i]){if(swiper.isHorizontal()){slides[i].style.width=slideSize+"px";}else{slides[i].style.height=slideSize+"px";}}}
if(slides[i]){slides[i].swiperSlideSize=slideSize;}
slidesSizesGrid.push(slideSize);if(params.centeredSlides){slidePosition=slidePosition+(slideSize/2)+(prevSlideSize/2)+spaceBetween;if(prevSlideSize===0&&i!==0){slidePosition=slidePosition-(swiperSize/2)-spaceBetween;}
if(i===0){slidePosition=slidePosition-(swiperSize/2)-spaceBetween;}
if(Math.abs(slidePosition)<1/1000){slidePosition=0;}
if(params.roundLengths){slidePosition=Math.floor(slidePosition);}
if((index)%params.slidesPerGroup===0){snapGrid.push(slidePosition);}
slidesGrid.push(slidePosition);}else{if(params.roundLengths){slidePosition=Math.floor(slidePosition);}
if((index)%params.slidesPerGroup===0){snapGrid.push(slidePosition);}
slidesGrid.push(slidePosition);slidePosition=slidePosition+slideSize+spaceBetween;}
swiper.virtualSize+=slideSize+spaceBetween;prevSlideSize=slideSize;index+=1;}
swiper.virtualSize=Math.max(swiper.virtualSize,swiperSize)+offsetAfter;var newSlidesGrid;if(rtl&&wrongRTL&&(params.effect==='slide'||params.effect==='coverflow')){$wrapperEl.css({width:((swiper.virtualSize+params.spaceBetween)+"px")});}
if(!Support.flexbox||params.setWrapperSize){if(swiper.isHorizontal()){$wrapperEl.css({width:((swiper.virtualSize+params.spaceBetween)+"px")});}
else{$wrapperEl.css({height:((swiper.virtualSize+params.spaceBetween)+"px")});}}
if(params.slidesPerColumn>1){swiper.virtualSize=(slideSize+params.spaceBetween)*slidesNumberEvenToRows;swiper.virtualSize=Math.ceil(swiper.virtualSize/params.slidesPerColumn)-params.spaceBetween;if(swiper.isHorizontal()){$wrapperEl.css({width:((swiper.virtualSize+params.spaceBetween)+"px")});}
else{$wrapperEl.css({height:((swiper.virtualSize+params.spaceBetween)+"px")});}
if(params.centeredSlides){newSlidesGrid=[];for(var i$1=0;i$1<snapGrid.length;i$1+=1){var slidesGridItem=snapGrid[i$1];if(params.roundLengths){slidesGridItem=Math.floor(slidesGridItem);}
if(snapGrid[i$1]<swiper.virtualSize+snapGrid[0]){newSlidesGrid.push(slidesGridItem);}}
snapGrid=newSlidesGrid;}}
if(!params.centeredSlides){newSlidesGrid=[];for(var i$2=0;i$2<snapGrid.length;i$2+=1){var slidesGridItem$1=snapGrid[i$2];if(params.roundLengths){slidesGridItem$1=Math.floor(slidesGridItem$1);}
if(snapGrid[i$2]<=swiper.virtualSize-swiperSize){newSlidesGrid.push(slidesGridItem$1);}}
snapGrid=newSlidesGrid;if(Math.floor(swiper.virtualSize-swiperSize)-Math.floor(snapGrid[snapGrid.length-1])>1){snapGrid.push(swiper.virtualSize-swiperSize);}}
if(snapGrid.length===0){snapGrid=[0];}
if(params.spaceBetween!==0){if(swiper.isHorizontal()){if(rtl){slides.css({marginLeft:(spaceBetween+"px")});}
else{slides.css({marginRight:(spaceBetween+"px")});}}else{slides.css({marginBottom:(spaceBetween+"px")});}}
if(params.centerInsufficientSlides){var allSlidesSize=0;slidesSizesGrid.forEach(function(slideSizeValue){allSlidesSize+=slideSizeValue+(params.spaceBetween?params.spaceBetween:0);});allSlidesSize-=params.spaceBetween;if(allSlidesSize<swiperSize){var allSlidesOffset=(swiperSize-allSlidesSize)/2;snapGrid.forEach(function(snap,snapIndex){snapGrid[snapIndex]=snap-allSlidesOffset;});slidesGrid.forEach(function(snap,snapIndex){slidesGrid[snapIndex]=snap+allSlidesOffset;});}}
Utils.extend(swiper,{slides:slides,snapGrid:snapGrid,slidesGrid:slidesGrid,slidesSizesGrid:slidesSizesGrid,});if(slidesLength!==previousSlidesLength){swiper.emit('slidesLengthChange');}
if(snapGrid.length!==previousSnapGridLength){if(swiper.params.watchOverflow){swiper.checkOverflow();}
swiper.emit('snapGridLengthChange');}
if(slidesGrid.length!==previousSlidesGridLength){swiper.emit('slidesGridLengthChange');}
if(params.watchSlidesProgress||params.watchSlidesVisibility){swiper.updateSlidesOffset();}}
function updateAutoHeight(speed){var swiper=this;var activeSlides=[];var newHeight=0;var i;if(typeof speed==='number'){swiper.setTransition(speed);}else if(speed===true){swiper.setTransition(swiper.params.speed);}
if(swiper.params.slidesPerView!=='auto'&&swiper.params.slidesPerView>1){for(i=0;i<Math.ceil(swiper.params.slidesPerView);i+=1){var index=swiper.activeIndex+i;if(index>swiper.slides.length){break;}
activeSlides.push(swiper.slides.eq(index)[0]);}}else{activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);}
for(i=0;i<activeSlides.length;i+=1){if(typeof activeSlides[i]!=='undefined'){var height=activeSlides[i].offsetHeight;newHeight=height>newHeight?height:newHeight;}}
if(newHeight){swiper.$wrapperEl.css('height',(newHeight+"px"));}}
function updateSlidesOffset(){var swiper=this;var slides=swiper.slides;for(var i=0;i<slides.length;i+=1){slides[i].swiperSlideOffset=swiper.isHorizontal()?slides[i].offsetLeft:slides[i].offsetTop;}}
function updateSlidesProgress(translate){if(translate===void 0)translate=(this&&this.translate)||0;var swiper=this;var params=swiper.params;var slides=swiper.slides;var rtl=swiper.rtlTranslate;if(slides.length===0){return;}
if(typeof slides[0].swiperSlideOffset==='undefined'){swiper.updateSlidesOffset();}
var offsetCenter=-translate;if(rtl){offsetCenter=translate;}
slides.removeClass(params.slideVisibleClass);swiper.visibleSlidesIndexes=[];swiper.visibleSlides=[];for(var i=0;i<slides.length;i+=1){var slide=slides[i];var slideProgress=((offsetCenter+(params.centeredSlides?swiper.minTranslate():0))-slide.swiperSlideOffset)/(slide.swiperSlideSize+params.spaceBetween);if(params.watchSlidesVisibility){var slideBefore=-(offsetCenter-slide.swiperSlideOffset);var slideAfter=slideBefore+swiper.slidesSizesGrid[i];var isVisible=(slideBefore>=0&&slideBefore<swiper.size)||(slideAfter>0&&slideAfter<=swiper.size)||(slideBefore<=0&&slideAfter>=swiper.size);if(isVisible){swiper.visibleSlides.push(slide);swiper.visibleSlidesIndexes.push(i);slides.eq(i).addClass(params.slideVisibleClass);}}
slide.progress=rtl?-slideProgress:slideProgress;}
swiper.visibleSlides=$(swiper.visibleSlides);}
function updateProgress(translate){if(translate===void 0)translate=(this&&this.translate)||0;var swiper=this;var params=swiper.params;var translatesDiff=swiper.maxTranslate()-swiper.minTranslate();var progress=swiper.progress;var isBeginning=swiper.isBeginning;var isEnd=swiper.isEnd;var wasBeginning=isBeginning;var wasEnd=isEnd;if(translatesDiff===0){progress=0;isBeginning=true;isEnd=true;}else{progress=(translate-swiper.minTranslate())/(translatesDiff);isBeginning=progress<=0;isEnd=progress>=1;}
Utils.extend(swiper,{progress:progress,isBeginning:isBeginning,isEnd:isEnd,});if(params.watchSlidesProgress||params.watchSlidesVisibility){swiper.updateSlidesProgress(translate);}
if(isBeginning&&!wasBeginning){swiper.emit('reachBeginning toEdge');}
if(isEnd&&!wasEnd){swiper.emit('reachEnd toEdge');}
if((wasBeginning&&!isBeginning)||(wasEnd&&!isEnd)){swiper.emit('fromEdge');}
swiper.emit('progress',progress);}
function updateSlidesClasses(){var swiper=this;var slides=swiper.slides;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var activeIndex=swiper.activeIndex;var realIndex=swiper.realIndex;var isVirtual=swiper.virtual&&params.virtual.enabled;slides.removeClass(((params.slideActiveClass)+" "+(params.slideNextClass)+" "+(params.slidePrevClass)+" "+(params.slideDuplicateActiveClass)+" "+(params.slideDuplicateNextClass)+" "+(params.slideDuplicatePrevClass)));var activeSlide;if(isVirtual){activeSlide=swiper.$wrapperEl.find(("."+(params.slideClass)+"[data-swiper-slide-index=\""+activeIndex+"\"]"));}else{activeSlide=slides.eq(activeIndex);}
activeSlide.addClass(params.slideActiveClass);if(params.loop){if(activeSlide.hasClass(params.slideDuplicateClass)){$wrapperEl.children(("."+(params.slideClass)+":not(."+(params.slideDuplicateClass)+")[data-swiper-slide-index=\""+realIndex+"\"]")).addClass(params.slideDuplicateActiveClass);}else{$wrapperEl.children(("."+(params.slideClass)+"."+(params.slideDuplicateClass)+"[data-swiper-slide-index=\""+realIndex+"\"]")).addClass(params.slideDuplicateActiveClass);}}
var nextSlide=activeSlide.nextAll(("."+(params.slideClass))).eq(0).addClass(params.slideNextClass);if(params.loop&&nextSlide.length===0){nextSlide=slides.eq(0);nextSlide.addClass(params.slideNextClass);}
var prevSlide=activeSlide.prevAll(("."+(params.slideClass))).eq(0).addClass(params.slidePrevClass);if(params.loop&&prevSlide.length===0){prevSlide=slides.eq(-1);prevSlide.addClass(params.slidePrevClass);}
if(params.loop){if(nextSlide.hasClass(params.slideDuplicateClass)){$wrapperEl.children(("."+(params.slideClass)+":not(."+(params.slideDuplicateClass)+")[data-swiper-slide-index=\""+(nextSlide.attr('data-swiper-slide-index'))+"\"]")).addClass(params.slideDuplicateNextClass);}else{$wrapperEl.children(("."+(params.slideClass)+"."+(params.slideDuplicateClass)+"[data-swiper-slide-index=\""+(nextSlide.attr('data-swiper-slide-index'))+"\"]")).addClass(params.slideDuplicateNextClass);}
if(prevSlide.hasClass(params.slideDuplicateClass)){$wrapperEl.children(("."+(params.slideClass)+":not(."+(params.slideDuplicateClass)+")[data-swiper-slide-index=\""+(prevSlide.attr('data-swiper-slide-index'))+"\"]")).addClass(params.slideDuplicatePrevClass);}else{$wrapperEl.children(("."+(params.slideClass)+"."+(params.slideDuplicateClass)+"[data-swiper-slide-index=\""+(prevSlide.attr('data-swiper-slide-index'))+"\"]")).addClass(params.slideDuplicatePrevClass);}}}
function updateActiveIndex(newActiveIndex){var swiper=this;var translate=swiper.rtlTranslate?swiper.translate:-swiper.translate;var slidesGrid=swiper.slidesGrid;var snapGrid=swiper.snapGrid;var params=swiper.params;var previousIndex=swiper.activeIndex;var previousRealIndex=swiper.realIndex;var previousSnapIndex=swiper.snapIndex;var activeIndex=newActiveIndex;var snapIndex;if(typeof activeIndex==='undefined'){for(var i=0;i<slidesGrid.length;i+=1){if(typeof slidesGrid[i+1]!=='undefined'){if(translate>=slidesGrid[i]&&translate<slidesGrid[i+1]-((slidesGrid[i+1]-slidesGrid[i])/2)){activeIndex=i;}else if(translate>=slidesGrid[i]&&translate<slidesGrid[i+1]){activeIndex=i+1;}}else if(translate>=slidesGrid[i]){activeIndex=i;}}
if(params.normalizeSlideIndex){if(activeIndex<0||typeof activeIndex==='undefined'){activeIndex=0;}}}
if(snapGrid.indexOf(translate)>=0){snapIndex=snapGrid.indexOf(translate);}else{snapIndex=Math.floor(activeIndex/params.slidesPerGroup);}
if(snapIndex>=snapGrid.length){snapIndex=snapGrid.length-1;}
if(activeIndex===previousIndex){if(snapIndex!==previousSnapIndex){swiper.snapIndex=snapIndex;swiper.emit('snapIndexChange');}
return;}
var realIndex=parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index')||activeIndex,10);Utils.extend(swiper,{snapIndex:snapIndex,realIndex:realIndex,previousIndex:previousIndex,activeIndex:activeIndex,});swiper.emit('activeIndexChange');swiper.emit('snapIndexChange');if(previousRealIndex!==realIndex){swiper.emit('realIndexChange');}
swiper.emit('slideChange');}
function updateClickedSlide(e){var swiper=this;var params=swiper.params;var slide=$(e.target).closest(("."+(params.slideClass)))[0];var slideFound=false;if(slide){for(var i=0;i<swiper.slides.length;i+=1){if(swiper.slides[i]===slide){slideFound=true;}}}
if(slide&&slideFound){swiper.clickedSlide=slide;if(swiper.virtual&&swiper.params.virtual.enabled){swiper.clickedIndex=parseInt($(slide).attr('data-swiper-slide-index'),10);}else{swiper.clickedIndex=$(slide).index();}}else{swiper.clickedSlide=undefined;swiper.clickedIndex=undefined;return;}
if(params.slideToClickedSlide&&swiper.clickedIndex!==undefined&&swiper.clickedIndex!==swiper.activeIndex){swiper.slideToClickedSlide();}}
var update={updateSize:updateSize,updateSlides:updateSlides,updateAutoHeight:updateAutoHeight,updateSlidesOffset:updateSlidesOffset,updateSlidesProgress:updateSlidesProgress,updateProgress:updateProgress,updateSlidesClasses:updateSlidesClasses,updateActiveIndex:updateActiveIndex,updateClickedSlide:updateClickedSlide,};function getTranslate(axis){if(axis===void 0)axis=this.isHorizontal()?'x':'y';var swiper=this;var params=swiper.params;var rtl=swiper.rtlTranslate;var translate=swiper.translate;var $wrapperEl=swiper.$wrapperEl;if(params.virtualTranslate){return rtl?-translate:translate;}
var currentTranslate=Utils.getTranslate($wrapperEl[0],axis);if(rtl){currentTranslate=-currentTranslate;}
return currentTranslate||0;}
function setTranslate(translate,byController){var swiper=this;var rtl=swiper.rtlTranslate;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var progress=swiper.progress;var x=0;var y=0;var z=0;if(swiper.isHorizontal()){x=rtl?-translate:translate;}else{y=translate;}
if(params.roundLengths){x=Math.floor(x);y=Math.floor(y);}
if(!params.virtualTranslate){if(Support.transforms3d){$wrapperEl.transform(("translate3d("+x+"px, "+y+"px, "+z+"px)"));}
else{$wrapperEl.transform(("translate("+x+"px, "+y+"px)"));}}
swiper.previousTranslate=swiper.translate;swiper.translate=swiper.isHorizontal()?x:y;var newProgress;var translatesDiff=swiper.maxTranslate()-swiper.minTranslate();if(translatesDiff===0){newProgress=0;}else{newProgress=(translate-swiper.minTranslate())/(translatesDiff);}
if(newProgress!==progress){swiper.updateProgress(translate);}
swiper.emit('setTranslate',swiper.translate,byController);}
function minTranslate(){return(-this.snapGrid[0]);}
function maxTranslate(){return(-this.snapGrid[this.snapGrid.length-1]);}
var translate={getTranslate:getTranslate,setTranslate:setTranslate,minTranslate:minTranslate,maxTranslate:maxTranslate,};function setTransition(duration,byController){var swiper=this;swiper.$wrapperEl.transition(duration);swiper.emit('setTransition',duration,byController);}
function transitionStart(runCallbacks,direction){if(runCallbacks===void 0)runCallbacks=true;var swiper=this;var activeIndex=swiper.activeIndex;var params=swiper.params;var previousIndex=swiper.previousIndex;if(params.autoHeight){swiper.updateAutoHeight();}
var dir=direction;if(!dir){if(activeIndex>previousIndex){dir='next';}
else if(activeIndex<previousIndex){dir='prev';}
else{dir='reset';}}
swiper.emit('transitionStart');if(runCallbacks&&activeIndex!==previousIndex){if(dir==='reset'){swiper.emit('slideResetTransitionStart');return;}
swiper.emit('slideChangeTransitionStart');if(dir==='next'){swiper.emit('slideNextTransitionStart');}else{swiper.emit('slidePrevTransitionStart');}}}
function transitionEnd$1(runCallbacks,direction){if(runCallbacks===void 0)runCallbacks=true;var swiper=this;var activeIndex=swiper.activeIndex;var previousIndex=swiper.previousIndex;swiper.animating=false;swiper.setTransition(0);var dir=direction;if(!dir){if(activeIndex>previousIndex){dir='next';}
else if(activeIndex<previousIndex){dir='prev';}
else{dir='reset';}}
swiper.emit('transitionEnd');if(runCallbacks&&activeIndex!==previousIndex){if(dir==='reset'){swiper.emit('slideResetTransitionEnd');return;}
swiper.emit('slideChangeTransitionEnd');if(dir==='next'){swiper.emit('slideNextTransitionEnd');}else{swiper.emit('slidePrevTransitionEnd');}}}
var transition$1={setTransition:setTransition,transitionStart:transitionStart,transitionEnd:transitionEnd$1,};function slideTo(index,speed,runCallbacks,internal){if(index===void 0)index=0;if(speed===void 0)speed=this.params.speed;if(runCallbacks===void 0)runCallbacks=true;var swiper=this;var slideIndex=index;if(slideIndex<0){slideIndex=0;}
var params=swiper.params;var snapGrid=swiper.snapGrid;var slidesGrid=swiper.slidesGrid;var previousIndex=swiper.previousIndex;var activeIndex=swiper.activeIndex;var rtl=swiper.rtlTranslate;if(swiper.animating&&params.preventInteractionOnTransition){return false;}
var snapIndex=Math.floor(slideIndex/params.slidesPerGroup);if(snapIndex>=snapGrid.length){snapIndex=snapGrid.length-1;}
if((activeIndex||params.initialSlide||0)===(previousIndex||0)&&runCallbacks){swiper.emit('beforeSlideChangeStart');}
var translate=-snapGrid[snapIndex];swiper.updateProgress(translate);if(params.normalizeSlideIndex){for(var i=0;i<slidesGrid.length;i+=1){if(-Math.floor(translate*100)>=Math.floor(slidesGrid[i]*100)){slideIndex=i;}}}
if(swiper.initialized&&slideIndex!==activeIndex){if(!swiper.allowSlideNext&&translate<swiper.translate&&translate<swiper.minTranslate()){return false;}
if(!swiper.allowSlidePrev&&translate>swiper.translate&&translate>swiper.maxTranslate()){if((activeIndex||0)!==slideIndex){return false;}}}
var direction;if(slideIndex>activeIndex){direction='next';}
else if(slideIndex<activeIndex){direction='prev';}
else{direction='reset';}
if((rtl&&-translate===swiper.translate)||(!rtl&&translate===swiper.translate)){swiper.updateActiveIndex(slideIndex);if(params.autoHeight){swiper.updateAutoHeight();}
swiper.updateSlidesClasses();if(params.effect!=='slide'){swiper.setTranslate(translate);}
if(direction!=='reset'){swiper.transitionStart(runCallbacks,direction);swiper.transitionEnd(runCallbacks,direction);}
return false;}
if(speed===0||!Support.transition){swiper.setTransition(0);swiper.setTranslate(translate);swiper.updateActiveIndex(slideIndex);swiper.updateSlidesClasses();swiper.emit('beforeTransitionStart',speed,internal);swiper.transitionStart(runCallbacks,direction);swiper.transitionEnd(runCallbacks,direction);}else{swiper.setTransition(speed);swiper.setTranslate(translate);swiper.updateActiveIndex(slideIndex);swiper.updateSlidesClasses();swiper.emit('beforeTransitionStart',speed,internal);swiper.transitionStart(runCallbacks,direction);if(!swiper.animating){swiper.animating=true;if(!swiper.onSlideToWrapperTransitionEnd){swiper.onSlideToWrapperTransitionEnd=function transitionEnd(e){if(!swiper||swiper.destroyed){return;}
if(e.target!==this){return;}
swiper.$wrapperEl[0].removeEventListener('transitionend',swiper.onSlideToWrapperTransitionEnd);swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd',swiper.onSlideToWrapperTransitionEnd);swiper.onSlideToWrapperTransitionEnd=null;delete swiper.onSlideToWrapperTransitionEnd;swiper.transitionEnd(runCallbacks,direction);};}
swiper.$wrapperEl[0].addEventListener('transitionend',swiper.onSlideToWrapperTransitionEnd);swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd',swiper.onSlideToWrapperTransitionEnd);}}
return true;}
function slideToLoop(index,speed,runCallbacks,internal){if(index===void 0)index=0;if(speed===void 0)speed=this.params.speed;if(runCallbacks===void 0)runCallbacks=true;var swiper=this;var newIndex=index;if(swiper.params.loop){newIndex+=swiper.loopedSlides;}
return swiper.slideTo(newIndex,speed,runCallbacks,internal);}
function slideNext(speed,runCallbacks,internal){if(speed===void 0)speed=this.params.speed;if(runCallbacks===void 0)runCallbacks=true;var swiper=this;var params=swiper.params;var animating=swiper.animating;if(params.loop){if(animating){return false;}
swiper.loopFix();swiper._clientLeft=swiper.$wrapperEl[0].clientLeft;return swiper.slideTo(swiper.activeIndex+params.slidesPerGroup,speed,runCallbacks,internal);}
return swiper.slideTo(swiper.activeIndex+params.slidesPerGroup,speed,runCallbacks,internal);}
function slidePrev(speed,runCallbacks,internal){if(speed===void 0)speed=this.params.speed;if(runCallbacks===void 0)runCallbacks=true;var swiper=this;var params=swiper.params;var animating=swiper.animating;var snapGrid=swiper.snapGrid;var slidesGrid=swiper.slidesGrid;var rtlTranslate=swiper.rtlTranslate;if(params.loop){if(animating){return false;}
swiper.loopFix();swiper._clientLeft=swiper.$wrapperEl[0].clientLeft;}
var translate=rtlTranslate?swiper.translate:-swiper.translate;function normalize(val){if(val<0){return-Math.floor(Math.abs(val));}
return Math.floor(val);}
var normalizedTranslate=normalize(translate);var normalizedSnapGrid=snapGrid.map(function(val){return normalize(val);});var normalizedSlidesGrid=slidesGrid.map(function(val){return normalize(val);});var currentSnap=snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];var prevSnap=snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)-1];var prevIndex;if(typeof prevSnap!=='undefined'){prevIndex=slidesGrid.indexOf(prevSnap);if(prevIndex<0){prevIndex=swiper.activeIndex-1;}}
return swiper.slideTo(prevIndex,speed,runCallbacks,internal);}
function slideReset(speed,runCallbacks,internal){if(speed===void 0)speed=this.params.speed;if(runCallbacks===void 0)runCallbacks=true;var swiper=this;return swiper.slideTo(swiper.activeIndex,speed,runCallbacks,internal);}
function slideToClosest(speed,runCallbacks,internal){if(speed===void 0)speed=this.params.speed;if(runCallbacks===void 0)runCallbacks=true;var swiper=this;var index=swiper.activeIndex;var snapIndex=Math.floor(index/swiper.params.slidesPerGroup);if(snapIndex<swiper.snapGrid.length-1){var translate=swiper.rtlTranslate?swiper.translate:-swiper.translate;var currentSnap=swiper.snapGrid[snapIndex];var nextSnap=swiper.snapGrid[snapIndex+1];if((translate-currentSnap)>(nextSnap-currentSnap)/2){index=swiper.params.slidesPerGroup;}}
return swiper.slideTo(index,speed,runCallbacks,internal);}
function slideToClickedSlide(){var swiper=this;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var slidesPerView=params.slidesPerView==='auto'?swiper.slidesPerViewDynamic():params.slidesPerView;var slideToIndex=swiper.clickedIndex;var realIndex;if(params.loop){if(swiper.animating){return;}
realIndex=parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'),10);if(params.centeredSlides){if((slideToIndex<swiper.loopedSlides-(slidesPerView/2))||(slideToIndex>(swiper.slides.length-swiper.loopedSlides)+(slidesPerView/2))){swiper.loopFix();slideToIndex=$wrapperEl.children(("."+(params.slideClass)+"[data-swiper-slide-index=\""+realIndex+"\"]:not(."+(params.slideDuplicateClass)+")")).eq(0).index();Utils.nextTick(function(){swiper.slideTo(slideToIndex);});}else{swiper.slideTo(slideToIndex);}}else if(slideToIndex>swiper.slides.length-slidesPerView){swiper.loopFix();slideToIndex=$wrapperEl.children(("."+(params.slideClass)+"[data-swiper-slide-index=\""+realIndex+"\"]:not(."+(params.slideDuplicateClass)+")")).eq(0).index();Utils.nextTick(function(){swiper.slideTo(slideToIndex);});}else{swiper.slideTo(slideToIndex);}}else{swiper.slideTo(slideToIndex);}}
var slide={slideTo:slideTo,slideToLoop:slideToLoop,slideNext:slideNext,slidePrev:slidePrev,slideReset:slideReset,slideToClosest:slideToClosest,slideToClickedSlide:slideToClickedSlide,};function loopCreate(){var swiper=this;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;$wrapperEl.children(("."+(params.slideClass)+"."+(params.slideDuplicateClass))).remove();var slides=$wrapperEl.children(("."+(params.slideClass)));if(params.loopFillGroupWithBlank){var blankSlidesNum=params.slidesPerGroup-(slides.length%params.slidesPerGroup);if(blankSlidesNum!==params.slidesPerGroup){for(var i=0;i<blankSlidesNum;i+=1){var blankNode=$(doc.createElement('div')).addClass(((params.slideClass)+" "+(params.slideBlankClass)));$wrapperEl.append(blankNode);}
slides=$wrapperEl.children(("."+(params.slideClass)));}}
if(params.slidesPerView==='auto'&&!params.loopedSlides){params.loopedSlides=slides.length;}
swiper.loopedSlides=parseInt(params.loopedSlides||params.slidesPerView,10);swiper.loopedSlides+=params.loopAdditionalSlides;if(swiper.loopedSlides>slides.length){swiper.loopedSlides=slides.length;}
var prependSlides=[];var appendSlides=[];slides.each(function(index,el){var slide=$(el);if(index<swiper.loopedSlides){appendSlides.push(el);}
if(index<slides.length&&index>=slides.length-swiper.loopedSlides){prependSlides.push(el);}
slide.attr('data-swiper-slide-index',index);});for(var i$1=0;i$1<appendSlides.length;i$1+=1){$wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));}
for(var i$2=prependSlides.length-1;i$2>=0;i$2-=1){$wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));}}
function loopFix(){var swiper=this;var params=swiper.params;var activeIndex=swiper.activeIndex;var slides=swiper.slides;var loopedSlides=swiper.loopedSlides;var allowSlidePrev=swiper.allowSlidePrev;var allowSlideNext=swiper.allowSlideNext;var snapGrid=swiper.snapGrid;var rtl=swiper.rtlTranslate;var newIndex;swiper.allowSlidePrev=true;swiper.allowSlideNext=true;var snapTranslate=-snapGrid[activeIndex];var diff=snapTranslate-swiper.getTranslate();if(activeIndex<loopedSlides){newIndex=(slides.length-(loopedSlides*3))+activeIndex;newIndex+=loopedSlides;var slideChanged=swiper.slideTo(newIndex,0,false,true);if(slideChanged&&diff!==0){swiper.setTranslate((rtl?-swiper.translate:swiper.translate)-diff);}}else if((params.slidesPerView==='auto'&&activeIndex>=loopedSlides*2)||(activeIndex>=slides.length-loopedSlides)){newIndex=-slides.length+activeIndex+loopedSlides;newIndex+=loopedSlides;var slideChanged$1=swiper.slideTo(newIndex,0,false,true);if(slideChanged$1&&diff!==0){swiper.setTranslate((rtl?-swiper.translate:swiper.translate)-diff);}}
swiper.allowSlidePrev=allowSlidePrev;swiper.allowSlideNext=allowSlideNext;}
function loopDestroy(){var swiper=this;var $wrapperEl=swiper.$wrapperEl;var params=swiper.params;var slides=swiper.slides;$wrapperEl.children(("."+(params.slideClass)+"."+(params.slideDuplicateClass)+",."+(params.slideClass)+"."+(params.slideBlankClass))).remove();slides.removeAttr('data-swiper-slide-index');}
var loop={loopCreate:loopCreate,loopFix:loopFix,loopDestroy:loopDestroy,};function setGrabCursor(moving){var swiper=this;if(Support.touch||!swiper.params.simulateTouch||(swiper.params.watchOverflow&&swiper.isLocked)){return;}
var el=swiper.el;el.style.cursor='move';el.style.cursor=moving?'-webkit-grabbing':'-webkit-grab';el.style.cursor=moving?'-moz-grabbin':'-moz-grab';el.style.cursor=moving?'grabbing':'grab';}
function unsetGrabCursor(){var swiper=this;if(Support.touch||(swiper.params.watchOverflow&&swiper.isLocked)){return;}
swiper.el.style.cursor='';}
var grabCursor={setGrabCursor:setGrabCursor,unsetGrabCursor:unsetGrabCursor,};function appendSlide(slides){var swiper=this;var $wrapperEl=swiper.$wrapperEl;var params=swiper.params;if(params.loop){swiper.loopDestroy();}
if(typeof slides==='object'&&'length'in slides){for(var i=0;i<slides.length;i+=1){if(slides[i]){$wrapperEl.append(slides[i]);}}}else{$wrapperEl.append(slides);}
if(params.loop){swiper.loopCreate();}
if(!(params.observer&&Support.observer)){swiper.update();}}
function prependSlide(slides){var swiper=this;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var activeIndex=swiper.activeIndex;if(params.loop){swiper.loopDestroy();}
var newActiveIndex=activeIndex+1;if(typeof slides==='object'&&'length'in slides){for(var i=0;i<slides.length;i+=1){if(slides[i]){$wrapperEl.prepend(slides[i]);}}
newActiveIndex=activeIndex+slides.length;}else{$wrapperEl.prepend(slides);}
if(params.loop){swiper.loopCreate();}
if(!(params.observer&&Support.observer)){swiper.update();}
swiper.slideTo(newActiveIndex,0,false);}
function addSlide(index,slides){var swiper=this;var $wrapperEl=swiper.$wrapperEl;var params=swiper.params;var activeIndex=swiper.activeIndex;var activeIndexBuffer=activeIndex;if(params.loop){activeIndexBuffer-=swiper.loopedSlides;swiper.loopDestroy();swiper.slides=$wrapperEl.children(("."+(params.slideClass)));}
var baseLength=swiper.slides.length;if(index<=0){swiper.prependSlide(slides);return;}
if(index>=baseLength){swiper.appendSlide(slides);return;}
var newActiveIndex=activeIndexBuffer>index?activeIndexBuffer+1:activeIndexBuffer;var slidesBuffer=[];for(var i=baseLength-1;i>=index;i-=1){var currentSlide=swiper.slides.eq(i);currentSlide.remove();slidesBuffer.unshift(currentSlide);}
if(typeof slides==='object'&&'length'in slides){for(var i$1=0;i$1<slides.length;i$1+=1){if(slides[i$1]){$wrapperEl.append(slides[i$1]);}}
newActiveIndex=activeIndexBuffer>index?activeIndexBuffer+slides.length:activeIndexBuffer;}else{$wrapperEl.append(slides);}
for(var i$2=0;i$2<slidesBuffer.length;i$2+=1){$wrapperEl.append(slidesBuffer[i$2]);}
if(params.loop){swiper.loopCreate();}
if(!(params.observer&&Support.observer)){swiper.update();}
if(params.loop){swiper.slideTo(newActiveIndex+swiper.loopedSlides,0,false);}else{swiper.slideTo(newActiveIndex,0,false);}}
function removeSlide(slidesIndexes){var swiper=this;var params=swiper.params;var $wrapperEl=swiper.$wrapperEl;var activeIndex=swiper.activeIndex;var activeIndexBuffer=activeIndex;if(params.loop){activeIndexBuffer-=swiper.loopedSlides;swiper.loopDestroy();swiper.slides=$wrapperEl.children(("."+(params.slideClass)));}
var newActiveIndex=activeIndexBuffer;var indexToRemove;if(typeof slidesIndexes==='object'&&'length'in slidesIndexes){for(var i=0;i<slidesIndexes.length;i+=1){indexToRemove=slidesIndexes[i];if(swiper.slides[indexToRemove]){swiper.slides.eq(indexToRemove).remove();}
if(indexToRemove<newActiveIndex){newActiveIndex-=1;}}
newActiveIndex=Math.max(newActiveIndex,0);}else{indexToRemove=slidesIndexes;if(swiper.slides[indexToRemove]){swiper.slides.eq(indexToRemove).remove();}
if(indexToRemove<newActiveIndex){newActiveIndex-=1;}
newActiveIndex=Math.max(newActiveIndex,0);}
if(params.loop){swiper.loopCreate();}
if(!(params.observer&&Support.observer)){swiper.update();}
if(params.loop){swiper.slideTo(newActiveIndex+swiper.loopedSlides,0,false);}else{swiper.slideTo(newActiveIndex,0,false);}}
function removeAllSlides(){var swiper=this;var slidesIndexes=[];for(var i=0;i<swiper.slides.length;i+=1){slidesIndexes.push(i);}
swiper.removeSlide(slidesIndexes);}
var manipulation={appendSlide:appendSlide,prependSlide:prependSlide,addSlide:addSlide,removeSlide:removeSlide,removeAllSlides:removeAllSlides,};var Device=(function Device(){var ua=win.navigator.userAgent;var device={ios:false,android:false,androidChrome:false,desktop:false,windows:false,iphone:false,ipod:false,ipad:false,cordova:win.cordova||win.phonegap,phonegap:win.cordova||win.phonegap,};var windows=ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/);var android=ua.match(/(Android);?[\s\/]+([\d.]+)?/);var ipad=ua.match(/(iPad).*OS\s([\d_]+)/);var ipod=ua.match(/(iPod)(.*OS\s([\d_]+))?/);var iphone=!ipad&&ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(windows){device.os='windows';device.osVersion=windows[2];device.windows=true;}
if(android&&!windows){device.os='android';device.osVersion=android[2];device.android=true;device.androidChrome=ua.toLowerCase().indexOf('chrome')>=0;}
if(ipad||iphone||ipod){device.os='ios';device.ios=true;}
if(iphone&&!ipod){device.osVersion=iphone[2].replace(/_/g,'.');device.iphone=true;}
if(ipad){device.osVersion=ipad[2].replace(/_/g,'.');device.ipad=true;}
if(ipod){device.osVersion=ipod[3]?ipod[3].replace(/_/g,'.'):null;device.iphone=true;}
if(device.ios&&device.osVersion&&ua.indexOf('Version/')>=0){if(device.osVersion.split('.')[0]==='10'){device.osVersion=ua.toLowerCase().split('version/')[1].split(' ')[0];}}
device.desktop=!(device.os||device.android||device.webView);device.webView=(iphone||ipad||ipod)&&ua.match(/.*AppleWebKit(?!.*Safari)/i);if(device.os&&device.os==='ios'){var osVersionArr=device.osVersion.split('.');var metaViewport=doc.querySelector('meta[name="viewport"]');device.minimalUi=!device.webView&&(ipod||iphone)&&(osVersionArr[0]*1===7?osVersionArr[1]*1>=1:osVersionArr[0]*1>7)&&metaViewport&&metaViewport.getAttribute('content').indexOf('minimal-ui')>=0;}
device.pixelRatio=win.devicePixelRatio||1;return device;}());function onTouchStart(event){var swiper=this;var data=swiper.touchEventsData;var params=swiper.params;var touches=swiper.touches;if(swiper.animating&&params.preventInteractionOnTransition){return;}
var e=event;if(e.originalEvent){e=e.originalEvent;}
data.isTouchEvent=e.type==='touchstart';if(!data.isTouchEvent&&'which'in e&&e.which===3){return;}
if(!data.isTouchEvent&&'button'in e&&e.button>0){return;}
if(data.isTouched&&data.isMoved){return;}
if(params.noSwiping&&$(e.target).closest(params.noSwipingSelector?params.noSwipingSelector:("."+(params.noSwipingClass)))[0]){swiper.allowClick=true;return;}
if(params.swipeHandler){if(!$(e).closest(params.swipeHandler)[0]){return;}}
touches.currentX=e.type==='touchstart'?e.targetTouches[0].pageX:e.pageX;touches.currentY=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;var startX=touches.currentX;var startY=touches.currentY;var edgeSwipeDetection=params.edgeSwipeDetection||params.iOSEdgeSwipeDetection;var edgeSwipeThreshold=params.edgeSwipeThreshold||params.iOSEdgeSwipeThreshold;if(edgeSwipeDetection&&((startX<=edgeSwipeThreshold)||(startX>=win.screen.width-edgeSwipeThreshold))){return;}
Utils.extend(data,{isTouched:true,isMoved:false,allowTouchCallbacks:true,isScrolling:undefined,startMoving:undefined,});touches.startX=startX;touches.startY=startY;data.touchStartTime=Utils.now();swiper.allowClick=true;swiper.updateSize();swiper.swipeDirection=undefined;if(params.threshold>0){data.allowThresholdMove=false;}
if(e.type!=='touchstart'){var preventDefault=true;if($(e.target).is(data.formElements)){preventDefault=false;}
if(doc.activeElement&&$(doc.activeElement).is(data.formElements)&&doc.activeElement!==e.target){doc.activeElement.blur();}
var shouldPreventDefault=preventDefault&&swiper.allowTouchMove&&params.touchStartPreventDefault;if(params.touchStartForcePreventDefault||shouldPreventDefault){e.preventDefault();}}
swiper.emit('touchStart',e);}
function onTouchMove(event){var swiper=this;var data=swiper.touchEventsData;var params=swiper.params;var touches=swiper.touches;var rtl=swiper.rtlTranslate;var e=event;if(e.originalEvent){e=e.originalEvent;}
if(!data.isTouched){if(data.startMoving&&data.isScrolling){swiper.emit('touchMoveOpposite',e);}
return;}
if(data.isTouchEvent&&e.type==='mousemove'){return;}
var pageX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;var pageY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(e.preventedByNestedSwiper){touches.startX=pageX;touches.startY=pageY;return;}
if(!swiper.allowTouchMove){swiper.allowClick=false;if(data.isTouched){Utils.extend(touches,{startX:pageX,startY:pageY,currentX:pageX,currentY:pageY,});data.touchStartTime=Utils.now();}
return;}
if(data.isTouchEvent&&params.touchReleaseOnEdges&&!params.loop){if(swiper.isVertical()){if((pageY<touches.startY&&swiper.translate<=swiper.maxTranslate())||(pageY>touches.startY&&swiper.translate>=swiper.minTranslate())){data.isTouched=false;data.isMoved=false;return;}}else if((pageX<touches.startX&&swiper.translate<=swiper.maxTranslate())||(pageX>touches.startX&&swiper.translate>=swiper.minTranslate())){return;}}
if(data.isTouchEvent&&doc.activeElement){if(e.target===doc.activeElement&&$(e.target).is(data.formElements)){data.isMoved=true;swiper.allowClick=false;return;}}
if(data.allowTouchCallbacks){swiper.emit('touchMove',e);}
if(e.targetTouches&&e.targetTouches.length>1){return;}
touches.currentX=pageX;touches.currentY=pageY;var diffX=touches.currentX-touches.startX;var diffY=touches.currentY-touches.startY;if(swiper.params.threshold&&Math.sqrt((Math.pow(diffX,2))+(Math.pow(diffY,2)))<swiper.params.threshold){return;}
if(typeof data.isScrolling==='undefined'){var touchAngle;if((swiper.isHorizontal()&&touches.currentY===touches.startY)||(swiper.isVertical()&&touches.currentX===touches.startX)){data.isScrolling=false;}else{if((diffX*diffX)+(diffY*diffY)>=25){touchAngle=(Math.atan2(Math.abs(diffY),Math.abs(diffX))*180)/Math.PI;data.isScrolling=swiper.isHorizontal()?touchAngle>params.touchAngle:(90-touchAngle>params.touchAngle);}}}
if(data.isScrolling){swiper.emit('touchMoveOpposite',e);}
if(typeof data.startMoving==='undefined'){if(touches.currentX!==touches.startX||touches.currentY!==touches.startY){data.startMoving=true;}}
if(data.isScrolling){data.isTouched=false;return;}
if(!data.startMoving){return;}
swiper.allowClick=false;e.preventDefault();if(params.touchMoveStopPropagation&&!params.nested){e.stopPropagation();}
if(!data.isMoved){if(params.loop){swiper.loopFix();}
data.startTranslate=swiper.getTranslate();swiper.setTransition(0);if(swiper.animating){swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');}
data.allowMomentumBounce=false;if(params.grabCursor&&(swiper.allowSlideNext===true||swiper.allowSlidePrev===true)){swiper.setGrabCursor(true);}
swiper.emit('sliderFirstMove',e);}
swiper.emit('sliderMove',e);data.isMoved=true;var diff=swiper.isHorizontal()?diffX:diffY;touches.diff=diff;diff*=params.touchRatio;if(rtl){diff=-diff;}
swiper.swipeDirection=diff>0?'prev':'next';data.currentTranslate=diff+data.startTranslate;var disableParentSwiper=true;var resistanceRatio=params.resistanceRatio;if(params.touchReleaseOnEdges){resistanceRatio=0;}
if((diff>0&&data.currentTranslate>swiper.minTranslate())){disableParentSwiper=false;if(params.resistance){data.currentTranslate=(swiper.minTranslate()-1)+(Math.pow((-swiper.minTranslate()+data.startTranslate+diff),resistanceRatio));}}else if(diff<0&&data.currentTranslate<swiper.maxTranslate()){disableParentSwiper=false;if(params.resistance){data.currentTranslate=(swiper.maxTranslate()+1)-(Math.pow((swiper.maxTranslate()-data.startTranslate-diff),resistanceRatio));}}
if(disableParentSwiper){e.preventedByNestedSwiper=true;}
if(!swiper.allowSlideNext&&swiper.swipeDirection==='next'&&data.currentTranslate<data.startTranslate){data.currentTranslate=data.startTranslate;}
if(!swiper.allowSlidePrev&&swiper.swipeDirection==='prev'&&data.currentTranslate>data.startTranslate){data.currentTranslate=data.startTranslate;}
if(params.threshold>0){if(Math.abs(diff)>params.threshold||data.allowThresholdMove){if(!data.allowThresholdMove){data.allowThresholdMove=true;touches.startX=touches.currentX;touches.startY=touches.currentY;data.currentTranslate=data.startTranslate;touches.diff=swiper.isHorizontal()?touches.currentX-touches.startX:touches.currentY-touches.startY;return;}}else{data.currentTranslate=data.startTranslate;return;}}
if(!params.followFinger){return;}
if(params.freeMode||params.watchSlidesProgress||params.watchSlidesVisibility){swiper.updateActiveIndex();swiper.updateSlidesClasses();}
if(params.freeMode){if(data.velocities.length===0){data.velocities.push({position:touches[swiper.isHorizontal()?'startX':'startY'],time:data.touchStartTime,});}
data.velocities.push({position:touches[swiper.isHorizontal()?'currentX':'currentY'],time:Utils.now(),});}
swiper.updateProgress(data.currentTranslate);swiper.setTranslate(data.currentTranslate);}
function onTouchEnd(event){var swiper=this;var data=swiper.touchEventsData;var params=swiper.params;var touches=swiper.touches;var rtl=swiper.rtlTranslate;var $wrapperEl=swiper.$wrapperEl;var slidesGrid=swiper.slidesGrid;var snapGrid=swiper.snapGrid;var e=event;if(e.originalEvent){e=e.originalEvent;}
if(data.allowTouchCallbacks){swiper.emit('touchEnd',e);}
data.allowTouchCallbacks=false;if(!data.isTouched){if(data.isMoved&&params.grabCursor){swiper.setGrabCursor(false);}
data.isMoved=false;data.startMoving=false;return;}
if(params.grabCursor&&data.isMoved&&data.isTouched&&(swiper.allowSlideNext===true||swiper.allowSlidePrev===true)){swiper.setGrabCursor(false);}
var touchEndTime=Utils.now();var timeDiff=touchEndTime-data.touchStartTime;if(swiper.allowClick){swiper.updateClickedSlide(e);swiper.emit('tap',e);if(timeDiff<300&&(touchEndTime-data.lastClickTime)>300){if(data.clickTimeout){clearTimeout(data.clickTimeout);}
data.clickTimeout=Utils.nextTick(function(){if(!swiper||swiper.destroyed){return;}
swiper.emit('click',e);},300);}
if(timeDiff<300&&(touchEndTime-data.lastClickTime)<300){if(data.clickTimeout){clearTimeout(data.clickTimeout);}
swiper.emit('doubleTap',e);}}
data.lastClickTime=Utils.now();Utils.nextTick(function(){if(!swiper.destroyed){swiper.allowClick=true;}});if(!data.isTouched||!data.isMoved||!swiper.swipeDirection||touches.diff===0||data.currentTranslate===data.startTranslate){data.isTouched=false;data.isMoved=false;data.startMoving=false;return;}
data.isTouched=false;data.isMoved=false;data.startMoving=false;var currentPos;if(params.followFinger){currentPos=rtl?swiper.translate:-swiper.translate;}else{currentPos=-data.currentTranslate;}
if(params.freeMode){if(currentPos<-swiper.minTranslate()){swiper.slideTo(swiper.activeIndex);return;}
if(currentPos>-swiper.maxTranslate()){if(swiper.slides.length<snapGrid.length){swiper.slideTo(snapGrid.length-1);}else{swiper.slideTo(swiper.slides.length-1);}
return;}
if(params.freeModeMomentum){if(data.velocities.length>1){var lastMoveEvent=data.velocities.pop();var velocityEvent=data.velocities.pop();var distance=lastMoveEvent.position-velocityEvent.position;var time=lastMoveEvent.time-velocityEvent.time;swiper.velocity=distance/time;swiper.velocity/=2;if(Math.abs(swiper.velocity)<params.freeModeMinimumVelocity){swiper.velocity=0;}
if(time>150||(Utils.now()-lastMoveEvent.time)>300){swiper.velocity=0;}}else{swiper.velocity=0;}
swiper.velocity*=params.freeModeMomentumVelocityRatio;data.velocities.length=0;var momentumDuration=1000*params.freeModeMomentumRatio;var momentumDistance=swiper.velocity*momentumDuration;var newPosition=swiper.translate+momentumDistance;if(rtl){newPosition=-newPosition;}
var doBounce=false;var afterBouncePosition;var bounceAmount=Math.abs(swiper.velocity)*20*params.freeModeMomentumBounceRatio;var needsLoopFix;if(newPosition<swiper.maxTranslate()){if(params.freeModeMomentumBounce){if(newPosition+swiper.maxTranslate()<-bounceAmount){newPosition=swiper.maxTranslate()-bounceAmount;}
afterBouncePosition=swiper.maxTranslate();doBounce=true;data.allowMomentumBounce=true;}else{newPosition=swiper.maxTranslate();}
if(params.loop&&params.centeredSlides){needsLoopFix=true;}}else if(newPosition>swiper.minTranslate()){if(params.freeModeMomentumBounce){if(newPosition-swiper.minTranslate()>bounceAmount){newPosition=swiper.minTranslate()+bounceAmount;}
afterBouncePosition=swiper.minTranslate();doBounce=true;data.allowMomentumBounce=true;}else{newPosition=swiper.minTranslate();}
if(params.loop&&params.centeredSlides){needsLoopFix=true;}}else if(params.freeModeSticky){var nextSlide;for(var j=0;j<snapGrid.length;j+=1){if(snapGrid[j]>-newPosition){nextSlide=j;break;}}
if(Math.abs(snapGrid[nextSlide]-newPosition)<Math.abs(snapGrid[nextSlide-1]-newPosition)||swiper.swipeDirection==='next'){newPosition=snapGrid[nextSlide];}else{newPosition=snapGrid[nextSlide-1];}
newPosition=-newPosition;}
if(needsLoopFix){swiper.once('transitionEnd',function(){swiper.loopFix();});}
if(swiper.velocity!==0){if(rtl){momentumDuration=Math.abs((-newPosition-swiper.translate)/swiper.velocity);}else{momentumDuration=Math.abs((newPosition-swiper.translate)/swiper.velocity);}}else if(params.freeModeSticky){swiper.slideToClosest();return;}
if(params.freeModeMomentumBounce&&doBounce){swiper.updateProgress(afterBouncePosition);swiper.setTransition(momentumDuration);swiper.setTranslate(newPosition);swiper.transitionStart(true,swiper.swipeDirection);swiper.animating=true;$wrapperEl.transitionEnd(function(){if(!swiper||swiper.destroyed||!data.allowMomentumBounce){return;}
swiper.emit('momentumBounce');swiper.setTransition(params.speed);swiper.setTranslate(afterBouncePosition);$wrapperEl.transitionEnd(function(){if(!swiper||swiper.destroyed){return;}
swiper.transitionEnd();});});}else if(swiper.velocity){swiper.updateProgress(newPosition);swiper.setTransition(momentumDuration);swiper.setTranslate(newPosition);swiper.transitionStart(true,swiper.swipeDirection);if(!swiper.animating){swiper.animating=true;$wrapperEl.transitionEnd(function(){if(!swiper||swiper.destroyed){return;}
swiper.transitionEnd();});}}else{swiper.updateProgress(newPosition);}
swiper.updateActiveIndex();swiper.updateSlidesClasses();}else if(params.freeModeSticky){swiper.slideToClosest();return;}
if(!params.freeModeMomentum||timeDiff>=params.longSwipesMs){swiper.updateProgress();swiper.updateActiveIndex();swiper.updateSlidesClasses();}
return;}
var stopIndex=0;var groupSize=swiper.slidesSizesGrid[0];for(var i=0;i<slidesGrid.length;i+=params.slidesPerGroup){if(typeof slidesGrid[i+params.slidesPerGroup]!=='undefined'){if(currentPos>=slidesGrid[i]&&currentPos<slidesGrid[i+params.slidesPerGroup]){stopIndex=i;groupSize=slidesGrid[i+params.slidesPerGroup]-slidesGrid[i];}}else if(currentPos>=slidesGrid[i]){stopIndex=i;groupSize=slidesGrid[slidesGrid.length-1]-slidesGrid[slidesGrid.length-2];}}
var ratio=(currentPos-slidesGrid[stopIndex])/groupSize;if(timeDiff>params.longSwipesMs){if(!params.longSwipes){swiper.slideTo(swiper.activeIndex);return;}
if(swiper.swipeDirection==='next'){if(ratio>=params.longSwipesRatio){swiper.slideTo(stopIndex+params.slidesPerGroup);}
else{swiper.slideTo(stopIndex);}}
if(swiper.swipeDirection==='prev'){if(ratio>(1-params.longSwipesRatio)){swiper.slideTo(stopIndex+params.slidesPerGroup);}
else{swiper.slideTo(stopIndex);}}}else{if(!params.shortSwipes){swiper.slideTo(swiper.activeIndex);return;}
if(swiper.swipeDirection==='next'){swiper.slideTo(stopIndex+params.slidesPerGroup);}
if(swiper.swipeDirection==='prev'){swiper.slideTo(stopIndex);}}}
function onResize(){var swiper=this;var params=swiper.params;var el=swiper.el;if(el&&el.offsetWidth===0){return;}
if(params.breakpoints){swiper.setBreakpoint();}
var allowSlideNext=swiper.allowSlideNext;var allowSlidePrev=swiper.allowSlidePrev;var snapGrid=swiper.snapGrid;swiper.allowSlideNext=true;swiper.allowSlidePrev=true;swiper.updateSize();swiper.updateSlides();if(params.freeMode){var newTranslate=Math.min(Math.max(swiper.translate,swiper.maxTranslate()),swiper.minTranslate());swiper.setTranslate(newTranslate);swiper.updateActiveIndex();swiper.updateSlidesClasses();if(params.autoHeight){swiper.updateAutoHeight();}}else{swiper.updateSlidesClasses();if((params.slidesPerView==='auto'||params.slidesPerView>1)&&swiper.isEnd&&!swiper.params.centeredSlides){swiper.slideTo(swiper.slides.length-1,0,false,true);}else{swiper.slideTo(swiper.activeIndex,0,false,true);}}
swiper.allowSlidePrev=allowSlidePrev;swiper.allowSlideNext=allowSlideNext;if(swiper.params.watchOverflow&&snapGrid!==swiper.snapGrid){swiper.checkOverflow();}}
function onClick(e){var swiper=this;if(!swiper.allowClick){if(swiper.params.preventClicks){e.preventDefault();}
if(swiper.params.preventClicksPropagation&&swiper.animating){e.stopPropagation();e.stopImmediatePropagation();}}}
function attachEvents(){var swiper=this;var params=swiper.params;var touchEvents=swiper.touchEvents;var el=swiper.el;var wrapperEl=swiper.wrapperEl;{swiper.onTouchStart=onTouchStart.bind(swiper);swiper.onTouchMove=onTouchMove.bind(swiper);swiper.onTouchEnd=onTouchEnd.bind(swiper);}
swiper.onClick=onClick.bind(swiper);var target=params.touchEventsTarget==='container'?el:wrapperEl;var capture=!!params.nested;{if(!Support.touch&&(Support.pointerEvents||Support.prefixedPointerEvents)){target.addEventListener(touchEvents.start,swiper.onTouchStart,false);doc.addEventListener(touchEvents.move,swiper.onTouchMove,capture);doc.addEventListener(touchEvents.end,swiper.onTouchEnd,false);}else{if(Support.touch){var passiveListener=touchEvents.start==='touchstart'&&Support.passiveListener&&params.passiveListeners?{passive:true,capture:false}:false;target.addEventListener(touchEvents.start,swiper.onTouchStart,passiveListener);target.addEventListener(touchEvents.move,swiper.onTouchMove,Support.passiveListener?{passive:false,capture:capture}:capture);target.addEventListener(touchEvents.end,swiper.onTouchEnd,passiveListener);}
if((params.simulateTouch&&!Device.ios&&!Device.android)||(params.simulateTouch&&!Support.touch&&Device.ios)){target.addEventListener('mousedown',swiper.onTouchStart,false);doc.addEventListener('mousemove',swiper.onTouchMove,capture);doc.addEventListener('mouseup',swiper.onTouchEnd,false);}}
if(params.preventClicks||params.preventClicksPropagation){target.addEventListener('click',swiper.onClick,true);}}
swiper.on((Device.ios||Device.android?'resize orientationchange observerUpdate':'resize observerUpdate'),onResize,true);}
function detachEvents(){var swiper=this;var params=swiper.params;var touchEvents=swiper.touchEvents;var el=swiper.el;var wrapperEl=swiper.wrapperEl;var target=params.touchEventsTarget==='container'?el:wrapperEl;var capture=!!params.nested;{if(!Support.touch&&(Support.pointerEvents||Support.prefixedPointerEvents)){target.removeEventListener(touchEvents.start,swiper.onTouchStart,false);doc.removeEventListener(touchEvents.move,swiper.onTouchMove,capture);doc.removeEventListener(touchEvents.end,swiper.onTouchEnd,false);}else{if(Support.touch){var passiveListener=touchEvents.start==='onTouchStart'&&Support.passiveListener&&params.passiveListeners?{passive:true,capture:false}:false;target.removeEventListener(touchEvents.start,swiper.onTouchStart,passiveListener);target.removeEventListener(touchEvents.move,swiper.onTouchMove,capture);target.removeEventListener(touchEvents.end,swiper.onTouchEnd,passiveListener);}
if((params.simulateTouch&&!Device.ios&&!Device.android)||(params.simulateTouch&&!Support.touch&&Device.ios)){target.removeEventListener('mousedown',swiper.onTouchStart,false);doc.removeEventListener('mousemove',swiper.onTouchMove,capture);doc.removeEventListener('mouseup',swiper.onTouchEnd,false);}}
if(params.preventClicks||params.preventClicksPropagation){target.removeEventListener('click',swiper.onClick,true);}}
swiper.off((Device.ios||Device.android?'resize orientationchange observerUpdate':'resize observerUpdate'),onResize);}
var events={attachEvents:attachEvents,detachEvents:detachEvents,};function setBreakpoint(){var swiper=this;var activeIndex=swiper.activeIndex;var initialized=swiper.initialized;var loopedSlides=swiper.loopedSlides;if(loopedSlides===void 0)loopedSlides=0;var params=swiper.params;var breakpoints=params.breakpoints;if(!breakpoints||(breakpoints&&Object.keys(breakpoints).length===0)){return;}
var breakpoint=swiper.getBreakpoint(breakpoints);if(breakpoint&&swiper.currentBreakpoint!==breakpoint){var breakpointOnlyParams=breakpoint in breakpoints?breakpoints[breakpoint]:undefined;if(breakpointOnlyParams){['slidesPerView','spaceBetween','slidesPerGroup'].forEach(function(param){var paramValue=breakpointOnlyParams[param];if(typeof paramValue==='undefined'){return;}
if(param==='slidesPerView'&&(paramValue==='AUTO'||paramValue==='auto')){breakpointOnlyParams[param]='auto';}else if(param==='slidesPerView'){breakpointOnlyParams[param]=parseFloat(paramValue);}else{breakpointOnlyParams[param]=parseInt(paramValue,10);}});}
var breakpointParams=breakpointOnlyParams||swiper.originalParams;var directionChanged=breakpointParams.direction&&breakpointParams.direction!==params.direction;var needsReLoop=params.loop&&(breakpointParams.slidesPerView!==params.slidesPerView||directionChanged);if(directionChanged&&initialized){swiper.changeDirection();}
Utils.extend(swiper.params,breakpointParams);Utils.extend(swiper,{allowTouchMove:swiper.params.allowTouchMove,allowSlideNext:swiper.params.allowSlideNext,allowSlidePrev:swiper.params.allowSlidePrev,});swiper.currentBreakpoint=breakpoint;if(needsReLoop&&initialized){swiper.loopDestroy();swiper.loopCreate();swiper.updateSlides();swiper.slideTo((activeIndex-loopedSlides)+swiper.loopedSlides,0,false);}
swiper.emit('breakpoint',breakpointParams);}}
function getBreakpoint(breakpoints){var swiper=this;if(!breakpoints){return undefined;}
var breakpoint=false;var points=[];Object.keys(breakpoints).forEach(function(point){points.push(point);});points.sort(function(a,b){return parseInt(a,10)-parseInt(b,10);});for(var i=0;i<points.length;i+=1){var point=points[i];if(swiper.params.breakpointsInverse){if(point<=win.innerWidth){breakpoint=point;}}else if(point>=win.innerWidth&&!breakpoint){breakpoint=point;}}
return breakpoint||'max';}
var breakpoints={setBreakpoint:setBreakpoint,getBreakpoint:getBreakpoint};function addClasses(){var swiper=this;var classNames=swiper.classNames;var params=swiper.params;var rtl=swiper.rtl;var $el=swiper.$el;var suffixes=[];suffixes.push('initialized');suffixes.push(params.direction);if(params.freeMode){suffixes.push('free-mode');}
if(!Support.flexbox){suffixes.push('no-flexbox');}
if(params.autoHeight){suffixes.push('autoheight');}
if(rtl){suffixes.push('rtl');}
if(params.slidesPerColumn>1){suffixes.push('multirow');}
if(Device.android){suffixes.push('android');}
if(Device.ios){suffixes.push('ios');}
if((Browser.isIE||Browser.isEdge)&&(Support.pointerEvents||Support.prefixedPointerEvents)){suffixes.push(("wp8-"+(params.direction)));}
suffixes.forEach(function(suffix){classNames.push(params.containerModifierClass+suffix);});$el.addClass(classNames.join(' '));}
function removeClasses(){var swiper=this;var $el=swiper.$el;var classNames=swiper.classNames;$el.removeClass(classNames.join(' '));}
var classes={addClasses:addClasses,removeClasses:removeClasses};function loadImage(imageEl,src,srcset,sizes,checkForComplete,callback){var image;function onReady(){if(callback){callback();}}
if(!imageEl.complete||!checkForComplete){if(src){image=new win.Image();image.onload=onReady;image.onerror=onReady;if(sizes){image.sizes=sizes;}
if(srcset){image.srcset=srcset;}
if(src){image.src=src;}}else{onReady();}}else{onReady();}}
function preloadImages(){var swiper=this;swiper.imagesToLoad=swiper.$el.find('img');function onReady(){if(typeof swiper==='undefined'||swiper===null||!swiper||swiper.destroyed){return;}
if(swiper.imagesLoaded!==undefined){swiper.imagesLoaded+=1;}
if(swiper.imagesLoaded===swiper.imagesToLoad.length){if(swiper.params.updateOnImagesReady){swiper.update();}
swiper.emit('imagesReady');}}
for(var i=0;i<swiper.imagesToLoad.length;i+=1){var imageEl=swiper.imagesToLoad[i];swiper.loadImage(imageEl,imageEl.currentSrc||imageEl.getAttribute('src'),imageEl.srcset||imageEl.getAttribute('srcset'),imageEl.sizes||imageEl.getAttribute('sizes'),true,onReady);}}
var images={loadImage:loadImage,preloadImages:preloadImages,};function checkOverflow(){var swiper=this;var wasLocked=swiper.isLocked;swiper.isLocked=swiper.snapGrid.length===1;swiper.allowSlideNext=!swiper.isLocked;swiper.allowSlidePrev=!swiper.isLocked;if(wasLocked!==swiper.isLocked){swiper.emit(swiper.isLocked?'lock':'unlock');}
if(wasLocked&&wasLocked!==swiper.isLocked){swiper.isEnd=false;swiper.navigation.update();}}
var checkOverflow$1={checkOverflow:checkOverflow};var defaults={init:true,direction:'horizontal',touchEventsTarget:'container',initialSlide:0,speed:300,preventInteractionOnTransition:false,edgeSwipeDetection:false,edgeSwipeThreshold:20,freeMode:false,freeModeMomentum:true,freeModeMomentumRatio:1,freeModeMomentumBounce:true,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:false,freeModeMinimumVelocity:0.02,autoHeight:false,setWrapperSize:false,virtualTranslate:false,effect:'slide',breakpoints:undefined,breakpointsInverse:false,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:'column',slidesPerGroup:1,centeredSlides:false,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:true,centerInsufficientSlides:false,watchOverflow:false,roundLengths:false,touchRatio:1,touchAngle:45,simulateTouch:true,shortSwipes:true,longSwipes:true,longSwipesRatio:0.5,longSwipesMs:300,followFinger:true,allowTouchMove:true,threshold:0,touchMoveStopPropagation:true,touchStartPreventDefault:true,touchStartForcePreventDefault:false,touchReleaseOnEdges:false,uniqueNavElements:true,resistance:true,resistanceRatio:0.85,watchSlidesProgress:false,watchSlidesVisibility:false,grabCursor:false,preventClicks:true,preventClicksPropagation:true,slideToClickedSlide:false,preloadImages:true,updateOnImagesReady:true,loop:false,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:false,allowSlidePrev:true,allowSlideNext:true,swipeHandler:null,noSwiping:true,noSwipingClass:'swiper-no-swiping',noSwipingSelector:null,passiveListeners:true,containerModifierClass:'swiper-container-',slideClass:'swiper-slide',slideBlankClass:'swiper-slide-invisible-blank',slideActiveClass:'swiper-slide-active',slideDuplicateActiveClass:'swiper-slide-duplicate-active',slideVisibleClass:'swiper-slide-visible',slideDuplicateClass:'swiper-slide-duplicate',slideNextClass:'swiper-slide-next',slideDuplicateNextClass:'swiper-slide-duplicate-next',slidePrevClass:'swiper-slide-prev',slideDuplicatePrevClass:'swiper-slide-duplicate-prev',wrapperClass:'swiper-wrapper',runCallbacksOnInit:true,};var prototypes={update:update,translate:translate,transition:transition$1,slide:slide,loop:loop,grabCursor:grabCursor,manipulation:manipulation,events:events,breakpoints:breakpoints,checkOverflow:checkOverflow$1,classes:classes,images:images,};var extendedDefaults={};var Swiper=(function(SwiperClass){function Swiper(){var assign;var args=[],len=arguments.length;while(len--)args[len]=arguments[len];var el;var params;if(args.length===1&&args[0].constructor&&args[0].constructor===Object){params=args[0];}else{(assign=args,el=assign[0],params=assign[1]);}
if(!params){params={};}
params=Utils.extend({},params);if(el&&!params.el){params.el=el;}
SwiperClass.call(this,params);Object.keys(prototypes).forEach(function(prototypeGroup){Object.keys(prototypes[prototypeGroup]).forEach(function(protoMethod){if(!Swiper.prototype[protoMethod]){Swiper.prototype[protoMethod]=prototypes[prototypeGroup][protoMethod];}});});var swiper=this;if(typeof swiper.modules==='undefined'){swiper.modules={};}
Object.keys(swiper.modules).forEach(function(moduleName){var module=swiper.modules[moduleName];if(module.params){var moduleParamName=Object.keys(module.params)[0];var moduleParams=module.params[moduleParamName];if(typeof moduleParams!=='object'||moduleParams===null){return;}
if(!(moduleParamName in params&&'enabled'in moduleParams)){return;}
if(params[moduleParamName]===true){params[moduleParamName]={enabled:true};}
if(typeof params[moduleParamName]==='object'&&!('enabled'in params[moduleParamName])){params[moduleParamName].enabled=true;}
if(!params[moduleParamName]){params[moduleParamName]={enabled:false};}}});var swiperParams=Utils.extend({},defaults);swiper.useModulesParams(swiperParams);swiper.params=Utils.extend({},swiperParams,extendedDefaults,params);swiper.originalParams=Utils.extend({},swiper.params);swiper.passedParams=Utils.extend({},params);swiper.$=$;var $el=$(swiper.params.el);el=$el[0];if(!el){return undefined;}
if($el.length>1){var swipers=[];$el.each(function(index,containerEl){var newParams=Utils.extend({},params,{el:containerEl});swipers.push(new Swiper(newParams));});return swipers;}
el.swiper=swiper;$el.data('swiper',swiper);var $wrapperEl=$el.children(("."+(swiper.params.wrapperClass)));Utils.extend(swiper,{$el:$el,el:el,$wrapperEl:$wrapperEl,wrapperEl:$wrapperEl[0],classNames:[],slides:$(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function isHorizontal(){return swiper.params.direction==='horizontal';},isVertical:function isVertical(){return swiper.params.direction==='vertical';},rtl:(el.dir.toLowerCase()==='rtl'||$el.css('direction')==='rtl'),rtlTranslate:swiper.params.direction==='horizontal'&&(el.dir.toLowerCase()==='rtl'||$el.css('direction')==='rtl'),wrongRTL:$wrapperEl.css('display')==='-webkit-box',activeIndex:0,realIndex:0,isBeginning:true,isEnd:false,translate:0,previousTranslate:0,progress:0,velocity:0,animating:false,allowSlideNext:swiper.params.allowSlideNext,allowSlidePrev:swiper.params.allowSlidePrev,touchEvents:(function touchEvents(){var touch=['touchstart','touchmove','touchend'];var desktop=['mousedown','mousemove','mouseup'];if(Support.pointerEvents){desktop=['pointerdown','pointermove','pointerup'];}else if(Support.prefixedPointerEvents){desktop=['MSPointerDown','MSPointerMove','MSPointerUp'];}
swiper.touchEventsTouch={start:touch[0],move:touch[1],end:touch[2],};swiper.touchEventsDesktop={start:desktop[0],move:desktop[1],end:desktop[2],};return Support.touch||!swiper.params.simulateTouch?swiper.touchEventsTouch:swiper.touchEventsDesktop;}()),touchEventsData:{isTouched:undefined,isMoved:undefined,allowTouchCallbacks:undefined,touchStartTime:undefined,isScrolling:undefined,currentTranslate:undefined,startTranslate:undefined,allowThresholdMove:undefined,formElements:'input, select, option, textarea, button, video',lastClickTime:Utils.now(),clickTimeout:undefined,velocities:[],allowMomentumBounce:undefined,isTouchEvent:undefined,startMoving:undefined,},allowClick:true,allowTouchMove:swiper.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0,},imagesToLoad:[],imagesLoaded:0,});swiper.useModules();if(swiper.params.init){swiper.init();}
return swiper;}
if(SwiperClass)Swiper.__proto__=SwiperClass;Swiper.prototype=Object.create(SwiperClass&&SwiperClass.prototype);Swiper.prototype.constructor=Swiper;var staticAccessors={extendedDefaults:{configurable:true},defaults:{configurable:true},Class:{configurable:true},$:{configurable:true}};Swiper.prototype.slidesPerViewDynamic=function slidesPerViewDynamic(){var swiper=this;var params=swiper.params;var slides=swiper.slides;var slidesGrid=swiper.slidesGrid;var swiperSize=swiper.size;var activeIndex=swiper.activeIndex;var spv=1;if(params.centeredSlides){var slideSize=slides[activeIndex].swiperSlideSize;var breakLoop;for(var i=activeIndex+1;i<slides.length;i+=1){if(slides[i]&&!breakLoop){slideSize+=slides[i].swiperSlideSize;spv+=1;if(slideSize>swiperSize){breakLoop=true;}}}
for(var i$1=activeIndex-1;i$1>=0;i$1-=1){if(slides[i$1]&&!breakLoop){slideSize+=slides[i$1].swiperSlideSize;spv+=1;if(slideSize>swiperSize){breakLoop=true;}}}}else{for(var i$2=activeIndex+1;i$2<slides.length;i$2+=1){if(slidesGrid[i$2]-slidesGrid[activeIndex]<swiperSize){spv+=1;}}}
return spv;};Swiper.prototype.update=function update(){var swiper=this;if(!swiper||swiper.destroyed){return;}
var snapGrid=swiper.snapGrid;var params=swiper.params;if(params.breakpoints){swiper.setBreakpoint();}
swiper.updateSize();swiper.updateSlides();swiper.updateProgress();swiper.updateSlidesClasses();function setTranslate(){var translateValue=swiper.rtlTranslate?swiper.translate*-1:swiper.translate;var newTranslate=Math.min(Math.max(translateValue,swiper.maxTranslate()),swiper.minTranslate());swiper.setTranslate(newTranslate);swiper.updateActiveIndex();swiper.updateSlidesClasses();}
var translated;if(swiper.params.freeMode){setTranslate();if(swiper.params.autoHeight){swiper.updateAutoHeight();}}else{if((swiper.params.slidesPerView==='auto'||swiper.params.slidesPerView>1)&&swiper.isEnd&&!swiper.params.centeredSlides){translated=swiper.slideTo(swiper.slides.length-1,0,false,true);}else{translated=swiper.slideTo(swiper.activeIndex,0,false,true);}
if(!translated){setTranslate();}}
if(params.watchOverflow&&snapGrid!==swiper.snapGrid){swiper.checkOverflow();}
swiper.emit('update');};Swiper.prototype.changeDirection=function changeDirection(newDirection,needUpdate){if(needUpdate===void 0)needUpdate=true;var swiper=this;var currentDirection=swiper.params.direction;if(!newDirection){newDirection=currentDirection==='horizontal'?'vertical':'horizontal';}
if((newDirection===currentDirection)||(newDirection!=='horizontal'&&newDirection!=='vertical')){return swiper;}
if(currentDirection==='vertical'){swiper.$el.removeClass(((swiper.params.containerModifierClass)+"vertical wp8-vertical")).addClass((""+(swiper.params.containerModifierClass)+newDirection));if((Browser.isIE||Browser.isEdge)&&(Support.pointerEvents||Support.prefixedPointerEvents)){swiper.$el.addClass(((swiper.params.containerModifierClass)+"wp8-"+newDirection));}}
if(currentDirection==='horizontal'){swiper.$el.removeClass(((swiper.params.containerModifierClass)+"horizontal wp8-horizontal")).addClass((""+(swiper.params.containerModifierClass)+newDirection));if((Browser.isIE||Browser.isEdge)&&(Support.pointerEvents||Support.prefixedPointerEvents)){swiper.$el.addClass(((swiper.params.containerModifierClass)+"wp8-"+newDirection));}}
swiper.params.direction=newDirection;swiper.slides.each(function(slideIndex,slideEl){if(newDirection==='vertical'){slideEl.style.width='';}else{slideEl.style.height='';}});swiper.emit('changeDirection');if(needUpdate){swiper.update();}
return swiper;};Swiper.prototype.init=function init(){var swiper=this;if(swiper.initialized){return;}
swiper.emit('beforeInit');if(swiper.params.breakpoints){swiper.setBreakpoint();}
swiper.addClasses();if(swiper.params.loop){swiper.loopCreate();}
swiper.updateSize();swiper.updateSlides();if(swiper.params.watchOverflow){swiper.checkOverflow();}
if(swiper.params.grabCursor){swiper.setGrabCursor();}
if(swiper.params.preloadImages){swiper.preloadImages();}
if(swiper.params.loop){swiper.slideTo(swiper.params.initialSlide+swiper.loopedSlides,0,swiper.params.runCallbacksOnInit);}else{swiper.slideTo(swiper.params.initialSlide,0,swiper.params.runCallbacksOnInit);}
swiper.attachEvents();swiper.initialized=true;swiper.emit('init');};Swiper.prototype.destroy=function destroy(deleteInstance,cleanStyles){if(deleteInstance===void 0)deleteInstance=true;if(cleanStyles===void 0)cleanStyles=true;var swiper=this;var params=swiper.params;var $el=swiper.$el;var $wrapperEl=swiper.$wrapperEl;var slides=swiper.slides;if(typeof swiper.params==='undefined'||swiper.destroyed){return null;}
swiper.emit('beforeDestroy');swiper.initialized=false;swiper.detachEvents();if(params.loop){swiper.loopDestroy();}
if(cleanStyles){swiper.removeClasses();$el.removeAttr('style');$wrapperEl.removeAttr('style');if(slides&&slides.length){slides.removeClass([params.slideVisibleClass,params.slideActiveClass,params.slideNextClass,params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index').removeAttr('data-swiper-column').removeAttr('data-swiper-row');}}
swiper.emit('destroy');Object.keys(swiper.eventsListeners).forEach(function(eventName){swiper.off(eventName);});if(deleteInstance!==false){swiper.$el[0].swiper=null;swiper.$el.data('swiper',null);Utils.deleteProps(swiper);}
swiper.destroyed=true;return null;};Swiper.extendDefaults=function extendDefaults(newDefaults){Utils.extend(extendedDefaults,newDefaults);};staticAccessors.extendedDefaults.get=function(){return extendedDefaults;};staticAccessors.defaults.get=function(){return defaults;};staticAccessors.Class.get=function(){return SwiperClass;};staticAccessors.$.get=function(){return $;};Object.defineProperties(Swiper,staticAccessors);return Swiper;}(SwiperClass));var Device$1={name:'device',proto:{device:Device,},static:{device:Device,},};var Support$1={name:'support',proto:{support:Support,},static:{support:Support,},};var Browser$1={name:'browser',proto:{browser:Browser,},static:{browser:Browser,},};var Resize={name:'resize',create:function create(){var swiper=this;Utils.extend(swiper,{resize:{resizeHandler:function resizeHandler(){if(!swiper||swiper.destroyed||!swiper.initialized){return;}
swiper.emit('beforeResize');swiper.emit('resize');},orientationChangeHandler:function orientationChangeHandler(){if(!swiper||swiper.destroyed||!swiper.initialized){return;}
swiper.emit('orientationchange');},},});},on:{init:function init(){var swiper=this;win.addEventListener('resize',swiper.resize.resizeHandler);win.addEventListener('orientationchange',swiper.resize.orientationChangeHandler);},destroy:function destroy(){var swiper=this;win.removeEventListener('resize',swiper.resize.resizeHandler);win.removeEventListener('orientationchange',swiper.resize.orientationChangeHandler);},},};var Observer={func:win.MutationObserver||win.WebkitMutationObserver,attach:function attach(target,options){if(options===void 0)options={};var swiper=this;var ObserverFunc=Observer.func;var observer=new ObserverFunc(function(mutations){if(mutations.length===1){swiper.emit('observerUpdate',mutations[0]);return;}
var observerUpdate=function observerUpdate(){swiper.emit('observerUpdate',mutations[0]);};if(win.requestAnimationFrame){win.requestAnimationFrame(observerUpdate);}else{win.setTimeout(observerUpdate,0);}});observer.observe(target,{attributes:typeof options.attributes==='undefined'?true:options.attributes,childList:typeof options.childList==='undefined'?true:options.childList,characterData:typeof options.characterData==='undefined'?true:options.characterData,});swiper.observer.observers.push(observer);},init:function init(){var swiper=this;if(!Support.observer||!swiper.params.observer){return;}
if(swiper.params.observeParents){var containerParents=swiper.$el.parents();for(var i=0;i<containerParents.length;i+=1){swiper.observer.attach(containerParents[i]);}}
swiper.observer.attach(swiper.$el[0],{childList:swiper.params.observeSlideChildren});swiper.observer.attach(swiper.$wrapperEl[0],{attributes:false});},destroy:function destroy(){var swiper=this;swiper.observer.observers.forEach(function(observer){observer.disconnect();});swiper.observer.observers=[];},};var Observer$1={name:'observer',params:{observer:false,observeParents:false,observeSlideChildren:false,},create:function create(){var swiper=this;Utils.extend(swiper,{observer:{init:Observer.init.bind(swiper),attach:Observer.attach.bind(swiper),destroy:Observer.destroy.bind(swiper),observers:[],},});},on:{init:function init(){var swiper=this;swiper.observer.init();},destroy:function destroy(){var swiper=this;swiper.observer.destroy();},},};var Virtual={update:function update(force){var swiper=this;var ref=swiper.params;var slidesPerView=ref.slidesPerView;var slidesPerGroup=ref.slidesPerGroup;var centeredSlides=ref.centeredSlides;var ref$1=swiper.params.virtual;var addSlidesBefore=ref$1.addSlidesBefore;var addSlidesAfter=ref$1.addSlidesAfter;var ref$2=swiper.virtual;var previousFrom=ref$2.from;var previousTo=ref$2.to;var slides=ref$2.slides;var previousSlidesGrid=ref$2.slidesGrid;var renderSlide=ref$2.renderSlide;var previousOffset=ref$2.offset;swiper.updateActiveIndex();var activeIndex=swiper.activeIndex||0;var offsetProp;if(swiper.rtlTranslate){offsetProp='right';}
else{offsetProp=swiper.isHorizontal()?'left':'top';}
var slidesAfter;var slidesBefore;if(centeredSlides){slidesAfter=Math.floor(slidesPerView/2)+slidesPerGroup+addSlidesBefore;slidesBefore=Math.floor(slidesPerView/2)+slidesPerGroup+addSlidesAfter;}else{slidesAfter=slidesPerView+(slidesPerGroup-1)+addSlidesBefore;slidesBefore=slidesPerGroup+addSlidesAfter;}
var from=Math.max((activeIndex||0)-slidesBefore,0);var to=Math.min((activeIndex||0)+slidesAfter,slides.length-1);var offset=(swiper.slidesGrid[from]||0)-(swiper.slidesGrid[0]||0);Utils.extend(swiper.virtual,{from:from,to:to,offset:offset,slidesGrid:swiper.slidesGrid,});function onRendered(){swiper.updateSlides();swiper.updateProgress();swiper.updateSlidesClasses();if(swiper.lazy&&swiper.params.lazy.enabled){swiper.lazy.load();}}
if(previousFrom===from&&previousTo===to&&!force){if(swiper.slidesGrid!==previousSlidesGrid&&offset!==previousOffset){swiper.slides.css(offsetProp,(offset+"px"));}
swiper.updateProgress();return;}
if(swiper.params.virtual.renderExternal){swiper.params.virtual.renderExternal.call(swiper,{offset:offset,from:from,to:to,slides:(function getSlides(){var slidesToRender=[];for(var i=from;i<=to;i+=1){slidesToRender.push(slides[i]);}
return slidesToRender;}()),});onRendered();return;}
var prependIndexes=[];var appendIndexes=[];if(force){swiper.$wrapperEl.find(("."+(swiper.params.slideClass))).remove();}else{for(var i=previousFrom;i<=previousTo;i+=1){if(i<from||i>to){swiper.$wrapperEl.find(("."+(swiper.params.slideClass)+"[data-swiper-slide-index=\""+i+"\"]")).remove();}}}
for(var i$1=0;i$1<slides.length;i$1+=1){if(i$1>=from&&i$1<=to){if(typeof previousTo==='undefined'||force){appendIndexes.push(i$1);}else{if(i$1>previousTo){appendIndexes.push(i$1);}
if(i$1<previousFrom){prependIndexes.push(i$1);}}}}
appendIndexes.forEach(function(index){swiper.$wrapperEl.append(renderSlide(slides[index],index));});prependIndexes.sort(function(a,b){return b-a;}).forEach(function(index){swiper.$wrapperEl.prepend(renderSlide(slides[index],index));});swiper.$wrapperEl.children('.swiper-slide').css(offsetProp,(offset+"px"));onRendered();},renderSlide:function renderSlide(slide,index){var swiper=this;var params=swiper.params.virtual;if(params.cache&&swiper.virtual.cache[index]){return swiper.virtual.cache[index];}
var $slideEl=params.renderSlide?$(params.renderSlide.call(swiper,slide,index)):$(("<div class=\""+(swiper.params.slideClass)+"\" data-swiper-slide-index=\""+index+"\">"+slide+"</div>"));if(!$slideEl.attr('data-swiper-slide-index')){$slideEl.attr('data-swiper-slide-index',index);}
if(params.cache){swiper.virtual.cache[index]=$slideEl;}
return $slideEl;},appendSlide:function appendSlide(slides){var swiper=this;if(typeof slides==='object'&&'length'in slides){for(var i=0;i<slides.length;i+=1){if(slides[i]){swiper.virtual.slides.push(slides[i]);}}}else{swiper.virtual.slides.push(slides);}
swiper.virtual.update(true);},prependSlide:function prependSlide(slides){var swiper=this;var activeIndex=swiper.activeIndex;var newActiveIndex=activeIndex+1;var numberOfNewSlides=1;if(Array.isArray(slides)){for(var i=0;i<slides.length;i+=1){if(slides[i]){swiper.virtual.slides.unshift(slides[i]);}}
newActiveIndex=activeIndex+slides.length;numberOfNewSlides=slides.length;}else{swiper.virtual.slides.unshift(slides);}
if(swiper.params.virtual.cache){var cache=swiper.virtual.cache;var newCache={};Object.keys(cache).forEach(function(cachedIndex){newCache[parseInt(cachedIndex,10)+numberOfNewSlides]=cache[cachedIndex];});swiper.virtual.cache=newCache;}
swiper.virtual.update(true);swiper.slideTo(newActiveIndex,0);},removeSlide:function removeSlide(slidesIndexes){var swiper=this;if(typeof slidesIndexes==='undefined'||slidesIndexes===null){return;}
var activeIndex=swiper.activeIndex;if(Array.isArray(slidesIndexes)){for(var i=slidesIndexes.length-1;i>=0;i-=1){swiper.virtual.slides.splice(slidesIndexes[i],1);if(swiper.params.virtual.cache){delete swiper.virtual.cache[slidesIndexes[i]];}
if(slidesIndexes[i]<activeIndex){activeIndex-=1;}
activeIndex=Math.max(activeIndex,0);}}else{swiper.virtual.slides.splice(slidesIndexes,1);if(swiper.params.virtual.cache){delete swiper.virtual.cache[slidesIndexes];}
if(slidesIndexes<activeIndex){activeIndex-=1;}
activeIndex=Math.max(activeIndex,0);}
swiper.virtual.update(true);swiper.slideTo(activeIndex,0);},removeAllSlides:function removeAllSlides(){var swiper=this;swiper.virtual.slides=[];if(swiper.params.virtual.cache){swiper.virtual.cache={};}
swiper.virtual.update(true);swiper.slideTo(0,0);},};var Virtual$1={name:'virtual',params:{virtual:{enabled:false,slides:[],cache:true,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0,},},create:function create(){var swiper=this;Utils.extend(swiper,{virtual:{update:Virtual.update.bind(swiper),appendSlide:Virtual.appendSlide.bind(swiper),prependSlide:Virtual.prependSlide.bind(swiper),removeSlide:Virtual.removeSlide.bind(swiper),removeAllSlides:Virtual.removeAllSlides.bind(swiper),renderSlide:Virtual.renderSlide.bind(swiper),slides:swiper.params.virtual.slides,cache:{},},});},on:{beforeInit:function beforeInit(){var swiper=this;if(!swiper.params.virtual.enabled){return;}
swiper.classNames.push(((swiper.params.containerModifierClass)+"virtual"));var overwriteParams={watchSlidesProgress:true,};Utils.extend(swiper.params,overwriteParams);Utils.extend(swiper.originalParams,overwriteParams);if(!swiper.params.initialSlide){swiper.virtual.update();}},setTranslate:function setTranslate(){var swiper=this;if(!swiper.params.virtual.enabled){return;}
swiper.virtual.update();},},};var Keyboard={handle:function handle(event){var swiper=this;var rtl=swiper.rtlTranslate;var e=event;if(e.originalEvent){e=e.originalEvent;}
var kc=e.keyCode||e.charCode;if(!swiper.allowSlideNext&&((swiper.isHorizontal()&&kc===39)||(swiper.isVertical()&&kc===40))){return false;}
if(!swiper.allowSlidePrev&&((swiper.isHorizontal()&&kc===37)||(swiper.isVertical()&&kc===38))){return false;}
if(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey){return undefined;}
if(doc.activeElement&&doc.activeElement.nodeName&&(doc.activeElement.nodeName.toLowerCase()==='input'||doc.activeElement.nodeName.toLowerCase()==='textarea')){return undefined;}
if(swiper.params.keyboard.onlyInViewport&&(kc===37||kc===39||kc===38||kc===40)){var inView=false;if(swiper.$el.parents(("."+(swiper.params.slideClass))).length>0&&swiper.$el.parents(("."+(swiper.params.slideActiveClass))).length===0){return undefined;}
var windowWidth=win.innerWidth;var windowHeight=win.innerHeight;var swiperOffset=swiper.$el.offset();if(rtl){swiperOffset.left-=swiper.$el[0].scrollLeft;}
var swiperCoord=[[swiperOffset.left,swiperOffset.top],[swiperOffset.left+swiper.width,swiperOffset.top],[swiperOffset.left,swiperOffset.top+swiper.height],[swiperOffset.left+swiper.width,swiperOffset.top+swiper.height]];for(var i=0;i<swiperCoord.length;i+=1){var point=swiperCoord[i];if(point[0]>=0&&point[0]<=windowWidth&&point[1]>=0&&point[1]<=windowHeight){inView=true;}}
if(!inView){return undefined;}}
if(swiper.isHorizontal()){if(kc===37||kc===39){if(e.preventDefault){e.preventDefault();}
else{e.returnValue=false;}}
if((kc===39&&!rtl)||(kc===37&&rtl)){swiper.slideNext();}
if((kc===37&&!rtl)||(kc===39&&rtl)){swiper.slidePrev();}}else{if(kc===38||kc===40){if(e.preventDefault){e.preventDefault();}
else{e.returnValue=false;}}
if(kc===40){swiper.slideNext();}
if(kc===38){swiper.slidePrev();}}
swiper.emit('keyPress',kc);return undefined;},enable:function enable(){var swiper=this;if(swiper.keyboard.enabled){return;}
$(doc).on('keydown',swiper.keyboard.handle);swiper.keyboard.enabled=true;},disable:function disable(){var swiper=this;if(!swiper.keyboard.enabled){return;}
$(doc).off('keydown',swiper.keyboard.handle);swiper.keyboard.enabled=false;},};var Keyboard$1={name:'keyboard',params:{keyboard:{enabled:false,onlyInViewport:true,},},create:function create(){var swiper=this;Utils.extend(swiper,{keyboard:{enabled:false,enable:Keyboard.enable.bind(swiper),disable:Keyboard.disable.bind(swiper),handle:Keyboard.handle.bind(swiper),},});},on:{init:function init(){var swiper=this;if(swiper.params.keyboard.enabled){swiper.keyboard.enable();}},destroy:function destroy(){var swiper=this;if(swiper.keyboard.enabled){swiper.keyboard.disable();}},},};function isEventSupported(){var eventName='onwheel';var isSupported=eventName in doc;if(!isSupported){var element=doc.createElement('div');element.setAttribute(eventName,'return;');isSupported=typeof element[eventName]==='function';}
if(!isSupported&&doc.implementation&&doc.implementation.hasFeature&&doc.implementation.hasFeature('','')!==true){isSupported=doc.implementation.hasFeature('Events.wheel','3.0');}
return isSupported;}
var Mousewheel={lastScrollTime:Utils.now(),event:(function getEvent(){if(win.navigator.userAgent.indexOf('firefox')>-1){return 'DOMMouseScroll';}
return isEventSupported()?'wheel':'mousewheel';}()),normalize:function normalize(e){var PIXEL_STEP=10;var LINE_HEIGHT=40;var PAGE_HEIGHT=800;var sX=0;var sY=0;var pX=0;var pY=0;if('detail'in e){sY=e.detail;}
if('wheelDelta'in e){sY=-e.wheelDelta/120;}
if('wheelDeltaY'in e){sY=-e.wheelDeltaY/120;}
if('wheelDeltaX'in e){sX=-e.wheelDeltaX/120;}
if('axis'in e&&e.axis===e.HORIZONTAL_AXIS){sX=sY;sY=0;}
pX=sX*PIXEL_STEP;pY=sY*PIXEL_STEP;if('deltaY'in e){pY=e.deltaY;}
if('deltaX'in e){pX=e.deltaX;}
if((pX||pY)&&e.deltaMode){if(e.deltaMode===1){pX*=LINE_HEIGHT;pY*=LINE_HEIGHT;}else{pX*=PAGE_HEIGHT;pY*=PAGE_HEIGHT;}}
if(pX&&!sX){sX=(pX<1)?-1:1;}
if(pY&&!sY){sY=(pY<1)?-1:1;}
return{spinX:sX,spinY:sY,pixelX:pX,pixelY:pY,};},handleMouseEnter:function handleMouseEnter(){var swiper=this;swiper.mouseEntered=true;},handleMouseLeave:function handleMouseLeave(){var swiper=this;swiper.mouseEntered=false;},handle:function handle(event){var e=event;var swiper=this;var params=swiper.params.mousewheel;if(!swiper.mouseEntered&&!params.releaseOnEdges){return true;}
if(e.originalEvent){e=e.originalEvent;}
var delta=0;var rtlFactor=swiper.rtlTranslate?-1:1;var data=Mousewheel.normalize(e);if(params.forceToAxis){if(swiper.isHorizontal()){if(Math.abs(data.pixelX)>Math.abs(data.pixelY)){delta=data.pixelX*rtlFactor;}
else{return true;}}else if(Math.abs(data.pixelY)>Math.abs(data.pixelX)){delta=data.pixelY;}
else{return true;}}else{delta=Math.abs(data.pixelX)>Math.abs(data.pixelY)?-data.pixelX*rtlFactor:-data.pixelY;}
if(delta===0){return true;}
if(params.invert){delta=-delta;}
if(!swiper.params.freeMode){if(Utils.now()-swiper.mousewheel.lastScrollTime>60){if(delta<0){if((!swiper.isEnd||swiper.params.loop)&&!swiper.animating){swiper.slideNext();swiper.emit('scroll',e);}else if(params.releaseOnEdges){return true;}}else if((!swiper.isBeginning||swiper.params.loop)&&!swiper.animating){swiper.slidePrev();swiper.emit('scroll',e);}else if(params.releaseOnEdges){return true;}}
swiper.mousewheel.lastScrollTime=(new win.Date()).getTime();}else{if(swiper.params.loop){swiper.loopFix();}
var position=swiper.getTranslate()+(delta*params.sensitivity);var wasBeginning=swiper.isBeginning;var wasEnd=swiper.isEnd;if(position>=swiper.minTranslate()){position=swiper.minTranslate();}
if(position<=swiper.maxTranslate()){position=swiper.maxTranslate();}
swiper.setTransition(0);swiper.setTranslate(position);swiper.updateProgress();swiper.updateActiveIndex();swiper.updateSlidesClasses();if((!wasBeginning&&swiper.isBeginning)||(!wasEnd&&swiper.isEnd)){swiper.updateSlidesClasses();}
if(swiper.params.freeModeSticky){clearTimeout(swiper.mousewheel.timeout);swiper.mousewheel.timeout=Utils.nextTick(function(){swiper.slideToClosest();},300);}
swiper.emit('scroll',e);if(swiper.params.autoplay&&swiper.params.autoplayDisableOnInteraction){swiper.autoplay.stop();}
if(position===swiper.minTranslate()||position===swiper.maxTranslate()){return true;}}
if(e.preventDefault){e.preventDefault();}
else{e.returnValue=false;}
return false;},enable:function enable(){var swiper=this;if(!Mousewheel.event){return false;}
if(swiper.mousewheel.enabled){return false;}
var target=swiper.$el;if(swiper.params.mousewheel.eventsTarged!=='container'){target=$(swiper.params.mousewheel.eventsTarged);}
target.on('mouseenter',swiper.mousewheel.handleMouseEnter);target.on('mouseleave',swiper.mousewheel.handleMouseLeave);target.on(Mousewheel.event,swiper.mousewheel.handle);swiper.mousewheel.enabled=true;return true;},disable:function disable(){var swiper=this;if(!Mousewheel.event){return false;}
if(!swiper.mousewheel.enabled){return false;}
var target=swiper.$el;if(swiper.params.mousewheel.eventsTarged!=='container'){target=$(swiper.params.mousewheel.eventsTarged);}
target.off(Mousewheel.event,swiper.mousewheel.handle);swiper.mousewheel.enabled=false;return true;},};var Mousewheel$1={name:'mousewheel',params:{mousewheel:{enabled:false,releaseOnEdges:false,invert:false,forceToAxis:false,sensitivity:1,eventsTarged:'container',},},create:function create(){var swiper=this;Utils.extend(swiper,{mousewheel:{enabled:false,enable:Mousewheel.enable.bind(swiper),disable:Mousewheel.disable.bind(swiper),handle:Mousewheel.handle.bind(swiper),handleMouseEnter:Mousewheel.handleMouseEnter.bind(swiper),handleMouseLeave:Mousewheel.handleMouseLeave.bind(swiper),lastScrollTime:Utils.now(),},});},on:{init:function init(){var swiper=this;if(swiper.params.mousewheel.enabled){swiper.mousewheel.enable();}},destroy:function destroy(){var swiper=this;if(swiper.mousewheel.enabled){swiper.mousewheel.disable();}},},};var Navigation={update:function update(){var swiper=this;var params=swiper.params.navigation;if(swiper.params.loop){return;}
var ref=swiper.navigation;var $nextEl=ref.$nextEl;var $prevEl=ref.$prevEl;if($prevEl&&$prevEl.length>0){if(swiper.isBeginning){$prevEl.addClass(params.disabledClass);}else{$prevEl.removeClass(params.disabledClass);}
$prevEl[swiper.params.watchOverflow&&swiper.isLocked?'addClass':'removeClass'](params.lockClass);}
if($nextEl&&$nextEl.length>0){if(swiper.isEnd){$nextEl.addClass(params.disabledClass);}else{$nextEl.removeClass(params.disabledClass);}
$nextEl[swiper.params.watchOverflow&&swiper.isLocked?'addClass':'removeClass'](params.lockClass);}},onPrevClick:function onPrevClick(e){var swiper=this;e.preventDefault();if(swiper.isBeginning&&!swiper.params.loop){return;}
swiper.slidePrev();},onNextClick:function onNextClick(e){var swiper=this;e.preventDefault();if(swiper.isEnd&&!swiper.params.loop){return;}
swiper.slideNext();},init:function init(){var swiper=this;var params=swiper.params.navigation;if(!(params.nextEl||params.prevEl)){return;}
var $nextEl;var $prevEl;if(params.nextEl){$nextEl=$(params.nextEl);if(swiper.params.uniqueNavElements&&typeof params.nextEl==='string'&&$nextEl.length>1&&swiper.$el.find(params.nextEl).length===1){$nextEl=swiper.$el.find(params.nextEl);}}
if(params.prevEl){$prevEl=$(params.prevEl);if(swiper.params.uniqueNavElements&&typeof params.prevEl==='string'&&$prevEl.length>1&&swiper.$el.find(params.prevEl).length===1){$prevEl=swiper.$el.find(params.prevEl);}}
if($nextEl&&$nextEl.length>0){$nextEl.on('click',swiper.navigation.onNextClick);}
if($prevEl&&$prevEl.length>0){$prevEl.on('click',swiper.navigation.onPrevClick);}
Utils.extend(swiper.navigation,{$nextEl:$nextEl,nextEl:$nextEl&&$nextEl[0],$prevEl:$prevEl,prevEl:$prevEl&&$prevEl[0],});},destroy:function destroy(){var swiper=this;var ref=swiper.navigation;var $nextEl=ref.$nextEl;var $prevEl=ref.$prevEl;if($nextEl&&$nextEl.length){$nextEl.off('click',swiper.navigation.onNextClick);$nextEl.removeClass(swiper.params.navigation.disabledClass);}
if($prevEl&&$prevEl.length){$prevEl.off('click',swiper.navigation.onPrevClick);$prevEl.removeClass(swiper.params.navigation.disabledClass);}},};var Navigation$1={name:'navigation',params:{navigation:{nextEl:null,prevEl:null,hideOnClick:false,disabledClass:'swiper-button-disabled',hiddenClass:'swiper-button-hidden',lockClass:'swiper-button-lock',},},create:function create(){var swiper=this;Utils.extend(swiper,{navigation:{init:Navigation.init.bind(swiper),update:Navigation.update.bind(swiper),destroy:Navigation.destroy.bind(swiper),onNextClick:Navigation.onNextClick.bind(swiper),onPrevClick:Navigation.onPrevClick.bind(swiper),},});},on:{init:function init(){var swiper=this;swiper.navigation.init();swiper.navigation.update();},toEdge:function toEdge(){var swiper=this;swiper.navigation.update();},fromEdge:function fromEdge(){var swiper=this;swiper.navigation.update();},destroy:function destroy(){var swiper=this;swiper.navigation.destroy();},click:function click(e){var swiper=this;var ref=swiper.navigation;var $nextEl=ref.$nextEl;var $prevEl=ref.$prevEl;if(swiper.params.navigation.hideOnClick&&!$(e.target).is($prevEl)&&!$(e.target).is($nextEl)){var isHidden;if($nextEl){isHidden=$nextEl.hasClass(swiper.params.navigation.hiddenClass);}else if($prevEl){isHidden=$prevEl.hasClass(swiper.params.navigation.hiddenClass);}
if(isHidden===true){swiper.emit('navigationShow',swiper);}else{swiper.emit('navigationHide',swiper);}
if($nextEl){$nextEl.toggleClass(swiper.params.navigation.hiddenClass);}
if($prevEl){$prevEl.toggleClass(swiper.params.navigation.hiddenClass);}}},},};var Pagination={update:function update(){var swiper=this;var rtl=swiper.rtl;var params=swiper.params.pagination;if(!params.el||!swiper.pagination.el||!swiper.pagination.$el||swiper.pagination.$el.length===0){return;}
var slidesLength=swiper.virtual&&swiper.params.virtual.enabled?swiper.virtual.slides.length:swiper.slides.length;var $el=swiper.pagination.$el;var current;var total=swiper.params.loop?Math.ceil((slidesLength-(swiper.loopedSlides*2))/swiper.params.slidesPerGroup):swiper.snapGrid.length;if(swiper.params.loop){current=Math.ceil((swiper.activeIndex-swiper.loopedSlides)/swiper.params.slidesPerGroup);if(current>slidesLength-1-(swiper.loopedSlides*2)){current-=(slidesLength-(swiper.loopedSlides*2));}
if(current>total-1){current-=total;}
if(current<0&&swiper.params.paginationType!=='bullets'){current=total+current;}}else if(typeof swiper.snapIndex!=='undefined'){current=swiper.snapIndex;}else{current=swiper.activeIndex||0;}
if(params.type==='bullets'&&swiper.pagination.bullets&&swiper.pagination.bullets.length>0){var bullets=swiper.pagination.bullets;var firstIndex;var lastIndex;var midIndex;if(params.dynamicBullets){swiper.pagination.bulletSize=bullets.eq(0)[swiper.isHorizontal()?'outerWidth':'outerHeight'](true);$el.css(swiper.isHorizontal()?'width':'height',((swiper.pagination.bulletSize*(params.dynamicMainBullets+4))+"px"));if(params.dynamicMainBullets>1&&swiper.previousIndex!==undefined){swiper.pagination.dynamicBulletIndex+=(current-swiper.previousIndex);if(swiper.pagination.dynamicBulletIndex>(params.dynamicMainBullets-1)){swiper.pagination.dynamicBulletIndex=params.dynamicMainBullets-1;}else if(swiper.pagination.dynamicBulletIndex<0){swiper.pagination.dynamicBulletIndex=0;}}
firstIndex=current-swiper.pagination.dynamicBulletIndex;lastIndex=firstIndex+(Math.min(bullets.length,params.dynamicMainBullets)-1);midIndex=(lastIndex+firstIndex)/2;}
bullets.removeClass(((params.bulletActiveClass)+" "+(params.bulletActiveClass)+"-next "+(params.bulletActiveClass)+"-next-next "+(params.bulletActiveClass)+"-prev "+(params.bulletActiveClass)+"-prev-prev "+(params.bulletActiveClass)+"-main"));if($el.length>1){bullets.each(function(index,bullet){var $bullet=$(bullet);var bulletIndex=$bullet.index();if(bulletIndex===current){$bullet.addClass(params.bulletActiveClass);}
if(params.dynamicBullets){if(bulletIndex>=firstIndex&&bulletIndex<=lastIndex){$bullet.addClass(((params.bulletActiveClass)+"-main"));}
if(bulletIndex===firstIndex){$bullet.prev().addClass(((params.bulletActiveClass)+"-prev")).prev().addClass(((params.bulletActiveClass)+"-prev-prev"));}
if(bulletIndex===lastIndex){$bullet.next().addClass(((params.bulletActiveClass)+"-next")).next().addClass(((params.bulletActiveClass)+"-next-next"));}}});}else{var $bullet=bullets.eq(current);$bullet.addClass(params.bulletActiveClass);if(params.dynamicBullets){var $firstDisplayedBullet=bullets.eq(firstIndex);var $lastDisplayedBullet=bullets.eq(lastIndex);for(var i=firstIndex;i<=lastIndex;i+=1){bullets.eq(i).addClass(((params.bulletActiveClass)+"-main"));}
$firstDisplayedBullet.prev().addClass(((params.bulletActiveClass)+"-prev")).prev().addClass(((params.bulletActiveClass)+"-prev-prev"));$lastDisplayedBullet.next().addClass(((params.bulletActiveClass)+"-next")).next().addClass(((params.bulletActiveClass)+"-next-next"));}}
if(params.dynamicBullets){var dynamicBulletsLength=Math.min(bullets.length,params.dynamicMainBullets+4);var bulletsOffset=(((swiper.pagination.bulletSize*dynamicBulletsLength)-(swiper.pagination.bulletSize))/2)-(midIndex*swiper.pagination.bulletSize);var offsetProp=rtl?'right':'left';bullets.css(swiper.isHorizontal()?offsetProp:'top',(bulletsOffset+"px"));}}
if(params.type==='fraction'){$el.find(("."+(params.currentClass))).text(params.formatFractionCurrent(current+1));$el.find(("."+(params.totalClass))).text(params.formatFractionTotal(total));}
if(params.type==='progressbar'){var progressbarDirection;if(params.progressbarOpposite){progressbarDirection=swiper.isHorizontal()?'vertical':'horizontal';}else{progressbarDirection=swiper.isHorizontal()?'horizontal':'vertical';}
var scale=(current+1)/total;var scaleX=1;var scaleY=1;if(progressbarDirection==='horizontal'){scaleX=scale;}else{scaleY=scale;}
$el.find(("."+(params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX("+scaleX+") scaleY("+scaleY+")")).transition(swiper.params.speed);}
if(params.type==='custom'&&params.renderCustom){$el.html(params.renderCustom(swiper,current+1,total));swiper.emit('paginationRender',swiper,$el[0]);}else{swiper.emit('paginationUpdate',swiper,$el[0]);}
$el[swiper.params.watchOverflow&&swiper.isLocked?'addClass':'removeClass'](params.lockClass);},render:function render(){var swiper=this;var params=swiper.params.pagination;if(!params.el||!swiper.pagination.el||!swiper.pagination.$el||swiper.pagination.$el.length===0){return;}
var slidesLength=swiper.virtual&&swiper.params.virtual.enabled?swiper.virtual.slides.length:swiper.slides.length;var $el=swiper.pagination.$el;var paginationHTML='';if(params.type==='bullets'){var numberOfBullets=swiper.params.loop?Math.ceil((slidesLength-(swiper.loopedSlides*2))/swiper.params.slidesPerGroup):swiper.snapGrid.length;for(var i=0;i<numberOfBullets;i+=1){if(params.renderBullet){paginationHTML+=params.renderBullet.call(swiper,i,params.bulletClass);}else{paginationHTML+="<"+(params.bulletElement)+" class=\""+(params.bulletClass)+"\"></"+(params.bulletElement)+">";}}
$el.html(paginationHTML);swiper.pagination.bullets=$el.find(("."+(params.bulletClass)));}
if(params.type==='fraction'){if(params.renderFraction){paginationHTML=params.renderFraction.call(swiper,params.currentClass,params.totalClass);}else{paginationHTML="<span class=\""+(params.currentClass)+"\"></span>"
+' / '
+"<span class=\""+(params.totalClass)+"\"></span>";}
$el.html(paginationHTML);}
if(params.type==='progressbar'){if(params.renderProgressbar){paginationHTML=params.renderProgressbar.call(swiper,params.progressbarFillClass);}else{paginationHTML="<span class=\""+(params.progressbarFillClass)+"\"></span>";}
$el.html(paginationHTML);}
if(params.type!=='custom'){swiper.emit('paginationRender',swiper.pagination.$el[0]);}},init:function init(){var swiper=this;var params=swiper.params.pagination;if(!params.el){return;}
var $el=$(params.el);if($el.length===0){return;}
if(swiper.params.uniqueNavElements&&typeof params.el==='string'&&$el.length>1&&swiper.$el.find(params.el).length===1){$el=swiper.$el.find(params.el);}
if(params.type==='bullets'&&params.clickable){$el.addClass(params.clickableClass);}
$el.addClass(params.modifierClass+params.type);if(params.type==='bullets'&&params.dynamicBullets){$el.addClass((""+(params.modifierClass)+(params.type)+"-dynamic"));swiper.pagination.dynamicBulletIndex=0;if(params.dynamicMainBullets<1){params.dynamicMainBullets=1;}}
if(params.type==='progressbar'&&params.progressbarOpposite){$el.addClass(params.progressbarOppositeClass);}
if(params.clickable){$el.on('click',("."+(params.bulletClass)),function onClick(e){e.preventDefault();var index=$(this).index()*swiper.params.slidesPerGroup;if(swiper.params.loop){index+=swiper.loopedSlides;}
swiper.slideTo(index);});}
Utils.extend(swiper.pagination,{$el:$el,el:$el[0],});},destroy:function destroy(){var swiper=this;var params=swiper.params.pagination;if(!params.el||!swiper.pagination.el||!swiper.pagination.$el||swiper.pagination.$el.length===0){return;}
var $el=swiper.pagination.$el;$el.removeClass(params.hiddenClass);$el.removeClass(params.modifierClass+params.type);if(swiper.pagination.bullets){swiper.pagination.bullets.removeClass(params.bulletActiveClass);}
if(params.clickable){$el.off('click',("."+(params.bulletClass)));}},};var Pagination$1={name:'pagination',params:{pagination:{el:null,bulletElement:'span',clickable:false,hideOnClick:false,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:false,type:'bullets',dynamicBullets:false,dynamicMainBullets:1,formatFractionCurrent:function(number){return number;},formatFractionTotal:function(number){return number;},bulletClass:'swiper-pagination-bullet',bulletActiveClass:'swiper-pagination-bullet-active',modifierClass:'swiper-pagination-',currentClass:'swiper-pagination-current',totalClass:'swiper-pagination-total',hiddenClass:'swiper-pagination-hidden',progressbarFillClass:'swiper-pagination-progressbar-fill',progressbarOppositeClass:'swiper-pagination-progressbar-opposite',clickableClass:'swiper-pagination-clickable',lockClass:'swiper-pagination-lock',},},create:function create(){var swiper=this;Utils.extend(swiper,{pagination:{init:Pagination.init.bind(swiper),render:Pagination.render.bind(swiper),update:Pagination.update.bind(swiper),destroy:Pagination.destroy.bind(swiper),dynamicBulletIndex:0,},});},on:{init:function init(){var swiper=this;swiper.pagination.init();swiper.pagination.render();swiper.pagination.update();},activeIndexChange:function activeIndexChange(){var swiper=this;if(swiper.params.loop){swiper.pagination.update();}else if(typeof swiper.snapIndex==='undefined'){swiper.pagination.update();}},snapIndexChange:function snapIndexChange(){var swiper=this;if(!swiper.params.loop){swiper.pagination.update();}},slidesLengthChange:function slidesLengthChange(){var swiper=this;if(swiper.params.loop){swiper.pagination.render();swiper.pagination.update();}},snapGridLengthChange:function snapGridLengthChange(){var swiper=this;if(!swiper.params.loop){swiper.pagination.render();swiper.pagination.update();}},destroy:function destroy(){var swiper=this;swiper.pagination.destroy();},click:function click(e){var swiper=this;if(swiper.params.pagination.el&&swiper.params.pagination.hideOnClick&&swiper.pagination.$el.length>0&&!$(e.target).hasClass(swiper.params.pagination.bulletClass)){var isHidden=swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);if(isHidden===true){swiper.emit('paginationShow',swiper);}else{swiper.emit('paginationHide',swiper);}
swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);}},},};var Scrollbar={setTranslate:function setTranslate(){var swiper=this;if(!swiper.params.scrollbar.el||!swiper.scrollbar.el){return;}
var scrollbar=swiper.scrollbar;var rtl=swiper.rtlTranslate;var progress=swiper.progress;var dragSize=scrollbar.dragSize;var trackSize=scrollbar.trackSize;var $dragEl=scrollbar.$dragEl;var $el=scrollbar.$el;var params=swiper.params.scrollbar;var newSize=dragSize;var newPos=(trackSize-dragSize)*progress;if(rtl){newPos=-newPos;if(newPos>0){newSize=dragSize-newPos;newPos=0;}else if(-newPos+dragSize>trackSize){newSize=trackSize+newPos;}}else if(newPos<0){newSize=dragSize+newPos;newPos=0;}else if(newPos+dragSize>trackSize){newSize=trackSize-newPos;}
if(swiper.isHorizontal()){if(Support.transforms3d){$dragEl.transform(("translate3d("+newPos+"px, 0, 0)"));}else{$dragEl.transform(("translateX("+newPos+"px)"));}
$dragEl[0].style.width=newSize+"px";}else{if(Support.transforms3d){$dragEl.transform(("translate3d(0px, "+newPos+"px, 0)"));}else{$dragEl.transform(("translateY("+newPos+"px)"));}
$dragEl[0].style.height=newSize+"px";}
if(params.hide){clearTimeout(swiper.scrollbar.timeout);$el[0].style.opacity=1;swiper.scrollbar.timeout=setTimeout(function(){$el[0].style.opacity=0;$el.transition(400);},1000);}},setTransition:function setTransition(duration){var swiper=this;if(!swiper.params.scrollbar.el||!swiper.scrollbar.el){return;}
swiper.scrollbar.$dragEl.transition(duration);},updateSize:function updateSize(){var swiper=this;if(!swiper.params.scrollbar.el||!swiper.scrollbar.el){return;}
var scrollbar=swiper.scrollbar;var $dragEl=scrollbar.$dragEl;var $el=scrollbar.$el;$dragEl[0].style.width='';$dragEl[0].style.height='';var trackSize=swiper.isHorizontal()?$el[0].offsetWidth:$el[0].offsetHeight;var divider=swiper.size/swiper.virtualSize;var moveDivider=divider*(trackSize/swiper.size);var dragSize;if(swiper.params.scrollbar.dragSize==='auto'){dragSize=trackSize*divider;}else{dragSize=parseInt(swiper.params.scrollbar.dragSize,10);}
if(swiper.isHorizontal()){$dragEl[0].style.width=dragSize+"px";}else{$dragEl[0].style.height=dragSize+"px";}
if(divider>=1){$el[0].style.display='none';}else{$el[0].style.display='';}
if(swiper.params.scrollbar.hide){$el[0].style.opacity=0;}
Utils.extend(scrollbar,{trackSize:trackSize,divider:divider,moveDivider:moveDivider,dragSize:dragSize,});scrollbar.$el[swiper.params.watchOverflow&&swiper.isLocked?'addClass':'removeClass'](swiper.params.scrollbar.lockClass);},setDragPosition:function setDragPosition(e){var swiper=this;var scrollbar=swiper.scrollbar;var rtl=swiper.rtlTranslate;var $el=scrollbar.$el;var dragSize=scrollbar.dragSize;var trackSize=scrollbar.trackSize;var pointerPosition;if(swiper.isHorizontal()){pointerPosition=((e.type==='touchstart'||e.type==='touchmove')?e.targetTouches[0].pageX:e.pageX||e.clientX);}else{pointerPosition=((e.type==='touchstart'||e.type==='touchmove')?e.targetTouches[0].pageY:e.pageY||e.clientY);}
var positionRatio;positionRatio=((pointerPosition)-$el.offset()[swiper.isHorizontal()?'left':'top']-(dragSize/2))/(trackSize-dragSize);positionRatio=Math.max(Math.min(positionRatio,1),0);if(rtl){positionRatio=1-positionRatio;}
var position=swiper.minTranslate()+((swiper.maxTranslate()-swiper.minTranslate())*positionRatio);swiper.updateProgress(position);swiper.setTranslate(position);swiper.updateActiveIndex();swiper.updateSlidesClasses();},onDragStart:function onDragStart(e){var swiper=this;var params=swiper.params.scrollbar;var scrollbar=swiper.scrollbar;var $wrapperEl=swiper.$wrapperEl;var $el=scrollbar.$el;var $dragEl=scrollbar.$dragEl;swiper.scrollbar.isTouched=true;e.preventDefault();e.stopPropagation();$wrapperEl.transition(100);$dragEl.transition(100);scrollbar.setDragPosition(e);clearTimeout(swiper.scrollbar.dragTimeout);$el.transition(0);if(params.hide){$el.css('opacity',1);}
swiper.emit('scrollbarDragStart',e);},onDragMove:function onDragMove(e){var swiper=this;var scrollbar=swiper.scrollbar;var $wrapperEl=swiper.$wrapperEl;var $el=scrollbar.$el;var $dragEl=scrollbar.$dragEl;if(!swiper.scrollbar.isTouched){return;}
if(e.preventDefault){e.preventDefault();}
else{e.returnValue=false;}
scrollbar.setDragPosition(e);$wrapperEl.transition(0);$el.transition(0);$dragEl.transition(0);swiper.emit('scrollbarDragMove',e);},onDragEnd:function onDragEnd(e){var swiper=this;var params=swiper.params.scrollbar;var scrollbar=swiper.scrollbar;var $el=scrollbar.$el;if(!swiper.scrollbar.isTouched){return;}
swiper.scrollbar.isTouched=false;if(params.hide){clearTimeout(swiper.scrollbar.dragTimeout);swiper.scrollbar.dragTimeout=Utils.nextTick(function(){$el.css('opacity',0);$el.transition(400);},1000);}
swiper.emit('scrollbarDragEnd',e);if(params.snapOnRelease){swiper.slideToClosest();}},enableDraggable:function enableDraggable(){var swiper=this;if(!swiper.params.scrollbar.el){return;}
var scrollbar=swiper.scrollbar;var touchEventsTouch=swiper.touchEventsTouch;var touchEventsDesktop=swiper.touchEventsDesktop;var params=swiper.params;var $el=scrollbar.$el;var target=$el[0];var activeListener=Support.passiveListener&&params.passiveListeners?{passive:false,capture:false}:false;var passiveListener=Support.passiveListener&&params.passiveListeners?{passive:true,capture:false}:false;if(!Support.touch){target.addEventListener(touchEventsDesktop.start,swiper.scrollbar.onDragStart,activeListener);doc.addEventListener(touchEventsDesktop.move,swiper.scrollbar.onDragMove,activeListener);doc.addEventListener(touchEventsDesktop.end,swiper.scrollbar.onDragEnd,passiveListener);}else{target.addEventListener(touchEventsTouch.start,swiper.scrollbar.onDragStart,activeListener);target.addEventListener(touchEventsTouch.move,swiper.scrollbar.onDragMove,activeListener);target.addEventListener(touchEventsTouch.end,swiper.scrollbar.onDragEnd,passiveListener);}},disableDraggable:function disableDraggable(){var swiper=this;if(!swiper.params.scrollbar.el){return;}
var scrollbar=swiper.scrollbar;var touchEventsTouch=swiper.touchEventsTouch;var touchEventsDesktop=swiper.touchEventsDesktop;var params=swiper.params;var $el=scrollbar.$el;var target=$el[0];var activeListener=Support.passiveListener&&params.passiveListeners?{passive:false,capture:false}:false;var passiveListener=Support.passiveListener&&params.passiveListeners?{passive:true,capture:false}:false;if(!Support.touch){target.removeEventListener(touchEventsDesktop.start,swiper.scrollbar.onDragStart,activeListener);doc.removeEventListener(touchEventsDesktop.move,swiper.scrollbar.onDragMove,activeListener);doc.removeEventListener(touchEventsDesktop.end,swiper.scrollbar.onDragEnd,passiveListener);}else{target.removeEventListener(touchEventsTouch.start,swiper.scrollbar.onDragStart,activeListener);target.removeEventListener(touchEventsTouch.move,swiper.scrollbar.onDragMove,activeListener);target.removeEventListener(touchEventsTouch.end,swiper.scrollbar.onDragEnd,passiveListener);}},init:function init(){var swiper=this;if(!swiper.params.scrollbar.el){return;}
var scrollbar=swiper.scrollbar;var $swiperEl=swiper.$el;var params=swiper.params.scrollbar;var $el=$(params.el);if(swiper.params.uniqueNavElements&&typeof params.el==='string'&&$el.length>1&&$swiperEl.find(params.el).length===1){$el=$swiperEl.find(params.el);}
var $dragEl=$el.find(("."+(swiper.params.scrollbar.dragClass)));if($dragEl.length===0){$dragEl=$(("<div class=\""+(swiper.params.scrollbar.dragClass)+"\"></div>"));$el.append($dragEl);}
Utils.extend(scrollbar,{$el:$el,el:$el[0],$dragEl:$dragEl,dragEl:$dragEl[0],});if(params.draggable){scrollbar.enableDraggable();}},destroy:function destroy(){var swiper=this;swiper.scrollbar.disableDraggable();},};var Scrollbar$1={name:'scrollbar',params:{scrollbar:{el:null,dragSize:'auto',hide:false,draggable:false,snapOnRelease:true,lockClass:'swiper-scrollbar-lock',dragClass:'swiper-scrollbar-drag',},},create:function create(){var swiper=this;Utils.extend(swiper,{scrollbar:{init:Scrollbar.init.bind(swiper),destroy:Scrollbar.destroy.bind(swiper),updateSize:Scrollbar.updateSize.bind(swiper),setTranslate:Scrollbar.setTranslate.bind(swiper),setTransition:Scrollbar.setTransition.bind(swiper),enableDraggable:Scrollbar.enableDraggable.bind(swiper),disableDraggable:Scrollbar.disableDraggable.bind(swiper),setDragPosition:Scrollbar.setDragPosition.bind(swiper),onDragStart:Scrollbar.onDragStart.bind(swiper),onDragMove:Scrollbar.onDragMove.bind(swiper),onDragEnd:Scrollbar.onDragEnd.bind(swiper),isTouched:false,timeout:null,dragTimeout:null,},});},on:{init:function init(){var swiper=this;swiper.scrollbar.init();swiper.scrollbar.updateSize();swiper.scrollbar.setTranslate();},update:function update(){var swiper=this;swiper.scrollbar.updateSize();},resize:function resize(){var swiper=this;swiper.scrollbar.updateSize();},observerUpdate:function observerUpdate(){var swiper=this;swiper.scrollbar.updateSize();},setTranslate:function setTranslate(){var swiper=this;swiper.scrollbar.setTranslate();},setTransition:function setTransition(duration){var swiper=this;swiper.scrollbar.setTransition(duration);},destroy:function destroy(){var swiper=this;swiper.scrollbar.destroy();},},};var Parallax={setTransform:function setTransform(el,progress){var swiper=this;var rtl=swiper.rtl;var $el=$(el);var rtlFactor=rtl?-1:1;var p=$el.attr('data-swiper-parallax')||'0';var x=$el.attr('data-swiper-parallax-x');var y=$el.attr('data-swiper-parallax-y');var scale=$el.attr('data-swiper-parallax-scale');var opacity=$el.attr('data-swiper-parallax-opacity');if(x||y){x=x||'0';y=y||'0';}else if(swiper.isHorizontal()){x=p;y='0';}else{y=p;x='0';}
if((x).indexOf('%')>=0){x=(parseInt(x,10)*progress*rtlFactor)+"%";}else{x=(x*progress*rtlFactor)+"px";}
if((y).indexOf('%')>=0){y=(parseInt(y,10)*progress)+"%";}else{y=(y*progress)+"px";}
if(typeof opacity!=='undefined'&&opacity!==null){var currentOpacity=opacity-((opacity-1)*(1-Math.abs(progress)));$el[0].style.opacity=currentOpacity;}
if(typeof scale==='undefined'||scale===null){$el.transform(("translate3d("+x+", "+y+", 0px)"));}else{var currentScale=scale-((scale-1)*(1-Math.abs(progress)));$el.transform(("translate3d("+x+", "+y+", 0px) scale("+currentScale+")"));}},setTranslate:function setTranslate(){var swiper=this;var $el=swiper.$el;var slides=swiper.slides;var progress=swiper.progress;var snapGrid=swiper.snapGrid;$el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(index,el){swiper.parallax.setTransform(el,progress);});slides.each(function(slideIndex,slideEl){var slideProgress=slideEl.progress;if(swiper.params.slidesPerGroup>1&&swiper.params.slidesPerView!=='auto'){slideProgress+=Math.ceil(slideIndex/2)-(progress*(snapGrid.length-1));}
slideProgress=Math.min(Math.max(slideProgress,-1),1);$(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(index,el){swiper.parallax.setTransform(el,slideProgress);});});},setTransition:function setTransition(duration){if(duration===void 0)duration=this.params.speed;var swiper=this;var $el=swiper.$el;$el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(index,parallaxEl){var $parallaxEl=$(parallaxEl);var parallaxDuration=parseInt($parallaxEl.attr('data-swiper-parallax-duration'),10)||duration;if(duration===0){parallaxDuration=0;}
$parallaxEl.transition(parallaxDuration);});},};var Parallax$1={name:'parallax',params:{parallax:{enabled:false,},},create:function create(){var swiper=this;Utils.extend(swiper,{parallax:{setTransform:Parallax.setTransform.bind(swiper),setTranslate:Parallax.setTranslate.bind(swiper),setTransition:Parallax.setTransition.bind(swiper),},});},on:{beforeInit:function beforeInit(){var swiper=this;if(!swiper.params.parallax.enabled){return;}
swiper.params.watchSlidesProgress=true;swiper.originalParams.watchSlidesProgress=true;},init:function init(){var swiper=this;if(!swiper.params.parallax.enabled){return;}
swiper.parallax.setTranslate();},setTranslate:function setTranslate(){var swiper=this;if(!swiper.params.parallax.enabled){return;}
swiper.parallax.setTranslate();},setTransition:function setTransition(duration){var swiper=this;if(!swiper.params.parallax.enabled){return;}
swiper.parallax.setTransition(duration);},},};var Zoom={getDistanceBetweenTouches:function getDistanceBetweenTouches(e){if(e.targetTouches.length<2){return 1;}
var x1=e.targetTouches[0].pageX;var y1=e.targetTouches[0].pageY;var x2=e.targetTouches[1].pageX;var y2=e.targetTouches[1].pageY;var distance=Math.sqrt((Math.pow((x2-x1),2))+(Math.pow((y2-y1),2)));return distance;},onGestureStart:function onGestureStart(e){var swiper=this;var params=swiper.params.zoom;var zoom=swiper.zoom;var gesture=zoom.gesture;zoom.fakeGestureTouched=false;zoom.fakeGestureMoved=false;if(!Support.gestures){if(e.type!=='touchstart'||(e.type==='touchstart'&&e.targetTouches.length<2)){return;}
zoom.fakeGestureTouched=true;gesture.scaleStart=Zoom.getDistanceBetweenTouches(e);}
if(!gesture.$slideEl||!gesture.$slideEl.length){gesture.$slideEl=$(e.target).closest('.swiper-slide');if(gesture.$slideEl.length===0){gesture.$slideEl=swiper.slides.eq(swiper.activeIndex);}
gesture.$imageEl=gesture.$slideEl.find('img, svg, canvas');gesture.$imageWrapEl=gesture.$imageEl.parent(("."+(params.containerClass)));gesture.maxRatio=gesture.$imageWrapEl.attr('data-swiper-zoom')||params.maxRatio;if(gesture.$imageWrapEl.length===0){gesture.$imageEl=undefined;return;}}
gesture.$imageEl.transition(0);swiper.zoom.isScaling=true;},onGestureChange:function onGestureChange(e){var swiper=this;var params=swiper.params.zoom;var zoom=swiper.zoom;var gesture=zoom.gesture;if(!Support.gestures){if(e.type!=='touchmove'||(e.type==='touchmove'&&e.targetTouches.length<2)){return;}
zoom.fakeGestureMoved=true;gesture.scaleMove=Zoom.getDistanceBetweenTouches(e);}
if(!gesture.$imageEl||gesture.$imageEl.length===0){return;}
if(Support.gestures){zoom.scale=e.scale*zoom.currentScale;}else{zoom.scale=(gesture.scaleMove/gesture.scaleStart)*zoom.currentScale;}
if(zoom.scale>gesture.maxRatio){zoom.scale=(gesture.maxRatio-1)+(Math.pow(((zoom.scale-gesture.maxRatio)+1),0.5));}
if(zoom.scale<params.minRatio){zoom.scale=(params.minRatio+1)-(Math.pow(((params.minRatio-zoom.scale)+1),0.5));}
gesture.$imageEl.transform(("translate3d(0,0,0) scale("+(zoom.scale)+")"));},onGestureEnd:function onGestureEnd(e){var swiper=this;var params=swiper.params.zoom;var zoom=swiper.zoom;var gesture=zoom.gesture;if(!Support.gestures){if(!zoom.fakeGestureTouched||!zoom.fakeGestureMoved){return;}
if(e.type!=='touchend'||(e.type==='touchend'&&e.changedTouches.length<2&&!Device.android)){return;}
zoom.fakeGestureTouched=false;zoom.fakeGestureMoved=false;}
if(!gesture.$imageEl||gesture.$imageEl.length===0){return;}
zoom.scale=Math.max(Math.min(zoom.scale,gesture.maxRatio),params.minRatio);gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale("+(zoom.scale)+")"));zoom.currentScale=zoom.scale;zoom.isScaling=false;if(zoom.scale===1){gesture.$slideEl=undefined;}},onTouchStart:function onTouchStart(e){var swiper=this;var zoom=swiper.zoom;var gesture=zoom.gesture;var image=zoom.image;if(!gesture.$imageEl||gesture.$imageEl.length===0){return;}
if(image.isTouched){return;}
if(Device.android){e.preventDefault();}
image.isTouched=true;image.touchesStart.x=e.type==='touchstart'?e.targetTouches[0].pageX:e.pageX;image.touchesStart.y=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;},onTouchMove:function onTouchMove(e){var swiper=this;var zoom=swiper.zoom;var gesture=zoom.gesture;var image=zoom.image;var velocity=zoom.velocity;if(!gesture.$imageEl||gesture.$imageEl.length===0){return;}
swiper.allowClick=false;if(!image.isTouched||!gesture.$slideEl){return;}
if(!image.isMoved){image.width=gesture.$imageEl[0].offsetWidth;image.height=gesture.$imageEl[0].offsetHeight;image.startX=Utils.getTranslate(gesture.$imageWrapEl[0],'x')||0;image.startY=Utils.getTranslate(gesture.$imageWrapEl[0],'y')||0;gesture.slideWidth=gesture.$slideEl[0].offsetWidth;gesture.slideHeight=gesture.$slideEl[0].offsetHeight;gesture.$imageWrapEl.transition(0);if(swiper.rtl){image.startX=-image.startX;image.startY=-image.startY;}}
var scaledWidth=image.width*zoom.scale;var scaledHeight=image.height*zoom.scale;if(scaledWidth<gesture.slideWidth&&scaledHeight<gesture.slideHeight){return;}
image.minX=Math.min(((gesture.slideWidth/2)-(scaledWidth/2)),0);image.maxX=-image.minX;image.minY=Math.min(((gesture.slideHeight/2)-(scaledHeight/2)),0);image.maxY=-image.minY;image.touchesCurrent.x=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;image.touchesCurrent.y=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(!image.isMoved&&!zoom.isScaling){if(swiper.isHorizontal()&&((Math.floor(image.minX)===Math.floor(image.startX)&&image.touchesCurrent.x<image.touchesStart.x)||(Math.floor(image.maxX)===Math.floor(image.startX)&&image.touchesCurrent.x>image.touchesStart.x))){image.isTouched=false;return;}if(!swiper.isHorizontal()&&((Math.floor(image.minY)===Math.floor(image.startY)&&image.touchesCurrent.y<image.touchesStart.y)||(Math.floor(image.maxY)===Math.floor(image.startY)&&image.touchesCurrent.y>image.touchesStart.y))){image.isTouched=false;return;}}
e.preventDefault();e.stopPropagation();image.isMoved=true;image.currentX=(image.touchesCurrent.x-image.touchesStart.x)+image.startX;image.currentY=(image.touchesCurrent.y-image.touchesStart.y)+image.startY;if(image.currentX<image.minX){image.currentX=(image.minX+1)-(Math.pow(((image.minX-image.currentX)+1),0.8));}
if(image.currentX>image.maxX){image.currentX=(image.maxX-1)+(Math.pow(((image.currentX-image.maxX)+1),0.8));}
if(image.currentY<image.minY){image.currentY=(image.minY+1)-(Math.pow(((image.minY-image.currentY)+1),0.8));}
if(image.currentY>image.maxY){image.currentY=(image.maxY-1)+(Math.pow(((image.currentY-image.maxY)+1),0.8));}
if(!velocity.prevPositionX){velocity.prevPositionX=image.touchesCurrent.x;}
if(!velocity.prevPositionY){velocity.prevPositionY=image.touchesCurrent.y;}
if(!velocity.prevTime){velocity.prevTime=Date.now();}
velocity.x=(image.touchesCurrent.x-velocity.prevPositionX)/(Date.now()-velocity.prevTime)/2;velocity.y=(image.touchesCurrent.y-velocity.prevPositionY)/(Date.now()-velocity.prevTime)/2;if(Math.abs(image.touchesCurrent.x-velocity.prevPositionX)<2){velocity.x=0;}
if(Math.abs(image.touchesCurrent.y-velocity.prevPositionY)<2){velocity.y=0;}
velocity.prevPositionX=image.touchesCurrent.x;velocity.prevPositionY=image.touchesCurrent.y;velocity.prevTime=Date.now();gesture.$imageWrapEl.transform(("translate3d("+(image.currentX)+"px, "+(image.currentY)+"px,0)"));},onTouchEnd:function onTouchEnd(){var swiper=this;var zoom=swiper.zoom;var gesture=zoom.gesture;var image=zoom.image;var velocity=zoom.velocity;if(!gesture.$imageEl||gesture.$imageEl.length===0){return;}
if(!image.isTouched||!image.isMoved){image.isTouched=false;image.isMoved=false;return;}
image.isTouched=false;image.isMoved=false;var momentumDurationX=300;var momentumDurationY=300;var momentumDistanceX=velocity.x*momentumDurationX;var newPositionX=image.currentX+momentumDistanceX;var momentumDistanceY=velocity.y*momentumDurationY;var newPositionY=image.currentY+momentumDistanceY;if(velocity.x!==0){momentumDurationX=Math.abs((newPositionX-image.currentX)/velocity.x);}
if(velocity.y!==0){momentumDurationY=Math.abs((newPositionY-image.currentY)/velocity.y);}
var momentumDuration=Math.max(momentumDurationX,momentumDurationY);image.currentX=newPositionX;image.currentY=newPositionY;var scaledWidth=image.width*zoom.scale;var scaledHeight=image.height*zoom.scale;image.minX=Math.min(((gesture.slideWidth/2)-(scaledWidth/2)),0);image.maxX=-image.minX;image.minY=Math.min(((gesture.slideHeight/2)-(scaledHeight/2)),0);image.maxY=-image.minY;image.currentX=Math.max(Math.min(image.currentX,image.maxX),image.minX);image.currentY=Math.max(Math.min(image.currentY,image.maxY),image.minY);gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d("+(image.currentX)+"px, "+(image.currentY)+"px,0)"));},onTransitionEnd:function onTransitionEnd(){var swiper=this;var zoom=swiper.zoom;var gesture=zoom.gesture;if(gesture.$slideEl&&swiper.previousIndex!==swiper.activeIndex){gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');gesture.$imageWrapEl.transform('translate3d(0,0,0)');zoom.scale=1;zoom.currentScale=1;gesture.$slideEl=undefined;gesture.$imageEl=undefined;gesture.$imageWrapEl=undefined;}},toggle:function toggle(e){var swiper=this;var zoom=swiper.zoom;if(zoom.scale&&zoom.scale!==1){zoom.out();}else{zoom.in(e);}},in:function in$1(e){var swiper=this;var zoom=swiper.zoom;var params=swiper.params.zoom;var gesture=zoom.gesture;var image=zoom.image;if(!gesture.$slideEl){gesture.$slideEl=swiper.clickedSlide?$(swiper.clickedSlide):swiper.slides.eq(swiper.activeIndex);gesture.$imageEl=gesture.$slideEl.find('img, svg, canvas');gesture.$imageWrapEl=gesture.$imageEl.parent(("."+(params.containerClass)));}
if(!gesture.$imageEl||gesture.$imageEl.length===0){return;}
gesture.$slideEl.addClass((""+(params.zoomedSlideClass)));var touchX;var touchY;var offsetX;var offsetY;var diffX;var diffY;var translateX;var translateY;var imageWidth;var imageHeight;var scaledWidth;var scaledHeight;var translateMinX;var translateMinY;var translateMaxX;var translateMaxY;var slideWidth;var slideHeight;if(typeof image.touchesStart.x==='undefined'&&e){touchX=e.type==='touchend'?e.changedTouches[0].pageX:e.pageX;touchY=e.type==='touchend'?e.changedTouches[0].pageY:e.pageY;}else{touchX=image.touchesStart.x;touchY=image.touchesStart.y;}
zoom.scale=gesture.$imageWrapEl.attr('data-swiper-zoom')||params.maxRatio;zoom.currentScale=gesture.$imageWrapEl.attr('data-swiper-zoom')||params.maxRatio;if(e){slideWidth=gesture.$slideEl[0].offsetWidth;slideHeight=gesture.$slideEl[0].offsetHeight;offsetX=gesture.$slideEl.offset().left;offsetY=gesture.$slideEl.offset().top;diffX=(offsetX+(slideWidth/2))-touchX;diffY=(offsetY+(slideHeight/2))-touchY;imageWidth=gesture.$imageEl[0].offsetWidth;imageHeight=gesture.$imageEl[0].offsetHeight;scaledWidth=imageWidth*zoom.scale;scaledHeight=imageHeight*zoom.scale;translateMinX=Math.min(((slideWidth/2)-(scaledWidth/2)),0);translateMinY=Math.min(((slideHeight/2)-(scaledHeight/2)),0);translateMaxX=-translateMinX;translateMaxY=-translateMinY;translateX=diffX*zoom.scale;translateY=diffY*zoom.scale;if(translateX<translateMinX){translateX=translateMinX;}
if(translateX>translateMaxX){translateX=translateMaxX;}
if(translateY<translateMinY){translateY=translateMinY;}
if(translateY>translateMaxY){translateY=translateMaxY;}}else{translateX=0;translateY=0;}
gesture.$imageWrapEl.transition(300).transform(("translate3d("+translateX+"px, "+translateY+"px,0)"));gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale("+(zoom.scale)+")"));},out:function out(){var swiper=this;var zoom=swiper.zoom;var params=swiper.params.zoom;var gesture=zoom.gesture;if(!gesture.$slideEl){gesture.$slideEl=swiper.clickedSlide?$(swiper.clickedSlide):swiper.slides.eq(swiper.activeIndex);gesture.$imageEl=gesture.$slideEl.find('img, svg, canvas');gesture.$imageWrapEl=gesture.$imageEl.parent(("."+(params.containerClass)));}
if(!gesture.$imageEl||gesture.$imageEl.length===0){return;}
zoom.scale=1;zoom.currentScale=1;gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');gesture.$slideEl.removeClass((""+(params.zoomedSlideClass)));gesture.$slideEl=undefined;},enable:function enable(){var swiper=this;var zoom=swiper.zoom;if(zoom.enabled){return;}
zoom.enabled=true;var passiveListener=swiper.touchEvents.start==='touchstart'&&Support.passiveListener&&swiper.params.passiveListeners?{passive:true,capture:false}:false;if(Support.gestures){swiper.$wrapperEl.on('gesturestart','.swiper-slide',zoom.onGestureStart,passiveListener);swiper.$wrapperEl.on('gesturechange','.swiper-slide',zoom.onGestureChange,passiveListener);swiper.$wrapperEl.on('gestureend','.swiper-slide',zoom.onGestureEnd,passiveListener);}else if(swiper.touchEvents.start==='touchstart'){swiper.$wrapperEl.on(swiper.touchEvents.start,'.swiper-slide',zoom.onGestureStart,passiveListener);swiper.$wrapperEl.on(swiper.touchEvents.move,'.swiper-slide',zoom.onGestureChange,passiveListener);swiper.$wrapperEl.on(swiper.touchEvents.end,'.swiper-slide',zoom.onGestureEnd,passiveListener);}
swiper.$wrapperEl.on(swiper.touchEvents.move,("."+(swiper.params.zoom.containerClass)),zoom.onTouchMove);},disable:function disable(){var swiper=this;var zoom=swiper.zoom;if(!zoom.enabled){return;}
swiper.zoom.enabled=false;var passiveListener=swiper.touchEvents.start==='touchstart'&&Support.passiveListener&&swiper.params.passiveListeners?{passive:true,capture:false}:false;if(Support.gestures){swiper.$wrapperEl.off('gesturestart','.swiper-slide',zoom.onGestureStart,passiveListener);swiper.$wrapperEl.off('gesturechange','.swiper-slide',zoom.onGestureChange,passiveListener);swiper.$wrapperEl.off('gestureend','.swiper-slide',zoom.onGestureEnd,passiveListener);}else if(swiper.touchEvents.start==='touchstart'){swiper.$wrapperEl.off(swiper.touchEvents.start,'.swiper-slide',zoom.onGestureStart,passiveListener);swiper.$wrapperEl.off(swiper.touchEvents.move,'.swiper-slide',zoom.onGestureChange,passiveListener);swiper.$wrapperEl.off(swiper.touchEvents.end,'.swiper-slide',zoom.onGestureEnd,passiveListener);}
swiper.$wrapperEl.off(swiper.touchEvents.move,("."+(swiper.params.zoom.containerClass)),zoom.onTouchMove);},};var Zoom$1={name:'zoom',params:{zoom:{enabled:false,maxRatio:3,minRatio:1,toggle:true,containerClass:'swiper-zoom-container',zoomedSlideClass:'swiper-slide-zoomed',},},create:function create(){var swiper=this;var zoom={enabled:false,scale:1,currentScale:1,isScaling:false,gesture:{$slideEl:undefined,slideWidth:undefined,slideHeight:undefined,$imageEl:undefined,$imageWrapEl:undefined,maxRatio:3,},image:{isTouched:undefined,isMoved:undefined,currentX:undefined,currentY:undefined,minX:undefined,minY:undefined,maxX:undefined,maxY:undefined,width:undefined,height:undefined,startX:undefined,startY:undefined,touchesStart:{},touchesCurrent:{},},velocity:{x:undefined,y:undefined,prevPositionX:undefined,prevPositionY:undefined,prevTime:undefined,},};('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function(methodName){zoom[methodName]=Zoom[methodName].bind(swiper);});Utils.extend(swiper,{zoom:zoom,});var scale=1;Object.defineProperty(swiper.zoom,'scale',{get:function get(){return scale;},set:function set(value){if(scale!==value){var imageEl=swiper.zoom.gesture.$imageEl?swiper.zoom.gesture.$imageEl[0]:undefined;var slideEl=swiper.zoom.gesture.$slideEl?swiper.zoom.gesture.$slideEl[0]:undefined;swiper.emit('zoomChange',value,imageEl,slideEl);}
scale=value;},});},on:{init:function init(){var swiper=this;if(swiper.params.zoom.enabled){swiper.zoom.enable();}},destroy:function destroy(){var swiper=this;swiper.zoom.disable();},touchStart:function touchStart(e){var swiper=this;if(!swiper.zoom.enabled){return;}
swiper.zoom.onTouchStart(e);},touchEnd:function touchEnd(e){var swiper=this;if(!swiper.zoom.enabled){return;}
swiper.zoom.onTouchEnd(e);},doubleTap:function doubleTap(e){var swiper=this;if(swiper.params.zoom.enabled&&swiper.zoom.enabled&&swiper.params.zoom.toggle){swiper.zoom.toggle(e);}},transitionEnd:function transitionEnd(){var swiper=this;if(swiper.zoom.enabled&&swiper.params.zoom.enabled){swiper.zoom.onTransitionEnd();}},},};var Lazy={loadInSlide:function loadInSlide(index,loadInDuplicate){if(loadInDuplicate===void 0)loadInDuplicate=true;var swiper=this;var params=swiper.params.lazy;if(typeof index==='undefined'){return;}
if(swiper.slides.length===0){return;}
var isVirtual=swiper.virtual&&swiper.params.virtual.enabled;var $slideEl=isVirtual?swiper.$wrapperEl.children(("."+(swiper.params.slideClass)+"[data-swiper-slide-index=\""+index+"\"]")):swiper.slides.eq(index);var $images=$slideEl.find(("."+(params.elementClass)+":not(."+(params.loadedClass)+"):not(."+(params.loadingClass)+")"));if($slideEl.hasClass(params.elementClass)&&!$slideEl.hasClass(params.loadedClass)&&!$slideEl.hasClass(params.loadingClass)){$images=$images.add($slideEl[0]);}
if($images.length===0){return;}
$images.each(function(imageIndex,imageEl){var $imageEl=$(imageEl);$imageEl.addClass(params.loadingClass);var background=$imageEl.attr('data-background');var src=$imageEl.attr('data-src');var srcset=$imageEl.attr('data-srcset');var sizes=$imageEl.attr('data-sizes');swiper.loadImage($imageEl[0],(src||background),srcset,sizes,false,function(){if(typeof swiper==='undefined'||swiper===null||!swiper||(swiper&&!swiper.params)||swiper.destroyed){return;}
if(background){$imageEl.css('background-image',("url(\""+background+"\")"));$imageEl.removeAttr('data-background');}else{if(srcset){$imageEl.attr('srcset',srcset);$imageEl.removeAttr('data-srcset');}
if(sizes){$imageEl.attr('sizes',sizes);$imageEl.removeAttr('data-sizes');}
if(src){$imageEl.attr('src',src);$imageEl.removeAttr('data-src');}}
$imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);$slideEl.find(("."+(params.preloaderClass))).remove();if(swiper.params.loop&&loadInDuplicate){var slideOriginalIndex=$slideEl.attr('data-swiper-slide-index');if($slideEl.hasClass(swiper.params.slideDuplicateClass)){var originalSlide=swiper.$wrapperEl.children(("[data-swiper-slide-index=\""+slideOriginalIndex+"\"]:not(."+(swiper.params.slideDuplicateClass)+")"));swiper.lazy.loadInSlide(originalSlide.index(),false);}else{var duplicatedSlide=swiper.$wrapperEl.children(("."+(swiper.params.slideDuplicateClass)+"[data-swiper-slide-index=\""+slideOriginalIndex+"\"]"));swiper.lazy.loadInSlide(duplicatedSlide.index(),false);}}
swiper.emit('lazyImageReady',$slideEl[0],$imageEl[0]);});swiper.emit('lazyImageLoad',$slideEl[0],$imageEl[0]);});},load:function load(){var swiper=this;var $wrapperEl=swiper.$wrapperEl;var swiperParams=swiper.params;var slides=swiper.slides;var activeIndex=swiper.activeIndex;var isVirtual=swiper.virtual&&swiperParams.virtual.enabled;var params=swiperParams.lazy;var slidesPerView=swiperParams.slidesPerView;if(slidesPerView==='auto'){slidesPerView=0;}
function slideExist(index){if(isVirtual){if($wrapperEl.children(("."+(swiperParams.slideClass)+"[data-swiper-slide-index=\""+index+"\"]")).length){return true;}}else if(slides[index]){return true;}
return false;}
function slideIndex(slideEl){if(isVirtual){return $(slideEl).attr('data-swiper-slide-index');}
return $(slideEl).index();}
if(!swiper.lazy.initialImageLoaded){swiper.lazy.initialImageLoaded=true;}
if(swiper.params.watchSlidesVisibility){$wrapperEl.children(("."+(swiperParams.slideVisibleClass))).each(function(elIndex,slideEl){var index=isVirtual?$(slideEl).attr('data-swiper-slide-index'):$(slideEl).index();swiper.lazy.loadInSlide(index);});}else if(slidesPerView>1){for(var i=activeIndex;i<activeIndex+slidesPerView;i+=1){if(slideExist(i)){swiper.lazy.loadInSlide(i);}}}else{swiper.lazy.loadInSlide(activeIndex);}
if(params.loadPrevNext){if(slidesPerView>1||(params.loadPrevNextAmount&&params.loadPrevNextAmount>1)){var amount=params.loadPrevNextAmount;var spv=slidesPerView;var maxIndex=Math.min(activeIndex+spv+Math.max(amount,spv),slides.length);var minIndex=Math.max(activeIndex-Math.max(spv,amount),0);for(var i$1=activeIndex+slidesPerView;i$1<maxIndex;i$1+=1){if(slideExist(i$1)){swiper.lazy.loadInSlide(i$1);}}
for(var i$2=minIndex;i$2<activeIndex;i$2+=1){if(slideExist(i$2)){swiper.lazy.loadInSlide(i$2);}}}else{var nextSlide=$wrapperEl.children(("."+(swiperParams.slideNextClass)));if(nextSlide.length>0){swiper.lazy.loadInSlide(slideIndex(nextSlide));}
var prevSlide=$wrapperEl.children(("."+(swiperParams.slidePrevClass)));if(prevSlide.length>0){swiper.lazy.loadInSlide(slideIndex(prevSlide));}}}},};var Lazy$1={name:'lazy',params:{lazy:{enabled:false,loadPrevNext:false,loadPrevNextAmount:1,loadOnTransitionStart:false,elementClass:'swiper-lazy',loadingClass:'swiper-lazy-loading',loadedClass:'swiper-lazy-loaded',preloaderClass:'swiper-lazy-preloader',},},create:function create(){var swiper=this;Utils.extend(swiper,{lazy:{initialImageLoaded:false,load:Lazy.load.bind(swiper),loadInSlide:Lazy.loadInSlide.bind(swiper),},});},on:{beforeInit:function beforeInit(){var swiper=this;if(swiper.params.lazy.enabled&&swiper.params.preloadImages){swiper.params.preloadImages=false;}},init:function init(){var swiper=this;if(swiper.params.lazy.enabled&&!swiper.params.loop&&swiper.params.initialSlide===0){swiper.lazy.load();}},scroll:function scroll(){var swiper=this;if(swiper.params.freeMode&&!swiper.params.freeModeSticky){swiper.lazy.load();}},resize:function resize(){var swiper=this;if(swiper.params.lazy.enabled){swiper.lazy.load();}},scrollbarDragMove:function scrollbarDragMove(){var swiper=this;if(swiper.params.lazy.enabled){swiper.lazy.load();}},transitionStart:function transitionStart(){var swiper=this;if(swiper.params.lazy.enabled){if(swiper.params.lazy.loadOnTransitionStart||(!swiper.params.lazy.loadOnTransitionStart&&!swiper.lazy.initialImageLoaded)){swiper.lazy.load();}}},transitionEnd:function transitionEnd(){var swiper=this;if(swiper.params.lazy.enabled&&!swiper.params.lazy.loadOnTransitionStart){swiper.lazy.load();}},},};var Controller={LinearSpline:function LinearSpline(x,y){var binarySearch=(function search(){var maxIndex;var minIndex;var guess;return function(array,val){minIndex=-1;maxIndex=array.length;while(maxIndex-minIndex>1){guess=maxIndex+minIndex>>1;if(array[guess]<=val){minIndex=guess;}else{maxIndex=guess;}}
return maxIndex;};}());this.x=x;this.y=y;this.lastIndex=x.length-1;var i1;var i3;this.interpolate=function interpolate(x2){if(!x2){return 0;}
i3=binarySearch(this.x,x2);i1=i3-1;return(((x2-this.x[i1])*(this.y[i3]-this.y[i1]))/(this.x[i3]-this.x[i1]))+this.y[i1];};return this;},getInterpolateFunction:function getInterpolateFunction(c){var swiper=this;if(!swiper.controller.spline){swiper.controller.spline=swiper.params.loop?new Controller.LinearSpline(swiper.slidesGrid,c.slidesGrid):new Controller.LinearSpline(swiper.snapGrid,c.snapGrid);}},setTranslate:function setTranslate(setTranslate$1,byController){var swiper=this;var controlled=swiper.controller.control;var multiplier;var controlledTranslate;function setControlledTranslate(c){var translate=swiper.rtlTranslate?-swiper.translate:swiper.translate;if(swiper.params.controller.by==='slide'){swiper.controller.getInterpolateFunction(c);controlledTranslate=-swiper.controller.spline.interpolate(-translate);}
if(!controlledTranslate||swiper.params.controller.by==='container'){multiplier=(c.maxTranslate()-c.minTranslate())/(swiper.maxTranslate()-swiper.minTranslate());controlledTranslate=((translate-swiper.minTranslate())*multiplier)+c.minTranslate();}
if(swiper.params.controller.inverse){controlledTranslate=c.maxTranslate()-controlledTranslate;}
c.updateProgress(controlledTranslate);c.setTranslate(controlledTranslate,swiper);c.updateActiveIndex();c.updateSlidesClasses();}
if(Array.isArray(controlled)){for(var i=0;i<controlled.length;i+=1){if(controlled[i]!==byController&&controlled[i]instanceof Swiper){setControlledTranslate(controlled[i]);}}}else if(controlled instanceof Swiper&&byController!==controlled){setControlledTranslate(controlled);}},setTransition:function setTransition(duration,byController){var swiper=this;var controlled=swiper.controller.control;var i;function setControlledTransition(c){c.setTransition(duration,swiper);if(duration!==0){c.transitionStart();if(c.params.autoHeight){Utils.nextTick(function(){c.updateAutoHeight();});}
c.$wrapperEl.transitionEnd(function(){if(!controlled){return;}
if(c.params.loop&&swiper.params.controller.by==='slide'){c.loopFix();}
c.transitionEnd();});}}
if(Array.isArray(controlled)){for(i=0;i<controlled.length;i+=1){if(controlled[i]!==byController&&controlled[i]instanceof Swiper){setControlledTransition(controlled[i]);}}}else if(controlled instanceof Swiper&&byController!==controlled){setControlledTransition(controlled);}},};var Controller$1={name:'controller',params:{controller:{control:undefined,inverse:false,by:'slide',},},create:function create(){var swiper=this;Utils.extend(swiper,{controller:{control:swiper.params.controller.control,getInterpolateFunction:Controller.getInterpolateFunction.bind(swiper),setTranslate:Controller.setTranslate.bind(swiper),setTransition:Controller.setTransition.bind(swiper),},});},on:{update:function update(){var swiper=this;if(!swiper.controller.control){return;}
if(swiper.controller.spline){swiper.controller.spline=undefined;delete swiper.controller.spline;}},resize:function resize(){var swiper=this;if(!swiper.controller.control){return;}
if(swiper.controller.spline){swiper.controller.spline=undefined;delete swiper.controller.spline;}},observerUpdate:function observerUpdate(){var swiper=this;if(!swiper.controller.control){return;}
if(swiper.controller.spline){swiper.controller.spline=undefined;delete swiper.controller.spline;}},setTranslate:function setTranslate(translate,byController){var swiper=this;if(!swiper.controller.control){return;}
swiper.controller.setTranslate(translate,byController);},setTransition:function setTransition(duration,byController){var swiper=this;if(!swiper.controller.control){return;}
swiper.controller.setTransition(duration,byController);},},};var a11y={makeElFocusable:function makeElFocusable($el){$el.attr('tabIndex','0');return $el;},addElRole:function addElRole($el,role){$el.attr('role',role);return $el;},addElLabel:function addElLabel($el,label){$el.attr('aria-label',label);return $el;},disableEl:function disableEl($el){$el.attr('aria-disabled',true);return $el;},enableEl:function enableEl($el){$el.attr('aria-disabled',false);return $el;},onEnterKey:function onEnterKey(e){var swiper=this;var params=swiper.params.a11y;if(e.keyCode!==13){return;}
var $targetEl=$(e.target);if(swiper.navigation&&swiper.navigation.$nextEl&&$targetEl.is(swiper.navigation.$nextEl)){if(!(swiper.isEnd&&!swiper.params.loop)){swiper.slideNext();}
if(swiper.isEnd){swiper.a11y.notify(params.lastSlideMessage);}else{swiper.a11y.notify(params.nextSlideMessage);}}
if(swiper.navigation&&swiper.navigation.$prevEl&&$targetEl.is(swiper.navigation.$prevEl)){if(!(swiper.isBeginning&&!swiper.params.loop)){swiper.slidePrev();}
if(swiper.isBeginning){swiper.a11y.notify(params.firstSlideMessage);}else{swiper.a11y.notify(params.prevSlideMessage);}}
if(swiper.pagination&&$targetEl.is(("."+(swiper.params.pagination.bulletClass)))){$targetEl[0].click();}},notify:function notify(message){var swiper=this;var notification=swiper.a11y.liveRegion;if(notification.length===0){return;}
notification.html('');notification.html(message);},updateNavigation:function updateNavigation(){var swiper=this;if(swiper.params.loop){return;}
var ref=swiper.navigation;var $nextEl=ref.$nextEl;var $prevEl=ref.$prevEl;if($prevEl&&$prevEl.length>0){if(swiper.isBeginning){swiper.a11y.disableEl($prevEl);}else{swiper.a11y.enableEl($prevEl);}}
if($nextEl&&$nextEl.length>0){if(swiper.isEnd){swiper.a11y.disableEl($nextEl);}else{swiper.a11y.enableEl($nextEl);}}},updatePagination:function updatePagination(){var swiper=this;var params=swiper.params.a11y;if(swiper.pagination&&swiper.params.pagination.clickable&&swiper.pagination.bullets&&swiper.pagination.bullets.length){swiper.pagination.bullets.each(function(bulletIndex,bulletEl){var $bulletEl=$(bulletEl);swiper.a11y.makeElFocusable($bulletEl);swiper.a11y.addElRole($bulletEl,'button');swiper.a11y.addElLabel($bulletEl,params.paginationBulletMessage.replace(/{{index}}/,$bulletEl.index()+1));});}},init:function init(){var swiper=this;swiper.$el.append(swiper.a11y.liveRegion);var params=swiper.params.a11y;var $nextEl;var $prevEl;if(swiper.navigation&&swiper.navigation.$nextEl){$nextEl=swiper.navigation.$nextEl;}
if(swiper.navigation&&swiper.navigation.$prevEl){$prevEl=swiper.navigation.$prevEl;}
if($nextEl){swiper.a11y.makeElFocusable($nextEl);swiper.a11y.addElRole($nextEl,'button');swiper.a11y.addElLabel($nextEl,params.nextSlideMessage);$nextEl.on('keydown',swiper.a11y.onEnterKey);}
if($prevEl){swiper.a11y.makeElFocusable($prevEl);swiper.a11y.addElRole($prevEl,'button');swiper.a11y.addElLabel($prevEl,params.prevSlideMessage);$prevEl.on('keydown',swiper.a11y.onEnterKey);}
if(swiper.pagination&&swiper.params.pagination.clickable&&swiper.pagination.bullets&&swiper.pagination.bullets.length){swiper.pagination.$el.on('keydown',("."+(swiper.params.pagination.bulletClass)),swiper.a11y.onEnterKey);}},destroy:function destroy(){var swiper=this;if(swiper.a11y.liveRegion&&swiper.a11y.liveRegion.length>0){swiper.a11y.liveRegion.remove();}
var $nextEl;var $prevEl;if(swiper.navigation&&swiper.navigation.$nextEl){$nextEl=swiper.navigation.$nextEl;}
if(swiper.navigation&&swiper.navigation.$prevEl){$prevEl=swiper.navigation.$prevEl;}
if($nextEl){$nextEl.off('keydown',swiper.a11y.onEnterKey);}
if($prevEl){$prevEl.off('keydown',swiper.a11y.onEnterKey);}
if(swiper.pagination&&swiper.params.pagination.clickable&&swiper.pagination.bullets&&swiper.pagination.bullets.length){swiper.pagination.$el.off('keydown',("."+(swiper.params.pagination.bulletClass)),swiper.a11y.onEnterKey);}},};var A11y={name:'a11y',params:{a11y:{enabled:true,notificationClass:'swiper-notification',prevSlideMessage:'Previous slide',nextSlideMessage:'Next slide',firstSlideMessage:'This is the first slide',lastSlideMessage:'This is the last slide',paginationBulletMessage:'Go to slide {{index}}',},},create:function create(){var swiper=this;Utils.extend(swiper,{a11y:{liveRegion:$(("<span class=\""+(swiper.params.a11y.notificationClass)+"\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),},});Object.keys(a11y).forEach(function(methodName){swiper.a11y[methodName]=a11y[methodName].bind(swiper);});},on:{init:function init(){var swiper=this;if(!swiper.params.a11y.enabled){return;}
swiper.a11y.init();swiper.a11y.updateNavigation();},toEdge:function toEdge(){var swiper=this;if(!swiper.params.a11y.enabled){return;}
swiper.a11y.updateNavigation();},fromEdge:function fromEdge(){var swiper=this;if(!swiper.params.a11y.enabled){return;}
swiper.a11y.updateNavigation();},paginationUpdate:function paginationUpdate(){var swiper=this;if(!swiper.params.a11y.enabled){return;}
swiper.a11y.updatePagination();},destroy:function destroy(){var swiper=this;if(!swiper.params.a11y.enabled){return;}
swiper.a11y.destroy();},},};var History={init:function init(){var swiper=this;if(!swiper.params.history){return;}
if(!win.history||!win.history.pushState){swiper.params.history.enabled=false;swiper.params.hashNavigation.enabled=true;return;}
var history=swiper.history;history.initialized=true;history.paths=History.getPathValues();if(!history.paths.key&&!history.paths.value){return;}
history.scrollToSlide(0,history.paths.value,swiper.params.runCallbacksOnInit);if(!swiper.params.history.replaceState){win.addEventListener('popstate',swiper.history.setHistoryPopState);}},destroy:function destroy(){var swiper=this;if(!swiper.params.history.replaceState){win.removeEventListener('popstate',swiper.history.setHistoryPopState);}},setHistoryPopState:function setHistoryPopState(){var swiper=this;swiper.history.paths=History.getPathValues();swiper.history.scrollToSlide(swiper.params.speed,swiper.history.paths.value,false);},getPathValues:function getPathValues(){var pathArray=win.location.pathname.slice(1).split('/').filter(function(part){return part!=='';});var total=pathArray.length;var key=pathArray[total-2];var value=pathArray[total-1];return{key:key,value:value};},setHistory:function setHistory(key,index){var swiper=this;if(!swiper.history.initialized||!swiper.params.history.enabled){return;}
var slide=swiper.slides.eq(index);var value=History.slugify(slide.attr('data-history'));if(!win.location.pathname.includes(key)){value=key+"/"+value;}
var currentState=win.history.state;if(currentState&&currentState.value===value){return;}
if(swiper.params.history.replaceState){win.history.replaceState({value:value},null,value);}else{win.history.pushState({value:value},null,value);}},slugify:function slugify(text){return text.toString().replace(/\s+/g,'-').replace(/[^\w-]+/g,'').replace(/--+/g,'-').replace(/^-+/,'').replace(/-+$/,'');},scrollToSlide:function scrollToSlide(speed,value,runCallbacks){var swiper=this;if(value){for(var i=0,length=swiper.slides.length;i<length;i+=1){var slide=swiper.slides.eq(i);var slideHistory=History.slugify(slide.attr('data-history'));if(slideHistory===value&&!slide.hasClass(swiper.params.slideDuplicateClass)){var index=slide.index();swiper.slideTo(index,speed,runCallbacks);}}}else{swiper.slideTo(0,speed,runCallbacks);}},};var History$1={name:'history',params:{history:{enabled:false,replaceState:false,key:'slides',},},create:function create(){var swiper=this;Utils.extend(swiper,{history:{init:History.init.bind(swiper),setHistory:History.setHistory.bind(swiper),setHistoryPopState:History.setHistoryPopState.bind(swiper),scrollToSlide:History.scrollToSlide.bind(swiper),destroy:History.destroy.bind(swiper),},});},on:{init:function init(){var swiper=this;if(swiper.params.history.enabled){swiper.history.init();}},destroy:function destroy(){var swiper=this;if(swiper.params.history.enabled){swiper.history.destroy();}},transitionEnd:function transitionEnd(){var swiper=this;if(swiper.history.initialized){swiper.history.setHistory(swiper.params.history.key,swiper.activeIndex);}},},};var HashNavigation={onHashCange:function onHashCange(){var swiper=this;var newHash=doc.location.hash.replace('#','');var activeSlideHash=swiper.slides.eq(swiper.activeIndex).attr('data-hash');if(newHash!==activeSlideHash){var newIndex=swiper.$wrapperEl.children(("."+(swiper.params.slideClass)+"[data-hash=\""+newHash+"\"]")).index();if(typeof newIndex==='undefined'){return;}
swiper.slideTo(newIndex);}},setHash:function setHash(){var swiper=this;if(!swiper.hashNavigation.initialized||!swiper.params.hashNavigation.enabled){return;}
if(swiper.params.hashNavigation.replaceState&&win.history&&win.history.replaceState){win.history.replaceState(null,null,(("#"+(swiper.slides.eq(swiper.activeIndex).attr('data-hash')))||''));}else{var slide=swiper.slides.eq(swiper.activeIndex);var hash=slide.attr('data-hash')||slide.attr('data-history');doc.location.hash=hash||'';}},init:function init(){var swiper=this;if(!swiper.params.hashNavigation.enabled||(swiper.params.history&&swiper.params.history.enabled)){return;}
swiper.hashNavigation.initialized=true;var hash=doc.location.hash.replace('#','');if(hash){var speed=0;for(var i=0,length=swiper.slides.length;i<length;i+=1){var slide=swiper.slides.eq(i);var slideHash=slide.attr('data-hash')||slide.attr('data-history');if(slideHash===hash&&!slide.hasClass(swiper.params.slideDuplicateClass)){var index=slide.index();swiper.slideTo(index,speed,swiper.params.runCallbacksOnInit,true);}}}
if(swiper.params.hashNavigation.watchState){$(win).on('hashchange',swiper.hashNavigation.onHashCange);}},destroy:function destroy(){var swiper=this;if(swiper.params.hashNavigation.watchState){$(win).off('hashchange',swiper.hashNavigation.onHashCange);}},};var HashNavigation$1={name:'hash-navigation',params:{hashNavigation:{enabled:false,replaceState:false,watchState:false,},},create:function create(){var swiper=this;Utils.extend(swiper,{hashNavigation:{initialized:false,init:HashNavigation.init.bind(swiper),destroy:HashNavigation.destroy.bind(swiper),setHash:HashNavigation.setHash.bind(swiper),onHashCange:HashNavigation.onHashCange.bind(swiper),},});},on:{init:function init(){var swiper=this;if(swiper.params.hashNavigation.enabled){swiper.hashNavigation.init();}},destroy:function destroy(){var swiper=this;if(swiper.params.hashNavigation.enabled){swiper.hashNavigation.destroy();}},transitionEnd:function transitionEnd(){var swiper=this;if(swiper.hashNavigation.initialized){swiper.hashNavigation.setHash();}},},};var Autoplay={run:function run(){var swiper=this;var $activeSlideEl=swiper.slides.eq(swiper.activeIndex);var delay=swiper.params.autoplay.delay;if($activeSlideEl.attr('data-swiper-autoplay')){delay=$activeSlideEl.attr('data-swiper-autoplay')||swiper.params.autoplay.delay;}
swiper.autoplay.timeout=Utils.nextTick(function(){if(swiper.params.autoplay.reverseDirection){if(swiper.params.loop){swiper.loopFix();swiper.slidePrev(swiper.params.speed,true,true);swiper.emit('autoplay');}else if(!swiper.isBeginning){swiper.slidePrev(swiper.params.speed,true,true);swiper.emit('autoplay');}else if(!swiper.params.autoplay.stopOnLastSlide){swiper.slideTo(swiper.slides.length-1,swiper.params.speed,true,true);swiper.emit('autoplay');}else{swiper.autoplay.stop();}}else if(swiper.params.loop){swiper.loopFix();swiper.slideNext(swiper.params.speed,true,true);swiper.emit('autoplay');}else if(!swiper.isEnd){swiper.slideNext(swiper.params.speed,true,true);swiper.emit('autoplay');}else if(!swiper.params.autoplay.stopOnLastSlide){swiper.slideTo(0,swiper.params.speed,true,true);swiper.emit('autoplay');}else{swiper.autoplay.stop();}},delay);},start:function start(){var swiper=this;if(typeof swiper.autoplay.timeout!=='undefined'){return false;}
if(swiper.autoplay.running){return false;}
swiper.autoplay.running=true;swiper.emit('autoplayStart');swiper.autoplay.run();return true;},stop:function stop(){var swiper=this;if(!swiper.autoplay.running){return false;}
if(typeof swiper.autoplay.timeout==='undefined'){return false;}
if(swiper.autoplay.timeout){clearTimeout(swiper.autoplay.timeout);swiper.autoplay.timeout=undefined;}
swiper.autoplay.running=false;swiper.emit('autoplayStop');return true;},pause:function pause(speed){var swiper=this;if(!swiper.autoplay.running){return;}
if(swiper.autoplay.paused){return;}
if(swiper.autoplay.timeout){clearTimeout(swiper.autoplay.timeout);}
swiper.autoplay.paused=true;if(speed===0||!swiper.params.autoplay.waitForTransition){swiper.autoplay.paused=false;swiper.autoplay.run();}else{swiper.$wrapperEl[0].addEventListener('transitionend',swiper.autoplay.onTransitionEnd);swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd',swiper.autoplay.onTransitionEnd);}},};var Autoplay$1={name:'autoplay',params:{autoplay:{enabled:false,delay:3000,waitForTransition:true,disableOnInteraction:true,stopOnLastSlide:false,reverseDirection:false,},},create:function create(){var swiper=this;Utils.extend(swiper,{autoplay:{running:false,paused:false,run:Autoplay.run.bind(swiper),start:Autoplay.start.bind(swiper),stop:Autoplay.stop.bind(swiper),pause:Autoplay.pause.bind(swiper),onTransitionEnd:function onTransitionEnd(e){if(!swiper||swiper.destroyed||!swiper.$wrapperEl){return;}
if(e.target!==this){return;}
swiper.$wrapperEl[0].removeEventListener('transitionend',swiper.autoplay.onTransitionEnd);swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd',swiper.autoplay.onTransitionEnd);swiper.autoplay.paused=false;if(!swiper.autoplay.running){swiper.autoplay.stop();}else{swiper.autoplay.run();}},},});},on:{init:function init(){var swiper=this;if(swiper.params.autoplay.enabled){swiper.autoplay.start();}},beforeTransitionStart:function beforeTransitionStart(speed,internal){var swiper=this;if(swiper.autoplay.running){if(internal||!swiper.params.autoplay.disableOnInteraction){swiper.autoplay.pause(speed);}else{swiper.autoplay.stop();}}},sliderFirstMove:function sliderFirstMove(){var swiper=this;if(swiper.autoplay.running){if(swiper.params.autoplay.disableOnInteraction){swiper.autoplay.stop();}else{swiper.autoplay.pause();}}},destroy:function destroy(){var swiper=this;if(swiper.autoplay.running){swiper.autoplay.stop();}},},};var Fade={setTranslate:function setTranslate(){var swiper=this;var slides=swiper.slides;for(var i=0;i<slides.length;i+=1){var $slideEl=swiper.slides.eq(i);var offset=$slideEl[0].swiperSlideOffset;var tx=-offset;if(!swiper.params.virtualTranslate){tx-=swiper.translate;}
var ty=0;if(!swiper.isHorizontal()){ty=tx;tx=0;}
var slideOpacity=swiper.params.fadeEffect.crossFade?Math.max(1-Math.abs($slideEl[0].progress),0):1+Math.min(Math.max($slideEl[0].progress,-1),0);$slideEl.css({opacity:slideOpacity,}).transform(("translate3d("+tx+"px, "+ty+"px, 0px)"));}},setTransition:function setTransition(duration){var swiper=this;var slides=swiper.slides;var $wrapperEl=swiper.$wrapperEl;slides.transition(duration);if(swiper.params.virtualTranslate&&duration!==0){var eventTriggered=false;slides.transitionEnd(function(){if(eventTriggered){return;}
if(!swiper||swiper.destroyed){return;}
eventTriggered=true;swiper.animating=false;var triggerEvents=['webkitTransitionEnd','transitionend'];for(var i=0;i<triggerEvents.length;i+=1){$wrapperEl.trigger(triggerEvents[i]);}});}},};var EffectFade={name:'effect-fade',params:{fadeEffect:{crossFade:false,},},create:function create(){var swiper=this;Utils.extend(swiper,{fadeEffect:{setTranslate:Fade.setTranslate.bind(swiper),setTransition:Fade.setTransition.bind(swiper),},});},on:{beforeInit:function beforeInit(){var swiper=this;if(swiper.params.effect!=='fade'){return;}
swiper.classNames.push(((swiper.params.containerModifierClass)+"fade"));var overwriteParams={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:true,spaceBetween:0,virtualTranslate:true,};Utils.extend(swiper.params,overwriteParams);Utils.extend(swiper.originalParams,overwriteParams);},setTranslate:function setTranslate(){var swiper=this;if(swiper.params.effect!=='fade'){return;}
swiper.fadeEffect.setTranslate();},setTransition:function setTransition(duration){var swiper=this;if(swiper.params.effect!=='fade'){return;}
swiper.fadeEffect.setTransition(duration);},},};var Cube={setTranslate:function setTranslate(){var swiper=this;var $el=swiper.$el;var $wrapperEl=swiper.$wrapperEl;var slides=swiper.slides;var swiperWidth=swiper.width;var swiperHeight=swiper.height;var rtl=swiper.rtlTranslate;var swiperSize=swiper.size;var params=swiper.params.cubeEffect;var isHorizontal=swiper.isHorizontal();var isVirtual=swiper.virtual&&swiper.params.virtual.enabled;var wrapperRotate=0;var $cubeShadowEl;if(params.shadow){if(isHorizontal){$cubeShadowEl=$wrapperEl.find('.swiper-cube-shadow');if($cubeShadowEl.length===0){$cubeShadowEl=$('<div class="swiper-cube-shadow"></div>');$wrapperEl.append($cubeShadowEl);}
$cubeShadowEl.css({height:(swiperWidth+"px")});}else{$cubeShadowEl=$el.find('.swiper-cube-shadow');if($cubeShadowEl.length===0){$cubeShadowEl=$('<div class="swiper-cube-shadow"></div>');$el.append($cubeShadowEl);}}}
for(var i=0;i<slides.length;i+=1){var $slideEl=slides.eq(i);var slideIndex=i;if(isVirtual){slideIndex=parseInt($slideEl.attr('data-swiper-slide-index'),10);}
var slideAngle=slideIndex*90;var round=Math.floor(slideAngle/360);if(rtl){slideAngle=-slideAngle;round=Math.floor(-slideAngle/360);}
var progress=Math.max(Math.min($slideEl[0].progress,1),-1);var tx=0;var ty=0;var tz=0;if(slideIndex%4===0){tx=-round*4*swiperSize;tz=0;}else if((slideIndex-1)%4===0){tx=0;tz=-round*4*swiperSize;}else if((slideIndex-2)%4===0){tx=swiperSize+(round*4*swiperSize);tz=swiperSize;}else if((slideIndex-3)%4===0){tx=-swiperSize;tz=(3*swiperSize)+(swiperSize*4*round);}
if(rtl){tx=-tx;}
if(!isHorizontal){ty=tx;tx=0;}
var transform="rotateX("+(isHorizontal?0:-slideAngle)+"deg) rotateY("+(isHorizontal?slideAngle:0)+"deg) translate3d("+tx+"px, "+ty+"px, "+tz+"px)";if(progress<=1&&progress>-1){wrapperRotate=(slideIndex*90)+(progress*90);if(rtl){wrapperRotate=(-slideIndex*90)-(progress*90);}}
$slideEl.transform(transform);if(params.slideShadows){var shadowBefore=isHorizontal?$slideEl.find('.swiper-slide-shadow-left'):$slideEl.find('.swiper-slide-shadow-top');var shadowAfter=isHorizontal?$slideEl.find('.swiper-slide-shadow-right'):$slideEl.find('.swiper-slide-shadow-bottom');if(shadowBefore.length===0){shadowBefore=$(("<div class=\"swiper-slide-shadow-"+(isHorizontal?'left':'top')+"\"></div>"));$slideEl.append(shadowBefore);}
if(shadowAfter.length===0){shadowAfter=$(("<div class=\"swiper-slide-shadow-"+(isHorizontal?'right':'bottom')+"\"></div>"));$slideEl.append(shadowAfter);}
if(shadowBefore.length){shadowBefore[0].style.opacity=Math.max(-progress,0);}
if(shadowAfter.length){shadowAfter[0].style.opacity=Math.max(progress,0);}}}
$wrapperEl.css({'-webkit-transform-origin':("50% 50% -"+(swiperSize/2)+"px"),'-moz-transform-origin':("50% 50% -"+(swiperSize/2)+"px"),'-ms-transform-origin':("50% 50% -"+(swiperSize/2)+"px"),'transform-origin':("50% 50% -"+(swiperSize/2)+"px"),});if(params.shadow){if(isHorizontal){$cubeShadowEl.transform(("translate3d(0px, "+((swiperWidth/2)+params.shadowOffset)+"px, "+(-swiperWidth/2)+"px) rotateX(90deg) rotateZ(0deg) scale("+(params.shadowScale)+")"));}else{var shadowAngle=Math.abs(wrapperRotate)-(Math.floor(Math.abs(wrapperRotate)/90)*90);var multiplier=1.5-((Math.sin((shadowAngle*2*Math.PI)/360)/2)
+(Math.cos((shadowAngle*2*Math.PI)/360)/2));var scale1=params.shadowScale;var scale2=params.shadowScale/multiplier;var offset=params.shadowOffset;$cubeShadowEl.transform(("scale3d("+scale1+", 1, "+scale2+") translate3d(0px, "+((swiperHeight/2)+offset)+"px, "+(-swiperHeight/2/scale2)+"px) rotateX(-90deg)"));}}
var zFactor=(Browser.isSafari||Browser.isUiWebView)?(-swiperSize/2):0;$wrapperEl.transform(("translate3d(0px,0,"+zFactor+"px) rotateX("+(swiper.isHorizontal()?0:wrapperRotate)+"deg) rotateY("+(swiper.isHorizontal()?-wrapperRotate:0)+"deg)"));},setTransition:function setTransition(duration){var swiper=this;var $el=swiper.$el;var slides=swiper.slides;slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);if(swiper.params.cubeEffect.shadow&&!swiper.isHorizontal()){$el.find('.swiper-cube-shadow').transition(duration);}},};var EffectCube={name:'effect-cube',params:{cubeEffect:{slideShadows:true,shadow:true,shadowOffset:20,shadowScale:0.94,},},create:function create(){var swiper=this;Utils.extend(swiper,{cubeEffect:{setTranslate:Cube.setTranslate.bind(swiper),setTransition:Cube.setTransition.bind(swiper),},});},on:{beforeInit:function beforeInit(){var swiper=this;if(swiper.params.effect!=='cube'){return;}
swiper.classNames.push(((swiper.params.containerModifierClass)+"cube"));swiper.classNames.push(((swiper.params.containerModifierClass)+"3d"));var overwriteParams={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:true,resistanceRatio:0,spaceBetween:0,centeredSlides:false,virtualTranslate:true,};Utils.extend(swiper.params,overwriteParams);Utils.extend(swiper.originalParams,overwriteParams);},setTranslate:function setTranslate(){var swiper=this;if(swiper.params.effect!=='cube'){return;}
swiper.cubeEffect.setTranslate();},setTransition:function setTransition(duration){var swiper=this;if(swiper.params.effect!=='cube'){return;}
swiper.cubeEffect.setTransition(duration);},},};var Flip={setTranslate:function setTranslate(){var swiper=this;var slides=swiper.slides;var rtl=swiper.rtlTranslate;for(var i=0;i<slides.length;i+=1){var $slideEl=slides.eq(i);var progress=$slideEl[0].progress;if(swiper.params.flipEffect.limitRotation){progress=Math.max(Math.min($slideEl[0].progress,1),-1);}
var offset=$slideEl[0].swiperSlideOffset;var rotate=-180*progress;var rotateY=rotate;var rotateX=0;var tx=-offset;var ty=0;if(!swiper.isHorizontal()){ty=tx;tx=0;rotateX=-rotateY;rotateY=0;}else if(rtl){rotateY=-rotateY;}
$slideEl[0].style.zIndex=-Math.abs(Math.round(progress))+slides.length;if(swiper.params.flipEffect.slideShadows){var shadowBefore=swiper.isHorizontal()?$slideEl.find('.swiper-slide-shadow-left'):$slideEl.find('.swiper-slide-shadow-top');var shadowAfter=swiper.isHorizontal()?$slideEl.find('.swiper-slide-shadow-right'):$slideEl.find('.swiper-slide-shadow-bottom');if(shadowBefore.length===0){shadowBefore=$(("<div class=\"swiper-slide-shadow-"+(swiper.isHorizontal()?'left':'top')+"\"></div>"));$slideEl.append(shadowBefore);}
if(shadowAfter.length===0){shadowAfter=$(("<div class=\"swiper-slide-shadow-"+(swiper.isHorizontal()?'right':'bottom')+"\"></div>"));$slideEl.append(shadowAfter);}
if(shadowBefore.length){shadowBefore[0].style.opacity=Math.max(-progress,0);}
if(shadowAfter.length){shadowAfter[0].style.opacity=Math.max(progress,0);}}
$slideEl.transform(("translate3d("+tx+"px, "+ty+"px, 0px) rotateX("+rotateX+"deg) rotateY("+rotateY+"deg)"));}},setTransition:function setTransition(duration){var swiper=this;var slides=swiper.slides;var activeIndex=swiper.activeIndex;var $wrapperEl=swiper.$wrapperEl;slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);if(swiper.params.virtualTranslate&&duration!==0){var eventTriggered=false;slides.eq(activeIndex).transitionEnd(function onTransitionEnd(){if(eventTriggered){return;}
if(!swiper||swiper.destroyed){return;}
eventTriggered=true;swiper.animating=false;var triggerEvents=['webkitTransitionEnd','transitionend'];for(var i=0;i<triggerEvents.length;i+=1){$wrapperEl.trigger(triggerEvents[i]);}});}},};var EffectFlip={name:'effect-flip',params:{flipEffect:{slideShadows:true,limitRotation:true,},},create:function create(){var swiper=this;Utils.extend(swiper,{flipEffect:{setTranslate:Flip.setTranslate.bind(swiper),setTransition:Flip.setTransition.bind(swiper),},});},on:{beforeInit:function beforeInit(){var swiper=this;if(swiper.params.effect!=='flip'){return;}
swiper.classNames.push(((swiper.params.containerModifierClass)+"flip"));swiper.classNames.push(((swiper.params.containerModifierClass)+"3d"));var overwriteParams={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:true,spaceBetween:0,virtualTranslate:true,};Utils.extend(swiper.params,overwriteParams);Utils.extend(swiper.originalParams,overwriteParams);},setTranslate:function setTranslate(){var swiper=this;if(swiper.params.effect!=='flip'){return;}
swiper.flipEffect.setTranslate();},setTransition:function setTransition(duration){var swiper=this;if(swiper.params.effect!=='flip'){return;}
swiper.flipEffect.setTransition(duration);},},};var Coverflow={setTranslate:function setTranslate(){var swiper=this;var swiperWidth=swiper.width;var swiperHeight=swiper.height;var slides=swiper.slides;var $wrapperEl=swiper.$wrapperEl;var slidesSizesGrid=swiper.slidesSizesGrid;var params=swiper.params.coverflowEffect;var isHorizontal=swiper.isHorizontal();var transform=swiper.translate;var center=isHorizontal?-transform+(swiperWidth/2):-transform+(swiperHeight/2);var rotate=isHorizontal?params.rotate:-params.rotate;var translate=params.depth;for(var i=0,length=slides.length;i<length;i+=1){var $slideEl=slides.eq(i);var slideSize=slidesSizesGrid[i];var slideOffset=$slideEl[0].swiperSlideOffset;var offsetMultiplier=((center-slideOffset-(slideSize/2))/slideSize)*params.modifier;var rotateY=isHorizontal?rotate*offsetMultiplier:0;var rotateX=isHorizontal?0:rotate*offsetMultiplier;var translateZ=-translate*Math.abs(offsetMultiplier);var translateY=isHorizontal?0:params.stretch*(offsetMultiplier);var translateX=isHorizontal?params.stretch*(offsetMultiplier):0;if(Math.abs(translateX)<0.001){translateX=0;}
if(Math.abs(translateY)<0.001){translateY=0;}
if(Math.abs(translateZ)<0.001){translateZ=0;}
if(Math.abs(rotateY)<0.001){rotateY=0;}
if(Math.abs(rotateX)<0.001){rotateX=0;}
var slideTransform="translate3d("+translateX+"px,"+translateY+"px,"+translateZ+"px)  rotateX("+rotateX+"deg) rotateY("+rotateY+"deg)";$slideEl.transform(slideTransform);$slideEl[0].style.zIndex=-Math.abs(Math.round(offsetMultiplier))+1;if(params.slideShadows){var $shadowBeforeEl=isHorizontal?$slideEl.find('.swiper-slide-shadow-left'):$slideEl.find('.swiper-slide-shadow-top');var $shadowAfterEl=isHorizontal?$slideEl.find('.swiper-slide-shadow-right'):$slideEl.find('.swiper-slide-shadow-bottom');if($shadowBeforeEl.length===0){$shadowBeforeEl=$(("<div class=\"swiper-slide-shadow-"+(isHorizontal?'left':'top')+"\"></div>"));$slideEl.append($shadowBeforeEl);}
if($shadowAfterEl.length===0){$shadowAfterEl=$(("<div class=\"swiper-slide-shadow-"+(isHorizontal?'right':'bottom')+"\"></div>"));$slideEl.append($shadowAfterEl);}
if($shadowBeforeEl.length){$shadowBeforeEl[0].style.opacity=offsetMultiplier>0?offsetMultiplier:0;}
if($shadowAfterEl.length){$shadowAfterEl[0].style.opacity=(-offsetMultiplier)>0?-offsetMultiplier:0;}}}
if(Support.pointerEvents||Support.prefixedPointerEvents){var ws=$wrapperEl[0].style;ws.perspectiveOrigin=center+"px 50%";}},setTransition:function setTransition(duration){var swiper=this;swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);},};var EffectCoverflow={name:'effect-coverflow',params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true,},},create:function create(){var swiper=this;Utils.extend(swiper,{coverflowEffect:{setTranslate:Coverflow.setTranslate.bind(swiper),setTransition:Coverflow.setTransition.bind(swiper),},});},on:{beforeInit:function beforeInit(){var swiper=this;if(swiper.params.effect!=='coverflow'){return;}
swiper.classNames.push(((swiper.params.containerModifierClass)+"coverflow"));swiper.classNames.push(((swiper.params.containerModifierClass)+"3d"));swiper.params.watchSlidesProgress=true;swiper.originalParams.watchSlidesProgress=true;},setTranslate:function setTranslate(){var swiper=this;if(swiper.params.effect!=='coverflow'){return;}
swiper.coverflowEffect.setTranslate();},setTransition:function setTransition(duration){var swiper=this;if(swiper.params.effect!=='coverflow'){return;}
swiper.coverflowEffect.setTransition(duration);},},};var Thumbs={init:function init(){var swiper=this;var ref=swiper.params;var thumbsParams=ref.thumbs;var SwiperClass=swiper.constructor;if(thumbsParams.swiper instanceof SwiperClass){swiper.thumbs.swiper=thumbsParams.swiper;Utils.extend(swiper.thumbs.swiper.originalParams,{watchSlidesProgress:true,slideToClickedSlide:false,});Utils.extend(swiper.thumbs.swiper.params,{watchSlidesProgress:true,slideToClickedSlide:false,});}else if(Utils.isObject(thumbsParams.swiper)){swiper.thumbs.swiper=new SwiperClass(Utils.extend({},thumbsParams.swiper,{watchSlidesVisibility:true,watchSlidesProgress:true,slideToClickedSlide:false,}));swiper.thumbs.swiperCreated=true;}
swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);swiper.thumbs.swiper.on('tap',swiper.thumbs.onThumbClick);},onThumbClick:function onThumbClick(){var swiper=this;var thumbsSwiper=swiper.thumbs.swiper;if(!thumbsSwiper){return;}
var clickedIndex=thumbsSwiper.clickedIndex;var clickedSlide=thumbsSwiper.clickedSlide;if(clickedSlide&&$(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)){return;}
if(typeof clickedIndex==='undefined'||clickedIndex===null){return;}
var slideToIndex;if(thumbsSwiper.params.loop){slideToIndex=parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'),10);}else{slideToIndex=clickedIndex;}
if(swiper.params.loop){var currentIndex=swiper.activeIndex;if(swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)){swiper.loopFix();swiper._clientLeft=swiper.$wrapperEl[0].clientLeft;currentIndex=swiper.activeIndex;}
var prevIndex=swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\""+slideToIndex+"\"]")).eq(0).index();var nextIndex=swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\""+slideToIndex+"\"]")).eq(0).index();if(typeof prevIndex==='undefined'){slideToIndex=nextIndex;}
else if(typeof nextIndex==='undefined'){slideToIndex=prevIndex;}
else if(nextIndex-currentIndex<currentIndex-prevIndex){slideToIndex=nextIndex;}
else{slideToIndex=prevIndex;}}
swiper.slideTo(slideToIndex);},update:function update(initial){var swiper=this;var thumbsSwiper=swiper.thumbs.swiper;if(!thumbsSwiper){return;}
var slidesPerView=thumbsSwiper.params.slidesPerView==='auto'?thumbsSwiper.slidesPerViewDynamic():thumbsSwiper.params.slidesPerView;if(swiper.realIndex!==thumbsSwiper.realIndex){var currentThumbsIndex=thumbsSwiper.activeIndex;var newThumbsIndex;if(thumbsSwiper.params.loop){if(thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)){thumbsSwiper.loopFix();thumbsSwiper._clientLeft=thumbsSwiper.$wrapperEl[0].clientLeft;currentThumbsIndex=thumbsSwiper.activeIndex;}
var prevThumbsIndex=thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\""+(swiper.realIndex)+"\"]")).eq(0).index();var nextThumbsIndex=thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\""+(swiper.realIndex)+"\"]")).eq(0).index();if(typeof prevThumbsIndex==='undefined'){newThumbsIndex=nextThumbsIndex;}
else if(typeof nextThumbsIndex==='undefined'){newThumbsIndex=prevThumbsIndex;}
else if(nextThumbsIndex-currentThumbsIndex===currentThumbsIndex-prevThumbsIndex){newThumbsIndex=currentThumbsIndex;}
else if(nextThumbsIndex-currentThumbsIndex<currentThumbsIndex-prevThumbsIndex){newThumbsIndex=nextThumbsIndex;}
else{newThumbsIndex=prevThumbsIndex;}}else{newThumbsIndex=swiper.realIndex;}
if(thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex)<0){if(thumbsSwiper.params.centeredSlides){if(newThumbsIndex>currentThumbsIndex){newThumbsIndex=newThumbsIndex-Math.floor(slidesPerView/2)+1;}else{newThumbsIndex=newThumbsIndex+Math.floor(slidesPerView/2)-1;}}else if(newThumbsIndex>currentThumbsIndex){newThumbsIndex=newThumbsIndex-slidesPerView+1;}
thumbsSwiper.slideTo(newThumbsIndex,initial?0:undefined);}}
var thumbsToActivate=1;var thumbActiveClass=swiper.params.thumbs.slideThumbActiveClass;if(swiper.params.slidesPerView>1&&!swiper.params.centeredSlides){thumbsToActivate=swiper.params.slidesPerView;}
thumbsSwiper.slides.removeClass(thumbActiveClass);if(thumbsSwiper.params.loop){for(var i=0;i<thumbsToActivate;i+=1){thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\""+(swiper.realIndex+i)+"\"]")).addClass(thumbActiveClass);}}else{for(var i$1=0;i$1<thumbsToActivate;i$1+=1){thumbsSwiper.slides.eq(swiper.realIndex+i$1).addClass(thumbActiveClass);}}},};var Thumbs$1={name:'thumbs',params:{thumbs:{swiper:null,slideThumbActiveClass:'swiper-slide-thumb-active',thumbsContainerClass:'swiper-container-thumbs',},},create:function create(){var swiper=this;Utils.extend(swiper,{thumbs:{swiper:null,init:Thumbs.init.bind(swiper),update:Thumbs.update.bind(swiper),onThumbClick:Thumbs.onThumbClick.bind(swiper),},});},on:{beforeInit:function beforeInit(){var swiper=this;var ref=swiper.params;var thumbs=ref.thumbs;if(!thumbs||!thumbs.swiper){return;}
swiper.thumbs.init();swiper.thumbs.update(true);},slideChange:function slideChange(){var swiper=this;if(!swiper.thumbs.swiper){return;}
swiper.thumbs.update();},update:function update(){var swiper=this;if(!swiper.thumbs.swiper){return;}
swiper.thumbs.update();},resize:function resize(){var swiper=this;if(!swiper.thumbs.swiper){return;}
swiper.thumbs.update();},observerUpdate:function observerUpdate(){var swiper=this;if(!swiper.thumbs.swiper){return;}
swiper.thumbs.update();},setTransition:function setTransition(duration){var swiper=this;var thumbsSwiper=swiper.thumbs.swiper;if(!thumbsSwiper){return;}
thumbsSwiper.setTransition(duration);},beforeDestroy:function beforeDestroy(){var swiper=this;var thumbsSwiper=swiper.thumbs.swiper;if(!thumbsSwiper){return;}
if(swiper.thumbs.swiperCreated&&thumbsSwiper){thumbsSwiper.destroy();}},},};var components=[Device$1,Support$1,Browser$1,Resize,Observer$1,Virtual$1,Keyboard$1,Mousewheel$1,Navigation$1,Pagination$1,Scrollbar$1,Parallax$1,Zoom$1,Lazy$1,Controller$1,A11y,History$1,HashNavigation$1,Autoplay$1,EffectFade,EffectCube,EffectFlip,EffectCoverflow,Thumbs$1];if(typeof Swiper.use==='undefined'){Swiper.use=Swiper.Class.use;Swiper.installModule=Swiper.Class.installModule;}
Swiper.use(components);window.Swiper=Swiper;return Swiper;}));function floatToString(t,e){var o=t.toFixed(e).toString();return o.match(/^\.\d+/)?"0"+o:o}"undefined"==typeof window.Shopify&&(window.Shopify={}),Shopify.each=function(t,e){for(var o=0;o<t.length;o++)e(t[o],o)},Shopify.map=function(t,e){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o},Shopify.arrayIncludes=function(t,e){for(var o=0;o<t.length;o++)if(t[o]==e)return!0;return!1},Shopify.uniq=function(t){for(var e=[],o=0;o<t.length;o++)Shopify.arrayIncludes(e,t[o])||e.push(t[o]);return e},Shopify.isDefined=function(t){return void 0!==t},Shopify.getClass=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Shopify.extend=function(t,e){function o(){}o.prototype=e.prototype,t.prototype=new o,(t.prototype.constructor=t).baseConstructor=e,t.superClass=e.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(t){window.history.replaceState({},document.title,t)},Shopify.urlParam=function(t){var e=RegExp("[?&]"+t+"=([^&#]*)").exec(Shopify.locationSearch());return e&&decodeURIComponent(e[1].replace(/\+/g," "))},Shopify.newState=function(t,e){return(Shopify.urlParam(t)?Shopify.locationSearch().replace(RegExp("("+t+"=)[^&#]+"),"$1"+e):""===Shopify.locationSearch()?"?"+t+"="+e:Shopify.locationSearch()+"&"+t+"="+e)+Shopify.locationHash()},Shopify.setParam=function(t,e){Shopify.replaceState(Shopify.newState(t,e))},Shopify.Product=function(t){Shopify.isDefined(t)&&this.update(t)},Shopify.Product.prototype.update=function(t){for(property in t)this[property]=t[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(o){if(!Shopify.isDefined(this.variants))return null;var t=Shopify.map(this.variants,function(t){var e="option"+(o+1);return t[e]==undefined?null:t[e]});return null==t[0]?null:Shopify.uniq(t)},Shopify.Product.prototype.getVariant=function(i){var r=null;return i.length!=this.options.length||Shopify.each(this.variants,function(t){for(var e=!0,o=0;o<i.length;o++){t["option"+(o+1)]!=i[o]&&(e=!1)}1!=e||(r=t)}),r},Shopify.Product.prototype.getVariantById=function(t){for(var e=0;e<this.variants.length;e++){var o=this.variants[e];if(t==o.id)return o}return null},Shopify.money_format="${{amount}}",Shopify.formatMoney=function(t,e){function n(t,e){return void 0===t?e:t}function o(t,e,o,i){if(e=n(e,2),o=n(o,","),i=n(i,"."),isNaN(t)||null==t)return 0;var r=(t=(t/100).toFixed(e)).split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+o)+(r[1]?i+r[1]:"")}"string"==typeof t&&(t=t.replace(".",""));var i="",r=/\{\{\s*(\w+)\s*\}\}/,a=e||this.money_format;switch(a.match(r)[1]){case"amount":i=o(t,2);break;case"amount_no_decimals":i=o(t,0);break;case"amount_with_comma_separator":i=o(t,2,".",",");break;case"amount_with_space_separator":i=o(t,2," ",",");break;case"amount_with_period_and_space_separator":i=o(t,2," ",".");break;case"amount_no_decimals_with_comma_separator":i=o(t,0,".",",");break;case"amount_no_decimals_with_space_separator":i=o(t,0," ");break;case"amount_with_apostrophe_separator":i=o(t,2,"'",".")}return a.replace(r,i)},Shopify.OptionSelectors=function(t,e){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=t,this.product=new Shopify.Product(e.product),this.onVariantSelected=Shopify.isDefined(e.onVariantSelected)?e.onVariantSelected:function(){},this.replaceSelector(t),this.initDropdown(),e.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var t={initialLoad:!0};if(!this.selectVariantFromDropdown(t)){var e=this;setTimeout(function(){e.selectVariantFromParams(t)||e.fireOnChangeForFirstDropdown.call(e,t)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(t){this.selectors[0].element.onchange(t)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(t){this.selectVariantFromParams(t)||this.selectVariantFromDropdown(t)},Shopify.OptionSelectors.prototype.replaceSelector=function(t){var e=document.getElementById(t),o=e.parentNode;Shopify.each(this.buildSelectors(),function(t){o.insertBefore(t,e)}),e.style.display="none",this.variantIdField=e},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(t){var e=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(e||(e=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!e)return!1;var o=e.value;return this.selectVariant(o,t)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(t){var e=Shopify.urlParam("variant");return this.selectVariant(e,t)},Shopify.OptionSelectors.prototype.selectVariant=function(t,e){var o=this.product.getVariantById(t);if(null==o)return!1;for(var i=0;i<this.selectors.length;i++){var r=this.selectors[i].element,n=o[r.getAttribute("data-option")];null!=n&&this.optionExistInSelect(r,n)&&(r.value=n)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",e):this.selectors[0].element.onchange(e),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(t,e){for(var o=0;o<t.options.length;o++)if(t.options[o].value==e)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(t,e){Shopify.isDefined(e)&&this.setMessageElement(e),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var o=document.getElementById(t);Shopify.each(this.buildSelectors(),function(t){o.appendChild(t)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var t=0;t<this.product.optionNames().length;t++){var e=new Shopify.SingleOptionSelector(this,t,this.product.optionNames()[t],this.product.optionValues(t));e.element.disabled=!1,this.selectors.push(e)}var i=this.selectorDivClass,r=this.product.optionNames();return Shopify.map(this.selectors,function(t){var e=document.createElement("div");if(e.setAttribute("class",i),1<r.length){var o=document.createElement("label");o.htmlFor=t.element.id,o.innerHTML=t.name,e.appendChild(o)}return e.appendChild(t.element),e})},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var t=[],e=0;e<this.selectors.length;e++){var o=this.selectors[e].element.value;t.push(o)}return t},Shopify.OptionSelectors.prototype.updateSelectors=function(t,e){var o=this.selectedValues(),i=this.product.getVariant(o);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,e),null!=this.historyState&&this.historyState.onVariantChange(i,this,e)},Shopify.OptionSelectorsFromDOM=function(t,e){var o=e.optionNames||[],i=e.priceFieldExists||!0,r=e.delimiter||"/",n=this.createProductFromSelector(t,o,i,r);e.product=n,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,t,e)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(t,n,a,s){if(!Shopify.isDefined(a))a=!0;if(!Shopify.isDefined(s))s="/";var e=document.getElementById(t),o=e.childNodes,p=(e.parentNode,n.length),l=[];Shopify.each(o,function(t){if(1==t.nodeType&&"option"==t.tagName.toLowerCase()){var e=t.innerHTML.split(new RegExp("\\s*\\"+s+"\\s*"));0==n.length&&(p=e.length-(a?1:0));var o=e.slice(0,p),i=a?e[p]:"",r=(t.getAttribute("value"),{available:!t.disabled,id:parseFloat(t.value),price:i,option1:o[0],option2:o[1],option3:o[2]});l.push(r)}});var i={variants:l};if(0==n.length){i.options=[];for(var r=0;r<p;r++)i.options[r]="option "+(r+1)}else i.options=n;return i},Shopify.SingleOptionSelector=function(o,i,t,e){this.multiSelector=o,this.values=e,this.index=i,this.name=t,this.element=document.createElement("select");for(var r=0;r<e.length;r++){var n=document.createElement("option");n.value=e[r],n.innerHTML=e[r],this.element.appendChild(n)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(i+1)),this.element.id=o.domIdPrefix+"-option-"+i,this.element.onchange=function(t,e){e=e||{},o.updateSelectors(i,e)},!0},Shopify.Image={preload:function(t,e){for(var o=0;o<t.length;o++){var i=t[o];this.loadImage(this.getSizedImageUrl(i,e))}},loadImage:function(t){(new Image).src=t},switchImage:function(t,e,o){if(t&&e){var i=this.imageSize(e.src),r=this.getSizedImageUrl(t.src,i);o?o(r,t,e):e.src=r}},imageSize:function(t){var e=t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);return null!==e?e[1]:null},getSizedImageUrl:function(t,e){if(null==e)return t;if("master"==e)return this.removeProtocol(t);var o=t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null==o)return null;var i=t.split(o[0]),r=o[0];return this.removeProtocol(i[0]+"_"+e+r)},removeProtocol:function(t){return t.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(t){this.browserSupports()&&this.register(t)},Shopify.OptionSelectors.HistoryState.prototype.register=function(t){window.addEventListener("popstate",function(){t.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(t,e,o){this.browserSupports()&&(!t||o.initialLoad||o.popStateCall||Shopify.setParam("variant",t.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};window.HUB = window.HUB || {};
 
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
var _this = jQuery(this),
		$this = jQuery(_this).closest('.lh-product-single'),
		slide = jQuery($this).find('.block-slide-lg');
var $product_json;
var id = $this.data('pid'),money_format =decodeURIComponent($this.data('moneyFormat')).replace(/\+/g,' ');
var current_variant = null;
		_this.find('.lh-buy-now').click(function(event) {
		    event.preventDefault();
				if (!window.LAYOUTHUB_LIVE && window.location.protocol != 'blob:') {
			    var $form = _this.find('form');
			    var quantity = $form.find('[name="quantity"]').val();
			    var id = $form.find('[name="id"]').val();
			    location.href="/cart/"+id+':'+quantity;
				}
		});

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
			$product_json = JSON.parse(document.getElementById('lh-product-json-' + id).innerHTML);
			setTimeout(function(){
				var productSelect = new window.Shopify.OptionSelectors('product-select-' + id, {
		        product: $product_json,
		        onVariantSelected: selectCallback,
		        enableHistoryState: (window.LAYOUTHUB_LIVE) ? false : $this.data('vid_url')
		    });
				$this.find('#product-select-' + id).on('swatch', function(evt, vid) {
		        productSelect.selectVariant(evt.target.getAttribute('vid'));
		    });
			},100);

	    hideSelectbox();

	    var $format = $this.data('moneyFormat');

	    function selectCallback(variant, selector) {
          current_variant = variant;
					setMaxQuantity(variant);
					var label_sale = $this.find('.lh-sale_label'),
						sold_out 		 = $this.find('.lh-sold-out-title');
					if(variant){
						if (variant.featured_image) {
	            try {
									slide[0].swiper && slide[0].swiper.slideTo($this.find('.block-slide-sm .items-img[data-variant_id*="'+variant.id+'"]').index(),300);
	            } catch (e) {
	                console.info(e);
	            }
	        	}
					}else{
						_this.find('.lh-cart-button-group').attr('data-available','false');
						sold_out.css({"display":"block","margin":0}).find('span').attr("data-lhi","trans_unavai").html(section.settings.trans_unavai);
						$this.find('.lh-content-summary').attr('data-hidden',true);
						$this.find('.lh-compare-at-price,.product-count-down,.lh-price').css('display','none');
						label_sale.css('display','none');
						return;
					}
					var isSale = variant.available && (current_variant.price < current_variant.compare_at_price);
					$this.find('.lh-content-summary').attr('data-hidden', !isSale);
	        sold_out.css({"display" : variant.available ? 'none':'block' ,"margin-left":15}).find('span').attr("data-lhi","trans_outstock").html(section.settings.trans_outstock);
	        $this.find('.lh-price').css('display','block');
	        _this.find('.lh-cart-button-group').attr('data-available',variant.available );
	        $this.find('.lh-price').html(window.HUB.formatMoney(variant.price,money_format));
	        $this.find('.lh-product-sku-title span').text(variant.sku);
	        if (isSale) {
							label_sale.css('display','block');
	            $this.find('.lh-compare-at-price').css('display','block').html(window.HUB.formatMoney(variant.compare_at_price,money_format));
	        } else {
							label_sale.css('display','none');
	            $this.find('.lh-compare-at-price').css('display','none');
	        }


	        if (variant.inventory_management == "shopify") {

	            $this.find('.lh-title-instock').css('display','block');
	        } else {
	            $this.find('.lh-title-instock').css('display','none');
	        }
	        if (variant.options.length) {
	            for (var i = 0 ; i < variant.options.length ; i++) {
								var wrap_swatch = $this.find('[data-option-index="' + i + '"]');
								wrap_swatch.find(`[data-value='${variant.options[i].replace(/'/g, "'")}']`).addClass('active').siblings().removeClass('active');
	            }
	        }
	    };
	    $this.find('.lh-swatch-select').on('click', function() {
	        var _this = $(this);
	        _this.siblings('li').removeClass('active');
	        _this.addClass('active');
	        var index = _this.closest('.swatch-index').attr('data-option-index');
	        $this.find('select#product-select-' + id + '-option-' + index).val(_this.data('value')).trigger('change');
	    });

	}

	ProductOptionsInit();
	var first_variant_block = _this.find('.lh-wrap-variant > div.lh-swatch-variations:first-child .lh-swatch-select.active');
	_this.find('.lh-swatch-select').addClass('lh-exists');
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
 };						cb.bind($('section[data-section-id="lqx764tuyvj"] include[data-name="product-form"][data-id="1"]').get(0))(jQuery);;var cb  = function($) {






if(document.querySelector('.page-container')){

		document.querySelector('.page-container').style.webkitTransform='none';

		document.querySelector('.page-container').style.transform='none';

	}

	var _this = jQuery(this);

	_this.find('.lh-modal').on("click",function(e){

		if($(e.target).closest('.lh-modal-body').length == 0){

			_this.find('.lh-modal').fadeOut(100);

		}

	})

	_this.find('.lh-wrap-product-rating').click(function(){

		var tab_review = _this.find('.lh-wrap-title-tab[data-tab-handle="review"]');

		if(tab_review.length){

			if(!tab_review.hasClass('active')){

				tab_review.siblings('.lh-wrap-title-tab.active').removeClass('active');

				tab_review.siblings('.lh-tab-content.active').removeClass('active').slideUp(00);

				tab_review.addClass('active');

				tab_review.siblings('.lh-tab-content[data-tab-handle="review"]').addClass('active').slideDown(00);

			}

			tab_review[0].scrollIntoView({

			    behavior: "smooth",

			    block: "start"

			});

		}

	});


	if(document.querySelector('.page-container') && window.getComputedStyle(document.querySelector('.page-container')).transform.indexOf('matrix') != -1){
		document.querySelector('.page-container').style.webkitTransform='none';
		document.querySelector('.page-container').style.transform='none';
	}
	var $_this = jQuery(this),
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
	var thumb = new Swiper($nav, jQuery.extend({
	  slidesPerView: 'auto',
		centerInsufficientSlides: true,
		navigation: {
	      nextEl: '.lh-slide-small-nav .swiper-button-next',
	      prevEl: '.lh-slide-small-nav .swiper-button-prev',
	  },
	  breakpoints: {
	    0: {
	      direction: 'horizontal',
	      spaceBetween: 10
	    },
	    768: {
	      direction: 'vertical',
	      spaceBetween: 20
	    }
	  },
	  on : {
	    slideChange: function(){
	      slide.slideTo(thumb.realIndex,300,false);
	      var vid = $(slide.visibleSlides[0]).data('variant_id');
	      if (vid) {
	          $_this.find('[name="id"]').attr('vid',vid)[0].dispatchEvent(new Event('swatch'));
	      }
	    }
	  }
	},data_slide));
	var slide = new Swiper($for, jQuery.extend({
	  slidesPerView: 1,
	  navigation: {
	      nextEl: '.lh-slide-lg-nav .swiper-button-next',
	      prevEl: '.lh-slide-lg-nav .swiper-button-prev',
	  },
	  on : {
	    slideChange: function(){
	      thumb.slideTo(slide.realIndex,300,false);
	      var vid = $(slide.visibleSlides[0]).data('variant_id');
	      if (vid) {
	          $_this.find('[name="id"]').attr('vid',vid)[0].dispatchEvent(new Event('swatch'));
	      }
	    }
	  },
	  thumbs: {
	    swiper:thumb
	  }
	},data_slide));
	initRating();
	function initRating(){
		if(!document.querySelector('#lh-fake-review') && !window.SPR && window.LAYOUTHUB_LIVE === true)
		{
			jQuery.get('https://productreviews.shopifycdn.com/assets/v4/spr.js', function(code) {
				var regex = new RegExp(['"','/','/'].join(''),'gm');
				code = code.replace(regex, '"https://').replace(/SPR\./g,'window.SPR.').replace('window.SPR=','window.SPR=window.SPR || ');;
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
		}
		else
		{
			if(window.SPR && window.SPR.$){
				window.SPR.loadjQueryExtentions(window.SPR.$);
				window.SPR.$(document).ready(function() {
						return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges()
				})
			}
		}
	}
	setTimeout(function() {
	    jQuery.fn.zoom && $_this.find('.zoom__image img').each(function() {
	        var $this = jQuery(this);
	        $this.trigger('zoom.destroy');
	        $this.closest('.zoom__image').zoom({
	            url: $this.attr('data-bigimg'),
	            touch: false
	        });
	    });
	}, 2000);
 };						cb.bind($('section[data-section-id="lqx764tuyvj"]').get(0))(jQuery);};					cb.bind($('section[data-section-id="lqx764tuyvj"]').get(0))({						url: "https://library.layouthub.com/HUB/files/Tm92LS0yMDE5/NTc0ODY0ODc5/First_release/pages/Yogmat/product-detail/",						settings: {"trans_unavai":"Unavailable","trans_outstock":"Out of stock"}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "qqo2dklg03"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="qqo2dklg03"]').get(0))({						url: "https://library.layouthub.com/HUB/files/SmFuLS0yMDIx/NjEwNDM1MTg1/release-1-2021/pages/4ybXuKmECkDsLxRa/incentives/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "t54sxzwme0o"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="t54sxzwme0o"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWF5LS0yMDIw/NTkwNDU2ODky/twenty-twenty-summer/pages/TEDutUIbxMvOYP26/contents/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "den6khqpqhs"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="den6khqpqhs"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/fDRqnaNOgGdC41kh/reason/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "j2jqb5a6r6j"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="j2jqb5a6r6j"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/fDRqnaNOgGdC41kh/reason/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "ihq6ymh7dv"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="ihq6ymh7dv"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWF5LS0yMDIw/NTkwNDU2ODky/twenty-twenty-summer/pages/TEDutUIbxMvOYP26/contents/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "38ycgdxbwqq"							}), success: c, error: e});						}, cb  = function(section, $) {//Variable initialize
var el = $(this),
    localPopup = localStorage.getItem('lh-popup-subscribe'),
    popupEl = el.find('.popup_smart_demo'),
    popupSettings = parseInt(el.find('.preview_smart_popup_setting').val());

//Show popup if local storage null
if(localPopup === null){
    switch(popupSettings){
        case 2:
            let strTime = section.settings.seconds_time;
            let secondsTime = parseInt(strTime) ? parseInt(strTime) * 1000 : 5000;
            setTimeout(function(){
                popupEl.removeClass('popup_smart_hide');
            }, secondsTime);
            break;
        case 3:
            let hoverEl = section.settings.hover_element;
            $(hoverEl).hover(function(){
                popupEl.removeClass('popup_smart_hide');
            });
            break;
        case 4:
            $('html').mouseleave(function(){
                setTimeout(function(){
                    popupEl.removeClass('popup_smart_hide');
                }, 200);
            });
            break;
        default:
            popupEl.removeClass('popup_smart_hide');
            break;
    }
}

//Hide popup if check to checkbox do not show again
if(el.find('#lh-not-show-again').length){
    el.find('#lh-not-show-again').click(function(){
        popupEl.addClass('popup_smart_hide');
        localStorage.setItem('lh-popup-subscribe', true);
    })
}

//Close modal
el.find('.popup_close').on('click', function(){
    popupEl.addClass('popup_smart_hide');
});

el.find('.popup_smart_demo').on('click', function(e){
    var target = e.target;
    if ($(target).is('.popup_smart_demo')) {
        popupEl.addClass('popup_smart_hide');
    }
});

var loaderEl = '<span class="loader"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="" width="50px" height="27px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="84" cy="50" r="3.5806" fill="#e15b64"> <animate attributeName="r" repeatCount="indefinite" dur="0.8333333333333334s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate> <animate attributeName="fill" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#e15b64;#abbd81;#f8b26a;#f47e60;#e15b64" begin="0s"></animate></circle><circle cx="16" cy="50" r="6.41936" fill="#e15b64"> <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate> <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate></circle><circle cx="37.8258" cy="50" r="10" fill="#f47e60"> <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8333333333333334s"></animate> <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.8333333333333334s"></animate></circle><circle cx="71.8258" cy="50" r="10" fill="#f8b26a"> <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6666666666666667s"></animate> <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6666666666666667s"></animate></circle><circle cx="16" cy="50" r="0" fill="#abbd81"> <animate attributeName="r" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.5s"></animate> <animate attributeName="cx" repeatCount="indefinite" dur="3.3333333333333335s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-2.5s"></animate></circle></svg></span>';

popupEl.find('.popup_smart_content_demo').append(loaderEl);;var cb  = function($) {
var el = $(this);
var xhr = null;
profileParameterCheck(section.settings.profile_user);


// validator profile if exist and show missing feild
function profileParameterCheck(profileUser){
    if(typeof profileUser === 'string' && profileUser !== ''){
        profileUser = JSON.parse(profileUser);
    }

	let require_parameter = [];

    if(profileUser.length){
        // make require to array not double
        $.each(profileUser, function(index, value){
            let parseStr = value.split('|');
            // if exist require parameter
            if(parseStr[2]){
                // only 1 parameter
                if (parseStr[2].indexOf(',') == -1) {
                    if(require_parameter.includes(parseStr[2]) != true){
                        require_parameter.push(parseStr[2]);
                        return;
                    }
                }

                // multi parameter
                let parseStrRequire = parseStr[2].split(',');
                $.each(parseStrRequire, function(index2, value2){
                    if(require_parameter.includes(value2) != true){
                        require_parameter.push(value2);
                    }
                });
            }
        });

	}

	var errorHtml = validator_profile_require_parameter(require_parameter);
	el.find('.popup_smart_error_text').html(errorHtml);


    //Event submit subcribe from
    $('.lh-subcriber-form').submit(function(e){
        e.preventDefault();

        if(xhr !== null){
            xhr.abort();
        }

        var t = $(this),
            formData = t.serializeArray(),
            messageDiv = $('.popup_smart_error_text_submit', t),
            formAction = t.attr('action');

        messageDiv.html('');

        if(formAction == ''){
            messageDiv.html('<div class="alert alert-error">An error has occurred. Please try to do it again.</div>');
        }else{
        t.addClass('loading');
        //Send ajax request to endpoint
        xhr = $.post( t.attr('action'),  formData)
          .done(function( data ) {
            var classAlert = data.status == 'success' ? 'success' : 'error';
            messageDiv.html('<div class="alert alert-'+ classAlert +'">'+ data.message +'</div>');
            if(data.status == 'success'){
                localPopup = localStorage.setItem('lh-popup-subscribe', true);
                setTimeout(function(){
                    $('.popup_smart_demo', el).addClass('popup_smart_hide');
                }, 1500);
            }
            xhr = null;
            t.removeClass('loading');
          });
        }
    });
}

// validator profile require parameter
function validator_profile_require_parameter(parameters = ''){
    if(parameters.length){
        let parseStr = parameters;
        let errorText = '';
        $.each(parseStr, function(index, value){
            if(el.find('[name="'+value+'"]').length == 0){
                errorText += '<br/>Missing '+value+' field';
            }
        });
        return errorText;
	}
}

//remove old popup move to body if exist
if(section.settings.setting_popup == 'yes'){
	$(document).find('body>section[data-section="popup-smart"]').remove();
}

 };						cb.bind($('section[data-section-id="38ycgdxbwqq"]').get(0))(jQuery);};					cb.bind($('section[data-section-id="38ycgdxbwqq"]').get(0))({						url: "https://library.layouthub.com/HUB/files/Tm92LS0yMDE5/NTc0ODY0ODc5/First_release/pages/Pop-up3/popup/",						settings: {"seconds_time":"5","hover_element":"","profile_user":[]}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "h2bblxro42"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="h2bblxro42"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWF5LS0yMDIw/NTkwNDU2ODky/twenty-twenty-summer/pages/TEDutUIbxMvOYP26/contents/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "31cifv7ogr7"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="31cifv7ogr7"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/fDRqnaNOgGdC41kh/reason/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "cne3dbakac4"							}), success: c, error: e});						}, cb  = function(section, $) {;var cb  = function($) {

   $(this).find('.lh-accordion-item-style_2 .lh-header').on('click', function() {
       var _this = jQuery(this).closest('.lh-accordion-item-style_2');
       if(_this.hasClass('active')){
         _this.removeClass('active');
       }else{
         _this.addClass('active');
         _this.siblings('.active').removeClass('active');
       }
   });
    };						cb.bind($('section[data-section-id="cne3dbakac4"] include[data-name="style_2"][data-id="1"]').get(0))(jQuery);};					cb.bind($('section[data-section-id="cne3dbakac4"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWFyLS0yMDIx/NjE1Mjc3MDI3/release-3-2021/pages/SH0JTOWlLek6NhVP/faqs/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "a7ua211fv2c"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="a7ua211fv2c"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/fDRqnaNOgGdC41kh/reason/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "9szwvqawyvl"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="9szwvqawyvl"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWF5LS0yMDIw/NTkwNDU2ODky/twenty-twenty-summer/pages/TEDutUIbxMvOYP26/contents/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "00257kv4e3xn7"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="00257kv4e3xn7"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWF5LS0yMDIw/NTkwNDU2ODky/twenty-twenty-summer/pages/TEDutUIbxMvOYP26/contents/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "6fkwam8cs5x"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="6fkwam8cs5x"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWFyLS0yMDIx/NjE1Mjc3MDI3/release-3-2021/pages/iGyjgpquQVhsHCfv/feature/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "01rplsvx38l9"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="01rplsvx38l9"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/fDRqnaNOgGdC41kh/reason/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "trjplc2fl1d"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="trjplc2fl1d"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWF5LS0yMDIw/NTkwNDU2ODky/twenty-twenty-summer/pages/TEDutUIbxMvOYP26/contents/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "ikxxb8l86w"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="ikxxb8l86w"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWF5LS0yMDIw/NTkwNDU2ODky/twenty-twenty-summer/pages/TEDutUIbxMvOYP26/contents/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "li65nxlfyx"							}), success: c, error: e});						}, cb  = function(section, $) {;var cb  = function($) {
  var $this = jQuery(this);
  function splitChar(){
    var element = $this.find('.lh-subtitle p');
    var text = section.settings.subtitle;
    element.html('');
    for (var i = 0; i < text.length; i++) {
        var html = '<span style="transition-delay: '+(i *40)+'ms;'+(text.charAt(i) == ' ' ? 'display: inline':'')+'">' + text.charAt(i) + "</span>";
        element.append(html);;
    }
    setTimeout(function(){
      element.addClass('lh-show').find('span').addClass('lh-show');
    },1500);
  }
  splitChar();
 };						cb.bind($('section[data-section-id="li65nxlfyx"] include[data-name="subtitle"][data-id="1"]').get(0))(jQuery);;var cb  = function($) {
  var $this = jQuery(this);
  var count = 0;
  function animateImg(event) {
      count++;
      if(count % 15 != 0) return;
      var w_top   = $(window).scrollTop(),
      __this      = $(event.currentTarget) ,
      _this_w     = __this.width(),
      _ratio      = _this_w / 60,
      _offset_l   = __this.offset().left,
      _m_x        = event.originalEvent.pageX,
      _x_new      = (_offset_l + _this_w / 2 - _m_x) / _ratio;
      __this.find('.lh-block-main').css({'left': _x_new});
  }
  function setOrigin(event){
    var __this  = $(event.currentTarget),
    img         = __this.find('.lh-block-main');
    img.removeAttr('style');
  }
  setTimeout(function(){
    $this.find('.lh-block-main').addClass('lh-show');
  },1000);
  $(window).resize(function(){
    var w_w = $(window).width();
    var item = $this;
    if(w_w >= 1200){
      if(!item.hasClass('lh-added-event')){
        item.addClass('lh-added-event');
        item.mousemove(animateImg);
        item.mouseleave(setOrigin);
      }
    }else{
      item.unbind();
      item.removeClass('lh-added-event');
    }
  }).trigger('resize');
 };						cb.bind($('section[data-section-id="li65nxlfyx"]').get(0))(jQuery);};					cb.bind($('section[data-section-id="li65nxlfyx"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWF5LS0yMDIw/NTkwNDU2ODky/twenty-twenty-summer/pages/gx9CeGoZjAM2isuB/static-banner/",						settings: {"subtitle":""}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "2y5lgzmffio"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="2y5lgzmffio"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWF5LS0yMDIw/NTkwNDU2ODky/twenty-twenty-summer/pages/HZX4CFtLKV5uT2wD/feature/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "j43xgg9jw0c"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="j43xgg9jw0c"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWF5LS0yMDIw/NTkwNDU2ODky/twenty-twenty-summer/pages/TEDutUIbxMvOYP26/contents/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "lefcuymd62e"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="lefcuymd62e"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWFyLS0yMDIx/NjE1Mjc3MDI3/release-3-2021/pages/XHk1fncsSzFE4PU8/banner/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "3yxhykdiagg"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="3yxhykdiagg"]').get(0))({						url: "https://library.layouthub.com/HUB/files/TWF5LS0yMDIw/NTkwNDU2ODky/twenty-twenty-summer/pages/TEDutUIbxMvOYP26/contents/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "pyo0bwnrs5j"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="pyo0bwnrs5j"]').get(0))({						url: "https://library.layouthub.com/HUB/files/Tm92LS0yMDIw/NjA0NTYwMTE4/release-11-2020/pages/dy9Cu0tcV4KjoIsO/makeup/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "793tra6brj6"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="793tra6brj6"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/fDRqnaNOgGdC41kh/reason/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "xhc8o0oy0j"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="xhc8o0oy0j"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/fDRqnaNOgGdC41kh/reason/",						settings: {}					}, jQuery);})(jQuery);;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "tbf2av1ys5b"							}), success: c, error: e});						}, cb  = function(section, $) {};					cb.bind($('section[data-section-id="tbf2av1ys5b"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/kj8Q14ENRxF6Knlz/review/",						settings: {}					}, jQuery);})(jQuery);;console.log('This page layout has been built by https://www.layouthub.com');/**Start page custom js code**/<!--lh-live-editor-->/**End page custom js code**/