import { UsageException } from "@banquette/exception";
import { isConstructor } from "@banquette/utils-type/is-constructor";
import { isFunction } from "@banquette/utils-type/is-function";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { DECORATORS_OPTIONS_HOLDER_NAME, VUE_CLASS_COMPONENT_OPTIONS_NAME, DECORATORS_CTOR_NAME } from "./constants";
import { ComponentDecoratorOptions } from "./decorator/component.decorator";
import { ComposableDecoratorOptions } from "./decorator/composable.decorator";
import { DecoratorsDataInterface } from "./decorator/decorators-data.interface";
import { AliasesMap, AliasResolver, PrefixOrAlias, DecoratedConstructor } from "./type";
import { Vue } from "./vue";

/**
 * These properties are set by the exportHelper of vue-loader after __vccOpts has been created.
 *
 * The problem is that we'll have to create __vccOpts multiple times out of the exportHelper,
 * so these additional properties will not be present.
 *
 * So the trick is to save the object generated by the first call, because we know exportHelper will add what's missing.
 *
 * Then for subsequent calls we'll just have to copy the values from the first object into the current one.
 */
export function injectVuePropertiesInCtor(source: any, target: any): void {
    const vccInjections = [
        'render',
        'ssrRender',
        '__file',
        '__cssModules',
        '__scopeId',
        '__hmrId',
    ];
    for (const attribute of vccInjections) {
        if (!isUndefined(source[attribute]) && isUndefined(target[attribute])) {
            target[attribute] = source[attribute];
        }
    }
}

/**
 * Ensure the constructor a vue-typescript component is returned, or null if the component is not a class component.
 */
export function getCtorFromVccOption(input: any): Constructor|null {
    let ctor = isConstructor(input) ? input : null;
    if (ctor === null && isObject(input) && !isUndefined(input[DECORATORS_CTOR_NAME])) {
        ctor = input[DECORATORS_CTOR_NAME];
    }
    return ctor;
}

export function isComponentInstance<T extends Constructor<Vue>>(component: any, candidate: T): component is InstanceType<T> {
    // @ts-ignore
    return component instanceof candidate[DECORATORS_CTOR_NAME];
}

export function defineGetter<T, K extends keyof T>(obj: T, key: K, getter: () => T[K]): void {
    Object.defineProperty(obj, key, {
        get: getter,
        enumerable: false,
        configurable: true
    });
}

/**
 * Define a proxy making the wrapper object created by Vue invisible.
 */
export function defineRefProxy(proxy: any, proxyKey: string, target: any, targetKey: string = proxyKey): void {
    Object.defineProperty(proxy, proxyKey, {
        get: () => target[targetKey].value,
        set: (value) => {
            target[targetKey].value = value
        },
        enumerable: true,
        configurable: true,
    });
}

/**
 * Get or create the object used to store decorators' data.
 */
export function getDecoratorsData(prototype: any | DecoratedConstructor): DecoratorsDataInterface {
    if (!isDecorated(prototype)) {
        Object.defineProperty(prototype, DECORATORS_OPTIONS_HOLDER_NAME, {
            configurable: true,
            enumerable: false,
            writable: false,
            value: {
                props: {},
                computed: {},
                reactive: [],
                exposed: {},
                hooks: {},
                watch: [],
                imports: {},
                templateRefs: {},
                provided: {},
                injected: {},
                renderMethod: null
            } as DecoratorsDataInterface
        });
    }
    return (prototype as DecoratedConstructor)[DECORATORS_OPTIONS_HOLDER_NAME];
}

/**
 * Test if a constructor is decorated.
 */
export function isDecorated(prototype: any): prototype is DecoratedConstructor {
    return prototype.hasOwnProperty(DECORATORS_OPTIONS_HOLDER_NAME);
}

/**
 * Get the options object of a decorated component.
 */
export function getComponentOptions(ctor: Constructor): any {
    return (ctor as any)[VUE_CLASS_COMPONENT_OPTIONS_NAME];
}

/**
 * Resolve the exposed name of a composable public element (prop, computed, method or data).
 * Can return `false` if the item should not be exposed
 */
export function resolveImportPublicName(originalPrefix: string|undefined, originalName: string, prefixOrAlias: PrefixOrAlias): string|false {
    if (!originalPrefix) {
        return originalName;
    }
    if (prefixOrAlias === null) {
        return originalPrefix + ':' + originalName;
    }
    if (prefixOrAlias === false) {
        return originalName;
    }
    if (isString(prefixOrAlias)) {
        return prefixOrAlias + ':' + originalName;
    }
    if (isType<AliasesMap>(prefixOrAlias, isObject)) {
        return !isUndefined(prefixOrAlias[originalName]) ? String(prefixOrAlias[originalName]) : false;
    }
    if (isFunction(prefixOrAlias)) {
        return (prefixOrAlias as AliasResolver)(originalName);
    }
    throw new UsageException(`Unable to resolve the public name of ${originalName}. Please check your decorator's configuration.`);
}

export function instantiate(ctor: Constructor, options: ComponentDecoratorOptions | ComposableDecoratorOptions): any {
    if (!isNullOrUndefined(options.factory)) {
        return options.factory();
    }
    return new ctor();
}
