/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./ensure-serializable.js"),e=require("./is-array.js"),i=require("./is-null-or-undefined.js"),s=require("./is-object.js"),n=require("./is-string.js"),t=require("./is-symbol.js"),u=require("./utils.js");exports.ensureString=function ensureString(l){if(i.isNullOrUndefined(l))return"";if(n.isString(l))return l;if(s.isObject(l))return JSON.stringify(r.ensureSerializable(l));if(e.isArray(l))return JSON.stringify(l.map(toString));if(t.isSymbol(l))return u.getSymbolDescription(l);var o=l+"";return"0"===o&&1/l==-1/0?"-0":o};
