import { Constructor } from "@banquette/utils";
import { onFinallyCallback, onRejectCallback, onResolveCallback } from "./types";

export interface ObservablePromiseInterface<CompleteT> {
    /**
     * For compatibility with Promise<T>.
     */
    readonly [Symbol.toStringTag]: string;

    /**
     * Attaches callbacks for the resolution, rejection and/or progress events of the promise.
     */
    then<ResultT = CompleteT, RejectT = never>(
        onResolve?: onResolveCallback<CompleteT, ResultT>,
        onReject?: onRejectCallback<RejectT>,
        onProgress?: (progress: any /** No generic type to keep the type compatible with the official promise signature */) => void,
        progressTypes?: Array<Constructor<any>>): ObservablePromiseInterface<ResultT|RejectT>;

    /**
     * Attaches a callback that will be called if the promise rejects.
     */
    catch<RejectT = never>(onReject: onRejectCallback<RejectT>): ObservablePromiseInterface<CompleteT|RejectT>;

    /**
     * Like catch() but only calling the callback if the rejection reason is an object matching of the the type defined in parameter.
     */
    catchOf<RejectT = never>(type: Constructor<any>|Array<Constructor<any>>, onReject: onRejectCallback<RejectT>): ObservablePromiseInterface<CompleteT|RejectT>;

    /**
     * Like catchOf() but requires the type NOT to match for the callback to fire.
     */
    catchNotOf<RejectT = never>(type: Constructor<any>|Array<Constructor<any>>, onReject: onRejectCallback<RejectT>): ObservablePromiseInterface<CompleteT|RejectT>;

    /**
     * Subscribe to the promise progression events.
     */
    progress<ProgressT = any>(onProgress: (progress: ProgressT) => void, types?: Array<Constructor<any>>): ObservablePromiseInterface<CompleteT>;

    /**
     * Attaches a callback that will be called when the promise is settled, no matter if it resolves or rejects.
     */
    finally<ResultT = CompleteT, RejectT = never>(onSettle: onFinallyCallback<ResultT>): ObservablePromiseInterface<ResultT|RejectT>;

    /**
     * Forces the rejection of the promise with a CancelException.
     */
    cancel(): void;
}
