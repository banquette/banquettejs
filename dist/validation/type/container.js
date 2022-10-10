/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { isArray } from '@banquette/utils-type/is-array';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { splitPath, isValidatorContainer } from '../utils.js';
import { ValidationContext } from '../validation-context.js';

/**
 * Validate an object or an array.
 */
var ContainerValidator = /** @class */ (function () {
    function ContainerValidator(validators) {
        this.validators = validators;
        this.tags = [];
        this.groups = [];
    }
    Object.defineProperty(ContainerValidator.prototype, "length", {
        /**
         * Return the number of child validators.
         */
        get: function () {
            return Object.keys(this.validators).length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get the whole collection of validators.
     */
    ContainerValidator.prototype.getAll = function () {
        return this.validators;
    };
    /**
     * The the whole collection of validators.
     */
    ContainerValidator.prototype.set = function (path, validator) {
        var parts = splitPath(path);
        if (parts.length === 1) {
            this.setValidator(parts[0], validator);
            return;
        }
        var current = this.getValidator(parts[0]);
        if (!isValidatorContainer(current)) {
            throw new UsageException("A ValidatorContainerInterface is expected for the \"".concat(parts[0], "\" component of \"").concat(path, "\"."));
        }
        current.set(parts.slice(1).join('/'), validator);
    };
    /**
     * Test if a validator has been registered for a given path.
     */
    ContainerValidator.prototype.has = function (path) {
        var parts = splitPath(path);
        if (parts.length === 1) {
            return !isUndefined(this.getValidator(parts[0]));
        }
        var current = this.getValidator(parts[0]);
        return isValidatorContainer(current) && current.has(parts.slice(1).join('/'));
    };
    /**
     * Remove a validator from the container or one of its children.
     */
    ContainerValidator.prototype.remove = function (path) {
        var parts = splitPath(path);
        if (parts.length === 1) {
            this.removeValidator(parts[0]);
            return;
        }
        var current = this.getValidator(parts[0]);
        if (isValidatorContainer(current)) {
            current.remove(parts.slice(1).join('/'));
        }
    };
    /**
     * Validate a value.
     */
    ContainerValidator.prototype.validate = function (value, contextOrOptions) {
        var context = ValidationContext.EnsureValidationContext(value, contextOrOptions);
        if (!isObject(value) || !context.shouldValidate(this)) {
            return context.result;
        }
        for (var _i = 0, _a = Object.keys(this.validators); _i < _a.length; _i++) {
            var key = _a[_i];
            var subValidator = this.getValidator(key);
            var subContext = context.createSubContext(key, value[key], [], context.groups);
            if (subContext.shouldValidate(subValidator)) {
                subValidator.validate(value[key], subContext);
            }
        }
        return context.result;
    };
    /**
     * Get a validator from the collection.
     */
    ContainerValidator.prototype.getValidator = function (position) {
        return this.isArray(this.validators) ? this.validators[parseInt(position, 10)] : this.validators[position];
    };
    /**
     * Set a validator in the collection.
     */
    ContainerValidator.prototype.setValidator = function (position, validator) {
        if (this.isArray(this.validators)) {
            this.validators[parseInt(position, 10)] = validator;
        }
        else {
            this.validators[position] = validator;
        }
    };
    /**
     * Remove a validator from the collection.
     */
    ContainerValidator.prototype.removeValidator = function (position) {
        if (this.isArray(this.validators)) {
            this.validators.splice(parseInt(position, 10), 1);
        }
        else {
            delete this.validators[position];
        }
    };
    /**
     * Type guard to test if we are working on an array or object.
     */
    ContainerValidator.prototype.isArray = function (value) {
        return isArray(value);
    };
    return ContainerValidator;
}());
var Container = function (validators) {
    if (!isArray(validators)) {
        // Make a copy to ensure the object cannot be modified from outside.
        validators = Object.assign({}, validators);
    }
    return new ContainerValidator(validators);
};

export { Container, ContainerValidator };
