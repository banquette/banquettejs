/*!
 * Banquette UtilsObject v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var addToObjectIfDefined = require('./add-to-object-if-defined.js');
var compareObjects = require('./compare-objects.js');
var extend = require('./extend.js');
var filterWithMask = require('./filter-with-mask.js');
var cloneDeep = require('./clone-deep.js');
var cloneDeepPrimitive = require('./clone-deep-primitive.js');
var cloneObjectWithMask = require('./clone-object-with-mask.js');
var flattenObject = require('./flatten-object.js');
var getObjectKeys = require('./get-object-keys.js');
var getObjectValue = require('./get-object-value.js');
var getSymbolDescription = require('./get-symbol-description.js');
var hasPropertyNested = require('./has-property-nested.js');



exports.addToObjectIfDefined = addToObjectIfDefined.addToObjectIfDefined;
exports.compareObjects = compareObjects.compareObjects;
exports.extend = extend.extend;
exports.filterWithMask = filterWithMask.filterWithMask;
exports.cloneDeep = cloneDeep.cloneDeep;
exports.cloneDeepPrimitive = cloneDeepPrimitive.cloneDeepPrimitive;
exports.cloneObjectWithMask = cloneObjectWithMask.cloneObjectWithMask;
exports.flattenObject = flattenObject.flattenObject;
exports.getObjectKeys = getObjectKeys.getObjectKeys;
exports.getObjectValue = getObjectValue.getObjectValue;
exports.getObjectValueAsArray = getObjectValue.getObjectValueAsArray;
exports.getObjectValueAsBoolean = getObjectValue.getObjectValueAsBoolean;
exports.getObjectValueAsNumber = getObjectValue.getObjectValueAsNumber;
exports.getObjectValueAsObject = getObjectValue.getObjectValueAsObject;
exports.getObjectValueAsString = getObjectValue.getObjectValueAsString;
exports.getValueInObject = getObjectValue.getValueInObject;
exports.getSymbolDescription = getSymbolDescription.getSymbolDescription;
exports.hasPropertyNested = hasPropertyNested.hasPropertyNested;
