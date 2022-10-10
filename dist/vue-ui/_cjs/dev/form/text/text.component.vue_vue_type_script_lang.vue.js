/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var closeCircle = require('@banquette/vue-remix-icons/_cjs/dev/close-circle');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var import_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/import.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var templateRef_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/template-ref.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
require('../base-input/base-input.component.vue.js');
var baseInput_composable = require('../base-input/base-input.composable.js');
var abstractVueForm_component = require('../abstract-vue-form.component.js');
var text_viewModel = require('./text.view-model.js');
var themeConfiguration = require('./theme-configuration.js');
var baseInput_component_vue_vue_type_script_lang = require('../base-input/base-input.component.vue_vue_type_script_lang.vue.js');

var FormTextComponent = /** @class */ (function (_super) {
    _tslib.__extends(FormTextComponent, _super);
    function FormTextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormTextComponent.prototype, "activeElement", {
        get: function () {
            if (!isNullOrUndefined.isNullOrUndefined(this.input)) {
                return this.input;
            }
            if (!isNullOrUndefined.isNullOrUndefined(this.textarea)) {
                return this.textarea;
            }
            // There should always be one of the references defined.
            // This is for the rare cases where there is a type switch and the getter is called before the new ref is set.
            // So we don't have to check if there is an active element everytime we need to access it.
            var that = this;
            if (isUndefined.isUndefined(that.__fakeInput)) {
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
        return new text_viewModel.TextViewModel(this.proxy, this.base);
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
    _tslib.__decorate([
        import_decorator.Import(baseInput_composable.BaseInputComposable, false),
        _tslib.__metadata("design:type", baseInput_composable.BaseInputComposable)
    ], FormTextComponent.prototype, "base", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'text' }),
        _tslib.__metadata("design:type", String)
    ], FormTextComponent.prototype, "type", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'off' }),
        _tslib.__metadata("design:type", String)
    ], FormTextComponent.prototype, "autoComplete", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], FormTextComponent.prototype, "autoSize", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], FormTextComponent.prototype, "clearable", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], FormTextComponent.prototype, "resizable", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Number, default: null, transform: function (v) { return v !== null ? parseInt(v, 10) : null; } }),
        _tslib.__metadata("design:type", Object)
    ], FormTextComponent.prototype, "rows", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Number, default: null, transform: function (v) { return v !== null ? parseInt(v, 10) : null; } }),
        _tslib.__metadata("design:type", Object)
    ], FormTextComponent.prototype, "minRows", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Number, default: null, transform: function (v) { return v !== null ? parseInt(v, 10) : null; } }),
        _tslib.__metadata("design:type", Object)
    ], FormTextComponent.prototype, "maxRows", void 0);
    _tslib.__decorate([
        templateRef_decorator.TemplateRef('inputWrapper'),
        _tslib.__metadata("design:type", Object)
    ], FormTextComponent.prototype, "inputWrapper", void 0);
    _tslib.__decorate([
        templateRef_decorator.TemplateRef('input'),
        _tslib.__metadata("design:type", Object)
    ], FormTextComponent.prototype, "input", void 0);
    _tslib.__decorate([
        templateRef_decorator.TemplateRef('textarea'),
        _tslib.__metadata("design:type", Object)
    ], FormTextComponent.prototype, "textarea", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], FormTextComponent.prototype, "v", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", typeof(window) !== 'undefined' ? HTMLElement : Object),
        _tslib.__metadata("design:paramtypes", [])
    ], FormTextComponent.prototype, "activeElement", null);
    _tslib.__decorate([
        watch_decorator.Watch(['type', 'rows', 'minRows', 'maxRows', 'autocomplete', 'autoSize', 'resizable'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormTextComponent.prototype, "syncConfigurationProps", null);
    FormTextComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-form-text',
            components: [baseInput_component_vue_vue_type_script_lang, closeCircle.IconRemixCloseCircle],
            directives: [bindTheme_directive.BindThemeDirective]
        })
    ], FormTextComponent);
    return FormTextComponent;
}(abstractVueForm_component.AbstractVueFormComponent));

module.exports = FormTextComponent;
