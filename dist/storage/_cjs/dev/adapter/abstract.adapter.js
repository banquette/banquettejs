/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var eventDispatcher = require('@banquette/event/_cjs/dev/event-dispatcher');
var ensureNumber = require('@banquette/utils-type/_cjs/dev/ensure-number');
var isBoolean = require('@banquette/utils-type/_cjs/dev/is-boolean');
var isNumber = require('@banquette/utils-type/_cjs/dev/is-number');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constant = require('../constant.js');
var storageClear_event = require('../event/storage-clear.event.js');
var storageKeyChange_event = require('../event/storage-key-change.event.js');

var UndefinedSymbol = Symbol('undefined');
var Types;
(function (Types) {
    Types[Types["Json"] = 0] = "Json";
    Types[Types["Number"] = 1] = "Number";
    Types[Types["Boolean"] = 2] = "Boolean";
    Types[Types["String"] = 3] = "String";
    Types[Types["Null"] = 4] = "Null";
    Types[Types["Undefined"] = 5] = "Undefined";
})(Types || (Types = {}));
var AbstractAdapter = /** @class */ (function () {
    function AbstractAdapter() {
        /**
         * So the storage can handle asynchronous tasks synchronously.
         */
        this.virtualValues = {};
        /**
         * On demand dispatcher to only dispatch if there is a subscriber.
         */
        this._eventDispatcher = null;
    }
    Object.defineProperty(AbstractAdapter.prototype, "eventDispatcher", {
        get: function () {
            if (this._eventDispatcher === null) {
                this._eventDispatcher = new eventDispatcher.EventDispatcher();
            }
            return this._eventDispatcher;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Be notified when anything changes in the storage.
     */
    AbstractAdapter.prototype.onChange = function (callback) {
        return this.eventDispatcher.subscribe(constant.StorageEvents.Change, callback);
    };
    /**
     * Encode the value into a string holding the original type.
     */
    AbstractAdapter.prototype.encode = function (value) {
        if (isObject.isObject(value)) {
            return Types.Json + ':' + JSON.stringify(value);
        }
        if (isNumber.isNumber(value)) {
            return Types.Number + ':' + value;
        }
        if (isBoolean.isBoolean(value)) {
            return Types.Boolean + ':' + (value ? 1 : 0);
        }
        if (value === null) {
            return Types.Null + ':';
        }
        if (isUndefined.isUndefined(value)) {
            return Types.Undefined + ':';
        }
        return Types.String + ':' + value;
    };
    /**
     * Decode a value previously encoded using encode().
     */
    AbstractAdapter.prototype.decode = function (value) {
        if (value === null) {
            return null;
        }
        if (value.length < 2 || value[1] !== ':') {
            // Maybe not stored using the storage service?
            return value;
        }
        var type = parseInt(value.substring(0, 1), 10);
        value = value.substring(2);
        switch (type) {
            case Types.String: return value;
            case Types.Number: return ensureNumber.ensureNumber(value);
            case Types.Boolean: return value === '1';
            case Types.Json: return JSON.parse(value);
            case Types.Null: return null;
        }
    };
    /**
     * Try to get a value from the virtual values object.
     */
    AbstractAdapter.prototype.getVirtual = function (key) {
        key = key.trim();
        return this.virtualValues[key] === UndefinedSymbol ? undefined : this.virtualValues[key];
    };
    /**
     * Set a value from the virtual values object.
     */
    AbstractAdapter.prototype.setVirtual = function (key, value) {
        var _this = this;
        key = key.trim();
        this.virtualValues[key] = value;
        setTimeout(function () {
            delete _this.virtualValues[key];
        });
    };
    /**
     * Mark a key as removed until the next js cycle so if a something try the use the key
     * in the interval it will fail to get the removed value.
     */
    AbstractAdapter.prototype.markAsRemoved = function (key) {
        var _this = this;
        key = key.trim();
        this.virtualValues[key] = UndefinedSymbol;
        setTimeout(function () {
            if (_this.virtualValues[key] === UndefinedSymbol) {
                delete _this.virtualValues[key];
            }
        });
    };
    /**
     * Notify the outside world that a key has changed in the storage.
     */
    AbstractAdapter.prototype.notifyKeyChange = function (key, newValue, oldValue) {
        if (this._eventDispatcher && newValue !== oldValue) {
            this._eventDispatcher.dispatch(constant.StorageEvents.Change, new storageKeyChange_event.StorageKeyChangeEvent(key, newValue, oldValue));
        }
    };
    /**
     * Notify the outside world that the storage has been cleared.
     */
    AbstractAdapter.prototype.notifyClear = function () {
        if (this._eventDispatcher) {
            this._eventDispatcher.dispatch(constant.StorageEvents.Change, new storageClear_event.StorageClearEvent());
        }
    };
    return AbstractAdapter;
}());

exports.AbstractAdapter = AbstractAdapter;
