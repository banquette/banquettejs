import { ensureSerializable } from "@banquette/utils-type/ensure-serializable";
import { md5 } from "./md5";

/**
 * Generates a unique hash for an object.
 */
export function generateObjectHash(data: any) {
    return md5(JSON.stringify(ensureSerializable(data)));
}
