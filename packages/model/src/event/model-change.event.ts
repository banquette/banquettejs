import { EventArg } from "@banquette/event/event-arg";

export enum ModelChangeType {
    Insert  = 'insert',
    Update  = 'update',
    Delete  = 'delete',
    Shuffle = 'shuffle',
    Reverse = 'reverse',
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
