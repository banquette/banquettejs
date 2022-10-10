/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Not really an encoder but still in it's own file for consistency.
 *
 * The "ResponseTypeAutoDetect" response type is used by encoders
 * to know if they are allowed to test if the response "looks like" the format they're responsible of.
 *
 * So there is no processing to do here, creating a file is only to make the code easier to understand.
 */
var ResponseTypeAutoDetect = Symbol('auto');

exports.ResponseTypeAutoDetect = ResponseTypeAutoDetect;
