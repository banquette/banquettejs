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
 * Fetch a dependency from the container and assign it to a property or constructor parameter.
 */
function Inject(identifier) {
    return function (target, propertyKey, index) {
        utils.registerExplicitDependency(!isUndefined.isUndefined(propertyKey) ? target.constructor : target, identifier, false, propertyKey, index);
    };
}

exports.Inject = Inject;
