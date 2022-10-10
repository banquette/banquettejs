/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { isFunction } from '@banquette/utils-type/is-function';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { getOrCreateComponentMetadata } from '../utils/get-or-create-component-metadata.js';

function Import(composableOrOptions, prefixOrAlias) {
    return function (prototype, propertyKey) {
        var data = getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Import() on properties.');
        }
        if (!isUndefined(data.imports[propertyKey])) {
            throw new UsageException("You cannot define multiple @Import on the same property (".concat(propertyKey, ")."));
        }
        var options = isFunction(composableOrOptions) ? { composable: composableOrOptions } : composableOrOptions;
        options.prefixOrAlias = !isUndefined(options.prefixOrAlias) ? options.prefixOrAlias : prefixOrAlias;
        if (isNullOrUndefined(options.prefixOrAlias)) {
            options.prefixOrAlias = function (i) { return propertyKey + i[0].toUpperCase() + i.substring(1); };
        }
        data.imports[propertyKey] = options;
    };
}

export { Import };
