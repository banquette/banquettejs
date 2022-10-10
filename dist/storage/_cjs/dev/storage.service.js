/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var injectLazy_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject-lazy.decorator');
var injectMultiple_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject-multiple.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isConstructor = require('@banquette/utils-type/_cjs/dev/is-constructor');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isSymbol = require('@banquette/utils-type/_cjs/dev/is-symbol');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var config = require('./config.js');
var constant = require('./constant.js');
var noAdapterAvailable_exception = require('./exception/no-adapter-available.exception.js');
require('./adapter/cookies.adapter.js');
require('./adapter/local-storage.adapter.js');

var StorageService = /** @class */ (function () {
    function StorageService(adapters, configuration) {
        this.availableAdaptersOrdered = [];
        this.availableAdaptersMap = {};
        for (var _i = 0, adapters_1 = adapters; _i < adapters_1.length; _i++) {
            var adapter = adapters_1[_i];
            if (adapter.isAvailable()) {
                this.availableAdaptersOrdered.push(adapter);
                this.availableAdaptersMap[adapter.constructor.name] = adapter;
            }
        }
        this.availableAdaptersOrdered.sort(function (a, b) {
            return b.getPriority() - a.getPriority();
        });
        this.defaultAdapter = this.resolveAdapter(configuration.get(config.StorageConfigurationSymbol).defaultAdapter);
    }
    /**
     * Get a specific adapter.
     *
     * @throws UsageException
     */
    StorageService.prototype.use = function (adapter) {
        return this.resolveAdapter(adapter);
    };
    /**
     * Get a reference on the adapter currently used by the storage by default.
     */
    StorageService.prototype.getDefaultAdapter = function () {
        return this.defaultAdapter;
    };
    /**
     * Get the value associated with a key or the default value is not found.
     */
    StorageService.prototype.get = function (key, defaultValue) {
        return this.defaultAdapter.get(key, defaultValue);
    };
    /**
     * Set the value of a key.
     */
    StorageService.prototype.set = function (key, value) {
        return this.defaultAdapter.set(key, value);
    };
    /**
     * Remove a key.
     */
    StorageService.prototype.remove = function (key) {
        return this.defaultAdapter.remove(key);
    };
    /**
     * Clear the entire storage.
     */
    StorageService.prototype.clear = function () {
        return this.defaultAdapter.clear();
    };
    /**
     * Gets how many keys are stored.
     */
    StorageService.prototype.length = function () {
        return this.defaultAdapter.length();
    };
    /**
     * Gets the list of all keys stored.
     */
    StorageService.prototype.keys = function () {
        return this.defaultAdapter.keys();
    };
    /**
     * Try to resolve the input into a the key corresponding to an adapter in the available adapters map.
     *
     * @throws UsageException
     * @throws NoAdapterAvailableException
     */
    StorageService.prototype.resolveAdapter = function (adapter) {
        var adapterStr = null;
        if (isString.isString(adapter) || isUndefined.isUndefined(adapter)) {
            if (!this.availableAdaptersOrdered.length) {
                throw new noAdapterAvailable_exception.NoAdapterAvailableException();
            }
            // Only 'auto' is a valid string value
            // so we can take the first one without checking the value of the string.
            return this.availableAdaptersOrdered[0];
        }
        if (isSymbol.isSymbol(adapter)) {
            return injector.Injector.Get(adapter);
        }
        if (isConstructor.isConstructor(adapter) && isString.isString(adapter.name)) {
            adapterStr = adapter.name;
        }
        if (adapterStr === null) {
            throw new usage_exception.UsageException("Failed to resolve adapter ".concat(String(adapter), "."));
        }
        if (isUndefined.isUndefined(this.availableAdaptersMap[adapterStr])) {
            throw new usage_exception.UsageException("No adapter ".concat(adapterStr, " has been found in the list of available adapters."));
        }
        return this.availableAdaptersMap[adapterStr];
    };
    StorageService = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, injectMultiple_decorator.InjectMultiple(constant.StorageAdapterTag)),
        _tslib.__param(1, injectLazy_decorator.InjectLazy(function () { return configuration_service.ConfigurationService; })),
        _tslib.__metadata("design:paramtypes", [Array, configuration_service.ConfigurationService])
    ], StorageService);
    return StorageService;
}());

exports.StorageService = StorageService;
