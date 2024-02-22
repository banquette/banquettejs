import {ExceptionFactory, UsageException} from "@banquette/exception";
import {areEqual, isServer, noop, proxy} from "@banquette/utils-misc";
import {cloneDeepPrimitive, getObjectKeys, getObjectValue} from "@banquette/utils-object";
import {Constructor, ensureString, GenericCallback, isArray, isFunction, isNullOrUndefined, isString, isUndefined} from "@banquette/utils-type";
import {ValidatorInterface} from "@banquette/validation";
import {WritableComputedOptions, WritableComputedRef} from "@vue/reactivity";
import {WatchOptions as VueWatchOptions} from "@vue/runtime-core";
import {computed, inject, isRef, nextTick, onBeforeMount, onMounted, provide, readonly, Ref, ref, SetupContext, toRaw, toRef, watch, watchEffect} from "vue";
import {ComponentAwareComposable} from "./component-aware.composable";
import {ACTIVE_VARIANTS, COMPONENT_TS_INSTANCE, COMPONENT_VUE_INSTANCE, HOOKS_MAP, VUE_CLASS_COMPONENT_OPTIONS} from "./constants";
import {ComponentMetadataInterface} from "./decorator/component-metadata.interface";
import {ComputedDecoratorOptions} from "./decorator/computed.decorator";
import {ImportDecoratorOptions} from "./decorator/import.decorator";
import {LifecycleHook} from "./decorator/lifecycle.decorator";
import {ThemeVarDecoratorOptions} from "./decorator/theme-var.decorator";
import {ImmediateStrategy, PrivateWatchOptions, WatchFunction} from "./decorator/watch.decorator";
import {ErrorPlaceholderComponent} from "./error-placeholder-component";
import {getThemesForComponent} from "./theme/utils/get-themes-for-component";
import {matchVariant} from "./theme/utils/match-variants";
import {splitVariantString} from "./theme/utils/split-variant-string";
import {VueThemeVariant} from "./theme/vue-theme-variant";
import {PrefixOrAlias} from "./type";
import {anyToTsInst} from "./utils/converters";
import {defineGetter} from "./utils/define-getter";
import {defineRefProxy} from "./utils/define-ref-proxy";
import {getOrCreateComponentMetadata} from "./utils/get-or-create-component-metadata";
import {getPropertyDescriptor} from "./utils/get-property-descriptor";
import {isDecoratedComponentConstructor} from "./utils/guards";
import {instantiate} from "./utils/instantiate";
import {isFunctionGetterSafe} from "./utils/is-function-getter-safe";
import {resolveImportPublicName} from "./utils/resolve-import-public-name";

