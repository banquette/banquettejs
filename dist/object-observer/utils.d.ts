import { ObserverInterface } from "./observer/observer.interface";
/**
 * Try to extract the observer instance from a value.
 */
export declare function extractObserver(value: any): ObserverInterface<any> | null;
