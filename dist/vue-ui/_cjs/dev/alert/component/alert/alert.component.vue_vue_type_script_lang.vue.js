/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../../_virtual/_tslib.js');
var isServer = require('@banquette/utils-misc/_cjs/dev/is-server');
var close = require('@banquette/vue-material-icons/_cjs/dev/close');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var ref_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/ref.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
require('../../../button/button/button.component.vue.js');
require('../../../button/button-group/button-group.component.vue.js');
require('../../../icon/icon.component.vue.js');
require('../../../progress/progress-horizontal/progress-horizontal.component.vue.js');
var themeConfiguration = require('./theme-configuration.js');
var icon_component_vue_vue_type_script_lang = require('../../../icon/icon.component.vue_vue_type_script_lang.vue.js');
var button_component_vue_vue_type_script_lang = require('../../../button/button/button.component.vue_vue_type_script_lang.vue.js');
var progressHorizontal_component_vue_vue_type_script_lang = require('../../../progress/progress-horizontal/progress-horizontal.component.vue_vue_type_script_lang.vue.js');

var AlertComponent = /** @class */ (function (_super) {
    _tslib.__extends(AlertComponent, _super);
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
        if (this.ttlTimeoutId !== null || isServer.isServer()) {
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
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], AlertComponent.prototype, "title", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], AlertComponent.prototype, "icon", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'material' }),
        _tslib.__metadata("design:type", String)
    ], AlertComponent.prototype, "iconSet", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Number, default: null, transform: function (v) { return parseInt(String(v), 10) || null; } }),
        _tslib.__metadata("design:type", Object)
    ], AlertComponent.prototype, "ttl", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], AlertComponent.prototype, "closable", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], AlertComponent.prototype, "allowHtml", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Boolean], default: undefined }),
        _tslib.__metadata("design:type", Object)
    ], AlertComponent.prototype, "transition", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: null }),
        _tslib.__metadata("design:type", Object)
    ], AlertComponent.prototype, "visible", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [Boolean])
    ], AlertComponent.prototype, "isVisible", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], AlertComponent.prototype, "timeLeft", void 0);
    _tslib.__decorate([
        ref_decorator.Ref(),
        _tslib.__metadata("design:type", Boolean)
    ], AlertComponent.prototype, "internalVisible", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [String]),
        _tslib.__metadata("design:returntype", Boolean)
    ], AlertComponent.prototype, "hasSlot", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], AlertComponent.prototype, "show", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], AlertComponent.prototype, "close", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], AlertComponent.prototype, "onAfterLeave", null);
    _tslib.__decorate([
        watch_decorator.Watch('ttl', { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], AlertComponent.prototype, "onTTLChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('visible', { immediate: false }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Boolean]),
        _tslib.__metadata("design:returntype", void 0)
    ], AlertComponent.prototype, "onVisibilityChange", null);
    AlertComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-alert',
            components: [icon_component_vue_vue_type_script_lang, button_component_vue_vue_type_script_lang, progressHorizontal_component_vue_vue_type_script_lang, close.IconMaterialClose],
            directives: [bindTheme_directive.BindThemeDirective],
            emits: ['update:visible', 'close'],
        })
    ], AlertComponent);
    return AlertComponent;
}(vue.Vue));

module.exports = AlertComponent;
