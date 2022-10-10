/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/ensure-array"),t=require("@banquette/utils-type/_cjs/prod/ensure-boolean"),u=require("@banquette/utils-type/_cjs/prod/ensure-number"),r=require("@banquette/utils-type/_cjs/prod/ensure-object"),n=require("@banquette/utils-type/_cjs/prod/ensure-string"),s=require("@banquette/utils-type/_cjs/prod/is-array"),a=require("@banquette/utils-type/_cjs/prod/is-object"),i=require("@banquette/utils-type/_cjs/prod/is-undefined");function getObjectValue(e,t,u){void 0===u&&(u=null),s.isArray(t)||(t=String(t).split("->"));for(var r=e,n=0,l=t;n<l.length;n++){var b=l[n];if(!a.isObject(r)||i.isUndefined(r[b]))return u;r=r[b]}return r}exports.getObjectValue=getObjectValue,exports.getObjectValueAsArray=function getObjectValueAsArray(t,u,r){return void 0===r&&(r=[]),e.ensureArray(getObjectValue(t,u,r))},exports.getObjectValueAsBoolean=function getObjectValueAsBoolean(e,u,r){return void 0===r&&(r=!1),t.ensureBoolean(getObjectValue(e,u,r))},exports.getObjectValueAsNumber=function getObjectValueAsNumber(e,t,r){return u.ensureNumber(getObjectValue(e,t,r))},exports.getObjectValueAsObject=function getObjectValueAsObject(e,t,u){return void 0===u&&(u=null),r.ensureObject(getObjectValue(e,t,u))},exports.getObjectValueAsString=function getObjectValueAsString(e,t,u){return n.ensureString(getObjectValue(e,t,u))},exports.getValueInObject=function getValueInObject(e,t,u){return void 0===u&&(u=null),getObjectValue(e,t,u)};
