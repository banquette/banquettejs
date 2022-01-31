import { EventArg } from "@banquette/event/event-arg";
import { SearchType } from "../constant";

export class SearchChangedEvent extends EventArg {
    public constructor(public type: SearchType, public newValue: string) {
        super();
    }
}
