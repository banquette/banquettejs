import { EventArg } from "@banquette/event/event-arg";
import { AlertOptionsInterface } from "../alert-options.interface";
export declare class ShowAlertEvent extends EventArg {
    options: AlertOptionsInterface;
    constructor(options: AlertOptionsInterface);
}
