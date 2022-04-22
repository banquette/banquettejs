import { EventArg } from "@banquette/event/event-arg";
import { ResponseEvent } from "@banquette/http/event/response.event";
import { ApiRequest } from "../api-request";

export class ApiResponseEvent extends EventArg {
    public constructor(public apiRequest: ApiRequest, public httpEvent: ResponseEvent) {
        super();
    }
}
