/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Ensure the input is converted to a boolean.
 */
function ensureBoolean(input) {
    return input === true || input === "true" || input === "on" || (!!input && input !== '0');
}

export { ensureBoolean };
