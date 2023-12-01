
export const RemoteModuleEvents = {
    /**
     * Triggered when any value of the module's configuration has changed.
     */
    ConfigurationChange: Symbol('configuration-changed'),

    /**
     * Triggered when the module performs an HTTP request.
     */
    Request: Symbol('request'),

    /**
     * Triggered when the HTTP request finishes, with success or not.
     */
    Response: Symbol('response'),
}
