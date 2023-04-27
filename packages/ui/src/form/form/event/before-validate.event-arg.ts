import { EventArg } from "@banquette/event";
import { FormComponentInterface } from "@banquette/form";

export class BeforeValidateEventArg extends EventArg {
    public constructor(public readonly source: FormComponentInterface) {
        super();
    }
}
