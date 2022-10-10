/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var NodeRemoteFetchStatus;
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
})(NodeRemoteFetchStatus || (NodeRemoteFetchStatus = {}));
/**
 * Events emitted through the event dispatcher.
 */
var HeadlessTreeViewModelEvents = {
    NodeRemoved: Symbol('node-removed')
};

export { HeadlessTreeViewModelEvents, NodeRemoteFetchStatus };
