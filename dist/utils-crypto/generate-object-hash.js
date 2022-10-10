/*!
 * Banquette UtilsCrypto v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureSerializable } from '@banquette/utils-type/ensure-serializable';
import { md5 } from './md5.js';

/**
 * Generates a unique hash for an object.
 */
function generateObjectHash(data) {
    return md5(JSON.stringify(ensureSerializable(data)));
}

export { generateObjectHash };
