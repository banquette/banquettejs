import { EventArg } from "@banquette/event/event-arg";
export declare class ShowDialogEventArg extends EventArg {
    readonly id: string;
    readonly args: Record<string, any>;
    constructor(id: string, args: Record<string, any>);
}
