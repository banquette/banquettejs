export declare const OrderingEvents: {
    /**
     * Triggered when any configuration value of the ordering module have changed.
     */
    Changed: symbol;
    /**
     * Triggered when a configuration value has been modified internally, but should not trigger a fetch.
     */
    Invalidated: symbol;
};
/**
 * Available types of ordering.
 */
export declare enum OrderingDirection {
    Ascending = "asc",
    Descending = "desc"
}
/**
 * Define the way the ordering cycles when toggled multiple times for a column.
 */
export declare const OrderingCycleMap: OrderingStatus[];
/**
 * Define the current value of an order by property.
 */
export declare type OrderingStatus = OrderingDirection | null;
