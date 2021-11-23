import { isUndefined } from "@banquette/utils-type/is-undefined";
import { registerExplicitDependency } from "../utils";

/**
 * Inject a set of dependencies matching one or multiple tags.
 */
export function InjectMultiple(tag: symbol|symbol[]): Function {
    return (target: any, propertyKey: string, index?: number) => {
        registerExplicitDependency(!isUndefined(propertyKey) ? target.constructor : target, tag, undefined, propertyKey, index);
    };
}
