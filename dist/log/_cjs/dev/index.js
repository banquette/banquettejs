/*!
 * Banquette Log v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('./config.js');
var constants = require('./constants.js');
var logger_service = require('./logger.service.js');



exports.LogConfigurationSymbol = config.LogConfigurationSymbol;
Object.defineProperty(exports, 'LogLevel', {
	enumerable: true,
	get: function () { return constants.LogLevel; }
});
exports.LoggerService = logger_service.LoggerService;
