/*!
 * Banquette UtilsArray v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { getObjectKeys } from '@banquette/utils-object/get-object-keys';
import { isNumeric } from '@banquette/utils-type/is-numeric';

/**
 * Convert an enum into an array containing its values.
 */
function enumToArray(enumeration) {
    return getObjectKeys(enumeration)
        .filter(function (key) { return !isNumeric(key); })
        .map(function (key) { return enumeration[key]; })
        .filter(function (val) { return typeof val === 'number' || typeof val === 'string'; });
}

export { enumToArray };
