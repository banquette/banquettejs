import { EventArg } from "@banquette/event/event-arg";
import { FormComponentInterface } from "@banquette/form/form-component.interface";

export class BeforeValidateEventArg extends EventArg {
    public constructor(public readonly source: FormComponentInterface) {
        super();
    }
}
