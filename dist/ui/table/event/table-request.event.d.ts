import { EventArg } from "@banquette/event/event-arg";
import { RequestEvent as HttpRequestEvent } from "@banquette/http/event/request.event";
import { ServerResult } from "../server-result";
import { TableEventStateInterface } from "./table-event-state.interface";
export declare class TableRequestEvent extends EventArg {
    result: ServerResult;
    state: TableEventStateInterface;
    httpEvent: HttpRequestEvent;
    constructor(result: ServerResult, state: TableEventStateInterface, httpEvent: HttpRequestEvent);
}
