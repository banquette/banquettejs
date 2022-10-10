/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { flattenObject } from '@banquette/utils-object/flatten-object';
import { kebabCase } from '@banquette/utils-string/case/kebab-case';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { getUniqueRandomId } from '../utils/get-unique-random-id.js';
import { ThemesEvents } from './constant.js';
import { ThemeVariantEvent } from './event/theme-variant.event.js';

var VueThemeVariant = /** @class */ (function () {
    function VueThemeVariant(theme, selector, eventDispatcher) {
        var _this = this;
        this.theme = theme;
        this.selector = selector;
        this.eventDispatcher = eventDispatcher;
        /**
         * Unique identifier that will be used to inject styles.
         */
        this.uid = getUniqueRandomId();
        /**
         * Public id of the variant, used to target the variant when using `apply`.
         */
        this.publicId = null;
        /**
         * Raw CSS to inject in the head (as written by the end-user).
         * Selectors will be scoped automatically if the component has scoped styles.
         */
        this.rawCss = '';
        /**
         * Key/value pair of css variables to override.
         */
        this.cssVarsMap = {};
        /**
         * Key/value pair of css selectors and their css rules to apply.
         */
        this.cssSelectorsMap = {};
        /**
         * Key/value pair holding propsMap values.
         */
        this.propsMap = {};
        /**
         * Shortcut for `Object.keys(this.propsMap)`.
         */
        this.propsKeys = [];
        /**
         * Ids of other variants to apply when the variant matches.
         */
        this.applyIds = [];
        /**
         * `true` if the variant has been used by a component.
         */
        this.used = false;
        /**
         * Define the priority of the variant relative to the other variants of the theme.
         * The higher the priority, the latest the variant will be processed, thus overriding previous variants.
         */
        this.priorityNumber = 0;
        /**
         * Schedule a `ThemesEvents.VariantUpdated` on the next JS cycle.
         */
        this.scheduleChangeNotification = (function () {
            var scheduled = false;
            return function () {
                if (scheduled) {
                    return;
                }
                scheduled = true;
                queueMicrotask(function () {
                    _this.notifyChange();
                    scheduled = false;
                });
            };
        })();
    }
    /**
     * Set the public id of the variant, used to target the variant when using `apply`.
     */
    VueThemeVariant.prototype.id = function (id) {
        this.publicId = id;
        return this;
    };
    /**
     * Alias of `appendCssCode`.
     */
    VueThemeVariant.prototype.cssCode = function (source) {
        return this.appendCssCode(source);
    };
    /**
     * Append raw css code to already registered one.
     */
    VueThemeVariant.prototype.appendCssCode = function (source) {
        this.rawCss += source;
        this.scheduleChangeNotification();
        return this;
    };
    /**
     * Add raw css code before already registered one.
     */
    VueThemeVariant.prototype.prependCssCode = function (source) {
        this.rawCss = source + this.rawCss;
        this.scheduleChangeNotification();
        return this;
    };
    /**
     * Remove registered css.
     */
    VueThemeVariant.prototype.clearCssCode = function () {
        this.rawCss = '';
        this.scheduleChangeNotification();
        return this;
    };
    /**
     * Define the value of a css variable.
     */
    VueThemeVariant.prototype.cssVar = function (name, value) {
        var _a;
        return this.cssVars((_a = {}, _a[name] = value, _a));
    };
    /**
     * Define multiple css vars as a key/value pair.
     */
    VueThemeVariant.prototype.cssVars = function (map) {
        Object.assign(this.cssVarsMap, flattenObject(map));
        this.scheduleChangeNotification();
        return this;
    };
    /**
     * Remove all css variables overrides.
     */
    VueThemeVariant.prototype.clearCssVars = function () {
        this.cssVarsMap = {};
        this.scheduleChangeNotification();
        return this;
    };
    /**
     * Define the css properties to associate to a single css selector.
     */
    VueThemeVariant.prototype.cssSelector = function (name, values) {
        var _a;
        return this.cssSelectors((_a = {}, _a[name] = values, _a));
    };
    /**
     * Define the css properties of multiple css selectors at once.
     */
    VueThemeVariant.prototype.cssSelectors = function (map) {
        var flattened = flattenObject(map, '.', -1);
        for (var _i = 0, _a = Object.keys(flattened); _i < _a.length; _i++) {
            var selector = _a[_i];
            if (isUndefined(this.cssSelectorsMap[selector])) {
                this.cssSelectorsMap[selector] = {};
            }
            if (isObject(flattened[selector])) {
                for (var _b = 0, _c = Object.keys(flattened[selector]); _b < _c.length; _b++) {
                    var rule = _c[_b];
                    var normalizedRule = kebabCase(rule);
                    this.cssSelectorsMap[selector][normalizedRule] = flattened[selector][rule];
                }
            }
        }
        this.scheduleChangeNotification();
        return this;
    };
    /**
     * Remove all css selectors overrides.
     */
    VueThemeVariant.prototype.clearCssSelectors = function () {
        this.cssSelectorsMap = {};
        this.scheduleChangeNotification();
        return this;
    };
    /**
     * Define the value of a prop.
     */
    VueThemeVariant.prototype.prop = function (name, value) {
        var _a;
        return this.props((_a = {}, _a[name] = value, _a));
    };
    /**
     * Define multiple props as a key/value pair.
     */
    VueThemeVariant.prototype.props = function (map) {
        Object.assign(this.propsMap, map);
        this.propsKeys = Object.keys(this.propsMap);
        this.scheduleChangeNotification();
        return this;
    };
    /**
     * Remove all props overrides.
     */
    VueThemeVariant.prototype.clearProps = function () {
        this.propsMap = {};
        this.propsKeys = [];
        this.scheduleChangeNotification();
        return this;
    };
    /**
     * Set one or multiple ids of other variants to apply when the variant matches.
     * Can only target variants of the same component and theme.
     */
    VueThemeVariant.prototype.apply = function (ids) {
        this.applyIds = ensureArray(ids);
        return this;
    };
    /**
     * Set the variant's priority.
     */
    VueThemeVariant.prototype.priority = function (priority) {
        this.priorityNumber = priority;
        this.eventDispatcher.dispatch(ThemesEvents.VariantPriorityChanged, new ThemeVariantEvent(this));
        return this;
    };
    /**
     * Mark the variant as used.
     */
    VueThemeVariant.prototype.use = function (component, configuration) {
        this.used = true;
        this.configuration = configuration;
        this.scopeId = component.$.type['__scopeId'] || null;
        this.eventDispatcher.dispatch(ThemesEvents.VariantUsed, new ThemeVariantEvent(this));
    };
    /**
     * Be notified when any value changes in the variant.
     */
    VueThemeVariant.prototype.onChange = function (cb) {
        return this.eventDispatcher.subscribe(ThemesEvents.VariantUpdated, cb);
    };
    /**
     * Be notified when the variant is used.
     */
    VueThemeVariant.prototype.onUse = function (cb) {
        return this.eventDispatcher.subscribe(ThemesEvents.VariantUsed, cb);
    };
    /**
     * Be notified when the priority of the variant is modified.
     */
    VueThemeVariant.prototype.onPriorityChange = function (cb) {
        return this.eventDispatcher.subscribe(ThemesEvents.VariantPriorityChanged, cb);
    };
    /**
     * Immediately notify listeners that a change occurred.
     */
    VueThemeVariant.prototype.notifyChange = function () {
        this.eventDispatcher.dispatch(ThemesEvents.VariantUpdated, new ThemeVariantEvent(this));
    };
    return VueThemeVariant;
}());

export { VueThemeVariant };
