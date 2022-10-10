/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from './_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { MatchType } from '@banquette/utils-glob/constant';
import { noop } from '@banquette/utils-misc/noop';
import { ltrim } from '@banquette/utils-string/format/ltrim';
import { trim } from '@banquette/utils-string/format/trim';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { Compose } from '@banquette/validation/type/compose';
import { Container } from '@banquette/validation/type/container';
import { AbstractFormComponent } from './abstract-form-component.js';
import { FilterGroup, FormEvents, BasicState, EventsInheritanceMap, CallContext, ContextualizedState } from './constant.js';
import { ValidationEndFormEvent } from './event/validation-end.form-event.js';
import { ComponentNotFoundException } from './exception/component-not-found.exception.js';
import { FormComponentsCollection } from './form-components-collection.js';

var AbstractFormGroup = /** @class */ (function (_super) {
    __extends(AbstractFormGroup, _super);
    function AbstractFormGroup() {
        var _a, _b, _c, _d, _e, _f;
        var _this = _super.call(this) || this;
        /**
         * The filters to apply in the different type iteration over child components.
         * This is configurable using the `setChildrenFilters`.
         */
        _this.foreachFilters = (_a = {},
            _a[FilterGroup.External] = (_b = {}, _b[BasicState.Concrete] = true, _b),
            _a[FilterGroup.UpdateValue] = (_c = {}, _c[BasicState.Concrete] = true, _c),
            _a[FilterGroup.Validate] = (_d = {},
                _d[BasicState.Concrete] = true,
                _d[ContextualizedState.Disabled] = false,
                _d),
            _a[FilterGroup.Size] = (_e = {}, _e[BasicState.Concrete] = true, _e),
            _a[FilterGroup.Errors] = (_f = {}, _f[BasicState.Concrete] = true, _f[BasicState.Invalid] = true, _f),
            _a);
        /**
         * The validator of the group component itself.
         * The public `validator` is in fact a Container (or Compose) validator that contains child validators.
         */
        _this.selfValidator = null;
        _this.containerValidator = Container({});
        _this.additionalPatternTags.push('group');
        _this.onStateChanged(function (event) {
            if (event.state === BasicState.Concrete && event.newValue) {
                _this.updateValue();
            }
        });
        return _this;
    }
    Object.defineProperty(AbstractFormGroup.prototype, "length", {
        /**
         * Alias of `count()`.
         */
        get: function () {
            return this.count();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroup.prototype, "size", {
        /**
         * Get the "size" of the component.
         * Meaning the number of direct children + 1 to account for the component on which the call is made.
         *
         * A FormControlInterface will always have a size of "1", because it has no children.
         * An empty group will also have a size of "1".
         */
        get: function () {
            return this.length + 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroup.prototype, "sizeDeep", {
        /**
         * Same as `size` but add to length of children instead of them counting for one.
         */
        get: function () {
            var totalLength = 1;
            this.forEach(function (component) {
                totalLength += component.sizeDeep;
            }, this.foreachFilters[FilterGroup.Size]);
            return totalLength;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroup.prototype, "errorsDeep", {
        /**
         * The whole list of errors found in the current component and all its children.
         */
        get: function () {
            var errors = this.errors;
            this.forEach(function (component) {
                errors = errors.concat(component.errorsDeep);
            }, this.foreachFilters[FilterGroup.Errors]);
            return errors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroup.prototype, "errorsDeepMap", {
        /**
         * A key/value pair object containing the path of each children component as index and the array of their errors as value.
         */
        get: function () {
            var _a;
            var map = (_a = {}, _a[this.path] = this.errors, _a);
            this.forEach(function (component) {
                Object.assign(map, component.errorsDeepMap);
            }, this.foreachFilters[FilterGroup.Errors]);
            return map;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add an error to a child component.
     * `name` can be a component name of a path to a deeper child.
     */
    AbstractFormGroup.prototype.addChildError = function (name, error) {
        var child = this.get(name);
        var errors = ensureArray(error);
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var item = errors_1[_i];
            child.addError(item.type, item.message);
        }
    };
    /**
     * Assign a map of errors to child components.
     * The map is a key/value pair where the key can be the name of a direct child or the path to a deeper one.
     */
    AbstractFormGroup.prototype.addChildrenErrors = function (map) {
        for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
            var childName = _a[_i];
            this.addChildError(childName, map[childName]);
        }
    };
    /**
     * Remove all errors from the component and its children.
     */
    AbstractFormGroup.prototype.clearErrorsDeep = function (silent) {
        if (silent === void 0) { silent = false; }
        _super.prototype.clearErrorsDeep.call(this, silent);
        this.forEach(function (component) {
            component.clearErrorsDeep(silent);
        }, this.foreachFilters[FilterGroup.Errors]);
    };
    /**
     * Get all components matching one of the patterns and wrap the result in a collection
     * object that you can interact with as if it was a single component.
     */
    AbstractFormGroup.prototype.getByPattern = function (pattern) {
        var _this = this;
        var collection = new FormComponentsCollection();
        var patterns = ensureArray(pattern).map(function (item) {
            item = trim(item);
            if (item.length > 0 && item[0] !== '/' && item[0] !== ':') {
                item = _this.path + (_this.path !== '/' ? '/' : '') + item;
            }
            return item;
        });
        this.forEachDecorated(function (component) {
            var result = component.decorated.matchPattern(patterns);
            if (result.pattern === MatchType.Full && result.tags === MatchType.Full) {
                collection.append(component.decorated);
            }
            if (result.pattern >= MatchType.Partial && component.decorated.isGroup()) {
                collection.concat(component.decorated.getByPattern(patterns));
            }
        });
        return collection;
    };
    /**
     * Try to get a form component by path.
     *
     * @throws ComponentNotFoundException
     */
    AbstractFormGroup.prototype.getByPath = function (path) {
        path = ltrim(path, '/');
        if (path === '') {
            return this;
        }
        var pos = path.indexOf('/');
        if (pos < 0) {
            return this.get(path);
        }
        var identifier = path.substring(0, pos);
        var rest = path.substring(pos + 1);
        var child = this.get(identifier);
        if (child.isGroup()) {
            return child.getByPath(rest);
        }
        throw new ComponentNotFoundException(path, "No component has been found for path \"".concat(path, "\" in \"").concat(this.path, "\"."));
    };
    /**
     * Set the filters to apply in a certain type of access to the child components of the group.
     */
    AbstractFormGroup.prototype.setGroupFilters = function (type, filters) {
        this.foreachFilters[type] = filters;
        if (type === FilterGroup.UpdateValue) {
            this.updateValue();
        }
    };
    /**
     * Reset the control. It has the following effects:
     *
     *   - Set the value to the "default value",
     *   - Unmark the following states: `BasicState.Changed`, `BasicState.Touched`, `BasicState.Dirty`, `BasicState.Validated`,
     *   - Blur the control if focused,
     *   - Clear validation errors.
     *
     * Resetting the control does not impact the following states: `ContextualizedState.Disabled`, `BasicState.Busy`, `BasicState.Validating`, `BasicState.Concrete`.
     *
     * If the component has children, they will be reset as well.
     */
    AbstractFormGroup.prototype.doReset = function () {
        _super.prototype.doReset.call(this);
        this.forEachDecorated(function (component) {
            component.decorated.reset();
        });
    };
    /**
     * @inheritDoc
     */
    AbstractFormGroup.prototype.setValidator = function (validator) {
        // The validator set from the outside is in reality the "self validator", that validates the values of the FormObject itself.
        this.selfValidator = validator;
        // Then we rebuild the "real" validator, which is a Container (wrapped in a "Compose" if we have a self validator).
        this.updateValidator();
        // Then nothing. We don't need to call the parent `setValidator` because `updateValidator` did it for us.
    };
    /**
     * Register a callback that will be called when a component is added/set to the collection.
     */
    AbstractFormGroup.prototype.onControlAdded = function (cb, priority, selfOnly) {
        if (selfOnly === void 0) { selfOnly = true; }
        return this.subscribe(FormEvents.ComponentAdded, cb, priority, selfOnly);
    };
    /**
     * Register a callback that will be called when a component is removed from the collection.
     */
    AbstractFormGroup.prototype.onControlRemoved = function (cb, priority, selfOnly) {
        if (selfOnly === void 0) { selfOnly = true; }
        return this.subscribe(FormEvents.ComponentRemoved, cb, priority, selfOnly);
    };
    /**
     * Run the "self" validator of the group, alone, if there is one.
     */
    AbstractFormGroup.prototype.validateSelf = function () {
        if (!this.selfValidator) {
            return;
        }
        this.doValidate(this.selfValidator, false);
    };
    /**
     * Only validate if the active validation strategy matches the one in parameter.
     */
    AbstractFormGroup.prototype.validateSelfIfStrategyMatches = function (strategy) {
        var candidate = this.getConcreteValidationStrategy();
        if ((candidate & strategy) === strategy) {
            this.validateSelf();
        }
    };
    /**
     * Rebuild the internal validator.
     */
    AbstractFormGroup.prototype.updateValidator = function () {
        var _this = this;
        var childValidatorsCount = 0;
        this.containerValidator = Container({});
        this.forEachDecorated(function (child, identifier) {
            if (child.decorated.validator !== null) {
                _this.containerValidator.set(String(identifier), child.decorated.validator);
                ++childValidatorsCount;
            }
        });
        if (childValidatorsCount || this.selfValidator !== null) {
            // Beware of calling the super here, or you'll get an infinite recursion.
            _super.prototype.setValidator.call(this, this.selfValidator !== null ? Compose(this.selfValidator, this.containerValidator) : this.containerValidator);
        }
        else {
            _super.prototype.setValidator.call(this, null);
        }
        if (this.validator !== null) {
            // Trick so the wrapping validator is considered a group and can validate its children
            // event if the groups don't match.
            this.validator.set = noop;
            this.validator.remove = noop;
            this.validator.has = function () { return false; };
        }
        _super.prototype.updateValidator.call(this);
    };
    /**
     * Wrapper to call to update the container validator,
     * to ensure the required operations are performed afterward.
     */
    AbstractFormGroup.prototype.updateContainerValidator = function (cb) {
        cb(this.containerValidator);
        if (this.containerValidator.length && !this.validator) {
            this.updateValidator();
        }
        else if (!this.containerValidator.length && this.validator && !this.selfValidator) {
            _super.prototype.setValidator.call(this, null);
        }
    };
    /**
     * Do what needs to be done with a ValidationResult that just got settled.
     */
    AbstractFormGroup.prototype.handleValidationResult = function (result, isDeep) {
        var _this = this;
        if (result.canceled) {
            return;
        }
        if (result.waiting) {
            throw new UsageException('The ValidationResult is still waiting.');
        }
        if (isDeep) {
            this.clearErrorsDeep(true);
        }
        else {
            this.clearErrors(true);
        }
        if (result.valid) {
            this.unmarkBasicState(BasicState.Invalid, this.id);
        }
        else {
            var map = result.getViolationsMap();
            for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
                var path = _a[_i];
                var violations = map[path];
                var component = this.getByPath(path);
                for (var _b = 0, violations_1 = violations; _b < violations_1.length; _b++) {
                    var violation = violations_1[_b];
                    component.addError(violation.type, violation.message);
                }
            }
            if (this.errors.length) {
                this.markBasicState(BasicState.Invalid, this.id);
            }
            else {
                this.unmarkBasicState(BasicState.Invalid, this.id);
            }
        }
        this.unmarkBasicState(BasicState.NotValidated, this.id);
        this.dispatch(FormEvents.ValidationEnd, function () { return new ValidationEndFormEvent(_this, result); });
    };
    /**
     * Mark the component as `disabled` for the current call context.
     */
    AbstractFormGroup.prototype.markAsDisabled = function () {
        _super.prototype.markAsDisabled.call(this);
        this.forEachDecorated(function (child) {
            child.disable();
        });
    };
    /**
     * Unmark the `disabled` state of the component for the current call context.
     */
    AbstractFormGroup.prototype.markAsEnabled = function () {
        _super.prototype.markAsEnabled.call(this);
        this.forEachDecorated(function (child) {
            child.enable();
        });
    };
    /**
     * Try to get the identifier of a child component.
     */
    AbstractFormGroup.prototype.getIndexOf = function (component) {
        var match = null;
        this.forEachDecorated(function (candidate, identifier) {
            if (component.id === candidate.decorated.id) {
                match = identifier;
                return false;
            }
        });
        return match;
    };
    /**
     * Remove an element from the collection using a reference on the control instead of an identifier.
     */
    AbstractFormGroup.prototype.removeByRef = function (component) {
        var existingIndex = this.getIndexOf(component);
        if (existingIndex !== null) {
            this.remove(existingIndex);
        }
    };
    /**
     * Propagate the basic states of the component to its parents.
     */
    AbstractFormGroup.prototype.propagateStatesToParent = function () {
        // The states always come from the bottom part of the tree.
        // So we need to bubble down if we are on a container.
        this.forEachDecorated(function (child) {
            child.propagateStatesToParent();
        });
    };
    /**
     * Remove the marking of the component on the basic states of its parents.
     */
    AbstractFormGroup.prototype.removeStatesFromParent = function () {
        // The states always come from the bottom part of the tree.
        // So we need to bubble down if we are on a container.
        this.forEachDecorated(function (child) {
            child.removeStatesFromParent();
        });
    };
    /**
     * Create the decorator that will be used a child component.
     *
     * Doing this instead of exposing the instance directly has several advantages:
     *
     *   1) It's possible to expose methods to the child only (like `updateValue`).
     *   2) By wrapping the methods we can set a call context before the call and remove it after.
     *
     * Overall, it gives a better control over the capabilities given to child and avoid exposing them to the outside world.
     */
    AbstractFormGroup.prototype.buildParentComponentDecorator = function () {
        var _this = this;
        var that = this;
        return Object.assign({
            get decorated() { return that; },
            get path() { return that.path; },
            get root() { return that.root; },
            get activeControl() { return that.activeControl; },
            set activeControl(control) { that.activeControl = control; },
            pushContext: function (context, recursive) {
                _this.pushContext(context);
                if (recursive && _this.parent !== null) {
                    _this.parent.pushContext(context, true);
                }
            },
            popContext: function (recursive) {
                _this.popContext();
                if (recursive && _this.parent !== null) {
                    _this.parent.popContext(true);
                }
            }
        }, this.buildContextualizedApi({
            updateValue: this.updateValue,
            updateValidator: this.updateValidator,
            getConcreteValidationStrategy: this.getConcreteValidationStrategy,
            getConcreteValidationGroups: this.getConcreteValidationGroups,
            markBasicState: this.markBasicState,
            unmarkBasicState: this.unmarkBasicState,
            markAsVirtual: this.markAsVirtual,
            markAsConcrete: this.markAsConcrete,
            remove: this.removeByRef,
            dispatch: function (type, event) {
                // If the event is not available as inherited we have nothing to do.
                if (isUndefined(EventsInheritanceMap[type])) {
                    return;
                }
                return _this.dispatch(EventsInheritanceMap[type], event);
            }
        }, CallContext.Child));
    };
    return AbstractFormGroup;
}(AbstractFormComponent));

export { AbstractFormGroup };
