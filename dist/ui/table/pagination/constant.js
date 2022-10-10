/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var PaginationEvents = {
    /**
     * Triggered when any configuration value of the pagination have changed.
     */
    Changed: Symbol('pagination:changed'),
    /**
     * Triggered when a configuration value has been modified internally, but should not trigger a fetch.
     */
    Invalidated: Symbol('pagination:invalidated')
};
/**
 * Available strategies to get the next batch of items from the server.
 */
var PaginationStrategy;
(function (PaginationStrategy) {
    /**
     * The pagination will take the N items after an offset in the global list of results.
     */
    PaginationStrategy["Offset"] = "offset";
    /**
     * The pagination will get the next N items (ordered by id)
     * for which the id is superior to the highest id on the visible set of items.
     */
    PaginationStrategy["Id"] = "id";
})(PaginationStrategy || (PaginationStrategy = {}));
/**
 * Define where the pagination should appear.
 */
var PaginationPosition;
(function (PaginationPosition) {
    /**
     * The pagination appears on the bottom of the list.
     */
    PaginationPosition["Bottom"] = "bottom";
    /**
     * The pagination appears on the top of the list.
     */
    PaginationPosition["Top"] = "top";
    /**
     * The pagination appears both on the top and bottom of the list.
     */
    PaginationPosition["Both"] = "both";
})(PaginationPosition || (PaginationPosition = {}));

export { PaginationEvents, PaginationPosition, PaginationStrategy };
