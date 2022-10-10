/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');

/**
 * A shorthand to apply multiple transform decorators in a single line.
 *
 * Usage:
 *
 * `@Transformable(Api, Pojo, Form)`
 *
 * or with a value transformer:
 *
 * `@Transformable(Model(), Api, Pojo)`
 */
function Transformable(valueOrRootTransformer) {
    var arguments$1 = arguments;

    var rootTransformers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rootTransformers[_i - 1] = arguments$1[_i];
    }
    var valueTransformer = !isFunction.isFunction(valueOrRootTransformer) ? valueOrRootTransformer : undefined;
    if (isUndefined.isUndefined(valueTransformer)) {
        rootTransformers.push(valueOrRootTransformer);
    }
    return function (prototypeOrCtor, propertyKey, index) {
        for (var _i = 0, rootTransformers_1 = rootTransformers; _i < rootTransformers_1.length; _i++) {
            var rootTransformer = rootTransformers_1[_i];
            var transformer = rootTransformer(valueTransformer);
            transformer(prototypeOrCtor, propertyKey, index);
        }
    };
}

exports.Transformable = Transformable;
