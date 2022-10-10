import { EventArg } from "@banquette/event/event-arg";
export declare class ActionErrorEventArg extends EventArg {
    readonly error: any;
    constructor(error: any);
}
