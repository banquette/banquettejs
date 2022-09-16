import { reassign } from "@banquette/utils-misc/make-reassignable";

/**
 * Define a proxy making the wrapper object created by Vue invisible.
 */
export function defineRefProxy(proxy: any, proxyKey: string, target: any, targetKey: string = proxyKey): void {
    Object.defineProperty(proxy, proxyKey, {
        get: () => target[targetKey].value,
        set: (value) => {
            target[targetKey].value = value;

            // If the value has been wrap into a proxy created by `makeReassignable()`,
            // reassign it to the Vue proxy.
            reassign(value, target[targetKey].value);
        },
        enumerable: true,
        configurable: true
    });
}
