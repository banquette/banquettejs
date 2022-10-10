/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var areEqual = require('@banquette/utils-misc/_cjs/dev/are-equal');
var cloneDeepPrimitive = require('@banquette/utils-object/_cjs/dev/clone-deep-primitive');
var getObjectKeys = require('@banquette/utils-object/_cjs/dev/get-object-keys');
var abstractFormComponent = require('./abstract-form-component.js');
var constant = require('./constant.js');
var beforeValueChange_formEvent = require('./event/before-value-change.form-event.js');
var valueChanged_formEvent = require('./event/value-changed.form-event.js');

var FormControl = /** @class */ (function (_super) {
    _tslib.__extends(FormControl, _super);
    function FormControl(value, validator) {
        var _this = _super.call(this) || this;
        /**
         * A FormControl has no child.
         */
        _this.children = null;
        /**
         * The views of the control.
         * If none, the control is disabled, meaning its value will not automatically bubble up.
         *
         * This is done like this mainly so you can only use a part of a form created via an annotated model.
         */
        _this.viewModels = [];
        /**
         * A reference on the view models currently doing a call.
         */
        _this.currentViewModels = [];
        /**
         * Set the new value of the control.
         */
        _this.setValue = (function () {
            var locked = false;
            return function (value) {
                try {
                    if (locked || areEqual.areEqual(_this.lastValue, value)) {
                        return;
                    }
                    locked = true;
                    var beforeValueChangeEvent_1 = new beforeValueChange_formEvent.BeforeValueChangeFormEvent(_this, _this.lastValue, value);
                    _this.dispatch(constant.FormEvents.BeforeValueChange, beforeValueChangeEvent_1);
                    if (!beforeValueChangeEvent_1.changeAccepted) {
                        _this.viewModels.forEach(function (vm) {
                            vm.setValue(_this.lastValue);
                        });
                        return;
                    }
                    if (!areEqual.areEqual(beforeValueChangeEvent_1.newValue, value)) {
                        _this.viewModels.forEach(function (vm) {
                            vm.setValue(beforeValueChangeEvent_1.newValue);
                        });
                    }
                    // The value may have been overridden in the event.
                    value = beforeValueChangeEvent_1.newValue;
                    _this.value = value;
                    _this.dispatch(constant.FormEvents.ValueChanged, function () { return new valueChanged_formEvent.ValueChangedFormEvent(_this, _this.lastValue, _this.value); });
                    _this.lastValue = cloneDeepPrimitive.cloneDeepPrimitive(_this.value);
                    _this.viewModels.forEach(function (vm) {
                        if (vm !== _this.focusedViewModel) {
                            vm.setValue(value);
                        }
                    });
                    _this.markBasicState(constant.BasicState.Dirty);
                    if (!areEqual.areEqual(_this.defaultValue, value)) {
                        _this.markBasicState(constant.BasicState.Changed);
                    }
                    else {
                        _this.unmarkBasicState(constant.BasicState.Changed);
                    }
                    if (!_this.hasContext(constant.CallContext.Reset)) {
                        _this.validateIfStrategyMatches(constant.ValidationStrategy.OnChange);
                    }
                    if (_this.parent !== null && !_this.hasContext(constant.CallContext.Parent)) {
                        _this.updateValue();
                    }
                }
                finally {
                    locked = false;
                }
            };
        })();
        // Disable until a view model is set
        (_this.proxifyWithContext(function () {
            _this.disable();
        }, constant.CallContext.ViewModel))();
        _this.additionalPatternTags.push('control');
        _this.value = value;
        _this.lastValue = cloneDeepPrimitive.cloneDeepPrimitive(value);
        _this.defaultValue = cloneDeepPrimitive.cloneDeepPrimitive(value);
        _this.setValidator(validator || null);
        return _this;
    }
    /**
     * Set the default value of the control.
     *
     * Calling this method will also set the field back an "unchanged" state.
     * Further reset of the control will set this value back into the "real" value of the control.
     */
    FormControl.prototype.setDefaultValue = function (value) {
        this.defaultValue = cloneDeepPrimitive.cloneDeepPrimitive(value);
    };
    /**
     * Set the view model the control will communicate with.
     *
     * @return A object the view model must use to interact with the control.
     */
    FormControl.prototype.setViewModel = function (viewModel) {
        if (this.viewModels.indexOf(viewModel) > -1) {
            throw new usage_exception.UsageException('The view model is already associated with this control.');
        }
        this.viewModels.push(viewModel);
        try {
            // Because we are still setting the connection between the control and the view model
            // at this point, we have no call context yet, so we have to push it manually.
            // That's the only time this should happen.
            this.pushContext(constant.CallContext.ViewModel);
            this.enable();
            this.markAsConcrete();
            if (this.parent !== null) {
                this.parent.updateValue();
            }
        }
        finally {
            this.popContext();
        }
        viewModel.setValue(this.value);
        return this.buildControlViewDecorator(viewModel);
    };
    /**
     * Unset the view model assigned with the form control.
     */
    FormControl.prototype.unsetViewModel = function (viewModel) {
        var pos = this.viewModels.indexOf(viewModel);
        if (pos > -1) {
            this.viewModels.splice(pos, 1);
        }
        if (!this.viewModels.length) {
            this.markAsVirtual();
        }
    };
    /**
     * Ask the view to get the focus on the control.
     */
    FormControl.prototype.focus = function () {
        if (this.viewModels.length > 0) {
            this.viewModels[0].focus();
        }
    };
    /**
     * Inverse of `focus()`.
     */
    FormControl.prototype.blur = function () {
        this.viewModels.forEach(function (vm) {
            vm.blur();
        });
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
     */
    FormControl.prototype.doReset = function () {
        if (this.parent !== null) {
            this.parent.pushContext(constant.CallContext.Reset, true);
        }
        this.setValue(this.defaultValue);
        _super.prototype.doReset.call(this);
        if (this.parent !== null) {
            this.parent.popContext(true);
        }
    };
    /**
     * @inheritDoc
     */
    FormControl.prototype.setValidator = function (validator) {
        _super.prototype.setValidator.call(this, validator);
        // Rebuild the parent validator, if there is one.
        this.updateValidator();
    };
    /**
     * Register a callback that will be called before the value of the control changes.
     *
     * @return A method to call to unsubscribe.
     */
    FormControl.prototype.onBeforeValueChange = function (callback, priority) {
        return this.subscribe(constant.FormEvents.BeforeValueChange, callback, priority, true);
    };
    /**
     * Change the `focused` state of the control to `true`.
     * Only exposed to the view model.
     */
    FormControl.prototype.markAsFocused = function () {
        if (this.activeControl === this) {
            return;
        }
        if (this.activeControl !== null && this.activeControl.id !== this.id) {
            this.activeControl.blur();
        }
        this.activeControl = this;
        this.markBasicState(constant.BasicState.Focused);
        this.validateIfStrategyMatches(constant.ValidationStrategy.OnFocus);
        if (this.currentViewModels.length) {
            this.focusedViewModel = this.currentViewModels[this.currentViewModels.length - 1];
        }
    };
    /**
     * Change the `focused` state of the control to `false`.
     * Only exposed to the view model.
     */
    FormControl.prototype.markAsBlurred = function () {
        if (this.activeControl === this) {
            this.activeControl = null;
            // Only mark the control "touched" if it was focused.
            this.markBasicState(constant.BasicState.Touched);
            this.validateIfStrategyMatches(constant.ValidationStrategy.OnBlur);
        }
        this.unmarkBasicState(constant.BasicState.Focused);
        if (!this.currentViewModels.length || this.currentViewModels[this.currentViewModels.length - 1] === this.focusedViewModel) {
            this.focusedViewModel = null;
        }
    };
    /**
     * Change the `busy` state of the control to `true`.
     * Only exposed to the view model.
     */
    FormControl.prototype.markAsBusy = function () {
        this.markBasicState(constant.BasicState.Busy);
    };
    /**
     * Change the `busy` state of the control to `false`.
     * Only exposed to the view model.
     */
    FormControl.prototype.markAsNotBusy = function () {
        this.unmarkBasicState(constant.BasicState.Busy);
    };
    /**
     * Override to ensure the id is correctly set.
     */
    FormControl.prototype.markBasicState = function (state) {
        _super.prototype.markBasicState.call(this, state, this.id);
    };
    /**
     * Override to ensure the id is correctly set.
     */
    FormControl.prototype.unmarkBasicState = function (state) {
        _super.prototype.unmarkBasicState.call(this, state, this.id);
    };
    /**
     * Create the decorator that will be used by the view model to communicate with the control.
     *
     * Doing this instead of exposing the FormControl instance directly has several advantages:
     *
     *   1) It's possible to expose methods to the view model only.
     *      For example `markAsFocused` and `markAsFocused` are only available to the view model
     *      as only the view model have the ability to give the focus to the actual html element.
     *
     *   2) By wrapping certain methods like `setValue` we can know it is called from the view model,
     *      thus avoiding updating the value in the view model which would result in an infinite recursion.
     *
     * Overall, it gives a better control over the capabilities given to the view model.
     */
    FormControl.prototype.buildControlViewDecorator = function (viewModel) {
        var that = this;
        return Object.assign({
            get id() { return that.id; },
            get formId() { return that.formId; },
            get path() { return that.path; },
            get valid() { return that.valid; },
            get invalid() { return that.invalid; },
            get validated() { return that.validated; },
            get notValidated() { return that.notValidated; },
            get validating() { return that.validating; },
            get notValidating() { return that.notValidating; },
            get validatedAndValid() { return that.validatedAndValid; },
            get busy() { return that.busy; },
            get notBusy() { return that.notBusy; },
            get disabled() { return that.disabled; },
            get enabled() { return that.enabled; },
            get dirty() { return that.dirty; },
            get pristine() { return that.pristine; },
            get touched() { return that.touched; },
            get untouched() { return that.untouched; },
            get changed() { return that.changed; },
            get unchanged() { return that.unchanged; },
            get focused() { return that.focused; },
            get unfocused() { return that.unfocused; },
            get errors() { return that.errors; },
            get defaultValue() { return that.defaultValue; },
            get value() { return that.value; },
            get focusedViewModel() { return that.focusedViewModel || null; }
        }, this.buildContextualizedViewModelApi({
            setValue: this.setValue,
            markAsDisabled: this.markAsDisabled,
            markAsEnabled: this.markAsEnabled,
            markAsFocused: this.markAsFocused,
            markAsBlurred: this.markAsBlurred,
            markAsBusy: this.markAsBusy,
            markAsNotBusy: this.markAsNotBusy,
            unsetViewModel: this.unsetViewModel,
            setDefaultValue: this.setDefaultValue,
            reset: this.reset,
            setExtras: this.setExtras,
            getExtras: this.getExtras,
            setExtra: this.setExtra,
            getExtra: this.getExtra,
            setValidator: this.setValidator,
            onStateChanged: this.onStateChanged,
            onValueChanged: this.onValueChanged,
            onBeforeValueChange: this.onBeforeValueChange,
            onErrorsChanged: this.onErrorsChanged
        }, viewModel));
    };
    /**
     * Proxify each call to retain the source view model and apply the ViewModel call context.
     */
    FormControl.prototype.buildContextualizedViewModelApi = function (map, viewModel) {
        var _this = this;
        var wrapped = {};
        for (var _i = 0, _a = getObjectKeys.getObjectKeys(map); _i < _a.length; _i++) {
            var key = _a[_i];
            wrapped[key] = (function (_key, _decorated) { return function () {
                var arguments$1 = arguments;

                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments$1[_i];
                }
                try {
                    _this.currentViewModels.push(viewModel);
                    return _decorated.apply(_this, args);
                }
                finally {
                    _this.currentViewModels.pop();
                }
            }; })(key, this.proxifyWithContext(map[key], constant.CallContext.ViewModel));
        }
        return wrapped;
    };
    return FormControl;
}(abstractFormComponent.AbstractFormComponent));

exports.FormControl = FormControl;
