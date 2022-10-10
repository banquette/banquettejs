/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { AbstractVirtualContainer } from '../abstract-virtual-container.js';

/**
 * Execute each of the given validators sequentially.
 */
var ComposeValidator = /** @class */ (function (_super) {
    __extends(ComposeValidator, _super);
    function ComposeValidator(validators) {
        return _super.call(this, validators, false) || this;
    }
    /**
     * @inheritDoc
     */
    ComposeValidator.prototype.onNextResult = function (result) {
        // Compose always execute all the validators.
        return true;
    };
    return ComposeValidator;
}(AbstractVirtualContainer));
var Compose = function () {
    var arguments$1 = arguments;

    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments$1[_i];
    }
    return new ComposeValidator(validators);
};

export { Compose, ComposeValidator };
