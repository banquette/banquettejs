import { ApiEvents, ApiProcessorTag } from "@banquette/api/constant";
import { ApiRequestEvent } from "@banquette/api/event/api-request.event";
import { ApiResponseEvent } from "@banquette/api/event/api-response.event";
import { SharedConfiguration } from "@banquette/config/config/shared-configuration";
import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { Exception } from "@banquette/exception/exception";
import { proxy } from "@banquette/utils-misc/proxy";
import { uniqueId } from "@banquette/utils-random/unique-id";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Writeable } from "@banquette/utils-type/types";
import { UiConfigurationSymbol } from "../config";
import { RemoteModule } from "../misc/module/remote/remote.module";
import { UiConfigurationInterface } from "../ui-configuration.interface";
import { ColumnInterface, ColumnOptions } from "./column.interface";
import { TableApiEvents, TableEvents, Status } from "./constant";
import { TableEventStateInterface } from "./event/table-event-state.interface";
import { TableRequestEvent } from "./event/table-request.event";
import { TableResponseEvent } from "./event/table-response.event";
import { FilteringModule } from "./filtering/filtering.module";
import { ItemInterface } from "./item.interface";
import { OrderingModule } from "./ordering/ordering.module";
import { PaginationModule } from "./pagination/pagination.module";
import { ServerResult } from "./server-result";

// Auto-register built-in listener
import './listener/request.listener';
import './listener/response.listener';

@Module()
export class TableViewModel {
    /**
     * Unique id of the list.
     *
     * If defined, the configuration of the list will be persisted in the local storage and
     * will be restored automatically on the next load.
     */
    public id: string|null = null;

    /**
     * If true, the url is modified to reflect the current configuration of the list.
     * This way the url can be copied/pasted while keeping the context of the list.
     */
    public syncUrl: boolean = true;

    /**
     * If true AND if an id is defined, the context of the list is persisted in the local storage.
     * This way the last state is restored when the list initializes.
     */
    public saveState: boolean = true;

    /**
     * The global list of all items available.
     */
    public _items: ItemInterface[] = [];
    public get items(): ItemInterface[] {
        return this._items;
    }
    public set items(items: any[]) {
        this._items = [];
        for (const current of items) {
            // Wrap the push into a closure to keep the index.
            // This allows `toggleDetails` to access the item through to `items` class property,
            // making change tracking easier.
            ((index: number) => {
                this._items.push({
                    item: current,
                    detailsVisible: false,
                    toggleDetails: () => {
                        this._items[index].detailsVisible = !this._items[index].detailsVisible;
                        this.updateView();
                    }
                });
            })(this._items.length);
        }
        this.status = Status.Ready;
        this.updateVisibleItems();
        this.updateView();
    }

    /**
     * The current list of items to display.
     */
    public visibleItems: ItemInterface[] = [];

    /**
     * Columns.
     */
    public readonly columns: ColumnInterface[] = [];
    // Array containing only visible columns.
    public visibleColumns: ColumnInterface[] = [];
    // Columns indexed by id for easier access.
    private indexedColumns: Record<string, ColumnInterface> = {};

    /**
     * Current state of the list.
     */
    public status: Status = Status.Initializing;

    /**
     * Status shortcut getters.
     */
    public get initializing(): boolean { return this.status === Status.Initializing }
    public get fetching(): boolean { return this.status === Status.Fetching }
    public get error(): boolean { return this.status === Status.Error }
    public get ready(): boolean { return this.status === Status.Ready }

    /**
     * Only defined if the status is Status.Error.
     */
    public errorDetail: Exception|null = null;

    /**
     * Modules.
     */
    public remote: RemoteModule;
    public pagination: PaginationModule;
    public filtering: FilteringModule;
    public ordering: OrderingModule;

    /**
     * An event dispatcher used to communicate with the concrete component.
     */
    public localDispatcher: EventDispatcher;

    /**
     * Hold the result object of the last fetch.
     */
    private lastServerResult!: ServerResult;

    public constructor(@Inject(SharedConfiguration) private sharedConfiguration: SharedConfiguration,
                       @Inject(EventDispatcherService) private globalDispatcher: EventDispatcherService,
                       @Inject(RemoteModule) remote: RemoteModule,
                       @Inject(PaginationModule) pagination: PaginationModule) {
        this.localDispatcher = new EventDispatcher();
        this.remote = remote;
        this.pagination = pagination;
        this.filtering = new FilteringModule();
        this.ordering = new OrderingModule();
        this.pagination.onChange(proxy(this.onModuleConfigurationChange, this));
        this.filtering.onChange(proxy(this.onModuleConfigurationChange, this));
        this.ordering.onChange(proxy(this.onOrderingConfigurationChange, this));
        this.ordering.onInvalidate(proxy(this.onOrderingConfigurationChange, this));
        this.bindApiListeners();
    }

