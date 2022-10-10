/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { getObjectValue } from '@banquette/utils-object/get-object-value';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { getOrCreateComponentMetadata } from '../utils/get-or-create-component-metadata.js';
import { Expose } from './expose.decorator.js';

function Computed(optionsOrExposeAs, onTrigger, onTrack, exposeAs) {
    if (optionsOrExposeAs === void 0) { optionsOrExposeAs = {}; }
    if (exposeAs === void 0) { exposeAs = null; }
    return function (prototype, propertyKey) {
        if (isUndefined(propertyKey)) {
            throw new UsageException('You can only use @Computed() on properties.');
        }
        var data = getOrCreateComponentMetadata(prototype);
        var isObj = optionsOrExposeAs !== null && isObject(optionsOrExposeAs);
        data.computed[propertyKey] = {
            onTrigger: isObj ? getObjectValue(optionsOrExposeAs, 'onTrigger', undefined) : (onTrigger || undefined),
            onTrack: isObj ? getObjectValue(optionsOrExposeAs, 'onTrack', undefined) : (onTrack || undefined)
        };
        exposeAs = isObj ? getObjectValue(optionsOrExposeAs, 'exposeAs', null) : optionsOrExposeAs;
        if (exposeAs !== false && isUndefined(data.exposed[propertyKey])) {
            Expose(exposeAs)(prototype, propertyKey);
        }
    };
}

export { Computed };
