/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var enumToArray = require('@banquette/utils-array/_cjs/dev/enum-to-array');
var getElementOffset = require('@banquette/utils-dom/_cjs/dev/get-element-offset');
var throttle = require('@banquette/utils-misc/_cjs/dev/throttle');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var templateRef_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/template-ref.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
var core = require('@vueuse/core');
var teleport_directive = require('../misc/teleport.directive.js');
var constant = require('./tab/constant.js');
require('./tab/tab.component.vue.js');
var themeConfiguration = require('./theme-configuration.js');
var tab_component_vue_vue_type_script_lang = require('./tab/tab.component.vue_vue_type_script_lang.vue.js');

var TabsComponent = /** @class */ (function (_super) {
    _tslib.__extends(TabsComponent, _super);
    function TabsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleElements = [];
        _this.hasFocusedTab = false;
        _this.tabs = [];
        _this.observer = null;
        _this.focusedTab = null;
        _this.focusedTabResizeUnsubscribe = null;
        return _this;
    }
    /**
     * Vue lifecycle method.
     */
    TabsComponent.prototype.mounted = function () {
        this.observeDOMMutations();
    };
    /**
     * Vue lifecycle method.
     */
    TabsComponent.prototype.beforeUnmount = function () {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        if (this.focusedTabResizeUnsubscribe) {
            this.focusedTabResizeUnsubscribe();
            this.focusedTabResizeUnsubscribe = null;
        }
    };
    /**
     * Called by child tabs to register themselves.
     */
    TabsComponent.prototype.register = function (tab) {
        var domIdx = this.getTabToggleDomIndex(tab.$el);
        this.tabs.splice(domIdx, 0, tab);
        // Always focus the first tab so we have something in case the id provided by the user doesn't match any tab.
        if (this.tabs.length === 1 || this.focusedTab === null || tab.id === this.focused) {
            this.focus(tab);
        }
        this.$forceUpdate();
    };
    /**
     * Called by child tabs to unregister themselves.
     */
    TabsComponent.prototype.unregister = function (tab) {
        var pos = this.tabs.indexOf(tab);
        if (pos > -1) {
            this.tabs.splice(pos, 1);
            if (this.tabs.length > 0 && this.focusedTab === tab) {
                var i = void 0;
                // Cycle tabs from the tab replacing the deleted one until we come back to it from the beginning.
                for (i = 0; i < this.tabs.length; ++i) {
                    var idx = (i + pos) % this.tabs.length;
                    if (!this.tabs[idx].disabled && !this.tabs[idx].fake) {
                        this.focus(this.tabs[idx]);
                        break;
                    }
                }
                if (i >= this.tabs.length) {
                    this.setFocusedTab(null);
                    this.changeFocusIndicatorVisibility(false);
                }
            }
            this.$forceUpdate();
        }
    };
    /**
     * Focus a tab.
     */
    TabsComponent.prototype.focus = function (tab) {
        var _this = this;
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (candidate === tab && !candidate.focused) {
                if (candidate.disabled || candidate.fake) {
                    return;
                }
                if (this.focusedTab !== null) {
                    this.focusedTab.onUnFocus();
                }
                this.setFocusedTab(tab);
                this.$nextTick(function () {
                    _this.updateFocusIndicator();
                });
                candidate.onFocus();
                this.$emit('update:focused', candidate.id);
            }
        }
        if (this.focusedTab !== tab && !tab.disabled) {
            this.changeFocusIndicatorVisibility(false);
            this.setFocusedTab(null);
        }
        else if (this.focusedTab !== null) {
            this.changeFocusIndicatorVisibility(true);
        }
    };
    /**
     * Export the `tabs` array to the view without giving direct access
     * to prevent Vue from proxifing the objects.
     */
    TabsComponent.prototype.getTabs = function () {
        return this.tabs;
    };
    TabsComponent.prototype.onFocusedChange = function (newValue) {
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (candidate.id === newValue) {
                this.focus(candidate);
                break;
            }
        }
    };
    TabsComponent.prototype.onDirectionChange = function () {
        var _this = this;
        this.indicatorEl.removeAttribute('style');
        this.updateFocusIndicator();
        // Wait the end of the transition.
        setTimeout(function () {
            _this.updateFocusIndicator();
        }, 300);
    };
    TabsComponent.prototype.setFocusedTab = function (tab) {
        var _this = this;
        if (this.focusedTabResizeUnsubscribe) {
            this.focusedTabResizeUnsubscribe();
            this.focusedTabResizeUnsubscribe = null;
        }
        this.focusedTab = tab;
        this.hasFocusedTab = this.focusedTab !== null;
        if (this.focusedTab && this.focusedTab.$refs.toggle) {
            this.focusedTabResizeUnsubscribe = core.useResizeObserver(this.focusedTab.$refs.toggle, function () {
                _this.updateFocusIndicator();
            }).stop;
        }
    };
    /**
     * Show/hide the floating focus indicator.
     */
    TabsComponent.prototype.changeFocusIndicatorVisibility = function (visible) {
        if (this.indicatorEl) {
            this.indicatorEl.style.display = visible ? 'block' : 'none';
        }
    };
    /**
     * Update the position of the floating focus indicator.
     */
    TabsComponent.prototype.updateFocusIndicator = function () {
        if (!this.indicatorEl || !this.focusedTab || !this.focusedTab.$refs.toggle) {
            return;
        }
        var offset = getElementOffset.getElementOffset(this.focusedTab.$refs.toggle, false);
        var style = getComputedStyle(this.focusedTab.$refs.toggle);
        // In case the direction changed.
        if (this.direction === constant.TabsDirection.Top) {
            var paddingLeft = parseFloat(style.paddingLeft);
            var paddingRight = parseFloat(style.paddingRight);
            this.indicatorEl.style.left = "".concat(Math.round(offset.left + paddingLeft), "px");
            this.indicatorEl.style.width = "".concat(Math.round(this.focusedTab.$refs.toggle.offsetWidth - (paddingLeft + paddingRight)), "px");
        }
        else if (this.direction === constant.TabsDirection.Left || this.direction === constant.TabsDirection.Right) {
            var paddingTop = parseFloat(style.paddingTop);
            var paddingBottom = parseFloat(style.paddingBottom);
            this.indicatorEl.style.top = "".concat(Math.round(offset.top + paddingTop), "px");
            this.indicatorEl.style.height = "".concat(Math.round(this.focusedTab.$refs.toggle.offsetHeight - (paddingTop + paddingBottom)), "px");
        }
    };
    /**
     * Observe changes to the `<bt-tab>` container to maintain the ordering sync.
     */
    TabsComponent.prototype.observeDOMMutations = function () {
        var _this = this;
        this.observer = new MutationObserver(throttle.throttle(function () {
            // Sort the tabs by DOM index
            _this.tabs = _this.tabs.sort(function (a, b) {
                return _this.getTabToggleDomIndex(a.$el) - _this.getTabToggleDomIndex(b.$el);
            });
            // Force update the view
            _this.$forceUpdate();
            // If a tab is focused, wait a cycle for the render to update and update the focus indicator.
            if (_this.focusedTab !== null) {
                _this.$nextTick(function () {
                    _this.updateFocusIndicator();
                });
            }
        }, 100));
        this.observer.observe(this.$refs.content, {
            childList: true,
            attributes: false,
            subtree: false
        });
    };
    /**
     * Find the index of the root element of a `<bt-tab>` in the DOM.
     */
    TabsComponent.prototype.getTabToggleDomIndex = function (target) {
        var idx = 0;
        if (target.parentNode) {
            for (var _i = 0, _a = Object.values(target.parentNode.childNodes); _i < _a.length; _i++) {
                var node = _a[_i];
                if (node === target) {
                    return idx;
                }
                if (node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLElement && node.classList.contains('bt-tab')) {
                    ++idx;
                }
            }
        }
        return idx;
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: constant.TabsDirection.Top, transform: function (value) {
                return enumToArray.enumToArray(constant.TabsDirection).indexOf(value) > -1 ? value : constant.TabsDirection.Top;
            } }),
        _tslib.__metadata("design:type", String)
    ], TabsComponent.prototype, "direction", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], TabsComponent.prototype, "preRender", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", String)
    ], TabsComponent.prototype, "focused", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Array)
    ], TabsComponent.prototype, "toggleElements", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Boolean)
    ], TabsComponent.prototype, "hasFocusedTab", void 0);
    _tslib.__decorate([
        templateRef_decorator.TemplateRef('indicator'),
        _tslib.__metadata("design:type", typeof(window) !== 'undefined' ? HTMLElement : Object)
    ], TabsComponent.prototype, "indicatorEl", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", Array)
    ], TabsComponent.prototype, "getTabs", null);
    _tslib.__decorate([
        watch_decorator.Watch('focused'),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], TabsComponent.prototype, "onFocusedChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('direction'),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], TabsComponent.prototype, "onDirectionChange", null);
    TabsComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-tabs',
            components: [tab_component_vue_vue_type_script_lang],
            directives: [teleport_directive.TeleportDirective, bindTheme_directive.BindThemeDirective],
            emits: ['update:focused']
        })
    ], TabsComponent);
    return TabsComponent;
}(vue.Vue));

module.exports = TabsComponent;
