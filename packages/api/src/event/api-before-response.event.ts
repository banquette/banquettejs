import { EventArg } from "@banquette/event";
import { BeforeResponseEvent } from "@banquette/http";
import { ApiRequest } from "../api-request";

export class ApiBeforeResponseEvent extends EventArg {
    public constructor(public apiRequest: ApiRequest, public httpEvent: BeforeResponseEvent) {
        super();
    }
}
