/*!
 * Banquette UtilsDom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=[],t=!1,n=!1;function ready(){if(!t){t=!0;for(var n=0;n<e.length;n++)e[n].fn.call(window,e[n].ctx);e=[]}}function readyStateChange(){"complete"===document.readyState&&ready()}exports.docReady=function docReady(a,d){if("function"!=typeof a)throw new TypeError("callback for docReady(fn) must be a function");t?setTimeout((function(){a(d)}),1):(e.push({fn:a,ctx:d}),"complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(ready,1):n||(document.addEventListener?(document.addEventListener("DOMContentLoaded",ready,!1),window.addEventListener("load",ready,!1)):(document.attachEvent("onreadystatechange",readyStateChange),window.attachEvent("onload",ready)),n=!0))};
