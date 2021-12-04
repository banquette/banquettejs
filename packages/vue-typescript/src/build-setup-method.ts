import { UsageException } from "@banquette/exception";
import { noop } from "@banquette/utils-misc/noop";
import { proxy } from "@banquette/utils-misc/proxy";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { getObjectValue } from "@banquette/utils-object/get-object-value";
import { isArray } from "@banquette/utils-type/is-array";
import { isFunction } from "@banquette/utils-type/is-function";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor, GenericCallback } from "@banquette/utils-type/types";
import { WritableComputedOptions } from "@vue/reactivity";
import {
    SetupContext,
    toRef,
    Ref,
    ref,
    computed,
    watch,
    nextTick,
    getCurrentInstance,
    provide,
    readonly,
    inject,
    isRef, watchEffect
} from "vue";
import { HOOKS_MAP, COMPONENT_INSTANCE_ATTR_NAME } from "./constants";
import { ComponentDecoratorOptions } from "./decorator/component.decorator";
import { ComputedDecoratorOptions } from "./decorator/computed.decorator";
import { DecoratorsDataInterface } from "./decorator/decorators-data.interface";
import { ImportDecoratorOptions } from "./decorator/import.decorator";
import { LifecycleHook } from "./decorator/lifecycle.decorator";
import { WatchOptions, WatchFunction } from "./decorator/watch.decorator";
import { PrefixOrAlias } from "./type";
import { defineRefProxy, isDecorated, getDecoratorsData, instantiate, resolveImportPublicName } from "./utils";

/**
 * A map between Vue instances and objects created by vue-typescript.
 */
const vueInstancesMap: WeakMap<any, any> = new WeakMap<any, any>();

