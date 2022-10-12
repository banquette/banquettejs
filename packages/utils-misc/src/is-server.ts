let result: boolean|null = null;

/**
 * Test whether the code is currently running on the server side.
 */
export function isServer(): boolean {
    if (result === null) {
        result = typeof(window) === 'undefined' || typeof(document) === 'undefined';
    }
    return result;
}
