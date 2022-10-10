/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./utils.js"),e=require("../transformer/type/primitive.js"),o=require("../transformer/type/root/json.js");exports.Json=function Json(t){return void 0===t&&(t=e.Primitive()),r.createTransformableDecorator(o.JsonTransformerSymbol,t)};
