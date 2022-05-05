import { noop } from "@banquette/utils-misc/noop";
import { proxy } from "@banquette/utils-misc/proxy";
import { Complete, Modify } from "@banquette/utils-type/types";
import { TransformResult } from "../transform-result";
import { TransformerInterface } from "./transformer.interface";

type AsyncTransformResult = Modify<TransformResult, {promise: Promise<TransformResult>}>;

/**
 * Abstract the asynchronous behavior of transformers
 */
export class TransformPipeline {
    private readonly onFinishSubscribers: Array<() => void>;
    private settled: boolean;
    private promise: Promise<void>|null;
    private promiseResolve: (() => any)|null;
    private promiseReject: ((reason: any) => void)|null;

    public constructor(public readonly result: TransformResult,
                       public readonly transformableProperties: Record<string, Complete<TransformerInterface>>) {
        this.onFinishSubscribers = [];
        this.settled = false;
        this.promise = null;
        this.promiseResolve = null;
        this.promiseReject = null;
    }

    /**
     * Register two callbacks that will be invoked for each transformer:
     *
     * - onPrepare: called immediately for each property, you must invoke the transformer here and return the raw result
     * - onFinish: called when the result of the transformer have settled.
     *
     * If no transformer is asynchronous, everything here will be synchronous.
     */
    public forEach(onPrepare: (property: string, transformer: Complete<TransformerInterface>) => TransformResult,
                   onFinish: (property: string, subResult: TransformResult) => void): void {
        try {
            const properties: string[] = Object.keys(this.transformableProperties);
            let pending: number = properties.length;
            for (const property of properties) {
                const transformer = this.transformableProperties[property];
                const subResult: TransformResult = onPrepare(property, transformer);
                const respond = ((_p: string, _sr: TransformResult) => {
                    return () => {
                        if (_sr.error) {
                            this.fail(_sr.errorDetail);
                            return ;
                        }
                        onFinish(_p, _sr);
                        if (!(--pending)) {
                            this.settle();
                        }
                    };
                })(property, subResult);

                if (subResult.promise !== null) {
                    this.waitForResult(subResult as AsyncTransformResult).then(respond);
                } else {
                    respond();
                }
                if (this.settled) {
                    break ;
                }
            }
            if (!properties.length) {
                this.settle();
            }
        } catch (e) {
            this.fail(e);
        }
    }

    /**
     * Register a function to call when all transformers have settled.
     */
    public onFinish(cb: () => void): () => void {
        this.onFinishSubscribers.push(cb);
        if (this.settled) {
            cb();
        }
        return () => {
            for (let i = 0; i < this.onFinishSubscribers.length; ++i) {
                if (this.onFinishSubscribers[i] === cb) {
                    this.onFinishSubscribers.splice(i, 1);
                    break ;
                }
            }
        };
    }

    /**
     * Make the pipeline asynchronous (if not already) and wait for a TransformResult to resolve.
     */
    private waitForResult(result: AsyncTransformResult): Promise<void> {
        if (this.promise === null) {
            this.promise = new Promise<void>((resolve, reject) => {
                this.promiseResolve = resolve;
                this.promiseReject = reject;
            });
            this.result.delayResponse(this.promise);
        }
        return result.promise.then(noop).catch(proxy(this.fail, this));
    }

    /**
     * Call all the subscribers on the "onFinish" event and settle the pipeline.
     */
    private settle(): void {
        if (this.settled) {
            return ;
        }
        this.settled = true;
        if (this.promiseResolve !== null) {
            this.promiseResolve();
        }
        for (const subscriber of this.onFinishSubscribers) {
            subscriber();
        }
    }

    /**
     * Make the result fail.
     */
    private fail(reason: any): void {
        if (this.promiseReject !== null) {
           this.promiseReject(reason);
        } else {
           this.result.fail(reason);
        }
        this.settled = true;
    }
}
