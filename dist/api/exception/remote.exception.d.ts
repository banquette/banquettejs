import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
/**
 * Generic exception thrown when something wrong happens with the http request.
 * This is normally generated automatically by the remote composable if your response matches `RemoteExceptionInterface`.
 *
 * You can also create it yourself from a http hook if you prefer.
 */
export declare class RemoteException extends SystemException {
    slug: string;
    constructor(slug: string, message: string, previous?: Exception | null | undefined, extra?: any);
}
