import { EventArg } from "@banquette/event/event-arg";

export class NetworkAvailabilityChangeEvent extends EventArg {
    public constructor(public available: boolean) {
        super();
    }
}
