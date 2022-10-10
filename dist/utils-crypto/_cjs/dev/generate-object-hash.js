/*!
 * Banquette UtilsCrypto v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureSerializable = require('@banquette/utils-type/_cjs/dev/ensure-serializable');
var md5 = require('./md5.js');

/**
 * Generates a unique hash for an object.
 */
function generateObjectHash(data) {
    return md5.md5(JSON.stringify(ensureSerializable.ensureSerializable(data)));
}

exports.generateObjectHash = generateObjectHash;
