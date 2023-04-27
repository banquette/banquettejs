import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { isString, isUndefined } from "@banquette/utils-type";
import { ItemInterface } from "../item.interface";
import { ModuleInterface } from "../module.interface";
import { OrderingEvents, OrderingDirection, OrderingCycleMap } from "./constant";
import { OrderingServerResponseInterface } from "./ordering-server-response.interface";

export class OrderingModule implements ModuleInterface {
    /**
     * Define if the ordering is done on the server.
     * Possible values are:
     *   - `true`: the ordering is done on the server
     *   - `false`: the ordering is done locally
     *   - 'auto': the ordering is done on the server if the items are fetched remotely
     */
    public remote: boolean|'auto' = 'auto';

    /**
     * Defines if the configuration of the module has changed until the last view update.
     */
    public changed: boolean = true;

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
        this.notifyChange();
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
        this.notifyChange();
    }

    /**
     * Returns `true` if there is an active ordering rule.
     */
    public get isApplicable(): boolean {
        return this._columnName !== null && this._direction !== null;
    }

    /**
     * Event dispatcher for communication with the outside.
     */
    private eventDispatcher = new EventDispatcher();

    /**
     * Order a list of items using the internal configuration.
     */
    public apply(items: ItemInterface[]): ItemInterface[] {
        if (this._columnName === null || this._direction === null || !items.length) {
            return items;
        }
        items.sort((a: ItemInterface, b: ItemInterface) => {
            let av = a.item[this._columnName as string];
            let bv = b.item[this._columnName as string];
            if (this._direction === OrderingDirection.Descending) {
                const cv = av;
                av = bv;
                bv = cv;
            }
            if (isString(av) || isString(bv)) {
                return String(av).localeCompare(String(bv), 'en', {ignorePunctuation: true});
            }
            return av - bv ? 1 : -1;
        });
        this.changed = false;
        return items;
    }

    /**
     * Make a column the active one for ordering and cycle through the possible status.
     */
    public toggle(columnName: string): void {
        this._columnName = columnName;
        this._direction = OrderingCycleMap[(OrderingCycleMap.indexOf(this.direction) + 1) % OrderingCycleMap.length];
        this.notifyChange();
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
        this.changed = false;
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

    /**
     * Trigger a `OrderingEvents.Changed` event.
     */
    private notifyChange(): void {
        this.changed = true;
        this.eventDispatcher.dispatch(OrderingEvents.Changed);
    }
}
