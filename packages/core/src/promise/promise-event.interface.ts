import { PromiseEventType } from "./promise-event-type";

export interface PromiseEventInterface {
    type: PromiseEventType;
    value: any;
}
