/**
 * Test if the input looks like a promise.
 */
export function isPromiseLike(value: any): value is PromiseLike<any> {
    // Avoid testing for "then()" to avoid invoking a proxy that could have side effects.
    return Object.prototype.toString.call(value).indexOf('Promise') > -1;
}
