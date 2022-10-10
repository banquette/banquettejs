/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ChoiceOrigin = {
    /**
     * The default origin, meaning the choice has been added manually with no custom origin specified.
     */
    Default: 'default',
    /**
     * For choices coming from the remote composable.
     */
    Remote: 'remote',
    /**
     * For choices created by the end-user.
     */
    User: 'user'
};
var ChoicesEvents = {
    /**
     * Trigger when a choice gained focus.
     */
    ChoiceFocused: Symbol('choice-focused')
};
exports.ChoicesRemoteFetchStatus = void 0;
(function (ChoicesRemoteFetchStatus) {
    /**
     * No request is running.
     */
    ChoicesRemoteFetchStatus["Idle"] = "idle";
    /**
     * A remote fetch is running.
     */
    ChoicesRemoteFetchStatus["Pending"] = "pending";
    /**
     * A remote fetch has failed.
     */
    ChoicesRemoteFetchStatus["Failed"] = "failed";
    /**
     * The minimum search length has not been reached.
     */
    ChoicesRemoteFetchStatus["WaitingSearch"] = "waiting-search";
})(exports.ChoicesRemoteFetchStatus || (exports.ChoicesRemoteFetchStatus = {}));
/**
 * Different strategies to search on the set of choices.
 */
exports.SearchType = void 0;
(function (SearchType) {
    /**
     * The search is disabled.
     */
    SearchType["None"] = "none";
    /**
     * A search input should be visible at all time.
     *
     * When the user enters something in it, results are filtered so only matching results remain visible in the dropdown.
     *
     * This search mode is intended for moderate sets of items.
     */
    SearchType["Local"] = "local";
    /**
     * A search input should be visible at all time.
     *
     * No results are visible in the dropdown until the user searches something.
     * At which point a request is made to fetch the corresponding choices.
     *
     * This search mode is intended for large sets of items.
     *
     * A remote endpoint must be configured to use this search type.
     */
    SearchType["Remote"] = "remote";
})(exports.SearchType || (exports.SearchType = {}));

exports.ChoiceOrigin = ChoiceOrigin;
exports.ChoicesEvents = ChoicesEvents;
