/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var abstractVirtualContainer = require('../abstract-virtual-container.js');

/**
 * Execute all given validators if the condition verifies.
 */
var IfValidator = /** @class */ (function (_super) {
    _tslib.__extends(IfValidator, _super);
    function IfValidator(condition, validators, groups) {
        var _this = _super.call(this, validators, true, groups) || this;
        _this.condition = condition;
        return _this;
    }
    /**
     * @inheritDoc
     */
    IfValidator.prototype.onStart = function (context) {
        return this.condition(context);
    };
    /**
     * @inheritDoc
     */
    IfValidator.prototype.onNextResult = function (result) {
        return true;
    };
    return IfValidator;
}(abstractVirtualContainer.AbstractVirtualContainer));
function If(condition, validators, groups) {
    return new IfValidator(condition, ensureArray.ensureArray(validators), ensureArray.ensureArray(groups));
}

exports.If = If;
exports.IfValidator = IfValidator;
