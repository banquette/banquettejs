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
 * Mark a method as the `render` method.
 */
function Render() {
    return function (prototype, propertyKey) {
        var data = getOrCreateComponentMetadata(prototype);
        if (!isNonEmptyString(propertyKey) || !isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Render() on methods.');
        }
        if (data.renderMethod) {
            throw new UsageException('You can only define one render method.');
        }
        data.renderMethod = propertyKey;
    };
}

export { Render };
