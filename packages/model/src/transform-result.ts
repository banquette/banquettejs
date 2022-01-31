import { Exception } from "@banquette/exception/exception";
import { ExceptionFactory } from "@banquette/exception/exception.factory";
import { proxy } from "@banquette/utils-misc/proxy";
import { Writeable, Modify, GenericCallback } from "@banquette/utils-type/types";

export enum TransformResultStatus {
    Waiting,
    Error,
    Ready
}

export class TransformResult<T = any> {
    public readonly promise: Promise<TransformResult<T>>|null;
    public readonly localPromise: Promise<any>|null;
    public readonly status!: TransformResultStatus;
    public readonly ready!: boolean;
    public readonly error!: boolean;
    public readonly errorDetail: Exception|null;
    public readonly waiting!: boolean;
    public readonly result!: T;
    private previousPromise: Promise<any>|null;
    private promiseResolve: ((result: TransformResult<T>) => any)|null;
    private promiseReject: ((reason: any) => any)|null;

    public constructor(public readonly parent: TransformResult|null = null) {
        this.promise = null;
        this.localPromise = null;
        this.previousPromise = null;
        this.promiseResolve = null;
        this.promiseReject = null;
        this.errorDetail = null;
        this.setStatus(TransformResultStatus.Ready); // Consider the result synchronous until a promise is set.
    }

    /**
     * Set the final result of the transform.
     */
    public setResult(result: T): boolean {
        if (this.status !== TransformResultStatus.Error) {
            (this as Writeable<TransformResult<T>>).result = result;
            return true;
        }
        return false;
    }

    /**
     * Set a promise that will resolve when the transform result is ready.
     */
    public delayResponse(promise: Promise<any>): void {
        if (this.promise === null) {
            (this as Writeable<TransformResult<T>>).promise = new Promise<TransformResult<T>>((resolve, reject) => {
                this.promiseResolve = resolve;
                this.promiseReject = reject;
            }).then(() => {
                this.setStatus(TransformResultStatus.Ready);
                this.promiseResolve = this.promiseReject = null;
                this.cleanupAsync();
                return this;
            });
            (this as Modify<TransformResult, {promise: Promise<TransformResult<T>>}>).promise.catch(proxy(this.fail, this));
        }
        const localPromise: Promise<any> = this.localPromise === null ? promise as Promise<any> : Promise.all([this.localPromise, promise]);
        (this as Writeable<TransformResult<T>>).localPromise = localPromise;
        this.previousPromise = localPromise;

        if (this.parent) {
            // Compiler doesn't see that "this.promise" is set above and create a "possibly null" error, thus the "as Promise...".
            this.parent.delayResponse(this.promise as Promise<TransformResult<T>>);
        }
        this.setStatus(TransformResultStatus.Waiting);
        localPromise.then(() => {
            if (localPromise === this.previousPromise) {
                (this.promiseResolve as Function)(this);
            }
            (this as Writeable<TransformResult<T>>).localPromise = null;
        }).catch(proxy(this.promiseReject as GenericCallback, this));
    }

    /**
     * Utility method that always return a promise that will resolve when the transform is done.
     */
    public async onReady(): Promise<TransformResult<T>> {
        if (this.promise !== null) {
            await this.promise;
            return this;
        }
        return this;
    }

    /**
     * Make the result on error and store the reason.
     */
    public fail(reason: any): void {
        (this as Writeable<TransformResult<T>>).errorDetail = ExceptionFactory.EnsureException(reason);
        (this as Writeable<TransformResult>).result = undefined;
        this.setStatus(TransformResultStatus.Error);
        if (this.promiseReject !== null) {
            this.promiseReject(reason);
        }
        this.cleanupAsync();
        if (this.parent !== null) {
            this.parent.fail(reason);
        }
    }

    /**
     * Shorthand to update the status and the corresponding flags.
     */
    private setStatus(status: TransformResultStatus): void {
        (this as Writeable<TransformResult<T>>).status = status;
        (this as Writeable<TransformResult<T>>).ready = this.status === TransformResultStatus.Ready;
        (this as Writeable<TransformResult<T>>).error = this.status === TransformResultStatus.Error;
        (this as Writeable<TransformResult<T>>).waiting = this.status === TransformResultStatus.Waiting;
    }

    private cleanupAsync(): void {
        this.promiseResolve = null;
        this.promiseReject = null;
        (this as Writeable<TransformResult<T>>).promise = null;
    }
}
