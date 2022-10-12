/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { parseCssDuration } from '@banquette/utils-dom/parse-css-duration';
import { proxy } from '@banquette/utils-misc/proxy';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Lifecycle } from '@banquette/vue-typescript/decorator/lifecycle.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Ref } from '@banquette/vue-typescript/decorator/ref.decorator';
import { ThemeVar } from '@banquette/vue-typescript/decorator/theme-var.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Vue } from '@banquette/vue-typescript/vue';
import { ClickOutsideDirective } from '../../misc/click-outside.directive.js';
import '../../progress/progress-circular/progress-circular.component.vue.js';
import { ThemeConfiguration } from './theme-configuration.js';
import ProgressCircularComponent from '../../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js';

var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
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
            this.keydownListener = proxy(this.onKeyDown, this);
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
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "href", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "target", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "working", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "workingText", void 0);
    __decorate([
        Prop({ type: Number, default: null }),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "workingProgress", void 0);
    __decorate([
        Prop({ name: 'toggled', type: Boolean, default: null }),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "toggledProp", void 0);
    __decorate([
        Prop({ type: [String, Boolean], default: false }),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "toggleTransition", void 0);
    __decorate([
        ThemeVar({
            name: 'animation.clickDuration',
            defaultValue: '30ms',
            transform: function (v) { return parseCssDuration(v); }
        }),
        __metadata("design:type", Number)
    ], ButtonComponent.prototype, "clickDuration", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "active", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], ButtonComponent.prototype, "tagName", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], ButtonComponent.prototype, "hasToggleSlot", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], ButtonComponent.prototype, "isToggleSlotVisible", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], ButtonComponent.prototype, "isWorkingTextSlotVisible", null);
    __decorate([
        Ref(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "toggledAttr", void 0);
    __decorate([
        Ref(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "keydownListener", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof(window) !== 'undefined' ? UIEvent : Object]),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onClick", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof(window) !== 'undefined' ? UIEvent : Object]),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "toggle", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "hideToggle", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onFocus", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "onBlur", null);
    __decorate([
        Lifecycle('beforeUnmount'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ButtonComponent.prototype, "dispose", null);
    ButtonComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-button',
            components: [ProgressCircularComponent],
            directives: [ClickOutsideDirective, BindThemeDirective],
            emits: ['click']
        })
    ], ButtonComponent);
    return ButtonComponent;
}(Vue));

export { ButtonComponent as default };
