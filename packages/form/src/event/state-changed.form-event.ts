import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";
import { State } from "../type";

export class StateChangedFormEvent extends FormEvent {
    public constructor(source: FormComponentInterface, public state: State, public newValue: boolean) {
        super(source);
    }
}
