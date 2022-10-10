import { Constructor } from "@banquette/utils-type/types";
/**
 * Get a key/value pair containing an entry for each argument of a constructor function, where:
 *   - the index is the name of the argument
 *   - the value is its type
 */
export declare function getConstructorArgumentsNameTypeMap(ctor: Constructor): Record<string, any>;
