/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { createRelationAwareTransformableDecorator } from '@banquette/model/decorator/utils';
import { Raw } from '@banquette/model/transformer/type/raw';
import { ApiTransformerSymbol } from '../transformer/api.js';

function Api(transformer) {
    return createRelationAwareTransformableDecorator(ApiTransformerSymbol, transformer, Raw());
}

export { Api };
