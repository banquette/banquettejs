import { randomString } from "@banquette/utils-random/random-string";

const knownRandomIds: string[] = [];

/**
 * Generate a short random string, guaranteed to be unique and to begin by a letter.
 */
export function getUniqueRandomId(): string {
    let candidate: string;
    do {
        candidate = 'bt-' + randomString(6);
    } while (knownRandomIds.indexOf(candidate) > -1);
    knownRandomIds.push(candidate);
    return candidate;
}
