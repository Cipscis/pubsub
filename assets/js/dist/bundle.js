!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const i=[],{activate:r,deactivate:a}=function(){const e={activate:function(n,t){e._activator(n,t,e._activateSingle)},deactivate:function(n,t){e._activator(n,t,e._deactivateSingle)},_activator:function(n,t,i){if("string"==typeof n)try{n=document.querySelectorAll(n)}catch(t){let r=i===e._deactivateSingle?"deactivate":"activate";throw new DOMException(`${r} failed because it was passed an invalid selector string: '${n}'`)}n instanceof Node?i(n,t):n.length&&n.forEach&&n.forEach(e=>i(e,t))},_activateSingle:function(n,t){if(n instanceof Node==!1)throw new TypeError("activate failed because a valid Node was not passed");if(e._getNodeBindings(n,t))return;if(n.addEventListener("click",t),!1===e._isNodeType(n,"button")){!1===e._getNodeHasBindings(n)&&n.addEventListener("keydown",e._preventSpacebarScroll);let i=e._makeSpacebarFn(t);n.addEventListener("keyup",i);let r={spacebarFn:i};if(!1===e._isNodeType(n,"a")){let i=e._makeEnterFn(t);n.addEventListener("keydown",i),r.enterFn=i}e._rememberNodeBindings(n,t,r)}},_deactivateSingle:function(n,t){if(n instanceof Node==!1)throw new TypeError("deactivate failed because a valid Node was not passed");let i=e._getNodeBindings(n,t);if(n.removeEventListener("click",t),i&&!1===e._isNodeType(n,"button")){n.removeEventListener("keyup",i.spacebarFn),!1===e._isNodeType(n,"a")&&n.removeEventListener("keydown",i.enterFn),e._forgetNodeBindings(n,t),!1===e._getNodeHasBindings(n)&&n.removeEventListener("keydown",e._preventSpacebarScroll)}},_rememberNodeBindings:function(e,n,t){let r=i.find(n=>n.node===e);r||(r={node:e,bindings:[{fn:n}]},i.push(r));let a=r.bindings.find(e=>e.fn===n);a||(a={fn:n},r.bindings.push(a)),Object.assign(a,t)},_forgetNodeBindings:function(e,n){let t=i.find(n=>n.node===e);if(!t)return;let r=t.bindings.find(e=>e.fn===n);if(!r)return;let a=t.bindings.indexOf(r);t.bindings.splice(a,1)},_getNodeBindings:function(e,n){let t=i.find(n=>n.node===e);if(!t)return;let r=t.bindings.find(e=>e.fn===n);return r||void 0},_getNodeHasBindings:function(e){return!!i.find(n=>n.node===e)},_makeEnterFn:function(n){return function(t){let i=e._isEnter(t);i&&n.apply(this,arguments)}},_isEnter:function(e){return e.key&&"enter"===e.key.toLowerCase()},_preventSpacebarScroll:function(n){let t=n.target,i=e._isNodeType(t,"button"),r=e._isNodeType(t,"input","textarea"),a=e._isSpacebar(n);i||r||!a||n.preventDefault()},_makeSpacebarFn:function(n){return function(t){let i=e._isSpacebar(t);i&&n.apply(this,arguments)}},_isSpacebar:function(e){return e.key&&(" "===e.key||"spacebar"===e.key.toLowerCase())},_isNodeType:function(e,...n){n=n.map(e=>e.toLowerCase());let t=e.nodeName.toLowerCase();return n.includes(t)}};return{activate:e.activate,deactivate:e.deactivate}}();const o={};let c=0;const d=document.getElementById("example-output"),s=e=>d.innerHTML=c+=e;r(".js-example-subscribe",()=>function(e,n){e in o||(o[e]=[]);let t=o[e];!1===t.includes(n)&&t.push(n)}("example-event",s)),r(".js-example-publish",()=>function(e,...n){if(e in o){o[e].forEach(e=>{e.apply(null,n)})}}("example-event",1)),r(".js-example-unsubscribe",()=>function(e,n){if(e in o){let t=o[e],i=t.indexOf(n);-1!==i&&t.splice(i,1)}}("example-event",s))}]);
//# sourceMappingURL=bundle.js.map