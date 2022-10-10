import { EventArg } from "@banquette/event/event-arg";
import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { ValidationResult } from "@banquette/validation/validation-result";
export declare class AfterValidateEventArg extends EventArg {
    readonly source: FormComponentInterface;
    readonly result: ValidationResult;
    constructor(source: FormComponentInterface, result: ValidationResult);
}
