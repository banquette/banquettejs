/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var arrayIntersect = require('@banquette/utils-array/_cjs/dev/array-intersect');
var constant = require('@banquette/utils-glob/_cjs/dev/constant');
var matchBest = require('@banquette/utils-glob/_cjs/dev/match-best');
var getObjectValue = require('@banquette/utils-object/_cjs/dev/get-object-value');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var normalizeMask = require('./mask/normalize-mask.js');
var utils = require('./utils.js');
var validationResult = require('./validation-result.js');

var ValidationContext = /** @class */ (function () {
    /**
     * Create a ValidationContext object.
     *
     * @param parent ValidationContext|null The parent context (if applicable).
     * @param name   string                 The name of the attribute being validated.
     * @param value  any                    The value being validated.
     * @param masks  string[]               (optional, default: []) One or multiple patterns limiting the validators that will be executed.
     * @param groups string[]               (optional, default: []]) The validation groups the validators will have to match.
     */
    function ValidationContext(parent, name, value, masks, groups) {
        if (masks === void 0) { masks = []; }
        if (groups === void 0) { groups = []; }
        this.parent = parent;
        this.name = name;
        this.value = value;
        this.groups = groups;
        if (name !== null && name.match(/\/|\*/)) {
            throw new usage_exception.UsageException('Invalid context name. Must not contain "/" or "*".');
        }
        if (this.parent && !name) {
            throw new usage_exception.UsageException('A sub context must have a name.');
        }
        this.children = [];
        this.masks = [];
        this.maskMatchResults = new WeakMap();
        this.path = this.parent ? (this.parent.path + (this.parent.name ? '/' : '') + name) : '/';
        this.result = new validationResult.ValidationResult(this.path, this.parent ? this.parent.result : null);
        if (this.parent) {
            this.parent.addChild(this);
        }
        if (masks.length > 0) {
            this.addMask(masks);
        }
    }
    /**
     * Register a child context.
     */
    ValidationContext.prototype.addChild = function (context) {
        if (context.parent !== this) {
            throw new usage_exception.UsageException('Invalid child context assignation. The parent does not match the current context.');
        }
        this.children.push(context);
    };
    /**
     * Get the whole list of children.
     */
    ValidationContext.prototype.getChildren = function () {
        return this.children;
    };
    /**
     * Get a child by name.
     */
    ValidationContext.prototype.getChild = function (name) {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.name === name) {
                return child;
            }
        }
        return null;
    };
    /**
     * Add one or multiple validation masks to the existing ones.
     */
    ValidationContext.prototype.addMask = function (mask) {
        if (this.parent) {
            return this.addMask(mask);
        }
        this.masks = this.masks.concat(normalizeMask.normalizeMasks(mask, this.path));
    };
    /**
     * Set the whole list of masks.
     */
    ValidationContext.prototype.setMasks = function (masks) {
        if (this.parent) {
            return this.setMasks(masks);
        }
        this.masks = normalizeMask.normalizeMasks(masks, this.path);
    };
    /**
     * Get the root context.
     */
    ValidationContext.prototype.getRoot = function () {
        if (this.parent) {
            return this.parent.getRoot();
        }
        return this;
    };
    /**
     * Check if a validator should be validated.
     */
    ValidationContext.prototype.shouldValidate = function (validator) {
        var result = this.matchMask(validator);
        var groups = ensureArray.ensureArray(validator.groups);
        var isContainer = utils.isValidatorContainer(validator);
        return (result.pattern === constant.MatchType.Full ||
            (result.pattern === constant.MatchType.Partial && isContainer)) && (result.tags >= constant.MatchType.Partial || isContainer) &&
            (isContainer || (this.groups.length && arrayIntersect.arrayIntersect(this.groups, groups).length > 0) || (!this.groups.length && !groups.length));
    };
    /**
     * Try to get the value of another context.
     * The path can be relative or absolute (by starting with a `/`).
     */
    ValidationContext.prototype.getOtherValue = function (path, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var parts = this.getAbsolutePathParts(path);
        return getObjectValue.getObjectValue(this.getRoot().value, parts, defaultValue);
    };
    /**
     * Try to get another context by its path.
     * The path can be relative or absolute (by starting with a /).
     */
    ValidationContext.prototype.getOtherContext = function (path) {
        if (!path || !path.length) {
            return null;
        }
        var currentContext = this;
        if (path[0] === '/') {
            currentContext = this.getRoot();
            path = path.substring(1);
        }
        var parts = path.split('/');
        do {
            var currentPart = parts.shift();
            if (currentPart === '..') {
                if (!currentContext.parent) {
                    return null;
                }
                currentContext = currentContext.parent;
            }
            else if (currentPart !== '.') {
                var selectedChild = null;
                for (var _i = 0, _a = currentContext.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    if (child.name === currentPart) {
                        selectedChild = child;
                        break;
                    }
                }
                if (!selectedChild) {
                    return null;
                }
                currentContext = selectedChild;
            }
        } while (parts.length > 0);
        return currentContext;
    };
    /**
     * Convert a path relative to the current context in a path is relative to the root context.
     */
    ValidationContext.prototype.getAbsolutePath = function (path) {
        return '/' + this.getAbsolutePathParts(path).join('/');
    };
    /**
     * Create a child context for this context.
     */
    ValidationContext.prototype.createSubContext = function (name, value, masks, groups) {
        if (masks === void 0) { masks = []; }
        if (groups === void 0) { groups = []; }
        return new ValidationContext(this, name, value, masks, groups);
    };
    /**
     * Test if the validation should be performed for the current context.
     * The match can be partial, in which case only container validators must be executed.
     *
     * If a validator is given as context, the result will be cached.
     */
    ValidationContext.prototype.matchMask = function (validator) {
        if (validator === void 0) { validator = null; }
        if (validator) {
            var cachedResults = this.maskMatchResults.get(validator);
            if (cachedResults && !isUndefined.isUndefined(cachedResults[this.path])) {
                return cachedResults[this.path];
            }
        }
        var result;
        var masks = this.getRoot().masks;
        if (!masks.length) {
            result = { pattern: constant.MatchType.Full, tags: constant.MatchType.Full };
        }
        else {
            result = matchBest.matchBest(masks, this.path, validator ? validator.tags : undefined);
        }
        if (validator) {
            var cachedResults = this.maskMatchResults.get(validator) || {};
            cachedResults[this.path] = result;
            this.maskMatchResults.set(validator, cachedResults);
        }
        return result;
    };
    ValidationContext.prototype.getAbsolutePathParts = function (path) {
        if (!path) {
            return [];
        }
        if (path[0] !== '/') {
            path = this.path + '/' + path;
        }
        var parts = path.substring(1).split('/');
        for (var i = 0; i < parts.length; ++i) {
            if (parts[i] === '..') {
                if (i > 0) {
                    // Remove the previous part.
                    parts.splice((i--) - 1, 1);
                }
                // Remove ".."
                parts.splice(i--, 1);
            }
            else if (parts[i] === '.') {
                parts.splice(i--, 1);
            }
        }
        return parts;
    };
    /**
     * Ensure a ValidationContext object is returned from a ValidatorInterface signature.
     */
    ValidationContext.EnsureValidationContext = function (value, maskOrContext) {
        if (!utils.isValidationContext(maskOrContext)) {
            var options = maskOrContext || {};
            return new ValidationContext(null, null, value, !isUndefined.isUndefined(options.mask) ? ensureArray.ensureArray(options.mask) : undefined, !isUndefined.isUndefined(options.group) ? ensureArray.ensureArray(options.group) : undefined);
        }
        return maskOrContext;
    };
    return ValidationContext;
}());

exports.ValidationContext = ValidationContext;
