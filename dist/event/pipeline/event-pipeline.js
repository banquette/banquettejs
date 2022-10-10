/*!
 * Banquette Event v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { cloneDeep } from '@banquette/utils-object/clone-deep';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isArray } from '@banquette/utils-type/is-array';
import { isInteger } from '@banquette/utils-type/is-integer';
import { isObject } from '@banquette/utils-type/is-object';
import { isString } from '@banquette/utils-type/is-string';
import { isSymbol } from '@banquette/utils-type/is-symbol';
import { isType } from '@banquette/utils-type/is-type';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { SequenceErrorBasicBehavior, DefaultSequenceName, DefaultSequenceErrorBehavior } from '../constant.js';
import { DispatchResult } from '../dispatch-result.js';
import { EventDispatcher } from '../event-dispatcher.js';
import { SequenceContext } from './sequence-context.js';

/**
 * Define a list of events to execute sequentially.
 */
var EventPipeline = /** @class */ (function () {
    function EventPipeline() {
        /**
         * Map of sequences, indexed by name.
         */
        this.sequences = {};
        /**
         * The internal event dispatcher that is used to dispatch all events of the pipeline.
         */
        this.dispatcher = new EventDispatcher();
        /**
         * Array of unsubscribe functions indexed by event type.
         */
        this.unsubscribeFunctions = {};
    }
    EventPipeline.prototype.add = function (mixedInput, name, onError) {
        var _a;
        if (name === void 0) { name = DefaultSequenceName; }
        if (onError === void 0) { onError = SequenceErrorBasicBehavior.StopAll; }
        if (isString(mixedInput) || isSymbol(mixedInput) || isType(mixedInput, function (v) { return isObject(v) && (!isUndefined(v.event) || !isUndefined(v.sequences)); })) {
            mixedInput = [mixedInput];
        }
        if (isArray(mixedInput)) {
            mixedInput = (_a = {}, _a[name] = mixedInput, _a);
        }
        var map = mixedInput;
        for (var _i = 0, _b = Object.keys(map); _i < _b.length; _i++) {
            var sequenceName = _b[_i];
            if (isUndefined(this.sequences[sequenceName])) {
                this.sequences[sequenceName] = { items: [], onError: onError };
            }
            var partialSequence = ensureArray(map[sequenceName]);
            for (var _c = 0, partialSequence_1 = partialSequence; _c < partialSequence_1.length; _c++) {
                var item = partialSequence_1[_c];
                if (isString(item)) {
                    item = [item];
                }
                if (isSymbol(item)) {
                    item = { event: item };
                }
                var itemErrorBehavior = item.onError || onError;
                this.sequences[sequenceName].items.push({
                    event: item.event || null,
                    sequences: isArray(item) ? item : (item.sequences || null),
                    priority: item.priority || 0,
                    onError: isInteger(itemErrorBehavior) ? itemErrorBehavior : ensureArray(itemErrorBehavior)
                });
            }
            this.sequences[sequenceName].items.sort(function (a, b) {
                return b.priority - a.priority;
            });
        }
        return this;
    };
    /**
     * Remove one or multiple events from a sequence.
     */
    EventPipeline.prototype.remove = function (event, sequenceName, unsubscribe) {
        if (sequenceName === void 0) { sequenceName = DefaultSequenceName; }
        if (unsubscribe === void 0) { unsubscribe = true; }
        if (isUndefined(this.sequences[sequenceName])) {
            return this;
        }
        var events = ensureArray(event);
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            for (var i = 0; i < this.sequences[sequenceName].items.length; ++i) {
                var sequence = this.sequences[sequenceName].items[i];
                if ((isSymbol(event_1) && sequence.event === event_1) ||
                    (isString(event_1) && sequence.sequences !== null && sequence.sequences.indexOf(event_1) > -1)) {
                    this.sequences[sequenceName].items.splice(i--, 1);
                }
            }
            if (unsubscribe) {
                this.unsubscribeIfUnused(event_1);
            }
        }
        return this;
    };
    /**
     * Subscribe to an event of the pipeline.
     */
    EventPipeline.prototype.subscribe = function (event, callback, priority) {
        if (isUndefined(this.unsubscribeFunctions[event])) {
            this.unsubscribeFunctions[event] = [];
        }
        this.unsubscribeFunctions[event].push(this.dispatcher.subscribe(event, callback, priority));
        return this;
    };
    /**
     * Start the pipeline.
     */
    EventPipeline.prototype.start = function (sequence) {
        if (sequence === void 0) { sequence = DefaultSequenceName; }
        // To hide the `parentContext` argument from the public signature.
        return this.runSequences(ensureArray(sequence));
    };
    /**
     * Stop the pipeline.
     */
    EventPipeline.prototype.stop = function () {
    };
    /**
     * Prepare the object for removal, cleaning all sequences and subscribers.
     */
    EventPipeline.prototype.dispose = function () {
        this.sequences = {};
        this.unsubscribeFunctions = {};
        this.dispatcher.clear();
    };
    /**
     * Execute multiple sequences sequentially.
     */
    EventPipeline.prototype.runSequences = function (names, parentContext) {
        var _this = this;
        var index = -1;
        var result = new DispatchResult(!isUndefined(parentContext) ? parentContext.result : null);
        var next = function () {
            var name = ++index < names.length ? names[index] : null;
            if (!name || isUndefined(_this.sequences[name])) {
                return result;
            }
            var context = new SequenceContext(name, result, parentContext || null);
            var subResult = _this.runSequence(cloneDeep(_this.sequences[name]), context);
            if (subResult.promise !== null) {
                result.delayResponse(subResult.promise);
            }
        };
        next();
        return result;
    };
    /**
     * Run all items of a sequence sequentially.
     */
    EventPipeline.prototype.runSequence = function (sequence, context) {
        var _this = this;
        var index = -1;
        var result = new DispatchResult(context.result);
        var onError = function (reason, item, onFinish) {
            if (item.onError === SequenceErrorBasicBehavior.Undefined) {
                item.onError = sequence.onError || DefaultSequenceErrorBehavior;
            }
            if (isArray(item.onError)) {
                dispatchItem({
                    event: null,
                    sequences: item.onError,
                    priority: 0,
                    onError: SequenceErrorBasicBehavior.Undefined
                }, onFinish);
                return;
            }
            if (item.onError === SequenceErrorBasicBehavior.StopSequence) {
                context.stopSequence(false);
            }
            else if (item.onError === SequenceErrorBasicBehavior.StopAll) {
                context.stopSequence(true);
            }
            // Else is the behavior "Ignore", so we do nothing.
            // Propagate the error to the parent result
            result.fail(reason);
            onFinish();
        };
        var dispatchItem = function (item, onFinish) {
            try {
                var subResult_1 = null;
                if (item.event !== null) {
                    context.event = item.event;
                    subResult_1 = _this.dispatcher.dispatch(item.event, context, true);
                    if (subResult_1.error) {
                        result.fail(subResult_1.errorDetail);
                    }
                }
                else if (item.sequences !== null) {
                    subResult_1 = _this.runSequences(item.sequences, context);
                }
                if (subResult_1 !== null && subResult_1.promise !== null) {
                    result.delayResponse(subResult_1.promise);
                    result.localPromise.then(function () {
                        // The promise of the sub result will always resolve, even on error.
                        // The error is contained in the DispatchResult object.
                        subResult_1 = subResult_1;
                        if (subResult_1.error) {
                            onError(subResult_1.errorDetail, item, onFinish);
                        }
                        else {
                            onFinish();
                        }
                    });
                }
                else {
                    onFinish();
                }
            }
            catch (e) {
                onError(e, item, onFinish);
            }
        };
        var next = function () {
            if (++index >= sequence.items.length || context.sequenceStopped) {
                return;
            }
            var item = sequence.items[index];
            dispatchItem(item, next);
        };
        next();
        return result;
    };
    /**
     * Remove all subscribers of a type of event if it is not found in any sequence.
     */
    EventPipeline.prototype.unsubscribeIfUnused = function (event) {
        if (isUndefined(this.unsubscribeFunctions[event]) || !this.unsubscribeFunctions[event].length) {
            return;
        }
        ext: for (var _i = 0, _a = Object.keys(this.sequences); _i < _a.length; _i++) {
            var sequenceName = _a[_i];
            var sequence = this.sequences[sequenceName];
            for (var _b = 0, _c = sequence.items; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.event === event) {
                    continue ext;
                }
            }
            for (var _d = 0, _e = this.unsubscribeFunctions[event]; _d < _e.length; _d++) {
                var fn = _e[_d];
                fn();
            }
            delete this.unsubscribeFunctions[event];
        }
    };
    return EventPipeline;
}());

export { EventPipeline };
