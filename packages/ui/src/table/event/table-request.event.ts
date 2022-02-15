import { EventArg } from "@banquette/event/event-arg";
import { RequestEvent as HttpRequestEvent } from "@banquette/http/event/request.event";
import { ServerResult } from "../server-result";
import { TableEventStateInterface } from "./table-event-state.interface";

export class TableRequestEvent extends EventArg {
    public constructor(public result: ServerResult,
                       public state: TableEventStateInterface,
                       public httpEvent: HttpRequestEvent) {
        super();
    }
}
