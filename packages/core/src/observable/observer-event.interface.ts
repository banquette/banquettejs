import { ObserverEventType } from "./observer-event-type";

export interface ObserverEventInterface {
    type: ObserverEventType;
    value: any;
}
