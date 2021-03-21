import {
    ensureArray,
    extend,
    getFromSymbolIndex,
    getSymbolDescription,
    isObject,
    isString,
    isSymbol,
    isUndefined
} from "@banquette/utils";
import { injectable } from "inversify";
import { UsageException } from "../error/usage.exception";
import { Injector } from "../injector";
import { ConfigurationInterface, ConfigurationValue } from "./configuration.interface";

@injectable()
export class SharedConfiguration {
    /**
     * Configuration objects indexed symbol.
     */
    private symbolMap: Record<symbol, ConfigurationInterface> = {};

    /**
     * Configuration objects indexed by symbol description.
     * All configurations may not have a string getter.
     */
    private stringMap: Record<string, ConfigurationInterface> = {};

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
    public get<T extends ConfigurationInterface | ConfigurationValue>(key: symbol|string|string[], defaultValue: any = null): T {
        if (isSymbol(key)) {
            return extend({}, this.getBySymbol(key), true);
        }
        return this.getByString<T>(key, defaultValue);
    }

    /**
     * Update a configuration with the values in the modifier.
     */
    public modify<T extends ConfigurationInterface>(symbol: symbol, modifier: Partial<T>): T {
        const config = extend(this.get(symbol), modifier, true);
        const description: string = getSymbolDescription(symbol);
        this.assignConfig(symbol, config);
        if (description) {
            this.stringMap[description] = config;
        }
        return config as T;
    }

    /**
     * Register a new configuration type.
     */
    public register<T extends ConfigurationInterface>(symbol: symbol, config: T, availableAsString: boolean = false): void {
        const description: string = getSymbolDescription(symbol);
        if (availableAsString) {
            if (!description) {
                throw new UsageException(
                    'You must give a description to your symbol '+
                    'if you make the configuration available by string.'
                );
            }
            if (!isUndefined(this.stringMap[description])) {
                throw new UsageException(
                    `Another symbol with the description "${description}" already exists. ` +
                    `This configuration will not be accessible by string.`
                );
            }
            this.stringMap[description] = config;
        }
        this.assignConfig(symbol, config);
    }

    /**
     * Assign a config object to the index.
     */
    private assignConfig(symbol: symbol, config: any): void {
        // @see https://github.com/microsoft/TypeScript/issues/1863#issuecomment-689028589
        Object.assign(this.symbolMap, {[symbol]: config});
    }

    /**
     * Get the full configuration object associated with a symbol.
     */
    private getBySymbol<T extends ConfigurationInterface>(symbol: symbol): T {
        const config = getFromSymbolIndex(this.symbolMap, symbol, null) as T;
        if (config === null) {
            throw new UsageException(`No config found for "${symbol.toString()}".`);
        }
        return extend({}, config);
    }

    /**
     * Get the configuration object or value in the string index.
     */
    private getByString<T>(key: symbol|string|string[], defaultValue: any = null): T {
        const keys = isString(key) ? key.split('.') : ensureArray(key);
        let currentValue: any = this.stringMap;
        let i = 0;
        for (; i < keys.length; ++i) {
            if (isUndefined(currentValue[keys[i]]) || (!isObject(currentValue[keys[i]]) && i < keys.length - 1)) {
                if (i === 0 && isUndefined(currentValue[keys[i]])) {
                    throw new UsageException(`No config found for "${keys[i]}".`);
                }
                return defaultValue;
            }
            currentValue = currentValue[keys[i]];
        }
        return !i ? extend({}, currentValue) : currentValue;
    }
}

export const SharedConfigurationSymbol = Symbol('SharedConfiguration');
Injector.RegisterService(SharedConfigurationSymbol, SharedConfiguration);
