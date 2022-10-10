/*!
 * Banquette Promise v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isObject } from '@banquette/utils-type/is-object';
import { isPromiseLike } from '@banquette/utils-type/is-promise-like';
import { isType } from '@banquette/utils-type/is-type';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { CancelException } from './exception/cancel.exception.js';
import { TimeoutException } from './exception/timeout.exception.js';
import { PromiseEventType } from './promise-event-type.js';
import { PromiseStatus } from './promise-status.js';

var _a;
/**
 * A enhanced Promise that you can subscribe to, adding progress events capabilities.
 * It works exactly like a classic promise and is compatible with the async/await syntax.
 *
 * The base promise implementation is based on the work of Maciej Cieślar, thanks to him.
 * @see https://www.freecodecamp.org/news/how-to-implement-promises-in-javascript-1ce2680a7f51/
 */
var ObservablePromise = /** @class */ (function () {
    function ObservablePromise(executor, parent) {
        this.parent = parent;
        this[_a] = 'ObservablePromise';
        /**
         * A flag to remember if the promise has been resolved/rejected.
         */
        this.status = PromiseStatus.Pending;
        /**
         * List of registered observers.
         */
        this.observers = [];
        /**
         * History of progress calls. Used to replay progression events when subscribing to the progress event.
         */
        this.progressHistory = [];
        /**
         * Only true if a catchOf() follows.
         */
        this.canForwardReject = false;
        this.doForwardReject = false;
        try {
            executor(ObservablePromise.Proxy(this.resolve, this), ObservablePromise.Proxy(this.reject, this), ObservablePromise.Proxy(this.notify, this));
        }
        catch (e) {
            this.reject(e);
        }
    }
    /**
     * Attaches callbacks for the resolution, rejection and/or progress events of the promise.
     */
    ObservablePromise.prototype.then = function (onResolve, onReject, onProgress, progressTypes) {
        var _this = this;
        if (progressTypes === void 0) { progressTypes = []; }
        return new ObservablePromise(function (resolve, reject, progress) {
            var subscriber = {
                onResolve: function (result) {
                    if (!onResolve) {
                        return void resolve(result);
                    }
                    try {
                        resolve(onResolve(result));
                    }
                    catch (e) {
                        subscriber.onReject(e);
                    }
                }, onReject: function (reason) {
                    if (!onReject) {
                        return reject(reason);
                    }
                    try {
                        var subResult = onReject(reason);
                        if (_this.doForwardReject) {
                            reject(subResult);
                        }
                        else {
                            resolve(subResult);
                        }
                    }
                    catch (e) {
                        reject(e);
                    }
                    finally {
                        _this.doForwardReject = false;
                    }
                }, onProgress: {
                    types: progressTypes,
                    callback: function (value) {
                        if (!onProgress) {
                            return progress(value);
                        }
                        try {
                            onProgress(value);
                        }
                        catch (e) {
                            subscriber.onReject(e);
                        }
                    }
                }
            };
            _this.subscribe(subscriber);
        }, this);
    };
    /**
     * Attaches a callback that will be called if the promise rejects.
     */
    ObservablePromise.prototype.catch = function (onReject) {
        if (this.parent) {
            this.parent.forwardReject();
        }
        return this.then(function (value) { return value; }, onReject);
    };
    /**
     * Like catch() but only calling the callback if the rejection reason is an object matching of the the type defined in parameter.
     */
    ObservablePromise.prototype.catchOf = function (type, onReject) {
        return this.catchBasedOnType(ensureArray(type), true, onReject);
    };
    /**
     * Like catchOf() but requires the type NOT to match for the callback to fire.
     */
    ObservablePromise.prototype.catchNotOf = function (type, onReject) {
        return this.catchBasedOnType(ensureArray(type), false, onReject);
    };
    /**
     * Subscribe to the promise progression events.
     */
    ObservablePromise.prototype.progress = function (onProgress, types) {
        if (types === void 0) { types = []; }
        return this.then(function (value) { return value; }, undefined, onProgress, types);
    };
    /**
     * Attaches a callback that will be called when the promise is settled, no matter if it resolves or rejects.
     */
    ObservablePromise.prototype.finally = function (onSettle) {
        var _this = this;
        return new ObservablePromise(function (resolve, reject) {
            var rejected = false;
            var result;
            return _this.then(function (value) {
                result = value;
                if (onSettle) {
                    onSettle();
                }
            }, function (reason) {
                result = reason;
                rejected = true;
                if (onSettle) {
                    onSettle();
                }
            }).then(function () {
                if (rejected) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
    };
    /**
     * Forces the rejection of the promise with a CancelException.
     */
    ObservablePromise.prototype.cancel = function () {
        this.reject(new CancelException());
    };
    /**
     * Rejects the callback with a "TimeoutException" if not settled in the given delay.
     */
    ObservablePromise.prototype.timeout = function (delay) {
        var _this = this;
        return new ObservablePromise(function (resolve, reject, progress) {
            setTimeout(function () {
                if (_this.isPending()) {
                    _this.reject(new TimeoutException());
                }
            }, delay);
            return _this.then(resolve, reject, progress);
        });
    };
    /**
     * Check if the promise is still pending.
     */
    ObservablePromise.prototype.isPending = function () {
        return this.status === PromiseStatus.Pending;
    };
    /**
     * Check if the promise has been resolved.
     */
    ObservablePromise.prototype.isFulfilled = function () {
        return this.status === PromiseStatus.Fulfilled;
    };
    /**
     * Check if the promise has been rejected.
     */
    ObservablePromise.prototype.isRejected = function () {
        return this.status === PromiseStatus.Rejected;
    };
    ObservablePromise.prototype.toString = function () {
        return '[object ObservablePromise]';
    };
    ObservablePromise.prototype.forwardReject = function () {
        this.canForwardReject = true;
    };
    /**
     * Resolve the promise.
     */
    ObservablePromise.prototype.resolve = function (result) {
        return this.settle(result, PromiseStatus.Fulfilled);
    };
    /**
     * Reject the promise.
     */
    ObservablePromise.prototype.reject = function (reason) {
        return this.settle(reason, PromiseStatus.Rejected);
    };
    /**
     * Notify of the progress.
     */
    ObservablePromise.prototype.notify = function (value) {
        this.progressHistory.push(value);
        this.dispatch(PromiseEventType.progress, value);
    };
    /**
     * Register one or multiple callbacks.
     */
    ObservablePromise.prototype.subscribe = function (handlers) {
        this.observers.push({
            onResolve: handlers.onResolve || (function (value) { return value; }),
            onReject: handlers.onReject || (function () { }),
            onProgress: handlers.onProgress || {
                callback: function () { },
                types: []
            }
        });
        if (this.status !== PromiseStatus.Pending) {
            this.dispatch(ObservablePromise.EventTypeFromStatus(this.status), this.result, this.observers.length - 1);
        }
        for (var _b = 0, _c = this.progressHistory; _b < _c.length; _b++) {
            var value = _c[_b];
            this.dispatch(PromiseEventType.progress, value, this.observers.length - 1);
        }
    };
    /**
     * Set the result value of the promise, and its definitive status.
     */
    ObservablePromise.prototype.settle = function (result, status) {
        var _this = this;
        setTimeout(function () {
            if (status === PromiseStatus.Pending) {
                throw new UsageException('You can\'t set the pending status.');
            }
            if (_this.status !== PromiseStatus.Pending) {
                return;
            }
            if (result instanceof ObservablePromise) {
                return void result.then(ObservablePromise.Proxy(_this.resolve, _this), ObservablePromise.Proxy(_this.reject, _this), ObservablePromise.Proxy(_this.notify, _this));
            }
            if (isType(result, isPromiseLike)) {
                return void result.then(ObservablePromise.Proxy(_this.resolve, _this), ObservablePromise.Proxy(_this.reject, _this));
            }
            _this.result = result;
            _this.status = status;
            _this.dispatch(ObservablePromise.EventTypeFromStatus(_this.status), result);
            _this.observers = [];
        });
    };
    /**
     * Dispatch an event to all registered observers.
     */
    ObservablePromise.prototype.dispatch = function (type, value, observerIndex) {
        var doDispatch = function (observer) {
            switch (type) {
                case PromiseEventType.resolve:
                    {
                        observer.onResolve(value);
                    }
                    break;
                case PromiseEventType.reject:
                    {
                        observer.onReject(value);
                    }
                    break;
                case PromiseEventType.progress:
                    {
                        if (!observer.onProgress.types.length) {
                            observer.onProgress.callback(value);
                        }
                    }
                    break;
            }
        };
        if (isUndefined(observerIndex)) {
            for (var _b = 0, _c = this.observers; _b < _c.length; _b++) {
                var observer = _c[_b];
                doDispatch(observer);
            }
        }
        else if (this.observers.length > observerIndex) {
            doDispatch(this.observers[observerIndex]);
        }
        else {
            throw new UsageException("Out of bounds observer index (".concat(observerIndex, "), ").concat(this.observers.length, " observers in array."));
        }
    };
    /**
     * Centralize the catchOf() logic so we can inverse the condition.
     */
    ObservablePromise.prototype.catchBasedOnType = function (types, shouldMatch, onReject) {
        var _this = this;
        if (this.parent) {
            this.parent.forwardReject();
        }
        return this.then(function (value) { return value; }, function (reason) {
            var pos = isObject(reason) ? types.indexOf(reason.constructor) : null;
            if ((!shouldMatch && pos === null) || (pos !== null && ((shouldMatch && pos > -1) || (!shouldMatch && pos < 0)))) {
                onReject(reason);
                return reason;
            }
            if (_this.canForwardReject) {
                _this.doForwardReject = true;
                throw reason;
            }
            return reason;
        });
    };
    /**
     * Create a resolved promise.
     */
    ObservablePromise.Resolve = function (value) {
        return new ObservablePromise(function (resolve) {
            resolve(value);
        });
    };
    /**
     * Create a rejected promise.
     */
    ObservablePromise.Reject = function (value) {
        return new ObservablePromise(function (resolve, reject) {
            reject(value);
        });
    };
    /**
     * Create a resolved promise.
     *
     * This method is only here to comply to the Promises/A+ specification.
     * All static methods normally start with an uppercase letter in Banquette.
     */
    ObservablePromise.resolve = function (value) {
        return ObservablePromise.Resolve(value);
    };
    /**
     * Create a rejected promise.
     *
     * This method is only here to comply to the Promises/A+ specification.
     * All static methods normally start with an uppercase letter in Banquette.
     */
    ObservablePromise.reject = function (reason) {
        return ObservablePromise.Reject(reason);
    };
    /**
     * Wait for all entries of the collection to resolve and resolve with an array of the results.
     * The items of the collection are not forced to be promises, any value can be given.
     */
    ObservablePromise.All = function (collection) {
        return new ObservablePromise(function (resolve, reject) {
            collection = ensureArray(collection);
            var done = 0;
            var results = new Array(collection.length);
            for (var i = 0; i < collection.length; ++i) {
                ObservablePromise.Resolve(collection[i]).then((function (_i) {
                    return function (result) {
                        results[_i] = result;
                        if (++done === collection.length) {
                            resolve(results);
                        }
                    };
                })(i)).catch(reject);
            }
        });
    };
    /**
     * Wait for the first promise to resolve or reject and forward the result to the promise returned by the function.
     * The items of the collection are not forced to be promises, any value can be given, non promise items will resolve immediately.
     */
    ObservablePromise.Any = function (collection) {
        return new ObservablePromise(function (resolve, reject) {
            var settled = false;
            for (var _b = 0, collection_1 = collection; _b < collection_1.length; _b++) {
                var item = collection_1[_b];
                ObservablePromise.Resolve(item).then(function (result) {
                    if (!settled) {
                        resolve(result);
                    }
                }).catch(function (reason) {
                    if (!settled) {
                        reject(reason);
                    }
                }).finally(function () {
                    settled = true;
                });
            }
        });
    };
    /**
     * Resolve with a given value after a delay in milliseconds.
     */
    ObservablePromise.ResolveAfterDelay = function (delay, value) {
        return new ObservablePromise(function (resolve) {
            setTimeout(function () {
                resolve(value);
            }, delay);
        });
    };
    /**
     * Ensure the promise is resolved after a minimum amount of time.
     * If the promise resolves sooner, a timer will wait for the remaining time.
     */
    ObservablePromise.MinDelay = function (delay, executor) {
        var startTime = (new Date()).getTime();
        return new ObservablePromise(function (resolve, reject) {
            var forward = function (type, result) {
                if (type === PromiseEventType.resolve) {
                    resolve(result);
                }
                else if (type === PromiseEventType.reject) {
                    reject(result);
                }
            };
            var forwardIfDelay = function (type, result) {
                var delta = (new Date()).getTime() - startTime;
                if (delta >= delay) {
                    forward(type, result);
                }
                else {
                    setTimeout(function () {
                        forward(type, result);
                    }, delay - delta);
                }
            };
            var sub = new ObservablePromise(executor);
            sub.then(function (result) {
                forwardIfDelay(PromiseEventType.resolve, result);
            }).catch(function (reason) {
                forwardIfDelay(PromiseEventType.reject, reason);
            });
        });
    };
    /**
     * Convert a status into the corresponding event type.
     */
    ObservablePromise.EventTypeFromStatus = function (status) {
        switch (status) {
            case PromiseStatus.Fulfilled: return PromiseEventType.resolve;
            case PromiseStatus.Rejected: return PromiseEventType.reject;
            default: return PromiseEventType.progress;
        }
    };
    /**
     * Bind a function to a context, optionally partially applying any arguments.
     */
    ObservablePromise.Proxy = function (fn, context) {
        var args = Array.prototype.slice.call(arguments, 2);
        return function () {
            // @ts-ignore
            return fn.apply(context || this, args.concat(Array.prototype.slice.call(arguments)));
        };
    };
    return ObservablePromise;
}());
_a = Symbol.toStringTag;

export { ObservablePromise };
