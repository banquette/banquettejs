import { EventArg } from "@banquette/event/event-arg";
import { BeforeResponseEvent } from "@banquette/http/event/before-response.event";
import { ApiRequest } from "../api-request";

export class ApiBeforeResponseEvent extends EventArg {
    public constructor(public apiRequest: ApiRequest, public httpEvent: BeforeResponseEvent) {
        super();
    }
}
