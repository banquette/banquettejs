import { UsageException } from "@banquette/exception";
import { extend } from "@banquette/utils-object/extend";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { isArray } from "@banquette/utils-type/is-array";
import { isFunction } from "@banquette/utils-type/is-function";
import { isNumeric } from "@banquette/utils-type/is-numeric";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { ComponentPublicInstance } from "vue";
import { buildSetupMethod } from "./build-setup-method";
import {
    DECORATORS_OPTIONS_HOLDER_CACHE_NAME,
    DECORATORS_OPTIONS_HOLDER_NAME,
    PRE_CONSTRUCTION_HOOKS,
    HOOKS_MAP,
    DECORATORS_CTOR_NAME,
    COMPONENT_INSTANCE_ATTR_NAME
} from "./constants";
import { ComponentDecoratorOptions } from "./decorator/component.decorator";
import { DecoratorsDataInterface } from "./decorator/decorators-data.interface";
import { ImportDecoratorOptions } from "./decorator/import.decorator";
import { PropPrivateOptions } from "./decorator/prop.decorator";
import { PrefixOrAlias } from "./type";
import { defineGetter } from "./utils/define-getter";
import { getComponentInstance } from "./utils/get-component-instance";
import { getCtorFromVccOption } from "./utils/get-ctor-from-vcc-option";
import { getDecoratorsData } from "./utils/get-decorators-data";
import { injectVueProperties } from "./utils/inject-vue-properties";
import { isDecorated } from "./utils/is-decorated";
import { resolveImportPublicName } from "./utils/resolve-import-public-name";
import { Vue } from "./vue";
import { VueBuilder } from "./vue-builder";

/**
 * A cache for the __vccOpts objects.
 */
export const vccOptionsMap: WeakMap<any, any> = new WeakMap<any, any>();

/**
 * Add the necessary data to a constructor so it can be used as a Vue component.
 */
export function generateVccOpts(ctor: Constructor, data: DecoratorsDataInterface & {component: ComponentDecoratorOptions}) {
    if (!isUndefined(ctor.prototype[DECORATORS_OPTIONS_HOLDER_CACHE_NAME]) && ctor.prototype[DECORATORS_OPTIONS_HOLDER_CACHE_NAME][DECORATORS_CTOR_NAME] === ctor) {
        return ctor.prototype[DECORATORS_OPTIONS_HOLDER_CACHE_NAME];
    }
    const options: any = {};

    // Merge parent data
    let curCtor: Constructor = ctor;
    while ((curCtor = Object.getPrototypeOf(curCtor)) !== null) {
        const parentOpts = !isUndefined(curCtor.prototype) ? curCtor.prototype[DECORATORS_OPTIONS_HOLDER_NAME] : null;
        if (parentOpts !== null && isObject(parentOpts)) {
            data = extend({}, [parentOpts, data], true);
        }
    }

    // Rename props with a custom name.
    const renamedProps: Record<string, PropPrivateOptions> = {};
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
        if (isDecorated(composableCtor.prototype)) {
            const composableDecorationData = getDecoratorsData(composableCtor.prototype);
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
            let componentConstructor = getCtorFromVccOption(data.component.components[key]);
            if (componentConstructor !== null) {
                const componentDecoratorsData = getDecoratorsData(componentConstructor.prototype);
                const componentName = !isUndefined(componentDecoratorsData.component) ? componentDecoratorsData.component.name! : key;
                options.components[componentName] = data.component.components[key];
            } else if (!isNumeric(key)) {
                options.components[key] = data.component.components[key];
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
    Object.defineProperty(ctor.prototype, DECORATORS_OPTIONS_HOLDER_CACHE_NAME, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: options
    });

    // Save the ctor so we can retrieve it from the __vccOpts object.
    Object.defineProperty(options, DECORATORS_CTOR_NAME, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: ctor
    });

    options.beforeCreate = function(this: ComponentPublicInstance) {
        const inst = (this.$ as any)[COMPONENT_INSTANCE_ATTR_NAME];

        // If the component inherits from the "Vue" class this means the user
        // may want to access theses attributes or methods.
        if (inst instanceof Vue || data.themeable !== null) {
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
            defineGetter(inst, '$parent', () => getComponentInstance(this.$parent));
        }
    };
    return options;
}
