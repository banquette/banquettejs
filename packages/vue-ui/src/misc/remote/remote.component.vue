<template src="./remote.component.html" ></template>
<script lang="ts">
import { HttpMethod, HttpResponse, HttpResponseStatus } from "@banquette/http";
import { RealTimeStrategy, RemoteModule, RemoteModuleResponseEventArg } from "@banquette/ui";
import { ensureInEnum } from "@banquette/utils-array";
import { Primitive } from "@banquette/utils-type";
import { Component, Computed, Expose, ImmediateStrategy, Prop, Vue, Watch } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { BtProgressCircular } from "../../progress/progress-circular";
import { UnsubscribeFunction } from "@banquette/event";

@Component({
    name: 'bt-remote',
    components: [BtProgressCircular],
    emits: ['ready', 'error']
})
export default class BtRemote extends Vue {
    @Prop({type: String as PropType<string|null>, default: null}) public url!: string|null;
    @Prop({type: String as PropType<string|null>, default: null}) public endpoint!: string|null;
    @Prop({type: String as PropType<string|null>, default: null}) public model!: string|null;
    @Prop({type: String as PropType<HttpMethod>, default: HttpMethod.GET, transform: (value) => ensureInEnum(value, HttpMethod, HttpMethod.GET)}) public method!: HttpMethod;
    @Prop({type: Object as PropType<Record<string, Primitive>>, default: {}}) public urlParams!: Record<string, Primitive>;
    @Prop({type: Object as PropType<Record<string, Primitive>>, default: {}}) public headers!: Record<string, Primitive>;
    @Prop({type: Boolean as PropType<boolean>, default: false}) public cacheInMemory!: boolean;
    @Prop({type: String as PropType<RealTimeStrategy>, default: RealTimeStrategy.None, transform: (value) => ensureInEnum(value, RealTimeStrategy, RealTimeStrategy.None)}) public realTimeStrategy!: RealTimeStrategy;
    @Prop({ type: String as PropType<string | null>, default: null }) public realTimeEndpoint!: string | null;
    @Prop({ type: String as PropType<string | null>, default: null }) public subscriptionName!: string | null;
    @Prop({ type: Number, default: 5000 }) public pollingInterval!: number;

    @Expose() public response: HttpResponse<any>|null = null;
    @Expose() public bag: any = {};

    @Computed() public get waiting(): boolean { return this.response === null }
    @Computed() public get fetching(): boolean { return this.response !== null && this.response.status === HttpResponseStatus.Pending }
    @Computed() public get error(): boolean { return this.response !== null && this.response.status === HttpResponseStatus.Error }
    @Computed() public get ready(): boolean { return this.response !== null && this.response.status === HttpResponseStatus.Success }

    private remote: RemoteModule = new RemoteModule();
    private unsubscribe: UnsubscribeFunction | null = null;

    public mounted(): void {
        this.unsubscribe = this.remote.onResponse((event: RemoteModuleResponseEventArg) => {
            this.response = event.response;
            if (this.response?.isSuccess) {
                this.$emit('ready', this.response);
            } else {
                this.$emit('error', this.response);
            }
            this.$forceUpdateComputed();
        });
    }

    public beforeUnmount(): void {
        this.remote.dispose();
        if (this.unsubscribe !== null) {
            this.unsubscribe();
        }
        this.unsubscribe = null;
    }

    /**
     * Try to fetch remote data if available.
     */
    @Expose() public update(): void {
        if (!this.remote.isApplicable) {
            this.response = null;
        } else {
            this.remote.send();
        }
    }

    @Watch(
        [
            'url',
            'endpoint',
            'method',
            'model',
            'urlParams',
            'headers',
            'cacheInMemory',
            'realTimeStrategy',
            'realTimeEndpoint',
            'subscriptionName',
            'pollingInterval',
        ],
        { immediate: ImmediateStrategy.BeforeMount, deep: true }
    )
    private syncConfigurationProps(): void {
        this.remote.updateConfiguration({
            url: this.url,
            endpoint: this.endpoint,
            method: this.method,
            urlParams: this.urlParams,
            headers: this.headers,
            model: this.model,
            cacheInMemory: this.cacheInMemory,
            realTimeStrategy: this.realTimeStrategy,
            realTimeEndpoint: this.realTimeEndpoint,
            subscriptionName: this.subscriptionName,
            pollingInterval: this.pollingInterval,
        });
        this.update();
    }
}
</script>
