import { Exception, ExceptionFactory, UsageException } from "@banquette/exception";
import { MatchType, matchBest, MatchResult } from "@banquette/utils-glob";
import { proxy } from "@banquette/utils-misc";
import { replaceStringVariables } from "@banquette/utils-string";
import { ensureArray, isUndefined, GenericCallback } from "@banquette/utils-type";
import { normalizeMasks } from "./mask/normalize-mask";
import { Violation } from "./violation";
import { ViolationInterface } from "./violation.interface";

export enum ValidationResultStatus {
    Waiting,
    Error,
    Valid,
    Invalid,
    Canceled
}

interface ElaborateMatch {
    fullyMatch: boolean;
    rawResult: MatchResult;
}

export class ValidationResult {
    public readonly violations: ViolationInterface[];
    public readonly children: ValidationResult[];
    public readonly promise: Promise<ValidationResult>|null;
    public readonly localPromise: Promise<any>|null;
    public readonly status!: ValidationResultStatus;
    public readonly valid!: boolean;
    public readonly invalid!: boolean;
    public readonly error!: boolean;
    public readonly errorDetail: Exception|null;
    public readonly waiting!: boolean;
    public readonly canceled!: boolean;
    private cancelCallback: GenericCallback|null;
    private previousPromise: Promise<any>|null;
    private promiseResolve: ((result: ValidationResult) => any)|null;
    private promiseReject: ((reason: any) => any)|null;

    public constructor(public readonly path: string, public readonly parent: ValidationResult|null = null) {
        this.violations = [];
        this.children = [];
        this.promise = null;
        this.localPromise = null;
        this.errorDetail = null;
        this.cancelCallback = null;
        this.previousPromise = null;
        this.promiseResolve = null;
        this.promiseReject = null;
        this.setStatus(ValidationResultStatus.Valid); // Consider the result synchronous until a promise is set.
        if (this.parent) {
            this.parent.addChild(this);
        }
    }

    /**
     * Register a child result.
     */
    public addChild(context: ValidationResult): void {
        if (context.parent !== this) {
            throw new UsageException('Invalid child context assignation. The parent does not match the current context.');
        }
        this.children.push(context);
    }

    /**
     * Register a new violation into the context.
     */
    public addViolation(type: string, message?: string, replacements: Record<string, string|number> = {}): void {
        message = replaceStringVariables(message, replacements);
        this.violations.push(new Violation(this.path, type, message));
        if (this.status === ValidationResultStatus.Valid) {
            this.setStatus(ValidationResultStatus.Invalid);
            if (this.parent) {
                this.getRoot().update();
            }
        }
    }

    /**
     * Flattened the violations of all results matching the mask(s) into a single level array.
     * If no mask is given, all violations found in the tree will be returned.
     */
    public getViolationsArray(mask: string|string[] = []): ViolationInterface[] {
        mask = normalizeMasks(mask, this.path);
        const match: ElaborateMatch = ValidationResult.ShouldMatch(this, mask);
        let violations: ViolationInterface[] = [];
        if (match.fullyMatch) {
            violations = violations.concat(this.violations);
        }
        if (match.fullyMatch || match.rawResult.pattern === MatchType.Partial) {
            for (const child of this.children) {
                violations = violations.concat(child.getViolationsArray(mask));
            }
        }
        return violations;
    }

    /**
     * Flattened the violations of all results matching the mask(s) into an array of strings containing
     * the path and message of each violation (or their type if no message is available).
     */
    public getViolationsStringsArray(mask: string|string[] = []): string[] {
        const output: string[] = [];
        const violations = this.getViolationsArray(mask);
        for (const violation of violations) {
            output.push(`${violation.path}: ${violation.message || violation.type}`);
        }
        return output;
    }

    /**
     * Create an object containing the violations of all results matching the mask(s) indexed by violation path.
     * If no mask is given, all violations found in the tree will be returned.
     */
    public getViolationsMap(mask: string|string[] = []): Record<string, ViolationInterface[]> {
        const map: Record<string, ViolationInterface[]> = {};
        const violations: ViolationInterface[] = this.getViolationsArray(mask);
        for (const violation of violations) {
            if (isUndefined(map[violation.path])) {
                map[violation.path] = [];
            }
            map[violation.path].push(violation);
        }
        return map;
    }

    /**
     * Remove all registered violations.
     */
    public clearViolations(recursive: boolean = true): void {
        (this as any /* Writeable<ValidationResult> */).violations = [];
        if (recursive) {
            for (const child of this.children) {
                child.clearViolations(true);
            }
        }
        if (this.status === ValidationResultStatus.Invalid) {
            this.setStatus(ValidationResultStatus.Valid);
        }
    }

    /**
     * Get the root result.
     */
    public getRoot(): ValidationResult {
        if (this.parent) {
            return this.parent.getRoot();
        }
        return this;
    }

