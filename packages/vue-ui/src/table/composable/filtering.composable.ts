import { FilteringModule } from "@banquette/ui/table/filtering/filtering.module";
import { Primitive } from "@banquette/utils-type/types";
import { Composable } from "@banquette/vue-typescript/decorator/composable.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";

@Composable()
export class FilteringComposable {
    /**
     * @see FilteringModule
     */
    @Prop({type: Object, default: {}}) public filters!: Record<string, Primitive>;

    /**
     * The actual module instance.
     */
    public module!: FilteringModule;

    @Watch('filters', {immediate: ImmediateStrategy.NextTick})
    protected syncPaginationConfigurationProps(): void {
        this.module.filters = this.filters;
    }
}
