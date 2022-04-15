import { FormComponentInterface } from "../form-component.interface";
import { FormError } from "../form-error";
import { FormEvent } from "./form-event";

export class ErrorsChangedFormEvent extends FormEvent {
    public constructor(source: FormComponentInterface, public errors: FormError[]) {
        super(source);
    }
}
