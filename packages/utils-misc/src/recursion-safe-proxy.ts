import { GenericCallback } from '@banquette/utils-type';

const defaultGroup = Symbol('default');

/**
 * The stack of groups for which a callback is still executing.
 */
let callstack: Array<string | symbol> = [];

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
export function recursionSafeProxy(
    cb: GenericCallback,
    group: string | symbol = defaultGroup
): GenericCallback {
    return function (this: any, ...args: any[]): any {
        if (callstack.indexOf(group) < 0) {
            callstack.push(group);
            try {
                return cb.apply(this, args);
            } finally {
                const pos = callstack.indexOf(group);
                if (pos > -1) {
                    callstack.splice(pos, 1);
                }
            }
        }
    };
}
