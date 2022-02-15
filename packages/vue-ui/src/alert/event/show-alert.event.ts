import { EventArg } from "@banquette/event/event-arg";
import { AlertOptionsInterface } from "../alert-options.interface";

export class ShowAlertEvent extends EventArg {
    public constructor(public options: AlertOptionsInterface) {
        super();
    }
}
