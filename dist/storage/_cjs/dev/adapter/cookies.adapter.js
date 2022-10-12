/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var injectLazy_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject-lazy.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var isServer = require('@banquette/utils-misc/_cjs/dev/is-server');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constant = require('../constant.js');
var abstract_adapter = require('./abstract.adapter.js');

var CookiesAdapter = /** @class */ (function (_super) {
    _tslib.__extends(CookiesAdapter, _super);
    function CookiesAdapter(configuration) {
        var _this = _super.call(this) || this;
        _this.prefix = configuration.get('storage.cookieAdapter.prefix');
        return _this;
    }
    /**
     * Test if the adapter is available in the current configuration.
     */
    CookiesAdapter.prototype.isAvailable = function () {
        return !isServer.isServer() && !isUndefined.isUndefined(document.cookie);
    };
    /**
     * Get the priority of the adapter.
     */
    CookiesAdapter.prototype.getPriority = function () {
        return 0;
    };
    /**
     * Get the value associated with the given key.
     */
    CookiesAdapter.prototype.get = function (key, defaultValue) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                return [2 /*return*/, this.getSync(key, defaultValue)];
            });
        });
    };
    /**
     * Get the value associated with the given key synchronously.
     */
    CookiesAdapter.prototype.getSync = function (key, defaultValue) {
        var value = '; ' + document.cookie;
        var parts = value.split('; ' + this.prefix + key + '=');
        if (parts.length === 2) {
            // @ts-ignore
            return this.decode(parts.pop().split(';').shift());
        }
        var virtualValue = this.getVirtual(key);
        if (!isUndefined.isUndefined(virtualValue)) {
            return this.decode(virtualValue);
        }
        return !isUndefined.isUndefined(defaultValue) ? defaultValue : null;
    };
    /**
     * Set the value for the given key.
     */
    CookiesAdapter.prototype.set = function (key, value) {
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
    CookiesAdapter.prototype.setSync = function (key, value) {
        var oldValue = this.getSync(key);
        var date = new Date();
        date.setTime(date.getTime() + (4 * 365 * 24 * 60 * 60 * 1000));
        var expires = '; expires=' + date.toUTCString();
        var encoded = this.encode(value);
        document.cookie = (this.prefix ? this.prefix : '') + key + '=' + this.encode(value) + expires + '; path=/';
        this.setVirtual(key, encoded);
        this.notifyKeyChange(key, value, oldValue);
    };
    /**
     * Remove any value associated with this key.
     */
    CookiesAdapter.prototype.remove = function (key) {
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
    CookiesAdapter.prototype.removeSync = function (key) {
        var oldValue = this.getSync(key);
        document.cookie = this.prefix + key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.markAsRemoved(key);
        this.notifyKeyChange(key, undefined, oldValue);
    };
    /**
     * Clear the entire key value store.
     */
    CookiesAdapter.prototype.clear = function () {
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
    CookiesAdapter.prototype.clearSync = function () {
        var keys = this.keysSync();
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            this.removeSync(key);
        }
        this.notifyClear();
    };
    /**
     * Gets how many keys are stored in the storage.
     */
    CookiesAdapter.prototype.length = function () {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                return [2 /*return*/, this.keysSync().length];
            });
        });
    };
    /**
     * Gets how many keys are stored in the storage synchronously.
     */
    CookiesAdapter.prototype.lengthSync = function () {
        return this.keysSync().length;
    };
    /**
     * Gets the list of all keys stored in the storage.
     */
    CookiesAdapter.prototype.keys = function () {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                return [2 /*return*/, this.keysSync()];
            });
        });
    };
    /**
     * Gets the list of all keys stored in the storage synchronously.
     */
    CookiesAdapter.prototype.keysSync = function () {
        var keys = [];
        var cookies = document.cookie.split(';');
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < cookies.length; i++) {
            var key = cookies[i].split('=')[0];
            if (key !== '' && this.getVirtual(key)) {
                keys.push(key);
            }
        }
        return keys;
    };
    CookiesAdapter = _tslib.__decorate([
        service_decorator.Service(constant.StorageAdapterTag),
        _tslib.__param(0, injectLazy_decorator.InjectLazy(function () { return configuration_service.ConfigurationService; })),
        _tslib.__metadata("design:paramtypes", [configuration_service.ConfigurationService])
    ], CookiesAdapter);
    return CookiesAdapter;
}(abstract_adapter.AbstractAdapter));

exports.CookiesAdapter = CookiesAdapter;
