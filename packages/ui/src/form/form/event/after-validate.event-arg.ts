import { EventArg } from "@banquette/event/event-arg";
import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { ValidationResult } from "@banquette/validation/validation-result";

export class AfterValidateEventArg extends EventArg {
    public constructor(public readonly source: FormComponentInterface, public readonly result: ValidationResult) {
        super();
    }
}
