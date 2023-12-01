import {EventArg} from "@banquette/event";
import {HttpResponse} from "@banquette/http";

export class RemoteModuleResponseEventArg extends EventArg {
    public constructor(public readonly response: HttpResponse<any>) {
        super();
    }
}
