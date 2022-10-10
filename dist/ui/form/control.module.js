/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { proxy } from '@banquette/utils-misc/proxy';
import { extend } from '@banquette/utils-object/extend';
import { getObjectKeys } from '@banquette/utils-object/get-object-keys';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { NoopTransformer } from './noop.value-transformer.js';

/**
 * A module keeping a FormControl and a viewData object in sync, without exposing the control directly to the view.
 */
var ControlModule = /** @class */ (function () {
    /**
     * @param control          The FormControl to manipulate
     * @param valueTransformer (optional) The transformer used to transform the value between the view and the control
     */
    function ControlModule(control, valueTransformer) {
        if (valueTransformer === void 0) { valueTransformer = NoopTransformer; }
        var _this = this;
        this.valueTransformer = valueTransformer;
        /**
         * If `true`, the proxy protecting view data allows mutations.
         */
        this.allowProtectedMutations = false;
        /**
         * An object holding view data only accessible on read by the end-user but
         * that can be mutated internally (if the `allowProtectedMutations` is `true`).
         *
         * Values are stored here so there write access can be controlled.
         */
        this.protectedViewData = {};
        /**
         * Array of functions to call to remove the listeners that have been placed on the form control.
         */
        this.unsubscribeMethods = [];
        /**
         * A flag indicating the FormControl's value is being updated.
         */
        this.updatingControl = false;
        this.externalEvents = {};
        /**
         * Subscribe to an event from the outside of the module.
         *
         * The event binding is a bit tricky because the active control can change at any moment
         * so the event must be removed from the old control and attached to the new one when that happens,
         * while being invisible for the outside.
         */
        this.subscribeToExternalEvent = (function () {
            var id = 0;
            return function (event, cb) {
                var localId = ++id;
                _this.externalEvents[localId] = {
                    type: event,
                    callback: cb,
                    unsubscribe: _this.activeControl[event](cb)
                };
                return function () {
                    if (!isUndefined(_this.externalEvents[localId])) {
                        _this.externalEvents[localId].unsubscribe();
                        delete _this.externalEvents[localId];
                    }
                };
            };
        })();
        /**
         * Defines a proxy for which the value can never change.
         */
        this.defineReadOnlyProxy = function (target, property, get) {
            Object.defineProperty(target, property, {
                enumerable: true,
                configurable: true,
                get: get
            });
        };
        /**
         * Defines a proxy for which the value can only be updated internally or via a callback function.
         */
        this.defineMutableProxy = function (target, property, value, callback) {
            var hasCallback = !isUndefined(callback);
            _this.protectedViewData[property] = value;
            Object.defineProperty(target, property, {
                enumerable: true,
                configurable: true,
                get: function () { return _this.protectedViewData[property]; },
                set: function (value) {
                    if (hasCallback) {
                        callback(value);
                        return;
                    }
                    if (!_this.allowProtectedMutations) {
                        throw new UsageException("You can't change the value of \"".concat(property, "\" from the view."));
                    }
                    _this.protectedViewData[property] = value;
                }
            });
        };
        /**
         * Define a proxy for a flag that can be mutated by the end-user.
         */
        this.defineUserMutableFlagProxy = function (target, property, value, ifTrue, ifFalse) {
            _this.defineMutableProxy(target, property, value, function (value) {
                if (_this.allowProtectedMutations) {
                    _this.protectedViewData[property] = value;
                }
                else {
                    _this.setWriteableFlag(value, ifTrue, ifFalse);
                }
            });
        };
        this.activeControl = control;
        this.viewData = this.buildViewData({});
        this.setControl(control);
    }
    /**
     * @inheritDoc
     */
    ControlModule.prototype.setViewData = function (viewData) {
        this.viewData = this.buildViewData(viewData);
    };
    /**
     * Set the control the view model will communicate with.
     */
    ControlModule.prototype.setControl = function (control) {
        var _this = this;
        this.activeControl = control;
        this.mutateInternalViewData(function () {
            _this.viewData.invalid = _this.activeControl.invalid;
            _this.viewData.notValidated = _this.activeControl.notValidated;
            _this.viewData.validating = _this.activeControl.validating;
            _this.viewData.dirty = _this.activeControl.dirty;
            _this.viewData.touched = _this.activeControl.touched;
            _this.viewData.changed = _this.activeControl.changed;
            _this.viewData.focused = _this.activeControl.focused;
            _this.viewData.disabled = _this.activeControl.disabled;
            _this.viewData.busy = _this.activeControl.busy;
            _this.viewData.errors = _this.activeControl.errors.slice(0);
        });
        // Unsubscribe from listeners of the previous control.
        for (var _i = 0, _a = this.unsubscribeMethods; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        // Listen for changes on the new control.
        this.unsubscribeMethods = [
            this.activeControl.onValueChanged(function (event) {
                _this.updateValueFromControl(event.newValue);
            }),
            this.activeControl.onStateChanged(function (event) {
                if (!isUndefined(_this.viewData[event.state])) {
                    _this.mutateInternalViewData(function () {
                        _this.viewData[event.state] = event.newValue;
                    });
                }
            }),
            this.activeControl.onErrorsChanged(function (event) {
                _this.mutateInternalViewData(function () {
                    _this.viewData.errors = event.errors.slice(0);
                });
            })
        ];
        // Unsubscribe from previous external events are set new ones for the active control.
        for (var _b = 0, _c = getObjectKeys(this.externalEvents); _b < _c.length; _b++) {
            var id = _c[_b];
            var item = this.externalEvents[id];
            item.unsubscribe();
            item.unsubscribe = this.activeControl[item.type](item.callback);
        }
    };
    /**
     * Be notified before the value of the form control changes.
     */
    ControlModule.prototype.onBeforeValueChange = function (cb) {
        return this.subscribeToExternalEvent('onBeforeValueChange', cb);
    };
    /**
     * Be notified after the form control value changed.
     */
    ControlModule.prototype.onValueChanged = function (cb) {
        return this.subscribeToExternalEvent('onValueChanged', cb);
    };
    /**
     * Be notified when the form control state changes.
     */
    ControlModule.prototype.onStateChanged = function (cb) {
        return this.subscribeToExternalEvent('onStateChanged', cb);
    };
    /**
     * Update the value without triggering a control update.
     */
    ControlModule.prototype.updateValueFromControl = function (controlValue) {
        if (this.updatingControl) {
            return;
        }
        this.updatingControl = true;
        this.viewData.value = this.valueTransformer.controlToView(controlValue);
        this.updatingControl = false;
    };
    /**
     * Shortcut for `this.activeControl.setState(VisualState.Focused, true)`.
     */
    ControlModule.prototype.onFocus = function () {
        if (!this.viewData.disabled) {
            this.activeControl.markAsFocused();
        }
    };
    /**
     * Shortcut for `this.activeControl.setState(VisualState.Focused, false)`.
     */
    ControlModule.prototype.onBlur = function () {
        this.activeControl.markAsBlurred();
    };
    /**
     * Allow you to modify protected view data. Use at your own risk.
     */
    ControlModule.prototype.mutateInternalViewData = function (cb) {
        this.allowProtectedMutations = true;
        try {
            cb();
        }
        finally {
            this.allowProtectedMutations = false;
        }
    };
    /**
     * @inheritDoc
     */
    ControlModule.prototype.buildViewData = function (viewData) {
        var _this = this;
        var that = this;
        // Ids are always read-only.
        this.defineReadOnlyProxy(viewData, 'id', function () { return _this.activeControl.id; });
        this.defineReadOnlyProxy(viewData, 'formId', function () { return _this.activeControl.formId; });
        this.defineReadOnlyProxy(viewData, 'fullId', function () { return _this.activeControl.formId ? (_this.activeControl.formId + '_' + _this.activeControl.id) : null; });
        // Basic states, can be mutated internally.
        this.defineMutableProxy(viewData, 'invalid', this.activeControl.invalid);
        this.defineMutableProxy(viewData, 'notValidated', this.activeControl.notValidated);
        this.defineMutableProxy(viewData, 'validating', this.activeControl.validating);
        this.defineMutableProxy(viewData, 'dirty', this.activeControl.dirty);
        this.defineMutableProxy(viewData, 'touched', this.activeControl.touched);
        this.defineMutableProxy(viewData, 'changed', this.activeControl.changed);
        this.defineMutableProxy(viewData, 'focused', this.activeControl.focused);
        this.defineMutableProxy(viewData, 'errors', this.activeControl.errors.slice(0));
        // Busy and disabled can be controlled from the view side, but only through proxy methods.
        this.defineUserMutableFlagProxy(viewData, 'disabled', this.activeControl.disabled, 'markAsDisabled', 'markAsEnabled');
        this.defineUserMutableFlagProxy(viewData, 'busy', this.activeControl.busy, 'markAsBusy', 'markAsNotBusy');
        // Then define the rest of the view data and merge them with those from sub classes.
        viewData = extend(viewData, {
            tabIndex: 0,
            // Inverse states, always read-only.
            get valid() { return that.activeControl.valid; },
            get validated() { return that.activeControl.validated; },
            get notValidating() { return that.activeControl.notValidating; },
            get validatedAndValid() { return that.activeControl.validatedAndValid; },
            get pristine() { return that.activeControl.pristine; },
            get untouched() { return that.activeControl.untouched; },
            get unchanged() { return that.activeControl.unchanged; },
            get unfocused() { return that.activeControl.unfocused; },
            get notBusy() { return that.activeControl.notBusy; },
            get enabled() { return that.activeControl.enabled; },
            get errorsMap() {
                return that.activeControl.errors.reduce(function (acc, item) {
                    acc[item.type] = item.message;
                    return acc;
                }, {});
            },
            get value() { return that.activeControlViewValue; },
            set value(newValue) {
                that.activeControlViewValue = newValue;
                if (!that.updatingControl) {
                    that.updatingControl = true;
                    that.activeControl.setValue(that.valueTransformer.viewToControl(that.activeControlViewValue));
                    that.updatingControl = false;
                }
            },
            onFocus: proxy(this.onFocus, this),
            onBlur: proxy(this.onBlur, this),
            // By default nothing is done, the flag is simply changed,
            // but you should override these methods if you need to actually do something to give/remove focus of the control.
            focus: proxy(this.onFocus, this),
            blur: proxy(this.onBlur, this)
        });
        return viewData;
    };
    /**
     * Shorthand to call one method or the other depending on a flag.
     */
    ControlModule.prototype.setWriteableFlag = function (value, ifTrue, ifFalse) {
        this.activeControl[value ? ifTrue : ifFalse]();
    };
    return ControlModule;
}());

export { ControlModule };
