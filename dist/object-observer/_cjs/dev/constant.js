/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ObserverEvents = {
    /**
     * Event emitted synchronously each time a change is detected.
     */
    ChangedSync: Symbol('changed-sync'),
    /**
     * Event emitted as a microtask for all changes detected in the cycle.
     */
    ChangedAsync: Symbol('changed-async')
};
exports.MutationType = void 0;
(function (MutationType) {
    /**
     * A new property has been added to an object or a new item has been added to an array.
     */
    MutationType[MutationType["Insert"] = 1] = "Insert";
    /**
     * The value of an existing property has been modified.
     */
    MutationType[MutationType["Update"] = 2] = "Update";
    /**
     * A property has been deleted from an object, or an item has been removed from an array.
     */
    MutationType[MutationType["Delete"] = 4] = "Delete";
    /**
     * Only applicable for arrays.
     * The array has been reversed.
     */
    MutationType[MutationType["Reverse"] = 8] = "Reverse";
    /**
     * Only applicable for arrays.
     * The array has been sorted.
     */
    MutationType[MutationType["Sort"] = 16] = "Sort";
})(exports.MutationType || (exports.MutationType = {}));
/**
 * Name of the property that holds the instance of the observer in the proxy.
 */
var ObserverInstance = '__bt_observer';

exports.ObserverEvents = ObserverEvents;
exports.ObserverInstance = ObserverInstance;
