import { Injector, isNullOrUndefined, isObject, proxy } from "@banquette/core";
import { EventDispatcherInterface, EventDispatcherServiceSymbol } from "@banquette/event";
import { inject, injectable } from "inversify";
import { Events } from "./constants";
import { NetworkAvailabilityChangeEvent } from "./event/network-availability-change.event";

@injectable()
export class NetworkWatcherService {
    /**
     * Holds if the connection to internet is available.
     */
    private isOnlineAttr: boolean;

    /**
     * Holds if the browser supports the navigator.onLine api.
     */
    private isSupported: boolean;

    /**
     * Functions references for event binding.
     */
    private onConnectionRetrievedFn!: () => void;
    private onConnectionLostFn!: () => void;

    public constructor(@inject(EventDispatcherServiceSymbol) private eventDispatcher: EventDispatcherInterface) {
        this.isSupported = isObject(window.navigator);
        this.isOnlineAttr = this.isSupported ? window.navigator.onLine : true;
    }

    /**
     * Test if the current connection has access to the internet.
     */
    public isOnline(): boolean {
        return this.isOnlineAttr;
    }

    /**
     * Start watching the network status.
     */
    public watch(): void {
        if (isNullOrUndefined(this.onConnectionLostFn)) {
            this.onConnectionRetrievedFn = proxy(this.onConnectionRetrieved, this);
            this.onConnectionLostFn = proxy(this.onConnectionLost, this);
            window.addEventListener('online', this.onConnectionRetrievedFn);
            window.addEventListener('offline', this.onConnectionLostFn);
        }
    }

    /**
     * Stop watching the network.
     */
    public unwatch(): void {
        if (isNullOrUndefined(this.onConnectionLostFn)) {
            return ;
        }
        window.addEventListener('online',  this.onConnectionRetrievedFn);
        window.addEventListener('offline',  this.onConnectionLostFn);
    }

    /**
     * Called when the connection is lost.
     */
    private onConnectionLost(): void {
        this.isOnlineAttr = false;
        this.dispatchEvents();
    }

    /**
     * Called when the connection becomes available again.
     */
    private onConnectionRetrieved(): void {
        this.isOnlineAttr = true;
        this.dispatchEvents();
    }

    /**
     * Dispatch the connectivity change events.
     */
    private dispatchEvents(): void {
        this.eventDispatcher.dispatch(this.isOnlineAttr ? Events.NetworkOnline : Events.NetworkOffline);
        this.eventDispatcher.dispatch(Events.NetworkAvailabilityChange, new NetworkAvailabilityChangeEvent(this.isOnlineAttr));
    }
}
export const NetworkWatcherServiceSymbol = Symbol("NetworkWatcherService");
Injector.RegisterService<NetworkWatcherService>(NetworkWatcherServiceSymbol, NetworkWatcherService);
