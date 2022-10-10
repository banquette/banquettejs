import { PrefixOrAlias } from "../type";
/**
 * Resolve the exposed name of a composable public element (prop, computed, method or data).
 * Can return `false` if the item should not be exposed
 */
export declare function resolveImportPublicName(originalPrefix: string | undefined, originalName: string, prefixOrAlias: PrefixOrAlias): string | false;
