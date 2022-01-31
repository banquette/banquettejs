import { EventArg } from "@banquette/event/event-arg";

export class SelectionChangedEvent extends EventArg {
    public constructor(public newValue: any) {
        super();
    }
}
