import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";

export class StateChangedFormEvent extends FormEvent {
    public constructor(source: FormComponentInterface, public state: string, public newValue: boolean) {
        super(source);
    }
}
