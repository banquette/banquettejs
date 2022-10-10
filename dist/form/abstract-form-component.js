/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { EventDispatcher } from '@banquette/event/event-dispatcher';
import { UsageException } from '@banquette/exception/usage.exception';
import { removeFromArray } from '@banquette/utils-array/remove-from-array';
import { matchBest } from '@banquette/utils-glob/match-best';
import { proxy } from '@banquette/utils-misc/proxy';
import { getObjectKeys } from '@banquette/utils-object/get-object-keys';
import { uniqueId } from '@banquette/utils-random/unique-id';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isFunction } from '@banquette/utils-type/is-function';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { createValidator } from '@banquette/validation/create-validator';
import { ValidationResult } from '@banquette/validation/validation-result';
import { BasicState, FormEvents, EventsInheritanceMap, ValidationStatus, ValidationStrategy, DefaultValidationStrategy, InheritValidationGroup, CallContext, ComponentRelatedCallContexts, ContextualizedState, StatesInverseMap, InverseState, BasicStates } from './constant.js';
import { ErrorsChangedFormEvent } from './event/errors-changed.form-event.js';
import { FormEvent } from './event/form-event.js';
import { StateChangedFormEvent } from './event/state-changed.form-event.js';
import { ValidationEndFormEvent } from './event/validation-end.form-event.js';
import { FormError } from './form-error.js';
import { FormValidationContext } from './form-validation-context.js';