export function buildSetupMethod(ctor: Constructor & {[VUE_CLASS_COMPONENT_OPTIONS]: any}, data: ComponentMetadataInterface, rootProps: any = null, parentInst: any = null, importName?: string, prefixOrAlias: PrefixOrAlias = null) {
    return (props: any, context: SetupContext): any => {
        let inst = parentInst;
        let unmounted: boolean = false;
        let computedVersion: Ref = ref(1);
        const output: Record<any, any> = {};

        if (inst === null) {
            // Trick so Vue doesn't stop and show a warning because there is no render function on the component.
            // noop is assigned because this is not the function that will be used in reality.
            if (isUndefined(ctor.prototype.render)) {
                ctor.prototype.render = noop;
            }
            try {
                inst = new Proxy(instantiate(ctor, data.component), {
                    get(target: any, p: string, receiver: any): any {
                        if (p[0] === '$' && COMPONENT_VUE_INSTANCE in inst && inst[COMPONENT_VUE_INSTANCE][p]) {
                            return inst[COMPONENT_VUE_INSTANCE][p];
                        }
                        return Reflect.get(target, p, receiver);
                    }
                });
            } catch (e) {
                inst = new ErrorPlaceholderComponent('Failed to instantiate component\'s class. ' + ExceptionFactory.EnsureException(e, '').message);
                data.renderMethod = 'render';
            }

            Object.defineProperty(ctor[VUE_CLASS_COMPONENT_OPTIONS], COMPONENT_TS_INSTANCE, {
                enumerable: false,
                configurable: false,
                writable: true,
                value: inst
            });

            if (data.themeable) {
                if (!isUndefined(inst[data.themeable.prop])) {
                    throw new UsageException(
                        `The name "${data.themeable.prop}" is already used in the component's instance, ` +
                        `please define another name for the prop that defines the name of the variant to use. ` +
                        `You can set the "prop" option of the "@Themeable" decorator for that.`
                    );
                }
                Object.defineProperty(inst, ACTIVE_VARIANTS, {
                    enumerable: false,
                    configurable: false,
                    writable: true,
                    value: null
                });
            }
            defineGetter(inst, '$forceUpdateComputed', () => () => {
                computedVersion.value++;
            });
        }

        // Props
        if (props !== null) {
            const propsRefs = [];
            rootProps = {};
            for (const propName of Object.keys(props)) {
                let propRef = toRef(props, propName);
                if (isUndefined(data.props[propName])) {
                    continue ;
                }
                if (data.themeable === null || propName !== data.themeable.prop) {
                    propRef = ((proxified: Ref, propName: string, validate: ValidatorInterface|null, transform: GenericCallback|null) => {
                        let lastOriginalValue: any = Symbol('unassigned');
                        let lastModifiedValue: any;
                        return new Proxy(proxified, {
                            get(target: any, name: string): any {
                                let value: any = target[name];
                                if (name === 'value') {
                                    if (data.themeable !== null) {
                                        //
                                        // Because the variants matching is done in the bt-bind-theme directive,
                                        // when Vue first ask for the value of the prop, it is invalid if the theme overrides it
                                        // because variants have not been matched yet.
                                        //
                                        // If the prop changes later on or Vue ask for its value for any reason, the issue doesn't show.
                                        // But if the value is only accessed by Vue once on initialization, Vue will not see the overridden value.
                                        //
                                        // So the fix here is to set ACTIVE_VARIANTS === null at first, and to match the variants
                                        // here again if still null when the getter is called.
                                        //
                                        if (inst[ACTIVE_VARIANTS] === null) {
                                            const themes = getThemesForComponent(inst);
                                            let expectedVariants: string[] = splitVariantString(inst[data.themeable.prop] || '');

                                            inst[ACTIVE_VARIANTS] = [];

                                            // Find relevant variants for the state of the component.
                                            for (const theme of themes) {
                                                const variantsCandidates = theme.getVariants(data.component.name);
                                                for (const variantCandidate of variantsCandidates) {
                                                    if (matchVariant(variantCandidate, expectedVariants, inst)) {
                                                        inst[ACTIVE_VARIANTS].push(variantCandidate);
                                                        if (variantCandidate.applyIds.length > 0) {
                                                            inst[ACTIVE_VARIANTS] = inst[ACTIVE_VARIANTS].concat(variantsCandidates.filter((v) => {
                                                                return v.publicId !== null && variantCandidate.applyIds.indexOf(v.publicId) > -1 && inst[ACTIVE_VARIANTS].indexOf(v) < 0;
                                                            }));
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (data.props[propName].default === value) {
                                            const av: VueThemeVariant[] = inst[ACTIVE_VARIANTS];

                                            // Search from the end to give priority to the one defined last.
                                            for (let i = av.length - 1; i >= 0; i--) {
                                                if (av[i].propsKeys.indexOf(propName) > -1) {
                                                    value = av[i].propsMap[propName];
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    if (transform !== null) {
                                        if (lastOriginalValue !== value) {
                                            lastOriginalValue = value;
                                            lastModifiedValue = transform.apply(inst, [value]);
                                        }
                                        if (!isUndefined(lastModifiedValue)) {
                                            value = lastModifiedValue;
                                        }
                                    }

                                    if (validate !== null) {
                                        const validationResult = validate.validate(value);
                                        if (validationResult.waiting) {
                                            throw new UsageException(`Async validators are not allowed to validate props.`);
                                        }
                                        if (!validationResult.valid) {
                                            throw new UsageException(
                                                `Validation failed for prop "${propName}". ` +
                                                `Reason: ${validationResult.getViolationsStringsArray().join(', ')}.` +
                                                `Validated value was: "${ensureString(value)}".`
                                            );
                                        }
                                    }
                                }
                                return value;
                            }
                        });
                    })(propRef, propName, data.props[propName].validate || null, data.props[propName].transform || null);
                    propsRefs.push(propRef);
                }
                const propPublicName = data.props[propName].name || propName;
                output[propPublicName] = propRef;
                defineRefProxy(inst, data.props[propName].propertyName, output, propPublicName);
                rootProps[propName] = propRef;
            }

            // Watch props changes to update theming attributes accordingly.
            if (data.themeable !== null) {
                // Theme vars accessors
                for (const propertyName of Object.keys(data.themeVars)) {
                    ((_propertyName: string, _configuration: ThemeVarDecoratorOptions) => {
                        Object.defineProperty(inst, _propertyName, {
                            get: () => {
                                let value = _configuration.defaultValue;
                                if (data.themeable) {
                                    for (const variant of inst[ACTIVE_VARIANTS]) {
                                        if (Object.keys(variant.cssVarsMap).indexOf(_configuration.name) > -1) {
                                            value = variant.cssVarsMap[_configuration.name];
                                            break;
                                        }
                                    }
                                }
                                if (isFunction(_configuration.transform)) {
                                    value = _configuration.transform.apply(inst, [value]);
                                }
                                return value;
                            },
                            set: () => {
                                throw new UsageException('Theme variables are readonly in the component.');
                            },
                            enumerable: false,
                            configurable: false
                        });
                    })(propertyName, data.themeVars[propertyName]);
                }
            }
        }

        // Template refs
        for (const refPropertyName of Object.keys(data.templateRefs)) {
            ((_templateRefName: string) => {
                Object.defineProperty(inst, _templateRefName, {
                    get: () => {
                        if (!inst.$refs) {
                            return null;
                        }
                        const opts = data.templateRefs[_templateRefName];
                        let v = inst.$refs[opts.name];
                        if (isNullOrUndefined(v)) {
                            return null;
                        }
                        if (!opts.resolve) {
                            if (v instanceof Element) {
                                return v;
                            }
                            return v.$el || v;
                        }
                        return anyToTsInst(v) || v;
                    },
                    enumerable: true,
                    configurable: true
                });
            })(refPropertyName);
        }

        // Reactive
        for (const itemName of data.reactive) {
            const itemRef = ref(inst[itemName]);
            // For properties exposed to the template.
            if (!isUndefined(data.exposed[itemName])) {
                const exposedName = resolveImportPublicName(importName, data.exposed[itemName].exposeAs, prefixOrAlias);
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
            const exposedName = resolveImportPublicName(importName, data.exposed[exposedInstanceName].exposeAs, prefixOrAlias);
            if (exposedName === false) {
                continue ;
            }
            // Check if the exposed property is not a getter, to avoid calling them by doing `inst[exposedInstanceName]`.
            const descriptor = getPropertyDescriptor(ctor, exposedInstanceName);
            if (descriptor && (descriptor.get || descriptor.set)) {
                // If declared as a computed, no need to expose it again.
                if (isUndefined(data.computed[exposedInstanceName])) {
                    // If not, assign the getter and setter to using the descriptor to avoid calling the getter.
                    ((getter: any, setter: any) => {
                        Object.defineProperty(output, exposedName, {
                            get: getter,
                            set: setter,
                            enumerable: true,
                            configurable: true
                        });
                    })(descriptor.get, descriptor.set);
                }
                continue ;
            }
            // For methods
            if (isFunction(inst[exposedInstanceName])) {
                output[exposedName] = proxy(inst[exposedInstanceName], inst);
            }
            // For property exposed to the template without a @Ref().
            else if (isUndefined(output[exposedName])) {
                if (data.exposed[exposedInstanceName].observe) {
                    output[exposedName] = ref(inst[exposedInstanceName]);
                    defineRefProxy(inst, exposedInstanceName, output, exposedName);
                } else {
                    output[exposedName] = inst[exposedInstanceName];
                }
            }
        }

        // Computed
        const createUpdatableComputed = <T>(options: any, debugOptions: any, getter: boolean): WritableComputedRef<T> => {
            return computed({
                get: () => {
                    // Trick to be able to force Vue to update the computed by changing the version.
                    // The version is initialized at "1" and incremented from there, so the condition is always true.
                    // Having a condition prevent the compiler to remove the instruction thinking it is dead code.
                    if (computedVersion.value > 0) {
                        return getter ? options.get() : options();
                    }
                },
                set: options.set
            }, debugOptions);
        };
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
            const descriptor = getPropertyDescriptor(ctor, computedName);
            if (isFunctionGetterSafe(ctor, computedName)) {
                c = createUpdatableComputed(proxy(inst[computedName], inst), computedOptions, false);
            } else if (!isUndefined(descriptor)) {
                if (!isFunction(descriptor.get)) {
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
                c = createUpdatableComputed(proxyGetterSetter, computedOptions, true);
                Object.defineProperty(inst, computedName, {
                    enumerable: true,
                    configurable: true,
                    get: proxyGetterSetter.get,
                    set: proxyGetterSetter.set
                });
            }
            if (!isUndefined(data.exposed[computedName])) {
                const exposedName = resolveImportPublicName(importName, data.exposed[computedName].exposeAs, prefixOrAlias);
                if (exposedName !== false) {
                    output[exposedName] = c;
                }
            }
        }

        // Decorated hooks
        if (!isServer()) {
            for (const hook of getObjectKeys(data.hooks)) {
                const hookMethod = HOOKS_MAP[hook as LifecycleHook];
                if (isFunction(hookMethod)) {
                    // @ts-ignore
                    data.hooks[hook].forEach((methodName) => {
                        hookMethod(proxy(inst[methodName], inst));
                    });
                }
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
            if (isDecoratedComponentConstructor(composableCtor)) {
                const composableDecorationData = getOrCreateComponentMetadata(composableCtor.prototype);
                if (isUndefined(composableDecorationData.component) && isUndefined(composableDecorationData.composable)) {
                    throw new UsageException(`The class "${composableCtor.name}" cannot be used as a composable because the "@Composable()" decorator is missing.`);
                }
                const composableInst = !isNullOrUndefined(inst[targetProperty]) ? inst[targetProperty] : instantiate(composableCtor, composableDecorationData.composable || {});
                const composableOutput = buildSetupMethod(
                    composableCtor,
                    composableDecorationData,
                    rootProps,
                    composableInst,
                    targetProperty,
                    data.imports[targetProperty].prefixOrAlias
                )(null, context);

                if (composableInst instanceof ComponentAwareComposable) {
                    Object.assign(composableInst, {component: inst});
                }
                for (const subProp of Object.keys(composableDecorationData.props)) {
                    const realPropName: string|false = resolveImportPublicName(targetProperty, subProp, importOptions.prefixOrAlias as PrefixOrAlias);
                    if (realPropName === false) {
                        continue ;
                    }
                    composableInst[subProp] = inst[realPropName];
                    const descriptor = Object.getOwnPropertyDescriptor(inst, realPropName)!;
                    if (!isUndefined(descriptor)) {
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
                }
                // Assign the composable instance to the hosting component.
                Object.defineProperty(inst, targetProperty, {
                    enumerable: true,
                    configurable: true,
                    value: composableInst
                });
                // Maybe export the import itself, if exposed.
                if (!isUndefined(data.exposed[targetProperty])) {
                    output[data.exposed[targetProperty].exposeAs] = composableInst;
                }
                Object.assign(output, composableOutput);
            }
        }

        // Watch
        const rootPropsKeys = Object.keys(rootProps);
        for (const watchOptions of data.watch) {
            const isArraySource = isArray(watchOptions.source);
            const source: string[]|WatchFunction = isString(watchOptions.source) ? [watchOptions.source] : watchOptions.source;
            ((_watchData: {target: string, source: WatchFunction|string[], options: PrivateWatchOptions, isArraySource: boolean}) => {
                const virtualRefs: Record<string, Ref> = {};
                let stopHandle: Function|null = null;
                const applyWatch = (utdDateSources: string[], utdIsArraySource: boolean) => {
                    if (stopHandle !== null) {
                        stopHandle();
                        // If we already have a watcher the new one must always trigger immediately,
                        // because it can only come from a change in the watch function.
                        _watchData.options.immediate = ImmediateStrategy.Sync;
                    }
                    const realSources: Array<Ref|WatchFunction> = [];
                    const realSourcesParts: string[][] = [];
                    const opts: VueWatchOptions = {
                        ..._watchData.options,
                        immediate: true // Always ask Vue to trigger the watch immediately so we can control when the callback is called.
                    };
                    for (const upToDateSource of utdDateSources) {
                        const parts = upToDateSource.split('.');
                        if (parts.length > 1) {
                            opts.deep = true;
                        }
                        const sourceBaseProperty: string = parts[0];
                        if (rootPropsKeys.indexOf(upToDateSource) > -1) {
                            // If we are watching a prop, watch its ref.
                            realSources.push(rootProps[upToDateSource]);

                            // To following should work too but doesn't in some
                            // situations and I don't understand why.
                            // realSources.push(() => inst[sourceBaseProperty]);
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
                    let haveTriggeredImmediately = false;
                    let initialCallConsumed = _watchData.options.immediate !== false;
                    let shouldDelayTrigger: boolean = _watchData.options.immediate !== ImmediateStrategy.Sync && _watchData.options.immediate !== false;
                    let delayedTriggerRegistered: boolean = false;
                    const deepWatcherPreviousValues: Record<string, any> = {};
                    const onWatchTrigger = (...args: any[]) => {
                        const process = () => {
                            if (unmounted) {
                                return ;
                            }
                            const newValues: any[] = [];
                            const oldValues: any[] = [];

                            initialCallConsumed = true;
                            for (let i = 0; i < realSources.length; ++i) {
                                const realSource = realSources[i];
                                let realSourceNewValue = isFunction(realSource) ? (realSource as WatchFunction).apply(inst) : (realSource as Ref).value;

                                // For shallow watchers, use the old value given by Vue.
                                let realSourceOldValue = i < args[1].length ? args[1][i] : undefined;
                                if (realSourcesParts[i].length > 1) {
                                    const path = realSourcesParts.join('.');
                                    const relevantParts = realSourcesParts[i].slice(1);
                                    realSourceNewValue = toRaw(getObjectValue(realSourceNewValue, relevantParts, undefined));

                                    // Deep watchers must get their old value from the internal map, because Vue didn't save them.
                                    realSourceOldValue = deepWatcherPreviousValues[path];
                                    if (areEqual(realSourceOldValue, realSourceNewValue)) {
                                        continue ;
                                    }
                                    deepWatcherPreviousValues[path] = cloneDeepPrimitive(realSourceNewValue);
                                }
                                newValues.push(realSourceNewValue);
                                oldValues.push(realSourceOldValue);
                            }
                            if (newValues.length > 0) {
                                return inst[_watchData.target].apply(inst, [
                                    utdIsArraySource ? newValues : newValues[0],
                                    utdIsArraySource ? oldValues : oldValues[0]
                                ].concat(args.slice(2)));
                            }
                        };
                        if (shouldDelayTrigger && _watchData.options.immediate !== false) {
                            if (!delayedTriggerRegistered) {
                                const initialProcess = () => {
                                    shouldDelayTrigger = false;
                                    process();
                                };
                                initialCallConsumed = false;
                                if (!isServer() && (_watchData.options.immediate & ImmediateStrategy.BeforeMount) === ImmediateStrategy.BeforeMount) {
                                    onBeforeMount(initialProcess);
                                } else if (!isServer() && (_watchData.options.immediate & ImmediateStrategy.Mounted) === ImmediateStrategy.Mounted) {
                                    onMounted(initialProcess);
                                } else {
                                    nextTick().then(initialProcess);
                                }
                                delayedTriggerRegistered = true;
                            }
                        } else if (initialCallConsumed) {
                            process();
                        } else {
                            initialCallConsumed = true;
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

        if (props !== null) {
            if (data.renderMethod !== null) {
                return proxy(inst[data.renderMethod], inst);
            }
        }
        return output;
    };
}
