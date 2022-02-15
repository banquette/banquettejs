import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
import { slugify } from "@banquette/utils-string/format/slugify";

/**
 * Generic exception thrown when something wrong happens with the http request.
 * This is normally generated automatically by the remote composable if your response matches `RemoteExceptionInterface`.
 *
 * You can also create it yourself from a http hook if you prefer.
 */
export class RemoteException extends SystemException {
    public constructor(public slug: string = 'remote', message: string, previous?: Exception|null|undefined, extra?: any) {
        super(message, previous, extra);
        this.slug = slugify(slug);
    }
}
