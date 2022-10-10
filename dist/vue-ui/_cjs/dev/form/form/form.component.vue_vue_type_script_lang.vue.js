/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var constant = require('@banquette/form/_cjs/dev/constant');
var constants = require('@banquette/http/_cjs/dev/constants');
var formData_encoder = require('@banquette/http/_cjs/dev/encoder/form-data.encoder');
var json_encoder = require('@banquette/http/_cjs/dev/encoder/json.encoder');
var raw_encoder = require('@banquette/http/_cjs/dev/encoder/raw.encoder');
var afterRemotePersist_eventArg = require('@banquette/ui/_cjs/dev/form/form/event/after-remote-persist.event-arg');
var headlessFormView_model = require('@banquette/ui/_cjs/dev/form/form/headless-form-view.model');
var ensureInEnum = require('@banquette/utils-array/_cjs/dev/ensure-in-enum');
var areEqual = require('@banquette/utils-misc/_cjs/dev/are-equal');
var makeReassignable = require('@banquette/utils-misc/_cjs/dev/make-reassignable');
var oncePerCycleProxy = require('@banquette/utils-misc/_cjs/dev/once-per-cycle-proxy');
var ensureString = require('@banquette/utils-type/_cjs/dev/ensure-string');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');

var FormComponent = /** @class */ (function (_super) {
    _tslib.__extends(FormComponent, _super);
    function FormComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.unsubscribeFunctions = [];
        /**
         * Force the update of the view, once per cycle.
         */
        _this.forceUpdateOnce = oncePerCycleProxy.oncePerCycleProxy(function () {
            _this.forceUpdate();
        });
        _this.syncLoadConfigurationProps = (function () {
            var firstCall = true;
            return function () {
                _this.vm.modelType = _this.modelType;
                _this.vm.loadRemote.updateConfiguration({
                    model: _this.modelType,
                    url: _this.loadUrl,
                    endpoint: _this.loadEndpoint,
                    urlParams: _this.loadUrlParams,
                    headers: _this.loadHeaders
                });
                if (firstCall) {
                    firstCall = false;
                    _this.vm.load();
                }
            };
        })();
        return _this;
    }
    Object.defineProperty(FormComponent.prototype, "visible", {
        /**
         * Test if the default slot should be rendered (the slot containing the form).
         */
        get: function () {
            if (!this.v) {
                return false;
            }
            return (!this.v.loading || !this.hasSlot('loading')) &&
                (!this.v.persisting || !this.hasSlot('persisting')) &&
                (!this.v.loadError || !this.hasSlot('load-error')) &&
                (!this.v.persistError || !this.hasSlot('persist-error')) &&
                (!this.v.persistSuccess || !this.hasSlot('persist-success'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "isDisabled", {
        get: function () {
            return this.disabled;
        },
        set: function (value) {
            this.$emit('update:disabled', value);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Vue lifecycle.
     */
    FormComponent.prototype.beforeMount = function () {
        var _this = this;
        this.vm = new headlessFormView_model.HeadlessFormViewModel();
        this.vm.viewData.persistResponse = null;
        this.vm.loadData = this.modelValue;
        this.v = this.vm.viewData;
        // So the proxy is used by the headless view model.
        this.vm.setViewData(this.v);
        // Form events
        this.unsubscribeFunctions.push(this.vm.form.onControlAdded(this.forceUpdateOnce, 0, false));
        this.unsubscribeFunctions.push(this.vm.form.onControlRemoved(this.forceUpdateOnce, 0, false));
        this.unsubscribeFunctions.push(this.vm.form.onValueChanged(function (event) {
            _this.$emit('change', event);
            _this.$emit('update:modelValue', _this.modelType ? _this.vm.modelInstance : event.newValue);
            _this.forceUpdateOnce();
        }));
        this.unsubscribeFunctions.push(this.vm.form.onStateChanged(function (event) {
            if (event.state === constant.ContextualizedState.Disabled) {
                _this.$emit('update:disabled', event.newValue);
            }
        }));
        // Subclasses events
        this.unsubscribeFunctions.push(this.vm.onBeforeLoad(function (event) {
            _this.$emit('before-load', event);
            _this.onBeforeLoad(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onLoadSuccess(function (event) {
            _this.$emit('load-success', event);
            _this.onLoadSuccess(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onLoadError(function (event) {
            _this.$emit('load-error', event);
            _this.onLoadError(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onBeforePersist(function (event) {
            _this.$emit('before-persist', event);
            _this.onBeforePersist(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onPersistSuccess(function (event) {
            _this.vm.viewData.persistResponse = event instanceof afterRemotePersist_eventArg.AfterRemotePersistEventArg ? event.response : null;
            _this.$emit('persist-success', event);
            _this.onPersistSuccess(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onPersistError(function (event) {
            _this.$emit('persist-error', event);
            _this.onPersistError(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onBeforeValidate(function (event) {
            _this.$emit('before-validate', event);
            _this.onBeforeValidate(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onAfterValidate(function (event) {
            _this.$emit('after-validate', event);
            _this.onAfterValidate(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onBeforeBindModel(function (event) {
            _this.$emit('before-bind-model', event);
            _this.onBeforeBindModel(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onAfterBindModel(function (event) {
            _this.$emit('after-bind-model', event);
            // It's important to assign the model here, because the binder creates a proxy
            // and we want the changes performed through the viewData object to be detected.
            _this.v.model = event.model;
            // Reassign the model to the proxified one, so any change made by the binder will trigger a Vue update.
            makeReassignable.reassign(event.model, _this.v.model);
            _this.onAfterBindModel(event);
        }));
    };
    /**
     * Vue lifecycle.
     */
    FormComponent.prototype.beforeUnmount = function () {
        for (var _i = 0, _a = this.unsubscribeFunctions; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        this.unsubscribeFunctions = [];
    };
    FormComponent.prototype.submit = function () {
        this.vm.submit();
    };
    /**
     * Virtual functions that are bound to events of the form.
     * These are meant to be overridden by subclasses.
     */
    /* virtual */ FormComponent.prototype.onBeforeLoad = function (event) { };
    /* virtual */ FormComponent.prototype.onLoadSuccess = function (event) { };
    /* virtual */ FormComponent.prototype.onLoadError = function (event) { };
    /* virtual */ FormComponent.prototype.onBeforePersist = function (event) { };
    /* virtual */ FormComponent.prototype.onPersistSuccess = function (event) { };
    /* virtual */ FormComponent.prototype.onPersistError = function (event) { };
    /* virtual */ FormComponent.prototype.onBeforeValidate = function (event) { };
    /* virtual */ FormComponent.prototype.onAfterValidate = function (event) { };
    /* virtual */ FormComponent.prototype.onBeforeBindModel = function (event) { };
    /* virtual */ FormComponent.prototype.onAfterBindModel = function (event) { };
    /**
     * Force the update of the view.
     */
    FormComponent.prototype.forceUpdate = function () {
        this.$forceUpdate();
    };
    FormComponent.prototype.onDisableChange = function (newValue) {
        if (newValue) {
            this.vm.form.disable();
        }
        else {
            this.vm.form.enable();
        }
    };
    FormComponent.prototype.onValidationGroupChange = function (newValue) {
        this.vm.form.setValidationGroups(newValue);
    };
    FormComponent.prototype.onModelValueChange = function (newValue) {
        if (areEqual.areEqual(this.vm.form.value, newValue)) {
            return;
        }
        this.vm.form.setValue(newValue);
    };
    FormComponent.prototype.syncPersistConfigurationProps = function () {
        this.vm.modelType = this.modelType;
        this.vm.persistRemote.updateConfiguration({
            model: this.modelType,
            url: this.persistUrl,
            method: this.persistMethod,
            endpoint: this.persistEndpoint,
            urlParams: this.persistUrlParams,
            headers: this.persistHeaders,
            payloadType: this.persistPayloadType
        });
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "modelValue", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'model', type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "modelType", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], FormComponent.prototype, "disabled", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "loadUrl", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "loadEndpoint", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "loadUrlParams", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "loadHeaders", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "persistUrl", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, transform: function (value) { return ensureInEnum.ensureInEnum(ensureString.ensureString(value).toUpperCase(), constants.HttpMethod, constants.HttpMethod.POST); } }),
        _tslib.__metadata("design:type", String)
    ], FormComponent.prototype, "persistMethod", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "persistEndpoint", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "persistUrlParams", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "persistHeaders", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, transform: function (input) {
                if (input === 'form-data') {
                    return formData_encoder.PayloadTypeFormData;
                }
                else if (input === 'raw') {
                    return raw_encoder.PayloadTypeRaw;
                }
                return json_encoder.PayloadTypeJson;
            } }),
        _tslib.__metadata("design:type", typeof Symbol === "function" ? Symbol : Object)
    ], FormComponent.prototype, "persistPayloadType", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], FormComponent.prototype, "submitWithEnter", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Array], default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "validationGroup", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], FormComponent.prototype, "visible", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [Boolean])
    ], FormComponent.prototype, "isDisabled", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "v", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormComponent.prototype, "submit", null);
    _tslib.__decorate([
        watch_decorator.Watch('disabled', { immediate: false }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Boolean]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormComponent.prototype, "onDisableChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('validationGroup', { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormComponent.prototype, "onValidationGroupChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('modelValue', { immediate: false, deep: true }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormComponent.prototype, "onModelValueChange", null);
    _tslib.__decorate([
        watch_decorator.Watch(['modelType', 'loadUrl', 'loadEndpoint', 'loadUrlParams', 'loadHeaders'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Object)
    ], FormComponent.prototype, "syncLoadConfigurationProps", void 0);
    _tslib.__decorate([
        watch_decorator.Watch(['modelType', 'persistUrl', 'persistEndpoint', 'persistUrlParams', 'persistHeaders', 'persistPayloadType'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormComponent.prototype, "syncPersistConfigurationProps", null);
    FormComponent = _tslib.__decorate([
        component_decorator.Component({
            name: 'bt-form',
            emits: [
                'change',
                'before-load',
                'load-success',
                'load-error',
                'before-persist',
                'persist-success',
                'persist-error',
                'before-validate',
                'after-validate',
                'before-bind-model',
                'after-bind-model',
                'update:modelValue',
                'update:disabled'
            ]
        })
    ], FormComponent);
    return FormComponent;
}(vue.Vue));

module.exports = FormComponent;
