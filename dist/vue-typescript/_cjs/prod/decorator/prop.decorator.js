/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=require("@banquette/exception/_cjs/prod/usage.exception"),r=require("@banquette/utils-object/_cjs/prod/get-object-keys"),i=require("@banquette/utils-string/_cjs/prod/is-non-empty-string"),n=require("@banquette/utils-type/_cjs/prod/is-function"),o=require("@banquette/utils-type/_cjs/prod/is-undefined"),s=require("../utils/get-or-create-component-metadata.js");exports.Prop=function Prop(u){return void 0===u&&(u={}),function(p,a){if(!i.isNonEmptyString(a)||n.isFunction(p.constructor.prototype[a]))throw new t.UsageException("You can only use @Prop() on properties.");var c=s.getOrCreateComponentMetadata(p);if(o.isUndefined(c.props[a]))c.props[a]=e.__assign(e.__assign({},u),{propertyName:a});else for(var g=0,l=r.getObjectKeys(u);g<l.length;g++){var q=l[g];c.props[a][q]=u[q]}}};
