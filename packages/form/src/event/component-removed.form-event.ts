import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";

export class ComponentRemovedFormEvent<IdentifierTyp> extends FormEvent {
    public constructor(source: FormComponentInterface, public removed: FormComponentInterface, public identifier: IdentifierTyp) {
        super(source);
    }
}
