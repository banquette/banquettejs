/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var extend = require('@banquette/utils-object/_cjs/dev/extend');
var getObjectKeys = require('@banquette/utils-object/_cjs/dev/get-object-keys');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isConstructor = require('@banquette/utils-type/_cjs/dev/is-constructor');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isNumeric = require('@banquette/utils-type/_cjs/dev/is-numeric');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var buildSetupMethod = require('./build-setup-method.js');
var constants = require('./constants.js');
var converters = require('./utils/converters.js');
var defineGetter = require('./utils/define-getter.js');
var getOrCreateComponentMetadata = require('./utils/get-or-create-component-metadata.js');
var guards = require('./utils/guards.js');
var injectVueProperties = require('./utils/inject-vue-properties.js');
var resolveImportPublicName = require('./utils/resolve-import-public-name.js');
var vueBuilder = require('./vue-builder.js');

/**
 * A cache for the Vue component options.
 */
var vccOptionsMap = new WeakMap();
/**
 * Generate the option object that will be used by Vue to create a component.
 */
function generateVccOpts(ctor, data) {
    if (!isUndefined.isUndefined(ctor.prototype[constants.DECORATORS_METADATA_CACHE]) && ctor.prototype[constants.DECORATORS_METADATA_CACHE][constants.COMPONENT_CTOR] === ctor) {
        return ctor.prototype[constants.DECORATORS_METADATA_CACHE];
    }
    var options = {};
    // Merge parent data
    var curCtor = ctor;
    var isTemplateInherited = data.component.template === 'inherit';
    while ((curCtor = Object.getPrototypeOf(curCtor)) !== null) {
        var parentOpts = !isUndefined.isUndefined(curCtor.prototype) ? curCtor.prototype[constants.DECORATORS_METADATA] : null;
        if (parentOpts !== null && isObject.isObject(parentOpts)) {
            if (!isUndefined.isUndefined(parentOpts.component) && isFunction.isFunction(parentOpts.component.factory) && !isFunction.isFunction(data.component.factory)) {
                throw new usage_exception.UsageException("You must define a factory function for \"".concat(data.component.name, "\" because it inherits ") +
                    "from \"".concat(parentOpts.component.name, "\" which defines one. "));
            }
            if (isTemplateInherited && parentOpts.component && isString.isString(parentOpts.component.template)) {
                data.component.template = parentOpts.component.template;
                isTemplateInherited = false;
            }
            data = extend.extend({}, [parentOpts, data], true);
        }
    }
    // Rename props with a custom name.
    var renamedProps = {};
    for (var _i = 0, _a = Object.keys(data.props); _i < _a.length; _i++) {
        var propName = _a[_i];
        renamedProps[data.props[propName].name || propName] = _tslib.__assign({}, data.props[propName]);
    }
    // Variant prop
    if (data.themeable) {
        if (!isUndefined.isUndefined(renamedProps[data.themeable.prop])) {
            throw new usage_exception.UsageException("A prop named \"".concat(data.themeable.prop, "\" is already defined, ") +
                "please define another name for the prop that defines the name of the variant to use. " +
                "You can set the \"prop\" option of the \"@Themeable\" decorator for that.");
        }
        renamedProps[data.themeable.prop] = { propertyName: data.themeable.prop, type: String, default: null };
    }
    data.props = renamedProps;
    options.props = renamedProps;
    // Merge composable props
    for (var _b = 0, _c = Object.keys(data.imports); _b < _c.length; _b++) {
        var targetProperty = _c[_b];
        var importOptions = data.imports[targetProperty];
        var composableCtor = importOptions.composable;
        if (guards.isDecoratedComponentConstructor(composableCtor)) {
            var composableDecorationData = getOrCreateComponentMetadata.getOrCreateComponentMetadata(composableCtor.prototype);
            for (var _d = 0, _e = Object.keys(composableDecorationData.props); _d < _e.length; _d++) {
                var subProp = _e[_d];
                var realPropName = resolveImportPublicName.resolveImportPublicName(targetProperty, subProp, importOptions.prefixOrAlias);
                if (realPropName !== false) {
                    if (!isUndefined.isUndefined(options[realPropName])) {
                        console.warn("The prop \"".concat(subProp, "\" from the composable \"").concat(composableCtor.name, "\" overrides an already defined prop with the same name (").concat(realPropName, ")."));
                    }
                    options.props[realPropName] = composableDecorationData.props[subProp];
                    options.props[realPropName].propertyName = realPropName;
                }
            }
        }
    }
    // Components
    if (!isUndefined.isUndefined(data.component.components)) {
        options.components = {};
        for (var _f = 0, _g = getObjectKeys.getObjectKeys(data.component.components); _f < _g.length; _f++) {
            var key = _g[_f];
            var item = data.component.components[key];
            var componentConstructor = isConstructor.isConstructor(item) ? item : (guards.isVccOpts(item) ? converters.vccOptsToCtor(item) : null);
            if (componentConstructor !== null) {
                var componentDecoratorsData = getOrCreateComponentMetadata.getOrCreateComponentMetadata(componentConstructor.prototype);
                var componentName = !isUndefined.isUndefined(componentDecoratorsData.component) ? componentDecoratorsData.component.name : key;
                options.components[componentName] = item;
            }
            else if (!isNumeric.isNumeric(key)) {
                options.components[key] = item;
            }
            else if (isString.isString(item.name)) {
                options.components[item.name] = item;
            }
            else {
                throw new usage_exception.UsageException("You must provide a name for the components added to the \"components\" option if they don't use `VueTypescript`.");
            }
        }
    }
    // Directives
    if (!isUndefined.isUndefined(data.component.directives)) {
        options.directives = {};
        for (var _h = 0, _j = getObjectKeys.getObjectKeys(data.component.directives); _h < _j.length; _h++) {
            var key = _j[_h];
            var directiveCtor = data.component.directives[key];
            var definition = vueBuilder.VueBuilder.GetDirectiveDefinition(directiveCtor);
            if (definition !== null) {
                options.directives[definition.name] = definition.directive;
            }
        }
    }
    // Hooks
    // Bind pre-construction hooks as is.
    for (var _k = 0, PRE_CONSTRUCTION_HOOKS_1 = constants.PRE_CONSTRUCTION_HOOKS; _k < PRE_CONSTRUCTION_HOOKS_1.length; _k++) {
        var hook = PRE_CONSTRUCTION_HOOKS_1[_k];
        if (isFunction.isFunction(ctor.prototype[hook])) {
            options[hook] = ctor.prototype[hook];
        }
    }
    // For other hooks, simulate a @Lifecycle() decorator.
    for (var _l = 0, _m = getObjectKeys.getObjectKeys(constants.HOOKS_MAP); _l < _m.length; _l++) {
        var hook = _m[_l];
        if (isFunction.isFunction(ctor.prototype[hook])) {
            if (!isArray.isArray(data.hooks[hook])) {
                data.hooks[hook] = [];
            }
            // @ts-ignore
            if (data.hooks[hook].indexOf(hook) < 0) {
                // @ts-ignore
                data.hooks[hook].push(hook);
            }
        }
    }
    // Emits
    options.emits = data.component.emits;
    // Setup
    options.setup = buildSetupMethod.buildSetupMethod(ctor, data);
    // Injections
    var fullOptionsMap = vccOptionsMap.get(ctor);
    if (isUndefined.isUndefined(fullOptionsMap)) {
        vccOptionsMap.set(ctor, options);
    }
    else {
        injectVueProperties.injectVueProperties(fullOptionsMap, options);
    }
    injectVueProperties.injectVueProperties(ctor, options);
    // Save the final options object into the prototype for caching.
    Object.defineProperty(ctor.prototype, constants.DECORATORS_METADATA_CACHE, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: options
    });
    // Save the ctor so we can retrieve it from the __vccOpts object.
    Object.defineProperty(options, constants.COMPONENT_CTOR, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: ctor
    });
    options.beforeCreate = function () {
        var _this = this;
        // Retrieve the Typescript instance from the Vue object.
        var inst = this.$[constants.COMPONENT_TS_INSTANCE];
        // In the context of `beforeCreate`, "this" is the Vue instance.
        // Keep a reference on it for closures below.
        var that = this;
        // Assign the Vue object (this) into the instance so the proxy around
        // the component can use the proxified object.
        Object.defineProperty(inst, constants.COMPONENT_VUE_INSTANCE, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: this
        });
        /**
         * Plugins are accessible from `this` on the component because it implements
         * `ComponentCustomProperties`, but the typings doesn't work without redefining the class
         * on the "project side" with what is missing.
         *
         * For example, to be able to do `this.$store` in a component, the user will have to
         * redefine the `Vue` base class to declare this new property, as `ComponentCustomProperties` is
         * empty when vue-typescript is built:
         *
         * ```
         * import { Vue as VueBase } from '@banquette/vue-typescript';
         * import { Store } from "vuex";
         *
         * export class Vue extends VueBase {
         *     declare $store: Store<State>;
         * }
         * ```
         * Now Typescript can see that `Vue` contains a variable `$store`.
         *
         * So to make it easier, a variable `$plugins` is added, that gives the exact same result.
         * So `this.$store` is exactly the same as `this.$plugins.$store`.
         *
         * The difference is that Typescript accepts that `$plugins` implements `ComponentCustomProperties`
         * with all its augmentations, so `$store` is available by simply doing:
         *
         * ```
         * import { Store } from 'vuex';
         *
         * declare module '@vue/runtime-core' {
         *     export interface ComponentCustomProperties {
         *         $store: Store<State>;
         *     }
         * }
         * ```
         * That most libs do on their own. So there is nothing to do for the end user.
         *
         * So basically here, we simply alias `this` through `$plugins`, so the linter is happy.
         *
         * It's important to add `$plugins` on the Vue instance though, and not the TS instance,
         * because all accesses to properties starting with a `$` are redirected to the Vue instance
         * by the global proxy around the component, defined in `buildSetupMethod()`.
         */
        defineGetter.defineGetter(this, '$plugins', function () { return that; });
        defineGetter.defineGetter(inst, '$', function () { return _this.$; });
        defineGetter.defineGetter(inst, '$props', function () { return _this.$props; });
        defineGetter.defineGetter(inst, '$attrs', function () { return _this.$attrs; });
        defineGetter.defineGetter(inst, '$slots', function () { return _this.$slots; });
        defineGetter.defineGetter(inst, '$emit', function () { return _this.$emit; });
        defineGetter.defineGetter(inst, '$data', function () { return _this.$data; });
        defineGetter.defineGetter(inst, '$el', function () { return _this.$el; });
        defineGetter.defineGetter(inst, '$options', function () { return _this.$options; });
        defineGetter.defineGetter(inst, '$refs', function () { return _this.$refs; });
        defineGetter.defineGetter(inst, '$root', function () { return _this.$root; });
        defineGetter.defineGetter(inst, '$forceUpdate', function () { return _this.$forceUpdate; });
        defineGetter.defineGetter(inst, '$nextTick', function () { return _this.$nextTick; });
        defineGetter.defineGetter(inst, '$watch', function () { return _this.$watch; });
        defineGetter.defineGetter(inst, '$parent', function () { return _this.$parent; });
        /**
         * Same goes for every other additional getter, they must be added to the Vue instance
         * if their name starts with a `$`.
         */
        defineGetter.defineGetter(this, '$resolvedParent', function () {
            var $parent = that.$parent;
            return $parent !== null ? converters.maybeResolveTsInst($parent) : null;
        });
    };
    // Template
    if (data.component.template === false) {
        options.render = function () { return false; };
    }
    else if (data.component.template === 'inherit' && isFunction.isFunction(ctor.render)) {
        // Assign the lowest render function in the inheritance hierarchy.
        options.render = ctor.render;
    }
    else if (isString.isString(data.component.template)) {
        options.template = data.component.template;
    }
    // Other options
    if (!isUndefined.isUndefined(data.component.inheritAttrs)) {
        options.inheritAttrs = data.component.inheritAttrs;
    }
    options.name = data.component.name;
    return options;
}

exports.generateVccOpts = generateVccOpts;
exports.vccOptionsMap = vccOptionsMap;
