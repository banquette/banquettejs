import { AbstractVirtualContainer } from "../abstract-virtual-container";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';
/**
 * Execute each of the given validators sequentially until one of them validates.
 */
export declare class OrValidator extends AbstractVirtualContainer {
    private lastViolationsCount;
    private skippedCount;
    private failedCount;
    /**
     * @inheritDoc
     */
    protected onStart(context: ValidationContextInterface): boolean;
    /**
     * @inheritDoc
     */
    protected onNextResult(result: ValidationResult, index: number, skipped: boolean): boolean;
    /**
     * @inheritDoc
     */
    protected onEnd(context: ValidationContextInterface, index: number): void;
}
export declare function Or(...validators: ValidatorInterface[]): ValidatorInterface;
