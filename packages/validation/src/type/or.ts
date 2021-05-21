import { AbstractVirtualContainer } from "../abstract-virtual-container";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';

/**
 * Execute each of the given validators sequentially until one of them validates.
 */
export class OrValidator extends AbstractVirtualContainer {
    private lastViolationsCount: number = 0;
    private failedCount: number = 0;

    /**
     * @inheritDoc
     */
    protected onStart(context: ValidationContext): boolean {
        this.lastViolationsCount = 0;
        this.failedCount = 0;
        return true;
    }

    /**
     * @inheritDoc
     */
    protected onNextResult(result: ValidationResult): boolean {
        const shouldContinue: boolean = result.violations.length !== this.lastViolationsCount;
        this.lastViolationsCount = result.violations.length;
        if (shouldContinue) {
            ++this.failedCount;
        }
        return shouldContinue;
    }

    /**
     * @inheritDoc
     */
    protected onEnd(context: ValidationContext, index: number): void {
        if (this.failedCount < this.validators.length) {
            context.result.clearViolations(false);
        }
    }
}

export const Or = (...validators: ValidatorInterface[]): ValidatorInterface => {
    return new OrValidator(validators);
};
