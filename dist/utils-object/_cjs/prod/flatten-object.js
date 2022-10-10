/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_virtual/_tslib.js"),t=require("@banquette/utils-type/_cjs/prod/is-object");function doFlatten(n,r,i,s){return Object.keys(n).reduce((function(a,c){var o;if(!t.isObject(n[c])||0!==i&&s>=i)return e.__assign(e.__assign({},a),((o={})[c]=n[c],o));var l=doFlatten(n[c],r,i,s+1);return e.__assign(e.__assign({},a),Object.keys(l).reduce((function(t,n){var i;return e.__assign(e.__assign({},t),((i={})["".concat(c).concat(r).concat(n)]=l[n],i))}),{}))}),{})}exports.flattenObject=function flattenObject(e,n,r){void 0===n&&(n="."),void 0===r&&(r=0);var i=doFlatten(e,n,Math.max(0,r),0);if(r<0){for(var s={},a=0,c=Object.keys(i);a<c.length;a++){var o=c[a],l=o.split(n),u=l.splice(0,l.length+r);if(l.length>0){var _=void 0;if(u.length>0){var v=u.join(n);t.isObject(s[v])||(s[v]={}),_=s[v]}else _=s;for(var f=0;f<l.length-1;++f)t.isObject(_[l[f]])||(_[l[f]]={}),_=_[l[f]];_[l[l.length-1]]=i[o]}else s[o]=i[o]}return s}return i};
