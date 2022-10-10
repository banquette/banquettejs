/*!
 * Banquette Storage v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __param, __metadata } from './_virtual/_tslib.js';
import { ConfigurationService } from '@banquette/config/config/configuration.service';
import { InjectLazy } from '@banquette/dependency-injection/decorator/inject-lazy.decorator';
import { InjectMultiple } from '@banquette/dependency-injection/decorator/inject-multiple.decorator';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { Injector } from '@banquette/dependency-injection/injector';
import { UsageException } from '@banquette/exception/usage.exception';
import { isConstructor } from '@banquette/utils-type/is-constructor';
import { isString } from '@banquette/utils-type/is-string';
import { isSymbol } from '@banquette/utils-type/is-symbol';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { StorageConfigurationSymbol } from './config.js';
import { StorageAdapterTag } from './constant.js';
import { NoAdapterAvailableException } from './exception/no-adapter-available.exception.js';
import './adapter/cookies.adapter.js';
import './adapter/local-storage.adapter.js';

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
        this.defaultAdapter = this.resolveAdapter(configuration.get(StorageConfigurationSymbol).defaultAdapter);
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
        if (isString(adapter) || isUndefined(adapter)) {
            if (!this.availableAdaptersOrdered.length) {
                throw new NoAdapterAvailableException();
            }
            // Only 'auto' is a valid string value
            // so we can take the first one without checking the value of the string.
            return this.availableAdaptersOrdered[0];
        }
        if (isSymbol(adapter)) {
            return Injector.Get(adapter);
        }
        if (isConstructor(adapter) && isString(adapter.name)) {
            adapterStr = adapter.name;
        }
        if (adapterStr === null) {
            throw new UsageException("Failed to resolve adapter ".concat(String(adapter), "."));
        }
        if (isUndefined(this.availableAdaptersMap[adapterStr])) {
            throw new UsageException("No adapter ".concat(adapterStr, " has been found in the list of available adapters."));
        }
        return this.availableAdaptersMap[adapterStr];
    };
    StorageService = __decorate([
        Service(),
        __param(0, InjectMultiple(StorageAdapterTag)),
        __param(1, InjectLazy(function () { return ConfigurationService; })),
        __metadata("design:paramtypes", [Array, ConfigurationService])
    ], StorageService);
    return StorageService;
}());

export { StorageService };
