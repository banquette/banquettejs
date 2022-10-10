/*!
 * Banquette UtilsDate v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-string/_cjs/prod/fixed-digits");exports.toDateTime=function toDateTime(t){return t.getFullYear()+"-"+e.fixedDigits(1+t.getMonth(),2)+"-"+e.fixedDigits(t.getDate(),2)+" "+e.fixedDigits(t.getHours(),2)+":"+e.fixedDigits(t.getMinutes(),2)+":"+e.fixedDigits(t.getSeconds(),2)};
