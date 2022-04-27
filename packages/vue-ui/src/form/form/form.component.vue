<style src="./form.component.css"></style>
<template src="./form.component.html" ></template>
<script lang="ts">
import { UnsubscribeFunction } from "@banquette/event/type";
import { HttpMethod } from "@banquette/http/constants";
import { PayloadTypeFormData } from "@banquette/http/encoder/form-data.encoder";
import { PayloadTypeJson } from "@banquette/http/encoder/json.encoder";
import { PayloadTypeRaw } from "@banquette/http/encoder/raw.encoder";
import { HeadlessFormViewModel } from "@banquette/ui/form/form/headless-form-view.model";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { proxy } from "@banquette/utils-misc/proxy";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { Writeable } from "@banquette/utils-type/types";
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
export default class FormComponent<ViewData extends FormViewDataInterface = FormViewDataInterface, ModelType extends object = any> extends Vue {
    /**
     * Optional model to bind the form with.
     */
    @Prop({name: 'model', type: String, default: null}) public modelType!: string|null;

    /**
     * Loading.
     */
    @Prop({name: 'load:url', type: String, default: null}) public loadUrl!: string|null;
    @Prop({name: 'load:endpoint', type: String, default: null}) public loadEndpoint!: string|null;
    @Prop({name: 'load:urlParams', type: Object, default: {}}) public loadUrlParams!: Record<string, string>;
    /**
     * An object holding the default values of the form.
     * Can be a POJO or a model.
     *
     * The object will not be modified by the form.
     */
    @Prop({name: 'load:data', type: Object, default: null}) public loadData!: any;

    /**
     * Persisting.
     */
    @Prop({name: 'persist:url', type: String, default: null}) public persistUrl!: string|null;
    @Prop({name: 'persist:method', type: String, transform: (value) => ensureInEnum(ensureString(value).toUpperCase(), HttpMethod, HttpMethod.POST)}) public persistMethod!: HttpMethod;
    @Prop({name: 'persist:endpoint', type: String, default: null}) public persistEndpoint!: string|null;
    @Prop({name: 'persist:urlParams', type: Object, default: {}}) public persistUrlParams!: Record<string, string>;
    @Prop({name: 'persist:payloadType', type: String, transform: (input: any) => {
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
        this.vm.viewData.__version = 0;
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

        this.unsubscribeFunctions.push(this.vm.form.onControlAdded(() => {
            // @see FormViewDataInterface
            this.v.__version++;
        }, 0, false));
        this.unsubscribeFunctions.push(this.vm.form.onControlRemoved(() => {
            // @see FormViewDataInterface
            this.v.__version++;
        }, 0, false));
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
    /* virtual */ protected onBeforeLoad(): void {}
    /* virtual */ protected onLoadSuccess(): void {}
    /* virtual */ protected onLoadError(): void {}
    /* virtual */ protected onBeforePersist(): void {}
    /* virtual */ protected onPersistSuccess(): void {}
    /* virtual */ protected onPersistError(): void {}
    /* virtual */ protected onBeforeValidate(): void {}
    /* virtual */ protected onValidateSuccess(): void {}
    /* virtual */ protected onValidateError(): void {}

    @Watch(['modelType','loadUrl', 'loadEndpoint','loadUrlParams', 'loadData'], {immediate: ImmediateStrategy.BeforeMount})
    private syncLoadConfigurationProps(): void {
        this.vm.modelType = this.modelType;
        this.vm.loadData = this.loadData;
        this.vm.loadRemote.updateConfiguration({
            model: this.modelType,
            url: this.loadUrl,
            endpoint: this.loadEndpoint,
            urlParams: this.loadUrlParams
        });
    }

    @Watch(['modelType','persistUrl', 'persistEndpoint','persistUrlParams', 'persistPayloadType'], {immediate: ImmediateStrategy.BeforeMount})
    private syncPersistConfigurationProps(): void {
        this.vm.modelType = this.modelType;
        this.vm.persistRemote.updateConfiguration({
            model: this.modelType,
            url: this.persistUrl,
            method: this.persistMethod,
            endpoint: this.persistEndpoint,
            urlParams: this.persistUrlParams,
            payloadType: this.persistPayloadType
        });
    }
}
</script>
