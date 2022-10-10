/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isArray } from './is-array.js';
import { isFunction } from './is-function.js';
import { isObject } from './is-object.js';
import { isPojo } from './is-pojo.js';
import { isPromiseLike } from './is-promise-like.js';
import { isScalar } from './is-scalar.js';
import { isString } from './is-string.js';
import { isSymbol } from './is-symbol.js';
import { isUndefined } from './is-undefined.js';
import { getSymbolDescription } from './utils.js';

function doEnsureSerializable(input, maxDepth, onlyTraversePojo, depth, objectsStack) {
    if (isUndefined(input)) {
        return '[undefined]';
    }
    if (input === null) {
        return '[null]';
    }
    if (isFunction(input)) {
        return "[function ".concat(input.name, "]");
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
        var clone = [];
        if (maxDepth <= 0 || depth < maxDepth) {
            var maxNumberOfItems = 50;
            var itemIndex = 0;
            for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
                var item = input_1[_i];
                clone.push(doEnsureSerializable(item, maxDepth, onlyTraversePojo, depth + 1, objectsStack));
                ++itemIndex;
                if (itemIndex >= maxNumberOfItems) {
                    break;
                }
            }
            return clone;
        }
        return '[array of ' + input.length + ' element' + (input.length > 1 ? 's' : '') + ']';
    }
    if (isObject(input) && (!onlyTraversePojo || isPojo(input, false))) {
        for (var _a = 0, objectsStack_1 = objectsStack; _a < objectsStack_1.length; _a++) {
            var candidate = objectsStack_1[_a];
            if (candidate === input) {
                return '[recursive object reference]';
            }
        }
        var clone = {};
        var keys = [];
        for (var key in input) {
            keys.push(key);
        }
        var keysCount = keys.length;
        var maxNumberOfKeys = 30;
        if (maxDepth <= 0 || depth < maxDepth) {
            keys.sort();
            objectsStack.push(input);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!isFunction(input[key])) {
                    clone[key] = doEnsureSerializable(input[key], maxDepth, onlyTraversePojo, depth + 1, objectsStack);
                }
                if (i >= maxNumberOfKeys) {
                    break;
                }
            }
            objectsStack.pop();
        }
        else {
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
function ensureSerializable(input, maxDepth, onlyTraversePojo) {
    if (maxDepth === void 0) { maxDepth = 5; }
    if (onlyTraversePojo === void 0) { onlyTraversePojo = true; }
    return doEnsureSerializable(input, maxDepth, onlyTraversePojo, 0, []);
}

export { ensureSerializable };
