/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var constants = require('./constants.js');
var networkAvailabilityChange_event = require('./event/network-availability-change.event.js');

var NetworkWatcherService = /** @class */ (function () {
    function NetworkWatcherService(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;
        this.isSupported = isObject.isObject(window.navigator);
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
        if (this.isSupported && isNullOrUndefined.isNullOrUndefined(this.onConnectionLostFn)) {
            this.onConnectionRetrievedFn = proxy.proxy(this.onConnectionRetrieved, this);
            this.onConnectionLostFn = proxy.proxy(this.onConnectionLost, this);
            window.addEventListener('online', this.onConnectionRetrievedFn);
            window.addEventListener('offline', this.onConnectionLostFn);
        }
    };
    /**
     * Stop watching the network.
     */
    NetworkWatcherService.prototype.unwatch = function () {
        if (isNullOrUndefined.isNullOrUndefined(this.onConnectionLostFn)) {
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
        this.eventDispatcher.dispatch(this.isOnlineAttr ? constants.NetworkEvents.Online : constants.NetworkEvents.Offline);
        this.eventDispatcher.dispatch(constants.NetworkEvents.AvailabilityChange, new networkAvailabilityChange_event.NetworkAvailabilityChangeEvent(this.isOnlineAttr));
    };
    NetworkWatcherService = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(eventDispatcher_service.EventDispatcherService)),
        _tslib.__metadata("design:paramtypes", [Object])
    ], NetworkWatcherService);
    return NetworkWatcherService;
}());

exports.NetworkWatcherService = NetworkWatcherService;
