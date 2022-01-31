import { ChoicesSearchModule } from "@banquette/form/view-model/module/choices-search/choices-search.module";
import { SearchType } from "@banquette/form/view-model/module/choices-search/constant";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { Composable } from "@banquette/vue-typescript/decorator/composable.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";

/**
 * VueJS bridge to ChoicesSearchModule.
 */
@Composable()
export class ChoicesSearchComposable {
    /**
     * @see ChoicesSearchModule
     */
    @Prop({type: String, validate: (value: any) => ensureInEnum(value, SearchType, null as any) }) public type!: SearchType|null;
    @Prop({type: [String, Array], default: 'search'}) public remoteParamName!: string|string[];
    @Prop({type: Number, default: 1}) public minLength!: number;
    @Prop({type: Number, default: 2000}) public virtualBufferClearDelay!: number;

    /**
     * The actual module instance.
     */
    public module!: ChoicesSearchModule;

    @Watch(['searchType', 'searchRemoteParamName', 'searchMinLength'], {immediate: ImmediateStrategy.NextTick})
    private syncConfigurationProps(): void {
        this.module.type = this.type;
        this.module.minLength = this.minLength;
        this.module.remoteParamName = this.remoteParamName;
        this.module.virtualBufferClearDelay = this.virtualBufferClearDelay;
    }
}
