!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../rhelement/rhelement.umd.js")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd.js"],e):t.RhAvatar=e(t.RHElement)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var r=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),o=function t(e,r,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,r);if(void 0===i){var a=Object.getPrototypeOf(e);return null===a?void 0:t(a,r,n)}if("value"in i)return i.value;var o=i.get;return void 0!==o?o.call(n):void 0},s=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},t=function(t){function a(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,a))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(a,e),r(a,[{key:"html",get:function(){return"\n<style>\n:host {\n  display: block; }\n  :host canvas {\n    width: 100%;\n    image-rendering: optimizeSpeed;\n    \n    image-rendering: -moz-crisp-edges;\n    \n    image-rendering: -webkit-optimize-contrast;\n    \n    image-rendering: -o-crisp-edges;\n    \n    image-rendering: pixelated;\n    \n    -ms-interpolation-mode: nearest-neighbor;\n     }\n\n:host([hidden]) {\n  display: none; }\n</style>\n<canvas></canvas>"}},{key:"templateUrl",get:function(){return"rh-avatar.html"}},{key:"styleUrl",get:function(){return"rh-avatar.scss"}},{key:"value",get:function(){return this.getAttribute("value")},set:function(t){return this.setAttribute("value",t)}},{key:"shape",get:function(){return this.getAttribute("shape")||a.shapes.square},set:function(t){if(a.shapes[t])return this.setAttribute("shape",t);this.log('invalid shape "'+t+'", valid shapes are: '+Object.values(a.shapes))}}],[{key:"tag",get:function(){return"rh-avatar"}},{key:"observedAttributes",get:function(){return["value","shape"]}},{key:"shapes",get:function(){return{triangle:"triangle",square:"square"}}}]),r(a,[{key:"connectedCallback",value:function(){o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this._canvas=this.shadowRoot.querySelector("canvas"),this._canvas.width=608,this._canvas.height=608,this._squareSize=this._canvas.width/8,this._triangleSize=this._canvas.width/4,this._ctx=this._canvas.getContext("2d"),this._color1=window.getComputedStyle(this).getPropertyValue("--rh-theme--color--ui-accent").trim()||"#cce6ff",this._color2=window.getComputedStyle(this).getPropertyValue("--rh-theme--color--ui-accent--hover").trim()||"#464646",this.dispatchEvent(new CustomEvent(a.tag+":connected",{bubbles:!1}))}},{key:"attributeChangedCallback",value:function(t,e,r){var n=this;o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"attributeChangedCallback",this).apply(this,arguments);var i=this.getAttribute("value");this.connected?this._update(i):this.addEventListener(a.tag+":connected",function(){return n._update(i)})}},{key:"_update",value:function(t){var e=function(t){for(var e=5381,r=t.length;r;)e=33*e^t.charCodeAt(--r);return e>>>0}(t).toString(2).split("").map(function(t){return Number(t)});this._clear(),this._drawBackground(),this.shape===a.shapes.square?this._drawSquarePattern(e):this.shape===a.shapes.triangle&&this._drawTrianglePattern(e),this._drawGradient(),console.log(e.join("").padStart(32,0))}},{key:"_clear",value:function(){this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height)}},{key:"_drawBackground",value:function(){this._ctx.fillStyle=this._color1,this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height)}},{key:"_drawSquarePattern",value:function(t){if(this._ctx.fillStyle=this._color2,this._ctx)for(var e=t.length;e--;)t[e]&&this._drawMirroredSquare(e%4,Math.floor(e/4))}},{key:"_drawMirroredSquare",value:function(t,e){this._ctx&&(this._drawSquare(t,e),this._drawSquare(7-t,e))}},{key:"_drawSquare",value:function(t,e){this._ctx.fillRect(this._squareSize*t,this._squareSize*e,this._squareSize,this._squareSize)}},{key:"_drawTrianglePattern",value:function(t){if(this._ctx.fillStyle=this._color2,this._ctx)for(var e=t,r=e.length;r--;)if(e[r]){var n=Math.floor(r/2)%2,i=Math.floor(r/4),a=[n,i],o=[n,i],s=[n,i];switch(r%4){case 0:o[1]++,s[0]++,s[1]++;break;case 1:o[0]++,s[0]++,s[1]++;break;case 2:o[0]++,s[1]++;break;case 3:a[0]++,o[0]++,o[1]++,s[1]++}this._drawMirroredTriangle(a,o,s)}}},{key:"_drawMirroredTriangle",value:function(t,e,r){this._ctx&&(this._drawTriangle(t,e,r),this._drawTriangle([4-t[0],t[1]],[4-e[0],e[1]],[4-r[0],r[1]]))}},{key:"_drawTriangle",value:function(t,e,r){var n,i,a,o=this;this._ctx.beginPath(),(n=this._ctx).moveTo.apply(n,s(t.map(function(t){return t*o._triangleSize}))),(i=this._ctx).lineTo.apply(i,s(e.map(function(t){return t*o._triangleSize}))),(a=this._ctx).lineTo.apply(a,s(r.map(function(t){return t*o._triangleSize}))),this._ctx.closePath(),this._ctx.fill(),this._ctx.fill()}},{key:"_drawGradient",value:function(){var t=this._ctx.createLinearGradient(0,this._canvas.height,this._canvas.width,0);t.addColorStop(0,this._color2+"cc"),t.addColorStop(1,this._color2+"00"),t.addColorStop(1,this._color2+"CC"),this._ctx.fillStyle=t,this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height)}}]),a}();return e.create(t),t});
//# sourceMappingURL=rh-avatar.umd.js.map