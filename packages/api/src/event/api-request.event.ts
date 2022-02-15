import { EventArg } from "@banquette/event/event-arg";
import { RequestEvent as HttpRequestEvent } from "@banquette/http/event/request.event";
import { ApiRequest } from "../api-request";

export class ApiRequestEvent extends EventArg {
    public constructor(public apiRequest: ApiRequest, public httpEvent: HttpRequestEvent) {
        super();
    }
}
