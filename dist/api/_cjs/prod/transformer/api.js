/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("../_virtual/_tslib.js"),e=require("@banquette/dependency-injection/_cjs/prod/decorator/module.decorator"),o=require("@banquette/model/_cjs/prod/constants"),t=require("@banquette/model/_cjs/prod/transformer/type/root/pojo"),n=Symbol("api"),a=function(t){function ApiTransformer(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(ApiTransformer,t),ApiTransformer.prototype.getTransformerSymbol=function(){return n},ApiTransformer=r.__decorate([e.Module(o.ModelTransformerTag)],ApiTransformer)}(t.PojoTransformer);exports.ApiTransformer=a,exports.ApiTransformerSymbol=n;
