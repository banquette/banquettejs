import { Constructor } from "@banquette/utils-type/types";
import { PrefixOrAlias } from "../type";
export interface ImportDecoratorOptions {
    /**
     * Constructor of the composable object.
     */
    composable: Constructor;
    /**
     * Define how exposed elements should be named for the template.
     * It can define `prefixes` or `aliases` depending on the **type** of input.
     *
     * It can take the following values:
     *   - `null`: the name of the property `@Import` is set on is used as prefix (default behavior).
     *
     *   - `false`: means no prefix is added, elements will have the exact same name in the template and the import.
     *
     *   - a `string`: the given string is used as prefix to everything the import exposes.
     *
     * The values above create **prefixes**, the values below create **aliases**:
     *
     *   - an `object`: a key/value pair where each key is a element exposed by the import and the
     *                  value the name if should have in the template.
     *                  Elements omitted in the object are exposed with their original name.
     *                  A `false` value will stop the element from being exposed.
     *                  This DOES NOT define prefixes, it defines the complete name of each element.
     *
     *   - a `function`: a function that is called for each item that requires an alias,
     *                   expecting in return the full name the element should have in the template,
     *                   or `false` to not expose the element.
     */
    prefixOrAlias?: PrefixOrAlias;
}
export declare function Import(composable?: Constructor): any;
export declare function Import(composable?: Constructor, prefixOrAlias?: PrefixOrAlias): any;
export declare function Import(options?: ImportDecoratorOptions): any;
