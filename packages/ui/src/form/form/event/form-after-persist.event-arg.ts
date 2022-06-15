import { EventArg } from "@banquette/event/event-arg";

export class FormAfterPersistEventArg extends EventArg {
    public constructor(public readonly payload: any) {
        super();
    }
}
