!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var o,r=n(1),i=document.querySelector("body > header svg"),a=document.querySelector("#nav"),u=(r('a[href*="#"]'),window.pageYOffset),c=0,s=0;function l(){return Math.round(.33*window.innerHeight)}function d(){var e=window.pageYOffset,t=parseInt(window.getComputedStyle(a).height);window.pageYOffset>t?(a.classList.add("fixed"),a.classList.add("time"),u>-1&&s>e&&(e>u&&!o?(a.classList.remove("show"),o=1):u>e+2&&(a.classList.add("show"),o=0))):0===window.pageYOffset?(a.classList.remove("fixed"),a.classList.remove("show")):a.classList.remove("time"),u=e}function f(){var e=document.documentElement.scrollHeight,t=window.innerHeight;s=e-t}window.addEventListener("load",function e(){window.removeEventListener("load",e),window.addEventListener("resize",f),window.addEventListener("scroll",function(){d(),window.scrollY>l()&&!c?(i.classList.add("fade"),c=1):window.scrollY<l()&&c&&(i.classList.remove("fade"),c=0)}),document.querySelectorAll("h1 span").forEach(function(e){e.classList.add("underline")}),d(),f()})},function(e,t,n){(function(n){var o;
/*!
 * smooth-scroll v14.2.1: Animate scrolling to anchor links
 * (c) 2018 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */
!function(n,r){void 0===(o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){for(var e={},t=function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},n=0;n<arguments.length;n++)t(arguments[n]);return e},o=function(e){var t;try{t=decodeURIComponent(e)}catch(n){t=e}return t},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n,o=String(e),r=o.length,i=-1,a="",u=o.charCodeAt(0);++i<r;){if(0===(t=o.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===u?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?o.charAt(i):"\\"+o.charAt(i)}try{n=decodeURIComponent("#"+a)}catch(e){n="#"+a}return n},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t){return t?function(t){return parseInt(e.getComputedStyle(t).height,10)}(t)+t.offsetTop:0},u=function(t,n,o,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(i)}};return function(c,s){var l,d,f,m,h,p,v={};v.cancelScroll=function(e){cancelAnimationFrame(p),p=null,e||u("scrollCancel",l)},v.animateScroll=function(o,r,c){var s=n(l||t,c||{}),d="[object Number]"===Object.prototype.toString.call(o),h=d||!o.tagName?null:o;if(d||h){var g=e.pageYOffset;s.header&&!f&&(f=document.querySelector(s.header)),m||(m=a(f));var y,w,S,b=d?o:function(t,n,o,r){var a=0;if(t.offsetParent)do{a+=t.offsetTop,t=t.offsetParent}while(t);a=Math.max(a-n-o,0),r&&(a=Math.min(a,i()-e.innerHeight));return a}(h,m,parseInt("function"==typeof s.offset?s.offset(o,r):s.offset,10),s.clip),E=b-g,O=i(),L=0,I=function(t,n){var i=e.pageYOffset;if(t==n||i==n||(g<n&&e.innerHeight+i)>=O)return v.cancelScroll(!0),function(t,n,o){0===t&&document.body.focus();if(o)return;t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none");e.scrollTo(0,n)}(o,n,d),u("scrollStop",s,o,r),y=null,p=null,!0};0===e.pageYOffset&&e.scrollTo(0,0),function(e,t,n){if(t)return;if(!history.pushState||!n.updateURL)return;history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)}(o,d,s),u("scrollStart",s,o,r),v.cancelScroll(!0),e.requestAnimationFrame(function t(n){y||(y=n);w=(L+=n-y)/parseInt(s.speed,10),S=g+E*function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t}(s,w=w>1?1:w),e.scrollTo(0,Math.floor(S)),I(S,b)||(p=e.requestAnimationFrame(t),y=n)})}};var g=function(t){if(!function(t){if("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)return!0;return!1}()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&"closest"in t.target&&(d=t.target.closest(c))&&"a"===d.tagName.toLowerCase()&&!t.target.closest(l.ignore)&&d.hostname===e.location.hostname&&d.pathname===e.location.pathname&&/#/.test(d.href)){var n=r(o(d.hash)),i=l.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);(i=i||"#top"!==n?i:document.documentElement)&&(t.preventDefault(),v.animateScroll(i,d))}},y=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)&&history.state.anchor){var t=document.querySelector(r(o(history.state.anchor)));t&&v.animateScroll(t,null,{updateURL:!1})}},w=function(e){h||(h=setTimeout(function(){h=null,m=a(f)},66))};return v.destroy=function(){l&&(document.removeEventListener("click",g,!1),e.removeEventListener("resize",w,!1),e.removeEventListener("popstate",y,!1),v.cancelScroll(),l=null,null,d=null,f=null,m=null,h=null,p=null)},v.init=function(o){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";v.destroy(),l=n(t,o||{}),f=l.header?document.querySelector(l.header):null,m=a(f),document.addEventListener("click",g,!1),f&&e.addEventListener("resize",w,!1),l.updateURL&&l.popstate&&e.addEventListener("popstate",y,!1)},v.init(s),v}}(n)}.apply(t,[]))||(e.exports=o)}(void 0!==n?n:"undefined"!=typeof window?window:this)}).call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);