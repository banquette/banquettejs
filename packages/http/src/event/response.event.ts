import { EventArg } from "@banquette/event/event-arg";
import { HttpRequest } from "../http-request";
import { HttpResponse } from "../http-response";

export class ResponseEvent extends EventArg {
    public constructor(public request: HttpRequest, public response: HttpResponse<any>) {
        super();
    }
}
