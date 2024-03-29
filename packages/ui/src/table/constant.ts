/**
 * Available status of the list.
 */
export enum TableStatus {
    /**
     * The list is initializing. The meaning of this depends on the view implementation.
     * This step is necessary in a VueJS context to let time to the components to register their columns.
     *
     * But it could be anything in other contexts.
     *
     * This status will not change by itself, but only change when a fetch is initiated.
     */
    Initializing = 'initializing',

    /**
     * The list is fetching remote data.
     */
    Fetching = 'fetching',

    /**
     * The list is in a global error state.
     */
    Error = 'error',

    /**
     * The list is initialized and have successfully reached the remote endpoint.
     * This doesn't mean the list contains items but that it's ready to render.
     */
    Ready = 'ready'
}

/**
 * Events used for communication between the view model and the concrete component.
 */
export const TableEvents = {
    /**
     * Trigger a view update.
     */
    UpdateView: Symbol('update-view')
};

/**
 * Events emitted by the api service.
 */
export const TableApiEvents = {
    /**
     * Emitted right before an HTTP request is executed, and before the payload is encoded.
     */
    BeforeRequest: Symbol('ui:table:before-request'),

    /**
     * Emitted after the response of an HTTP request has been decoded, no matter it it succeeded or not.
     */
    BeforeResponse: Symbol('ui:table:before-response')
};

/**
 * Filtering tag set by the `ApiService` so it can listen to events of its own requests.
 *
 * @see EventDispatcher documentation for more details on tags.
 */
export const TableTag = Symbol('ui:table:tag');

/**
 * Propagation tag set by built-in processors.
 *
 * @see EventDispatcher documentation for more details on tags.
 */
export const TableProcessorTag = Symbol('ui:table:processor');
