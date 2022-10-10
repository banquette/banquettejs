/*!
 * Banquette Event v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Base class of all events.
 */
var EventArg = /** @class */ (function () {
    function EventArg() {
        /**
         * If `true` other events matching the tags on the current subscriber will not be called.
         */
        this.propagationStopped = false;
        /**
         * If `true`, ask the caller of the event not to execute the scheduled action.
         */
        this.defaultPrevented = false;
    }
    /**
     * Stop the event propagation so no other listener with the same tags is called.
     */
    EventArg.prototype.stopPropagation = function () {
        this.propagationStopped = true;
    };
    /**
     * Restore the event propagation so other listeners can be called.
     */
    EventArg.prototype.restorePropagation = function () {
        this.propagationStopped = false;
    };
    /**
     * Ask the caller of the event not to execute the scheduled action.
     */
    EventArg.prototype.preventDefault = function () {
        this.defaultPrevented = true;
    };
    return EventArg;
}());

export { EventArg };
