/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { EventPipeline } from '@banquette/event/pipeline/event-pipeline';
import { BasicState } from '@banquette/form/constant';
import { proxy } from '@banquette/utils-misc/proxy';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Import } from '@banquette/vue-typescript/decorator/import.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { Vue } from '@banquette/vue-typescript/vue';
import { ViewModelSequence, UndefinedValue, ViewModelEvents } from './constant.js';
import './form/form.component.vue.js';
import { FormControlProxy } from './form-control.proxy.js';
import FormComponent from './form/form.component.vue_vue_type_script_lang.vue.js';

var AbstractVueFormComponent = /** @class */ (function (_super) {
    __extends(AbstractVueFormComponent, _super);
    function AbstractVueFormComponent() {
        var _this = _super.call(this) || this;
        /**
         * To easily manage the asynchronous initialization steps specific to Vue.
         */
        _this.eventPipeline = new EventPipeline();
        _this.unsubscribeCallbacks = [];
        _this.controlUnsubscribeCallbacks = [];
        _this.eventPipeline.add([
            ViewModelEvents.Configure,
            ViewModelEvents.Initialize,
            ViewModelEvents.Ready ], ViewModelSequence.Initialize);
        // Configure step
        _this.eventPipeline.subscribe(ViewModelEvents.Configure, proxy(_this.configureViewModel, _this));
        _this.eventPipeline.subscribe(ViewModelEvents.Configure, proxy(_this.configureProxy, _this));
        // Initialize step
        _this.eventPipeline.subscribe(ViewModelEvents.Initialize, proxy(_this.initializeProxy, _this));
        return _this;
    }
    AbstractVueFormComponent_1 = AbstractVueFormComponent;
    /**
     * Vue lifecycle hook.
     */
    AbstractVueFormComponent.prototype.beforeMount = function () {
        var result = this.eventPipeline.start(ViewModelSequence.Initialize);
        if (result.promise) {
            result.promise.catch(function () {
                console.error(result.errorDetail);
            });
        }
        else if (result.error) {
            console.error(result.errorDetail);
        }
    };
    /**
     * Vue lifecycle hook.
     */
    AbstractVueFormComponent.prototype.mounted = function () {
        if (this.autofocus) {
            this.forceFocus();
        }
        // Special shortcut if in bt-form-generic.
        var parentFormGeneric = this.getParent('bt-form');
        if (parentFormGeneric !== null && parentFormGeneric instanceof FormComponent) {
            this.proxy.setFallbackForm(parentFormGeneric.vm.form);
            this.proxy.setFallbackGetControl(proxy(parentFormGeneric.vm.getControl, parentFormGeneric.vm));
        }
    };
    /**
     * Vue lifecycle hook.
     */
    AbstractVueFormComponent.prototype.beforeUnmount = function () {
        this.vm.dispose();
        this.eventPipeline.dispose();
        for (var _i = 0, _a = this.unsubscribeCallbacks; _i < _a.length; _i++) {
            var cb = _a[_i];
            cb();
        }
        for (var _b = 0, _c = this.controlUnsubscribeCallbacks; _b < _c.length; _b++) {
            var cb = _c[_b];
            cb();
        }
        this.unsubscribeCallbacks = [];
        this.controlUnsubscribeCallbacks = [];
        this.proxy.unsetViewModel();
        this.vm = undefined;
    };
    /**
     * Test if a slot is defined and not empty.
     */
    AbstractVueFormComponent.prototype.hasSlot = function (name) {
        return _super.prototype.hasSlot.call(this, name);
    };
    /**
     * Alias of `this.v.control.value = [..]`.
     * Set the current view value.
     */
    AbstractVueFormComponent.prototype.setValue = function (value) {
        this.v.control.value = value;
    };
    /**
     * Actions to take place when the control ask for focus.
     */
    /* virtual */ AbstractVueFormComponent.prototype.focus = function () {
        this.vm.control.onFocus();
    };
    /**
     * Actions to take place when the control ask to lose focus.
     */
    /* virtual */ AbstractVueFormComponent.prototype.blur = function () {
        this.vm.control.onBlur();
    };
    /**
     * Copy applicable props into the view data.
     */
    AbstractVueFormComponent.prototype.onControlPropsChange = function () {
        this.v.control.tabIndex = this.tabindex;
        this.v.control.disabled = this.disabled;
        this.v.control.busy = this.busy;
    };
    /**
     * Track focus changes to emit the corresponding events.
     */
    AbstractVueFormComponent.prototype.onFocusChanged = function (newValue) {
        this.$emit(newValue ? 'focus' : 'blur');
    };
    /**
     * Track when the view value changes and emit and "change" event.
     */
    AbstractVueFormComponent.prototype.onValueChange = function (newValue) {
        this.$emit('change', newValue);
    };
    /**
     * Watch the `v-model` value.
     */
    AbstractVueFormComponent.prototype.onModelValueChange = function (newValue) {
        if (newValue !== UndefinedValue) {
            // Calling `getControl` ensures that a control is returned.
            // If no control has been assigned to the proxy, it will create one.
            // Then we call `setValue` on the control directly, not its view model,
            // because `v-model` is a model value, not a view value.
            this.proxy.getControl().setValue(newValue);
        }
    };
    /**
     * Set the `vm` and `v` attributes.
     */
    AbstractVueFormComponent.prototype.configureViewModel = function () {
        this.vm = this.setupViewModel();
        // Assign the view data object created by the view model to the `v` variable, exposed to Vue.
        // Vue will return a proxy of this object, through which changes are tracked.
        this.v = this.vm.viewData;
        // This object is then reassigned to the view model, making its changes to `viewData` reactive.
        this.vm.setViewData(this.v);
        // Reassign the focus() and blur() so the concrete component can be called.
        this.v.control.focus = proxy(this.focus, this);
        this.v.control.blur = proxy(this.blur, this);
        this.vm.initialize();
    };
    /**
     * Assign itself to the control proxy.
     */
    AbstractVueFormComponent.prototype.configureProxy = function () {
        var _this = this;
        this.proxy.setViewModel({
            id: ++AbstractVueFormComponent_1.MaxId,
            setValue: function (controlValue) {
                _this.vm.control.updateValueFromControl(controlValue);
            },
            unsetControl: function () {
                _this.proxy.unsetViewModel();
            },
            focus: proxy(this.focus, this),
            blur: proxy(this.blur, this),
        });
    };
    /**
     * Wait for the control to be assigned and reset it.
     */
    AbstractVueFormComponent.prototype.initializeProxy = function () {
        var _this = this;
        var called = false;
        var promiseResolve = null;
        // Will fire immediately if the control is available, and/or each time it changes.
        this.unsubscribeCallbacks.push(this.proxy.onReady(function () {
            if (_this.proxy.pristine) {
                /**
                 * Ensure the original value of the control matches what the view would have set.
                 *
                 * For example if the view model only outputs strings but the original value in the FormControl is "undefined",
                 * the line below will ensure the FormControl is updated with an empty string.
                 */
                _this.proxy.setDefaultValue(_this.vm.viewValueToControlValue(_this.vm.controlValueToViewValue(isUndefined(_this.originalDOMValue) || _this.proxy.value ? _this.proxy.value : _this.originalDOMValue)));
                // Reset the control to set the default value as current value.
                // It also makes sense to reset the control as a whole because setting the view model is in itself a reset.
                _this.proxy.reset();
            }
            _this.assignControl(_this.proxy);
            if (promiseResolve !== null) {
                promiseResolve();
            }
            called = true;
        }));
        // Only create a promise if necessary.
        if (!called) {
            return new Promise(function (resolve) { return promiseResolve = resolve; });
        }
    };
    AbstractVueFormComponent.prototype.assignControl = function (control) {
        var _this = this;
        for (var _i = 0, _a = this.controlUnsubscribeCallbacks; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        this.controlUnsubscribeCallbacks = [];
        this.vm.setControl(control);
        // Special case for the focus to handle the case where there are multiple view models
        // associated with the control.
        this.controlUnsubscribeCallbacks.push(control.onStateChanged(function (event) {
            if (event.state === BasicState.Focused && event.newValue) {
                // In case the focus is gained, wait for the next tick to give time to the proxy
                // to update, then override the `focused` attribute to the one of the proxy.
                // The one is the proxy will only return `true` if its view model is the one that is focused.
                _this.$nextTick(function () {
                    _this.vm.control.mutateInternalViewData(function () {
                        _this.vm.control.viewData.focused = _this.proxy.focused;
                    });
                });
            }
        }, -1));
        this.controlUnsubscribeCallbacks.push(control.onValueChanged(function (event) {
            _this.$emit('update:modelValue', event.newValue);
        }));
        if (this.autofocus) {
            this.forceFocus();
        }
    };
    /**
     * Try to give focus to the field aggressively by calling focus
     * multiple time in a short amount of time.
     */
    AbstractVueFormComponent.prototype.forceFocus = function () {
        var _this = this;
        var startTime = (new Date()).getTime();
        var elapsedTime = 0;
        var tryToFocus = function () {
            if (!_this.v.control.focused) {
                _this.focus();
            }
            setTimeout(function () {
                elapsedTime += (new Date()).getTime() - startTime;
                if (elapsedTime < 500) {
                    tryToFocus();
                }
            }, 50);
        };
        tryToFocus();
    };
    var AbstractVueFormComponent_1;
    AbstractVueFormComponent.MaxId = 0;
    __decorate([
        Prop({ default: UndefinedValue }),
        __metadata("design:type", Object)
    ], AbstractVueFormComponent.prototype, "modelValue", void 0);
    __decorate([
        Prop({ name: 'value', default: undefined }),
        __metadata("design:type", Object)
    ], AbstractVueFormComponent.prototype, "originalDOMValue", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], AbstractVueFormComponent.prototype, "disabled", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], AbstractVueFormComponent.prototype, "busy", void 0);
    __decorate([
        Prop({ type: Number, default: 0 }),
        __metadata("design:type", Number)
    ], AbstractVueFormComponent.prototype, "tabindex", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], AbstractVueFormComponent.prototype, "autofocus", void 0);
    __decorate([
        Import(FormControlProxy, false),
        __metadata("design:type", FormControlProxy)
    ], AbstractVueFormComponent.prototype, "proxy", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], AbstractVueFormComponent.prototype, "v", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Boolean)
    ], AbstractVueFormComponent.prototype, "hasSlot", null);
    __decorate([
        Watch(['tabindex', 'disabled', 'busy'], { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AbstractVueFormComponent.prototype, "onControlPropsChange", null);
    __decorate([
        Watch('v.control.focused', { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], AbstractVueFormComponent.prototype, "onFocusChanged", null);
    __decorate([
        Watch('v.control.value', { immediate: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AbstractVueFormComponent.prototype, "onValueChange", null);
    __decorate([
        Watch('modelValue', { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AbstractVueFormComponent.prototype, "onModelValueChange", null);
    AbstractVueFormComponent = AbstractVueFormComponent_1 = __decorate([
        Component({
            emits: ['change', 'focus', 'blur', 'update:modelValue']
        }),
        __metadata("design:paramtypes", [])
    ], AbstractVueFormComponent);
    return AbstractVueFormComponent;
}(Vue));

export { AbstractVueFormComponent };
