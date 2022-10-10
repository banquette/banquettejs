/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isConstructor = require('@banquette/utils-type/_cjs/dev/is-constructor');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var constants = require('../constants.js');

/**
 * Test if the input is a `DecoratedComponentConstructor`.
 */
function isDecoratedComponentConstructor(input) {
    return isConstructor.isConstructor(input) && input.prototype.hasOwnProperty(constants.DECORATORS_METADATA);
}
/**
 * Test if the input is a `DecoratedComponentPrototype`.
 */
function isDecoratedComponentPrototype(input) {
    return isObject.isObject(input) && constants.DECORATORS_METADATA in input;
}
/**
 * Test if the input is a Vue component instance.
 */
function isComponentInstance(input) {
    return isObject.isObject(input) && '$' in input && '$attrs' in input && '$data' in input && '$el' in input && '$parent' in input;
}
/**
 * Test if the input is a `DecoratedComponentInstance`.
 */
function isDecoratedComponentInstance(input) {
    return isComponentInstance(input) && constants.COMPONENT_TS_INSTANCE in input.$ && constants.COMPONENT_CTOR in input.$.type;
}
/**
 * Test if the input is a `VccOpts` object.
 */
function isVccOpts(input) {
    return isObject.isObject(input) && (isFunction.isFunction(input.render) || isFunction.isFunction(input.ssrRender)) && constants.COMPONENT_CTOR in input;
}

exports.isComponentInstance = isComponentInstance;
exports.isDecoratedComponentConstructor = isDecoratedComponentConstructor;
exports.isDecoratedComponentInstance = isDecoratedComponentInstance;
exports.isDecoratedComponentPrototype = isDecoratedComponentPrototype;
exports.isVccOpts = isVccOpts;
