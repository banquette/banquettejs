import { ConfigurationInterface } from "./configuration.interface";

/**
 * Environment types.
 */
export type EnvType = 'dev' | 'prod';

/**
 * Define the configuration object of the core.
 */
export interface CoreConfigurationInterface extends ConfigurationInterface {
    /**
     * Current environment.
     */
    env: EnvType;

    /**
     * Version number of the app.
     */
    version: string;
}
