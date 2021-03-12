/**
 * Environment types.
 */
export type EnvType = 'dev' | 'prod';

/**
 * Define the configuration object of the core.
 */
export interface CoreConfigurationInterface {
    /**
     * Current environment.
     */
    env: EnvType;

    /**
     * Version number of the app.
     */
    version: string;
}
