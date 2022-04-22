import { EventArg } from "@banquette/event/event-arg";
import { BeforeResponseEvent } from "@banquette/http/event/before-response.event";
import { ServerResult } from "../server-result";
import { TableEventStateInterface } from "./table-event-state.interface";

export class TableResponseEvent extends EventArg {
    public constructor(public result: ServerResult,
                       public state: TableEventStateInterface,
                       public httpEvent: BeforeResponseEvent) {
        super();
    }
}
