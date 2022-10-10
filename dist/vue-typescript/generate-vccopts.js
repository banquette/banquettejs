/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __assign } from './_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { extend } from '@banquette/utils-object/extend';
import { getObjectKeys } from '@banquette/utils-object/get-object-keys';
import { isArray } from '@banquette/utils-type/is-array';
import { isConstructor } from '@banquette/utils-type/is-constructor';
import { isFunction } from '@banquette/utils-type/is-function';
import { isNumeric } from '@banquette/utils-type/is-numeric';
import { isObject } from '@banquette/utils-type/is-object';
import { isString } from '@banquette/utils-type/is-string';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { buildSetupMethod } from './build-setup-method.js';
import { DECORATORS_METADATA_CACHE, COMPONENT_CTOR, DECORATORS_METADATA, HOOKS_MAP, COMPONENT_TS_INSTANCE, COMPONENT_VUE_INSTANCE, PRE_CONSTRUCTION_HOOKS } from './constants.js';
import { vccOptsToCtor, maybeResolveTsInst } from './utils/converters.js';
import { defineGetter } from './utils/define-getter.js';
import { getOrCreateComponentMetadata } from './utils/get-or-create-component-metadata.js';
import { isDecoratedComponentConstructor, isVccOpts } from './utils/guards.js';
import { injectVueProperties } from './utils/inject-vue-properties.js';
import { resolveImportPublicName } from './utils/resolve-import-public-name.js';
import { VueBuilder } from './vue-builder.js';

/**
 * A cache for the Vue component options.
 */
var vccOptionsMap = new WeakMap();
/**
 * Generate the option object that will be used by Vue to create a component.
 */
