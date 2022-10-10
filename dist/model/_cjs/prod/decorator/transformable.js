/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-function"),r=require("@banquette/utils-type/_cjs/prod/is-undefined");exports.Transformable=function Transformable(t){for(var n=arguments,i=[],u=1;u<arguments.length;u++)i[u-1]=n[u];var s=e.isFunction(t)?void 0:t;return r.isUndefined(s)&&i.push(t),function(e,r,t){for(var n=0,u=i;n<u.length;n++){(0,u[n])(s)(e,r,t)}}};
