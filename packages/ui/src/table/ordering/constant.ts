
export const OrderingEvents = {
    /**
     * Triggered when any configuration value of the ordering module have changed.
     */
    Changed: Symbol('ordering:changed'),

    /**
     * Triggered when a configuration value has been modified internally, but should not trigger a fetch.
     */
    Invalidated: Symbol('ordering:invalidated')
}

/**
 * Available types of ordering.
 */
export enum OrderingDirection {
    Ascending = 'asc',
    Descending = 'desc'
}

/**
 * Define the way the ordering cycles when toggled multiple times for a column.
 */
export const OrderingCycleMap: OrderingStatus[] = [
    OrderingDirection.Ascending,
    OrderingDirection.Descending,
    null
];

/**
 * Define the current value of an order by property.
 */
export type OrderingStatus = OrderingDirection | null;
