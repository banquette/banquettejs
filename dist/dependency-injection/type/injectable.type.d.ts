import { InjectableIdentifier } from "./injectable-identifier.type";
import { LazyInjectableIdentifier } from "./lazy-injectable-identifier";
/**
 * Define the type of an injectable.
 * Can be either an eager type if it can be determined right away, or a function if it must be delayed because of a circular dependency.
 */
export declare type InjectableType = {
    eager: InjectableIdentifier | null;
    lazy: LazyInjectableIdentifier | null;
    tags: symbol[] | null;
};
