import { EventArg } from "@banquette/event/event-arg";
import { HttpMethod } from "@banquette/http/constants";
import { AfterBindModelEventArg } from "@banquette/ui/form/form/event/after-bind-model.event-arg";
import { AfterPersistEventArg } from "@banquette/ui/form/form/event/after-persist.event-arg";
import { AfterValidateEventArg } from "@banquette/ui/form/form/event/after-validate.event-arg";
import { BeforeBindModelEventArg } from "@banquette/ui/form/form/event/before-bind-model.event-arg";
import { BeforeLoadEventArg } from "@banquette/ui/form/form/event/before-load.event-arg";
import { BeforePersistEventArg } from "@banquette/ui/form/form/event/before-persist.event-arg";
import { BeforeValidateEventArg } from "@banquette/ui/form/form/event/before-validate.event-arg";
import { ActionErrorEventArg } from "@banquette/ui/form/form/event/action-error.event-arg";
import { HeadlessFormViewModel } from "@banquette/ui/form/form/headless-form-view.model";
import { Primitive, AnyObject } from "@banquette/utils-type/types";
import { Vue } from "@banquette/vue-typescript/vue";
import { FormViewDataInterface } from "./form-view-data.interface";
export default class FormComponent<ModelType extends object = any, ViewData extends FormViewDataInterface<ModelType> = FormViewDataInterface<ModelType>> extends Vue {
    /**
     * "v-model" recipient.
     */
    modelValue: AnyObject;
    /**
     * Optional model to bind the form with.
     */
    modelType: string | null;
    /**
     * Disable the whole form.
     */
    disabled: boolean;
    /**
     * Loading.
     */
    loadUrl: string | null;
    loadEndpoint: string | null;
    loadUrlParams: Record<string, Primitive>;
    loadHeaders: Record<string, Primitive>;
    /**
     * Persisting.
     */
    persistUrl: string | null;
    persistMethod: HttpMethod;
    persistEndpoint: string | null;
    persistUrlParams: Record<string, Primitive>;
    persistHeaders: Record<string, Primitive>;
    persistPayloadType: symbol;
    /**
     * If `true` the form can be submitted by pressing the `Enter` key.
     */
    submitWithEnter: boolean;
    /**
     * The group of validation to apply to the root of the form.
     */
    validationGroup: string | string[] | null;
    /**
     * Test if the default slot should be rendered (the slot containing the form).
     */
    get visible(): boolean;
    get isDisabled(): boolean;
    set isDisabled(value: boolean);
    v: ViewData;
    /**
     * Holds the logic unrelated to the VueJS implementation.
     */
    readonly vm: HeadlessFormViewModel<ViewData, ModelType>;
    private unsubscribeFunctions;
    /**
     * Vue lifecycle.
     */
    beforeMount(): void;
    /**
     * Vue lifecycle.
     */
    beforeUnmount(): void;
    submit(): void;
    /**
     * Virtual functions that are bound to events of the form.
     * These are meant to be overridden by subclasses.
     */
    protected onBeforeLoad(event: BeforeLoadEventArg): void;
    protected onLoadSuccess(event: EventArg): void;
    protected onLoadError(event: ActionErrorEventArg): void;
    protected onBeforePersist(event: BeforePersistEventArg): void;
    protected onPersistSuccess(event: AfterPersistEventArg): void;
    protected onPersistError(event: ActionErrorEventArg): void;
    protected onBeforeValidate(event: BeforeValidateEventArg): void;
    protected onAfterValidate(event: AfterValidateEventArg): void;
    protected onBeforeBindModel(event: BeforeBindModelEventArg): void;
    protected onAfterBindModel(event: AfterBindModelEventArg): void;
    /**
     * Force the update of the view.
     */
    protected forceUpdate(): void;
    /**
     * Force the update of the view, once per cycle.
     */
    private forceUpdateOnce;
    private onDisableChange;
    private onValidationGroupChange;
    private onModelValueChange;
    private syncLoadConfigurationProps;
    private syncPersistConfigurationProps;
}
