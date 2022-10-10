/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var validator_component = require('./validator.component.js');

/**
 * Base class for container validator components.
 */
var ContainerValidatorComponent = /** @class */ (function (_super) {
    _tslib.__extends(ContainerValidatorComponent, _super);
    function ContainerValidatorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A map of sub validators, indexed by id.
         */
        _this.subValidators = {};
        return _this;
    }
    Object.defineProperty(ContainerValidatorComponent.prototype, "children", {
        /**
         * Get the list of child validators.
         */
        get: function () {
            return Object.values(this.subValidators);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add a sub validator and returns a function to call to remove it.
     */
    ContainerValidatorComponent.prototype.registerChild = function (validator) {
        var _this = this;
        var nextId = ++ContainerValidatorComponent.MaxId;
        this.subValidators[nextId] = validator;
        if (this.parentValidator) {
            this.assignToParentValidator(this.parentValidator);
        }
        return function () {
            delete _this.subValidators[nextId];
        };
    };
    ContainerValidatorComponent.MaxId = 0;
    return ContainerValidatorComponent;
}(validator_component.ValidatorComponent));

exports.ContainerValidatorComponent = ContainerValidatorComponent;
