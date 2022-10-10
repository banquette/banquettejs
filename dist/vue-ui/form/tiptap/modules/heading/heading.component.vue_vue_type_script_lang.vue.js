/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { IconMaterialFormatClear } from '@banquette/vue-material-icons/format-clear';
import { IconMaterialTitle } from '@banquette/vue-material-icons/title';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Heading } from '@tiptap/extension-heading';
import '../../../../button/button/button.component.vue.js';
import '../../../../button/button-group/button-group.component.vue.js';
import '../../../../dropdown/dropdown.component.vue.js';
import '../../../../dropdown/dropdown-divider.component.vue.js';
import '../../../../dropdown/dropdown-item.component.vue.js';
import '../../../../popover/popover.component.vue.js';
import '../../../../popover/popover.directive.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { I18nDefaults } from './i18n-defaults.js';
import PopoverComponent from '../../../../popover/popover.component.vue_vue_type_script_lang.vue.js';
import ButtonComponent from '../../../../button/button/button.component.vue_vue_type_script_lang.vue.js';
import DropdownComponent from '../../../../dropdown/dropdown.component.vue_vue_type_script_lang.vue.js';

var HeadingComponent = /** @class */ (function (_super) {
    __extends(HeadingComponent, _super);
    function HeadingComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectedLevel = null;
        return _this;
    }
    Object.defineProperty(HeadingComponent.prototype, "availableLevels", {
        get: function () {
            var _a;
            return ensureArray((_a = this.configuration.tiptap) === null || _a === void 0 ? void 0 : _a.levels);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    HeadingComponent.prototype.getExtensions = function () {
        return [Heading.configure(this.configuration.tiptap)];
    };
    HeadingComponent.prototype.toggleHeading = function (level) {
        this.editor.chain().focus().setHeading({ level: level }).run();
    };
    HeadingComponent.prototype.unsetHeading = function () {
        for (var _i = 0, _a = this.availableLevels; _i < _a.length; _i++) {
            var level = _a[_i];
            if (this.editor.isActive('heading', { level: level })) {
                this.editor.commands.toggleHeading({ level: level });
            }
        }
    };
    HeadingComponent.prototype.getDefaultConfiguration = function () {
        return {
            tiptap: {
                levels: [1, 2, 3, 4, 5, 6]
            }
        };
    };
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], HeadingComponent.prototype, "i18n", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], HeadingComponent.prototype, "availableLevels", null);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], HeadingComponent.prototype, "selectedLevel", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], HeadingComponent.prototype, "toggleHeading", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeadingComponent.prototype, "unsetHeading", null);
    HeadingComponent = __decorate([
        Themeable(),
        Component({
            name: 'bt-form-tiptap-heading',
            components: [PopoverComponent, ButtonComponent, DropdownComponent, IconMaterialTitle, IconMaterialFormatClear]
        })
    ], HeadingComponent);
    return HeadingComponent;
}(AbstractTiptapModule));

export { HeadingComponent as default };
