import { EventArg } from "@banquette/event";
import { BeforeResponseEvent } from "@banquette/http";
import { ServerResult } from "../server-result";
import { TableEventStateInterface } from "./table-event-state.interface";

export class TableResponseEvent extends EventArg {
    public constructor(public result: ServerResult,
                       public state: TableEventStateInterface,
                       public httpEvent: BeforeResponseEvent) {
        super();
    }
}
