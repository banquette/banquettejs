/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { EventDispatcher } from '@banquette/event/event-dispatcher';
import { areEqual } from '@banquette/utils-misc/are-equal';
import { cloneDeep } from '@banquette/utils-object/clone-deep';
import { extend } from '@banquette/utils-object/extend';
import { flattenObject } from '@banquette/utils-object/flatten-object';
import { slugify } from '@banquette/utils-string/format/slugify';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isObject } from '@banquette/utils-type/is-object';
import { isType } from '@banquette/utils-type/is-type';
import { FilteringEvents } from './constant.js';

var FilteringModule = /** @class */ (function () {
    function FilteringModule() {
        /**
         * If `true`, the filters should be visible.
         */
        this.enabled = true;
        /**
         * Defines if the configuration of the module has changed until the last view update.
         */
        this.changed = true;
        /**
         * Define if the filtering is done on the server.
         * Possible values are:
         *   - `true`: the filtering is done on the server
         *   - `false`: the filtering is done locally
         *   - 'auto': the filtering is done on the server if the items are fetched remotely
         */
        this.remote = 'auto';
        /**
         * Active filters, private to avoid watching the object to detect external changes.
         * This way mutations must pass through one of the utility method that will notify the table of the change.
         */
        this.filters = {};
        /**
         * A copy of the filters as they were on the last call to `notifyChange`.
         */
        this.lastNotifiedFilters = {};
        /**
         * Event dispatcher for communication with the outside.
         */
        this.eventDispatcher = new EventDispatcher();
    }
    Object.defineProperty(FilteringModule.prototype, "isApplicable", {
        /**
         * Check if there is at least one active filter.
         */
        get: function () {
            return Object.keys(this.getActiveFilters()).length > 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Filter a list of items using the internal configuration.
     */
    FilteringModule.prototype.apply = function (items) {
        var _this = this;
        var activeFilters = flattenObject(this.getActiveFilters(), '.');
        var _loop_1 = function (valuePath) {
            items = items.filter(function (item) {
                var parts = valuePath.split('.');
                var itemValue = item.item;
                for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                    var part = parts_1[_i];
                    if (isObject(itemValue)) {
                        itemValue = itemValue[part];
                    }
                    else {
                        itemValue = undefined;
                        break;
                    }
                }
                return _this.matchFilter(activeFilters[valuePath], itemValue);
            });
        };
        for (var _i = 0, _a = Object.keys(activeFilters); _i < _a.length; _i++) {
            var valuePath = _a[_i];
            _loop_1(valuePath);
        }
        this.changed = false;
        return items;
    };
    /**
     * Get all active filters.
     */
    FilteringModule.prototype.getActiveFilters = function () {
        var cloneAndFilter = function (input) {
            var output = {};
            for (var _i = 0, _a = Object.keys(input); _i < _a.length; _i++) {
                var key = _a[_i];
                var value = input[key];
                if (isType(value, isObject)) {
                    var sub = cloneAndFilter(value);
                    if (sub !== null && Object.keys(sub).length > 0) {
                        output[key] = sub;
                    }
                }
                else if (!isNullOrUndefined(value) && value !== '') {
                    output[key] = value;
                }
            }
            return output;
        };
        return cloneAndFilter(this.filters) || {};
    };
    /**
     * Replace the whole set of active filters
     */
    FilteringModule.prototype.setFilters = function (filters) {
        this.filters = cloneDeep(filters);
        this.notifyChange();
    };
    /**
     * Merge existing filters with the ones in parameter.
     */
    FilteringModule.prototype.updateFilters = function (filters) {
        extend(this.filters, filters, true);
        this.notifyChange();
    };
    /**
     * Set the value of a filter.
     */
    FilteringModule.prototype.setFilter = function (name, value) {
        this.filters[name] = cloneDeep(value);
        this.notifyChange();
    };
    /**
     * Remove a filter.
     */
    FilteringModule.prototype.removeFilter = function (name) {
        delete this.filters[name];
        this.notifyChange();
    };
    /**
     * Update the filtering internal state using external data.
     */
    FilteringModule.prototype.digestServerResponse = function (response) {
        Object.assign(this.filters, response);
        this.changed = false;
        this.eventDispatcher.dispatch(FilteringEvents.Invalidated);
    };
    /**
     * Register a function that will be called when a configuration value changes in the module.
     */
    FilteringModule.prototype.onChange = function (cb) {
        return this.eventDispatcher.subscribe(FilteringEvents.Changed, cb);
    };
    /**
     * Trigger a `FilteringEvents.Changed` event.
     */
    FilteringModule.prototype.notifyChange = function () {
        var exported = this.getActiveFilters();
        if (!areEqual(exported, this.lastNotifiedFilters)) {
            this.changed = true;
            this.lastNotifiedFilters = exported;
            this.eventDispatcher.dispatch(FilteringEvents.Changed);
        }
    };
    /**
     * Test if a value matches a filter.
     */
    FilteringModule.prototype.matchFilter = function (filterValue, itemValue) {
        // TODO: Make a real comparison. The following is just a placeholder for now.
        return slugify(String(itemValue)).includes(slugify(String(filterValue)));
    };
    return FilteringModule;
}());

export { FilteringModule };
