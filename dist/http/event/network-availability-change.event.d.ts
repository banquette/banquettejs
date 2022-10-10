import { EventArg } from "@banquette/event/event-arg";
export declare class NetworkAvailabilityChangeEvent extends EventArg {
    available: boolean;
    constructor(available: boolean);
}
