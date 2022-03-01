import { RemoteException } from "@banquette/api/exception/remote.exception";
import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { Injector } from "@banquette/dependency-injection/injector";
import { ExceptionFactory } from "@banquette/exception/exception.factory";
import { BasicState } from "@banquette/form/constant";
import { StateChangedFormEvent } from "@banquette/form/event/state-changed.form-event";
import { ComponentNotFoundException } from "@banquette/form/exception/component-not-found.exception";
import { FormControl } from "@banquette/form/form-control";
import { FormObject } from "@banquette/form/form-object";
import { HttpMethod } from "@banquette/http/constants";
import { PayloadTypeFormData } from "@banquette/http/encoder/form-data.encoder";
import { PayloadTypeJson } from "@banquette/http/encoder/json.encoder";
import { PayloadTypeRaw } from "@banquette/http/encoder/raw.encoder";
import { HttpResponse } from "@banquette/http/http-response";
import { FormModelBinder } from "@banquette/model-form/form-model-binder";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { PojoTransformerSymbol } from "@banquette/model/transformer/type/root/pojo";
import { RemoteModule } from "@banquette/ui/misc/module/remote/remote.module";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { getObjectValue } from "@banquette/utils-object/get-object-value";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { isObjectLiteral, isObject } from "@banquette/utils-type/is-object";
import { isPojo } from "@banquette/utils-type/is-pojo";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { toRaw } from "vue";
import {
    Action,
    ErrorType,
    FORM_GENERIC_PERSIST_REQUESTS_TAG,
    FORM_GENERIC_LOAD_REQUESTS_TAG,
    Status
} from "../constant";
import { RemoteValidationException } from "../exception/remote-validation.exception";

@Module()
@Component({
    name: 'bt-form',
    factory: () => Injector.Get(FormComponent)
})
export default class FormComponent extends Vue {
    /**
     * Optional model to bind the form with.
     */
    @Prop({name: 'model', type: String, default: null}) public modelType!: string|null;

    /**
     * Loading.
     */
    @Prop({name: 'load:url', type: String, default: null}) public loadUrl!: string|null;

    /**
     * An object holding the default values of the form.
     * Can be a POJO or a model.
     *
     * The object will not be modified by the form.
     */
    @Prop({name: 'load:data', type: Object, default: null}) public loadData!: any;
    @Prop({name: 'load:endpoint', type: String, default: null}) public loadEndpoint!: string|null;
    @Prop({name: 'load:urlParams', type: Object, default: {}}) public loadUrlParams!: Record<string, string>;

    /**
     * Persisting.
     */
    @Prop({name: 'persist:url', type: String, default: null}) public persistUrl!: string|null;
    @Prop({name: 'persist:method', type: String, validate: (value) => ensureInEnum(ensureString(value).toUpperCase(), HttpMethod, HttpMethod.POST)}) public persistMethod!: HttpMethod;
    @Prop({name: 'persist:endpoint', type: String, default: null}) public persistEndpoint!: string|null;
    @Prop({name: 'persist:urlParams', type: Object, default: {}}) public persistUrlParams!: Record<string, string>;
    @Prop({name: 'persist:ajax', type: Boolean, default: true}) public persistAjax!: boolean;
    @Prop({name: 'persist:payloadType', type: String, validate: (input: any) => {
        if (input === 'form-data') {
            return PayloadTypeFormData;
        } else if (input === 'raw') {
            return PayloadTypeRaw;
        }
        return PayloadTypeJson;
    }}) public persistPayloadType!: symbol;

    /**
     * If `true` the form can be submitted by pressing the `Enter` key.
     */
    @Prop({type: Boolean, default: false}) public submitWithEnter!: boolean;

    /**
     * The actual form object.
     */
    @Expose() public form: FormObject = new FormObject();

    /**
     * Current status of the form.
     */
    @Expose() public action: Action|null = Action.Load | Status.Working;
    @Computed() public get idle(): boolean { return this.action === null }
    @Computed() public get loading(): boolean { return this.is(Action.Load, Status.Working) }
    @Computed() public get loadError(): boolean { return this.is(Action.Load, Status.Failure) }
    @Computed() public get persisting(): boolean { return this.is(Action.Persist, Status.Working) }
    @Computed() public get persistError(): boolean { return this.is(Action.Persist, Status.Failure) }
    @Computed() public get persistSuccess(): boolean { return this.is(Action.Persist, Status.Success) }

