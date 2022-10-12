/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var eventPipeline = require('@banquette/event/_cjs/dev/pipeline/event-pipeline');
var constant$1 = require('@banquette/form/_cjs/dev/constant');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var import_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/import.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
var constant = require('./constant.js');
require('./form/form.component.vue.js');
var formControl_proxy = require('./form-control.proxy.js');
var form_component_vue_vue_type_script_lang = require('./form/form.component.vue_vue_type_script_lang.vue.js');

var AbstractVueFormComponent = /** @class */ (function (_super) {
    _tslib.__extends(AbstractVueFormComponent, _super);
    function AbstractVueFormComponent() {
        var _this = _super.call(this) || this;
        /**
         * To easily manage the asynchronous initialization steps specific to Vue.
         */
        _this.eventPipeline = new eventPipeline.EventPipeline();
        _this.unsubscribeCallbacks = [];
        _this.controlUnsubscribeCallbacks = [];
        _this.eventPipeline.add([
            constant.ViewModelEvents.Configure,
            constant.ViewModelEvents.Initialize,
            constant.ViewModelEvents.Ready ], constant.ViewModelSequence.Initialize);
        // Configure step
        _this.eventPipeline.subscribe(constant.ViewModelEvents.Configure, proxy.proxy(_this.configureViewModel, _this));
        _this.eventPipeline.subscribe(constant.ViewModelEvents.Configure, proxy.proxy(_this.configureProxy, _this));
        // Initialize step
        _this.eventPipeline.subscribe(constant.ViewModelEvents.Initialize, proxy.proxy(_this.initializeProxy, _this));
        return _this;
    }
    AbstractVueFormComponent_1 = AbstractVueFormComponent;
    /**
     * Vue lifecycle hook.
     */
    AbstractVueFormComponent.prototype.beforeMount = function () {
        var result = this.eventPipeline.start(constant.ViewModelSequence.Initialize);
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
        if (parentFormGeneric !== null && parentFormGeneric instanceof form_component_vue_vue_type_script_lang) {
            this.proxy.setFallbackForm(parentFormGeneric.vm.form);
            this.proxy.setFallbackGetControl(proxy.proxy(parentFormGeneric.vm.getControl, parentFormGeneric.vm));
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
        if (newValue !== constant.UndefinedValue) {
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
        this.v.control.focus = proxy.proxy(this.focus, this);
        this.v.control.blur = proxy.proxy(this.blur, this);
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
            focus: proxy.proxy(this.focus, this),
            blur: proxy.proxy(this.blur, this),
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
                _this.proxy.setDefaultValue(_this.vm.viewValueToControlValue(_this.vm.controlValueToViewValue(isUndefined.isUndefined(_this.originalDOMValue) || _this.proxy.value ? _this.proxy.value : _this.originalDOMValue)));
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
            if (event.state === constant$1.BasicState.Focused && event.newValue) {
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
    _tslib.__decorate([
        prop_decorator.Prop({ default: constant.UndefinedValue }),
        _tslib.__metadata("design:type", Object)
    ], AbstractVueFormComponent.prototype, "modelValue", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'value', default: undefined }),
        _tslib.__metadata("design:type", Object)
    ], AbstractVueFormComponent.prototype, "originalDOMValue", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], AbstractVueFormComponent.prototype, "disabled", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], AbstractVueFormComponent.prototype, "busy", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Number, default: 0 }),
        _tslib.__metadata("design:type", Number)
    ], AbstractVueFormComponent.prototype, "tabindex", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], AbstractVueFormComponent.prototype, "autofocus", void 0);
    _tslib.__decorate([
        import_decorator.Import(formControl_proxy.FormControlProxy, false),
        _tslib.__metadata("design:type", formControl_proxy.FormControlProxy)
    ], AbstractVueFormComponent.prototype, "proxy", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], AbstractVueFormComponent.prototype, "v", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [String]),
        _tslib.__metadata("design:returntype", Boolean)
    ], AbstractVueFormComponent.prototype, "hasSlot", null);
    _tslib.__decorate([
        watch_decorator.Watch(['tabindex', 'disabled', 'busy'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], AbstractVueFormComponent.prototype, "onControlPropsChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('v.control.focused', { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Boolean]),
        _tslib.__metadata("design:returntype", void 0)
    ], AbstractVueFormComponent.prototype, "onFocusChanged", null);
    _tslib.__decorate([
        watch_decorator.Watch('v.control.value', { immediate: false }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], AbstractVueFormComponent.prototype, "onValueChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('modelValue', { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], AbstractVueFormComponent.prototype, "onModelValueChange", null);
    AbstractVueFormComponent = AbstractVueFormComponent_1 = _tslib.__decorate([
        component_decorator.Component({
            emits: ['change', 'focus', 'blur', 'update:modelValue']
        }),
        _tslib.__metadata("design:paramtypes", [])
    ], AbstractVueFormComponent);
    return AbstractVueFormComponent;
}(vue.Vue));

exports.AbstractVueFormComponent = AbstractVueFormComponent;
