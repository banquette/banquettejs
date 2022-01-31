import { EventArg } from "@banquette/event/event-arg";
import { AlertOptionsInterface } from "../../component/alerts-stack/alert-options.interface";

export class ShowAlertEvent extends EventArg {
    public constructor(public options: AlertOptionsInterface) {
        super();
    }
}
