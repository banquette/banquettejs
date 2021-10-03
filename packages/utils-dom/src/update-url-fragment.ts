import { parseUrlFragment } from "./parse-url-fragment";

/**
 * Update the fragment of the url with a key/value pair object.
 * Existing elements are overridden.
 */
export function updateUrlFragment(obj: Record<string, string|number>): void {
    const fragment: string[] = [];
    obj = Object.assign({}, parseUrlFragment(), obj);
    for (const key of Object.keys(obj)) {
        fragment.push(key + '=' + obj[key]);
    }
    window.location.hash = fragment.join('&');
}
