/*!
 * Banquette UtilsReflection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-string/_cjs/prod/format/trim"),t=require("@banquette/utils-type/_cjs/prod/is-array"),r=require("@banquette/utils-type/_cjs/prod/is-string"),i=require("@banquette/utils-type/_cjs/prod/is-undefined");exports.getCaller=function getCaller(n){var a=new Error;if(!a.stack)try{throw a}catch(a){if(!a.stack)return null}var s=a.stack.toString().split(/\r\n|\n/);if(t.isArray(s))for(var l=1;l<s.length;++l){var u=s[l],f=u.indexOf("(");f>0&&r.isString(u)&&(u=u.substring(0,f));var c=u.split(".");c.length>=2&&(c=c.splice(c.length-2,2));var g=e.trim(c.join(":").replace(/\s*at\s+/,""));if(g.indexOf("getCallerName")<0&&(i.isUndefined(n)||!g.match(n)))return g}return null};
