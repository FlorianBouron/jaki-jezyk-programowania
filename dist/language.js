!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=351)}({351:function(t,e,n){n(352),n(5),document.querySelectorAll(".book").forEach((function(t){var e=t.querySelector(".helion-ksiazkasm4");if(e)if(e.innerText.startsWith("nak"))t.parentElement.removeChild(t);else{var n,o,i=t.getAttribute("data-book-id"),r=document.createElement("a");r.classList.add("book-link","darker-overlay-on-hover"),r.target="_blank",r.href="https://helion.pl/view/9102Q/".concat(i,".htm"),o=r,(n=t).parentNode.insertBefore(o,n),o.appendChild(n)}}))},352:function(t,e,n){},5:function(t,e,n){"use strict";n.r(e);n(6);n(7);var o=$(".courses"),i=encodeURIComponent(o.attr("data-query")),r=["Scratch"];new Waypoint({element:document.querySelector(".courses"),handler:function(){s("pl"),r.includes(i)||s("en"),this.destroy()},offset:"130%"});function s(t){$.ajax({url:"https://cors-anywhere.herokuapp.com/https://www.udemy.com/api-2.0/courses?search=".concat(i,"&category=Development&language=").concat(t,"&ordering=relevance&ratings=4&page_size=8&fields[course]=@default,headline,content_info,num_subscribers,instructional_level,avg_rating,num_reviews,discount_price,last_update_date,created"),headers:{Authorization:"Basic ZUt4dk1EZG1wOEt6Y3g5OTJzVkNwQTFjM2NneTJPeDBlZklybnZYSDphaVozeUJBMlpIaXMyanNBMXp6MEFFTEo5OUhmOHh4T1lpZWtCSmtkYTZ3YUJrUlBxektEOGRZMXFIS01MRUdCZm1OcHZNcHh6c3pIUEc5SDdCMjg4UUJMb1JxTlhXOW55a1VlQVVORUJJYkRETkFhTnBRcDRxeHdNUmFPYmVSRg=="},success:function(e){e.results.sort((function(t,e){return e.num_reviews-t.num_reviews})),e.results.slice(0,4).forEach((function(e){!function(t,e){var n,i=Math.round(100*t.avg_rating)/100,r='<div class="stars">';for(n=i;n>1;n--)r+='<div><i class="fa fa-star"></i><i class="fa fa-star filled"></i></div>';r+='<div><i class="fa fa-star"></i><i class="fa fa-star filled not-full" style="width: '.concat(17.66*n,'px"></i></div></div>');var s="https://click.linksynergy.com/deeplink?id=0Bz3A2CPbI4&mid=39197&murl=https%3A%2F%2Fwww.udemy.com".concat(encodeURIComponent(t.url)),a=null!=t.discount_price?'<span class="course-discount">'.concat(t.discount_price.price_string,"</span>"):"",l=""!==a?"discount":"";o.append('\n          <a class="course darker-overlay-on-hover" href="'.concat(s,'" target="_blank">\n            <img class="course-lang" src=\'/img/other/').concat(e,'.png\' alt="course language"/>\n            <img src="').concat(t.image_240x135,'" alt="course cover"/>\n            <div class="course-header">\n              <p class="course-title">').concat(t.title,'</p>\n              <p class="course-headline">').concat(t.headline,'</p>\n              <span><i class="fa fa-clock-o"></i> Czas trwania: ').concat(t.content_info,'</span>\n              <span><i class="fa fa-user"></i> ').concat(t.num_subscribers,' zapisanych uczestników</span><br>\n              <span><i class="fa fa-graduation-cap"></i> ').concat(t.instructional_level,'</span>\n              <span><i class="fa fa-calendar-check-o" data-created="').concat(t.created,'"></i> Ostatnia aktualizacja: ').concat(t.last_update_date,'</span>\n            </div>\n            <div class="details">\n              ').concat(a,'\n              <span class="course-price ').concat(l,'">').concat(t.price,'</span>\n              <span class="course-rating">').concat(r," ").concat(i,' / 5</span>\n              <span class="course-reviews">Ocen: ').concat(t.num_reviews,"</span>\n            </div>\n          </a>\n          <hr>\n        "))}(e,t)})),o.find(".loading").remove(),document.location.hash.includes(encodeURI("książki"))?document.querySelector(".books").scrollIntoView():document.location.hash.includes("kursy")&&o[0].scrollIntoView(),document.querySelector(".currency-info").classList.remove("d-none")},error:function(t){o.css("display","none"),$(".courses-link").css("display","none"),console.error(t)}})}},6:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),n[this.key]=this,e+=1}var e=0,n={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete n[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in n)e.push(n[o]);for(var i=0,r=e.length;r>i;i++)e[i][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){for(var e in t.Context.refreshAll(),n)n[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=i.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+n,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,n+=1,i.windowContext||(i.windowContext=!0,i.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var n=0,o={},i=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),n=this.element==this.element.window;t&&e&&!n&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",(function(){e.didResize||(e.didResize=!0,i.requestAnimationFrame(t))}))},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",(function(){(!e.didScroll||i.isTouch)&&(e.didScroll=!0,i.requestAnimationFrame(t))}))},e.prototype.handleResize=function(){i.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var o=e[n],i=o.newScroll>o.oldScroll?o.forward:o.backward;for(var r in this.waypoints[n]){var s=this.waypoints[n][r];if(null!==s.triggerPoint){var a=o.oldScroll<s.triggerPoint,l=o.newScroll>=s.triggerPoint;(a&&l||!a&&!l)&&(s.queueTrigger(i),t[s.group.id]=s.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?i.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?i.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var o=0,i=t.length;i>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),o={};for(var r in this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[r];for(var a in this.waypoints[r]){var l,c,u,h,p=this.waypoints[r][a],d=p.options.offset,f=p.triggerPoint,y=0,m=null==f;p.element!==p.element.window&&(y=p.adapter.offset()[s.offsetProp]),"function"==typeof d?d=d.apply(p):"string"==typeof d&&(d=parseFloat(d),p.options.offset.indexOf("%")>-1&&(d=Math.ceil(s.contextDimension*d/100))),l=s.contextScroll-s.contextOffset,p.triggerPoint=Math.floor(y+l-d),c=f<s.oldScroll,u=p.triggerPoint>=s.oldScroll,h=!c&&!u,!m&&(c&&u)?(p.queueTrigger(s.backward),o[p.group.id]=p.group):(!m&&h||m&&s.oldScroll>=p.triggerPoint)&&(p.queueTrigger(s.forward),o[p.group.id]=p.group)}}return i.requestAnimationFrame((function(){for(var t in o)o[t].flushTriggers()})),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},i.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},i.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function n(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},i=window.Waypoint;n.prototype.add=function(t){this.waypoints.push(t)},n.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},n.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var o=this.triggerQueues[n],i="up"===n||"left"===n;o.sort(i?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([n])}}this.clearTriggerQueues()},n.prototype.next=function(e){this.waypoints.sort(t);var n=i.Adapter.inArray(e,this.waypoints);return n===this.waypoints.length-1?null:this.waypoints[n+1]},n.prototype.previous=function(e){this.waypoints.sort(t);var n=i.Adapter.inArray(e,this.waypoints);return n?this.waypoints[n-1]:null},n.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},n.prototype.remove=function(t){var e=i.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},n.prototype.first=function(){return this.waypoints[0]},n.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},n.findOrCreate=function(t){return o[t.axis][t.name]||new n(t)},i.Group=n}(),function(){"use strict";function t(t){return t===t.window}function e(e){return t(e)?e:e.defaultView}function o(t){this.element=t,this.handlers={}}var i=window.Waypoint;o.prototype.innerHeight=function(){return t(this.element)?this.element.innerHeight:this.element.clientHeight},o.prototype.innerWidth=function(){return t(this.element)?this.element.innerWidth:this.element.clientWidth},o.prototype.off=function(t,e){function n(t,e,n){for(var o=0,i=e.length-1;i>o;o++){var r=e[o];n&&n!==r||t.removeEventListener(r)}}var o=t.split("."),i=o[0],r=o[1],s=this.element;if(r&&this.handlers[r]&&i)n(s,this.handlers[r][i],e),this.handlers[r][i]=[];else if(i)for(var a in this.handlers)n(s,this.handlers[a][i]||[],e),this.handlers[a][i]=[];else if(r&&this.handlers[r]){for(var l in this.handlers[r])n(s,this.handlers[r][l],e);this.handlers[r]={}}},o.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,n=e(this.element.ownerDocument),o={top:0,left:0};return this.element.getBoundingClientRect&&(o=this.element.getBoundingClientRect()),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}},o.prototype.on=function(t,e){var n=t.split("."),o=n[0],i=n[1]||"__default",r=this.handlers[i]=this.handlers[i]||{};(r[o]=r[o]||[]).push(e),this.element.addEventListener(o,e)},o.prototype.outerHeight=function(e){var n,o=this.innerHeight();return e&&!t(this.element)&&(n=window.getComputedStyle(this.element),o+=parseInt(n.marginTop,10),o+=parseInt(n.marginBottom,10)),o},o.prototype.outerWidth=function(e){var n,o=this.innerWidth();return e&&!t(this.element)&&(n=window.getComputedStyle(this.element),o+=parseInt(n.marginLeft,10),o+=parseInt(n.marginRight,10)),o},o.prototype.scrollLeft=function(){var t=e(this.element);return t?t.pageXOffset:this.element.scrollLeft},o.prototype.scrollTop=function(){var t=e(this.element);return t?t.pageYOffset:this.element.scrollTop},o.extend=function(){function t(t,e){if("object"==n(t)&&"object"==n(e))for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}for(var e=Array.prototype.slice.call(arguments),o=1,i=e.length;i>o;o++)t(e[0],e[o]);return e[0]},o.inArray=function(t,e,n){return null==e?-1:e.indexOf(t,n)},o.isEmptyObject=function(t){for(var e in t)return!1;return!0},i.adapters.push({name:"noframework",Adapter:o}),i.Adapter=o}()},7:function(t,e,n){}});