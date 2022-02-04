/**
 * Different actions the form can be working on.
 * Actions combine with status.
 */
export enum Action {
    /**
     * The form is loading (loading data from the server or transforming the input data into a model, etc).
     */
    Load = 1,

    /**
     * The form is persisting form data to the server.
     */
    Persist = 2,

    /**
     * The form is in a global error state.
     */
    Validate = 4
}

/**
 * Different status an action can take.
 */
export enum Status {
    /**
     * The action is running.
     */
    Working = 0,

    /**
     * The action has finished with success.
     */
    Success = 32,

    /**
     * The action has failed.
     */
    Failure = 64
}

/**
 * Type of public errors the end user can customize the error message.
 */
export enum ErrorType {
    /**
     * Thrown when the form failed to validate on submit.
     */
    Validate = 'validate',

    /**
     * Thrown when the form failed to load.
     */
    Load = 'load',

    /**
     * Throw when the form failed to persist.
     */
    Persist = 'persist'
}

/**
 * All requests done by the form will be tagged with one of these tags
 * to make it easier to hook on them from the outside.
 */
export const FORM_GENERIC_LOAD_REQUESTS_TAG = Symbol('form-generic-load-requests-tag');
export const FORM_GENERIC_PERSIST_REQUESTS_TAG = Symbol('form-generic-persist-requests-tag');
