import { EventArg } from "@banquette/event/event-arg";
import { FormComponentInterface } from "../form-component.interface";
export declare class FormEvent extends EventArg {
    source: FormComponentInterface;
    constructor(source: FormComponentInterface);
}
