import { EventArg } from "@banquette/event/event-arg";
import { ResponseEvent as HttpResponseEvent } from "@banquette/http/event/response.event";
import { ServerResult } from "../server-result";
import { TableEventStateInterface } from "./table-event-state.interface";

export class TableResponseEvent extends EventArg {
    public constructor(public result: ServerResult,
                       public state: TableEventStateInterface,
                       public httpEvent: HttpResponseEvent) {
        super();
    }
}
