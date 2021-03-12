import { Exception, SystemException } from "@banquette/core";
import { HttpResponse } from "../http-response";

/**
 * Exception thrown when the response returned by the server
 * doesn't match what was expected by the client.
 */
export class InvalidResponseTypeException extends SystemException {
    public constructor(public request: HttpResponse<any>, message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
