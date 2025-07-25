import { ApiEvents, ApiProcessorTag, ApiBeforeResponseEvent, ApiRequestEvent } from "@banquette/api";
import { ConfigurationService } from "@banquette/config";
import { Inject, Module } from "@banquette/dependency-injection";
import { EventDispatcher, EventDispatcherService } from "@banquette/event";
import { Exception } from "@banquette/exception";
import { HttpResponse } from "@banquette/http";
import { proxy } from "@banquette/utils-misc";
import { uniqueId } from "@banquette/utils-random";
import {isNullOrUndefined, isObject, isString, isType, isUndefined, VoidCallback} from "@banquette/utils-type";
import { UiConfigurationSymbol } from "../config";
import { RemoteModule } from "../misc/remote/remote.module";
import { UiConfigurationInterface } from "../ui-configuration.interface";
import { ColumnInterface, ColumnOptions } from "./column.interface";
import { TableApiEvents, TableEvents, TableStatus, TableTag } from "./constant";
import { TableEventStateInterface } from "./event/table-event-state.interface";
import { TableRequestEvent } from "./event/table-request.event";
import { TableResponseEvent } from "./event/table-response.event";
import { FilteringModule } from "./filtering/filtering.module";
import { ItemInterface } from "./item.interface";

// Auto-register built-in listener
import { useBuiltInRequestListener } from "./listener/request.listener";
import { useBuiltInResponseTransformer } from "./listener/response-transformer.listener";
import { useBuiltInResponseListener } from "./listener/response.listener";
import { ModuleInterface } from "./module.interface";
import { OrderingModule } from "./ordering/ordering.module";
import { PaginationModule } from "./pagination/pagination.module";
import { ServerResult } from "./server-result";
import { RemoteModuleResponseEventArg } from "../misc";

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
    public set items(newItems: any[]) {
        const updatedItems: ItemInterface[] = [];

        for (let i = 0; i < newItems.length; i++) {
            const current = newItems[i];
            const detailsVisible = this._items[i]?.detailsVisible ?? false;

            // Wrap the push into a closure to keep the index.
            // This allows `toggleDetails` to access the item through to `items` class property,
            // making change tracking easier.
            ((index: number) => {
                updatedItems.push({
                    item: current,
                    detailsVisible,
                    toggleDetails: () => {
                        updatedItems[index].detailsVisible = !updatedItems[index].detailsVisible;
                        this.updateView();
                    }
                });
            })(updatedItems.length);
        }
        this._items = updatedItems;
        this.status = TableStatus.Ready;
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
    public status: TableStatus = TableStatus.Initializing;

    /**
     * Status shortcut getters.
     */
    public get initializing(): boolean { return this.status === TableStatus.Initializing }
    public get fetching(): boolean { return this.status === TableStatus.Fetching }
    public get error(): boolean { return this.status === TableStatus.Error }
    public get ready(): boolean { return this.status === TableStatus.Ready }

    /**
     * Only defined if the status is Status.Error.
     */
    public errorDetail: Exception|null = null;

    /**
     * Modules.
     */
    public remote: RemoteModule = new RemoteModule();
    public pagination: PaginationModule;
    public filtering: FilteringModule;
    public ordering: OrderingModule;

    /**
     * An event dispatcher used to communicate with the concrete component.
     */
    public localDispatcher: EventDispatcher;

    /**
     * Holds the response id of the last request.
     */
    private lastResponseId: number|null = null;

    private unsubscribeFunctions: VoidCallback[] = [];

    /**
     * A unique symbol to tie the listeners to the requests listeners.
     */
    private listenersTag: symbol = Symbol('table-request-tag');

    public constructor(@Inject(ConfigurationService) private configuration: ConfigurationService,
                       @Inject(EventDispatcherService) private globalDispatcher: EventDispatcherService,
                       @Inject(PaginationModule) pagination: PaginationModule) {
        this.localDispatcher = new EventDispatcher();
        this.pagination = pagination;
        this.filtering = new FilteringModule();
        this.ordering = new OrderingModule();
        this.unsubscribeFunctions.push(this.pagination.onChange(proxy(this.onModuleConfigurationChange, this)));
        this.unsubscribeFunctions.push(this.filtering.onChange(proxy(this.onModuleConfigurationChange, this)));
        this.unsubscribeFunctions.push(this.ordering.onChange(proxy(this.onOrderingConfigurationChange, this)));
        this.unsubscribeFunctions.push(this.ordering.onInvalidate(proxy(this.onOrderingConfigurationChange, this)));
        this.unsubscribeFunctions.push(this.remote.onBeforeResponse(proxy(this.onFetchBeforeResponse, this)));
        this.unsubscribeFunctions.push(this.remote.onResponse(proxy(this.onFetchResponse, this)));
        this.bindApiListeners();

        this.unsubscribeFunctions.push(useBuiltInResponseTransformer(this.listenersTag));
        this.unsubscribeFunctions.push(useBuiltInRequestListener(this.listenersTag));
        this.unsubscribeFunctions.push(useBuiltInResponseListener(this.listenersTag));
    }

    public dispose(): void {
        for (const unsubscribe of this.unsubscribeFunctions) {
            unsubscribe();
        }
        this.unsubscribeFunctions = [];
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
            width: !isNullOrUndefined(column.width) ? column.width : null,
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
            (this as any /* Writeable<TableViewModel> */).columns = [];
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
        const response = this.remote.send(null, {}, {}, [TableTag, this.listenersTag]);
        this.lastResponseId = response.id;
        this.status = TableStatus.Fetching;
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

    private onFetchBeforeResponse(event: RemoteModuleResponseEventArg): void {
        this.lastResponseId = event.response.id;
    }

    private onFetchResponse(event: RemoteModuleResponseEventArg): void {
        const serverResult = this.getServerResult(event.response);
        if (serverResult === null || !(event.response.result instanceof ServerResult) || event.response.isCanceled) {
            return ;
        }
        if (!isNullOrUndefined(event.response.result.ordering)) {
            this.ordering.digestServerResponse(event.response.result.ordering);
        }
        if (!isNullOrUndefined(event.response.result.filtering)) {
            this.filtering.digestServerResponse(event.response.result.filtering);
        }
        if (!isNullOrUndefined(event.response.result.pagination)) {
            this.pagination.digestServerResponse(event.response.result.pagination);
        }
        this.items = event.response.result.items;
    }

    /**
     * Listen for api requests to trigger custom processing.
     */
    private bindApiListeners(): void {
        const config = this.configuration.get<UiConfigurationInterface>(UiConfigurationSymbol);
        this.unsubscribeFunctions.push(this.globalDispatcher.subscribe(ApiEvents.BeforeRequest, (event: ApiRequestEvent) => {
            const serverResult = this.getServerResult(event.httpEvent.request.response);
            if (serverResult === null) {
                return ;
            }
            const result = this.globalDispatcher.dispatch(TableApiEvents.BeforeRequest, new TableRequestEvent(serverResult, this.createEventState(), event.httpEvent), false, [this.listenersTag]);
            const promise = result.promise;
            if (promise !== null) {
                return new Promise<void>((resolve) => {
                    // We just wait for the promise to complete, we don't care if it succeeded or not.
                    promise.finally(resolve);
                });
            }
            // Stopping the propagation is cleaner but the Api would have ignored the query anyway as it's a GET request.
            event.stopPropagation();
        }, config.table.apiEventsPriorities.beforeRequest, [TableTag, this.listenersTag], [ApiProcessorTag]));

        this.unsubscribeFunctions.push(this.globalDispatcher.subscribe(ApiEvents.BeforeResponse, (event: ApiBeforeResponseEvent) => {
            const serverResult = this.getServerResult(event.httpEvent.request.response);
            if (serverResult === null) {
                return ;
            }
            const result = this.globalDispatcher.dispatch(TableApiEvents.BeforeResponse, new TableResponseEvent(serverResult, this.createEventState(), event.httpEvent), false, [this.listenersTag]);
            const promise = result.promise;
            if (promise !== null) {
                return new Promise<void>((resolve) => {
                    // We just wait to wait for the promise to complete, we don't care if it succeeded or not.
                    promise.finally(resolve);
                });
            }
            // Very important to stop the propagation so the built-in processor from the api package is not executed.
            event.stopPropagation();
        }, config.table.apiEventsPriorities.beforeResponse, [TableTag, this.listenersTag], [ApiProcessorTag]));

        this.unsubscribeFunctions.push(this.globalDispatcher.subscribe(ApiEvents.RequestSuccess, (event: ApiBeforeResponseEvent) => {
            event.stopPropagation();
        }, 1, [TableTag, this.listenersTag], [ApiProcessorTag]));
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
            filters: this.filtering.getActiveFilters(),
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
        let items = ([] as ItemInterface[]).concat(this.items);

        // Ordering
        if (this.ordering.isApplicable && !this.isRemoteModuleDependent(this.ordering)) {
            items = this.ordering.apply(items);
        } else {
            this.ordering.changed = false;
        }

        // Filtering
        if (this.filtering.isApplicable && !this.isRemoteModuleDependent(this.filtering)) {
            items = this.filtering.apply(items);
        } else {
            this.filtering.changed = false;
        }

        // Pagination
        if (this.pagination.enabled && !this.isRemoteModuleDependent(this.pagination)) {
            items = this.pagination.digestFullItemsList(items);
        } else {
            this.pagination.changed = false;
        }
        this.visibleItems = items;
        this.updateView();
    }

    /**
     * Called when the configuration of a module changes.
     */
    private onModuleConfigurationChange(): void {
        if (this.initializing) {
            return ;
        }
        if (this.remote.isApplicable && (
            (this.pagination.changed && this.isRemoteModuleDependent(this.pagination)) ||
            (this.filtering.changed && this.isRemoteModuleDependent(this.filtering)) ||
            (this.ordering.changed && this.isRemoteModuleDependent(this.ordering))
        )) {
            this.temperedFetch();
        } else {
            this.updateVisibleItems();
        }
    }

    /**
     * Test if a module depends on an ajax request to work.
     */
    private isRemoteModuleDependent(module: ModuleInterface): boolean {
        return module.remote === true || (module.remote === 'auto' && this.remote.isApplicable);
    }

    /**
     * Called when any value of the ordering module changes.
     */
    private onOrderingConfigurationChange(): void {
        for (const column of this.columns) {
            if (this.ordering.columnName !== null && column.orderingName === this.ordering.columnName) {
                (column as any /* Writeable<ColumnInterface> */).orderingStatus = this.ordering.direction;
            } else {
                (column as any /* Writeable<ColumnInterface> */).orderingStatus = null;
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
            (columnOrId as any /* Writeable<ColumnInterface> */).visible = visible;
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

    /**
     * Try to get the ServerResult corresponding to a Http response.
     */
    private getServerResult(response: HttpResponse<any>): ServerResult|null {
        if (response.id === this.lastResponseId) {
            return new ServerResult();
        }
        return null;
    }
}
