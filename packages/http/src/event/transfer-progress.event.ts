import { HttpRequestProgressStatus } from "../constants";
import { HttpRequest } from "../http-request";
import { RequestProgressEvent } from "./request-progress.event";

export class TransferProgressEvent extends RequestProgressEvent {
    public constructor(public request: HttpRequest,
                       public status: HttpRequestProgressStatus,
                       public loaded: number,
                       public total: number,
                       public percent: number) {
        super(request, status);
    }
}
