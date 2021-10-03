import { UsageException } from "@banquette/exception";
import { areEqual, proxy } from "@banquette/utils-misc";
import { cloneDeep, extend, getObjectKeys, getObjectValue } from "@banquette/utils-object";
import {
    Constructor,
    ensureArray,
    isArray,
    isFunction,
    isNullOrUndefined,
    isObject,
    isString,
    isUndefined
} from "@banquette/utils-type";
import { WritableComputedOptions } from "@vue/reactivity";
import { ComponentOptionsWithoutProps, WatchOptions } from "@vue/runtime-core";
import {
    ComponentOptions,
    ComponentOptionsWithObjectProps,
    computed,
    DefineComponent,
    nextTick,
    Ref,
    ref,
    toRefs,
    watch
} from "vue";
import {
    DECORATORS_OPTIONS_HOLDER_CACHE_NAME,
    DECORATORS_OPTIONS_HOLDER_NAME,
    HOOKS_MAP,
    PRE_CONSTRUCTION_HOOKS, VUE_CLASS_COMPONENT_OPTIONS_NAME
} from "./constants";
import { ComponentDecoratorOptions } from "./decorator/component.decorator";
import { ComposableDecoratorOptions } from "./decorator/composable.decorator";
import { ComputedDecoratorOptions } from "./decorator/computed.decorator";
import { DecoratorsDataInterface } from "./decorator/decorators-data.interface";
import { ImportDecoratorOptions } from "./decorator/import.decorator";
import { LifecycleHook } from "./decorator/lifecycle.decorator";
import { WatchFunction } from "./decorator/watch.decorator";
import { AliasesMap, AliasResolver, PrefixOrAlias } from "./type";
import { VueBuilder } from "./vue-builder";

export type DecoratedConstructor = Constructor & {[DECORATORS_OPTIONS_HOLDER_NAME]: DecoratorsDataInterface};

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
                computed: [],
                reactive: [],
                exposed: {},
                hooks: {},
                watch: [],
                imports: {},
                templateRefs: {}
            }
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
function resolveImportPublicName(originalPrefix: string|undefined, originalName: string, prefixOrAlias: PrefixOrAlias): string|false {
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
    if (isObject(prefixOrAlias)) {
        return (prefixOrAlias as AliasesMap)[originalName] || false;
    }
    if (isFunction(prefixOrAlias)) {
        return (prefixOrAlias as AliasResolver)(originalName);
    }
    throw new UsageException(`Unable to resolve the public name of ${originalName}. Please check your decorator's configuration.`);
}

function instantiate(ctor: Constructor, options: ComponentDecoratorOptions | ComposableDecoratorOptions): any {
    if (!isNullOrUndefined(options.factory)) {
        return options.factory();
    }
    return new ctor();
}

/**
 * Add the necessary data to a constructor so it can be used as a Vue component.
 */
export function generateVccOpts(ctor: Constructor, data: DecoratorsDataInterface & {component: ComponentDecoratorOptions}) {
    if (!isUndefined(ctor.prototype[DECORATORS_OPTIONS_HOLDER_CACHE_NAME])) {
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

    // No processing required here.
    options.props = {...data.props};

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
                }
            }
        }
    }

    // Components
    if (!isUndefined(data.component.components)) {
        options.components = {};
        for (const key of getObjectKeys(data.component.components)) {
            const componentDecoratorsData = getDecoratorsData((data.component.components[key] as any).prototype);
            const componentName = !isUndefined(componentDecoratorsData.component) ? componentDecoratorsData.component.name! : key;
            options.components[componentName] = data.component.components[key];
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
            if (data.hooks[hook].indexOf(hook) < 0) {
                data.hooks[hook].push(hook);
            }
        }
    }

    // Setup
    options.setup = buildSetupMethod(ctor, data);

    /**
     * The "injections" part below has been extracted for vue-class-component.
     * @source https://github.com/vuejs/vue-class-component/blob/70680d78ed61ac57f27ed193fc69c80d90faf4fe/src/vue.ts#L304
     */
    // from Vue Loader
    const injections = [
        'render',
        'ssrRender',
        '__file',
        '__cssModules',
        '__scopeId',
        '__hmrId',
    ];
    injections.forEach((key) => {
        if ((ctor as any)[key]) {
            options[key] = (ctor as any)[key];
        }
    });

    // Save the final options object into the prototype for caching.
    Object.defineProperty(ctor.prototype, DECORATORS_OPTIONS_HOLDER_CACHE_NAME, {
        enumerable: false,
        configurable: true,
        writable: false,
        value: options
    });
    return options;
}

