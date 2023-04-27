import { EventArg } from "@banquette/event";
import { AnyObject } from "@banquette/utils-type";

export class BeforeBindModelEventArg extends EventArg {
    public constructor(public readonly model: AnyObject) {
        super();
    }
}
