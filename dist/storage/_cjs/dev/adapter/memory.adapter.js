/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var isServer = require('@banquette/utils-misc/_cjs/dev/is-server');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constant = require('../constant.js');
var abstract_adapter = require('./abstract.adapter.js');

var MemoryAdapter = /** @class */ (function (_super) {
    _tslib.__extends(MemoryAdapter, _super);
    function MemoryAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.store = {};
        return _this;
    }
    /**
     * Test if the adapter is available in the current configuration.
     */
    MemoryAdapter.prototype.isAvailable = function () {
        return isServer.isServer();
    };
    /**
     * Get the priority of the adapter.
     */
    MemoryAdapter.prototype.getPriority = function () {
        return 1;
    };
    /**
     * Get the value associated with the given key.
     */
    MemoryAdapter.prototype.get = function (key, defaultValue) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                return [2 /*return*/, this.getSync(key, defaultValue)];
            });
        });
    };
    /**
     * Get the value associated with the given key synchronously.
     */
    MemoryAdapter.prototype.getSync = function (key, defaultValue) {
        var value = !isUndefined.isUndefined(this.store[key]) ? this.store[key] : null;
        return value !== null ? this.decode(value) : (!isUndefined.isUndefined(defaultValue) ? defaultValue : null);
    };
    /**
     * Set the value for the given key.
     */
    MemoryAdapter.prototype.set = function (key, value) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                this.setSync(key, value);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Set the value for the given key synchronously.
     */
    MemoryAdapter.prototype.setSync = function (key, value) {
        var oldValue = this.getSync(key);
        this.store[key] = this.encode(value);
        this.notifyKeyChange(key, value, oldValue);
    };
    /**
     * Remove any value associated with this key.
     */
    MemoryAdapter.prototype.remove = function (key) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                this.removeSync(key);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Remove any value associated with this key synchronously.
     */
    MemoryAdapter.prototype.removeSync = function (key) {
        var oldValue = this.getSync(key);
        if (!isUndefined.isUndefined(this.store[key])) {
            delete this.store[key];
        }
        this.notifyKeyChange(key, undefined, oldValue);
    };
    /**
     * Clear the entire key value store.
     */
    MemoryAdapter.prototype.clear = function () {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                this.clearSync();
                return [2 /*return*/];
            });
        });
    };
    /**
     * Clear the entire key value store synchronously.
     */
    MemoryAdapter.prototype.clearSync = function () {
        this.store = {};
        this.notifyClear();
    };
    /**
     * Gets how many keys are stored in the storage.
     */
    MemoryAdapter.prototype.length = function () {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                return [2 /*return*/, this.lengthSync()];
            });
        });
    };
    /**
     * Gets how many keys are stored in the storage synchronously.
     */
    MemoryAdapter.prototype.lengthSync = function () {
        return Object.keys(this.store).length;
    };
    /**
     * Gets the list of all keys stored in the storage.
     */
    MemoryAdapter.prototype.keys = function () {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                return [2 /*return*/, this.keysSync()];
            });
        });
    };
    /**
     * Gets the list of all keys stored in the storage synchronously.
     */
    MemoryAdapter.prototype.keysSync = function () {
        return Object.keys(this.store);
    };
    MemoryAdapter = _tslib.__decorate([
        service_decorator.Service(constant.StorageAdapterTag)
    ], MemoryAdapter);
    return MemoryAdapter;
}(abstract_adapter.AbstractAdapter));

exports.MemoryAdapter = MemoryAdapter;
