import { Injector } from "@banquette/dependency-injection/injector";
import { HttpMethod, HttpResponseStatus } from "@banquette/http/constants";
import { HttpResponse } from "@banquette/http/http-response";
import { RemoteModule } from "@banquette/ui/misc/remote/remote.module";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { ProgressCircularComponent } from "../../progress/progress-circular";
import { RemoteComposable } from "./remote.composable";

@Component({
    name: 'bt-remote',
    components: [ProgressCircularComponent]
})
export default class RemoteComponent extends Vue {
    /**
     * @see RemoteComposable
     */
    @Prop({type: String, default: null}) public url!: string|null;
    @Prop({type: String, default: null}) public endpoint!: string|null;
    @Prop({type: String, default: null}) public model!: string|null;
    @Prop({type: String, default: HttpMethod.GET, transform: (value) => ensureInEnum(value, HttpMethod, HttpMethod.GET)}) public method!: HttpMethod;
    @Prop({type: Object, default: {}}) public urlParams!: Record<string, string>;

    @Expose() public response: HttpResponse<any>|null = null;

    @Computed() public get waiting(): boolean { return this.response === null }
    @Computed() public get fetching(): boolean { return this.response !== null && this.response.status === HttpResponseStatus.Pending }
    @Computed() public get error(): boolean { return this.response !== null && this.response.status === HttpResponseStatus.Error }
    @Computed() public get ready(): boolean { return this.response !== null && this.response.status === HttpResponseStatus.Success }

    private remote: RemoteModule = new RemoteModule();

    /**
     * Try to fetch remote data if available.
     */
    public update(): void {
        if (!this.remote.isApplicable) {
            this.response = null;
        } else {
            this.response = this.remote.send();
            this.response.promise.finally(() => {
                this.$forceUpdateComputed();
            });
        }
    }

    @Watch(['url', 'endpoint', 'method', 'model', 'urlParams'], {immediate: ImmediateStrategy.NextTick})
    private syncConfigurationProps(): void {
        this.remote.updateConfiguration({
            url: this.url,
            endpoint: this.endpoint,
            method: this.method,
            urlParams: this.urlParams,
            model: this.model
        });
        this.update();
    }
}
