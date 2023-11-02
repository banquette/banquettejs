import { EventArg } from "@banquette/event";

export class ShowDialogEventArg extends EventArg {
    public constructor(public readonly id: string,
                       public readonly args: Record<string, any>) {
        super();
    }
}
