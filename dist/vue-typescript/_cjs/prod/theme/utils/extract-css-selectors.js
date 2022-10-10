/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@banquette/utils-string/_cjs/prod/format/ltrim"),e=require("@banquette/utils-string/_cjs/prod/format/rtrim"),r=require("@banquette/utils-string/_cjs/prod/format/trim");exports.extractCssSelectors=function extractCssSelectors(l){for(var n="",u=[["{","}"],["(",")"],["[","]"],["'","'",!0],['"','"',!0]],i=["{","(","[","'",'"'],s=[],g=null,o=[],a=null,appendSelector=function(l){var u=r.trim(n);u.length>0&&o.push([u,l-n.length+(n.length-t.ltrim(n).length),l-n.length+e.rtrim(n).length]),n=""},h=0;h<l.length;++h){var f=l[h],m=i.indexOf(f),c=!1;if("@"!==f||""!==r.trim(n)||null!==a)m>-1&&null===a&&(u[m][2]&&(a=u[m][0]),s.push(m),0===(g=s[s.length-1])&&appendSelector(h),c=!0),s.indexOf(0)<0&&(","===f&&null===a?appendSelector(h):n+=f),c||null===g||f!==u[g][1]||(s.pop(),g=s.length>0?s[s.length-1]:null,a===f&&(a=null));else for(;h<l.length&&"{"!==l[h];++h);}return o};
