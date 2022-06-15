import { HttpResponse } from "@banquette/http/http-response";
import { FormAfterPersistEventArg } from "./form-after-persist.event-arg";

export class FormAfterRemotePersistEventArg extends FormAfterPersistEventArg {
    public constructor(public readonly response: HttpResponse<any>, public readonly payload: any) {
        super(payload);
    }
}
