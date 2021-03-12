import { Base64 } from "./base64";

/**
 * Decode a base 64 string.
 */
export function base64decode(str: string): string {
    return Base64.decode(str);
}
