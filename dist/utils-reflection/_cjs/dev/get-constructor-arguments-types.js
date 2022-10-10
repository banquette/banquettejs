/*!
 * Banquette UtilsReflection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('reflect-metadata');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');

/**
 * Get an array containing the type of each parameter of a constructor.
 */
function getConstructorArgumentsTypes(ctor) {
    return ensureArray.ensureArray(Reflect.getMetadata('design:paramtypes', ctor));
}

exports.getConstructorArgumentsTypes = getConstructorArgumentsTypes;
