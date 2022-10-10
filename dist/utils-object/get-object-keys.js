/*!
 * Banquette UtilsObject v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Call Object.keys() on a object while typing the output to the keys defined in the object type.
 * Only use this is your certain the object is not a subtype and will no contain any extra properties.
 */
function getObjectKeys(obj) {
    return Object.keys(obj);
}

export { getObjectKeys };
