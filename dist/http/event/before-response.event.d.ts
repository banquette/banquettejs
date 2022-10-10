import { EventArg } from "@banquette/event/event-arg";
import { AdapterRequest } from "../adapter/adapter-request";
import { AdapterResponse } from "../adapter/adapter-response";
export declare class BeforeResponseEvent extends EventArg {
    response: AdapterResponse;
    request: AdapterRequest;
    constructor(response: AdapterResponse, request: AdapterRequest);
}
