/**
 * Define a proxy making the wrapper object created by Vue invisible.
 */
export function defineRefProxy(proxy: any, proxyKey: string, target: any, targetKey: string = proxyKey): void {
    Object.defineProperty(proxy, proxyKey, {
        get: () => target[targetKey].value,
        set: (value) => {
            target[targetKey].value = value
        },
        enumerable: true,
        configurable: true,
    });
}
