/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { oncePerCycleProxy } from '@banquette/utils-misc/once-per-cycle-proxy';
import { IconMaterialWarning } from '@banquette/vue-material-icons/warning';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { FontFamily } from '@tiptap/extension-font-family';
import { TextStyle } from '@tiptap/extension-text-style';
import '../../../../button/button/button.component.vue.js';
import '../../../../button/button-group/button-group.component.vue.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { I18nDefaults } from './i18n-defaults.js';
import ButtonComponent from '../../../../button/button/button.component.vue_vue_type_script_lang.vue.js';

var FontFamilyComponent = /** @class */ (function (_super) {
    __extends(FontFamilyComponent, _super);
    function FontFamilyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectedFont = '';
        _this.lastCursorPosition = -Infinity;
        /**
         * @inheritDoc
         */
        _this.onTransaction = oncePerCycleProxy(function (props) {
            _super.prototype.onTransaction.call(_this, props);
            if (_this.editor.state.selection.to !== _this.lastCursorPosition) {
                var i = void 0;
                for (i = 0; i < _this.availableFonts.length; ++i) {
                    if (_this.editor.isActive('textStyle', { fontFamily: _this.availableFonts[i].font })) {
                        _this.setSelectedFont(_this.availableFonts[i].font);
                        break;
                    }
                }
                if (i >= _this.availableFonts.length) {
                    _this.resetSelectedFont();
                }
                _this.lastCursorPosition = _this.editor.state.selection.to;
            }
        });
        return _this;
    }
    Object.defineProperty(FontFamilyComponent.prototype, "availableFonts", {
        get: function () {
            return this.configuration.availableFonts.reduce(function (arr, font) {
                arr.push({ font: font, available: document.fonts.check("1rem ".concat(font)) });
                return arr;
            }, []);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    FontFamilyComponent.prototype.beforeMount = function () {
        _super.prototype.beforeMount.call(this);
        this.selectedFont = this.i18n.defaultFont;
    };
    /**
     * @inheritDoc
     */
    FontFamilyComponent.prototype.getExtensions = function () {
        return [TextStyle, FontFamily.configure(this.configuration.tiptap)];
    };
    FontFamilyComponent.prototype.setFont = function (font) {
        this.editor.chain().focus().setFontFamily(font).run();
        this.setSelectedFont(font);
    };
    FontFamilyComponent.prototype.unsetFont = function () {
        this.editor.commands.unsetFontFamily();
        this.resetSelectedFont();
    };
    FontFamilyComponent.prototype.toggleFont = function (font) {
        if (!this.editor.isActive('font-family')) {
            this.setFont(font);
        }
        else {
            this.unsetFont();
        }
    };
    FontFamilyComponent.prototype.setSelectedFont = function (font) {
        this.selectedFont = font;
        return true;
    };
    FontFamilyComponent.prototype.resetSelectedFont = function () {
        this.selectedFont = this.i18n.defaultFont;
        return false;
    };
    FontFamilyComponent.prototype.isActive = function (type, params) {
        return this.editor.isActive(type, params);
    };
    /**
     * @inheritDoc
     */
    FontFamilyComponent.prototype.getDefaultConfiguration = function () {
        return {
            availableFonts: [
                'Arial',
                'Arial Black',
                'Verdana',
                'Tahoma',
                'Trebuchet MS',
                'Impact',
                'Times New Roman',
                'Didot',
                'Georgia',
                'American Typewriter',
                'Andalé Mono',
                'Courier',
                'Lucida Console',
                'Monaco',
                'Bradley Hand',
                'Brush Script MT',
                'Luminari',
                'Comic Sans MS'
            ]
        };
    };
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], FontFamilyComponent.prototype, "i18n", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", String)
    ], FontFamilyComponent.prototype, "selectedFont", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], FontFamilyComponent.prototype, "availableFonts", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], FontFamilyComponent.prototype, "setFont", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FontFamilyComponent.prototype, "unsetFont", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], FontFamilyComponent.prototype, "toggleFont", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Boolean)
    ], FontFamilyComponent.prototype, "setSelectedFont", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], FontFamilyComponent.prototype, "resetSelectedFont", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Boolean)
    ], FontFamilyComponent.prototype, "isActive", null);
    FontFamilyComponent = __decorate([
        Component({
            name: 'bt-form-tiptap-font-family',
            components: [ButtonComponent, IconMaterialWarning]
        })
    ], FontFamilyComponent);
    return FontFamilyComponent;
}(AbstractTiptapModule));

export { FontFamilyComponent as default };
