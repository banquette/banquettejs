/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { createTransformableDecorator } from './utils.js';
import { Primitive } from '../transformer/type/primitive.js';
import { JsonTransformerSymbol } from '../transformer/type/root/json.js';

function Json(transformer) {
    if (transformer === void 0) { transformer = Primitive(); }
    return createTransformableDecorator(JsonTransformerSymbol, transformer);
}

export { Json };
