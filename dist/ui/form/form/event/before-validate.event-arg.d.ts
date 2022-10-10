import { EventArg } from "@banquette/event/event-arg";
import { FormComponentInterface } from "@banquette/form/form-component.interface";
export declare class BeforeValidateEventArg extends EventArg {
    readonly source: FormComponentInterface;
    constructor(source: FormComponentInterface);
}
