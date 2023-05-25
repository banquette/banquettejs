<template src="./remote.component.html" ></template>
<script lang="ts">
import { HttpMethod, HttpResponseStatus, HttpResponse } from "@banquette/http";
import { RemoteModule } from "@banquette/ui";
import { ensureInEnum } from "@banquette/utils-array";
import { Primitive } from "@banquette/utils-type";
import { Component, Computed, Expose, Prop, Watch, ImmediateStrategy, Vue } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { BtProgressCircular } from "../../progress/progress-circular";

@Component({
    name: 'bt-remote',
    components: [BtProgressCircular]
})
export default class BtRemote extends Vue {
    @Prop({type: String as PropType<string|null>, default: null}) public url!: string|null;
    @Prop({type: String as PropType<string|null>, default: null}) public endpoint!: string|null;
    @Prop({type: String as PropType<string|null>, default: null}) public model!: string|null;
    @Prop({type: String as PropType<HttpMethod>, default: HttpMethod.GET, transform: (value) => ensureInEnum(value, HttpMethod, HttpMethod.GET)}) public method!: HttpMethod;
    @Prop({type: Object as PropType<Record<string, Primitive>>, default: {}}) public urlParams!: Record<string, Primitive>;
    @Prop({type: Object as PropType<Record<string, Primitive>>, default: {}}) public headers!: Record<string, Primitive>;

    @Expose() public response: HttpResponse<any>|null = null;
    @Expose() public bag: any = {};

    @Computed() public get waiting(): boolean { return this.response === null }
    @Computed() public get fetching(): boolean { return this.response !== null && this.response.status === HttpResponseStatus.Pending }
    @Computed() public get error(): boolean { return this.response !== null && this.response.status === HttpResponseStatus.Error }
    @Computed() public get ready(): boolean { return this.response !== null && this.response.status === HttpResponseStatus.Success }

    private remote: RemoteModule = new RemoteModule();

    /**
     * Try to fetch remote data if available.
     */
    @Expose() public update(): void {
        if (!this.remote.isApplicable) {
            this.response = null;
        } else {
            this.response = this.remote.send();
            this.response.promise.finally(() => {
                this.$forceUpdateComputed();
            });
        }
    }

    @Watch(['url', 'endpoint', 'method', 'model', 'urlParams', 'headers'], {immediate: ImmediateStrategy.BeforeMount | ImmediateStrategy.SsrPrefetch, deep: true})
    private syncConfigurationProps(): void {
        this.remote.updateConfiguration({
            url: this.url,
            endpoint: this.endpoint,
            method: this.method,
            urlParams: this.urlParams,
            headers: this.headers,
            model: this.model
        });
        this.update();
    }
}
</script>
