import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";

export class ComponentAddedFormEvent<IdentifierTyp> extends FormEvent {
    public constructor(source: FormComponentInterface, public added: FormComponentInterface, public identifier: IdentifierTyp) {
        super(source);
    }
}
