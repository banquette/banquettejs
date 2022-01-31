import { EventArg } from "@banquette/event/event-arg";
import TabComponent from "../tab/tab.component";

export class TabRemovedEvent extends EventArg {
    public constructor(public readonly tab: TabComponent) {
        super();
    }
}
