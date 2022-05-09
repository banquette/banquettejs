import { EventArg } from "@banquette/event/event-arg";
import { HttpResponse } from "@banquette/http/http-response";

export class FormAfterPersistEventArg extends EventArg {
    public constructor(public readonly response: HttpResponse<any>, public readonly payload: any) {
        super();
    }
}
