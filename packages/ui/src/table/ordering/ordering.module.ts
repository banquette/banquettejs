import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { UnsubscribeFunction } from "@banquette/event/type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { OrderingEvents, OrderingDirection, OrderingCycleMap } from "./constant";
import { OrderingServerResponseInterface } from "./ordering-server-response.interface";

export class OrderingModule {
    /**
     * Define the id of the column to use for ordering.
     */
    private _columnName: string|null = null;
    public get columnName(): string|null {
        return this._columnName;
    }
    public set columnName(columnName: string|null) {
        if (this._columnName === columnName) {
            return ;
        }
        this._columnName = columnName;
        this.eventDispatcher.dispatch(OrderingEvents.Changed);
    }

    /**
     * Define
     */
    private _direction: OrderingDirection|null = null;
    public get direction(): OrderingDirection|null {
        return this._direction;
    }
    public set direction(direction: OrderingDirection|null) {
        if (this._direction === direction) {
            return ;
        }
        this._direction = direction;
        this.eventDispatcher.dispatch(OrderingEvents.Changed);
    }

    /**
     * Event dispatcher for communication with the outside.
     */
    private eventDispatcher = new EventDispatcher();

    /**
     * Make a column the active one for ordering and cycle through the possible status.
     */
    public toggle(columnName: string): void {
        this._columnName = columnName;
        this._direction = OrderingCycleMap[(OrderingCycleMap.indexOf(this.direction) + 1) % OrderingCycleMap.length];
        this.eventDispatcher.dispatch(OrderingEvents.Changed);
    }

    /**
     * Update the ordering internal state using external data.
     */
    public digestServerResponse(response: OrderingServerResponseInterface): void {
        if (!isUndefined(response.column)) {
            this._columnName = response.column;
        }
        if (!isUndefined(response.direction)) {
            this._direction = response.direction;
        }
        this.eventDispatcher.dispatch(OrderingEvents.Invalidated);
    }

    /**
     * Register a function that will be called when a configuration value changes in the module.
     */
    public onChange(cb: () => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(OrderingEvents.Changed, cb);
    }

    /**
     * Register a function that will be called when a the internal state of the ordering changes.
     */
    public onInvalidate(cb: () => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(OrderingEvents.Invalidated, cb);
    }
}
