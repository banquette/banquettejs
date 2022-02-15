import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { UnsubscribeFunction } from "@banquette/event/type";
import { Primitive } from "@banquette/utils-type/types";
import { FilteringEvents } from "./constant";
import { FilteringServerResponseInterface } from "./filtering-server-response.interface";

export class FilteringModule {
    /**
     * If `true`, the filters should be visible.
     */
    public enabled: boolean = true;

    /**
     * Key/value pair of active filters, indexed by column name.
     */
    public filters: Record<string, Primitive> = {};

    /**
     * Check if there is at least one active filter.
     */
    public get isFiltered(): boolean {
        return Object.keys(this.filters).length > 0;
    }

    /**
     * Event dispatcher for communication with the outside.
     */
    private eventDispatcher = new EventDispatcher();

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
}
