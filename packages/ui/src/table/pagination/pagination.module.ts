import { Module } from "@banquette/dependency-injection";
import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { ensureInteger, isUndefined, isValidNumber, Pojo, Primitive } from "@banquette/utils-type";
import { ItemInterface } from "../item.interface";
import { ModuleInterface } from "../module.interface";
import { PaginationEvents, PaginationPosition, PaginationStrategy } from "./constant";
import { NavigationItemInterface } from "./navigation-item.interface";
import { PaginatedServerResponseInterface } from "./paginated-server-response.interface";
import { PaginationStateInterface } from "./pagination-state.interface";

@Module()
export class PaginationModule implements ModuleInterface {
    /**
     * `true` to activate the pagination.
     */
    public enabled: boolean = true;

    /**
     * Defines if the configuration of the module has changed until the last view update.
     */
    public changed: boolean = true;

    /**
     * Define if the pagination is done on the server.
     * Possible values are:
     *   - `true`: the pagination is done on the server
     *   - `false`: the pagination is done locally
     *   - 'auto': the pagination is done on the server if the items are fetched remotely
     */
    public remote: boolean|'auto' = 'auto';

    /**
     * Defines where the pagination should appear.
     */
    public position: PaginationPosition = PaginationPosition.Top;

    /**
     * `true` to show the summary.
     */
    public summary: boolean = true;

    /**
     * Currently asked page number.
     * Only applicable if the strategy is `PaginationStrategy.Offset`.
     *
     * \!/ This is a configuration value, not the actual state the pagination is on.
     * @see `currentState` for the actual state the pagination is in.
     */
    private _page: number = 1;
    public get page(): number {
        return this._page;
    }
    public set page(value: number) {
        if (this.strategy === PaginationStrategy.Offset && this._page !== value) {
            this._page = value;
            // So the UI is reactive to the page change.
            this.currentState.page = value;
            this.notifyChange();
        }
    }

    /**
     * Currently asked page id.
     * Only applicable if strategy is `PaginationStrategy.Id`.
     *
     * \!/ This is a configuration value, not the actual state the pagination is on.
     * @see `currentState` for the actual state the pagination is in.
     */
    private _pageId: Primitive = null;
    public get pageId(): Primitive {
        return this._pageId;
    }
    public set pageId(value: Primitive) {
        if (this.strategy === PaginationStrategy.Id && this._pageId !== value) {
            this._pageId = value;
            this.notifyChange();
        }
    }

    /**
     * Currently asked number of items to show per page.
     *
     * \!/ This is a configuration value, not the actual state the pagination is on.
     * @see `currentState` for the actual state the pagination is in.
     */
    private _itemsPerPage: number = 20;
    public get itemsPerPage(): number {
        return this._itemsPerPage;
    } public set itemsPerPage(value: number) {
        const lastValue = this._itemsPerPage;
        this._itemsPerPage = this.allowedItemsPerPage.reduce((selected, item) => {
            if (Math.abs(item - value) < Math.abs(selected - value)) {
                selected = item;
            }
            return selected;
        }, this.allowedItemsPerPage[0]);
        if (this._itemsPerPage !== lastValue) {
            this.notifyChange();
        }
    }

    /**
     * List of number of items per page proposed to the user.
     */
    public allowedItemsPerPage: number[] = [10, 20, 30, 50, 100];

    /**
     * Should the pagination include a link to go to the first page?
     */
    public allowFirstPage: boolean = true;

    /**
     * Should the pagination include a link to go to the last page?
     */
    public allowLastPage: boolean = true;

    /**
     * Should the pagination show an input on which the user can type the page number they want to go?
     */
    public allowPageInput: boolean = true;

    /**
     * Strategy to employ to get to the next batch of items.
     */
    private _strategy: PaginationStrategy = PaginationStrategy.Offset;
    public get strategy(): PaginationStrategy {
        return this._strategy;
    }
    public set strategy(value: PaginationStrategy) {
        if (this._strategy !== value) {
            this._strategy = value;
            this.notifyChange();
        }
    }

    /**
     * The current state of the pagination (as seen by the user).
     */
    public currentState: PaginationStateInterface = {
        page: 1,
        totalResultsPerPage: 20,
        totalResultsCount: 0,
        totalPagesCount: 0,
        firstResultCount: 0,
        lastResultCount: 0,
        isFirstPage: true,
        isLastPage: true,
        navItems: []
    };

    /**
     * Defines the number of pages that will be listed as links before and after the current page.
     * For example:
     *
     * For a list of 10 pages, if we are on the page 4 with a "delta" of 3, the pages will be:
     *   ```[1] [2] [3] 4 [5] [6] [7]```
     */
    public delta: number = 3;

    /**
     * Defines the id to ask for the get the previous page.
     * Only required if the pagination strategy is `PaginationStrategy.Id`.
     */
    private previousPageId: Primitive = null;

    /**
     * Defines the id to ask for the get the next page.
     * Only required if the pagination strategy is `PaginationStrategy.Id`.
     */
    private nextPageId: Primitive = null;

    /**
     * Event dispatcher for communication with the outside.
     */
    private eventDispatcher = new EventDispatcher();

    /**
     * Go to the previous page.
     */
    public previous(): void {
        if (!this.currentState || this.currentState.isFirstPage) {
            return ;
        }
        if (this.strategy === PaginationStrategy.Offset) {
            this.goTo(this.currentState.page - 1);
        } else if (this.previousPageId !== null) {
            this.goTo(this.previousPageId);
        }
    }

