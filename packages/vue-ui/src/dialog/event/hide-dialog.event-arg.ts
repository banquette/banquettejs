import { EventArg } from "@banquette/event";

export class HideDialogEventArg extends EventArg {
    public constructor(public readonly id: string) {
        super();
    }
}
