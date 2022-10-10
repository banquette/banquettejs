/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var FilteringEvents = {
    /**
     * Triggered when any configuration value of the filtering module have changed.
     */
    Changed: Symbol('filtering:changed'),
    /**
     * Triggered when a configuration value has been modified internally, but should not trigger a fetch.
     */
    Invalidated: Symbol('filtering:invalidated')
};

exports.FilteringEvents = FilteringEvents;
