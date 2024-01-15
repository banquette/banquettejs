import { EventArg } from "@banquette/event";
import { FormModelBinder } from "@banquette/model-form";
import { AnyObject } from "@banquette/utils-type";

export class AfterBindModelEventArg<M = AnyObject> extends EventArg {
    public constructor(public readonly model: M,
                       public readonly binder: FormModelBinder) {
        super();
    }

}
