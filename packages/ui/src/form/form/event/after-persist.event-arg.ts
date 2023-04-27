import { EventArg } from "@banquette/event";

export class AfterPersistEventArg extends EventArg {
    public constructor(public readonly payload: any) {
        super();
    }
}
