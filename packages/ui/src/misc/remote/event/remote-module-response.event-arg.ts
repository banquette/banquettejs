import {EventArg} from "@banquette/event";
import {HttpResponse} from "@banquette/http";

export class RemoteModuleResponseEventArg extends EventArg {
    public constructor(public readonly moduleId: number, public readonly response: HttpResponse<any>) {
        super();
    }
}
