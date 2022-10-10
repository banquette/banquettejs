/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Call Object.keys() on a object while typing the output to the keys defined in the object type.
 * Only use this is your certain the object is not a subtype and will no contain any extra properties.
 */
function getObjectKeys(obj) {
    return Object.keys(obj);
}

exports.getObjectKeys = getObjectKeys;
