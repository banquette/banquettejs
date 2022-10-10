export declare const PaginationEvents: {
    /**
     * Triggered when any configuration value of the pagination have changed.
     */
    Changed: symbol;
    /**
     * Triggered when a configuration value has been modified internally, but should not trigger a fetch.
     */
    Invalidated: symbol;
};
/**
 * Available strategies to get the next batch of items from the server.
 */
export declare enum PaginationStrategy {
    /**
     * The pagination will take the N items after an offset in the global list of results.
     */
    Offset = "offset",
    /**
     * The pagination will get the next N items (ordered by id)
     * for which the id is superior to the highest id on the visible set of items.
     */
    Id = "id"
}
/**
 * Define where the pagination should appear.
 */
export declare enum PaginationPosition {
    /**
     * The pagination appears on the bottom of the list.
     */
    Bottom = "bottom",
    /**
     * The pagination appears on the top of the list.
     */
    Top = "top",
    /**
     * The pagination appears both on the top and bottom of the list.
     */
    Both = "both"
}
