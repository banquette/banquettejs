/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Normalize an URL by removing multiple slashes, backslashes, etc.
 */
function normalizeUrl(url) {
    return url.replace(/\\/g, "/").replace(/([^:])(\/\/+)/g, "$1/");
}

export { normalizeUrl };
