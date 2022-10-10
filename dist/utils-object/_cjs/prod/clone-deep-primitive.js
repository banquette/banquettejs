/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-array"),i=require("@banquette/utils-type/_cjs/prod/is-pojo"),r=require("@banquette/utils-type/_cjs/prod/is-primitive"),t=[];exports.cloneDeepPrimitive=function cloneDeepPrimitive(u,n){if(void 0===n&&(n=0),r.isPrimitive(u)||t.indexOf(u)>-1)return u;try{if(t.push(u),e.isArray(u)){for(var o=[],s=0,p=u;s<p.length;s++){var a=p[s];o.push(cloneDeepPrimitive(a,n+1))}return o}if(i.isPojo(u,!1)){o={};for(var l=0,v=Object.keys(u);l<v.length;l++){var f=v[l];o[f]=cloneDeepPrimitive(u[f],n+1)}return o}return u}finally{t.pop()}};
