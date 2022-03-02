import { isObject } from "@banquette/utils-type/is-object";
import { ObserverInstance } from "./constant";
import { ObserverInterface } from "./observer/observer.interface";

/**
 * Try to extract the observer instance from a value.
 */
export function extractObserver(value: any): ObserverInterface<any>|null {
    return isObject(value) ? (value[ObserverInstance] || null) : null;
}
