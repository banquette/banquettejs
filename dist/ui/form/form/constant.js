/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var _a, _b;
/**
 * Different actions the form can be working on.
 * Actions combine with status.
 */
var Action;
(function (Action) {
    /**
     * The form is loading (loading data from the server or transforming the input data into a model, etc).
     */
    Action[Action["Load"] = 1] = "Load";
    /**
     * The form is persisting form data to the server.
     */
    Action[Action["Persist"] = 2] = "Persist";
    /**
     * The form is in a global error state.
     */
    Action[Action["Validate"] = 4] = "Validate";
})(Action || (Action = {}));
/**
 * Different status an action can take.
 */
var Status;
(function (Status) {
    /**
     * The action is running.
     */
    Status[Status["Working"] = 16] = "Working";
    /**
     * The action has finished with success.
     */
    Status[Status["Success"] = 32] = "Success";
    /**
     * The action has failed.
     */
    Status[Status["Failure"] = 64] = "Failure";
})(Status || (Status = {}));
/**
 * Type of public errors the end user can customize the error message.
 */
var ErrorType;
(function (ErrorType) {
    /**
     * When the form failed to load.
     */
    ErrorType["Load"] = "load";
    /**
     * When the form failed to persist.
     */
    ErrorType["Persist"] = "persist";
    /**
     * When the form failed to validate on submit.
     */
    ErrorType["Validate"] = "validate";
    /**
     * For errors that don't match any of the other categories.
     * Most likely a bug.
     */
    ErrorType["Internal"] = "internal";
})(ErrorType || (ErrorType = {}));
/**
 * Events emitted through the event dispatcher..
 */
var HeadlessFormViewModelEvents = {
    /**
     * Events emitted when the form is loading.
     */
    BeforeLoad: Symbol('before-load'),
    LoadSuccess: Symbol('load-success'),
    LoadError: Symbol('load-error'),
    /**
     * Emitted each time submit() is called (event if a remote target is defined).
     * If contains the data being submitted.
     */
    BeforePersist: Symbol('before-persist'),
    PersistSuccess: Symbol('persist-success'),
    PersistError: Symbol('persist-error'),
    /**
     * Validation related events.
     */
    BeforeValidate: Symbol('before-validate'),
    AfterValidate: Symbol('after-validate'),
    /**
     * Emitted when the model is binding to the form.
     */
    BeforeBindModel: Symbol('before-bind-model'),
    AfterBindModel: Symbol('after-bind-model')
};
var ErrorTypeStatusMap = (_a = {},
    _a[ErrorType.Load] = Action.Load,
    _a[ErrorType.Persist] = Action.Persist,
    _a[ErrorType.Validate] = Action.Validate,
    _a[ErrorType.Internal] = Action.Load // If an internal error occurs, default to a "Load failure" state.
,
    _a);
var ErrorTypeEventMap = (_b = {},
    _b[ErrorType.Load] = HeadlessFormViewModelEvents.LoadError,
    _b[ErrorType.Persist] = HeadlessFormViewModelEvents.PersistError,
    _b[ErrorType.Validate] = null,
    _b[ErrorType.Internal] = null,
    _b);
/**
 * All requests done by the form will be tagged with these tags
 * to make it easier to hook on them from the outside.
 */
var FormTag = Symbol('form'); // FormTag is applied to both load and persist requests.
var FormLoadTag = Symbol('form-load');
var FormPersistTag = Symbol('form-persist');

export { Action, ErrorType, ErrorTypeEventMap, ErrorTypeStatusMap, FormLoadTag, FormPersistTag, FormTag, HeadlessFormViewModelEvents, Status };