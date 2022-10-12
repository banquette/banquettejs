/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var isServer = require('@banquette/utils-misc/_cjs/dev/is-server');
var isNumeric = require('@banquette/utils-type/_cjs/dev/is-numeric');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var import_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/import.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
require('../misc/call/call.component.vue.js');
require('../misc/conditional-wrapper/conditional-wrapper.component.vue.js');
require('../misc/remote/remote.component.vue.js');
require('../misc/teleport/teleport.component.vue.js');
require('../misc/click-outside.directive.js');
require('../misc/collapsable.directive.js');
var stickTo_directive = require('../misc/stick-to.directive.js');
require('../misc/teleport.directive.js');
require('@banquette/api/_cjs/dev/api.service');
require('@banquette/dependency-injection/_cjs/dev/injector');
require('@banquette/utils-misc/_cjs/dev/proxy');
require('@banquette/vue-typescript/_cjs/dev/vue-builder');
require('../misc/client-only.component.vue.js');
var popover_composable = require('./popover.composable.js');
var themeConfiguration = require('./theme-configuration.js');
var clientOnly_component_vue_vue_type_script_lang = require('../misc/client-only.component.vue_vue_type_script_lang.vue.js');
var teleport_component_vue_vue_type_script_lang = require('../misc/teleport/teleport.component.vue_vue_type_script_lang.vue.js');

var PopoverComponent = /** @class */ (function (_super) {
    _tslib.__extends(PopoverComponent, _super);
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
        if (isServer.isServer()) {
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
        if (isServer.isServer()) {
            return null;
        }
        var el = this.$el;
        var max = null;
        while (el instanceof Element) {
            var styles = window.getComputedStyle(el);
            if (isNumeric.isNumeric(styles.zIndex)) {
                max = Math.max(max !== null ? max : -Infinity, parseInt(styles.zIndex, 10));
            }
            el = el.parentElement;
        }
        return max;
    };
    _tslib.__decorate([
        import_decorator.Import(popover_composable.PopoverComposable, false),
        _tslib.__metadata("design:type", popover_composable.PopoverComposable)
    ], PopoverComponent.prototype, "popoverComposable", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Boolean], default: undefined }),
        _tslib.__metadata("design:type", Object)
    ], PopoverComponent.prototype, "transition", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], PopoverComponent.prototype, "renderHidden", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Object),
        _tslib.__metadata("design:paramtypes", [])
    ], PopoverComponent.prototype, "teleportTarget", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Object),
        _tslib.__metadata("design:paramtypes", [])
    ], PopoverComponent.prototype, "styles", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Boolean)
    ], PopoverComponent.prototype, "shouldRender", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Boolean)
    ], PopoverComponent.prototype, "isVisible", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverComponent.prototype, "updated", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverComponent.prototype, "onEnter", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [String]),
        _tslib.__metadata("design:returntype", Boolean)
    ], PopoverComponent.prototype, "hasNonEmptySlot", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverComponent.prototype, "onAfterLeave", null);
    _tslib.__decorate([
        watch_decorator.Watch('config.visible'),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverComponent.prototype, "onVisibilityChange", null);
    PopoverComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-popover',
            components: [clientOnly_component_vue_vue_type_script_lang, teleport_component_vue_vue_type_script_lang],
            directives: [stickTo_directive.StickToDirective, bindTheme_directive.BindThemeDirective],
            inheritAttrs: false
        })
    ], PopoverComponent);
    return PopoverComponent;
}(vue.Vue));

module.exports = PopoverComponent;
