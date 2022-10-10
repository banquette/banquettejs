/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var eventDispatcher = require('@banquette/event/_cjs/dev/event-dispatcher');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constant = require('./constant.js');

var OrderingModule = /** @class */ (function () {
    function OrderingModule() {
        /**
         * Define if the ordering is done on the server.
         * Possible values are:
         *   - `true`: the ordering is done on the server
         *   - `false`: the ordering is done locally
         *   - 'auto': the ordering is done on the server if the items are fetched remotely
         */
        this.remote = 'auto';
        /**
         * Defines if the configuration of the module has changed until the last view update.
         */
        this.changed = true;
        /**
         * Define the id of the column to use for ordering.
         */
        this._columnName = null;
        /**
         * Define
         */
        this._direction = null;
        /**
         * Event dispatcher for communication with the outside.
         */
        this.eventDispatcher = new eventDispatcher.EventDispatcher();
    }
    Object.defineProperty(OrderingModule.prototype, "columnName", {
        get: function () {
            return this._columnName;
        },
        set: function (columnName) {
            if (this._columnName === columnName) {
                return;
            }
            this._columnName = columnName;
            this.notifyChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderingModule.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (direction) {
            if (this._direction === direction) {
                return;
            }
            this._direction = direction;
            this.notifyChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderingModule.prototype, "isApplicable", {
        /**
         * Returns `true` if there is an active ordering rule.
         */
        get: function () {
            return this._columnName !== null && this._direction !== null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Order a list of items using the internal configuration.
     */
    OrderingModule.prototype.apply = function (items) {
        var _this = this;
        if (this._columnName === null || this._direction === null || !items.length) {
            return items;
        }
        items.sort(function (a, b) {
            var av = a.item[_this._columnName];
            var bv = b.item[_this._columnName];
            if (_this._direction === constant.OrderingDirection.Descending) {
                var cv = av;
                av = bv;
                bv = cv;
            }
            if (isString.isString(av) || isString.isString(bv)) {
                return String(av).localeCompare(String(bv), 'en', { ignorePunctuation: true });
            }
            return av - bv ? 1 : -1;
        });
        this.changed = false;
        return items;
    };
    /**
     * Make a column the active one for ordering and cycle through the possible status.
     */
    OrderingModule.prototype.toggle = function (columnName) {
        this._columnName = columnName;
        this._direction = constant.OrderingCycleMap[(constant.OrderingCycleMap.indexOf(this.direction) + 1) % constant.OrderingCycleMap.length];
        this.notifyChange();
    };
    /**
     * Update the ordering internal state using external data.
     */
    OrderingModule.prototype.digestServerResponse = function (response) {
        if (!isUndefined.isUndefined(response.column)) {
            this._columnName = response.column;
        }
        if (!isUndefined.isUndefined(response.direction)) {
            this._direction = response.direction;
        }
        this.eventDispatcher.dispatch(constant.OrderingEvents.Invalidated);
        this.changed = false;
    };
    /**
     * Register a function that will be called when a configuration value changes in the module.
     */
    OrderingModule.prototype.onChange = function (cb) {
        return this.eventDispatcher.subscribe(constant.OrderingEvents.Changed, cb);
    };
    /**
     * Register a function that will be called when a the internal state of the ordering changes.
     */
    OrderingModule.prototype.onInvalidate = function (cb) {
        return this.eventDispatcher.subscribe(constant.OrderingEvents.Invalidated, cb);
    };
    /**
     * Trigger a `OrderingEvents.Changed` event.
     */
    OrderingModule.prototype.notifyChange = function () {
        this.changed = true;
        this.eventDispatcher.dispatch(constant.OrderingEvents.Changed);
    };
    return OrderingModule;
}());

exports.OrderingModule = OrderingModule;
