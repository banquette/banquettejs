import { EventArg } from "@banquette/event/event-arg";
import { BeforeResponseEvent } from "@banquette/http/event/before-response.event";
import { ApiRequest } from "../api-request";
export declare class ApiBeforeResponseEvent extends EventArg {
    apiRequest: ApiRequest;
    httpEvent: BeforeResponseEvent;
    constructor(apiRequest: ApiRequest, httpEvent: BeforeResponseEvent);
}
