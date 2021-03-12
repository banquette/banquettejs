import { Base64 } from "./base64";

/**
 * Decode a string encoded with base64encodeUrlSafe.
 */
export function base64decodeUrlSafe(str: string): string {
    return Base64.decode(str);
}
