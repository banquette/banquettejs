import { getSymbolDescription } from "../object/get-symbol-description";
import { prepareForDump } from "../object/prepare-for-dump";
import { isArray } from "./is-array";
import { isNullOrUndefined } from "./is-null-or-undefined";
import { isObject } from "./is-object";
import { isString } from "./is-string";
import { isSymbol } from "./is-symbol";

/**
 * Ensure the input is converted to a string.
 *
 * Inspired by lodash/toString.
 * @see https://lodash.com/docs/4.17.15#toString
 */
export function ensureString(input: any): string {
    if (isNullOrUndefined(input)) {
        return '';
    }
    if (isString(input)) {
        return input;
    }
    if (isObject(input)) {
        return JSON.stringify(prepareForDump(input));
    }
    if (isArray(input)) {
        return JSON.stringify(input.map(toString));
    }
    if (isSymbol(input)) {
        return getSymbolDescription(input);
    }
    let genericOutput = (input + '');
    return (genericOutput === '0' && (1 / input) == -(1 / 0)) ? '-0' : genericOutput;
}
