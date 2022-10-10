import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";
export declare class ComponentRemovedFormEvent<IdentifierTyp> extends FormEvent {
    removed: FormComponentInterface;
    identifier: IdentifierTyp;
    constructor(source: FormComponentInterface, removed: FormComponentInterface, identifier: IdentifierTyp);
}
