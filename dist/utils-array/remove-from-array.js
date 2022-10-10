/*!
 * Banquette UtilsArray v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Search the first match of an item in an array and removes it.
 */
function removeFromArray(ar, item) {
    var pos = ar.indexOf(item);
    if (pos >= 0) {
        ar.splice(pos, 1);
        return true;
    }
    return false;
}

export { removeFromArray };
