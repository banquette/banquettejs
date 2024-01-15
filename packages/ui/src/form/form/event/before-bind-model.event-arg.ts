import { EventArg } from "@banquette/event";
import { AnyObject } from "@banquette/utils-type";

export class BeforeBindModelEventArg<M = AnyObject> extends EventArg {
    public constructor(public readonly model: M) {
        super();
    }
}