    /**
     * Cancel the validation for all or a part of the validation tree.
     */
    public cancel(mask: string|string[] = []): void {
        const match: ElaborateMatch = ValidationResult.ShouldMatch(this, mask);
        if (this.cancelCallback !== null && match.fullyMatch) {
            this.cancelCallback();
        }
        if (match.fullyMatch || match.rawResult.pattern === MatchType.Partial) {
            for (const child of this.children) {
                child.cancel(mask);
            }
        }
        this.setStatus(ValidationResultStatus.Canceled);
    }

    /**
     * Utility method that always return a promise that will resolve when the validation is done.
     */
    public async onReady(): Promise<ValidationResult> {
        if (this.promise !== null) {
            await this.promise;
            return this;
        }
        return this;
    }

    /**
     * Update the status and flags.
     */
    public update(): void {
        if (this.status === ValidationResultStatus.Waiting) {
            return ;
        }
        let valid: boolean = !this.violations.length;
        for (const child of this.children) {
            child.update();
            if (child.error) {
                this.setStatus(ValidationResultStatus.Error);
                return ;
            }
            if (!child.valid) {
                valid = false;
            }
        }
        this.setStatus(valid ? ValidationResultStatus.Valid : ValidationResultStatus.Invalid);
    }

    /**
     * Set a promise that will resolve when the validation result is ready.
     */
    public delayResponse(promise: Promise<any>, cancelCallback: GenericCallback|null = null): void {
        this.setStatus(ValidationResultStatus.Waiting);
        if (this.promise === null) {
            (this as any /* Writeable<ValidationResult> */).promise = new Promise<ValidationResult>((resolve, reject) => {
                this.promiseResolve = resolve;
                this.promiseReject = reject;
            }).then(() => {
                if (!this.canceled) {
                    this.setStatus(this.violations.length > 0 ? ValidationResultStatus.Invalid : ValidationResultStatus.Valid);
                    this.update();
                }
                this.cleanupAsync();
                return this;
            }).catch((reason: any) => {
                this.fail(reason);
                return this;
            });
        }

        if (this.parent) {
            // Compiler doesn't see that "this.promise" is set above and create a "possibly null" error, thus the "as Promise...".
            this.parent.delayResponse(this.promise as Promise<ValidationResult>);
        }
        if (this.cancelCallback === null) {
            this.cancelCallback = cancelCallback;
        } else if (cancelCallback !== null) {
            const previousCancelCallback = this.cancelCallback;
            this.cancelCallback = () => {
                previousCancelCallback();
                cancelCallback();
            };
        }
        const localPromise: Promise<any> = (this.localPromise === null ? promise as Promise<any> : Promise.all([this.localPromise, promise]))
            .then(() => {
                if (localPromise === this.previousPromise) {
                    (this.promiseResolve as Function)(this);
                }
                this.cancelCallback = null;
                (this as any /* Writeable<ValidationResult> */).localPromise = null;
                return this;
            }).catch(proxy(this.promiseReject as GenericCallback, this));

        (this as any /* Writeable<ValidationResult> */).localPromise = localPromise;
        this.previousPromise = localPromise;
    }

    /**
     * Make the result on error and store the reason.
     *
     * \!/ WARNING \!/
     * DO NOT confuse this method with "addViolation()".
     * This method IS NOT meant to set a validation error, its meant to say the validation could not execute properly.
     */
    public fail(reason: any): void {
        if (this.status !== ValidationResultStatus.Canceled) {
            (this as any /* Writeable<ValidationResult> */).errorDetail = ExceptionFactory.EnsureException(reason);
            this.setStatus(ValidationResultStatus.Error);
        }
        if (this.promiseReject !== null) {
            this.promiseReject(reason);
        }
        this.cleanupAsync();
    }

    /**
     * Shorthand to update the status and the corresponding flags.
     */
    private setStatus(status: ValidationResultStatus): void {
        (this as any /* Writeable<ValidationResult> */).status = status;
        (this as any /* Writeable<ValidationResult> */).valid = this.status === ValidationResultStatus.Valid;
        (this as any /* Writeable<ValidationResult> */).invalid = this.status === ValidationResultStatus.Invalid;
        (this as any /* Writeable<ValidationResult> */).error = this.status === ValidationResultStatus.Error;
        (this as any /* Writeable<ValidationResult> */).waiting = this.status === ValidationResultStatus.Waiting;
        (this as any /* Writeable<ValidationResult> */).canceled = this.status === ValidationResultStatus.Canceled;
    }

    private cleanupAsync(): void {
        this.cancelCallback = null;
        this.promiseResolve = null;
        this.promiseReject = null;
        this.previousPromise = null;
        (this as any /* Writeable<ValidationResult> */).promise = null;
    }

    /**
     * Test a mask against a validation result.
     */
    private static ShouldMatch(result: ValidationResult, mask: string|string[]): ElaborateMatch {
        const masks = ensureArray(mask);
        const matchResult: MatchResult = !masks.length ? {pattern: MatchType.Full, tags: MatchType.Full} : matchBest(masks, result.path);
        return {
            rawResult: matchResult,
            fullyMatch: matchResult.pattern === MatchType.Full && matchResult.tags >= MatchType.Partial
        };
    }
}
