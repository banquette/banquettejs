import { EventArg } from "@banquette/event/event-arg";

export class AfterPersistEventArg extends EventArg {
    public constructor(public readonly payload: any) {
        super();
    }
}
