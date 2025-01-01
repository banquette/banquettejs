import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { areEqual } from "@banquette/utils-misc";
import { cloneDeep, extend, flattenObject } from "@banquette/utils-object";
import { slugify } from "@banquette/utils-string";
import { isNullOrUndefined, isObject, isType, Primitive } from "@banquette/utils-type";
import { ItemInterface } from "../item.interface";
import { ModuleInterface } from "../module.interface";
import { FilteringEvents } from "./constant";
import { FilteringServerResponseInterface } from "./filtering-server-response.interface";
import { FiltersInterface } from "./filters.interface";

export class FilteringModule implements ModuleInterface {
    /**
     * If `true`, the filters should be visible.
     */
    public enabled: boolean = true;

    /**
     * Defines if the configuration of the module has changed until the last view update.
     */
    public changed: boolean = true;

    /**
     * Define if the filtering is done on the server.
     * Possible values are:
     *   - `true`: the filtering is done on the server
     *   - `false`: the filtering is done locally
     *   - 'auto': the filtering is done on the server if the items are fetched remotely
     */
    public remote: boolean|'auto' = 'auto';

    /**
     * Check if there is at least one active filter.
     */
    public get isApplicable(): boolean {
        return Object.keys(this.getActiveFilters()).length > 0;
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

    public dispose(): void {

    }

    /**
     * Filter a list of items using the internal configuration.
     */
    public apply(items: ItemInterface[]): ItemInterface[] {
        const activeFilters = flattenObject(this.getActiveFilters(), '.');
        for (const valuePath of Object.keys(activeFilters)) {
            items = items.filter((item: ItemInterface) => {
                const parts = valuePath.split('.');
                let itemValue: any = item.item;
                for (const part of parts) {
                    if (isObject(itemValue)) {
                        itemValue = itemValue[part];
                    } else {
                        itemValue = undefined;
                        break ;
                    }
                }
                return this.matchFilter(activeFilters[valuePath], itemValue);
            });
        }
        this.changed = false;
        return items;
    }

    /**
     * Get all active filters.
     */
    public getActiveFilters(): FiltersInterface {
        const cloneAndFilter = (input: FiltersInterface): FiltersInterface|null => {
            const output: FiltersInterface = {};
            for (const key of Object.keys(input)) {
                const value = input[key];
                if (isType<FiltersInterface>(value, isObject)) {
                    const sub = cloneAndFilter(value);
                    if (sub !== null && Object.keys(sub).length > 0) {
                        output[key] = sub;
                    }
                } else if (!isNullOrUndefined(value) && value !== '') {
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
        this.changed = false;
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
        const exported = this.getActiveFilters();
        if (!areEqual(exported, this.lastNotifiedFilters)) {
            this.changed = true;
            this.lastNotifiedFilters = exported;
            this.eventDispatcher.dispatch(FilteringEvents.Changed);
        }
    }

    /**
     * Test if a value matches a filter.
     */
    private matchFilter(filterValue: Primitive, itemValue: any): boolean {
        // TODO: Make a real comparison. The following is just a placeholder for now.
        return slugify(String(itemValue)).includes(slugify(String(filterValue)));
    }
}
