!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";function o(n,t){0!==n.length&&n.forEach(function(n){n.classList.add("backToPosition")})}function r(n){n.preventDefault(),this.removeEventListener("click",r)}function c(n,t){0!==n.length&&n.forEach(function(n){n.classList.remove("backToPosition")}),window.DOUBLE_CLICK_ENABLED&&t.querySelectorAll(".lang-link").forEach(function(n){n.addEventListener("click",r)})}var i=document.querySelectorAll(".lang");window.addEventListener("touchstart",function n(){document.querySelectorAll(".lang-link").forEach(function(n){n.addEventListener("click",r)}),window.DOUBLE_CLICK_ENABLED=!0,window.removeEventListener("touchstart",n,!1)},!1),i.forEach(function(n){var t=n.querySelectorAll(".sub img");n.addEventListener("mouseover",function(){return o(t,n)}),n.addEventListener("mouseout",function(){return c(t,n)})})}]);