import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";
export declare class BeforeValueChangeFormEvent extends FormEvent {
    oldValue: any;
    newValue: any;
    changeAccepted: boolean;
    constructor(source: FormComponentInterface, oldValue: any, newValue: any);
    /**
     * Refuse the change and keep the old value.
     */
    refuse(): void;
}
