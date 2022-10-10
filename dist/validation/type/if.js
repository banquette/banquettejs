/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { AbstractVirtualContainer } from '../abstract-virtual-container.js';

/**
 * Execute all given validators if the condition verifies.
 */
var IfValidator = /** @class */ (function (_super) {
    __extends(IfValidator, _super);
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
}(AbstractVirtualContainer));
function If(condition, validators, groups) {
    return new IfValidator(condition, ensureArray(validators), ensureArray(groups));
}

export { If, IfValidator };
