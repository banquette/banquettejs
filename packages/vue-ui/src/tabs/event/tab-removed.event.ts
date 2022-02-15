import { EventArg } from "@banquette/event/event-arg";

export class TabRemovedEvent extends EventArg {
    public constructor(public readonly tab: any /* TabComponent */) {
        super();
    }
}
