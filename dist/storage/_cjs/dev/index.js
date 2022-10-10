/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var abstract_adapter = require('./adapter/abstract.adapter.js');
var cookies_adapter = require('./adapter/cookies.adapter.js');
var localStorage_adapter = require('./adapter/local-storage.adapter.js');
var noAdapterAvailable_exception = require('./exception/no-adapter-available.exception.js');
var storageClear_event = require('./event/storage-clear.event.js');
var storageKeyChange_event = require('./event/storage-key-change.event.js');
var config = require('./config.js');
var constant = require('./constant.js');
var constants = require('./constants.js');
var storage_service = require('./storage.service.js');



exports.AbstractAdapter = abstract_adapter.AbstractAdapter;
exports.CookiesAdapter = cookies_adapter.CookiesAdapter;
exports.LocalStorageAdapter = localStorage_adapter.LocalStorageAdapter;
exports.NoAdapterAvailableException = noAdapterAvailable_exception.NoAdapterAvailableException;
exports.StorageClearEvent = storageClear_event.StorageClearEvent;
exports.StorageKeyChangeEvent = storageKeyChange_event.StorageKeyChangeEvent;
exports.StorageConfigurationSymbol = config.StorageConfigurationSymbol;
exports.StorageAdapterTag = constant.StorageAdapterTag;
exports.StorageEvents = constant.StorageEvents;
exports.Constants = constants.Constants;
exports.StorageService = storage_service.StorageService;
