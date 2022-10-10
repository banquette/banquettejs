/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = require('./is-array.js');
var isObject = require('./is-object.js');
var isBlankObject = require('./is-blank-object.js');
var isBlob = require('./is-blob.js');
var isBoolean = require('./is-boolean.js');
var isCompound = require('./is-compound.js');
var isConstructor = require('./is-constructor.js');
var isDate = require('./is-date.js');
var isDefined = require('./is-defined.js');
var isElement = require('./is-element.js');
var isFile = require('./is-file.js');
var isFunction = require('./is-function.js');
var isValidNumber = require('./is-valid-number.js');
var isInteger = require('./is-integer.js');
var isIterable = require('./is-iterable.js');
var isNullOrUndefined = require('./is-null-or-undefined.js');
var isNumber = require('./is-number.js');
var isNumeric = require('./is-numeric.js');
var isString = require('./is-string.js');
var isUndefined = require('./is-undefined.js');
var isScalar = require('./is-scalar.js');
var isPojo = require('./is-pojo.js');
var isPrimitive = require('./is-primitive.js');
var isPromiseLike = require('./is-promise-like.js');
var isRegExp = require('./is-reg-exp.js');
var isSymbol = require('./is-symbol.js');
var isValidMomentDate = require('./is-valid-moment-date.js');
var isType = require('./is-type.js');
var ensureSerializable = require('./ensure-serializable.js');
var ensureArray = require('./ensure-array.js');
var ensureBoolean = require('./ensure-boolean.js');
var ensureInteger = require('./ensure-integer.js');
var ensureNumber = require('./ensure-number.js');
var ensureObject = require('./ensure-object.js');
var ensureString = require('./ensure-string.js');
var ensureScalar = require('./ensure-scalar.js');
var ensureScalarOrCompound = require('./ensure-scalar-or-compound.js');
var ensureSameType = require('./ensure-same-type.js');



exports.isArray = isArray.isArray;
exports.isObject = isObject.isObject;
exports.isObjectLiteral = isObject.isObjectLiteral;
exports.isBlankObject = isBlankObject.isBlankObject;
exports.isBlob = isBlob.isBlob;
exports.isBoolean = isBoolean.isBoolean;
exports.isCompound = isCompound.isCompound;
exports.isConstructor = isConstructor.isConstructor;
exports.isDate = isDate.isDate;
exports.isDefined = isDefined.isDefined;
exports.isElement = isElement.isElement;
exports.isFile = isFile.isFile;
exports.isFunction = isFunction.isFunction;
exports.isValidNumber = isValidNumber.isValidNumber;
exports.isInteger = isInteger.isInteger;
exports.isIterable = isIterable.isIterable;
exports.isNullOrUndefined = isNullOrUndefined.isNullOrUndefined;
exports.isNumber = isNumber.isNumber;
exports.isNumeric = isNumeric.isNumeric;
exports.isString = isString.isString;
exports.isUndefined = isUndefined.isUndefined;
exports.isScalar = isScalar.isScalar;
exports.isPojo = isPojo.isPojo;
exports.isPrimitive = isPrimitive.isPrimitive;
exports.isPromiseLike = isPromiseLike.isPromiseLike;
exports.isRegExp = isRegExp.isRegExp;
exports.isSymbol = isSymbol.isSymbol;
exports.isValidMomentDate = isValidMomentDate.isValidMomentDate;
exports.isType = isType.isType;
exports.ensureSerializable = ensureSerializable.ensureSerializable;
exports.ensureArray = ensureArray.ensureArray;
exports.ensureBoolean = ensureBoolean.ensureBoolean;
exports.ensureInteger = ensureInteger.ensureInteger;
exports.ensureNumber = ensureNumber.ensureNumber;
exports.ensureObject = ensureObject.ensureObject;
exports.ensureString = ensureString.ensureString;
exports.ensureScalar = ensureScalar.ensureScalar;
exports.ensureScalarOrCompound = ensureScalarOrCompound.ensureScalarOrCompound;
exports.ensureSameType = ensureSameType.ensureSameType;
