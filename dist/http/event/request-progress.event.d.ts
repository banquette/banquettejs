import { HttpRequestProgressStatus } from "../constants";
import { HttpRequest } from "../http-request";
export declare class RequestProgressEvent {
    request: HttpRequest;
    status: HttpRequestProgressStatus;
    constructor(request: HttpRequest, status: HttpRequestProgressStatus);
}
