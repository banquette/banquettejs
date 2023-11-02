import { EventArg } from "@banquette/event";

export class VisibilityChangeDialogEventArg extends EventArg {
    public constructor(public readonly id: string,
                       public readonly visible: boolean,
                       public readonly result?: any) {
        super();
    }
}
