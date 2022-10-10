/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __assign } from './_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { areEqual } from '@banquette/utils-misc/are-equal';
import { noop } from '@banquette/utils-misc/noop';
import { proxy } from '@banquette/utils-misc/proxy';
import { cloneDeepPrimitive } from '@banquette/utils-object/clone-deep-primitive';
import { getObjectKeys } from '@banquette/utils-object/get-object-keys';
import { getObjectValue } from '@banquette/utils-object/get-object-value';
import { ensureString } from '@banquette/utils-type/ensure-string';
import { isArray } from '@banquette/utils-type/is-array';
import { isFunction } from '@banquette/utils-type/is-function';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isString } from '@banquette/utils-type/is-string';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { ref, getCurrentInstance, toRef, readonly, provide, inject, isRef, computed, watchEffect, onBeforeMount, onBeforeUnmount, watch, onMounted, nextTick, toRaw } from 'vue';
import { ComponentAwareComposable } from './component-aware.composable.js';
import { COMPONENT_VUE_INSTANCE, COMPONENT_TS_INSTANCE, ACTIVE_VARIANTS, HOOKS_MAP } from './constants.js';
import { ImmediateStrategy } from './decorator/watch.decorator.js';
import { getThemesForComponent } from './theme/utils/get-themes-for-component.js';
import { matchVariant } from './theme/utils/match-variants.js';
import { splitVariantString } from './theme/utils/split-variant-string.js';
import { ComponentsCount } from './utils/components-count.js';
import { anyToTsInst } from './utils/converters.js';
import { defineGetter } from './utils/define-getter.js';
import { defineRefProxy } from './utils/define-ref-proxy.js';
import { getOrCreateComponentMetadata } from './utils/get-or-create-component-metadata.js';
import { getPropertyDescriptor } from './utils/get-property-descriptor.js';
import { isDecoratedComponentConstructor } from './utils/guards.js';
import { instantiate } from './utils/instantiate.js';
import { isFunctionGetterSafe } from './utils/is-function-getter-safe.js';
import { resolveImportPublicName } from './utils/resolve-import-public-name.js';

