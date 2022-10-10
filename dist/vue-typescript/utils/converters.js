/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { isConstructor } from '@banquette/utils-type/is-constructor';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { VUE_CLASS_COMPONENT_OPTIONS, COMPONENT_TS_INSTANCE, COMPONENT_CTOR, DECORATORS_METADATA } from '../constants.js';
import { isDecoratedComponentConstructor, isDecoratedComponentInstance, isVccOpts, isComponentInstance } from './guards.js';

/**
 * Try to get vcc options from a constructor function.
 * Can fail and return `null` if the constructor is not decorated.
 */
function ctorToVccOpts(ctor) {
    if (isDecoratedComponentConstructor(ctor)) {
        return ctor[VUE_CLASS_COMPONENT_OPTIONS] || null;
    }
    return null;
}
/**
 * Try to get the metadata of a component from its class constructor.
 * Can return `null` if the constructor is not decorated.
 */
function ctorToMetadata(inst) {
    var opts = ctorToVccOpts(inst);
    return opts !== null ? vccOptsToMetadata(opts) : null;
}
/**
 * Get the vcc options of a component instance (Vue native object or ts class inheriting Vue).
 */
function vueInstToVccOpts(inst) {
    return inst.$.type;
}
/**
 * Get the Typescript class behind a component instance.
 */
function vueInstToTsInst(inst) {
    return inst.$[COMPONENT_TS_INSTANCE];
}
/**
 * Try to resolve the Vue Typescript component class behind a Vue instance.
 * If the Vue instance is not using Vue Typescript, return it as is.
 */
function maybeResolveTsInst(inst) {
    if (isDecoratedComponentInstance(inst)) {
        return vueInstToTsInst(inst);
    }
    return inst;
}
/**
 * Get the constructor function behind vcc options.
 */
function vccOptsToCtor(opts) {
    return opts[COMPONENT_CTOR];
}
/**
 * Get the constructor function of a component.
 */
function vueInstToCtor(inst) {
    return inst.$.type[COMPONENT_CTOR];
}
/**
 * Get the component's metadata from its vcc options.
 */
function vccOptsToMetadata(opts) {
    return vccOptsToCtor(opts).prototype[DECORATORS_METADATA];
}
/**
 * Get the component's metadata from its vcc options.
 */
function vueInstToMetadata(inst) {
    return vccOptsToMetadata(vueInstToVccOpts(inst));
}
/**
 * Ensure the constructor is returned in case the input is the export of a SFC.
 */
function c(input) {
    if (isVccOpts(input)) {
        return vccOptsToCtor(input);
    }
    if (!isConstructor(input)) {
        throw new UsageException('Bad input for c(), expecting vcc options or a constructor.');
    }
    return input;
}
/**
 * Will try to get the vcc options of a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
function anyToVccOpts(input) {
    if (isVccOpts(input)) {
        return input;
    }
    if (isComponentInstance(input)) {
        return isVccOpts(input.$.type) ? input.$.type : null;
    }
    if (isDecoratedComponentConstructor(input)) {
        return input[VUE_CLASS_COMPONENT_OPTIONS];
    }
    return null;
}
/**
 * Will try to get the Vue Typescript's instance of a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
function anyToTsInst(input) {
    if (isDecoratedComponentInstance(input)) {
        return vueInstToTsInst(input);
    }
    if (isObject(input) && !isUndefined(input.__vueParentComponent) && isObject(input.__vueParentComponent[COMPONENT_TS_INSTANCE])) {
        return input.__vueParentComponent[COMPONENT_TS_INSTANCE];
    }
    return null;
}
/**
 * Will try to get the Vue Typescript's instance of a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
function anyToComponentCtor(input) {
    if (isDecoratedComponentConstructor(input)) {
        return input;
    }
    if (isVccOpts(input)) {
        return vccOptsToCtor(input);
    }
    if (isDecoratedComponentInstance(input)) {
        return vueInstToCtor(input);
    }
    return null;
}
/**
 * Will try to get the metadata a component from an unknown input
 * by trying all supported conversions.
 *
 * Returns `null` on failure.
 */
function anyToComponentMetadata(input) {
    if (isVccOpts(input)) {
        return vccOptsToMetadata(input);
    }
    if (isDecoratedComponentInstance(input)) {
        return vueInstToMetadata(input);
    }
    if (isDecoratedComponentConstructor(input)) {
        return ctorToMetadata(input);
    }
    if (isComponentInstance(input) && isVccOpts(input.$.type)) {
        return vccOptsToMetadata(input.$.type);
    }
    return null;
}

export { anyToComponentCtor, anyToComponentMetadata, anyToTsInst, anyToVccOpts, c, ctorToMetadata, ctorToVccOpts, maybeResolveTsInst, vccOptsToCtor, vccOptsToMetadata, vueInstToCtor, vueInstToMetadata, vueInstToTsInst, vueInstToVccOpts };
