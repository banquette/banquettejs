/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Symbol("default"),r=[];exports.recursionSafeProxy=function recursionSafeProxy(t,i){return void 0===i&&(i=e),function(){for(var e=arguments,n=[],o=0;o<arguments.length;o++)n[o]=e[o];if(r.indexOf(i)<0){r.push(i);try{return t.apply(this,n)}finally{var f=r.indexOf(i);f>-1&&r.splice(f,1)}}}};
