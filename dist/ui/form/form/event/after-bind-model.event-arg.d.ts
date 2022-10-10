import { EventArg } from "@banquette/event/event-arg";
import { FormModelBinder } from "@banquette/model-form/form-model-binder";
import { AnyObject } from "@banquette/utils-type/types";
export declare class AfterBindModelEventArg extends EventArg {
    readonly model: AnyObject;
    readonly binder: FormModelBinder;
    constructor(model: AnyObject, binder: FormModelBinder);
}
