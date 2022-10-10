/*!
 * Banquette ObjectObserver v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { EventDispatcher } from '@banquette/event/event-dispatcher';
import { UsageException } from '@banquette/exception/usage.exception';
import { MatchType } from '@banquette/utils-glob/constant';
import { match } from '@banquette/utils-glob/match';
import { proxy } from '@banquette/utils-misc/proxy';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { ObserverEvents, ObserverInstance, MutationType } from '../constant.js';
import { MutationEvent } from '../event/mutation.event.js';
import { MutationsCollectionEvent } from '../event/mutations-collection.event.js';
import { Mutation } from '../mutation.js';
import { ObserverFactory } from '../observer.factory.js';
import { extractObserver } from '../utils.js';

var maxId = 0;
var AbstractObserver = /** @class */ (function () {
    function AbstractObserver(name, target, parent) {
        if (parent === void 0) { parent = null; }
        var _this = this;
        this.target = target;
        this.id = ++maxId;
        /**
         * The dispatcher responsible of emitting the events to the outside.
         * Only created when `subscribe()` is called.
         */
        this.eventDispatcher = null;
        this.subscribeCounts = {};
        /**
         * List of mutations waiting to be dispatched asynchronously.
         */
        this.mutationsQueue = [];
        /**
         * Array of parent observers.
         */
        this.parents = [];
        /**
         * Queue a mutation for asynchronous dispatch.
         */
        this.queueNotify = (function () {
            var queued = false;
            return function (mutation) {
                _this.mutationsQueue.push(mutation);
                if (!queued) {
                    queued = true;
                    queueMicrotask(function () {
                        if (_this.eventDispatcher !== null) {
                            _this.eventDispatcher.dispatchWithErrorHandling(ObserverEvents.ChangedAsync, new MutationsCollectionEvent(_this.mutationsQueue));
                        }
                        _this.mutationsQueue = [];
                        queued = false;
                    });
                }
            };
        })();
        if (parent !== null) {
            this.parents.push({ name: name, parent: parent });
        }
        this.proxy = new Proxy(target, {
            get: proxy(this.get, this),
            set: proxy(this.set, this),
            deleteProperty: proxy(this.deleteProperty, this)
        });
        this.observe(target);
    }
    /**
     * Defines the priority of the observer.
     * The higher the priority the sooner the observer will be tested when a new object is to be observed.
     */
    AbstractObserver.GetPriority = function () {
        return 0;
    };
    /**
     * @inheritDoc
     */
    AbstractObserver.Supports = function (target) {
        throw new UsageException('`AbstractObserver::Supports()` must be overridden.');
    };
    /**
     * Subscribe to changes notifications in a synchronous way.
     * The callback will be called synchronously for each change.
     */
    AbstractObserver.prototype.subscribe = function (cb, type, mask) {
        var _this = this;
        if (type === void 0) { type = null; }
        if (mask === void 0) { mask = null; }
        return this.doSubscribe(ObserverEvents.ChangedSync, function (event) {
            if (_this.matchMutation(event.mutation, type, mask)) {
                cb(event);
            }
        });
    };
    /**
     * Subscribe to change notifications in batch.
     * The callback will only be called once per cycle, so it receives an array of events.
     */
    AbstractObserver.prototype.subscribeAsync = function (cb, type, mask) {
        var _this = this;
        if (type === void 0) { type = null; }
        if (mask === void 0) { mask = null; }
        return this.doSubscribe(ObserverEvents.ChangedAsync, function (event) {
            var relevantMutations = _this.filterMutations(event.mutations, type, mask);
            if (relevantMutations.length) {
                cb(new MutationsCollectionEvent(relevantMutations));
            }
        });
    };
    /**
     * Called once on initialization, so child observers can be setup.
     */
    AbstractObserver.prototype.observe = function (target) {
    };
    /**
     * Generic `get` handler doing nothing special.
     */
    AbstractObserver.prototype.get = function (target, key) {
        if (key === ObserverInstance) {
            return this;
        }
        return target[key];
    };
    /**
     * Generic `set` handler.
     */
    AbstractObserver.prototype.set = function (target, key, value) {
        var oldValue = target[key];
        var newValue = this.observeProperty(String(key), value);
        if (value !== oldValue) {
            this.detachValue(oldValue);
            target[key] = newValue;
            this.notify(new Mutation(isUndefined(oldValue) ? MutationType.Insert : MutationType.Update, [String(key)], oldValue, newValue, this.target));
        }
        return true;
    };
    /**
     * Generic `deleteProperty` handler.
     */
    AbstractObserver.prototype.deleteProperty = function (target, key) {
        var oldValue = target[key];
        this.detachValue(oldValue);
        delete target[key];
        this.notify(new Mutation(MutationType.Delete, [String(key)], oldValue, undefined, this.target));
        return true;
    };
    /**
     * Register a new parent observer.
     */
    AbstractObserver.prototype.addParent = function (parent, name) {
        this.parents.push({ parent: parent, name: name });
    };
    /**
     * Update the name of the observer for a given parent.
     */
    AbstractObserver.prototype.updateName = function (name, parent) {
        for (var _i = 0, _a = this.parents; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.parent === parent) {
                item.name = name;
            }
        }
    };
    /**
     * Detach the observer from a parent.
     */
    AbstractObserver.prototype.detach = function (parent) {
        for (var i = 0; i < this.parents.length; ++i) {
            if (this.parents[i].parent === parent) {
                this.parents.splice(i--, 1);
            }
        }
    };
    /**
     * Notify that a mutation has occurred.
     */
    AbstractObserver.prototype.notify = function (mutation) {
        if (this.parents.length > 0) {
            for (var _i = 0, _a = this.parents; _i < _a.length; _i++) {
                var parent_1 = _a[_i];
                // Forced to create a clone because the path may differ for each parent.
                parent_1.parent.notify(new Mutation(mutation.type, [parent_1.name].concat(mutation.pathParts), mutation.oldValue, mutation.newValue, mutation.target));
            }
        }
        if (this.eventDispatcher === null) {
            return;
        }
        if (this.subscribeCounts[ObserverEvents.ChangedSync]) {
            this.eventDispatcher.dispatchWithErrorHandling(ObserverEvents.ChangedSync, new MutationEvent(mutation));
        }
        if (this.subscribeCounts[ObserverEvents.ChangedAsync]) {
            this.queueNotify(mutation);
        }
    };
    /**
     * Try to create a sub observer for a property.
     * If the value is not observable, it is returned unchanged.
     */
    AbstractObserver.prototype.observeProperty = function (key, value) {
        if (isObject(value)) {
            var existingObserver = extractObserver(value);
            if (existingObserver instanceof AbstractObserver) {
                if (existingObserver.id !== this.id) {
                    existingObserver.addParent(this, key);
                }
                return value;
            }
        }
        if (ObserverFactory.Supports(value)) {
            var observer = ObserverFactory.Create(value, this, key);
            return observer.proxy;
        }
        return value;
    };
    /**
     * Maybe detach the observer of a value, if applicable.
     */
    AbstractObserver.prototype.detachValue = function (value) {
        if (isObject(value)) {
            var existingObserver = extractObserver(value);
            if (existingObserver instanceof AbstractObserver) {
                if (existingObserver !== this) {
                    existingObserver.detach(this);
                }
            }
        }
    };
    /**
     * Test if a mutation matches a type of change and (optionally a path mask).
     */
    AbstractObserver.prototype.matchMutation = function (mutation, type, mask) {
        if (type !== null && (type & mutation.type) !== mutation.type) {
            return false;
        }
        if (mask !== null) {
            var matchResult = match(mask, mutation.path);
            if (matchResult.pattern !== MatchType.Full) {
                return false;
            }
        }
        return true;
    };
    /**
     * Filter an array of mutations to only keep those that match a type of change and (optionally a path mask).
     */
    AbstractObserver.prototype.filterMutations = function (mutations, type, mask) {
        var _this = this;
        return mutations.filter(function (mutation) {
            return _this.matchMutation(mutation, type, mask);
        });
    };
    /**
     * Wrap the common logic of all subscriptions.
     */
    AbstractObserver.prototype.doSubscribe = function (eventType, cb) {
        var _a;
        var _this = this;
        if (this.eventDispatcher === null) {
            this.eventDispatcher = new EventDispatcher();
            this.subscribeCounts = (_a = {},
                _a[ObserverEvents.ChangedSync] = 0,
                _a[ObserverEvents.ChangedAsync] = 0,
                _a);
        }
        var unsubscribed = false;
        var unsubscribe = this.eventDispatcher.subscribe(eventType, cb);
        this.subscribeCounts[eventType]++;
        return function () {
            if (!unsubscribed) {
                _this.subscribeCounts[eventType]--;
                unsubscribe();
            }
            unsubscribed = true;
        };
    };
    return AbstractObserver;
}());

export { AbstractObserver };
