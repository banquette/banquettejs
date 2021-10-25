import { EventArg } from "@banquette/event";
import { FormComponentInterface } from "../form-component.interface";

export class FormEvent extends EventArg {
    public constructor(public source: FormComponentInterface) {
        super();
    }
}
