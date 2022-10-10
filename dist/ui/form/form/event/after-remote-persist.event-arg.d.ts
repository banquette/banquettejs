import { HttpResponse } from "@banquette/http/http-response";
import { AfterPersistEventArg } from "./after-persist.event-arg";
export declare class AfterRemotePersistEventArg extends AfterPersistEventArg {
    readonly response: HttpResponse<any>;
    readonly payload: any;
    constructor(response: HttpResponse<any>, payload: any);
}
