import { HttpRequestProgressStatus } from "../constants";
import { HttpRequest } from "../http-request";

export class RequestProgressEvent {
    public constructor(public request: HttpRequest, public status: HttpRequestProgressStatus) {

    }
}
