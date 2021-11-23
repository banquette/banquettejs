import { Constructor } from "@banquette/utils-type/types";

/**
 * Define the type of identifiers supported by the builtin container.
 */
export type InjectableIdentifier<T = unknown> = Constructor<T>;
