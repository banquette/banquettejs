/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate } from '../../_virtual/_tslib.js';
import { Module } from '@banquette/dependency-injection/decorator/module.decorator';
import { EventDispatcher } from '@banquette/event/event-dispatcher';
import { ensureInteger } from '@banquette/utils-type/ensure-integer';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { isValidNumber } from '@banquette/utils-type/is-valid-number';
import { PaginationStrategy, PaginationEvents, PaginationPosition } from './constant.js';

var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
        /**
         * `true` to activate the pagination.
         */
        this.enabled = true;
        /**
         * Defines if the configuration of the module has changed until the last view update.
         */
        this.changed = true;
        /**
         * Define if the pagination is done on the server.
         * Possible values are:
         *   - `true`: the pagination is done on the server
         *   - `false`: the pagination is done locally
         *   - 'auto': the pagination is done on the server if the items are fetched remotely
         */
        this.remote = 'auto';
        /**
         * Defines where the pagination should appear.
         */
        this.position = PaginationPosition.Top;
        /**
         * `true` to show the summary.
         */
        this.summary = true;
        /**
         * Currently asked page number.
         * Only applicable if the strategy is `PaginationStrategy.Offset`.
         *
         * \!/ This is a configuration value, not the actual state the pagination is on.
         * @see `currentState` for the actual state the pagination is in.
         */
        this._page = 1;
        /**
         * Currently asked page id.
         * Only applicable if strategy is `PaginationStrategy.Id`.
         *
         * \!/ This is a configuration value, not the actual state the pagination is on.
         * @see `currentState` for the actual state the pagination is in.
         */
        this._pageId = null;
        /**
         * Currently asked number of items to show per page.
         *
         * \!/ This is a configuration value, not the actual state the pagination is on.
         * @see `currentState` for the actual state the pagination is in.
         */
        this._itemsPerPage = 20;
        /**
         * List of number of items per page proposed to the user.
         */
        this.allowedItemsPerPage = [10, 20, 30, 50, 100];
        /**
         * Should the pagination include a link to go to the first page?
         */
        this.allowFirstPage = true;
        /**
         * Should the pagination include a link to go to the last page?
         */
        this.allowLastPage = true;
        /**
         * Should the pagination show an input on which the user can type the page number they want to go?
         */
        this.allowPageInput = true;
        /**
         * Strategy to employ to get to the next batch of items.
         */
        this._strategy = PaginationStrategy.Offset;
        /**
         * The current state of the pagination (as seen by the user).
         */
        this.currentState = {
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
        this.delta = 3;
        /**
         * Defines the id to ask for the get the previous page.
         * Only required if the pagination strategy is `PaginationStrategy.Id`.
         */
        this.previousPageId = null;
        /**
         * Defines the id to ask for the get the next page.
         * Only required if the pagination strategy is `PaginationStrategy.Id`.
         */
        this.nextPageId = null;
        /**
         * Event dispatcher for communication with the outside.
         */
        this.eventDispatcher = new EventDispatcher();
    }
    Object.defineProperty(PaginationModule.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            if (this.strategy === PaginationStrategy.Offset && this._page !== value) {
                this._page = value;
                // So the UI is reactive to the page change.
                this.currentState.page = value;
                this.notifyChange();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaginationModule.prototype, "pageId", {
        get: function () {
            return this._pageId;
        },
        set: function (value) {
            if (this.strategy === PaginationStrategy.Id && this._pageId !== value) {
                this._pageId = value;
                this.notifyChange();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaginationModule.prototype, "itemsPerPage", {
        get: function () {
            return this._itemsPerPage;
        },
        set: function (value) {
            var lastValue = this._itemsPerPage;
            this._itemsPerPage = this.allowedItemsPerPage.reduce(function (selected, item) {
                if (Math.abs(item - value) < Math.abs(selected - value)) {
                    selected = item;
                }
                return selected;
            }, this.allowedItemsPerPage[0]);
            if (this._itemsPerPage !== lastValue) {
                this.notifyChange();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaginationModule.prototype, "strategy", {
        get: function () {
            return this._strategy;
        },
        set: function (value) {
            if (this._strategy !== value) {
                this._strategy = value;
                this.notifyChange();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Go to the previous page.
     */
    PaginationModule.prototype.previous = function () {
        if (!this.currentState || this.currentState.isFirstPage) {
            return;
        }
        if (this.strategy === PaginationStrategy.Offset) {
            this.goTo(this.currentState.page - 1);
        }
        else if (this.previousPageId !== null) {
            this.goTo(this.previousPageId);
        }
    };
    /**
     * Go to the next page.
     */
    PaginationModule.prototype.next = function () {
        if (!this.currentState || this.currentState.isLastPage) {
            return;
        }
        if (this.strategy === PaginationStrategy.Offset) {
            this.goTo(this.currentState.page + 1);
        }
        else if (this.nextPageId !== null) {
            this.goTo(this.nextPageId);
        }
    };
    /**
     * Go to a specific page number.
     */
    PaginationModule.prototype.goTo = function (numOrId) {
        if (this.strategy === PaginationStrategy.Offset) {
            if (isValidNumber(numOrId)) {
                this.page = numOrId;
            }
        }
        else {
            this.pageId = numOrId;
        }
    };
    /**
     * Export user controllable properties into a serializable object for saving.
     */
    PaginationModule.prototype.export = function () {
        return { page: this.page, nextPageId: this.nextPageId, previousPageId: this.previousPageId, itemsPerPage: this.itemsPerPage };
    };
    /**
     * Export user controllable properties into a serializable object for saving.
     */
    PaginationModule.prototype.import = function (save) {
        this.page = Math.min(1, ensureInteger(save.page));
        this.nextPageId = save.nextPageId;
        this.previousPageId = save.previousPageId;
        this.itemsPerPage = ensureInteger(save.itemsPerPage);
    };
    /**
     * Update the pagination internal state using external data.
     */
    PaginationModule.prototype.digestServerResponse = function (response) {
        // Update all the data the server has the last word onto.
        if (this.strategy === PaginationStrategy.Offset) {
            this._page = Math.max(1, ensureInteger(response.page));
        }
        else if (this.strategy === PaginationStrategy.Id) {
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
    };
    /**
     * Update the pagination internal state considering the input array of items is the whole list.
     * Also return a new array only containing the visible parts of these items.
     */
    PaginationModule.prototype.digestFullItemsList = function (items) {
        this.updateCurrentState(items.length);
        this.changed = false;
        return this.sliceItemsForCurrentPage(items);
    };
    /**
     * Return a new array only containing the visible parts of the items.
     */
    PaginationModule.prototype.sliceItemsForCurrentPage = function (items) {
        // The validity of the offsets calculated below is guaranteed by `updateCurrentState`.
        var offset = (this.currentState.page - 1) * this.itemsPerPage;
        return items.slice(offset, offset + this.itemsPerPage);
    };
    /**
     * Register a function that will be called when a configuration value changes in the module.
     */
    PaginationModule.prototype.onChange = function (cb) {
        return this.eventDispatcher.subscribe(PaginationEvents.Changed, cb);
    };
    /**
     * Register a function that will be called when a the internal state of the pagination changes.
     */
    PaginationModule.prototype.onInvalidate = function (cb) {
        return this.eventDispatcher.subscribe(PaginationEvents.Invalidated, cb);
    };
    /**
     * Update the state visible to the view.
     */
    PaginationModule.prototype.updateCurrentState = function (totalItems) {
        this.currentState.totalPagesCount = Math.ceil(totalItems / this.itemsPerPage);
        this.currentState.page = Math.max(1, Math.min(this.currentState.totalPagesCount, this._page));
        this.currentState.isFirstPage = this.currentState.page === 1;
        this.currentState.isLastPage = Math.min(this.currentState.page, this.currentState.totalPagesCount) === this.currentState.totalPagesCount;
        this.currentState.totalResultsCount = totalItems;
        this.currentState.totalResultsPerPage = this.itemsPerPage;
        this.currentState.firstResultCount = Math.min((this.itemsPerPage * (this.currentState.page - 1)) + 1, totalItems);
        var itemsInPage = this.itemsPerPage;
        if (this.currentState.isLastPage) {
            itemsInPage = this.itemsPerPage - (totalItems % this.itemsPerPage);
        }
        this.currentState.lastResultCount = Math.min(totalItems, this.currentState.firstResultCount + itemsInPage - 1);
        this.updateNavigationItems();
    };
    /**
     * Generate a new list of navigation items.
     */
    PaginationModule.prototype.updateNavigationItems = function () {
        this.currentState.navItems = [];
        if (this.strategy !== PaginationStrategy.Offset) {
            return;
        }
        var exceedDisplayablePages = this.currentState.totalPagesCount > (this.delta * 2) + 1;
        var start = Math.max(1, this.currentState.page - this.delta);
        var end = Math.min(this.currentState.totalPagesCount, this.currentState.page + this.delta);
        for (var i = start; i <= end && i <= this.currentState.totalPagesCount; ++i) {
            var item = {
                page: i,
                text: String(i),
                current: i === this.currentState.page,
                type: (i === this.currentState.page && this.allowPageInput && exceedDisplayablePages) ? 'input' : 'link'
            };
            this.currentState.navItems.push(item);
        }
    };
    /**
     * Trigger a `PaginationEvents.Changed` event.
     */
    PaginationModule.prototype.notifyChange = function () {
        this.changed = true;
        this.eventDispatcher.dispatch(PaginationEvents.Changed);
    };
    PaginationModule = __decorate([
        Module()
    ], PaginationModule);
    return PaginationModule;
}());

export { PaginationModule };
