/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../utils/converters.js"),t=require("../../utils/get-component-name.js"),r=require("../constant.js"),s=require("../vue-themes.js");exports.getThemesForComponent=function getThemesForComponent(n){for(var o=[s.VueThemes.Get(r.ThemeWildcard)],u=n.$parent;u;){if(u=e.maybeResolveTsInst(u),"bt-theme"===t.getComponentName(u)){var m=u.name;if(m){o.push(s.VueThemes.Get(m));break}}u=u.$parent}if(1===o.length){var a=s.VueThemes.GetCurrent();null!==a&&o.push(a)}return o};
