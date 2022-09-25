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
 * The idea here is to "pre wrap" the value with a transparent proxy that defines only a "__bt_reassignable" property. For example:
 * Proxy({__bt_reassignable: HttpResponse})
 *
 * This proxy does nothing, it returns and assigns "__bt_reassignable", that's it.
 *
 * But we can call `reassign()` with it, anywhere we want, to replace the value of "__bt_reassignable" with another one.
 *
 * So if we wrap our HttpResponse into this reassignable proxy via `makeReassignable()`, we'll call the
 * new value after `reassign()` is called, so we can have:
 * Proxy({__bt_reassignable: Proxy(HttpResponse)})
 */
export function makeReassignable<T extends object = any>(obj: T): T {
    if (!isObject(obj) || !isUndefined((obj as any)['__bt_reassignable'])) {
        return obj;
    }
    const wrapped: any = {};
    Object.defineProperty(wrapped, '__bt_reassignable', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: obj
    });
    return new Proxy(wrapped, {
        get(target: any, p: string | symbol, receiver: any): any {
            if (p === '__bt_reassignable') {
                return obj;
            }
            if (p === ProxySymbol) {
                return wrapped.__bt_reassignable;
            }
            return Reflect.get(wrapped.__bt_reassignable, p, receiver);
        },
        set(target: any, p: string | symbol, value: any): boolean {
            if (p === ProxySymbol) {
                wrapped.__bt_reassignable = value[ProxySymbol];
            } else {
                Reflect.set(wrapped.__bt_reassignable, p, value, wrapped.__bt_reassignable);
            }
            return true;
        },
        getPrototypeOf(target: any): object | null {
            return Object.getPrototypeOf(target.__bt_reassignable);
        },
        ownKeys(target: any) {
            return Reflect.ownKeys(target.__bt_reassignable);
        },
        has(target: any, key: string | symbol) {
            return key in target.__bt_reassignable;
        },
        getOwnPropertyDescriptor(target: any, key: string | symbol) {
            return Object.getOwnPropertyDescriptor(target.__bt_reassignable, key);
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
