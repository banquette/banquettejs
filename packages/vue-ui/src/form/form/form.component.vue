<style src="./form.component.css"></style>
<template src="./form.component.html" ></template>
<script lang="ts">
import { EventArg } from "@banquette/event/event-arg";
import { UnsubscribeFunction } from "@banquette/event/type";
import { ContextualizedState } from "@banquette/form/constant";
import { StateChangedFormEvent } from "@banquette/form/event/state-changed.form-event";
import { HttpMethod } from "@banquette/http/constants";
import { PayloadTypeFormData } from "@banquette/http/encoder/form-data.encoder";
import { PayloadTypeJson } from "@banquette/http/encoder/json.encoder";
import { PayloadTypeRaw } from "@banquette/http/encoder/raw.encoder";
import { BindModelEventArg } from "@banquette/ui/form/form/event/bind-model.event-arg";
import { FormActionErrorEventArg } from "@banquette/ui/form/form/event/form-action-error.event-arg";
import { FormAfterPersistEventArg } from "@banquette/ui/form/form/event/form-after-persist.event-arg";
import { FormAfterRemotePersistEventArg } from "@banquette/ui/form/form/event/form-after-remote-persist.event-arg";
import { FormBeforePersistEventArg } from "@banquette/ui/form/form/event/form-before-persist.event-arg";
import { HeadlessFormViewModel } from "@banquette/ui/form/form/headless-form-view.model";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { oncePerCycleProxy } from "@banquette/utils-misc/once-per-cycle-proxy";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { Writeable, Primitive } from "@banquette/utils-type/types";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { FormViewDataInterface } from "./form-view-data.interface";

@Component({
    name: 'bt-form',
    emits: [
        'before-load',
        'load-success',
        'load-error',
        'before-persist',
        'persist-success',
        'persist-error',
        'before-validate',
        'validate-success',
        'validate-error',
        'bind-model',
        'update:disabled'
    ]
})
export default class FormComponent<ModelType extends object = any, ViewData extends FormViewDataInterface<ModelType> = FormViewDataInterface<ModelType>> extends Vue {
    /**
     * Optional model to bind the form with.
     */
    @Prop({name: 'model', type: String, default: null}) public modelType!: string|null;

    /**
     * Disable the whole form.
     */
    @Prop({type: Boolean, default: false}) public disabled!: boolean;

    /**
     * Loading.
     */
    @Prop({name: 'loadUrl', type: String, default: null}) public loadUrl!: string|null;
    @Prop({name: 'loadEndpoint', type: String, default: null}) public loadEndpoint!: string|null;
    @Prop({name: 'loadUrlParams', type: Object, default: {}}) public loadUrlParams!: Record<string, Primitive>;
    @Prop({name: 'loadHeaders', type: Object, default: {}}) public loadHeaders!: Record<string, Primitive>;

    /**
     * An object holding the default values of the form.
     * Can be a POJO or a model.
     *
     * The object will not be modified by the form.
     */
    @Prop({name: 'loadData', type: Object, default: null}) public loadData!: any;

