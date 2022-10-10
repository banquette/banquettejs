/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@banquette/model/_cjs/prod/decorator/utils"),e=require("@banquette/utils-type/_cjs/prod/is-undefined"),o=require("../contants.js"),t=require("../transformer/form-control.js"),n=require("../transformer/root/form.js");exports.Form=function Form(s){return void 0===s&&(s=t.FormControl()),(e.isUndefined(s.type)||o.FormRelatedTransformers.indexOf(s.type)<0)&&(s=t.FormControl(s)),r.createTransformableDecorator(n.FormTransformerSymbol,s)};
