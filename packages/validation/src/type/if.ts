import { AbstractVirtualContainer } from "../abstract-virtual-container";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';

type ConditionCallback = (context: ValidationContext) => boolean|Promise<boolean>;

/**
 * Execute all given validators if the condition verifies.
 */
export class IfValidator extends AbstractVirtualContainer {
    public constructor(private readonly condition: ConditionCallback, validators: ValidatorInterface[]) {
        super(validators);
    }

    /**
     * @inheritDoc
     */
    protected onStart(context: ValidationContext): Promise<boolean>|boolean {
        return this.condition(context);
    }

    /**
     * @inheritDoc
     */
    protected onNextResult(result: ValidationResult): boolean {
        return true;
    }
}

export function If(condition: ConditionCallback, ...validators: ValidatorInterface[]): ValidatorInterface {
    return new IfValidator(condition, validators);
}
