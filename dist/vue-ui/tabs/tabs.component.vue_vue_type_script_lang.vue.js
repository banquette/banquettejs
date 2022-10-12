/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { enumToArray } from '@banquette/utils-array/enum-to-array';
import { getElementOffset } from '@banquette/utils-dom/get-element-offset';
import { throttle } from '@banquette/utils-misc/throttle';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { TemplateRef } from '@banquette/vue-typescript/decorator/template-ref.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Vue } from '@banquette/vue-typescript/vue';
import { useResizeObserver } from '@vueuse/core';
import { TeleportDirective } from '../misc/teleport.directive.js';
import { TabsDirection } from './tab/constant.js';
import './tab/tab.component.vue.js';
import { ThemeConfiguration } from './theme-configuration.js';
import TabComponent from './tab/tab.component.vue_vue_type_script_lang.vue.js';

var TabsComponent = /** @class */ (function (_super) {
    __extends(TabsComponent, _super);
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
            this.focusedTabResizeUnsubscribe = useResizeObserver(this.focusedTab.$refs.toggle, function () {
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
        var offset = getElementOffset(this.focusedTab.$refs.toggle, false);
        var style = getComputedStyle(this.focusedTab.$refs.toggle);
        // In case the direction changed.
        if (this.direction === TabsDirection.Top) {
            var paddingLeft = parseFloat(style.paddingLeft);
            var paddingRight = parseFloat(style.paddingRight);
            this.indicatorEl.style.left = "".concat(Math.round(offset.left + paddingLeft), "px");
            this.indicatorEl.style.width = "".concat(Math.round(this.focusedTab.$refs.toggle.offsetWidth - (paddingLeft + paddingRight)), "px");
        }
        else if (this.direction === TabsDirection.Left || this.direction === TabsDirection.Right) {
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
        this.observer = new MutationObserver(throttle(function () {
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
    __decorate([
        Prop({ type: String, default: TabsDirection.Top, transform: function (value) {
                return enumToArray(TabsDirection).indexOf(value) > -1 ? value : TabsDirection.Top;
            } }),
        __metadata("design:type", String)
    ], TabsComponent.prototype, "direction", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], TabsComponent.prototype, "preRender", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", String)
    ], TabsComponent.prototype, "focused", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Array)
    ], TabsComponent.prototype, "toggleElements", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Boolean)
    ], TabsComponent.prototype, "hasFocusedTab", void 0);
    __decorate([
        TemplateRef('indicator'),
        __metadata("design:type", typeof(window) !== 'undefined' ? HTMLElement : Object)
    ], TabsComponent.prototype, "indicatorEl", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Array)
    ], TabsComponent.prototype, "getTabs", null);
    __decorate([
        Watch('focused'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TabsComponent.prototype, "onFocusedChange", null);
    __decorate([
        Watch('direction'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TabsComponent.prototype, "onDirectionChange", null);
    TabsComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-tabs',
            components: [TabComponent],
            directives: [TeleportDirective, BindThemeDirective],
            emits: ['update:focused']
        })
    ], TabsComponent);
    return TabsComponent;
}(Vue));

export { TabsComponent as default };