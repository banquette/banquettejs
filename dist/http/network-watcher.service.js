/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __param, __metadata } from './_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { EventDispatcherService } from '@banquette/event/event-dispatcher.service';
import { proxy } from '@banquette/utils-misc/proxy';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isObject } from '@banquette/utils-type/is-object';
import { NetworkEvents } from './constants.js';
import { NetworkAvailabilityChangeEvent } from './event/network-availability-change.event.js';

var NetworkWatcherService = /** @class */ (function () {
    function NetworkWatcherService(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;
        this.isSupported = isObject(window.navigator);
        this.isOnlineAttr = this.isSupported ? window.navigator.onLine : true;
    }
    /**
     * Test if the current connection has access to the internet.
     */
    NetworkWatcherService.prototype.isOnline = function () {
        return this.isOnlineAttr;
    };
    /**
     * Start watching the network status.
     */
    NetworkWatcherService.prototype.watch = function () {
        if (this.isSupported && isNullOrUndefined(this.onConnectionLostFn)) {
            this.onConnectionRetrievedFn = proxy(this.onConnectionRetrieved, this);
            this.onConnectionLostFn = proxy(this.onConnectionLost, this);
            window.addEventListener('online', this.onConnectionRetrievedFn);
            window.addEventListener('offline', this.onConnectionLostFn);
        }
    };
    /**
     * Stop watching the network.
     */
    NetworkWatcherService.prototype.unwatch = function () {
        if (isNullOrUndefined(this.onConnectionLostFn)) {
            return;
        }
        window.addEventListener('online', this.onConnectionRetrievedFn);
        window.addEventListener('offline', this.onConnectionLostFn);
    };
    /**
     * Called when the connection is lost.
     */
    NetworkWatcherService.prototype.onConnectionLost = function () {
        this.isOnlineAttr = false;
        this.dispatchEvents();
    };
    /**
     * Called when the connection becomes available again.
     */
    NetworkWatcherService.prototype.onConnectionRetrieved = function () {
        this.isOnlineAttr = true;
        this.dispatchEvents();
    };
    /**
     * Dispatch the connectivity change events.
     */
    NetworkWatcherService.prototype.dispatchEvents = function () {
        this.eventDispatcher.dispatch(this.isOnlineAttr ? NetworkEvents.Online : NetworkEvents.Offline);
        this.eventDispatcher.dispatch(NetworkEvents.AvailabilityChange, new NetworkAvailabilityChangeEvent(this.isOnlineAttr));
    };
    NetworkWatcherService = __decorate([
        Service(),
        __param(0, Inject(EventDispatcherService)),
        __metadata("design:paramtypes", [Object])
    ], NetworkWatcherService);
    return NetworkWatcherService;
}());

export { NetworkWatcherService };
