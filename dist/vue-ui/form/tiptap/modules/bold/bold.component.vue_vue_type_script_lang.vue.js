/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { IconMaterialFormatBold } from '@banquette/vue-material-icons/format-bold';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import '../../../../button/button/button.component.vue.js';
import '../../../../button/button-group/button-group.component.vue.js';
import '../../../../popover/popover.component.vue.js';
import '../../../../popover/popover.directive.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { Bold } from '@tiptap/extension-bold';
import { I18nDefaults } from './i18n-defaults.js';
import PopoverComponent from '../../../../popover/popover.component.vue_vue_type_script_lang.vue.js';
import ButtonComponent from '../../../../button/button/button.component.vue_vue_type_script_lang.vue.js';

var BoldComponent = /** @class */ (function (_super) {
    __extends(BoldComponent, _super);
    function BoldComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BoldComponent.prototype.getExtensions = function () {
        return [Bold.configure(this.configuration.tiptap)];
    };
    BoldComponent.prototype.toggle = function () {
        this.editor.chain().focus().toggleBold().run();
    };
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], BoldComponent.prototype, "i18n", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BoldComponent.prototype, "toggle", null);
    BoldComponent = __decorate([
        Themeable(),
        Component({
            name: 'bt-form-tiptap-bold',
            components: [PopoverComponent, ButtonComponent, IconMaterialFormatBold]
        })
    ], BoldComponent);
    return BoldComponent;
}(AbstractTiptapModule));

export { BoldComponent as default };
