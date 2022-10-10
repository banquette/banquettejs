/*!
 * Banquette UtilsMisc v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { proxy } from './proxy.js';

/**
 * Offers a way to index objects by string while being as close as possible to a weak reference.
 *
 * It's meant to workaround the absence of "WeakRef", still in proposal at the time of writing:
 * @see https://tc39.es/proposal-weakrefs/#sec-weak-ref-objects
 */
var WeakObjectMap = /** @class */ (function () {
    function WeakObjectMap() {
        this.map = {};
        /**
         * A map of timers ids, indexed by alias name.
         */
        this.removeTimers = {};
    }
    /**
     * Register a string alias for an object.
     */
    WeakObjectMap.prototype.register = function (obj, alias) {
        this.map[alias] = { obj: obj, refsCount: 0 };
        this.clearTimer(alias);
    };
    /**
     * Test if an alias exists in the map.
     */
    WeakObjectMap.prototype.has = function (alias) {
        return !isUndefined(this.map[alias]);
    };
    /**
     * Get a reference on a object by its alias name.
     *
     * Don't forget to call "release()" when the object is not used anymore
     * so the object can (maybe) be removed from the map.
     */
    WeakObjectMap.prototype.getRef = function (alias) {
        var _this = this;
        if (isUndefined(this.map[alias])) {
            return null;
        }
        this.clearTimer(alias);
        var releaseCalled = false;
        return {
            obj: this.map[alias].obj,
            release: function () {
                if (!releaseCalled && !isUndefined(_this.map[alias])) {
                    releaseCalled = true;
                    if (--_this.map[alias].refsCount <= 0) {
                        _this.scheduleMapRemoval(alias);
                    }
                }
            }
        };
    };
    /**
     * Remove an alias from the map.
     */
    WeakObjectMap.prototype.remove = function (alias) {
        if (!isUndefined(this.map[alias])) {
            delete this.map[alias];
            this.clearTimer(alias);
        }
    };
    /**
     * Queue an alias for removal.
     *
     * Removing the reference is important but doesn't require immediate action.
     * Giving some time where there is no reference left on the object is important as some
     * processing may be at play externally that may ask for a reference in a couple of frames.
     *
     * Here we give it 30 seconds, which should be more than enough in most cases.
     *
     * Using a WeakRef would be far better but it is still on proposal state at the time of writing:
     * @see https://tc39.es/proposal-weakrefs/#sec-weak-ref-objects
     */
    WeakObjectMap.prototype.scheduleMapRemoval = function (alias) {
        if (isUndefined(this.removeTimers[alias])) {
            setTimeout(proxy(this.remove, this), 30000);
        }
    };
    /**
     * Remove the timer of an alias, if it exists.
     */
    WeakObjectMap.prototype.clearTimer = function (alias) {
        if (!isUndefined(this.removeTimers[alias])) {
            clearTimeout(this.removeTimers[alias]);
            delete this.removeTimers[alias];
        }
    };
    return WeakObjectMap;
}());

export { WeakObjectMap };
