import { Exception, ExceptionFactory } from '@banquette/exception';
import { isPromiseLike, Writeable } from '@banquette/utils-type';
import { DispatchCallInterface } from './dispatch-call.interface';

export enum DispatchResultStatus {
    Waiting,
    Error,
    Ready,
}

export class DispatchResult<T = any> {
    public readonly promise: Promise<DispatchResult<T>> | null;
    public readonly localPromise: Promise<any> | null;
    public readonly status!: DispatchResultStatus;
    public readonly ready!: boolean;
    public readonly error!: boolean;
    public readonly errorDetail: Exception | null;
    public readonly waiting!: boolean;
    public readonly results!: T[];
    public readonly defaultPrevented: boolean = false;
    private previousPromise: Promise<any> | null;
    private promiseResolve: ((result: DispatchResult<T>) => any) | null;

    public constructor(public readonly parent: DispatchResult | null = null) {
        this.results = [];
        this.promise = null;
        this.localPromise = null;
        this.previousPromise = null;
        this.promiseResolve = null;
        this.errorDetail = null;
        this.setStatus(DispatchResultStatus.Ready); // Consider the result synchronous until a promise is set.
    }

    /**
     * Add a dispatcher call to the result, handling the asynchronous aspect if necessary.
     */
    public registerCall(call: DispatchCallInterface): void {
        if (isPromiseLike(call.result)) {
            this.delayResponse(call.result as Promise<DispatchResult>);
        } else {
            this.addResult(call.result);
        }
    }

    /**
     * Set the final result of the transform.
     */
    public addResult(result: T): boolean {
        if (this.status !== DispatchResultStatus.Error) {
            this.results.push(result);
            return true;
        }
        return false;
    }

    /**
     * Utility method that always return a promise that will resolve when the transform is done.
     */
    public async onReady(): Promise<DispatchResult<T>> {
        if (this.promise !== null) {
            await this.promise;
            return this;
        }
        return this;
    }

    /**
     * Mark the result as "default prevented", meaning the caller will know
     * that if an optional action was to be performed after this event, it should not anymore.
     */
    public preventDefault(): void {
        (this as any /* Writeable<DispatchResult<T>> */).defaultPrevented = true;
        if (this.parent) {
            this.parent.preventDefault();
        }
    }

    /**
     * Set a promise that will resolve when all the subscriber have been called and finished their processing.
     */
    public delayResponse(promise: Promise<DispatchResult>): void {
        this.setStatus(DispatchResultStatus.Waiting);
        if (this.promise === null) {
            (this as any /* Writeable<DispatchResult<T>> */).promise = new Promise<
                DispatchResult<T>
            >((resolve) => {
                this.promiseResolve = resolve;
            })
                .then(() => {
                    if (this.status === DispatchResultStatus.Waiting) {
                        this.setStatus(DispatchResultStatus.Ready);
                    }
                    this.promiseResolve = null;
                    this.cleanupAsync();
                    return this;
                })
                .catch((reason: any) => {
                    this.fail(reason);
                    return this;
                });
        }
        let localPromise: Promise<any> = (
            this.localPromise === null
                ? promise
                : Promise.all([this.localPromise, promise])
        )
            .then(() => {
                // The timeout is required so the dispatcher can execute the next subscriber if the execution is sequential.
                // Otherwise, "localPromise" will always be equal to "previousPromise".
                // If it is still equal on the next cycle, we have reached the end.
                setTimeout(() => {
                    if (
                        localPromise === this.previousPromise &&
                        this.promiseResolve
                    ) {
                        if (this.promiseResolve) {
                            this.promiseResolve(this);
                        }
                    }
                    (this as any /* Writeable<DispatchResult<T>> */).localPromise = null;
                });
                return this;
            })
            .catch((reason: any) => {
                this.fail(reason);
            });
        (this as any /* Writeable<DispatchResult<T>> */).localPromise = localPromise;
        this.previousPromise = localPromise;
    }

    /**
     * Make the result on error and store the reason.
     */
    public fail(reason: any): void {
        (this as any /* Writeable<DispatchResult<T>> */).errorDetail =
            ExceptionFactory.EnsureException(reason);
        this.results.splice(0, this.results.length);
        this.setStatus(DispatchResultStatus.Error);

        // The promise should always resolve no matter what happens.
        if (this.promiseResolve !== null) {
            this.promiseResolve(this);
        }
        this.cleanupAsync();
        if (this.parent !== null) {
            this.parent.fail(reason);
        }
    }

    /**
     * Shorthand to update the status and the corresponding flags.
     */
    public setStatus(status: DispatchResultStatus): void {
        (this as any /* Writeable<DispatchResult<T>> */).status = status;
        (this as any /* Writeable<DispatchResult<T>> */).ready =
            this.status === DispatchResultStatus.Ready;
        (this as any /* Writeable<DispatchResult<T>> */).error =
            this.status === DispatchResultStatus.Error;
        (this as any /* Writeable<DispatchResult<T>> */).waiting =
            this.status === DispatchResultStatus.Waiting;
    }

    private cleanupAsync(): void {
        this.promiseResolve = null;
        (this as any /* Writeable<DispatchResult<T>> */).promise = null;
    }
}