function generateVccOpts(ctor, data) {
    if (!isUndefined(ctor.prototype[DECORATORS_METADATA_CACHE]) && ctor.prototype[DECORATORS_METADATA_CACHE][COMPONENT_CTOR] === ctor) {
        return ctor.prototype[DECORATORS_METADATA_CACHE];
    }
    var options = {};
    // Merge parent data
    var curCtor = ctor;
    var isTemplateInherited = data.component.template === 'inherit';
    while ((curCtor = Object.getPrototypeOf(curCtor)) !== null) {
        var parentOpts = !isUndefined(curCtor.prototype) ? curCtor.prototype[DECORATORS_METADATA] : null;
        if (parentOpts !== null && isObject(parentOpts)) {
            if (!isUndefined(parentOpts.component) && isFunction(parentOpts.component.factory) && !isFunction(data.component.factory)) {
                throw new UsageException("You must define a factory function for \"".concat(data.component.name, "\" because it inherits ") +
                    "from \"".concat(parentOpts.component.name, "\" which defines one. "));
            }
            if (isTemplateInherited && parentOpts.component && isString(parentOpts.component.template)) {
                data.component.template = parentOpts.component.template;
                isTemplateInherited = false;
            }
            data = extend({}, [parentOpts, data], true);
        }
    }
    // Rename props with a custom name.
    var renamedProps = {};
    for (var _i = 0, _a = Object.keys(data.props); _i < _a.length; _i++) {
        var propName = _a[_i];
        renamedProps[data.props[propName].name || propName] = __assign({}, data.props[propName]);
    }
    // Variant prop
    if (data.themeable) {
        if (!isUndefined(renamedProps[data.themeable.prop])) {
            throw new UsageException("A prop named \"".concat(data.themeable.prop, "\" is already defined, ") +
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
        if (isDecoratedComponentConstructor(composableCtor)) {
            var composableDecorationData = getOrCreateComponentMetadata(composableCtor.prototype);
            for (var _d = 0, _e = Object.keys(composableDecorationData.props); _d < _e.length; _d++) {
                var subProp = _e[_d];
                var realPropName = resolveImportPublicName(targetProperty, subProp, importOptions.prefixOrAlias);
                if (realPropName !== false) {
                    if (!isUndefined(options[realPropName])) {
                        console.warn("The prop \"".concat(subProp, "\" from the composable \"").concat(composableCtor.name, "\" overrides an already defined prop with the same name (").concat(realPropName, ")."));
                    }
                    options.props[realPropName] = composableDecorationData.props[subProp];
                    options.props[realPropName].propertyName = realPropName;
                }
            }
        }
    }
    // Components
    if (!isUndefined(data.component.components)) {
        options.components = {};
        for (var _f = 0, _g = getObjectKeys(data.component.components); _f < _g.length; _f++) {
            var key = _g[_f];
            var item = data.component.components[key];
            var componentConstructor = isConstructor(item) ? item : (isVccOpts(item) ? vccOptsToCtor(item) : null);
            if (componentConstructor !== null) {
                var componentDecoratorsData = getOrCreateComponentMetadata(componentConstructor.prototype);
                var componentName = !isUndefined(componentDecoratorsData.component) ? componentDecoratorsData.component.name : key;
                options.components[componentName] = item;
            }
            else if (!isNumeric(key)) {
                options.components[key] = item;
            }
            else if (isString(item.name)) {
                options.components[item.name] = item;
            }
            else {
                throw new UsageException("You must provide a name for the components added to the \"components\" option if they don't use `VueTypescript`.");
            }
        }
    }
    // Directives
    if (!isUndefined(data.component.directives)) {
        options.directives = {};
        for (var _h = 0, _j = getObjectKeys(data.component.directives); _h < _j.length; _h++) {
            var key = _j[_h];
            var directiveCtor = data.component.directives[key];
            var definition = VueBuilder.GetDirectiveDefinition(directiveCtor);
            if (definition !== null) {
                options.directives[definition.name] = definition.directive;
            }
        }
    }
    // Hooks
    // Bind pre-construction hooks as is.
    for (var _k = 0, PRE_CONSTRUCTION_HOOKS_1 = PRE_CONSTRUCTION_HOOKS; _k < PRE_CONSTRUCTION_HOOKS_1.length; _k++) {
        var hook = PRE_CONSTRUCTION_HOOKS_1[_k];
        if (isFunction(ctor.prototype[hook])) {
            options[hook] = ctor.prototype[hook];
        }
    }
    // For other hooks, simulate a @Lifecycle() decorator.
    for (var _l = 0, _m = getObjectKeys(HOOKS_MAP); _l < _m.length; _l++) {
        var hook = _m[_l];
        if (isFunction(ctor.prototype[hook])) {
            if (!isArray(data.hooks[hook])) {
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
    options.setup = buildSetupMethod(ctor, data);
    // Injections
    var fullOptionsMap = vccOptionsMap.get(ctor);
    if (isUndefined(fullOptionsMap)) {
        vccOptionsMap.set(ctor, options);
    }
    else {
        injectVueProperties(fullOptionsMap, options);
    }
    injectVueProperties(ctor, options);
    // Save the final options object into the prototype for caching.
    Object.defineProperty(ctor.prototype, DECORATORS_METADATA_CACHE, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: options
    });
    // Save the ctor so we can retrieve it from the __vccOpts object.
    Object.defineProperty(options, COMPONENT_CTOR, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: ctor
    });
    options.beforeCreate = function () {
        var _this = this;
        // Retrieve the Typescript instance from the Vue object.
        var inst = this.$[COMPONENT_TS_INSTANCE];
        // In the context of `beforeCreate`, "this" is the Vue instance.
        // Keep a reference on it for closures below.
        var that = this;
        // Assign the Vue object (this) into the instance so the proxy around
        // the component can use the proxified object.
        Object.defineProperty(inst, COMPONENT_VUE_INSTANCE, {
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
        defineGetter(this, '$plugins', function () { return that; });
        defineGetter(inst, '$', function () { return _this.$; });
        defineGetter(inst, '$props', function () { return _this.$props; });
        defineGetter(inst, '$attrs', function () { return _this.$attrs; });
        defineGetter(inst, '$slots', function () { return _this.$slots; });
        defineGetter(inst, '$emit', function () { return _this.$emit; });
        defineGetter(inst, '$data', function () { return _this.$data; });
        defineGetter(inst, '$el', function () { return _this.$el; });
        defineGetter(inst, '$options', function () { return _this.$options; });
        defineGetter(inst, '$refs', function () { return _this.$refs; });
        defineGetter(inst, '$root', function () { return _this.$root; });
        defineGetter(inst, '$forceUpdate', function () { return _this.$forceUpdate; });
        defineGetter(inst, '$nextTick', function () { return _this.$nextTick; });
        defineGetter(inst, '$watch', function () { return _this.$watch; });
        defineGetter(inst, '$parent', function () { return _this.$parent; });
        /**
         * Same goes for every other additional getter, they must be added to the Vue instance
         * if their name starts with a `$`.
         */
        defineGetter(this, '$resolvedParent', function () {
            var $parent = that.$parent;
            return $parent !== null ? maybeResolveTsInst($parent) : null;
        });
    };
    // Template
    if (data.component.template === false) {
        options.render = function () { return false; };
    }
    else if (data.component.template === 'inherit' && isFunction(ctor.render)) {
        // Assign the lowest render function in the inheritance hierarchy.
        options.render = ctor.render;
    }
    else if (isString(data.component.template)) {
        options.template = data.component.template;
    }
    // Other options
    if (!isUndefined(data.component.inheritAttrs)) {
        options.inheritAttrs = data.component.inheritAttrs;
    }
    options.name = data.component.name;
    return options;
}

export { generateVccOpts, vccOptionsMap };