    /**
     * Persisting.
     */
    @Prop({name: 'persistUrl', type: String, default: null}) public persistUrl!: string|null;
    @Prop({name: 'persistMethod', type: String, transform: (value) => ensureInEnum(ensureString(value).toUpperCase(), HttpMethod, HttpMethod.POST)}) public persistMethod!: HttpMethod;
    @Prop({name: 'persistEndpoint', type: String, default: null}) public persistEndpoint!: string|null;
    @Prop({name: 'persistUrlParams', type: Object, default: {}}) public persistUrlParams!: Record<string, Primitive>;
    @Prop({name: 'persistHeaders', type: Object, default: {}}) public persistHeaders!: Record<string, Primitive>;
    @Prop({name: 'persistPayloadType', type: String, transform: (input: any) => {
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
     * The group of validation to apply to the root of the form.
     */
    @Prop({type: [String, Array], default: null}) public validationGroup!: string|string[]|null;

    /**
     * Test if the default slot should be rendered (the slot containing the form).
     */
    @Computed() public get visible(): boolean {
        if (!this.v) {
            return false;
        }
        return (!this.v.loading || !this.hasSlot('loading')) &&
            (!this.v.persisting || !this.hasSlot('persisting')) &&
            (!this.v.loadError || !this.hasSlot('load-error')) &&
            (!this.v.persistError || !this.hasSlot('persist-error')) &&
            (!this.v.persistSuccess || !this.hasSlot('persist-success'));
    }

    @Computed()
    public get isDisabled(): boolean {
        return this.disabled;
    }
    public set isDisabled(value: boolean) {
        this.$emit('update:disabled', value);
    }

    @Expose() public v!: ViewData;

    /**
     * Holds the logic unrelated to the VueJS implementation.
     */
    public readonly vm!: HeadlessFormViewModel<ViewData, ModelType>;

    private unsubscribeFunctions: UnsubscribeFunction[] = [];

    /**
     * Vue lifecycle.
     */
    public beforeMount(): void {
        (this as Writeable<FormComponent>).vm = new HeadlessFormViewModel<ViewData, ModelType>();
        // this.vm.viewData.__version = 0;
        this.vm.viewData.model = null;
        this.vm.viewData.persistResponse = null;
        this.v = this.vm.viewData as ViewData;

        // So the proxy is used by the headless view model.
        this.vm.setViewData(this.v);

        // Form events
        this.unsubscribeFunctions.push(this.vm.form.onValueChanged(this.forceUpdateOnce));
        this.unsubscribeFunctions.push(this.vm.form.onControlAdded(this.forceUpdateOnce, 0, false));
        this.unsubscribeFunctions.push(this.vm.form.onControlRemoved(this.forceUpdateOnce, 0, false));
        this.unsubscribeFunctions.push(this.vm.form.onStateChanged((event: StateChangedFormEvent) => {
            if (event.state === ContextualizedState.Disabled) {
                this.$emit('update:disabled', event.newValue);
            }
        }));

        // Subclasses events
        this.unsubscribeFunctions.push(this.vm.onBeforeLoad((event: EventArg) => {
            this.$emit('before-load', event);
            this.onBeforeLoad(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onLoadSuccess((event: EventArg) => {
            this.$emit('load-success', event);
            this.onLoadSuccess(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onLoadError((event: FormActionErrorEventArg) => {
            this.$emit('load-error', event);
            this.onLoadError(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onBeforePersist((event: FormBeforePersistEventArg) => {
            this.$emit('before-persist', event);
            this.onBeforePersist(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onPersistSuccess((event: FormAfterPersistEventArg) => {
            this.vm.viewData.persistResponse = event instanceof FormAfterRemotePersistEventArg ? event.response : null;
            this.$emit('persist-success', event);
            this.onPersistSuccess(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onPersistError((event: FormActionErrorEventArg) => {
            this.$emit('persist-error', event);
            this.onPersistError(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onBeforeValidate((event: EventArg) => {
            this.$emit('before-validate', event);
            this.onBeforeValidate(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onValidateSuccess((event: EventArg) => {
            this.$emit('validate-success', event);
            this.onValidateSuccess(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onValidateError((event: FormActionErrorEventArg) => {
            this.$emit('validate-error', event);
            this.onValidateError(event);
        }));
        this.unsubscribeFunctions.push(this.vm.onBindModel((event: BindModelEventArg) => {
            this.$emit('bind-model', event);
            this.v.model = event.model as ModelType;
            this.onBindModel(event);
        }));
    }

    /**
     * Vue lifecycle.
     */
    public mounted(): void {
        this.vm.load();
    }

    /**
     * Vue lifecycle.
     */
    public beforeUnmount(): void {
        for (const fn of this.unsubscribeFunctions) {
            fn();
        }
        this.unsubscribeFunctions = [];
    }

    @Expose() public submit(): void {
        this.vm.submit();
    }

    /**
     * Virtual functions that are bound to events of the form.
     * These are meant to be overridden by subclasses.
     */
    /* virtual */ protected onBeforeLoad(event: EventArg): void {}
    /* virtual */ protected onLoadSuccess(event: EventArg): void {}
    /* virtual */ protected onLoadError(event: FormActionErrorEventArg): void {}
    /* virtual */ protected onBeforePersist(event: FormBeforePersistEventArg): void {}
    /* virtual */ protected onPersistSuccess(event: FormAfterPersistEventArg): void {}
    /* virtual */ protected onPersistError(event: FormActionErrorEventArg): void {}
    /* virtual */ protected onBeforeValidate(event: EventArg): void {}
    /* virtual */ protected onValidateSuccess(event: EventArg): void {}
    /* virtual */ protected onValidateError(event: FormActionErrorEventArg): void {}
    /* virtual */ protected onBindModel(event: BindModelEventArg): void {}

    /**
     * Force the update of the view.
     */
    protected forceUpdate(): void {
        this.$forceUpdate();
    }

    /**
     * Force the update of the view, once per cycle.
     */
    private forceUpdateOnce = oncePerCycleProxy(() => {
        this.forceUpdate();
    });

    @Watch('disabled', {immediate: false})
    private onDisableChange(newValue: boolean): void {
        if (newValue) {
            this.vm.form.disable();
        } else {
            this.vm.form.enable();
        }
    }
    @Watch('validationGroup', {immediate: ImmediateStrategy.BeforeMount})
    private onValidationGroupChange(newValue: string|string[]|null): void {
        this.vm.form.setValidationGroups(newValue);
    }

    @Watch(['modelType','loadUrl', 'loadEndpoint','loadUrlParams', 'loadHeaders', 'loadData'], {immediate: ImmediateStrategy.BeforeMount})
    private syncLoadConfigurationProps(): void {
        this.vm.modelType = this.modelType;
        this.vm.loadData = this.loadData;
        this.vm.loadRemote.updateConfiguration({
            model: this.modelType,
            url: this.loadUrl,
            endpoint: this.loadEndpoint,
            urlParams: this.loadUrlParams,
            headers: this.loadHeaders
        });
    }

    @Watch(['modelType', 'persistUrl', 'persistEndpoint','persistUrlParams', 'persistHeaders', 'persistPayloadType'], {immediate: ImmediateStrategy.BeforeMount})
    private syncPersistConfigurationProps(): void {
        this.vm.modelType = this.modelType;
        this.vm.persistRemote.updateConfiguration({
            model: this.modelType,
            url: this.persistUrl,
            method: this.persistMethod,
            endpoint: this.persistEndpoint,
            urlParams: this.persistUrlParams,
            headers: this.persistHeaders,
            payloadType: this.persistPayloadType
        });
    }
}
</script>
