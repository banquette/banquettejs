import { Exception, SystemException } from "@banquette/exception";
import { ModelAlias } from "../type";

/**
 * Exception thrown when the alias of a model cannot be found.
 */
export class ModelAliasNotFoundException extends SystemException {
    public constructor(public alias: ModelAlias, message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}