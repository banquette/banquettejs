import { AbstractVirtualContainer } from "../abstract-virtual-container";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';
declare type ConditionCallback = (context: ValidationContextInterface) => boolean | Promise<boolean>;
/**
 * Execute all given validators if the condition verifies.
 */
export declare class IfValidator extends AbstractVirtualContainer {
    private readonly condition;
    constructor(condition: ConditionCallback, validators: ValidatorInterface[], groups?: string[]);
    /**
     * @inheritDoc
     */
    protected onStart(context: ValidationContextInterface): Promise<boolean> | boolean;
    /**
     * @inheritDoc
     */
    protected onNextResult(result: ValidationResult): boolean;
}
export declare function If(condition: ConditionCallback, validators: ValidatorInterface | ValidatorInterface[], groups?: string | string[]): ValidatorInterface;
export {};
