import { UsageException } from "@banquette/exception/usage.exception";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { AbstractObserver } from "./observer/abstract.observer";
import { ObserverConstructor } from "./type";

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
    public static Create<T extends object>(target: T, parent?: AbstractObserver<any>, key?: string): AbstractObserver<T> {
        const existingObserver = AbstractObserver.ExtractObserver(target);
        if (existingObserver) {
            return existingObserver;
        }
        for (const candidate of ObserverFactory.Observers) {
            if (candidate.Supports(target)) {
                if (!isUndefined(parent) && isUndefined(key)) {
                    throw new UsageException('You must define a property name if the observer is not the root observer.');
                }
                return new candidate(key || '/', target, parent || null) as AbstractObserver<T>;
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
