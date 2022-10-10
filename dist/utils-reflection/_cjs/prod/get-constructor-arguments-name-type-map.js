/*!
 * Banquette UtilsReflection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("./get-constructor-arguments-types.js"),r=require("./get-function-arguments.js");exports.getConstructorArgumentsNameTypeMap=function getConstructorArgumentsNameTypeMap(n){var s=r.getFunctionArguments(n),u=t.getConstructorArgumentsTypes(n);if(s.length!==u.length)throw new e.UsageException("Failed to create arguments map, names and types count doesn't match.");for(var o={},a=0;a<s.length;++a)o[s[a]]=u[a];return o};
