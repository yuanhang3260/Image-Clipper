!function(A,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jquery"),require("bootstrap")):"function"==typeof define&&define.amd?define("ImageClipper",["jquery","bootstrap"],e):"object"==typeof exports?exports.ImageClipper=e(require("jquery"),require("bootstrap")):A.ImageClipper=e(A.jQuery,A.bootstrap)}(window,function(A,e){return function(A){var e={};function t(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return A[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=A,t.c=e,t.d=function(A,e,i){t.o(A,e)||Object.defineProperty(A,e,{configurable:!1,enumerable:!0,get:i})},t.r=function(A){Object.defineProperty(A,"__esModule",{value:!0})},t.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return t.d(e,"a",e),e},t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},t.p="",t(t.s=15)}([function(e,t){e.exports=A},function(A,e){A.exports="data:application/vnd.ms-fontobject;base64,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"},function(A,e,t){var i,n,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=i.apply(this,arguments)),n}),r=function(A){var e={};return function(A){if("function"==typeof A)return A();if(void 0===e[A]){var t=function(A){return document.querySelector(A)}.call(this,A);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(A){t=null}e[A]=t}return e[A]}}(),l=null,c=0,d=[],s=t(11);function p(A,e){for(var t=0;t<A.length;t++){var i=A[t],n=o[i.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](i.parts[a]);for(;a<i.parts.length;a++)n.parts.push(f(i.parts[a],e))}else{var r=[];for(a=0;a<i.parts.length;a++)r.push(f(i.parts[a],e));o[i.id]={id:i.id,refs:1,parts:r}}}}function v(A,e){for(var t=[],i={},n=0;n<A.length;n++){var o=A[n],a=e.base?o[0]+e.base:o[0],r={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(r):t.push(i[a]={id:a,parts:[r]})}return t}function g(A,e){var t=r(A.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===A.insertAt)i?i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),d.push(e);else if("bottom"===A.insertAt)t.appendChild(e);else{if("object"!=typeof A.insertAt||!A.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=r(A.insertInto+" "+A.insertAt.before);t.insertBefore(e,n)}}function u(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A);var e=d.indexOf(A);e>=0&&d.splice(e,1)}function m(A){var e=document.createElement("style");return A.attrs.type="text/css",h(e,A.attrs),g(A,e),e}function h(A,e){Object.keys(e).forEach(function(t){A.setAttribute(t,e[t])})}function f(A,e){var t,i,n,o;if(e.transform&&A.css){if(!(o=e.transform(A.css)))return function(){};A.css=o}if(e.singleton){var a=c++;t=l||(l=m(e)),i=B.bind(null,t,a,!1),n=B.bind(null,t,a,!0)}else A.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(A){var e=document.createElement("link");return A.attrs.type="text/css",A.attrs.rel="stylesheet",h(e,A.attrs),g(A,e),e}(e),i=function(A,e,t){var i=t.css,n=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||o)&&(i=s(i));n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([i],{type:"text/css"}),r=A.href;A.href=URL.createObjectURL(a),r&&URL.revokeObjectURL(r)}.bind(null,t,e),n=function(){u(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(e),i=function(A,e){var t=e.css,i=e.media;i&&A.setAttribute("media",i);if(A.styleSheet)A.styleSheet.cssText=t;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(t))}}.bind(null,t),n=function(){u(t)});return i(A),function(e){if(e){if(e.css===A.css&&e.media===A.media&&e.sourceMap===A.sourceMap)return;i(A=e)}else n()}}A.exports=function(A,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=v(A,e);return p(t,e),function(A){for(var i=[],n=0;n<t.length;n++){var a=t[n];(r=o[a.id]).refs--,i.push(r)}A&&p(v(A,e),e);for(n=0;n<i.length;n++){var r;if(0===(r=i[n]).refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete o[r.id]}}}};var b,w=(b=[],function(A,e){return b[A]=e,b.filter(Boolean).join("\n")});function B(A,e,t,i){var n=t?"":i.css;if(A.styleSheet)A.styleSheet.cssText=w(e,n);else{var o=document.createTextNode(n),a=A.childNodes;a[e]&&A.removeChild(a[e]),a.length?A.insertBefore(o,a[e]):A.appendChild(o)}}},function(A,e){A.exports=function(A){var e=[];return e.toString=function(){return this.map(function(e){var t=function(A,e){var t=A[1]||"",i=A[3];if(!i)return t;if(e&&"function"==typeof btoa){var n=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map(function(A){return"/*# sourceURL="+i.sourceRoot+A+" */"});return[t].concat(o).concat([n]).join("\n")}var a;return[t].join("\n")}(e,A);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(A,t){"string"==typeof A&&(A=[[null,A,""]]);for(var i={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(i[o]=!0)}for(n=0;n<A.length;n++){var a=A[n];"number"==typeof a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(A,e,t){var i,n,o;n=[],void 0===(o="function"==typeof(i=function(){"use strict";return function(A,e,t){e=e||"",t=t||512;for(var i=atob(A),n=[],o=0;o<i.length;o+=t){for(var a=i.slice(o,o+t),r=new Array(a.length),l=0;l<a.length;l++)r[l]=a.charCodeAt(l);var c=new Uint8Array(r);n.push(c)}var d=new Blob(n,{type:e});return d}})?i.apply(e,n):i)||(A.exports=o)},function(A,e){A.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24iIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iOTYwIiBkZXNjZW50PSItNjQiIC8+CjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjA7IiBob3Jpei1hZHYteD0iNTEyIiBkPSIiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAwOyIgZ2x5cGgtbmFtZT0iY2FtZXJhIiBkPSJNNDIwIDEwLjY2N2M2OC43MDkgMTE4LjYyNSAxMzYuNDk0IDIzOC4xNzIgMjA2IDM1NmwxNTYtMjcwYy03NC02MC0xNjgtOTYtMjcwLTk2LTMyIDAtNjIgNC05MiAxMHpNMTA0IDI5OC42NjdoNDE0bC0xNTgtMjcwYy0xMjIgNDYtMjE2IDE0Ni0yNTYgMjcwek0xOTggNzE0LjY2N2M3MS45OTktMTI0LjY2NyAxNDMuNTg3LTI0OS43NDYgMjE2LTM3NGgtMzIwYy02IDI4LTggNTYtOCA4NiAwIDExMiA0MiAyMTIgMTEyIDI4OHpNOTMwIDUxMi42NjdjNi0yOCA4LTU2IDgtODYgMC0xMTItNDItMjEyLTExMi0yODhsLTIwNCAzNTItMTIgMjJoMzIwek05MjAgNTU0LjY2N2gtNDE0bDE1OCAyNzBjMTIyLTQ2IDIxNi0xNDYgMjU2LTI3MHpNNDAyIDQ5MC42NjdsLTQtNC0xNTYgMjcwYzc0IDYwIDE2OCA5NiAyNzAgOTYgMzIgMCA2Mi00IDkyLTEweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5YzY7IiBnbHlwaC1uYW1lPSJ1cGxvYWQyIiBkPSJNMCA2NGgxMDI0di02NGgtMTAyNHpNMTAyNCAxOTJ2LTY0aC0xMDI0djY0bDEyOCAyNTZoMjU2di0xMjhoMjU2djEyOGgyNTZ6TTIyNCA2NDBsMjg4IDI4OCAyODgtMjg4aC0yMjR2LTI1NmgtMTI4djI1NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlYTU3OyIgZ2x5cGgtbmFtZT0iY3JvcCIgZD0iTTgzMiA3MDRsMTkyIDE5Mi02NCA2NC0xOTItMTkyaC00NDh2MTkyaC0xMjh2LTE5MmgtMTkydi0xMjhoMTkydi01MTJoNTEydi0xOTJoMTI4djE5MmgxOTJ2MTI4aC0xOTJ2NDQ4ek0zMjAgNjQwaDMyMGwtMzIwLTMyMHYzMjB6TTM4NCAyNTZsMzIwIDMyMHYtMzIwaC0zMjB6IiAvPgo8L2ZvbnQ+PC9kZWZzPjwvc3ZnPg=="},function(A,e){A.exports="data:application/font-woff;base64,d09GRgABAAAAAAXsAAsAAAAABaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIHAWNtYXAAAAFoAAAAZAAAAGQAl72IZ2FzcAAAAcwAAAAIAAAACAAAABBnbHlmAAAB1AAAAcgAAAHIThHmyGhlYWQAAAOcAAAANgAAADYQulCDaGhlYQAAA9QAAAAkAAAAJAfCA8hobXR4AAAD+AAAABwAAAAcEgAAVmxvY2EAAAQUAAAAEAAAABAA3gGEbWF4cAAABCQAAAAgAAAAIAAOAEJuYW1lAAAERAAAAYYAAAGGmUoJ+3Bvc3QAAAXMAAAAIAAAACAAAwAAAAMDgAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6lcDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAEgAAAAOAAgAAgAGAAEAIOkA6cbqV//9//8AAAAAACDpAOnG6lf//f//AAH/4xcEFj8VrwADAAEAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAYAVgABA6oDVQANABYAJAAtADYAPwAAJTY3PgE3NjcTDgEjIiYBIQMmJy4BJyYTFhceARcWFyEuATU0NgUeARUUBgcDJyUhExYXHgEXFgUHAz4BMzIWFwGkGhkaMxoaGpw3ik0YLf6tAZ6eLigoQhgZTxsbGzYbGxv+wAQEOwMRBAQ7NcwMATb+Yp4uKChCGBn+CQScN4pNGC0XCywtLFosLC3+8i0zBQEl/vIRGxtFKikBzy8vL10vLy4VKhdUk5EVKxZUkzkBYBYqAQ4SGhtGKSpuBAEOLTMGBAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAADAAD/wAQAA8AAEgAVABgAAAE3JwchNSMVIxUzESEVMzUzNSMBIQEXAREDQMBAwP5AgMDAAgCAwMD+AAFA/sBAAUACwMBAwMDAgP4AwMCAAYD+wEABQP7AAAAAAAEAAAAAAAD5U/zJXw889QALBAAAAAAA1s4GAwAAAADWzgYDAAD/wAQAA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAcEAAAAAAAAAAAAAAACAAAABAAAVgQAAAAEAAAAAAAAAAAKABQAHgCMALYA5AABAAAABwBAAAYAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},function(A,e){A.exports="data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SBwEAAAC8AAAAYGNtYXAAl72IAAABHAAAAGRnYXNwAAAAEAAAAYAAAAAIZ2x5Zk4R5sgAAAGIAAAByGhlYWQQulCDAAADUAAAADZoaGVhB8IDyAAAA4gAAAAkaG10eBIAAFYAAAOsAAAAHGxvY2EA3gGEAAADyAAAABBtYXhwAA4AQgAAA9gAAAAgbmFtZZlKCfsAAAP4AAABhnBvc3QAAwAAAAAFgAAAACAAAwOAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADqVwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQASAAAAA4ACAACAAYAAQAg6QDpxupX//3//wAAAAAAIOkA6cbqV//9//8AAf/jFwQWPxWvAAMAAQAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAABgBWAAEDqgNVAA0AFgAkAC0ANgA/AAAlNjc+ATc2NxMOASMiJgEhAyYnLgEnJhMWFx4BFxYXIS4BNTQ2BR4BFRQGBwMnJSETFhceARcWBQcDPgEzMhYXAaQaGRozGhoanDeKTRgt/q0Bnp4uKChCGBlPGxsbNhsbG/7ABAQ7AxEEBDs1zAwBNv5ini4oKEIYGf4JBJw3ik0YLRcLLC0sWiwsLf7yLTMFASX+8hEbG0UqKQHPLy8vXS8vLhUqF1STkRUrFlSTOQFgFioBDhIaG0YpKm4EAQ4tMwYEAAMAAAAABAADoAADAA0AFAAANyEVISUVITUTIRUhNSElCQEjESMRAAQA/AAEAPwAgAEAAQABAP1gASABIOCAQEDAQEABAICAwAEg/uD/AAEAAAAAAAMAAP/ABAADwAASABUAGAAAATcnByE1IxUjFTMRIRUzNTM1IwEhARcBEQNAwEDA/kCAwMACAIDAwP4AAUD+wEABQALAwEDAwMCA/gDAwIABgP7AQAFA/sAAAAAAAQAAAAAAAPlT/MlfDzz1AAsEAAAAAADWzgYDAAAAANbOBgMAAP/ABAADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAAEAAABAAAAAAAAAAAAAAAAAAAABwQAAAAAAAAAAAAAAAIAAAAEAABWBAAAAAQAAAAAAAAAAAoAFAAeAIwAtgDkAAEAAAAHAEAABgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(A,e){A.exports=function(A){return"string"!=typeof A?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),/["'() \t\n]/.test(A)?'"'+A.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':A)}},function(A,e,t){var i=t(8);(A.exports=t(3)(!1)).push([A.i,"@font-face {\n  font-family: 'icomoon';\n  src:  url("+i(t(1))+");\n  src:  url("+i(t(1))+"#iefix) format('embedded-opentype'),\n    url("+i(t(7))+") format('truetype'),\n    url("+i(t(6))+") format('woff'),\n    url("+i(t(5))+'#icomoon) format(\'svg\');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^="icon-"], [class*=" icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'icomoon\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-camera-hy:before {\n  content: "\\E900";\n}\n.icon-upload2-hy:before {\n  content: "\\E9C6";\n}\n.icon-crop-hy:before {\n  content: "\\EA57";\n}\n',""])},function(A,e,t){var i=t(9);"string"==typeof i&&(i=[[A.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(2)(i,n);i.locals&&(A.exports=i.locals)},function(A,e){A.exports=function(A){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!A||"string"!=typeof A)return A;var t=e.protocol+"//"+e.host,i=t+e.pathname.replace(/\/[^\/]*$/,"/");return A.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(A,e){var n,o=e.trim().replace(/^"(.*)"$/,function(A,e){return e}).replace(/^'(.*)'$/,function(A,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?A:(n=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(A,e,t){(A.exports=t(3)(!1)).push([A.i,"div.image-clipper-box {\n  padding: 1%;\n  color: #333;\n  text-align: center;\n  /* modal-content */ }\n  div.image-clipper-box div.modal-dialog {\n    display: inline-block;\n    max-width: none; }\n  div.image-clipper-box div.modal-content {\n    /* modal-body */ }\n    div.image-clipper-box div.modal-content div.modal-header {\n      height: 52px;\n      padding: 0;\n      border-bottom: 1px solid #e9e9e9;\n      background-color: #f3f3f3; }\n      div.image-clipper-box div.modal-content div.modal-header .select-page-title {\n        margin: 12px 16px;\n        font-size: 18px; }\n      div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container {\n        display: none; }\n        div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container .edit-page-title {\n          display: inline-block;\n          position: relative;\n          font-size: 18px;\n          color: #666;\n          text-align: left;\n          border-top-right-radius: 3px;\n          border-top-left-radius: 3px; }\n          div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container .edit-page-title i {\n            position: absolute;\n            color: #4d6c8e; }\n          div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container .edit-page-title i.icon-crop-hy, div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container .edit-page-title i.icon-edit-hy {\n            left: 61px;\n            top: 17px; }\n          div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container .edit-page-title i.icon-camera-hy {\n            left: 87px;\n            top: 16px; }\n          div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container .edit-page-title:hover {\n            cursor: pointer;\n            color: #333; }\n            div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container .edit-page-title:hover i {\n              color: #004085; }\n        div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container .crop-tab {\n          width: 96px;\n          padding: 12px 16px;\n          border-left: 1px solid #e9e9e9;\n          border-right: 1px solid #f3f3f3; }\n        div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container h5.crop-tab-selected {\n          cursor: pointer;\n          background-color: #fafafa;\n          padding-bottom: 18px;\n          border-right: 1px solid #e9e9e9;\n          color: #222; }\n          div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container h5.crop-tab-selected i {\n            color: #004085; }\n        div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container .preview-tab {\n          width: 121px;\n          padding: 12px 16px;\n          border-right: 1px solid #e9e9e9;\n          border-left: 1px solid #f3f3f3; }\n          div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container .preview-tab i {\n            font-size: 19px; }\n        div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container h5.preview-tab-selected {\n          cursor: pointer;\n          background-color: #fafafa;\n          padding-bottom: 18px;\n          border-left: 1px solid #e9e9e9;\n          color: #222; }\n          div.image-clipper-box div.modal-content div.modal-header div.edit-page-title-container h5.preview-tab-selected i {\n            color: #004085; }\n    div.image-clipper-box div.modal-content div.modal-body {\n      background-color: #fafafa;\n      padding: 0px; }\n      div.image-clipper-box div.modal-content div.modal-body div.select-file {\n        width: 500px;\n        /* label.custom-file */ }\n        div.image-clipper-box div.modal-content div.modal-body div.select-file label.custom-file {\n          height: auto;\n          padding: 16px;\n          background-color: #e9e9e9; }\n          div.image-clipper-box div.modal-content div.modal-body div.select-file label.custom-file div.label-content-container {\n            position: relative;\n            width: 200px;\n            margin: auto;\n            text-align: center; }\n            div.image-clipper-box div.modal-content div.modal-body div.select-file label.custom-file div.label-content-container i {\n              color: #aeaeae;\n              font-size: 38px; }\n            div.image-clipper-box div.modal-content div.modal-body div.select-file label.custom-file div.label-content-container span.label-text {\n              display: block;\n              font-size: 14px;\n              color: #222; }\n          div.image-clipper-box div.modal-content div.modal-body div.select-file label.custom-file input {\n            display: none; }\n          div.image-clipper-box div.modal-content div.modal-body div.select-file label.custom-file:hover {\n            cursor: pointer;\n            background-color: #e6e6e6; }\n      div.image-clipper-box div.modal-content div.modal-body div.canvas-container {\n        display: none;\n        position: relative;\n        margin: 16px 75px;\n        width: 500px;\n        height: 300px; }\n        div.image-clipper-box div.modal-content div.modal-body div.canvas-container canvas.image-clip, div.image-clipper-box div.modal-content div.modal-body div.canvas-container canvas.clip-container {\n          position: absolute;\n          left: 0px;\n          top: 0px; }\n        div.image-clipper-box div.modal-content div.modal-body div.canvas-container canvas.clip-upload {\n          display: none;\n          margin: 16px; }\n      div.image-clipper-box div.modal-content div.modal-body div.preview-container {\n        display: none;\n        width: 650px;\n        height: 332px;\n        padding: 10px 40px;\n        /* preview-container-inner */ }\n        div.image-clipper-box div.modal-content div.modal-body div.preview-container div.preview-container-inner {\n          display: flex;\n          height: 312px; }\n          div.image-clipper-box div.modal-content div.modal-body div.preview-container div.preview-container-inner .square-preview, div.image-clipper-box div.modal-content div.modal-body div.preview-container div.preview-container-inner .circle-preview {\n            display: flex;\n            flex-grow: 1; }\n            div.image-clipper-box div.modal-content div.modal-body div.preview-container div.preview-container-inner .square-preview canvas.preview-canvas, div.image-clipper-box div.modal-content div.modal-body div.preview-container div.preview-container-inner .circle-preview canvas.preview-canvas {\n              margin: auto; }\n    div.image-clipper-box div.modal-content div.modal-footer {\n      position: relative;\n      border-top: 1px solid #e9e9e9;\n      background-color: #f3f3f3; }\n      div.image-clipper-box div.modal-content div.modal-footer button {\n        font-size: 14px;\n        padding: 5px 10px; }\n      div.image-clipper-box div.modal-content div.modal-footer button.btn-submit {\n        display: none;\n        color: white; }\n      div.image-clipper-box div.modal-content div.modal-footer button.btn-cancel {\n        color: #333;\n        border-color: #cacaca;\n        background-color: #fcfcfc; }\n        div.image-clipper-box div.modal-content div.modal-footer button.btn-cancel:hover {\n          background-color: #ededed;\n          border-color: #cacaca; }\n        div.image-clipper-box div.modal-content div.modal-footer button.btn-cancel:focus {\n          outline: none;\n          border-color: #cacaca;\n          color: #333; }\n      div.image-clipper-box div.modal-content div.modal-footer div.err-msg {\n        display: none;\n        margin: 0;\n        padding: 5px 10px;\n        position: absolute;\n        left: 16px;\n        top: 12px; }\n\n/* image-clipper-box */\n",""])},function(A,e,t){var i=t(12);"string"==typeof i&&(i=[[A.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(2)(i,n);i.locals&&(A.exports=i.locals)},function(A,t){A.exports=e},function(A,e,t){"use strict";t.r(e);var i=t(0),n=t.n(i),o=(t(14),t(4)),a=t.n(o),r=(t(13),t(10),n()('<div class="modal image-clipper-box" data-keyboard="false" data-backdrop="static" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title select-page-title"></h5><div class="edit-page-title-container"><h5 class="modal-title edit-page-title crop-tab crop-tab-selected"><span>Crop</span><i class="icon-crop-hy"></i></h5><h5 class="modal-title edit-page-title preview-tab"><span>Preview</span><i class="icon-camera-hy"></i></h5></div></div><div class="modal-body"><div class="select-file"><label class="custom-file"><div class="label-content-container"><i class="icon-upload2-hy"></i><span class="label-text">Upload Image</span></div><input type="file" class="file-select-input"></label></div><div class="canvas-container"><canvas class="image-blur" width="500" height="300"></canvas><canvas class="image-clip" width="500" height="300"></canvas><canvas class="clip-container" width="500" height="300"></canvas></div><div class="preview-container"><div class="preview-container-inner"><div class="square-preview"><canvas class="preview-canvas preview-canvas-square" width="165" height="165"></canvas></div><div class="circle-preview"><canvas class="preview-canvas preview-canvas-circle" width="165" height="165"></canvas></div></div></div></div><div class="modal-footer"><button type="button" class="btn btn-success btn-submit">Submit</button><button type="button" class="btn btn-secondary btn-cancel">Cancel</button><div class="alert alert-danger err-msg" role="alert">Invalid image formmat</div></div></div></div></div>'));function l(A){var e;this.title=A.title||"Please Select Image",this.maxFileSize=A.maxFileSize||5242880,e=A.outputFormmat,this.outputFormmat="png"===e||"jpeg"===e||"bmp"===e?A.outputFormmat:"png",this.task=A.callback||function(){},this.box=r,this.initialized=!1}l.prototype.open=function(){this.box.modal("show"),this.initialized||(this.Init(),this.initialized=!0)},l.prototype.Init=function(){var A=r.find(".select-page-title");A.html(this.title||"Please Select Image");var e=r.find(".edit-page-title-container"),t=r.find(".select-file"),i=t.find(".file-select-input"),o=t.find(".label-context"),l=r.find("button.btn-cancel"),c=r.find("button.btn-submit"),d=r.find("div.err-msg"),s=this;function p(){Q=null,G=!1,D=null,C=!1,T=null,Y=null,N=null,j=null,t.show(),v.addClass("crop-tab-selected"),g.hide(),x.removeClass("preview-tab-selected"),I.hide(),c.hide(),d.html(null).hide(),e.hide(),A.show(),o.html("Choose File"),m.clearRect(0,0,u.width,u.height),f.clearRect(0,0,h.width,h.height),B.clearRect(0,0,B.width,B.height),i.val(null)}l.click(function(){r.modal("hide"),p()}),c.click(function(){var A=(T-D.startX)/D.scale,e=(Y-D.startY)/D.scale,t=N/D.scale,n=document.createElement("canvas");n.width=t,n.height=t,n.getContext("2d").drawImage(Q,A,e,t,t,0,0,t,t);var o=n.toDataURL("image/"+s.outputFormmat),l=a()(o.split(",")[1],"image/"+s.outputFormmat);s.task(i.val(),l),r.modal("hide"),p()});var v=r.find(".crop-tab"),g=r.find(".canvas-container");v.click(function(){v.addClass("crop-tab-selected"),g.show(),x.removeClass("preview-tab-selected"),I.hide()});var u=g.find("canvas.image-blur")[0],m=u.getContext("2d");m.globalAlpha=.3;var h=g.find("canvas.image-clip")[0],f=h.getContext("2d"),b=n()("canvas.clip-container"),w=b[0],B=w.getContext("2d"),x=r.find(".preview-tab"),I=r.find(".preview-container");x.click(function(){x.addClass("preview-tab-selected"),I.show(),v.removeClass("crop-tab-selected"),g.hide(),function(){var A=(T-D.startX)/D.scale,e=(Y-D.startY)/D.scale,t=N/D.scale,i=M.width;y.clearRect(0,0,i,i),y.lineWidth=3,y.strokeStyle="#ccc",y.strokeRect(0,0,i,i),y.drawImage(Q,A,e,t,t,V,V,i-2*V,i-2*V);var n=V-1;E.clearRect(0,0,i,i),E.beginPath(),E.arc(i/2,i/2,i/2-1,0,2*Math.PI),E.lineWidth=1.5,E.strokeStyle="#c7c7c7",E.stroke(),E.beginPath(),E.arc(i/2,i/2,i/2-1-n,0,2*Math.PI),E.lineWidth=0,E.strokeStyle="white",E.clip(),E.drawImage(Q,A,e,t,t,n,n,i-2*n,i-2*n)}()});var M=n()("canvas.preview-canvas-square")[0],y=M.getContext("2d"),E=n()("canvas.preview-canvas-circle")[0].getContext("2d"),Q=null,D=null,G=!1,C=!1,T=null,Y=null,N=null,j=null,k=10;function O(A,e,t){A===T&&e===Y&&t===N||(T=A,Y=e,N=t,X(),K())}function U(A,e){return A>T&&A<T+N&&e>Y&&e<Y+N}function F(A,e){return T-k/2<=A&&A<=T+k/2&&Y-k/2<=e&&e<=Y+k}function L(A,e){var t=T+N;return t-k/2<=A&&A<=t+k/2&&Y-k/2<=e&&e<=Y+k}function R(A,e){var t=T+N,i=Y+N;return t-k/2<=A&&A<=t+k/2&&i-k/2<=e&&e<=i+k}function P(A,e){var t=Y+N;return T-k/2<=A&&A<=T+k/2&&t-k/2<=e&&e<=t+k}i.change(function(){if(this.files){var i=this.files[0];if(i.size>s.maxFileSize)d.html("File size over limit "+(n=s.maxFileSize,n<1024?n+" B":n<1048576?(n/1024).toFixed(1)+" KB":(n/1048576).toFixed(1)+" MB")).show();else{var n;o.html(i.name),Q=new Image;var a=new FileReader;a.onload=function(){var i=a.result;Q.src=i,setTimeout(function(){m.clearRect(0,0,u.width,u.height),f.clearRect(0,0,h.width,h.height),B.clearRect(0,0,B.width,B.height),D=function(){var A=Q.width/Q.height;if(u.width>u.height*A){const e=u.height*A,t=u.height;return{width:e,height:t,startX:(u.width-e)/2,startY:0,scale:t/Q.height}}{const e=u.width,t=u.width/A;return{width:e,height:t,startX:0,startY:(u.height-t)/2,scale:e/Q.width}}}();try{m.drawImage(Q,D.startX,D.startY,D.width,D.height),t.hide(),g.show(),A.hide(),e.show(),d.html(null).hide(),c.show()}catch(A){return void d.html("Invalid image formmat").show()}!function(){D.width>D.height?(N=D.height/1.3-4,T=D.startX+D.width/2-N/2,Y=D.startY+2):(N=D.width/1.3-4,T=D.startX+2,Y=D.startY+D.height/2-N/2);j=N/3,X(),K()}(),G=!0},50)},a.readAsDataURL(i)}}});const z={TOPLEFT:"top-left",TOPRIGTH:"top-right",BOTTOMLEFT:"bottom-left",BOTTOMRIGTH:"bottom-right",MOVE:"move"};var S=0,Z=0,H=null;function W(A){if(A.stopPropagation(),G){var e=A.clientX-b.offset().left,t=A.clientY-b.offset().top;if(C||(F(e,t)?b.css("cursor","nw-resize"):L(e,t)?b.css("cursor","ne-resize"):R(e,t)?b.css("cursor","se-resize"):P(e,t)?b.css("cursor","sw-resize"):U(e,t)?b.css("cursor","move"):b.css("cursor","default")),C){if(H==z.TOPLEFT){let A=T+N,i=Y+N,n=Math.max(j,A-e,i-t);O(A-(n=Math.min(n,A-(D.startX+2),i-(D.startY+2))),i-n,n)}else if(H==z.BOTTOMRIGTH){let A=Math.max(j,e-T,t-Y);A=Math.min(A,D.startX+D.width-2-T,D.startY+D.height-2-Y),O(T,Y,A)}else if(H==z.TOPRIGTH){let A=T,i=Y+N,n=Math.max(j,e-A,i-t);n=Math.min(n,D.startX+D.width-2-A,i-(D.startY+2)),O(T,i-n,n)}else if(H==z.BOTTOMLEFT){let A=T+N,i=Y,n=Math.max(j,A-e,t-i);O(A-(n=Math.min(n,A-(D.startX+2),D.startY+D.height-2-i)),Y,n)}else if(H==z.MOVE){let A=T+(e-S);A=Math.max(A,D.startX+2),A=Math.min(A,D.startX+D.width-2-N);let i=Y+(t-Z);i=Math.max(i,D.startY+2),O(A,i=Math.min(i,D.startY+D.height-2-N),N)}S=e,Z=t}}}function J(A){A.stopPropagation(),C=!1}function X(){var A=(T-D.startX)/D.scale,e=(Y-D.startY)/D.scale,t=N/D.scale;f.clearRect(0,0,h.width,h.height),f.drawImage(Q,A,e,t,t,T,Y,N,N)}b.on("mousedown",function(A){if(A.stopPropagation(),G){C=!0;var e=S=A.clientX-b.offset().left,t=Z=A.clientY-b.offset().top;H=F(e,t)?z.TOPLEFT:L(e,t)?z.TOPRIGTH:R(e,t)?z.BOTTOMRIGTH:P(e,t)?z.BOTTOMLEFT:U(e,t)?z.MOVE:null}}),b.on("mousemove",W),b.on("mouseup",J),r.on("mouseup",function(A){J(A)}),r.on("mousemove",function(A){C&&W(A)}),r.on("keydown",function(A){27==A.keyCode&&(r.modal("hide"),p())});var V=6;function K(){B.clearRect(0,0,w.width,w.height),B.lineWidth=3;var A={x1:T,x2:T+N,y1:Y,y2:Y+N};B.beginPath(),B.moveTo(A.x1+k,A.y1),B.lineTo(A.x1,A.y1),B.lineTo(A.x1,A.y1+k),B.stroke(),B.beginPath(),B.moveTo(A.x2-k,A.y1),B.lineTo(A.x2,A.y1),B.lineTo(A.x2,A.y1+k),B.stroke(),B.beginPath(),B.moveTo(A.x2-k,A.y2),B.lineTo(A.x2,A.y2),B.lineTo(A.x2,A.y2-k),B.stroke(),B.beginPath(),B.moveTo(A.x1+k,A.y2),B.lineTo(A.x1,A.y2),B.lineTo(A.x1,A.y2-k),B.stroke()}this.initialized=!0},e.default=l}]).default});
//# sourceMappingURL=image-clipper.dist.js.map