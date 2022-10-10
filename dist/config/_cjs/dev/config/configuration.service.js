/*!
 * Banquette Config v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var extend = require('@banquette/utils-object/_cjs/dev/extend');
var getSymbolDescription = require('@banquette/utils-object/_cjs/dev/get-symbol-description');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isSymbol = require('@banquette/utils-type/_cjs/dev/is-symbol');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');

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
        if (isSymbol.isSymbol(key)) {
            return extend.extend({}, this.getBySymbol(key), true);
        }
        return this.getByString(key, defaultValue);
    };
    /**
     * Update a configuration with the values in the modifier.
     */
    ConfigurationService.prototype.modify = function (symbol, modifier) {
        var config = extend.extend(this.get(symbol), modifier, true);
        var description = getSymbolDescription.getSymbolDescription(symbol);
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
        var description = getSymbolDescription.getSymbolDescription(symbol);
        if (availableAsString) {
            if (!description) {
                throw new usage_exception.UsageException('You must give a description to your symbol ' +
                    'if you make the configuration available by string.');
            }
            if (!isUndefined.isUndefined(this.stringMap[description])) {
                throw new usage_exception.UsageException("Another symbol with the description \"".concat(description, "\" already exists. ") +
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
            throw new usage_exception.UsageException("No config found for \"".concat(symbol.toString(), "\"."));
        }
        return extend.extend({}, config);
    };
    /**
     * Get the configuration object or value in the string index.
     */
    ConfigurationService.prototype.getByString = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var keys = isString.isString(key) ? key.split('.') : ensureArray.ensureArray(key);
        var currentValue = this.stringMap;
        var i = 0;
        for (; i < keys.length; ++i) {
            if (isUndefined.isUndefined(currentValue[keys[i]]) || (!isObject.isObject(currentValue[keys[i]]) && i < keys.length - 1)) {
                if (i === 0 && isUndefined.isUndefined(currentValue[keys[i]])) {
                    throw new usage_exception.UsageException("No config found for \"".concat(keys[i], "\"."));
                }
                return defaultValue;
            }
            currentValue = currentValue[keys[i]];
        }
        return !i ? extend.extend({}, currentValue) : currentValue;
    };
    ConfigurationService = _tslib.__decorate([
        service_decorator.Service()
    ], ConfigurationService);
    return ConfigurationService;
}());

exports.ConfigurationService = ConfigurationService;
