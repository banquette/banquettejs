import { EventArg } from "@banquette/event/event-arg";
import { UnsubscribeFunction } from "@banquette/event/type";
import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { FormError } from "@banquette/form/form-error";
import { FormObject } from "@banquette/form/form-object";
import { FormModelBinder } from "@banquette/model-form/form-model-binder";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { HeadlessInterface } from "../../headless.interface";
import { RemoteModule } from "../../misc/remote/remote.module";
import { Action, Status, ErrorType } from "./constant";
import { AfterBindModelEventArg } from "./event/after-bind-model.event-arg";
import { AfterValidateEventArg } from "./event/after-validate.event-arg";
import { BeforeBindModelEventArg } from "./event/before-bind-model.event-arg";
import { BeforeValidateEventArg } from "./event/before-validate.event-arg";
import { ActionErrorEventArg } from "./event/action-error.event-arg";
import { AfterPersistEventArg } from "./event/after-persist.event-arg";
import { BeforePersistEventArg } from "./event/before-persist.event-arg";
import { BeforeLoadEventArg } from "./event/before-load.event-arg";
import { RemoteValidationException } from "./exception/remote-validation.exception";
import { HeadlessFormViewDataInterface } from "./headless-form-view-data.interface";
export declare class HeadlessFormViewModel<ViewDataType extends HeadlessFormViewDataInterface = HeadlessFormViewDataInterface, ModelType extends object = any> implements HeadlessInterface<ViewDataType> {
    /**
     * @inheritDoc
     */
    readonly viewData: ViewDataType;
    /**
     * The actual form object being edited.
     */
    readonly form: FormObject;
    /**
     * The form model binder (if a model is defined).
     */
    readonly binder: FormModelBinder | null;
    /**
     * Instance of the mode on edition, if there is one.
     */
    readonly modelInstance: ModelType | null;
    /**
     * Optional type of the model to bind the form with.
     */
    private _modelType;
    get modelType(): ModelExtendedIdentifier | null;
    set modelType(value: ModelExtendedIdentifier | null);
    /**
     * An object holding the default values of the form.
     * Can be a POJO or a model.
     *
     * The object will not be modified by the form.
     */
    private _loadData;
    get loadData(): any;
    set loadData(value: any);
    /**
     * Remote modules.
     */
    loadRemote: RemoteModule;
    persistRemote: RemoteModule;
    private unsubscribeMethods;
    /**
     * A map of controls indexed by their path in the form.
     * This is to avoid creating a new control for the same path if the Vue component is destroyed and re-created.
     */
    private createdControlsMap;
    private eventDispatcher;
    constructor();
    /**
     * @inheritDoc
     */
    setViewData(viewData: ViewDataType): void;
    /**
     * Cleanup before the view model is destroyed.
     */
    dispose(): void;
    /**
     * Try to get a control, and create it if missing.
     * Creating a control is only available if the form is not bound to a model.
     */
    getControl(path: string, failIfMissing?: boolean): FormComponentInterface | null;
    /**
     * A `shorthand` for `form.errorsDeepMap[path]` that ensures an array is returned.
     */
    getControlErrors(path: string): FormError[];
    /**
     * Load default values into the form and reset it.
     */
    load: () => void;
    /**
     * Force the validation of the form and submit it if everything is valid.
     */
    submit(): void;
    /**
     * Force the validation of the form, but doesn't submit it.
     */
    validate(): Promise<boolean>;
    /**
     * Test if the form is in a certain state.
     */
    is(action: Action | null, status?: Status | null): boolean;
    /**
     * Update the status of the component.
     */
    updateState(action: Action, status?: Status | null): void;
    /**
     * By notified when the form starts loading.
     */
    onBeforeLoad(cb: (event: BeforeLoadEventArg) => void): UnsubscribeFunction;
    /**
     * By notified when the form finishes its loading with success.
     */
    onLoadSuccess(cb: (event: EventArg) => void): UnsubscribeFunction;
    /**
     * By notified when the form fails to load.
     */
    onLoadError(cb: (event: ActionErrorEventArg) => void): UnsubscribeFunction;
    /**
     * Emitted each time submit() is called (even if no remote target is defined).
     */
    onBeforePersist(cb: (event: BeforePersistEventArg) => void): UnsubscribeFunction;
    /**
     * Triggered after a remote persist succeeded.
     */
    onPersistSuccess(cb: (event: AfterPersistEventArg) => void): UnsubscribeFunction;
    /**
     * Triggered when a remote persist fails.
     */
    onPersistError(cb: (event: ActionErrorEventArg) => void): UnsubscribeFunction;
    /**
     * Emitted each time the form validates a control.
     */
    onBeforeValidate(cb: (event: BeforeValidateEventArg) => void): UnsubscribeFunction;
    /**
     * Triggered after a validation succeeded.
     */
    onAfterValidate(cb: (event: AfterValidateEventArg) => void): UnsubscribeFunction;
    /**
     * Triggered when the model is about to be bound to the form.
     */
    onBeforeBindModel(cb: (event: BeforeBindModelEventArg) => void): UnsubscribeFunction;
    /**
     * Triggered when the model has been bound to the form.
     */
    onAfterBindModel(cb: (event: AfterBindModelEventArg) => void): UnsubscribeFunction;
    /**
     * Make the form on error.
     */
    protected setError(errorType: ErrorType, reason: any): void;
    /**
     * Remove a type of error.
     */
    protected removeError(error: ErrorType): void;
    /**
     * Remove all errors.
     */
    protected clearErrors(): void;
    /**
     * Associate the model instance and the form through a model binder, if applicable.
     */
    private bindModel;
    /**
     * Fetch remote values that will be set into the form,
     * if the configuration enables it.
     */
    private loadRemotely;
    /**
     * Insert values defined in the "loadData" attribute into the form.
     */
    private loadLocally;
    /**
     * Check if the input value matches the expected model type.
     */
    private isValidModelInstance;
    /**
     * Gets a collection of violations from the server and binds them to the form.
     */
    protected bindPersistErrorsToForm(validationException: RemoteValidationException): void;
    /**
     * Only inject the service on demand.
     */
    private getModelMetadata;
    /**
     * Only inject the service on demand.
     */
    private getTransformService;
}
