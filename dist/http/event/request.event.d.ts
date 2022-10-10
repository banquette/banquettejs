import { EventArg } from "@banquette/event/event-arg";
import { HttpRequest } from "../http-request";
export declare class RequestEvent extends EventArg {
    request: HttpRequest;
    constructor(request: HttpRequest);
}