    /**
     * Test if the default slot should be rendered (the slot containing the form).
     */
    @Computed() public get visible(): boolean {
        return (!this.hasSlot('loading') || !this.loading) &&
            (!this.hasSlot('persisting') || !this.persisting) &&
            (!this.hasSlot('load-error') || !this.loadError) &&
            (!this.hasSlot('persist-error') || !this.persistError) &&
            (!this.hasSlot('persist-success') || !this.persistSuccess);
    }

    /**
     * Instance of the mode on edition, if there is one.
     */
    @Expose('modelEntity') public model: object|null = null;

    /**
     * Current active errors.
     */
    @Expose() public errorsMap: Record<string, string|null> = {};

    /**
     * To offer a reference on the vm to the slots.
     */
    @Expose() public vm!: FormComponent;

    /**
     * Composables.
     */
    private loadRemote!: RemoteModule;
    private persistRemote!: RemoteModule;

    /**
     * Form model binder used if a model is defined.
     */
    private binder: FormModelBinder|null = null;

    /**
     * A map of controls indexed by their path in the form.
     * This is to avoid creating a new control for the same path if the Vue component is destroyed and re-created.
     */
    private createdControlsMap: Record<string, FormControl> = {};

    public constructor(@Inject(TransformService) private transformService: TransformService,
                       @Inject(RemoteModule) loadRemote: RemoteModule,
                       @Inject(RemoteModule) persistRemote: RemoteModule) {
        super();
        this.loadRemote = loadRemote;
        this.persistRemote = persistRemote;
    }

    /**
     * Vue lifecycle hook.
     */
    public beforeMount(): void {
        this.vm = this;
    }

    /**
     * Vue lifecycle hook.
     */
    public mounted(): void {
        this.action = null;
        this.load();
        this.form.onStateChanged((event: StateChangedFormEvent) => {
            if (event.state === BasicState.Validating && !event.newValue && this.form.valid) {
                this.removeError(ErrorType.Validate);
            }
        });
        this.form.onValueChanged(() => this.$forceUpdate());
    }

