import { EventArg } from "@banquette/event/event-arg";

export class FormPersistEventArg extends EventArg {
    public constructor(public readonly result: any) {
        super();
    }
}
