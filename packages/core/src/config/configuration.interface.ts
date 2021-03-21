import { Constructor } from "@banquette/utils";

/**
 * Represent a valid configuration value.
 */
export type ConfigurationValue = string | number | boolean | null | symbol | undefined | Constructor<any> | ConfigurationInterface | Array<ConfigurationValue>;

/**
 * Interface all configuration objects stored in the SharedConfiguration service must conform with.
 */
export interface ConfigurationInterface {
    [member: string]: ConfigurationValue
}
