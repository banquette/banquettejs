
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

export enum RealTimeStrategy {
    /**
     * Real-time is disabled.
     */
    None = 'none',

    /**
     * Real-time is achieved by polling the server at a regular interval.
     * The whole resource is fetched each time.
     *
     * Consider using timestamp polling for better performance, if possible.
     */
    Polling = 'polling',

    /**
     * Real-time is achieved by long-polling a special endpoint
     * on the server that returns the last update time (UTC timestamp) of the resource.
     *
     * The resource is identified by a unique subscription ID.
     *
     * If the resource has been updated since the last poll, a new normal fetch is triggered.
     */
    TimestampPolling = 'timestampPolling',
}
