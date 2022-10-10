/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { getObjectValue } from '@banquette/utils-object/get-object-value';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { isObject } from '@banquette/utils-type/is-object';
import { getOrCreateComponentMetadata } from '../utils/get-or-create-component-metadata.js';

function Expose(optionsOrExposeAs, observe) {
    if (optionsOrExposeAs === void 0) { optionsOrExposeAs = null; }
    if (observe === void 0) { observe = true; }
    return function (prototype, propertyKey) {
        if (!isNonEmptyString(propertyKey)) {
            throw new UsageException('You can only use @Expose() on properties or methods.');
        }
        var data = getOrCreateComponentMetadata(prototype);
        var isObj = optionsOrExposeAs !== null && isObject(optionsOrExposeAs);
        data.exposed[propertyKey] = {
            exposeAs: isObj ? getObjectValue(optionsOrExposeAs, 'exposeAs', propertyKey) : (optionsOrExposeAs || propertyKey),
            observe: isObj ? getObjectValue(optionsOrExposeAs, 'observe', observe) : observe
        };
    };
}

export { Expose };
