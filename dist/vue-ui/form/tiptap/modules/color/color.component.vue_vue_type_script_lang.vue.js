/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { IconMaterialArrowDropDown } from '@banquette/vue-material-icons/arrow-drop-down';
import { IconMaterialFormatColorReset } from '@banquette/vue-material-icons/format-color-reset';
import { IconMaterialTextFormat } from '@banquette/vue-material-icons/text-format';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Highlight } from '@tiptap/extension-highlight';
import { Color } from '@tiptap/extension-color';
import '../../../../button/button/button.component.vue.js';
import '../../../../button/button-group/button-group.component.vue.js';
import '../../../../popover/popover.component.vue.js';
import '../../../../popover/popover.directive.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { VariantsDefault } from './variants-default.js';
import { I18nDefaults } from './i18n-defaults.js';
import { ThemeConfiguration } from './theme-configuration.js';
import ButtonComponent from '../../../../button/button/button.component.vue_vue_type_script_lang.vue.js';
import PopoverComponent from '../../../../popover/popover.component.vue_vue_type_script_lang.vue.js';

var UnderlineComponent = /** @class */ (function (_super) {
    __extends(UnderlineComponent, _super);
    function UnderlineComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UnderlineComponent.prototype, "textColorsPalettes", {
        get: function () {
            return this.configuration.textColors || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnderlineComponent.prototype, "backgroundColorsPalettes", {
        get: function () {
            return this.configuration.backgroundColors || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnderlineComponent.prototype, "hasBackgroundColorsPalettes", {
        get: function () {
            return this.backgroundColorsPalettes.reduce(function (acc, item) {
                acc += item.length;
                return acc;
            }, 0) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UnderlineComponent.prototype, "hasTextColorsPalettes", {
        get: function () {
            return this.textColorsPalettes.reduce(function (acc, item) {
                acc += item.length;
                return acc;
            }, 0) > 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    UnderlineComponent.prototype.getExtensions = function () {
        return [
            Highlight.configure(this.configuration.highlight),
            Color.configure(this.configuration.color)
        ];
    };
    UnderlineComponent.prototype.setColor = function (color) {
        this.editor.chain().focus().setColor(color).run();
    };
    UnderlineComponent.prototype.unsetColor = function () {
        this.editor.chain().focus().unsetColor().run();
    };
    UnderlineComponent.prototype.setHighlight = function (color) {
        this.editor.chain().focus().setHighlight({ color: color }).run();
    };
    UnderlineComponent.prototype.unsetHighlight = function () {
        this.editor.chain().focus().unsetHighlight().run();
    };
    /**
     * @inheritDoc
     */
    UnderlineComponent.prototype.getDefaultConfiguration = function () {
        return {
            highlight: {
                multicolor: true
            },
            textColors: [
                ['#000000', '#0d0d0d', '#1a1a1a', '#282828', '#565656', '#969696', '#d5d5d5', '#ffffff'],
                ['#ee4d4d', '#ff884d', '#ffc44d', '#8bc94d', '#4dc4ff', '#5e94ff', '#a071ff', '#ff4da5'],
                ['#fcdbdb', '#ffe7db', '#fff3db', '#e8f4db', '#dbf3ff', '#dfeaff', '#ece3ff', '#ffdbed'],
                ['#f7a6a6', '#ffc4a6', '#ffe2a6', '#c5e4a6', '#a6e2ff', '#afcaff', '#d0b8ff', '#ffa6d2'],
                ['#f17171', '#ffa071', '#ffd071', '#a2d471', '#71d0ff', '#7ea9ff', '#b38dff', '#ff71b7'],
                ['#d64545', '#e67a45', '#e6b045', '#7db545', '#45b0e6', '#5585e6', '#9066e6', '#e64595'],
                ['#8f2e2e', '#99522e', '#99762e', '#53792e', '#2e7699', '#385999', '#604499', '#992e63'],
                ['#471717', '#4c2917', '#4c3b17', '#2a3c17', '#173b4c', '#1c2c4c', '#30224c', '#4c1731'] ],
            backgroundColors: [
                ['#000000', '#0d0d0d', '#1a1a1a', '#282828', '#565656', '#969696', '#d5d5d5', '#ffffff'],
                ['#ee4d4d', '#ff884d', '#ffc44d', '#8bc94d', '#4dc4ff', '#5e94ff', '#a071ff', '#ff4da5'],
                ['#fcdbdb', '#ffe7db', '#fff3db', '#e8f4db', '#dbf3ff', '#dfeaff', '#ece3ff', '#ffdbed'],
                ['#f7a6a6', '#ffc4a6', '#ffe2a6', '#c5e4a6', '#a6e2ff', '#afcaff', '#d0b8ff', '#ffa6d2'],
                ['#f17171', '#ffa071', '#ffd071', '#a2d471', '#71d0ff', '#7ea9ff', '#b38dff', '#ff71b7'],
                ['#d64545', '#e67a45', '#e6b045', '#7db545', '#45b0e6', '#5585e6', '#9066e6', '#e64595'],
                ['#8f2e2e', '#99522e', '#99762e', '#53792e', '#2e7699', '#385999', '#604499', '#992e63'],
                ['#471717', '#4c2917', '#4c3b17', '#2a3c17', '#173b4c', '#1c2c4c', '#30224c', '#4c1731'] ]
        };
    };
    __decorate([
        Prop({ type: Object, default: VariantsDefault }),
        __metadata("design:type", Object)
    ], UnderlineComponent.prototype, "variants", void 0);
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], UnderlineComponent.prototype, "i18n", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], UnderlineComponent.prototype, "textColorsPalettes", null);
    __decorate([
        Computed(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], UnderlineComponent.prototype, "backgroundColorsPalettes", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], UnderlineComponent.prototype, "hasBackgroundColorsPalettes", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], UnderlineComponent.prototype, "hasTextColorsPalettes", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], UnderlineComponent.prototype, "setColor", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UnderlineComponent.prototype, "unsetColor", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], UnderlineComponent.prototype, "setHighlight", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UnderlineComponent.prototype, "unsetHighlight", null);
    UnderlineComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-form-tiptap-color',
            directives: [BindThemeDirective],
            components: [ButtonComponent, PopoverComponent, IconMaterialTextFormat, IconMaterialArrowDropDown, IconMaterialFormatColorReset]
        })
    ], UnderlineComponent);
    return UnderlineComponent;
}(AbstractTiptapModule));

export { UnderlineComponent as default };
