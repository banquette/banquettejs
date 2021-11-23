import { isUndefined } from "@banquette/utils-type/is-undefined";

/**
 * Gets the first defined value of the list or arg.
 * If all arguments are undefined, undefined is returned.
 */
export function getFirstOf(...args: any[]): any {
    if (args.length === 0) {
        return undefined;
    }
    for (const arg of args) {
        if (!isUndefined(arg)) {
            return arg;
        }
    }
    return args[args.length - 1];
}
