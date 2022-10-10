import { EventArg } from "@banquette/event/event-arg";
import { BeforeResponseEvent } from "@banquette/http/event/before-response.event";
import { ServerResult } from "../server-result";
import { TableEventStateInterface } from "./table-event-state.interface";
export declare class TableResponseEvent extends EventArg {
    result: ServerResult;
    state: TableEventStateInterface;
    httpEvent: BeforeResponseEvent;
    constructor(result: ServerResult, state: TableEventStateInterface, httpEvent: BeforeResponseEvent);
}
