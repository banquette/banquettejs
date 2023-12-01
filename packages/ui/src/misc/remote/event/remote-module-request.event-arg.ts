import {EventArg} from "@banquette/event";
import {ApiRequest} from "@banquette/api";

export class RemoteModuleRequestEventArg extends EventArg {
    public constructor(public readonly request: ApiRequest) {
        super();
    }
}
