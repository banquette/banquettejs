/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../../../_virtual/_tslib.js');
var formatBold = require('@banquette/vue-material-icons/_cjs/dev/format-bold');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
require('../../../../button/button/button.component.vue.js');
require('../../../../button/button-group/button-group.component.vue.js');
require('../../../../popover/popover.component.vue.js');
require('../../../../popover/popover.directive.js');
var abstractTiptapModule = require('../abstract-tiptap-module.js');
var extensionBold = require('@tiptap/extension-bold');
var i18nDefaults = require('./i18n-defaults.js');
var popover_component_vue_vue_type_script_lang = require('../../../../popover/popover.component.vue_vue_type_script_lang.vue.js');
var button_component_vue_vue_type_script_lang = require('../../../../button/button/button.component.vue_vue_type_script_lang.vue.js');

var BoldComponent = /** @class */ (function (_super) {
    _tslib.__extends(BoldComponent, _super);
    function BoldComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BoldComponent.prototype.getExtensions = function () {
        return [extensionBold.Bold.configure(this.configuration.tiptap)];
    };
    BoldComponent.prototype.toggle = function () {
        this.editor.chain().focus().toggleBold().run();
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: i18nDefaults.I18nDefaults }),
        _tslib.__metadata("design:type", Object)
    ], BoldComponent.prototype, "i18n", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], BoldComponent.prototype, "toggle", null);
    BoldComponent = _tslib.__decorate([
        themeable_decorator.Themeable(),
        component_decorator.Component({
            name: 'bt-form-tiptap-bold',
            components: [popover_component_vue_vue_type_script_lang, button_component_vue_vue_type_script_lang, formatBold.IconMaterialFormatBold]
        })
    ], BoldComponent);
    return BoldComponent;
}(abstractTiptapModule.AbstractTiptapModule));

module.exports = BoldComponent;
