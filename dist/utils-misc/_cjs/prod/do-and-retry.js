/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/promise/_cjs/prod/observable-promise"),r=require("@banquette/utils-type/_cjs/prod/is-promise-like"),t=require("@banquette/utils-type/_cjs/prod/is-valid-number");function doAndRetry(n,i){var a=t.isValidNumber(n.maxRetryDelay)?n.maxRetryDelay:1e4,o=t.isValidNumber(n.maxTry)?n.maxTry:3,u=t.isValidNumber(n.minRetryDelay)?n.minRetryDelay:500,y=1,doTry=function(e,t,n){var onFailure=function(r){n(r),o<=0||y++<o?(u=Math.min(a,2*u),setTimeout((function(){doTry(e,t,n)}),u)):t(r)};try{var s=i();if(!r.isPromiseLike(s))return e(s);s.then(e).catch(onFailure)}catch(e){onFailure(e)}};return new e.ObservablePromise((function(e,r,t){doTry(e,r,t)}))}exports.doAndRetry=doAndRetry,exports.doAndRetryFactory=function doAndRetryFactory(e,r,t){return function(){for(var n=arguments,i=[],a=0;a<arguments.length;a++)i[a]=n[a];return doAndRetry(e,(function(){return t.apply(r,i)}))}};
