import { AnyObject } from "@banquette/utils-type/types";
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
export declare function makeReassignable<T extends object = any>(obj: T): T;
/**
 * Get the original object behind a proxy created via `makeReassignable()`.
 */
export declare function unmakeReassignable(value: any): any;
/**
 * Reassign the value pointed by a proxy created via `makeReassignable()`.
 */
export declare function reassign(value: any, newValue: AnyObject): void;
/**
 * Test if a value has been proxified using `makeReassignable()`.
 */
export declare function isReassignable(value: any): boolean;