export function buildSetupMethod(ctor: Constructor, data: DecoratorsDataInterface, rootProps: any = null, parentInst: any = null, importName?: string, prefixOrAlias: PrefixOrAlias = null) {
    return (props: any, context: SetupContext): any => {
        let inst = parentInst;
        const output: Record<any, any> = {};
        if (inst === null) {
            // Trick so Vue doesn't stop and show a warning because there is no render function on the component.
            // noop is assigned because this is not the function that will be used in reality.
            if (isUndefined(ctor.prototype.render)) {
                ctor.prototype.render = noop;
            }
            inst = instantiate(ctor, data.component as ComponentDecoratorOptions);
        }
        if (props !== null) {
            for (const propName of Object.keys(props)) {
                let propRef = toRef(props, propName);
                if (!isUndefined(data.props[propName]) && isFunction(data.props[propName].validate)) {
                    propRef = ((proxified: Ref,  validate: GenericCallback) => {
                        let lastOriginalValue: any = Symbol('unassigned');
                        let lastModifiedValue: any;
                        return new Proxy(proxified, {
                            get(target: any, name: string): any {
                                if (name === 'value') {
                                    if (lastOriginalValue !== target[name]) {
                                        lastOriginalValue = target[name];
                                        lastModifiedValue = validate(target[name]);
                                    }
                                    if (!isUndefined(lastModifiedValue)) {
                                        return lastModifiedValue;
                                    }
                                }
                                return target[name];
                            },
                        });
                    })(propRef, data.props[propName].validate as GenericCallback);
                }
                const propPublicName = data.props[propName].name || propName;
                output[propPublicName] = propRef;
                defineRefProxy(inst, data.props[propName].propertyName, output, propPublicName);
            }
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
            ((_templateRefName: string) => {
                Object.defineProperty(inst, _templateRefName, {
                    get: () => {
                        const v = output[data.templateRefs[_templateRefName]].value;

                        // Special case when a ref is set of a <component/> component.
                        // Try to resolve the component instance if possible.
                        if (isObject(v) && isObject(v._) && vueInstancesMap.has(v._)) {
                            return vueInstancesMap.get(v._);
                        }
                        // Otherwise return the value as is.
                        return v;
                    },
                    set: (value) => {
                        output[data.templateRefs[_templateRefName]].value = value
                    },
                    enumerable: true,
                    configurable: true,
                });
            })(refPropertyName);
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
        const rootPropsKeys = Object.keys(rootProps);
        for (const watchOptions of data.watch) {
            const isArraySource = isArray(watchOptions.source);
            const source: string[]|WatchFunction = isString(watchOptions.source) ? [watchOptions.source] : watchOptions.source;
            ((_watchData: {target: string, source: WatchFunction|string[], options: WatchOptions, isArraySource: boolean}) => {
                const virtualRefs: Record<string, Ref> = {};
                let stopHandle: Function|null = null;
                const applyWatch = (utdDateSources: string[], utdIsArraySource: boolean) => {
                    if (stopHandle !== null) {
                        stopHandle();
                        // If we already have a watcher the new one must always trigger immediately,
                        // because it can only come from a change in the watch function.
                        _watchData.options.immediate = true;
                    }
                    const realSources: Array<Ref|WatchFunction> = [];
                    const realSourcesParts: string[][] = [];
                    const opts = {..._watchData.options};
                    for (const upToDateSource of utdDateSources) {
                        const parts = upToDateSource.split('.');
                        if (parts.length > 1) {
                            opts.deep = true;
                        }
                        const sourceBaseProperty: string = parts[0];
                        if (rootPropsKeys.indexOf(upToDateSource) > -1) {
                            // If we are watching a prop, wrap it into a function.
                            realSources.push(() => inst[sourceBaseProperty]);
                        } else if (!isUndefined(output[sourceBaseProperty])) {
                            // If we already have a ref for this property.
                            realSources.push(output[sourceBaseProperty]);
                        } else {
                            // If we don't, we need to create one to make the prop reactive so Vue can track it.
                            // If not already created.
                            if (isUndefined(virtualRefs[sourceBaseProperty])) {
                                // Then save it locally, we don't want this in the output.
                                virtualRefs[sourceBaseProperty] = ref(inst[sourceBaseProperty]);

                                // Now let's reassign the value of the instance to a proxy so the value is still accessible as
                                // it should be (not forcing the user to do ".value" to access the value).
                                defineRefProxy(inst, sourceBaseProperty, virtualRefs);
                            }
                            // If we already created a ref for this property.
                            realSources.push(virtualRefs[sourceBaseProperty]);
                        }
                        realSourcesParts.push(parts);
                    }
                    let haveTriggeredImmediately = _watchData.options.immediate !== true;
                    let shouldDelayTrigger: boolean = stopHandle === null && !haveTriggeredImmediately && _watchData.options.synchronous !== true;
                    const onWatchTrigger = (...args: any[]) => {
                        const process = () => {
                            const newValues: any[] = [];
                            const oldValues: any[] = [];
                            for (let i = 0; i < realSources.length; ++i) {
                                const realSource = realSources[i];
                                let realSourceValue = isFunction(realSource) ? (realSource as WatchFunction).apply(inst) : (realSource as Ref).value;
                                if (realSourcesParts[i].length > 1) {
                                    realSourceValue = getObjectValue(realSourceValue, realSourcesParts[i].slice(1), undefined);
                                }
                                newValues.push(realSourceValue);
                                oldValues.push(i < args[1].length ? args[1][i] : undefined);
                            }
                            return inst[_watchData.target].apply(inst, [
                                utdIsArraySource ? newValues : newValues[0],
                                utdIsArraySource ? oldValues : oldValues[0]
                            ].concat(args.slice(2)));
                        };
                        if (shouldDelayTrigger) {
                            shouldDelayTrigger = false;
                            // Wait the next render cycle to let time to Vue to set the prop value in the instance.
                            // Only required for the first trigger when watching props.
                            nextTick().then(process);
                        } else {
                            process();
                        }
                        haveTriggeredImmediately = true;
                    };
                    stopHandle = watch(realSources, onWatchTrigger, opts);
                    if (!haveTriggeredImmediately) {
                        // Workaround issue #5032:
                        // https://github.com/vuejs/vue-next/issues/5032
                        const fakeValues = (new Array(realSources.length) as undefined[]).fill(undefined);
                        onWatchTrigger(fakeValues, fakeValues, noop);
                    }
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
                if (isFunction(_watchData.source)) {
                    const cRef = computed(proxy(_watchData.source, inst));
                    watchEffect(() => {
                        const computedResult = cRef.value;
                        const isArraySource = isArray(computedResult);
                        applyWatch(!isArraySource ? [computedResult] : computedResult, isArraySource);
                    });
                } else {
                    applyWatch(_watchData.source, _watchData.isArraySource);
                }
            })({target: watchOptions.target, source, options: watchOptions.options, isArraySource});

        }

        // Decorated hooks
        for (const hook of getObjectKeys(data.hooks)) {
            const hookMethod = HOOKS_MAP[hook as LifecycleHook];
            if (isFunction(hookMethod)) {
                // @ts-ignore
                data.hooks[hook].forEach((methodName) => {
                    hookMethod(proxy(inst[methodName], inst));
                });
            }
        }

        // Provided
        for (const property of getObjectKeys(data.provided)) {
            let providedRef = ref(inst[property]);
            if (data.provided[property].readonly) {
                providedRef = readonly(providedRef);
            }
            provide(data.provided[property].provideAs, providedRef);
            defineRefProxy(inst, property, {[property]: providedRef});
        }

        // Injected
        for (const property of getObjectKeys(data.injected)) {
            let injectResult = inject(data.injected[property].target, data.injected[property].defaultValue);

            // If the inject is not found the default value is returned, so create a ref with it.
            if (!isRef(injectResult)) {
                injectResult = ref(injectResult);
            }
            defineRefProxy(inst, property, {[property]: injectResult});
            output[property] = injectResult;
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
                )(null, context);

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
        if (props !== null) {
            const vueInstance = getCurrentInstance();
            Object.defineProperty(vueInstance, COMPONENT_INSTANCE_ATTR_NAME, {
                enumerable: false,
                configurable: false,
                writable: false,
                value: inst
            });
            if (data.renderMethod !== null) {
                const render = inst[data.renderMethod];
                inst[data.renderMethod] = proxy(() => {
                    return render(output, context);
                }, inst);
                return inst[data.renderMethod];
            }
        }
        return output;
    };
}
