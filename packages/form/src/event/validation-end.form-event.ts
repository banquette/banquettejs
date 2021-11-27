import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";
import { ValidationResult } from "@banquette/validation";

export class ValidationEndFormEvent extends FormEvent {
    public constructor(source: FormComponentInterface, public result: ValidationResult) {
        super(source);
    }
}