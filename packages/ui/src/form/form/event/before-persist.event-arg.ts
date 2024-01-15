import { EventArg } from "@banquette/event";

export class BeforePersistEventArg<P = unknown> extends EventArg {
    public constructor(public payload: P) {
        super();
    }
}
