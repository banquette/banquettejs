/*!
 * Banquette ObjectObserver v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { extractObserver } from './utils.js';

/**
 * Create the right observer for the type of input.
 */
var ObserverFactory = /** @class */ (function () {
    function ObserverFactory() {
    }
    /**
     * Test if a value can be observed.
     */
    ObserverFactory.Supports = function (target) {
        for (var _i = 0, _a = ObserverFactory.Observers; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (candidate.Supports(target)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Create an observer for the input.
     */
    ObserverFactory.Create = function (target, parent, key) {
        var existingObserver = extractObserver(target);
        if (existingObserver) {
            return existingObserver;
        }
        for (var _i = 0, _a = ObserverFactory.Observers; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (candidate.Supports(target)) {
                if (!isUndefined(parent) && isUndefined(key)) {
                    throw new UsageException('You must define a property name if the observer is not the root observer.');
                }
                return new candidate(key || '/', target, parent || null);
            }
        }
        throw new UsageException('Unsupported input to observe. ' +
            'Please call `ObserverFactory::Supports()` to ensure the data you want to observe is supported.');
    };
    /**
     * Register a new observer that will be used in all future and current `Observer` instances.
     */
    ObserverFactory.RegisterObserver = function (observer) {
        ObserverFactory.Observers.push(observer);
        ObserverFactory.Observers.sort(function (a, b) {
            return b.GetPriority() - a.GetPriority();
        });
    };
    /**
     * Array of known observers.
     */
    ObserverFactory.Observers = [];
    return ObserverFactory;
}());

export { ObserverFactory };
