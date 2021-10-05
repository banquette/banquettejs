import { Constructor } from "@banquette/utils-type";
import { onRejectCallback, onResolveCallback } from "./types";

export interface ObservablePromiseInterface<CompleteT> extends Promise<CompleteT> {
    /**
     * Attaches callbacks for the resolution, rejection and/or progress events of the promise.
     */
    then<ResultT = CompleteT, RejectT = never>(
        onResolve?: onResolveCallback<CompleteT, ResultT> | null,
        onReject?: onRejectCallback<RejectT> | null,
        onProgress?: (progress: any /** No generic type to keep the type compatible with the official promise signature */) => void,
        progressTypes?: Array<Constructor>): ObservablePromiseInterface<ResultT|RejectT>;

    /**
     * Like catch() but only calling the callback if the rejection reason is an object matching of the the type defined in parameter.
     */
    catchOf<RejectT = never>(type: Constructor|Array<Constructor>, onReject: onRejectCallback<RejectT>): ObservablePromiseInterface<CompleteT|RejectT>;

    /**
     * Like catchOf() but requires the type NOT to match for the callback to fire.
     */
    catchNotOf<RejectT = never>(type: Constructor|Array<Constructor>, onReject: onRejectCallback<RejectT>): ObservablePromiseInterface<CompleteT|RejectT>;

    /**
     * Subscribe to the promise progression events.
     */
    progress<ProgressT = any>(onProgress: (progress: ProgressT) => void, types?: Array<Constructor>): ObservablePromiseInterface<CompleteT>;

    /**
     * Forces the rejection of the promise with a CancelException.
     */
    cancel(): void;
}
