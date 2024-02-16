import { EventArg } from "@banquette/event";

export class AfterPersistEventArg<P = unknown> extends EventArg {
    public constructor(public readonly payload: P) {
        super();
    }
}
