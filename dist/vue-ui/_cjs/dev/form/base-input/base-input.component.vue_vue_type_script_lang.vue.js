/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
var help = require('@banquette/vue-material-icons/_cjs/dev/help');
var warning = require('@banquette/vue-material-icons/_cjs/dev/warning');
require('../../debug/form-control-state-overlay/form-control-state-overlay.component.vue.js');
require('../../popover/popover.component.vue.js');
var popover_directive = require('../../popover/popover.directive.js');
require('../../progress/progress-circular/progress-circular.component.vue.js');
var themeConfiguration = require('./theme-configuration.js');
var formControlStateOverlay_component_vue_vue_type_script_lang = require('../../debug/form-control-state-overlay/form-control-state-overlay.component.vue_vue_type_script_lang.vue.js');
var progressCircular_component_vue_vue_type_script_lang = require('../../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js');
var popover_component_vue_vue_type_script_lang = require('../../popover/popover.component.vue_vue_type_script_lang.vue.js');

var BaseFormInputComponent = /** @class */ (function (_super) {
    _tslib.__extends(BaseFormInputComponent, _super);
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
            return v !== '' && v !== null && v !== undefined && (!isArray.isArray(v) || v.length > 0);
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
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, required: true }),
        _tslib.__metadata("design:type", Object)
    ], BaseFormInputComponent.prototype, "v", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasLabelSlot", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasHelpSlot", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasBeforeSlot", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasAfterSlot", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasBeforeRawSlot", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasAfterRawSlot", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasFloatingLabel", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasFloatingErrors", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasFloatingHelp", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], BaseFormInputComponent.prototype, "hasValue", null);
    BaseFormInputComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-form-base-input',
            components: [progressCircular_component_vue_vue_type_script_lang, formControlStateOverlay_component_vue_vue_type_script_lang, help.IconMaterialHelp, warning.IconMaterialWarning, popover_component_vue_vue_type_script_lang],
            directives: [popover_directive.PopoverDirective]
        })
    ], BaseFormInputComponent);
    return BaseFormInputComponent;
}(vue.Vue));

module.exports = BaseFormInputComponent;
