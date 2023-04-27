import { EventArg } from "@banquette/event";
import { FormModelBinder } from "@banquette/model-form";
import { AnyObject } from "@banquette/utils-type";

export class AfterBindModelEventArg extends EventArg {
    public constructor(public readonly model: AnyObject,
                       public readonly binder: FormModelBinder) {
        super();
    }

}
