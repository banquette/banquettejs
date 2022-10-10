/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var noop = require('@banquette/utils-misc/_cjs/dev/noop');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');

/**
 * Abstract the asynchronous behavior of transformers
 */
var TransformPipeline = /** @class */ (function () {
    function TransformPipeline(result, transformableProperties) {
        this.result = result;
        this.transformableProperties = transformableProperties;
        this.onFinishSubscribers = [];
        this.settled = false;
        this.promise = null;
        this.promiseResolve = null;
        this.promiseReject = null;
    }
    /**
     * Register two callbacks that will be invoked for each transformer:
     *
     * - onPrepare: called immediately for each property, you must invoke the transformer here and return the raw result
     * - onFinish: called when the result of the transformer have settled.
     *
     * If no transformer is asynchronous, everything here will be synchronous.
     */
    TransformPipeline.prototype.forEach = function (onPrepare, onFinish) {
        var _this = this;
        try {
            var properties = Object.keys(this.transformableProperties);
            var pending_1 = properties.length;
            for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
                var property = properties_1[_i];
                var transformer = this.transformableProperties[property];
                var subResult = onPrepare(property, transformer);
                var respond = (function (_p, _sr) {
                    return function () {
                        if (_sr.error) {
                            _this.fail(_sr.errorDetail);
                            return;
                        }
                        onFinish(_p, _sr);
                        if (!(--pending_1)) {
                            _this.settle();
                        }
                    };
                })(property, subResult);
                if (subResult.promise !== null) {
                    this.waitForResult(subResult).then(respond);
                }
                else {
                    respond();
                }
                if (this.settled) {
                    break;
                }
            }
            if (!properties.length) {
                this.settle();
            }
        }
        catch (e) {
            this.fail(e);
        }
    };
    /**
     * Register a function to call when all transformers have settled.
     */
    TransformPipeline.prototype.onFinish = function (cb) {
        var _this = this;
        this.onFinishSubscribers.push(cb);
        if (this.settled) {
            cb();
        }
        return function () {
            for (var i = 0; i < _this.onFinishSubscribers.length; ++i) {
                if (_this.onFinishSubscribers[i] === cb) {
                    _this.onFinishSubscribers.splice(i, 1);
                    break;
                }
            }
        };
    };
    /**
     * Make the pipeline asynchronous (if not already) and wait for a TransformResult to resolve.
     */
    TransformPipeline.prototype.waitForResult = function (result) {
        var _this = this;
        if (this.promise === null) {
            this.promise = new Promise(function (resolve, reject) {
                _this.promiseResolve = resolve;
                _this.promiseReject = reject;
            });
            this.result.delayResponse(this.promise);
        }
        return result.promise.then(noop.noop).catch(proxy.proxy(this.fail, this));
    };
    /**
     * Call all the subscribers on the "onFinish" event and settle the pipeline.
     */
    TransformPipeline.prototype.settle = function () {
        if (this.settled) {
            return;
        }
        this.settled = true;
        if (this.promiseResolve !== null) {
            this.promiseResolve();
        }
        for (var _i = 0, _a = this.onFinishSubscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber();
        }
    };
    /**
     * Make the result fail.
     */
    TransformPipeline.prototype.fail = function (reason) {
        if (this.promiseReject !== null) {
            this.promiseReject(reason);
        }
        else {
            this.result.fail(reason);
        }
        this.settled = true;
    };
    return TransformPipeline;
}());

exports.TransformPipeline = TransformPipeline;
