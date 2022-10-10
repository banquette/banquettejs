/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { IconMaterialFormatQuote } from '@banquette/vue-material-icons/format-quote';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Blockquote } from '@tiptap/extension-blockquote';
import '../../../../button/button/button.component.vue.js';
import '../../../../button/button-group/button-group.component.vue.js';
import '../../../../popover/popover.component.vue.js';
import '../../../../popover/popover.directive.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { I18nDefaults } from './i18n-defaults.js';
import { ThemeConfiguration } from './theme-configuration.js';
import PopoverComponent from '../../../../popover/popover.component.vue_vue_type_script_lang.vue.js';
import ButtonComponent from '../../../../button/button/button.component.vue_vue_type_script_lang.vue.js';

var BlockquoteComponent = /** @class */ (function (_super) {
    __extends(BlockquoteComponent, _super);
    function BlockquoteComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BlockquoteComponent.prototype.getExtensions = function () {
        return [Blockquote.configure(this.configuration.tiptap)];
    };
    BlockquoteComponent.prototype.toggle = function () {
        this.editor.chain().focus().toggleBlockquote().run();
    };
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], BlockquoteComponent.prototype, "i18n", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlockquoteComponent.prototype, "toggle", null);
    BlockquoteComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-form-tiptap-blockquote',
            directives: [BindThemeDirective],
            components: [PopoverComponent, ButtonComponent, IconMaterialFormatQuote]
        })
    ], BlockquoteComponent);
    return BlockquoteComponent;
}(AbstractTiptapModule));

export { BlockquoteComponent as default };
