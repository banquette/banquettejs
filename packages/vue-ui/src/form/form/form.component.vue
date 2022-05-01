<style src="./form.component.css"></style>
<template src="./form.component.html" ></template>
<script lang="ts">
import { EventArg } from "@banquette/event/event-arg";
import { UnsubscribeFunction } from "@banquette/event/type";
import { HttpMethod } from "@banquette/http/constants";
import { PayloadTypeFormData } from "@banquette/http/encoder/form-data.encoder";
import { PayloadTypeJson } from "@banquette/http/encoder/json.encoder";
import { PayloadTypeRaw } from "@banquette/http/encoder/raw.encoder";
import { BindModelEventArg } from "@banquette/ui/form/form/event/bind-model.event-arg";
import { FormPersistEventArg } from "@banquette/ui/form/form/event/form-persist.event-arg";
import { HeadlessFormViewModel } from "@banquette/ui/form/form/headless-form-view.model";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { oncePerCycleProxy } from "@banquette/utils-misc/once-per-cycle-proxy";
import { proxy } from "@banquette/utils-misc/proxy";
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
    emits: ['load', 'submit']
})
export default class FormComponent<ModelType extends object = any, ViewData extends FormViewDataInterface<ModelType> = FormViewDataInterface<ModelType>> extends Vue {
    /**
     * Optional model to bind the form with.
     */
    @Prop({name: 'model', type: String, default: null}) public modelType!: string|null;

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
        this.v = this.vm.viewData as ViewData;

        // So the proxy is used by the headless view model.
        this.vm.setViewData(this.v);

        // Events
        this.unsubscribeFunctions.push(this.vm.onBeforeLoad(proxy(this.onBeforeLoad, this)));
        this.unsubscribeFunctions.push(this.vm.onLoadSuccess(proxy(this.onLoadSuccess, this)));
        this.unsubscribeFunctions.push(this.vm.onLoadError(proxy(this.onLoadError, this)));
        this.unsubscribeFunctions.push(this.vm.onBeforePersist(proxy(this.onBeforePersist, this)));
        this.unsubscribeFunctions.push(this.vm.onPersistSuccess(proxy(this.onPersistSuccess, this)));
        this.unsubscribeFunctions.push(this.vm.onPersistError(proxy(this.onPersistError, this)));
        this.unsubscribeFunctions.push(this.vm.onBeforeValidate(proxy(this.onBeforeValidate, this)));
        this.unsubscribeFunctions.push(this.vm.onValidateSuccess(proxy(this.onValidateSuccess, this)));
        this.unsubscribeFunctions.push(this.vm.onValidateError(proxy(this.onValidateError, this)));
        this.unsubscribeFunctions.push(this.vm.onBindModel((event: BindModelEventArg) => {
            this.v.model = event.model as ModelType;
            this.onBindModel(event);
        }));
        this.unsubscribeFunctions.push(this.vm.form.onValueChanged(this.forceUpdateOnce));
        this.unsubscribeFunctions.push(this.vm.form.onControlAdded(this.forceUpdateOnce, 0, false));
        this.unsubscribeFunctions.push(this.vm.form.onControlRemoved(this.forceUpdateOnce, 0, false));
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
    /* virtual */ protected onLoadError(event: EventArg): void {}
    /* virtual */ protected onBeforePersist(event: FormPersistEventArg): void {}
    /* virtual */ protected onPersistSuccess(event: EventArg): void {}
    /* virtual */ protected onPersistError(event: EventArg): void {}
    /* virtual */ protected onBeforeValidate(event: EventArg): void {}
    /* virtual */ protected onValidateSuccess(event: EventArg): void {}
    /* virtual */ protected onValidateError(event: EventArg): void {}
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