    /**
     * Register a column component.
     */
    public addColumn(column: string, index?: number|null): ColumnInterface;
    public addColumn(column: ColumnOptions, index?: number|null): ColumnInterface;
    public addColumn(column: ColumnOptions|string, index: number|null = null): ColumnInterface {
        if (isString(column)) {
            column = {title: column};
        }
        const fullColumn: ColumnInterface = Object.assign(column, {
            id: !isNullOrUndefined(column.id) ? column.id : uniqueId(),
            title: !isNullOrUndefined(column.title) ? column.title : '',
            orderingName: !isUndefined(column.orderingName) ? column.orderingName : null,
            visible: !isNullOrUndefined(column.visible) ? column.visible : true,
            hideable: !isNullOrUndefined(column.hideable) ? column.hideable : true,
            orderingStatus: null
        });
        this.updateColumns(() => {
            if (index === null || index >= this.columns.length) {
                this.columns.push(fullColumn);
            } else {
                this.columns.splice(index, 0, fullColumn);
            }
        });
        return fullColumn;
    }

    /**
     * Hide a column.
     */
    public hideColumn(id: string): void;
    public hideColumn(column: ColumnInterface): void;
    public hideColumn(columnOrId: ColumnInterface|string): void {
        this.changeColumnVisibility(columnOrId, false);
    }

    /**
     * Show a column.
     */
    public showColumn(id: string): void;
    public showColumn(column: ColumnInterface): void;
    public showColumn(columnOrId: ColumnInterface|string): void {
        this.changeColumnVisibility(columnOrId, true);
    }

    /**
     * Remove a column.
     */
    public removeColumn(id: string): void;
    public removeColumn(column: ColumnInterface): void;
    public removeColumn(columnOrId: ColumnInterface|string): void {
        if (isType<ColumnInterface>(columnOrId, isObject)) {
            columnOrId = columnOrId.id;
        }
        for (let i = 0; i < this.columns.length; ++i) {
            if (this.columns[i].id === columnOrId) {
                this.updateColumns(() => {
                    this.columns.splice(i, 1);
                });
                return ;
            }
        }
    }

    /**
     * Get a column by id.any
     */
    public getColumn(id: string): ColumnInterface|null {
        return this.indexedColumns[id] || null;
    }

    /**
     * Remove all columns.
     */
    public clearColumns(): void {
        this.updateColumns(() => {
            (this as Writeable<TableViewModel>).columns = [];
        });
    }

    /**
     * Fetch remote data using the current configuration of the list.
     * This will always trigger a request even if configurable parameters have not changed.
     */
    public fetch(): void {
        if (!this.remote.isApplicable) {
            return ;
        }
        const serverResult = new ServerResult();
        this.lastServerResult = serverResult;
        const response = this.remote.send();
        response.promise.finally(() => {
            if (!(response.result instanceof ServerResult) || response.result.id !== serverResult.id || response.isCanceled) {
                return ;
            }
            if (!isNullOrUndefined(serverResult.pagination)) {
                this.pagination.digestServerResponse(serverResult.pagination);
            }
            this.items = response.result.items;
            if (!isNullOrUndefined(serverResult.filtering)) {
                this.filtering.digestServerResponse(serverResult.filtering);
            }
            if (!isNullOrUndefined(serverResult.ordering)) {
                this.ordering.digestServerResponse(serverResult.ordering);
            }
            this.updateVisibleItems();
            this.status = Status.Ready;
            this.updateView();
        });
        this.status = Status.Fetching;
        this.updateView();
    }

    /**
     * Will only call fetch once per loop cycle and only if the list is initialized.
     * This is useful if you don't know how many time the fetch will be called, to avoid creating and cancelling multiple requests.
     */
    public temperedFetch = (() => {
        let queued: boolean = false;
        return () => {
            if (queued || this.initializing) {
                return ;
            }
            setTimeout(() => {
                this.fetch();
                queued = false;
            });
            queued = true;
        };
    })();

