import { EventArg } from "@banquette/event/event-arg";

export class FormActionErrorEventArg extends EventArg {
    public constructor(public readonly error: any) {
        super();
    }
}
