/**
 * Test if the current environment is client.
 */
export function isBrowser(): boolean {
    return typeof(window) !== 'undefined';
}
