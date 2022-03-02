import { UsageException } from "@banquette/exception/usage.exception";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { ObserverInterface } from "./observer/observer.interface";
import { ObserverConstructor } from "./type";
import { extractObserver } from "./utils";

/**
 * Create the right observer for the type of input.
 */
export class ObserverFactory {
    /**
     * Array of known observers.
     */
    private static Observers: ObserverConstructor[] = [];

    /**
     * Test if a value can be observed.
     */
    public static Supports(target: any): boolean {
        for (const candidate of ObserverFactory.Observers) {
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
        const existingObserver = extractObserver(target);
        if (existingObserver) {
            return existingObserver;
        }
        for (const candidate of ObserverFactory.Observers) {
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
        ObserverFactory.Observers.push(observer);
        ObserverFactory.Observers.sort((a: ObserverConstructor, b: ObserverConstructor) => {
            return b.GetPriority() - a.GetPriority();
        });
    }
}
