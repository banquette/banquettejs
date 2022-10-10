/*!
 * Banquette Storage v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __awaiter, __decorate, __generator } from '../_virtual/_tslib.js';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { isFunction } from '@banquette/utils-type/is-function';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { StorageAdapterTag } from '../constant.js';
import { AbstractAdapter } from './abstract.adapter.js';

var LocalStorageAdapter = /** @class */ (function (_super) {
    __extends(LocalStorageAdapter, _super);
    function LocalStorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Test if the adapter is available in the current configuration.
     */
    LocalStorageAdapter.prototype.isAvailable = function () {
        return isObject(window.localStorage) && isFunction(window.localStorage.getItem);
    };
    /**
     * Get the priority of the adapter.
     */
    LocalStorageAdapter.prototype.getPriority = function () {
        return 1;
    };
    /**
     * Get the value associated with the given key.
     */
    LocalStorageAdapter.prototype.get = function (key, defaultValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getSync(key, defaultValue)];
            });
        });
    };
    /**
     * Get the value associated with the given key synchronously.
     */
    LocalStorageAdapter.prototype.getSync = function (key, defaultValue) {
        var value = window.localStorage.getItem(key);
        return value !== null ? this.decode(value) : (!isUndefined(defaultValue) ? defaultValue : null);
    };
    /**
     * Set the value for the given key.
     */
    LocalStorageAdapter.prototype.set = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setSync(key, value);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Set the value for the given key synchronously.
     */
    LocalStorageAdapter.prototype.setSync = function (key, value) {
        var oldValue = this.getSync(key);
        window.localStorage.setItem(key, this.encode(value));
        this.notifyKeyChange(key, value, oldValue);
    };
    /**
     * Remove any value associated with this key.
     */
    LocalStorageAdapter.prototype.remove = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.removeSync(key);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Remove any value associated with this key synchronously.
     */
    LocalStorageAdapter.prototype.removeSync = function (key) {
        var oldValue = this.getSync(key);
        window.localStorage.removeItem(key);
        this.notifyKeyChange(key, undefined, oldValue);
    };
    /**
     * Clear the entire key value store.
     */
    LocalStorageAdapter.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.clearSync();
                return [2 /*return*/];
            });
        });
    };
    /**
     * Clear the entire key value store synchronously.
     */
    LocalStorageAdapter.prototype.clearSync = function () {
        window.localStorage.clear();
        this.notifyClear();
    };
    /**
     * Gets how many keys are stored in the storage.
     */
    LocalStorageAdapter.prototype.length = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.lengthSync()];
            });
        });
    };
    /**
     * Gets how many keys are stored in the storage synchronously.
     */
    LocalStorageAdapter.prototype.lengthSync = function () {
        return window.localStorage.length;
    };
    /**
     * Gets the list of all keys stored in the storage.
     */
    LocalStorageAdapter.prototype.keys = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.keysSync()];
            });
        });
    };
    /**
     * Gets the list of all keys stored in the storage synchronously.
     */
    LocalStorageAdapter.prototype.keysSync = function () {
        var keys = [];
        for (var i = 0, c = localStorage.length; i < c; ++i) {
            keys.push(localStorage.key(i));
        }
        return keys;
    };
    LocalStorageAdapter = __decorate([
        Service(StorageAdapterTag)
    ], LocalStorageAdapter);
    return LocalStorageAdapter;
}(AbstractAdapter));

export { LocalStorageAdapter };