var AbstractFormComponent = /** @class */ (function () {
    function AbstractFormComponent() {
        var _a, _b;
        var _this = this;
        /**
         * Unique numerical id of the component.
         */
        this.id = ++AbstractFormComponent.MaxId;
        /**
         * The parent form component.
         */
        this.parent = null;
        /**
         * The validator to use to validate the current value of the component, if any.
         */
        this.validator = null;
        /**
         * The public validation strategy for this component.
         */
        this.validationStrategy = ValidationStrategy.Inherit;
        /**
         * The validation groups to use for this component.
         */
        this.validationGroups = InheritValidationGroup;
        /**
         * The list of errors found for this component.
         */
        this.errors = [];
        /**
         * The list of the current states of the component.
         */
        this.activeStates = [
            InverseState.Enabled,
            InverseState.UnFocused,
            InverseState.Pristine,
            InverseState.UnTouched,
            InverseState.NotBusy,
            InverseState.UnChanged,
            InverseState.Valid,
            InverseState.Validated,
            InverseState.NotValidating,
            InverseState.Virtual
        ];
        /**
         * Additional tags that will be added to the active states when matching a pattern.
         */
        this.additionalPatternTags = [];
        /**
         * The call context is used to pass the info on the origin
         * of a call to methods that modify their behavior depending on where they are called.
         */
        this.contextsStack = [];
        /**
         * The current state of the validation.
         */
        this.validationStatus = ValidationStatus.Unknown;
        /**
         * If the component's validator is running, this holds its validation result
         * so it can easily be canceled if needed.
         */
        this.currentValidationResult = null;
        /**
         * An object containing the ids of all components that have marked each state.
         */
        this.basicStates = (_a = {},
            _a[BasicState.Dirty] = [],
            _a[BasicState.Touched] = [],
            _a[BasicState.Changed] = [],
            _a[BasicState.Busy] = [],
            _a[BasicState.Invalid] = [],
            _a[BasicState.NotValidated] = [],
            _a[BasicState.Validating] = [],
            _a[BasicState.Focused] = [],
            _a[BasicState.Concrete] = [],
            _a);
        /**
         * An object containing a list of call context for each state that can be set
         * by multiple sources at the same time.
         *
         * Not all states qualify for this.
         *
         * Take for example `disabled`, it can be set by:
         *
         *   - the end user (`CallContext.External`)
         *   - a parent component (`CallContext.Parent`)
         *   - the view model (`CallContext.ViewModel`)
         *
         * For each conflictual state, an object stores the call contexts from which is have been set,
         * as well as the ids of the components that set it.
         * If the call context doesn't include a component id, 0 is stored instead.
         *
         * To check if the state is `true`, we simply have to check if there is at least one CallContext in the object.
         */
        this.contextualizedStates = (_b = {},
            _b[ContextualizedState.Disabled] = {},
            _b);
        /**
         * Used to handle events emitted by the component.
         * Will stay null until a subscription is made for performance reason.
         */
        this.eventDispatcher = null;
        /**
         * Extended unique id for the whole tree.
         * This is only defined if the id is requested through `formId` and if the component has no parent.
         *
         * This id is a longer string, guaranteed to be unique between forms and meant to be usable as id in the DOM.
         */
        this.treeId = null;
        /**
         * An object containing any extra data from the outside.
         * These values are not used internally.
         */
        this.extras = {};
        /**
         * Get/Set the FormControl currently on focus.
         * Only one FormControl can have the focus at any given time.
         */
        this.activeControl_ = null;
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
        /* final */ this.reset = (function () {
            return _this.proxifyWithContext(proxy(_this.doReset, _this), CallContext.Reset);
        })();
    }
    Object.defineProperty(AbstractFormComponent.prototype, "formId", {
        /**
         * Extended unique id for the whole form.
         *
         * This id is a longer string, guaranteed to be unique between forms and meant to be usable as id in the DOM.
         */
        get: function () {
            if (this.parent !== null) {
                return this.root.formId;
            }
            if (this.treeId === null) {
                this.treeId = uniqueId();
            }
            return this.treeId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "path", {
        /**
         * The absolute path of the component from the root of the form.
         *
         * The path is composed of each level name separated by "/".
         *
         * So the root node has a path of "/".
         * If if has a child named "name", its path will by "/name".
         */
        get: function () {
            if (this.parent) {
                var parentPath = this.parent.path;
                return parentPath + (parentPath !== '/' ? '/' : '') + this.name;
            }
            return '/';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "valid", {
        /**
         * A component is `valid` when the validation has run and no error has been found.
         */
        get: function () { return !this.invalid; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "invalid", {
        /**
         * A component is `invalid` when the validation has run and one or more errors has been found.
         */
        get: function () { return this.basicStates[BasicState.Invalid].length > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "notValidated", {
        /**
         * Inverse of `validated`.
         */
        get: function () { return this.basicStates[BasicState.NotValidated].length > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "validated", {
        /**
         * A component is `validated` when the validation has run, no matter if errors have been found or not.
         */
        get: function () { return !this.notValidated; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "validating", {
        /**
         * A component is `validating` when its validator is currently running.
         */
        get: function () { return this.basicStates[BasicState.Validating].length > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "notValidating", {
        /**
         * Inverse of `validating`.
         */
        get: function () { return !this.validating; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "validatedAndValid", {
        /**
         * Only `true` when the component has been validated, has no validation running and no error have been found.
         */
        get: function () { return this.validated && this.validated && !this.validating; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "busy", {
        /**
         * A component is `busy` when its view model or the one of its children is processing something.
         */
        get: function () { return this.basicStates[BasicState.Busy].length > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "notBusy", {
        /**
         * Inverse of `busy`.
         */
        get: function () { return !this.busy; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "disabled", {
        /**
         * A `disabled` component is non-interactive and excluded from the validation.
         *
         * This is a "multi origin" flag, meaning it can be set multiple time by different sources.
         * All original sources must remove their flag for the component to become enabled again.
         */
        get: function () { return Object.keys(this.contextualizedStates[ContextualizedState.Disabled]).length > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "enabled", {
        /**
         * Inverse of `disabled`.
         */
        get: function () { return !this.disabled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "dirty", {
        /**
         * A component is `dirty` if the user has changed its value in the UI, no matter its current value.
         */
        get: function () { return this.basicStates[BasicState.Dirty].length > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "pristine", {
        /**
         * Inverse of `dirty`.
         */
        get: function () { return !this.dirty; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "touched", {
        /**
         * A component is marked `touched` once the user has triggered a `blur` event on it.
         */
        get: function () { return this.basicStates[BasicState.Touched].length > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "untouched", {
        /**
         * Inverse of `touched`.
         */
        get: function () { return !this.touched; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "changed", {
        /**
         * A component is `changed` when its value is different from the initial value.
         */
        get: function () { return this.basicStates[BasicState.Changed].length > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "unchanged", {
        /**
         * Inverse of `changed`.
         */
        get: function () { return !this.changed; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "focused", {
        /**
         * A component is `focused` when its the current field on edition.
         */
        get: function () { return this.basicStates[BasicState.Focused].length > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "unfocused", {
        /**
         * Inverse of `focused`.
         */
        get: function () { return !this.focused; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "concrete", {
        /**
         * A component is concrete if:
         *
         *  - For a `FormControl`: it has a view model,
         *  - For a `FromObject`: at least one of its children is concrete,
         *  - For a `FormArray`: it has been accessed from the view
         *
         * A virtual component is not part of the validation process nor of the exported values,
         * so it will basically be invisible from outside of the form.
         *
         * The goal is to be able to create a form where we don't know yet what
         * components will actually be used in the view.
         */
        get: function () { return this.basicStates[BasicState.Concrete].length > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "virtual", {
        /**
         * Inverse of `concrete`.
         */
        get: function () { return !this.concrete; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "name", {
        /**
         * The name of the component (if not the root node).
         *
         * The name of a component is given by its parent, so the root node cannot be named.
         * The "name" of a root node is the name of the variable holding it.
         */
        get: function () {
            if (this.parent !== null) {
                return this.parent.decorated.getNameOf(this);
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "root", {
        /**
         * The root instance of the form.
         */
        get: function () {
            if (this.parent !== null) {
                return this.parent.root;
            }
            return this;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "size", {
        /**
         * Get the "size" of the component.
         * Meaning the number of direct children + 1 to account for the component on which the call is made.
         *
         * A FormControlInterface will always have a size of "1", because it has no children.
         * An empty group will also have a size of "1".
         */
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "sizeDeep", {
        /**
         * Same as `size` but add to length of children instead of them counting for one.
         */
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "errorsDeep", {
        /**
         * The whole list of errors found in the current component and all its children.
         */
        get: function () {
            // No children at this level.
            // Overridden by groups.
            return this.errors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "errorsDeepMap", {
        /**
         * A key/value pair object containing the path of each children component as index and the array of their errors as value.
         */
        get: function () {
            var _a;
            // No children at this level.
            // Overridden by groups.
            return _a = {}, _a[this.path] = this.errors, _a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "activeBasicStates", {
        /**
         * Same as `activeStates` but filtered to only keep basic states.
         */
        get: function () {
            return this.activeStates.filter(function (state) { return BasicStates.indexOf(state) > -1; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbstractFormComponent.prototype, "activeControl", {
        get: function () {
            if (this.parent !== null) {
                return this.parent.activeControl;
            }
            return this.activeControl_;
        },
        set: function (control) {
            if (this.parent !== null) {
                this.parent.activeControl = control;
            }
            else {
                this.activeControl_ = control;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the parent component.
     */
    AbstractFormComponent.prototype.setParent = function (parent) {
        if (this.parent !== null) {
            this.unsetParent();
        }
        this.parent = parent;
        return this.buildChildComponentDecorator();
    };
    /**
     * Test if the component is a group.
     */
    AbstractFormComponent.prototype.isGroup = function () {
        return this.children !== null;
    };
    /**
     * Set the validator to use to the validate the component.
     *
     * The validator should only validate the current component because only the value will be exposed,
     * not the component itself.
     *
     * If child components need validation, give them their own validators.
     */
    AbstractFormComponent.prototype.setValidator = function (validator) {
        var _this = this;
        var that = this;
        if (this.currentValidationResult !== null) {
            this.currentValidationResult.cancel();
            this.unmarkBasicState(BasicState.Validating, this.id);
        }
        if (validator !== null) {
            var onFinish_1 = function () {
                if (_this.currentValidationResult && !_this.currentValidationResult.canceled) {
                    _this.unmarkBasicState(BasicState.Validating, _this.id);
                    _this.unmarkBasicState(BasicState.NotValidated, _this.id);
                }
                _this.currentValidationResult = null;
            };
            this.validator = createValidator({
                validate: function (context) {
                    if (that.virtual) {
                        return context.result;
                    }
                    try {
                        that.markBasicState(BasicState.Validating, that.id);
                        var result = validator.validate(context.value, context);
                        that.currentValidationResult = result;
                        if (result.waiting) {
                            result.onReady().then(onFinish_1).catch(onFinish_1);
                        }
                        else {
                            onFinish_1();
                        }
                        return result;
                    }
                    catch (e) {
                        onFinish_1();
                        throw e;
                    }
                }
            }, validator.tags, validator.groups);
        }
        else {
            this.validator = null;
        }
        if (this.validator !== null && this.concrete) {
            this.markBasicState(BasicState.NotValidated, this.id);
        }
        else {
            this.unmarkBasicState(BasicState.NotValidated, this.id);
        }
    };
    /**
     * Set the strategy to use to trigger the validation automatically.
     *
     * By default, the strategy is to inherit from the parent strategy (`ValidationStrategy.Inherit`).
     * If the root node as the `ValidationStrategy.Inherit`, it default to `ValidationStrategy.None`.
     *
     * This means that by default, the only way to trigger a validation is to call `validate()` manually.
     */
    AbstractFormComponent.prototype.setValidationStrategy = function (strategy) {
        this.validationStrategy = strategy;
    };
    /**
     * Sets the validations groups to use when validating the component.
     * Custom groups can replace those if passed to the `validate()` method directly.
     */
    AbstractFormComponent.prototype.setValidationGroups = function (groups) {
        this.validationGroups = groups !== null ? ensureArray(groups) : null;
    };
    /**
     * Detach the component from its parent.
     */
    AbstractFormComponent.prototype.detach = function () {
        if (this.parent !== null) {
            this.parent.remove(this);
        }
    };
    /**
     * Test if the form component is the root level.
     */
    AbstractFormComponent.prototype.isRoot = function () {
        return this.parent === null;
    };
    /**
     * Disable the component, removing it from the validation process.
     */
    AbstractFormComponent.prototype.disable = function () {
        this.markAsDisabled();
    };
    /**
     * Enable the component.
     */
    AbstractFormComponent.prototype.enable = function () {
        this.markAsEnabled();
    };
    /**
     * Force the validation of the component and all its children.
     * By calling this method the validation will always run immediately, no matter the validation strategy.
     */
    AbstractFormComponent.prototype.validate = function () {
        return this.doValidate(this.validator);
    };
    /**
     * Force the component to become virtual.
     */
    AbstractFormComponent.prototype.markAsVirtual = function () {
        this.unmarkBasicState(BasicState.Concrete, this.id);
        this.unmarkBasicState(BasicState.NotValidated, this.id);
    };
    /**
     * Force the component to become concrete.
     */
    AbstractFormComponent.prototype.markAsConcrete = function () {
        this.markBasicState(BasicState.Concrete, this.id);
        if (this.validator !== null) {
            this.markBasicState(BasicState.NotValidated, this.id);
        }
    };
    /**
     * Add one or multiple errors to the component.
     */
    AbstractFormComponent.prototype.addError = function (type, message) {
        var _this = this;
        var error = new FormError(this.path, type, message);
        this.errors.push(error);
        this.markBasicState(BasicState.Invalid, this.id);
        this.dispatch(FormEvents.ErrorsChanged, function () { return new ErrorsChangedFormEvent(_this, _this.errors.slice(0)); });
    };
    /**
     * Remove all errors from the component.
     */
    AbstractFormComponent.prototype.clearErrors = function (silent) {
        var _this = this;
        if (silent === void 0) { silent = false; }
        this.errors = [];
        if (!silent) {
            this.unmarkBasicState(BasicState.Invalid, this.id);
            this.dispatch(FormEvents.ErrorsChanged, function () { return new ErrorsChangedFormEvent(_this, []); });
        }
    };
    /**
     * Remove all errors from the component and its children.
     */
    AbstractFormComponent.prototype.clearErrorsDeep = function (silent) {
        if (silent === void 0) { silent = false; }
        this.clearErrors(silent);
    };
    /**
     * Try the match to path of the component against one or multiple patterns.
     */
    AbstractFormComponent.prototype.matchPattern = function (pattern) {
        return matchBest(ensureArray(pattern), this.path, this.activeStates.concat(this.additionalPatternTags));
    };
    /**
     * Get all extra data.
     */
    AbstractFormComponent.prototype.getExtras = function () {
        return this.extras;
    };
    /**
     * Replace all extra data.
     */
    AbstractFormComponent.prototype.setExtras = function (extras) {
        this.extras = extras;
    };
    /**
     * Get a single extra value.
     */
    AbstractFormComponent.prototype.getExtra = function (name, defaultValue) {
        if (isUndefined(this.extras[name])) {
            return defaultValue;
        }
        return this.extras[name];
    };
    /**
     * Set a single extra value.
     */
    AbstractFormComponent.prototype.setExtra = function (name, value) {
        this.extras[name] = value;
    };
    /**
     * Register a callback that will be called when the value of the component changes.
     *
     * @return A method to call to unsubscribe.
     */
    AbstractFormComponent.prototype.onValueChanged = function (callback, priority, selfOnly) {
        if (selfOnly === void 0) { selfOnly = true; }
        return this.subscribe(FormEvents.ValueChanged, callback, priority, selfOnly);
    };
    /**
     * Register a callback that will be called when the value of a flag changes.
     *
     * @return A method to call to unsubscribe.
     */
    AbstractFormComponent.prototype.onStateChanged = function (callback, priority, selfOnly) {
        if (selfOnly === void 0) { selfOnly = true; }
        return this.subscribe(FormEvents.StateChanged, callback, priority, selfOnly);
    };
    /**
     * Register a callback that will be called each time the validation is started.
     *
     * @return A method to call to unsubscribe.
     */
    AbstractFormComponent.prototype.onValidationStart = function (callback, priority, selfOnly) {
        return this.subscribe(FormEvents.ValidationStart, callback, priority, selfOnly);
    };
    /**
     * Register a callback that will be called each time a validation ends.
     *
     * @return A method to call to unsubscribe.
     */
    AbstractFormComponent.prototype.onValidationEnd = function (callback, priority, selfOnly) {
        return this.subscribe(FormEvents.ValidationEnd, callback, priority, selfOnly);
    };
    /**
     * Register a callback that will be called when an error is added of removed from the component.
     *
     * @return A method to call to unsubscribe.
     */
    AbstractFormComponent.prototype.onErrorsChanged = function (callback, priority, selfOnly) {
        if (selfOnly === void 0) { selfOnly = true; }
        return this.subscribe(FormEvents.ErrorsChanged, callback, priority, selfOnly);
    };
    /**
     * Subscribe to an event.
     * You can alternatively use shortcut methods (like "onValueChange") to subscribe to events.
     */
    AbstractFormComponent.prototype.subscribe = function (type, callback, priority, selfOnly) {
        if (priority === void 0) { priority = 0; }
        if (selfOnly === void 0) { selfOnly = true; }
        var unsubscribeFunctions = [];
        var dispatcher = this.getEventDispatcher();
        unsubscribeFunctions.push(dispatcher.subscribe(type, callback, priority));
        if (!selfOnly && !isUndefined(EventsInheritanceMap[type])) {
            unsubscribeFunctions.push(dispatcher.subscribe(EventsInheritanceMap[type], callback));
        }
        return function () {
            for (var _i = 0, unsubscribeFunctions_1 = unsubscribeFunctions; _i < unsubscribeFunctions_1.length; _i++) {
                var fn = unsubscribeFunctions_1[_i];
                fn();
            }
        };
    };
    /**
     * Refresh the value of the component.
     */
    AbstractFormComponent.prototype.updateValue = function () {
        if (this.parent !== null) {
            this.parent.updateValue();
        }
    };
    /**
     * Refresh the internal validator of the component.
     */
    AbstractFormComponent.prototype.updateValidator = function () {
        if (this.parent !== null) {
            this.parent.updateValidator();
        }
    };
    /**
     * The actual implementation of reset(), contextualized.
     */
    AbstractFormComponent.prototype.doReset = function () {
        if (this.activeControl !== null && this.activeControl.id === this.id) {
            this.activeControl.blur();
        }
        if (this.concrete && this.validator !== null) {
            this.markBasicState(BasicState.NotValidated, this.id);
        }
        this.unmarkBasicState([BasicState.Touched, BasicState.Dirty], this.id);
        this.validationStatus = ValidationStatus.Unknown;
        this.clearErrors();
    };
    /**
     * Only validate if the active validation strategy matches the one in parameter.
     */
    AbstractFormComponent.prototype.validateIfStrategyMatches = function (strategy) {
        var candidate = this.getConcreteValidationStrategy();
        if ((candidate & strategy) === strategy) {
            this.validate();
        }
    };
    /**
     * Get the "usable" validation strategy by resolving the inherit if set.
     */
    AbstractFormComponent.prototype.getConcreteValidationStrategy = function () {
        if (this.validationStrategy === ValidationStrategy.Inherit) {
            return this.parent !== null ? this.parent.getConcreteValidationStrategy() : DefaultValidationStrategy;
        }
        return this.validationStrategy;
    };
    /**
     * Get the real validation groups, considering the parents.
     */
    AbstractFormComponent.prototype.getConcreteValidationGroups = function () {
        if (this.validationGroups === InheritValidationGroup) {
            return this.parent !== null ? this.parent.getConcreteValidationGroups() : [];
        }
        return ensureArray(this.validationGroups);
    };
    /**
     * Dispatch an event.
     */
    AbstractFormComponent.prototype.dispatch = function (type, event) {
        if (this.eventDispatcher !== null) {
            if (isFunction(event)) {
                event = event();
            }
            var result = this.getEventDispatcher().dispatch(type, event);
            if (result.error) {
                throw result.errorDetail;
            }
        }
        if (this.parent !== null) {
            this.parent.dispatch(type, event);
        }
    };
    /**
     * Do the actual validation, for the validator in parameter.
     */
    AbstractFormComponent.prototype.doValidate = function (validator, isDeep) {
        var _this = this;
        if (isDeep === void 0) { isDeep = true; }
        var validationStartEvent = new FormEvent(this);
        this.dispatch(FormEvents.ValidationStart, function () { return validationStartEvent; });
        if (validator === null || validationStartEvent.defaultPrevented) {
            // An empty validation result is always sync and valid.
            var result_1 = new ValidationResult('/');
            this.handleValidationResult(result_1, isDeep);
            return true;
        }
        var groups = this.getConcreteValidationGroups();
        var context = new FormValidationContext(this.root, this.path, null, null, this.value, undefined, groups);
        if (!context.shouldValidate(validator)) {
            return true;
        }
        var result = validator.validate(this.value, context);
        if (!result.waiting) {
            this.handleValidationResult(result, isDeep);
            return result.valid;
        }
        return new Promise(function (resolve, reject) {
            result.onReady().then(function (result) {
                _this.handleValidationResult(result, isDeep);
                resolve(result.valid);
            }).catch(reject);
        });
    };
    /**
     * Do what needs to be done with a ValidationResult that just got settled.
     */
    AbstractFormComponent.prototype.handleValidationResult = function (result, isDeep) {
        var _this = this;
        if (result.canceled) {
            return;
        }
        if (result.waiting) {
            throw new UsageException('The ValidationResult is still waiting.');
        }
        this.clearErrors(true);
        if (result.valid) {
            this.unmarkBasicState(BasicState.Invalid, this.id);
        }
        else {
            for (var _i = 0, _a = result.violations; _i < _a.length; _i++) {
                var violation = _a[_i];
                this.addError(violation.type, violation.message);
            }
            if (result.violations.length > 0) {
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
     * Set the current call context.
     */
    AbstractFormComponent.prototype.pushContext = function (context) {
        this.contextsStack.push({ context: context, component: this.id });
    };
    /**
     * Remove the last call context.
     */
    AbstractFormComponent.prototype.popContext = function () {
        this.contextsStack.pop();
    };
    /**
     * Test if a context is part of the current context.
     */
    AbstractFormComponent.prototype.hasContext = function (context) {
        for (var _i = 0, _a = this.contextsStack; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (context === CallContext.External) {
                if (candidate.context === context) {
                    return true;
                }
            }
            else if ((candidate.context & context) === context) {
                return true;
            }
        }
        return false;
    };
    /**
     * Get the component id corresponding to a call context.
     * This is simply the id of the current instance if the call context is component related, 0 otherwise.
     */
    AbstractFormComponent.prototype.getCallContextComponentId = function (context) {
        return ComponentRelatedCallContexts.indexOf(context) > -1 ? this.id : 0;
    };
    /**
     * Extract the call context usable for states from the current context.
     *
     * Also ensure that only one suitable context is set, or throw an exception.
     * The exception is more like an assert, if it happens there is a bug, it should never throw.
     *
     * @throws
     */
    AbstractFormComponent.prototype.resolveStateCallContext = function () {
        var contexts = [];
        for (var _i = 0, _a = [CallContext.ViewModel, CallContext.Parent, CallContext.Child]; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (this.hasContext(candidate)) {
                contexts.push(candidate);
            }
        }
        if (contexts.length > 1) {
            throw new UsageException('Try to update a state while multiple suitable call contexts are available.');
        }
        return contexts.length > 0 ? contexts[0] : CallContext.External;
    };
    /**
     * Shortcut method that calls `proxifyWithContext` for each aliased method.
     */
    AbstractFormComponent.prototype.buildContextualizedApi = function (exposedMethodsMap, context) {
        var api = {};
        for (var _i = 0, _a = getObjectKeys(exposedMethodsMap); _i < _a.length; _i++) {
            var alias = _a[_i];
            api[alias] = this.proxifyWithContext(exposedMethodsMap[alias], context);
        }
        return api;
    };
    /**
     * Create a proxy that ensures a call context is added to the stack before the callback is called and removed after.
     */
    AbstractFormComponent.prototype.proxifyWithContext = function (fn, context) {
        var _this = this;
        return function () {
            var arguments$1 = arguments;

            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments$1[_i];
            }
            try {
                _this.pushContext(context);
                return fn.apply(_this, args);
            }
            finally {
                _this.popContext();
            }
        };
    };
    /**
     * Mark the component as `disabled` for the current call context.
     */
    AbstractFormComponent.prototype.markAsDisabled = function () {
        this.markContextualizedState(ContextualizedState.Disabled);
    };
    /**
     * Unmark the `disabled` state of the component for the current call context.
     */
    AbstractFormComponent.prototype.markAsEnabled = function () {
        this.unmarkContextualizedState(ContextualizedState.Disabled);
    };
    /**
     * Dispatch a `FormEvents.StateChanged` form event if something is listening.
     */
    AbstractFormComponent.prototype.dispatchStateChange = function (state, newValue) {
        var _this = this;
        this.dispatch(FormEvents.StateChanged, function () { return new StateChangedFormEvent(_this, state, newValue); });
    };
    /**
     * Add a component id to the basic states object of all the parents until the root node.
     */
    AbstractFormComponent.prototype.markBasicState = function (state, id) {
        var _this = this;
        var states = ensureArray(state);
        var _loop_1 = function (state_1) {
            if (this_1.basicStates[state_1].indexOf(id) < 0) {
                this_1.basicStates[state_1].push(id);
                this_1.updateActiveState(state_1, false);
                this_1.dispatch(FormEvents.StateChanged, function () { return new StateChangedFormEvent(_this, state_1, true); });
            }
            if (this_1.parent !== null) {
                this_1.parent.markBasicState(state_1, id);
            }
        };
        var this_1 = this;
        for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
            var state_1 = states_1[_i];
            _loop_1(state_1);
        }
    };
    /**
     * Remove a component id from the basic states object of all the parents until the root node.
     */
    AbstractFormComponent.prototype.unmarkBasicState = function (state, id) {
        var _this = this;
        var states = ensureArray(state);
        var _loop_2 = function (state_2) {
            var pos = this_2.basicStates[state_2].indexOf(id);
            if (pos > -1) {
                this_2.basicStates[state_2].splice(pos, 1);
                if (this_2.basicStates[state_2].length === 0) {
                    this_2.updateActiveState(state_2, true);
                }
                this_2.dispatch(FormEvents.StateChanged, function () { return new StateChangedFormEvent(_this, state_2, false); });
            }
            if (this_2.parent !== null) {
                this_2.parent.unmarkBasicState(state_2, id);
            }
        };
        var this_2 = this;
        for (var _i = 0, states_2 = states; _i < states_2.length; _i++) {
            var state_2 = states_2[_i];
            _loop_2(state_2);
        }
    };
    /**
     * Add the current call context to a contextualized state.
     */
    AbstractFormComponent.prototype.markContextualizedState = function (state) {
        var context = this.resolveStateCallContext();
        if (isUndefined(this.contextualizedStates[state][context])) {
            this.contextualizedStates[state][context] = [];
        }
        var id = this.getCallContextComponentId(context);
        if (this.contextualizedStates[state][context].indexOf(id) < 0) {
            this.contextualizedStates[state][context].push(id);
            // Meaning the state has changed
            if (Object.keys(this.contextualizedStates[state]).length === 1) {
                this.dispatchStateChange(state, true);
                this.updateActiveState(state, false);
            }
        }
    };
    /**
     * Add the current call context to a contextualized state.
     */
    AbstractFormComponent.prototype.unmarkContextualizedState = function (state) {
        var context = this.resolveStateCallContext();
        var id = this.getCallContextComponentId(context);
        if (!isUndefined(this.contextualizedStates[state][context])) {
            var pos = this.contextualizedStates[state][context].indexOf(id);
            if (pos >= 0) {
                this.contextualizedStates[state][context].splice(pos, 1);
                if (this.contextualizedStates[state][context].length === 0) {
                    delete this.contextualizedStates[state][context];
                    // Meaning the state has changed
                    if (Object.keys(this.contextualizedStates[state]).length === 0) {
                        this.dispatchStateChange(state, false);
                        this.updateActiveState(state, true);
                    }
                }
            }
        }
    };
    /**
     * Propagate the basic states of the component to its parents.
     */
    AbstractFormComponent.prototype.propagateStatesToParent = function () {
        if (this.parent !== null) {
            // Special case for focus because only one element can have the focus at the same time.
            // If another component is focused, clear it.
            if (this.activeControl !== null) {
                this.activeControl.blur();
            }
            this.parent.markBasicState(this.activeBasicStates, this.id);
        }
    };
    /**
     * Remove the marking of the component on the basic states of its parents.
     */
    AbstractFormComponent.prototype.removeStatesFromParent = function () {
        if (this.parent !== null) {
            this.parent.unmarkBasicState(this.activeBasicStates, this.id);
        }
    };
    /**
     * Update the `activeStates` array to reflect the inversion of the state in parameter.
     */
    AbstractFormComponent.prototype.updateActiveState = function (state, inverted) {
        var toRemove = inverted ? state : StatesInverseMap[state];
        var toAdd = inverted ? StatesInverseMap[state] : state;
        if (this.activeStates.indexOf(toAdd) < 0) {
            this.activeStates.push(toAdd);
        }
        removeFromArray(this.activeStates, toRemove);
    };
    /**
     * Ensure an instance is returned, creating it if necessary.
     */
    AbstractFormComponent.prototype.getEventDispatcher = function () {
        if (this.eventDispatcher === null) {
            this.eventDispatcher = new EventDispatcher();
        }
        return this.eventDispatcher;
    };
    /**
     * Unset the parent component.
     */
    AbstractFormComponent.prototype.unsetParent = function () {
        if (this.parent !== null && this.name !== null) {
            this.parent.decorated.remove(this.name);
        }
        this.parent = null;
    };
    /**
     * Create the decorator that will be used by the parent component.
     *
     * Doing this instead of exposing the instance directly has several advantages:
     *
     *   1) It's possible to expose methods to the parent only (like `unsetParent`).
     *   2) By wrapping the methods we can set a call context before the call and remove it after.
     *
     * Overall, it gives a better control over the capabilities given to parent and avoid exposing them to the outside world.
     */
    AbstractFormComponent.prototype.buildChildComponentDecorator = function () {
        var that = this;
        return Object.assign({
            get decorated() { return that; }
        }, this.buildContextualizedApi({
            setValue: this.setValue,
            setDefaultValue: this.setDefaultValue,
            unsetParent: this.unsetParent,
            enable: this.enable,
            disable: this.disable,
            propagateStatesToParent: this.propagateStatesToParent,
            removeStatesFromParent: this.removeStatesFromParent,
            validate: this.validate,
            handleValidationResult: this.handleValidationResult
        }, CallContext.Parent));
    };
    /**
     * Used to give a unique id to every new form component.
     */
    AbstractFormComponent.MaxId = 0;
    return AbstractFormComponent;
}());

export { AbstractFormComponent };
