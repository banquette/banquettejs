import { EventDispatcherInterface } from "@banquette/event/event-dispatcher.interface";
export declare class NetworkWatcherService {
    private eventDispatcher;
    /**
     * Holds if the connection to internet is available.
     */
    private isOnlineAttr;
    /**
     * Holds if the browser supports the navigator.onLine api.
     */
    private isSupported;
    /**
     * Functions references for event binding.
     */
    private onConnectionRetrievedFn;
    private onConnectionLostFn;
    constructor(eventDispatcher: EventDispatcherInterface);
    /**
     * Test if the current connection has access to the internet.
     */
    isOnline(): boolean;
    /**
     * Start watching the network status.
     */
    watch(): void;
    /**
     * Stop watching the network.
     */
    unwatch(): void;
    /**
     * Called when the connection is lost.
     */
    private onConnectionLost;
    /**
     * Called when the connection becomes available again.
     */
    private onConnectionRetrieved;
    /**
     * Dispatch the connectivity change events.
     */
    private dispatchEvents;
}
