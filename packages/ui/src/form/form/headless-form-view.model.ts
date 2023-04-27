import { RemoteException, ApiTransformerSymbol } from "@banquette/api";
import { Injector } from "@banquette/dependency-injection";
import { EventArg, EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { ExceptionFactory, UsageException } from "@banquette/exception";
import {
    BasicState,
    FormEvent,
    StateChangedFormEvent,
    ValidationEndFormEvent,
    ValueChangedFormEvent,
    ComponentNotFoundException,
    FormComponentInterface,
    FormControl,
    FormError,
    FormObject
} from "@banquette/form";
import { HttpResponse } from "@banquette/http";
import { ModelMetadataService, TransformResult, TransformService, PojoTransformerSymbol, ModelExtendedIdentifier } from "@banquette/model";
import { FormModelBinder, FormTransformerSymbol } from "@banquette/model-form";
import { areEqual, makeReassignable, proxy } from "@banquette/utils-misc";
import { extend, filterWithMask, getObjectValue } from "@banquette/utils-object";
import { ensureArray, isObject, isObjectLiteral, isPromiseLike, isUndefined, Writeable, Constructor } from "@banquette/utils-type";
import { HeadlessInterface } from "../../headless.interface";
import { RemoteModule } from "../../misc/remote/remote.module";
import { Action, Status, FormTag, FormLoadTag, ErrorType, ErrorTypeStatusMap, FormPersistTag, HeadlessFormViewModelEvents, ErrorTypeEventMap } from "./constant";
import { ActionErrorEventArg } from "./event/action-error.event-arg";
import { AfterBindModelEventArg } from "./event/after-bind-model.event-arg";
import { AfterPersistEventArg } from "./event/after-persist.event-arg";
import { AfterRemotePersistEventArg } from "./event/after-remote-persist.event-arg";
import { AfterValidateEventArg } from "./event/after-validate.event-arg";
import { BeforeBindModelEventArg } from "./event/before-bind-model.event-arg";
import { BeforeLoadEventArg } from "./event/before-load.event-arg";
import { BeforePersistEventArg } from "./event/before-persist.event-arg";
import { BeforeValidateEventArg } from "./event/before-validate.event-arg";
import { RemoteValidationException } from "./exception/remote-validation.exception";
import { HeadlessFormViewDataInterface } from "./headless-form-view-data.interface";

export class HeadlessFormViewModel<ViewDataType extends HeadlessFormViewDataInterface = HeadlessFormViewDataInterface, ModelType extends object = any> implements HeadlessInterface<ViewDataType> {
    /**
     * @inheritDoc
     */
    public readonly viewData!: ViewDataType;

    /**
     * The actual form object being edited.
     */
    public readonly form: FormObject = new FormObject();

    /**
     * The form model binder (if a model is defined).
     */
    public readonly binder: FormModelBinder|null = null;

    /**
     * Instance of the mode on edition, if there is one.
     */
    public readonly modelInstance: ModelType|null = null;

    /**
     * Optional type of the model to bind the form with.
     */
    private _modelType: Constructor<any>|null = null;
    public get modelType(): ModelExtendedIdentifier|null {
        return this._modelType;
    }
    public set modelType(value: ModelExtendedIdentifier|null) {
        const resolved = value !== null ? this.getModelMetadata().resolveAlias(value) : null;
        const requiresLoad = this._modelType !== resolved;
        this._modelType = resolved;
        if (requiresLoad && !this.is(Action.Load, Status.Working)) {
            this.load();
        }
    }

    /**
     * An object holding the default values of the form.
     * Can be a POJO or a model.
     *
     * The object will not be modified by the form.
     */
    private _loadData: any = null;
    public get loadData(): any {
        return this._loadData;
    }
    public set loadData(value: any) {
        const requiresLoad = !areEqual(this._loadData, value);
        this._loadData = value;
        if (requiresLoad && !this.is(Action.Load, Status.Working)) {
            this.load();
        }
    }

    /**
     * Remote modules.
     */
    public loadRemote = new RemoteModule();
    public persistRemote = new RemoteModule();
    private unsubscribeMethods: UnsubscribeFunction[] = [];

    /**
     * A map of controls indexed by their path in the form.
     * This is to avoid creating a new control for the same path if the Vue component is destroyed and re-created.
     */
    private createdControlsMap: Record<string, FormControl> = {};
    private eventDispatcher = new EventDispatcher();

    public constructor() {
        console.warn("#HeadlessFormViewModel");
        this.setViewData({
            errorsMap: {},
            getControl: proxy(this.getControl, this),
            getControlErrors: proxy(this.getControlErrors, this)
        } as any);
        this.updateState(Action.Load, Status.Working);
        this.unsubscribeMethods.push(this.loadRemote.onConfigurationChange(() => {
            if (!this.is(Action.Load, Status.Working)) {
                this.load();
            }
        }));
        this.unsubscribeMethods.push(this.form.onStateChanged((event: StateChangedFormEvent) => {
            if (event.state === BasicState.Validating && !event.newValue && this.form.valid) {
                this.removeError(ErrorType.Validate);
            }
            (this.viewData.form as any)[event.state] = event.newValue;
        }));
        this.unsubscribeMethods.push(this.form.onValidationStart((event: FormEvent) => {
            // Wrap the event for name normalization.
            const dispatchResult = this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.BeforeValidate, new BeforeValidateEventArg(event.source));
            if (dispatchResult.defaultPrevented) {
                event.preventDefault();
            }
        }, 0, false));
        this.unsubscribeMethods.push(this.form.onValidationEnd((event: ValidationEndFormEvent) => {
            this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.AfterValidate, new AfterValidateEventArg(event.source, event.result));
        }, 0, false));
        this.unsubscribeMethods.push(this.form.onValueChanged((event: ValueChangedFormEvent) => {
            this.viewData.form.value = event.newValue;
        }));
    }

    /**
     * @inheritDoc
     */
    public setViewData(viewData: ViewDataType): void {
        const that = this;
        (this as any /* Writeable<HeadlessFormViewModel> */).viewData = extend(viewData, {
            form: {
                invalid         : false,
                notValidated    : true,
                validating      : false,
                busy            : false,
                disabled        : true,
                dirty           : false,
                touched         : false,
                changed         : false,
                value           : undefined,

                // Inverse states, always read-only.
                get valid(): boolean                { return !this.invalid },
                get validated(): boolean            { return !this.notValidated },
                get notValidating(): boolean        { return !this.validated },
                get validatedAndValid(): boolean    { return this.validated && this.valid },
                get pristine(): boolean             { return !this.dirty },
                get untouched(): boolean            { return !this.touched },
                get unchanged(): boolean            { return !this.changed },
                get notBusy()                       { return !this.busy },
                get enabled()                       { return !this.disabled },
                get errorsDeepMap()                 { return that.form.errorsDeepMap }
            }
        });
    }

    /**
     * Cleanup before the view model is destroyed.
     */
    public dispose(): void {
        for (const fn of this.unsubscribeMethods) {
            fn();
        }
        this.unsubscribeMethods = [];
        this.createdControlsMap = {};
    }

    /**
     * Try to get a control, and create it if missing.
     * Creating a control is only available if the form is not bound to a model.
     */
    public getControl(path: string, failIfMissing?: boolean): FormComponentInterface|null {
        try {
            return this.form.get(path);
        } catch (e) {
            if (e instanceof ComponentNotFoundException) {
                // The structure of a form cannot be mutated when bound to a model.
                if (this.modelType) {
                    // If the user gave no value for `failIfMissing`, put it to `true` if the form is not loading.
                    // If the form is loading and the user didn't use the `loading` slot, it's normal to have errors.
                    if (isUndefined(failIfMissing)) {
                        failIfMissing = !this.is(Action.Load, Status.Working);
                    }
                    if (failIfMissing) {
                        this.setError(ErrorType.Internal, new UsageException(
                            `No component has been found at path "${path}" `+
                            `and cannot be created because the form is bound to a model.`
                        ));
                    }
                    return null;
                }
                if (isUndefined(this.createdControlsMap[path])) {
                    const defaultValue = isObjectLiteral(this._loadData) ? getObjectValue(this._loadData, path.split('/')) : undefined;
                    this.createdControlsMap[path] = new FormControl(defaultValue);
                }
                this.form.set(path, this.createdControlsMap[path]);
                return this.createdControlsMap[path];
            }
            throw e;
        }
    }

    /**
     * A `shorthand` for `form.errorsDeepMap[path]` that ensures an array is returned.
     */
    public getControlErrors(path: string): FormError[] {
        return ensureArray(this.viewData.form.errorsDeepMap[path]);
    }

    /**
     * Load default values into the form and reset it.
     */
    public load = (() => {
        let firstLoad = true;
        let queued = false;
        let current = 0;
        let steps = [proxy(this.loadRemotely, this), proxy(this.loadLocally, this)];
        const loadNext = () => {
            if (current >= steps.length) {
                if (queued) {
                    current = 0;
                    queued = false;
                    this.load();
                    return ;
                }
                if (this.modelInstance !== null) {
                    (this as any /* Writeable<HeadlessFormViewModel> */).modelInstance = makeReassignable(this.modelInstance);
                }
                this.form.enable();
                this.form.reset();
                this.bindModel();
                this.updateState(Action.Load, Status.Success);
                this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.LoadSuccess);
                return ;
            }
            try {
                const result = steps[current++]();
                if (isPromiseLike(result)) {
                    result.then(() => loadNext(), (reason: any) => {
                        this.setError(ErrorType.Load, reason);
                    });
                } else {
                    loadNext();
                }
            } catch (e) {
                this.setError(ErrorType.Load, e);
            }
        };
        return () => {
            if (!firstLoad && this.is(Action.Load, Status.Working)) {
                queued = true;
                return ;
            }
            firstLoad = false;
            this.form.disable();
            this.updateState(Action.Load, Status.Working);
            const dispatchResult = this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.BeforeLoad, new BeforeLoadEventArg(this));
            if (dispatchResult.promise) {
                dispatchResult.promise.then(loadNext);
            } else {
                loadNext();
            }
        };
    })();

    /**
     * Force the validation of the form and submit it if everything is valid.
     */
    public submit(): void {
        if (this.is(null, Status.Working)) {
            return;
        }
        const doSubmit = async () => {
            if (!(await this.validate())) {
                return;
            }
            const payload: any = this.modelInstance ? this.modelInstance : this.form.value;
            let dispatchResult = this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.BeforePersist, new BeforePersistEventArg(payload));
            if (dispatchResult.promise) {
                await dispatchResult.promise;
            }
            if (dispatchResult.error || dispatchResult.defaultPrevented) {
                return ;
            }
            if (this.persistRemote.isApplicable) {
                this.form.disable();
                this.updateState(Action.Persist, Status.Working);
                const response: HttpResponse<any> = this.persistRemote.send(this.modelInstance ? this.modelInstance : this.form.value, {}, {}, [FormTag, FormPersistTag]);
                try {
                    await response.promise;
                    this.updateState(Action.Persist, Status.Success);
                    this.eventDispatcher.dispatch(HeadlessFormViewModelEvents.PersistSuccess, new AfterRemotePersistEventArg(response, payload));
                } catch (e) {
                    if (response.isError) {
                        const maybeValidationException = RemoteValidationException.CreateFromUnknownInput(response.result);
                        if (maybeValidationException !== null) {
                            response.result = maybeValidationException;
                        }
                        if (response.result instanceof RemoteValidationException) {
                            this.setError(ErrorType.Persist, response.result);
                            this.bindPersistErrorsToForm(response.result);
                        } else {
                            throw e;
                        }
                    }
                }
            } else {
                this.eventDispatcher.dispatch(HeadlessFormViewModelEvents.PersistSuccess, new AfterPersistEventArg(payload));
            }
        };
        doSubmit().catch((reason: any) => {
            if (reason instanceof HttpResponse) {
                reason = reason.result instanceof RemoteException ? reason.result : reason.error;
            }
            this.setError(ErrorType.Persist, reason);
            this.updateState(Action.Persist, Status.Failure);
            console.error(reason);
        }).finally(() => {
            this.form.enable();
        });
    }

    /**
     * Force the validation of the form, but doesn't submit it.
     */
    public async validate(): Promise<boolean> {
        this.updateState(Action.Validate, Status.Working);
        if (!(await this.form.validate())) {
            this.updateState(Action.Validate, Status.Failure);
            this.setError(ErrorType.Validate, null);
            return false;
        }
        this.updateState(Action.Validate, Status.Success);
        this.removeError(ErrorType.Validate);
        this.form.clearErrorsDeep();
        return true;
    }

    /**
     * Test if the form is in a certain state.
     */
    public is(action: Action|null, status: Status|null = null): boolean {
        // If we only test the status and don't care about the action.
        if (action === null) {
            if (status === null) {
                throw new UsageException('You must define at least an action or a status to test.');
            }
            return (this.viewData.action & status) === status;
        }
        // Otherwise, test the action first.
        let isTrue = (this.viewData.action & action) === action;

        // If it matches and a status is also defined.
        if (isTrue && status !== null) {

            // Because the action matches, that's the status that will determine the result.
            return (this.viewData.action & status) === status;
        }
        // Else the action match is the result.
        return isTrue;
    }

    /**
     * Update the status of the component.
     */
    public updateState(action: Action, status: Status|null = null): void {
        let newAction = action;
        if (status !== null) {
            newAction |= status;
        }
        this.viewData.action = newAction; // Avoid writing into "action" multiple times.
        this.viewData.loading = this.is(Action.Load, Status.Working);
        this.viewData.loadError = this.is(Action.Load, Status.Failure);
        this.viewData.loadSuccess = this.is(Action.Load, Status.Success);
        this.viewData.persisting = this.is(Action.Persist, Status.Working);
        this.viewData.persistError = this.is(Action.Persist, Status.Failure);
        this.viewData.persistSuccess = this.is(Action.Persist, Status.Success);
        this.viewData.validating = this.is(Action.Validate, Status.Working);
        this.viewData.validateError = this.is(Action.Validate, Status.Failure);
        this.viewData.validateSuccess = this.is(Action.Validate, Status.Success);

        if (status !== Status.Failure) {
            this.viewData.errorsMap = {};
        }
    }

    /**
     * By notified when the form starts loading.
     */
    public onBeforeLoad(cb: (event: BeforeLoadEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.BeforeLoad, cb);
    }

    /**
     * By notified when the form finishes its loading with success.
     */
    public onLoadSuccess(cb: (event: EventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.LoadSuccess, cb);
    }

    /**
     * By notified when the form fails to load.
     */
    public onLoadError(cb: (event: ActionErrorEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.LoadError, cb);
    }

    /**
     * Emitted each time submit() is called (even if no remote target is defined).
     */
    public onBeforePersist(cb: (event: BeforePersistEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.BeforePersist, cb);
    }

    /**
     * Triggered after a remote persist succeeded.
     */
    public onPersistSuccess(cb: (event: AfterPersistEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.PersistSuccess, cb);
    }

    /**
     * Triggered when a remote persist fails.
     */
    public onPersistError(cb: (event: ActionErrorEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.PersistError, cb);
    }

    /**
     * Emitted each time the form validates a control.
     */
    public onBeforeValidate(cb: (event: BeforeValidateEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.BeforeValidate, cb);
    }

    /**
     * Triggered after a validation succeeded.
     */
    public onAfterValidate(cb: (event: AfterValidateEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.AfterValidate, cb);
    }

    /**
     * Triggered when the model is about to be bound to the form.
     */
    public onBeforeBindModel(cb: (event: BeforeBindModelEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.BeforeBindModel, cb);
    }

    /**
     * Triggered when the model has been bound to the form.
     */
    public onAfterBindModel(cb: (event: AfterBindModelEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(HeadlessFormViewModelEvents.AfterBindModel, cb);
    }

    /**
     * Make the form on error.
     */
    protected setError(errorType: ErrorType, reason: any): void {
        reason = reason !== null ? ExceptionFactory.EnsureException(reason) : null;
        if (reason instanceof RemoteException && reason.slug === 'remote') {
            reason.slug = errorType;
        }
        const errorMapIndex = reason !== null ? reason.slug : errorType;
        this.viewData.errorsMap[errorMapIndex] = reason !== null ? reason.message : null;
        this.updateState(ErrorTypeStatusMap[errorType], Status.Failure);

        const eventType = ErrorTypeEventMap[errorType];
        if (eventType !== null) {
            this.eventDispatcher.dispatch(eventType, new ActionErrorEventArg(reason));
        }
        console.error(reason);
    }

    /**
     * Remove a type of error.
     */
    protected removeError(error: ErrorType): void {
        if (!isUndefined(this.viewData.errorsMap[error])) {
            delete this.viewData.errorsMap[error];
        }
    }

    /**
     * Remove all errors.
     */
    protected clearErrors(): void {
        this.viewData.errorsMap = {};
    }

    /**
     * Associate the model instance and the form through a model binder, if applicable.
     */
    private bindModel(): void {
        if (this._modelType && !this.binder && this.modelInstance) {
            this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.BeforeBindModel, new BeforeBindModelEventArg(this.modelInstance));

            const binder = Injector.Get(FormModelBinder);
            (this as any /* Writeable<HeadlessFormViewModel> */).modelInstance = binder.bind(this.modelInstance, this.form);
            (this as any /* Writeable<HeadlessFormViewModel> */).binder = binder;

            this.eventDispatcher.dispatchWithErrorHandling(HeadlessFormViewModelEvents.AfterBindModel, new AfterBindModelEventArg(this.modelInstance, binder));
        }
    }

    /**
     * Fetch remote values that will be set into the form,
     * if the configuration enables it.
     */
    private loadRemotely(): Promise<void>|void {
        if (!this.loadRemote.isApplicable) {
            return ;
        }
        return new Promise<void>((resolve, reject) => {
            this.loadRemote.send(null, {}, {}, [FormTag, FormLoadTag]).promise.then((response: HttpResponse<any>) => {
                const baseError = `The ajax request didn't result with the expected value. {detail}` +
                    `You can intercept the response by listening to a "HttpEvents.BeforeResponse" event with the "FormLoadTag" tag ` +
                    `to do some custom processing.`;
                if (this._modelType) {
                    if (!this.isValidModelInstance(response.result)) {
                        if (isObject(response.result)) {
                            this.getTransformService().transformInverse(response.result, this._modelType as Constructor, ApiTransformerSymbol).onReady().then((transformResult: TransformResult) => {
                                (this as any /* Writeable<HeadlessFormViewModel> */).modelInstance = transformResult.result;
                                resolve();
                            }, reject);
                        } else {
                            reject(new UsageException(baseError.replace(
                                '{detail}',
                                `An instance of "${String(this.modelType)}" or an object to transform is expected.`)
                            ));
                        }
                    } else {
                        (this as any /* Writeable<HeadlessFormViewModel> */).modelInstance = response.result;
                        resolve();
                    }
                } else if (isObject(response.result)) {
                    this.form.setDefaultValue(response.result);
                    resolve();
                } else {
                    reject(new UsageException(baseError.replace('{detail}', 'An object is expected.')));
                }
            });
        });
    }

    /**
     * Insert values defined in the "loadData" attribute into the form.
     */
    private loadLocally(): Promise<void>|void {
        if (!isObject(this._loadData)) {
            return ;
        }
        if (!this._modelType) {
            // If we don't have a model, simply set the values in the form.
            this.form.setDefaultValue(this._loadData);
            return ;
        }
        const assignModelData = (model: object): void|Promise<void> => {
            // If we don't have a model instance yet, simply set it.
            if (!this.modelInstance) {
                (this as any /* Writeable<HeadlessFormViewModel> */).modelInstance = model;
                return ;
            }
            const assignFormTransformResult = (formTransformResult: TransformResult) => {
                if (formTransformResult.result instanceof FormObject) {
                    // Make the controls concrete the the root value is set.
                    formTransformResult.result.getByPattern('**').markAsConcrete();

                    if (isObject(formTransformResult.result)) {
                        // Ensure only the keys defined in `loadData` are kept from the output of the form.
                        const values = filterWithMask(formTransformResult.result.value, this._loadData);

                        // Assign the result as default.
                        this.form.setDefaultValue(values);
                    }
                }
            };
            // Otherwise, if we already have a model defined, we can't create a new one.
            // The easiest way to merge the two models is to convert the input model into a form,
            // make it concrete and then merge the values of the form.
            const formTransformResult = this.getTransformService().transform(model, FormTransformerSymbol);
            if (formTransformResult.promise) {
                return formTransformResult.promise.then(assignFormTransformResult);
            } else {
                assignFormTransformResult(formTransformResult);
            }
        };
        // If loadData is not an instance of the expected type of model
        // we assume it's a POJO, so we need to convert back to a model.
        if (!this.isValidModelInstance(this._loadData)) {
            if (!isObject(this._loadData)) {
                return ;
            }
            const pojoTransformResult = this.getTransformService().transformInverse(this._loadData, this._modelType as Constructor, PojoTransformerSymbol);
            if (pojoTransformResult.promise) {
                return new Promise((resolve, reject) => {
                    pojoTransformResult.promise!.then(() => resolve(), reject);
                });
            }
            return assignModelData(pojoTransformResult.result);
        }
        return assignModelData(this._loadData);
    }

    /**
     * Check if the input value matches the expected model type.
     */
    private isValidModelInstance(value: any): value is object {
        if (!this.modelType) {
            return true;
        }
        const ctor = this.getModelMetadata().resolveAlias(this.modelType);
        return value instanceof ctor;
    }

    /**
     * Gets a collection of violations from the server and binds them to the form.
     */
    protected bindPersistErrorsToForm(validationException: RemoteValidationException): void {
        // validate() is here to ensure all concrete controls are marked
        // as `validated`, so errors can appear.
        // this.form.validate();
        for (const violation of validationException.violations) {
            this.form.addChildError(violation.path, {
                type: violation.type,
                message: violation.message
            });
        }
    }

    /**
     * Only inject the service on demand.
     */
    private getModelMetadata = (() => {
        let service: ModelMetadataService|null = null;
        return (): ModelMetadataService => {
            if (!service) {
                service = /**!PURE*/ Injector.Get(ModelMetadataService);
            }
            return service;
        };
    })();

    /**
     * Only inject the service on demand.
     */
    private getTransformService = (() => {
        let service: TransformService|null = null;
        return (): TransformService => {
            if (!service) {
                service = /**!PURE*/ Injector.Get(TransformService);
            }
            return service;
        };
    })();
}
