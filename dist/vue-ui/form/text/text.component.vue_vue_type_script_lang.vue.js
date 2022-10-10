/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { IconRemixCloseCircle } from '@banquette/vue-remix-icons/close-circle';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Import } from '@banquette/vue-typescript/decorator/import.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { TemplateRef } from '@banquette/vue-typescript/decorator/template-ref.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import '../base-input/base-input.component.vue.js';
import { BaseInputComposable } from '../base-input/base-input.composable.js';
import { AbstractVueFormComponent } from '../abstract-vue-form.component.js';
import { TextViewModel } from './text.view-model.js';
import { ThemeConfiguration } from './theme-configuration.js';
import BaseFormInputComponent from '../base-input/base-input.component.vue_vue_type_script_lang.vue.js';

var FormTextComponent = /** @class */ (function (_super) {
    __extends(FormTextComponent, _super);
    function FormTextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormTextComponent.prototype, "activeElement", {
        get: function () {
            if (!isNullOrUndefined(this.input)) {
                return this.input;
            }
            if (!isNullOrUndefined(this.textarea)) {
                return this.textarea;
            }
            // There should always be one of the references defined.
            // This is for the rare cases where there is a type switch and the getter is called before the new ref is set.
            // So we don't have to check if there is an active element everytime we need to access it.
            var that = this;
            if (isUndefined(that.__fakeInput)) {
                that.__fakeInput = document.createElement('input');
            }
            return that.__fakeInput;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    FormTextComponent.prototype.setupViewModel = function () {
        return new TextViewModel(this.proxy, this.base);
    };
    /**
     * @inheritDoc
     */
    FormTextComponent.prototype.focus = function () {
        this.activeElement.focus();
    };
    /**
     * @inheritDoc
     */
    FormTextComponent.prototype.blur = function () {
        this.activeElement.blur();
    };
    /**
     * Copy applicable props into the view data.
     */
    FormTextComponent.prototype.syncConfigurationProps = function () {
        this.v.type = this.type;
        this.v.rows = this.rows;
        this.v.autoComplete = this.autoComplete;
        this.vm.minRows = this.minRows;
        this.vm.maxRows = this.maxRows;
        this.vm.autoSize = this.autoSize;
        this.vm.resizable = this.resizable;
    };
    __decorate([
        Import(BaseInputComposable, false),
        __metadata("design:type", BaseInputComposable)
    ], FormTextComponent.prototype, "base", void 0);
    __decorate([
        Prop({ type: String, default: 'text' }),
        __metadata("design:type", String)
    ], FormTextComponent.prototype, "type", void 0);
    __decorate([
        Prop({ type: String, default: 'off' }),
        __metadata("design:type", String)
    ], FormTextComponent.prototype, "autoComplete", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], FormTextComponent.prototype, "autoSize", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], FormTextComponent.prototype, "clearable", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], FormTextComponent.prototype, "resizable", void 0);
    __decorate([
        Prop({ type: Number, default: null, transform: function (v) { return v !== null ? parseInt(v, 10) : null; } }),
        __metadata("design:type", Object)
    ], FormTextComponent.prototype, "rows", void 0);
    __decorate([
        Prop({ type: Number, default: null, transform: function (v) { return v !== null ? parseInt(v, 10) : null; } }),
        __metadata("design:type", Object)
    ], FormTextComponent.prototype, "minRows", void 0);
    __decorate([
        Prop({ type: Number, default: null, transform: function (v) { return v !== null ? parseInt(v, 10) : null; } }),
        __metadata("design:type", Object)
    ], FormTextComponent.prototype, "maxRows", void 0);
    __decorate([
        TemplateRef('inputWrapper'),
        __metadata("design:type", Object)
    ], FormTextComponent.prototype, "inputWrapper", void 0);
    __decorate([
        TemplateRef('input'),
        __metadata("design:type", Object)
    ], FormTextComponent.prototype, "input", void 0);
    __decorate([
        TemplateRef('textarea'),
        __metadata("design:type", Object)
    ], FormTextComponent.prototype, "textarea", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], FormTextComponent.prototype, "v", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", typeof(window) !== 'undefined' ? HTMLElement : Object),
        __metadata("design:paramtypes", [])
    ], FormTextComponent.prototype, "activeElement", null);
    __decorate([
        Watch(['type', 'rows', 'minRows', 'maxRows', 'autocomplete', 'autoSize', 'resizable'], { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormTextComponent.prototype, "syncConfigurationProps", null);
    FormTextComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-form-text',
            components: [BaseFormInputComponent, IconRemixCloseCircle],
            directives: [BindThemeDirective]
        })
    ], FormTextComponent);
    return FormTextComponent;
}(AbstractVueFormComponent));

export { FormTextComponent as default };
