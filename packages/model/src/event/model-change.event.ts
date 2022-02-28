import { EventArg } from "@banquette/event/event-arg";
import { MutationType } from "@banquette/object-observer/index";

export class ModelChangeEvent<T extends object> extends EventArg {
    public constructor(public type: MutationType,
                       public target: T,
                       public path: string,
                       public oldValue: any,
                       public newValue: any) {
        super();
    }
}
