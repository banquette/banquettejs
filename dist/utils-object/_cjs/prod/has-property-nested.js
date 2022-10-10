/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-object");exports.hasPropertyNested=function hasPropertyNested(r){for(var t=arguments,s=[],o=1;o<arguments.length;o++)s[o-1]=t[o];if(!e.isObject(r))return!1;for(var n=0,u=s;n<u.length;n++){var a=u[n];if(!r.hasOwnProperty(a))return!1;r=r[a]}return!0};
