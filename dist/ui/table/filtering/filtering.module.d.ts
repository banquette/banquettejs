import { UnsubscribeFunction } from "@banquette/event/type";
import { Primitive } from "@banquette/utils-type/types";
import { ItemInterface } from "../item.interface";
import { ModuleInterface } from "../module.interface";
import { FilteringServerResponseInterface } from "./filtering-server-response.interface";
import { FiltersInterface } from "./filters.interface";
export declare class FilteringModule implements ModuleInterface {
    /**
     * If `true`, the filters should be visible.
     */
    enabled: boolean;
    /**
     * Defines if the configuration of the module has changed until the last view update.
     */
    changed: boolean;
    /**
     * Define if the filtering is done on the server.
     * Possible values are:
     *   - `true`: the filtering is done on the server
     *   - `false`: the filtering is done locally
     *   - 'auto': the filtering is done on the server if the items are fetched remotely
     */
    remote: boolean | 'auto';
    /**
     * Check if there is at least one active filter.
     */
    get isApplicable(): boolean;
    /**
     * Active filters, private to avoid watching the object to detect external changes.
     * This way mutations must pass through one of the utility method that will notify the table of the change.
     */
    private filters;
    /**
     * A copy of the filters as they were on the last call to `notifyChange`.
     */
    private lastNotifiedFilters;
    /**
     * Event dispatcher for communication with the outside.
     */
    private eventDispatcher;
    /**
     * Filter a list of items using the internal configuration.
     */
    apply(items: ItemInterface[]): ItemInterface[];
    /**
     * Get all active filters.
     */
    getActiveFilters(): FiltersInterface;
    /**
     * Replace the whole set of active filters
     */
    setFilters(filters: FiltersInterface): void;
    /**
     * Merge existing filters with the ones in parameter.
     */
    updateFilters(filters: FiltersInterface): void;
    /**
     * Set the value of a filter.
     */
    setFilter(name: string, value: Primitive | FiltersInterface): void;
    /**
     * Remove a filter.
     */
    removeFilter(name: string): void;
    /**
     * Update the filtering internal state using external data.
     */
    digestServerResponse(response: FilteringServerResponseInterface): void;
    /**
     * Register a function that will be called when a configuration value changes in the module.
     */
    onChange(cb: () => void): UnsubscribeFunction;
    /**
     * Trigger a `FilteringEvents.Changed` event.
     */
    private notifyChange;
    /**
     * Test if a value matches a filter.
     */
    private matchFilter;
}
