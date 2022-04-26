import { RemoteException } from "@banquette/api/exception/remote.exception";
import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { UnsubscribeFunction } from "@banquette/event/type";
import { ExceptionFactory } from "@banquette/exception/exception.factory";
import { UsageException } from "@banquette/exception/usage.exception";
import { BasicState } from "@banquette/form/constant";
import { StateChangedFormEvent } from "@banquette/form/event/state-changed.form-event";
import { ValueChangedFormEvent } from "@banquette/form/event/value-changed.form-event";
import { ComponentNotFoundException } from "@banquette/form/exception/component-not-found.exception";
import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { FormControl } from "@banquette/form/form-control";
import { FormObject } from "@banquette/form/form-object";
import { HttpResponse } from "@banquette/http/http-response";
import { FormModelBinder } from "@banquette/model-form/form-model-binder";
import { FormTransformerSymbol } from "@banquette/model-form/transformer/root/form";
import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { PojoTransformerSymbol } from "@banquette/model/transformer/type/root/pojo";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { debounce } from "@banquette/utils-misc/debounce";
import { proxy } from "@banquette/utils-misc/proxy";
import { extend } from "@banquette/utils-object/extend";
import { getObjectValue } from "@banquette/utils-object/get-object-value";
import { isObject, isObjectLiteral } from "@banquette/utils-type/is-object";
import { isPromiseLike } from "@banquette/utils-type/is-promise-like";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Writeable } from "@banquette/utils-type/types";
import { HeadlessInterface } from "../../headless.interface";
import { RemoteModule } from "../../misc/remote/remote.module";
import {
    Action,
    Status,
    FormTag,
    FormLoadTag,
    ErrorType,
    ErrorTypeStatusMap,
    FormPersistTag,
    HeadlessFormViewModelEvents,
    ErrorTypeEventMap
} from "./constant";
import { FormActionErrorEventArg } from "./event/form-action-error.event-arg";
import { FormPersistEventArg } from "./event/form-persist.event-arg";
import { RemoteValidationException } from "./exception/remote-validation.exception";
import { HeadlessFormViewDataInterface } from "./headless-form-view-data.interface";

export class HeadlessFormViewModel<ViewDataType extends HeadlessFormViewDataInterface = HeadlessFormViewDataInterface> implements HeadlessInterface<ViewDataType> {
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
    public readonly modelInstance: object|null = null;

    /**
     * Optional type of the model to bind the form with.
     */
    private _modelType: ModelExtendedIdentifier|null = null;
    public get modelType(): ModelExtendedIdentifier|null {
        return this._modelType;
    }
    public set modelType(value: ModelExtendedIdentifier|null) {
        this._modelType = value;
        this.load();
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
        this._loadData = value;
        this.load();
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
        this.setViewData({getControl: proxy(this.getControl, this)} as any);
        this.updateState(Action.Load, Status.Working);
        this.unsubscribeMethods.push(this.loadRemote.onConfigurationChange(proxy(this.load, this)));
        this.unsubscribeMethods.push(this.form.onStateChanged((event: StateChangedFormEvent) => {
            if (event.state === BasicState.Validating && !event.newValue && this.form.valid) {
                this.removeError(ErrorType.Validate);
            }
            (this.viewData.form as any)[event.state] = event.newValue;
        }));

        this.unsubscribeMethods.push(this.form.onValueChanged((event: ValueChangedFormEvent) => {
            this.viewData.form.value = event.newValue;
        }));
    }

