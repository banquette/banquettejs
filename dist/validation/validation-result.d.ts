import { Exception } from "@banquette/exception/exception";
import { GenericCallback } from "@banquette/utils-type/types";
import { ViolationInterface } from "./violation.interface";
export declare enum ValidationResultStatus {
    Waiting = 0,
    Error = 1,
    Valid = 2,
    Invalid = 3,
    Canceled = 4
}
export declare class ValidationResult {
    readonly path: string;
    readonly parent: ValidationResult | null;
    readonly violations: ViolationInterface[];
    readonly children: ValidationResult[];
    readonly promise: Promise<ValidationResult> | null;
    readonly localPromise: Promise<any> | null;
    readonly status: ValidationResultStatus;
    readonly valid: boolean;
    readonly invalid: boolean;
    readonly error: boolean;
    readonly errorDetail: Exception | null;
    readonly waiting: boolean;
    readonly canceled: boolean;
    private cancelCallback;
    private previousPromise;
    private promiseResolve;
    private promiseReject;
    constructor(path: string, parent?: ValidationResult | null);
    /**
     * Register a child result.
     */
    addChild(context: ValidationResult): void;
    /**
     * Register a new violation into the context.
     */
    addViolation(type: string, message?: string, replacements?: Record<string, string | number>): void;
    /**
     * Flattened the violations of all results matching the mask(s) into a single level array.
     * If no mask is given, all violations found in the tree will be returned.
     */
    getViolationsArray(mask?: string | string[]): ViolationInterface[];
    /**
     * Flattened the violations of all results matching the mask(s) into an array of strings containing
     * the path and message of each violation (or their type if no message is available).
     */
    getViolationsStringsArray(mask?: string | string[]): string[];
    /**
     * Create an object containing the violations of all results matching the mask(s) indexed by violation path.
     * If no mask is given, all violations found in the tree will be returned.
     */
    getViolationsMap(mask?: string | string[]): Record<string, ViolationInterface[]>;
    /**
     * Remove all registered violations.
     */
    clearViolations(recursive?: boolean): void;
    /**
     * Get the root result.
     */
    getRoot(): ValidationResult;
    /**
     * Cancel the validation for all or a part of the validation tree.
     */
    cancel(mask?: string | string[]): void;
    /**
     * Utility method that always return a promise that will resolve when the validation is done.
     */
    onReady(): Promise<ValidationResult>;
    /**
     * Update the status and flags.
     */
    update(): void;
    /**
     * Set a promise that will resolve when the validation result is ready.
     */
    delayResponse(promise: Promise<any>, cancelCallback?: GenericCallback | null): void;
    /**
     * Make the result on error and store the reason.
     *
     * \!/ WARNING \!/
     * DO NOT confuse this method with "addViolation()".
     * This method IS NOT meant to set a validation error, its meant to say the validation could not execute properly.
     */
    fail(reason: any): void;
    /**
     * Shorthand to update the status and the corresponding flags.
     */
    private setStatus;
    private cleanupAsync;
    /**
     * Test a mask against a validation result.
     */
    private static ShouldMatch;
}