function buildSetupMethod(ctor, data, rootProps, parentInst, importName, prefixOrAlias) {
    if (rootProps === void 0) { rootProps = null; }
    if (parentInst === void 0) { parentInst = null; }
    if (prefixOrAlias === void 0) { prefixOrAlias = null; }
    return function (props, context) {
        var _a, _b, _c;
        var inst = parentInst;
        var unmounted = false;
        var computedVersion = ref(1);
        var output = {};
        var vueInst = getCurrentInstance();
        if (inst === null) {
            // Trick so Vue doesn't stop and show a warning because there is no render function on the component.
            // noop is assigned because this is not the function that will be used in reality.
            if (isUndefined(ctor.prototype.render)) {
                ctor.prototype.render = noop;
            }
            inst = new Proxy(instantiate(ctor, data.component), {
                get: function (target, p, receiver) {
                    if (p[0] === '$' && inst[COMPONENT_VUE_INSTANCE][p]) {
                        return inst[COMPONENT_VUE_INSTANCE][p];
                    }
                    return Reflect.get(target, p, receiver);
                }
            });
            // Set the Vue object we have to ensure an object is always available,
            // but make it writable, so it can be overridden by the `beforeCreate()` hook.
            Object.defineProperty(inst, COMPONENT_VUE_INSTANCE, {
                enumerable: false,
                configurable: true,
                writable: true,
                value: vueInst
            });
            // Make the Typescript instance available through the Vue instance.
            Object.defineProperty(vueInst, COMPONENT_TS_INSTANCE, {
                enumerable: false,
                configurable: false,
                writable: false,
                value: inst
            });
            if (data.themeable) {
                if (!isUndefined(inst[data.themeable.prop])) {
                    throw new UsageException("The name \"".concat(data.themeable.prop, "\" is already used in the component's instance, ") +
                        "please define another name for the prop that defines the name of the variant to use. " +
                        "You can set the \"prop\" option of the \"@Themeable\" decorator for that.");
                }
                Object.defineProperty(inst, ACTIVE_VARIANTS, {
                    enumerable: false,
                    configurable: false,
                    writable: true,
                    value: null
                });
            }
            defineGetter(inst, '$forceUpdateComputed', function () { return function () {
                computedVersion.value++;
            }; });
        }
        // Props
        if (props !== null) {
            var propsRefs = [];
            rootProps = {};
            for (var _i = 0, _d = Object.keys(props); _i < _d.length; _i++) {
                var propName = _d[_i];
                var propRef = toRef(props, propName);
                if (isUndefined(data.props[propName])) {
                    continue;
                }
                if (data.themeable === null || propName !== data.themeable.prop) {
                    propRef = (function (proxified, propName, validate, transform) {
                        var lastOriginalValue = Symbol('unassigned');
                        var lastModifiedValue;
                        return new Proxy(proxified, {
                            get: function (target, name) {
                                var value = target[name];
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
                                            var themes = getThemesForComponent(inst);
                                            var expectedVariants = splitVariantString(inst[data.themeable.prop] || '');
                                            inst[ACTIVE_VARIANTS] = [];
                                            // Find relevant variants for the state of the component.
                                            for (var _i = 0, themes_1 = themes; _i < themes_1.length; _i++) {
                                                var theme = themes_1[_i];
                                                var variantsCandidates = theme.getVariants(data.component.name);
                                                var _loop_5 = function (variantCandidate) {
                                                    if (matchVariant(variantCandidate, expectedVariants, inst)) {
                                                        inst[ACTIVE_VARIANTS].push(variantCandidate);
                                                        if (variantCandidate.applyIds.length > 0) {
                                                            inst[ACTIVE_VARIANTS] = inst[ACTIVE_VARIANTS].concat(variantsCandidates.filter(function (v) {
                                                                return v.publicId !== null && variantCandidate.applyIds.indexOf(v.publicId) > -1 && inst[ACTIVE_VARIANTS].indexOf(v) < 0;
                                                            }));
                                                        }
                                                    }
                                                };
                                                for (var _a = 0, variantsCandidates_1 = variantsCandidates; _a < variantsCandidates_1.length; _a++) {
                                                    var variantCandidate = variantsCandidates_1[_a];
                                                    _loop_5(variantCandidate);
                                                }
                                            }
                                        }
                                        if (data.props[propName].default === value) {
                                            var av = inst[ACTIVE_VARIANTS];
                                            // Search from the end to give priority to the one defined last.
                                            for (var i = av.length - 1; i >= 0; i--) {
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
                                        var validationResult = validate.validate(value);
                                        if (validationResult.waiting) {
                                            throw new UsageException("Async validators are not allowed to validate props.");
                                        }
                                        if (!validationResult.valid) {
                                            throw new UsageException("Validation failed for prop \"".concat(propName, "\". ") +
                                                "Reason: ".concat(validationResult.getViolationsStringsArray().join(', '), ".") +
                                                "Validated value was: \"".concat(ensureString(value), "\"."));
                                        }
                                    }
                                }
                                return value;
                            }
                        });
                    })(propRef, propName, data.props[propName].validate || null, data.props[propName].transform || null);
                    propsRefs.push(propRef);
                }
                var propPublicName = data.props[propName].name || propName;
                output[propPublicName] = propRef;
                defineRefProxy(inst, data.props[propName].propertyName, output, propPublicName);
                rootProps[propName] = propRef;
            }
            // Watch props changes to update theming attributes accordingly.
            if (data.themeable !== null) {
                // Theme vars accessors
                for (var _e = 0, _f = Object.keys(data.themeVars); _e < _f.length; _e++) {
                    var propertyName = _f[_e];
                    (function (_propertyName, _configuration) {
                        Object.defineProperty(inst, _propertyName, {
                            get: function () {
                                var value = _configuration.defaultValue;
                                if (data.themeable) {
                                    for (var _i = 0, _a = inst[ACTIVE_VARIANTS]; _i < _a.length; _i++) {
                                        var variant = _a[_i];
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
                            set: function () {
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
        for (var _g = 0, _h = Object.keys(data.templateRefs); _g < _h.length; _g++) {
            var refPropertyName = _h[_g];
            (function (_templateRefName) {
                Object.defineProperty(inst, _templateRefName, {
                    get: function () {
                        if (!inst.$refs) {
                            return null;
                        }
                        var opts = data.templateRefs[_templateRefName];
                        var v = inst.$refs[opts.name];
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
        for (var _j = 0, _k = data.reactive; _j < _k.length; _j++) {
            var itemName = _k[_j];
            var itemRef = ref(inst[itemName]);
            // For properties exposed to the template.
            if (!isUndefined(data.exposed[itemName])) {
                var exposedName = resolveImportPublicName(importName, data.exposed[itemName].exposeAs, prefixOrAlias);
                if (exposedName !== false) {
                    output[exposedName] = itemRef;
                    defineRefProxy(inst, itemName, output, exposedName);
                    continue;
                }
            }
            // For properties not exposed to the template.
            defineRefProxy(inst, itemName, (_a = {}, _a[itemName] = itemRef, _a));
        }
        var _loop_1 = function (exposedInstanceName) {
            var exposedName = resolveImportPublicName(importName, data.exposed[exposedInstanceName].exposeAs, prefixOrAlias);
            if (exposedName === false) {
                return "continue";
            }
            // Check if the exposed property is not a getter, to avoid calling them by doing `inst[exposedInstanceName]`.
            var descriptor = getPropertyDescriptor(ctor, exposedInstanceName);
            if (descriptor && (descriptor.get || descriptor.set)) {
                // If declared as a computed, no need to expose it again.
                if (isUndefined(data.computed[exposedInstanceName])) {
                    // If not, assign the getter and setter to using the descriptor to avoid calling the getter.
                    (function (getter, setter) {
                        Object.defineProperty(output, exposedName, {
                            get: getter,
                            set: setter,
                            enumerable: true,
                            configurable: true
                        });
                    })(descriptor.get, descriptor.set);
                }
                return "continue";
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
                }
                else {
                    output[exposedName] = inst[exposedInstanceName];
                }
            }
        };
        // Expose
        for (var _l = 0, _m = Object.keys(data.exposed); _l < _m.length; _l++) {
            var exposedInstanceName = _m[_l];
            _loop_1(exposedInstanceName);
        }
        // Computed
        var createUpdatableComputed = function (options, debugOptions, getter) {
            return computed({
                get: function () {
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
        var _loop_2 = function (computedName) {
            var c = null;
            var computedOptions = __assign({}, data.computed[computedName]);
            for (var _0 = 0, _1 = getObjectKeys(computedOptions); _0 < _1.length; _0++) {
                var k = _1[_0];
                if (isString(computedOptions[k])) {
                    var cb = computedOptions[k];
                    if (!isFunction(inst[cb])) {
                        throw new UsageException("Failed to apply @Computed() \"".concat(k, "\" option, no function \"").concat(cb, "\" has been found."));
                    }
                    computedOptions[k] = proxy(inst[cb], inst);
                }
            }
            var descriptor = getPropertyDescriptor(ctor, computedName);
            if (isFunctionGetterSafe(ctor, computedName)) {
                c = createUpdatableComputed(proxy(inst[computedName], inst), computedOptions, false);
            }
            else if (!isUndefined(descriptor)) {
                if (!isFunction(descriptor.get)) {
                    console.warn("Unable to create a computed for \"".concat(computedName, "\", no getter found."));
                    return "continue";
                }
                var proxyGetterSetter = {
                    get: (function (_cn) { return function () {
                        return descriptor.get.apply(inst);
                    }; })(),
                    set: function () {
                        throw new UsageException("You cannot set a value on \"".concat(computedName, "\" because the property is readonly."));
                    }
                };
                if (isFunction(descriptor.set)) {
                    proxyGetterSetter.set = (function (_cn) { return function (val) { return descriptor.set.apply(inst, [val]); }; })();
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
                var exposedName = resolveImportPublicName(importName, data.exposed[computedName].exposeAs, prefixOrAlias);
                if (exposedName !== false) {
                    output[exposedName] = c;
                }
            }
        };
        for (var _o = 0, _p = Object.keys(data.computed); _o < _p.length; _o++) {
            var computedName = _p[_o];
            _loop_2(computedName);
        }
        var _loop_3 = function (hook) {
            var hookMethod = HOOKS_MAP[hook];
            if (isFunction(hookMethod)) {
                // @ts-ignore
                data.hooks[hook].forEach(function (methodName) {
                    hookMethod(proxy(inst[methodName], inst));
                });
            }
        };
        // Decorated hooks
        for (var _q = 0, _r = getObjectKeys(data.hooks); _q < _r.length; _q++) {
            var hook = _r[_q];
            _loop_3(hook);
        }
        // Provided
        for (var _s = 0, _t = getObjectKeys(data.provided); _s < _t.length; _s++) {
            var property = _t[_s];
            var providedRef = ref(inst[property]);
            if (data.provided[property].readonly) {
                providedRef = readonly(providedRef);
            }
            provide(data.provided[property].provideAs, providedRef);
            defineRefProxy(inst, property, (_b = {}, _b[property] = providedRef, _b));
        }
        // Injected
        for (var _u = 0, _v = getObjectKeys(data.injected); _u < _v.length; _u++) {
            var property = _v[_u];
            var injectResult = inject(data.injected[property].target, data.injected[property].defaultValue);
            // If the inject is not found the default value is returned, so create a ref with it.
            if (!isRef(injectResult)) {
                injectResult = ref(injectResult);
            }
            defineRefProxy(inst, property, (_c = {}, _c[property] = injectResult, _c));
            output[property] = injectResult;
        }
        // Composable
        if (props === null && Object.keys(data.imports).length > 0) {
            throw new UsageException("The class \"".concat(inst.constructor.name, "\" cannot contain imports because it is used as a composable. Composables cannot be nested."));
        }
        var _loop_4 = function (targetProperty) {
            var importOptions = data.imports[targetProperty];
            var composableCtor = importOptions.composable;
            if (isDecoratedComponentConstructor(composableCtor)) {
                var composableDecorationData = getOrCreateComponentMetadata(composableCtor.prototype);
                if (isUndefined(composableDecorationData.component) && isUndefined(composableDecorationData.composable)) {
                    throw new UsageException("The class \"".concat(composableCtor.name, "\" cannot be used as a composable because the \"@Composable()\" decorator is missing."));
                }
                var composableInst_1 = !isNullOrUndefined(inst[targetProperty]) ? inst[targetProperty] : instantiate(composableCtor, composableDecorationData.composable || {});
                var composableOutput = buildSetupMethod(composableCtor, composableDecorationData, rootProps, composableInst_1, targetProperty, data.imports[targetProperty].prefixOrAlias)(null, context);
                if (composableInst_1 instanceof ComponentAwareComposable) {
                    Object.assign(composableInst_1, { component: inst });
                }
                var _loop_6 = function (subProp) {
                    var realPropName = resolveImportPublicName(targetProperty, subProp, importOptions.prefixOrAlias);
                    if (realPropName === false) {
                        return "continue";
                    }
                    composableInst_1[subProp] = inst[realPropName];
                    var descriptor = Object.getOwnPropertyDescriptor(inst, realPropName);
                    if (!isUndefined(descriptor)) {
                        (function (getter, setter) {
                            Object.defineProperty(composableInst_1, subProp, {
                                get: getter,
                                set: setter,
                                enumerable: true,
                                configurable: true,
                            });
                        })(descriptor.get, descriptor.set);
                        delete inst[realPropName];
                    }
                };
                for (var _2 = 0, _3 = Object.keys(composableDecorationData.props); _2 < _3.length; _2++) {
                    var subProp = _3[_2];
                    _loop_6(subProp);
                }
                // Assign the composable instance to the hosting component.
                Object.defineProperty(inst, targetProperty, {
                    enumerable: true,
                    configurable: true,
                    value: composableInst_1
                });
                // Maybe export the import itself, if exposed.
                if (!isUndefined(data.exposed[targetProperty])) {
                    output[data.exposed[targetProperty].exposeAs] = composableInst_1;
                }
                Object.assign(output, composableOutput);
            }
        };
        for (var _w = 0, _x = Object.keys(data.imports); _w < _x.length; _w++) {
            var targetProperty = _x[_w];
            _loop_4(targetProperty);
        }
        // Watch
        var rootPropsKeys = Object.keys(rootProps);
        for (var _y = 0, _z = data.watch; _y < _z.length; _y++) {
            var watchOptions = _z[_y];
            var isArraySource = isArray(watchOptions.source);
            var source = isString(watchOptions.source) ? [watchOptions.source] : watchOptions.source;
            (function (_watchData) {
                var virtualRefs = {};
                var stopHandle = null;
                var applyWatch = function (utdDateSources, utdIsArraySource) {
                    if (stopHandle !== null) {
                        stopHandle();
                        // If we already have a watcher the new one must always trigger immediately,
                        // because it can only come from a change in the watch function.
                        _watchData.options.immediate = ImmediateStrategy.Sync;
                    }
                    var realSources = [];
                    var realSourcesParts = [];
                    var opts = __assign(__assign({}, _watchData.options), { immediate: true // Always ask Vue to trigger the watch immediately so we can control when the callback is called.
                     });
                    for (var _i = 0, utdDateSources_1 = utdDateSources; _i < utdDateSources_1.length; _i++) {
                        var upToDateSource = utdDateSources_1[_i];
                        var parts = upToDateSource.split('.');
                        if (parts.length > 1) {
                            opts.deep = true;
                        }
                        var sourceBaseProperty = parts[0];
                        if (rootPropsKeys.indexOf(upToDateSource) > -1) {
                            // If we are watching a prop, watch its ref.
                            realSources.push(rootProps[upToDateSource]);
                            // To following should work too but doesn't in some
                            // situations and I don't understand why.
                            // realSources.push(() => inst[sourceBaseProperty]);
                        }
                        else if (!isUndefined(output[sourceBaseProperty])) {
                            // If we already have a ref for this property.
                            realSources.push(output[sourceBaseProperty]);
                        }
                        else {
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
                    var haveTriggeredImmediately = false;
                    var initialCallConsumed = _watchData.options.immediate !== false;
                    var shouldDelayTrigger = _watchData.options.immediate !== ImmediateStrategy.Sync && _watchData.options.immediate !== false;
                    var deepWatcherPreviousValues = {};
                    var onWatchTrigger = function () {
                        var arguments$1 = arguments;

                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments$1[_i];
                        }
                        var process = function () {
                            if (unmounted) {
                                return;
                            }
                            var newValues = [];
                            var oldValues = [];
                            initialCallConsumed = true;
                            for (var i = 0; i < realSources.length; ++i) {
                                var realSource = realSources[i];
                                var realSourceNewValue = isFunction(realSource) ? realSource.apply(inst) : realSource.value;
                                // For shallow watchers, use the old value given by Vue.
                                var realSourceOldValue = i < args[1].length ? args[1][i] : undefined;
                                if (realSourcesParts[i].length > 1) {
                                    var path = realSourcesParts.join('.');
                                    var relevantParts = realSourcesParts[i].slice(1);
                                    realSourceNewValue = toRaw(getObjectValue(realSourceNewValue, relevantParts, undefined));
                                    // Deep watchers must get their old value from the internal map, because Vue didn't save them.
                                    realSourceOldValue = deepWatcherPreviousValues[path];
                                    if (areEqual(realSourceOldValue, realSourceNewValue)) {
                                        continue;
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
                        if (shouldDelayTrigger) {
                            var initialProcess = function () {
                                shouldDelayTrigger = false;
                                process();
                            };
                            initialCallConsumed = false;
                            if (_watchData.options.immediate === ImmediateStrategy.BeforeMount) {
                                onBeforeMount(initialProcess);
                            }
                            else if (_watchData.options.immediate === ImmediateStrategy.Mounted) {
                                onMounted(initialProcess);
                            }
                            else {
                                nextTick().then(initialProcess);
                            }
                        }
                        else if (initialCallConsumed) {
                            process();
                        }
                        else {
                            initialCallConsumed = true;
                        }
                        haveTriggeredImmediately = true;
                    };
                    stopHandle = watch(realSources, onWatchTrigger, opts);
                    if (!haveTriggeredImmediately) {
                        // Workaround issue #5032:
                        // https://github.com/vuejs/vue-next/issues/5032
                        var fakeValues = new Array(realSources.length).fill(undefined);
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
                    var cRef_1 = computed(proxy(_watchData.source, inst));
                    watchEffect(function () {
                        var computedResult = cRef_1.value;
                        var isArraySource = isArray(computedResult);
                        applyWatch(!isArraySource ? [computedResult] : computedResult, isArraySource);
                    });
                }
                else {
                    applyWatch(_watchData.source, _watchData.isArraySource);
                }
            })({ target: watchOptions.target, source: source, options: watchOptions.options, isArraySource: isArraySource });
        }
        if (props !== null) {
            onBeforeMount(function () { return ComponentsCount.count++; });
            onBeforeUnmount(function () {
                unmounted = true;
                ComponentsCount.count--;
            });
            if (data.renderMethod !== null) {
                return proxy(inst[data.renderMethod], inst);
            }
        }
        return output;
    };
}

export { buildSetupMethod };