    /**
     * Force the validation of the form, but doesn't submit it.
     */
    @Expose() public async validate(): Promise<boolean> {
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
     * Load the form.
     */
    @Expose() public load(): void {
        if (this.is(Action.Load, Status.Working)) {
            return ;
        }
        const doLoad = async () => {
            this.form.disable();
            this.updateState(Action.Load, Status.Working);
            if (this.loadRemote.isApplicable) {
                const response = this.loadRemote.send(null, this.loadUrlParams, [FORM_GENERIC_LOAD_REQUESTS_TAG]);
                await response.promise;
                if (this.modelType !== null) {
                    this.model = response.result;
                } else {
                    this.loadData = response.result;
                }
            } else if (this.modelType !== null) {
                let loadData = isObject(this.loadData) ? this.loadData : {};
                if (isPojo(loadData)) {
                    const transformResult = this.transformService.transformInverse(loadData, this.modelType, PojoTransformerSymbol);
                    if (transformResult.promise !== null) {
                        await transformResult.promise;
                    }
                    loadData = transformResult.result;
                }
                this.model = loadData;
            }
            if (this.model) {
                this.binder = Injector.Get(FormModelBinder);
                this.model = this.binder.bind(toRaw(this.model), this.form);
                this.form.enable();
            } else {
                //
                // The call to `$nextTrick` is required here if we have no model.
                // Because if a `loading` slot have been defined by the end user, the `default` has not been rendered yet,
                // it will only be rendered when the status is not `Working` anymore.
                //
                // So we wait the next tick after the status change to let time for the default slot to render.
                //
                this.$nextTick(() => {
                    // Wait another tick to let the time for the controls to be created
                    // through the `getOrCreateControl` method.
                    this.$nextTick(() => {
                        this.form.setDefaultValue(this.loadData || {});
                        this.form.reset();
                        this.form.enable();
                    });
                });
            }
            this.updateState(Action.Load, Status.Success);
        };
        doLoad().catch((reason: any) => {
            this.updateState(Action.Load, Status.Failure);
            this.setError(ErrorType.Load, reason);
            console.error(reason);
        }).finally(() => {
            this.form.enable();
        });
    }

    /**
     * Force the validation of the form and submit it if everything is valid.
     */
    @Expose() public submit(): void {
        if (this.is(Action.Persist, Status.Working)) {
            return ;
        }
        const doSubmit = async () => {
            if (!(await this.validate())) {
                return;
            }
            this.clearErrors();
            if (this.persistRemote.isApplicable) {
                this.form.disable();
                this.updateState(Action.Persist, Status.Working);
                this.persistRemote.payloadType = this.persistPayloadType;
                const response: HttpResponse<any> = this.persistRemote.send(this.modelType ? this.model : this.form.value, {}, [FORM_GENERIC_PERSIST_REQUESTS_TAG]);
                try {
                    await response.promise;
                    this.updateState(Action.Persist, Status.Success);
                } catch (e) {
                    this.updateState(Action.Persist, Status.Failure);
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
            } else {
                this.$emit('submit', this.modelType ? this.model : this.form.value);
            }
        };
        doSubmit().catch((reason: any) => {
            if (reason instanceof HttpResponse) {
                reason = reason.result instanceof RemoteException ? reason.result : reason.error;
            }
            this.updateState(Action.Persist, Status.Failure);
            this.setError(ErrorType.Persist, reason);
            console.error(reason);
        }).finally(() => {
            this.form.enable();
        });
    }

    /**
     * Offer an easy way to get or create controls into the form.
     * Creating a control is only available if the form is not bound to a model.
     */
    @Expose() public getOrCreateControl(path: string): any {
        try {
            return this.form.get(path);
        } catch (e) {
            if (e instanceof ComponentNotFoundException) {
                // A form cannot be mutated when bound to a model.
                // If the user tries to associate a vue component to a non existing part of the model, if will be disabled.
                if (this.modelType) {
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
     * @inheritDoc
     */
    @Expose() public hasSlot(name: string): boolean {
        return super.hasSlot(name);
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
        this.errorsMap[errorMapIndex] = reason !== null ? reason.message : null;
    }

    /**
     * Remove a type of error.
     */
    protected removeError(error: ErrorType): void {
        if (!isUndefined(this.errorsMap[error])) {
            delete this.errorsMap[error];
        }
    }

    /**
     * Remove all errors.
     */
    protected clearErrors(): void {
        this.errorsMap = {};
    }

    /**
     * Gets a collection of violations from the server and binds them to the form.
     */
    protected bindPersistErrorsToForm(validationException: RemoteValidationException): void {
        // In case the form has been destroyed with the "default" slot,
        // we wait the next tick for the form the be rendered again.
        this.$nextTick(() => {

            // Wait another tick to let time for the controls
            // to bind with the form, so when we validate it they are concrete.
            this.$nextTick(() => {

                // The validate is here to ensure all concrete controls are marked
                // as `validated`, so errors can appear.
                this.form.validate();
                for (const violation of validationException.violations) {
                    this.form.addChildError(violation.path, {
                        type: violation.type,
                        message: violation.message
                    });
                }
            });
        });
    }

    /**
     * Test if the form is in a certain state.
     */
    protected is(action: Action|null, status: Status|null = null): boolean {
        if (action === null && status !== null) {
            return this.action !== null ? ((this.action & status) === status) : status === Status.Working;
        }
        if (this.action === null || action === null) {
            return this.action === action;
        }
        if (status === null) {
            return (this.action & action) === action;
        }
        return this.action === (action | status);
    }

    /**
     * Update the status of the component.
     */
    protected updateState(action: Action|null, status: Status|null = null): void {
        this.action = action;
        if (this.action !== null && status !== null) {
            this.action |= status;
        }
    }

    @Watch(['modelType','loadUrl', 'loadEndpoint','loadUrlParams'], {immediate: ImmediateStrategy.BeforeMount})
    private syncLoadConfigurationProps(): void {
        this.loadRemote.model = this.modelType;
        this.loadRemote.url = this.loadUrl;
        this.loadRemote.endpoint = this.loadEndpoint;
        this.loadRemote.urlParams = this.loadUrlParams;
    }

    @Watch(['modelType','persistUrl', 'persistEndpoint','persistUrlParams'], {immediate: ImmediateStrategy.BeforeMount})
    private syncPersistConfigurationProps(): void {
        this.persistRemote.model = this.modelType;
        this.persistRemote.url = this.persistUrl;
        this.persistRemote.endpoint = this.persistEndpoint;
        this.persistRemote.urlParams = this.persistUrlParams;
        this.persistRemote.method = this.persistMethod;
    }
}
