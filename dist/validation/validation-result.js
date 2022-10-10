/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __awaiter, __generator } from './_virtual/_tslib.js';
import { ExceptionFactory } from '@banquette/exception/exception.factory';
import { UsageException } from '@banquette/exception/usage.exception';
import { MatchType } from '@banquette/utils-glob/constant';
import { matchBest } from '@banquette/utils-glob/match-best';
import { proxy } from '@banquette/utils-misc/proxy';
import { replaceStringVariables } from '@banquette/utils-string/format/replace-string-variables';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { normalizeMasks } from './mask/normalize-mask.js';
import { Violation } from './violation.js';

var ValidationResultStatus;
(function (ValidationResultStatus) {
    ValidationResultStatus[ValidationResultStatus["Waiting"] = 0] = "Waiting";
    ValidationResultStatus[ValidationResultStatus["Error"] = 1] = "Error";
    ValidationResultStatus[ValidationResultStatus["Valid"] = 2] = "Valid";
    ValidationResultStatus[ValidationResultStatus["Invalid"] = 3] = "Invalid";
    ValidationResultStatus[ValidationResultStatus["Canceled"] = 4] = "Canceled";
})(ValidationResultStatus || (ValidationResultStatus = {}));
var ValidationResult = /** @class */ (function () {
    function ValidationResult(path, parent) {
        if (parent === void 0) { parent = null; }
        this.path = path;
        this.parent = parent;
        this.violations = [];
        this.children = [];
        this.promise = null;
        this.localPromise = null;
        this.errorDetail = null;
        this.cancelCallback = null;
        this.previousPromise = null;
        this.promiseResolve = null;
        this.promiseReject = null;
        this.setStatus(ValidationResultStatus.Valid); // Consider the result synchronous until a promise is set.
        if (this.parent) {
            this.parent.addChild(this);
        }
    }
    /**
     * Register a child result.
     */
    ValidationResult.prototype.addChild = function (context) {
        if (context.parent !== this) {
            throw new UsageException('Invalid child context assignation. The parent does not match the current context.');
        }
        this.children.push(context);
    };
    /**
     * Register a new violation into the context.
     */
    ValidationResult.prototype.addViolation = function (type, message, replacements) {
        if (replacements === void 0) { replacements = {}; }
        message = replaceStringVariables(message, replacements);
        this.violations.push(new Violation(this.path, type, message));
        if (this.status === ValidationResultStatus.Valid) {
            this.setStatus(ValidationResultStatus.Invalid);
            if (this.parent) {
                this.getRoot().update();
            }
        }
    };
    /**
     * Flattened the violations of all results matching the mask(s) into a single level array.
     * If no mask is given, all violations found in the tree will be returned.
     */
    ValidationResult.prototype.getViolationsArray = function (mask) {
        if (mask === void 0) { mask = []; }
        mask = normalizeMasks(mask, this.path);
        var match = ValidationResult.ShouldMatch(this, mask);
        var violations = [];
        if (match.fullyMatch) {
            violations = violations.concat(this.violations);
        }
        if (match.fullyMatch || match.rawResult.pattern === MatchType.Partial) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                violations = violations.concat(child.getViolationsArray(mask));
            }
        }
        return violations;
    };
    /**
     * Flattened the violations of all results matching the mask(s) into an array of strings containing
     * the path and message of each violation (or their type if no message is available).
     */
    ValidationResult.prototype.getViolationsStringsArray = function (mask) {
        if (mask === void 0) { mask = []; }
        var output = [];
        var violations = this.getViolationsArray(mask);
        for (var _i = 0, violations_1 = violations; _i < violations_1.length; _i++) {
            var violation = violations_1[_i];
            output.push("".concat(violation.path, ": ").concat(violation.message || violation.type));
        }
        return output;
    };
    /**
     * Create an object containing the violations of all results matching the mask(s) indexed by violation path.
     * If no mask is given, all violations found in the tree will be returned.
     */
    ValidationResult.prototype.getViolationsMap = function (mask) {
        if (mask === void 0) { mask = []; }
        var map = {};
        var violations = this.getViolationsArray(mask);
        for (var _i = 0, violations_2 = violations; _i < violations_2.length; _i++) {
            var violation = violations_2[_i];
            if (isUndefined(map[violation.path])) {
                map[violation.path] = [];
            }
            map[violation.path].push(violation);
        }
        return map;
    };
    /**
     * Remove all registered violations.
     */
    ValidationResult.prototype.clearViolations = function (recursive) {
        if (recursive === void 0) { recursive = true; }
        this.violations = [];
        if (recursive) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                child.clearViolations(true);
            }
        }
        if (this.status === ValidationResultStatus.Invalid) {
            this.setStatus(ValidationResultStatus.Valid);
        }
    };
    /**
     * Get the root result.
     */
    ValidationResult.prototype.getRoot = function () {
        if (this.parent) {
            return this.parent.getRoot();
        }
        return this;
    };
    /**
     * Cancel the validation for all or a part of the validation tree.
     */
    ValidationResult.prototype.cancel = function (mask) {
        if (mask === void 0) { mask = []; }
        var match = ValidationResult.ShouldMatch(this, mask);
        if (this.cancelCallback !== null && match.fullyMatch) {
            this.cancelCallback();
        }
        if (match.fullyMatch || match.rawResult.pattern === MatchType.Partial) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                child.cancel(mask);
            }
        }
        this.setStatus(ValidationResultStatus.Canceled);
    };
    /**
     * Utility method that always return a promise that will resolve when the validation is done.
     */
    ValidationResult.prototype.onReady = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.promise !== null)) { return [3 /*break*/, 2]; }
                        return [4 /*yield*/, this.promise];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                    case 2: return [2 /*return*/, this];
                }
            });
        });
    };
    /**
     * Update the status and flags.
     */
    ValidationResult.prototype.update = function () {
        if (this.status === ValidationResultStatus.Waiting) {
            return;
        }
        var valid = !this.violations.length;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.update();
            if (child.error) {
                this.setStatus(ValidationResultStatus.Error);
                return;
            }
            if (!child.valid) {
                valid = false;
            }
        }
        this.setStatus(valid ? ValidationResultStatus.Valid : ValidationResultStatus.Invalid);
    };
    /**
     * Set a promise that will resolve when the validation result is ready.
     */
    ValidationResult.prototype.delayResponse = function (promise, cancelCallback) {
        var _this = this;
        if (cancelCallback === void 0) { cancelCallback = null; }
        this.setStatus(ValidationResultStatus.Waiting);
        if (this.promise === null) {
            this.promise = new Promise(function (resolve, reject) {
                _this.promiseResolve = resolve;
                _this.promiseReject = reject;
            }).then(function () {
                if (!_this.canceled) {
                    _this.setStatus(_this.violations.length > 0 ? ValidationResultStatus.Invalid : ValidationResultStatus.Valid);
                    _this.update();
                }
                _this.cleanupAsync();
                return _this;
            }).catch(function (reason) {
                _this.fail(reason);
                return _this;
            });
        }
        if (this.parent) {
            // Compiler doesn't see that "this.promise" is set above and create a "possibly null" error, thus the "as Promise...".
            this.parent.delayResponse(this.promise);
        }
        if (this.cancelCallback === null) {
            this.cancelCallback = cancelCallback;
        }
        else if (cancelCallback !== null) {
            var previousCancelCallback_1 = this.cancelCallback;
            this.cancelCallback = function () {
                previousCancelCallback_1();
                cancelCallback();
            };
        }
        var localPromise = (this.localPromise === null ? promise : Promise.all([this.localPromise, promise]))
            .then(function () {
            if (localPromise === _this.previousPromise) {
                _this.promiseResolve(_this);
            }
            _this.cancelCallback = null;
            _this.localPromise = null;
            return _this;
        }).catch(proxy(this.promiseReject, this));
        this.localPromise = localPromise;
        this.previousPromise = localPromise;
    };
    /**
     * Make the result on error and store the reason.
     *
     * \!/ WARNING \!/
     * DO NOT confuse this method with "addViolation()".
     * This method IS NOT meant to set a validation error, its meant to say the validation could not execute properly.
     */
    ValidationResult.prototype.fail = function (reason) {
        if (this.status !== ValidationResultStatus.Canceled) {
            this.errorDetail = ExceptionFactory.EnsureException(reason);
            this.setStatus(ValidationResultStatus.Error);
        }
        if (this.promiseReject !== null) {
            this.promiseReject(reason);
        }
        this.cleanupAsync();
    };
    /**
     * Shorthand to update the status and the corresponding flags.
     */
    ValidationResult.prototype.setStatus = function (status) {
        this.status = status;
        this.valid = this.status === ValidationResultStatus.Valid;
        this.invalid = this.status === ValidationResultStatus.Invalid;
        this.error = this.status === ValidationResultStatus.Error;
        this.waiting = this.status === ValidationResultStatus.Waiting;
        this.canceled = this.status === ValidationResultStatus.Canceled;
    };
    ValidationResult.prototype.cleanupAsync = function () {
        this.cancelCallback = null;
        this.promiseResolve = null;
        this.promiseReject = null;
        this.previousPromise = null;
        this.promise = null;
    };
    /**
     * Test a mask against a validation result.
     */
    ValidationResult.ShouldMatch = function (result, mask) {
        var masks = ensureArray(mask);
        var matchResult = !masks.length ? { pattern: MatchType.Full, tags: MatchType.Full } : matchBest(masks, result.path);
        return {
            rawResult: matchResult,
            fullyMatch: matchResult.pattern === MatchType.Full && matchResult.tags >= MatchType.Partial
        };
    };
    return ValidationResult;
}());

export { ValidationResult, ValidationResultStatus };
