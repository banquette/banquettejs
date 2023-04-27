import { EventArg } from "@banquette/event";
import { ResponseEvent } from "@banquette/http";
import { ApiRequest } from "../api-request";

export class ApiResponseEvent extends EventArg {
    public constructor(public apiRequest: ApiRequest, public httpEvent: ResponseEvent) {
        super();
    }
}
