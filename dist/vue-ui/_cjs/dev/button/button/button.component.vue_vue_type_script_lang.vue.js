/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var parseCssDuration = require('@banquette/utils-dom/_cjs/dev/parse-css-duration');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var lifecycle_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/lifecycle.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var ref_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/ref.decorator');
var themeVar_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/theme-var.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
var clickOutside_directive = require('../../misc/click-outside.directive.js');
require('../../progress/progress-circular/progress-circular.component.vue.js');
var themeConfiguration = require('./theme-configuration.js');
var progressCircular_component_vue_vue_type_script_lang = require('../../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js');

var ButtonComponent = /** @class */ (function (_super) {
    _tslib.__extends(ButtonComponent, _super);
    function ButtonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.active = false;
        /**
         * Internal toggle status for the "toggle" slot.
         */
        _this.toggledAttr = false;
        /**
         * A reference to the callback that will be called when keyboard events are listened to.
         */
        _this.keydownListener = null;
        return _this;
    }
    Object.defineProperty(ButtonComponent.prototype, "tagName", {
        get: function () {
            return this.href !== null ? 'a' : 'button';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "hasToggleSlot", {
        get: function () {
            return _super.prototype.hasSlot.call(this, 'toggle');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "isToggleSlotVisible", {
        get: function () {
            if (this.toggledProp !== null) {
                return this.toggledProp;
            }
            return this.toggledAttr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "isWorkingTextSlotVisible", {
        get: function () {
            return !!this.workingText || this.hasSlot('working-text');
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Show/hide the "toggle" slot (if defined).
     */
    ButtonComponent.prototype.onClick = function (event) {
        if (!this.disabled) {
            this.$emit('click', event);
        }
    };
    /**
     * Show/hide the "toggle" slot (if defined).
     */
    ButtonComponent.prototype.toggle = function (event) {
        if (!this.$refs.root.contains(event.target) || this.disabled) {
            return;
        }
        if (this.hasSlot('toggle')) {
            this.toggledAttr = !this.toggledAttr;
        }
        else {
            this.toggledAttr = false;
        }
    };
    ButtonComponent.prototype.hideToggle = function () {
        this.toggledAttr = false;
    };
    ButtonComponent.prototype.onFocus = function () {
        if (this.keydownListener === null && !this.disabled) {
            this.keydownListener = proxy.proxy(this.onKeyDown, this);
            this.$el.addEventListener('keydown', this.keydownListener);
        }
    };
    ButtonComponent.prototype.onBlur = function () {
        if (this.keydownListener !== null) {
            this.$el.removeEventListener('keydown', this.keydownListener);
            this.keydownListener = null;
        }
    };
    ButtonComponent.prototype.dispose = function () {
        this.onBlur();
    };
    ButtonComponent.prototype.onKeyDown = function (event) {
        var _this = this;
        if (event.key === 'Enter' && !this.active && !this.disabled) {
            this.active = true;
            if (this.hasToggleSlot) {
                this.toggle(event);
            }
            setTimeout(function () {
                _this.active = false;
            }, this.clickDuration * 2);
        }
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ButtonComponent.prototype, "href", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ButtonComponent.prototype, "target", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Object)
    ], ButtonComponent.prototype, "disabled", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "working", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ButtonComponent.prototype, "workingText", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Number, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ButtonComponent.prototype, "workingProgress", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'toggled', type: Boolean, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ButtonComponent.prototype, "toggledProp", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Boolean], default: false }),
        _tslib.__metadata("design:type", Object)
    ], ButtonComponent.prototype, "toggleTransition", void 0);
    _tslib.__decorate([
        themeVar_decorator.ThemeVar({
            name: 'animation.clickDuration',
            defaultValue: '30ms',
            transform: function (v) { return parseCssDuration.parseCssDuration(v); }
        }),
        _tslib.__metadata("design:type", Number)
    ], ButtonComponent.prototype, "clickDuration", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "active", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", String),
        _tslib.__metadata("design:paramtypes", [])
    ], ButtonComponent.prototype, "tagName", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], ButtonComponent.prototype, "hasToggleSlot", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], ButtonComponent.prototype, "isToggleSlotVisible", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], ButtonComponent.prototype, "isWorkingTextSlotVisible", null);
    _tslib.__decorate([
        ref_decorator.Ref(),
        _tslib.__metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "toggledAttr", void 0);
    _tslib.__decorate([
        ref_decorator.Ref(),
        _tslib.__metadata("design:type", Object)
    ], ButtonComponent.prototype, "keydownListener", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [typeof(window) !== 'undefined' ? UIEvent : Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onClick", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [typeof(window) !== 'undefined' ? UIEvent : Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "toggle", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "hideToggle", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onFocus", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onBlur", null);
    _tslib.__decorate([
        lifecycle_decorator.Lifecycle('beforeUnmount'),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "dispose", null);
    ButtonComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-button',
            components: [progressCircular_component_vue_vue_type_script_lang],
            directives: [clickOutside_directive.ClickOutsideDirective, bindTheme_directive.BindThemeDirective],
            emits: ['click']
        })
    ], ButtonComponent);
    return ButtonComponent;
}(vue.Vue));

module.exports = ButtonComponent;
