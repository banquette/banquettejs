import { EventArg } from "@banquette/event";
import { RequestEvent as HttpRequestEvent } from "@banquette/http";
import { ServerResult } from "../server-result";
import { TableEventStateInterface } from "./table-event-state.interface";

export class TableRequestEvent extends EventArg {
    public constructor(public result: ServerResult,
                       public state: TableEventStateInterface,
                       public httpEvent: HttpRequestEvent) {
        super();
    }
}
