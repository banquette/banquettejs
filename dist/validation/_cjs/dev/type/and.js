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
 * Execute each of the given validators sequentially until one of them fails.
 */
var AndValidator = /** @class */ (function (_super) {
    _tslib.__extends(AndValidator, _super);
    function AndValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    AndValidator.prototype.onNextResult = function (result) {
        return !result.violations.length;
    };
    return AndValidator;
}(abstractVirtualContainer.AbstractVirtualContainer));
var And = function () {
    var arguments$1 = arguments;

    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments$1[_i];
    }
    return new AndValidator(validators);
};

exports.And = And;
exports.AndValidator = AndValidator;
