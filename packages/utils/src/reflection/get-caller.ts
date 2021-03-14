import { trim } from "../string/trim";
import { isArray } from "../types/is-array";
import { isString } from "../types/is-string";
import { isUndefined } from "../types/is-undefined";

/**
 * Try to get the function and class name of a certain index in the callstack.
 */
export function getCaller(ignorePattern?: RegExp): string|null {
    const e = new Error();
    if (!e.stack) {
        try {
            // IE requires the Error to actually be thrown or else the
            // Error's 'stack' property is undefined.
            throw e;
        } catch (e) {
            if (!e.stack) {
                return null; // IE < 10, likely
            }
        }
    }
    // @ts-ignore
    const stack = e.stack.toString().split(/\r\n|\n/);
    if (isArray(stack)) {
        for (let i = 1 /** ignore the first element of the stack */; i < stack.length; ++i) {
            let str: string = stack[i];
            const parenthesisPos = str.indexOf('(');
            if (parenthesisPos > 0 && isString(str)) {
                str = str.substring(0, parenthesisPos);
            }
            let parts: string[] = str.split('.');
            if (parts.length >= 2) {
                parts = parts.splice(parts.length - 2, 2);
            }
            const result = trim(parts.join(':').replace(/\s*at\s+/, ''));
            if (result.indexOf('getCallerName') < 0 && (isUndefined(ignorePattern) || !result.match(ignorePattern))) {
                return result;
            }
        }
    }
    return null;
}
