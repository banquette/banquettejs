/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var varHolder = require('@banquette/utils-misc/_cjs/dev/var-holder');

var Constants = /** @class */ (function (_super) {
    _tslib.__extends(Constants, _super);
    function Constants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the value of a constant.
     */
    Constants.Get = function (name) {
        return Constants.GetInstance().get(name);
    };
    /**
     * Register a constant.
     */
    Constants.Register = function (name, value) {
        if (Constants.GetInstance().has(name)) {
            throw new usage_exception.UsageException("A constant named ".concat(name, " is already defined."));
        }
        Constants.GetInstance().set(name, value);
    };
    /**
     * Get (and create if necessary) the singleton instance.
     */
    Constants.GetInstance = function () {
        if (Constants.Instance === null) {
            Constants.Instance = new Constants();
        }
        return Constants.Instance;
    };
    Constants.Instance = null;
    return Constants;
}(varHolder.VarHolder));

exports.Constants = Constants;
