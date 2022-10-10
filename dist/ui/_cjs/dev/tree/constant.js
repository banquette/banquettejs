/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.NodeRemoteFetchStatus = void 0;
(function (NodeRemoteFetchStatus) {
    /**
     * No request is running.
     */
    NodeRemoteFetchStatus["Idle"] = "idle";
    /**
     * A remote fetch is running.
     */
    NodeRemoteFetchStatus["Pending"] = "pending";
    /**
     * A remote fetch has failed.
     */
    NodeRemoteFetchStatus["Failed"] = "failed";
})(exports.NodeRemoteFetchStatus || (exports.NodeRemoteFetchStatus = {}));
/**
 * Events emitted through the event dispatcher.
 */
var HeadlessTreeViewModelEvents = {
    NodeRemoved: Symbol('node-removed')
};

exports.HeadlessTreeViewModelEvents = HeadlessTreeViewModelEvents;
