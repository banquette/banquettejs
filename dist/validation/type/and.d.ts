import { AbstractVirtualContainer } from "../abstract-virtual-container";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';
/**
 * Execute each of the given validators sequentially until one of them fails.
 */
export declare class AndValidator extends AbstractVirtualContainer {
    /**
     * @inheritDoc
     */
    protected onNextResult(result: ValidationResult): boolean;
}
export declare const And: (...validators: ValidatorInterface[]) => ValidatorInterface;
