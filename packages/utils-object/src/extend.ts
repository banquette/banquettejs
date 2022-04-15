import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isArray } from "@banquette/utils-type/is-array";
import { isConstructor } from "@banquette/utils-type/is-constructor";
import { isDate } from "@banquette/utils-type/is-date";
import { isElement } from "@banquette/utils-type/is-element";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { isPromiseLike } from "@banquette/utils-type/is-promise-like";
import { isRegExp } from "@banquette/utils-type/is-reg-exp";
import { isUndefined } from "@banquette/utils-type/is-undefined";

/**
 * Copy values from objs into dst, optionally recursively.
 * Promises are copied as is, so they will be shared between dst and objs.
 */
export function extend(dst: any, objs: any, deep: boolean = true): any {
    objs = ensureArray(objs);
    for (let i = 0, ii = objs.length; i < ii; ++i) {
        const obj = objs[i];
        if (!isObject(obj) && !isFunction(obj)) {
            continue;
        }
        const keys = Object.keys(obj);
        for (let j = 0, jj = keys.length; j < jj; j++) {
            const key = keys[j];
            const descriptor = Object.getOwnPropertyDescriptor(obj, key);
            if (!isUndefined(descriptor) && (!isUndefined(descriptor.get) || !isUndefined(descriptor.set))) {
                Object.defineProperty(dst, key, descriptor);
                continue ;
            }
            const src = obj[key];
            if (deep && isObject(src)) {
                if (isDate(src)) {
                    dst[key] = new Date(src.valueOf());
                } else if (isRegExp(src)) {
                    dst[key] = new RegExp(src);
                } else if (src.nodeName) {
                    dst[key] = src.cloneNode(true);
                } else if (isElement(src)) {
                    dst[key] = src.clone();
                } else if (isPromiseLike(src) || isConstructor(src)) {
                    dst[key] = src;
                } else {
                    const isar: boolean = isArray(src);
                    if (!isObject(dst[key])) {
                        dst[key] = isar ? [] : {};
                    }
                    if (isar) {
                        dst[key] = dst[key].concat(src);
                    } else {
                        extend(dst[key], [src], true);
                    }
                }
            } else {
                dst[key] = src;
            }
        }
    }
    return dst;
}
