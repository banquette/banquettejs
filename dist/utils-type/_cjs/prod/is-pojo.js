/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./is-array.js"),e=require("./is-scalar.js"),testObjValue=function(t){if(r.isArray(t)){for(var o=0,i=t;o<i.length;o++){var n=i[o];if(!testObjValue(n))return!1}return!0}return e.isScalar(t)||isPojo(t,!0)};function isPojo(r,e){if(void 0===e&&(e=!0),null===r||"object"!=typeof r)return!1;var t=Object.getPrototypeOf(r);if(null!==t&&t!==Object.prototype)return!1;if(!e)return!0;for(var o=0,i=Object.keys(r);o<i.length;o++){var n=i[o];if(!testObjValue(r[n]))return!1}return!0}exports.isPojo=isPojo;
