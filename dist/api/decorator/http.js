/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { createTransformableDecorator } from '@banquette/model/decorator/utils';
import { Raw } from '@banquette/model/transformer/type/raw';
import { HttpTransformerSymbol } from '../transformer/http.js';

function Http(transformer) {
    if (transformer === void 0) { transformer = Raw(); }
    var transformable = createTransformableDecorator(HttpTransformerSymbol, transformer);
    return function (prototype, propertyKey) {
        transformable(prototype, propertyKey);
    };
}

export { Http };
