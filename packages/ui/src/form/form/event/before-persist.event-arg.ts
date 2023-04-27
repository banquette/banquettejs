import { EventArg } from "@banquette/event";

export class BeforePersistEventArg extends EventArg {
    public constructor(public payload: any) {
        super();
    }
}
