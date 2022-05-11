import { AbstractVirtualContainer } from "../abstract-virtual-container";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';

/**
 * Execute each of the given validators sequentially until one of them validates.
 */
export class OrValidator extends AbstractVirtualContainer {
    private lastViolationsCount: number = 0;
    private skippedCount: number = 0;
    private failedCount: number = 0;

    /**
     * @inheritDoc
     */
    protected onStart(context: ValidationContextInterface): boolean {
        this.lastViolationsCount = 0;
        this.failedCount = 0;
        return true;
    }

    /**
     * @inheritDoc
     */
    protected onNextResult(result: ValidationResult, index: number, skipped: boolean): boolean {
        const prev = this.validators[index - 1];
        skipped = skipped || (prev instanceof AbstractVirtualContainer && prev.skipped);
        const shouldContinue: boolean = result.violations.length !== this.lastViolationsCount || skipped;
        this.lastViolationsCount = result.violations.length;
        if (shouldContinue) {
            ++this.failedCount;
        }
        if (skipped) {
            ++this.skippedCount;
        }
        return shouldContinue;
    }

    /**
     * @inheritDoc
     */
    protected onEnd(context: ValidationContextInterface, index: number): void {
        if (this.failedCount < this.validators.length - this.skippedCount) {
            context.result.clearViolations(false);
        }
    }
}

export function Or(...validators: ValidatorInterface[]): ValidatorInterface {
    return new OrValidator(validators);
}
