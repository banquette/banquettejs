import { ValidationResult } from "@banquette/validation/validation-result";
import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";
export declare class ValidationEndFormEvent extends FormEvent {
    result: ValidationResult;
    constructor(source: FormComponentInterface, result: ValidationResult);
}
