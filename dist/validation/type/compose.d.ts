import { AbstractVirtualContainer } from "../abstract-virtual-container";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';
/**
 * Execute each of the given validators sequentially.
 */
export declare class ComposeValidator extends AbstractVirtualContainer {
    constructor(validators: ValidatorInterface[]);
    /**
     * @inheritDoc
     */
    protected onNextResult(result: ValidationResult): boolean;
}
export declare const Compose: (...validators: ValidatorInterface[]) => ValidatorInterface;
