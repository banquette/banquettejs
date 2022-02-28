
export const ObserverEvents = {
    /**
     * Event emitted synchronously each time a change is detected.
     */
    ChangedSync: Symbol('changed-sync'),

    /**
     * Event emitted as a microtask for all changes detected in the cycle.
     */
    ChangedAsync: Symbol('changed-async')
};

export enum MutationType {
    /**
     * A new property has been added to an object or a new item has been added to an array.
     */
    Insert = 1,

    /**
     * The value of an existing property has been modified.
     */
    Update = 2,

    /**
     * A property has been deleted from an object, or an item has been removed from an array.
     */
    Delete = 4,

    /**
     * Only applicable for arrays.
     * The array has been reversed.
     */
    Reverse = 8,

    /**
     * Only applicable for arrays.
     * The array has been sorted.
     */
    Sort = 16
}

/**
 * Name of the property that holds the instance of the observer in the proxy.
 */
export const ObserverInstance = '__bt_observer';
