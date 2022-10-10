/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { isArray } from '@banquette/utils-type/is-array';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Vue } from '@banquette/vue-typescript/vue';
import { IconMaterialHelp } from '@banquette/vue-material-icons/help';
import { IconMaterialWarning } from '@banquette/vue-material-icons/warning';
import '../../debug/form-control-state-overlay/form-control-state-overlay.component.vue.js';
import '../../popover/popover.component.vue.js';
import { PopoverDirective } from '../../popover/popover.directive.js';
import '../../progress/progress-circular/progress-circular.component.vue.js';
import { ThemeConfiguration } from './theme-configuration.js';
import FormControlStateOverlayComponent from '../../debug/form-control-state-overlay/form-control-state-overlay.component.vue_vue_type_script_lang.vue.js';
import ProgressCircularComponent from '../../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js';
import PopoverComponent from '../../popover/popover.component.vue_vue_type_script_lang.vue.js';

var BaseFormInputComponent = /** @class */ (function (_super) {
    __extends(BaseFormInputComponent, _super);
    function BaseFormInputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BaseFormInputComponent.prototype, "hasLabelSlot", {
        get: function () {
            return this.hasNonEmptySlot('label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseFormInputComponent.prototype, "hasHelpSlot", {
        get: function () {
            return this.hasNonEmptySlot('help');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseFormInputComponent.prototype, "hasBeforeSlot", {
        get: function () {
            return this.hasNonEmptySlot('before');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseFormInputComponent.prototype, "hasAfterSlot", {
        get: function () {
            return this.hasNonEmptySlot('after');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseFormInputComponent.prototype, "hasBeforeRawSlot", {
        get: function () {
            return this.hasNonEmptySlot('before-raw');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseFormInputComponent.prototype, "hasAfterRawSlot", {
        get: function () {
            return this.hasNonEmptySlot('after-raw');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseFormInputComponent.prototype, "hasFloatingLabel", {
        get: function () {
            return (!this.hasBeforeRawSlot && !this.hasBeforeSlot) && this.v.base.floatingLabel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseFormInputComponent.prototype, "hasFloatingErrors", {
        get: function () {
            return this.v.base.floatingErrors || (this.v.base && this.v.base.inGroup);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseFormInputComponent.prototype, "hasFloatingHelp", {
        get: function () {
            return this.v.base.floatingHelp || (this.v.base && this.v.base.inGroup);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseFormInputComponent.prototype, "hasValue", {
        get: function () {
            var v = this.v.control.value;
            return v !== '' && v !== null && v !== undefined && (!isArray(v) || v.length > 0);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Vue lifecycle.
     */
    BaseFormInputComponent.prototype.beforeMount = function () {
        this.v.base.hasAddon = this.hasAfterRawSlot || this.hasAfterSlot || this.hasBeforeRawSlot || this.hasBeforeSlot;
    };
    /**
     * Vue lifecycle.
     */
    BaseFormInputComponent.prototype.mounted = function () {
        var el = this.$el;
        this.v.base.inGroup = false;
        do {
            if (el.closest && el.closest('[data-form-input-addon]') !== null) {
                this.v.base.inGroup = true;
                break;
            }
            el = el.parentElement;
        } while (el);
    };
    __decorate([
        Prop({ type: Object, required: true }),
        __metadata("design:type", Object)
    ], BaseFormInputComponent.prototype, "v", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasLabelSlot", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasHelpSlot", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasBeforeSlot", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasAfterSlot", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasBeforeRawSlot", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasAfterRawSlot", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasFloatingLabel", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasFloatingErrors", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasFloatingHelp", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasValue", null);
    BaseFormInputComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-form-base-input',
            components: [ProgressCircularComponent, FormControlStateOverlayComponent, IconMaterialHelp, IconMaterialWarning, PopoverComponent],
            directives: [PopoverDirective]
        })
    ], BaseFormInputComponent);
    return BaseFormInputComponent;
}(Vue));

export { BaseFormInputComponent as default };
