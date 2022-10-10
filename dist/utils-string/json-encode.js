/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Exception safe `JSON.`.
 */
function jsonEncode(input) {
    try {
        return JSON.stringify(input);
    }
    catch (e) { }
    return null;
}

export { jsonEncode };
