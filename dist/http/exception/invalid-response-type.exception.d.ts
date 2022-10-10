import { Exception } from "@banquette/exception/exception";
import { HttpResponse } from "../http-response";
import { RequestException } from "./request.exception";
/**
 * Exception thrown when the response returned by the server
 * doesn't match what was expected by the client.
 */
export declare class InvalidResponseTypeException extends RequestException {
    request: HttpResponse<any>;
    constructor(request: HttpResponse<any>, message: string, previous?: Exception | null, extra?: any);
}
