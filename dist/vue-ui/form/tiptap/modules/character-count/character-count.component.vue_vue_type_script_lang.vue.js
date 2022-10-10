/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { IconMaterialFormatClear } from '@banquette/vue-material-icons/format-clear';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { CharacterCount } from '@tiptap/extension-character-count';
import '../../../../button/button/button.component.vue.js';
import '../../../../button/button-group/button-group.component.vue.js';
import '../../../../popover/popover.component.vue.js';
import '../../../../popover/popover.directive.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { I18nDefaults } from './i18n-defaults.js';
import { ThemeConfiguration } from './theme-configuration.js';
import PopoverComponent from '../../../../popover/popover.component.vue_vue_type_script_lang.vue.js';
import ButtonComponent from '../../../../button/button/button.component.vue_vue_type_script_lang.vue.js';

var CharacterCountComponent = /** @class */ (function (_super) {
    __extends(CharacterCountComponent, _super);
    function CharacterCountComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CharacterCountComponent.prototype, "charactersText", {
        get: function () {
            if (!this.editor) {
                return '';
            }
            return this.i18n.charactersText
                .replace('{current}', this.editor.storage.characterCount.characters())
                .replace('{limit}', String(this.configuration.tiptap.limit));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharacterCountComponent.prototype, "wordsText", {
        get: function () {
            if (!this.editor) {
                return '';
            }
            return this.i18n.wordsText.replace('{count}', this.editor.storage.characterCount.words());
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    CharacterCountComponent.prototype.getExtensions = function () {
        return [CharacterCount.configure(this.configuration.tiptap)];
    };
    /**
     * @inheritDoc
     */
    CharacterCountComponent.prototype.getDefaultConfiguration = function () {
        return {
            tiptap: { limit: 240 },
            showCharacters: true,
            showWords: false,
        };
    };
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], CharacterCountComponent.prototype, "i18n", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], CharacterCountComponent.prototype, "charactersText", null);
    __decorate([
        Computed(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], CharacterCountComponent.prototype, "wordsText", null);
    CharacterCountComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-form-tiptap-character-count',
            directives: [BindThemeDirective],
            components: [PopoverComponent, ButtonComponent, IconMaterialFormatClear]
        })
    ], CharacterCountComponent);
    return CharacterCountComponent;
}(AbstractTiptapModule));

export { CharacterCountComponent as default };
