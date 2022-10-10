import { UnsubscribeFunction } from "@banquette/event/type";
import { ItemInterface } from "../item.interface";
import { ModuleInterface } from "../module.interface";
import { OrderingDirection } from "./constant";
import { OrderingServerResponseInterface } from "./ordering-server-response.interface";
export declare class OrderingModule implements ModuleInterface {
    /**
     * Define if the ordering is done on the server.
     * Possible values are:
     *   - `true`: the ordering is done on the server
     *   - `false`: the ordering is done locally
     *   - 'auto': the ordering is done on the server if the items are fetched remotely
     */
    remote: boolean | 'auto';
    /**
     * Defines if the configuration of the module has changed until the last view update.
     */
    changed: boolean;
    /**
     * Define the id of the column to use for ordering.
     */
    private _columnName;
    get columnName(): string | null;
    set columnName(columnName: string | null);
    /**
     * Define
     */
    private _direction;
    get direction(): OrderingDirection | null;
    set direction(direction: OrderingDirection | null);
    /**
     * Returns `true` if there is an active ordering rule.
     */
    get isApplicable(): boolean;
    /**
     * Event dispatcher for communication with the outside.
     */
    private eventDispatcher;
    /**
     * Order a list of items using the internal configuration.
     */
    apply(items: ItemInterface[]): ItemInterface[];
    /**
     * Make a column the active one for ordering and cycle through the possible status.
     */
    toggle(columnName: string): void;
    /**
     * Update the ordering internal state using external data.
     */
    digestServerResponse(response: OrderingServerResponseInterface): void;
    /**
     * Register a function that will be called when a configuration value changes in the module.
     */
    onChange(cb: () => void): UnsubscribeFunction;
    /**
     * Register a function that will be called when a the internal state of the ordering changes.
     */
    onInvalidate(cb: () => void): UnsubscribeFunction;
    /**
     * Trigger a `OrderingEvents.Changed` event.
     */
    private notifyChange;
}
