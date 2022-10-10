/*!
 * Banquette UtilsDom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./parse-url-fragment.js");exports.updateUrlFragment=function updateUrlFragment(r){var t=[];r=Object.assign({},e.parseUrlFragment(),r);for(var a=0,s=Object.keys(r);a<s.length;a++){var n=s[a];t.push(n+"="+r[n])}window.location.hash=t.join("&")};
