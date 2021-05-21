import { AbstractVirtualContainer } from "../abstract-virtual-container";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';

/**
 * Execute each of the given validators sequentially until one of them fails.
 */
export class AndValidator extends AbstractVirtualContainer {
    /**
     * @inheritDoc
     */
    protected onNextResult(result: ValidationResult): boolean {
        return !result.violations.length;
    }
}

export const And = (...validators: ValidatorInterface[]): ValidatorInterface => {
    return new AndValidator(validators);
};
