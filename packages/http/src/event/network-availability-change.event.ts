import { EventArg } from "@banquette/event";

export class NetworkAvailabilityChangeEvent extends EventArg {
    public constructor(public available: boolean) {
        super();
    }
}
