import { UsageException } from "@banquette/exception";
import { isNumeric } from "@banquette/utils-type/is-numeric";
import { isPromiseLike } from "@banquette/utils-type/is-promise-like";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Writeable } from "@banquette/utils-type/types";
import { Valid } from "./type/valid";
import { isValidatorContainer, splitPath } from "./utils";
import { ValidationContext } from "./validation-context";
import { ValidationResult } from "./validation-result";
import { ValidatorContainerInterface } from "./validator-container.interface";
import { ValidatorInterface } from "./validator.interface";

/**
 * A virtual container is a type of container that will not create sub contexts when validating.
 * So each of its validators will report to the same ValidationResult instance and will have the same validation path.
 *
 * Virtual containers are: And, Or, If and Compose.
 * "Real" containers are: Container and Foreach.
 */
export abstract class AbstractVirtualContainer implements ValidatorContainerInterface {
    /**
     * Will be true if all sub validators have been skipped.
     */
    public readonly skipped: boolean = false;

    public constructor(public validators: ValidatorInterface[], public readonly sequential: boolean = true) {
    }

    /**
     * @inheritDoc
     */
    public has(path: string): boolean {
        const parts = AbstractVirtualContainer.SplitPath(path);
        const idx: number = parts[0];
        if (idx < this.validators.length) {
            if (parts.length === 1) {
                return !isUndefined(this.validators[idx]);
            }
            const current = this.validators[idx];
            if (!isValidatorContainer(current)) {
                throw new UsageException(`A ValidatorContainerInterface is expected for the "${idx}" component of "${path}".`);
            }
            return current.has(parts.slice(1).join('/'));
        }
        return false;
    }

    /**
     * @inheritDoc
     */
    public remove(path: string): void {
        const parts = AbstractVirtualContainer.SplitPath(path);
        const idx: number = parts[0];
        if (idx < this.validators.length) {
            const current = this.validators[idx];
            if (!isValidatorContainer(current)) {
                throw new UsageException(`A ValidatorContainerInterface is expected for the "${idx}" component of "${path}".`);
            }
            current.remove(parts.slice(1).join('/'));
            return ;
        }
        if (parts.length > 1) {
            throw new UsageException(`Missing part "${idx}" of the path "${path}.`);
        }
    }

    /**
     * @inheritDoc
     */
    public set(path: string, validator: ValidatorInterface): void {
        const parts = AbstractVirtualContainer.SplitPath(path);
        const idx: number = parts[0];
        if (idx < this.validators.length) {
            if (parts.length === 1) {
                this.validators[idx] = validator;
                return ;
            }
            const current = this.validators[idx];
            if (!isValidatorContainer(current)) {
                throw new UsageException(`A ValidatorContainerInterface is expected for the "${idx}" component of "${path}".`);
            }
            current.set(parts.slice(1).join('/'), validator);
            return ;
        }
        if (parts.length > 1) {
            throw new UsageException(`Missing part "${idx}" of the path "${path}.`);
        }
        // Creates intermediary validators so we can set the validator at the required index.
        for (let i = this.validators.length; i < idx; ++i) {
            this.validators.push(Valid());
        }
        this.validators.push(validator);
    }

    /**
     * @inheritDoc
     */
    public validate(value: any, maskOrContext?: ValidationContext|string|string[]): ValidationResult {
        let index = -1;
        let wrappingPromise: Promise<any>|null = null;
        let wrappingPromiseResolve: any = null;
        let wrappingPromiseReject: any = null;
        let lastLocalPromise: any = null;
        let skipped: boolean = false;

        (this as Writeable<AbstractVirtualContainer>).skipped = true;
        const context = ValidationContext.EnsureValidationContext(value, maskOrContext);
        const getOrCreateWrapper = () => {
            // Because we don't know how many validators will be asynchronous, we have to wrap the promise
            // to prevent the main promise of the ValidationResult to resolve when the promise of
            // the current validator resolves.
            if (wrappingPromise === null) {
                wrappingPromise = new Promise((resolve, reject) => {
                    wrappingPromiseResolve = resolve;
                    wrappingPromiseReject = reject;
                });
            }
            return wrappingPromise;
        };
        const validateNext = () => {
            if ((++index && !this.onNextResult(context.result, index, skipped)) || this.validators.length <= index) {
                if (wrappingPromise !== null) {
                    wrappingPromiseResolve();
                }
                this.onEnd(context, index);
                return ;
            }
            skipped = true;
            if (context.shouldValidate(this.validators[index])) {
                this.validators[index].validate(value, context);
                (this as Writeable<AbstractVirtualContainer>).skipped = false;
                skipped = false;
            }
            if (context.result.localPromise !== null && context.result.localPromise !== lastLocalPromise) {
                wrappingPromise = getOrCreateWrapper();
                if (this.sequential) {
                    context.result.localPromise.then(validateNext).catch(wrappingPromiseReject);
                }
                context.result.delayResponse(wrappingPromise);
                lastLocalPromise = context.result.localPromise;
                if (!this.sequential) {
                    validateNext();
                }
            } else {
                validateNext();
            }
        };
        const shouldExecute = this.onStart(context);
        if (isType<Promise<boolean>>(shouldExecute, isPromiseLike)) {
            wrappingPromise = getOrCreateWrapper();
            context.result.delayResponse(shouldExecute);
            shouldExecute.then((result: boolean) => {
                if (result) {
                    validateNext();
                } else {
                    wrappingPromiseResolve();
                }
            }).catch(wrappingPromiseReject);
            context.result.delayResponse(wrappingPromise);
        } else if (shouldExecute) {
            validateNext();
        }
        return context.result;
    }

    /**
     * Method call after each validator have finished its execution.
     * If a validator is asynchronous, "onNextResult" will only be called after the promise is resolved.
     *
     * @return boolean true to continue the iteration and validate the next validator, false to stop and return the result.
     */
    protected abstract onNextResult(result: ValidationResult, index: number, skipped: boolean): boolean;

    /**
     * Called before the first validator is executed.
     *
     * @returns boolean false to prevent the validator from executing.
     */
    protected onStart(context: ValidationContext): boolean|Promise<boolean> {
        return true;
    }

    /**
     * Called after the last validator has been executed.
     */
    protected onEnd(context: ValidationContext, index: number): void {
        // Override me.
    }

    /**
     * Split the path while ensuring the first component is a numeric value, or throw an exception otherwise.
     */
    private static SplitPath(path: string): [number, ...Array<string>] {
        const parts: any = splitPath(path);
        if (isNumeric(parts[0])) {
            parts[0] = parseInt(parts[0] as string, 10);
            return parts;
        }
        throw new UsageException(`Invalid path component "${parts[0]}" in "${path}". An integer is expected.`);
    }
}
