import { EventArg } from "@banquette/event/event-arg";
import { ResponseEvent as HttpResponseEvent } from "@banquette/http/event/response.event";
import { ApiRequest } from "../api-request";

export class ApiResponseEvent extends EventArg {
    public constructor(public apiRequest: ApiRequest, public httpEvent: HttpResponseEvent) {
        super();
    }
}
