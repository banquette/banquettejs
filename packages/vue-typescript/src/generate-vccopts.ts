import { UsageException } from "@banquette/exception/usage.exception";
import { extend } from "@banquette/utils-object/extend";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { isArray } from "@banquette/utils-type/is-array";
import { isConstructor } from "@banquette/utils-type/is-constructor";
import { isFunction } from "@banquette/utils-type/is-function";
import { isNumeric } from "@banquette/utils-type/is-numeric";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { Component } from "@vue/runtime-core";
import { buildSetupMethod } from "./build-setup-method";
import {
    DECORATORS_METADATA_CACHE,
    DECORATORS_METADATA,
    PRE_CONSTRUCTION_HOOKS,
    HOOKS_MAP,
    COMPONENT_CTOR,
    COMPONENT_TS_INSTANCE,
    COMPONENT_VUE_INSTANCE
} from "./constants";
import { ComponentMetadataInterface } from "./decorator/component-metadata.interface";
import { ComponentDecoratorOptions } from "./decorator/component.decorator";
import { ImportDecoratorOptions } from "./decorator/import.decorator";
import { PropMetadata } from "./decorator/prop.decorator";
import { PrefixOrAlias, VccOpts, DecoratedComponentInstance } from "./type";
import { maybeResolveTsInst, vccOptsToCtor } from "./utils/converters";
import { defineGetter } from "./utils/define-getter";
import { getOrCreateComponentMetadata } from "./utils/get-or-create-component-metadata";
import { isVccOpts, isDecoratedComponentConstructor } from "./utils/guards";
import { injectVueProperties } from "./utils/inject-vue-properties";
import { resolveImportPublicName } from "./utils/resolve-import-public-name";
import { VueBuilder } from "./vue-builder";

/**
 * A cache for the Vue component options.
 */
export const vccOptionsMap: WeakMap<any, any> = new WeakMap<any, any>();

/**
 * Generate the option object that will be used by Vue to create a component.
 */
