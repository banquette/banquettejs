import { EventArg } from "@banquette/event/event-arg";

export class FormBeforePersistEventArg extends EventArg {
    public constructor(public payload: any) {
        super();
    }
}
