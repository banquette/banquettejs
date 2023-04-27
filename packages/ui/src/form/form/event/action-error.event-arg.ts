import { EventArg } from "@banquette/event";

export class ActionErrorEventArg extends EventArg {
    public constructor(public readonly error: any) {
        super();
    }
}
