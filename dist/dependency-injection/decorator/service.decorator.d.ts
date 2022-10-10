import { Constructor } from "@banquette/utils-type/types";
/**
 * Register a service into the container.
 */
export declare function Service(tag?: symbol | symbol[], ctorOverride?: Constructor | null): Function;
