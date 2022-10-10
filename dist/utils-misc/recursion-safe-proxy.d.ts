import { GenericCallback } from "@banquette/utils-type/types";
/**
 * Utility function allowing you to execute a function while blocking subsequent recursive calls
 * to functions wrapped in the same proxy.
 *
 * Let's take an example:
 *
 * ```
 * const event1 = Symbol();
 * const event2 = Symbol();
 * const dispatcher = Injector.Get(EventDispatcherService);
 *
 * dispatcher.subscribe(event1, recursionSafeProxy(() => {
 *     dispatcher.dispatch(event2);
 * }));
 *
 * dispatcher.subscribe(event2, recursionSafeProxy(() => {
 *     dispatcher.dispatch(event1);
 * }));
 *
 * dispatcher.dispatch(event1);
 * ```
 *
 * Only `event1` will be called once in this scenario because of `recursionSafeProxy`.
 * We would otherwise have an infinite recursion.
 *
 * By setting a different group for the subscribe method of `event2` for example,
 * we would have both subscribers called once.
 */
export declare function recursionSafeProxy(cb: GenericCallback, group?: string | symbol): GenericCallback;
