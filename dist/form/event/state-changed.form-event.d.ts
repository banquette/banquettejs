import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";
import { State } from "../type";
export declare class StateChangedFormEvent extends FormEvent {
    state: State;
    newValue: boolean;
    constructor(source: FormComponentInterface, state: State, newValue: boolean);
}
