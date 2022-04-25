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
    Working = 16,

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
     * When the form failed to load.
     */
    Load = 'load',

    /**
     * When the form failed to persist.
     */
    Persist = 'persist',

    /**
     * When the form failed to validate on submit.
     */
    Validate = 'validate',

    /**
     * For errors that don't match any of the other categories.
     * Most likely a bug.
     */
    Internal = 'internal'
}

/**
 * Events emitted through the event dispatcher..
 */
export const HeadlessFormViewModelEvents = {
    /**
     * Events emitted when the form is loading.
     */
    LoadStart: Symbol('load-start'),
    LoadSuccess: Symbol('load-success'),
    LoadError: Symbol('load-error'),

    /**
     * Emitted each time submit() is called (event if a remote target is defined).
     * If contains the data being submitted.
     */
    Persist: Symbol('persist'),

    /**
     * Persistence events emitted when submit() is configured to call a remote server.
     */
    PersistStart: Symbol('persist-start'),
    PersistSuccess: Symbol('persist-success'),
    PersistError: Symbol('persist-error'),

    /**
     * Validation related events.
     */
    ValidateStart: Symbol('validate-start'),
    ValidateSuccess: Symbol('validate-success'),
    ValidateError: Symbol('validate-error')
};


export const ErrorTypeStatusMap: Record<ErrorType, Action> = {
    [ErrorType.Load]: Action.Load,
    [ErrorType.Persist]: Action.Persist,
    [ErrorType.Validate]: Action.Validate,
    [ErrorType.Internal]: Action.Load // If an internal error occurs, default to a "Load failure" state.
};

export const ErrorTypeEventMap: Record<ErrorType, symbol|null> = {
    [ErrorType.Load]: HeadlessFormViewModelEvents.LoadError,
    [ErrorType.Persist]: HeadlessFormViewModelEvents.PersistError,
    [ErrorType.Validate]: HeadlessFormViewModelEvents.ValidateError,
    [ErrorType.Internal]: null
};

/**
 * All requests done by the form will be tagged with these tags
 * to make it easier to hook on them from the outside.
 */
export const FormTag = Symbol('form'); // FormTag is applied to both load and persist requests.
export const FormLoadTag = Symbol('form-load');
export const FormPersistTag = Symbol('form-persist');
