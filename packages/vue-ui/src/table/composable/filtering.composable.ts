import { FilteringModule } from "@banquette/ui";
import { Primitive } from "@banquette/utils-type";
import { Composable, Prop, Watch, ImmediateStrategy } from "@banquette/vue-typescript";
import { PropType } from "vue";

@Composable()
export class FilteringComposable {
    /**
     * @see FilteringModule
     */
    @Prop({type: Object as PropType<Record<string, Primitive>>, default: {}}) public filters!: Record<string, Primitive>;
    @Prop({type: [Boolean, String] as PropType<boolean|'auto'>, default: 'auto'}) public remote!: boolean|'auto';

    /**
     * The actual module instance.
     */
    public module!: FilteringModule;

    public dispose(): void {
        this.module.dispose();
    }

    @Watch(['filters', 'remote'], {immediate: ImmediateStrategy.NextTick})
    protected syncPaginationConfigurationProps(): void {
        this.module.updateFilters(this.filters);
        this.module.remote = this.remote;
    }
}
