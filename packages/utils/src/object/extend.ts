import { ensureArray } from "../types/ensure-array";
import { isArray } from "../types/is-array";
import { isConstructor } from "../types/is-constructor";
import { isDate } from "../types/is-date";
import { isElement } from "../types/is-element";
import { isFunction } from "../types/is-function";
import { isObject } from "../types/is-object";
import { isPromiseLike } from "../types/is-promise-like";
import { isRegExp } from "../types/is-reg-exp";

/**
 * Copy values from objs into dst, optionally recursively.
 * Promises are copied as is, so they will be shared between dst and objs.
 */
export function extend(dst: any, objs: any, deep: boolean = true) {
    objs = ensureArray(objs);
    for (let i = 0, ii = objs.length; i < ii; ++i) {
        const obj = objs[i];
        if (!isObject(obj) && !isFunction(obj)) {
            continue;
        }
        const keys = Object.keys(obj);
        for (let j = 0, jj = keys.length; j < jj; j++) {
            const key = keys[j];
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
