import { HttpMethod } from "@banquette/http/constants";
import { RemoteModule } from "@banquette/model-api/module/remote/remote.module";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { Composable } from "@banquette/vue-typescript/decorator/composable.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";

/**
 * VueJS bridge to RemoteModule.
 */
@Composable()
export class RemoteComposable {
    /**
     * @see RemoteComposable
     */
    @Prop({type: String, default: null}) public url!: string|null;
    @Prop({type: String, default: null}) public endpoint!: string|null;
    @Prop({type: String, default: null}) public model!: string|null;
    @Prop({type: String, default: HttpMethod.GET, validate: (value) => ensureInEnum(value, HttpMethod, HttpMethod.GET)}) public method!: string|null;
    @Prop({type: Object, default: {}}) public urlParams!: Record<string, string>;

    /**
     * The actual module instance.
     */
    public module!: RemoteModule;

    @Watch(['url', 'endpoint', 'method', 'model', 'urlParams'], {immediate: ImmediateStrategy.NextTick})
    private syncConfigurationProps(): void {
        this.module.url = this.url;
        this.module.endpoint = this.endpoint;
        this.module.method = ensureInEnum(this.method, HttpMethod, HttpMethod.GET);
        this.module.urlParams = this.urlParams;
        this.module.model = this.model;
    }
}
