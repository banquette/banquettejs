/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
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
var OrderingDirection;
(function (OrderingDirection) {
    OrderingDirection["Ascending"] = "asc";
    OrderingDirection["Descending"] = "desc";
})(OrderingDirection || (OrderingDirection = {}));
/**
 * Define the way the ordering cycles when toggled multiple times for a column.
 */
var OrderingCycleMap = [
    OrderingDirection.Ascending,
    OrderingDirection.Descending,
    null
];

export { OrderingCycleMap, OrderingDirection, OrderingEvents };
