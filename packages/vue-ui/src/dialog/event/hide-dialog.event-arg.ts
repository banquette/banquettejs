import { EventArg } from "@banquette/event/event-arg";

export class HideDialogEventArg extends EventArg {
    public constructor(public readonly id: string) {
        super();
    }
}
