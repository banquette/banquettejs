import { EventArg } from "@banquette/event/event-arg";

export class FocusChangedEvent extends EventArg {
    public constructor(public readonly tab: any /*TabComponent*/, public readonly focused: boolean) {
        super();
    }
}
