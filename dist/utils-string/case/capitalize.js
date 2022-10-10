/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Set the first character of a string to the uppercase.
 */
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

export { capitalize };
