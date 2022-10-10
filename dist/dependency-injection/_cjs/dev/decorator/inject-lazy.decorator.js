/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var utils = require('../utils.js');

/**
 * Register a function that will be called to get the type of the object to import when
 * the hosting object is created by the container.
 *
 * This is used to workaround circular dependencies.
 */
function InjectLazy(identifier) {
    return function (target, propertyKey, index) {
        utils.registerExplicitDependency(!isUndefined.isUndefined(propertyKey) ? target.constructor : target, identifier, true, propertyKey, index);
    };
}

exports.InjectLazy = InjectLazy;
