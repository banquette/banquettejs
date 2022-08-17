import { EventArg } from "@banquette/event/event-arg";
import { FormModelBinder } from "@banquette/model-form/form-model-binder";
import { AnyObject } from "@banquette/utils-type/types";

export class AfterBindModelEventArg extends EventArg {
    public constructor(public readonly model: AnyObject,
                       public readonly binder: FormModelBinder) {
        super();
    }

}
