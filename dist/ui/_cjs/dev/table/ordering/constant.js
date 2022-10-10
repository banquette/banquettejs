/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var OrderingEvents = {
    /**
     * Triggered when any configuration value of the ordering module have changed.
     */
    Changed: Symbol('ordering:changed'),
    /**
     * Triggered when a configuration value has been modified internally, but should not trigger a fetch.
     */
    Invalidated: Symbol('ordering:invalidated')
};
/**
 * Available types of ordering.
 */
exports.OrderingDirection = void 0;
(function (OrderingDirection) {
    OrderingDirection["Ascending"] = "asc";
    OrderingDirection["Descending"] = "desc";
})(exports.OrderingDirection || (exports.OrderingDirection = {}));
/**
 * Define the way the ordering cycles when toggled multiple times for a column.
 */
var OrderingCycleMap = [
    exports.OrderingDirection.Ascending,
    exports.OrderingDirection.Descending,
    null
];

exports.OrderingCycleMap = OrderingCycleMap;
exports.OrderingEvents = OrderingEvents;
