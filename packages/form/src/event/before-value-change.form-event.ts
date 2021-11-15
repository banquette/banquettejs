import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";

export class BeforeValueChangeFormEvent extends FormEvent {
    public changeAccepted: boolean = true;

    public constructor(source: FormComponentInterface, public oldValue: any, public newValue: any) {
        super(source);
    }

    /**
     * Refuse the change and keep the old value.
     */
    public refuse(): void {
        this.changeAccepted = false;
    }
}
