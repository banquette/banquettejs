import { ensureArray } from "@banquette/utils-type";
import { AbstractVirtualContainer } from "../abstract-virtual-container";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';

type ConditionCallback = (context: ValidationContextInterface) => boolean|Promise<boolean>;

/**
 * Execute all given validators if the condition verifies.
 */
export class IfValidator extends AbstractVirtualContainer {
    public constructor(private readonly condition: ConditionCallback, validators: ValidatorInterface[], groups?: string[]) {
        super(validators, true, groups);
    }

    /**
     * @inheritDoc
     */
    protected onStart(context: ValidationContextInterface): Promise<boolean>|boolean {
        return this.condition(context);
    }

    /**
     * @inheritDoc
     */
    protected onNextResult(result: ValidationResult): boolean {
        return true;
    }
}

export function If(condition: ConditionCallback, validators: ValidatorInterface|ValidatorInterface[], groups?: string|string[]): ValidatorInterface {
    return new IfValidator(condition, ensureArray(validators), ensureArray(groups));
}