export function generateVccOpts(ctor: Constructor, data: ComponentMetadataInterface & {component: ComponentDecoratorOptions}): VccOpts {
    if (!isUndefined(ctor.prototype[DECORATORS_METADATA_CACHE]) && ctor.prototype[DECORATORS_METADATA_CACHE][COMPONENT_CTOR] === ctor) {
        return ctor.prototype[DECORATORS_METADATA_CACHE];
    }
    const options: Partial<VccOpts> = {};

    // Merge parent data
    let curCtor: Constructor = ctor;
    let isTemplateInherited = data.component.template === 'inherit';
    while ((curCtor = Object.getPrototypeOf(curCtor)) !== null) {
        const parentOpts = !isUndefined(curCtor.prototype) ? curCtor.prototype[DECORATORS_METADATA] : null;
        if (parentOpts !== null && isObject(parentOpts)) {
            if (!isUndefined(parentOpts.component) && isFunction(parentOpts.component.factory) && !isFunction(data.component.factory)) {
                throw new UsageException(
                    `You must define a factory function for "${data.component.name}" because it inherits ` +
                    `from "${parentOpts.component.name}" which defines one. `
                );
            }
            if (isTemplateInherited && parentOpts.component && isString(parentOpts.component.template)) {
                data.component.template = parentOpts.component.template;
                isTemplateInherited = false;
            }
            data = extend({}, [parentOpts, data], true);
        }
    }

    // Rename props with a custom name.
    const renamedProps: Record<string, PropMetadata> = {};
    for (const propName of Object.keys(data.props)) {
        renamedProps[data.props[propName].name || propName] = {...data.props[propName]};
    }

    // Variant prop
    if (data.themeable) {
        if (!isUndefined(renamedProps[data.themeable.prop])) {
            throw new UsageException(
                `A prop named "${data.themeable.prop}" is already defined, `+
                `please define another name for the prop that defines the name of the variant to use. `+
                `You can set the "prop" option of the "@Themeable" decorator for that.`
            );
        }
        renamedProps[data.themeable.prop] = {propertyName: data.themeable.prop, type: String, default: null};
    }
    data.props = renamedProps;
    options.props = renamedProps;

    // Merge composable props
    for (const targetProperty of Object.keys(data.imports)) {
        const importOptions: ImportDecoratorOptions = data.imports[targetProperty];
        const composableCtor: Constructor = importOptions.composable;
        if (isDecoratedComponentConstructor(composableCtor)) {
            const composableDecorationData = getOrCreateComponentMetadata(composableCtor.prototype);
            for (const subProp of Object.keys(composableDecorationData.props)) {
                const realPropName: string|false = resolveImportPublicName(targetProperty, subProp, importOptions.prefixOrAlias as PrefixOrAlias);
                if (realPropName !== false) {
                    if (!isUndefined(options[realPropName])) {
                        console.warn(`The prop "${subProp}" from the composable "${composableCtor.name}" overrides an already defined prop with the same name (${realPropName}).`);
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
        for (const key of getObjectKeys(data.component.components)) {
            const item = data.component.components[key] as Component;
            let componentConstructor = isConstructor(item) ? item : (isVccOpts(item) ? vccOptsToCtor(item) : null);
            if (componentConstructor !== null) {
                const componentDecoratorsData = getOrCreateComponentMetadata(componentConstructor.prototype);
                const componentName = !isUndefined(componentDecoratorsData.component) ? componentDecoratorsData.component.name : key;
                options.components[componentName] = item;
            } else if (!isNumeric(key)) {
                options.components[key] = item;
            } else if (isString(item.name)) {
                options.components[item.name] = item;
            } else {
                throw new UsageException(`You must provide a name for the components added to the "components" option if they don't use \`VueTypescript\`.`);
            }
        }
    }
    // Directives
    if (!isUndefined(data.component.directives)) {
        options.directives = {};
        for (const key of getObjectKeys(data.component.directives)) {
            const directiveCtor = data.component.directives[key] as Constructor;
            const definition = VueBuilder.GetDirectiveDefinition(directiveCtor);
            if (definition !== null) {
                options.directives[definition.name] = definition.directive;
            }
        }
    }

    // Hooks

    // Bind pre-construction hooks as is.
    for (const hook of PRE_CONSTRUCTION_HOOKS) {
        if (isFunction(ctor.prototype[hook])) {
            options[hook] = ctor.prototype[hook];
        }
    }

    // For other hooks, simulate a @Lifecycle() decorator.
    for (const hook of getObjectKeys(HOOKS_MAP)) {
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
    const fullOptionsMap = vccOptionsMap.get(ctor);
    if (isUndefined(fullOptionsMap)) {
        vccOptionsMap.set(ctor, options);
    } else {
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

    options.beforeCreate = function(this: DecoratedComponentInstance) {
        // Retrieve the Typescript instance from the Vue object.
        const inst = this.$[COMPONENT_TS_INSTANCE];

        // In the context of `beforeCreate`, "this" is the Vue instance.
        // Keep a reference on it for closures below.
        const that = this;

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
        defineGetter(this, '$plugins', () => that);

        defineGetter(inst, '$', () => this.$);
        defineGetter(inst, '$props', () => this.$props);
        defineGetter(inst, '$attrs', () => this.$attrs);
        defineGetter(inst, '$slots', () => this.$slots);
        defineGetter(inst, '$emit', () => this.$emit);
        defineGetter(inst, '$data', () => this.$data);
        defineGetter(inst, '$el', () => this.$el);
        defineGetter(inst, '$options', () => this.$options);
        defineGetter(inst, '$refs', () => this.$refs);
        defineGetter(inst, '$root', () => this.$root);
        defineGetter(inst, '$forceUpdate', () => this.$forceUpdate);
        defineGetter(inst, '$nextTick', () => this.$nextTick);
        defineGetter(inst, '$watch', () => this.$watch);
        defineGetter(inst, '$parent', () => this.$parent);

        /**
         * Same goes for every other additional getter, they must be added to the Vue instance
         * if their name starts with a `$`.
         */
        defineGetter(this, '$resolvedParent', () => {
            const $parent = that.$parent;
            return $parent !== null ? maybeResolveTsInst($parent) : null;
        });
    };

    // Template
    if (data.component.template === false) {
        options.render = () => false;
    } else if (data.component.template === 'inherit' && isFunction((ctor as any).render)) {
        // Assign the lowest render function in the inheritance hierarchy.
        options.render = (ctor as any).render;
    } else if (isString(data.component.template)) {
        options.template = data.component.template;
    }

    // Other options
    if (!isUndefined(data.component.inheritAttrs)) {
        options.inheritAttrs = data.component.inheritAttrs;
    }
    options.name = data.component.name;
    return options as VccOpts;
}
