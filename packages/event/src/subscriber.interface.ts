import { EventArg } from "./event-arg";

export interface SubscriberInterface {
    priority: number;
    tags: symbol[];
    callback: (event: EventArg) => void;
}
