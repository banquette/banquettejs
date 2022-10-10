/*!
 * Banquette UtilsReflection v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isFunction } from '@banquette/utils-type/is-function';

/**
 * Try to get arguments names of a function at runtime.
 * @source https://stackoverflow.com/a/9924463/1110635
 */
function getFunctionArguments(func) {
    var source = isFunction(func) ? func.toString() : func;
    var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
    var ARGUMENT_NAMES = /([^\s,]+)/g;
    var str = source.replace(STRIP_COMMENTS, '');
    var result = str.slice(str.indexOf('(') + 1, str.indexOf(')')).match(ARGUMENT_NAMES);
    return result !== null ? result : [];
}

export { getFunctionArguments };
