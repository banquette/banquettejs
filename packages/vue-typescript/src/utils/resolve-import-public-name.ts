import { UsageException } from "@banquette/exception";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { PrefixOrAlias, AliasesMap, AliasResolver } from "../type";

/**
 * Resolve the exposed name of a composable public element (prop, computed, method or data).
 * Can return `false` if the item should not be exposed
 */
export function resolveImportPublicName(originalPrefix: string|undefined, originalName: string, prefixOrAlias: PrefixOrAlias): string|false {
    if (!originalPrefix) {
        return originalName;
    }
    if (prefixOrAlias === null) {
        return originalPrefix + ':' + originalName;
    }
    if (prefixOrAlias === false) {
        return originalName;
    }
    if (isString(prefixOrAlias)) {
        return prefixOrAlias + ':' + originalName;
    }
    if (isType<AliasesMap>(prefixOrAlias, isObject)) {
        return !isUndefined(prefixOrAlias[originalName]) ? String(prefixOrAlias[originalName]) : false;
    }
    if (isFunction(prefixOrAlias)) {
        return (prefixOrAlias as AliasResolver)(originalName);
    }
    throw new UsageException(`Unable to resolve the public name of ${originalName}. Please check your decorator's configuration.`);
}
