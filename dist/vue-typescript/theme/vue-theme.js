/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isServer } from '@banquette/utils-misc/is-server';
import { trim } from '@banquette/utils-string/format/trim';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { getUniqueRandomId } from '../utils/get-unique-random-id.js';
import { ThemesEvents, ThemeWildcard } from './constant.js';
import { ThemeComponentChangedEvent } from './event/theme-component-changed.event.js';
import { ThemeEvent } from './event/theme.event.js';
import { injectContextInCssSource } from './utils/inject-context-in-css-source.js';
import { normalizeVariantSelector } from './utils/normalize-variant-selector.js';
import { VueThemeVariant } from './vue-theme-variant.js';

var VueTheme = /** @class */ (function () {
    function VueTheme(name, eventDispatcher) {
        this.name = name;
        this.eventDispatcher = eventDispatcher;
        /**
         * An object holding all the variants of a theme, indexed by component name.
         */
        this.variants = {};
        /**
         * Incremented each time injectInDOM() is called.
         * Decremented each time clearDOM() is called.
         *
         * The clear only really happen when the usage count reaches 0.
         */
        this.usageCount = 0;
        this.id = getUniqueRandomId();
    }
    /**
     * Get all variants of a component.
     */
    VueTheme.prototype.getVariants = function (componentName) {
        return !isUndefined(this.variants[componentName]) ? this.variants[componentName].variants : [];
    };
    /**
     * Get or create a theme variant.
     */
    VueTheme.prototype.getVariant = function (selector, componentName) {
        var _this = this;
        var normalizedVariantSelector = normalizeVariantSelector(selector);
        var variantId = normalizedVariantSelector.identifier;
        if (isUndefined(this.variants[componentName])) {
            this.variants[componentName] = { variants: [], variantsIndex: {}, styleElement: null };
        }
        if (isUndefined(this.variants[componentName].variantsIndex[variantId])) {
            var variant_1 = new VueThemeVariant(this, normalizedVariantSelector, this.eventDispatcher);
            this.variants[componentName].variantsIndex[variantId] = {
                variant: variant_1,
                onUseUnsubscribeFn: variant_1.onUse(function (event) {
                    if (event.variant === variant_1) {
                        _this.variants[componentName].variantsIndex[variantId].onUseUnsubscribeFn();
                        _this.injectInDOM();
                    }
                }),
                onChangeUnsubscribeFn: variant_1.onChange(function (event) {
                    if (event.variant === variant_1) {
                        _this.injectInDOM();
                    }
                }),
                onPriorityChangedUnsubscribeFn: variant_1.onPriorityChange(function () {
                    _this.variants[componentName].variants = _this.variants[componentName].variants.sort(function (a, b) {
                        return a.priorityNumber - b.priorityNumber;
                    });
                }),
            };
            this.variants[componentName].variants.push(variant_1);
        }
        return this.variants[componentName].variantsIndex[variantId].variant;
    };
    /**
     * Remove a variant.
     */
    VueTheme.prototype.removeVariant = function (selector, componentName) {
        var variantId = normalizeVariantSelector(selector).identifier;
        if (!isUndefined(this.variants[componentName]) && !isUndefined(this.variants[componentName].variantsIndex[variantId])) {
            this.variants[componentName].variantsIndex[variantId].onUseUnsubscribeFn();
            this.variants[componentName].variantsIndex[variantId].onChangeUnsubscribeFn();
            var variantInstance = this.variants[componentName].variantsIndex[variantId];
            var pos = this.variants[componentName].variants.indexOf(variantInstance.variant);
            if (pos > -1) {
                this.variants[componentName].variants.splice(pos, 1);
            }
            delete this.variants[componentName].variantsIndex[variantId];
        }
    };
    /**
     * Remove all variants of one or multiple components.
     * If `componentName` is `null`, all variants of all components are removed.
     */
    VueTheme.prototype.clear = function (componentName) {
        if (componentName === void 0) { componentName = null; }
        if (componentName === null) {
            this.variants = {};
            return;
        }
        var componentNames = ensureArray(componentName);
        for (var _i = 0, componentNames_1 = componentNames; _i < componentNames_1.length; _i++) {
            var item = componentNames_1[_i];
            if (!isUndefined(this.variants[item])) {
                for (var _a = 0, _b = Object.values(this.variants[item]); _a < _b.length; _a++) {
                    var variant = _b[_a];
                    variant.onUseUnsubscribeFn();
                    variant.onChangeUnsubscribeFn();
                }
                delete this.variants[item];
            }
        }
    };
    /**
     * Mark the theme as used, injecting its styles into the DOM.
     */
    VueTheme.prototype.use = function () {
        ++this.usageCount;
        this.injectInDOM();
        this.eventDispatcher.dispatch(ThemesEvents.ThemeChanged, new ThemeEvent(this));
    };
    /**
     * Mark the theme as unused.
     */
    VueTheme.prototype.free = function () {
        if (--this.usageCount <= 0) {
            this.clearDOM();
        }
        this.eventDispatcher.dispatch(ThemesEvents.ThemeChanged, new ThemeEvent(null));
    };
    /**
     * Inject the <style> element containing all the active styles of the theme.
     */
    VueTheme.prototype.injectInDOM = function () {
        if (isServer()) {
            return;
        }
        var tmpIdentifier = [];
        for (var _i = 0, _a = Object.keys(this.variants); _i < _a.length; _i++) {
            var componentName = _a[_i];
            var componentStyles = '';
            var component = this.variants[componentName];
            for (var _b = 0, _c = component.variants; _b < _c.length; _b++) {
                var variant = _c[_b];
                if (!variant.used) {
                    continue;
                }
                var variantStyles = trim(variant.rawCss);
                for (var _d = 0, _e = Object.keys(variant.cssSelectorsMap); _d < _e.length; _d++) {
                    var rawSelectorKey = _e[_d];
                    var selectorsKeys = rawSelectorKey.split(',');
                    var _loop_1 = function (selectorKey) {
                        var finalSelector = '';
                        var selectorKeyParts = selectorKey.split(' ');
                        var selectorAttributes = Object.keys(variant.cssSelectorsMap[rawSelectorKey]);
                        for (var _h = 0, selectorKeyParts_1 = selectorKeyParts; _h < selectorKeyParts_1.length; _h++) {
                            var selectorPart = selectorKeyParts_1[_h];
                            var matchingSelector = variant.configuration.css.selectors.static[selectorPart];
                            if (isUndefined(matchingSelector)) {
                                matchingSelector = null;
                                for (var _j = 0, _k = variant.configuration.css.selectors.dynamic; _j < _k.length; _j++) {
                                    var candidateSelector = _k[_j];
                                    var matches = Array.from(selectorPart.matchAll(candidateSelector.pattern));
                                    if (matches.length > 0) {
                                        finalSelector += (finalSelector ? ' ' : '') + candidateSelector.selector;
                                        matches.forEach(function (match, index) {
                                            finalSelector = finalSelector.replace("$".concat(index + 1), match[1]);
                                        });
                                        break;
                                    }
                                }
                            }
                            else {
                                finalSelector += (finalSelector ? ' ' : '') + matchingSelector;
                            }
                        }
                        if (finalSelector && finalSelector.length > 0) {
                            variantStyles += finalSelector + " {\n";
                            for (var _l = 0, selectorAttributes_1 = selectorAttributes; _l < selectorAttributes_1.length; _l++) {
                                var rule = selectorAttributes_1[_l];
                                variantStyles += "".concat(rule, ": ").concat(variant.cssSelectorsMap[rawSelectorKey][rule], ";\n");
                            }
                            variantStyles += "}\n";
                        }
                    };
                    for (var _f = 0, selectorsKeys_1 = selectorsKeys; _f < selectorsKeys_1.length; _f++) {
                        var selectorKey = selectorsKeys_1[_f];
                        _loop_1(selectorKey);
                    }
                }
                if (variantStyles.length > 0) {
                    variantStyles = injectContextInCssSource(variantStyles, variant.theme.id, "data-".concat(variant.uid), variant.scopeId);
                    variantStyles += "\n";
                }
                var cssVarsKeys = Object.keys(variant.cssVarsMap);
                if (cssVarsKeys.length > 0) {
                    tmpIdentifier.push(variant.theme.id);
                    variantStyles += ".".concat(variant.theme.id, " [data-").concat(variant.uid, "]") + (variant.scopeId !== null ? "[".concat(variant.scopeId, "]") : '');
                    variantStyles += " {\n";
                    for (var _g = 0, cssVarsKeys_1 = cssVarsKeys; _g < cssVarsKeys_1.length; _g++) {
                        var key = cssVarsKeys_1[_g];
                        if (!isUndefined(variant.configuration.css.vars[key])) {
                            var varName = variant.configuration.css.vars[key];
                            var prefix = '';
                            if (varName[0] === '@') {
                                varName = varName.substring(1);
                                prefix = variant.configuration.componentName;
                            }
                            variantStyles += "    --".concat(prefix).concat(varName, ": ").concat(variant.cssVarsMap[key], ";") + "\n";
                        }
                    }
                    variantStyles += "}\n";
                }
                componentStyles += variantStyles;
            }
            if (componentStyles.length > 0) {
                if (component.styleElement === null) {
                    var style = document.createElement('style');
                    style.setAttribute('type', 'text/css');
                    component.styleElement = style;
                    var l = VueTheme.ActiveWildcardStyleElements.length;
                    if (l && VueTheme.ActiveWildcardStyleElements[l - 1].parentNode && VueTheme.ActiveWildcardStyleElements[l - 1].nextSibling) {
                        VueTheme.ActiveWildcardStyleElements[l - 1].parentNode.insertBefore(style, VueTheme.ActiveWildcardStyleElements[l - 1].nextSibling);
                    }
                    else {
                        var headChildren = Array.from(document.head.children), i = void 0;
                        for (i = 0; i < headChildren.length; ++i) {
                            if (headChildren[i].tagName.toLowerCase() === 'style') {
                                document.head.insertBefore(style, headChildren[i]);
                                break;
                            }
                        }
                        if (i >= headChildren.length) {
                            document.head.appendChild(style);
                        }
                    }
                    if (this.name === ThemeWildcard) {
                        VueTheme.ActiveWildcardStyleElements.push(style);
                    }
                }
                component.styleElement.innerHTML = componentStyles;
            }
            else if (component.styleElement !== null) {
                if (this.name === ThemeWildcard) {
                    for (var i = 0; i < VueTheme.ActiveWildcardStyleElements.length; ++i) {
                        if (VueTheme.ActiveWildcardStyleElements[i] === component.styleElement) {
                            VueTheme.ActiveWildcardStyleElements.splice(i, 1);
                            break;
                        }
                    }
                }
                component.styleElement.remove();
                component.styleElement = null;
            }
        }
        document.documentElement.classList.add(this.id);
    };
    /**
     * Remove the injected styles from the dom.
     */
    VueTheme.prototype.clearDOM = function () {
        for (var _i = 0, _a = Object.keys(this.variants); _i < _a.length; _i++) {
            var componentName = _a[_i];
            var component = this.variants[componentName];
            if (component.styleElement !== null) {
                component.styleElement.remove();
                component.styleElement = null;
            }
        }
        document.documentElement.classList.remove(this.id);
    };
    /**
     * Notify the theme that a component has changed, so it can dispatch the info to other components
     * that may depend on it indirectly.
     */
    VueTheme.prototype.notifyComponentChange = function (name) {
        this.eventDispatcher.dispatch(ThemesEvents.ThemeComponentChanged, new ThemeComponentChangedEvent(this, name));
    };
    /**
     * Subscribe to an event that will trigger each time a variant is modified.
     */
    VueTheme.prototype.onUpdated = function (cb) {
        return this.eventDispatcher.subscribe(ThemesEvents.VariantUpdated, cb);
    };
    /**
     * Subscribe to an event that will trigger when any component of the `componentNames` list notify the theme of a change.
     */
    VueTheme.prototype.onComponentsChange = function (componentsNames, cb) {
        var _this = this;
        return this.eventDispatcher.subscribe(ThemesEvents.ThemeComponentChanged, function (event) {
            if (event.theme === _this && componentsNames.indexOf(event.componentName) > -1) {
                cb();
            }
        });
    };
    VueTheme.ActiveWildcardStyleElements = [];
    return VueTheme;
}());

export { VueTheme };
