import { isArray } from "../types/is-array";
import { isFunction } from "../types/is-function";
import { isPojo } from "../types/is-pojo";
import { isPromiseLike } from "../types/is-promise-like";
import { isScalar } from "../types/is-scalar";
import { isString } from "../types/is-string";
import { isSymbol } from "../types/is-symbol";
import { isUndefined } from "../types/is-undefined";
import { getSymbolDescription } from "./get-symbol-description";

/**
 * Take any input and prepare it so it can safely be encoded into a string so it can be transferred or dumped.
 *
 * This is a lossy operation, the resulting object is not intended to be used as the original one.
 *
 * The original object is not affected, a clone is made.
 */
export function prepareForDump(input: any,
                                     maxDepth: number = 5,
                                     // tslint:disable-next-line:align
                                     /* internal */ objectsStack: any = [],
                                     // tslint:disable-next-line:align
                                     /* internal */ depth: number = 0): any {
    if (isUndefined(input)) {
        return '[undefined]';
    }
    if (input === null) {
        return '[null]';
    }
    if (isString(input)) {
        return input.substring(0, 512);
    }
    if (isSymbol(input)) {
        return getSymbolDescription(input);
    }
    if (isPromiseLike(input)) {
        return '[promise]';
    }
    if (isArray(input)) {
        const clone: any[] = [];
        if (maxDepth <= 0 || depth < maxDepth) {
            const maxNumberOfItems = 50;
            let itemIndex = 0;
            for (const item of input) {
                clone.push(prepareForDump(item, maxDepth, objectsStack, depth + 1));
                ++itemIndex;
                if (itemIndex >= maxNumberOfItems) {
                    break ;
                }
            }
            return clone;
        }
        return '[array of ' + input.length + ' element' + (input.length > 1 ? 's' : '') + ']';
    }
    if (isPojo(input, false)) {
        for (const candidate of objectsStack) {
            if (candidate === input) {
                return '[recursive object reference]';
            }
        }
        const clone: any = {};
        const keysCount: number = Object.keys(input).length;
        const maxNumberOfKeys = 30;
        if (maxDepth <= 0 || depth < maxDepth) {
            const keys = Object.keys(input);
            keys.sort();
            objectsStack.push(input);
            for (let i = 0; i < keys.length; ++i) {
                const key = keys[i];
                if (!isUndefined(input.hasOwnProperty) && input.hasOwnProperty(key) && !isFunction(input[key])) {
                    clone[key] = prepareForDump(input[key], maxDepth, objectsStack, depth + 1);
                }
                if (i >= maxNumberOfKeys) {
                    break ;
                }
            }
            objectsStack.pop();
        } else {
            return '[object of ' + keysCount + ' key' + (keysCount > 1 ? 's' : '') + ']';
        }
        return clone;
    }
    return isScalar(input) ? input : (input + '');
}
