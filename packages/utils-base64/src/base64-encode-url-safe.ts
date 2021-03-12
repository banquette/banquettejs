import { Base64 } from "./base64";

/**
 * Encode a string into base 64 and replace url unsafe characters.
 */
export function base64encodeUrlSafe(str: string): string {
    return Base64.encodeURI(str);
}
