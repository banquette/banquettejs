export declare const FilteringEvents: {
    /**
     * Triggered when any configuration value of the filtering module have changed.
     */
    Changed: symbol;
    /**
     * Triggered when a configuration value has been modified internally, but should not trigger a fetch.
     */
    Invalidated: symbol;
};