    /**
     * Go to the next page.
     */
    public next(): void {
        if (!this.currentState || this.currentState.isLastPage) {
            return ;
        }
        if (this.strategy === PaginationStrategy.Offset) {
            this.goTo(this.currentState.page + 1);
        } else if (this.nextPageId !== null) {
            this.goTo(this.nextPageId);
        }
    }

    /**
     * Go to a specific page number.
     */
    public goTo(numOrId: number|Primitive): void {
        if (this.strategy === PaginationStrategy.Offset) {
            if (isValidNumber(numOrId)) {
                this.page = numOrId;
            }
        } else {
            this.pageId = numOrId;
        }
    }

    /**
     * Export user controllable properties into a serializable object for saving.
     */
    public export(): Pojo {
        return {page: this.page, nextPageId: this.nextPageId, previousPageId: this.previousPageId, itemsPerPage: this.itemsPerPage};
    }

    /**
     * Export user controllable properties into a serializable object for saving.
     */
    public import(save: Pojo): void {
        this.page = Math.min(1, ensureInteger(save.page));
        this.nextPageId = save.nextPageId as Primitive;
        this.previousPageId = save.previousPageId as Primitive;
        this.itemsPerPage = ensureInteger(save.itemsPerPage);
    }

    /**
     * Update the pagination internal state using external data.
     */
    public digestServerResponse(response: PaginatedServerResponseInterface): void {
        // Update all the data the server has the last word onto.
        if (this.strategy === PaginationStrategy.Offset) {
            this._page = Math.max(1, ensureInteger(response.page));
        } else if (this.strategy === PaginationStrategy.Id) {
            this._pageId = response.pageId || null;
            this.previousPageId = response.previousPageId || null;
            this.nextPageId = response.nextPageId || null;
        }
        if (!isUndefined(response.itemsPerPage)) {
            this._itemsPerPage = response.itemsPerPage;
        }

        // Now that we are up to date, we can update the current state.
        this.updateCurrentState(response.total);

        // In case the server returned an invalid page number, the current state will have the valid value that we need to copy.
        this._page = this.currentState.page;

        // Invalidate the config so external user will update.
        // That's in case a value has been modified from the server's response.
        this.eventDispatcher.dispatch(PaginationEvents.Invalidated);
        this.changed = false;
    }

    /**
     * Update the pagination internal state considering the input array of items is the whole list.
     * Also return a new array only containing the visible parts of these items.
     */
    public digestFullItemsList(items: ItemInterface[]): ItemInterface[] {
        this.updateCurrentState(items.length);
        this.changed = false;
        return this.sliceItemsForCurrentPage(items);
    }

    /**
     * Return a new array only containing the visible parts of the items.
     */
    public sliceItemsForCurrentPage(items: ItemInterface[]): ItemInterface[] {
        // The validity of the offsets calculated below is guaranteed by `updateCurrentState`.
        const offset =  (this.currentState.page - 1) * this.itemsPerPage;
        return items.slice(offset, offset + this.itemsPerPage);
    }

    /**
     * Register a function that will be called when a configuration value changes in the module.
     */
    public onChange(cb: () => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(PaginationEvents.Changed, cb);
    }

    /**
     * Register a function that will be called when a the internal state of the pagination changes.
     */
    public onInvalidate(cb: () => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(PaginationEvents.Invalidated, cb);
    }

    /**
     * Update the state visible to the view.
     */
    private updateCurrentState(totalItems: number): void {
        this.currentState.totalPagesCount = Math.ceil(totalItems / this.itemsPerPage);
        this.currentState.page = Math.max(1, Math.min(this.currentState.totalPagesCount, this._page));
        this.currentState.isFirstPage = this.currentState.page === 1;
        this.currentState.isLastPage = Math.min(this.currentState.page, this.currentState.totalPagesCount) === this.currentState.totalPagesCount;
        this.currentState.totalResultsCount = totalItems;
        this.currentState.totalResultsPerPage = this.itemsPerPage;
        this.currentState.firstResultCount = Math.min((this.itemsPerPage * (this.currentState.page - 1)) + 1, totalItems);

        let itemsInPage: number = this.itemsPerPage;
        if (this.currentState.isLastPage) {
            itemsInPage = this.itemsPerPage - (totalItems % this.itemsPerPage);
        }
        this.currentState.lastResultCount = Math.min(totalItems, this.currentState.firstResultCount + itemsInPage - 1);
        this.updateNavigationItems();
    }

    /**
     * Generate a new list of navigation items.
     */
    private updateNavigationItems() {
        this.currentState.navItems = [];
        if (this.strategy !== PaginationStrategy.Offset) {
            return ;
        }
        const exceedDisplayablePages: boolean = this.currentState.totalPagesCount > (this.delta * 2) + 1;
        const start = Math.max(1, this.currentState.page - this.delta);
        const end = Math.min(this.currentState.totalPagesCount, this.currentState.page + this.delta);
        for (let i = start; i <= end && i <= this.currentState.totalPagesCount; ++i) {
            const item: NavigationItemInterface = {
                page: i,
                text: String(i),
                current: i === this.currentState.page,
                type: (i === this.currentState.page && this.allowPageInput && exceedDisplayablePages) ? 'input' : 'link'
            };
            this.currentState.navItems.push(item);
        }
    }

    /**
     * Trigger a `PaginationEvents.Changed` event.
     */
    private notifyChange(): void {
        this.changed = true;
        this.eventDispatcher.dispatch(PaginationEvents.Changed);
    }
}
