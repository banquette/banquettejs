/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');

exports.TransformResultStatus = void 0;
(function (TransformResultStatus) {
    TransformResultStatus[TransformResultStatus["Waiting"] = 0] = "Waiting";
    TransformResultStatus[TransformResultStatus["Error"] = 1] = "Error";
    TransformResultStatus[TransformResultStatus["Ready"] = 2] = "Ready";
})(exports.TransformResultStatus || (exports.TransformResultStatus = {}));
var TransformResult = /** @class */ (function () {
    function TransformResult(parent) {
        if (parent === void 0) { parent = null; }
        this.parent = parent;
        this.promise = null;
        this.localPromise = null;
        this.previousPromise = null;
        this.promiseResolve = null;
        this.promiseReject = null;
        this.errorDetail = null;
        this.setStatus(exports.TransformResultStatus.Ready); // Consider the result synchronous until a promise is set.
    }
    /**
     * Set the final result of the transform.
     */
    TransformResult.prototype.setResult = function (result) {
        if (this.status !== exports.TransformResultStatus.Error) {
            this.result = result;
            return true;
        }
        return false;
    };
    /**
     * Set a promise that will resolve when the transform result is ready.
     */
    TransformResult.prototype.delayResponse = function (promise) {
        var _this = this;
        if (this.promise === null) {
            this.promise = new Promise(function (resolve, reject) {
                _this.promiseResolve = resolve;
                _this.promiseReject = reject;
            }).then(function () {
                _this.setStatus(exports.TransformResultStatus.Ready);
                _this.promiseResolve = _this.promiseReject = null;
                _this.cleanupAsync();
                return _this;
            });
            this.promise.catch(function (reason) {
                _this.fail(reason);
                return _this;
            });
        }
        var localPromise = this.localPromise === null ? promise : Promise.all([this.localPromise, promise]);
        this.localPromise = localPromise;
        this.previousPromise = localPromise;
        if (this.parent) {
            // Compiler doesn't see that "this.promise" is set above and create a "possibly null" error, thus the "as Promise...".
            this.parent.delayResponse(this.promise);
        }
        this.setStatus(exports.TransformResultStatus.Waiting);
        localPromise.then(function () {
            if (localPromise === _this.previousPromise) {
                _this.promiseResolve(_this);
            }
            _this.localPromise = null;
            return _this;
        }).catch(proxy.proxy(this.promiseReject, this));
    };
    /**
     * Utility method that always return a promise that will resolve when the transform is done.
     */
    TransformResult.prototype.onReady = function () {
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
     * Make the result on error and store the reason.
     */
    TransformResult.prototype.fail = function (reason) {
        this.errorDetail = exception_factory.ExceptionFactory.EnsureException(reason);
        this.result = undefined;
        this.setStatus(exports.TransformResultStatus.Error);
        if (this.promiseReject !== null) {
            this.promiseReject(reason);
        }
        this.cleanupAsync();
        if (this.parent !== null) {
            this.parent.fail(reason);
        }
    };
    /**
     * Shorthand to update the status and the corresponding flags.
     */
    TransformResult.prototype.setStatus = function (status) {
        this.status = status;
        this.ready = this.status === exports.TransformResultStatus.Ready;
        this.error = this.status === exports.TransformResultStatus.Error;
        this.waiting = this.status === exports.TransformResultStatus.Waiting;
    };
    TransformResult.prototype.cleanupAsync = function () {
        this.promiseResolve = null;
        this.promiseReject = null;
        this.promise = null;
    };
    return TransformResult;
}());

exports.TransformResult = TransformResult;
