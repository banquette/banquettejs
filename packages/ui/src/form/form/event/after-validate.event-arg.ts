import { EventArg } from "@banquette/event";
import { FormComponentInterface } from "@banquette/form";
import { ValidationResult } from "@banquette/validation";

export class AfterValidateEventArg extends EventArg {
    public constructor(public readonly source: FormComponentInterface, public readonly result: ValidationResult) {
        super();
    }
}
