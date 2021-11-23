import { isFunction } from "@banquette/utils-type/is-function";

/**
 * Try to get arguments names of a function at runtime.
 * @source https://stackoverflow.com/a/9924463/1110635
 */
export function getFunctionArguments(func: Function|string) {
    const source = isFunction(func) ? func.toString() : func;
    const STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
    const ARGUMENT_NAMES = /([^\s,]+)/g;
    const str = source.replace(STRIP_COMMENTS, '');
    const result = str.slice(str.indexOf('(') + 1, str.indexOf(')')).match(ARGUMENT_NAMES);
    return result !== null ? result : [];
}
