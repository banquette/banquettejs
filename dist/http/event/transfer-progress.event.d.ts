import { HttpRequestProgressStatus } from "../constants";
import { HttpRequest } from "../http-request";
import { RequestProgressEvent } from "./request-progress.event";
export declare class TransferProgressEvent extends RequestProgressEvent {
    request: HttpRequest;
    status: HttpRequestProgressStatus;
    loaded: number;
    total: number;
    percent: number;
    constructor(request: HttpRequest, status: HttpRequestProgressStatus, loaded: number, total: number, percent: number);
}
