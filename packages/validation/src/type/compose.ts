import { AbstractVirtualContainer } from "../abstract-virtual-container";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';

/**
 * Execute each of the given validators sequentially.
 */
export class ComposeValidator extends AbstractVirtualContainer {
    public constructor(validators: ValidatorInterface[]) {
        super(validators, false);
    }

    /**
     * @inheritDoc
     */
    protected onNextResult(result: ValidationResult): boolean {
        // Compose always execute all the validators.
        return true;
    }
}

export const Compose = (...validators: ValidatorInterface[]): ValidatorInterface => {
    return new ComposeValidator(validators);
};
