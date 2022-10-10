/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isConstructor = require('@banquette/utils-type/_cjs/dev/is-constructor');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constants = require('../constants.js');
var guards = require('./guards.js');

/**
 * Try to get vcc options from a constructor function.
 * Can fail and return `null` if the constructor is not decorated.
 */
function ctorToVccOpts(ctor) {
    if (guards.isDecoratedComponentConstructor(ctor)) {
        return ctor[constants.VUE_CLASS_COMPONENT_OPTIONS] || null;
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
    return inst.$[constants.COMPONENT_TS_INSTANCE];
}
/**
 * Try to resolve the Vue Typescript component class behind a Vue instance.
 * If the Vue instance is not using Vue Typescript, return it as is.
 */
function maybeResolveTsInst(inst) {
    if (guards.isDecoratedComponentInstance(inst)) {
        return vueInstToTsInst(inst);
    }
    return inst;
}
/**
 * Get the constructor function behind vcc options.
 */
function vccOptsToCtor(opts) {
    return opts[constants.COMPONENT_CTOR];
}
/**
 * Get the constructor function of a component.
 */
function vueInstToCtor(inst) {
    return inst.$.type[constants.COMPONENT_CTOR];
}
/**
 * Get the component's metadata from its vcc options.
 */
function vccOptsToMetadata(opts) {
    return vccOptsToCtor(opts).prototype[constants.DECORATORS_METADATA];
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
    if (guards.isVccOpts(input)) {
        return vccOptsToCtor(input);
    }
    if (!isConstructor.isConstructor(input)) {
        throw new usage_exception.UsageException('Bad input for c(), expecting vcc options or a constructor.');
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
    if (guards.isVccOpts(input)) {
        return input;
    }
    if (guards.isComponentInstance(input)) {
        return guards.isVccOpts(input.$.type) ? input.$.type : null;
    }
    if (guards.isDecoratedComponentConstructor(input)) {
        return input[constants.VUE_CLASS_COMPONENT_OPTIONS];
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
    if (guards.isDecoratedComponentInstance(input)) {
        return vueInstToTsInst(input);
    }
    if (isObject.isObject(input) && !isUndefined.isUndefined(input.__vueParentComponent) && isObject.isObject(input.__vueParentComponent[constants.COMPONENT_TS_INSTANCE])) {
        return input.__vueParentComponent[constants.COMPONENT_TS_INSTANCE];
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
    if (guards.isDecoratedComponentConstructor(input)) {
        return input;
    }
    if (guards.isVccOpts(input)) {
        return vccOptsToCtor(input);
    }
    if (guards.isDecoratedComponentInstance(input)) {
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
    if (guards.isVccOpts(input)) {
        return vccOptsToMetadata(input);
    }
    if (guards.isDecoratedComponentInstance(input)) {
        return vueInstToMetadata(input);
    }
    if (guards.isDecoratedComponentConstructor(input)) {
        return ctorToMetadata(input);
    }
    if (guards.isComponentInstance(input) && guards.isVccOpts(input.$.type)) {
        return vccOptsToMetadata(input.$.type);
    }
    return null;
}

exports.anyToComponentCtor = anyToComponentCtor;
exports.anyToComponentMetadata = anyToComponentMetadata;
exports.anyToTsInst = anyToTsInst;
exports.anyToVccOpts = anyToVccOpts;
exports.c = c;
exports.ctorToMetadata = ctorToMetadata;
exports.ctorToVccOpts = ctorToVccOpts;
exports.maybeResolveTsInst = maybeResolveTsInst;
exports.vccOptsToCtor = vccOptsToCtor;
exports.vccOptsToMetadata = vccOptsToMetadata;
exports.vueInstToCtor = vueInstToCtor;
exports.vueInstToMetadata = vueInstToMetadata;
exports.vueInstToTsInst = vueInstToTsInst;
exports.vueInstToVccOpts = vueInstToVccOpts;
