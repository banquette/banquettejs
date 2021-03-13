import { ProgressCallback, RejectCallback, ResolveCallback } from "./types";

/**
 * Define the object holding the wrapper callbacks for resolve, reject and progress.
 */
export interface ExecutorCallbacksInterface<N, C> {
    resolve: ResolveCallback<C>;
    reject: RejectCallback;
    progress: ProgressCallback<N>;
}
