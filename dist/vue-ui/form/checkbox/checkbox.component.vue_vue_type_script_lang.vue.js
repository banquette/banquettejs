/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { isObject } from '@banquette/utils-type/is-object';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Import } from '@banquette/vue-typescript/decorator/import.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { TemplateRef } from '@banquette/vue-typescript/decorator/template-ref.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { AbstractVueFormComponent } from '../abstract-vue-form.component.js';
import '../base-input/base-input.component.vue.js';
import { BaseInputComposable } from '../base-input/base-input.composable.js';
import { UndefinedValue, ViewModelEvents } from '../constant.js';
import { CheckboxViewModel } from './checkbox.view-model.js';
import { ThemeConfiguration } from './theme-configuration.js';
import BaseFormInputComponent from '../base-input/base-input.component.vue_vue_type_script_lang.vue.js';

var FormCheckboxComponent = /** @class */ (function (_super) {
    __extends(FormCheckboxComponent, _super);
    function FormCheckboxComponent() {
        var _this = _super.call(this) || this;
        _this.unsubscribeMethods = [];
        _this.eventPipeline.subscribe(ViewModelEvents.Ready, function () {
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
        return new CheckboxViewModel(this.proxy, this.base);
    };
    /**
     * @inheritDoc
     */
    FormCheckboxComponent.prototype.onModelValueChange = function (newValue) {
        if (newValue === UndefinedValue) {
            return;
        }
        var control;
        if (isObject(newValue)) {
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
    __decorate([
        Import(BaseInputComposable, { label: false }),
        __metadata("design:type", BaseInputComposable)
    ], FormCheckboxComponent.prototype, "base", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "label", void 0);
    __decorate([
        Prop({ type: Boolean, default: null }),
        __metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "checked", void 0);
    __decorate([
        Prop({ default: true }),
        __metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "checkedValue", void 0);
    __decorate([
        Prop(),
        __metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "uncheckedValue", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], FormCheckboxComponent.prototype, "indeterminate", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "uncheckable", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], FormCheckboxComponent.prototype, "group", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormCheckboxComponent.prototype, "hasDefaultSlot", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FormCheckboxComponent.prototype, "hasLabelSlot", null);
    __decorate([
        TemplateRef('inputWrapper'),
        __metadata("design:type", typeof(window) !== 'undefined' ? HTMLElement : Object)
    ], FormCheckboxComponent.prototype, "inputWrapper", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof(window) !== 'undefined' ? KeyboardEvent : Object]),
        __metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "onKeyDown", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "toggle", null);
    __decorate([
        Watch(['label', 'checkedValue', 'uncheckedValue', 'uncheckable'], { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "syncConfigurationProps", null);
    __decorate([
        Watch('checked', { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "onCheckedChange", null);
    __decorate([
        Watch('group', { immediate: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "onGroupChange", null);
    __decorate([
        Watch('indeterminate', { immediate: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], FormCheckboxComponent.prototype, "onIndeterminateChange", null);
    FormCheckboxComponent = FormCheckboxComponent_1 = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-form-checkbox',
            components: [BaseFormInputComponent],
            directives: [BindThemeDirective]
        }),
        __metadata("design:paramtypes", [])
    ], FormCheckboxComponent);
    return FormCheckboxComponent;
}(AbstractVueFormComponent));

export { FormCheckboxComponent as default };
