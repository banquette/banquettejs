import { ObserverInterface } from "./observer/observer.interface";
import { ObserverConstructor } from "./type";
/**
 * Create the right observer for the type of input.
 */
export declare class ObserverFactory {
    /**
     * Array of known observers.
     */
    private static Observers;
    /**
     * Test if a value can be observed.
     */
    static Supports(target: any): boolean;
    /**
     * Create an observer for the input.
     */
    static Create<T extends object>(target: T, parent?: ObserverInterface<any>, key?: string): ObserverInterface<T>;
    /**
     * Register a new observer that will be used in all future and current `Observer` instances.
     */
    static RegisterObserver(observer: ObserverConstructor): void;
}
