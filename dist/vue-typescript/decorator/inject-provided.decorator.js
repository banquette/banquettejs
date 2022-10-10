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
 * Inject a value provided by a parent component.
 *
 * @param target       name of the value to inject
 * @param defaultValue default value if none is found in parent components
 */
function InjectProvided(target, defaultValue) {
    return function (prototype, propertyKey) {
        var data = getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @InjectProvided() on properties.');
        }
        data.injected[propertyKey] = { target: target, defaultValue: defaultValue };
    };
}

export { InjectProvided };
