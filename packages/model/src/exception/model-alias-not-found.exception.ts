import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
import { ModelAlias } from "../type";

/**
 * Exception thrown when the alias of a model cannot be found.
 */
export class ModelAliasNotFoundException extends SystemException {
    public slug: string = 'model-alias-not-found';

    public constructor(public alias: ModelAlias, message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
