import { HttpResponse } from "@banquette/http";
import { AfterPersistEventArg } from "./after-persist.event-arg";

export class AfterRemotePersistEventArg<R = unknown, P = unknown> extends AfterPersistEventArg<P> {
    public constructor(public readonly response: HttpResponse<R>, public readonly payload: P) {
        super(payload);
    }
}
