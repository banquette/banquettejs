/*!
 * Banquette UtilsReflection v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { getConstructorArgumentsTypes } from './get-constructor-arguments-types.js';
import { getFunctionArguments } from './get-function-arguments.js';

/**
 * Get a key/value pair containing an entry for each argument of a constructor function, where:
 *   - the index is the name of the argument
 *   - the value is its type
 */
function getConstructorArgumentsNameTypeMap(ctor) {
    var names = getFunctionArguments(ctor);
    var types = getConstructorArgumentsTypes(ctor);
    if (names.length !== types.length) {
        throw new UsageException('Failed to create arguments map, names and types count doesn\'t match.');
    }
    var output = {};
    for (var i = 0; i < names.length; ++i) {
        output[names[i]] = types[i];
    }
    return output;
}

export { getConstructorArgumentsNameTypeMap };
