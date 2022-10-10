import { EventArg } from "@banquette/event/event-arg";
import { AnyObject } from "@banquette/utils-type/types";
export declare class BeforeBindModelEventArg extends EventArg {
    readonly model: AnyObject;
    constructor(model: AnyObject);
}
