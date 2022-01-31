import { EventArg } from "@banquette/event/event-arg";
import TabComponent from "../tab/tab.component";

export class FocusChangedEvent extends EventArg {
    public constructor(public readonly tab: TabComponent, public readonly focused: boolean) {
        super();
    }
}
