import { ValidationResult } from "@banquette/validation";
import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";

export class ValidationEndFormEvent extends FormEvent {
    public constructor(source: FormComponentInterface, public result: ValidationResult) {
        super(source);
    }
}
