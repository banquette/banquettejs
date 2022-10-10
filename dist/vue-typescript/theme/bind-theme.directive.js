/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { proxy } from '@banquette/utils-misc/proxy';
import { ACTIVE_VARIANTS } from '../constants.js';
import { Directive } from '../decorator/directive.decorator.js';
import { anyToTsInst, anyToComponentMetadata } from '../utils/converters.js';
import { Vue } from '../vue.js';
import { getThemesForComponent } from './utils/get-themes-for-component.js';
import { matchVariant } from './utils/match-variants.js';
import { splitVariantString } from './utils/split-variant-string.js';
import { VueThemes } from './vue-themes.js';

var BindThemeDirective = /** @class */ (function (_super) {
    __extends(BindThemeDirective, _super);
    function BindThemeDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Array of themes to notify when the component mutates.
         */
        _this.trackingThemes = [];
        /**
         * Sorted list of active variants UIDs, joined as a string for quick comparison.
         */
        _this.activeVariantsAttributesStr = '';
        /**
         * Centralize the unsubscribe functions of all subscribed events.
         */
        _this.globalUnsubscribeFns = [];
        _this.computeChangesUnsubscribeFns = [];
        /**
         * Schedule a force update for the next tick while ensuring only one is made.
         */
        _this.scheduleForceUpdate = (function () {
            var scheduled = false;
            return function () {
                if (!scheduled) {
                    scheduled = true;
                    _this.instance.$nextTick(function () {
                        _this.forceUpdate();
                        scheduled = false;
                    });
                }
            };
        })();
        return _this;
    }
    /**
     * Vue lifecycle.
     */
    BindThemeDirective.prototype.created = function (el, bindings) {
        var _this = this;
        this.instance = anyToTsInst(bindings.instance);
        var metadata = anyToComponentMetadata(bindings.instance);
        var configuration = metadata ? metadata.themeable : null;
        if (!this.instance || !metadata) {
            throw new UsageException('The "v-bt-bind-theme" directive can only be used on vue-typescript components.');
        }
        if (!configuration) {
            throw new UsageException('You must add a @Themeable() decorator to your component to use the "v-bt-bind-theme" directive.');
        }
        this.metadata = metadata;
        this.configuration = configuration;
        this.globalUnsubscribeFns.push(VueThemes.OnChanged(function () {
            _this.computeChanges(el);
        }));
    };
    BindThemeDirective.prototype.beforeMount = function (el) {
        this.computeChanges(el);
    };
    /**
     * Vue lifecycle.
     */
    BindThemeDirective.prototype.beforeUpdate = function (el) {
        this.computeChanges(el);
    };
    /**
     * Vue lifecycle.
     */
    BindThemeDirective.prototype.updated = function () {
        for (var _i = 0, _a = this.trackingThemes; _i < _a.length; _i++) {
            var theme = _a[_i];
            // Notify the theme we have changed so other components can react to it.
            theme.notifyComponentChange(this.metadata.component.name);
        }
    };
    /**
     * Vue lifecycle.
     */
    BindThemeDirective.prototype.unmounted = function () {
        for (var _i = 0, _a = this.computeChangesUnsubscribeFns; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        for (var _b = 0, _c = this.globalUnsubscribeFns; _b < _c.length; _b++) {
            var fn = _c[_b];
            fn();
        }
        this.computeChangesUnsubscribeFns = [];
        this.globalUnsubscribeFns = [];
    };
    /**
     * Rematch all themes and variants for the component.
     */
    BindThemeDirective.prototype.computeChanges = function (el) {
        var _this = this;
        var themes = getThemesForComponent(this.instance);
        var themesParentsTrackers = [];
        var activeVariantsAttributes = [];
        var expectedVariants = splitVariantString(this.instance[this.configuration.prop] || '');
        this.instance[ACTIVE_VARIANTS] = [];
        // Find relevant variants for the state of the component.
        for (var _i = 0, themes_1 = themes; _i < themes_1.length; _i++) {
            var theme = themes_1[_i];
            var variantsCandidates = theme.getVariants(this.metadata.component.name);
            var themeParentsTracker = { theme: theme, trackedParentComponents: [] };
            var _loop_1 = function (variantCandidate) {
                if (matchVariant(variantCandidate, expectedVariants, this_1.instance)) {
                    this_1.instance[ACTIVE_VARIANTS].push(variantCandidate);
                    activeVariantsAttributes.push(variantCandidate.uid);
                    if (variantCandidate.applyIds.length > 0) {
                        this_1.instance[ACTIVE_VARIANTS] = this_1.instance[ACTIVE_VARIANTS].concat(variantsCandidates.filter(function (v) {
                            if (v.publicId !== null && variantCandidate.applyIds.indexOf(v.publicId) > -1 && _this.instance[ACTIVE_VARIANTS].indexOf(v) < 0) {
                                activeVariantsAttributes.push(v.uid);
                                return true;
                            }
                            return false;
                        }));
                    }
                    variantCandidate.use(this_1.instance, this_1.configuration);
                }
                // Find if the variant depends on parent components.
                for (var _h = 0, _j = variantCandidate.selector.candidates; _h < _j.length; _h++) {
                    var variantSelectorCandidate = _j[_h];
                    for (var _k = 0, _l = variantSelectorCandidate.parents; _k < _l.length; _k++) {
                        var parentSelector = _l[_k];
                        if (parentSelector.name !== this_1.metadata.component.name /* To prevent infinite loop */ &&
                            themeParentsTracker.trackedParentComponents.indexOf(parentSelector.name) < 0) {
                            themeParentsTracker.trackedParentComponents.push(parentSelector.name);
                        }
                    }
                }
            };
            var this_1 = this;
            for (var _a = 0, variantsCandidates_1 = variantsCandidates; _a < variantsCandidates_1.length; _a++) {
                var variantCandidate = variantsCandidates_1[_a];
                _loop_1(variantCandidate);
            }
            if (themeParentsTracker.trackedParentComponents.length > 0) {
                themesParentsTrackers.push(themeParentsTracker);
            }
        }
        // Check for changes and apply them if there are.
        var activeVariantsAttributesStr = activeVariantsAttributes.sort().join('#');
        if (this.activeVariantsAttributesStr !== activeVariantsAttributesStr) {
            // Reset previous state
            this.trackingThemes = [];
            for (var _b = 0, _c = this.computeChangesUnsubscribeFns; _b < _c.length; _b++) {
                var unsubscribeFn = _c[_b];
                unsubscribeFn();
            }
            var lastActiveVariantsAttributes = this.activeVariantsAttributesStr.split('#');
            for (var _d = 0, lastActiveVariantsAttributes_1 = lastActiveVariantsAttributes; _d < lastActiveVariantsAttributes_1.length; _d++) {
                var lastActiveAttribute = lastActiveVariantsAttributes_1[_d];
                if (lastActiveAttribute) {
                    el.removeAttribute('data-' + lastActiveAttribute);
                }
            }
            // Apply changes to the DOM
            for (var _e = 0, _f = this.instance[ACTIVE_VARIANTS]; _e < _f.length; _e++) {
                var item = _f[_e];
                el.setAttribute('data-' + item.uid, '');
                this.computeChangesUnsubscribeFns.push(item.onChange(proxy(this.scheduleForceUpdate, this)));
            }
            for (var _g = 0, themesParentsTrackers_1 = themesParentsTrackers; _g < themesParentsTrackers_1.length; _g++) {
                var item = themesParentsTrackers_1[_g];
                // Subscribe to changes of other components.
                this.computeChangesUnsubscribeFns.push(item.theme.onComponentsChange(item.trackedParentComponents, function () {
                    _this.computeChanges(el);
                }));
                this.trackingThemes.push(item.theme);
            }
            this.activeVariantsAttributesStr = activeVariantsAttributesStr;
        }
    };
    /**
     * Force the update of everything in the current instance.
     */
    BindThemeDirective.prototype.forceUpdate = function () {
        this.instance.$forceUpdateComputed();
        this.instance.$forceUpdate();
    };
    BindThemeDirective = __decorate([
        Directive('bt-bind-theme')
    ], BindThemeDirective);
    return BindThemeDirective;
}(Vue));

export { BindThemeDirective };
