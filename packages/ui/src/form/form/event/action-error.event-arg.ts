import { EventArg } from "@banquette/event/event-arg";

export class ActionErrorEventArg extends EventArg {
    public constructor(public readonly error: any) {
        super();
    }
}
