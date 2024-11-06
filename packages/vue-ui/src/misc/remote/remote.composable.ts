import { HttpMethod } from "@banquette/http";
import { RemoteModule, RealTimeStrategy } from "@banquette/ui";
import { ensureInEnum } from "@banquette/utils-array";
import { Primitive } from "@banquette/utils-type";
import { Composable, Prop, Watch, ImmediateStrategy } from "@banquette/vue-typescript";
import { PropType } from "vue";

/**
 * VueJS bridge to RemoteModule.
 */
@Composable()
export class RemoteComposable {
    /**
     * @see RemoteComposable
     */
    @Prop({type: String as PropType<string|null>, default: null}) public url!: string|null;
    @Prop({type: String as PropType<string|null>, default: null}) public endpoint!: string|null;
    @Prop({type: String as PropType<string|null>, default: null}) public model!: string|null;
    @Prop({type: String as PropType<HttpMethod>, default: HttpMethod.GET, transform: (value) => ensureInEnum(value, HttpMethod, HttpMethod.GET)}) public method!: HttpMethod;
    @Prop({type: Object as PropType<Record<string, Primitive>>, default: {}}) public urlParams!: Record<string, Primitive>;
    @Prop({type: Object as PropType<Record<string, Primitive>>, default: {}}) public headers!: Record<string, Primitive>;
    @Prop({type: Boolean, default: false}) public cacheInMemory!: boolean;
    @Prop({type: String as PropType<RealTimeStrategy>, default: RealTimeStrategy.None, transform: (value) => ensureInEnum(value, RealTimeStrategy, RealTimeStrategy.None)}) public realTimeStrategy!: RealTimeStrategy;
    @Prop({ type: String as PropType<string | null>, default: null }) public realTimeEndpoint!: string | null;
    @Prop({ type: String as PropType<string | null>, default: null }) public subscriptionName!: string | null;
    @Prop({ type: Number, default: 5000 }) public pollingInterval!: number;

    /**
     * The actual module instance.
     */
    public module!: RemoteModule;

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
        { immediate: ImmediateStrategy.BeforeMount }
    )
    private syncConfigurationProps(): void {
        this.module.updateConfiguration({
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
    }
}
