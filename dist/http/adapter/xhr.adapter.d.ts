import { ObservablePromise } from "@banquette/promise/observable-promise";
import { NetworkWatcherService } from "../network-watcher.service";
import { AdapterRequest } from "./adapter-request";
import { AdapterResponse } from "./adapter-response";
import { AdapterInterface } from "./adapter.interface";
export declare class XhrAdapter implements AdapterInterface {
    private networkWatcher;
    private xhr;
    private request;
    private promiseResolve;
    private promiseReject;
    private promiseProgress;
    private requestProgressStatus;
    private canceled;
    constructor(networkWatcher: NetworkWatcherService);
    /**
     * @inheritDoc
     */
    execute(request: AdapterRequest): ObservablePromise<AdapterResponse>;
    /**
     * @inheritDoc
     */
    cancel(): void;
    /**
     * Called when the transaction has completed with success.
     * The server could still be on error, this only means the network request succeeded.
     */
    private onComplete;
    /**
     * Called when and error occurred at the network level (the transaction failed).
     */
    private onError;
    /**
     * Called when and error occurred at the network level (the transaction failed).
     */
    private onProgress;
    /**
     * Called when the transaction is aborted.
     */
    private onAbort;
    /**
     * Called when the transaction duration reached the timeout.
     */
    private onTimeout;
    /**
     * Convert the raw string of headers returned by the server into a map.
     */
    private convertHeadersStringToObject;
    /**
     * Notify the promise of a status change.
     */
    private updateProgressStatus;
}
