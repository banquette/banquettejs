import { Constructor } from "@banquette/utils-type";
import { getFunctionArguments } from "./get-function-arguments";
import { getConstructorArgumentsTypes } from "./get-constructor-arguments-types";
import { UsageException } from "@banquette/exception";

/**
 * Get a key/value pair containing an entry for each argument of a constructor function, where:
 *   - the index is the name of the argument
 *   - the value is its type
 */
export function getConstructorArgumentsNameTypeMap(ctor: Constructor): Record<string, any> {
    const names: string[] = getFunctionArguments(ctor);
    const types: string[] = getConstructorArgumentsTypes(ctor);
    if (names.length !== types.length) {
        throw new UsageException('Failed to create arguments map, names and types count doesn\'t match.');
    }
    const output: Record<string, any> = {};
    for (let i = 0; i < names.length; ++i) {
        output[names[i]] = types[i];
    }
    return output;
}
