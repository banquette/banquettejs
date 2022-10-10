/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { IconMaterialFormatAlignCenter } from '@banquette/vue-material-icons/format-align-center';
import { IconMaterialFormatAlignJustify } from '@banquette/vue-material-icons/format-align-justify';
import { IconMaterialFormatAlignLeft } from '@banquette/vue-material-icons/format-align-left';
import { IconMaterialFormatAlignRight } from '@banquette/vue-material-icons/format-align-right';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { TextAlign } from '@tiptap/extension-text-align';
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
    Object.defineProperty(TextAlignComponent.prototype, "alignLeft", {
        get: function () {
            return ensureArray(this.configuration.tiptap.alignments).indexOf('left') > -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextAlignComponent.prototype, "alignCenter", {
        get: function () {
            return ensureArray(this.configuration.tiptap.alignments).indexOf('center') > -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextAlignComponent.prototype, "alignRight", {
        get: function () {
            return ensureArray(this.configuration.tiptap.alignments).indexOf('right') > -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextAlignComponent.prototype, "alignJustify", {
        get: function () {
            return ensureArray(this.configuration.tiptap.alignments).indexOf('justify') > -1;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    TextAlignComponent.prototype.getExtensions = function () {
        return [TextAlign.configure(this.configuration.tiptap)];
    };
    TextAlignComponent.prototype.toggle = function (alignment) {
        if (!this.editor.isActive({ textAlign: alignment })) {
            this.editor.chain().focus().setTextAlign(alignment).run();
        }
        else {
            this.editor.commands.unsetTextAlign();
        }
    };
    /**
     * @inheritDoc
     */
    TextAlignComponent.prototype.getDefaultConfiguration = function () {
        return {
            tiptap: {
                types: ['heading', 'paragraph'],
                alignments: ['left', 'center', 'right', 'justify'],
                defaultAlignment: 'left'
            }
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
    ], TextAlignComponent.prototype, "alignLeft", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TextAlignComponent.prototype, "alignCenter", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TextAlignComponent.prototype, "alignRight", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TextAlignComponent.prototype, "alignJustify", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TextAlignComponent.prototype, "toggle", null);
    TextAlignComponent = __decorate([
        Themeable(),
        Component({
            name: 'bt-form-tiptap-text-align',
            components: [
                PopoverComponent,
                ButtonComponent,
                IconMaterialFormatAlignLeft,
                IconMaterialFormatAlignCenter,
                IconMaterialFormatAlignRight,
                IconMaterialFormatAlignJustify
            ]
        })
    ], TextAlignComponent);
    return TextAlignComponent;
}(AbstractTiptapModule));

export { TextAlignComponent as default };
