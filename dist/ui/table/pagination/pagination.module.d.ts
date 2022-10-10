import { UnsubscribeFunction } from "@banquette/event/type";
import { Pojo, Primitive } from "@banquette/utils-type/types";
import { ItemInterface } from "../item.interface";
import { ModuleInterface } from "../module.interface";
import { PaginationPosition, PaginationStrategy } from "./constant";
import { PaginatedServerResponseInterface } from "./paginated-server-response.interface";
import { PaginationStateInterface } from "./pagination-state.interface";
export declare class PaginationModule implements ModuleInterface {
    /**
     * `true` to activate the pagination.
     */
    enabled: boolean;
    /**
     * Defines if the configuration of the module has changed until the last view update.
     */
    changed: boolean;
    /**
     * Define if the pagination is done on the server.
     * Possible values are:
     *   - `true`: the pagination is done on the server
     *   - `false`: the pagination is done locally
     *   - 'auto': the pagination is done on the server if the items are fetched remotely
     */
    remote: boolean | 'auto';
    /**
     * Defines where the pagination should appear.
     */
    position: PaginationPosition;
    /**
     * `true` to show the summary.
     */
    summary: boolean;
    /**
     * Currently asked page number.
     * Only applicable if the strategy is `PaginationStrategy.Offset`.
     *
     * \!/ This is a configuration value, not the actual state the pagination is on.
     * @see `currentState` for the actual state the pagination is in.
     */
    private _page;
    get page(): number;
    set page(value: number);
    /**
     * Currently asked page id.
     * Only applicable if strategy is `PaginationStrategy.Id`.
     *
     * \!/ This is a configuration value, not the actual state the pagination is on.
     * @see `currentState` for the actual state the pagination is in.
     */
    private _pageId;
    get pageId(): Primitive;
    set pageId(value: Primitive);
    /**
     * Currently asked number of items to show per page.
     *
     * \!/ This is a configuration value, not the actual state the pagination is on.
     * @see `currentState` for the actual state the pagination is in.
     */
    private _itemsPerPage;
    get itemsPerPage(): number;
    set itemsPerPage(value: number);
    /**
     * List of number of items per page proposed to the user.
     */
    allowedItemsPerPage: number[];
    /**
     * Should the pagination include a link to go to the first page?
     */
    allowFirstPage: boolean;
    /**
     * Should the pagination include a link to go to the last page?
     */
    allowLastPage: boolean;
    /**
     * Should the pagination show an input on which the user can type the page number they want to go?
     */
    allowPageInput: boolean;
    /**
     * Strategy to employ to get to the next batch of items.
     */
    private _strategy;
    get strategy(): PaginationStrategy;
    set strategy(value: PaginationStrategy);
    /**
     * The current state of the pagination (as seen by the user).
     */
    currentState: PaginationStateInterface;
    /**
     * Defines the number of pages that will be listed as links before and after the current page.
     * For example:
     *
     * For a list of 10 pages, if we are on the page 4 with a "delta" of 3, the pages will be:
     *   ```[1] [2] [3] 4 [5] [6] [7]```
     */
    delta: number;
    /**
     * Defines the id to ask for the get the previous page.
     * Only required if the pagination strategy is `PaginationStrategy.Id`.
     */
    private previousPageId;
    /**
     * Defines the id to ask for the get the next page.
     * Only required if the pagination strategy is `PaginationStrategy.Id`.
     */
    private nextPageId;
    /**
     * Event dispatcher for communication with the outside.
     */
    private eventDispatcher;
    /**
     * Go to the previous page.
     */
    previous(): void;
    /**
     * Go to the next page.
     */
    next(): void;
    /**
     * Go to a specific page number.
     */
    goTo(numOrId: number | Primitive): void;
    /**
     * Export user controllable properties into a serializable object for saving.
     */
    export(): Pojo;
    /**
     * Export user controllable properties into a serializable object for saving.
     */
    import(save: Pojo): void;
    /**
     * Update the pagination internal state using external data.
     */
    digestServerResponse(response: PaginatedServerResponseInterface): void;
    /**
     * Update the pagination internal state considering the input array of items is the whole list.
     * Also return a new array only containing the visible parts of these items.
     */
    digestFullItemsList(items: ItemInterface[]): ItemInterface[];
    /**
     * Return a new array only containing the visible parts of the items.
     */
    sliceItemsForCurrentPage(items: ItemInterface[]): ItemInterface[];
    /**
     * Register a function that will be called when a configuration value changes in the module.
     */
    onChange(cb: () => void): UnsubscribeFunction;
    /**
     * Register a function that will be called when a the internal state of the pagination changes.
     */
    onInvalidate(cb: () => void): UnsubscribeFunction;
    /**
     * Update the state visible to the view.
     */
    private updateCurrentState;
    /**
     * Generate a new list of navigation items.
     */
    private updateNavigationItems;
    /**
     * Trigger a `PaginationEvents.Changed` event.
     */
    private notifyChange;
}
