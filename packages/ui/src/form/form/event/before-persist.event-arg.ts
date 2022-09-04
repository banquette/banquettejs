import { EventArg } from "@banquette/event/event-arg";

export class BeforePersistEventArg extends EventArg {
    public constructor(public payload: any) {
        super();
    }
}
