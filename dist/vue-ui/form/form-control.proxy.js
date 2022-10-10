/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __metadata, __param } from '../_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Module } from '@banquette/dependency-injection/decorator/module.decorator';
import { Injector } from '@banquette/dependency-injection/injector';
import { UsageException } from '@banquette/exception/usage.exception';
import { ComponentNotFoundException } from '@banquette/form/exception/component-not-found.exception';
import { FormControl } from '@banquette/form/form-control';
import { proxy } from '@banquette/utils-misc/proxy';
import { isFunction } from '@banquette/utils-type/is-function';
import { isObject } from '@banquette/utils-type/is-object';
import { isString } from '@banquette/utils-type/is-string';
import { Composable } from '@banquette/vue-typescript/decorator/composable.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Lifecycle } from '@banquette/vue-typescript/decorator/lifecycle.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { FormStorageService } from './form-storage.service.js';

/**
 * A proxy between the Vue component and the form control.
 *
 * Required because the form control may not be available at all times and
 * need to be resolved if a string is given as input.
 */
var FormControlProxy = /** @class */ (function () {
    function FormControlProxy(formStorage) {
        this.formStorage = formStorage;
        /**
         * A form to fallback to if none is defined through the prop.
         */
        this.fallbackForm = null;
        /**
         * A fallback function that will be called if `resolveControl` fails to resolve the form control.
         */
        this.fallbackGetControl = null;
        /**
         * This control is only set if a `forceValue` has been called.
         * This means the end-user wants to use the `v-model` notation instead of a `FormControl`.
         *
         * This is stored separately so both ways can coexist, so the user can have BOTH a `v-model` and a control.
         */
        this.vModelControl = null;
        /**
         * Array of methods waiting to be called when the control becomes available.
         */
        this.methodsQueue = [];
        /**
         * The list of subscribers to call each time a "real" FormControl instance is assigned.
         */
        this.onReadySubscribers = [];
        /**
         * The list of subscribers to call each time the "real" FormControl instance is detached.
         */
        this.onDetachSubscribers = [];
        /**
         * If `true`, the control has been created by a call to `getControl`.
         */
        this.isInternalControl = false;
    }
    FormControlProxy_1 = FormControlProxy;
    Object.defineProperty(FormControlProxy.prototype, "id", {
        /**
         * Visual states.
         */
        get: function () { return this.getFromControl('id', 0); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "formId", {
        get: function () { return this.getFromControl('formId', ''); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "path", {
        get: function () { return this.getFromControl('path', null); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "valid", {
        get: function () { return this.getFromControl('valid', true); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "invalid", {
        get: function () { return !this.valid; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "notValidated", {
        get: function () { return this.getFromControl('notValidated', false); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "validated", {
        get: function () { return !this.notValidated; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "validating", {
        get: function () { return this.getFromControl('validating', false); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "notValidating", {
        get: function () { return !this.validating; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "validatedAndValid", {
        get: function () { return this.getFromControl('validatedAndValid', false); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "busy", {
        get: function () { return this.getFromControl('busy', false); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "notBusy", {
        get: function () { return !this.busy; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "disabled", {
        get: function () { return this.getFromControl('disabled', true); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "enabled", {
        get: function () { return !this.disabled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "dirty", {
        get: function () { return this.getFromControl('dirty', false); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "pristine", {
        get: function () { return !this.dirty; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "touched", {
        get: function () { return this.getFromControl('touched', false); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "untouched", {
        get: function () { return !this.touched; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "changed", {
        get: function () { return this.getFromControl('changed', false); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "unchanged", {
        get: function () { return !this.changed; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "focused", {
        get: function () { return this.viewModel !== null && this.focusedViewModel !== null && this.focusedViewModel.id === this.viewModel.id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "unfocused", {
        get: function () { return !this.focused; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "errors", {
        get: function () { return this.getFromControl('errors', []); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "ready", {
        get: function () { return this.bridge !== null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "focusedViewModel", {
        get: function () { return this.getFromControl('focusedViewModel', null); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "value", {
        /**
         * Not a computed because Vue doesn't need to see it, that's for internal use only.
         * And exposing it to vue will conflict with the `value` prop of `AbstractVueFormComponent` anyway.
         */
        get: function () { return this.getFromControl('value', null); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlProxy.prototype, "defaultValue", {
        /**
         * Get the original value of the control.
         */
        get: function () {
            if (this.bridge) {
                return this.bridge.defaultValue;
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    FormControlProxy.prototype.onComponentUnmounted = function () {
        if (this._formRef) {
            this._formRef.ref.release();
            this._formRef = null;
        }
        if (this.controlAddedUnsubscribe) {
            this.controlAddedUnsubscribe();
            this.controlAddedUnsubscribe = null;
        }
        if (this.bridge && this.viewModel) {
            this.bridge.unsetViewModel(this.viewModel);
        }
        this.onReadySubscribers = [];
        this.onDetachSubscribers = [];
    };
    /**
     * Set the view model to use to interact with the FormControl.
     */
    FormControlProxy.prototype.setViewModel = function (viewModel) {
        this.viewModel = viewModel;
        if (this._control) {
            this.bridge = this._control.setViewModel(this.viewModel);
        }
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.unsetViewModel = function () {
        this.onControlUnassigned();
        this.viewModel = null;
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.markAsDisabled = function () {
        this.callControlMethod('markAsDisabled', true, true);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.markAsEnabled = function () {
        this.callControlMethod('markAsEnabled', true, true);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.markAsFocused = function () {
        this.callControlMethod('markAsFocused', true, true);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.markAsBlurred = function () {
        this.callControlMethod('markAsBlurred', true, true);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.markAsBusy = function () {
        this.callControlMethod('markAsBusy', true, true);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.markAsNotBusy = function () {
        this.callControlMethod('markAsNotBusy', true, true);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.setDefaultValue = function (value) {
        this.callControlMethod('setDefaultValue', false, true, value);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.setValue = function (value) {
        this.callControlMethod('setValue', false, false, value);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.reset = function () {
        this.callControlMethod('reset');
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.getExtras = function () {
        var result = this.callControlMethod('getExtra', false);
        if (result.done) {
            return result.returnValue;
        }
        return {};
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.setExtras = function (extras) {
        this.callControlMethod('setExtras', true, false, extras);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.getExtra = function (name, defaultValue) {
        var result = this.callControlMethod('getExtras', false, false, name, defaultValue);
        if (result.done) {
            return result.returnValue;
        }
        return defaultValue;
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.setExtra = function (name, value) {
        this.callControlMethod('setExtra', false, false, name, value);
    };
    /**
     * Set the validator to use to validate the value of the component.
     */
    FormControlProxy.prototype.setValidator = function (validator) {
        this.callControlMethod('setValidator', true, true, validator);
    };
    /**
     * The a fallback form to use to resolve controls paths if none is defined by the prop.
     */
    FormControlProxy.prototype.setFallbackForm = function (form) {
        this.fallbackForm = form;
        if (!this._control) {
            this.updateFormAndControl();
        }
    };
    /**
     * The a fallback form to use to resolve controls paths if none is defined by the prop.
     */
    FormControlProxy.prototype.setFallbackGetControl = function (fallback) {
        this.fallbackGetControl = fallback;
        if (!this._control) {
            this.updateFormAndControl();
        }
    };
    /**
     * This method guarantees that a FormControl is returned.
     * If no control has been resolved yet, an internal control is created and associated with the proxy.
     */
    FormControlProxy.prototype.getControl = function () {
        if (this._control) {
            return this._control;
        }
        this._control = new FormControl();
        this.isInternalControl = true;
        this.onControlAssigned(this._control);
        return this._control;
    };
    /**
     * Force the proxy to use a specific control.
     */
    FormControlProxy.prototype.setControl = function (control) {
        if (this._control) {
            if (control.id === this._control.id) {
                return;
            }
            this.onControlUnassigned();
        }
        this._control = control;
        this.isInternalControl = true;
        this.onControlAssigned(this._control);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.onBeforeValueChange = function (callback, priority) {
        return this.subscribeToControl('onBeforeValueChange', callback, priority);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.onStateChanged = function (callback, priority) {
        return this.subscribeToControl('onStateChanged', callback, priority);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.onValueChanged = function (callback, priority) {
        return this.subscribeToControl('onValueChanged', callback, priority);
    };
    /**
     * @inheritDoc
     */
    FormControlProxy.prototype.onErrorsChanged = function (callback, priority) {
        return this.subscribeToControl('onErrorsChanged', callback, priority);
    };
    /**
     * Called when the control is real and ready to be used.
     */
    FormControlProxy.prototype.onReady = function (cb) {
        var _this = this;
        if (this.bridge) {
            // If the control is already defined, just execute the callback and let the rest be.
            cb(this);
        }
        this.onReadySubscribers.push(cb);
        return function () {
            _this.onReadySubscribers = _this.onReadySubscribers.filter(function (subscriber) { return subscriber !== cb; });
        };
    };
    /**
     * Called when the real control behind the proxy is detached.
     */
    FormControlProxy.prototype.onDetach = function (cb) {
        var _this = this;
        this.onDetachSubscribers.push(cb);
        return function () {
            _this.onDetachSubscribers = _this.onDetachSubscribers.filter(function (subscriber) { return subscriber !== cb; });
        };
    };
    /**
     * Update the local `_form` and `_control` variables to reflect the props values.
     */
    FormControlProxy.prototype.updateFormAndControl = function () {
        if (this.isInternalControl) {
            return;
        }
        this._form = this.resolveForm();
        var newControl = this.resolveControl(this._form);
        if (newControl !== this._control) {
            if (this._control && (!newControl || newControl.id !== this._control.id)) {
                this.onControlUnassigned();
            }
            this._control = newControl;
            if (this._control) {
                this.onControlAssigned(this._control);
            }
        }
        if (!this._control && this._form && !this.controlAddedUnsubscribe) {
            this.controlAddedUnsubscribe = this._form.onControlAdded(proxy(this.updateFormAndControl, this));
        }
        else if (this._control && this.controlAddedUnsubscribe) {
            this.controlAddedUnsubscribe();
            this.controlAddedUnsubscribe = null;
        }
    };
    /**
     * Try to call a method on the control or queue the call if no control is available yet.
     * The queue will automatically be flushed when the control becomes available.
     */
    FormControlProxy.prototype.callControlMethod = function (method, replayable, skippable) {
        var arguments$1 = arguments;

        if (replayable === void 0) { replayable = true; }
        if (skippable === void 0) { skippable = false; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments$1[_i];
        }
        var call = {
            method: method,
            args: args,
            done: false,
            returnValue: undefined,
            skippable: skippable
        };
        if (this.bridge) {
            call.returnValue = this.bridge[method].apply(this.bridge, args);
            call.done = true;
        }
        else if (replayable) {
            this.methodsQueue.push(call);
        }
        return call;
    };
    /**
     * Generic method to subscribe to an event on a possibly not existing control.
     */
    FormControlProxy.prototype.subscribeToControl = function (methodName, callback, priority) {
        var _this = this;
        var call = this.callControlMethod(methodName, true, false, callback, priority);
        return function () {
            if (call.done && isFunction(call.returnValue)) {
                call.returnValue();
            }
            else if (!call.done) {
                for (var i = 0; i < _this.methodsQueue.length; ++i) {
                    if (_this.methodsQueue[i] === call) {
                        _this.methodsQueue.splice(i, 1);
                        break;
                    }
                }
            }
        };
    };
    /**
     * Execute all control methods in the queue and clear the queue.
     */
    FormControlProxy.prototype.flushControlMethodsQueue = function (bridge, control) {
        // Purge skippable methods
        var found = [];
        for (var i = this.methodsQueue.length - 1; i >= 0; i--) {
            if (this.methodsQueue[i].skippable) {
                if (found.indexOf(this.methodsQueue[i].method) > -1) {
                    this.methodsQueue.splice(i, 1);
                    continue;
                }
                found.push(this.methodsQueue[i].method);
            }
        }
        for (var _i = 0, _a = this.methodsQueue; _i < _a.length; _i++) {
            var call = _a[_i];
            call.returnValue = bridge[call.method].apply(control, call.args);
            call.done = true;
        }
        this.methodsQueue = [];
    };
    /**
     * Try to get a reference on the form control.
     */
    FormControlProxy.prototype.resolveControl = function (form) {
        if (!this.control) {
            return null;
        }
        if (this.control instanceof FormControl) {
            return this.control;
        }
        if (!isString(this.control) || form === null) {
            return null;
        }
        var controlPath = this.control;
        var pathStartIdx = controlPath.indexOf(':');
        if (pathStartIdx > -1) {
            controlPath = controlPath.substring(pathStartIdx + 1);
        }
        try {
            var resolvedControl = form.getByPath(controlPath);
            if (!(resolvedControl instanceof FormControl)) {
                throw new UsageException("The control path \"".concat(controlPath, "\" doesn't resolve to a FormControl."));
            }
            return resolvedControl;
        }
        catch (e) {
            if (e instanceof ComponentNotFoundException) {
                if (this.fallbackGetControl !== null) {
                    var control = this.fallbackGetControl(controlPath);
                    if (control instanceof FormControl) {
                        return control;
                    }
                }
                return null;
            }
            throw e;
        }
    };
    /**
     * Try to get a reference on the form.
     */
    FormControlProxy.prototype.resolveForm = function () {
        if (isObject(this.form)) {
            return this.form;
        }
        var formName = isString(this.form) ? this.form : null;
        if (formName === null && isString(this.control) && (this.control.indexOf(':') > -1)) {
            formName = this.control.substring(0, this.control.indexOf(':'));
        }
        if (formName !== null && (!this._formRef || this._formRef.name !== formName)) {
            var resolvedRef = this.formStorage.getRef(formName);
            this._formRef = resolvedRef !== null ? { name: formName, ref: resolvedRef } : resolvedRef;
        }
        if (this._formRef) {
            return this._formRef.ref.obj;
        }
        return this.form === null ? this.fallbackForm : null;
    };
    /**
     * Shortcut to fetch a value from the form control with a default if not available.
     */
    FormControlProxy.prototype.getFromControl = function (propName, defaultValue) {
        if (this.bridge) {
            return this.bridge[propName];
        }
        return defaultValue;
    };
    /**
     * Called when a new control instance is assigned to the proxy.
     */
    FormControlProxy.prototype.onControlAssigned = function (control) {
        if (!this.viewModel) {
            return;
        }
        this.bridge = control.setViewModel(this.viewModel);
        this.flushControlMethodsQueue(this.bridge, control);
        for (var _i = 0, _a = this.onReadySubscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber(this);
        }
    };
    /**
     * Called when the control instance is unassigned from the proxy.
     */
    FormControlProxy.prototype.onControlUnassigned = function () {
        if (this.bridge && this.viewModel) {
            this.bridge.unsetViewModel(this.viewModel);
        }
        this.bridge = null;
        for (var _i = 0, _a = this.onDetachSubscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber();
        }
    };
    var FormControlProxy_1;
    __decorate([
        Prop({ type: [String, Object], default: null }),
        __metadata("design:type", Object)
    ], FormControlProxy.prototype, "form", void 0);
    __decorate([
        Prop({ type: [String, Object], default: null }),
        __metadata("design:type", Object)
    ], FormControlProxy.prototype, "control", void 0);
    __decorate([
        Computed(false),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "id", null);
    __decorate([
        Computed(false),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "formId", null);
    __decorate([
        Computed(false),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "path", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "valid", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "invalid", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "notValidated", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "validated", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "validating", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "notValidating", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "validatedAndValid", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "busy", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "notBusy", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "disabled", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "enabled", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "dirty", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "pristine", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "touched", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "untouched", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "changed", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "unchanged", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "focused", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "unfocused", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "errors", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "ready", null);
    __decorate([
        Computed(false),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FormControlProxy.prototype, "focusedViewModel", null);
    __decorate([
        Lifecycle('unmounted'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormControlProxy.prototype, "onComponentUnmounted", null);
    __decorate([
        Watch(['form', 'control'], { immediate: ImmediateStrategy.NextTick }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormControlProxy.prototype, "updateFormAndControl", null);
    FormControlProxy = FormControlProxy_1 = __decorate([
        Module(),
        Composable(function () { return Injector.Get(FormControlProxy_1); }),
        __param(0, Inject(FormStorageService)),
        __metadata("design:paramtypes", [FormStorageService])
    ], FormControlProxy);
    return FormControlProxy;
}());

export { FormControlProxy };
