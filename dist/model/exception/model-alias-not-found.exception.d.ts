import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
import { ModelAlias } from "../type";
/**
 * Exception thrown when the alias of a model cannot be found.
 */
export declare class ModelAliasNotFoundException extends SystemException {
    alias: ModelAlias;
    slug: string;
    constructor(alias: ModelAlias, message: string, previous?: Exception | null, extra?: any);
}
