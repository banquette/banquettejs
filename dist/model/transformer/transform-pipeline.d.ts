import { Complete } from "@banquette/utils-type/types";
import { TransformResult } from "../transform-result";
import { TransformerInterface } from "./transformer.interface";
/**
 * Abstract the asynchronous behavior of transformers
 */
export declare class TransformPipeline {
    readonly result: TransformResult;
    readonly transformableProperties: Record<string, Complete<TransformerInterface>>;
    private readonly onFinishSubscribers;
    private settled;
    private promise;
    private promiseResolve;
    private promiseReject;
    constructor(result: TransformResult, transformableProperties: Record<string, Complete<TransformerInterface>>);
    /**
     * Register two callbacks that will be invoked for each transformer:
     *
     * - onPrepare: called immediately for each property, you must invoke the transformer here and return the raw result
     * - onFinish: called when the result of the transformer have settled.
     *
     * If no transformer is asynchronous, everything here will be synchronous.
     */
    forEach(onPrepare: (property: string, transformer: Complete<TransformerInterface>) => TransformResult, onFinish: (property: string, subResult: TransformResult) => void): void;
    /**
     * Register a function to call when all transformers have settled.
     */
    onFinish(cb: () => void): () => void;
    /**
     * Make the pipeline asynchronous (if not already) and wait for a TransformResult to resolve.
     */
    private waitForResult;
    /**
     * Call all the subscribers on the "onFinish" event and settle the pipeline.
     */
    private settle;
    /**
     * Make the result fail.
     */
    private fail;
}
