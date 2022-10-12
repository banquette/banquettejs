/*!
 * Banquette Event v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ExceptionFactory } from '@banquette/exception/exception.factory';
import { arrayIntersect } from '@banquette/utils-array/array-intersect';
import { Not } from '@banquette/utils-misc/not';
import { getSymbolDescription } from '@banquette/utils-object/get-symbol-description';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isType } from '@banquette/utils-type/is-type';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { DispatchResult } from './dispatch-result.js';
import { EventArg } from './event-arg.js';

var DEFAULT_TAG = Symbol();
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this.subscribers = {};
        this.queue = {};
    }
    /**
     * Subscribe to an event.
     *
     * @param type              symbol   The type of event.
     * @param callback          function The function to call when the event is triggered.
     * @param priority          number   (optional, default: 0) The level of priority, the higher the first.
     * @param filteringTags     symbol[] (optional, default: []) A list of tags used to filter the dispatches.
     * @param propagationTags   symbol[] (optional, default: []) Any subscriber matching a tag on this list will not be
     *                                                           called when the propagation is stopped from this subscriber.
     *
     * @return A function to call to unsubscribe.
     */
    EventDispatcher.prototype.subscribe = function (type, callback, priority, filteringTags, propagationTags) {
        var _this = this;
        if (priority === void 0) { priority = 0; }
        if (filteringTags === void 0) { filteringTags = null; }
        if (propagationTags === void 0) { propagationTags = []; }
        var subscribers = this.subscribers[type], i;
        if (isUndefined(subscribers)) {
            this.subscribers[type] = subscribers = [];
        }
        if (!propagationTags.length) {
            propagationTags.push(DEFAULT_TAG);
        }
        var l = subscribers.length;
        var newSubscriber = {
            callback: callback,
            priority: priority,
            filteringTags: filteringTags,
            propagationTags: propagationTags
        };
        for (i = 0; i < l && subscribers[i].priority >= priority; ++i)
            { }
        if (i >= l) {
            subscribers.push(newSubscriber);
        }
        else {
            subscribers.splice(i, 0, newSubscriber);
        }
        var events;
        // If we have events waiting for a subscriber, trigger them.
        if (!isUndefined((events = this.queue[type]))) {
            // Now that events are copied into a local variable, we can remove them from the class property.
            delete this.queue[type];
            //
            // Then wait for an event loop cycle to have a better chance that all subscribers have time to register.
            // If we had triggered the event immediately only the first subscriber would have been notified.
            // This of course doesn't ensure all subscribers have time to register but still gives a better chance.
            //
            setTimeout(function () {
                for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                    var event_1 = events_1[_i];
                    _this.dispatchWithErrorHandling(type, event_1.arg);
                }
            });
        }
        return function () {
            for (var i_1 = 0; i_1 < subscribers.length; ++i_1) {
                if (subscribers[i_1].callback === callback) {
                    subscribers.splice(i_1, 1);
                    break;
                }
            }
        };
    };
    /**
     * Trigger an event.
     * The promise will resolve when all subscribers have been executed.
     */
    EventDispatcher.prototype.dispatch = function (type, event, sequential, tags) {
        if (sequential === void 0) { sequential = false; }
        if (tags === void 0) { tags = []; }
        var e = !isType(event, Not(isNullOrUndefined)) ? new EventArg() : event;
        var propagationStoppedTags = [];
        var subscribers = [].concat(this.subscribers[type] || []);
        var result = new DispatchResult();
        var index = -1;
        var next = function () {
            if (++index >= subscribers.length) {
                return false;
            }
            var subscriber = subscribers[index];
            if (index > 0 && e.propagationStopped) {
                // We could add duplicates this way but it doesn't matter.
                // The cost of removing them exceed the benefit imho.
                Array.prototype.push.apply(propagationStoppedTags, subscribers[index - 1].propagationTags);
                e.restorePropagation();
            }
            if (!arrayIntersect(propagationStoppedTags, subscriber.propagationTags).length &&
                (subscriber.filteringTags === null || (!tags.length && !subscriber.filteringTags.length) || arrayIntersect(tags, subscriber.filteringTags).length > 0)) {
                try {
                    var subResult = subscriber.callback(e);
                    result.registerCall({
                        subscriber: subscriber,
                        result: subResult,
                        event: e
                    });
                    if (sequential && result.localPromise !== null) {
                        // Don't catch because localPromise is already caught internally
                        // and we don't want to continue if one of the subscriber fails.
                        // If the promise rejects, the result will fail and nothing else will happen.
                        result.localPromise.then(next);
                        return false;
                    }
                    return true;
                }
                catch (e) {
                    // dispatch() must never throw, so if an exception is thrown,
                    // we capture it and set the result on error.
                    // The end user can then decide to throw the error stored in "errorDetails" if they want to.
                    result.fail(e);
                    return false;
                }
            }
            return true;
        };
        var cont = subscribers.length > 0;
        while (cont) {
            cont = next();
        }
        if (event && event.defaultPrevented) {
            result.preventDefault();
        }
        return result;
    };
    /**
     * Same as `dispatch()` but with additional error log in case something goes wrong.
     */
    EventDispatcher.prototype.dispatchWithErrorHandling = function (type, event, sequential, tags) {
        if (sequential === void 0) { sequential = false; }
        if (tags === void 0) { tags = []; }
        var result = this.dispatch(type, event, sequential, tags);
        var handleError = function (error) {
            var message = "Dispatch failed for Symbol(\"".concat(getSymbolDescription(type), "\"). Reason: ").concat(ExceptionFactory.EnsureException(error).message);
            console.error(message, error);
        };
        if (result.promise) {
            result.promise.catch(handleError);
        }
        else if (result.error) {
            handleError(result.errorDetail);
        }
        return result;
    };
    /**
     * Try to trigger and event but keep the call in a queue if no subscribers have been registered yet.
     * The dispatch will run again when a subscriber is registered.
     */
    EventDispatcher.prototype.dispatchSafe = function (type, event) {
        var _a;
        event = isNullOrUndefined(event) ? new EventArg() : event;
        var subscribers = this.subscribers[type] || [];
        if (subscribers.length > 0) {
            return void this.dispatchWithErrorHandling(type, event);
        }
        var queue = ensureArray(this.queue[type]);
        queue.push({ event: event });
        Object.assign(this.queue, (_a = {}, _a[type] = queue, _a));
    };
    /**
     * Remove all registered subscribers.
     */
    EventDispatcher.prototype.clear = function (type) {
        if (isNullOrUndefined(type)) {
            this.subscribers = {};
        }
        else {
            this.subscribers[type] = [];
        }
    };
    return EventDispatcher;
}());

export { EventDispatcher };