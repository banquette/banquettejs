/*!
 * Banquette Config v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate } from '../_virtual/_tslib.js';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { UsageException } from '@banquette/exception/usage.exception';
import { extend } from '@banquette/utils-object/extend';
import { getSymbolDescription } from '@banquette/utils-object/get-symbol-description';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isObject } from '@banquette/utils-type/is-object';
import { isString } from '@banquette/utils-type/is-string';
import { isSymbol } from '@banquette/utils-type/is-symbol';
import { isUndefined } from '@banquette/utils-type/is-undefined';

var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
        /**
         * Configuration objects indexed symbol.
         */
        this.symbolMap = {};
        /**
         * Configuration objects indexed by symbol description.
         * All configurations may not have a string getter.
         */
        this.stringMap = {};
    }
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
    ConfigurationService.prototype.get = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (isSymbol(key)) {
            return extend({}, this.getBySymbol(key), true);
        }
        return this.getByString(key, defaultValue);
    };
    /**
     * Update a configuration with the values in the modifier.
     */
    ConfigurationService.prototype.modify = function (symbol, modifier) {
        var config = extend(this.get(symbol), modifier, true);
        var description = getSymbolDescription(symbol);
        this.symbolMap[symbol] = config;
        if (description) {
            this.stringMap[description] = config;
        }
        return config;
    };
    /**
     * Register a new configuration type.
     */
    ConfigurationService.prototype.register = function (symbol, config, availableAsString) {
        if (availableAsString === void 0) { availableAsString = false; }
        var description = getSymbolDescription(symbol);
        if (availableAsString) {
            if (!description) {
                throw new UsageException('You must give a description to your symbol ' +
                    'if you make the configuration available by string.');
            }
            if (!isUndefined(this.stringMap[description])) {
                throw new UsageException("Another symbol with the description \"".concat(description, "\" already exists. ") +
                    "This configuration will not be accessible by string.");
            }
            this.stringMap[description] = config;
        }
        this.symbolMap[symbol] = config;
    };
    /**
     * Get the full configuration object associated with a symbol.
     */
    ConfigurationService.prototype.getBySymbol = function (symbol) {
        var config = this.symbolMap[symbol] || null;
        if (config === null) {
            throw new UsageException("No config found for \"".concat(symbol.toString(), "\"."));
        }
        return extend({}, config);
    };
    /**
     * Get the configuration object or value in the string index.
     */
    ConfigurationService.prototype.getByString = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var keys = isString(key) ? key.split('.') : ensureArray(key);
        var currentValue = this.stringMap;
        var i = 0;
        for (; i < keys.length; ++i) {
            if (isUndefined(currentValue[keys[i]]) || (!isObject(currentValue[keys[i]]) && i < keys.length - 1)) {
                if (i === 0 && isUndefined(currentValue[keys[i]])) {
                    throw new UsageException("No config found for \"".concat(keys[i], "\"."));
                }
                return defaultValue;
            }
            currentValue = currentValue[keys[i]];
        }
        return !i ? extend({}, currentValue) : currentValue;
    };
    ConfigurationService = __decorate([
        Service()
    ], ConfigurationService);
    return ConfigurationService;
}());

export { ConfigurationService };
