import { UsageException } from "@banquette/exception";
import { isUndefined } from "@banquette/utils-type";
import { ArrayObserver } from "./observer/array.observer";
import { ObjectObserver } from "./observer/object.observer";
import { ObserverInterface } from "./observer/observer.interface";
import { TypedArrayObserver } from "./observer/typed-array.observer";
import { ObserverConstructor } from "./type";
import { extractObserver } from "./utils";

let BuiltInObserversRegistered: boolean = false;
const Observers: ObserverConstructor[] = [];

const registerBuiltInObservers = /**!PURE*/ (() => {
    return () => {
        ObserverFactory.RegisterObserver(ArrayObserver);
        ObserverFactory.RegisterObserver(TypedArrayObserver);
        ObserverFactory.RegisterObserver(ObjectObserver);
    };
})();

/**
 * Create the right observer for the type of input.
 */
export class ObserverFactory {
    /**
     * Test if a value can be observed.
     */
    public static Supports(target: any): boolean {
        for (const candidate of Observers) {
            if (candidate.Supports(target)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Create an observer for the input.
     */
    public static Create<T extends object>(target: T, parent?: ObserverInterface<any>, key?: string): ObserverInterface<T> {
        if (!BuiltInObserversRegistered) {
            registerBuiltInObservers();
            BuiltInObserversRegistered = true;
        }
        const existingObserver = extractObserver(target);
        if (existingObserver) {
            return existingObserver;
        }
        for (const candidate of Observers) {
            if (candidate.Supports(target)) {
                if (!isUndefined(parent) && isUndefined(key)) {
                    throw new UsageException('You must define a property name if the observer is not the root observer.');
                }
                return new candidate(key || '/', target, (parent as any) || null);
            }
        }
        throw new UsageException(
            'Unsupported input to observe. ' +
            'Please call `ObserverFactory::Supports()` to ensure the data you want to observe is supported.'
        );
    }

    /**
     * Register a new observer that will be used in all future and current `Observer` instances.
     */
    public static RegisterObserver(observer: ObserverConstructor): void {
        Observers.push(observer);
        Observers.sort((a: ObserverConstructor, b: ObserverConstructor) => {
            return b.GetPriority() - a.GetPriority();
        });
    }
}
