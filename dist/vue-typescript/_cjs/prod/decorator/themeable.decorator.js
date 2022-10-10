/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-object/_cjs/prod/flatten-object"),t=require("../utils/get-or-create-component-metadata.js");exports.Themeable=function Themeable(a){return void 0===a&&(a={}),function(s){var o,r,n=t.getOrCreateComponentMetadata(s.prototype),c=e.flattenObject((null===(o=a.css)||void 0===o?void 0:o.selectors)||{});n.themeable={componentName:n.component.name,prop:a.prop||"variant",css:{vars:e.flattenObject((null===(r=a.css)||void 0===r?void 0:r.vars)||{}),selectors:{static:{},dynamic:[]}}};for(var l=0,i=Object.keys(c);l<i.length;l++){var p=i[l];p.indexOf("(")>-1?n.themeable.css.selectors.dynamic.push({pattern:new RegExp(p,"g"),selector:c[p]}):n.themeable.css.selectors.static[p]=c[p]}}};
