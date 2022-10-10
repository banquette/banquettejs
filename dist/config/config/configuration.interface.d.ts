import { Constructor } from "@banquette/utils-type/types";
/**
 * Represent a valid configuration value.
 */
export declare type ConfigurationValue = string | number | boolean | null | symbol | undefined | Constructor | ConfigurationInterface | Array<ConfigurationValue>;
/**
 * Interface all configuration objects stored in the ConfigurationService service must conform with.
 */
export interface ConfigurationInterface {
    [member: string]: ConfigurationValue;
}
