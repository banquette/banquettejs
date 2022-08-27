
import { isArray } from "./is-array";
import { isFunction } from "./is-function";
import { isObject } from "./is-object";
import { isPojo } from "./is-pojo";
import { isPromiseLike } from "./is-promise-like";
import { isScalar } from "./is-scalar";
import { isString } from "./is-string";
import { isSymbol } from "./is-symbol";
import { isUndefined } from "./is-undefined";
import { getSymbolDescription } from "./utils";

function doEnsureSerializable(input: any,
                              maxDepth: number,
                              onlyTraversePojo: boolean,
                              depth: number,
                              objectsStack: any[]): any {
    if (isUndefined(input)) {
        return '[undefined]';
    }
    if (input === null) {
        return '[null]';
    }
    if (isFunction(input)) {
        return `[function ${input.name}]`;
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
                clone.push(doEnsureSerializable(item, maxDepth, onlyTraversePojo, depth + 1, objectsStack));
                ++itemIndex;
                if (itemIndex >= maxNumberOfItems) {
                    break ;
                }
            }
            return clone;
        }
        return '[array of ' + input.length + ' element' + (input.length > 1 ? 's' : '') + ']';
    }
    if (isObject(input) && (!onlyTraversePojo || isPojo(input, false))) {
        for (const candidate of objectsStack) {
            if (candidate === input) {
                return '[recursive object reference]';
            }
        }
        const clone: any = {};
        const keys = [];
        for (const key in input) {
            keys.push(key);
        }
        const keysCount: number = keys.length;
        const maxNumberOfKeys = 30;
        if (maxDepth <= 0 || depth < maxDepth) {
            keys.sort();
            objectsStack.push(input);
            for (let i = 0; i < keys.length; ++i) {
                const key = keys[i];
                if (!isFunction(input[key])) {
                    clone[key] = doEnsureSerializable(input[key], maxDepth, onlyTraversePojo, depth + 1, objectsStack);
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

/**
 * Take any input and prepare it so it can safely be encoded into a string so it can be transferred or dumped.
 *
 * This is a lossy operation, the resulting object is not intended to be used as the original one.
 *
 * The original object is not affected.
 */
export function ensureSerializable(input: any, maxDepth: number = 5, onlyTraversePojo: boolean = true): any {
    return doEnsureSerializable(input, maxDepth, onlyTraversePojo, 0, []);
}
