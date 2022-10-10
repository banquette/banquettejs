/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./is-scalar.js"),e=require("./ensure-string.js"),s=require("./is-object.js"),u=require("./is-array.js");exports.ensureScalarOrCompound=function ensureScalarOrCompound(a){if(r.isScalar(a))return a;if(u.isArray(a)||s.isObjectLiteral(a)){for(var i=0,n=Object.keys(a);i<n.length;i++){var t=n[i];a[t]=ensureScalarOrCompound(a[t])}return a}return e.ensureString(a)};