    /**
     * @inheritDoc
     */
    public setViewData(viewData: ViewDataType): void {
        (this as Writeable<HeadlessFormViewModel>).viewData = extend(viewData, {
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
                get enabled()                       { return !this.disabled }
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
                    const defaultValue = isObjectLiteral(this.loadData) ? getObjectValue(this.loadData, path.split('/')) : undefined;
                    this.createdControlsMap[path] = new FormControl(defaultValue);
                }
                this.form.set(path, this.createdControlsMap[path]);
                return this.createdControlsMap[path];
            }
            throw e;
        }
    }

    /**
     * Load default values into the form and reset it.
     */
    public load = debounce((() => {
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
                this.onAfterLoad();
                return ;
            }
            try {
                const result = steps[current++]();
                if (isPromiseLike(result)) {
                    result.then(() => loadNext()).catch((reason: any) => {
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
            this.eventDispatcher.dispatch(HeadlessFormViewModelEvents.LoadStart);
            loadNext();
        };
    })(), 0, false);

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
            const persistEvent = new FormPersistEventArg(this.modelInstance ? this.modelInstance : this.form.value);
            this.eventDispatcher.dispatch(HeadlessFormViewModelEvents.Persist, persistEvent);
            if (this.persistRemote.isApplicable) {
                this.form.disable();
                this.updateState(Action.Persist, Status.Working);
                this.eventDispatcher.dispatch(HeadlessFormViewModelEvents.PersistStart, persistEvent);
                const response: HttpResponse<any> = this.persistRemote.send(this.modelInstance ? this.modelInstance : this.form.value, {}, [FormTag, FormPersistTag]);
                try {
                    await response.promise;
                    this.updateState(Action.Persist, Status.Success);
                    this.eventDispatcher.dispatch(HeadlessFormViewModelEvents.PersistSuccess);
                } catch (e) {
                    if (response.isError) {
                        const maybeValidationException = RemoteValidationException.CreateFromUnknownInput(response.result);
                        if (maybeValidationException !== null) {
                            response.result = maybeValidationException;
                        }
                        if (response.result instanceof RemoteValidationException) {
                            this.setError(ErrorType.Validate, null);
                            this.bindPersistErrorsToForm(response.result);
                        } else {
                            throw e;
                        }
                    }
                }
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
        this.eventDispatcher.dispatch(HeadlessFormViewModelEvents.ValidateStart);
        if (!(await this.form.validate())) {
            this.updateState(Action.Validate, Status.Failure);
            this.setError(ErrorType.Validate, null);
            return false;
        }
        this.updateState(Action.Validate, Status.Success);
        this.removeError(ErrorType.Validate);
        this.form.clearErrorsDeep();
        this.eventDispatcher.dispatch(HeadlessFormViewModelEvents.ValidateSuccess);
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
            this.eventDispatcher.dispatch(eventType, new FormActionErrorEventArg(reason))
        }
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
     * Called after the form has successfully loaded its source data.
     */
    protected onAfterLoad(): void {
        this.updateState(Action.Load, Status.Success);
        this.form.enable();
        this.form.reset();
        this.bindModel();
        this.eventDispatcher.dispatch(HeadlessFormViewModelEvents.LoadSuccess);
    }

    /**
     * Associate the model instance and the form through a model binder, if applicable.
     */
    private bindModel(): void {
        if (this._modelType && !this.binder && this.modelInstance) {
            const binder = Injector.Get(FormModelBinder);
            (this as Writeable<HeadlessFormViewModel>).modelInstance = binder.bind(this.modelInstance, this.form);
            (this as Writeable<HeadlessFormViewModel>).binder = binder;
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
        const response = this.loadRemote.send(null, {}, [FormTag, FormLoadTag]);
        return response.promise.then((response: HttpResponse<any>) => {
            console.log('ajax response');
            const baseError = `The ajax request didn't result with the expected value. ` +
                `You can intercept the response by listening to a "HttpEvents.BeforeResponse" event with the "FormLoadTag" tag ` +
                `to do some custom processing.`;
            if (this._modelType) {
                if (!this.isValidModelInstance(response.result)) {
                    throw new UsageException(baseError + ` An instance of "${String(this.modelType)}" is expected.`);
                }
                (this as Writeable<HeadlessFormViewModel>).modelInstance = response.result;
                this.bindModel();
            } else if (isObject(response.result)) {
                this.form.setDefaultValue(response.result);
            } else {
                throw new UsageException(baseError + ' An object is expected.');
            }
        });
    }

    /**
     * Insert values defined in the "loadData" attribute into the form.
     */
    private loadLocally(): Promise<void>|void {
        if (!isObject(this.loadData)) {
            return ;
        }
        if (!this._modelType) {
            // If we don't have a model, simply set the values in the form.
            this.form.setDefaultValue(this.loadData);
            return ;
        }
        const assignLoadData = async () => {
            const assignModelData = async (model: object) => {
                // If we don't have a model instance yet, simply set it.
                if (!this.modelInstance) {
                    (this as Writeable<HeadlessFormViewModel>).modelInstance = model;
                    return ;
                }
                // Otherwise, if we already have a model defined, we can't create a new one.
                // The easiest way to merge the two models is to convert it into a form,
                // make it concrete and them merge the values of the form.
                const formTransformResult = this.getTransformService().transform(model, FormTransformerSymbol);
                if (formTransformResult.promise) {
                    await formTransformResult.promise;
                }
                if (formTransformResult.result instanceof FormObject) {
                    // Make the controls concrete the the root value is set.
                    formTransformResult.result.getByPattern('**').markAsConcrete();

                    // Remove undefined values to allow for partial pojo.
                    const values = formTransformResult.result.value;
                    Object.keys(values).forEach(key => values[key] === undefined && delete values[key]);

                    // Assign the result as default.
                    this.form.setDefaultValue(values);
                }
            };
            // If loadData is not an instance of the expected type of model
            // we assume it's a POJO, so we need to convert back to a model.
            if (!this.isValidModelInstance(this.loadData)) {
                const ctor = this.getModelMetadata().resolveAlias(this._modelType as ModelExtendedIdentifier);
                const pojoTransformResult = this.getTransformService().transformInverse(this.loadData, ctor, PojoTransformerSymbol);
                if (pojoTransformResult.promise) {
                    await pojoTransformResult.promise;
                }
                await assignModelData(pojoTransformResult.result);
            } else {
                await assignModelData(this.loadData);
            }
        };

        // If we have a model type, we always become async to make the code easier.
        return new Promise<void>(async (resolve, reject) => {
            assignLoadData().then(resolve).catch(reject);
        });
    }

    /**
     * Check if the input value matches the expected model type.
     */
    private isValidModelInstance(value: any): value is object {
        if (!this.modelType) {
            return true;
        }
        const ctor = this.getModelMetadata().resolveAlias(this.modelType);
        return ctor === value.constructor;
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
                service = Injector.Get(ModelMetadataService);
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
                service = Injector.Get(TransformService);
            }
            return service;
        };
    })();
}
