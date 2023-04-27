import { ensureString } from "./ensure-string";
import { isArray } from "./is-array";
import { isObjectLiteral } from "./is-object";
import { isScalar } from "./is-scalar";

/**
 * Ensure the input is a scalar value.
 * If not, converts it to string.
 */
export function ensureScalarOrCompound(input: any): any {
    if (isScalar(input)) {
        return input;
    }
    if (isArray(input) || isObjectLiteral(input)) {
        for (const key of Object.keys(input)) {
            input[key] = ensureScalarOrCompound(input[key]);
        }
        return input;
    }
    return ensureString(input);
}
