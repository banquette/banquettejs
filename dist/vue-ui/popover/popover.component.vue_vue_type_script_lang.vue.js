/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { isServer } from '@banquette/utils-misc/is-server';
import { isNumeric } from '@banquette/utils-type/is-numeric';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Import } from '@banquette/vue-typescript/decorator/import.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Vue } from '@banquette/vue-typescript/vue';
import '../misc/call/call.component.vue.js';
import '../misc/conditional-wrapper/conditional-wrapper.component.vue.js';
import '../misc/remote/remote.component.vue.js';
import '../misc/teleport/teleport.component.vue.js';
import '../misc/click-outside.directive.js';
import '../misc/collapsable.directive.js';
import { StickToDirective } from '../misc/stick-to.directive.js';
import '../misc/teleport.directive.js';
import '@banquette/api/api.service';
import '@banquette/dependency-injection/injector';
import '@banquette/utils-misc/proxy';
import '@banquette/vue-typescript/vue-builder';
import '../misc/client-only.component.vue.js';
import { PopoverComposable } from './popover.composable.js';
import { ThemeConfiguration } from './theme-configuration.js';
import ClientOnlyComponent from '../misc/client-only.component.vue_vue_type_script_lang.vue.js';
import TeleportComponent from '../misc/teleport/teleport.component.vue_vue_type_script_lang.vue.js';

var PopoverComponent = /** @class */ (function (_super) {
    __extends(PopoverComponent, _super);
    function PopoverComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shouldRender = false;
        _this.isVisible = false;
        _this.highestZIndex = null;
        return _this;
    }
    Object.defineProperty(PopoverComponent.prototype, "teleportTarget", {
        get: function () {
            if (this.popoverComposable.config.teleport === 'auto' && this.shouldTeleportToBody()) {
                return 'body';
            }
            if (!this.popoverComposable.config.teleport && this.popoverComposable.config.stickToOptions.target instanceof SVGElement) {
                return 'body';
            }
            return this.popoverComposable.config.teleport === 'auto' ? null : this.popoverComposable.config.teleport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "styles", {
        get: function () {
            var styles = {};
            if (this.popoverComposable) {
                if (this.popoverComposable.config.zIndex === 'auto') {
                    if (this.highestZIndex !== null) {
                        styles.zIndex = this.highestZIndex;
                    }
                }
                else {
                    styles.zIndex = this.popoverComposable.config.zIndex;
                }
            }
            return styles;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Vue lifecycle.
     */
    PopoverComponent.prototype.beforeMount = function () {
        this.popoverComposable.config.stickToOptions.enabled = false;
    };
    /**
     * Vue lifecycle.
     */
    PopoverComponent.prototype.mounted = function () {
        this.highestZIndex = this.findHighestZIndex();
    };
    /**
     * Vue lifecycle.
     */
    PopoverComponent.prototype.updated = function () {
        this.popoverComposable.config.stickToOptions.forceUpdate();
    };
    PopoverComponent.prototype.onEnter = function () {
        this.popoverComposable.config.stickToOptions.forceUpdate();
    };
    /**
     * @inheritDoc
     */
    PopoverComponent.prototype.hasNonEmptySlot = function (name) {
        return _super.prototype.hasNonEmptySlot.call(this, name);
    };
    PopoverComponent.prototype.onAfterLeave = function () {
        // In rare cases, the popover can be made visible just as Vue calls `onAfterLeave`,
        // in which case we must not disabled `stick-to` or the popover will be out of position.
        if (this.popoverComposable.config.visible) {
            return;
        }
        this.shouldRender = false;
        this.popoverComposable.config.stickToOptions.enabled = false;
        this.$forceUpdate();
    };
    PopoverComponent.prototype.onVisibilityChange = function (newValue) {
        var _this = this;
        if (newValue) {
            this.shouldRender = true;
            this.popoverComposable.config.stickToOptions.enabled = newValue;
            // Force update is required so the `v-bt-stick-to` directive updates.
            this.$forceUpdate();
            // Then wait a frame for the stick-to to update, so the popover is never out of position.
            setTimeout(function () {
                _this.isVisible = true;
            });
        }
        else {
            // Just set the flag to `false` and let Vue call `onAfterLeave`.
            this.isVisible = false;
        }
    };
    /**
     * Test if the floating element should be teleported in the body to be displayed properly.
     */
    PopoverComponent.prototype.shouldTeleportToBody = function () {
        if (isServer()) {
            return false;
        }
        var el = this.$el;
        while (el instanceof Element) {
            var styles = window.getComputedStyle(el);
            if (styles.overflow !== 'visible') {
                return true;
            }
            el = el.parentElement;
        }
        return false;
    };
    /**
     * Try to determine the best z-index based on parent elements z-indexes.
     */
    PopoverComponent.prototype.findHighestZIndex = function () {
        if (isServer()) {
            return null;
        }
        var el = this.$el;
        var max = null;
        while (el instanceof Element) {
            var styles = window.getComputedStyle(el);
            if (isNumeric(styles.zIndex)) {
                max = Math.max(max !== null ? max : -Infinity, parseInt(styles.zIndex, 10));
            }
            el = el.parentElement;
        }
        return max;
    };
    __decorate([
        Import(PopoverComposable, false),
        __metadata("design:type", PopoverComposable)
    ], PopoverComponent.prototype, "popoverComposable", void 0);
    __decorate([
        Prop({ type: [String, Boolean], default: undefined }),
        __metadata("design:type", Object)
    ], PopoverComponent.prototype, "transition", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], PopoverComponent.prototype, "renderHidden", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], PopoverComponent.prototype, "teleportTarget", null);
    __decorate([
        Computed(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], PopoverComponent.prototype, "styles", null);
    __decorate([
        Expose(),
        __metadata("design:type", Boolean)
    ], PopoverComponent.prototype, "shouldRender", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Boolean)
    ], PopoverComponent.prototype, "isVisible", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PopoverComponent.prototype, "updated", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PopoverComponent.prototype, "onEnter", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Boolean)
    ], PopoverComponent.prototype, "hasNonEmptySlot", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PopoverComponent.prototype, "onAfterLeave", null);
    __decorate([
        Watch('config.visible'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PopoverComponent.prototype, "onVisibilityChange", null);
    PopoverComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-popover',
            components: [ClientOnlyComponent, TeleportComponent],
            directives: [StickToDirective, BindThemeDirective],
            inheritAttrs: false
        })
    ], PopoverComponent);
    return PopoverComponent;
}(Vue));

export { PopoverComponent as default };
