import { ValidateOptionsInterface } from "./validate-options.interface";
import { ValidationContextInterface } from "./validation-context.interface";
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
export declare abstract class AbstractVirtualContainer implements ValidatorContainerInterface {
    validators: ValidatorInterface[];
    readonly sequential: boolean;
    groups?: string[] | undefined;
    /**
     * Will be true if all sub validators have been skipped.
     */
    readonly skipped: boolean;
    /**
     * Return the number of child validators.
     */
    get length(): number;
    constructor(validators: ValidatorInterface[], sequential?: boolean, groups?: string[] | undefined);
    /**
     * @inheritDoc
     */
    has(path: string): boolean;
    /**
     * @inheritDoc
     */
    remove(path: string): void;
    /**
     * @inheritDoc
     */
    set(path: string, validator: ValidatorInterface): void;
    /**
     * @inheritDoc
     */
    validate(value: any, maskOrContext?: ValidateOptionsInterface | ValidationContextInterface): ValidationResult;
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
    protected onStart(context: ValidationContextInterface): boolean | Promise<boolean>;
    /**
     * Called after the last validator has been executed.
     */
    protected onEnd(context: ValidationContextInterface, index: number): void;
    /**
     * Split the path while ensuring the first component is a numeric value, or throw an exception otherwise.
     */
    private static SplitPath;
}
