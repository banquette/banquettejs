import { EventArg } from "@banquette/event";
import { RequestEvent as HttpRequestEvent } from "@banquette/http";
import { ApiRequest } from "../api-request";

export class ApiRequestEvent extends EventArg {
    public constructor(public apiRequest: ApiRequest, public httpEvent: HttpRequestEvent) {
        super();
    }
}
