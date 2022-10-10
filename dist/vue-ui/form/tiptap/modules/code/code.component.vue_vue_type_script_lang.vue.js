/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { IconMaterialCode } from '@banquette/vue-material-icons/code';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import '../../../../button/button/button.component.vue.js';
import '../../../../button/button-group/button-group.component.vue.js';
import '../../../../popover/popover.component.vue.js';
import '../../../../popover/popover.directive.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { Code } from '@tiptap/extension-code';
import { I18nDefaults } from './i18n-defaults.js';
import PopoverComponent from '../../../../popover/popover.component.vue_vue_type_script_lang.vue.js';
import ButtonComponent from '../../../../button/button/button.component.vue_vue_type_script_lang.vue.js';

var CodeComponent = /** @class */ (function (_super) {
    __extends(CodeComponent, _super);
    function CodeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    CodeComponent.prototype.getExtensions = function () {
        return [Code.configure(this.configuration.tiptap)];
    };
    CodeComponent.prototype.toggle = function () {
        this.editor.chain().focus().toggleCode().run();
    };
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], CodeComponent.prototype, "i18n", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CodeComponent.prototype, "toggle", null);
    CodeComponent = __decorate([
        Themeable(),
        Component({
            name: 'bt-form-tiptap-code',
            components: [PopoverComponent, ButtonComponent, IconMaterialCode]
        })
    ], CodeComponent);
    return CodeComponent;
}(AbstractTiptapModule));

export { CodeComponent as default };
