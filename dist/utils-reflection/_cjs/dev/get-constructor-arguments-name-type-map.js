/*!
 * Banquette UtilsReflection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var getConstructorArgumentsTypes = require('./get-constructor-arguments-types.js');
var getFunctionArguments = require('./get-function-arguments.js');

/**
 * Get a key/value pair containing an entry for each argument of a constructor function, where:
 *   - the index is the name of the argument
 *   - the value is its type
 */
function getConstructorArgumentsNameTypeMap(ctor) {
    var names = getFunctionArguments.getFunctionArguments(ctor);
    var types = getConstructorArgumentsTypes.getConstructorArgumentsTypes(ctor);
    if (names.length !== types.length) {
        throw new usage_exception.UsageException('Failed to create arguments map, names and types count doesn\'t match.');
    }
    var output = {};
    for (var i = 0; i < names.length; ++i) {
        output[names[i]] = types[i];
    }
    return output;
}

exports.getConstructorArgumentsNameTypeMap = getConstructorArgumentsNameTypeMap;
