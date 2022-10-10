/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { trim } from '@banquette/utils-string/format/trim';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { isFunction } from '@banquette/utils-type/is-function';
import { isObject } from '@banquette/utils-type/is-object';
import { isType } from '@banquette/utils-type/is-type';
import { getOrCreateComponentMetadata } from '../utils/get-or-create-component-metadata.js';

function ThemeVar(nameOrOptions, defaultValue) {
    return function (prototype, propertyKey) {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @ThemeVar() on properties.');
        }
        if (!isType(nameOrOptions, isObject)) {
            nameOrOptions = { name: nameOrOptions, defaultValue: defaultValue };
        }
        nameOrOptions.name = trim(nameOrOptions.name);
        var data = getOrCreateComponentMetadata(prototype);
        data.themeVars[propertyKey] = nameOrOptions;
    };
}

export { ThemeVar };
