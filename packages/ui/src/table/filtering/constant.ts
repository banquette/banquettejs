
export const FilteringEvents = {
    /**
     * Triggered when any configuration value of the filtering module have changed.
     */
    Changed: Symbol('filtering:changed'),

    /**
     * Triggered when a configuration value has been modified internally, but should not trigger a fetch.
     */
    Invalidated: Symbol('filtering:invalidated')
}
