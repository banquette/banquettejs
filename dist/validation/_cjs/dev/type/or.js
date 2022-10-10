/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var abstractVirtualContainer = require('../abstract-virtual-container.js');

/**
 * Execute each of the given validators sequentially until one of them validates.
 */
var OrValidator = /** @class */ (function (_super) {
    _tslib.__extends(OrValidator, _super);
    function OrValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastViolationsCount = 0;
        _this.skippedCount = 0;
        _this.failedCount = 0;
        return _this;
    }
    /**
     * @inheritDoc
     */
    OrValidator.prototype.onStart = function (context) {
        this.lastViolationsCount = 0;
        this.failedCount = 0;
        return true;
    };
    /**
     * @inheritDoc
     */
    OrValidator.prototype.onNextResult = function (result, index, skipped) {
        var prev = this.validators[index - 1];
        skipped = skipped || (prev instanceof abstractVirtualContainer.AbstractVirtualContainer && prev.skipped);
        var shouldContinue = result.violations.length !== this.lastViolationsCount || skipped;
        this.lastViolationsCount = result.violations.length;
        if (shouldContinue) {
            ++this.failedCount;
        }
        if (skipped) {
            ++this.skippedCount;
        }
        return shouldContinue;
    };
    /**
     * @inheritDoc
     */
    OrValidator.prototype.onEnd = function (context, index) {
        if (this.failedCount < this.validators.length - this.skippedCount) {
            context.result.clearViolations(false);
        }
    };
    return OrValidator;
}(abstractVirtualContainer.AbstractVirtualContainer));
function Or() {
    var arguments$1 = arguments;

    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments$1[_i];
    }
    return new OrValidator(validators);
}

exports.Or = Or;
exports.OrValidator = OrValidator;
