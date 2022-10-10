import { LazyInjectableIdentifier } from "../type/lazy-injectable-identifier";
/**
 * Register a function that will be called to get the type of the object to import when
 * the hosting object is created by the container.
 *
 * This is used to workaround circular dependencies.
 */
export declare function InjectLazy(identifier: LazyInjectableIdentifier): Function;
