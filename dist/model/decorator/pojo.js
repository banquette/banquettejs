/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Primitive } from '../transformer/type/primitive.js';
import { PojoTransformerSymbol } from '../transformer/type/root/pojo.js';
import { createRelationAwareTransformableDecorator } from './utils.js';

function Pojo(transformer) {
    return createRelationAwareTransformableDecorator(PojoTransformerSymbol, transformer, Primitive());
}

export { Pojo };
