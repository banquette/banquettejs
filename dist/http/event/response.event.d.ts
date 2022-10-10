import { EventArg } from "@banquette/event/event-arg";
import { HttpRequest } from "../http-request";
import { HttpResponse } from "../http-response";
export declare class ResponseEvent extends EventArg {
    request: HttpRequest;
    response: HttpResponse<any>;
    constructor(request: HttpRequest, response: HttpResponse<any>);
}
