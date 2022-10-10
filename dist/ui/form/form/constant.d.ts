/**
 * Different actions the form can be working on.
 * Actions combine with status.
 */
export declare enum Action {
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
export declare enum Status {
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
export declare enum ErrorType {
    /**
     * When the form failed to load.
     */
    Load = "load",
    /**
     * When the form failed to persist.
     */
    Persist = "persist",
    /**
     * When the form failed to validate on submit.
     */
    Validate = "validate",
    /**
     * For errors that don't match any of the other categories.
     * Most likely a bug.
     */
    Internal = "internal"
}
/**
 * Events emitted through the event dispatcher..
 */
export declare const HeadlessFormViewModelEvents: {
    /**
     * Events emitted when the form is loading.
     */
    BeforeLoad: symbol;
    LoadSuccess: symbol;
    LoadError: symbol;
    /**
     * Emitted each time submit() is called (event if a remote target is defined).
     * If contains the data being submitted.
     */
    BeforePersist: symbol;
    PersistSuccess: symbol;
    PersistError: symbol;
    /**
     * Validation related events.
     */
    BeforeValidate: symbol;
    AfterValidate: symbol;
    /**
     * Emitted when the model is binding to the form.
     */
    BeforeBindModel: symbol;
    AfterBindModel: symbol;
};
export declare const ErrorTypeStatusMap: Record<ErrorType, Action>;
export declare const ErrorTypeEventMap: Record<ErrorType, symbol | null>;
/**
 * All requests done by the form will be tagged with these tags
 * to make it easier to hook on them from the outside.
 */
export declare const FormTag: unique symbol;
export declare const FormLoadTag: unique symbol;
export declare const FormPersistTag: unique symbol;
