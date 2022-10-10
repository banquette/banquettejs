import { Constructor } from "@banquette/utils-type/types";
import { onProgressCallback } from "./types";
export interface ProgressObserverInterface<T> {
    /**
     * Trigger a progress event that will nor resolve or reject the promise.
     * progress() can be called any number of times.
     */
    callback: onProgressCallback<T>;
    /**
     * Holds the type of events the observer is subscribed to.
     *
     * If the array is empty all events will be transmitted.
     * If the array contains at least one element, only object values matching one of the constructors will be transmitted.
     */
    types: Array<Constructor>;
}
