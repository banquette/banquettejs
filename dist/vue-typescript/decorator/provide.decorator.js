/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { isFunction } from '@banquette/utils-type/is-function';
import { getOrCreateComponentMetadata } from '../utils/get-or-create-component-metadata.js';

/**
 * Provide a property to child components.
 *
 * @param provideAs If set to `null`, the value is provided with the same name as the property the decorator has been put on.
 *                  If set to a `string`, the value is provided using it as name.
 * @param readonly  If `true` the value will not be writeable by child components.
 */
function Provide(provideAs, readonly) {
    if (provideAs === void 0) { provideAs = null; }
    if (readonly === void 0) { readonly = true; }
    return function (prototype, propertyKey) {
        var data = getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Provide() on properties.');
        }
        data.provided[propertyKey] = {
            provideAs: provideAs || propertyKey,
            readonly: readonly
        };
    };
}

export { Provide };
