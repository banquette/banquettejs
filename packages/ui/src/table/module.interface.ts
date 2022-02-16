export interface ModuleInterface {
    /**
     * Defines if the module is dependent on the server.
     * Possible values are:
     *   - `true`: the processing is done on the server
     *   - `false`: the processing is done locally
     *   - 'auto': the processing is done on the server if the items are fetched remotely
     */
    remote: boolean|'auto';

    /**
     * Defines if the configuration of the module has changed until the last view update.
     */
    changed: boolean;
}
