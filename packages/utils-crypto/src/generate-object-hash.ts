import { prepareForDump } from "@banquette/core";
import { md5 } from "./md5";

/**
 * Generates a unique hash for an object.
 */
export function generateObjectHash(data: any) {
    return md5(JSON.stringify(prepareForDump(data)));
}
