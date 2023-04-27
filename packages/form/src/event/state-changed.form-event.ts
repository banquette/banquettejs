import { FormComponentInterface } from "../form-component.interface";
import { State } from "../type";
import { FormEvent } from "./form-event";

export class StateChangedFormEvent extends FormEvent {
    public constructor(source: FormComponentInterface, public state: State, public newValue: boolean) {
        super(source);
    }
}
