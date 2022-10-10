/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-object/_cjs/prod/get-object-value"),r=require("@banquette/utils-type/_cjs/prod/is-array"),t=require("@banquette/utils-type/_cjs/prod/is-object"),i=require("@banquette/utils-type/_cjs/prod/is-string");exports.replaceStringVariables=function replaceStringVariables(a,l,n,s){if(void 0===n&&(n="%"),void 0===s&&(s="%"),i.isString(a)){for(var u=new RegExp(n+"([a-z0-9*._-]+)"+s,"gi"),o={},p=void 0;null!==(p=u.exec(a));)if(r.isArray(p)&&p.length>1){var b=p[1].split("."),c=e.getObjectValue(l,b);null!==c&&(o[p[0]]=c)}for(var g in o)o.hasOwnProperty(g)&&(a=a.replace(new RegExp(g,"g"),o[g]))}if(r.isArray(a))for(var v=0;v<a.length;++v)a[v]=replaceStringVariables(a[v],l);if(t.isObject(a))for(var f in a)a.hasOwnProperty(f)&&(a[f]=replaceStringVariables(a[f],l));return a};
