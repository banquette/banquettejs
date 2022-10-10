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
 * Inject a set of dependencies matching one or multiple tags.
 */
function InjectMultiple(tag) {
    return function (target, propertyKey, index) {
        utils.registerExplicitDependency(!isUndefined.isUndefined(propertyKey) ? target.constructor : target, tag, undefined, propertyKey, index);
    };
}

exports.InjectMultiple = InjectMultiple;
