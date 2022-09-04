import { HttpResponse } from "@banquette/http/http-response";
import { AfterPersistEventArg } from "./after-persist.event-arg";

export class AfterRemotePersistEventArg extends AfterPersistEventArg {
    public constructor(public readonly response: HttpResponse<any>, public readonly payload: any) {
        super(payload);
    }
}
