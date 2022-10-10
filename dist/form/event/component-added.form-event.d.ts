import { FormComponentInterface } from "../form-component.interface";
import { FormEvent } from "./form-event";
export declare class ComponentAddedFormEvent<IdentifierTyp> extends FormEvent {
    added: FormComponentInterface;
    identifier: IdentifierTyp;
    constructor(source: FormComponentInterface, added: FormComponentInterface, identifier: IdentifierTyp);
}
