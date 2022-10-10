/*!
 * Banquette UtilsArray v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Create a new array only containing values common to `array1` and `array2`.
 */
function arrayIntersect(array1, array2) {
    if (array2.length > array1.length) {
        var t = array2;
        array2 = array1;
        array1 = t;
    }
    return array1.filter(function (i) { return array2.indexOf(i) > -1; });
}

export { arrayIntersect };
