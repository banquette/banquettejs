/*!
 * Banquette Event v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var isPromiseLike = require('@banquette/utils-type/_cjs/dev/is-promise-like');

exports.DispatchResultStatus = void 0;
(function (DispatchResultStatus) {
    DispatchResultStatus[DispatchResultStatus["Waiting"] = 0] = "Waiting";
    DispatchResultStatus[DispatchResultStatus["Error"] = 1] = "Error";
    DispatchResultStatus[DispatchResultStatus["Ready"] = 2] = "Ready";
})(exports.DispatchResultStatus || (exports.DispatchResultStatus = {}));
var DispatchResult = /** @class */ (function () {
    function DispatchResult(parent) {
        if (parent === void 0) { parent = null; }
        this.parent = parent;
        this.defaultPrevented = false;
        this.results = [];
        this.promise = null;
        this.localPromise = null;
        this.previousPromise = null;
        this.promiseResolve = null;
        this.errorDetail = null;
        this.setStatus(exports.DispatchResultStatus.Ready); // Consider the result synchronous until a promise is set.
    }
    /**
     * Add a dispatcher call to the result, handling the asynchronous aspect if necessary.
     */
    DispatchResult.prototype.registerCall = function (call) {
        if (isPromiseLike.isPromiseLike(call.result)) {
            this.delayResponse(call.result);
        }
        else {
            this.addResult(call.result);
        }
    };
    /**
     * Set the final result of the transform.
     */
    DispatchResult.prototype.addResult = function (result) {
        if (this.status !== exports.DispatchResultStatus.Error) {
            this.results.push(result);
            return true;
        }
        return false;
    };
    /**
     * Utility method that always return a promise that will resolve when the transform is done.
     */
    DispatchResult.prototype.onReady = function () {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.promise !== null)) { return [3 /*break*/, 2]; }
                        return [4 /*yield*/, this.promise];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                    case 2: return [2 /*return*/, this];
                }
            });
        });
    };
    /**
     * Mark the result as "default prevented", meaning the caller will know
     * that if an optional action was to be performed after this event, it should not anymore.
     */
    DispatchResult.prototype.preventDefault = function () {
        this.defaultPrevented = true;
        if (this.parent) {
            this.parent.preventDefault();
        }
    };
    /**
     * Set a promise that will resolve when all the subscriber have been called and finished their processing.
     */
    DispatchResult.prototype.delayResponse = function (promise) {
        var _this = this;
        this.setStatus(exports.DispatchResultStatus.Waiting);
        if (this.promise === null) {
            this.promise = new Promise(function (resolve) {
                _this.promiseResolve = resolve;
            }).then(function () {
                if (_this.status === exports.DispatchResultStatus.Waiting) {
                    _this.setStatus(exports.DispatchResultStatus.Ready);
                }
                _this.promiseResolve = null;
                _this.cleanupAsync();
                return _this;
            }).catch(function (reason) {
                _this.fail(reason);
                return _this;
            });
        }
        var localPromise = (this.localPromise === null ? promise : Promise.all([this.localPromise, promise]))
            .then(function () {
            // The timeout is required so the dispatcher can execute the next subscriber if the execution is sequential.
            // Otherwise, "localPromise" will always be equal to "previousPromise".
            // If it is still equal on the next cycle, we have reached the end.
            window.setTimeout(function () {
                if (localPromise === _this.previousPromise && _this.promiseResolve) {
                    if (_this.promiseResolve) {
                        _this.promiseResolve(_this);
                    }
                }
                _this.localPromise = null;
            });
            return _this;
        }).catch(function (reason) {
            _this.fail(reason);
        });
        this.localPromise = localPromise;
        this.previousPromise = localPromise;
    };
    /**
     * Make the result on error and store the reason.
     */
    DispatchResult.prototype.fail = function (reason) {
        this.errorDetail = exception_factory.ExceptionFactory.EnsureException(reason);
        this.results.splice(0, this.results.length);
        this.setStatus(exports.DispatchResultStatus.Error);
        // The promise should always resolve no matter what happens.
        if (this.promiseResolve !== null) {
            this.promiseResolve(this);
        }
        this.cleanupAsync();
        if (this.parent !== null) {
            this.parent.fail(reason);
        }
    };
    /**
     * Shorthand to update the status and the corresponding flags.
     */
    DispatchResult.prototype.setStatus = function (status) {
        this.status = status;
        this.ready = this.status === exports.DispatchResultStatus.Ready;
        this.error = this.status === exports.DispatchResultStatus.Error;
        this.waiting = this.status === exports.DispatchResultStatus.Waiting;
    };
    DispatchResult.prototype.cleanupAsync = function () {
        this.promiseResolve = null;
        this.promise = null;
    };
    return DispatchResult;
}());

exports.DispatchResult = DispatchResult;
