import { EventArg } from "@banquette/event/event-arg";
export declare class AfterPersistEventArg extends EventArg {
    readonly payload: any;
    constructor(payload: any);
}
