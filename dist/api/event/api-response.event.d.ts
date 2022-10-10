import { EventArg } from "@banquette/event/event-arg";
import { ResponseEvent } from "@banquette/http/event/response.event";
import { ApiRequest } from "../api-request";
export declare class ApiResponseEvent extends EventArg {
    apiRequest: ApiRequest;
    httpEvent: ResponseEvent;
    constructor(apiRequest: ApiRequest, httpEvent: ResponseEvent);
}
