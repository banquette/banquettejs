import { Exception } from "@banquette/core";
import { HttpResponse } from "../http-response";
import { RequestException } from "./request.exception";

/**
 * Exception thrown when the response returned by the server
 * doesn't match what was expected by the client.
 */
export class InvalidResponseTypeException extends RequestException {
    public constructor(public request: HttpResponse<any>, message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