    /**
     * Listen for api requests to trigger custom processing.
     */
    private bindApiListeners(): void {
        const config = this.sharedConfiguration.get<UiConfigurationInterface>(UiConfigurationSymbol);
        this.globalDispatcher.subscribe(ApiEvents.BeforeRequest, (event: ApiRequestEvent) => {
            const result = this.globalDispatcher.dispatch(TableApiEvents.BeforeRequest, new TableRequestEvent(this.lastServerResult, this.createEventState(), event.httpEvent));
            const promise = result.promise;
            if (promise !== null) {
                return new Promise<void>((resolve) => {
                    // We just wait to wait for the promise to complete, we don't care if it succeeded or not.
                    promise.finally(resolve);
                });
            }
            // Stopping the propagation is cleaner but the Api would have ignored the query anyway as it's a GET request.
            event.stopPropagation();
        }, config.table.apiEventsPriorities.beforeRequest, [], [ApiProcessorTag]);


        this.globalDispatcher.subscribe(ApiEvents.BeforeResponse, (event: ApiResponseEvent) => {
            const result = this.globalDispatcher.dispatch(TableApiEvents.BeforeResponse, new TableResponseEvent(this.lastServerResult, this.createEventState(), event.httpEvent));
            const promise = result.promise;
            if (promise !== null) {
                return new Promise<void>((resolve) => {
                    // We just wait to wait for the promise to complete, we don't care if it succeeded or not.
                    promise.finally(resolve);
                });
            }
            // Very important to stop the propagation so the built-in processor from the api package is not executed.
            event.stopPropagation();
        }, config.table.apiEventsPriorities.beforeResponse, [], [ApiProcessorTag]);
    }

    /**
     * Create an TableEventStateInterface from the current state of the view model.
     */
    private createEventState(): TableEventStateInterface {
        return {
            remote: {
                url: this.remote.url,
                urlParams: this.remote.urlParams,
                model: this.remote.model,
                endpoint: this.remote.endpoint,
                method: this.remote.method
            },
            pagination: {
                enabled: this.pagination.enabled,
                page: this.pagination.page,
                pageId: this.pagination.pageId,
                itemsPerPage: this.pagination.itemsPerPage,
                strategy: this.pagination.strategy
            },
            filters: this.filtering.filters,
            ordering: {
                columnName: this.ordering.columnName,
                direction: this.ordering.direction
            }
        };
    }

    /**
     * Update the list of visible items.
     */
    private updateVisibleItems(): void {
        if (this.remote.isApplicable && (!this.pagination.enabled || this.pagination.isRemotelyPaginated)) {
            this.visibleItems = this.items;
        } else {
            this.visibleItems = this.pagination.digestFullItemsList(this.items);
        }
        this.updateView();
    }

    /**
     * Called when the configuration of a module changes.
     */
    private onModuleConfigurationChange(): void {
        if (this.remote.isApplicable && this.pagination.isRemotelyPaginated) {
            this.temperedFetch();
        } else {
            this.updateVisibleItems();
        }
    }

    /**
     * Called when any value of the ordering module changes.
     */
    private onOrderingConfigurationChange(): void {
        for (const column of this.columns) {
            if (this.ordering.columnName !== null && column.orderingName === this.ordering.columnName) {
                (column as Writeable<ColumnInterface>).orderingStatus = this.ordering.direction;
            } else {
                (column as Writeable<ColumnInterface>).orderingStatus = null;
            }
        }
        this.onModuleConfigurationChange();
    }

    /**
     * Change the visibility of a column.
     */
    private changeColumnVisibility(columnOrId: ColumnInterface|string, visible: boolean): void {
        this.updateColumns(() => {
            if (isString(columnOrId)) {
                const column = this.getColumn(columnOrId);
                if (column === null) {
                    return;
                }
                columnOrId = column;
            }
            (columnOrId as Writeable<ColumnInterface>).visible = visible;
        });
    }

    /**
     * Wrap a callback that will update the list of columns to ensure
     * the necessary operations will be performed after, and only performed once.
     */
    private updateColumns = (() => {
        let callCount = 0;
        return (cb: () => void): void => {
            ++callCount;
            cb();
            if ((--callCount) === 0) {
                this.updateVisibleColumns();
                this.updateColumnsIndex();
            }
        };
    })();

    /**
     * Update `visibleColumns`.
     */
    private updateVisibleColumns(): void {
        this.visibleColumns = this.columns.filter((i) => i.visible);
    }

    /**
     * Update `indexedColumns`.
     */
    private updateColumnsIndex(): void {
        this.indexedColumns = this.columns.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {} as Record<string, ColumnInterface>);
    }

    /**
     * Trigger a view update.
     */
    private updateView(): void {
        this.localDispatcher.dispatch(TableEvents.UpdateView);
    }
}
