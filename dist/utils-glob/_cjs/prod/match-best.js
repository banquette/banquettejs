/*!
 * Banquette UtilsGlob v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./constant.js"),e=require("./match.js");exports.matchBest=function matchBest(a,r,s){void 0===s&&(s=[]);for(var n={pattern:t.MatchType.None,tags:t.MatchType.None},c=0,o=a;c<o.length;c++){var h=o[c],p=e.match(h,r,s);n.pattern=Math.max(n.pattern,p.pattern),n.tags=Math.max(n.tags,p.tags)}return n};
