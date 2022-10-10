/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { isNumeric } from '@banquette/utils-type/is-numeric';
import { isPromiseLike } from '@banquette/utils-type/is-promise-like';
import { isType } from '@banquette/utils-type/is-type';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { Valid } from './type/valid.js';
import { isValidatorContainer, splitPath } from './utils.js';
import { ValidationContext } from './validation-context.js';

/**
 * A virtual container is a type of container that will not create sub contexts when validating.
 * So each of its validators will report to the same ValidationResult instance and will have the same validation path.
 *
 * Virtual containers are: And, Or, If and Compose.
 * "Real" containers are: Container and Foreach.
 */
var AbstractVirtualContainer = /** @class */ (function () {
    function AbstractVirtualContainer(validators, sequential, groups) {
        if (sequential === void 0) { sequential = true; }
        this.validators = validators;
        this.sequential = sequential;
        this.groups = groups;
        /**
         * Will be true if all sub validators have been skipped.
         */
        this.skipped = false;
    }
    Object.defineProperty(AbstractVirtualContainer.prototype, "length", {
        /**
         * Return the number of child validators.
         */
        get: function () {
            return this.validators.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    AbstractVirtualContainer.prototype.has = function (path) {
        var parts = AbstractVirtualContainer.SplitPath(path);
        var idx = parts[0];
        if (idx < this.validators.length) {
            if (parts.length === 1) {
                return !isUndefined(this.validators[idx]);
            }
            var current = this.validators[idx];
            if (!isValidatorContainer(current)) {
                throw new UsageException("A ValidatorContainerInterface is expected for the \"".concat(idx, "\" component of \"").concat(path, "\"."));
            }
            return current.has(parts.slice(1).join('/'));
        }
        return false;
    };
    /**
     * @inheritDoc
     */
    AbstractVirtualContainer.prototype.remove = function (path) {
        var parts = AbstractVirtualContainer.SplitPath(path);
        var idx = parts[0];
        if (idx < this.validators.length) {
            var current = this.validators[idx];
            if (!isValidatorContainer(current)) {
                throw new UsageException("A ValidatorContainerInterface is expected for the \"".concat(idx, "\" component of \"").concat(path, "\"."));
            }
            current.remove(parts.slice(1).join('/'));
            return;
        }
        if (parts.length > 1) {
            throw new UsageException("Missing part \"".concat(idx, "\" of the path \"").concat(path, "."));
        }
    };
    /**
     * @inheritDoc
     */
    AbstractVirtualContainer.prototype.set = function (path, validator) {
        var parts = AbstractVirtualContainer.SplitPath(path);
        var idx = parts[0];
        if (idx < this.validators.length) {
            if (parts.length === 1) {
                this.validators[idx] = validator;
                return;
            }
            var current = this.validators[idx];
            if (!isValidatorContainer(current)) {
                throw new UsageException("A ValidatorContainerInterface is expected for the \"".concat(idx, "\" component of \"").concat(path, "\"."));
            }
            current.set(parts.slice(1).join('/'), validator);
            return;
        }
        if (parts.length > 1) {
            throw new UsageException("Missing part \"".concat(idx, "\" of the path \"").concat(path, "."));
        }
        // Creates intermediary validators so we can set the validator at the required index.
        for (var i = this.validators.length; i < idx; ++i) {
            this.validators.push(Valid());
        }
        this.validators.push(validator);
    };
    /**
     * @inheritDoc
     */
    AbstractVirtualContainer.prototype.validate = function (value, maskOrContext) {
        var _this = this;
        var index = -1;
        var wrappingPromise = null;
        var wrappingPromiseResolve = null;
        var wrappingPromiseReject = null;
        var lastLocalPromise = null;
        var skipped = false;
        this.skipped = true;
        var context = ValidationContext.EnsureValidationContext(value, maskOrContext);
        var getOrCreateWrapper = function () {
            // Because we don't know how many validators will be asynchronous, we have to wrap the promise
            // to prevent the main promise of the ValidationResult to resolve when the promise of
            // the current validator resolves.
            if (wrappingPromise === null) {
                wrappingPromise = new Promise(function (resolve, reject) {
                    wrappingPromiseResolve = resolve;
                    wrappingPromiseReject = reject;
                });
            }
            return wrappingPromise;
        };
        var validateNext = function () {
            if ((++index && !_this.onNextResult(context.result, index, skipped)) || _this.validators.length <= index) {
                if (wrappingPromise !== null) {
                    wrappingPromiseResolve();
                }
                _this.onEnd(context, index);
                return;
            }
            skipped = true;
            if (context.shouldValidate(_this.validators[index])) {
                _this.validators[index].validate(value, context);
                _this.skipped = false;
                skipped = false;
            }
            if (context.result.localPromise !== null && context.result.localPromise !== lastLocalPromise) {
                wrappingPromise = getOrCreateWrapper();
                if (_this.sequential) {
                    context.result.localPromise.then(validateNext).catch(wrappingPromiseReject);
                }
                context.result.delayResponse(wrappingPromise);
                lastLocalPromise = context.result.localPromise;
                if (!_this.sequential) {
                    validateNext();
                }
            }
            else {
                validateNext();
            }
        };
        var shouldExecute = this.onStart(context);
        if (isType(shouldExecute, isPromiseLike)) {
            wrappingPromise = getOrCreateWrapper();
            context.result.delayResponse(shouldExecute);
            shouldExecute.then(function (result) {
                if (result) {
                    validateNext();
                }
                else {
                    wrappingPromiseResolve();
                }
            }).catch(wrappingPromiseReject);
            context.result.delayResponse(wrappingPromise);
        }
        else if (shouldExecute) {
            validateNext();
        }
        return context.result;
    };
    /**
     * Called before the first validator is executed.
     *
     * @returns boolean false to prevent the validator from executing.
     */
    AbstractVirtualContainer.prototype.onStart = function (context) {
        return true;
    };
    /**
     * Called after the last validator has been executed.
     */
    AbstractVirtualContainer.prototype.onEnd = function (context, index) {
        // Override me.
    };
    /**
     * Split the path while ensuring the first component is a numeric value, or throw an exception otherwise.
     */
    AbstractVirtualContainer.SplitPath = function (path) {
        var parts = splitPath(path);
        if (isNumeric(parts[0])) {
            parts[0] = parseInt(parts[0], 10);
            return parts;
        }
        throw new UsageException("Invalid path component \"".concat(parts[0], "\" in \"").concat(path, "\". An integer is expected."));
    };
    return AbstractVirtualContainer;
}());

export { AbstractVirtualContainer };
