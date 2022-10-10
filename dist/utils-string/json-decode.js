/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isString } from '@banquette/utils-type/is-string';

/**
 * Exception safe `JSON.parse`.
 */
function jsonDecode(input) {
    if (!isString(input)) {
        return null;
    }
    try {
        return JSON.parse(input);
    }
    catch (e) { }
    return null;
}

export { jsonDecode };
