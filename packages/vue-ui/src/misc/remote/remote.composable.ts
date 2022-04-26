import { HttpMethod } from "@banquette/http/constants";
import { RemoteModule } from "@banquette/ui/misc/remote/remote.module";
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
    @Prop({type: String, default: HttpMethod.GET, transform: (value) => ensureInEnum(value, HttpMethod, HttpMethod.GET)}) public method!: HttpMethod;
    @Prop({type: Object, default: {}}) public urlParams!: Record<string, string>;

    /**
     * The actual module instance.
     */
    public module!: RemoteModule;

    @Watch(['url', 'endpoint', 'method', 'model', 'urlParams'], {immediate: ImmediateStrategy.BeforeMount})
    private syncConfigurationProps(): void {
        this.module.updateConfiguration({
            url: this.url,
            endpoint: this.endpoint,
            method: this.method,
            urlParams: this.urlParams,
            model: this.model
        });
    }
}
