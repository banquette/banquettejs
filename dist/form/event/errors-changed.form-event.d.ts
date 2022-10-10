import { FormComponentInterface } from "../form-component.interface";
import { FormError } from "../form-error";
import { FormEvent } from "./form-event";
export declare class ErrorsChangedFormEvent extends FormEvent {
    errors: FormError[];
    constructor(source: FormComponentInterface, errors: FormError[]);
}
