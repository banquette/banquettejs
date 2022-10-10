import { ConfigurationInterface, ConfigurationValue } from "./configuration.interface";
export declare class ConfigurationService {
    /**
     * Configuration objects indexed symbol.
     */
    private symbolMap;
    /**
     * Configuration objects indexed by symbol description.
     * All configurations may not have a string getter.
     */
    private stringMap;
    /**
     * Get a configuration object (or a value inside).
     *
     * The key can be either:
     *   - the symbol of the configuration (to get the whole configuration object)
     *   - a string (to get the whole configuration object using the symbol's description)
     *   - an array of strings (to get a value inside de configuration object)
     *
     * You can also fetch a value inside the configuration object using the dot notation.
     *
     * Some examples:
     *   - get(HttpConfigurationSymbol)     will get the full "http" configuration
     *   - get('http')                      same as above
     *   - get('http.timeout', 2000)        will get the "timeout" value of the "http" key and default to "2000" if not found
     *   - get(['http', 'timeout'], 2000)   same as above
     *
     * The "defaultValue" parameter only applies to values of the configuration.
     * If the symbol or the first string key given doesn't match any configuration, a UsageException is thrown.
     */
    get<T extends ConfigurationInterface | ConfigurationValue>(key: symbol | string | string[], defaultValue?: any): T;
    /**
     * Update a configuration with the values in the modifier.
     */
    modify<T extends ConfigurationInterface>(symbol: symbol, modifier: Partial<T>): T;
    /**
     * Register a new configuration type.
     */
    register<T extends ConfigurationInterface>(symbol: symbol, config: T, availableAsString?: boolean): void;
    /**
     * Get the full configuration object associated with a symbol.
     */
    private getBySymbol;
    /**
     * Get the configuration object or value in the string index.
     */
    private getByString;
}
