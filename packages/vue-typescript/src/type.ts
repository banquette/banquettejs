import { Constructor } from "@banquette/utils-type/types";
import { DECORATORS_OPTIONS_HOLDER_NAME } from "./constants";
import { DecoratorsDataInterface } from "./decorator/decorators-data.interface";

/**
 * Define a prefix.
 */
export type Prefix = string|false|null;

/**
 * A map between original names and aliases.
 */
export type AliasesMap = Record<string, string>;

/**
 * A function converting an original name into an alias.
 */
export type AliasResolver = (name: string) => string|false;

/**
 * Regroup all types of alias definition.
 */
export type Alias = AliasResolver|AliasesMap;

/**
 * Regroup all types of prefix/alias definition.
 */
export type PrefixOrAlias = Prefix|Alias;

/**
 * A constructor extended with VueTypescript's metadata.
 */
export type DecoratedConstructor = Constructor & {[DECORATORS_OPTIONS_HOLDER_NAME]: DecoratorsDataInterface};
