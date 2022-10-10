/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./utf8-size.js");function getType(e){var r,t,a,i=["boolean","number","string","array"],n=typeof e;if("object"===n&&!e)return"null";if("object"===n){if(!e.constructor)return"object";for(t in(r=(a=e.constructor.toString()).match(/(\w+)\(/))&&(a=r[1].toLowerCase()),i)if(a===i[t]){n=i[t];break}}return n}exports.phpSerialize=function phpSerialize(r){var t="",a=getType(r);switch(a){case"function":t="";break;case"boolean":t="b:"+(r?"1":"0");break;case"number":t=(Math.round(r)===r?"i":"d")+":"+r;break;case"string":t="s:"+e.utf8Size(r)+':"'+r+'"';break;case"array":case"object":var i="",n=0;for(var o in t="a",r)if(r.hasOwnProperty(o)){if("function"===getType(r[o]))continue;i+=phpSerialize(o.match(/^[0-9]+$/)?parseInt(o,10):o)+phpSerialize(r[o]),n++}t+=":"+n+":{"+i+"}";break;default:t="N"}return"object"!==a&&"array"!==a&&(t+=";"),t};
