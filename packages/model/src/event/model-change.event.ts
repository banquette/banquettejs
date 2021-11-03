import { EventArg } from "@banquette/event";

export enum ModelChangeType {
    Add     = 'add',
    Update  = 'update',
    Delete  = 'delete'
}

export class ModelChangeEvent<T extends object> extends EventArg {
    public constructor(public type: ModelChangeType,
                       public target: T,
                       public path: string,
                       public oldValue: any,
                       public newValue: any) {
        super();
    }
}
