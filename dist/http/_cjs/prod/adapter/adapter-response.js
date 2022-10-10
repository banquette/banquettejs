/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-string/_cjs/prod/format/slugify"),s=function(){function AdapterResponse(e,s,t,r,n){this.status=e,this.url=s,this.response=t,this.responseType=r,this.headers=n,this.headers=this.normalizeHeaders(n)}return AdapterResponse.prototype.normalizeHeaders=function(s){for(var t={},r=0,n=Object.keys(s);r<n.length;r++){var i=n[r];t[e.slugify(i)]=s[i]}return t},AdapterResponse}();exports.AdapterResponse=s;
