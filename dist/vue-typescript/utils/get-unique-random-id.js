/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { randomString } from '@banquette/utils-random/random-string';

var knownRandomIds = [];
/**
 * Generate a short random string, guaranteed to be unique and to begin by a letter.
 */
function getUniqueRandomId() {
    var candidate;
    do {
        candidate = 'bt-' + randomString(6).toLowerCase();
    } while (knownRandomIds.indexOf(candidate) > -1);
    knownRandomIds.push(candidate);
    return candidate;
}

export { getUniqueRandomId };
