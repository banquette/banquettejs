/*!
 * Banquette UtilsMisc v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ObservablePromise } from '@banquette/promise/observable-promise';
import { isPromiseLike } from '@banquette/utils-type/is-promise-like';
import { isValidNumber } from '@banquette/utils-type/is-valid-number';

/**
 * Execute a callback repeatedly until it either succeeds or reaches a maximum number of tries.
 */
function doAndRetry(options, cb) {
    var maxRetryDelay = isValidNumber(options.maxRetryDelay) ? options.maxRetryDelay : 10000;
    var maxTry = isValidNumber(options.maxTry) ? options.maxTry : 3;
    var retryDelay = isValidNumber(options.minRetryDelay) ? options.minRetryDelay : 500;
    var tries = 1;
    var doTry = function (resolve, reject, progress) {
        var onFailure = function (reason) {
            progress(reason);
            if (maxTry <= 0 || tries++ < maxTry) {
                retryDelay = Math.min(maxRetryDelay, retryDelay * 2);
                setTimeout(function () {
                    doTry(resolve, reject, progress);
                }, retryDelay);
            }
            else {
                reject(reason);
            }
        };
        try {
            var res = cb();
            if (isPromiseLike(res)) {
                res.then(resolve).catch(onFailure);
            }
            else {
                return resolve(res);
            }
        }
        catch (e) {
            onFailure(e);
        }
    };
    return new ObservablePromise(function (resolve, reject, progress) {
        doTry(resolve, reject, progress);
    });
}
/**
 * Creates a function that will call `doAndRetry()` when invoked but that hides it from the outside
 * so it can be used like any other function.
 */
function doAndRetryFactory(options, context, cb) {
    return function () {
        var arguments$1 = arguments;

        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments$1[_i];
        }
        return doAndRetry(options, function () {
            return cb.apply(context, args);
        });
    };
}

export { doAndRetry, doAndRetryFactory };
