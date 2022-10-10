/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { IconMaterialRedo } from '@banquette/vue-material-icons/redo';
import { IconMaterialUndo } from '@banquette/vue-material-icons/undo';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { History } from '@tiptap/extension-history';
import '../../../../button/button/button.component.vue.js';
import '../../../../button/button-group/button-group.component.vue.js';
import '../../../../popover/popover.component.vue.js';
import '../../../../popover/popover.directive.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { I18nDefaults } from './i18n-defaults.js';
import PopoverComponent from '../../../../popover/popover.component.vue_vue_type_script_lang.vue.js';
import ButtonComponent from '../../../../button/button/button.component.vue_vue_type_script_lang.vue.js';

var HistoryComponent = /** @class */ (function (_super) {
    __extends(HistoryComponent, _super);
    function HistoryComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    HistoryComponent.prototype.getExtensions = function () {
        return [History.configure(this.configuration.tiptap)];
    };
    HistoryComponent.prototype.undo = function () {
        this.editor.chain().focus().undo().run();
    };
    HistoryComponent.prototype.redo = function () {
        this.editor.chain().focus().redo().run();
    };
    HistoryComponent.prototype.getDefaultConfiguration = function () {
        return {
            showUndo: true,
            showRedo: true
        };
    };
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], HistoryComponent.prototype, "i18n", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HistoryComponent.prototype, "undo", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HistoryComponent.prototype, "redo", null);
    HistoryComponent = __decorate([
        Themeable(),
        Component({
            name: 'bt-form-tiptap-history',
            components: [PopoverComponent, ButtonComponent, IconMaterialUndo, IconMaterialRedo]
        })
    ], HistoryComponent);
    return HistoryComponent;
}(AbstractTiptapModule));

export { HistoryComponent as default };
