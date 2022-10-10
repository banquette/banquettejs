/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isFunction } from '@banquette/utils-type/is-function';
import { getOrCreateComponentMetadata } from '../utils/get-or-create-component-metadata.js';

function Composable(options) {
    if (options === void 0) { options = {}; }
    return function (ctor) {
        var data = getOrCreateComponentMetadata(ctor.prototype);
        if (isFunction(options)) {
            options = { factory: options };
        }
        data.composable = options;
    };
}

export { Composable };
