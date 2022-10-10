import { EventArg } from "@banquette/event/event-arg";
import { RequestEvent as HttpRequestEvent } from "@banquette/http/event/request.event";
import { ApiRequest } from "../api-request";
export declare class ApiRequestEvent extends EventArg {
    apiRequest: ApiRequest;
    httpEvent: HttpRequestEvent;
    constructor(apiRequest: ApiRequest, httpEvent: HttpRequestEvent);
}
