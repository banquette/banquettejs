import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { UnsubscribeFunction } from "@banquette/event/type";
import { areObjectsEqual } from "@banquette/utils-object/are-objects-equal";
import { cloneDeep } from "@banquette/utils-object/clone-deep";
import { extend } from "@banquette/utils-object/extend";
import { isObject } from "@banquette/utils-type/is-object";
import { isType } from "@banquette/utils-type/is-type";
import { Primitive } from "@banquette/utils-type/types";
import { FilteringEvents } from "./constant";
import { FilteringServerResponseInterface } from "./filtering-server-response.interface";
import { FiltersInterface } from "./filters.interface";

export class FilteringModule {
    /**
     * If `true`, the filters should be visible.
     */
    public enabled: boolean = true;

    /**
     * Check if there is at least one active filter.
     */
    public get isFiltered(): boolean {
        return Object.keys(this.filters).length > 0;
    }

    /**
     * Active filters, private to avoid watching the object to detect external changes.
     * This way mutations must pass through one of the utility method that will notify the table of the change.
     */
    private filters: FiltersInterface = {};

    /**
     * A copy of the filters as they were on the last call to `notifyChange`.
     */
    private lastNotifiedFilters: FiltersInterface = {};

    /**
     * Event dispatcher for communication with the outside.
     */
    private eventDispatcher = new EventDispatcher();

    /**
     * Get all active filters.
     */
    public getFilters(): FiltersInterface {
        const cloneAndFilter = (input: FiltersInterface): FiltersInterface|null => {
            const output: FiltersInterface = {};
            for (const key of Object.keys(input)) {
                const value = input[key];
                if (isType<FiltersInterface>(value, isObject)) {
                    const sub = cloneAndFilter(value);
                    if (sub !== null && Object.keys(sub).length > 0) {
                        output[key] = sub;
                    }
                } else if (value) {
                    output[key] = value;
                }
            }
            return output;
        };
        return cloneAndFilter(this.filters) || {};
    }

    /**
     * Replace the whole set of active filters
     */
    public setFilters(filters: FiltersInterface): void {
        this.filters = cloneDeep(filters);
        this.notifyChange();
    }

    /**
     * Merge existing filters with the ones in parameter.
     */
    public updateFilters(filters: FiltersInterface): void {
        extend(this.filters, filters, true);
        this.notifyChange();
    }

    /**
     * Set the value of a filter.
     */
    public setFilter(name: string, value: Primitive|FiltersInterface): void {
        this.filters[name] = cloneDeep(value);
        this.notifyChange();
    }

    /**
     * Remove a filter.
     */
    public removeFilter(name: string): void {
        delete this.filters[name];
        this.notifyChange();
    }

    /**
     * Update the filtering internal state using external data.
     */
    public digestServerResponse(response: FilteringServerResponseInterface): void {
        Object.assign(this.filters, response);
        this.eventDispatcher.dispatch(FilteringEvents.Invalidated);
    }

    /**
     * Register a function that will be called when a configuration value changes in the module.
     */
    public onChange(cb: () => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(FilteringEvents.Changed, cb);
    }

    /**
     * Trigger a `FilteringEvents.Changed` event.
     */
    private notifyChange(): void {
        const exported = this.getFilters();
        if (!areObjectsEqual(exported, this.lastNotifiedFilters)) {
            this.lastNotifiedFilters = exported;
            this.eventDispatcher.dispatch(FilteringEvents.Changed);
        }
    }
}
