/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isFunction } from '@banquette/utils-type/is-function';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { getOrCreateComponentMetadata } from '../utils/get-or-create-component-metadata.js';

/**
 * Mark a method as exposed to the template.
 */
function Lifecycle(type) {
    return function (prototype, propertyKey) {
        var data = getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString(propertyKey) || !isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Lifecycle() on methods.');
        }
        var types = ensureArray(type);
        for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
            var type_1 = types_1[_i];
            if (isUndefined(data.hooks[type_1])) {
                data.hooks[type_1] = [];
            }
            // @ts-ignore
            if (data.hooks[type_1].indexOf(propertyKey) < 0) {
                // @ts-ignore
                data.hooks[type_1].push(propertyKey);
            }
        }
    };
}

export { Lifecycle };