export function buildSetupMethod(ctor: Constructor, data: DecoratorsDataInterface, rootProps: any = null, inst: any = null, importName?: string, prefixOrAlias: PrefixOrAlias = null) {
    return (props: any, ctx: any): any => {
        const output: Record<any, any> = {};
        if (inst === null) {
            inst = instantiate(ctor, data.component as ComponentDecoratorOptions);
        }
        if (props !== null) {
            const propsRefs = toRefs(props);

            // Props
            for (const propRefName of Object.keys(propsRefs)) {
                output[propRefName] = propsRefs[propRefName];
                defineRefProxy(inst, propRefName, output);
            }
            defineGetter(inst, '$props', () => props);
            defineGetter(inst, '$attrs', () => ctx.attrs);
            defineGetter(inst, '$slots', () => ctx.slots);
            defineGetter(inst, '$emit', () => ctx.emit);

            rootProps = props;
        }

        // Reactive
        for (const itemName of data.reactive) {
            const itemRef = ref(inst[itemName]);
            // For properties exposed to the template.
            if (!isUndefined(data.exposed[itemName])) {
                const exposedName = resolveImportPublicName(importName, data.exposed[itemName], prefixOrAlias);
                if (exposedName !== false) {
                    output[exposedName] = itemRef;
                    defineRefProxy(inst, itemName, output, exposedName);
                    continue ;
                }
            }
            // For properties not exposed to the template.
            defineRefProxy(inst, itemName, {[itemName]: itemRef});
        }

        // Expose
        for (const exposedInstanceName of Object.keys(data.exposed)) {
            // For methods
            if (isFunction(inst[exposedInstanceName])) {
                const exposedName = resolveImportPublicName(importName, data.exposed[exposedInstanceName], prefixOrAlias);
                if (exposedName !== false) {
                    output[exposedName] = proxy(inst[exposedInstanceName], inst);
                }
            } else {
                // For property exposed to the template without a @Ref().
                const exposedName = resolveImportPublicName(importName, data.exposed[exposedInstanceName], prefixOrAlias);
                if (exposedName !== false && isUndefined(output[exposedName])) {
                    output[exposedName] = ref(inst[exposedInstanceName]);
                    defineRefProxy(inst, exposedInstanceName, output, exposedName);
                }
            }
        }

        // Template refs
        for (const refPropertyName of Object.keys(data.templateRefs)) {
            output[data.templateRefs[refPropertyName]] = ref(null);
            defineRefProxy(inst, refPropertyName, output, data.templateRefs[refPropertyName]);
        }

        // Computed
        for (const computedName of Object.keys(data.computed)) {
            let c: ReturnType<typeof computed>|null = null;
            const computedOptions: any = {...data.computed[computedName]};

            for (const k of getObjectKeys<ComputedDecoratorOptions>(computedOptions)) {
                if (isString(computedOptions[k])) {
                    const cb = computedOptions[k] as string;
                    if (!isFunction(inst[cb])) {
                        throw new UsageException(`Failed to apply @Computed() "${k}" option, no function "${cb}" has been found.`);
                    }
                    computedOptions[k] = proxy(inst[cb], inst);
                }
            }

            if (isFunction(inst[computedName])) {
                c = computed(proxy(inst[computedName], inst), computedOptions);
            } else if (!isUndefined(inst[computedName])) {
                const descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, computedName);
                if (isUndefined(descriptor) || !isFunction(descriptor.get)) {
                    console.warn(`Unable to create a computed for "${computedName}", no getter found.`);
                    continue ;
                }
                const proxyGetterSetter: WritableComputedOptions<any> = {
                    get: ((_cn) => () => {
                        return (descriptor.get as Function).apply(inst);
                    })(computedName),
                    set: () => {
                        throw new UsageException(`You cannot set a value on "${computedName}" because the property is readonly.`);
                    }
                };
                if (isFunction(descriptor.set)) {
                    proxyGetterSetter.set = ((_cn) => (val: any) => (descriptor.set as Function).apply(inst, [val]))(computedName);
                }
                c = computed(proxyGetterSetter, computedOptions);
                Object.defineProperty(inst, computedName, {
                    enumerable: true,
                    configurable: true,
                    get: proxyGetterSetter.get,
                    set: proxyGetterSetter.set
                });
            }
            if (!isUndefined(data.exposed[computedName])) {
                const exposedName = resolveImportPublicName(importName, data.exposed[computedName], prefixOrAlias);
                if (exposedName !== false) {
                    output[exposedName] = c;
                }
            }
        }

        // Watch
        for (const watchOptions of data.watch) {
            const sources: Array<string|WatchFunction> = ensureArray(watchOptions.source);
            for (let source of sources) {
                source = isString(source) ? ((_s) => () => _s)(source as string) : source;
                ((_watchData: {target: string, source: WatchFunction, options: WatchOptions}) => {
                    const virtualRefs: Record<string, Ref> = {};
                    let stopHandles: Function[] = [];
                    let triggeredOnce: boolean = false;
                    const applyWatch = () => {
                        for (const stopHandle of stopHandles) {
                            stopHandle();
                        }
                        stopHandles = [];
                        ensureArray(cRef.effect.run()).forEach((upToDateSource: string) => {
                            if (!upToDateSource) {
                                return;
                            }
                            const parts = upToDateSource.split('.');
                            const opts = {..._watchData.options};
                            if (parts.length > 1) {
                                opts.deep = true;
                            }
                            let realSource: Ref | WatchFunction | null = null;
                            const sourceBaseProperty: string = parts[0];
                            if (!isUndefined(rootProps[upToDateSource])) {
                                // If we are watching a prop, wrap it into a function.
                                realSource = () => rootProps[upToDateSource];
                            } else if (!isUndefined(virtualRefs[sourceBaseProperty])) {
                                // If we already created a ref for this property.
                                realSource = virtualRefs[sourceBaseProperty];
                            } else if (isUndefined(output[sourceBaseProperty])) {
                                // If the source is not already reactive, we have to create a ref so Vue can track it.
                                realSource = ref(inst[sourceBaseProperty]);

                                // Then save it locally, we don't want this in the output.
                                virtualRefs[sourceBaseProperty] = realSource as Ref;

                                // Now let's reassign the value of the instance to a proxy so the value is still accessible as
                                // it should be (not forcing the user to do ".value" to access the value).
                                defineRefProxy(inst, sourceBaseProperty, virtualRefs);
                            } else {
                                // Otherwise, use the existing ref.
                                realSource = output[sourceBaseProperty];
                            }
                            const realSourceValue = isFunction(realSource) ? (realSource as WatchFunction).apply(inst) : (realSource as Ref).value;
                            stopHandles.push(watch(realSource as Ref, (...args: any[]) => {
                                const process = () => {
                                    if (parts.length === 1) {
                                        return inst[_watchData.target].apply(inst, args);
                                    }
                                    const oldValue = args[1];
                                    const newValue = getObjectValue(realSourceValue, parts.slice(1), undefined);
                                    if (!areEqual(newValue, oldValue)) {
                                        return inst[_watchData.target].apply(inst, [newValue, oldValue].concat(args.slice(2)));
                                    }
                                };
                                if (isFunction(realSource) && !triggeredOnce) {
                                    triggeredOnce = true;
                                    // Wait the next render cycle to let time to Vue to set the prop value in the instance.
                                    // Only required for the first trigger when watching props.
                                    nextTick().then(process);
                                } else {
                                    process();
                                }
                            }, opts));
                        });
                    };
                    //
                    // For dynamic watchers.
                    //
                    // The computed is there to create a new watcher if any value used
                    // in the watch source function is modified.
                    //
                    // So you can have:
                    // @Watch(() => {
                    //    return this.count > 10 ? 'big' : 'small';
                    // })
                    // public onChange() {...}
                    //
                    // If "count" is > 10 it will watch the "big" property.
                    // If not it will watch the "small" property.
                    //
                    // If "count" changes, the computed will trigger and a new watcher will be created automatically.
                    //
                    const cRef = computed(proxy(source, inst), {onTrigger: applyWatch});
                    applyWatch();
                })({target: watchOptions.target, source, options: watchOptions.options});
            }
        }

        // Decorated hooks
        for (const hook of getObjectKeys(data.hooks)) {
            const hookMethod = HOOKS_MAP[hook as LifecycleHook];
            if (isFunction(hookMethod)) {
                data.hooks[hook].forEach((methodName) => {
                    hookMethod(proxy(inst[methodName], inst));
                });
            }
        }

        // Composable
        if (props === null && Object.keys(data.imports).length > 0) {
            throw new UsageException(`The class "${inst.constructor.name}" cannot contain imports because it is used as a composable. Composables cannot be nested.`);
        }
        for (const targetProperty of Object.keys(data.imports)) {
            const importOptions: ImportDecoratorOptions = data.imports[targetProperty];
            const composableCtor: Constructor = importOptions.composable;
            if (isDecorated(composableCtor.prototype)) {
                const composableDecorationData = getDecoratorsData(composableCtor.prototype);
                if (isUndefined(composableDecorationData.composable)) {
                    throw new UsageException(`The class "${composableCtor.name}" cannot be used as a composable because the "@Composable()" decorator is missing.`);
                }
                const composableInst = !isNullOrUndefined(inst[targetProperty]) ? inst[targetProperty] : instantiate(composableCtor, composableDecorationData.composable);
                const composableOutput = buildSetupMethod(
                    composableCtor,
                    composableDecorationData,
                    rootProps,
                    composableInst,
                    targetProperty,
                    data.imports[targetProperty].prefixOrAlias
                )(null, null);

                for (const subProp of Object.keys(composableDecorationData.props)) {
                    const realPropName: string|false = resolveImportPublicName(targetProperty, subProp, importOptions.prefixOrAlias as PrefixOrAlias);
                    if (realPropName === false) {
                        continue ;
                    }
                    composableInst[subProp] = inst[realPropName];
                    const descriptor = Object.getOwnPropertyDescriptor(inst, realPropName)!;
                    ((getter: any, setter: any) => {
                        Object.defineProperty(composableInst, subProp, {
                            get: getter,
                            set: setter,
                            enumerable: true,
                            configurable: true,
                        });
                    })(descriptor.get, descriptor.set);
                    delete inst[realPropName];
                }
                // Assign the composable instance to the hosting component.
                Object.defineProperty(inst, targetProperty, {
                    enumerable: true,
                    configurable: true,
                    value: composableInst
                });
                // Maybe export the import itself, if exposed.
                if (!isUndefined(data.exposed[targetProperty])) {
                    output[data.exposed[targetProperty]] = composableInst;
                }
                Object.assign(output, composableOutput);
            }
        }
        return output;
    };
}
