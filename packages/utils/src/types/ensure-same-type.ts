import { ensureArray } from "./ensure-array";
import { ensureBoolean } from "./ensure-boolean";
import { ensureNumber } from "./ensure-number";
import { ensureObject } from "./ensure-object";
import { ensureString } from "./ensure-string";
import { isArray } from "./is-array";

/**
 * Ensure the input is converted to a the type of the reference value.
 */
export function ensureSameType(input: any, referenceValue: any): any {
    const targetType = referenceValue === null ? 'null' : typeof(referenceValue);
    switch (targetType) {
        case 'string': return ensureString(input);
        case 'number': case 'bigint': return ensureNumber(input);
        case 'boolean': return ensureBoolean(input);
        case 'object': {
            if (isArray(referenceValue)) {
                return ensureArray(input);
            }
            return ensureObject(input);
        }
    }
    return input;
}
