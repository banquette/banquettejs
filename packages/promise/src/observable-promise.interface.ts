import { ConstructorFunction } from "@banquette/utils";
import { onFinallyCallback, onRejectCallback, onResolveCallback } from "./types";

export interface ObservablePromiseInterface<CompleteT> {
    /**
     * Attaches callbacks for the resolution, rejection and/or progress events of the promise.
     */
    then<ResultT = CompleteT, RejectT = never, ProgressT = any>(
        onResolve?: onResolveCallback<CompleteT, ResultT>,
        onReject?: onRejectCallback<RejectT>,
        onProgress?: (progress: ProgressT) => void,
        progressTypes?: Array<ConstructorFunction<any>>): ObservablePromiseInterface<ResultT|RejectT>;

    /**
     * Attaches a callback that will be called if the promise rejects.
     */
    catch<RejectT = never>(onReject?: onRejectCallback<RejectT>): ObservablePromiseInterface<CompleteT|RejectT>;

    /**
     * Subscribe to the promise progression events.
     */
    progress<ProgressT = any>(onProgress: (progress: ProgressT) => void, types?: Array<ConstructorFunction<any>>): ObservablePromiseInterface<CompleteT>;

    /**
     * Attaches a callback that will be called when the promise is settled, no matter if it resolves or rejects.
     */
    finally<ResultT = CompleteT, RejectT = never>(onSettle: onFinallyCallback<ResultT>): ObservablePromiseInterface<ResultT|RejectT>;

    /**
     * Forces the rejection of the promise with a CancelException.
     */
    cancel(): void;
}
