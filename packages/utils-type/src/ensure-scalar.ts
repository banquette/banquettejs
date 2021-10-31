import { isScalar } from "./is-scalar";
import { ensureString } from "./ensure-string";

/**
 * Ensure the input is a scalar value.
 * If not, converts it to string.
 */
export function ensureScalar(input: any): any {
    if (isScalar(input)) {
        return input;
    }
    return ensureString(input);
}
