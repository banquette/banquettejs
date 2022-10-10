import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";
export declare class ValueChangedFormEvent extends FormEvent {
    oldValue: any;
    newValue: any;
    constructor(source: FormComponentInterface, oldValue: any, newValue: any);
}
