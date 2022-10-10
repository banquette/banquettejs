/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { isFunction } from '@banquette/utils-type/is-function';
import { isObject } from '@banquette/utils-type/is-object';
import { isString } from '@banquette/utils-type/is-string';
import { isType } from '@banquette/utils-type/is-type';
import { isUndefined } from '@banquette/utils-type/is-undefined';

/**
 * Resolve the exposed name of a composable public element (prop, computed, method or data).
 * Can return `false` if the item should not be exposed
 */
function resolveImportPublicName(originalPrefix, originalName, prefixOrAlias) {
    if (!originalPrefix) {
        return originalName;
    }
    if (prefixOrAlias === null) {
        return originalPrefix + originalName;
    }
    if (prefixOrAlias === false) {
        return originalName;
    }
    if (isString(prefixOrAlias)) {
        return prefixOrAlias + originalName;
    }
    if (isType(prefixOrAlias, isObject)) {
        return !isUndefined(prefixOrAlias[originalName]) ? prefixOrAlias[originalName] : originalName;
    }
    if (isFunction(prefixOrAlias)) {
        return prefixOrAlias(originalName);
    }
    throw new UsageException("Unable to resolve the public name of ".concat(originalName, ". Please check your decorator's configuration."));
}

export { resolveImportPublicName };
