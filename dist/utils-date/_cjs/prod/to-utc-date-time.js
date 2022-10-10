/*!
 * Banquette UtilsDate v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-string/_cjs/prod/fixed-digits");exports.toUTCDateTime=function toUTCDateTime(t){return t.getUTCFullYear()+"-"+e.fixedDigits(1+t.getUTCMonth(),2)+"-"+e.fixedDigits(t.getUTCDate(),2)+" "+e.fixedDigits(t.getUTCHours(),2)+":"+e.fixedDigits(t.getUTCMinutes(),2)+":"+e.fixedDigits(t.getUTCSeconds(),2)};
