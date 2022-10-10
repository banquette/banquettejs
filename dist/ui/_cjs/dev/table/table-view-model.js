/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var constant$1 = require('@banquette/api/_cjs/dev/constant');
var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var module_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/module.decorator');
var eventDispatcher = require('@banquette/event/_cjs/dev/event-dispatcher');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var uniqueId = require('@banquette/utils-random/_cjs/dev/unique-id');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isType = require('@banquette/utils-type/_cjs/dev/is-type');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var config = require('../config.js');
var remote_module = require('../misc/remote/remote.module.js');
var constant = require('./constant.js');
var tableRequest_event = require('./event/table-request.event.js');
var tableResponse_event = require('./event/table-response.event.js');
var filtering_module = require('./filtering/filtering.module.js');
var ordering_module = require('./ordering/ordering.module.js');
var pagination_module = require('./pagination/pagination.module.js');
var serverResult = require('./server-result.js');
require('./listener/request.listener.js');
require('./listener/response.listener.js');
require('./listener/response-transformer.listener.js');

var TableViewModel = /** @class */ (function () {
    function TableViewModel(configuration, globalDispatcher, pagination) {
        var _this = this;
        this.configuration = configuration;
        this.globalDispatcher = globalDispatcher;
        /**
         * Unique id of the list.
         *
         * If defined, the configuration of the list will be persisted in the local storage and
         * will be restored automatically on the next load.
         */
        this.id = null;
        /**
         * If true, the url is modified to reflect the current configuration of the list.
         * This way the url can be copied/pasted while keeping the context of the list.
         */
        this.syncUrl = true;
        /**
         * If true AND if an id is defined, the context of the list is persisted in the local storage.
         * This way the last state is restored when the list initializes.
         */
        this.saveState = true;
        /**
         * The global list of all items available.
         */
        this._items = [];
        /**
         * The current list of items to display.
         */
        this.visibleItems = [];
        /**
         * Columns.
         */
        this.columns = [];
        // Array containing only visible columns.
        this.visibleColumns = [];
        // Columns indexed by id for easier access.
        this.indexedColumns = {};
        /**
         * Current state of the list.
         */
        this.status = constant.Status.Initializing;
        /**
         * Only defined if the status is Status.Error.
         */
        this.errorDetail = null;
        /**
         * Modules.
         */
        this.remote = new remote_module.RemoteModule();
        /**
         * A map linking http responses to their result object for the table.
         */
        this.serverResultsMap = {};
        /**
         * Will only call fetch once per loop cycle and only if the list is initialized.
         * This is useful if you don't know how many time the fetch will be called, to avoid creating and cancelling multiple requests.
         */
        this.temperedFetch = (function () {
            var queued = false;
            return function () {
                if (queued || _this.initializing) {
                    return;
                }
                setTimeout(function () {
                    _this.fetch();
                    queued = false;
                });
                queued = true;
            };
        })();
        /**
         * Wrap a callback that will update the list of columns to ensure
         * the necessary operations will be performed after, and only performed once.
         */
        this.updateColumns = (function () {
            var callCount = 0;
            return function (cb) {
                ++callCount;
                cb();
                if ((--callCount) === 0) {
                    _this.updateVisibleColumns();
                    _this.updateColumnsIndex();
                }
            };
        })();
        this.localDispatcher = new eventDispatcher.EventDispatcher();
        this.pagination = pagination;
        this.filtering = new filtering_module.FilteringModule();
        this.ordering = new ordering_module.OrderingModule();
        this.pagination.onChange(proxy.proxy(this.onModuleConfigurationChange, this));
        this.filtering.onChange(proxy.proxy(this.onModuleConfigurationChange, this));
        this.ordering.onChange(proxy.proxy(this.onOrderingConfigurationChange, this));
        this.ordering.onInvalidate(proxy.proxy(this.onOrderingConfigurationChange, this));
        this.bindApiListeners();
    }
    Object.defineProperty(TableViewModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            var _this = this;
            this._items = [];
            var _loop_1 = function (current) {
                // Wrap the push into a closure to keep the index.
                // This allows `toggleDetails` to access the item through to `items` class property,
                // making change tracking easier.
                (function (index) {
                    _this._items.push({
                        item: current,
                        detailsVisible: false,
                        toggleDetails: function () {
                            _this._items[index].detailsVisible = !_this._items[index].detailsVisible;
                            _this.updateView();
                        }
                    });
                })(this_1._items.length);
            };
            var this_1 = this;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var current = items_1[_i];
                _loop_1(current);
            }
            this.status = constant.Status.Ready;
            this.updateVisibleItems();
            this.updateView();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableViewModel.prototype, "initializing", {
        /**
         * Status shortcut getters.
         */
        get: function () { return this.status === constant.Status.Initializing; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableViewModel.prototype, "fetching", {
        get: function () { return this.status === constant.Status.Fetching; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableViewModel.prototype, "error", {
        get: function () { return this.status === constant.Status.Error; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableViewModel.prototype, "ready", {
        get: function () { return this.status === constant.Status.Ready; },
        enumerable: false,
        configurable: true
    });
    TableViewModel.prototype.addColumn = function (column, index) {
        var _this = this;
        if (index === void 0) { index = null; }
        if (isString.isString(column)) {
            column = { title: column };
        }
        var fullColumn = Object.assign(column, {
            id: !isNullOrUndefined.isNullOrUndefined(column.id) ? column.id : uniqueId.uniqueId(),
            title: !isNullOrUndefined.isNullOrUndefined(column.title) ? column.title : '',
            orderingName: !isUndefined.isUndefined(column.orderingName) ? column.orderingName : null,
            visible: !isNullOrUndefined.isNullOrUndefined(column.visible) ? column.visible : true,
            hideable: !isNullOrUndefined.isNullOrUndefined(column.hideable) ? column.hideable : true,
            width: !isNullOrUndefined.isNullOrUndefined(column.width) ? column.width : null,
            orderingStatus: null
        });
        this.updateColumns(function () {
            if (index === null || index >= _this.columns.length) {
                _this.columns.push(fullColumn);
            }
            else {
                _this.columns.splice(index, 0, fullColumn);
            }
        });
        return fullColumn;
    };
    TableViewModel.prototype.hideColumn = function (columnOrId) {
        this.changeColumnVisibility(columnOrId, false);
    };
    TableViewModel.prototype.showColumn = function (columnOrId) {
        this.changeColumnVisibility(columnOrId, true);
    };
    TableViewModel.prototype.removeColumn = function (columnOrId) {
        var _this = this;
        if (isType.isType(columnOrId, isObject.isObject)) {
            columnOrId = columnOrId.id;
        }
        var _loop_2 = function (i) {
            if (this_2.columns[i].id === columnOrId) {
                this_2.updateColumns(function () {
                    _this.columns.splice(i, 1);
                });
                return { value: void 0 };
            }
        };
        var this_2 = this;
        for (var i = 0; i < this.columns.length; ++i) {
            var state_1 = _loop_2(i);
            if (typeof state_1 === "object")
                { return state_1.value; }
        }
    };
    /**
     * Get a column by id.any
     */
    TableViewModel.prototype.getColumn = function (id) {
        return this.indexedColumns[id] || null;
    };
    /**
     * Remove all columns.
     */
    TableViewModel.prototype.clearColumns = function () {
        var _this = this;
        this.updateColumns(function () {
            _this.columns = [];
        });
    };
    /**
     * Fetch remote data using the current configuration of the list.
     * This will always trigger a request even if configurable parameters have not changed.
     */
    TableViewModel.prototype.fetch = function () {
        var _this = this;
        if (!this.remote.isApplicable) {
            return;
        }
        var response = this.remote.send(null, {}, {}, [constant.TableTag]);
        this.createServerResult(response);
        response.promise.finally(function () {
            var serverResult$1 = _this.getServerResult(response);
            if (serverResult$1 === null || !(response.result instanceof serverResult.ServerResult) || response.result.id !== serverResult$1.id || response.isCanceled) {
                return;
            }
            if (!isNullOrUndefined.isNullOrUndefined(serverResult$1.ordering)) {
                _this.ordering.digestServerResponse(serverResult$1.ordering);
            }
            if (!isNullOrUndefined.isNullOrUndefined(serverResult$1.filtering)) {
                _this.filtering.digestServerResponse(serverResult$1.filtering);
            }
            if (!isNullOrUndefined.isNullOrUndefined(serverResult$1.pagination)) {
                _this.pagination.digestServerResponse(serverResult$1.pagination);
            }
            _this.items = response.result.items;
        });
        this.status = constant.Status.Fetching;
        this.updateView();
    };
    /**
     * Listen for api requests to trigger custom processing.
     */
    TableViewModel.prototype.bindApiListeners = function () {
        var _this = this;
        var config$1 = this.configuration.get(config.UiConfigurationSymbol);
        this.globalDispatcher.subscribe(constant$1.ApiEvents.BeforeRequest, function (event) {
            var serverResult = _this.getServerResult(event.httpEvent.request.response);
            if (serverResult === null) {
                return;
            }
            var result = _this.globalDispatcher.dispatch(constant.TableApiEvents.BeforeRequest, new tableRequest_event.TableRequestEvent(serverResult, _this.createEventState(), event.httpEvent));
            var promise = result.promise;
            if (promise !== null) {
                return new Promise(function (resolve) {
                    // We just wait to wait for the promise to complete, we don't care if it succeeded or not.
                    promise.finally(resolve);
                });
            }
            // Stopping the propagation is cleaner but the Api would have ignored the query anyway as it's a GET request.
            event.stopPropagation();
        }, config$1.table.apiEventsPriorities.beforeRequest, [constant.TableTag], [constant$1.ApiProcessorTag]);
        this.globalDispatcher.subscribe(constant$1.ApiEvents.BeforeResponse, function (event) {
            var serverResult = _this.getServerResult(event.httpEvent.request.response);
            if (serverResult === null) {
                return;
            }
            var result = _this.globalDispatcher.dispatch(constant.TableApiEvents.BeforeResponse, new tableResponse_event.TableResponseEvent(serverResult, _this.createEventState(), event.httpEvent));
            var promise = result.promise;
            if (promise !== null) {
                return new Promise(function (resolve) {
                    // We just wait to wait for the promise to complete, we don't care if it succeeded or not.
                    promise.finally(resolve);
                });
            }
            // Very important to stop the propagation so the built-in processor from the api package is not executed.
            event.stopPropagation();
        }, config$1.table.apiEventsPriorities.beforeResponse, [constant.TableTag], [constant$1.ApiProcessorTag]);
        this.globalDispatcher.subscribe(constant$1.ApiEvents.RequestSuccess, function (event) {
            event.stopPropagation();
        }, 1, [constant.TableTag], [constant$1.ApiProcessorTag]);
    };
    /**
     * Create an TableEventStateInterface from the current state of the view model.
     */
    TableViewModel.prototype.createEventState = function () {
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
    };
    /**
     * Update the list of visible items.
     */
    TableViewModel.prototype.updateVisibleItems = function () {
        var items = [].concat(this.items);
        // Ordering
        if (this.ordering.isApplicable && !this.isModuleRemoteDependent(this.ordering)) {
            items = this.ordering.apply(items);
        }
        else {
            this.ordering.changed = false;
        }
        // Filtering
        if (this.filtering.isApplicable && !this.isModuleRemoteDependent(this.filtering)) {
            items = this.filtering.apply(items);
        }
        else {
            this.filtering.changed = false;
        }
        // Pagination
        if (this.pagination.enabled && !this.isModuleRemoteDependent(this.pagination)) {
            items = this.pagination.digestFullItemsList(items);
        }
        else {
            this.pagination.changed = false;
        }
        this.visibleItems = items;
        this.updateView();
    };
    /**
     * Called when the configuration of a module changes.
     */
    TableViewModel.prototype.onModuleConfigurationChange = function () {
        if (this.initializing) {
            return;
        }
        if (this.remote.isApplicable && ((this.pagination.changed && this.isModuleRemoteDependent(this.pagination)) ||
            (this.filtering.changed && this.isModuleRemoteDependent(this.filtering)) ||
            (this.ordering.changed && this.isModuleRemoteDependent(this.ordering)))) {
            this.temperedFetch();
        }
        else {
            this.updateVisibleItems();
        }
    };
    /**
     * Test if a module depends on an ajax request to work.
     */
    TableViewModel.prototype.isModuleRemoteDependent = function (module) {
        return module.remote === true || (module.remote === 'auto' && this.remote.isApplicable);
    };
    /**
     * Called when any value of the ordering module changes.
     */
    TableViewModel.prototype.onOrderingConfigurationChange = function () {
        for (var _i = 0, _a = this.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (this.ordering.columnName !== null && column.orderingName === this.ordering.columnName) {
                column.orderingStatus = this.ordering.direction;
            }
            else {
                column.orderingStatus = null;
            }
        }
        this.onModuleConfigurationChange();
    };
    /**
     * Change the visibility of a column.
     */
    TableViewModel.prototype.changeColumnVisibility = function (columnOrId, visible) {
        var _this = this;
        this.updateColumns(function () {
            if (isString.isString(columnOrId)) {
                var column = _this.getColumn(columnOrId);
                if (column === null) {
                    return;
                }
                columnOrId = column;
            }
            columnOrId.visible = visible;
        });
    };
    /**
     * Update `visibleColumns`.
     */
    TableViewModel.prototype.updateVisibleColumns = function () {
        this.visibleColumns = this.columns.filter(function (i) { return i.visible; });
    };
    /**
     * Update `indexedColumns`.
     */
    TableViewModel.prototype.updateColumnsIndex = function () {
        this.indexedColumns = this.columns.reduce(function (acc, item) {
            acc[item.id] = item;
            return acc;
        }, {});
    };
    /**
     * Trigger a view update.
     */
    TableViewModel.prototype.updateView = function () {
        this.localDispatcher.dispatch(constant.TableEvents.UpdateView);
    };
    /**
     * Create a the ServerResult for an Http response.
     */
    TableViewModel.prototype.createServerResult = function (response) {
        this.serverResultsMap[response.id] = new serverResult.ServerResult();
    };
    /**
     * Try to get the ServerResult corresponding to an Http response.
     */
    TableViewModel.prototype.getServerResult = function (response) {
        return this.serverResultsMap[response.id] || null;
    };
    TableViewModel = _tslib.__decorate([
        module_decorator.Module(),
        _tslib.__param(0, inject_decorator.Inject(configuration_service.ConfigurationService)),
        _tslib.__param(1, inject_decorator.Inject(eventDispatcher_service.EventDispatcherService)),
        _tslib.__param(2, inject_decorator.Inject(pagination_module.PaginationModule)),
        _tslib.__metadata("design:paramtypes", [configuration_service.ConfigurationService,
            eventDispatcher_service.EventDispatcherService,
            pagination_module.PaginationModule])
    ], TableViewModel);
    return TableViewModel;
}());

exports.TableViewModel = TableViewModel;
