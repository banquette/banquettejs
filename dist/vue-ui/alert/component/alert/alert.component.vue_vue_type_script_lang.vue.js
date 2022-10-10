/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../_virtual/_tslib.js';
import { IconMaterialClose } from '@banquette/vue-material-icons/close';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Ref } from '@banquette/vue-typescript/decorator/ref.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Vue } from '@banquette/vue-typescript/vue';
import '../../../button/button/button.component.vue.js';
import '../../../button/button-group/button-group.component.vue.js';
import '../../../icon/icon.component.vue.js';
import '../../../progress/progress-horizontal/progress-horizontal.component.vue.js';
import { ThemeConfiguration } from './theme-configuration.js';
import IconComponent from '../../../icon/icon.component.vue_vue_type_script_lang.vue.js';
import ButtonComponent from '../../../button/button/button.component.vue_vue_type_script_lang.vue.js';
import ProgressHorizontalComponent from '../../../progress/progress-horizontal/progress-horizontal.component.vue_vue_type_script_lang.vue.js';

var AlertComponent = /** @class */ (function (_super) {
    __extends(AlertComponent, _super);
    function AlertComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Number of milliseconds the alert has left before it is destroyed.
         * Only defined if `ttl` has a value.
         */
        _this.timeLeft = null;
        /**
         * Internals.
         */
        _this.internalVisible = false;
        _this.ttlStartTime = null;
        _this.ttlTimeoutId = null;
        return _this;
    }
    Object.defineProperty(AlertComponent.prototype, "isVisible", {
        /**
         * Bidirectional binding for the visibility so the dialog can be closed
         * both from the inside and outside the component.
         */
        get: function () {
            return this.visible === true || this.internalVisible;
        },
        set: function (value) {
            this.$emit('update:visible', value);
        },
        enumerable: false,
        configurable: true
    });
    AlertComponent.prototype.hasSlot = function (name) {
        return _super.prototype.hasSlot.call(this, name);
    };
    /**
     * Vue lifecycle.
     */
    AlertComponent.prototype.mounted = function () {
        // `internalVisible` to true only after the first render
        // so the opening transition works.
        this.internalVisible = true;
    };
    /**
     * Show the alert.
     */
    AlertComponent.prototype.show = function () {
        this.isVisible = true;
        this.internalVisible = true;
        this.$forceUpdateComputed();
    };
    /**
     * Hide the alert.
     */
    AlertComponent.prototype.close = function () {
        this.isVisible = false;
        this.internalVisible = false;
        this.$forceUpdateComputed();
    };
    AlertComponent.prototype.onAfterLeave = function () {
        this.$emit('close');
    };
    AlertComponent.prototype.onTTLChange = function (newValue) {
        if (newValue === null) {
            this.timeLeft = null;
            return;
        }
        this.ttlStartTime = (new Date()).getTime();
        this.timeLeft = newValue;
        this.updateTimeLeft();
    };
    AlertComponent.prototype.onVisibilityChange = function (newValue) {
        if (newValue) {
            this.show();
        }
        else {
            this.close();
        }
    };
    /**
     * Animate the ttl.
     */
    AlertComponent.prototype.updateTimeLeft = function () {
        var _this = this;
        if (this.ttlTimeoutId !== null) {
            return;
        }
        this.ttlTimeoutId = window.requestAnimationFrame(function () {
            var ttl = _this.ttl;
            _this.ttlTimeoutId = null;
            if (ttl !== null && _this.ttlStartTime !== null) {
                _this.timeLeft = Math.max(0, ttl - ((new Date()).getTime() - _this.ttlStartTime));
            }
            else {
                _this.timeLeft = null;
            }
            if (_this.timeLeft) {
                _this.updateTimeLeft();
            }
            else if (_this.timeLeft === 0) {
                _this.close();
            }
        });
    };
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "title", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "icon", void 0);
    __decorate([
        Prop({ type: String, default: 'material' }),
        __metadata("design:type", String)
    ], AlertComponent.prototype, "iconSet", void 0);
    __decorate([
        Prop({ type: Number, default: null, transform: function (v) { return parseInt(String(v), 10) || null; } }),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "ttl", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "closable", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "allowHtml", void 0);
    __decorate([
        Prop({ type: [String, Boolean], default: undefined }),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "transition", void 0);
    __decorate([
        Prop({ type: Boolean, default: null }),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "visible", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AlertComponent.prototype, "isVisible", null);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "timeLeft", void 0);
    __decorate([
        Ref(),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "internalVisible", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Boolean)
    ], AlertComponent.prototype, "hasSlot", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlertComponent.prototype, "show", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlertComponent.prototype, "close", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AlertComponent.prototype, "onAfterLeave", null);
    __decorate([
        Watch('ttl', { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AlertComponent.prototype, "onTTLChange", null);
    __decorate([
        Watch('visible', { immediate: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], AlertComponent.prototype, "onVisibilityChange", null);
    AlertComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-alert',
            components: [IconComponent, ButtonComponent, ProgressHorizontalComponent, IconMaterialClose],
            directives: [BindThemeDirective],
            emits: ['update:visible', 'close'],
        })
    ], AlertComponent);
    return AlertComponent;
}(Vue));

export { AlertComponent as default };
