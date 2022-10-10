/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.oncePerCycleProxy=function oncePerCycleProxy(e,r){void 0===r&&(r=null);var o=!1,t=[],n=r;return function(){for(var c=arguments,u=[],i=0;i<arguments.length;i++)u[i]=c[i];n=r||this,t=u,o||(queueMicrotask((function(){o=!1,e.apply(n,t)})),o=!0)}};
