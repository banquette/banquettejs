/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var import_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/import.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var templateRef_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/template-ref.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var abstractVueForm_component = require('../abstract-vue-form.component.js');
require('../base-input/base-input.component.vue.js');
var baseInput_composable = require('../base-input/base-input.composable.js');
var constant = require('../constant.js');
var checkbox_viewModel = require('./checkbox.view-model.js');
var themeConfiguration = require('./theme-configuration.js');
var baseInput_component_vue_vue_type_script_lang = require('../base-input/base-input.component.vue_vue_type_script_lang.vue.js');

var FormCheckboxComponent = /** @class */ (function (_super) {
    _tslib.__extends(FormCheckboxComponent, _super);
    function FormCheckboxComponent() {
        var _this = _super.call(this) || this;
        _this.unsubscribeMethods = [];
        _this.eventPipeline.subscribe(constant.ViewModelEvents.Ready, function () {
            _this.unsubscribeMethods.push(_this.proxy.onReady(function () {
                _this.vm.group = _this.group;
            }));
            _this.unsubscribeMethods.push(_this.proxy.onDetach(function () {
                _this.vm.removeGroup();
            }));
            if (_this.checked) {
                _this.vm.check();
            }
            if (_this.indeterminate) {
                _this.vm.indeterminate = true;
            }
        });
        return _this;
    }
    FormCheckboxComponent_1 = FormCheckboxComponent;
    Object.defineProperty(FormCheckboxComponent.prototype, "hasDefaultSlot", {
        get: function () {
            return this.hasNonEmptySlot('default');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormCheckboxComponent.prototype, "hasLabelSlot", {
        get: function () {
            return this.hasNonEmptySlot('label');
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    FormCheckboxComponent.prototype.beforeUnmount = function () {
        _super.prototype.beforeUnmount.call(this);
        for (var _i = 0, _a = this.unsubscribeMethods; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
    };
    FormCheckboxComponent.prototype.onKeyDown = function (event) {
        this.vm.onKeyDown(event);
    };
    FormCheckboxComponent.prototype.toggle = function () {
        if (!this.disabled) {
            this.vm.toggle();
        }
    };
    /**
     * @inheritDoc
     */
    FormCheckboxComponent.prototype.setupViewModel = function () {
        return new checkbox_viewModel.CheckboxViewModel(this.proxy, this.base);
    };
    /**
     * @inheritDoc
     */
    FormCheckboxComponent.prototype.onModelValueChange = function (newValue) {
        if (newValue === constant.UndefinedValue) {
            return;
        }
        var control;
        if (isObject.isObject(newValue)) {
            if (!FormCheckboxComponent_1.ModelValuesMap.has(newValue)) {
                FormCheckboxComponent_1.ModelValuesMap.set(newValue, this.proxy.getControl());
            }
            control = FormCheckboxComponent_1.ModelValuesMap.get(newValue);
        }
        else {
            control = this.proxy.getControl();
        }
        this.proxy.setControl(control);
        control.setValue(newValue);
    };
    /**
     * Copy applicable props into the view data.
     */
    FormCheckboxComponent.prototype.syncConfigurationProps = function () {
        this.v.label = this.label;
        this.vm.checkedValue = this.checkedValue;
        this.vm.uncheckedValue = this.uncheckedValue;
        this.vm.uncheckable = this.uncheckable;
    };
    FormCheckboxComponent.prototype.onCheckedChange = function (newValue) {
        if (newValue) {
            this.vm.check();
        }
        else if (newValue === false) {
            this.vm.uncheck();
        }
    };
    FormCheckboxComponent.prototype.onGroupChange = function (newValue) {
        // Only set the group if a control has been assigned.
        // Otherwise we can ignore because a callback is already registered to the `onReady` event of the proxy.
        if (this.proxy.ready) {
            this.vm.group = newValue;
        }
    };
    FormCheckboxComponent.prototype.onIndeterminateChange = function (newValue) {
        this.vm.indeterminate = newValue;
    };
    var FormCheckboxComponent_1;
    FormCheckboxComponent.ModelValuesMap = new WeakMap();
    _tslib.__decorate([
        import_decorator.Import(baseInput_composable.BaseInputComposable, { label: false }),
        _tslib.__metadata("design:type", baseInput_composable.BaseInputComposable)
    ], FormCheckboxComponent.prototype, "base", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "label", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "checked", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ default: true }),
        _tslib.__metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "checkedValue", void 0);
    _tslib.__decorate([
        prop_decorator.Prop(),
        _tslib.__metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "uncheckedValue", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], FormCheckboxComponent.prototype, "indeterminate", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "uncheckable", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "group", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], FormCheckboxComponent.prototype, "hasDefaultSlot", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], FormCheckboxComponent.prototype, "hasLabelSlot", null);
    _tslib.__decorate([
        templateRef_decorator.TemplateRef('inputWrapper'),
        _tslib.__metadata("design:type", typeof(window) !== 'undefined' ? HTMLElement : Object)
    ], FormCheckboxComponent.prototype, "inputWrapper", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [typeof(window) !== 'undefined' ? KeyboardEvent : Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "onKeyDown", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "toggle", null);
    _tslib.__decorate([
        watch_decorator.Watch(['label', 'checkedValue', 'uncheckedValue', 'uncheckable'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "syncConfigurationProps", null);
    _tslib.__decorate([
        watch_decorator.Watch('checked', { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "onCheckedChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('group', { immediate: false }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "onGroupChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('indeterminate', { immediate: false }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Boolean]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "onIndeterminateChange", null);
    FormCheckboxComponent = FormCheckboxComponent_1 = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-form-checkbox',
            components: [baseInput_component_vue_vue_type_script_lang],
            directives: [bindTheme_directive.BindThemeDirective]
        }),
        _tslib.__metadata("design:paramtypes", [])
    ], FormCheckboxComponent);
    return FormCheckboxComponent;
}(abstractVueForm_component.AbstractVueFormComponent));

module.exports = FormCheckboxComponent;
