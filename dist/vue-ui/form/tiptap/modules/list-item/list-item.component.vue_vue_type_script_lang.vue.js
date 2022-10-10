/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { IconMaterialFormatIndentDecrease } from '@banquette/vue-material-icons/format-indent-decrease';
import { IconMaterialFormatIndentIncrease } from '@banquette/vue-material-icons/format-indent-increase';
import { IconMaterialFormatListBulleted } from '@banquette/vue-material-icons/format-list-bulleted';
import { IconMaterialFormatListNumbered } from '@banquette/vue-material-icons/format-list-numbered';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BulletList } from '@tiptap/extension-bullet-list';
import { ListItem } from '@tiptap/extension-list-item';
import { OrderedList } from '@tiptap/extension-ordered-list';
import '../../../../button/button/button.component.vue.js';
import '../../../../button/button-group/button-group.component.vue.js';
import '../../../../popover/popover.component.vue.js';
import '../../../../popover/popover.directive.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { I18nDefaults } from './i18n-defaults.js';
import PopoverComponent from '../../../../popover/popover.component.vue_vue_type_script_lang.vue.js';
import ButtonComponent from '../../../../button/button/button.component.vue_vue_type_script_lang.vue.js';

var TextAlignComponent = /** @class */ (function (_super) {
    __extends(TextAlignComponent, _super);
    function TextAlignComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TextAlignComponent.prototype, "showListBulleted", {
        get: function () {
            return !!this.configuration.showListBulleted;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextAlignComponent.prototype, "showListNumbered", {
        get: function () {
            return !!this.configuration.showListNumbered;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextAlignComponent.prototype, "showIdent", {
        get: function () {
            return !!this.configuration.showIdent;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    TextAlignComponent.prototype.getExtensions = function () {
        return [
            BulletList.configure(this.configuration.bulletedList),
            OrderedList.configure(this.configuration.orderedList),
            ListItem.configure(this.configuration.tiptap)
        ];
    };
    TextAlignComponent.prototype.toggleBulletedList = function () {
        this.editor.chain().focus().toggleBulletList().run();
    };
    TextAlignComponent.prototype.toggleNumberedList = function () {
        this.editor.chain().focus().toggleOrderedList().run();
    };
    TextAlignComponent.prototype.increaseIndent = function () {
        this.editor.chain().focus().sinkListItem('listItem').run();
    };
    TextAlignComponent.prototype.decreaseIndent = function () {
        this.editor.chain().focus().liftListItem('listItem').run();
    };
    /**
     * @inheritDoc
     */
    TextAlignComponent.prototype.getDefaultConfiguration = function () {
        return {
            showListBulleted: true,
            showListNumbered: true,
            showIdent: true
        };
    };
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], TextAlignComponent.prototype, "i18n", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TextAlignComponent.prototype, "showListBulleted", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TextAlignComponent.prototype, "showListNumbered", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TextAlignComponent.prototype, "showIdent", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TextAlignComponent.prototype, "toggleBulletedList", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TextAlignComponent.prototype, "toggleNumberedList", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TextAlignComponent.prototype, "increaseIndent", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TextAlignComponent.prototype, "decreaseIndent", null);
    TextAlignComponent = __decorate([
        Themeable(),
        Component({
            name: 'bt-form-tiptap-list-item',
            components: [
                PopoverComponent,
                ButtonComponent,
                IconMaterialFormatListBulleted,
                IconMaterialFormatListNumbered,
                IconMaterialFormatIndentIncrease,
                IconMaterialFormatIndentDecrease
            ]
        })
    ], TextAlignComponent);
    return TextAlignComponent;
}(AbstractTiptapModule));

export { TextAlignComponent as default };
