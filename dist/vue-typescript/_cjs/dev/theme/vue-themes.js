/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var eventDispatcher = require('@banquette/event/_cjs/dev/event-dispatcher');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var getObjectKeys = require('@banquette/utils-object/_cjs/dev/get-object-keys');
var trim = require('@banquette/utils-string/_cjs/dev/format/trim');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constant = require('./constant.js');
var vueTheme = require('./vue-theme.js');

var VueThemes = /** @class */ (function () {
    function VueThemes() {
    }
    /**
     * Set the name of the current theme.
     */
    VueThemes.SetCurrent = function (name) {
        if (name === constant.ThemeWildcard) {
            name = null;
        }
        if (name === VueThemes.CurrentThemeName) {
            return;
        }
        if (VueThemes.CurrentTheme !== null) {
            var theme = VueThemes.CurrentTheme;
            // Put the static variable to null before the call to free()
            // because it emits an events that rely on the static variable.
            VueThemes.CurrentTheme = null;
            theme.free();
        }
        if (name) {
            VueThemes.CurrentTheme = VueThemes.Get(name);
            VueThemes.CurrentTheme.use();
        }
        VueThemes.CurrentThemeName = name;
    };
    /**
     * Get the current global theme.
     */
    VueThemes.GetCurrent = function () {
        return VueThemes.CurrentTheme;
    };
    /**
     * Get or create a theme.
     */
    VueThemes.Get = function (name) {
        // If it's the first call ever, create the wildcard theme and mark it as used.
        if (isUndefined.isUndefined(VueThemes.Themes[constant.ThemeWildcard])) {
            VueThemes.Themes[constant.ThemeWildcard] = new vueTheme.VueTheme(constant.ThemeWildcard, VueThemes.EventDispatcher);
            VueThemes.Themes[constant.ThemeWildcard].use();
        }
        if (isUndefined.isUndefined(VueThemes.Themes[name])) {
            VueThemes.Themes[name] = new vueTheme.VueTheme(name, VueThemes.EventDispatcher);
        }
        return VueThemes.Themes[name];
    };
    /**
     * Check if a theme is defined.
     */
    VueThemes.Has = function (name) {
        if (name === constant.ThemeWildcard) {
            return true;
        }
        return !isUndefined.isUndefined(VueThemes.Themes[name]);
    };
    /**
     * Subscribe to an event that will trigger each time a new theme is added.
     */
    VueThemes.OnCreated = function (cb) {
        return VueThemes.EventDispatcher.subscribe(constant.ThemesEvents.ThemeCreated, cb);
    };
    /**
     * Subscribe to an event that will trigger each time the current theme changes.
     */
    VueThemes.OnChanged = function (cb) {
        return VueThemes.EventDispatcher.subscribe(constant.ThemesEvents.ThemeChanged, cb);
    };
    /**
     * Shorthand to define multiple variants at once, as an object.
     */
    VueThemes.Define = function (componentName, configuration) {
        var _a;
        var themeConfiguration = isArray.isArray(configuration) || VueThemes.IsVariantDefinitionInterface(configuration) ?
            (_a = {}, _a[constant.ThemeWildcard] = ensureArray.ensureArray(configuration), _a) :
            configuration;
        for (var _i = 0, _b = Object.keys(themeConfiguration); _i < _b.length; _i++) {
            var rawThemeName = _b[_i];
            var themesNames = rawThemeName.split(',').map(function (i) { return trim.trim(i); });
            for (var _c = 0, themesNames_1 = themesNames; _c < themesNames_1.length; _c++) {
                var themeName = themesNames_1[_c];
                var theme = VueThemes.Get(themeName);
                for (var _d = 0, _e = themeConfiguration[rawThemeName]; _d < _e.length; _d++) {
                    var variantConf = _e[_d];
                    var variant = theme.getVariant(variantConf.match, componentName);
                    for (var _f = 0, _g = getObjectKeys.getObjectKeys(variantConf); _f < _g.length; _f++) {
                        var method = _g[_f];
                        if (method !== 'match') {
                            variant[method](variantConf[method]);
                        }
                    }
                }
            }
        }
    };
    /**
     * Remove a theme.
     */
    VueThemes.Remove = function (name) {
        if (name === constant.ThemeWildcard) {
            throw new usage_exception.UsageException('You cannot remove the wildcard theme. But you can clear it by calling `clear()` on it if you want.');
        }
        if (isUndefined.isUndefined(VueThemes.Themes[name])) {
            delete VueThemes.Themes[name];
        }
    };
    /**
     * Test if the input is a VariantDefinitionInterface.
     */
    VueThemes.IsVariantDefinitionInterface = function (input) {
        return isObject.isObject(input) && 'match' in input && ('apply' in input || 'props' in input || 'cssVars' in input || 'cssSelectors' in input || 'cssCode' in input);
    };
    /**
     * A map of themes, indexed by name.
     *
     * The name `[ThemeWildcard]` is reserved and serves as a wildcard.
     * All components always have (at least) this theme applied.
     */
    VueThemes.Themes = {};
    /**
     * Name of the current theme.
     * This theme merges with the wildcard, and have full priority over it.
     */
    VueThemes.CurrentThemeName = null;
    /**
     * Instance of the current theme.
     */
    VueThemes.CurrentTheme = null;
    /**
     * Event dispatcher used to get a notification when a change is made.
     */
    VueThemes.EventDispatcher = new eventDispatcher.EventDispatcher();
    return VueThemes;
}());

exports.VueThemes = VueThemes;
