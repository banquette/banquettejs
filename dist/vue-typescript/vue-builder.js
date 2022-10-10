/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isFunction } from '@banquette/utils-type/is-function';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { createApp } from 'vue';

/**
 * Offer a convenient way to create a Vue instance only containing a limited number of components, organized by group.
 * All built-in Vue components of Banquette register themselves into the VueBuilder under one or multiple groups.
 *
 * For example, form components are registered under the "form" group, by calling:
 * `VueBuilder.RegisterComponent(FormInputComponent, ['default', 'form'])`.
 *
 * You can then create a Vue instance that has access to these component by doing:
 * `VueBuilder.Create('form')`.
 *
 * The VueBuilder is also used by the "VueApp" DOM module to create the app instance.
 */
var VueBuilder = /** @class */ (function () {
    function VueBuilder() {
    }
    /**
     * Register a component into the factory.
     *
     * When an instance of Vue is created using the factory, the component will be declared in the instance
     * if the group matches one of the groups the user is asking for.
     */
    VueBuilder.RegisterComponent = function (name, component, group) {
        if (group === void 0) { group = VueBuilder.DEFAULT_GROUP; }
        var groups = ensureArray(group);
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var group_1 = groups_1[_i];
            if (isUndefined(VueBuilder.Components[group_1])) {
                VueBuilder.Components[group_1] = {};
            }
            VueBuilder.Components[group_1][name] = component;
        }
    };
    /**
     * Register a directive into the factory.
     *
     * When an instance of Vue is created using the factory, the directive will be declared in the instance
     * if the group matches one of the groups the user is asking for.
     */
    VueBuilder.RegisterDirective = function (name, directive, group, ctor) {
        if (group === void 0) { group = VueBuilder.DEFAULT_GROUP; }
        if (ctor === void 0) { ctor = null; }
        var groups = ensureArray(group);
        for (var _i = 0, groups_2 = groups; _i < groups_2.length; _i++) {
            var group_2 = groups_2[_i];
            if (group_2 !== null) {
                if (isUndefined(VueBuilder.Directives[group_2])) {
                    VueBuilder.Directives[group_2] = {};
                }
                VueBuilder.Directives[group_2][name] = directive;
            }
        }
        if (ctor !== null) {
            VueBuilder.DirectivesConstructorsMap.set(ctor, { name: name, directive: directive });
        }
    };
    /**
     * Register a property that will be accessible to all components of the app.
     */
    VueBuilder.RegisterGlobalProperty = function (name, value) {
        VueBuilder.GlobalProperties[name] = value;
    };
    /**
     * Get the real directive object generated from the class constructor on which decorators have been set.
     */
    VueBuilder.GetDirectiveDefinition = function (ctor) {
        if (!VueBuilder.DirectivesConstructorsMap.has(ctor)) {
            throw new UsageException("No directive definition found for ".concat(ctor.name || '(Unnamed constructor)', "."));
        }
        return VueBuilder.DirectivesConstructorsMap.get(ctor);
    };
    /**
     * Register global options that will be merged with other options when creating any Vue app.
     */
    VueBuilder.SetVueOptions = function (options) {
        VueBuilder.Options = VueBuilder.MergeVueOptions(VueBuilder.Options || {}, options);
    };
    /**
     * Create a new Vue instance.
     */
    VueBuilder.CreateApp = function (group, options) {
        if (group === void 0) { group = VueBuilder.DEFAULT_GROUP; }
        if (options === void 0) { options = {}; }
        var app = createApp({});
        VueBuilder.ApplyToExistingApp(app, group, options);
        return app;
    };
    /**
     * Create a new Vue instance.
     */
    VueBuilder.CreateAppAndMount = function (element, group, options) {
        if (group === void 0) { group = VueBuilder.DEFAULT_GROUP; }
        if (options === void 0) { options = {}; }
        return VueBuilder.CreateApp(group, options).mount(element);
    };
    VueBuilder.ApplyToExistingApp = function (app, group, options) {
        if (group === void 0) { group = VueBuilder.DEFAULT_GROUP; }
        if (options === void 0) { options = {}; }
        var config = VueBuilder.MergeVueOptions({
            errorHandler: console.error,
            warnHandler: console.warn,
            globalProperties: VueBuilder.GlobalProperties,
            optionMergeStrategies: {},
            performance: false,
            compilerOptions: {
                isCustomElement: function () { return false; },
                whitespace: 'condense',
                delimiters: ['{{', '}}'],
                comments: false
            }
        }, VueBuilder.Options, options);
        for (var _i = 0, _a = Object.keys(config); _i < _a.length; _i++) {
            var key = _a[_i];
            app.config[key] = config[key];
        }
        var groups = (group === '*' ? Object.keys(VueBuilder.Components).concat(Object.keys(VueBuilder.Directives)) : ensureArray(group));
        groups = groups.filter(function (item, index) {
            return groups.indexOf(item) === index;
        });
        for (var _b = 0, groups_3 = groups; _b < groups_3.length; _b++) {
            var group_3 = groups_3[_b];
            if (!isUndefined(VueBuilder.Components[group_3])) {
                for (var _c = 0, _d = Object.keys(VueBuilder.Components[group_3]); _c < _d.length; _c++) {
                    var componentName = _d[_c];
                    app.component(componentName, VueBuilder.Components[group_3][componentName]);
                }
            }
            if (!isUndefined(VueBuilder.Directives[group_3])) {
                for (var _e = 0, _f = Object.keys(VueBuilder.Directives[group_3]); _e < _f.length; _e++) {
                    var directiveName = _f[_e];
                    app.directive(directiveName, VueBuilder.Directives[group_3][directiveName]);
                }
            }
        }
    };
    /**
     * Merge multiple arrays of vue options together.
     */
    VueBuilder.MergeVueOptions = function () {
        var arguments$1 = arguments;

        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments$1[_i];
        }
        var output = args[0];
        for (var i = 1; i < args.length; ++i) {
            var obj = args[i];
            for (var _a = 0, _b = Object.keys(obj); _a < _b.length; _a++) {
                var key = _b[_a];
                if (isFunction(output[key])) {
                    output[key] = (function (_f1, _f2) { return function () {
                        var arguments$1 = arguments;

                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments$1[_i];
                        }
                        return _f1.apply(_this, args) || _f2.apply(_this, args);
                    }; })(output[key], obj[key]);
                }
                else if (isObject(obj[key])) {
                    output[key] = VueBuilder.MergeVueOptions(output[key] || {}, obj[key]);
                }
                else {
                    output[key] = obj[key];
                }
            }
        }
        return output;
    };
    VueBuilder.DEFAULT_GROUP = 'default';
    /**
     * Components and directives to declare in a new Vue instance, indexed by group name.
     */
    VueBuilder.Components = {};
    VueBuilder.Directives = {};
    /**
     * Map between the real directive object and the constructor used to create it.
     */
    VueBuilder.DirectivesConstructorsMap = new WeakMap();
    /**
     * Options shared between all Vue apps.
     */
    VueBuilder.Options = {};
    /**
     * Global properties available to all Vue apps.
     */
    VueBuilder.GlobalProperties = {};
    return VueBuilder;
}());

export { VueBuilder };
