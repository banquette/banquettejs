import { Base64 } from "./base64";

/**
 * Convert a string into a base 64.
 */
export function base64encode(str: string): string {
    return Base64.encode(str);
}
