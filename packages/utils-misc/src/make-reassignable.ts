import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { AnyObject } from "@banquette/utils-type/types";

// An internal symbol to ensure no false positive.
const ProxySymbol = Symbol();

/**
 * Wrap an object into a transparent proxy so it can be reassigned using the `reassign()` function.
 * The main use of this function is to replace a variable with a proxy from the outside (to make it observable by VueJS for example).
 *
 * Let's take for example the HttpService.
 * It creates a HttpResponse object and keeps a reference on it, internally.
 *
 * But what if we want to proxify this object so we can observe the changes from the outside?
 * We could create a proxy around it to track the changes. But this proxy will have to be created **outside** of the service,
 * making any changes done by the HttpService itself invisible.
 *
 * We can't integrate the observation logic into the HttpService either, that's not its role.
 *
 * The idea here is to "pre wrap" the value with a transparent proxy that defines only a "_value" property. For example:
 * Proxy({_value: HttpResponse})
 *
 * This proxy does nothing, it returns and assigns "_value", that's it.
 *
 * But we can call `reassign()` with it, anywhere we want, to replace the value of "_value" with another one.
 *
 * So if we wrap our HttpResponse into this reassignable proxy via `makeReassignable()`, we'll call the
 * new value after `reassign()` is called, so we can have:
 * Proxy({_value: Proxy(HttpResponse)})
 */
export function makeReassignable<T = any>(obj: T): T {
    const wrapped: any = {_value: obj};
    Object.defineProperty(wrapped, '_value', {
        enumerable: false,
        configurable: false,
        writable: true,
        value: obj
    });
    return new Proxy(wrapped, {
        get(target: any, p: string | symbol, receiver: any): any {
            if (p === ProxySymbol) {
                return wrapped._value;
            }
            return Reflect.get(wrapped._value, p, receiver);
        },
        set(target: any, p: string | symbol, value: any): boolean {
            if (p === ProxySymbol) {
                wrapped._value = value[ProxySymbol];
            } else {
                Reflect.set(wrapped._value, p, value, wrapped._value);
            }
            return true;
        },
        getPrototypeOf(target: any): object | null {
            return Object.getPrototypeOf(target._value);
        }
    });
}

/**
 * Get the original object behind a proxy created via `makeReassignable()`.
 */
export function unmakeReassignable(value: any): any {
    if (isObject(value) && !isUndefined(value[ProxySymbol])) {
        return value[ProxySymbol];
    }
    return value;
}

/**
 * Reassign the value pointed by a proxy created via `makeReassignable()`.
 */
export function reassign(value: any, newValue: AnyObject) {
    if (isObject(value) && !isUndefined(value[ProxySymbol])) {
        value[ProxySymbol] = newValue;
    }
}

/**
 * Test if a value has been proxified using `makeReassignable()`.
 */
export function isReassignable(value: any): boolean {
    return isObject(value) && !isUndefined(value[ProxySymbol]);
}
