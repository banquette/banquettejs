import { ConfigurationService } from "@banquette/config/config/configuration.service";
import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { Exception } from "@banquette/exception/exception";
import { RemoteModule } from "../misc/remote/remote.module";
import { ColumnInterface, ColumnOptions } from "./column.interface";
import { Status } from "./constant";
import { FilteringModule } from "./filtering/filtering.module";
import { ItemInterface } from "./item.interface";
import { OrderingModule } from "./ordering/ordering.module";
import { PaginationModule } from "./pagination/pagination.module";
import './listener/request.listener';
import './listener/response.listener';
import './listener/response-transformer.listener';
export declare class TableViewModel {
    private configuration;
    private globalDispatcher;
    /**
     * Unique id of the list.
     *
     * If defined, the configuration of the list will be persisted in the local storage and
     * will be restored automatically on the next load.
     */
    id: string | null;
    /**
     * If true, the url is modified to reflect the current configuration of the list.
     * This way the url can be copied/pasted while keeping the context of the list.
     */
    syncUrl: boolean;
    /**
     * If true AND if an id is defined, the context of the list is persisted in the local storage.
     * This way the last state is restored when the list initializes.
     */
    saveState: boolean;
    /**
     * The global list of all items available.
     */
    _items: ItemInterface[];
    get items(): ItemInterface[];
    set items(items: any[]);
    /**
     * The current list of items to display.
     */
    visibleItems: ItemInterface[];
    /**
     * Columns.
     */
    readonly columns: ColumnInterface[];
    visibleColumns: ColumnInterface[];
    private indexedColumns;
    /**
     * Current state of the list.
     */
    status: Status;
    /**
     * Status shortcut getters.
     */
    get initializing(): boolean;
    get fetching(): boolean;
    get error(): boolean;
    get ready(): boolean;
    /**
     * Only defined if the status is Status.Error.
     */
    errorDetail: Exception | null;
    /**
     * Modules.
     */
    remote: RemoteModule;
    pagination: PaginationModule;
    filtering: FilteringModule;
    ordering: OrderingModule;
    /**
     * An event dispatcher used to communicate with the concrete component.
     */
    localDispatcher: EventDispatcher;
    /**
     * A map linking http responses to their result object for the table.
     */
    private serverResultsMap;
    constructor(configuration: ConfigurationService, globalDispatcher: EventDispatcherService, pagination: PaginationModule);
    /**
     * Register a column component.
     */
    addColumn(column: string, index?: number | null): ColumnInterface;
    addColumn(column: ColumnOptions, index?: number | null): ColumnInterface;
    /**
     * Hide a column.
     */
    hideColumn(id: string): void;
    hideColumn(column: ColumnInterface): void;
    /**
     * Show a column.
     */
    showColumn(id: string): void;
    showColumn(column: ColumnInterface): void;
    /**
     * Remove a column.
     */
    removeColumn(id: string): void;
    removeColumn(column: ColumnInterface): void;
    /**
     * Get a column by id.any
     */
    getColumn(id: string): ColumnInterface | null;
    /**
     * Remove all columns.
     */
    clearColumns(): void;
    /**
     * Fetch remote data using the current configuration of the list.
     * This will always trigger a request even if configurable parameters have not changed.
     */
    fetch(): void;
    /**
     * Will only call fetch once per loop cycle and only if the list is initialized.
     * This is useful if you don't know how many time the fetch will be called, to avoid creating and cancelling multiple requests.
     */
    temperedFetch: () => void;
    /**
     * Listen for api requests to trigger custom processing.
     */
    private bindApiListeners;
    /**
     * Create an TableEventStateInterface from the current state of the view model.
     */
    private createEventState;
    /**
     * Update the list of visible items.
     */
    private updateVisibleItems;
    /**
     * Called when the configuration of a module changes.
     */
    private onModuleConfigurationChange;
    /**
     * Test if a module depends on an ajax request to work.
     */
    private isModuleRemoteDependent;
    /**
     * Called when any value of the ordering module changes.
     */
    private onOrderingConfigurationChange;
    /**
     * Change the visibility of a column.
     */
    private changeColumnVisibility;
    /**
     * Wrap a callback that will update the list of columns to ensure
     * the necessary operations will be performed after, and only performed once.
     */
    private updateColumns;
    /**
     * Update `visibleColumns`.
     */
    private updateVisibleColumns;
    /**
     * Update `indexedColumns`.
     */
    private updateColumnsIndex;
    /**
     * Trigger a view update.
     */
    private updateView;
    /**
     * Create a the ServerResult for an Http response.
     */
    private createServerResult;
    /**
     * Try to get the ServerResult corresponding to an Http response.
     */
    private getServerResult;
}
