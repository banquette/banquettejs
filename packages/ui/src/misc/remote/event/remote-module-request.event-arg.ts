import {EventArg} from "@banquette/event";
import {ApiRequest} from "@banquette/api";

export class RemoteModuleRequestEventArg extends EventArg {
    public constructor(public readonly moduleId: number, public readonly request: ApiRequest) {
        super();
    }
}
