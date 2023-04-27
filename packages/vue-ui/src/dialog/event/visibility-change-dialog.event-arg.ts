import { EventArg } from "@banquette/event";

export class VisibilityChangeDialogEventArg extends EventArg {
    public constructor(public readonly id: string,
                       public readonly visible: boolean) {
        super();
    }
}
