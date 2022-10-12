/*!
 * Banquette Storage v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __awaiter, __decorate, __generator } from '../_virtual/_tslib.js';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { isServer } from '@banquette/utils-misc/is-server';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { StorageAdapterTag } from '../constant.js';
import { AbstractAdapter } from './abstract.adapter.js';

var MemoryAdapter = /** @class */ (function (_super) {
    __extends(MemoryAdapter, _super);
    function MemoryAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.store = {};
        return _this;
    }
    /**
     * Test if the adapter is available in the current configuration.
     */
    MemoryAdapter.prototype.isAvailable = function () {
        return isServer();
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getSync(key, defaultValue)];
            });
        });
    };
    /**
     * Get the value associated with the given key synchronously.
     */
    MemoryAdapter.prototype.getSync = function (key, defaultValue) {
        var value = !isUndefined(this.store[key]) ? this.store[key] : null;
        return value !== null ? this.decode(value) : (!isUndefined(defaultValue) ? defaultValue : null);
    };
    /**
     * Set the value for the given key.
     */
    MemoryAdapter.prototype.set = function (key, value) {
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
    MemoryAdapter.prototype.setSync = function (key, value) {
        var oldValue = this.getSync(key);
        this.store[key] = this.encode(value);
        this.notifyKeyChange(key, value, oldValue);
    };
    /**
     * Remove any value associated with this key.
     */
    MemoryAdapter.prototype.remove = function (key) {
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
    MemoryAdapter.prototype.removeSync = function (key) {
        var oldValue = this.getSync(key);
        if (!isUndefined(this.store[key])) {
            delete this.store[key];
        }
        this.notifyKeyChange(key, undefined, oldValue);
    };
    /**
     * Clear the entire key value store.
     */
    MemoryAdapter.prototype.clear = function () {
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
    MemoryAdapter.prototype.clearSync = function () {
        this.store = {};
        this.notifyClear();
    };
    /**
     * Gets how many keys are stored in the storage.
     */
    MemoryAdapter.prototype.length = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
    MemoryAdapter = __decorate([
        Service(StorageAdapterTag)
    ], MemoryAdapter);
    return MemoryAdapter;
}(AbstractAdapter));

export { MemoryAdapter };
