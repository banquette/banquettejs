import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";

export class ValueChangedFormEvent extends FormEvent {
    public constructor(source: FormComponentInterface, public oldValue: any, public newValue: any) {
        super(source);
    }
}
