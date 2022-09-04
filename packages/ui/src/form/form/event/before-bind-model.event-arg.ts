import { EventArg } from "@banquette/event/event-arg";
import { AnyObject } from "@banquette/utils-type/types";

export class BeforeBindModelEventArg extends EventArg {
    public constructor(public readonly model: AnyObject) {
        super();
    }
}
